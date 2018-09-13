(function(t){function e(e){for(var s,n,r=e[0],c=e[1],l=e[2],u=0,m=[];u<r.length;u++)n=r[u],i[n]&&m.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("c21b"),i=a.n(s);i.a},"14d0":function(t,e,a){"use strict";var s=a("efb1"),i=a.n(s);i.a},"1c57":function(t,e,a){},"24a1":function(t,e,a){"use strict";var s=a("4acf"),i=a.n(s);i.a},"26ad":function(t,e,a){"use strict";var s=a("48eb"),i=a.n(s);i.a},"2fc5":function(t,e,a){"use strict";var s=a("1c57"),i=a.n(s);i.a},"3ee6":function(t,e,a){"use strict";var s=a("75ed"),i=a.n(s);i.a},"48eb":function(t,e,a){},"4acf":function(t,e,a){},"54ba":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),i=a("8c4f"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Pressable API Vue Example")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("Home")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"sites"}}},[t._v("Sites")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"site-create"}}},[t._v("Create Site")])],1),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.logout(e)}}},[t._v("Logout")])])])])]),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"}),a("div",{staticClass:"col-10"},[a("router-view")],1),a("div",{staticClass:"col"})])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],r={name:"app",methods:{logout:function(){this.$store.dispatch("account/logout"),this.$router.push({name:"home"})}}},c=r,l=(a("034f"),a("2877")),d=Object(l["a"])(c,o,n,!1,null,null,null);d.options.__file="App.vue";var u=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello row justify-content-center"},[t.isLoggedIn?a("div",{staticClass:"col-6 text-center"},[a("h1",[t._v("You are already logged in")]),a("p",[t._v("Go to "),a("router-link",{attrs:{to:"sites"}},[t._v("Sites")])],1)]):a("div",{staticClass:"col-6 text-left"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.authenticate(e)}}},[t._v("Login")])])])])},f=[],v={name:"Home",data:function(){return{email:"",password:""}},computed:{isLoggedIn:function(){return this.$store.state.account.isAuthenticated}},methods:{authenticate:function(){var t={email:this.email,password:this.password};this.$store.dispatch("account/authorize",t)}},mounted:function(){}},h=v,p=(a("14d0"),Object(l["a"])(h,m,f,!1,null,"d70dc600",null));p.options.__file="Home.vue";var _=p.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col text-right"},[a("router-link",{staticClass:"btn btn-primary ml-auto create-site",attrs:{to:{name:"site-create"}}},[t._v("Create Site")])],1)]),t.loading?a("div",{staticClass:"row"},[t._m(1)]):a("div",{staticClass:"row"},[a("table",{staticClass:"table"},[t._m(2),a("tbody",t._l(t.sites,function(t){return a("site-item",{key:t.id,attrs:{site:t}})}))])])])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col text-left"},[a("h1",[t._v("Your Pressable Sites")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col loader"},[a("i",{staticClass:"fas fa-spin fa-sun"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Name")]),a("th",{attrs:{scope:"col"}},[t._v("IP Address")]),a("th",{attrs:{scope:"col"}},[t._v("All Page Views")]),a("th",{attrs:{scope:"30"}},[t._v("Clone")]),a("th",{attrs:{width:"30"}},[t._v("Delete")])])])}],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{attrs:{scope:"row"}},[a("a",{attrs:{href:"#"},on:{click:t.siteShow}},[t._v(t._s(t.site.id))])]),a("td",[t._v(t._s(t.site.name))]),a("td",[t._v(t._s(t.site.ipAddress))]),a("td",[t._v(t._s(t.site.pageViewsAllTime))]),a("td",[a("a",{attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.cloneSite(e)}}},[a("i",{staticClass:"fas fa-clone"})])]),a("td",[a("a",{attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteSite(e)}}},[a("i",{staticClass:"far fa-trash-alt"})])])])},w=[],S=(a("7f7f"),a("1940")),A=a.n(S),y={name:"SiteItem",props:{site:Object},computed:{},data:function(){return{headers:{Authorization:"Bearer ".concat(this.$store.state.account.access_token),Content:"application/json"},random:""}},methods:{siteShow:function(){this.$store.dispatch("sites/setActiveSite",this.site),this.$router.push({name:"site-show",params:{id:this.site.id}})},cloneSite:function(){this.randomString();var t={headers:this.headers,id:this.site.id,name:this.site.name+this.random};this.$store.dispatch("sites/cloneSite",t)},deleteSite:function(){var t={headers:this.headers,id:this.site.id};this.$store.dispatch("sites/deleteSite",t)},randomString:function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=0;e<4;e++)this.random+=t.charAt(Math.floor(Math.random()*t.length))}},mounted:function(){}},E=y,$=Object(l["a"])(E,g,w,!1,null,null,null);$.options.__file="SiteItem.vue";var k=$.exports,P={name:"SitesList",components:{SiteItem:k},data:function(){return{headers:{Authorization:"Bearer ".concat(this.$store.state.account.access_token),Content:"application/json"}}},computed:{loading:function(){return this.$store.state.sites.loading},sites:function(){return this.$store.state.sites.list}},methods:{getSites:function(){this.$store.dispatch("sites/getSites",this.headers)}},mounted:function(){this.getSites(),this.$store.dispatch("sites/clearActiveSite")}},D=P,T=(a("24a1"),Object(l["a"])(D,b,C,!1,null,"d24594da",null));T.options.__file="SitesList.vue";var x=T.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row row-wrapper"},[a("div",{staticClass:"col"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h1",{staticClass:"page-title mb-5"},[t._v("Site: "+t._s(t.site.name))])])]),a("div",{staticClass:"row"},[t.isProduction?a("div",{staticClass:"col"},[a("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.disableProduction(e)}}},[t._v("Disable Production")])]):a("div",{staticClass:"col"},[a("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.enableProduction(e)}}},[t._v("Enable for Production")])]),a("div",{staticClass:"col"},[a("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.clearCache(e)}}},[t._v("Clear Cache")])])]),t._m(0),a("section",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"row row-data"},[t._m(1),a("div",{staticClass:"col site-right"},[t._v("\n            "+t._s(t.site.accountId)+"\n          ")])]),a("div",{staticClass:"row row-data"},[t._m(2),a("div",{staticClass:"col site-right"},[t._v("\n            "+t._s(t.site.id)+"\n          ")])]),a("div",{staticClass:"row row-data"},[t._m(3),a("div",{staticClass:"col site-right"},[t._v("\n            "+t._s(t.site.name)+"\n          ")])]),a("div",{staticClass:"row row-data"},[t._m(4),a("div",{staticClass:"col site-right"},[t._v("\n            "+t._s(t.site.created)+"\n          ")])]),a("div",{staticClass:"row row-data"},[t._m(5),a("div",{staticClass:"col site-right"},[t._v("\n            "+t._s(t.site.ecommerce)+"\n          ")])]),a("div",{staticClass:"row row-data"},[t._m(6),a("div",{staticClass:"col site-right"},[t._v("\n            "+t._s(t.site.ipAddress)+"\n          ")])]),a("div",{staticClass:"row row-data"},[t._m(7),a("div",{staticClass:"col site-right"},[t._v("\n            "+t._s(t.site.pageViewsAllTime)+"\n          ")])])]),a("div",{staticClass:"col"},[a("div",{staticClass:"row row-data"},[t._m(8),a("div",{staticClass:"col site-right"},[t._v("\n            "+t._s(t.site.pageViewsThisMonth)+"\n          ")])]),a("div",{staticClass:"row row-data"},[t._m(9),a("div",{staticClass:"col site-right"},[t._v("\n            "+t._s(t.site.pageViewsToday)+"\n          ")])]),a("div",{staticClass:"row row-data"},[t._m(10),a("div",{staticClass:"col site-right"},[t._v("\n            "+t._s(t.site.pageViewsYesterday)+"\n          ")])]),a("div",{staticClass:"row row-data"},[t._m(11),a("div",{staticClass:"col site-right"},[t._v("\n            "+t._s(t.site.production)+"\n          ")])]),a("div",{staticClass:"row row-data"},[t._m(12),a("div",{staticClass:"col site-right"},[t._v("\n            "+t._s(t.site.sslEnabled)+"\n          ")])]),a("div",{staticClass:"row row-data"},[t._m(13),a("div",{staticClass:"col site-right"},[t._v("\n            "+t._s(t.site.state)+"\n          ")])])])]),a("hr"),a("collaborators",{attrs:{collaborators:t.collaborators}}),a("hr"),a("domains",{attrs:{domains:t.domains}})],1)])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("hr")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col site-left"},[a("strong",[t._v("Account ID:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col site-left"},[a("strong",[t._v("Site ID:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col site-left"},[a("strong",[t._v("Site name:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col site-left"},[a("strong",[t._v("Created:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col site-left"},[a("strong",[t._v("Ecommerce:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col site-left"},[a("strong",[t._v("IP Address:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col site-left"},[a("strong",[t._v("All time page views:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col site-left"},[a("strong",[t._v("Page views this month:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col site-left"},[a("strong",[t._v("Page views today:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col site-left"},[a("strong",[t._v("Page views yesterday:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col site-left"},[a("strong",[t._v("Production mode:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col site-left"},[a("strong",[t._v("SSL enabled:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col site-left"},[a("strong",[t._v("Site state:")])])}],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h2",[t._v("Collaborators")]),t._l(t.collaborators,function(t){return a("div",[a("collaborator",{attrs:{collaborator:t}})],1)}),a("br"),a("add-collaborator")],2)])},L=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row row-data"},[a("div",{staticClass:"col text-left"},[a("strong",[t._v("User name:")]),a("br"),t._v(t._s(t.collaborator.name)+"\n  ")]),a("div",{staticClass:"col text-left"},[a("strong",[t._v("WP username:")]),a("br"),t._v(t._s(t.collaborator.wpUsername)+"\n  ")]),a("div",{staticClass:"col text-left"},[a("strong",[t._v("Status:")]),a("br"),t._v(t._s(t.collaborator.state)+"\n  ")]),a("div",{staticClass:"col delete"},[a("a",{attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteCollaborator(e)}}},[a("i",{staticClass:"far fa-trash-alt"})])])])},R=[],M={name:"CollaboratorItem",props:{collaborator:Object},methods:{deleteCollaborator:function(){var t={headers:{Authorization:"Bearer ".concat(this.$store.state.account.access_token),Content:"application/json"},id:this.$store.state.sites.active.id,collaboratorId:this.collaborator.id};this.$store.dispatch("collaborators/deleteCollaborator",t)}}},Y=M,G=(a("3ee6"),Object(l["a"])(Y,N,R,!1,null,"25dd0bf6",null));G.options.__file="CollaboratorItem.vue";var V=G.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4"},[a("form",{staticClass:"form-inline"},[a("div",{staticClass:"form-group mb-2"},[a("label",{staticClass:"sr-only",attrs:{for:"site"}},[t._v("Collaborator email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",id:"site",placeholder:"Enter collaborator email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"submit"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.createCollaborator(e)}}},[t._v("Add Collaborator")])])])},B=[],U=(a("c5f6"),{name:"AddCollaborator",props:{collaborator:Object,id:Number},data:function(){return{email:""}},methods:{createCollaborator:function(){var t={headers:{Authorization:"Bearer ".concat(this.$store.state.account.access_token),Content:"application/json"},email:this.email,id:this.$store.state.sites.active.id};this.$store.dispatch("collaborators/createCollaborator",t),this.email=""}},mounted:function(){}}),H=U,F=(a("6f66"),Object(l["a"])(H,z,B,!1,null,"2b831d4c",null));F.options.__file="AddCollaborator.vue";var K=F.exports,J={name:"Collaborators",components:{Collaborator:V,AddCollaborator:K},props:{collaborators:Array}},W=J,q=Object(l["a"])(W,j,L,!1,null,null,null);q.options.__file="Collaborators.vue";var Q=q.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Domains")]),t._l(t.domains,function(t){return a("domain-item",{key:t.id,attrs:{domain:t}})}),a("add-domain")],2)},Z=[],tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row row-data"},[a("div",{staticClass:"col text-left"},[a("strong",[t._v("Url:")]),t._v(" "+t._s(t.domain.url)+"\n  ")]),a("div",{staticClass:"col text-left"},[a("strong",[t._v("Primary:")]),t._v(" "+t._s(t.domain.primary)+"\n    "),t.domain.primary?t._e():a("span",[t._v(" | "),a("a",{attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.makePrimary(e)}}},[t._v("Make Primary")])])]),a("div",{staticClass:"col delete"},[a("a",{attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteDomain(e)}}},[a("i",{staticClass:"far fa-trash-alt"})])])])},et=[],at={name:"Domains",props:{domain:Object},methods:{deleteDomain:function(){var t={headers:{Authorization:"Bearer ".concat(this.$store.state.account.access_token),Content:"application/json"},id:this.$store.state.sites.active.id,domainId:this.domain.id};this.$store.dispatch("domains/deleteDomain",t)},makePrimary:function(){var t={headers:{Authorization:"Bearer ".concat(this.$store.state.account.access_token),Content:"application/json"},id:this.$store.state.sites.active.id,domainId:this.domain.id};this.$store.dispatch("domains/makePrimary",t)}}},st=at,it=(a("d7fe"),Object(l["a"])(st,tt,et,!1,null,"4a078b46",null));it.options.__file="DomainItem.vue";var ot=it.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4"},[a("form",{staticClass:"form-inline"},[a("div",{staticClass:"form-group mb-2"},[a("label",{staticClass:"sr-only",attrs:{for:"site"}},[t._v("Domain url")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"form-control",attrs:{type:"text",id:"site",placeholder:"Enter domain url"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"submit"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.createDomain(e)}}},[t._v("Add Domain")])])])},rt=[],ct={name:"AddDomain",props:{},data:function(){return{url:""}},methods:{createDomain:function(){var t={headers:{Authorization:"Bearer ".concat(this.$store.state.account.access_token),Content:"application/json"},url:this.url,id:this.$store.state.sites.active.id};this.$store.dispatch("domains/createDomain",t)}},mounted:function(){}},lt=ct,dt=(a("2fc5"),Object(l["a"])(lt,nt,rt,!1,null,"79384b6a",null));dt.options.__file="AddDomain.vue";var ut=dt.exports,mt={name:"Domains",components:{DomainItem:ot,AddDomain:ut},props:{domains:Array}},ft=mt,vt=Object(l["a"])(ft,X,Z,!1,null,null,null);vt.options.__file="Domains.vue";var ht=vt.exports,pt={name:"SiteShow",components:{Collaborators:Q,Domains:ht},data:function(){return{headers:{Authorization:"Bearer ".concat(this.$store.state.account.access_token),Content:"application/json"}}},computed:{site:function(){return this.$store.state.sites.active},collaborators:function(){return this.$store.state.collaborators.list},domains:function(){return this.$store.state.domains.list},isProduction:function(){return this.$store.state.sites.active.production}},methods:{getCollaborators:function(){var t={headers:this.headers,id:this.$store.state.sites.active.id};this.$store.dispatch("collaborators/getCollaborators",t)},getDomains:function(){var t={headers:this.headers,id:this.$store.state.sites.active.id};this.$store.dispatch("domains/getDomains",t)},enableProduction:function(){this.$store.dispatch("sites/enableForProduction",this.headers)},disableProduction:function(){this.$store.dispatch("sites/disableForProduction",this.headers)},clearCache:function(){var t={headers:this.headers,id:this.$store.state.sites.active.id};this.$store.dispatch("sites/clearCache",t)}},mounted:function(){this.getCollaborators(),this.getDomains()}},_t=pt,bt=(a("56d9"),Object(l["a"])(_t,O,I,!1,null,"36373792",null));bt.options.__file="SiteShow.vue";var Ct=bt.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"row"},[a("h1",{staticClass:"mb-5"},[t._v("Create a site: "+t._s(t.name))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-left",attrs:{for:"name"}},[t._v("Enter site name. Actual site name: "+t._s(t.siteName))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Enter the site name of your choice"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.saveSite(e)}}},[t._v("Submit")])])])])])])},wt=[],St=(a("a481"),{name:"SiteCreate",data:function(){return{name:""}},computed:{siteName:function(){return this.name.replace(/\s/g,"")}},methods:{saveSite:function(){var t={headers:{Authorization:"Bearer ".concat(this.$store.state.account.access_token),Content:"application/json"},name:this.siteName};this.$store.dispatch("sites/saveSite",t)}},mounted:function(){}}),At=St,yt=(a("26ad"),Object(l["a"])(At,gt,wt,!1,null,"12a88a24",null));yt.options.__file="SiteCreate.vue";var Et=yt.exports,$t=[{path:"/",component:_,name:"home"},{path:"/sites",component:x,name:"sites"},{path:"/sites/:id",component:Ct,name:"site-show"},{path:"/sites/create",component:Et,name:"site-create"}],kt=$t,Pt=a("2f62"),Dt=a("0e44"),Tt=a("bc3a"),xt=a.n(Tt),Ot=xt.a.create({baseURL:"https://my.pressable.com/auth"}),It=Ot,jt={access_token:"",refresh_token:"",isAuthenticated:!1},Lt={},Nt={authorize:function(t,e){var a=t.commit,s=(t.state,t.dispatch);It.post("/token",{client_id:"816a377673d9777767934665da4a7658088b4fa7682b456b4beef7095bac1374",client_secret:"2ac4f8216fdae7af15569435cf706e26251c22f837a038f5544ef20d066f3a5d",grant_type:"password",email:e.email,password:e.password}).then(function(t){200===t.status&&a("SET_AUTH_TOKENS",t.data)}.bind(this)).catch(function(t){401===t.response.status&&s("refreshToken"),console.warn(t.response)})},refreshToken:function(t){var e=t.commit,a=t.state;It.post("/token",{client_id:"816a377673d9777767934665da4a7658088b4fa7682b456b4beef7095bac1374",client_secret:"2ac4f8216fdae7af15569435cf706e26251c22f837a038f5544ef20d066f3a5d",grant_type:"refresh_token",refresh_token:a.refresh_token}).then(function(t){200===t.status&&e("SET_AUTH_TOKENS",t.data)}.bind(this)).catch(function(t){console.warn(t.response)})},logout:function(t){var e=t.commit,a=(t.state,t.dispatch);e("LOGOUT"),a("collaborators/clearAll",{},{root:!0}),a("domains/clearAll",{},{root:!0}),a("sites/clearAll",{},{root:!0})}},Rt={SET_AUTH_TOKENS:function(t,e){t.access_token=e.access_token,t.refresh_token=e.refresh_token,t.isAuthenticated=!0},LOGOUT:function(t){t.access_token="",t.refresh_token="",t.isAuthenticated=!1}},Mt={namespaced:!0,state:jt,getters:Lt,actions:Nt,mutations:Rt},Yt=xt.a.create({baseURL:"https://my.pressable.com/v1"}),Gt=Yt,Vt={list:[],active:"",loading:!0},zt={},Bt={getSites:function(t,e){var a=t.commit,s=(t.state,t.dispatch);Gt.get("/sites",{headers:e}).then(function(t){200===t.status&&a("SET_SITES",t.data)}.bind(this)).catch(function(t){401===t.response.status&&s("account/refreshToken",{},{root:!0}),console.warn(t.response),a("SET_SITES",[])})},getSite:function(t,e){t.commit;var a=t.state,s=t.dispatch,i=a.active.id;Gt.get("/sites/".concat(i),{headers:e}).then(function(t){200===t.status&&s("setActiveSite",t.data)}.bind(this)).catch(function(t){console.warn(t.response)})},saveSite:function(t,e){var a=t.commit,s=(t.state,e.headers),i=e.name;Gt.post("/sites",{name:"".concat(i)},{headers:s}).then(function(t){if(console.log(t),201===t.status){a("SET_ACTIVE_SITE",t.data);var e=t.data.state;A()("Great!","Your site is being created and is currently ".concat(e,". It will be done momentarily!"),"success")}}.bind(this)).catch(function(t){var e=t.response.data.error;A()("An error occurred",e,"error")})},setActiveSite:function(t,e){var a=t.commit;t.state;a("SET_ACTIVE_SITE",e)},cloneSite:function(t,e){t.commit,t.state;var a=t.dispatch,s=e.headers,i=e.id,o=e.name;Gt.post("/sites/".concat(i,"/clone"),{name:"".concat(o)},{headers:s}).then(function(t){201===t.status&&(A()("Great!","Your site is being cloned and is titled ".concat(t.data.name,". It will be done momentarily!"),"success"),a("getSites",s))})},deleteSite:function(t,e){var a=this,s=(t.commit,t.state,t.dispatch),i=e.headers,o=e.id;A()({title:"Are you sure?",text:"Are you sure you want to delete this site?",icon:"warning",buttons:!0,dangerMode:!0}).then(function(t){t&&Gt.delete("/sites/".concat(o),{headers:i}).then(function(t){200===t.status&&(A()("Deleted!","Your site has been deleted!","success"),s("getSites",i))}.bind(a)).catch(function(t){console.warn(t.response)})})},disableForProduction:function(t,e){t.commit;var a=t.state,s=t.dispatch,i=a.active.id;Gt.delete("/sites/".concat(i,"/production"),{headers:e}).then(function(t){200===t.status&&(A()("Disabled!","Your site has been set to development!","success"),s("getSite",e))})},enableForProduction:function(t,e){t.commit;var a=t.state,s=t.dispatch,i=a.active.id;Gt.post("/sites/".concat(i,"/production"),{},{headers:e}).then(function(t){200===t.status&&(s("getSite",e),A()("Enabled!","Your site has been set to production!","success"))})},clearCache:function(t,e){t.commit,t.state;var a=e.headers,s=e.id;Gt.delete("/sites/".concat(s,"/cache"),{headers:a}).then(function(t){200===t.status&&A()("Cached Deleted!","Your site has been deleted!","success")})},clearActiveSite:function(t){var e=t.commit;t.state;e("CLEAR_ACTIVE_SITE")},clearAll:function(t){var e=t.commit;t.state;e("CLEAR_ALL")}},Ut={SET_SITES:function(t,e){t.list=e,t.loading=!1},SET_ACTIVE_SITE:function(t,e){t.active=e},CLEAR_ACTIVE_SITE:function(t){t.active=""},CLEAR_ALL:function(t){t.list=[],t.active="",t.loading=!0}},Ht={namespaced:!0,state:Vt,getters:zt,actions:Bt,mutations:Ut},Ft={list:[],active:"",loading:!0},Kt={},Jt={getCollaborators:function(t,e){var a=t.commit,s=(t.state,e.headers),i=e.id;Gt.get("/sites/".concat(i,"/collaborators"),{headers:s}).then(function(t){200===t.status&&a("GET_COLLABORATORS",t.data)}.bind(this)).catch(function(t){console.warn(t.response)})},createCollaborator:function(t,e){t.commit,t.state;var a=t.dispatch,s=e.headers,i=e.id,o=e.email;Gt.post("/sites/".concat(i,"/collaborators"),{siteId:i,email:"".concat(o)},{headers:s}).then(function(t){201===t.status&&(a("getCollaborators",e),A()("Great!","Your collaborator ".concat(o," is being added and will need to verify their email address."),"success"))}.bind(this)).catch(function(t){console.warn(t)})},deleteCollaborator:function(t,e){var a=this,s=(t.commit,t.state,t.dispatch),i=e.headers,o=e.id,n=e.collaboratorId;A()({title:"Are you sure?",text:"Are you sure you want to delete this collaborator?",icon:"warning",buttons:!0,dangerMode:!0}).then(function(t){t&&Gt.delete("/sites/".concat(o,"/collaborators/").concat(n),{headers:i}).then(function(t){200===t.status&&(s("getCollaborators",e),A()("Deleted!","Your collaborator has been deleted!","success"))}.bind(a)).catch(function(t){console.warn(t)})})},clearAll:function(t){var e=t.commit;t.state;e("CLEAR_ALL")}},Wt={GET_COLLABORATORS:function(t,e){t.list=e,t.loading=!1},CLEAR_ALL:function(t){t.list=[],t.active="",t.loading=!0}},qt={namespaced:!0,state:Ft,getters:Kt,actions:Jt,mutations:Wt},Qt={list:[],loading:!0},Xt={},Zt={getDomains:function(t,e){var a=t.commit,s=(t.state,e.headers),i=e.id;Gt.get("/sites/".concat(i,"/domains"),{headers:s}).then(function(t){200===t.status&&a("GET_DOMAINS",t.data)}.bind(this)).catch(function(t){console.warn(t.response)})},createDomain:function(t,e){t.commit,t.state;var a=t.dispatch,s=e.headers,i=e.id,o=e.url;Gt.post("/sites/".concat(i,"/domains"),{url:"".concat(o)},{headers:s}).then(function(t){201===t.status&&(a("getDomains",e),A()("Great!","Your domain ".concat(o," is being added."),"success"))}.bind(this)).catch(function(t){console.warn(t)})},makePrimary:function(t,e){t.commit,t.state;var a=t.dispatch,s=e.headers,i=e.id,o=e.domainId;Gt.post("/sites/".concat(i,"/domains/").concat(o,"/primary"),{},{headers:s}).then(function(t){200===t.status&&(a("getDomains",e),A()("Great!","A new primary domain has been set.","success"))}.bind(this)).catch(function(t){console.warn(t)})},deleteDomain:function(t,e){var a=this,s=(t.commit,t.state,t.dispatch),i=e.headers,o=e.id,n=e.domainId;A()({title:"Are you sure?",text:"Are you sure you want to delete this domain?",icon:"warning",buttons:!0,dangerMode:!0}).then(function(t){t&&Gt.delete("/sites/".concat(o,"/domains/").concat(n),{headers:i}).then(function(t){console.log(t),200===t.status&&(s("getDomains",e),A()("Deleted!","Your domain has been deleted!","success"))}.bind(a)).catch(function(t){console.warn(t)})})},clearAll:function(t){var e=t.commit;t.state;e("CLEAR_ALL")}},te={GET_DOMAINS:function(t,e){t.list=e,t.loading=!1},CLEAR_ALL:function(t){t.list=[],t.loading=!0}},ee={namespaced:!0,state:Qt,getters:Xt,actions:Zt,mutations:te};s["a"].use(Pt["a"]);var ae=new Pt["a"].Store({modules:{account:Mt,sites:Ht,collaborators:qt,domains:ee},plugins:[Object(Dt["a"])()]});s["a"].use(i["a"]),s["a"].config.productionTip=!1;var se=new i["a"]({mode:"history",routes:kt});new s["a"]({router:se,store:ae,render:function(t){return t(u)}}).$mount("#app")},"56d9":function(t,e,a){"use strict";var s=a("b9a8"),i=a.n(s);i.a},"6f66":function(t,e,a){"use strict";var s=a("54ba"),i=a.n(s);i.a},"75ed":function(t,e,a){},"8c39":function(t,e,a){},b9a8:function(t,e,a){},c21b:function(t,e,a){},d7fe:function(t,e,a){"use strict";var s=a("8c39"),i=a.n(s);i.a},efb1:function(t,e,a){}});
//# sourceMappingURL=app.cbcaf21d.js.map