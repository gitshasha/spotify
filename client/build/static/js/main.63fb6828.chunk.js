(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{84:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(33),r=c.n(s),o=(c(39),c(6)),i=c(10),l=c.n(i);var j=c(1);var b=c(91),u=c(34),d=c.n(u);c(84);var h=function(e){var t=e.genrescore;return console.log(t),Object(j.jsx)("div",{className:"alltop",children:t&&Object.keys(t).map((function(e,c){return Object(j.jsxs)("div",{className:"topgenre",children:[Object(j.jsx)("div",{className:"genrename",children:e})," ",Object(j.jsx)("svg",{viewBox:"0 0 36 36",className:"circular-chart",children:Object(j.jsx)("path",{className:"circle",strokeDasharray:[t[e],100],d:"M18 2.0845\r a 15.9155 15.9155 0 0 1 0 31.831\r a 15.9155 15.9155 0 0 1 0 -31.831"})})]},c)}))})},O=c(89),m=c(90),f=c(3);var g=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(o.a)(s,2),i=r[0],u=r[1],d=Object(a.useState)(""),h=Object(o.a)(d,2),g=h[0],p=h[1],x=Object(f.g)();return Object(j.jsx)(O.a,{children:Object(j.jsxs)(m.a,{children:[Object(j.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicText",children:[Object(j.jsx)(m.a.Label,{children:"Username"}),Object(j.jsx)(m.a.Control,{type:"Text",placeholder:"Username",onChange:function(e){n(e.target.value)}})]}),Object(j.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(j.jsx)(m.a.Label,{children:"Email address"}),Object(j.jsx)(m.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){u(e.target.value)}}),Object(j.jsx)(m.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(j.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(j.jsx)(m.a.Label,{children:"Password"}),Object(j.jsx)(m.a.Control,{type:"password",placeholder:"Password",onChange:function(e){p(e.target.value)}})]}),Object(j.jsx)(b.a,{onClick:function(){""!=c&&""!=g&&l.a.post("http://localhost:3001/api/auth/register",{email:i,username:c,password:g}).then((function(e){console.log(e),window.localStorage.setItem("usertoken",e.data._id),x("/")})).catch((function(e){console.log(e)}))},children:"Submit"})]})})},p=new d.a({clientId:"db564f6b4a1e41bab7cc3e8b4df55bf7"});var x=function(e){var t=e.code,c=Object(a.useState)(window.localStorage.getItem("accesstoken")),n=Object(o.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)(window.localStorage.getItem("token")),u=Object(o.a)(i,2);u[0],u[1],Object(a.useEffect)((function(){null===window.localStorage.getItem("accesstoken")&&l.a.post("http://localhost:3001/login",{code:t}).then((function(e){r(e.data.accessToken),window.localStorage.setItem("accesstoken",e.data.accessToken),window.history.pushState({},null,"/")})).catch((function(e){console.log(e)}))}),[t]);var d=Object(a.useState)(""),O=Object(o.a)(d,2),m=O[0],g=(O[1],Object(a.useState)([])),x=Object(o.a)(g,2),v=x[0],w=x[1],S=Object(a.useState)([]),y=Object(o.a)(S,2),k=y[0],I=y[1],N=Object(a.useState)([]),E=Object(o.a)(N,2),C=(E[0],E[1]),T=Object(a.useState)(),L=Object(o.a)(T,2),B=(L[0],L[1],Object(a.useState)(0)),P=Object(o.a)(B,2),U=(P[0],P[1],Object(a.useState)("")),_=Object(o.a)(U,2),G=(_[0],_[1],Object(a.useState)("")),M=Object(o.a)(G,2);return M[0],M[1],Object(f.g)(),Object(a.useEffect)((function(){s&&p.setAccessToken(s)}),[s]),Object(a.useEffect)((function(){if(!m)return C([]);if(s){var e=!1;return p.searchTracks(m).then((function(t){e||C(t.body.tracks.items.map((function(e){var t=e.album.images.reduce((function(e,t){return t.height<e.height?t:e}),e.album.images[0]);return{artist:e.artists[0].name,title:e.name,uri:e.uri,albumUrl:t.url}})))})),function(){return e=!0}}}),[m,s]),Object(a.useEffect)((function(){p.getMyTopArtists({limit:50}).then((function(e){var t=e.body.items,c=[];t.map((function(e,t){c.push(e.genres)}));for(var a={},n=0,s=0;s<c.length;s++)for(var r=0;r<c[s].length;r++)void 0==a[c[s][r]]?a[c[s][r]]=1:a[c[s][r]]++;for(var o in a)n+=a[o];var i=Object.keys(a).sort((function(e,t){return a[t]-a[e]}));w(i);for(var l={},j=0;j<3;j++)l[i[j]]=a[i[j]]/n*100;I(l)}),(function(e){console.log("Something went wrong!",e)}))}),[s]),console.log(v),Object(j.jsxs)("div",{style:{height:"100vh"},children:[Object(j.jsx)(h,{genrescore:k}),Object(j.jsx)(b.a,{onClick:function(){var e=window.localStorage.getItem("usertoken");l.a.put("http://localhost:3001/api/users/".concat(e),{userId:e,genre:v,topgenre:k}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:"Submit"})]})};var v=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(o.a)(s,2),i=(r[0],r[1],Object(a.useState)([])),l=Object(o.a)(i,2),b=(l[0],l[1],Object(f.g)());return Object(a.useEffect)((function(){null===window.localStorage.getItem("usertoken")&&b("/home")}),[]),Object(a.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("code"),t=window.localStorage.getItem("token");!t&&e&&(t=e,window.location.hash="",window.localStorage.setItem("token",t)),n(t)}),[]),Object(j.jsx)(j.Fragment,{children:c?Object(j.jsx)(x,{code:c}):Object(j.jsx)(O.a,{className:"d-flex justify-content-center align-items-center",style:{minHeight:"100vh"},children:Object(j.jsx)("a",{className:"btn btn-success btn-lg",href:"https://accounts.spotify.com/authorize?client_id=db564f6b4a1e41bab7cc3e8b4df55bf7&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-top-read%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20user-read-recently-played",children:"Login With Spotify"})})})},w=c(11);var S=function(){var e=Object(f.g)();return Object(j.jsxs)("div",{children:[Object(j.jsx)(b.a,{onClick:function(){e("/register")},children:"Register"}),Object(j.jsx)("div",{className:"optionoutlet",children:Object(j.jsx)(f.a,{})})]})};new URLSearchParams(window.location.search).get("code");var y=function(){return Object(j.jsx)(w.a,{children:Object(j.jsxs)(f.d,{children:[Object(j.jsx)(f.b,{path:"/",element:Object(j.jsx)(v,{})}),Object(j.jsx)(f.b,{path:"/home",element:Object(j.jsx)(S,{})}),Object(j.jsx)(f.b,{path:"/register",element:Object(j.jsx)(g,{})})]})})};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.63fb6828.chunk.js.map