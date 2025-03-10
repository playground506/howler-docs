"use strict";(self.webpackChunkhowler_doc=self.webpackChunkhowler_doc||[]).push([[3774],{1454:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"getting-started","title":"getting-started","description":"// File: guides/getting-started.md","source":"@site/guides/getting-started.md","sourceDirName":".","slug":"/getting-started","permalink":"/howler-docs/guides/getting-started","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"guidesSidebar","previous":{"title":"index","permalink":"/howler-docs/guides/"}}');var r=t(4848),s=t(8453);const o={},l=void 0,d={},a=[{value:"// File: guides/getting-started.md",id:"-file-guidesgetting-startedmd",level:2},{value:"id: getting-started\r\ntitle: Getting Started with Howler\r\nsidebar_label: Getting Started",id:"id-getting-startedtitle-getting-started-with-howlersidebar_label-getting-started",level:2},{value:"Installation",id:"installation",level:2},{value:"Basic Configuration",id:"basic-configuration",level:2},{value:"Core Concepts",id:"core-concepts",level:2},{value:"Sound Objects",id:"sound-objects",level:3},{value:"Events",id:"events",level:3},{value:"Control Methods",id:"control-methods",level:3},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"-file-guidesgetting-startedmd",children:"// File: guides/getting-started.md"}),"\n",(0,r.jsx)(n.h2,{id:"id-getting-startedtitle-getting-started-with-howlersidebar_label-getting-started",children:"id: getting-started\r\ntitle: Getting Started with Howler\r\nsidebar_label: Getting Started"}),"\n",(0,r.jsx)(n.h1,{id:"getting-started-with-howler",children:"Getting Started with Howler"}),"\n",(0,r.jsx)(n.p,{children:"This guide will walk you through the basics of setting up and using Howler in your projects."}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:"You can install Howler using npm or yarn:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Using npm\r\nnpm install howler\r\n\r\n# Using yarn\r\nyarn add howler\n"})}),"\n",(0,r.jsx)(n.h2,{id:"basic-configuration",children:"Basic Configuration"}),"\n",(0,r.jsx)(n.p,{children:"After installation, you'll need to configure Howler for your project:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// Import Howler\r\nimport { Howl } from 'howler';\r\n\r\n// Create a new Howl instance\r\nconst sound = new Howl({\r\n  src: ['path/to/sound.mp3'],\r\n  autoplay: false,\r\n  loop: false,\r\n  volume: 0.5,\r\n});\r\n\r\n// Play the sound\r\nsound.play();\n"})}),"\n",(0,r.jsx)(n.h2,{id:"core-concepts",children:"Core Concepts"}),"\n",(0,r.jsx)(n.h3,{id:"sound-objects",children:"Sound Objects"}),"\n",(0,r.jsx)(n.p,{children:"In Howler, everything revolves around sound objects. A sound object represents an audio file that can be played, paused, and manipulated."}),"\n",(0,r.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,r.jsx)(n.p,{children:"Howler provides events that allow you to respond to changes in your audio:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"sound.on('play', function() {\r\n  console.log('Sound started playing!');\r\n});\r\n\r\nsound.on('end', function() {\r\n  console.log('Sound finished playing!');\r\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"control-methods",children:"Control Methods"}),"\n",(0,r.jsx)(n.p,{children:"You have full control over your sounds with methods like:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"play()"}),": Start playing the sound"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pause()"}),": Pause the currently playing sound"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"stop()"}),": Stop the sound completely"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fade(from, to, duration)"}),": Fade the volume from one value to another"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsx)(n.p,{children:"Now that you understand the basics of Howler, you might want to explore:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"How to create a sound sprite"}),"\n",(0,r.jsx)(n.li,{children:"Managing multiple sounds"}),"\n",(0,r.jsx)(n.li,{children:"Advanced audio manipulation techniques"}),"\n",(0,r.jsx)(n.li,{children:"Performance optimization"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Check out the Advanced Usage guide for more detailed information on these topics."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);