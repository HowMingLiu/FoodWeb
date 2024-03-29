import { APIURL } from "./APIconfig.js";


// 首頁 menu 選項
let oMenu = document.querySelector(".menu");
let oUl = document.querySelector(".logo ul");
let oLogo = document.querySelector(".logo");

oMenu.onclick = function(){
  if(getStyle(oUl, "display") == "none"){
    oUl.style.display = "flex";
    oLogo.style.backgroundColor = "black";
  }else{
    oUl.style.display = "none";
    oLogo.style.backgroundColor = "rgba(0,0,0,0.35)"
  }
}

function getStyle(node, cssStyle){
  return node.currentStyle ? node.currentStyle[cssStyle] : getComputedStyle(node)[cssStyle];
}


// 登出按鈕提示
let oLogout = document.getElementById('logoutBtn');
if(oLogout){
  oLogout.onclick = function(e) {
    e.preventDefault();
    let reply = confirm("您是否要登出？");
      if(reply){
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
        window.location.replace(`${APIURL}account/logout`);
      }else {
        return;
      }
  }
}