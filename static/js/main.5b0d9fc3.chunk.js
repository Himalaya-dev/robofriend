(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),c=n.n(a),s=(n(12),n(1)),i=n(2),l=n(4),h=n(3),u=(n(13),n(14),function(e){e.info;throw new Error("ERROR!!!!")}),f=function(e){e.searchField;var t=e.searchChanges;return o.a.createElement(r.Fragment,null,o.a.createElement("input",{type:"search",placeholder:"search here",onChange:t}))},d=(n(15),function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid black",height:"500px"}},e.children)}),m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h2",null,"OOOOps ErroR"):this.props.children}}]),n}(o.a.Component),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChanges=function(t){e.setState({searchField:t.target.value})},e.state={Info:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount"),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({Info:t})}))}},{key:"render",value:function(){var e=this;console.log(this.state.Info);var t=this.state.Info.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return o.a.createElement("div",{className:"tc"},o.a.createElement("h1",null,"Robofriends"),o.a.createElement(f,{searchChanges:this.onSearchChanges}),o.a.createElement(d,null,o.a.createElement(m,null,o.a.createElement(u,{info:t}))))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.5b0d9fc3.chunk.js.map