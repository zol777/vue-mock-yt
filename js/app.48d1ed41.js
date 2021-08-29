(function(e){function t(t){for(var i,a,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={app:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-mock-yt/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"39aa":function(e,t,n){},4009:function(e,t,n){"use strict";n("39aa")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("SearchBar",{on:{termChange:e.onTermChange}}),n("div",{staticClass:"row"},[n("VideoPlayer",{attrs:{video:e.selectedVideo}}),n("VideoList",{attrs:{videos:e.videos},on:{videoSelect:e.videoSelect}})],1)],1)},r=[],a=n("bc3a"),s=n.n(a),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{on:{input:e.onInput}})])},l=[],u={name:"SearchBar",methods:{onInput:function(e){this.$emit("termChange",e.target.value)}}},d=u,p=(n("fb4b"),n("2877")),f=Object(p["a"])(d,c,l,!1,null,"813c319a",null),v=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"list-group col-md-4"},e._l(e.videos,(function(t){return n("VideoDetail",{key:t.eta,attrs:{video:t},on:{videoSelect:e.videoSelect}})})),1)},m=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"list-unstyled",on:{click:e.onVideoSelect}},[n("img",{staticClass:"mr-3",attrs:{src:e.thumbnailUrl}}),n("div",{staticClass:"media-body"},[e._v(" "+e._s(e.video.snippet.title)+" ")])])},y=[],_={name:"VideoDetail",props:{video:Object},computed:{thumbnailUrl:function(){return this.video.snippet.thumbnails.default.url}},methods:{onVideoSelect:function(){this.$emit("videoSelect",this.video)}}},g=_,O=(n("ba2a"),Object(p["a"])(g,b,y,!1,null,"06e79a7b",null)),w=O.exports,S={name:"VideoList",components:{VideoDetail:w},props:{videos:Array},methods:{videoSelect:function(e){this.$emit("videoSelect",e)}}},j=S,V=Object(p["a"])(j,h,m,!1,null,null,null),x=V.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.video?n("div",{staticClass:"col-md-8"},[n("div",{staticClass:"ratio ratio-16x9"},[n("iframe",{attrs:{src:e.videoUrl}})]),n("div",{staticClass:"details"},[n("h4",[e._v(e._s(e.video.snippet.title))]),n("p",[e._v(e._s(e.video.snippet.description))])])]):e._e()},P=[],$={name:"VideoPlayer",computed:{videoUrl:function(){var e=this.video.id.videoId;return"https://www.youtube.com/embed/".concat(e)}},props:{video:Object}},k=$,E=(n("4009"),Object(p["a"])(k,C,P,!1,null,"30206067",null)),M=E.exports,B="AIzaSyCrmOMpOJwmixB_3R1R70xhhLXE0-VPbf4",I="https://www.googleapis.com/youtube/v3/search",L={name:"App",components:{SearchBar:v,VideoList:x,VideoPlayer:M},data:function(){return{videos:[],selectedVideo:null}},methods:{onTermChange:function(e){var t=this;s.a.get(I,{params:{key:B,type:"video",part:"snippet",q:e}}).then((function(e){t.videos=e.data.items}))},videoSelect:function(e){this.selectedVideo=e}}},T=L,U=Object(p["a"])(T,o,r,!1,null,null,null),A=U.exports;new i["a"]({render:function(e){return e(A)}}).$mount("#app")},6554:function(e,t,n){},"8e54":function(e,t,n){},ba2a:function(e,t,n){"use strict";n("8e54")},fb4b:function(e,t,n){"use strict";n("6554")}});
//# sourceMappingURL=app.48d1ed41.js.map