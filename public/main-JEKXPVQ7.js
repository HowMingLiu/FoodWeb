import{b,h as w,i as k,j as S,k as E,l as F,m as T,n as D}from"./chunk-SDRA6SED.js";import{Ka as s,Na as t,Oa as n,Pa as l,Sa as x,U as O,Va as g,X as C,Ya as i,Za as v,_a as y,db as _,ea as p,eb as f,fa as u,fb as P,va as c}from"./chunk-L3FOYHIV.js";var L=[{path:"home",loadComponent:()=>import("./chunk-PIK4EA5Z.js").then(e=>e.HomeComponent)},{path:"orderPage",loadComponent:()=>import("./chunk-QCSSO2YN.js").then(e=>e.OrderPageComponent)},{path:"auth",loadComponent:()=>import("./chunk-QT7D5S5Z.js").then(e=>e.AuthComponent)},{path:"",redirectTo:"/home",pathMatch:"full"},{path:"**",loadComponent:()=>import("./chunk-CXJUVPRN.js").then(e=>e.NotFoundComponent)}];var V={providers:[D(L),k()]};var z=e=>({black:e}),M=()=>["/home"],j=e=>({flex:e}),H=()=>["/orderPage"],R=(()=>{let o=class o{constructor(){this.router=O(F),this.activatedRoute=O(S),this.topMenuStatus=!1,this.loginStatus=!1}ngOnInit(){}ngDoCheck(){localStorage.getItem("username")&&(this.loginStatus=!0)}goHeader(){window.scrollTo({top:0,behavior:"smooth"})}goSecret(){setTimeout(()=>{window.scrollTo({top:357,behavior:"smooth"})},100)}goChef(){setTimeout(()=>{window.scrollTo({top:985,behavior:"smooth"})},100)}goAddress(){setTimeout(()=>{window.scrollTo({top:1752,behavior:"smooth"})},100)}logout(){if(this.loginStatus==!0)if(confirm("\u60A8\u662F\u5426\u8981\u767B\u51FA"))localStorage.removeItem("username"),localStorage.removeItem("password"),this.loginStatus=!1,this.router.navigate(["home"]);else return;else this.router.navigate(["auth"])}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=C({type:o,selectors:[["app-layout-top"]],standalone:!0,features:[_],decls:32,vars:17,consts:[["header",""],[1,"header"],[1,"logo",3,"ngClass"],[3,"click","routerLink"],["src","/assets/images/logo_w@svg.svg"],[3,"ngClass"],[3,"routerLink"],[3,"click"],[1,"menu",3,"click"],["src","/assets/images/menu-svgrepo-com.svg"],[1,"text"]],template:function(r,a){if(r&1){let m=x();t(0,"div",1,0)(2,"div",2)(3,"a",3),g("click",function(){return p(m),u(a.goHeader())}),l(4,"img",4),n(),t(5,"ul",5)(6,"li")(7,"a",3),g("click",function(){return p(m),u(a.goSecret())}),i(8,"\u7279\u8272"),n()(),t(9,"li")(10,"a",3),g("click",function(){return p(m),u(a.goChef())}),i(11,"\u4E3B\u5EDA"),n()(),t(12,"li")(13,"a",3),g("click",function(){return p(m),u(a.goAddress())}),i(14,"\u5730\u5716"),n()(),t(15,"li")(16,"a",6),i(17,"\u8A02\u9910"),n()(),t(18,"li")(19,"a",7),g("click",function(){return p(m),u(a.logout())}),i(20),n()()(),t(21,"div",8),g("click",function(){return p(m),u(a.topMenuStatus=!a.topMenuStatus)}),l(22,"img",9),n()(),t(23,"div",10)(24,"h1")(25,"span"),i(26,"\u54AC\u4E00\u53E3"),n(),i(27,"\u5C31\u7121\u6CD5\u5FD8\u61F7\u7684\u6F22\u5821"),n(),t(28,"p"),i(29," \u4E03\u5915\u7D55\u5C0D\u7121\u6CD5\u932F\u904E\u7684\u597D\u6ECB\u5473"),l(30,"br"),i(31," \u516D\u89D2\u5927\u6F22\u5821 "),n()()()}r&2&&(c(2),s("ngClass",P(8,z,a.topMenuStatus)),c(),s("routerLink",f(10,M)),c(2),s("ngClass",P(11,j,a.topMenuStatus)),c(2),s("routerLink",f(13,M)),c(3),s("routerLink",f(14,M)),c(3),s("routerLink",f(15,M)),c(3),s("routerLink",f(16,H)),c(4),v(a.loginStatus?"\u767B\u51FA":"\u767B\u5165"))},dependencies:[b,T],styles:[".header[_ngcontent-%COMP%]{background:url(/assets/images/header_desktop.png);background-size:cover;background-position:50%;height:420px}@media (max-width: 375px){.header[_ngcontent-%COMP%]{background:url(/assets/images/header_mobile.png);background-position:50%}}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{background:#00000059;display:flex;justify-content:space-between;align-items:center;padding:16px 42px;margin:0 auto;position:fixed;z-index:3;max-width:1024px;width:100%}@media (max-width: 768px){.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:13px 15px}.header[_ngcontent-%COMP%]   .logo.black[_ngcontent-%COMP%]{background-color:#000}}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{text-align:center}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-size:24px;margin-left:20px}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{display:none}.header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{background:#00000059;text-align:center;padding-top:67px}.header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:36px;color:#fff;margin-bottom:16px}@media (max-width: 768px){.header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{padding-top:100px}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:none;position:absolute;top:90px;right:0;left:0;background-color:#000;padding:10px 0;border-top:2px dashed white;border-bottom:2px dashed white}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   ul.flex[_ngcontent-%COMP%]{display:flex}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:33.33333%}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{display:block;z-index:10}.header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}}.header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;line-height:1.5em}"]});let e=o;return e})();var B=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=C({type:o,selectors:[["app-layout-foot"]],standalone:!0,features:[_],decls:29,vars:1,consts:[[1,"footer"],[1,"describe"],[1,"about"],[1,"connect"],[1,"logo"],["src","/assets/images/logo_l@svg.svg"],["href","#"],["src","/assets/images/google-plus-logo-svgrepo-com.svg"],["src","/assets/images/twitter-svgrepo-com.svg"],["src","/assets/images/facebook-color-svgrepo-com.svg"]],template:function(r,a){r&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),i(4,"\u95DC\u65BC \u516D\u89D2\u897F\u9910\u5EF3"),n(),t(5,"p"),i(6,"Curabitur lobortis id lorem id bibndum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. "),n()(),t(7,"div",3)(8,"h2"),i(9,"\u806F\u7D61\u65B9\u5F0F"),n(),t(10,"ul")(11,"li"),i(12,"\u9AD8\u96C4\u5E02\u4E2D\u6B63\u4E94\u8DEF\u5230\u5E95"),n(),t(13,"li"),i(14,"+886 886 886"),n(),t(15,"li"),i(16),n()()()(),t(17,"div",4),l(18,"img",5),t(19,"ul")(20,"li")(21,"a",6),l(22,"img",7),n()(),t(23,"li")(24,"a",6),l(25,"img",8),n()(),t(26,"li")(27,"a",6),l(28,"img",9),n()()()()()),r&2&&(c(16),y("service","@hexschool",".com"))},styles:[".footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:54px 42px;background-color:#faeae5}@media (max-width:375px){.footer[_ngcontent-%COMP%]{display:block;padding:54px 12px}}.footer[_ngcontent-%COMP%]   .describe[_ngcontent-%COMP%]{display:flex}.footer[_ngcontent-%COMP%]   .describe[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;color:#3d1101;margin-bottom:16px}.footer[_ngcontent-%COMP%]   .describe[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]{max-width:300px}.footer[_ngcontent-%COMP%]   .describe[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#3d1101}.footer[_ngcontent-%COMP%]   .describe[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%]{margin-left:20px}.footer[_ngcontent-%COMP%]   .describe[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#3d1101;list-style:disc;margin-left:1em}@media (max-width:768px){.footer[_ngcontent-%COMP%]   .describe[_ngcontent-%COMP%]{display:block}.footer[_ngcontent-%COMP%]   .describe[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%]{margin:30px 0}}.footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:end;align-items:center}.footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:24px;height:24px;margin-left:10px}@media (max-width:768px){.footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{text-align:end}}"]});let e=o;return e})();var I=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=C({type:o,selectors:[["app-root"]],standalone:!0,features:[_],decls:4,vars:0,consts:[[1,"wrap"]],template:function(r,a){r&1&&(t(0,"div",0),l(1,"app-layout-top")(2,"router-outlet")(3,"app-layout-foot"),n())},dependencies:[E,R,B],styles:[".wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 auto;max-width:1024px}"]});let e=o;return e})();w(I,V).catch(e=>console.error(e));