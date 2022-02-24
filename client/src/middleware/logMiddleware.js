const logMiddleware = (store) => (next) => (action) => {
  console.log('je suis logMiddleware, j\'ai intercepté une action', action);
  next(action);
};

export default logMiddleware;