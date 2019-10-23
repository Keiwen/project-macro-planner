webpackJsonp([1],{0:function(t,e,r){"use strict";function n(t){r(228)}var a=r(85),o=r(7),c=n,i=o(a.a,null,!1,c,null,null);e.a=i.exports},100:function(t,e,r){"use strict";var n=r(10),a=r.n(n),o=r(1753),c=r(1756),i=r(8);e.a={name:"mainpage",components:{Workload:o.a,CardContainer:c.a},data:function(){return{}},computed:a()({},Object(i.c)(["currentProject"])),methods:a()({},Object(i.b)(["orderCardsSwitch"]))}},101:function(t,e,r){"use strict";var n=r(10),a=r.n(n),o=r(8);e.a={name:"workload",components:{},data:function(){return{}},computed:a()({},Object(o.c)(["resources","cards"]),{totalCapacity:function(){return this.resources.reduce(function(t,e){return t+e.capacity},0)},totalWorkload:function(){return this.cards.reduce(function(t,e){return e.out?t:t+e.workload},0)},progressSize:function(){return Math.max(this.totalCapacity,this.totalWorkload)},overload:function(){return this.totalWorkload>this.totalCapacity?this.totalWorkload-this.totalCapacity:0},acceptableLoad:function(){return this.overload?this.totalCapacity:this.totalWorkload},workloadVariant:function(){return"primary"}})}},102:function(t,e,r){"use strict";var n=r(10),a=r.n(n),o=r(8),c=r(1758);e.a={name:"card-container",components:{Card:c.a},data:function(){return{}},computed:{cards:{get:function(){return this.$store.getters.currentProject.cards},set:function(t){this.reorderCard(t)}}},methods:a()({},Object(o.b)(["reorderCard"]))}},103:function(t,e,r){"use strict";var n=r(10),a=r.n(n),o=r(8);e.a={name:"card",props:["card"],data:function(){return{}},methods:a()({},Object(o.b)(["switchCardInOut"]),{gotoEditCard:function(){this.$router.push({name:"edit-card",params:{card:this.card}})},switchCard:function(){this.switchCardInOut(this.card.id)}})}},104:function(t,e,r){"use strict";var n=r(54),a=r.n(n),o=r(10),c=r.n(o),i=r(8),s=r(1766);e.a={name:"card-edit",components:{CardColorPick:s.a},data:function(){return{card:{},newProject:{}}},computed:c()({},Object(i.c)(["getDefaultCard","cardColors","currentProject","projects"])),mounted:function(){this.card=this.$route.params.card,this.card||(this.card=this.getDefaultCard()),this.card=JSON.parse(a()(this.card)),this.newProject=this.currentProject,this.$refs.inputCardName.focus()},methods:c()({},Object(i.b)(["setCard","removeCard","moveCard"]),{confirmEdit:function(){this.setCard(this.card),this.$router.push({name:"mainpage"})},cancelEdit:function(){this.$router.push({name:"mainpage"})},remove:function(){this.removeCard(this.card.id),this.$router.push({name:"mainpage"})},pickColor:function(t){this.card.color=t},changeProject:function(){this.moveCard({toProjectId:this.newProject.id,card:this.card}),this.$router.push({name:"mainpage"})}})}},105:function(t,e,r){"use strict";var n=r(10),a=r.n(n),o=r(8);e.a={name:"card-color-pick",props:["current"],data:function(){return{pick:""}},computed:a()({},Object(o.c)(["cardColors"])),methods:{pickColor:function(t){this.pick=t,this.$emit("pick-color",t)}}}},106:function(t,e,r){"use strict";var n=r(54),a=r.n(n),o=r(10),c=r.n(o),i=r(8);e.a={name:"resource-edit",components:{},data:function(){return{resource:{}}},computed:c()({},Object(i.c)(["getDefaultResource"])),mounted:function(){this.resource=this.$route.params.resource,this.resource||(this.resource=this.getDefaultResource()),this.resource=JSON.parse(a()(this.resource)),this.$refs.inputResourceName.focus()},methods:c()({},Object(i.b)(["setResource","removeResource"]),{confirmEdit:function(){this.setResource(this.resource),this.$router.push({name:"resources"})},cancelEdit:function(){this.$router.push({name:"resources"})},remove:function(){this.removeResource(this.resource.id),this.$router.push({name:"resources"})}})}},107:function(t,e,r){"use strict";var n=r(10),a=r.n(n),o=r(8),c=r(1775);e.a={name:"resource-container",components:{Resource:c.a},data:function(){return{}},computed:a()({},Object(o.c)(["resources"])),methods:{back:function(){this.$router.push({name:"mainpage"})}}}},108:function(t,e,r){"use strict";e.a={name:"resource",props:["resource"],data:function(){return{}}}},109:function(t,e,r){"use strict";var n=r(10),a=r.n(n),o=r(8);e.a={name:"project-edit",components:{},data:function(){return{project:{id:0,name:""}}},computed:a()({},Object(o.c)(["getDefaultProject"])),mounted:function(){this.$route.params.project&&(this.project.id=this.$route.params.project.id,this.project.name=this.$route.params.project.name),this.$refs.inputProjectName.focus()},methods:a()({},Object(o.b)(["setProject","removeProject"]),{confirmEdit:function(){this.setProject(this.project),this.$router.push({name:"projects"})},cancelEdit:function(){this.$router.push({name:"projects"})},remove:function(){this.removeProject(this.project.id),this.$router.push({name:"projects"})}})}},110:function(t,e,r){"use strict";var n=r(10),a=r.n(n),o=r(8),c=r(1784);e.a={name:"project-container",components:{Project:c.a},data:function(){return{}},computed:a()({},Object(o.c)(["projects"])),methods:{back:function(){this.$router.push({name:"mainpage"})}}}},111:function(t,e,r){"use strict";var n=r(10),a=r.n(n),o=r(8);e.a={name:"project",props:["project"],data:function(){return{}},computed:a()({},Object(o.c)(["currentProject"]),{isCurrent:function(){return this.currentProject.id===this.project.id}}),methods:a()({},Object(o.b)(["pickProject"]),{selectProject:function(){this.pickProject(this.project.id),this.$router.push({name:"mainpage"})}})}},112:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(34),a=r(116),o=(r.n(a),r(118)),c=(r.n(o),r(119)),i=r(0),s=(r(257),r(1738)),u=r.n(s),d=r(1740),l=r(1743),p=r(1788);n.a.config.productionTip=!1,n.a.use(c.a),n.a.component("icon",i.a),n.a.component("draggable",u.a),new n.a({el:"#app",store:p.a,router:l.a,template:"<App/>",components:{App:d.a}})},116:function(t,e){},118:function(t,e){},123:function(t,e){},152:function(t,e){},169:function(t,e){},1740:function(t,e,r){"use strict";function n(t){r(1741)}var a=r(99),o=r(1742),c=r(7),i=n,s=c(a.a,o.a,!1,i,null,null);e.a=s.exports},1741:function(t,e){},1742:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("main",[r("router-view")],1)])},a=[],o={render:n,staticRenderFns:a};e.a=o},1743:function(t,e,r){"use strict";var n=r(34),a=r(1744),o=r(1745),c=r(1763),i=r(1770),s=r(1773),u=r(1779),d=r(1782);n.a.use(a.a),e.a=new a.a({scrollBehavior:function(t,e,r){return r||(t.hash?{selector:t.hash}:{x:0,y:0})},routes:[{path:"/",name:"mainpage",component:o.a},{path:"/edit-card",name:"edit-card",component:c.a},{path:"/resources",name:"resources",component:s.a},{path:"/edit-resource",name:"edit-resource",component:i.a},{path:"/projects",name:"projects",component:d.a},{path:"/edit-project",name:"edit-project",component:u.a}]})},1745:function(t,e,r){"use strict";function n(t){r(1746)}var a=r(100),o=r(1762),c=r(7),i=n,s=c(a.a,o.a,!1,i,null,null);e.a=s.exports},1746:function(t,e){},1753:function(t,e,r){"use strict";function n(t){r(1754)}var a=r(101),o=r(1755),c=r(7),i=n,s=c(a.a,o.a,!1,i,null,null);e.a=s.exports},1754:function(t,e){},1755:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"workload"},[r("b-progress",{attrs:{max:t.progressSize}},[r("b-progress-bar",{attrs:{variant:t.workloadVariant,value:t.acceptableLoad}}),t._v(" "),t.overload?r("b-progress-bar",{attrs:{variant:"danger",value:t.overload,animated:""}}):t._e()],1),t._v(" "),r("span",[t._v(t._s(t.totalWorkload)+" / "+t._s(t.totalCapacity))])],1)},a=[],o={render:n,staticRenderFns:a};e.a=o},1756:function(t,e,r){"use strict";function n(t){r(1757)}var a=r(102),o=r(1761),c=r(7),i=n,s=c(a.a,o.a,!1,i,null,null);e.a=s.exports},1757:function(t,e){},1758:function(t,e,r){"use strict";function n(t){r(1759)}var a=r(103),o=r(1760),c=r(7),i=n,s=c(a.a,o.a,!1,i,null,null);e.a=s.exports},1759:function(t,e){},1760:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card col-sm-6 text-center",style:{"--cardColor":t.card.color}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-3"},[r("div",{staticClass:"card-side card-handle ddHandle btn btn-outline-primary"},[r("icon",{attrs:{name:"arrows-alt",scale:"1.5"}})],1)]),t._v(" "),r("div",{staticClass:"col-6 card-body vertical-align",on:{click:function(e){t.gotoEditCard()}}},[r("div",[t._v(t._s(t.card.name))])]),t._v(" "),r("div",{staticClass:"col-3"},[r("button",{staticClass:"card-side card-edit card-workload btn btn-outline-primary",on:{click:function(e){t.switchCard()}}},[t.card.out?r("icon",{staticClass:"card-out",attrs:{scale:"1.5",name:"ban",color:"red"}}):r("span",[t._v(t._s(t.card.workload))])],1)])])])},a=[],o={render:n,staticRenderFns:a};e.a=o},1761:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-container container"},[r("draggable",{attrs:{options:{animation:150,handle:".ddHandle"}},model:{value:t.cards,callback:function(e){t.cards=e},expression:"cards"}},t._l(t.cards,function(t){return r("card",{key:t.id,attrs:{card:t}})}),1)],1)},a=[],o={render:n,staticRenderFns:a};e.a=o},1762:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main"},[r("header",{staticClass:"fixed-top"},[r("workload")],1),t._v(" "),r("div",{staticClass:"content"},[r("card-container")],1),t._v(" "),r("footer",{staticClass:"fixed-bottom"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-2"},[r("router-link",{staticClass:"btn btn-primary btn-main btn-main-resources",attrs:{to:{name:"resources"}}},[r("icon",{attrs:{name:"users",scale:"2"}})],1)],1),t._v(" "),r("div",{staticClass:"col-5"},[r("router-link",{staticClass:"main-project vertical-align",attrs:{to:{name:"projects"}}},[t._v("\n          "+t._s(t.currentProject.name)+"\n        ")])],1),t._v(" "),r("div",{staticClass:"col-3"},[r("button",{staticClass:"btn btn-dark btn-main btn-main-order",on:{click:function(e){t.orderCardsSwitch()}}},["alpha"==t.currentProject.order?r("icon",{attrs:{name:"sort-alpha-down",scale:"2"}}):t._e(),t._v(" "),"workload"==t.currentProject.order?r("icon",{attrs:{name:"sort-amount-down",scale:"2"}}):t._e(),t._v(" "),0==t.currentProject.order?r("icon",{attrs:{name:"sort",scale:"2"}}):t._e()],1)]),t._v(" "),r("div",{staticClass:"col-2"},[r("router-link",{staticClass:"btn btn-primary btn-main btn-main-add",attrs:{to:{name:"edit-card"}}},[r("icon",{attrs:{name:"plus",scale:"2"}})],1)],1)])])])},a=[],o={render:n,staticRenderFns:a};e.a=o},1763:function(t,e,r){"use strict";function n(t){r(1764)}var a=r(104),o=r(1769),c=r(7),i=n,s=c(a.a,o.a,!1,i,null,null);e.a=s.exports},1764:function(t,e){},1766:function(t,e,r){"use strict";function n(t){r(1767)}var a=r(105),o=r(1768),c=r(7),i=n,s=c(a.a,o.a,!1,i,null,null);e.a=s.exports},1767:function(t,e){},1768:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row color-pick-container text-center"},t._l(t.cardColors,function(e){return r("div",{staticClass:"col-3"},[r("div",{staticClass:"color-pick btn btn-default",style:{"--cardColor":e},on:{click:function(r){t.pickColor(e)}}},[t.current===e?r("icon",{attrs:{name:"check"}}):t._e()],1)])}))])},a=[],o={render:n,staticRenderFns:a};e.a=o},1769:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"edit-card container-fluid"},[t.card.id?r("h2",[t._v("Edit card")]):r("h2",[t._v("Create card")]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"control-label col-4 col-md-2",attrs:{for:"newName"}},[t._v("Name:")]),t._v(" "),r("div",{staticClass:"input-group col-8 col-md-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.card.name,expression:"card.name"}],ref:"inputCardName",staticClass:"form-control",attrs:{type:"text",id:"newName",maxlength:"22"},domProps:{value:t.card.name},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.confirmEdit()},input:function(e){e.target.composing||t.$set(t.card,"name",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"control-label col-4 col-md-2",attrs:{for:"newWorkload"}},[t._v("Workload:")]),t._v(" "),r("div",{staticClass:"input-group col-8 col-md-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.card.workload,expression:"card.workload"}],staticClass:"form-control",attrs:{type:"number",id:"newWorkload"},domProps:{value:t.card.workload},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.confirmEdit()},input:function(e){e.target.composing||t.$set(t.card,"workload",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("card-color-pick",{attrs:{current:t.card.color},on:{"pick-color":t.pickColor}})],1),t._v(" "),t.card.id?r("button",{staticClass:"btn btn-danger",on:{click:function(e){t.remove()}}},[r("icon",{attrs:{name:"trash"}}),t._v(" Remove")],1):t._e(),t._v(" "),r("button",{staticClass:"btn btn-warning",on:{click:function(e){t.cancelEdit()}}},[r("icon",{attrs:{name:"times"}}),t._v(" Cancel")],1),t._v(" "),r("button",{staticClass:"btn btn-success",on:{click:function(e){t.confirmEdit()}}},[r("icon",{attrs:{name:"check"}}),t._v(" Save")],1),t._v(" "),t.card.id?r("div",{staticClass:"project-move container-fluid"},[r("hr"),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"control-label col-4 col-md-2",attrs:{for:"newProject"}},[t._v("Move to project:")]),t._v(" "),r("div",{staticClass:"input-group col-8 col-md-10"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.newProject,expression:"newProject"}],staticClass:"form-control",attrs:{id:"newProject"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.newProject=e.target.multiple?r:r[0]},function(e){t.changeProject()}]}},t._l(t.projects,function(e){return r("option",{domProps:{value:e}},[t._v(t._s(e.name))])}))])])]):t._e()])},a=[],o={render:n,staticRenderFns:a};e.a=o},1770:function(t,e,r){"use strict";function n(t){r(1771)}var a=r(106),o=r(1772),c=r(7),i=n,s=c(a.a,o.a,!1,i,null,null);e.a=s.exports},1771:function(t,e){},1772:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"edit-resource container-fluid"},[t.resource.id?r("h2",[t._v("Edit resource")]):r("h2",[t._v("Create resource")]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"control-label col-4 col-md-2",attrs:{for:"newName"}},[t._v("Name:")]),t._v(" "),r("div",{staticClass:"input-group col-8 col-md-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.resource.name,expression:"resource.name"}],ref:"inputResourceName",staticClass:"form-control",attrs:{type:"text",id:"newName",maxlength:"30"},domProps:{value:t.resource.name},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.confirmEdit()},input:function(e){e.target.composing||t.$set(t.resource,"name",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"control-label col-4 col-md-2",attrs:{for:"newCapacity"}},[t._v("Capacity:")]),t._v(" "),r("div",{staticClass:"input-group col-8 col-md-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.resource.capacity,expression:"resource.capacity"}],staticClass:"form-control",attrs:{type:"number",id:"newCapacity"},domProps:{value:t.resource.capacity},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.confirmEdit()},input:function(e){e.target.composing||t.$set(t.resource,"capacity",e.target.value)}}})])]),t._v(" "),t.resource.id?r("button",{staticClass:"btn btn-danger",on:{click:function(e){t.remove()}}},[r("icon",{attrs:{name:"trash"}}),t._v(" Remove")],1):t._e(),t._v(" "),r("button",{staticClass:"btn btn-warning",on:{click:function(e){t.cancelEdit()}}},[r("icon",{attrs:{name:"times"}}),t._v(" Cancel")],1),t._v(" "),r("button",{staticClass:"btn btn-success",on:{click:function(e){t.confirmEdit()}}},[r("icon",{attrs:{name:"check"}}),t._v(" Save")],1)])},a=[],o={render:n,staticRenderFns:a};e.a=o},1773:function(t,e,r){"use strict";function n(t){r(1774)}var a=r(107),o=r(1778),c=r(7),i=n,s=c(a.a,o.a,!1,i,null,null);e.a=s.exports},1774:function(t,e){},1775:function(t,e,r){"use strict";function n(t){r(1776)}var a=r(108),o=r(1777),c=r(7),i=n,s=c(a.a,o.a,!1,i,null,null);e.a=s.exports},1776:function(t,e){},1777:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"resource col-sm-6"},[r("div",{staticClass:"row vertical-align"},[r("div",{staticClass:"col-8"},[t._v("\n            "+t._s(t.resource.name)+"\n        ")]),t._v(" "),r("div",{staticClass:"col-2"},[t._v("\n            "+t._s(t.resource.capacity)+"\n        ")]),t._v(" "),r("div",{staticClass:"col-2"},[r("router-link",{staticClass:"btn btn-outline-primary",attrs:{to:{name:"edit-resource",params:{resource:t.resource}}}},[r("icon",{attrs:{name:"pencil-alt"}})],1)],1)])])},a=[],o={render:n,staticRenderFns:a};e.a=o},1778:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"resource-container"},t._l(t.resources,function(t){return r("resource",{key:t.id,attrs:{resource:t}})}),1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-4"},[r("button",{staticClass:"btn btn-info",on:{click:function(e){t.back()}}},[r("icon",{attrs:{name:"arrow-left"}}),t._v(" Back")],1)]),t._v(" "),r("div",{staticClass:"col-4"}),t._v(" "),r("div",{staticClass:"col-4"},[r("router-link",{staticClass:"btn btn-outline-primary",attrs:{to:{name:"edit-resource"}}},[r("icon",{attrs:{name:"plus"}})],1)],1)])])},a=[],o={render:n,staticRenderFns:a};e.a=o},1779:function(t,e,r){"use strict";function n(t){r(1780)}var a=r(109),o=r(1781),c=r(7),i=n,s=c(a.a,o.a,!1,i,null,null);e.a=s.exports},1780:function(t,e){},1781:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"edit-project container-fluid"},[t.project.id?r("h2",[t._v("Edit project")]):r("h2",[t._v("Create project")]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"control-label col-4 col-md-2",attrs:{for:"newName"}},[t._v("Name:")]),t._v(" "),r("div",{staticClass:"input-group col-8 col-md-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.project.name,expression:"project.name"}],ref:"inputProjectName",staticClass:"form-control",attrs:{type:"text",id:"newName",maxlength:"18"},domProps:{value:t.project.name},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.confirmEdit()},input:function(e){e.target.composing||t.$set(t.project,"name",e.target.value)}}})])]),t._v(" "),t.project.id>1?r("button",{staticClass:"btn btn-danger",on:{click:function(e){t.remove()}}},[r("icon",{attrs:{name:"trash"}}),t._v(" Remove")],1):t._e(),t._v(" "),r("button",{staticClass:"btn btn-warning",on:{click:function(e){t.cancelEdit()}}},[r("icon",{attrs:{name:"times"}}),t._v(" Cancel")],1),t._v(" "),r("button",{staticClass:"btn btn-success",on:{click:function(e){t.confirmEdit()}}},[r("icon",{attrs:{name:"check"}}),t._v(" Save")],1)])},a=[],o={render:n,staticRenderFns:a};e.a=o},1782:function(t,e,r){"use strict";function n(t){r(1783)}var a=r(110),o=r(1787),c=r(7),i=n,s=c(a.a,o.a,!1,i,null,null);e.a=s.exports},1783:function(t,e){},1784:function(t,e,r){"use strict";function n(t){r(1785)}var a=r(111),o=r(1786),c=r(7),i=n,s=c(a.a,o.a,!1,i,null,null);e.a=s.exports},1785:function(t,e){},1786:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project col-sm-6"},[r("div",{staticClass:"row vertical-align"},[r("div",{staticClass:"col-7"},[t._v("\n            "+t._s(t.project.name)+"\n        ")]),t._v(" "),r("div",{staticClass:"col-3"},[t.isCurrent?r("span",[t._v("Current")]):r("button",{staticClass:"btn btn-outline-success",on:{click:function(e){t.selectProject()}}},[r("icon",{attrs:{name:"arrow-alt-circle-left"}})],1)]),t._v(" "),r("div",{staticClass:"col-2"},[r("router-link",{staticClass:"btn btn-outline-primary",attrs:{to:{name:"edit-project",params:{project:t.project}}}},[r("icon",{attrs:{name:"pencil-alt"}})],1)],1)])])},a=[],o={render:n,staticRenderFns:a};e.a=o},1787:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"project-container"},t._l(t.projects,function(t){return r("project",{key:t.id,attrs:{project:t}})}),1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-4"},[r("button",{staticClass:"btn btn-info",on:{click:function(e){t.back()}}},[r("icon",{attrs:{name:"arrow-left"}}),t._v(" Back")],1)]),t._v(" "),r("div",{staticClass:"col-4"}),t._v(" "),r("div",{staticClass:"col-4"},[r("router-link",{staticClass:"btn btn-outline-primary",attrs:{to:{name:"edit-project"}}},[r("icon",{attrs:{name:"plus"}})],1)],1)])])},a=[],o={render:n,staticRenderFns:a};e.a=o},1788:function(t,e,r){"use strict";var n,a=r(86),o=r.n(a),c=r(54),i=r.n(c),s=r(34),u=r(8),d=r(1789),l=(r.n(d),r(1790)),p=r(1791);s.a.use(u.a);var f={key:"keiwen-wmp"},m=["#FFFFFF","#F3958D","#FCCE48","#FFF79A","#D9FFAE","#BFFFF0","#CFF1F8","#CBDDFB","#E5CBFC","#FDE0F0","#EFDCC7","#EAEBEE"],v={id:0,name:"",color:m[0],workload:0,out:!1},h={id:0,name:"",capacity:0},C={id:0,name:"",nextCardId:1,lastCardChanged:0,cards:[],nextResourceId:1,lastResourceChanged:0,order:0,resources:[]},j=JSON.parse(i()(C));j.id=1,j.name="Project",e.a=new u.a.Store({state:{nextProjectId:2,lastProjectChanged:0,currentProjectId:1,projects:[JSON.parse(i()(j))]},getters:{projects:function(t){return t.projects},getDefaultProject:function(t){return function(){return JSON.parse(i()(C))}},getProjectIndex:function(t){return function(e){void 0===e&&(e=t.currentProjectId);for(var r=0;r<t.projects.length;r++){if(t.projects[r].id===e)return r}return-1}},getProject:function(t,e){return function(r){void 0===r&&(r=t.currentProjectId);var n=e.getProjectIndex(r);return n<0?{}:t.projects[n]}},currentProject:function(t,e){return e.getProject()},cards:function(t,e){return e.currentProject.cards},getDefaultCard:function(t){return function(){return JSON.parse(i()(v))}},getCardIndex:function(t,e){return function(r,n){void 0===n&&(n=t.currentProjectId);var a=e.getProject(n);if(void 0===a.id)return-1;for(var o=0;o<a.cards.length;o++){if(a.cards[o].id===r)return o}return-1}},getCard:function(t,e){return function(r,n){void 0===n&&(n=t.currentProjectId);var a=e.getCardIndex(r,n);return a<0?{}:e.getProject(n).cards[a]}},cardColors:function(t){return m},resources:function(t,e){return e.currentProject.resources},getDefaultResource:function(t){return function(){return JSON.parse(i()(h))}},getResourceIndex:function(t,e){return function(r,n){void 0===n&&(n=t.currentProjectId);var a=e.getProject(n);if(void 0===a.id)return-1;for(var o=0;o<a.resources.length;o++){if(a.resources[o].id===r)return o}return-1}},getResource:function(t,e){return function(r,n){void 0===n&&(n=t.currentProjectId);var a=e.getResourceIndex(r,n);return a<0?{}:e.getProject(n).resources[a]}}},actions:{setCard:function(t,e){var r=t.getters,n=t.commit;void 0===e.id&&(e.id=0);var a=r.getProjectIndex();if(!(a<0)){var o=r.getCardIndex(e.id);e.workload=parseInt(e.workload),n(l.f,{cardData:e,cardIndex:o,projectIndex:a})}},switchCardInOut:function(t,e){var r=t.getters,n=t.commit,a=r.getProjectIndex();if(!(a<0)){var o=r.getCardIndex(e);n(l.i,{cardId:e,cardIndex:o,projectIndex:a})}},removeCard:function(t,e){var r=t.getters,n=t.commit,a=r.getProjectIndex();if(!(a<0)){var o=r.getCardIndex(e);n(l.c,{cardIndex:o,projectIndex:a})}},reorderCard:function(t,e){var r=t.getters,n=t.commit,a=r.getProjectIndex();a<0||n(l.a,{cards:e,projectIndex:a,order:0})},orderCardsBy:function(t,e){var r=t.getters,n=t.commit;"workload"!==e&&(e="alpha");var a=r.getProjectIndex();if(!(a<0)){var o=JSON.parse(i()(r.cards));o.sort(function(t,r){switch(e){case"workload":return r.workload-t.workload;default:return r.name.toLowerCase()>t.name.toLowerCase()?-1:1}}),n(l.a,{cards:o,projectIndex:a,order:e})}},orderCardsSwitch:function(t){var e=t.getters,r=t.dispatch,n=e.currentProject.order,a="alpha";switch(n){case"alpha":a="workload"}r("orderCardsBy",a)},moveCard:function(t,e){var r=t.getters,n=t.commit;if(void 0!==e.card.id){var a=r.getProjectIndex(),o=r.getProjectIndex(e.toProjectId);if(!(a<0||o<0)){var c=r.getCardIndex(e.card.id);e.card.workload=parseInt(e.card.workload),n(l.f,{cardData:e.card,cardIndex:-1,projectIndex:o}),n(l.c,{cardIndex:c,projectIndex:a})}}},setResource:function(t,e){var r=t.getters,n=t.commit;void 0===e.id&&(e.id=0);var a=r.getProjectIndex();if(!(a<0)){var o=r.getResourceIndex(e.id);e.capacity=parseInt(e.capacity),n(l.h,{resourceData:e,resourceIndex:o,projectIndex:a})}},removeResource:function(t,e){var r=t.getters,n=t.commit,a=r.getProjectIndex();if(!(a<0)){var o=r.getResourceIndex(e);n(l.e,{resourceId:e,resourceIndex:o,projectIndex:a})}},setProject:function(t,e){var r=t.getters,n=t.commit;void 0===e.id&&(e.id=0);var a=r.getProjectIndex(e.id);n(l.g,{projectData:e,projectIndex:a})},removeProject:function(t,e){var r=t.getters,n=t.commit,a=r.getProjectIndex(e);n(l.d,{projectId:e,projectIndex:a})},pickProject:function(t,e){var r=t.getters,n=t.commit;r.getProjectIndex(e)<0||n(l.b,e)}},mutations:(n={},o()(n,l.f,function(t,e){var r=t.projects[e.projectIndex];e.cardIndex>=0?r.cards[e.cardIndex]=e.cardData:(e.cardData.id=r.nextCardId,r.nextCardId++,r.cards.push(e.cardData)),r.order=0,r.lastCardChanged=e.cardData.id}),o()(n,l.i,function(t,e){var r=t.projects[e.projectIndex];r.cards[e.cardIndex].out=!r.cards[e.cardIndex].out,r.lastCardChanged=e.cardId}),o()(n,l.c,function(t,e){var r=t.projects[e.projectIndex];r.cards.splice(e.cardIndex,1),r.lastCardChanged=0}),o()(n,l.a,function(t,e){var r=t.projects[e.projectIndex];r.cards=e.cards,r.order=e.order}),o()(n,l.h,function(t,e){var r=t.projects[e.projectIndex];e.resourceIndex>=0?r.resources[e.resourceIndex]=e.resourceData:(e.resourceData.id=r.nextResourceId,r.nextResourceId++,r.resources.push(e.resourceData)),r.lastResourceChanged=e.resourceData.id}),o()(n,l.e,function(t,e){var r=t.projects[e.projectIndex];r.resources.splice(e.resourceIndex,1),r.lastResourceChanged=e.resourceId}),o()(n,l.g,function(t,e){if(e.projectIndex>=0)t.projects[e.projectIndex].name=e.projectData.name,t.lastProjectChanged=e.projectData.id;else{var r=JSON.parse(i()(C));r.name=e.projectData.name,r.id=t.nextProjectId,t.nextProjectId++,t.projects.push(r),t.currentProjectId=r.id,t.lastProjectChanged=r.id}}),o()(n,l.d,function(t,e){t.projects.splice(e.projectIndex,1),t.currentProjectId===e.projectId&&(t.currentProjectId=1),t.lastProjectChanged=e.projectId}),o()(n,l.b,function(t,e){t.currentProjectId=e}),n),strict:!1,plugins:[Object(p.a)(f)]})},1790:function(t,e,r){"use strict";r.d(e,"f",function(){return n}),r.d(e,"i",function(){return a}),r.d(e,"c",function(){return o}),r.d(e,"a",function(){return c}),r.d(e,"h",function(){return i}),r.d(e,"e",function(){return s}),r.d(e,"g",function(){return u}),r.d(e,"d",function(){return d}),r.d(e,"b",function(){return l});var n="SET_CARD",a="SWITCH_CARD",o="REMOVE_CARD",c="CHANGE_CARDS",i="SET_RESOURCE",s="REMOVE_RESOURCE",u="SET_PROJECT",d="REMOVE_PROJECT",l="PICK_PROJECT"},214:function(t,e){},228:function(t,e){},85:function(t,e,r){"use strict";function n(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return r.forEach(function(e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])}),t}function a(){return"fa-"+(d++).toString(16)}var o=r(86),c=r.n(o),i=r(235),s=r.n(i),u={};e.a={name:"fa-icon",render:function(t){if(null===this.name)return t();var e={class:this.klass,style:this.style,attrs:{role:this.label?"img":"presentation","aria-label":this.label||null,tabindex:this.tabindex,x:this.x,y:this.y,width:this.width,height:this.height,viewBox:this.box,focusable:this.focusable}};return this.raw&&(e.domProps={innerHTML:this.raw}),t("svg",e,this.raw&&this.icon?null:this.$slots.default||[].concat(s()(this.icon.paths.map(function(e,r){return t("path",{attrs:e,key:"path-"+r})})),s()(this.icon.polygons.map(function(e,r){return t("polygon",{attrs:e,key:"polygon-"+r})}))))},props:{name:{type:String,validator:function(t){return!t||t in u||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlease make sure you have imported this icon before using it.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String,tabindex:[Number,String]},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return c()({"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse},this.$options.name,!0)},icon:function(){return this.name?u[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,r=t.height;return Math.max(e,r)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(t,r,n){var o=a();return e[n]=o,' id="'+o+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,r,n,a){var o=r||a;return o&&e[o]?"#"+e[o]:t}),t},focusable:function(){var t=this.tabindex;return null==t?"false":("string"==typeof t?parseInt(t,10):t)>=0?null:"false"}},mounted:function(){var t=this;if(!this.name&&null!==this.name&&0===this.$children.length)return void console.warn('Invalid prop: prop "name" is required.');if(!this.icon){var e=0,r=0;this.$children.forEach(function(n){n.outerScale=t.normalizedScale,e=Math.max(e,n.width),r=Math.max(r,n.height)}),this.childrenWidth=e,this.childrenHeight=r,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(r-t.height)/2})}},register:function(t){for(var e in t){var r=t[e],a=r.paths,o=void 0===a?[]:a,c=r.d,i=r.polygons,s=void 0===i?[]:i,d=r.points;c&&o.push({d:c}),d&&s.push({points:d}),u[e]=n({},r,{paths:o,polygons:s})}},icons:u};var d=870711},99:function(t,e,r){"use strict";e.a={name:"app"}}},[112]);
//# sourceMappingURL=app.9030cdaca8579f0ba85b.js.map