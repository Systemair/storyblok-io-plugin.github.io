(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{324:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return v}));r(44),r(53),r(28),r(54),r(66);var n,o=r(6),c=r(12),l=r(25),f=(r(43),r(29),r(224),r(8),r(36),r(39),r(37),r(20),r(78),r(157),r(33),r(76),r(38),r(325),r(158),r(65),r(323)),h=r.n(f);function d(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}!function(e){e.tab="tab",e.bloks="bloks",e.text="text",e.textarea="textarea",e.markdown="markdown",e.number="number",e.datetime="datetime",e.boolean="boolean",e.option="option",e.options="options",e.image="image",e.file="file",e.multiasset="multiasset",e.multilink="multilink",e.section="section",e.richtext="richtext",e._uid="uid",e.component="component"}(n||(n={}));var v=function(){function e(t){Object(c.a)(this,e),this.workbook=new h.a.Workbook,this.vuexStore=t}var t,r,f,m;return Object(l.a)(e,[{key:"spaceComponents",get:function(){return this.vuexStore.state.storyblok.components}},{key:"searchStories",value:(m=Object(o.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.vuexStore.dispatch("storyblok/searchStories",t));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return m.apply(this,arguments)})},{key:"readStory",value:(f=Object(o.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.vuexStore.dispatch("storyblok/readStory",t));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return f.apply(this,arguments)})},{key:"getWorksheetNames",value:function(){return this.workbook.worksheets.map((function(s){return s.name}))}},{key:"getWorksheetColumns",value:function(e){return this.workbook.getWorksheet(e).columns}},{key:"getFirstWorksheet",value:function(){return this.workbook.getWorksheet(1)}},{key:"getContentTypeSchema",value:function(e){var t;return(null===(t=this.spaceComponents.find((function(t){return t.name===e})))||void 0===t?void 0:t.schema)||{}}},{key:"asStory",value:function(e){var t=this.workbook.getWorksheet(1).getRow(e);return Object.assign(this.rowToObject(t),{component:t.worksheet.name})}},{key:"rowToObject",value:function(e){for(var t=this.getContentTypeSchema(e.worksheet.name),r=function(e){return"_uid"===e?{type:n._uid}:"component"===e?{type:n.component}:t[e]},o={},c=0,l=Object.keys(t);c<l.length;c++){var f=l[c],h=r(f);if(h.type!==n.tab){var d=e.getCell(e.worksheet.getColumn(f).letter).text;switch(h.type){case n._uid:break;case n.option:var m=this.workbook.getWorksheet(h.filter_content_type||""),v=m.getColumn("parent_id").letter,k=m.getColumn("name").values.indexOf(d);o[f]=m.getCell("".concat(v,":").concat(k)).text;break;case n.options:o[f]=d.split(",").map((function(e){return e.trim()}));break;default:o[f]=d}}}return o}},{key:"addDataValidations",value:function(e){var t,r=this,o=this.spaceComponents.find((function(t){return t.name===e.name})),c=d(e.columns);try{var l=function(){var e=t.value,c=function(e){if(void 0!==e)return"_uid"===e?{type:n._uid}:"component"===e?{type:n.component}:null==o?void 0:o.schema[e]}(e.key);if(void 0===c)return"continue";switch(c.type){case n.option:case n.options:var l=r.workbook.getWorksheet(c.filter_content_type||"");if(l){var f=l.getColumn("name").letter;e.eachCell((function(e,t){var r;if(t<=1)e.value={text:e.text,hyperlink:"#'".concat(l.name,"'!A1")};else{if(c.type===n.options)return;if(e.value){var o=0;l.getColumn("parent_id").eachCell((function(t,r){o||t.value!=e.value||(o=r)}));var h=o?l.getCell("".concat(f,":").concat(o)).value:void 0;h&&(e.value=h)}e.dataValidation={type:"list",allowBlank:!0,formulae:["'".concat(l.name,"'!$").concat(f,"$2:$").concat(f,"$").concat(null===(r=l.lastRow)||void 0===r?void 0:r.number)]}}}))}}};for(c.s();!(t=c.n()).done;)l()}catch(e){c.e(e)}finally{c.f()}}},{key:"fitWorksheetColumns",value:function(e){e.columns.forEach((function(e){var t=0;e.eachCell({includeEmpty:!1},(function(e){t=Math.max(t,e.value?e.value.toString().length:0)})),e.width=Math.max(10,t)}))}},{key:"save",value:(r=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=d(this.workbook.worksheets);try{for(r.s();!(n=r.n()).done;)o=n.value,this.addDataValidations(o),this.fitWorksheetColumns(o)}catch(e){r.e(e)}finally{r.f()}return e.next=4,this.workbook.xlsx.writeBuffer().then((function(data){var e=window.document.createElement("a");return e.href=window.URL.createObjectURL(new Blob([data],{type:"application/octet-stream"})),e.download=null!=t?t:"Untiteled-".concat((new Date).toISOString(),".xlsx"),document.body.appendChild(e),e.click(),window.URL.revokeObjectURL(e.href),document.body.removeChild(e),!0})).catch((function(e){return console.error(e),!1}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"load",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(t){var r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.workbook=new h.a.Workbook,e.next=3,new Promise((function(e,r){var n=new FileReader;n.onload=function(t){return e(n.result)},n.onerror=function(e){return r(e)},n.readAsArrayBuffer(t)})).then((function(data){return r.workbook.xlsx.load(data)})).then((function(){var e;if(r.workbook){var t,n=d(r.workbook.worksheets);try{for(n.s();!(t=n.n()).done;){var o,c=t.value,l=c.getRow(1),f=d(c.columns);try{for(f.s();!(o=f.n()).done;){var h=o.value;h.key=null===(e=l.findCell(h.number))||void 0===e?void 0:e.text}}catch(e){f.e(e)}finally{f.f()}}}catch(e){n.e(e)}finally{n.f()}}}));case 3:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),e}()},329:function(e,t,r){var content=r(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(99).default)("4032e047",content,!0,{sourceMap:!1})},342:function(e,t,r){"use strict";r(329)},343:function(e,t,r){var n=r(98)(!1);n.push([e.i,".workbook-tabs[data-v-70cee539]{overflow:scroll}.workbook[data-v-70cee539]{margin-top:8px}.workbook-header[data-v-70cee539]{width:250px;min-width:250px;max-width:250px;padding:0 16px;font-size:1.25rem;color:rgba(0,0,0,.50196);text-transform:uppercase}.workbook-header[data-v-70cee539],.workbook-header-mapping[data-v-70cee539]{text-align:left;vertical-align:middle;height:48px;border-bottom:1px solid rgba(0,0,0,.25)}.workbook-header-mapping[data-v-70cee539]{padding-left:16px}.workbook-sheet-cell[data-v-70cee539]{height:48px;padding:4px 16px;font-size:1.1rem;border-bottom:1px solid rgba(0,0,0,.15)}",""]),e.exports=n},430:function(e,t,r){"use strict";r.r(t);r(28),r(42),r(51),r(33),r(52),r(53),r(38),r(20),r(54),r(66);var n=r(24),o=r(151),c=r(17),l=r(6),f=(r(8),r(224),r(29),r(36),r(39),r(44),r(64),r(77),r(37),r(65),r(69)),h=(r(70),r(12)),d=r(26),m=r(22),v=r(11);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(v.a)(e);if(t){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(m.a)(this,r)}}var y=function(e){Object(d.a)(r,e);var t=k(r);function r(e){return Object(h.a)(this,r),t.call(this,e)}return r}(r(324).b);function w(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var C={data:function(){return{importerInstance:void 0,preparing:!1,currentWorksheet:void 0,worksheets:[],headers:[],items:[],pseudo:0,mappings:void 0,validWorkbookMapping:!1}},mounted:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.prepareMappingTable();case 2:case"end":return t.stop()}}),t)})))()},computed:j(j(j({},Object(f.d)("import",["xlsxFile","worksheetColumnMappings"])),Object(f.d)("storyblok",["components"])),{},{mapping:function(){return this.mappings[this.currentWorksheet]}}),methods:j(j(j({},Object(f.e)("import",["setImporter","setWorksheetColumnMappings"])),Object(f.c)("import",["getImporter"])),{},{prepareMappingTable:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preparing=!0,t.next=3,e.getImporter();case 3:if(e.importerInstance=t.sent,!e.importerInstance){t.next=14;break}e.worksheets=e.importerInstance.getWorksheetNames(),e.currentWorksheet=e.worksheets.length?e.worksheets[0]:void 0,e.mappings=JSON.parse(JSON.stringify(e.worksheetColumnMappings)),e.validateWorkbookMapping(),e.onWorksheetChanged(e.currentWorksheet),e.pseudo++,e.preparing=!1,t.next=17;break;case 14:return r=new y(e.$store),t.next=17,r.load(e.xlsxFile).then(Object(l.a)(regeneratorRuntime.mark((function t(){var c,l,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.worksheets=r.getWorksheetNames(),e.currentWorksheet=e.worksheets.length?e.worksheets[0]:void 0,e.mappings={},c=e.currentWorksheet,l=w(e.worksheets);try{for(h=function(){var t=f.value,l=c===t;e.mappings[t]={options:[],columns:{},errors:{}};for(var component=e.components.find((function(e){return e.name===t})),h=l?["slug","full_slug","is_startpage","updated_at","published"]:[],d=0,m=Object.keys(component.schema);d<m.length;d++){var v=m[d];"tab"!==component.schema[v].type&&h.push(v)}var k,y={},x=w(r.getWorksheetColumns(t));try{for(x.s();!(k=x.n()).done;){var O=k.value,j=(O.letter,O.values),C=Object(o.a)(j),header=(C[0],C[1]),_=(C.slice(2),"object"===Object(n.a)(header)?header.text:header);h.includes(_)&&(y[_]=_)}}catch(e){x.e(e)}finally{x.f()}e.mappings[t].options=h,e.mappings[t].columns=y,e.validateMapping(t)},l.s();!(f=l.n()).done;)h()}catch(e){l.e(e)}finally{l.f()}case 6:case"end":return t.stop()}}),t)})))).then((function(){e.setImporter(r),e.importerInstance=r})).then((function(){e.onWorksheetChanged(e.currentWorksheet),e.pseudo++})).finally((function(){return e.preparing=!1}));case 17:case"end":return t.stop()}}),t)})))()},validateWorkbookMapping:function(){this.validWorkbookMapping=!0;var e,t=w(this.worksheets);try{for(t.s();!(e=t.n()).done;){var r=e.value;if(this.mappings[r])for(var n=0,o=Object.keys(this.mappings[r].columns);n<o.length;n++){var c=o[n];if(this.mappings[r].errors[c])return void(this.validWorkbookMapping=!1)}}}catch(e){t.e(e)}finally{t.f()}},validate:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setWorksheetColumnMappings(e.mappings),t.next=3,e.$router.push({path:"/import/validate"});case 3:case"end":return t.stop()}}),t)})))()},onMappingChanged:function(e,t,r){this.mappings[e].columns[t]!==r&&(this.mappings[e].columns[t]=r,this.validateMapping(e),this.pseudo++)},validateMapping:function(e){for(var t=Object.keys(this.mappings[e].columns),i=0;i<t.length;i++){var r=t[i];delete this.mappings[e].errors[r];for(var n=i;n<t.length;n++)if(i!==n){var o=t[n];if(this.mappings[e].columns[r]===this.mappings[e].columns[o]){this.mappings[e].errors[r]="Field '".concat(this.mappings[e].columns[r],"' is already mapped by column '").concat(o,"'");break}}}this.validateWorkbookMapping()},onWorksheetChanged:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function r(){var l,f,h,d,m,v,k,header,y,x,O,j,C;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=2;break}return r.abrupt("return");case 2:t.headers=[],t.items=[],11,l=t.importerInstance.getWorksheetColumns(e),f=w(l);try{for(f.s();!(h=f.n()).done;)for(d=h.value,m=d.letter,v=d.values,k=Object(o.a)(v),k[0],header=k[1],y=k.slice(2),x="object"===Object(n.a)(header)?header.text:header,O="".concat(m,": ").concat(x),j="".concat(x),["_uid","parent_id"].includes(x)||t.headers.push({text:O,value:j,sortable:!1,filterable:!1}),C=0;C<Math.min(d._worksheet._rows.length,11)-1;C++)t.items.length<C+1?t.items.push(Object(c.a)({},j,y[C])):t.items[C]=Object.assign(t.items[C],Object(c.a)({},j,y[C]))}catch(e){f.e(e)}finally{f.f()}case 8:case"end":return r.stop()}}),r)})))()}})},_=(r(342),r(79)),S=r(326),W=r.n(S),R=r(427),M=Object(_.a)(C,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("SbCard",[r("SbCardHeader",{staticClass:"header"},[r("SbIcon",{staticClass:"back-button",attrs:{size:"large",name:"chevron-back"},on:{click:function(t){return e.$router.go(-1)}}}),e._v(" "),r("h3",[e._v("Map Columns")])],1),e._v(" "),e.preparing?r("SbLoading",{staticStyle:{"align-items":"center"},attrs:{type:"spinner",uiBlock:""}}):e._e(),e._v(" "),e.worksheets.length?r("SbTabs",{staticClass:"workbook-tabs",on:{input:e.onWorksheetChanged},model:{value:e.currentWorksheet,callback:function(t){e.currentWorksheet=t},expression:"currentWorksheet"}},e._l(e.worksheets,(function(e){return r("SbTab",{key:e,attrs:{label:e,name:e}})})),1):e._e(),e._v(" "),e.worksheets.length?r("v-data-table",{staticClass:"workbook",attrs:{headers:e.headers,items:e.items,"hide-default-footer":"","hide-default-header":""},scopedSlots:e._u([{key:"header",fn:function(t){var n=t.props;return e._l(n.headers,(function(header,t){return r("th",{key:t,staticClass:"workbook-header"},[e._v(e._s(header.text))])}))}},{key:"body",fn:function(t){var n=t.items,o=t.headers;return[r("tr",e._l(o,(function(header,t){return r("td",{key:t,staticClass:"workbook-header-mapping"},[r("SbSelect",{key:e.pseudo,staticStyle:{margin:"4px 0px"},attrs:{options:e.mapping.options,label:e.mapping.columns[header.value]},on:{input:function(t){return e.onMappingChanged(e.currentWorksheet,header.value,t)}}}),e._v(" "),e.mapping.errors[header.value]?r("span",{staticClass:"text-red text-truncated"},[e._v(e._s(e.mapping.errors[header.value]))]):e._e()],1)})),0),e._v(" "),e._l(n,(function(t,n){return r("tr",{key:n+1e3},e._l(o,(function(header,c){return r("td",{key:n*o.length+c,staticClass:"workbook-sheet-cell"},[e._v("\n                        "+e._s(t[header.value])+"\n                    ")])})),0)}))]}}],null,!1,3044297038)}):e._e(),e._v(" "),r("SbCardFooter",[r("SbButton",{staticStyle:{"margin-right":"8px"},attrs:{label:"Cancel",variant:"ghost"},on:{click:function(t){return e.$router.replace({path:"/"})}}}),e._v(" "),r("SbButton",{attrs:{label:"Validate",isDisabled:!e.validWorkbookMapping},on:{click:e.validate}})],1)],1)],1)}),[],!1,null,"70cee539",null);t.default=M.exports;W()(M,{VDataTable:R.a})}}]);