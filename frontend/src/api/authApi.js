/**
 * SmartArch — Auth API
 * Calls to /api/auth/* endpoints.
 */

import client from "./client.js";

export const authApi = {
  /**
   * Register a new architect.
   * @param {{ name, email, password }} data
   */
  register: (data) =>
    client.post("/api/auth/register", data).then((r) => r.data),

  /**
   * Login an architect.
   * @param {{ email, password }} data
   * @returns {{ success, access_token, refresh_token, user }}
   */
  login: (data) =>
    client.post("/api/auth/login", data).then((r) => r.data),

  /**
   * Refresh access token.
   * @param {string} refreshToken
   */
  refresh: (refreshToken) =>
    client.post("/api/auth/refresh", { refresh_token: refreshToken }).then((r) => r.data),

  /**
   * Get the current logged-in user.
   */
  me: () =>
    client.get("/api/auth/me").then((r) => r.data),

  /**
   * Logout (client-side — invalidates stored tokens).
   */
  logout: () =>
    client.post("/api/auth/logout").then((r) => r.data),
};
