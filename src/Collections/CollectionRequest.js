const CollectionRequests = (api) => {
  const sendCollection = (payload) => api.post("/group", payload);
  return { sendCollection };
};

export { CollectionRequests };
