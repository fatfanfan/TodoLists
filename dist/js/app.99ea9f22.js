(function(t){function e(e){for(var n,l,u=e[0],i=e[1],d=e[2],s=0,p=[];s<u.length;s++)l=u[s],r[l]&&p.push(r[l][0]),r[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);a&&a(e);while(p.length)p.shift()();return c.push.apply(c,d||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,u=1;u<o.length;u++){var i=o[u];0!==r[i]&&(n=!1)}n&&(c.splice(e--,1),t=l(l.s=o[0]))}return t}var n={},r={app:0},c=[];function l(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=t,l.c=n,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(o,n,function(e){return t[e]}.bind(null,n));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var a=i;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),r=o.n(n);r.a},"20b6":function(t,e,o){"use strict";var n=o("3e81"),r=o.n(n);r.a},"3e81":function(t,e,o){},"414f":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("router-view")],1)},c=[],l={name:"app",components:{}},u=l,i=(o("034f"),o("2877")),d=Object(i["a"])(u,r,c,!1,null,null,null),a=d.exports,s=o("8c4f"),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("ul",[o("router-link",{attrs:{to:"/todolists"}},[o("li",[t._v("todolist-Vue")])]),o("li",[t._v("todolist-Vuex")]),o("li",[t._v("counter-vue")]),o("li",[t._v("counter-vuex")])],1)])},f=[],v={name:"home",computed:{}},m=v,h=(o("ca2f"),Object(i["a"])(m,p,f,!1,null,"10c59aae",null)),b=h.exports,_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todolists"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo,expression:"todo"}],attrs:{type:"text"},domProps:{value:t.todo},on:{input:function(e){e.target.composing||(t.todo=e.target.value)}}}),o("button",{on:{click:t.add}},[t._v("添加")]),t._l(t.todos,function(e,n){return e.completed||e.deleted?t._e():o("div",{key:n},[o("span",{staticClass:"circle",on:{click:function(o){return t.completedTodo(e)}}}),o("span",[t._v(t._s(e.content)+"\n\t\t")]),o("button",{on:{click:function(o){return t.deleteTodo(e)}}},[t._v("X")])])}),o("div",{staticClass:"completed"},[o("h2",[t._v("已完成")]),t._l(t.todos,function(e,n){return e.completed?o("div",[t._v("\n\t\t\t"+t._s(e.content)+"\n\t\t")]):t._e()})],2)],2)},g=[],y={name:"todolists",data:function(){return{todo:"",todos:[{content:"第一个todo",completed:!0,deleted:!1},{content:"第二个todo",completed:!1,deleted:!1},{content:"第三个todo",completed:!1,deleted:!1},{content:"第四个todo",completed:!0,deleted:!1}],completedTodos:[]}},methods:{add:function(){console.log(this.todo),this.todo&&(this.todos.unshift({content:this.todo,completed:!1,deleted:!1}),console.log(this.todos)),this.todo=""},deleteTodo:function(t){t.deleted=!0},completedTodo:function(t){t.completed=!0}}},x=y,w=(o("20b6"),Object(i["a"])(x,_,g,!1,null,"837dd3b4",null)),O=w.exports;n["a"].use(s["a"]);var j=new s["a"]({routes:[{path:"/",component:b},{path:"/todolists",component:O}]}),k=j;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(a)},router:k}).$mount("#app")},"64a9":function(t,e,o){},ca2f:function(t,e,o){"use strict";var n=o("414f"),r=o.n(n);r.a},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.99ea9f22.js.map