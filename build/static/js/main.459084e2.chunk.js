(this["webpackJsonpreact-wordpress-documentation"]=this["webpackJsonpreact-wordpress-documentation"]||[]).push([[0],{101:function(t,e,n){"use strict";n.r(e);var a,r,i,c,o,s,l,d,j=n(0),h=n.n(j),b=n(19),u=n.n(b),p=(n(69),n(70),n(71),n(29)),x=n(8),O=n(17),f=n.n(O),g=n(21),m=n(10),v=n(11),y=n(13),w=n(12),k=n(14),C=n(15),S=n(1),D=function(t){Object(y.a)(n,t);var e=Object(w.a)(n);function n(){var t;return Object(m.a)(this,n),(t=e.call(this)).state={data:[]},t}return Object(v.a)(n,[{key:"render",value:function(){return Object(S.jsx)("div",{children:this.props.data.map((function(t){return Object(S.jsxs)("ul",{children:[Object(S.jsxs)("div",{id:t.slug,style:I,children:[t.title.rendered," "]}),Object(S.jsx)("div",{id:t.slug,dangerouslySetInnerHTML:{__html:t.content.rendered}})]})}))})}}]),n}(j.Component),I={display:"flex",fontSize:"25px",alignItems:"center",justifyContent:"center"},N=n(109),F=n(110),L=n(24),z=n(26),T=n(103),B=n(104),_=n(111),W=n(105),A=n(106),M=n(107),H=function(t){Object(y.a)(n,t);var e=Object(w.a)(n);function n(t){var a;return Object(m.a)(this,n),(a=e.call(this,t)).toggleNavbar=a.toggleNavbar.bind(Object(L.a)(a)),a.state={isOpen:!1},a}return Object(v.a)(n,[{key:"toggleNavbar",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return Object(S.jsx)("div",{children:Object(S.jsx)(T.a,{color:"faded",light:!0,expand:"xl",children:Object(S.jsxs)(B.a,{onClick:this.toggleNavbar,children:["Version",Object(S.jsx)(_.a,{isOpen:this.state.isOpen,navbar:!0,className:"collapse",children:Object(S.jsxs)(W.a,{children:[Object(S.jsx)(A.a,{children:Object(S.jsx)(z.LinkContainer,{to:"/documentation",children:Object(S.jsx)(M.a,{children:"Version1"})})}),Object(S.jsx)(A.a,{children:Object(S.jsx)(z.LinkContainer,{to:"/version2",children:Object(S.jsx)(M.a,{children:"Version2"})})})]})})]})})})}}]),n}(j.Component),V=function(t){Object(y.a)(n,t);var e=Object(w.a)(n);function n(t){var a;return Object(m.a)(this,n),(a=e.call(this,t)).toggleNavbar=a.toggleNavbar.bind(Object(L.a)(a)),a.state={isOpen:!1},a}return Object(v.a)(n,[{key:"toggleNavbar",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return Object(S.jsx)("div",{children:Object(S.jsx)(T.a,{color:"faded",light:!0,expand:"xl",children:Object(S.jsxs)(B.a,{onClick:this.toggleNavbar,children:["Language",Object(S.jsx)(_.a,{isOpen:this.state.isOpen,navbar:!0,className:"collapse",children:Object(S.jsxs)(W.a,{children:[Object(S.jsx)(A.a,{children:Object(S.jsx)(z.LinkContainer,{to:"/documentation",children:Object(S.jsx)(M.a,{children:"English"})})}),Object(S.jsx)(A.a,{children:Object(S.jsx)(z.LinkContainer,{to:"/chinese",children:Object(S.jsx)(M.a,{children:"Chinese"})})})]})})]})})})}}]),n}(j.Component),E=C.b.div(a||(a=Object(k.a)(["\n  .navbar { background-color: #D76C78; }\n  a, .navbar-nav, .navbar-light .nav-link {\n    color: white;\n    font-weight: bold;\n    &:hover { color: darkred; }\n  }\n  .navbar-brand {\n    font-size: 1.4em;\n    color: white;\n    &:hover { color: darkred; }\n  }\n  .form-center {\n    position: absolute !important;\n    left: 25%;\n    right: 25%;\n  }\n"]))),P=function(){return Object(S.jsx)(E,{children:Object(S.jsxs)(N.a,{expand:"lg",children:[Object(S.jsx)(N.a.Brand,{href:"/",children:"meShare Docs"}),Object(S.jsx)(H,{}),Object(S.jsx)(V,{}),Object(S.jsx)(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(S.jsx)(N.a.Collapse,{id:"basic-navbar-nav",children:Object(S.jsx)(F.a,{className:"ml-auto",children:Object(S.jsx)(F.a.Item,{children:Object(S.jsx)(F.a.Link,{href:"/",children:"Home"})})})})]})})},R=n(61),J=C.b.div(r||(r=Object(k.a)(["   \n    position: absolute;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */\n    height: 100%;\n    width: 15%;     /* Set the width of the sidebar */\n    z-index: 1;      /* Stay on top of everything */\n    top: 6em;      /* Stay at the top */\n    background-color: #D76C78; /* Black */\n    overflow-x: hidden;     /* Disable horizontal scroll */\n    padding-top: 10px;\n    ",""])),Object(C.a)(i||(i=Object(k.a)(["\n        @media (max-width: 768px) {\n            width: 30%;\n            }\n        "])))),q=function(t){Object(y.a)(n,t);var e=Object(w.a)(n);function n(t){var a;return Object(m.a)(this,n),(a=e.call(this,t)).state={},a}return Object(v.a)(n,[{key:"render",value:function(){return Object(S.jsxs)(J,{children:[Object(S.jsx)("h5",{style:G,children:"Documentation"}),this.props.data.map((function(t){return Object(S.jsx)("ul",{style:K,children:Object(S.jsx)("li",{children:Object(S.jsx)(R.Link,{activeClass:"active",to:t.slug,spy:!0,smooth:!0,children:t.title.rendered})})})}))]})}}]),n}(h.a.Component),G={color:"white",fontWeight:"bolder",display:"flex",alignItems:"center",justifyContent:"center",textShadow:"2px 1px black",marginTop:"10%",marginBottom:"10%"},K={color:"white",fontWeight:"bold",alignItems:"center",justifyContent:"center",textShadow:"2px 1px black",listStyle:"none"},Q=C.b.div(c||(c=Object(k.a)(["\n  display: grid;\n  grid-gap: 10px;\n  margin-top: 1em;\n  margin-left: 15em;\n  margin-right: 6em;\n  grid-auto-rows: minmax(25px, auto);\n"]))),U=function(t){Object(y.a)(n,t);var e=Object(w.a)(n);function n(){var t;return Object(m.a)(this,n),(t=e.call(this)).state={data:[]},t}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var t=Object(g.a)(f.a.mark((function t(){var e,n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://moneypowerdictionary.com/wp-json/wp/v2/posts/?per_page=100");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,a=n.filter((function(t){return 3==t.categories})),this.setState({data:a});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)(P,{}),Object(S.jsx)(q,{data:this.state.data}),Object(S.jsx)(Q,{children:Object(S.jsx)(D,{data:this.state.data})})]})}}]),n}(j.Component),X=n(108),Y=C.b.div(o||(o=Object(k.a)(["\n  .navbar { background-color: #D76C78; }\n  a, .navbar-nav, .navbar-light .nav-link {\n    color: white;\n    font-weight: bold;\n    &:hover { color: darkred; }\n  }\n  .navbar-brand {\n    font-size: 1.4em;\n    color: white;\n    &:hover { color: darkred; }\n  }\n  .form-center {\n    position: absolute !important;\n    left: 25%;\n    right: 25%;\n  }\n"]))),Z=function(){return Object(S.jsx)(Y,{children:Object(S.jsxs)(N.a,{expand:"lg",children:[Object(S.jsx)(N.a.Brand,{href:"/",children:"meShare Docs"}),Object(S.jsx)(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(S.jsx)(N.a.Collapse,{id:"basic-navbar-nav",children:Object(S.jsx)(F.a,{className:"ml-auto",children:Object(S.jsx)(F.a.Item,{children:Object(S.jsx)(F.a.Link,{href:"/",children:"Home"})})})})]})})},$=function(t){Object(y.a)(n,t);var e=Object(w.a)(n);function n(){var t;return Object(m.a)(this,n),(t=e.call(this)).state={title:[],description:[],slug:[]},t}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var t=Object(g.a)(f.a.mark((function t(){var e,n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://moneypowerdictionary.com/wp-json/wp/v2/posts/?per_page=100");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,a=n.filter((function(t){return"6"==t.categories})),this.setState({title:a[0].title.rendered}),this.setState({description:a[0].content.rendered}),this.setState({slug:a[0].slug});case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)(Z,{}),Object(S.jsxs)("div",{id:"HeaderStyle",style:tt,children:[Object(S.jsx)("div",{children:"meShare Documentation"}),Object(S.jsx)("br",{})]}),Object(S.jsxs)("div",{id:"buttonStyle",style:et,children:[Object(S.jsx)(X.a,{variant:"dark",size:"lg",children:Object(S.jsx)("a",{style:{color:"white"},href:"/documentation",children:"View Documentation"})})," "]}),Object(S.jsx)("div",{id:"descriptionTitleStyle",style:nt,children:Object(S.jsx)("p",{children:this.state.title})}),Object(S.jsx)("div",{id:"descriptionStyle",style:at,children:Object(S.jsx)("p",{id:this.state.slug,dangerouslySetInnerHTML:{__html:this.state.description}})})]})}}]),n}(j.Component),tt={color:"black",fontWeight:"bolder",display:"flex",alignItems:"center",justifyContent:"center",textShadow:"2px 1px lightgray",marginTop:"4%",fontSize:"63px",fontFamily:"Arial"},et={color:"black",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"6%",fontSize:"100px"},nt={color:"#303030",fontWeight:"bolder",display:"flex",marginLeft:"10%",marginRight:"10%",marginTop:"6%",fontSize:"20px",fontFamily:"Arial"},at={color:"#505050",display:"flex",alignItems:"center",alignContent:"center",justifyContent:"center",marginBottom:"9%",marginLeft:"10%",marginRight:"10%",fontSize:"18px",fontFamily:"Arial"},rt=C.b.div(s||(s=Object(k.a)(["\n  display: grid;\n  grid-gap: 10px;\n  margin-top: 1em;\n  margin-left: 15em;\n  margin-right: 6em;\n  grid-auto-rows: minmax(25px, auto);\n"]))),it=function(t){Object(y.a)(n,t);var e=Object(w.a)(n);function n(){var t;return Object(m.a)(this,n),(t=e.call(this)).state={data:[]},t}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var t=Object(g.a)(f.a.mark((function t(){var e,n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://moneypowerdictionary.com/wp-json/wp/v2/posts/?per_page=100");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,a=n.filter((function(t){return 4==t.categories})),this.setState({data:a});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)(P,{}),Object(S.jsx)(q,{data:this.state.data}),Object(S.jsx)(rt,{children:Object(S.jsx)(D,{data:this.state.data})})]})}}]),n}(j.Component),ct=C.b.div(l||(l=Object(k.a)(["\n  display: grid;\n  grid-gap: 10px;\n  margin-top: 1em;\n  margin-left: 15em;\n  margin-right: 6em;\n  grid-auto-rows: minmax(25px, auto);\n"]))),ot=function(t){Object(y.a)(n,t);var e=Object(w.a)(n);function n(){var t;return Object(m.a)(this,n),(t=e.call(this)).state={data:[]},t}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var t=Object(g.a)(f.a.mark((function t(){var e,n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://moneypowerdictionary.com/wp-json/wp/v2/posts/?per_page=100");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,a=n.filter((function(t){return 5==t.categories})),this.setState({data:a});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)(P,{}),Object(S.jsx)(q,{data:this.state.data}),Object(S.jsx)(ct,{children:Object(S.jsx)(D,{data:this.state.data})})]})}}]),n}(j.Component),st=C.b.div(d||(d=Object(k.a)(["\n\n"]))),lt=function(){return Object(S.jsxs)(st,{children:[Object(S.jsx)(P,{}),Object(S.jsx)("h2",{style:dt,children:"404 Error - Page Not Found"})]})},dt={color:"black",fontWeight:"bolder",display:"flex",alignItems:"center",justifyContent:"center",textShadow:"2px 1px lightgray",marginTop:"6%",marginBottom:"67%",fontSize:"55px",fontFamily:"Arial"};function jt(){return Object(S.jsx)("div",{children:Object(S.jsx)("footer",{style:ht,className:"footer mt-auto py-3 text-white",children:Object(S.jsx)("div",{style:bt,className:"container",children:"meShare Documentation"})})})}var ht={color:"white",fontWeight:"bolder",display:"flex",alignItems:"center",alignContent:"center",justifyContent:"center",fontSize:"18px",fontFamily:"Arial",background:"#D76C78"},bt={color:"white",fontWeight:"bolder",display:"flex",alignItems:"center",alignContent:"center",justifyContent:"center",fontSize:"18px",fontFamily:"Arial"};var ut=function(){return Object(S.jsx)(h.a.Fragment,{children:Object(S.jsxs)(p.BrowserRouter,{children:[Object(S.jsxs)(x.g,{children:[Object(S.jsx)(x.d,{exact:!0,path:"/",component:$}),Object(S.jsx)(x.d,{exact:!0,path:"/documentation",component:U}),Object(S.jsx)(x.d,{path:"/version2",component:it}),Object(S.jsx)(x.d,{path:"/chinese",component:ot}),Object(S.jsx)(x.d,{component:lt})]}),Object(S.jsx)(jt,{})]})})},pt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,112)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),i(t),c(t)}))};u.a.render(Object(S.jsx)(h.a.Fragment,{children:Object(S.jsx)(ut,{})}),document.getElementById("root")),pt()},69:function(t,e,n){},70:function(t,e,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.459084e2.chunk.js.map