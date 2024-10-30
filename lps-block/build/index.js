(()=>{"use strict";var e={20:(e,t,o)=>{var l=o(609),r=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),n=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,o){var l,c={},i=null,p=null;for(l in void 0!==o&&(i=""+o),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,l)&&!a.hasOwnProperty(l)&&(c[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===c[l]&&(c[l]=t[l]);return{$$typeof:r,type:e,key:i,ref:p,props:c,_owner:n.current}}},848:(e,t,o)=>{e.exports=o(20)},609:e=>{e.exports=window.React}},t={};function o(l){var r=t[l];if(void 0!==r)return r.exports;var s=t[l]={exports:{}};return e[l](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);const l=window.wp.blocks,r=window.wp.i18n;var s,n=o(609);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var l in o)({}).hasOwnProperty.call(o,l)&&(e[l]=o[l])}return e},a.apply(null,arguments)}var c=function(e){return n.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"-250 -250 1800 1800"},e),s||(s=n.createElement("path",{fill:"currentColor",d:"M445 1260h370V630H445zm-445 0h371V630H0zm73-234h225v156H73zM0 236h1260V0H0zM612 78h520v80H612zM0 551h1260V315H0zm612-158h520v80H612zm277 867h371V630H889zm74-234h224v156H963zm-445 0h224v156H518z"})))};const i=JSON.parse('{"UU":"latest-post-shortcode/lps-block"}'),p=window.wp.components,d=window.wp.blockEditor,u=window.wp.element,m=window.wp.primitives,h=(0,n.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(m.Path,{d:"m11.3 17.2-5-5c-.1-.1-.1-.3 0-.4l2.3-2.3-1.1-1-2.3 2.3c-.7.7-.7 1.8 0 2.5l5 5H7.5v1.5h5.3v-5.2h-1.5v2.6zm7.5-6.4-5-5h2.7V4.2h-5.2v5.2h1.5V6.8l5 5c.1.1.1.3 0 .4l-2.3 2.3 1.1 1.1 2.3-2.3c.6-.7.6-1.9-.1-2.5z"})),w=window.wp.serverSideRender;var g=o.n(w);const v=window.wp.apiFetch;var b=o.n(v);const f=["core/image","core/heading","core/paragraph","core/buttons","core/list","core/post-title","core/post-excerpt"];var y=o(848);(0,l.registerBlockType)(i.UU,{icon:c,edit:function({attributes:e,setAttributes:t,clientId:o,context:l}){const{lpsContent:s="",constrained:a,align:i}=e,[m,w]=(0,u.useState)(!1),[v,y]=(0,u.useState)(0),_=function(e,t){let o=e.map((function(e){return"latest-post-shortcode/lps-block"===wp.data.select("core/block-editor").getBlockName(e)?e:""}));return o=o.filter((e=>0!==Object.keys(e).length)),o.indexOf(t)}(wp.data.select("core/block-editor").getClientIdsWithDescendants(),o),k=e=>{t({lpsContent:e})};(0,u.useEffect)((()=>{t({nthOfType:_.toString(),clientId:o}),k(s),b()({path:"/lps/v1/assess-exclusion",method:"POST",data:{post_id:l.postId,position:_,content:wp.data.select("core/block-editor").getBlocks()}}),m&&w(!1)}),[s,_,o,m]);const E="full"===i&&a?" is-layout-constrained":"",O=(0,d.useBlockProps)({className:`latest-selected-content lps-block${E}`}),C=(0,d.useInnerBlocksProps)({className:"lps-block__intro"},{allowedBlocks:f,template:[["core/heading"],["core/paragraph"]]});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(d.InspectorControls,null,(0,n.createElement)(p.PanelBody,{title:(0,r.__)("Settings","lps")},"full"===i&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(p.ToggleControl,{label:(0,r.__)("Inner blocks use wide width","lps"),checked:a,onChange:e=>t({constrained:e})}),(0,n.createElement)("hr",null)),(0,n.createElement)("p",null,(0,r.__)("Click the button below to use the shortcode UI, or change the attributes manually.","lps")),(0,n.createElement)(p.Flex,{className:"lps-sidebar-buttons-wrap"},(0,n.createElement)(p.Button,{className:"lps-block-settings-button",variant:"primary",label:(0,r.__)("Latest Post Shortcode","lps"),onClick:()=>{const e=document.querySelector(".lps-"+o);if(e){const t=wp.data.select("core/block-editor").getSelectedBlock();LPS_generator.openBlockPopup(t,e.innerHTML)}}},(0,n.createElement)(c,null)," ",(0,r.__)("Shortcode Options","lps")),(0,n.createElement)(p.Button,{className:"lps-block-refresh-button",variant:"secondary",label:(0,r.__)("Refresh","lps"),onClick:()=>{w(!0),y(parseInt(v)+1)}},(0,n.createElement)(p.Icon,{icon:h}))),(0,n.createElement)(d.RichText,{tagName:"div",className:`lps-block-settings-controls lps-${o}`,value:s,onChange:e=>k(e),allowedFormats:[],disableLineBreaks:!0,multiline:!1}))),(0,n.createElement)("div",{...O,key:v},(0,n.createElement)("div",{...C}),m?(0,n.createElement)(p.Spinner,null):(0,n.createElement)(g(),{block:"latest-post-shortcode/lps-block",attributes:e})))},save:function(){return(0,y.jsx)(d.InnerBlocks.Content,{})},variations:[{name:"overlay",isDefault:!0,title:(0,r.__)("Overlay Cards","lps"),keywords:["lps","grid","card","overlay","latest post shortcode"],scope:["inserter"],attributes:{align:"wide",lpsContent:'[latest-selected-content ver="2" limit="4" display="title" titletag="h3" url="yes" image="thumbnail" image_placeholder="auto" elements="25" css="four-columns as-overlay has-title-nodecoration has-title-uppercase hover-zoom content-end dark tall" type="post" status="publish" orderby="dateD"]'}},{name:"columns",isDefault:!1,title:(0,r.__)("Vertical Cards","lps"),keywords:["lps","grid","card","column","latest post shortcode"],scope:["inserter"],attributes:{align:"wide",lpsContent:'[latest-selected-content ver="2" limit="4" display="title" titletag="h3" url="yes" image="medium" image_placeholder="auto" elements="25" css="four-columns as-column has-shadow has-title-nodecoration has-title-uppercase hover-zoom content-center light" type="post" status="publish" orderby="dateD"]'}},{name:"horizontal",isDefault:!1,title:(0,r.__)("Horizontal Cards","lps"),keywords:["lps","grid","card","column","latest post shortcode"],scope:["inserter"],attributes:{align:"wide",lpsContent:'[latest-selected-content ver="2" limit="2" display="title,excerpt-small" chrlimit="60" titletag="h3" url="yes" image="medium" image_placeholder="auto" elements="25" css="two-columns h-image-info has-shadow hover-zoom align-center content-center light has-stacked" type="post" status="publish" orderby="dateD"]'}}]})})();