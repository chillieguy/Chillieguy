(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{244:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=(a(232),function(){return n.a.createElement("hr",{className:"custom-hr"})}),o=a(229),s=a(228),l=function(e){var t=e.title;return n.a.createElement("h1",null,t)},c=function(e){var t=e.html;return n.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},u=(a(233),a(234),function(e){var t=e.onClick;return n.a.createElement("a",{className:"resp-sharing-button__link",href:"#",rel:"noopener","aria-label":"Share on Twitter",onClick:t},n.a.createElement("div",{className:"resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"},n.a.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},n.a.createElement("path",{d:"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"}))),n.a.createElement("span",{className:"service-label"},"Share on Twitter")))}),d=(a(235),function(e){var t='Recommend on "'+e.title+'" written by @'+e.author;return n.a.createElement("div",{className:"social-share"},n.a.createElement(u,{onClick:function(e){return e.preventDefault(),function(e,t){window.open("https://twitter.com/share?url="+encodeURI(encodeURI(e))+"&text="+t,"sharer","toolbar=0,status=0,width=626,height=436")}(window.location.href,t)}}))}),f=(a(236),a(256)),m=a(48),p=(a(237),function(e){var t=e.pageContext,a=t.previous,r=t.next;return n.a.createElement("ul",{className:"navigator"},n.a.createElement("li",null,a&&n.a.createElement(m.a,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),n.a.createElement("li",null,r&&n.a.createElement(m.a,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →")))}),h=a(288),g=a.n(h);function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={toasts:[]},a.notifyAboutComment=a.notifyAboutComment.bind(b(a)),a.onSnackbarDismiss=a.onSnackbarDismiss.bind(b(a)),a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=r.prototype;return i.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},i.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},i.render=function(){var e=this.props,t=e.post,a=e.shortName,r=e.siteUrl+e.slug;return n.a.createElement(g.a,{shortname:a,identifier:t.frontmatter.title,title:t.frontmatter.title,url:r,category_id:t.frontmatter.category_id,onNewComment:this.notifyAboutComment})},r}(r.Component),v=(a(15),a(16),a(5),a(21),function(e){var t=e.repo,a=n.a.createRef();return Object(r.useEffect)((function(){var e=document.createElement("script"),r={src:"https://utteranc.es/client.js",repo:t,branch:"master",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),a.current.appendChild(e)}),[]),n.a.createElement("div",{className:"utterences",ref:a})}),w=a(259);a(238);a.d(t,"pageQuery",(function(){return E}));t.default=function(e){var t=e.data,a=e.pageContext,u=e.location;Object(r.useEffect)((function(){return w.c(),function(){return w.a()}}),[]);var m=t.markdownRemark,h=t.site.siteMetadata,g=h.title,b=h.comment,E=h.siteUrl,S=h.author,A=(h.sponsor,b.disqusShortName),O=b.utterances;return n.a.createElement(o.a,{location:u,title:g},n.a.createElement(s.a,{title:m.frontmatter.title,description:m.excerpt}),n.a.createElement(l,{title:m.frontmatter.title}),n.a.createElement(c,{html:m.html}),n.a.createElement(d,{title:m.frontmatter.title,author:S}),n.a.createElement(i,null),n.a.createElement(f.a,null),n.a.createElement(p,{pageContext:a}),!!A&&n.a.createElement(y,{post:m,shortName:A,siteUrl:E,slug:a.slug}),!!O&&n.a.createElement(v,{repo:O}))};var E="1559320954"},247:function(e,t,a){"use strict";a(248)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},248:function(e,t,a){var r=a(1),n=a(6),i=a(45),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},256:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(247);var r=a(257),n=a(0),i=a.n(n),o=a(48),s=a(258),l=a.n(s),c=(a(230),function(){return i.a.createElement(o.b,{query:u,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social,n=t.introduction;return i.a.createElement("div",{className:"bio"},i.a.createElement("div",{className:"author"},i.a.createElement("div",{className:"author-description"},i.a.createElement(l.a,{className:"author-image",fixed:e.avatar.childImageSharp.fixed,alt:a,style:{borderRadius:"100%"}}),i.a.createElement("div",{className:"author-name"},i.a.createElement("span",{className:"author-name-prefix"},"Written by"),i.a.createElement(o.a,{to:"/about",className:"author-name-content"},i.a.createElement("span",null,"@",a)),i.a.createElement("div",{className:"author-introduction"},n),i.a.createElement("p",{className:"author-socials"},r.github&&i.a.createElement("a",{href:"https://github.com/"+r.github},"GitHub"),r.medium&&i.a.createElement("a",{href:"https://medium.com/"+r.medium},"Medium"),r.twitter&&i.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"Twitter"),r.facebook&&i.a.createElement("a",{href:"https://www.facebook.com/"+r.facebook},"Facebook"))))))},data:r})}),u="1177532027"},257:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAADRUlEQVQ4y2P4DwP/wADIePP+45qdh6snLEis7I0r7y7tmr1ww+5Hz19B1PwFq4EABgj19+9fIPn+05fGKUsUneOZNT0YlJwYVF0YVF2BDCZ1N3GbiKymyQ+evgQr/ofQDNF54fpdw8AsoFI2HW9uQ39+k0AB0yB+kyA+40AeowB2PR8GZWdZ++gtB07C9TNAdJ6/flfSNpJB3Y3PJJDLwA+omVXHi0HRkUHFmVXXm8fIHyjIZxLAou3JoeuzbvdRiJUgm999/KznnwHSaRwAVARUyqjhrumVUj9pcWrdBAXnOCYND6BxYKkAoKGiFiGXbz2AOru6fz7QtRA7eQz9mbU8df0yHr94DQmhj5+/xpZ2MWp6AHWC7DcOZFBx8c9uAGl++fa9jH0Um643xGyQnKJj5+xVQLnvP3/++QPy1PW7j4Ce59D35Tb0A6oBImAQHDt/jWHJpr0Mam68YFPhmjtmrQTq+f3nDyTybj98KmgWzKHng7BAyQnk3sKOmSA3GwdCNPMCJZSdJy3eANEMCdUrtx8APQW3Geh+Bg1316QKhrCCVgY1V7jNvMYBwBDObpwC1APUCtQPZCzfegAYhJAwh8eFhmcKQ3BeM7KzgRLAeFZwin326i08CQRkNwBTC5oaVfdEhvT6iQzKCGcDncSh58sgaxdf3v363ccv3763z1wB9BeLthePoT9MjT+TpodVZCHDlKWbgJ7kNYaayqThLmoVXtQxc8+xc91zVwODfcOeY+2zVqp5JDNrukPCjA8cLhkNkxjA0RDICQoMkGPqJi16+fYDJOn+/v3n1+/fEPbXbz9mrdwGDHOgSl5QgLmt330UlEgiitqBXgKmDaf4Mlg++QdEkGwG9DaQCfE8yDZVV6AXTIJzfv3+A9J8+dZ9MatwBjm79lkrgFy4bcgAklpW7zgEtINRw2PL/hOIjLEYmFSUnDfuOYZf8/0nz4FxVtk3D5JyGeD5a/qKLX0L1v4BmwWS+/8PqAGI/iHlfqDNtRMXYhQGYBWHzlzum792/4mLbz58+odkLTBvnLx0Y/KSjZv2HQfbiaoZrv/Tl6/bD52esXLr9OVbgLE4demm6cs3z1ixZd2uIy9ev4O4Fq4FAHqJtYQ/JS6YAAAAAElFTkSuQmCC","width":72,"height":72,"src":"/static/035ce7483ee8f639767376dfc414c0e6/f4007/profile.png","srcSet":"/static/035ce7483ee8f639767376dfc414c0e6/f4007/profile.png 1x,\\n/static/035ce7483ee8f639767376dfc414c0e6/c608d/profile.png 1.5x,\\n/static/035ce7483ee8f639767376dfc414c0e6/d10ce/profile.png 2x"}}},"site":{"siteMetadata":{"author":"Chuck Underwood","introduction":"I explain with words and code. I explain with words and code. I explain with words and code.","social":{"twitter":"chillieguy","github":"chillieguy","medium":"","facebook":""}}}}}')},258:function(e,t,a){"use strict";a(15),a(16),a(5),a(86),a(152),a(247);var r=a(24);t.__esModule=!0,t.default=void 0;var n,i=r(a(87)),o=r(a(85)),s=r(a(153)),l=r(a(154)),c=r(a(0)),u=r(a(56)),d=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=d(e),a=f(t);return m[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,b=g&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function A(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?A(e,!0):"")+A(e)})).join("")+"<img "+c+o+s+a+r+t+i+n+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=c.default.createElement(N,(0,l.default)({src:t},n));return a.length>1?c.default.createElement("picture",null,r(a),i):i},N=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},m,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));N.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=g&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||g&&(h||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,p=e.fluid,h=e.fixed,g=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,A=e.loading,O=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,l.default)({opacity:L?1:0,transition:x?"opacity "+b+"ms":"none"},s),j="boolean"==typeof g?"lightgray":g,R={transitionDelay:b+"ms"},D=(0,l.default)({opacity:this.state.imgLoaded?0:1},x&&R,{},s,{},f),P={title:t,alt:this.state.isVisible?"":a,style:D,className:m};if(p){var T=p,M=T[0];return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),j&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&R)}),M.base64&&c.default.createElement(I,{src:M.base64,spreadProps:P,imageVariants:T,generateSources:S}),M.tracedSVG&&c.default.createElement(I,{src:M.tracedSVG,spreadProps:P,imageVariants:T,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,v(T),c.default.createElement(N,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:A,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:A},M,{imageVariants:T}))}}))}if(h){var q=h,z=q[0],Q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},i);return"inherit"===i.display&&delete Q.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:Q,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},j&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:j,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},x&&R)}),z.base64&&c.default.createElement(I,{src:z.base64,spreadProps:P,imageVariants:q,generateSources:S}),z.tracedSVG&&c.default.createElement(I,{src:z.tracedSVG,spreadProps:P,imageVariants:q,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,v(q),c.default.createElement(N,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:A,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:A},z,{imageVariants:q}))}}))}return null},t}(c.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var x=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),k=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});L.propTypes={resolutions:x,sizes:k,fixed:u.default.oneOfType([x,u.default.arrayOf(x)]),fluid:u.default.oneOfType([k,u.default.arrayOf(k)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var j=L;t.default=j},259:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return l}));var r,n=a(260),i=a.n(n);function o(){return r=new i.a('a[href*="#"]',{speed:500,speedAsDuration:!0})}function s(){if(!r)throw Error("Not founded SmoothScroll instance");return r.destroy(),r=null}function l(e){if(!r)throw Error("Not founded SmoothScroll instance");return r.animateScroll(e),r}},260:function(e,t,a){(function(r){var n,i;a(261),a(34),a(44),a(5),a(20),i=void 0!==r?r:"undefined"!=typeof window?window:this,void 0===(n=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},a=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var a in t){if(!t.hasOwnProperty(a))return;e[a]=t[a]}})),e},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,a=String(e),r=a.length,n=-1,i="",o=a.charCodeAt(0);++n<r;){if(0===(t=a.charCodeAt(n)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=t&&t<=31||127==t||0===n&&48<=t&&t<=57||1===n&&48<=t&&t<=57&&45===o?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?a.charAt(n):"\\"+a.charAt(n)}return"#"+i},n=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t,a,r,n){if(a.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:r,toggle:n}});document.dispatchEvent(i)}};return function(o,s){var l,c,u,d,f={cancelScroll:function(e){cancelAnimationFrame(d),d=null,e||i("scrollCancel",l)},animateScroll:function(r,o,s){f.cancelScroll();var c=a(l||t,s||{}),m="[object Number]"===Object.prototype.toString.call(r),p=m||!r.tagName?null:r;if(m||p){var h=e.pageYOffset;c.header&&!u&&(u=document.querySelector(c.header));var g,b,y,v,w,E,S,A,O=function(t){return t?(a=t,parseInt(e.getComputedStyle(a).height,10)+t.offsetTop):0;var a}(u),C=m?r:function(t,a,r,i){var o=0;if(t.offsetParent)for(;o+=t.offsetTop,t=t.offsetParent;);return o=Math.max(o-a-r,0),i&&(o=Math.min(o,n()-e.innerHeight)),o}(p,O,parseInt("function"==typeof c.offset?c.offset(r,o):c.offset,10),c.clip),I=C-h,N=n(),L=0,x=(g=I,y=(b=c).speedAsDuration?b.speed:Math.abs(g/1e3*b.speed),b.durationMax&&y>b.durationMax?b.durationMax:b.durationMin&&y<b.durationMin?b.durationMin:parseInt(y,10));0===e.pageYOffset&&e.scrollTo(0,0),S=r,A=c,m||history.pushState&&A.updateURL&&history.pushState({smoothScroll:JSON.stringify(A),anchor:S.id},document.title,S===document.documentElement?"#top":"#"+S.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?e.scrollTo(0,Math.floor(C)):(i("scrollStart",c,r,o),f.cancelScroll(!0),e.requestAnimationFrame((function t(a){var n,s,l;v||(v=a),L+=a-v,E=h+I*(s=w=1<(w=0===x?0:L/x)?1:w,"easeInQuad"===(n=c).easing&&(l=s*s),"easeOutQuad"===n.easing&&(l=s*(2-s)),"easeInOutQuad"===n.easing&&(l=s<.5?2*s*s:(4-2*s)*s-1),"easeInCubic"===n.easing&&(l=s*s*s),"easeOutCubic"===n.easing&&(l=--s*s*s+1),"easeInOutCubic"===n.easing&&(l=s<.5?4*s*s*s:(s-1)*(2*s-2)*(2*s-2)+1),"easeInQuart"===n.easing&&(l=s*s*s*s),"easeOutQuart"===n.easing&&(l=1- --s*s*s*s),"easeInOutQuart"===n.easing&&(l=s<.5?8*s*s*s*s:1-8*--s*s*s*s),"easeInQuint"===n.easing&&(l=s*s*s*s*s),"easeOutQuint"===n.easing&&(l=1+--s*s*s*s*s),"easeInOutQuint"===n.easing&&(l=s<.5?16*s*s*s*s*s:1+16*--s*s*s*s*s),n.customEasing&&(l=n.customEasing(s)),l||s),e.scrollTo(0,Math.floor(E)),function(t,a){var n,s,l,u=e.pageYOffset;if(t==a||u==a||(h<a&&e.innerHeight+u)>=N)return f.cancelScroll(!0),s=a,l=m,0===(n=r)&&document.body.focus(),l||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),e.scrollTo(0,s)),i("scrollStop",c,r,o),!(d=v=null)}(E,C)||(d=e.requestAnimationFrame(t),v=a)})))}}},m=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(c=t.target.closest(o))&&"a"===c.tagName.toLowerCase()&&!t.target.closest(l.ignore)&&c.hostname===e.location.hostname&&c.pathname===e.location.pathname&&/#/.test(c.href)){var a,n=r(c.hash);if("#"===n){if(!l.topOnEmptyHash)return;a=document.documentElement}else a=document.querySelector(n);(a=a||"#top"!==n?a:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var a=e.location.hash;a=a||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:a||e.pageYOffset},document.title,a||e.location.href)}}(l),f.animateScroll(a,c))}},p=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(l)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||f.animateScroll(t,null,{updateURL:!1})}};return f.destroy=function(){l&&(document.removeEventListener("click",m,!1),e.removeEventListener("popstate",p,!1),f.cancelScroll(),d=u=c=l=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),l=a(t,s||{}),u=l.header?document.querySelector(l.header):null,document.addEventListener("click",m,!1),l.updateURL&&l.popstate&&e.addEventListener("popstate",p,!1)}(),f}}(i)}.apply(t,[]))||(e.exports=n)}).call(this,a(109))},261:function(e,t,a){"use strict";a(248)("anchor",(function(e){return function(t){return e(this,"a","name",t)}}))},288:function(e,t,a){"use strict";e.exports=a(289)},289:function(e,t,a){"use strict";a(17),a(20),a(69),a(15),a(16),a(5),a(21),a(68),a(13),a(111),a(46),a(10),a(30),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),i=s(a(0)),o=s(a(56));function s(e){return e&&e.__esModule?e:{default:e}}var l=["shortname","identifier","title","url","category_id","onNewComment","language"],c=!1;function u(e,t){var a=t.onNewComment,r=t.language,n=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(t,["onNewComment","language"]);for(var i in n)e.page[i]=n[i];e.language=r,a&&(e.callbacks={onNewComment:[a]})}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,a){return l.some((function(e){return e===a}))?t:r({},t,function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},a,e.props[a]))}),{});return i.default.createElement("div",t,i.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!c){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),c=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};l.forEach((function(a){"shortname"!==a&&e.props[a]&&(t[a]=e.props[a])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){u(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){u(this,t)},this.addDisqusScript())}}]),t}(i.default.Component);d.displayName="DisqusThread",d.propTypes={id:o.default.string,shortname:o.default.string.isRequired,identifier:o.default.string,title:o.default.string,url:o.default.string,category_id:o.default.string,onNewComment:o.default.func,language:o.default.string},d.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=d}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-a6e25603a31202cd80f3.js.map