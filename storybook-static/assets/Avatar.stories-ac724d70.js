import{a,j as g,F as p}from"./emotion-react-jsx-runtime.browser.esm-4492bbce.js";import{c as P,I as N}from"./Icon-04bc6249.js";import{P as n}from"./index-29d2c63d.js";import{a as z,c as t,t as o}from"./styles-09219c24.js";import{g as O}from"./animation-99e07f08.js";import"./jsx-runtime-ed146b25.js";import"./index-c6dae603.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-ce9a6550.js";import"./extends-98964cd2.js";const s={large:40,medium:28,small:20,tiny:16},U=P("div",{target:"e4gt52h1"})("background:",e=>e.loading?z.light:"transparent",";border-radius:50%;display:inline-block;vertical-align:top;overflow:hidden;text-transform:uppercase;height:",s.medium,"px;width:",s.medium,"px;line-height:",s.medium,"px;",e=>e.size==="tiny"&&t("height:",s.tiny,"px;width:",s.tiny,"px;line-height:",s.tiny,"px;","")," ",e=>e.size==="small"&&t("height:",s.small,"px;width:",s.small,"px;line-height:",s.small,"px;","")," ",e=>e.size==="large"&&t("height:",s.large,"px;width:",s.large,"px;line-height:",s.large,"px;","")," ",e=>!e.src&&t("background:",!e.loading&&"#37D5D3",";","")," img{width:100%;height:auto;display:block;}svg{position:relative;bottom:-2px;height:100%;width:100%;vertical-align:top;}path{fill:",z.medium,";animation:",O," 1.5s ease-in-out infinite;}"),M=P("div",{target:"e4gt52h0"})("color:",z.lightest,";text-align:center;font-size:",o.size.s2,"px;line-height:",s.medium,"px;",e=>e.size==="tiny"&&t("font-size:",o.size.s1-2,"px;line-height:",s.tiny,"px;","")," ",e=>e.size==="small"&&t("font-size:",o.size.s1,"px;line-height:",s.small,"px;","")," ",e=>e.size==="large"&&t("font-size:",o.size.s3,"px;line-height:",s.large,"px;",""),";");function r({loading:e,username:h,src:v,size:y,...F}){let f=a(N,{icon:"useralt"});const i={};return e?(i["aria-busy"]=!0,i["aria-label"]="Loading avatar ..."):v?f=a("img",{src:v,alt:h}):(i["aria-label"]=h,f=a(M,{size:y,"aria-hidden":"true",children:h.substring(0,1)})),a(U,{size:y,loading:e,src:v,...i,...F,children:f})}r.propTypes={loading:n.bool,username:n.string,src:n.string,size:n.oneOf(Object.keys(s))};r.defaultProps={loading:!1,username:"loading",src:null,size:"medium"};r.__docgenInfo={description:`- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.`,methods:[],displayName:"Avatar",props:{loading:{defaultValue:{value:"false",computed:!1},description:"Use the loading state to indicate that the data Avatar needs is still loading.",type:{name:"bool"},required:!1},username:{defaultValue:{value:"'loading'",computed:!1},description:"Avatar falls back to the user's initial when no image is provided.\n    Supply a `username` and omit `src` to see what this looks like.",type:{name:"string"},required:!1},src:{defaultValue:{value:"null",computed:!1},description:"The URL of the Avatar's image.",type:{name:"string"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Avatar comes in four sizes. In most cases, you'll be fine with `medium`.",type:{name:"enum",value:[{value:'"large"',computed:!1},{value:'"medium"',computed:!1},{value:'"small"',computed:!1},{value:'"tiny"',computed:!1}]},required:!1}}};const X={title:"Design System/Avatar",component:r},l={args:{size:"large",username:"Tom Coleman",src:"https://avatars2.githubusercontent.com/u/132554"}},m={args:{username:"Tom Coleman",src:"https://avatars2.githubusercontent.com/u/132554"},render:e=>g(p,{children:[a(r,{...e,size:"large"}),a(r,{...e,size:"medium"}),a(r,{...e,size:"small"}),a(r,{...e,size:"tiny"})]})},u={render:e=>g(p,{children:[a(r,{username:"Tom Coleman"}),a(r,{username:"Dominic Nguyen"}),a(r,{username:"Varun Vachhar"}),a(r,{username:"Michael Shilman"})]})},d={args:{loading:!0},render:e=>g(p,{children:[a(r,{...e,size:"large"}),a(r,{...e,size:"medium"}),a(r,{...e,size:"small"}),a(r,{...e,size:"tiny"})]})},c={render:()=>g(p,{children:[a(r,{loading:!0,size:"large"}),a(r,{size:"large",username:"Tom Coleman"}),a(r,{size:"large",username:"Tom Coleman",src:"https://avatars2.githubusercontent.com/u/132554"})]})};var x,b,A;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'large',
    username: 'Tom Coleman',
    src: 'https://avatars2.githubusercontent.com/u/132554'
  }
}`,...(A=(b=l.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var S,T,w;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    username: 'Tom Coleman',
    src: 'https://avatars2.githubusercontent.com/u/132554'
  },
  render: args => <>\r
      <Avatar {...args} size='large' />\r
      <Avatar {...args} size='medium' />\r
      <Avatar {...args} size='small' />\r
      <Avatar {...args} size='tiny' />\r
    </>
}`,...(w=(T=m.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var C,k,I;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <>\r
      <Avatar username='Tom Coleman' />\r
      <Avatar username='Dominic Nguyen' />\r
      <Avatar username='Varun Vachhar' />\r
      <Avatar username='Michael Shilman' />\r
    </>
}`,...(I=(k=u.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var V,L,D;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: args => <>\r
      <Avatar {...args} size='large' />\r
      <Avatar {...args} size='medium' />\r
      <Avatar {...args} size='small' />\r
      <Avatar {...args} size='tiny' />\r
    </>
}`,...(D=(L=d.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var _,j,q;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <>\r
      <Avatar loading size='large' />\r
      <Avatar size='large' username='Tom Coleman' />\r
      <Avatar size='large' username='Tom Coleman' src='https://avatars2.githubusercontent.com/u/132554' />\r
    </>
}`,...(q=(j=c.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const Y=["Standard","Sizes","Initials","Loading","Large"];export{u as Initials,c as Large,d as Loading,m as Sizes,l as Standard,Y as __namedExportsOrder,X as default};
