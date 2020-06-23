const AuthRequests = (api) => {
  const facebookLogin = (payload) => api.post("/facebook-signup", payload);
  const googleLogin = (payload) => api.post("/google-login", payload);
  return { facebookLogin, googleLogin };
};

export { AuthRequests };
