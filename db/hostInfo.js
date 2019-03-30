var mongoose = require("mongoose");

var hostInfoSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  name: String,
  image: String,
  locationName: String,
  responseRate: Number,
  responseTime: String,
  joinedby: String
});

var HostInfoModel = mongoose.model("HostInfo", hostInfoSchema);

// findAll retrieves all HostInfo
function findAll(callback) {
  HostInfoModel.find({}).exec(callback);
}

// findOne will retrieve the HostInfo details associated with the given id
function findOne(id, callback) {
  HostInfoModel.find({ id: id }, callback);
}

// insertOne inserts a HostInfo into the db
function insertOne(hostInfo, callback) {
  HostInfoModel.create(hostInfo, callback);
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;
