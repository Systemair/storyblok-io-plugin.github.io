(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{342:function(t,e,r){"use strict";r(231);var n=r(20),o=r(0);e.a=o.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(n.e)(this.height),r=Object(n.e)(this.minHeight),o=Object(n.e)(this.minWidth),c=Object(n.e)(this.maxHeight),l=Object(n.e)(this.maxWidth),h=Object(n.e)(this.width);return e&&(t.height=e),r&&(t.minHeight=r),o&&(t.minWidth=o),c&&(t.maxHeight=c),l&&(t.maxWidth=l),h&&(t.width=h),t}}})},442:function(t,e,r){var content=r(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(108).default)("5e1554dc",content,!0,{sourceMap:!1})},443:function(t,e,r){var n=r(107)(!1);n.push([t.i,".v-virtual-scroll{display:block;flex:1 1 auto;height:100%;max-width:100%;overflow:auto;position:relative}.v-virtual-scroll__container{display:block}.v-virtual-scroll__item{left:0;position:absolute;right:0}",""]),t.exports=n},451:function(t,e,r){"use strict";r.r(e);r(231),r(46),r(55),r(442);var n=r(342),o=r(13);var c,l={inserted:function(t,e,r){var n=(e.modifiers||{}).self,c=void 0!==n&&n,l=e.value,h="object"===Object(o.a)(l)&&l.options||{passive:!0},f="function"==typeof l||"handleEvent"in l?l:l.handler,m=c?t:e.arg?document.querySelector(e.arg):window;m&&(m.addEventListener("scroll",f,h),t._onScroll=Object(t._onScroll),t._onScroll[r.context._uid]={handler:f,options:h,target:c?void 0:m})},unbind:function(t,e,r){var n;if(null===(n=t._onScroll)||void 0===n?void 0:n[r.context._uid]){var o=t._onScroll[r.context._uid],c=o.handler,l=o.options,h=o.target;(void 0===h?t:h).removeEventListener("scroll",c,l),delete t._onScroll[r.context._uid]}}},h=r(20),f=n.a.extend({name:"v-virtual-scroll",directives:{Scroll:l},props:{bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:function(){return[]}}},data:function(){return{first:0,last:0,scrollTop:0}},computed:{__bench:function(){return parseInt(this.bench,10)},__itemHeight:function(){return parseInt(this.itemHeight,10)},firstToRender:function(){return Math.max(0,this.first-this.__bench)},lastToRender:function(){return Math.min(this.items.length,this.last+this.__bench)}},watch:{height:"onScroll",itemHeight:"onScroll"},mounted:function(){this.last=this.getLast(0)},methods:{getChildren:function(){return this.items.slice(this.firstToRender,this.lastToRender).map(this.genChild)},genChild:function(t,e){e+=this.firstToRender;var r=Object(h.e)(e*this.__itemHeight);return this.$createElement("div",{staticClass:"v-virtual-scroll__item",style:{top:r},key:e},Object(h.o)(this,"default",{index:e,item:t}))},getFirst:function(){return Math.floor(this.scrollTop/this.__itemHeight)},getLast:function(t){var e=parseInt(this.height||0,10)||this.$el.clientHeight;return t+Math.ceil(e/this.__itemHeight)},onScroll:function(){this.scrollTop=this.$el.scrollTop,this.first=this.getFirst(),this.last=this.getLast(this.first)}},render:function(t){var content=t("div",{staticClass:"v-virtual-scroll__container",style:{height:Object(h.e)(this.items.length*this.__itemHeight)}},this.getChildren());return t("div",{staticClass:"v-virtual-scroll",style:this.measurableStyles,directives:[{name:"scroll",modifiers:{self:!0},value:this.onScroll}],on:this.$listeners},[content])}}),m=(r(26),r(48),r(43),r(63),r(33),r(65),r(75),r(53),r(34),r(54),r(23)),d=r(6),v=(r(64),r(35),r(39),r(38),r(109),r(41),r(9),r(238),r(161),r(42),r(44),r(346),r(163),r(67));function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function w(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return x(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}!function(t){t.INFO="info",t.WARNING="warning",t.ERROR="error"}(c||(c={}));var _={data:function(){return{importing:!0,importer:void 0,contentType:void 0,logItems:[],headers:[{text:"Timestamp",value:"timestamp"},{text:"Severity",value:"Severity"},{text:"Message",value:"message"}]}},mounted:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var r,n,i,o,c,l,h,f,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getImporter();case 2:t.importer=e.sent,t.contentType=t.importer.getRootContentTypeWorksheet().name,e.prev=4,t.log("Start importing data for content type ".concat(t.contentType," ...")),r=w(t.importActions.delete),e.prev=7,r.s();case 9:if((n=r.n()).done){e.next=15;break}return i=n.value,e.next=13,t.delete(i);case 13:e.next=9;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(7),r.e(e.t0);case 20:return e.prev=20,r.f(),e.finish(20);case 23:o=w(t.importActions.create),e.prev=24,o.s();case 26:if((c=o.n()).done){e.next=32;break}return l=c.value,e.next=30,t.create(l);case 30:e.next=26;break;case 32:e.next=37;break;case 34:e.prev=34,e.t1=e.catch(24),o.e(e.t1);case 37:return e.prev=37,o.f(),e.finish(37);case 40:h=w(t.importActions.update),e.prev=41,h.s();case 43:if((f=h.n()).done){e.next=49;break}return m=f.value,e.next=47,t.update(m);case 47:e.next=43;break;case 49:e.next=54;break;case 51:e.prev=51,e.t2=e.catch(41),h.e(e.t2);case 54:return e.prev=54,h.f(),e.finish(54);case 57:t.log("Import completed."),e.next=63;break;case 60:e.prev=60,e.t3=e.catch(4),t.logError("Import failed.");case 63:return e.prev=63,t.generateLogDownloadLink(),t.importing=!1,e.finish(63);case 67:case"end":return e.stop()}}),e,null,[[4,60,63,67],[7,17,20,23],[24,34,37,40],[41,51,54,57]])})))()},computed:S({},Object(v.d)("import",["contentFolder","worksheetColumnMappings","excessStoryOption","importActions"])),methods:S(S(S(S({},Object(v.c)("storyblok",["components","searchStories","readStory","createStory","updateStory","deleteStory","unpublishStory"])),Object(v.e)("import",[])),Object(v.c)("import",["getImporter"])),{},{create:function(t){var e=this;return Object(d.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if((n=e.importer.asStory(t)).name){r.next=5;break}e.logWarning("Unable to create story object from row '".concat(t,"'. Missing 'name' field.")),r.next=8;break;case 5:return e.log("Creating new story object for '".concat(n.name,"' ...")),r.next=8,e.createStory({parent_id:e.contentFolder.id,name:n.name,slug:e.slugify(n.name),is_startpage:n.is_startpage,content:n.content}).then((function(t){e.log("Successfully create new story object '".concat(t.data.story.full_slug,"'."))})).catch((function(t){e.logError("Failed to create new story object. Reason: '".concat(JSON.stringify(t.response.data),"'"))}));case 8:case"end":return r.stop()}}),r)})))()},update:function(t){var e=this;return Object(d.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.log("Updating story object '".concat(t.name,"' [").concat(t.full_slug,"] ...")),n=e.importer.asStory(t._row),r.next=4,e.readStory(t.id).then((function(t){for(var r=0,o=Object.keys(n);r<o.length;r++){var c=o[r];t.content[c]=n.content[c]}return e.updateStory(t)})).catch((function(t){e.logError("Failed to update story object. Reason: '".concat(JSON.stringify(t),"'"))}));case 4:case"end":return r.stop()}}),r)})))()},delete:function(t){var e=this;return Object(d.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.log("".concat(1===e.excessStoryOption?"Unpublishing":"Deleting"," story object '").concat(t.name,"' [").concat(t.full_slug,"]...")),r.t0=e.excessStoryOption,r.next=1===r.t0?4:2===r.t0?6:8;break;case 4:return e.unpublishStory(t.id),r.abrupt("break",8);case 6:return e.deleteStory(t.id),r.abrupt("break",8);case 8:case"end":return r.stop()}}),r)})))()},slugify:function(t){return t.trim().toLowerCase().split(/[ -]/g).map((function(t){return t.replace(/[^A-Za-z0-9]/g,"")})).filter((function(t){return t.length})).join("-")},log:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.INFO;this.logItems.push({timestamp:new Date,severity:e,message:t}),this.$refs.logView.$el.scrollTop=this.$refs.logView.$el.scrollHeight},logWarning:function(t){this.log(t,c.WARNING)},logError:function(t){this.log(t,c.ERROR)},severityColor:function(t){switch(t){case c.INFO:return"#546E7A";case c.WARNING:return"#FF7B00";case c.ERROR:return"#FF5252"}},generateLogDownloadLink:function(){this.$refs.logDownloadLink.$el.href=window.URL.createObjectURL(new Blob(this.logItems.map((function(t){return"".concat(JSON.stringify(t),"\n")})),{type:"plain/text"})),this.$refs.logDownloadLink.$el.download="".concat(this.contentType,"-import-").concat((new Date).toISOString(),".log")}})},O=_,j=r(77),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;return e("div",[e("SbCard",[e("SbCardHeader",{staticClass:"header"},[e("h3",[t._v("Importing...")])]),t._v(" "),e("SbCardContent",[e(f,{ref:"logView",attrs:{bench:10,items:t.logItems,height:"calc(100vh - 54px - 66px - 40px)","item-height":"24"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.item;return[e("div",{key:n.timestamp.toISOString(),style:"height: 24px; display: flex; align-items: center; justify-content: flex-start; color: ".concat(t.severityColor(n.severity),"; font-size: 1.25rem;")},[e("span",{staticStyle:{width:"90px"}},[t._v(t._s(n.timestamp.toISOString().split("T")[1].slice(0,-1)))]),t._v(" "),e("span",{staticStyle:{width:"70px","text-transform":"uppercase"}},[t._v(t._s(n.severity))]),t._v(" "),e("span",[t._v(t._s(n.message))])])]}}])})],1),t._v(" "),e("SbCardFooter",[e("SbLink",{directives:[{name:"show",rawName:"v-show",value:!t.importing,expression:"!importing"}],ref:"logDownloadLink",staticStyle:{"margin-right":"8px"},attrs:{size:"small",label:"Download import log",icon:"paste"}}),t._v(" "),e("SbButton",{attrs:{label:t.importing?"Importing...":"Done",isDisabled:t.importing},on:{click:function(e){return t.$router.replace({path:"/"})}}})],1)],1)],1)}),[],!1,null,"412c3927",null);e.default=component.exports}}]);