// 搜尋功能
// 參數：
//    dataOption   左側 option 的菜單
//    dataTemp     購物車使用，此為當前畫面對應的 card
import { navInit, allCardPage, contentInit, card, perPage } from './pagenation.js';

export function search(dataOption, dataTemp) {
  let oSearch = document.querySelector(".sectionCard .top #filterInput");
  oSearch.onchange = function(){
    // // 切換 card 和 購物車列表 顯示
    // if(oCard.style.display == "none"){
    //   oCard.style.display = "flex";
    //   oNav.style.display = "flex";
    //   oTable.style.display = "none";
    // }

    // 搜尋功能
    let keyWord = oSearch.value
    let dataFilter = dataOption.filter( item => {
      return item.title.includes(keyWord);
    })
    console.log('當前畫面菜單', dataFilter);
    // 購物車使用
    dataTemp.length = 0;
    dataTemp.push(...dataFilter);

    if(dataFilter.length != 0){
      // 呼叫分頁函式
      navInit(dataFilter, perPage);
      allCardPage(dataFilter, perPage);
      contentInit(card[0]);
    }else{
      alert("沒有符合的餐點名稱")
    }

    oSearch.value = '';
  }
}