(function(A){function t(t){for(var i,c,o=t[0],s=t[1],a=t[2],g=0,u=[];g<o.length;g++)c=o[g],n[c]&&u.push(n[c][0]),n[c]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(A[i]=s[i]);C&&C(t);while(u.length)u.shift()();return r.push.apply(r,a||[]),e()}function e(){for(var A,t=0;t<r.length;t++){for(var e=r[t],i=!0,o=1;o<e.length;o++){var s=e[o];0!==n[s]&&(i=!1)}i&&(r.splice(t--,1),A=c(c.s=e[0]))}return A}var i={},n={app:0},r=[];function c(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return A[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=A,c.c=i,c.d=function(A,t,e){c.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:e})},c.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},c.t=function(A,t){if(1&t&&(A=c(A)),8&t)return A;if(4&t&&"object"===typeof A&&A&&A.__esModule)return A;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var i in A)c.d(e,i,function(t){return A[t]}.bind(null,i));return e},c.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return c.d(t,"a",t),t},c.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},c.p="/exmaple-vue-qiita-viewer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var C=s;r.push([0,"chunk-vendors"]),e()})({0:function(A,t,e){A.exports=e("56d7")},"0ffe":function(A,t,e){"use strict";var i=e("5570"),n=e.n(i);n.a},"2faf":function(A,t,e){},5570:function(A,t,e){},"56d7":function(A,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("2b0e"),n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),e("Content"),e("Footer")],1)},r=[],c=function(){var A=this,t=A.$createElement;A._self._c;return A._m(0)},o=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"header"},[e("span",{staticClass:"title"},[A._v("Qiita Viewer with Vue")]),e("a",{attrs:{href:"https://github.com/snamiki1212/qiita-viewer-with-vue"}},[A._v("Github")])])}],s={name:"Header",props:{}},a=s,C=(e("9e15"),e("2877")),g=Object(C["a"])(a,c,o,!1,null,"dcf23b70",null),u=g.exports,l=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"articles-wrapper"},A._l(A.articles,function(A){return e("Article",{key:A.id,attrs:{article:A}})}),1),e("ArticlesFooter",{attrs:{isLoading:this.isLoading,getArticles:this.getArticles}})],1)},E=[],B=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("a",{staticClass:"article",attrs:{href:this.article.url}},[e("img",{staticClass:"avator",attrs:{src:this.article.user.profile_image_url}}),e("span",[A._v(A._s(this.article.title))])])},Q=[],w={name:"Article",props:["article"]},h=w,I=(e("0ffe"),Object(C["a"])(h,B,Q,!1,null,"3f5a2a31",null)),f=I.exports,p=function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",{staticClass:"articles-footer"},[A.isLoading?i("img",{staticClass:"loading",attrs:{src:e("cf1c")}}):i("button",{staticClass:"next-button",on:{click:this.getArticles}},[A._v("Next")])])},F=[],d={name:"ArticlesFooter",props:["isLoading","getArticles"]},M=d,v=(e("dbae"),Object(C["a"])(M,p,F,!1,null,"116b763d",null)),D=v.exports,m={name:"Content",components:{Article:f,ArticlesFooter:D},data:function(){return{articles:[],isLoading:!1,page:1}},methods:{getArticles:function(){var A=this;if(!this.isLoading){this.isLoading=!0;var t="https://qiita.com/api/v2/items",e="".concat(t,"?page=").concat(this.page);fetch(e).then(function(A){return A.json()}).then(function(t){A.articles.push.apply(A.articles,t),A.isLoading=!1,A.page+=1}).catch(function(A){return console.dir(A)})}}},beforeMount:function(){this.getArticles()}},L=m,b=(e("ac4e"),Object(C["a"])(L,l,E,!1,null,"0c8e6569",null)),Y=b.exports,G=function(){var A=this,t=A.$createElement;A._self._c;return A._m(0)},k=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"footer"},[e("span",[A._v("\n    This page is created by shun namiki with Vue(vue-cli).\n  ")])])}],S={name:"Footer",props:{}},O=S,U=(e("b6cc"),Object(C["a"])(O,G,k,!1,null,"290aadbd",null)),H=U.exports,K={name:"app",components:{Header:u,Content:Y,Footer:H}},J=K,x=Object(C["a"])(J,n,r,!1,null,"73145070",null),y=x.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(A){return A(y)}}).$mount("#app")},"7c3d":function(A,t,e){},"83d5":function(A,t,e){},"94cb":function(A,t,e){},"9e15":function(A,t,e){"use strict";var i=e("7c3d"),n=e.n(i);n.a},ac4e:function(A,t,e){"use strict";var i=e("94cb"),n=e.n(i);n.a},b6cc:function(A,t,e){"use strict";var i=e("2faf"),n=e.n(i);n.a},cf1c:function(A,t){A.exports="data:image/gif;base64,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"},dbae:function(A,t,e){"use strict";var i=e("83d5"),n=e.n(i);n.a}});
//# sourceMappingURL=app.a2c07f3f.js.map