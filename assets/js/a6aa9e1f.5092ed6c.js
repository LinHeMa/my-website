"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89],{46:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(7294),r=a(6010),l=a(2263),i=a(1944),o=a(5281),s=a(9058),m=a(9703),c=a(197),g=a(9985);function p(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,l.Z)(),{blogDescription:r,blogTitle:o,permalink:s}=t,m="/"===s?a:o;return n.createElement(n.Fragment,null,n.createElement(i.d,{title:m,description:r}),n.createElement(c.Z,{tag:"blog_posts_list"}))}function u(e){const{metadata:t,items:a,sidebar:r}=e;return n.createElement(s.Z,{sidebar:r},n.createElement(g.Z,{items:a}),n.createElement(m.Z,{metadata:t}))}function d(e){return n.createElement(i.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},n.createElement(p,e),n.createElement(u,e))}},9703:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(5999),l=a(2244);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&n.createElement(l.Z,{permalink:i,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(9460),l=a(4608);function i(e){let{items:t,component:a=l.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(r.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},4608:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7294),r=a(9460),l=a(390),i=a(9861),o=a(2949);function s(){const{colorMode:e}=(0,o.I)();return n.createElement(i.Z,{repo:"LinHeMa/LinHeMaIsCrusing",repoId:"R_kgDOJmVRsA",category:"General",categoryId:"DIC_kwDOJmVRsM4CXcxe",mapping:"url",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"bottom",theme:e,lang:"zh-TW",loading:"lazy",crossorigin:"anonymous",async:!0})}function m(e){const{metadata:t,isBlogPostPage:a}=(0,r.C)(),{frontMatter:i}=t,{enableComments:o}=i;return n.createElement(n.Fragment,null,n.createElement(l.Z,e),o&&a&&n.createElement(s,null))}}}]);