"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[610],{9703:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(5999),r=a(2244);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&n.createElement(r.Z,{permalink:o,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(9460),r=a(4608);function o(e){let{items:t,component:a=r.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},1714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(7294),l=a(6010),r=a(5999),o=a(8824),s=a(1944),i=a(5281),c=a(9960),g=a(9058),m=a(9703),u=a(197),p=a(9985);function d(e){const t=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function b(e){let{tag:t}=e;const a=d(t);return n.createElement(n.Fragment,null,n.createElement(s.d,{title:a}),n.createElement(u.Z,{tag:"blog_tags_posts"}))}function h(e){let{tag:t,items:a,sidebar:l,listMetadata:o}=e;const s=d(t);return n.createElement(g.Z,{sidebar:l},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,s),n.createElement(c.Z,{href:t.allTagsPath},n.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(p.Z,{items:a}),n.createElement(m.Z,{metadata:o}))}function E(e){return n.createElement(s.FG,{className:(0,l.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},n.createElement(b,e),n.createElement(h,e))}},4608:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(9460),r=a(390),o=a(9861),s=a(2949);function i(){const{colorMode:e}=(0,s.I)();return n.createElement(o.Z,{repo:"LinHeMa/LinHeMaIsCrusing",repoId:"R_kgDOJmVRsA",category:"General",categoryId:"DIC_kwDOJmVRsM4CXcxe",mapping:"url",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"bottom",theme:e,lang:"zh-TW",loading:"lazy",crossorigin:"anonymous",async:!0})}function c(e){const{metadata:t,isBlogPostPage:a}=(0,l.C)(),{frontMatter:o}=t,{enableComments:s}=o;return n.createElement(n.Fragment,null,n.createElement(r.Z,e),s&&a&&n.createElement(i,null))}}}]);