(this.webpackJsonpmovierater=this.webpackJsonpmovierater||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),l=(a(81),a(19)),i=(a(82),a(15)),m=a(1);a(83);var s=function(){return r.a.createElement("nav",{className:"nav__bar"},r.a.createElement("div",{style:{color:"white"},className:"logo"},"MOVIE RATER"),r.a.createElement("ul",{className:"right__items"},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/",className:"text__link"}," Home ")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/tvshows",className:"text__link"}," TV Shows ")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/community",className:"text__link"}," Community ")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/about",className:"text__link"}," About "))))},u=a(21),p=a.n(u),g="c84671ee69c26dcf112bd21220af8a32",d={upcoming:"https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(g,"&language=en-US&page=1"),now_playing:"https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(g,"&language=en-US&page=1"),popular:"https://api.themoviedb.org/3/movie/popular?api_key=".concat(g,"&language=en-US&page=1"),topRated:"https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(g,"&language=en-US&page=1")},v={latest:"https://api.themoviedb.org/3/tv/airing_today?api_key=".concat(g,"&language=en-US&page=1"),popular:"https://api.themoviedb.org/3/tv/popular?api_key=".concat(g,"&language=en-US&page=1"),topRated:"https://api.themoviedb.org/3/tv/top_rated?api_key=".concat(g,"&language=en-US&page=1"),trending:"https://api.themoviedb.org/3/trending/tv/week?api_key=".concat(g)},h="http://image.tmdb.org/t/p/w342";var E=a(22),_=a.n(E),f=a(31);a(105);var b=function(e){var t=e.title,a=(e.id,e.poster_path),n=e.movieDetail,c=e.getMovie;return r.a.createElement(i.b,{to:"/carddetail",onClick:function(){console.log("hi there"),c(n)}},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"poster",alt:t,src:"".concat(h).concat(a)}),r.a.createElement("h2",{className:"poster__title"},t)))};a(106);var w,N,k,y,M=function(e){var t=e.reqbgImg,a=e.getUrl,c=e.heading,o=e.url,i=e.getMovie,m=Object(n.useState)([]),s=Object(l.a)(m,2),u=s[0],g=s[1];return Object(n.useEffect)((function(){window.scrollTo(0,0),function(){var e=Object(f.a)(_.a.mark((function e(n){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get(n);case 3:return r=e.sent,g(r.data.results),t&&a(r.data.results[0]),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0,"somethings not right");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()(o)}),[o]),r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:"heading"},c),r.a.createElement("div",{className:"cards__container"},u.map((function(e,t){return r.a.createElement(b,{key:e.id,title:e.title||e.name,id:e.id,poster_path:e.poster_path,movieDetail:e,getMovie:i})}))))},x=a(152),S=(a(107),"https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(g));var O=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){window.scrollTo(0,0),function(){var e=Object(f.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get(t);case 3:return a=e.sent,c(a.data.results),e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0,"somethings not right");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()(S)}),[]),a.length>0&&(w="".concat(h).concat(a[Math.floor(8*Math.random())].poster_path),N="".concat(h).concat(a[8+Math.floor(3*Math.random())].poster_path),k="".concat(h).concat(a[12+Math.floor(3*Math.random())].poster_path),y="".concat(h).concat(a[16+Math.floor(3*Math.random())].poster_path)),r.a.createElement("div",null,r.a.createElement(x.a,{pauseOnHover:!1,autoplay:!0,speed:1e3,autoplaySpeed:2400,className:"car"},r.a.createElement("div",{className:"indiv"},r.a.createElement("img",{alt:"poster",className:"image",src:w})),r.a.createElement("div",{className:"indiv"},r.a.createElement("img",{alt:"poster",className:"image",src:N})),r.a.createElement("div",{className:"indiv"},r.a.createElement("img",{alt:"poster",className:"image",src:k})),r.a.createElement("div",{className:"indiv"},r.a.createElement("img",{alt:"poster",className:"image",src:y}))))};a(131);var j=function(e){var t=e.getMovie;return r.a.createElement("div",{className:"homepage"},r.a.createElement(O,null),r.a.createElement(M,{heading:"Popular Movies",url:d.popular,getMovie:t}),r.a.createElement(M,{heading:"Top Rated Movies",url:d.topRated,getMovie:t}),r.a.createElement(M,{heading:"Now Playing",url:d.now_playing,getMovie:t}),r.a.createElement(M,{heading:"Upcoming Movies",url:d.upcoming,getMovie:t}))};var R=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"CSS3 Patterns Gallery"))};a(132);var D=function(){return r.a.createElement("div",{className:"community-container"},r.a.createElement("h1",null," community"))};a(133);var U=function(e){var t=e.getMovie,a=Object(n.useState)(""),c=Object(l.a)(a,2),o=c[0],i=c[1],m={};return i&&(m={backgroundImage:'linear-gradient(to right, rgba(0,0,0, 0.5) , rgba(0,0,0, 0.84)), url("'.concat("http://image.tmdb.org/t/p/w1920_and_h800_multi_faces"+o.backdrop_path,'")'),backgroundSize:"cover",backgroundPosition:"center",bakcgroundRepeat:"no-repeat",backgroundAttachment:"fixed",height:"100vh",marginRight:"20px"}),r.a.createElement("div",{className:"homepage tv__show"},r.a.createElement("div",{style:m,className:"tvShow__backgroundcover"}),r.a.createElement(M,{reqbgImg:!0,getUrl:function(e){i(e)},heading:"Trending",url:v.trending,getMovie:t}),r.a.createElement(M,{heading:"Latest",url:v.latest,getMovie:t}),r.a.createElement(M,{heading:"Popular",url:v.popular,getMovie:t}),r.a.createElement(M,{heading:"Top Rated",url:v.topRated,getMovie:t}))};a(134);var C=function(e){var t=e.movieDetail;if(console.log(t),Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),t){var a={backgroundImage:'linear-gradient(to right, rgba(21.57%, 14.51%, 15.69%, 1.00) 150px, rgba(27.45%, 22.75%, 23.53%, 0.84) 100%), url("'.concat("http://image.tmdb.org/t/p/w1920_and_h800_multi_faces"+t.backdrop_path,'")'),backgroundSize:"cover",backgroundPosition:"center",bakcgroundRepeat:"no-repeat"};return r.a.createElement("div",{style:a,className:"CardDetail__container"},r.a.createElement("div",{className:"CardDetail__image"},r.a.createElement("img",{alt:"poster",className:"cardDetail__image",src:"".concat("http://image.tmdb.org/t/p/w342"+t.poster_path)})),r.a.createElement("div",{className:"CardDetail__detail"},r.a.createElement("header",{className:"cardDetail__header"},r.a.createElement("h1",{className:"CardDetail__title"},t.title||t.name),r.a.createElement("p",{className:"date"},t.first_air_date||t.release_date),r.a.createElement("p",{className:"popularity"},"Popularity ",t.popularity)),r.a.createElement("section",{className:"overview"},r.a.createElement("p",{className:"overview__header"},"Overview"),r.a.createElement("div",{className:"overview__detail"},t.overview))))}return r.a.createElement("h1",null,"Loading...")},T=a(154),P=a(153);var I=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],c=t[1],o=function(e){c(e)};return r.a.createElement("div",{className:"App"},r.a.createElement(T.a,null,r.a.createElement("div",{style:{height:"40px",width:"40px",lineHeight:"40px",borderRadius:"50%",backgroundColor:"#6fb3b0",color:"#fff",textAlign:"center",fontSize:20}},r.a.createElement(P.a,null))),r.a.createElement(i.a,null,r.a.createElement(s,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(j,{getMovie:o})),r.a.createElement(m.a,{exact:!0,path:"/tvshows"},r.a.createElement(U,{getMovie:o})),r.a.createElement(m.a,{exact:!0,path:"/carddetail"},r.a.createElement(C,{movieDetail:a})),r.a.createElement(m.a,{exact:!0,path:"/community"},r.a.createElement(D,null)),r.a.createElement(m.a,{exact:!0,path:"/about"},r.a.createElement(R,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,a){e.exports=a(149)},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.c3865829.chunk.js.map