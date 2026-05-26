import { createContext, useContext, useState, useCallback } from "react";

const AuthContext = createContext(null);

// ── Mock user (replace with real API calls) ───────────────────────────────────
const MOCK_USER = {
  id:    1,
  name:  "Ruwan Perera",
  email: "ruwan@arch.lk",
  role:  "architect",
};

export function AuthProvider({ children }) {
  const [user, setUser]   = useState(null);
  const [token, setToken] = useState(
    () => localStorage.getItem("sa_access_token") || null
  );

  const login = useCallback((accessToken, refreshToken, userData) => {
    localStorage.setItem("sa_access_token",  accessToken);
    localStorage.setItem("sa_refresh_token", refreshToken);
    setToken(accessToken);
    setUser(userData);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("sa_access_token");
    localStorage.removeItem("sa_refresh_token");
    setToken(null);
    setUser(null);
  }, []);

  // Mock login for UI demo — swap with real API call in auth_service
  const mockLogin = useCallback((email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const fakeToken = "mock_token_" + Date.now();
        login(fakeToken, fakeToken + "_refresh", MOCK_USER);
        resolve({ success: true, user: MOCK_USER });
      }, 1000);
    });
  }, [login]);

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, login, logout, mockLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
