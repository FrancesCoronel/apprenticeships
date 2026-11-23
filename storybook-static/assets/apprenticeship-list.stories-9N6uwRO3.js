import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./react-C7Icd8fu.js";import{l as n}from"./iframe-7xwgGrgk.js";import{n as r,r as i}from"./fixtures-BXzILU1B.js";import{n as a,r as o,t as s}from"./apprenticeship-card-BFF1bJWD.js";import{a as c,i as l,n as u,r as d,t as f}from"./hero-search-C02MDaRh.js";import{r as p,t as m}from"./button-pMUWZ1qq.js";import{n as h,r as g}from"./section-heading-C9pAfZtC.js";function _({apprenticeships:e}){let t=c(),[n,r]=(0,y.useState)(!1),[i,a]=(0,y.useState)(!1),l=(0,y.useMemo)(()=>e.filter(o).length,[e]),u=(0,y.useMemo)(()=>{let r=t.trim().toLowerCase();return e.filter(e=>(!n||o(e))&&(e.company.toLowerCase().includes(r)||e.description.toLowerCase().includes(r)||e.location.some(e=>e.toLowerCase().includes(r))))},[t,n,e]),d=n||u.length<e.length,f=i||d?u:u.slice(0,b);return(0,v.jsxs)(`section`,{className:`max-w-7xl mx-auto px-5 py-14 md:px-12 md:py-24 flex flex-col gap-6 md:gap-8 scroll-mt-4`,id:`search`,children:[(0,v.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-x-6 gap-y-3`,children:[(0,v.jsx)(h,{eyebrow:`The directory`,children:`Find an apprenticeship`}),(0,v.jsxs)(`p`,{className:`text-ink-muted text-sm font-medium tabular-nums`,"aria-live":`polite`,children:[`Showing `,u.length,` of `,e.length,` apprenticeships`]})]}),l>0&&(0,v.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,v.jsxs)(`button`,{type:`button`,"aria-pressed":!n,onClick:()=>r(!1),className:x(!n),children:[`All `,e.length]}),(0,v.jsxs)(`button`,{type:`button`,"aria-pressed":n,onClick:()=>r(!0),className:x(n),children:[`Remote `,l]})]}),(0,v.jsx)(`div`,{className:`grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3`,children:f.map(e=>(0,v.jsx)(s,{apprenticeship:e},e.slug))}),u.length===0&&(0,v.jsxs)(`p`,{className:`text-center text-ink-muted text-lg`,children:[`No apprenticeships found matching “`,t,`”`]}),f.length<u.length&&(0,v.jsxs)(m,{variant:`outline`,onClick:()=>a(!0),className:`self-center`,children:[`Show all `,e.length,` programs`]})]})}var v,y,b,x;function S(){return(S=e((()=>{v=n(),y=t(),d(),a(),p(),g(),b=12,x=e=>`min-h-11 rounded-full border-2 px-4 py-2 text-[15px] font-bold tabular-nums transition-colors ${e?`border-ink bg-ink text-surface-sunrise`:`border-border bg-surface-raised text-ink hover:border-ink`}`,_.__docgenInfo={description:``,methods:[],displayName:`ApprenticeshipList`,props:{apprenticeships:{required:!0,tsType:{name:`Array`,elements:[{name:`Apprenticeship`}],raw:`Apprenticeship[]`},description:``}}}})))()}var C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{C=n(),r(),d(),S(),u(),{expect:w,userEvent:T,within:E}=__STORYBOOK_MODULE_TEST__,D={title:`Sections/ApprenticeshipList`,component:_,parameters:{layout:`fullscreen`},args:{apprenticeships:i},beforeEach:()=>()=>l(``)},O={},k={play:async({canvasElement:e})=>{let t=E(e);await T.click(t.getByRole(`button`,{name:/^Remote/})),await w(t.getByText(/Showing 2 of 6/)).toBeVisible()}},A={render:e=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`div`,{className:`bg-surface-sunrise p-6`,children:(0,C.jsx)(f,{})}),(0,C.jsx)(_,{...e})]}),play:async({canvasElement:e})=>{let t=E(e);await T.type(t.getByRole(`searchbox`),`astronaut`),await w(t.getByText(/No apprenticeships found/)).toBeVisible()}},j=[`Directory`,`RemoteOnly`,`NoMatches`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: /^Remote/
    }));
    await expect(canvas.getByText(/Showing 2 of 6/)).toBeVisible();
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <div className="bg-surface-sunrise p-6">
        <HeroSearch />
      </div>
      <ApprenticeshipList {...args} />
    </>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("searchbox"), "astronaut");
    await expect(canvas.getByText(/No apprenticeships found/)).toBeVisible();
  }
}`,...A.parameters?.docs?.source}}}})))()}M();export{O as Directory,A as NoMatches,k as RemoteOnly,j as __namedExportsOrder,D as default};