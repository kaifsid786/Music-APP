(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[0],{33:function(t,e,s){},34:function(t,e,s){},36:function(t,e,s){},42:function(t,e,s){},44:function(t,e,s){},45:function(t,e,s){},46:function(t,e,s){},47:function(t,e,s){},49:function(t,e,s){"use strict";s.r(e);var a=s(1),c=s(7),i=s.n(c),r=s(20),n=(s(33),s(34),s.p+"static/media/child-2321161_1920.21dc61c1.png"),l=s(0);function h(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"h",children:[Object(l.jsx)("div",{className:"h-left",children:Object(l.jsxs)("div",{className:"h-logo",children:[Object(l.jsx)("img",{src:n,alt:""}),Object(l.jsx)("h3",{children:"MusicWeb"})]})}),Object(l.jsxs)("div",{className:"h-right",children:[Object(l.jsx)("div",{className:"signup",children:"SignUP"}),Object(l.jsx)("div",{className:"login",children:"Login"})]})]})})}s(36);var j=s(22),d=s.n(j),o=s(16),b=s.n(o),m=s(24),u=s.n(m),x=s(25),p=s.n(x),O=s(26),g=s.n(O);function f(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"s",children:Object(l.jsxs)("div",{className:"s-items",children:[Object(l.jsxs)("div",{className:"s-home",id:"s-home",children:[Object(l.jsx)(d.a,{sx:{color:"white"},fontSize:"large"}),Object(l.jsx)("a",{href:"/",classname:"s-diff",children:"Home"})]}),Object(l.jsxs)("div",{className:"s-search",children:[Object(l.jsx)(b.a,{fontSize:"large",id:"s-search"}),Object(l.jsx)("a",{href:"/search",classname:"s-diff",children:"Search"})]}),Object(l.jsxs)("div",{className:"s-fav",children:[Object(l.jsx)(u.a,{fontSize:"large"}),Object(l.jsx)("a",{classname:"s-diff",children:"Favourites"})]}),Object(l.jsxs)("div",{className:"s-playlist",children:[Object(l.jsx)(p.a,{fontSize:"large"}),Object(l.jsx)("a",{href:"/playlist",classname:"s-diff",children:"PlayList"})]}),Object(l.jsxs)("div",{className:"s-addplist",children:[Object(l.jsx)(g.a,{fontSize:"large"})," ",Object(l.jsx)("a",{href:"/Crplaylist",classname:"s-diff",children:"Create Playlist"})]})]})})})}s(42);function k(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"b",children:[Object(l.jsxs)("div",{className:"b-RP",children:[Object(l.jsx)("h1",{children:"Romantic Playlist"}),Object(l.jsx)("div",{className:"b-wrap",id:"b-wrap"})]}),Object(l.jsxs)("div",{className:"b-FP",children:[Object(l.jsx)("h1",{children:"Your's Favourite"}),Object(l.jsx)("h3",{children:"Nothing lies inside your favourite list !"})]}),Object(l.jsxs)("div",{className:"b-SP",id:"b-SP",children:[Object(l.jsx)("h1",{children:"Sad Playlist"}),Object(l.jsx)("div",{id:"b-SP-wrap",className:"b-wrap"})]})]})})}function v(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"main",children:[Object(l.jsx)(k,{}),Object(l.jsx)(h,{}),Object(l.jsx)(f,{})]})})}var y=s(8),N=s.n(y),S=s(9),w=s(5),P=(s(44),function(){var t=Object(S.a)(N.a.mark((function t(){var e,s,a,c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("eventlistner hal gya"),e={method:"GET",headers:{"X-RapidAPI-Key":"3223f5b021msh63c832bbb3a0163p1123bajsne910b322f390","X-RapidAPI-Host":"shazam.p.rapidapi.com"}},"https://shazam.p.rapidapi.com/search?term=sad&locale=en-US&offset=0&limit=5",t.next=5,fetch("https://shazam.p.rapidapi.com/search?term=sad&locale=en-US&offset=0&limit=5",e);case 5:return s=t.sent,t.next=8,s.json();case 8:a=t.sent,void 0!=(c=a.tracks)&&i.a.render(Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(F,{img:c.hits[0].track.images.background,title:c.hits[0].track.title,artist:c.hits[0].track.subtitle,src:c.hits[0].track.hub.actions[1].uri}),Object(l.jsx)(F,{img:c.hits[1].track.images.background,title:c.hits[1].track.title,artist:c.hits[1].track.subtitle,src:c.hits[1].track.hub.actions[1].uri}),Object(l.jsx)(F,{img:c.hits[2].track.images.background,title:c.hits[2].track.title,artist:c.hits[2].track.subtitle,src:c.hits[2].track.hub.actions[1].uri}),Object(l.jsx)(F,{img:c.hits[3].track.images.background,title:c.hits[3].track.title,artist:c.hits[3].track.subtitle,src:c.hits[3].track.hub.actions[1].uri}),Object(l.jsx)(F,{img:c.hits[4].track.images.background,title:c.hits[4].track.title,artist:c.hits[4].track.subtitle,src:c.hits[4].track.hub.actions[1].uri})]}),document.getElementById("b-SP-wrap"));case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()),z=P;function F(t){var e=Object(a.useRef)();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"song",children:Object(l.jsxs)("div",{class:"card",style:{width:"15vw",height:"24rem",marginRight:"1rem"},children:[Object(l.jsx)("img",{src:t.img,class:"card-img-top",alt:"..."}),Object(l.jsxs)("div",{class:"card-body",children:[Object(l.jsx)("h5",{class:"card-title",children:t.title}),Object(l.jsxs)("p",{class:"card-text",children:["Artist: ",t.artist]}),Object(l.jsx)("audio",{src:t.src,className:"play-pause",ref:e,controls:!0})]})]})})})}window.addEventListener("load",Object(S.a)(N.a.mark((function t(){var e,s,a,c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={method:"GET",headers:{"X-RapidAPI-Key":"3223f5b021msh63c832bbb3a0163p1123bajsne910b322f390","X-RapidAPI-Host":"shazam.p.rapidapi.com"}},"https://shazam.p.rapidapi.com/search?term=romantic&locale=en-US&offset=0&limit=5",t.next=4,fetch("https://shazam.p.rapidapi.com/search?term=romantic&locale=en-US&offset=0&limit=5",e);case 4:return s=t.sent,t.next=7,s.json();case 7:a=t.sent,void 0!=(c=a.tracks)&&i.a.render(Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(F,{img:c.hits[0].track.images.background,title:c.hits[0].track.title,artist:c.hits[0].track.subtitle,src:c.hits[0].track.hub.actions[1].uri}),Object(l.jsx)(F,{img:c.hits[1].track.images.background,title:c.hits[1].track.title,artist:c.hits[1].track.subtitle,src:c.hits[1].track.hub.actions[1].uri}),Object(l.jsx)(F,{img:c.hits[2].track.images.background,title:c.hits[2].track.title,artist:c.hits[2].track.subtitle,src:c.hits[2].track.hub.actions[1].uri}),Object(l.jsx)(F,{img:c.hits[3].track.images.background,title:c.hits[3].track.title,artist:c.hits[3].track.subtitle,src:c.hits[3].track.hub.actions[1].uri}),Object(l.jsx)(F,{img:c.hits[4].track.images.background,title:c.hits[4].track.title,artist:c.hits[4].track.subtitle,src:c.hits[4].track.hub.actions[1].uri})]}),document.getElementById("b-wrap")),z();case 11:case"end":return t.stop()}}),t)}))));s(45);function I(){var t=Object(a.useState)(!1),e=Object(w.a)(t,2),s=(e[0],e[1],function(){var t=Object(S.a)(N.a.mark((function t(e,s){var a,c,r,n,h,j;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.target.value,r={method:"GET",headers:{"X-RapidAPI-Key":"3223f5b021msh63c832bbb3a0163p1123bajsne910b322f390","X-RapidAPI-Host":"shazam.p.rapidapi.com"}},c=""===a?"https://shazam.p.rapidapi.com/search?term=romantic&locale=en-US&offset=0&limit=5":"https://shazam.p.rapidapi.com/search?term="+"".concat(a)+"&locale=en-US&offset=0&limit=5",t.next=5,fetch(c,r);case 5:return n=t.sent,t.next=8,n.json();case 8:h=t.sent,void 0===(j=h.tracks)?document.getElementById("result").innerHTML="No Data Found / Api limit exceeded!":i.a.render(Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(F,{img:j.hits[0].track.images.background,title:j.hits[0].track.title,artist:j.hits[0].track.subtitle,src:j.hits[0].track.hub.actions[1].uri}),Object(l.jsx)(F,{img:j.hits[1].track.images.background,title:j.hits[1].track.title,artist:j.hits[1].track.subtitle,src:j.hits[1].track.hub.actions[1].uri}),Object(l.jsx)(F,{img:j.hits[2].track.images.background,title:j.hits[2].track.title,artist:j.hits[2].track.subtitle,src:j.hits[2].track.hub.actions[1].uri})]}),document.getElementById("result"));case 11:case"end":return t.stop()}}),t)})));return function(e,s){return t.apply(this,arguments)}}());return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"main",children:[Object(l.jsxs)("div",{className:"search",children:[Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("input",{type:"text",className:"text-search",placeholder:"Search Music",onChange:s}),Object(l.jsx)(b.a,{className:"s-icon",fontSize:"large",sx:{color:"white"}})]}),Object(l.jsx)("div",{className:"result",id:"result",children:Object(l.jsx)("h1",{id:"text",style:{color:"rgb(66, 65, 65)"},children:"Search Your Music Here !!"})})]}),Object(l.jsx)(h,{}),Object(l.jsx)(f,{})]})})}s(46);function E(){return window.addEventListener("load",(function(){for(var t=localStorage.length-1,e=[],s=t;s>0;s--){var a=JSON.parse(localStorage.getItem(t));e[s]={img:a.img,title:a.title,artist:a.artist,src:a.src},t--}i.a.render(Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Your Playlist"}),Object(l.jsx)("div",{className:"array",children:e.map((function(t){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(F,{img:t.img,title:t.title,artist:t.artist,src:t.src})})}))})]}),document.getElementById("p-result")),document.getElementById("h1").style.visibility="hidden"})),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"main",children:[Object(l.jsxs)("div",{className:"p",children:[Object(l.jsx)("h1",{style:{color:"darkgray"},id:"h1",children:"You don't have any Playlist Currently !"}),Object(l.jsx)("div",{className:"p-result",id:"p-result"})]}),Object(l.jsx)(h,{}),Object(l.jsx)(f,{})]})})}s(47);var C=s(27),R=s.n(C);function A(){var t,e;function s(){return(s=Object(S.a)(N.a.mark((function s(){var a,c,r,n,h,j;return N.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return c={method:"GET",headers:{"X-RapidAPI-Key":"3223f5b021msh63c832bbb3a0163p1123bajsne910b322f390","X-RapidAPI-Host":"shazam.p.rapidapi.com"}},a=""===t?"https://shazam.p.rapidapi.com/search?term=romantic&locale=en-US&offset=0&limit=5":"https://shazam.p.rapidapi.com/search?term="+"".concat(t)+"&locale=en-US&offset=0&limit=5",s.next=4,fetch(a,c);case 4:return r=s.sent,s.next=7,r.json();case 7:n=s.sent,void 0===(h=n.tracks)?alert("No data found / Api limit exceeded"):(i.a.render(Object(l.jsx)(F,{img:h.hits[0].track.images.background,title:h.hits[0].track.title,artist:h.hits[0].track.subtitle,src:h.hits[0].track.hub.actions[1].uri}),document.getElementById("Cp-result")),e={img:h.hits[0].track.images.background,title:h.hits[0].track.title,artist:h.hits[0].track.subtitle,src:h.hits[0].track.hub.actions[1].uri},j=localStorage.length,localStorage.setItem(j,JSON.stringify(e)));case 10:case"end":return s.stop()}}),s)})))).apply(this,arguments)}return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"main",children:[Object(l.jsxs)("div",{className:"Cp",children:[Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("input",{type:"text",className:"text-search",placeholder:"Search Music",onChange:function(e){t=e.target.value}}),Object(l.jsx)(R.a,{className:"s-icon",fontSize:"large",sx:{color:"white"},onClick:function(){return s.apply(this,arguments)}})]}),Object(l.jsx)("div",{className:"Cp-result",id:"Cp-result",children:Object(l.jsx)("h1",{style:{color:"gray"},children:"Create Your Playlist Here !!!!!!"})})]}),Object(l.jsx)(h,{}),Object(l.jsx)(f,{})]})})}var U=s(3);function B(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(U.c,{children:[Object(l.jsx)(U.a,{exact:!0,path:"/",element:Object(l.jsx)(v,{})}),Object(l.jsx)(U.a,{exact:!0,path:"/search",element:Object(l.jsx)(I,{})}),Object(l.jsx)(U.a,{exact:!0,path:"/playlist",element:Object(l.jsx)(E,{})}),Object(l.jsx)(U.a,{exact:!0,path:"/Crplaylist",element:Object(l.jsx)(A,{})})]})})}i.a.render(Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(r.a,{children:Object(l.jsx)(B,{})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.b040c3c5.chunk.js.map