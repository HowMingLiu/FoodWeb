import { starMove } from './starMove.js'
import { nowPage } from './pagenation.js';
import { setTable } from './table.js';
import { APIURL } from "./APIconfig.js";
// 將菜單加入購物車
// 參數：
//    shoppingCartData  購物車內的商品
//    dataTemp          購物車使用，此為當前畫面對應的 card

export function addCart(shoppingCartData, dataTemp) {
  // 整個卡片
  let oCard = document.querySelector(".sectionCard .content .card"); 
  // 購物車圖示右上角的數字
  let oCart = document.querySelector(".sectionCard .top .shoppingCart span");
  // 當有購物車有初始資料時
  if(shoppingCartData.length){
    oCart.style.display = "block";
    let cartImgCount = 0;
    shoppingCartData.forEach(item => {
      if(item.count){
        cartImgCount += item.count;
      } else {
        cartImgCount++;
      }
    })
    oCart.innerHTML = cartImgCount;
  }
  // 添加點擊事件 - 將商品加入購
  oCard.onclick = function(e){
    // 判斷是否有登入
    if(!document.cookie.split("=")[1]){
      let loginReply = confirm("登入後即可操作");
      if(loginReply){
        window.location.replace(`${APIURL}/account/login`);
      }else {
        return;
      }
    }

    let aDivs = oCard.querySelectorAll(".sectionCard .content .card>div");
    for(let i = 0; i < aDivs.length; i++){
      aDivs[i].index = i
    } 
    let target = e.target;
    // 預期 x 為 div.card 元素
    let x = target.parentNode.parentNode.parentNode;
    if(x.tagName.toLowerCase() == "div" && x.className.toLowerCase() == "card"){
      // 預期 y 為每個卡片的 index
      let y = target.parentNode.parentNode.index;
      // console.log('當前畫面菜單',dataTemp); // 印出當前畫面的菜單
      let  dataTemp2 = JSON.parse(JSON.stringify(dataTemp));// 深拷貝，避免動到原始資料
      shoppingCartData.push(dataTemp2[y + ((nowPage - 1) * 6)]);
      // 購物車右上角的數量
      oCart.style.display = "block";
      let cartImgCount = 0;
      shoppingCartData.forEach(item => {
        if(item.count){
          cartImgCount += item.count;
        } else {
          cartImgCount++;
        }
      })
      oCart.innerHTML = cartImgCount;

      // 添加動畫
      let animateCard = target.parentNode.parentNode.querySelector("img").cloneNode(true);
      oCard.appendChild(animateCard);
      // 取得購物車小圖示的座標
      let oCartImgLeft = oCartImg.offsetLeft + oCartImg.parentNode.offsetLeft
      let oCartImgTop = oCartImg.offsetTop + oCartImg.parentNode.offsetTop

      // 設置新添加的圖片初始位置與原圖片位置相同
      animateCard.style.position = "absolute"
      animateCard.style.left = target.parentNode.parentNode.offsetLeft + "px"
      animateCard.style.top = target.parentNode.parentNode.offsetTop + "px"
      animateCard.style.width = "150px"
      animateCard.style.height = "150px"
      animateCard.style.borderRadius = "750px"
      starMove(animateCard, {
        width: 20,
        height: 20,
        left: oCartImgLeft,
        top: oCartImgTop,
      }, function(){
        // 刪除添加的照片
        animateCard.parentNode.removeChild(animateCard);
        starMove(oCartImg, {
          padding: 2
        }, function(){
          starMove(oCartImg, {
            padding: 0
          })
        })
      })
    }
  }
  // 開啟購物車
  // oCartImg 購物車圖片
  let oCartImg = document.querySelector(".sectionCard .top .shoppingCart img");
  let oNav = document.querySelector(".sectionCard .content nav");
  let oTable = document.querySelector(".sectionCard .content table");
  oCartImg.onclick = function(){
    if(oCart.innerHTML){
      // 切換 card 和 購物車列表 顯示
      if(oCard.style.display == "none"){
        oCard.style.display = "flex";
        oNav.style.display = "flex";
        oTable.style.display = "none";
      }else{
        // 製作 table
        setTable(oTable, shoppingCartData);

        oCard.style.display = "none";
        oNav.style.display = "none";
        oTable.style.display = "block";
      }
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
  }
}