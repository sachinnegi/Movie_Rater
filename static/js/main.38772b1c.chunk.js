(this.webpackJsonpmovierater=this.webpackJsonpmovierater||[]).push([[0],{130:function(e,a,t){},131:function(e,a,t){},148:function(e,a,t){},149:function(e,a,t){},167:function(e,a,t){},168:function(e,a,t){},169:function(e,a,t){},170:function(e,a,t){},171:function(e,a,t){},172:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(34),o=t.n(c),l=(t(95),t(19)),i=(t(96),t(14)),s=t(5),m=t(175),u=(t(97),m.a.Search);var p=function(e){var a=e.onSearchChange;return r.a.createElement("nav",{className:"nav__bar"},r.a.createElement("div",{style:{color:"white"},className:"logo"},r.a.createElement(i.b,{to:"/"}," MOVIE RATER ")),r.a.createElement("ul",{className:"right__items"},r.a.createElement("li",{className:"search__bar"},r.a.createElement(u,{placeholder:"search movie, tv show",onSearch:function(e){return a(e)},enterButton:!0})),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/",className:"text__link"}," Home ")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/tvshows",className:"text__link"}," TV Shows ")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/community",className:"text__link"}," Community ")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/about",className:"text__link"}," About "))))},d="c84671ee69c26dcf112bd21220af8a32",g={upcoming:"https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(d,"&language=en-US&page=1"),now_playing:"https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(d,"&language=en-US&page=1"),popular:"https://api.themoviedb.org/3/movie/popular?api_key=".concat(d,"&language=en-US&page=1"),topRated:"https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(d,"&language=en-US&page=1")},h={latest:"https://api.themoviedb.org/3/tv/airing_today?api_key=".concat(d,"&language=en-US&page=1"),popular:"https://api.themoviedb.org/3/tv/popular?api_key=".concat(d,"&language=en-US&page=1"),topRated:"https://api.themoviedb.org/3/tv/top_rated?api_key=".concat(d,"&language=en-US&page=1"),trending:"https://api.themoviedb.org/3/trending/tv/week?api_key=".concat(d)},v="https://image.tmdb.org/t/p/w342",E=t(27),_=t.n(E),b=t(39);t(130);var f=function(e){var a=e.title,t=(e.id,e.poster_path),n=e.movieDetail,c=e.getMovie;return r.a.createElement(i.b,{to:"/carddetail",onClick:function(){c(n)}},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"poster",alt:a,src:"".concat(v).concat(t)}),r.a.createElement("h2",{className:"poster__title"},a)))},N=(t(131),t(40)),k=t.n(N);t(148);var w=function(){return r.a.createElement("div",{className:"loader__container"},r.a.createElement("div",{className:"sk-chase"},r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"})))};var y,M,S,O,j=function(e){var a=e.reqbgImg,t=e.getUrl,c=e.heading,o=e.url,i=e.getMovie,s=Object(n.useState)([]),m=Object(l.a)(s,2),u=m[0],p=m[1],d=Object(n.useState)(!0),g=Object(l.a)(d,2),h=g[0],v=g[1];return Object(n.useEffect)((function(){window.scrollTo(0,0),function(){var e=Object(b.a)(_.a.mark((function e(n){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(n);case 3:return r=e.sent,p(r.data.results),a&&t(r.data.results[Math.floor(Math.random()*(r.data.results.length-1))]),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0,"somethings not right");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}()(o)}),[o]),!0===h&&u.length>0&&v(!1),!1===h?r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:"heading"},c),r.a.createElement("div",{className:"cards__container"},u.map((function(e,a){return r.a.createElement(f,{key:e.id,title:e.title||e.name,id:e.id,poster_path:e.poster_path,movieDetail:e,getMovie:i})})))):r.a.createElement(w,null)},x=t(174),R=(t(149),"https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(d));var C=function(){var e=Object(n.useState)([]),a=Object(l.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){window.scrollTo(0,0),function(){var e=Object(b.a)(_.a.mark((function e(a){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(a);case 3:return t=e.sent,c(t.data.results),e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0,"somethings not right");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}()(R)}),[]),t.length>0&&(y="".concat(v).concat(t[Math.floor(8*Math.random())].poster_path),M="".concat(v).concat(t[8+Math.floor(3*Math.random())].poster_path),S="".concat(v).concat(t[12+Math.floor(3*Math.random())].poster_path),O="".concat(v).concat(t[16+Math.floor(3*Math.random())].poster_path)),r.a.createElement("div",null,r.a.createElement(x.a,{pauseOnHover:!1,autoplay:!0,speed:1e3,autoplaySpeed:2400,className:"car"},r.a.createElement("div",{className:"indiv"},r.a.createElement("img",{alt:"poster",className:"image",src:y})),r.a.createElement("div",{className:"indiv"},r.a.createElement("img",{alt:"poster",className:"image",src:M})),r.a.createElement("div",{className:"indiv"},r.a.createElement("img",{alt:"poster",className:"image",src:S})),r.a.createElement("div",{className:"indiv"},r.a.createElement("img",{alt:"poster",className:"image",src:O}))))};t(167);var U=function(e){var a=e.getMovie;return r.a.createElement("div",{className:"homepage"},r.a.createElement(C,null),r.a.createElement(j,{heading:"Popular Movies",url:g.popular,getMovie:a}),r.a.createElement(j,{heading:"Top Rated Movies",url:g.topRated,getMovie:a}),r.a.createElement(j,{heading:"Now Playing",url:g.now_playing,getMovie:a}),r.a.createElement(j,{heading:"Upcoming Movies",url:g.upcoming,getMovie:a}))};var D=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"CSS3 Patterns Gallery"))};t(168);var T=function(){return r.a.createElement("div",{className:"community-container"},r.a.createElement("h1",null," community"))};t(169);var I=function(e){var a=e.getMovie,t=Object(n.useState)(""),c=Object(l.a)(t,2),o=c[0],i=c[1],s={};return o&&(s={backgroundImage:'linear-gradient(to right, rgba(0,0,0, 0.5) , rgba(0,0,0, 0.84)), url("'.concat("http://image.tmdb.org/t/p/w1920_and_h800_multi_faces"+o.backdrop_path,'")'),backgroundSize:"cover",backgroundPosition:"center",bakcgroundRepeat:"no-repeat",backgroundAttachment:"fixed",height:"75vh",marginRight:"0px"}),r.a.createElement("div",{className:"homepage tv__show"},r.a.createElement("div",{style:s,className:"tvShow__backgroundcover"}),r.a.createElement(j,{reqbgImg:!0,getUrl:function(e){i(e)},heading:"Trending",url:h.trending,getMovie:a}),r.a.createElement(j,{heading:"Latest",url:h.latest,getMovie:a}),r.a.createElement(j,{heading:"Popular",url:h.popular,getMovie:a}),r.a.createElement(j,{heading:"Top Rated",url:h.topRated,getMovie:a}))};t(170);var P=function(e){var a=e.movieDetail;if(Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),a){var t={backgroundImage:'linear-gradient(to right, rgba(21.57%, 14.51%, 15.69%, 1.00) 150px, rgba(27.45%, 22.75%, 23.53%, 0.84) 100%), url("'.concat("http://image.tmdb.org/t/p/w1920_and_h800_multi_faces"+a.backdrop_path,'")'),backgroundSize:"cover",backgroundPosition:"center",bakcgroundRepeat:"no-repeat"};return r.a.createElement("div",{style:t,className:"CardDetail__container"},r.a.createElement("div",{className:"CardDetail__image"},r.a.createElement("img",{alt:"poster",className:"cardDetail__image",src:"".concat("http://image.tmdb.org/t/p/w342"+a.poster_path)})),r.a.createElement("div",{className:"CardDetail__detail"},r.a.createElement("header",{className:"cardDetail__header"},r.a.createElement("h1",{className:"CardDetail__title"},a.title||a.name),r.a.createElement("p",{className:"date"},a.first_air_date||a.release_date),r.a.createElement("p",{className:"popularity"},"Popularity ",a.popularity)),r.a.createElement("section",{className:"overview"},r.a.createElement("p",{className:"overview__header"},"Overview"),r.a.createElement("div",{className:"overview__detail"},a.overview))))}return r.a.createElement(w,null)};t(171);var A=function(e){var a=e.searchInput,t=e.getMovie,c=Object(n.useState)([]),o=Object(l.a)(c,2),s=o[0],m=o[1];function u(){return(u=Object(b.a)(_.a.mark((function e(a){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/search/multi?api_key=".concat(d,"&language=en-US&query=").concat(a,"&page=1&include_adult=false"),e.next=4,k.a.get(t);case 4:n=e.sent,m(n.data.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Got error:-",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){a.length>0&&function(e){u.apply(this,arguments)}(a)}),[a]),console.log(a),s.length>0?r.a.createElement("div",{className:"search__card__container"},s.map((function(e,a){return e.poster_path&&r.a.createElement(i.b,{to:"/carddetail",onClick:function(){t(e)}},r.a.createElement("div",{key:e.id,className:"search__image__detailContainer"},r.a.createElement("img",{className:"search__image",alt:"poster",src:v+e.poster_path}),r.a.createElement("div",{className:"search__detail"},e.name||e.title)))}))):r.a.createElement(w,null)};var q=function(){var e=Object(n.useState)(),a=Object(l.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(""),m=Object(l.a)(o,2),u=m[0],d=m[1],g=function(e){c(e)};return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{basename:"/Movie_Rater"},r.a.createElement(p,{onSearchChange:function(e){d(""),setTimeout((function(){d(e)}),200)}}),u.length>0&&r.a.createElement(s.a,{push:!0,to:{pathname:"/search"}}),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(U,{getMovie:g})),r.a.createElement(s.b,{exact:!0,path:"/tvshows"},r.a.createElement(I,{getMovie:g})),r.a.createElement(s.b,{exact:!0,path:"/carddetail"},r.a.createElement(P,{movieDetail:t})),r.a.createElement(s.b,{exact:!0,path:"/search"},r.a.createElement(A,{searchInput:u,getMovie:g})),r.a.createElement(s.b,{exact:!0,path:"/community"},r.a.createElement(T,null)),r.a.createElement(s.b,{exact:!0,path:"/about"},r.a.createElement(D,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,a,t){e.exports=t(172)},95:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.38772b1c.chunk.js.map