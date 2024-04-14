routes 資料夾：路由設定
- account：帳號相關功能 (登入、註冊、登出)
- menu:獲取資料 API (菜單，個人資訊)

public 資料夾： (Angular 打包後的檔案)

models 資料夾：MongoDB 文檔結構
- MenuModel
- UserModel

middlewares 資料夾：
- checkLoginMiddleware：檢查登入狀態，目前未用到

db 資料夾：MongoDB 連線設定
- db：設定連接 MongoDB

config 資料夾： mongodb 設置擋
- config：設定 mongodb 連線 url




