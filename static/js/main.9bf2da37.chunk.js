(this.webpackJsonp2020tkfes3bweb=this.webpackJsonp2020tkfes3bweb||[]).push([[0],{22:function(e,t,a){e.exports=a(45)},27:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(12),r=a.n(c),m=a(6),i=a(7),s=a(1),o=(a(27),function(e){var t=l.a.useState({}),a=Object(i.a)(t,2),n=a[0],c=a[1];return l.a.useEffect((function(){e.currentPath===e.title.toLowerCase()||""===e.currentPath&&"Home"===e.title?c({color:"yellow"}):c({color:"white"})}),[e.currentPath,e.title]),l.a.createElement("div",{className:"navbar-contents"},l.a.createElement(m.b,{className:"navbar-text",to:"Home"===e.title?"/":e.title.toLowerCase(),style:n},e.title))}),u=function(){var e=Object(s.f)().pathname.substr(1);return l.a.createElement("nav",{className:"navbar"},l.a.createElement(o,{title:"Home",currentPath:e}),l.a.createElement(o,{title:"News",currentPath:e}),l.a.createElement(o,{title:"Movie",currentPath:e}),l.a.createElement(o,{title:"Cast",currentPath:e}))},E=function(e){return l.a.createElement("div",{className:"news-article"},l.a.createElement("h5",{className:"article-date"},e.date),l.a.createElement("h3",null,e.title),l.a.createElement("article",{className:"article-body"},l.a.createElement(e.body,null)))},d=[];d.push(["2020/10/09","\u30b5\u30a4\u30c8\u3092\u516c\u958b\u3057\u307e\u3057\u305f",l.a.createElement("div",null,l.a.createElement("p",null,"\u6587\u5316\u796d\u30b5\u30a4\u30c8\u306e\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u3092\u516c\u958b\u3057\u307e\u3057\u305f\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u5145\u5b9f\u306b\u4e5e\u3046\u3054\u671f\u5f85\uff01"),l.a.createElement("p",null,"\u306a\u304a\u3001\u6620\u753b\u672c\u4f53\u306f 10/30 \u306b\u516c\u958b\u3055\u308c\u308b\u4e88\u5b9a\u3067\u3059\u3002"))]),d.push(["2020/10/11","\u30d5\u30a9\u30f3\u30c8\u3092\u4fee\u6b63\u3057\u307e\u3057\u305f",l.a.createElement("div",null,l.a.createElement("p",null,"\u4e00\u90e8\u306e\u30c7\u30d0\u30a4\u30b9\u3067\u610f\u56f3\u3057\u306a\u3044\u30d5\u30a9\u30f3\u30c8\u304c\u8868\u793a\u3055\u308c\u308b\u4e0d\u5177\u5408\u3092\u4fee\u6b63\u3057\u307e\u3057\u305f\u3002"))]),d.push(["2020/10/17","\u30ad\u30e3\u30b9\u30c8\u30da\u30fc\u30b8\u3092\u516c\u958b\u3057\u307e\u3057\u305f",l.a.createElement("div",null,l.a.createElement("p",null,"\u30ad\u30e3\u30b9\u30c8\u30da\u30fc\u30b8\u3092\u516c\u958b\u3057\u307e\u3057\u305f\u3002"),l.a.createElement("p",null,"\u4e3b\u8981\u30ad\u30e3\u30b9\u30c8\u306e\u5f79\u540d\u3068\u5199\u771f\u3092\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"))]),d.push(["2020/10/23","\u4e88\u544a\u7de8\u3092\u63b2\u8f09\u3057\u307e\u3057\u305f",l.a.createElement("div",null,l.a.createElement("p",null,"\u5148\u65e5 Twitter \u3067\u516c\u958b\u3057\u305f\u4e88\u544a\u7de8\u3092\u63b2\u8f09\u3057\u307e\u3057\u305f\u3002"),l.a.createElement("p",null,"\u672c\u7de8\u3082\u304a\u697d\u3057\u307f\u306b\uff01"))]);var p=function(){return l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"contents"},l.a.createElement("h1",{className:"contents-title"},"News"),l.a.createElement(E,{date:d[3][0],title:d[3][1],body:function(){return d[3][2]}}),l.a.createElement(E,{date:d[2][0],title:d[2][1],body:function(){return d[2][2]}}),l.a.createElement(E,{date:d[1][0],title:d[1][1],body:function(){return d[1][2]}}),l.a.createElement(E,{date:d[0][0],title:d[0][1],body:function(){return d[0][2]}})))},h=a(21),v=a.n(h),f=(a(42),function(e){var t=l.a.useState(!1),a=Object(i.a)(t,2),n=a[0],c=a[1],r=l.a.useCallback((function(){c(!0)}),[]),m=l.a.useCallback((function(){c(!1)}),[]),s=function(){return l.a.createElement("button",{className:"castbox",onClick:r},l.a.createElement("div",{className:"castbox-name"},e.name),l.a.createElement("img",{className:"castbox-img",src:e.imgPath,alt:""}),l.a.createElement("div",{className:"castbox-description"},e.role))};return n?l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement(v.a,{isOpen:n,onRequestClose:m,style:{content:{top:"0px",left:"0px",bottom:"0px",right:"0px",height:"400px",width:"300px",margin:"auto",backgroundColor:"black"},overlay:{background:"rgba(128,128,128,0.75)"}}},l.a.createElement("div",{className:"modal-main"},l.a.createElement("div",{className:"modal-name"},e.name),l.a.createElement("img",{src:e.imgPath,className:"modal-img",alt:""}),l.a.createElement("br",null),l.a.createElement("div",{className:"modal-description"},l.a.createElement("p",null,e.description))))):l.a.createElement(s,null)}),g=function(e){return l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"main-contents"},l.a.createElement("div",{className:"castboxes"},l.a.createElement("div",{className:"castbox-kind"},"\u7b51\u99d2\u9769\u547d\u8ecd"),l.a.createElement(f,{name:"\u661f\u91ce \u4f51\u5e0c",role:"\u7b51\u99d2\u9769\u547d\u8ecd\u306e\u30ea\u30fc\u30c0\u30fc",imgPath:"/img/casts/hoshino.jpg",description:"\u7b51\u99d2\u9769\u547d\u8ecd\u306e\u30ea\u30fc\u30c0\u30fc\u3002\u81ea\u6cbb\u4f1a\u304c\u6587\u5316\u796d\u3092\u5ec3\u6b62\u3057\u305f\u3053\u3068\u306b\u7591\u554f\u3092\u611f\u3058\u3001\u7b51\u99d2\u9769\u547d\u8ecd\u3092\u7d50\u6210\u3059\u308b\u3002"}),l.a.createElement(f,{name:"\u677e\u4e0b \u79c0\u8f1d",role:"\u7b51\u99d2\u9769\u547d\u8ecd\u306e\u30d6\u30ec\u30fc\u30f3",imgPath:"/img/casts/matsushita.jpg",description:"\u661f\u91ce\u306e\u89aa\u53cb\u3002\u9769\u547d\u8ecd\u306e\u4e2d\u67a2\u3068\u3057\u3066\u3001\u4f5c\u6226\u7acb\u6848\u306a\u3069\u3092\u62c5\u3046\u3002"}),l.a.createElement(f,{name:"\u672c\u7530 \u771f",role:"\u7b51\u99d2\u9769\u547d\u8ecd\u306e\u4e2d\u5fc3\u4eba\u7269",imgPath:"/img/casts/honda.jpg",description:"\u661f\u91ce\u306e\u89aa\u53cb\u3002\u60c5\u71b1\u7684\u306a\u6027\u683c\u3067\u3001\u884c\u52d5\u529b\u304c\u3042\u308b\u3002"}),l.a.createElement("div",{className:"castbox-kind"},"\u7b51\u99d2\u9632\u885b\u8ecd"),l.a.createElement(f,{name:"\u4e09\u597d \u653f\u5f66",role:"\u7b51\u99d2\u81ea\u6cbb\u4f1a\u9577",imgPath:"/img/casts/miyoshi.jpg",description:"\u7b51\u99d2\u81ea\u6cbb\u4f1a\u9577\u3002\u305d\u306e\u53b3\u683c\u306a\u98a8\u8c8c\u3068\u5a01\u53b3\u3042\u308b\u632f\u308b\u821e\u3044\u306b\u3088\u3063\u3066\u3001\u751f\u5f92\u304b\u3089\u306f\u6050\u308c\u3089\u308c\u3066\u3044\u308b\u3002"}),l.a.createElement(f,{name:"\u89d2\u7530 \u76f4\u5927",role:"\u7b51\u99d2\u81ea\u6cbb\u4f1a\u526f\u4f1a\u9577",imgPath:"/img/casts/kakuta.jpg",description:"\u7b51\u99d2\u81ea\u6cbb\u4f1a\u526f\u4f1a\u9577\u3002\u4e09\u597d\u306e\u3088\u3046\u306b\u6050\u308c\u3089\u308c\u3066\u306f\u3044\u306a\u3044\u304c\u3001\u898f\u5f8b\u610f\u8b58\u304c\u5f37\u3044\u3002"}),l.a.createElement(f,{name:"\u5927\u5cf6 \u5065",role:"\u7b51\u99d2\u81ea\u6cbb\u4f1a\u4f1a\u8a08",imgPath:"/img/casts/oshima.jpg",description:"\u7b51\u99d2\u81ea\u6cbb\u4f1a\u4f1a\u8a08\u3002\u6bd4\u8f03\u7684\u51b7\u9759\u306a\u6027\u683c\u3002\u661f\u91ce\u305f\u3061\u3068\u306f\u540c\u3058\u30af\u30e9\u30b9\u3002"}),l.a.createElement(f,{name:"\u798f\u672c \u6d0b",role:"\u7b51\u99d2\u81ea\u6cbb\u4f1a\u66f8\u8a18",imgPath:"/img/casts/fukumoto.jpg",description:"\u7b51\u99d2\u81ea\u6cbb\u4f1a\u66f8\u8a18\u3002\u6012\u308a\u3063\u307d\u3044\u6027\u683c\u3002\u661f\u91ce\u305f\u3061\u3068\u306f\u540c\u3058\u30af\u30e9\u30b9\u3002"}),l.a.createElement("div",{className:"castbox-kind"},"\u305d\u306e\u4ed6"),l.a.createElement(f,{name:"\u9ce5\u4e95",role:"2\u5e742\u7d44\u62c5\u4efb",imgPath:"/img/casts/torii.jpg",description:"\u661f\u91ce\u305f\u3061\u306e\u30af\u30e9\u30b9\u306e\u62c5\u4efb\u3002"}))))},b=(a(43),function(e){return l.a.createElement("div",{className:"news-article"},l.a.createElement("h5",{className:"article-date"},e.date),l.a.createElement("article",{className:"article-body"},e.title))}),N=function(e){var t=l.a.useState(!1),a=Object(i.a)(t,2),n=a[0],c=a[1];return l.a.useEffect((function(){if(!n&&!e.onMobile){var t=document.createElement("script");t.setAttribute("src","https://platform.twitter.com/widgets.js"),document.body.appendChild(t),c(!0)}}),[e.onMobile,n]),e.onMobile?l.a.createElement(l.a.Fragment,null):l.a.createElement("div",{className:"twitter-embed"},l.a.createElement("a",{className:"twitter-timeline",href:"https://twitter.com/2020TK3BHR?ref_src=twsrc%5Etfw"},"Tweets by 2020TK3BHR"))},w=function(){return l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"pending-contents"},"Not Found"))},y=function(){var e=l.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],c=window.navigator.userAgent.toLowerCase();l.a.useEffect((function(){!a&&c.indexOf("mobile")&&(c.indexOf("iphone")>0||c.indexOf("ipod")>0||c.indexOf("android")>0)&&n(!0)}),[a,c]);var r=l.a.useState({}),o=Object(i.a)(r,2),E=o[0],h=o[1];l.a.useEffect((function(){h(a?{width:"100%"}:{width:"calc(75% - 20px)"})}),[a]);var v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement("div",{className:"main"},l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",exact:!0},l.a.createElement("img",{className:"main-logo",src:"img/main-logo.png",alt:"rivoluzione"}),l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"top-contents"},l.a.createElement("h1",{className:"description-title"},"Story"),l.a.createElement("div",{className:"description"},l.a.createElement("p",null,"\u6642\u306f 2050 \u5e74\u3002\u304b\u3064\u3066\u81ea\u7531\u306a\u5b66\u6821\u3068\u547c\u3070\u308c\u305f\u7b51\u99d2\u3067\u306f\u3001\u81ea\u6cbb\u4f1a\u306e\u6a29\u529b\u306b\u3088\u3063\u3066\u751f\u5f92\u305f\u3061\u304c\u53b3\u3057\u304f\u7d71\u5236\u3055\u308c\u3066\u3044\u305f\u3002"),l.a.createElement("p",null,"\u305d\u3093\u306a\u3042\u308b\u65e5\u3001\u81ea\u6cbb\u4f1a\u306b\u3088\u308b\u4e00\u3064\u306e\u6c7a\u5b9a\u3092\u304d\u3063\u304b\u3051\u306b\u3001\u9ad8\u6821 2 \u5e74\u751f \u661f\u91ce\u30fb\u677e\u4e0b\u30fb\u672c\u7530 \u306e 3 \u4eba\u305f\u3061\u306f\u300c\u7b51\u99d2\u9769\u547d\u8ecd\u300d\u3092\u7d50\u6210\u3059\u308b\u3002"),l.a.createElement("p",null,'\u5f7c\u3089\u306e\u76ee\u7684\u306f\u81ea\u6cbb\u4f1a\u3092\u5012\u3057 "\u7b51\u99d2\u306e\u81ea\u7531" \u3092\u53d6\u308a\u623b\u3059\u3053\u3068\u3002'),l.a.createElement("p",null,"\u4eca\u3001\u81ea\u7531\u3092\u304b\u3051\u305f\u5f7c\u3089\u306e\u95d8\u3044\u304c\u59cb\u307e\u308b\u2026"))),l.a.createElement(N,{onMobile:a}),l.a.createElement("div",{className:"main-contents",style:E},l.a.createElement(m.b,{to:"/news"},l.a.createElement("div",{className:"contents"},l.a.createElement("h1",{className:"contents-title"},"News"),l.a.createElement(b,{date:d[3][0],title:d[3][1]}),l.a.createElement(b,{date:d[2][0],title:d[2][1]}),l.a.createElement(b,{date:d[1][0],title:d[1][1]}),l.a.createElement(b,{date:d[0][0],title:d[0][1]}))),l.a.createElement(m.b,{to:"/movie"},l.a.createElement("div",{className:"contents contents-half contents-left"},l.a.createElement("h1",{className:"contents-title"},"Movie"),l.a.createElement("img",{src:"img/dummy.png",width:"100%",alt:"Thumbnail of the movie"}),l.a.createElement("p",null,"\u6620\u753b\u672c\u4f53\u306e\u30da\u30fc\u30b8\u3067\u3059\u3002"))),l.a.createElement(m.b,{to:"/cast"},l.a.createElement("div",{className:"contents contents-half"},l.a.createElement("h1",{className:"contents-title"},"Cast"),l.a.createElement("img",{src:"img/dummy.png",width:"100%",alt:"The information of the cast"}),l.a.createElement("p",null,"\u51fa\u6f14\u3059\u308b\u30ad\u30e3\u30b9\u30c8\u306e\u60c5\u5831\u3067\u3059\u3002")))))),l.a.createElement(s.a,{path:"/news",component:p}),l.a.createElement(s.a,{path:"/movie"},l.a.createElement("div",{className:"main-container main-movie"},l.a.createElement("h1",{className:"movie-title"},"\u4e88\u544a\u7de8"),l.a.createElement("div",{className:"movie-wrapper"},l.a.createElement("iframe",{className:"movie-embed",title:"trailer",src:"https://www.youtube.com/embed/7lMM7fo5bf4",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))),l.a.createElement(s.a,{path:"/cast",component:g}),l.a.createElement(s.a,{component:w}))))};return l.a.createElement(v,null)};a(44),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m.a,null,l.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.9bf2da37.chunk.js.map