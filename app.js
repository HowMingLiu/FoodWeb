const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// API 路由
const menuRouterAPI = require('./routes/api/menu');
const accountRouterAPI = require('./routes/api/account');


const app = express();

// session 導入
const {DBURI} = require('./config/config');
const session = require('express-session');
const MongoStore = require('connect-mongo');
// session 設置
app.use(session({
  name: 'sid', // 設置響應 cookie 的 name，默認是 connect.sid
  secret: 'garry',  // 參與加密的字符串 (又稱簽名) 加嚴
  saveUninitialized: false, // 是否為每次的請求都設置一個 cookie 用來存儲 session 的 id
  resave: true, // 是否在每次請求時重新保存 session
  store: MongoStore.create({
    mongoUrl: DBURI // 數據庫連接配置
  }),
  cookie: {
    httpOnly: true, // 開啟後前端無法通過 JS 操作
    maxAge: 1000 * 60 * 60 * 24 * 7 // 控制 sessionID 的過期時間
  }
}))


// 設置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 設置 API 路由
app.use('/menu', menuRouterAPI);
app.use('/accountAPI', accountRouterAPI);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
