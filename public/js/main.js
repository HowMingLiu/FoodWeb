import { setOption } from './option.js';
import { search } from './search.js';
import { addCart } from './addCart.js';
import { APIURL } from "../../config/APIconfig.js";

fetch(`${APIURL}menu`, {method: "GET"})
  .then(res => {
    return res.json();
  })
  .then(res => {
    let data = res.data;

    // 左側 option 使用
    let dataOption = [...data];
    // 購物車使用，此為當前畫面對應的 card
    let dataTemp = [...data];

    // 抓取使用者
    let user = document.cookie.split("=")[1];

    fetch(`${APIURL}menu/${user}`, {method: "GET"})
      .then(res => {
        return res.json();
      })
      .then(res => {
        // 購物車內的商品
        let shoppingCartData = res.data || [];  // 購物車內的商品
        // console.log(shoppingCartData);

        // 左側分類的選項
        setOption(data, dataOption, dataTemp);

        // 搜尋功能
        search(dataOption, dataTemp);

        // 將菜單加入購物車
        addCart(shoppingCartData, dataTemp);
      })
  })
  .catch(err => {
    console.log(err);
  })


