module.exports = function (success, error) {
  if(typeof error !== 'function') {
    error = () => {
      console.log('連接失敗')
    }
  }

  const  mongoose = require('mongoose');
  const {DBHOST, DBPORT, DBNAME} = require('../config/config');

  mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

  mongoose.connection.once('open', () => {
    success();
  })
  mongoose.connection.on('error', () => {
    error();
  })
  mongoose.connection.on('close', () => {
    console.log('關閉連接 mongodb');
  })
  
}