import re
import jwt
import uuid
from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
from config import Config
from dao.User_dao import UserDAO
from dto.UserLoginDTO import UserLoginDTO
from dto.UserRegisterDTO import UserRegisterDTO
from dto.ForgotPasswordDTO import ForgotPasswordDTO
from dto.ResetPasswordDTO import ResetPasswordDTO

class UserService:
    @staticmethod
    def register_user(data: dict):
        dto = UserRegisterDTO(data)
        validation_error = dto.validate()
        if validation_error:
            return {"success": False, "error": validation_error}, 400

        if UserDAO.email_exists(dto.email):
            return {"success": False, "error": "Email is already registered."}, 400

        password_hash = generate_password_hash(dto.password)

        new_user = UserDAO.create_user(
            full_name=dto.full_name,
            email=dto.email,
            role=dto.role,
            password_hash=password_hash
        )
        UserDAO.save_user()

        return {"success": True, "message": "User registered successfully.", "user": new_user.to_dict()}, 201

    @staticmethod
    def login_user(data: dict):
        dto = UserLoginDTO(data)
        validation_error = dto.validate()
        if validation_error:
            return {"success": False, "error": validation_error}, 400

        user = UserDAO.get_user_by_email(dto.email)
        if not user or not check_password_hash(user.password_hash, dto.password):
            return {"success": False, "error": "Invalid email or password."}, 401

        user.last_login_at = datetime.utcnow()
        UserDAO.save_user()

        # JWT Token generate කිරීම (Config.JWT_SECRET මගින් .env හි ඇති කී එක කියවයි)
        token = jwt.encode({
            "user_id": user.id,
            "role": user.role,
            "exp": datetime.utcnow() + timedelta(days=Config.JWT_EXPIRE_DAYS)
        }, Config.JWT_SECRET, algorithm=Config.JWT_ALGORITHM)

        return {
            "success": True,
            "token": token,
            "user": user.to_dict()
        }, 200

    @staticmethod
    def forgot_password(data: dict):
        dto = ForgotPasswordDTO(data)
        validation_error = dto.validate()
        if validation_error:
            return {"success": False, "error": validation_error}, 400

        user = UserDAO.get_user_by_email(dto.email)
        if not user:
            return {"success": False, "error": "No account found with this email."}, 404

        token = str(uuid.uuid4())
        user.reset_token = token
        user.reset_token_expires_at = datetime.utcnow() + timedelta(hours=1)
        UserDAO.save_user()

        return {
            "success": True,
            "message": "Password reset token generated successfully.",
            "reset_token": token
        }, 200

    @staticmethod
    def reset_password(data: dict):
        dto = ResetPasswordDTO(data)
        validation_error = dto.validate()
        if validation_error:
            return {"success": False, "error": validation_error}, 400

        user = UserDAO.get_by_reset_token(dto.reset_token)
        if not user or user.reset_token_expires_at < datetime.utcnow():
            return {"success": False, "error": "Invalid or expired reset token."}, 400

        user.password_hash = generate_password_hash(dto.new_password)
        user.reset_token = None
        user.reset_token_expires_at = None
        UserDAO.save_user()

        return {"success": True, "message": "Password has been reset successfully."}, 200