var mongoose = require("mongoose");
var faker = require("faker");
var locName = require("./seed-data.js");
var getRandomInt = require("./seed-data.js");
var resTime = require("./seed-data.js");
var joinBy = require("./seed-data.js");

mongoose.connect("mongodb://localhost/hostinfo", {
  useNewUrlParser: true,
  useCreateIndex: true
});

var hostInfoSchema = new mongoose.Schema({
  name: String,
  image: String,
  locationName: String,
  responseRate: Number,
  responseTime: String,
  joinedby: String
});

const HostInfo = mongoose.model("HostInfo", hostInfoSchema);

module.exports = HostInfo;

const generateHostInfo = () => {
  for (let num = 1; num < 101; num++) {
    const hostList = new HostInfo({
      name: faker.name.findName(),
      image: faker.image.avatar(),
      locationName: locName[getRandomInt(0, 7)],
      responseRate: getRandomInt(80, 100),
      responseTime: resTime[getRandomInt(0, 4)],
      joinedby: joinBy[getRandomInt(0, 15)]
    });

    hostList.save(err => {
      if (err) {
        console.log("failed to save the listing to database ", err);
      } else {
        console.log("saved a listing to the database");
      }
    });
  }
};


//UNCOMMENT TO GENERATE NEW DATA
// generateHostInfo();

module.exports = generateHostInfo;
module.exports = HostInfo;
