(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return o});var n=a(0),r=a.n(n),i=a(156),s=a(161),c=a(158);t.default=function(e){var t=e.data;return r.a.createElement("div",{className:"wrapper"},r.a.createElement(i.a,{title:"Blog",keywords:["blog","juan latorre","developer"]}),r.a.createElement(s.a,null),r.a.createElement("section",{className:"blog-section"},r.a.createElement("h2",{className:"title is-size-4"},"¿Qué hay de nuevo?"),r.a.createElement("div",{className:"columns is-multiline pl-3 pr-3"},t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{className:"column is-12",key:t.id},r.a.createElement("p",null,t.frontmatter.date),r.a.createElement("h4",{className:"title is-size-5 postTitle"},t.frontmatter.title),r.a.createElement("p",null,t.excerpt),r.a.createElement(c.a,{to:t.fields.slug},"Ver más"))}))))};var o="1640556674"},155:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),s=a(4),c=a.n(s),o=a(160),l=a.n(o);function u(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,c=e.title,o=n.data.site,u=t||o.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"es",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Juan Latorre",description:"Sitio web personal de Juan Latorre, hecho con Gatsby y Bulma.",author:"@unnamed_query"}}}}},158:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),c=a(32),o=a.n(c);a.d(t,"a",function(){return o.a});a(155);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},159:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),c=a(54),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},161:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(162),s=a.n(i),c=a(158);t.a=function(){return r.a.createElement("nav",{role:"navigation",className:"has-text-centered has-background-grey-light"},r.a.createElement("h1",{className:"title"},"Juan ",r.a.createElement("br",null)," Latorre"),r.a.createElement("i",{className:"fa fa-arrow-down fa-2x has-text-link"}),r.a.createElement("figure",{className:"image profile-sidebar is-128x128"},r.a.createElement("img",{className:"is-rounded",alt:"Profile",src:s.a})),r.a.createElement("p",{className:"content bio"},"Web Developer, Computer Science student, father of one, disappointed on Linux, I’m back to smoking and I prefer tea over coffee."),r.a.createElement("span",{className:"icon is-large"},r.a.createElement("a",{href:"https://twitter.com/unnamed_query"},r.a.createElement("i",{className:"fa fa-twitter fa-2x"}))),r.a.createElement("span",{className:"icon is-large"},r.a.createElement("a",{href:"https://github.com/juanlatorre"},r.a.createElement("i",{className:"fa fa-github fa-2x"}))),r.a.createElement("span",{className:"icon is-large"},r.a.createElement(c.a,{to:"/rss.xml"},r.a.createElement("i",{className:"fa fa-feed fa-2x"}))))}},162:function(e,t,a){e.exports=a.p+"static/profile-671f0b70432cbffbdcba3b573932175e.jpg"}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-cda8b265c70d2590fd0c.js.map