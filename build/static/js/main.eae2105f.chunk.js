(this.webpackJsonpkuants=this.webpackJsonpkuants||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(3),i=n.n(o),s=(n(9),n(4)),a=n(0);function l(e){var t=Object(c.useState)(null),n=Object(s.a)(t,2),r=n[0],o=n[1];return Object(a.jsxs)("div",{children:[Object(a.jsxs)("select",{style:{marginLeft:"45%"},onChange:function(e){e.preventDefault(),o(e.target.value)},children:[Object(a.jsx)("option",{selected:!0,disabled:!0,children:"-----select------"}),e.val.map((function(e){return Object(a.jsx)("option",{value:e.Counts,children:e.names})}))]}),Object(a.jsx)("h2",{style:{marginLeft:"48%"},children:r}),console.log(e.val)]})}var u=["Bigcorp","Bigcorp","Acme","Bigcorp","Zork","Zork","Abc","Bigcorp","Acme","Bigcorp","Bigcorp","Zork","Bigcorp","Zork","Zork","Bigcorp","Acme","Bigcorp","Acme","Bigcorp","Acme","Littlecorp","Nadircorp"];function g(){var e,t=[],n=1;u.sort();for(var c=0;c<u.length;c++){n=1;for(var r=c+1;r<u.length;r++)u[c]===u[r]&&n++;c+=n-1,n>.07*u.length&&(e={names:u[c],Counts:n},t.push(e))}return Object(a.jsx)("div",{children:Object(a.jsx)(l,{val:t})})}var j=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(g,{})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),p()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.eae2105f.chunk.js.map