const AuthRequests = (api) => {
  const facebookLogin = (payload) => api.post("/facebook-signup", payload);
  return { facebookLogin };
};

export { AuthRequests };
