(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{432:function(t,e,r){"use strict";r.r(e);r(36),r(28),r(51),r(33),r(52);var n=r(17),o=r(6),l=(r(65),r(29),r(8),r(39),r(224),r(42),r(20),r(47),r(69));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{importer:void 0,validating:!0,contentType:"",status:"",actions:{create:[],update:[],delete:[]}}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getImporter();case 2:return t.importer=e.sent,r=t.importer.getFirstWorksheet(),t.contentType=r.name,t.status="Retrieve StoryBlok data for content type '".concat(t.contentType,"' ..."),e.next=8,t.searchStories({"filter_query[component][in]":t.contentType,starts_with:t.contentFolder?t.contentFolder.full_slug:"",story_only:1});case 8:for(n=e.sent,o=r.columns.reduce((function(t,e){return Math.max(e.values.length,t)}),0),l=r.getColumnKey("parent_id").number,c=function(i){var e=r.getRow(i).getCell(l).value;if(e&&e.length){var o=n.find((function(s){return s.uuid===e}));o&&(t.overwrite&&t.actions.update.push(o),n=n.filter((function(s){return s.uuid!==e})))}else t.actions.create.push(i)},i=2;i<o;i++)c(i);t.excessStoryOption&&(t.actions.delete=n),t.validating=!1;case 15:case"end":return e.stop()}}),e)})))()},computed:d({},Object(l.d)("import",["contentFolder","xlsxFile","overwrite","excessStoryOption","worksheetColumnMappings"])),methods:d(d(d(d({},Object(l.c)("storyblok",["components","searchStories"])),Object(l.e)("import",["setImportActions"])),Object(l.c)("import",["getImporter"])),{},{doImport:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setImportActions(t.actions),e.next=3,t.$router.replace({path:"/import/process"});case 3:case"end":return e.stop()}}),e)})))()}})},f=r(79),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.validating?r("SbModal",{attrs:{isOpen:t.validating,"full-width":"",escCloses:!1,closeOnHeader:!1},on:{hide:function(e){t.validating=!1}}},[r("SbModalHeader",{attrs:{title:"Check import data..."}}),t._v(" "),r("SbModalContent",[r("SbLoading",{staticStyle:{position:"absolute",left:"50%",transform:"translateX(-50%)"},attrs:{type:"spinner"}}),t._v(" "),r("p",{staticStyle:{"text-align":"center","margin-top":"48px"}},[t._v(t._s(t.status))])],1)],1):t._e(),t._v(" "),r("SbCard",[r("SbCardHeader",{staticClass:"header"},[r("SbIcon",{staticClass:"back-button",attrs:{size:"large",name:"chevron-back"},on:{click:function(e){return t.$router.go(-1)}}}),t._v(" "),r("h3",[t._v("Confirm Import")])],1),t._v(" "),r("SbCardContent",[r("SbFormItem",{attrs:{label:"Destination Content Folder"}},[r("SbTextField",{attrs:{value:t.contentFolder?t.contentFolder.full_slug:"",readonly:""}})],1),t._v(" "),r("SbFormItem",{attrs:{label:"Create Records"}},[r("SbTextField",{attrs:{value:t.actions.create.length?t.actions.create.length+" record(s) will be created.":"Nothing to do.",readonly:""}})],1),t._v(" "),r("SbFormItem",{attrs:{label:"Update Records"}},[r("SbSelect",{attrs:{label:t.actions.update.length?t.actions.update.length+" record(s) will be updated.":"Nothing to do.",options:t.actions.update,"item-label":"full_slug","item-value":"full_slug",noDataText:"",readonly:""}})],1),t._v(" "),r("SbFormItem",{attrs:{label:"Delete Records"}},[r("SbSelect",{attrs:{label:t.actions.delete.length?t.actions.delete.length+" record(s) will be "+(1===t.excessStoryOption?"unpublished":"deleted")+".":"Nothing to do.",options:t.actions.delete,"item-label":"full_slug","item-value":"full_slug",noDataText:"",readonly:""}})],1)],1),t._v(" "),r("SbCardFooter",[r("SbButton",{staticStyle:{"margin-right":"8px"},attrs:{label:"Cancel",variant:"ghost"},on:{click:function(e){return t.$router.replace({path:"/"})}}}),t._v(" "),r("SbButton",{attrs:{label:"Import",isDisabled:!t.actions.create.length&&!t.actions.update.length&&!t.actions.delete.length},on:{click:t.doImport}})],1)],1)],1)}),[],!1,null,"2cbb1dd5",null);e.default=component.exports}}]);