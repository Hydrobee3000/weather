(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{105:function(e,t,a){e.exports={wrapper:"WeekWeather_wrapper__2NBcV"}},117:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(29),i=a.n(c),o=(a(117),a(193)),s=a(43),l=a(13),u=a(20),j=a(32),d=a.n(j),p=a(191),b=a(188),m=a(190),h=a(192),O=a(4),f=a(181),x=a(194),v=a(196),g=a(55),w=a.n(g),_=a(75),y=a(39),k=a(98).create({baseURL:"https://api.openweathermap.org/data/2.5/",headers:{Accept:"application/json"}}),D=function(e){return k.get("weather?q=".concat(e,"&appid=5712b8887160185aaa20b84fcd1da1c4"))},W=function(e){return k.get("forecast?q=".concat(e,"&lang=ru&units=metric&APPID=5712b8887160185aaa20b84fcd1da1c4"))},E="SET_ACTIVE_PLACE",S="SET_DAY_WEATHER_DATA",P="SET_WEEK_WEATHER_DATA",T={places:["Omsk","Novosibirsk","Moscow","Tomsk","Ekaterinburg","Altay"],activePlace:"Omsk",dayWeatherData:null,weekWeatherData:null},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(y.a)(Object(y.a)({},e),{},{activePlace:t.payload});case S:return Object(y.a)(Object(y.a)({},e),{},{dayWeatherData:t.payload});case P:return Object(y.a)(Object(y.a)({},e),{},{weekWeatherData:t.payload});default:return e}},A=a(104),B=a.n(A),L=a(103),C=a.n(L),z=a(197),F=a(184),H=a(1),I=Object(O.a)(h.a)((function(e){var t=e.theme,a="light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[800];return{backgroundColor:a,"&:hover, &:focus":{backgroundColor:Object(f.c)(a,.06)},"&:active":{backgroundColor:Object(f.c)(a,.12)}}})),M=function(e){var t=e.places,a=e.activePlace,r=Object(u.b)(),n=Object(F.a)("(min-width:600px)"),c=new Date,i=n?{weekday:"long",year:"numeric",month:"numeric",day:"numeric"}:{weekday:"long"};return Object(H.jsx)(x.a,{className:d.a.wrapper,position:"static",children:Object(H.jsxs)(v.a,{className:d.a.toolbar,children:[Object(H.jsx)(z.a,{className:d.a.date,variant:"p",gutterBottom:!0,component:"div",children:c.toLocaleDateString("en-US",i)}),Object(H.jsxs)(p.a,{className:d.a.breadcrumbs,"aria-label":"breadcrumb",children:[Object(H.jsx)(s.b,{activeStyle:{fontWeight:"bold"},className:function(e){return e.isActive?d.a.link_active:d.a.link},to:"/current-weather",children:Object(H.jsx)(I,{label:n?"Weather":null,icon:Object(H.jsx)(C.a,{fontSize:n?"small":"medium",style:n?null:{paddingLeft:"0.5em"}})})}),Object(H.jsx)(s.b,{className:function(e){return e.isActive?d.a.link_active:d.a.link},to:"/weather-forecast",children:Object(H.jsx)(I,{label:n?"Forecast":null,icon:Object(H.jsx)(B.a,{color:"inherit",fontSize:n?"small":"medium",style:n?null:{paddingLeft:"0.5em"}})})})]}),Object(H.jsx)(b.a,{className:d.a.select,id:"demo-simple-select",value:a,children:t.map((function(e,t){return Object(H.jsx)(m.a,{value:e,onClick:function(){return r(function(e){return{type:E,payload:e}}(e))},children:e},t)}))})]})})},R=a.p+"static/media/preloader.6a4dab05.gif",q={position:"absolute",left:"50%",top:"20%",marginLeft:"-1.95em",width:"100px",height:"100px",zIndex:"999"},U=function(){return Object(H.jsx)("div",{style:q,children:Object(H.jsx)("img",{src:R,alt:"preloader"})})},J=a(198),V=a(46),X=a.n(V),Y=function(e){var t=e.weatherData,a=Object(u.c)((function(e){return e.weather.dayWeatherData.weather[0]}));return Object(H.jsxs)(J.a,{className:X.a.wrapper,children:[Object(H.jsxs)(z.a,{style:{fontSize:"2.5em"},className:X.a.title,variant:"h2",gutterBottom:!0,component:"div",children:[a.main," in ",t.name]}),Object(H.jsx)("img",{className:X.a.image,src:"http://openweathermap.org/img/w/".concat(a.icon,".png"),alt:t.description}),Object(H.jsxs)(z.a,{style:{fontSize:"1.2em"},className:X.a.parameter,variant:"h5",gutterBottom:!0,component:"div",children:["Temperature: ",(t.main.temp-273.15).toFixed(1)," \xb0\u0421"]}),Object(H.jsxs)(z.a,{style:{fontSize:"1.2em"},className:X.a.parameter,variant:"h5",gutterBottom:!0,component:"div",children:["Feels like: ",(t.main.feels_like-273.15).toFixed(1)," \xb0\u0421"]})]})},K=function(e){var t=e.activePlace,a=Object(u.b)(),n=Object(u.c)((function(e){return e.weather.dayWeatherData}));return Object(r.useEffect)((function(){var e;a((e=t,function(){var t=Object(_.a)(w.a.mark((function t(a){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(e);case 2:r=t.sent,a((n=r.data,{type:S,payload:n}));case 4:case"end":return t.stop()}var n}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[a,t]),n?Object(H.jsx)(Y,{weatherData:n}):Object(H.jsx)(U,{})},Q=a(105),G=a.n(Q),Z=a(200),$=a(199),ee=function(e){var t=e.day,a=1e3*t.dt,r=new Date(a).toLocaleString("en",{weekday:"long"});return Object(H.jsx)($.a,{sx:{maxWidth:350,marginLeft:"auto",marginRight:"auto",marginTop:"2em",paddingBottom:"1em"},children:Object(H.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(H.jsx)(z.a,{style:{marginTop:"0.3em",fontSize:"2.6em"},variant:"h2",gutterBottom:!0,component:"div",children:r}),Object(H.jsxs)(z.a,{style:{marginBottom:"1em",marginTop:"0.2em"},variant:"h5",gutterBottom:!0,component:"div",children:[Math.round(t.main.temp)," \xb0C"]}),Object(H.jsx)(z.a,{style:{fontSize:"1em"},variant:"h5",gutterBottom:!0,component:"div",children:t.weather[0].main})]})})},te=function(e){e.activePlace;var t=e.weekWeatherData.list.filter((function(e){return e.dt_txt.includes("12:00:00")}));return Object(H.jsx)(J.a,{className:G.a.wrapper,children:Object(H.jsx)(Z.a,{children:t.map((function(e,t){return Object(H.jsx)(ee,{day:e},t)}))})})},ae=function(e){var t=e.activePlace,a=Object(u.b)(),n=Object(u.c)((function(e){return e.weather.weekWeatherData}));return Object(r.useEffect)((function(){var e;a((e=t,function(){var t=Object(_.a)(w.a.mark((function t(a){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W(e);case 2:r=t.sent,a((n=r.data,{type:P,payload:n}));case 4:case"end":return t.stop()}var n}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[a,t]),n?Object(H.jsx)(te,{activePlace:t,weekWeatherData:n}):Object(H.jsx)(U,{})},re=function(){var e=Object(u.c)((function(e){return e.weather.places})),t=Object(u.c)((function(e){return e.weather.activePlace}));return Object(H.jsx)(s.a,{children:Object(H.jsxs)(o.a,{container:!0,children:[Object(H.jsx)(o.a,{item:!0,xs:12,children:Object(H.jsx)(M,{places:e,activePlace:t})}),Object(H.jsx)(o.a,{item:!0,xs:12,children:Object(H.jsxs)(l.d,{children:[Object(H.jsx)(l.b,{path:"/",element:Object(H.jsx)(l.a,{replace:!0,to:"/current-weather"})}),Object(H.jsx)(l.b,{path:"current-weather",element:Object(H.jsx)(K,{activePlace:t})}),Object(H.jsx)(l.b,{path:"weather-forecast",element:Object(H.jsx)(ae,{activePlace:t})})]})})]})})},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,201)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),c(e),i(e)}))},ce=a(54),ie=a(106),oe=a(107),se=Object(ce.combineReducers)({weather:N}),le=Object(ce.createStore)(se,Object(ie.composeWithDevTools)(Object(ce.applyMiddleware)(oe.a)));i.a.render(Object(H.jsx)(n.a.StrictMode,{children:Object(H.jsx)(u.a,{store:le,children:Object(H.jsx)(re,{})})}),document.getElementById("root")),ne()},32:function(e,t,a){e.exports={wrapper:"Header_wrapper__2Nd7X",toolbar:"Header_toolbar__wDPgW",link:"Header_link__1lqXY",link_active:"Header_link_active__36p3d",select:"Header_select__1UDnr"}},46:function(e,t,a){e.exports={wrapper:"DayWeather_wrapper__IuESj",title:"DayWeather_title__2MbO8",image:"DayWeather_image__2_6BT",date:"DayWeather_date__1ELpE",parameter:"DayWeather_parameter__QfwrH"}}},[[144,1,2]]]);
//# sourceMappingURL=main.69437448.chunk.js.map