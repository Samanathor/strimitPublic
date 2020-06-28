const AuthRequests = (api) => {
  const facebookLogin = (payload) => api.post("/facebook-signup", payload);
  const googleLogin = (payload) => api.post("/google-signup", payload);
  const normalLogin = (payload) => api.post("/login", payload);
  const register = (payload) => api.post("/signup", payload);
  return { facebookLogin, googleLogin, normalLogin, register };
};

export { AuthRequests };
