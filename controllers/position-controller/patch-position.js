const {handleError} = require('../../utils');
const {Collections} = require('../../constants');
const Position = require('mongoose').model(Collections.POSITIONS);

module.exports.patchPosition = async function (req, res) {
  try {
    const position = await Position.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new: true});
    res.status(200).json(position);
  } catch (error) {
    handleError(res, error);
  }
};