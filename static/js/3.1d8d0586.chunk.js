(this["webpackJsonpmovies-project"]=this["webpackJsonpmovies-project"]||[]).push([[3],{12:function(t,e,n){t.exports={cards:"style_cards__3NhpE"}},13:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function i(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(s){c=!0,i=s}finally{try{r||null==o.return||o.return()}finally{if(c)throw i}}return n}}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(e);var u=n(1),d=n(0),j=function(t){var e=t.alert,n=void 0===e?"":e,r=l(Object(u.useState)([]),2),c=r[0],a=r[1];return Object(u.useEffect)((function(){var t={text:n,id:Math.floor(100*Math.random())};a([].concat(i(c),[t]))}),[n]),Object(u.useEffect)((function(){var t=setTimeout((function(){a([])}),3e3);return function(){clearTimeout(t)}}),[c]),Object(d.jsx)("div",{className:"toast-container",children:c?c.map((function(t){return Object(d.jsx)("div",{className:"toast",children:t.text},t.id)})):""})},m=n(3),b=n(12),p=n.n(b),f=function(t){var e=t.mainId,n=t.displayName,r=t.price.finalPrice,c=l(t.displayAssets,1)[0].url,i=t.displayDescription,a=t.addToCart,o=void 0===a?Function.prototype:a;return Object(d.jsxs)("div",{className:"card",id:e,children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("img",{src:c,alt:n})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsx)("span",{className:"card-title",children:n}),Object(d.jsx)("p",{children:i})]}),Object(d.jsxs)("div",{className:"card-action",children:[Object(d.jsx)("button",{className:"btn grey darken-2",onClick:function(){return o({id:e,name:n,price:r})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(d.jsxs)("span",{className:"right",style:{fontSize:"1.5rem"},children:[r," ",Object(d.jsx)("small",{children:"\u0433\u0440\u043d."})]})]})]})},y=function(t){var e=t.goods,n=void 0===e?[]:e,r=t.addToCart,c=void 0===r?Function.prototype:r;return Object(d.jsx)("div",{className:p.a.cards,children:n.length?n.map((function(t){return Object(d.jsx)(f,s(s({},t),{},{addToCart:c}),t.mainId)})):Object(d.jsx)("h4",{children:"Nothing "})})},h=("https://www.omdbapi.com/?apikey=".concat("ec27679d"),function(t){var e=t.id,n=t.name,r=t.price,c=t.quantity,i=t.removeFromCart,a=void 0===i?Function.prototype:i,o=t.incQuantity,s=void 0===o?Function.prototype:o,l=t.decQuantity,u=void 0===l?Function.prototype:l;return Object(d.jsxs)("li",{className:"collection-item",children:[Object(d.jsx)("span",{className:"td-title",children:n}),Object(d.jsxs)("div",{className:"td-quantity",children:[Object(d.jsx)("span",{className:"qty-btn minus material-icons",onClick:function(){return u(e)},children:"remove"}),Object(d.jsx)("span",{className:"qty-item",children:c}),Object(d.jsx)("span",{className:"qty-btn material-icons",onClick:function(){return s(e)},children:"add"})," ","\u0448\u0442."]}),Object(d.jsxs)("span",{className:"td-sum",children:[r*c," \u0433\u0440\u043d."]}),Object(d.jsx)("span",{className:"td-del",onClick:function(){return a(e)},children:Object(d.jsx)("i",{className:"material-icons",children:"delete"})})]})}),O=function(t){var e=t.order,n=void 0===e?[]:e,r=t.handleCartShow,c=void 0===r?Function.prototype:r,i=t.removeFromCart,a=void 0===i?Function.prototype:i,o=t.incQuantity,l=void 0===o?Function.prototype:o,u=t.decQuantity,j=void 0===u?Function.prototype:u,m=n.reduce((function(t,e){return t+e.price*e.quantity}),0);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"cart-popup modal show",children:Object(d.jsxs)("div",{className:"modal-content",children:[Object(d.jsx)("span",{className:"close",onClick:c,children:Object(d.jsx)("i",{className:"material-icons",children:"close"})}),Object(d.jsx)("h4",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),n.length?Object(d.jsxs)("ul",{className:"collection",children:[n.map((function(t){return Object(d.jsx)(h,s(s({},t),{},{removeFromCart:a,incQuantity:l,decQuantity:j}),t.id)})),Object(d.jsxs)("li",{className:"collection-item active grey darken-2 flow-text",children:[Object(d.jsx)("span",{className:"td-title",children:Object(d.jsx)("strong",{children:"\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430:"})}),Object(d.jsxs)("span",{className:"td-sum",children:[m," \u0433\u0440\u043d."]})]})]}):Object(d.jsx)("p",{className:"text-center",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"})]})}),Object(d.jsx)("div",{className:"modal-overlay"})]})},v=function(t){var e=t.order,n=t.removeFromCart,r=void 0===n?Function.prototype:n,c=t.incQuantity,i=void 0===c?Function.prototype:c,a=t.decQuantity,o=void 0===a?Function.prototype:a,s=e.length,j=l(Object(u.useState)(!1),2),m=j[0],b=j[1],p=function(){b(!m)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"cart grey darken-3",onClick:p,children:[Object(d.jsx)("i",{className:"material-icons",children:"shopping_basket"}),s?Object(d.jsx)("small",{className:"quantity",children:s}):null]}),m&&Object(d.jsx)(O,{order:e,handleCartShow:p,removeFromCart:r,incQuantity:i,decQuantity:o})]})};e.default=function(){var t=l(Object(u.useState)([]),2),e=t[0],n=t[1],r=l(Object(u.useState)(!0),2),c=r[0],a=r[1],o=l(Object(u.useState)([]),2),b=o[0],p=o[1],f=l(Object(u.useState)(!1),2),h=f[0],O=f[1],x=l(Object(u.useState)(""),2),N=x[0],g=x[1];return Object(u.useEffect)((function(t){fetch("https://fortniteapi.io/v2/shop?lang=ru",{headers:{Authorization:"637b5e65-37b70c11-9ca171ae-989095c8"}}).then((function(t){return t.json()})).then((function(t){t.shop&&n(t.shop),a(!1)}))}),[]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(v,{order:b,handleCartShow:function(){O(!h)},removeFromCart:function(t){var e=b.filter((function(e){return e.id!==t}));p(e)},incQuantity:function(t){var e=b.map((function(e){return e.id===t?s(s({},e),{},{quantity:e.quantity+1}):e}));p(e)},decQuantity:function(t){var e=b.map((function(e){return e.id===t&&e.quantity>1?s(s({},e),{},{quantity:e.quantity-1}):e}));p(e)}}),N&&Object(d.jsx)(j,{alert:N}),c?Object(d.jsx)(m.a,{}):Object(d.jsx)(y,{goods:e,addToCart:function(t){var e=b.findIndex((function(e){return e.id===t.id}));if(e<0){var n=s(s({},t),{},{quantity:1});p([].concat(i(b),[n]))}else{var r=b.map((function(t,n){return n===e?s(s({},t),{},{quantity:t.quantity+1}):t}));p(r)}g('\u0422\u043e\u0432\u0430\u0440 "'.concat(t.name,'" \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443'))}})]})}}}]);
//# sourceMappingURL=3.1d8d0586.chunk.js.map