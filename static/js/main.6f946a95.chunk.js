(this["webpackJsonpworkday-calculator"]=this["webpackJsonpworkday-calculator"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),s=n.n(r),a=n(2),i=(n(10),n(5)),o=n(0);function u(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),u=Object(a.a)(s,2),j=u[0],l=u[1],b=Object(c.useState)(!1),d=Object(a.a)(b,2),O=d[0],h=d[1],f=Object(c.useState)(!1),x=Object(a.a)(f,2),v=x[0],p=x[1];return Object(c.useEffect)((function(){var e=0;return O&&(e=setTimeout((function(){h(!1)}),1e4)),function(){return clearTimeout(e)}}),[O]),Object(c.useEffect)((function(){var e=function(e,t){return e?e.reduce((function(e,n){var c,r=function(e){return n.Type.toLowerCase().includes(e)?n.Requested:0};return null!==(c=n.Date)&&void 0!==c&&c.includes(t)?{vacation:e.vacation+r("vacation"),sickness:e.sickness+r("sickness")}:e}),{vacation:0,sickness:0}):""}(j,v);console.log(e),r(JSON.stringify(e,null,4))}),[j,v]),Object(o.jsxs)("div",{class:"App",children:[Object(o.jsx)("h3",{children:"Paste your workday table here:"}),Object(o.jsx)("textarea",{id:"list-textarea",onChange:function(e){l(i.TSV.parse(e.target.value))},cols:100,rows:20}),O&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{style:{color:"red"},children:"This file doesn't look right. .csv file must contain merchant_name and a column with 'brand' in its title."}),Object(o.jsx)("button",{onClick:function(){return h(!1)},children:"Okay"}),Object(o.jsx)("br",{})]}),Object(o.jsx)("h3",{children:"Enter the year you're interested in:"}),Object(o.jsx)("input",{onChange:function(e){return p(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("code",{style:{whiteSpace:"pre-line"},children:n}),Object(o.jsx)("br",{})]})}var j=document.getElementById("root");s.a.render(Object(o.jsx)(c.StrictMode,{children:Object(o.jsx)(u,{})}),j)}},[[12,1,2]]]);
//# sourceMappingURL=main.6f946a95.chunk.js.map