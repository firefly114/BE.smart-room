
module.exports = (route) => async (req, res, next) => {
  try {
    const response = await route(req, res, next);
    return res.status(response.status).json(response.result);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
