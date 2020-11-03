module.exports = (status, data = {}) => {
  if (status === 400) {
    return {
      status,
      result: {
        status: false,
        errors: data,
      },
    };
  }
  return {
    status,
    result: {
      status: true,
      data,
    },
  };
};
