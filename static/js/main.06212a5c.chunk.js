(this["webpackJsonpmy-page"]=this["webpackJsonpmy-page"]||[]).push([[0],{12:function(e,t,n){e.exports={About:"About_About__scHdH",bio:"About_bio__2hiME",bioContainer:"About_bioContainer__1g6Ae",background:"About_background__1poDC",skills:"About_skills__3h2kV",skillIcons:"About_skillIcons__2JOFL",introHeading:"About_introHeading__3HJON",introName:"About_introName__wk0vz",introParagraph:"About_introParagraph__3FLIn",ImgContainer:"About_ImgContainer__13YFZ"}},3:function(e,t,n){e.exports={Projects:"Projects_Projects__1ECks",container:"Projects_container__23tIQ",jammingBox:"Projects_jammingBox__3U8cW",redditBox:"Projects_redditBox__2GIld",projectPreview:"Projects_projectPreview__r3l2B",portfolioBox:"Projects_portfolioBox__1SK2j",redditLogo:"Projects_redditLogo__2lVE9",imgContainer:"Projects_imgContainer__2Iqgd",projectJammmingImg:"Projects_projectJammmingImg__3vpSY",projectRedditImg:"Projects_projectRedditImg__14UUY",techUsed:"Projects_techUsed__21iBn",btnContainer:"Projects_btnContainer__3VgKL",projectLinks:"Projects_projectLinks__2rjKu"}},31:function(e,t,n){e.exports={Landing:"Landing_Landing__3WE0r",intro:"Landing_intro__2XESB",greeting:"Landing_greeting__3ni_L",slideFromLeft:"Landing_slideFromLeft__w07_9",tint:"Landing_tint__3mBJL"}},37:function(e,t,n){e.exports={NavItems:"NavigationItems_NavItems__2qeTe",NavItemsContainer:"NavigationItems_NavItemsContainer__3Zkhq",Logo:"NavigationItems_Logo__1H4MB",Links:"NavigationItems_Links__2gqYL"}},40:function(e,t,n){e.exports={NavBar:"NavBar_NavBar__50_dp",Links:"NavBar_Links__3uMPM"}},41:function(e,t,n){e.exports={Contact:"Contact_Contact__2CqGJ",boxContainer:"Contact_boxContainer__7mFmb"}},42:function(e,t,n){e.exports={Footer:"Footer_Footer__238hM",Links:"Footer_Links__mnUs6"}},55:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),i=n.n(a),c=n(5),s=n.n(c),o=(n(55),n(8)),l=n(13),j=n(40),d=n.n(j),b=n(14),m=n(15),h=n(37),u=n.n(h);function p(){var e=Object(l.a)(["\n  transform: translateY(",");\n  transition: transform 0.75s;\n"]);return p=function(){return e},e}var O=b.a.div(p(),(function(e){return e.animate?"0":"-100vh"})),f=function(){var e=Object(a.useState)({itemOne:!1}),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(a.useRef)(null);return Object(a.useLayoutEffect)((function(){var e=c.current.getBoundingClientRect().top,t=function(){var t=window.scrollY+window.innerHeight;e<t&&i((function(e){return Object(m.a)(Object(m.a)({},e),{},{itemOne:!0})}))};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[]),Object(r.jsx)(O,{animate:n.itemOne,ref:c,className:u.a.NavItems,children:Object(r.jsx)("div",{className:u.a.NavItemsContainer,children:Object(r.jsx)("div",{className:u.a.Logo,children:Object(r.jsx)("h3",{children:Object(r.jsx)("a",{href:"https://knorful.github.io/my-page/",children:"KRISTOPHER NORFUL"})})})})})};function x(){var e=Object(l.a)(["\n  position: absolute;\n  top: 32%;\n  left: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n\n  &:focus {\n    outline: none;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background: ",";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n    @media (max-width: 430px) {\n      width: 1.85rem;\n    }\n  }\n"]);return x=function(){return e},e}function g(){var e=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    background: #ebb97a;\n    transform: ",";\n    height: 100vh;\n    text-align: left;\n    padding: 2rem;\n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: all .5s ease-in-out;\n\n    @media (max-width: 576px) {\n      width: 65%;\n    }\n\n    a {\n      font-size: 2rem;\n      text-transform: uppercase;\n      padding: 2rem 0;\n      font-weight: bold;\n      letter-spacing: 0.5rem;\n      color: #0d0c1d;\n      text-decoration: none;\n      transition: color 0.3s linear;\n\n      @media (max-width: 576px) {\n        font-size: 1.5rem;\n        text-align: center;\n      }\n\n      &:hover {\n        opacity: .5;\n        transition all .5s;\n      }\n    }\n  "]);return g=function(){return e},e}var v=b.a.nav(g(),(function(e){return e.open?"translateX(0)":"translateX(-100%)"})),_=function(e){var t=e.open;return Object(r.jsxs)(v,{open:t,children:[Object(r.jsx)("a",{href:"#about",children:"About"}),Object(r.jsx)("a",{href:"#projects",children:"Projects"}),Object(r.jsx)("a",{href:"#contacts",children:"Contact"}),Object(r.jsx)("a",{href:"https://jmp.sh/LFFeojl",target:"_blank",rel:"noreferrer",children:"Resume"}),Object(r.jsxs)("div",{className:d.a.Links,children:[Object(r.jsx)("a",{title:"Follow me on Twiiter!",target:"_blank",rel:"noreferrer",href:"https://twitter.com/k_Norful",children:Object(r.jsx)("i",{className:"fab fa-twitter"})}),Object(r.jsx)("a",{title:"Connect with me on LinkedIn!",target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/kristopher-norful/",children:Object(r.jsx)("i",{className:"fab fa-linkedin-in"})}),Object(r.jsx)("a",{title:"Check out my repos!",target:"_blank",rel:"noreferrer",href:"https://github.com/knorful",children:Object(r.jsx)("i",{className:"fab fa-github"})})]})]})},N=b.a.button(x(),(function(e){return e.open?"#0D0C1D":"#EFFFFA"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"0":"1"}),(function(e){return e.open?"translateX(20px)":"translateX(0)"}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),k=function(e){var t=e.open,n=e.setOpen;return Object(r.jsxs)(N,{"aria-label":"sidebar button",open:t,onClick:function(){return n(!t)},children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},w=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(a.useRef)();return Object(r.jsxs)("div",{className:d.a.NavBar,children:[Object(r.jsx)(f,{}),Object(r.jsxs)("div",{ref:c,children:[Object(r.jsx)(k,{open:n,setOpen:i}),Object(r.jsx)(_,{open:n,setOpen:i})]})]})},C=n(31),L=n.n(C),I=n.p+"static/media/keyboard.e0d6b607.jpg",P=function(){return Object(r.jsxs)("div",{className:L.a.Landing,children:[Object(r.jsx)("div",{className:L.a.intro,children:Object(r.jsxs)("div",{className:L.a.greeting,children:[Object(r.jsx)("h2",{children:"Hello,"}),Object(r.jsxs)("p",{children:["I'm ",Object(r.jsx)("span",{children:"Kris"}),", it's a pleasure to meet you. Please take a look around!"]}),Object(r.jsx)("div",{children:Object(r.jsxs)("a",{href:"#about",children:["About Me ",Object(r.jsx)("i",{className:"fas fa-chevron-right"})]})})]})}),Object(r.jsx)("figure",{className:L.a.tint,children:Object(r.jsx)("img",{src:I,alt:"keyboard"})})]})},y=n(12),S=n.n(y),A=n.p+"static/media/me.a43b08a5.JPG";function R(){var e=Object(l.a)(["\n  transform: translateX(",");\n  transition: transform 1s 1s;\n"]);return R=function(){return e},e}function E(){var e=Object(l.a)(["\n  transform: translateY(",");\n  transition: transform 1s 0.4s;\n"]);return E=function(){return e},e}function T(){var e=Object(l.a)(["\n  transform: translateX(",");\n  transition: transform 1s 1s;\n\n  @media (max-width: 361px) {\n    width: 100%;\n  }\n"]);return T=function(){return e},e}var B=b.a.div(T(),(function(e){return e.animate?"0":"-100vw"})),M=b.a.div(E(),(function(e){return e.animate?"0":"100vh"})),F=b.a.div(R(),(function(e){return e.animate?"0":"100vw"})),H=function(){var e=Object(a.useState)({itemOne:!1,itemTwo:!1,itemThree:!1}),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(a.useRef)(null),s=Object(a.useRef)(null),l=Object(a.useRef)(null);return Object(a.useLayoutEffect)((function(){var e=l.current.getBoundingClientRect().top,t=function(){var t=window.scrollY+window.innerHeight;e<t&&i((function(e){return Object(m.a)(Object(m.a)({},e),{},{itemOne:!0,itemTwo:!0,itemThree:!0})}))};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[]),Object(r.jsx)("div",{id:"about",className:S.a.About,children:Object(r.jsxs)("div",{className:S.a.bio,children:[Object(r.jsx)("h1",{children:"About Me"}),Object(r.jsxs)("div",{className:S.a.bioContainer,children:[Object(r.jsx)(B,{style:{textAlign:"center"},animate:n.itemOne,ref:c,children:Object(r.jsxs)("div",{className:S.a.skills,children:[Object(r.jsx)("h2",{children:"Skills"}),Object(r.jsxs)("div",{className:S.a.skillIcons,children:[Object(r.jsx)("i",{className:"fab fa-react"}),Object(r.jsx)("i",{className:"fab fa-js-square"}),Object(r.jsx)("i",{className:"fab fa-css3"}),Object(r.jsx)("i",{className:"fab fa-html5"}),Object(r.jsx)("i",{className:"fab fa-git"}),Object(r.jsx)("i",{className:"fab fa-node"}),Object(r.jsx)("i",{className:"fab fa-npm"})]})]})}),Object(r.jsx)(M,{animate:n.itemTwo,ref:s,children:Object(r.jsx)("div",{className:S.a.ImgContainer,children:Object(r.jsx)("img",{src:A,alt:"me standing in front of tree"})})}),Object(r.jsx)(F,{animate:n.itemThree,ref:l,className:S.a.background,children:Object(r.jsxs)("div",{className:S.a.backgroundContainer,children:[Object(r.jsx)("p",{className:S.a.introHeading,children:"MY NAME IS"}),Object(r.jsx)("h1",{className:S.a.introName,children:"KRISTOPHER NORFUL"}),Object(r.jsxs)("p",{className:S.a.introParagraph,children:["I am a Computer Science grad from the University of Arkansas at Little Rock with a minor in Digital Graphics. I have 5 months working experience as a Software Tester and 9 months working experience as a Solutions Developer Intern. During that time I gained a working knowledge of JavaScript, HTML5, CSS, SQL, Git.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"I am a member of Phi Theta Kappa Honor Society, Golden Key Honor Society, and the National Society of Collegiate Scholars - Little Rock Chapter."]})]})})]})]})})},U=n(47),J=n.n(U),D=n(3),V=n.n(D),Y=n(89),G=n(95),X=n(93),K=n(69),q=n(91),W=n(94),z=n.p+"static/media/jammmingPreview.3a64a946.PNG",Q=n.p+"static/media/redditPreview.9a4ca6d2.PNG";function Z(){var e=Object(l.a)(["\n  transform: translateX(",");\n  transition: transform 1s 0.6s;\n"]);return Z=function(){return e},e}var $=Object(Y.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),maxWidth:"1000px"}}})),ee=b.a.div(Z(),(function(e){return e.animate?"0":"100vw"})),te=function(){var e=$(),t=i.a.useState(!1),n=Object(o.a)(t,2),c=n[0],s=n[1],l=i.a.useState(!1),j=Object(o.a)(l,2),d=j[0],b=j[1],h=i.a.useState(!1),u=Object(o.a)(h,2),p=u[0],O=u[1],f=Object(a.useState)(!1),x=Object(o.a)(f,2),g=x[0],v=x[1],_=Object(a.useState)(!1),N=Object(o.a)(_,2),k=N[0],w=N[1],C=Object(a.useState)(!1),L=Object(o.a)(C,2),I=L[0],P=L[1],y=Object(a.useState)({itemOne:!1}),S=Object(o.a)(y,2),A=S[0],R=S[1],E=Object(a.useRef)(null);Object(a.useLayoutEffect)((function(){var e=E.current.getBoundingClientRect().top,t=function(){var t=window.scrollY+window.innerHeight;e<t&&R((function(e){return Object(m.a)(Object(m.a)({},e),{},{itemOne:!0,itemTwo:!0})}))};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[]);var T=function(){s(!1),v(!1)};return Object(r.jsx)("div",{id:"projects",className:V.a.Projects,children:Object(r.jsxs)(q.a,{maxWidth:"xl",children:[Object(r.jsx)("h1",{children:"Projects"}),Object(r.jsxs)(ee,{ref:E,animate:A.itemOne,className:V.a.container,children:[Object(r.jsxs)("div",{className:V.a.jammingBox,onMouseEnter:function(){return v(!0)},onMouseLeave:function(){return v(!1)},children:[Object(r.jsx)("p",{children:"Jammming"}),g?Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(){s(!0)},children:"View Project"}),Object(r.jsx)(G.a,{"aria-labelledby":"jammming project","aria-describedby":"jammming-project-description",className:e.modal,open:c,onClose:T,closeAfterTransition:!0,BackdropComponent:X.a,BackdropProps:{timeout:500},children:Object(r.jsx)(K.a,{in:c,children:Object(r.jsx)(W.a,{onClickAway:T,children:Object(r.jsx)("div",{className:e.paper,children:Object(r.jsxs)("div",{className:V.a.projectPreview,children:[Object(r.jsxs)("div",{className:V.a.imgContainer,children:[Object(r.jsx)("img",{className:V.a.projectJammmingImg,src:z,alt:"jammming project"}),Object(r.jsxs)("div",{className:V.a.btnContainer,children:[Object(r.jsx)("a",{href:"https://storyxpress.co/video/knqstlu4cjcuwt6bh",target:"_blank",rel:"noreferrer",className:V.a.projectLinks,children:"VIEW DEMO"}),Object(r.jsx)("a",{className:V.a.projectLinks,href:"https://github.com/knorful/Jamming",target:"_blank",rel:"noreferrer",children:"GITHUB"})]})]}),Object(r.jsxs)("div",{className:V.a.projectDescription,children:[Object(r.jsx)("h4",{children:"Project"}),Object(r.jsx)("h2",{children:"Jammming"}),Object(r.jsxs)("div",{className:V.a.techUsed,children:[Object(r.jsx)("p",{children:"REACT"}),Object(r.jsx)("p",{children:"JAVASCRIPT"}),Object(r.jsx)("p",{children:"AXIOS"}),Object(r.jsx)("p",{children:"HTML & CSS"}),Object(r.jsx)("p",{children:"RESPONSIVE"}),Object(r.jsx)("p",{children:"SPOTIFY API"})]}),Object(r.jsxs)("div",{className:V.a.projectAbout,children:[Object(r.jsx)("h4",{children:"About"}),Object(r.jsx)("p",{children:"A web application, built with React and Spotify API, that allows users to search the Spotify library, create a custom playlist, modify exisiting playlists, and then save the playlist to their Spotify accounts. (Requires having a Spotify account for playlists to be saved.)"})]})]})]})})})})})]}):null]}),Object(r.jsxs)("div",{className:V.a.redditBox,onMouseEnter:function(){return w(!0)},onMouseLeave:function(){return w(!1)},children:[Object(r.jsx)(J.a,{className:V.a.redditLogo}),Object(r.jsxs)("h2",{children:["Reddit ",Object(r.jsx)("span",{children:"Minimal"})]}),k?Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(){b(!0)},children:"View Project"}),Object(r.jsx)(G.a,{"aria-labelledby":"Reddit project","aria-describedby":"Reddit-project-description",className:e.modal,open:d,onClose:function(){b(!1),w(!1)},closeAfterTransition:!0,BackdropComponent:X.a,BackdropProps:{timeout:500},children:Object(r.jsx)(K.a,{in:d,children:Object(r.jsx)("div",{className:e.paper,children:Object(r.jsxs)("div",{className:V.a.projectPreview,style:{display:"flex"},children:[Object(r.jsxs)("div",{className:V.a.imgContainer,children:[Object(r.jsx)("img",{className:V.a.projectRedditImg,src:Q,alt:"reddit minimal project"}),Object(r.jsxs)("div",{className:V.a.btnContainer,children:[Object(r.jsx)("a",{className:V.a.projectLinks,href:"https://jovial-kare-0edb36.netlify.app/?#/",target:"_blank",rel:"noreferrer",children:"VIEW DEMO"}),Object(r.jsx)("a",{className:V.a.projectLinks,href:"https://github.com/knorful/reddit-minimal",target:"_blank",rel:"noreferrer",children:"GITHUB"})]})]}),Object(r.jsxs)("div",{className:V.a.projectDescription,children:[Object(r.jsx)("h4",{children:"Project"}),Object(r.jsx)("h2",{children:"Reddit"}),Object(r.jsxs)("div",{className:V.a.techUsed,children:[Object(r.jsx)("p",{children:"REACT HOOKS"}),Object(r.jsx)("p",{children:"REACT ROUTER"}),Object(r.jsx)("p",{children:"REDUX"}),Object(r.jsx)("p",{children:"MATERIAL UI"}),Object(r.jsx)("p",{children:"AXIOS"}),Object(r.jsx)("p",{children:"JAVASCRIPT"}),Object(r.jsx)("p",{children:"HTML & CSS"}),Object(r.jsx)("p",{children:"RESPONSIVE"}),Object(r.jsx)("p",{children:"REDDIT API"})]}),Object(r.jsxs)("div",{className:V.a.projectAbout,children:[Object(r.jsx)("h4",{children:"About"}),Object(r.jsx)("p",{children:"Reddit Minimal is an unofficial Reddit frontend app concept, simplified to allow users to browse popular and search, trending, and top Reddit posts."})]})]})]})})})})]}):null]}),Object(r.jsxs)("div",{className:V.a.portfolioBox,onMouseEnter:function(){return P(!0)},onMouseLeave:function(){return P(!1)},children:[Object(r.jsx)("p",{children:"Portfolio"}),I?Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(){O(!0)},children:"View Project"}),Object(r.jsx)(G.a,{"aria-labelledby":"portfolio project","aria-describedby":"portfolio-project-description",className:e.modal,open:p,onClose:function(){O(!1),P(!1)},closeAfterTransition:!0,BackdropComponent:X.a,BackdropProps:{timeout:500},children:Object(r.jsx)(K.a,{in:p,children:Object(r.jsx)("div",{className:e.paper,children:Object(r.jsxs)("div",{className:V.a.projectPreview,style:{display:"flex"},children:[Object(r.jsx)("div",{className:V.a.projectImg}),Object(r.jsxs)("div",{className:V.a.projectDescription,children:[Object(r.jsx)("h4",{children:"Project"}),Object(r.jsx)("h2",{children:"Portfolio Website"}),Object(r.jsxs)("div",{className:V.a.techUsed,children:[Object(r.jsx)("p",{children:"REACT"}),Object(r.jsx)("p",{children:"JAVASCRIPT"}),Object(r.jsx)("p",{children:"HTML & CSS"})]}),Object(r.jsxs)("div",{className:V.a.projectAbout,children:[Object(r.jsx)("h4",{children:"About"}),Object(r.jsx)("p",{children:"My portfolio website to showcase my latest projects. This is a single page application built using React."}),Object(r.jsxs)("div",{className:V.a.btnContainer,children:[Object(r.jsx)("a",{className:V.a.projectLinks,href:"https://knorful.github.io/my-page/",children:"VIEW DEMO"}),Object(r.jsx)("a",{className:V.a.projectLinks,href:"https://github.com/knorful/my-page",rel:"noreferrer",children:"GITHUB"})]})]})]})]})})})})]}):null]})]})]})})},ne=n(41),re=n.n(ne),ae=function(){return Object(r.jsx)("div",{id:"contacts",className:re.a.Contact,children:Object(r.jsx)("div",{className:re.a.boxContainer,children:Object(r.jsxs)("form",{action:"https://getform.io/f/d95c6286-2424-489d-a80f-b7285ec54d7a",method:"POST",children:[Object(r.jsx)("h1",{children:"Contact"}),Object(r.jsx)("p",{children:"Leave a message. Let's connect!"}),Object(r.jsx)("input",{type:"text",placeholder:"Name",name:"name"}),Object(r.jsx)("input",{type:"email",placeholder:"Enter Email",name:"email"}),Object(r.jsx)("textarea",{rows:"10",cols:"30",name:"message",placeholder:"Your message..."}),Object(r.jsx)("button",{type:"submit",children:"SUBMIT"})]})})})},ie=n(42),ce=n.n(ie),se=function(){return Object(r.jsxs)("footer",{className:ce.a.Footer,children:[Object(r.jsx)("p",{children:"\xa9 KRISTOPER NORFUL 2021"}),Object(r.jsxs)("div",{className:ce.a.Links,children:[Object(r.jsx)("a",{title:"Follow me on Twiiter!",target:"_blank",rel:"noreferrer",href:"https://twitter.com/k_Norful",children:Object(r.jsx)("i",{className:"fab fa-twitter"})}),Object(r.jsx)("a",{title:"Connect with me on LinkedIn!",target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/kristopher-norful/",children:Object(r.jsx)("i",{className:"fab fa-linkedin-in"})}),Object(r.jsx)("a",{title:"Check out my repos!",target:"_blank",rel:"noreferrer",href:"https://github.com/knorful",children:Object(r.jsx)("i",{className:"fab fa-github"})})]})]})};n(64);var oe=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(w,{}),Object(r.jsx)(P,{}),Object(r.jsx)(H,{}),Object(r.jsx)(te,{}),Object(r.jsx)(ae,{}),Object(r.jsx)(se,{})]})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(oe,{})}),document.getElementById("root")),le()}},[[65,1,2]]]);
//# sourceMappingURL=main.06212a5c.chunk.js.map