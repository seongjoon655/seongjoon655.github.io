(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(17),r=n.n(a),s=(n(78),n(64)),o=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,136)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))},l=n(32),j=n(55),d=n(21),h=n(54),b=[];var u=[];var O=Object(h.b)(Object(h.a)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"\uc218\ub7c9\uc99d\uac00":var n=t.payload,c=Object(d.a)(e),i=c.filter((function(e){return e.id===n.id}));return i.length>0&&i[0].quantity++,c;case"\uc218\ub7c9\uac10\uc18c":var a=t.payload,r=Object(d.a)(e),s=r.filter((function(e){return e.id===a.id}));return s.length>0&&s[0].quantity--,r;case"shoes-order":var o=t.payload,l=Object(d.a)(e),j=l.filter((function(e){return e.id===o.id}));return j.length>0?j[0].quantity++:l.push(o),l;default:return e}},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"banner_close"===t.type?e=!1:e},reducer3:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;if(t.type="add-vlist"){var n=t.payload;if(null===n||void 0===n)return e;var c=localStorage.getItem("vlist"),i=JSON.parse(c),a=null===i;if(a){var r=[].concat(b);return r.push(n.title),localStorage.setItem("vlist",JSON.stringify(r)),r}var s=Object(d.a)(i),o=s.filter((function(e){return e===n.title}));return 0==o.length&&s.push(n.title),localStorage.setItem("vlist",JSON.stringify(s)),s}return e}})),x=n(1);r.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(l.a,{children:Object(x.jsx)(j.a,{store:O,children:Object(x.jsx)(s.a,{})})})}),document.getElementById("root")),o()},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return g}));var c=n(21),i=n(4),a=(n.p,n(0)),r=n.n(a),s=n(118),o=n(116),l=n(119),j=n(117),d=n(70),h=(n(79),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}]),b=n(65),u=n.n(b),O=n(32),x=n(8),p=n(1),f=Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,135))})),v=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,138))})),g=r.a.createContext();function m(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"Wrap-Jumbotron",children:Object(p.jsxs)("div",{className:"Jumbotron",children:[Object(p.jsx)("h1",{children:"20% Season Off"}),Object(p.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(p.jsx)("p",{children:Object(p.jsx)(d.a,{variant:"primary",children:"Learn more"})})]})}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(g.Provider,{value:e.\uc7ac\uace0,children:Object(p.jsx)("div",{className:"row",children:e.shoes.map((function(e,t){return Object(p.jsx)(y,{item:e,index:t},t)}))})}),c?Object(p.jsx)(S,{}):null,Object(p.jsx)("button",{className:"btn btn-primary",onClick:function(){r(!0),u.a.get("https://codingapple1.github.io/shop/data2.json").then((function(t){console.log("\uc131\uacf5\ud588\uc5b4\uc694"),r(!1);var n=t.data;e.ajaxPush(n)})).catch((function(){console.log("\uc2e4\ud328\ud588\uc5b4\uc694")})).finally((function(){}))},children:"\ub354\ubcf4\uae30"})]})]})}function S(){return Object(p.jsx)("div",{children:"Now Loaing..."})}function y(e){Object(a.useContext)(g);var t=Object(x.f)(),n=e.item.id,c=e.item,i=e.index+1,r="https://codingapple1.github.io/shop/shoes".concat(i,".jpg");return Object(p.jsxs)("div",{className:"col-md-4",onClick:function(){t.push("/detail/"+n)},children:[Object(p.jsx)("img",{src:r,width:"100%"}),Object(p.jsx)("h4",{children:c.title}),Object(p.jsxs)("p",{children:[c.content," & ",c.price]})]})}t.a=function(){var e=Object(a.useState)(h),t=Object(i.a)(e,2),n=t[0],r=t[1],d=Object(a.useState)([10,11,12]),b=Object(i.a)(d,2),u=b[0],S=b[1],y=Object(a.useState)(["test1","test2","test3"]),N=Object(i.a)(y,2),k=N[0];return N[1],Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(s.a,{bg:"light",expand:"lg",children:Object(p.jsxs)(o.a,{children:[Object(p.jsx)(s.a.Brand,{href:"#home",children:"ShoeShop"}),Object(p.jsx)(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(s.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(l.a,{className:"me-auto",children:[Object(p.jsx)(l.a.Link,{as:O.b,to:"/",children:"Home"}),Object(p.jsx)(l.a.Link,{as:O.b,to:"/Detail/2",children:"Detail"}),Object(p.jsxs)(j.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(p.jsx)(j.a.Item,{href:"#action/3.1",children:"Action"}),Object(p.jsx)(j.a.Item,{href:"#action/3.2",children:"Another action"}),Object(p.jsx)(j.a.Item,{href:"#action/3.3",children:"Something"}),Object(p.jsx)(j.a.Divider,{}),Object(p.jsx)(j.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(p.jsxs)(x.c,{children:[Object(p.jsx)(x.a,{exact:!0,path:"/",children:Object(p.jsx)(m,{shoes:n,ajaxPush:function(e){var t=Object(c.a)(n);e.map((function(e,n){t.push(e)})),r(t)},"\uc7ac\uace0":u})}),Object(p.jsx)(x.a,{path:"/detail/:id",children:Object(p.jsx)(g.Provider,{value:k,children:Object(p.jsx)(a.Suspense,{fallback:Object(p.jsx)("div",{className:"Loading-box",children:"\ub85c\ub529\uc911\uc774\uc5d0\uc694"}),children:Object(p.jsx)(f,{shoes:n,"\uc7ac\uace0":u,"\uc7ac\uace0\ubcc0\uacbd":S})})})}),Object(p.jsx)(x.a,{path:"/cart",children:Object(p.jsx)(a.Suspense,{fallback:Object(p.jsx)("div",{className:"Loading-box",children:"\ub85c\ub529\uc911\uc774\uc5d0\uc694"}),children:Object(p.jsx)(v,{})})}),Object(p.jsx)(x.a,{path:"/:id",children:Object(p.jsx)("div",{children:"\uc544\ubb34\uac70\ub098 \uc801\uc5c8\uc744\ub54c \uc774\uac70 \ubcf4\uc5ec\uc8fc\uc148"})})]})]})}},78:function(e,t,n){},79:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.2b7ee04a.chunk.js.map