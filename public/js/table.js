import { APIURL } from "./APIconfig.js";
// 產生結帳菜單列表
// 參數：
//    tableDOM          要操作的 dom
//    shoppingCartData  購物車內的商品
export function setTable(tableDOM, shoppingCartData){

  let tableData = dataOrg(shoppingCartData)
  // console.log('當前購買車清單', tableData);
  // 產生結帳菜單列表
  createTable(tableDOM, tableData);
  createBtn(tableDOM, tableData);

  let aBtns = tableDOM.getElementsByTagName("button");
  for(let i = 0; i < aBtns.length; i++){
    aBtns[i].index = i;
    if(i % 2 == 0){
      aBtns[i].onclick = function(e){
        tableData[i/2].count--;
        // 修改購物車
        for(let j = 0; j < shoppingCartData.length; j++){
          if(tableData[i/2].title == shoppingCartData[j].title){
            if(shoppingCartData[j].count == 0){
              shoppingCartData.splice(j, 1);
            }
            break;
          }
        }
        // 修改表格數量
        let oCount = tableDOM.querySelector(`.count${i/2}`)
        oCount.innerHTML = tableData[i/2].count;
        // 修改單品總價
        let oTotalPrice = tableDOM.querySelector(`.totalPrice${i/2}`)
        oTotalPrice.innerHTML = tableData[i/2].count * parseInt(tableData[i/2].price * tableData[i/2].discountOff);
        tableData[i/2].totalPrice = oTotalPrice.innerHTML;
        // 修改表格總金額
        let oTotal = tableDOM.querySelector(".total")
        oTotal.innerHTML = oTotal.innerHTML - parseInt(tableData[i/2].price * tableData[i/2].discountOff);
        // 當數量為 0 時隱藏表格
        if(oCount.innerHTML == 0){
          oCount.parentNode.style.display = "none";
        }
        // 購物車圖示右上角的數字
        let oCart = document.querySelector(".sectionCard .top .shoppingCart span");
        let oCard = document.querySelector(".sectionCard .content .card");
        let oNav = document.querySelector(".sectionCard .content nav");
        let oTable = document.querySelector(".sectionCard .content table");
        let cartImgCount = 0;
        shoppingCartData.forEach(item => {
          if(item.count){
            cartImgCount += item.count;
          } else {
            cartImgCount++;
          }
        })
        // 購物車沒資料時會跳回選菜單頁面
        oCart.innerHTML = cartImgCount;
        if(oCart.innerHTML == "0"){
          oCart.innerHTML = ""
          oCart.style.display = "none"
          oCard.style.display = "flex";
          oNav.style.display = "flex";
          oTable.style.display = "none";
          // 更新數據庫使用者的購物車
        let user = document.cookie.split("=")[1];
        fetch(`${APIURL}menu/${user}/shoppingCart`, {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(shoppingCartData)
          })
          .catch(err => {
            console.log(err);
          })
        }
        return tableData;
      }
    }else{
      aBtns[i].onclick = function(e){
        tableData[(i + 1) / 2 - 1].count++;

        // 修改數量
        let oCount = tableDOM.querySelector(`.count${(i + 1) / 2 - 1}`)
        oCount.innerHTML = tableData[(i + 1) / 2 - 1].count;
        // 修改單品總價
        let oTotalPrice = tableDOM.querySelector(`.totalPrice${(i + 1) / 2 - 1}`)
        oTotalPrice.innerHTML = tableData[(i + 1) / 2 - 1].count * parseInt(tableData[(i + 1) / 2 - 1].price * tableData[(i + 1) / 2 - 1].discountOff);
        tableData[(i + 1) / 2 - 1].totalPrice = oTotalPrice.innerHTML;
        // 修改表格總金額
        let oTotal = tableDOM.querySelector(".total")
        oTotal.innerHTML = parseInt(oTotal.innerHTML) + parseInt(tableData[(i + 1) / 2 - 1].price*tableData[(i + 1) / 2 - 1].discountOff);
        // 購物車圖示右上角的數字
        let oCart = document.querySelector(".sectionCard .top .shoppingCart span");
        let cartImgCount = 0;
        shoppingCartData.forEach(item => {
          if(item.count){
            cartImgCount += item.count;
          } else {
            cartImgCount++;
          }
        })
        oCart.innerHTML = cartImgCount;
        return tableData;
      }
    }
  }
}

// 整理購物車資料
function dataOrg(shoppingCartData){

  // 調整資料內容
  shoppingCartData.forEach(item => {
    if(!item.count){
      item.count = 1;
      delete item.engTitle;
      delete item.photoSrc;
      delete item._id;
    }
  })
  
  // 統計數量
  for(let i = 0; i < shoppingCartData.length; i++){
    for(let j = 0; j < shoppingCartData.length; j++){
      if(shoppingCartData[i].title == shoppingCartData[j].title && i != j){
        if(shoppingCartData[i].count){
          shoppingCartData[i].count += shoppingCartData[j].count;
          shoppingCartData[j].count = 0;
        }
      }
    }
  }

  // 篩選數量不為 0 的資料
  let dataShoppingCount = shoppingCartData.filter(item => item.count != 0);
  
  // 增加總價格屬性
  dataShoppingCount.forEach(item => {
    item.totalPrice = item.count * parseInt(item.price * item.discountOff);
  })

  // 排序列表
  dataShoppingCount.sort((x ,y) => {
    let a = x.title.slice(6);
    let b = y.title.slice(6);
    return a - b;
  })

  // 更新
  shoppingCartData.length = 0;
  shoppingCartData.push(...dataShoppingCount);

  // console.log('當前購物車列表', dataShoppingCount);
  // console.log('調整完', shoppingCartData);

  return dataShoppingCount;
}

// 建立表格內容
function createTable(tableDOM, tableData){
  tableDOM.innerHTML = `
    <tr>
      <th>品項</th>
      <th>數量</th>
      <th>單價</th>
      <th>總價</th>
      <th>修改</th>
    </tr>
  `
  let total =  0;
  tableData.forEach((item, index) => {
    let newTr =  document.createElement("tr");
    total += item.totalPrice;
    newTr.innerHTML = `
      <td>${item.title}</td>
      <td class="count${index}">${item.count}</td>
      <td>${parseInt(item.price * item.discountOff)}</td>
      <td class="totalPrice${index}">${item.totalPrice}</td>
    `
    tableDOM.appendChild(newTr)
  })
  
  let newTr =  document.createElement("tr");
  newTr.innerHTML = `
    <td></td>
    <td></td>
    <td></td>
    <td>總金額</td>
    <td class="total">${total}</td>
  `
  tableDOM.appendChild(newTr)
}

// 建立按鈕
function createBtn(tableDOM, tableData){
  tableData.forEach((item, index) => {
    let newTd = document.createElement("td");
    newTd.innerHTML = `
      <button>-</button>
      <button>+</button>
    `
    tableDOM.getElementsByTagName("tr")[index + 1].appendChild(newTd)
  })
}