module.exports.handleError = function (res, error) {
  res.status(500).json({error: error.message || error});
};