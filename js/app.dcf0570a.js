(function(e){function t(t){for(var c,i,o=t[0],u=t[1],l=t[2],s=0,f=[];s<o.length;s++)i=o[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);b&&b(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},a=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"3ffc5d13"}[e]+".js"}function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,c){n=r[e]=[t,c]}));t.push(n[2]=c);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=i(e);var l=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",l.name="ChunkLoadError",l.type=c,l.request=a,n[1](l)}r[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/tg/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var b=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"08af":function(e,t,n){},7261:function(e,t,n){"use strict";n("08af")},"7c39":function(e,t,n){"use strict";n("bdfe")},ae65:function(e,t,n){},bdfe:function(e,t,n){},be27:function(e,t,n){"use strict";n("ae65")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={id:"nav"},a=Object(c["g"])("Home"),i=Object(c["g"])(" | "),o=Object(c["g"])("Creator"),u=Object(c["g"])(" | "),l=Object(c["g"])("About");function s(e,t){var n=Object(c["y"])("router-link"),s=Object(c["y"])("router-view");return Object(c["r"])(),Object(c["e"])(c["a"],null,[Object(c["f"])("div",r,[Object(c["h"])(n,{to:"/"},{default:Object(c["E"])((function(){return[a]})),_:1}),i,Object(c["h"])(n,{to:"/creator"},{default:Object(c["E"])((function(){return[o]})),_:1}),u,Object(c["h"])(n,{to:"/about"},{default:Object(c["E"])((function(){return[l]})),_:1})]),Object(c["h"])(s)],64)}n("7c39");var b=n("6b0d"),f=n.n(b);const d={},O=f()(d,[["render",s]]);var j=O,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),h=n("cf05"),g=n.n(h),v={class:"home"},m=Object(c["f"])("img",{alt:"Vue logo",src:g.a},null,-1),y={class:"hello"},R=Object(c["f"])("h1",null,"Welcome to The Guild",-1),S=Object(c["f"])("em",null,"by Rafaeu749",-1);function x(e,t,n,r,a,i){var o=Object(c["y"])("marquee");return Object(c["r"])(),Object(c["e"])("div",v,[m,Object(c["f"])("div",y,[R,Object(c["h"])(o,null,{default:Object(c["E"])((function(){return[S]})),_:1})])])}var A=Object(c["i"])({name:"Home",components:{}});const I=f()(A,[["render",x]]);var k=I,w=function(e){return Object(c["u"])("data-v-5a878752"),e=e(),Object(c["s"])(),e},L={class:"creator"},P=w((function(){return Object(c["f"])("hr",null,null,-1)})),C=w((function(){return Object(c["f"])("em",null,"Carregando...",-1)})),_=[C],T={class:"container"},E={class:"flex-item"},F={class:"flex-item"},z=w((function(){return Object(c["f"])("hr",null,null,-1)})),D={key:0};function M(e,t,n,r,a,i){var o=Object(c["y"])("race-list"),u=Object(c["y"])("race-description");return Object(c["r"])(),Object(c["e"])("div",L,[Object(c["f"])("input",{type:"file",onChange:t[0]||(t[0]=function(t){return e.handleOnChange(t.target)})},null,32),P,Object(c["F"])(Object(c["f"])("div",null,_,512),[[c["C"],e.loading]]),Object(c["f"])("div",null,Object(c["A"])(this.raceListCount)+" total races loaded (selected: "+Object(c["A"])(this.selectedIndex)+") ",1),Object(c["f"])("div",T,[Object(c["f"])("div",E,[Object(c["h"])(o)]),Object(c["f"])("div",F,[Object(c["h"])(u)])]),z,this.getSelectedRaceIndex>=0?(Object(c["r"])(),Object(c["e"])("div",D,Object(c["A"])(this.getRaceList[this.getSelectedRaceIndex]),1)):Object(c["d"])("",!0)])}var N=n("1da1"),H=n("5530"),J=(n("96cf"),n("5502")),V=(n("b0c0"),n("a15b"),n("d81d"),n("e9c4"),{key:0,id:"pagecontent",class:"stats"}),W=Object(c["f"])("tr",null,[Object(c["f"])("th",{class:"border",colspan:"6"})],-1),q={title:"Page {{this.race?.page}}"},U={colspan:"6"},G=Object(c["f"])("b",null,"Ability Scores:",-1),Y={colspan:"6"},B=Object(c["f"])("b",null,"Size:",-1),K={colspan:"6"},Q=Object(c["f"])("b",null,"Speed:",-1),X=Object(c["f"])("tr",null,[Object(c["f"])("td",{colspan:"6"},[Object(c["f"])("div")])],-1),Z={colspan:"6"},$=Object(c["f"])("div",null,null,-1),ee={colspan:"6"},te=Object(c["f"])("b",null,"Source:",-1),ne=Object(c["g"])(),ce=Object(c["f"])("tr",null,[Object(c["f"])("th",{class:"border",colspan:"6"})],-1);function re(e,t,n,r,a,i){var o,u,l,s;return this.getSelectedRaceIndex>=0?(Object(c["r"])(),Object(c["e"])("table",V,[W,Object(c["f"])("tr",null,[Object(c["f"])("th",null,[Object(c["f"])("div",null,[Object(c["f"])("div",null,[Object(c["f"])("h1",null,Object(c["A"])(this.race.name),1)]),Object(c["f"])("div",null,[Object(c["f"])("span",null,Object(c["A"])(this.race.source),1),Object(c["f"])("span",q,"p"+Object(c["A"])(null===(o=this.race)||void 0===o?void 0:o.page),1)])])])]),Object(c["f"])("tr",null,[Object(c["f"])("td",U,[G,Object(c["g"])(" "+Object(c["A"])(null===(u=this.race)||void 0===u||null===(l=u.ability)||void 0===l?void 0:l.map((function(e){return JSON.stringify(e)})).join("; ")),1)])]),Object(c["f"])("tr",null,[Object(c["f"])("td",Y,[B,Object(c["g"])(" "+Object(c["A"])(this.race.size),1)])]),Object(c["f"])("tr",null,[Object(c["f"])("td",K,[Q,Object(c["g"])(" "+Object(c["A"])(this.race.speed)+" ft.",1)])]),X,Object(c["f"])("tr",null,[Object(c["f"])("td",Z,[Object(c["f"])("div",null,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(this.race.entries,(function(e,t){return Object(c["r"])(),Object(c["e"])("div",{key:t},[Object(c["f"])("span",null,Object(c["A"])(e.name),1),(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(e.entries,(function(e,t){return Object(c["r"])(),Object(c["e"])("p",{key:t},Object(c["A"])(e),1)})),128)),$])})),128))])])]),Object(c["f"])("tr",null,[Object(c["f"])("td",ee,[te,ne,Object(c["f"])("i",null,Object(c["A"])(this.race.source),1),Object(c["g"])(", page "+Object(c["A"])(null===(s=this.race)||void 0===s?void 0:s.page),1)])]),ce])):Object(c["d"])("",!0)}var ae=Object(c["i"])({name:"RaceDescription",components:{},computed:Object(H["a"])(Object(H["a"])({},Object(J["c"])({getRaceList:"getRaceList",getSelectedRaceIndex:"getSelectedRaceIndex"})),{},{race:function(){return this.getRaceList[this.getSelectedRaceIndex]}})});const ie=f()(ae,[["render",re]]);var oe=ie,ue={class:"container"},le=Object(c["f"])("thead",null,[Object(c["f"])("td",null,"Name"),Object(c["f"])("td",null,"Ability"),Object(c["f"])("td",null,"Size"),Object(c["f"])("td",null,"Source")],-1),se=["onClick"];function be(e,t,n,r,a,i){var o=this;return Object(c["r"])(),Object(c["e"])("div",ue,[Object(c["f"])("table",null,[le,(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(e.getRaceList,(function(e,t){var n,r;return Object(c["r"])(),Object(c["e"])("tr",{key:t,onClick:function(e){return o.selectRace(t)},style:{cursor:"pointer"},class:Object(c["n"])(t%2==0?"lighter":"")},[Object(c["f"])("td",null,Object(c["A"])(null===e||void 0===e?void 0:e.name),1),Object(c["f"])("td",null,Object(c["A"])(o.parseAbility(null!==(n=null===e||void 0===e?void 0:e.ability)&&void 0!==n?n:[])),1),Object(c["f"])("td",null,Object(c["A"])(null===e||void 0===e||null===(r=e.size)||void 0===r?void 0:r.map((function(e){return o.parseSize(e)})).join("; ")),1),Object(c["f"])("td",null,Object(c["A"])(null===e||void 0===e?void 0:e.source),1)],10,se)})),128))])])}n("159b"),n("b64b"),n("99af"),n("fb6a");var fe=Object(c["i"])({name:"RaceList",components:{},computed:Object(H["a"])({},Object(J["c"])({getRaceList:"getRaceList"})),methods:Object(H["a"])(Object(H["a"])({},Object(J["d"])({setSelectedRaceIndex:"setSelectedRaceIndex"})),{},{selectRace:function(e){this.setSelectedRaceIndex(e)},parseAbility:function(e){return de("string"==typeof e?e:e[0])},parseSize:function(e){return Oe(e)}})}),de=function(e){if(!e)return"";var t=[];return Object.keys(e).forEach((function(n){t.push("".concat(je(n),": ").concat(e[n]>0?"+":"-").concat(e[n]))})),t.join("; ")},Oe=function(e){switch(e){case"M":return"Medium";case"S":return"Small";case"V":return"Variant";default:return"ANOTHER DIMENSION OF REALITY (".concat(e,")")}},je=function(e){return 0==e.length?"":1==e.length?e.charAt(0).toUpperCase():e.charAt(0).toUpperCase()+e.slice(1)};n("be27");const pe=f()(fe,[["render",be]]);var he=pe,ge=Object(c["i"])({name:"Creator",components:{RaceDescription:oe,RaceList:he},data:function(){return{loading:!1}},computed:Object(H["a"])(Object(H["a"])({},Object(J["c"])({getRaceList:"getRaceList",getSelectedRaceIndex:"getSelectedRaceIndex"})),{},{raceListCount:function(){return this.getRaceList.length},selectedIndex:function(){return this.getSelectedRaceIndex}}),methods:Object(H["a"])(Object(H["a"])({},Object(J["b"])({readFile:"readFile"})),{},{handleOnChange:function(e){var t=this;return Object(N["a"])(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.loading=!0,c=e.files,c){n.next=4;break}return n.abrupt("return");case 4:if(c.length){n.next=6;break}return n.abrupt("return");case 6:if(null!=c[0]){n.next=8;break}return n.abrupt("return");case 8:t.readFile(c[0]).catch((function(e){console.error(e)})).finally((function(){t.loading=!1}));case 9:case"end":return n.stop()}}),n)})))()}}),beforeMount:function(){console.log("before mount")}});n("7261");const ve=f()(ge,[["render",M],["__scopeId","data-v-5a878752"]]);var me=ve,ye=[{path:"/",name:"Home",component:k},{path:"/creator",name:"Creator",component:me},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}],Re=Object(p["a"])({history:Object(p["b"])("/tg/"),routes:ye}),Se=Re,xe={raceDataList:[],selectedRaceIndex:-1},Ae={getRaceList:function(e){return e.raceDataList},getSelectedRaceIndex:function(e){return e.selectedRaceIndex}},Ie={setRaceListData:function(e,t){e.raceDataList=t},setSelectedRaceIndex:function(e,t){e.selectedRaceIndex=t}},ke={readFile:function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(t,n){var c,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:c=t.commit,r=new FileReader,r.onload=function(){setTimeout((function(){c("setRaceListData",we(JSON.parse(r.result)))}),1e3)},null!=n&&r.readAsText(n);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},we=function(e){for(var t=[],n=0;n<e.race.length;n++){var c=e.race[n],r={name:c.name,source:c.source,page:c.page,size:c.size,speed:c.speed,ability:c.ability,traitTags:c.traitTags,languageProficiencies:c.languageProficiencies,entries:c.entries,otherSources:c.otherSources,age:c.age,soundClip:c.soundClip,hasFluff:c.hasFluff,hasFluffImages:c.hasFluffImages,darkvision:c.darkvision,resist:c.resist,additionalSpells:c.additionalSpells,heightAndWeight:c.heightAndWeight,subraces:c.subraces,skillProficiencies:c.skillProficiencies,lineage:c.lineage,creatureTypes:c.creatureTypes,toolProficiencies:c.toolProficiencies,conditionImmune:c.conditionImmune,_copy:c._copy,feats:c.feats,srd:c.srd,weaponProficiencies:c.weaponProficiencies,additionalSources:c.additionalSources,immune:c.immune,armorProficiencies:c.armorProficiencies,vulnerable:c.vulnerable};t.push(r)}return t},Le={},Pe=Object(J["a"])({state:xe,getters:Ae,mutations:Ie,actions:ke,modules:Le});Object(c["c"])(j).use(Pe).use(Se).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.43d4ccee.png"}});
//# sourceMappingURL=app.dcf0570a.js.map