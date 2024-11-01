!function(e){function a(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,a),i.l=!0,i.exports}var t={};a.m=e,a.c=t,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a.p="",a(a.s=0)}([function(e,a,t){"use strict";function s(e,a){return"undefined"!==typeof e.attributes&&"core/image"===a&&(e.attributes=Object.assign(e.attributes,{imageMask:{type:"text"},imageMaskURL:{type:"string"},imageMaskID:{type:"number"},imageMaskSVG:{type:"string"},imageMaskSVGID:{type:"string"},imageMaskFit:{type:"string",default:"contain"}})),e}function i(e,a,t){var s=t.imageMask,i=t.imageMaskID,m=t.imageMaskSVGID,n=t.imageMaskFit;if("core/image"===a.name){var r=void 0!=e.className?e.className:"";void 0!=s&&""!==s&&(r+=" has-image-mask has-"+s+"-image-mask","custom"===s?r+=" image-mask-id-"+i:"custom-svg"===s&&(r+=" image-mask-svg-id-"+m),void 0!=n&&""!==n&&(r+=" has-image-mask-"+n+"-fit")),e.className=r}return e}Object.defineProperty(a,"__esModule",{value:!0});var m=(t(1),Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}),__=wp.i18n.__;wp.hooks.addFilter("blocks.registerBlockType","wpim/image-mask-attributes",s);var n=wp.compose.compose(wp.compose.createHigherOrderComponent(function(e){return function(a){if("core/image"!==a.name)return wp.element.createElement(e,a);var t=wp.element.Fragment,s=wp.components,i=s.PanelBody,m=s.PanelRow,n=s.SelectControl,r=s.CustomSelectControl,l=s.Button,o=s.TextareaControl,g=wp.blockEditor,c=g.InspectorControls,k=g.MediaUpload,u=g.MediaUploadCheck,p=a.attributes,d=a.isSelected,w=a.setAttributes,v=["image"];void 0!=p.imageMask&&("custom"===p.imageMask||"custom-svg"===p.imageMask?window._wpLoadBlockEditor.then(function(){var e=document.getElementById("block-"+a.clientId);if(e){e.classList.add("has-image-mask"),e.classList.add("has-"+p.imageMask+"-image-mask"),p.imageMaskFit&&e.classList.add("has-image-mask-"+p.imageMaskFit+"-fit");var t=e.querySelector("img");if(t&&p.imageMaskURL)t.style.maskImage="url("+p.imageMaskURL+")",t.style.WebkitMaskImage="url("+p.imageMaskURL+")";else if(t&&p.imageMaskSVG){var s="data:image/svg+xml, "+encodeURIComponent(p.imageMaskSVG.replace(/(\r\n|\r|\n)/,""));t.style.maskImage="url('"+s+"')",t.style.WebkitMaskImage="url('"+s+"')"}else t.style.removeProperty("-webkit-mask-image"),t.style.removeProperty("mask-image")}}):window._wpLoadBlockEditor.then(function(){var e=document.getElementById("block-"+a.clientId);if(e){e.classList.add("has-image-mask"),e.classList.add("has-"+p.imageMask+"-image-mask"),p.imageMaskFit&&e.classList.add("has-image-mask-"+p.imageMaskFit+"-fit");var t=e.querySelector("img");t&&(t.style.removeProperty("-webkit-mask-image"),t.style.removeProperty("mask-image"))}}));var M={backgroundPosition:"left 8px center",backgroundRepeat:"no-repeat",backgroundSize:"25px",paddingLeft:"38px"},y=[{name:__("None","wp-image-mask"),key:""},{name:__("Triangle","wp-image-mask"),key:"triangle",style:Object.assign({},M,{backgroundImage:"url("+wpimGlobal.pluginDirUrl+"/src/img/triangle.svg)"})},{name:__("Diamond","wp-image-mask"),key:"diamond",style:Object.assign({},M,{backgroundImage:"url("+wpimGlobal.pluginDirUrl+"/src/img/diamond.svg)"})},{name:__("Brush","wp-image-mask"),key:"brush-1",style:Object.assign({},M,{backgroundImage:"url("+wpimGlobal.pluginDirUrl+"/src/img/brush-1.svg)"})},{name:__("Star","wp-image-mask"),key:"star",style:Object.assign({},M,{backgroundImage:"url("+wpimGlobal.pluginDirUrl+"/src/img/star.svg)"})},{name:__("Custom image","wp-image-mask"),key:"custom",style:Object.assign({},M,{backgroundImage:p.imageMaskURL?"url("+p.imageMaskURL+")":"url("+wpimGlobal.pluginDirUrl+"/src/img/custom.svg)"})},{name:__("SVG code","wp-image-mask"),key:"custom-svg",style:Object.assign({},M,{backgroundImage:"url("+wpimGlobal.pluginDirUrl+"/src/img/custom-svg.svg)"})}];return wp.element.createElement(t,null,wp.element.createElement(e,a),d&&"core/image"==a.name&&wp.element.createElement(c,null,wp.element.createElement(i,{title:__("Image mask","wp-image-mask"),initialOpen:!0},wp.element.createElement(m,null,wp.element.createElement(r,{label:__("Select Mask Type","wp-image-mask"),value:y.find(function(e){return e.key===p.imageMask}),options:y,onChange:function(e){return w({imageMask:e.selectedItem.key,imageMaskURL:"custom"!==e.selectedItem.key?"":p.imageMaskURL,imageMaskID:"custom"!==e.selectedItem.key?"":p.imageMaskID,imageMaskSVG:"custom-svg"!==e.selectedItem.key?"":p.imageMaskSVG,imageMaskSVGID:"custom-svg"!==e.selectedItem.key?"":p.imageMaskSVGID})}})),"custom"===p.imageMask&&wp.element.createElement(m,null,wp.element.createElement(u,null,wp.element.createElement(k,{onSelect:function(e){w({imageMaskURL:e.url,imageMaskID:e.id})},allowedTypes:v,value:p.imageMaskID,render:function(e){var a=e.open;return wp.element.createElement(l,{onClick:a},__("Choose Mask Image","wp-image-mask"))}})),p.imageMaskURL&&p.imageMaskID&&wp.element.createElement("img",{src:p.imageMaskURL,alt:"custom mask preview",width:"50",height:"auto"})),"custom-svg"===p.imageMask&&wp.element.createElement(m,null,wp.element.createElement(o,{label:__("Paste SVG code here","wp-image-mask"),value:p.imageMaskSVG,onChange:function(e){return w({imageMaskSVG:e,imageMaskSVGID:a.clientId})}})),wp.element.createElement(m,null,wp.element.createElement(n,{label:__("Mask Fit","wp-image-mask"),value:p.imageMaskFit,options:[{label:__("Auto","wp-image-mask"),value:"auto"},{label:__("Contain","wp-image-mask"),value:"contain"},{label:__("Cover","wp-image-mask"),value:"cover"}],onChange:function(e){return w({imageMaskFit:e})}})))))}},"imageInspectorControls"));wp.hooks.addFilter("editor.BlockEdit","wpim/image-inspector-control",n),wp.hooks.addFilter("blocks.getSaveContent.extraProps","wpim/image-apply-class",i);var r=wp.compose.createHigherOrderComponent(function(e){return function(a){var t=a.block,s=a.attributes,i=s.imageMask,n=s.imageMaskFit;if("core/image"!==t.name)return wp.element.createElement(e,a);var r=void 0!=s.className?s.className:"",l=Object.assign({},a.style);return void 0!=i&&(r+="custom"===i||"custom-svg"===i?" has-image-mask has-custom-image-mask":" has-image-mask has-"+i+"-image-mask",void 0!=n&&""!==n&&(r+=" has-image-mask-"+n+"-fit")),wp.element.createElement(e,m({},a,{wrapperProps:{style:l,className:r}}))}},"withInlineStyleImage");wp.hooks.addFilter("editor.BlockListBlock","wpim/with-inline-style-image",r)},function(e,a,t){"use strict";var s=t(2),i=(t.n(s),t(3));t.n(i)},function(e,a){},function(e,a){}]);