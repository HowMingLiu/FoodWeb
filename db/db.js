module.exports = function (success, error) {
  if(typeof error !== 'function') {
    error = () => {
      console.log('連接失敗')
    }
  }
  const uri = "mongodb+srv://root:root123@mycluster.othjuo7.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster"
  const  mongoose = require('mongoose');

  mongoose.connect(uri);

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