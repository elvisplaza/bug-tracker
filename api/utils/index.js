//this middleware wrapper will allow us apply many middle wares without listing them all in the server files

exports.applyMiddleware = (middlewareWrapper, router) => {
  for (const wrapper of middlewareWrapper) {
    wrapper(router);
  }
};
