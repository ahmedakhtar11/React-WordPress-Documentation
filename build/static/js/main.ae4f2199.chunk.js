(this.webpackJsonpsidebartest=this.webpackJsonpsidebartest||[]).push([[0],{104:function(t,e,n){"use strict";n.r(e);var a,r=n(0),i=n.n(r),c=n(21),s=n.n(c),o=(n(72),n(73),n(74),n(29)),l=n(8),j=n(15),d=n(114),h=n(115),b=n(16),u=n(11),p=n(12),O=n(26),m=n(14),x=n(13),v=n(28),f=n(108),g=n(109),y=n(116),k=n(110),w=n(111),S=n(112),C=n(1),N=function(t){Object(m.a)(n,t);var e=Object(x.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).toggleNavbar=a.toggleNavbar.bind(Object(O.a)(a)),a.state={isOpen:!1},a}return Object(p.a)(n,[{key:"toggleNavbar",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsx)(f.a,{color:"faded",light:!0,expand:"xl",children:Object(C.jsxs)(g.a,{onClick:this.toggleNavbar,children:["Version",Object(C.jsx)(y.a,{isOpen:this.state.isOpen,navbar:!0,className:"collapse",children:Object(C.jsxs)(k.a,{children:[Object(C.jsx)(w.a,{children:Object(C.jsx)(v.LinkContainer,{to:"/",children:Object(C.jsx)(S.a,{children:"Version1"})})}),Object(C.jsx)(w.a,{children:Object(C.jsx)(v.LinkContainer,{to:"/version2",children:Object(C.jsx)(S.a,{children:"Version2"})})})]})})]})})})}}]),n}(r.Component),I=function(t){Object(m.a)(n,t);var e=Object(x.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).toggleNavbar=a.toggleNavbar.bind(Object(O.a)(a)),a.state={isOpen:!1},a}return Object(p.a)(n,[{key:"toggleNavbar",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsx)(f.a,{color:"faded",light:!0,expand:"xl",children:Object(C.jsxs)(g.a,{onClick:this.toggleNavbar,children:["Language",Object(C.jsx)(y.a,{isOpen:this.state.isOpen,navbar:!0,className:"collapse",children:Object(C.jsxs)(k.a,{children:[Object(C.jsx)(w.a,{children:Object(C.jsx)(v.LinkContainer,{to:"/",children:Object(C.jsx)(S.a,{children:"English"})})}),Object(C.jsx)(w.a,{children:Object(C.jsx)(v.LinkContainer,{to:"/chinese",children:Object(C.jsx)(S.a,{children:"Chinese"})})})]})})]})})})}}]),n}(r.Component),P=b.b.div(a||(a=Object(j.a)(["\n  .navbar { background-color: #D76C78; }\n  a, .navbar-nav, .navbar-light .nav-link {\n    color: white;\n    font-weight: bold;\n    &:hover { color: darkred; }\n  }\n  .navbar-brand {\n    font-size: 1.4em;\n    color: white;\n    &:hover { color: darkred; }\n  }\n  .form-center {\n    position: absolute !important;\n    left: 25%;\n    right: 25%;\n  }\n"]))),D=function(){return Object(C.jsx)(P,{children:Object(C.jsxs)(d.a,{expand:"lg",children:[Object(C.jsx)(d.a.Brand,{href:"/",children:"meShare Docs"}),Object(C.jsx)(N,{}),Object(C.jsx)(I,{}),Object(C.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(C.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(C.jsx)(h.a,{className:"ml-auto",children:Object(C.jsx)(h.a.Item,{children:Object(C.jsx)(h.a.Link,{href:"/",children:"Home"})})})})]})})},L=n(18),F=n.n(L),B=n(24);n(9),n(113);var M,z,W,T,G,H,V,E=function(t){Object(m.a)(n,t);var e=Object(x.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).handleinput=function(e){console.log(e.target.value),t.setState({searchPosts:e.target.value})},t.state={datar:[],searchPosts:"v"},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=Object(B.a)(F.a.mark((function t(){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({data:this.props.datar});case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"searchHandler",value:function(t){this.setState({term:t.target.value})}},{key:"render",value:function(){return Object(C.jsx)("div",{children:this.props.datar.map((function(t){return Object(C.jsxs)("ul",{children:[Object(C.jsxs)("div",{id:t.slug,style:J,children:[t.title.rendered," "]}),Object(C.jsx)("div",{id:t.slug,dangerouslySetInnerHTML:{__html:t.content.rendered}})]})}))})}}]),n}(r.Component),J={display:"flex",fontSize:"25px",alignItems:"center",justifyContent:"center"},_=b.b.div(M||(M=Object(j.a)(["\n  display: grid;\n  grid-gap: 10px;\n  margin-top: 1em;\n  margin-left: 15em;\n  margin-right: 6em;\n  grid-auto-rows: minmax(25px, auto);\n"]))),A=function(t){Object(m.a)(n,t);var e=Object(x.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={datar:[],filteredPosts:[],term:""},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=Object(B.a)(F.a.mark((function t(){var e,n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://eventsensei.com/wp-json/wp/v2/posts");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,this.setState({datar:n}),console.log("WordPress Data Fetched from home"),console.log(n);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsx)(_,{children:Object(C.jsx)(E,{datar:this.state.datar})})})}}]),n}(r.Component),R=b.b.div(z||(z=Object(j.a)(["\n  display: grid;\n  grid-gap: 10px;\n  margin-top: 1em;\n  margin-left: 15em;\n  margin-right: 6em;\n  grid-auto-rows: minmax(25px, auto);\n"]))),q=function(t){Object(m.a)(n,t);var e=Object(x.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={datar:[],filteredPosts:[],term:""},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=Object(B.a)(F.a.mark((function t(){var e,n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://mortalacademy.org/wp-json/wp/v2/posts");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,this.setState({datar:n}),console.log("WordPress Data Fetched from home"),console.log(n);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsx)(R,{children:Object(C.jsx)(E,{datar:this.state.datar})})})}}]),n}(r.Component),K=b.b.div(W||(W=Object(j.a)(["\n  display: grid;\n  grid-gap: 10px;\n  margin-top: 1em;\n  margin-left: 15em;\n  margin-right: 6em;\n  grid-auto-rows: minmax(25px, auto);\n"]))),Q=function(t){Object(m.a)(n,t);var e=Object(x.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={datar:[],filteredPosts:[],term:""},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=Object(B.a)(F.a.mark((function t(){var e,n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://javierradillo.com/wp-json/wp/v2/posts");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,this.setState({datar:n}),console.log("WordPress Data Fetched from home"),console.log(n);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsx)(K,{children:Object(C.jsx)(E,{datar:this.state.datar})})})}}]),n}(r.Component),U=b.b.div(T||(T=Object(j.a)(["\n  margin-top: 1em;\n  margin-left: 6em;\n  margin-right: 6em;\n"]))),X=function(){return Object(C.jsx)(U,{children:Object(C.jsx)("h2",{children:"No Match"})})},Y=n(20),Z=n(31),$=b.b.div(G||(G=Object(j.a)(["   \n    position: absolute;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */\n    height: 100%;\n    width: 15%;     /* Set the width of the sidebar */\n    z-index: 1;      /* Stay on top of everything */\n    top: 6em;      /* Stay at the top */\n    background-color: #D76C78; /* Black */\n    overflow-x: hidden;     /* Disable horizontal scroll */\n    padding-top: 10px;\n    ",""])),Object(b.a)(H||(H=Object(j.a)(["\n        @media (max-width: 768px) {\n            width: 30%;\n            }\n        "])))),tt=function(t){Object(m.a)(n,t);var e=Object(x.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).onItemClick=function(t){a.setState({activePath:t})},a.state={activePath:t.location.pathname,items:[{path:"/",name:"meShare Installation",css:"fa fa-fw fa-home",key:1},{path:"/about",name:"meShare Integration",css:"fa fa-fw fa-clock",key:2},{path:"/Getting Started",name:"Getting Started",css:"fas fa-hashtag",key:3}]},a}return Object(p.a)(n,[{key:"render",value:function(){var t=this.state;t.items,t.activePath;return Object(C.jsxs)($,{children:[Object(C.jsx)("h5",{style:nt,children:"Documentation"}),Object(C.jsxs)("ul",{style:at,children:[Object(C.jsx)("li",{children:Object(C.jsx)(Z.Link,{activeClass:"active",to:"meshare-warranty",spy:!0,smooth:!0,children:"meShare Warranty"})}),Object(C.jsx)("li",{children:Object(C.jsx)(Z.Link,{to:"meshare-integration",spy:!0,smooth:!0,children:"meShare Integration"})}),Object(C.jsx)("li",{children:Object(C.jsx)(Z.Link,{to:"getting-started",spy:!0,smooth:!0,children:"Getting Started"})}),Object(C.jsx)("li",{children:Object(C.jsx)(Z.Link,{to:"meshare-installation",spy:!0,smooth:!0,children:"MeShare Installation"})})]})]})}}]),n}(i.a.Component),et=Object(l.o)(tt),nt={color:"white",fontWeight:"bolder",display:"flex",alignItems:"center",justifyContent:"center",textShadow:"2px 1px black",marginTop:"10%",marginBottom:"10%"},at=Object(Y.a)({color:"white",fontWeight:"bold",alignItems:"center",justifyContent:"center",textShadow:"2px 1px black",listStyle:"none"},"justifyContent","space-around"),rt=(b.b.div(V||(V=Object(j.a)(["\n    height: 70px;\n    width: 75px; /* width must be same size as NavBar to center */\n    text-align: center; /* Aligns <a> inside of NavIcon div */\n    margin-bottom: 0;   /* Puts space between NavItems */\n    a {\n        font-size: 2.7em;\n        color: ",";\n        :hover {\n            opacity: 0.7;\n            text-decoration: none; /* Gets rid of underlining of icons */\n        }  \n    }\n"])),(function(t){return t.active?"white":"#9FFFCB"})),function(t){Object(m.a)(n,t);var e=Object(x.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(C.jsx)(et,{})}}]),n}(i.a.Component));var it=function(){return Object(C.jsx)(i.a.Fragment,{children:Object(C.jsxs)(o.BrowserRouter,{children:[Object(C.jsx)(D,{}),Object(C.jsx)(rt,{}),Object(C.jsxs)(l.g,{children:[Object(C.jsx)(l.d,{exact:!0,path:"/",component:A}),Object(C.jsx)(l.d,{path:"/version2",component:q}),Object(C.jsx)(l.d,{path:"/chinese",component:Q}),Object(C.jsx)(l.d,{component:X})]})]})})},ct=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),i(t),c(t)}))};s.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(it,{})}),document.getElementById("root")),ct()},72:function(t,e,n){},73:function(t,e,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.ae4f2199.chunk.js.map