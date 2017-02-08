webpackJsonp([1,4],{194:function(t,a,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var e=i(6),s=o(e),d=i(21),r=i(168),n=o(r),l=i(167),c=o(l);a.default={name:"dashboard-view",components:{NodesList:n.default,Topic:c.default},data:function t(){var t={hotCities:["北京","上海","深圳","杭州","成都","广州","武汉","西安","南京","大连","长沙","苏州"]};return t},computed:(0,s.default)({nodes:function(){return this.$store.getters.groupNodes}},(0,d.mapState)({loading:function(t){return t.topic.lists.excellent.isFetching},topics:function(t){return t.topic.lists.excellent.items}}),(0,d.mapGetters)(["groupNodes"])),beforeMount:function(){this.fetchNodes(),this.fetchTopics()},methods:{fetchNodes:function(){this.$store.dispatch("fetchNodesIfNeeded")},fetchTopics:function(){this.$store.dispatch("refreshTopics",{tab:"excellent"}),this.$store.dispatch("fetchTopicsIfNeeded",{tab:"excellent",options:"limit=20"})}}}},245:function(t,a,i){a=t.exports=i(20)(),a.push([t.id,".dashboard .media,.dashboard .media .media-body{overflow:hidden;zoom:1}.dashboard .media .media-body,.dashboard .media .media-left{display:table-cell;vertical-align:top;padding-right:10px}.dashboard .media .media-body{padding-right:0;width:10000px;overflow:hidden;zoom:1}.dashboard .item{text-align:center;margin-bottom:15px;border-radius:3px;background:#fff;border:1px;border-color:#e5e6e9 #dfe0e4 #d0d1d5}.dashboard .item a{display:block}.dashboard .item a:hover{text-decoration:none;background-color:#fafafa}.dashboard .item .icon{display:block;padding:20px 15px}.dashboard .item .icon .fa{font-size:60px}.dashboard .item .text{display:block;text-align:left;background:#f5f5f5;border-top:1px solid #e9e9e9;font-size:14px;font-weight:700;border-radius:0 0 3px 3px;color:#666;padding:6px 15px}.dashboard .item .text .fa{margin-top:3px}.dashboard .item .text .pull-right{margin-left:.3em}.dashboard .panel .panel-heading{padding:6px 15px;border-bottom-color:#eee;color:#777;background:#fafafa;border-color:#ddd;border-bottom:1px solid transparent;border-top-left-radius:3px;border-top-right-radius:3px}.dashboard .panel .location-list .name a{color:#666;margin:6px;display:inline-block}@media (min-width:992px){.dashboard .topics_group:last-child .topic,.dashboard .topics_group:nth-last-child(2) .topic{border-bottom:0}}@media (max-width:992px){.dashboard .topics_group:last-child .topic{border-bottom:0}}.dashboard .panel .topics_group .topic .topic-infos{height:45px}.dashboard .panel .topics_group .topic .topic-infos .topic-title{height:30px}.dashboard img{vertical-align:middle}.dashboard a{color:#333}.dashboard a:hover{color:#333;text-decoration:underline}","",{version:3,sources:["/./src/views/Dashboard.vue"],names:[],mappings:"AACA,gDAAgD,gBAAgB,MAAM,CACrE,AACD,4DAA4D,mBAAmB,mBAAmB,kBAAkB,CACnH,AACD,8BAA8B,gBAAgB,cAAc,gBAAgB,MAAM,CACjF,AACD,iBAAiB,kBAAkB,mBAAmB,kBAAkB,gBAAgB,WAAW,oCAA4C,CAC9I,AACD,mBAAmB,aAAa,CAC/B,AACD,yBAAyB,qBAAqB,wBAAwB,CACrE,AACD,uBAAuB,cAAc,iBAAiB,CACrD,AACD,2BAA2B,cAAc,CACxC,AACD,uBAAuB,cAAc,gBAAgB,mBAAmB,6BAA6B,eAAe,gBAAiB,0BAA0B,WAAW,gBAAgB,CACzL,AACD,2BAA2B,cAAc,CACxC,AACD,mCAAmC,gBAAgB,CAClD,AACD,iCAAiC,iBAAiB,yBAAyB,WAAW,mBAAmB,kBAAkB,oCAAoC,2BAA2B,2BAA2B,CACpN,AACD,yCAAyC,WAAW,WAAW,oBAAoB,CAClF,AACD,yBACA,6FAA6F,eAAe,CAC3G,CACA,AACD,yBACA,2CAA2C,eAAe,CACzD,CACA,AACD,oDAAoD,WAAW,CAC9D,AACD,iEAAiE,WAAW,CAC3E,AACD,eAAe,qBAAqB,CACnC,AACD,aAAa,UAAU,CACtB,AACD,mBAAmB,WAAW,yBAAyB,CACtD",file:"Dashboard.vue",sourcesContent:["\n.dashboard .media,.dashboard .media .media-body{overflow:hidden;zoom:1\n}\n.dashboard .media .media-left,.dashboard .media .media-body{display:table-cell;vertical-align:top;padding-right:10px\n}\n.dashboard .media .media-body{padding-right:0;width:10000px;overflow:hidden;zoom:1\n}\n.dashboard .item{text-align:center;margin-bottom:15px;border-radius:3px;background:#FFF;border:1px;border-color:#e5e6e9 #dfe0e4 #d0d1d5 #dfe0e4\n}\n.dashboard .item a{display:block\n}\n.dashboard .item a:hover{text-decoration:none;background-color:#fafafa\n}\n.dashboard .item .icon{display:block;padding:20px 15px\n}\n.dashboard .item .icon .fa{font-size:60px\n}\n.dashboard .item .text{display:block;text-align:left;background:#F5F5F5;border-top:1px solid #E9E9E9;font-size:14px;font-weight:bold;border-radius:0 0 3px 3px;color:#666;padding:6px 15px\n}\n.dashboard .item .text .fa{margin-top:3px\n}\n.dashboard .item .text .pull-right{margin-left:.3em\n}\n.dashboard .panel .panel-heading{padding:6px 15px;border-bottom-color:#eee;color:#777;background:#fafafa;border-color:#ddd;border-bottom:1px solid transparent;border-top-left-radius:3px;border-top-right-radius:3px\n}\n.dashboard .panel .location-list .name a{color:#666;margin:6px;display:inline-block\n}\n@media (min-width: 992px){\n.dashboard .topics_group:last-child .topic,.dashboard .topics_group:nth-last-child(2) .topic{border-bottom:0\n}\n}\n@media (max-width: 992px){\n.dashboard .topics_group:last-child .topic{border-bottom:0\n}\n}\n.dashboard .panel .topics_group .topic .topic-infos{height:45px\n}\n.dashboard .panel .topics_group .topic .topic-infos .topic-title{height:30px\n}\n.dashboard img{vertical-align:middle\n}\n.dashboard a{color:#333\n}\n.dashboard a:hover{color:#333;text-decoration:underline\n}\n"],sourceRoot:"webpack://"}])},256:function(t,a,i){var o=i(245);"string"==typeof o&&(o=[[t.id,o,""]]);i(28)(o,{});o.locals&&(t.exports=o.locals)},273:function(t,a,i){i(256);var o=i(2)(i(194),i(287),null,null);t.exports=o.exports},287:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container dashboard"},[i("div",{staticClass:"panel panel-default hidden-xs"},[i("div",{staticClass:"panel-body"},[i("div",{staticClass:"media",staticStyle:{width:"480px",margin:"0px auto","text-align":"left"}},[t._m(0),t._v(" "),i("div",{staticClass:"media-body",staticStyle:{"line-height":"200%","text-align":"center"}},[i("div",{staticStyle:{"font-size":"15px"}},[t._v("\n          Ruby China 官方 "),i("a",{attrs:{href:"https://gems.ruby-china.org",target:"_blank"}},[t._v("RubyGems 镜像")]),t._v("、"),i("router-link",{attrs:{to:"/wiki/ruby-mirror"}},[t._v("Ruby 镜像")]),t._v(" 正式上线！\n          ")],1),t._v(" "),t._m(1)])])])]),t._v(" "),i("div",{staticClass:"row hidden-sm hidden-xs"},[i("div",{staticClass:"col-md-3"},[i("div",{staticClass:"item"},[i("router-link",{attrs:{to:"/topics"}},[i("div",{staticClass:"icon"},[i("i",{staticClass:"fa fa-comments-o",staticStyle:{color:"#F86334"}})]),t._v(" "),i("div",{staticClass:"text"},[t._v("\n            Ruby 社区 "),i("i",{staticClass:"pull-right fa fa-arrow-right"})])])],1)]),t._v(" "),i("div",{staticClass:"col-md-3"},[i("div",{staticClass:"item"},[i("router-link",{attrs:{to:"/wiki"}},[i("div",{staticClass:"icon"},[i("i",{staticClass:"fa fa-support",staticStyle:{color:"#FFD52F"}})]),t._v(" "),i("div",{staticClass:"text"},[t._v("\n            技术文档 "),i("i",{staticClass:"pull-right fa fa-arrow-right"})])])],1)]),t._v(" "),i("div",{staticClass:"col-md-3"},[i("div",{staticClass:"item"},[i("router-link",{attrs:{to:"/jobs"}},[i("div",{staticClass:"icon"},[i("i",{staticClass:"fa fa-users",staticStyle:{color:"#317DDA"}})]),t._v(" "),i("div",{staticClass:"text"},[t._v("\n            招聘与求职 "),i("i",{staticClass:"pull-right fa fa-arrow-right"})])])],1)]),t._v(" "),i("div",{staticClass:"col-md-3"},[i("div",{staticClass:"item"},[i("router-link",{attrs:{to:"/topics/popular"}},[i("div",{staticClass:"icon"},[i("i",{staticClass:"fa fa-diamond",staticStyle:{color:"#3BD54E"}})]),t._v(" "),i("div",{staticClass:"text"},[t._v("\n            精华文章 "),i("i",{staticClass:"pull-right fa fa-arrow-right"})])])],1)])]),t._v(" "),i("div",{staticClass:"panel panel-default"},[i("div",{staticClass:"panel-heading"},[t._v("\n      社区精华帖\n    ")]),t._v(" "),i("div",{staticClass:"panel-body row"},t._l(t.topics,function(t){return i("div",{staticClass:"col-md-6 topics_group"},[i("Topic",{key:t.id,attrs:{item:t}})],1)})),t._v(" "),i("div",{staticClass:"panel-footer"},[i("router-link",{attrs:{to:"/topics/excellent"}},[t._v("查看更多精华帖...")])],1)]),t._v(" "),i("NodesList",{attrs:{home:"true",nodes:t.nodes}}),t._v(" "),i("div",{staticClass:"index-locations panel panel-default"},[i("div",{staticClass:"panel-heading"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"panel-body location-list",staticStyle:{"text-align":"center"}},t._l(t.hotCities,function(a){return i("span",{staticClass:"name"},[i("router-link",{attrs:{to:"/users/city/"+a}},[t._v(t._s(a))])],1)}))])],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"media-left"},[i("img",{staticStyle:{width:"55px"},attrs:{src:"https://twemoji.b0.upaiyun.com/2/svg/1f381.svg"}})])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("code",{staticStyle:{padding:"4px 10px"}},[t._v("gem source -a https://gems.ruby-china.org")])])}]}}});
//# sourceMappingURL=1.a50090825ac756664f53.js.map