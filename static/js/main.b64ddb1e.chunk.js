(this.webpackJsonprobo=this.webpackJsonprobo||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(6),c=n.n(a),i=(n(21),n(7)),s=n(5),l=n(14),u=n(15),d={searchField:""},h={isPending:!1,robots:[],error:""},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var p=n(1),g=n(2),m=n(4),v=n(3),E=function(e){e.searchField;var t=e.searchChange;return console.log("searchbox"),r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",onChange:t,placeholder:"search for robots..."}))},O=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow tc"},r.a.createElement("img",{alt:"pht",src:"https://robohash.org/".concat(o)}),r.a.createElement("div",null,r.a.createElement("h2",null," ",t," "),r.a.createElement("p",null," ",n)))},w=function(e){var t=e.robots;return console.log("cardlist"),r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(O,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},y=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},C=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(e){var o;return Object(p.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(g.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong"):this.props.children}}]),n}(o.Component),R=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(g.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return console.log("counterButton"),r.a.createElement("div",null,r.a.createElement("button",{color:"red",onClick:this.updateCount},"count : ",this.state.count," "))}}]),n}(r.a.PureComponent),j=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return console.log("Header"),r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(R,{color:"red"}))}}]),n}(r.a.PureComponent),S=(n(27),function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,a=e.isPending,c=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement(j,null),r.a.createElement(E,{searchChange:n}),r.a.createElement(y,null,a?r.a.createElement("h1",null," Loading"):r.a.createElement(C,null,r.a.createElement(w,{robots:c}))))}}]),n}(o.Component)),k=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,pending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(S),_=(n(28),Object(l.createLogger)()),T=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload});default:return e}}}),N=Object(s.d)(T,Object(s.a)(u.a,_));c.a.render(r.a.createElement(i.a,{store:N},r.a.createElement(k,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/roboWithControlledRender",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/roboWithControlledRender","/service-worker.js");f?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(t,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.b64ddb1e.chunk.js.map