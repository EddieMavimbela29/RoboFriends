(this.webpackJsonprobo=this.webpackJsonprobo||[]).push([[0],{28:function(e,t,r){e.exports=r(63)},60:function(e,t,r){},61:function(e,t,r){},63:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(5),o=r.n(c),l=(r(33),r(6)),s=r(9),i=r.n(s),u=r(21),h=r(10),b=r(22),m=r.n(b),d=function(e){e.searchField;var t=e.searchChange;return console.log("searchbox"),n.a.createElement("div",{className:"pa2"},n.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",onChange:t,placeholder:"search for robots..."}))},p=function(e){var t=e.name,r=e.email,a=e.id;return n.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow tc"},n.a.createElement("img",{alt:"pht",src:"https://robohash.org/".concat(a)}),n.a.createElement("div",null,n.a.createElement("h2",null," ",t," "),n.a.createElement("p",null," ",r)))},f=function(e){var t=e.robots;return console.log("cardlist"),n.a.createElement("div",null,t.map((function(e,r){return n.a.createElement(p,{key:r,id:t[r].id,name:t[r].name,email:t[r].email})})))},g=function(e){return n.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},E=r(23),v=r(24),j=r(27),O=r(26),F=function(e){Object(j.a)(r,e);var t=Object(O.a)(r);function r(e){var a;return Object(E.a)(this,r),(a=t.call(this,e)).state={hasError:!1},a}return Object(v.a)(r,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?n.a.createElement("h1",null,"Something went wrong"):this.props.children}}]),r}(a.Component),w=(r(60),function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),r=t[0],c=t[1],o=Object(a.useState)(""),s=Object(h.a)(o,2),b=s[0],p=s[1],E=Object(l.b)((function(e){return e.robot})),v=E.isFetching,j=E.error;Object(a.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://jsonplaceholder.typicode.com/users");case 3:t=e.sent,c(t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=r.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())}));return n.a.createElement("div",{className:"tc"},n.a.createElement("h1",{className:"f1"},"RoboFriends"),n.a.createElement(d,{searchChange:function(e){p(e.target.value)}}),n.a.createElement(g,null,v&&n.a.createElement("h1",null,"Loading"),j&&n.a.createElement("h1",null,"server shutdown"),n.a.createElement(F,null,n.a.createElement(f,{robots:O}))))}),y=(r(61),r(2)),S=r(3),k=Object(S.a)({name:"robot",initialState:{robots:[],isFetching:!1,error:!1},reducers:{roboStart:function(e){e.isFetching=!0},roboSuccess:function(e,t){e.isFetching=!1,e.robots=t.payload},roboFailure:function(e){e.isFetching=!1,e.error=!0}}}),x=k.actions,C=(x.roboStart,x.roboFailure,x.roboSuccess,k.reducer),N=Object(S.a)({name:"robot",initialState:{searchField:""},reducers:{change_searchFeild:function(e,t){e.searchField=t.payload}}}),L=(N.actions.change_searchFeild,N.reducer),J=r(4),_=r(25),B=Object(_.createLogger)(),D=Object(y.b)({robot:C,searchField:L}),I=Object(y.d)(D,Object(y.a)(J.a,B));o.a.render(n.a.createElement(l.a,{store:I},n.a.createElement(w,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.92249148.chunk.js.map