import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{l as t}from"./iframe-7xwgGrgk.js";import{n,r,t as i}from"./button-pMUWZ1qq.js";var a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{a=t(),r(),o={title:`Primitives/Button`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"Fully round, at least 44px tall, bold sentence-case labels. `primary` is the gold action, one per section. `dark` sits on the gold band, in the navbar and on selected pills. `outline` is a quieter action. Use `ButtonLink` for links, and `buttonClasses()` only where neither fits."}}},args:{children:`Visit apprenticeship`,variant:`primary`,size:`md`},argTypes:{variant:{control:`inline-radio`,options:[`primary`,`dark`,`outline`]},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},className:{control:!1}}},s={},c={args:{variant:`dark`,children:`Add a program`}},l={args:{variant:`outline`,children:`Show all 83 programs`}},u={render:e=>(0,a.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,a.jsx)(i,{...e,size:`sm`,children:`Small`}),(0,a.jsx)(i,{...e,size:`md`,children:`Medium`}),(0,a.jsx)(i,{...e,size:`lg`,children:`Large`})]})},d={args:{variant:`dark`,disabled:!0,children:`Submitting...`,className:`disabled:opacity-50 disabled:cursor-not-allowed`}},f={render:()=>(0,a.jsxs)(`div`,{className:`band-inti bg-inti text-on-inti rounded-lg p-8 flex flex-wrap gap-4`,children:[(0,a.jsx)(i,{variant:`dark`,children:`Submit apprenticeship`}),(0,a.jsx)(i,{variant:`outline`,children:`Create an issue`})]})},p={render:()=>(0,a.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,a.jsx)(n,{href:`/#contribute`,variant:`dark`,size:`sm`,children:`Add a program`}),(0,a.jsx)(n,{href:`https://careers.airbnb.com/connect-engineering-apprenticeship/`,target:`_blank`,rel:`noopener noreferrer`,children:`Visit apprenticeship →`})]})},m=[`Primary`,`Dark`,`Outline`,`Sizes`,`Disabled`,`OnTheGoldBand`,`AsLink`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "dark",
    children: "Add a program"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Show all 83 programs"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-4">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "dark",
    disabled: true,
    children: "Submitting...",
    className: "disabled:opacity-50 disabled:cursor-not-allowed"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="band-inti bg-inti text-on-inti rounded-lg p-8 flex flex-wrap gap-4">
      <Button variant="dark">Submit apprenticeship</Button>
      <Button variant="outline">Create an issue</Button>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <ButtonLink href="/#contribute" variant="dark" size="sm">
        Add a program
      </ButtonLink>
      <ButtonLink href="https://careers.airbnb.com/connect-engineering-apprenticeship/" target="_blank" rel="noopener noreferrer">
        Visit apprenticeship &rarr;
      </ButtonLink>
    </div>
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as AsLink,c as Dark,d as Disabled,f as OnTheGoldBand,l as Outline,s as Primary,u as Sizes,m as __namedExportsOrder,o as default};