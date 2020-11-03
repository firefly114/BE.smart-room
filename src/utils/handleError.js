module.exports = (e) => {
  if (e instanceof TypeError) {
    throw e;
  }
  // eslint-disable-next-line no-console
  console.log(e);
  return require("./wrapResponse")(400, e.error || e.message);
};
