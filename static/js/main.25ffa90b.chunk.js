(this["webpackJsonpreact-node-boilerplate"]=this["webpackJsonpreact-node-boilerplate"]||[]).push([[0],{24:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),i=n(16),r=n.n(i),l=n(2),d=(n(24),function(e){var t=e.handleSubmit,n=[{name:" Added Sugar"},{name:" Dairy"},{name:" Shellfish"}],a=Object(s.useState)(new Array(n.length).fill(!1)),i=Object(l.a)(a,2),r=i[0],d=i[1];return Object(c.jsx)("div",{class:"wrapper1",children:Object(c.jsxs)("div",{class:"padding",children:[Object(c.jsxs)("div",{class:"listDiv",children:[Object(c.jsx)("h3",{children:Object(c.jsx)("b",{children:"What should we look out for?"})}),Object(c.jsx)("hr",{class:"solid"}),Object(c.jsx)("ul",{className:"choice-list",children:n.map((function(e,t){var n=e.name;return Object(c.jsxs)("li",{children:[Object(c.jsx)("div",{className:"choices-list-item",children:Object(c.jsxs)("div",{className:"left-section",children:[Object(c.jsx)("input",{type:"checkbox",id:"custom-checkbox-".concat(t),name:n,value:n,checked:r[t],onChange:function(){return function(e){var t=r.map((function(t,n){return n===e?!t:t}));d(t)}(t)}}),Object(c.jsx)("label",{htmlFor:"custom-checkbox-".concat(t),children:n})]})}),Object(c.jsx)("hr",{class:"dashed"})]},t)}))})]}),Object(c.jsx)("button",{onClick:function(){t(r)},children:"Onto the scanning!"})]})})}),o=n(17),u=n.n(o);var j=function(e){var t=e.handleSubmit,n=Object(s.useRef)(null),a=Object(s.useRef)(null),i=Object(s.useState)(!1),r=Object(l.a)(i,2),d=r[0],o=r[1];Object(s.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then((function(e){var t=n.current;t.srcObject=e,t.play()})).catch((function(e){console.error(e)}))}),[n]);var j=Object(s.useState)(""),h=Object(l.a)(j,2),b=h[0],O=h[1];return Object(c.jsx)("div",{class:"wrapper2",children:Object(c.jsxs)("div",{class:"padding",children:[Object(c.jsxs)("div",{classname:"camera",children:[Object(c.jsx)("video",{ref:n}),Object(c.jsx)("button",{class:"submitBtn",onClick:function(){var e=232.875,t=n.current,c=a.current;c.width=414,c.height=e,c.getContext("2d").drawImage(t,0,0,414,e),o(!0)},children:"Take pic!"})]}),Object(c.jsx)("div",{className:"result"+(d?"hasPhoto":""),children:Object(c.jsx)("canvas",{ref:a})}),Object(c.jsx)("button",{onClick:function(){var e=a.current.toDataURL();console.log(e),u.a.recognize(e,"eng",{logger:function(e){return console.log(e)}}).catch((function(e){console.error(e)})).then((function(e){var n=e.data.text;console.log(n),t(n)}))},children:" Convert "}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("label",{children:["Name:",Object(c.jsx)("input",{type:"text",value:b,onChange:function(e){O(e.target.value)},name:"name"})]}),Object(c.jsx)("input",{type:"submit",value:"Next",onClick:function(){t(b)}})]})]})})},h=n(3),b=n.n(h),O=n(18),f=function(e){var t=e.selectedChoices,n=e.ingredients,a=Object(s.useState)([]),i=Object(l.a)(a,2),r=i[0],d=i[1],o=Object(s.useState)(!0),u=Object(l.a)(o,2),j=u[0],h=u[1],f=Object(s.useState)(null),g=Object(l.a)(f,2),v=g[0],x=g[1];return Object(s.useEffect)((function(){(function(){var e=Object(O.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://localhost:3001","/api?ingredients=").concat(n));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("This is an HTTP error: The status is ".concat(t.status));case 6:return e.next=8,t.json();case 8:c=e.sent,d(c),x(null),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),x(e.t0.message),d(null);case 17:return e.prev=17,h(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[0,13,17,20]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsx)("div",{class:"wrapper3",children:Object(c.jsxs)("div",{class:"padding",children:[Object(c.jsx)("h1",{children:"Results"}),j&&Object(c.jsx)("div",{children:"A moment please..."}),v&&Object(c.jsx)("div",{children:"There is a problem fetching the post data - ".concat(v)}),t.map((function(e){return e.value&&r.dairyIngredients&&"dairy"==e.name?Object(c.jsxs)("div",{class:"ingredBox",children:[Object(c.jsx)("div",{children:e.name}),"We found ",Object(c.jsx)("b",{children:r.dairyIngredients.length})," ingredients flagged as dairy!",r.dairyIngredients.toString()]}):e.value&&r.addedSugarIngredients&&"added sugar"==e.name?Object(c.jsxs)("p",{children:[e.name,"We found ",r.addedSugarIngredients.length," ingredients flagged as added sugar!",r.addedSugarIngredients.toString()]}):e.value&&r.shellfishIngredients&&"shellfish"==e.name?Object(c.jsxs)("p",{children:[e.name,"We found ",r.shellfishIngredients.length," ingredients flagged as shellfish!",r.shellfishIngredients.toString()]}):void 0}))]})})},g=(n(51),n(52),function(){var e=Object(s.useState)(1),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)([]),r=Object(l.a)(i,2),o=r[0],u=r[1],h=Object(s.useState)(""),b=Object(l.a)(h,2),O=b[0],g=b[1];return 1==n?Object(c.jsx)(d,{handleSubmit:function(e){a(n+1),u([{name:"added sugar",value:e[0]},{name:"dairy",value:e[1]},{name:"shellfish",value:e[2]}])}}):2==n?Object(c.jsx)(j,{handleSubmit:function(e){a(n+1),g(e)}}):Object(c.jsx)(f,{selectedChoices:o,ingredients:O})}),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),v()}},[[53,1,2]]]);
//# sourceMappingURL=main.25ffa90b.chunk.js.map