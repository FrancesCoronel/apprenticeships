import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{l as t}from"./iframe-7xwgGrgk.js";import{n,t as r}from"./chip-CRJK_UZQ.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{i=t(),n(),a={title:`Primitives/Chip`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:"Small round labels for locations. `remote` marks remote-friendly places in terrace green, `neutral` is everything else, `outline` sits on the sunrise band."}}},args:{children:`Seattle, WA`,tone:`neutral`},argTypes:{tone:{control:`inline-radio`,options:[`remote`,`neutral`,`outline`]}}},o={},s={args:{tone:`remote`,children:`Remote`}},c={args:{tone:`outline`,children:`London, UK`},decorators:[e=>(0,i.jsx)(`div`,{className:`bg-surface-sunrise rounded-lg p-6`,children:(0,i.jsx)(e,{})})]},l={render:()=>(0,i.jsxs)(`ul`,{className:`flex flex-wrap gap-2`,children:[(0,i.jsx)(r,{as:`li`,tone:`remote`,children:`United States (Remote)`}),(0,i.jsx)(r,{as:`li`,children:`Seattle, WA`}),(0,i.jsx)(r,{as:`li`,children:`Detroit, MI`}),(0,i.jsx)(r,{as:`li`,children:`Columbus, OH`})]})},u=[`Neutral`,`Remote`,`Outline`,`LocationList`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "remote",
    children: "Remote"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "outline",
    children: "London, UK"
  },
  decorators: [Story => <div className="bg-surface-sunrise rounded-lg p-6"><Story /></div>]
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ul className="flex flex-wrap gap-2">
      <Chip as="li" tone="remote">United States (Remote)</Chip>
      <Chip as="li">Seattle, WA</Chip>
      <Chip as="li">Detroit, MI</Chip>
      <Chip as="li">Columbus, OH</Chip>
    </ul>
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as LocationList,o as Neutral,c as Outline,s as Remote,u as __namedExportsOrder,a as default};