// 左側分類的選項 
// 參數：
//    data         所有菜單列表
//    dataOption   左側 option 的菜單
//    dataTemp     購物車使用，此為當前畫面對應的 card
import { navInit, allCardPage, contentInit, card, perPage } from './pagenation.js';

export function setOption(data, dataOption, dataTemp) {

  // 過濾薯條套餐的資料
  let dataFries = data.filter( item => {
    return item.title.includes("薯條");
  })
  // 過濾漢堡套餐的資料
  let dataHamburger = data.filter( item => {
    return item.title.includes("漢堡");
  })

  let oUl = document.querySelector(".cartDesktop ul");
  let oLis = oUl.getElementsByTagName("li");

  // option 的菜單數量
  oLis[0].innerHTML = `全部 (${data.length})`
  oLis[1].innerHTML = `只愛吃薯條 (${dataFries.length})`
  oLis[2].innerHTML = `不敗漢堡系列 (${dataHamburger.length})`

  // 切換 option
  oUl.onclick = function(e){
    let target = e.target;
    if(target.nodeName.toUpperCase() == "LI"){
      // 切換 card 和 購物車列表 顯示
      let oCard = document.querySelector(".sectionCard .content .card"); 
      let oNav = document.querySelector(".sectionCard .content nav");
      let oTable = document.querySelector(".sectionCard .content table");
      if(oCard.style.display == "none"){
        oCard.style.display = "flex";
        oNav.style.display = "flex";
        oTable.style.display = "none";
      }
      for(let i = 0; i < oLis.length; i++){
        oLis[i].index = i;
        oLis[i].className = "none";
      }
      target.className = "active"
    }
    // 判斷需要的資料
    if(target.index == 0){
      dataOption.length = 0;
      dataOption.push(...data);
    }else if(target.index == 1){
      dataOption.length = 0;
      dataOption.push(...dataFries);
    }else{
      dataOption.length = 0;
      dataOption.push(...dataHamburger);
    }

    // 購物車使用
    dataTemp.length = 0;
    dataTemp.push(...dataOption);

    // console.log('當前畫面菜單', dataTemp);

    // 呼叫分頁函式
    navInit(dataOption, perPage);
    allCardPage(dataOption, perPage);
    contentInit(card[0]);
  }
}