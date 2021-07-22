const mongoDb = require('mongodb');
let db;
const mongoDbConnection = (cb) => {
  mongoDb.MongoClient.connect('mongodb://localhost:27017/shop')
    .then((result) => {
      console.log('Mongodb is connected');
      db = result.db();
      cb();
    })
    .catch((err) => {
      console.log(err);
    });
};
const getData = () => {
  if (db) {
    return db;
  }
  throw 'result not found';
};
module.exports = { mongoDbConnection, getData };
