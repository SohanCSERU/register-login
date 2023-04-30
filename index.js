const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./models/User");
db.role = require("./models/Role");


db.ROLES = ["user","admin","moderator"];

module.exports = db;