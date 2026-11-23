import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{l as t}from"./iframe-7xwgGrgk.js";import{n,t as r}from"./image-DYKaRwwL.js";import{i,n as a,r as o,t as s}from"./card-BRbI39VK.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{c=t(),r(),i(),l={title:`Primitives/Card`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:"Raised surface, hairline edge, 20px corners and the resting shadow. Pass `interactive` when the whole card is a link: it lifts into sunlight on hover. `LogoPanel` holds a company logo and stays white in Night, because logos are drawn for white."}}}},u={render:e=>(0,c.jsxs)(s,{...e,className:`max-w-sm p-6 flex flex-col gap-2`,children:[(0,c.jsx)(`div`,{className:`font-display font-bold text-2xl`,children:`Program facts`}),(0,c.jsx)(`p`,{className:`text-ink-muted text-sm font-medium`,children:`A 6-month paid program in San Francisco, CA.`})]})},d={render:()=>(0,c.jsxs)(`a`,{href:`#`,className:o({interactive:!0,className:`max-w-sm p-6 flex flex-col gap-2`}),children:[(0,c.jsx)(`span`,{className:`font-display font-bold text-2xl`,children:`Hover me`}),(0,c.jsx)(`span`,{className:`text-ink-muted text-sm font-medium`,children:`Interactive cards take shadow-sunlit on hover.`})]})},f={render:()=>(0,c.jsxs)(s,{className:`max-w-sm`,children:[(0,c.jsx)(a,{className:`w-full h-44`,children:(0,c.jsx)(n,{src:`/images/apprenticeships/airbnb.jpg`,alt:`Airbnb apprenticeship program`,fill:!0,className:`object-contain p-6`})}),(0,c.jsx)(`div`,{className:`p-6 font-display font-bold text-2xl`,children:`Airbnb`})]})},p=[`Plain`,`Interactive`,`WithLogoPanel`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args} className="max-w-sm p-6 flex flex-col gap-2">
      <div className="font-display font-bold text-2xl">Program facts</div>
      <p className="text-ink-muted text-sm font-medium">A 6-month paid program in San Francisco, CA.</p>
    </Card>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  // A whole-card link takes cardClasses({ interactive: true }), as ApprenticeshipCard does
  render: () => <a href="#" className={cardClasses({
    interactive: true,
    className: "max-w-sm p-6 flex flex-col gap-2"
  })}>
      <span className="font-display font-bold text-2xl">Hover me</span>
      <span className="text-ink-muted text-sm font-medium">Interactive cards take shadow-sunlit on hover.</span>
    </a>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="max-w-sm">
      <LogoPanel className="w-full h-44">
        <Image src="/images/apprenticeships/airbnb.jpg" alt="Airbnb apprenticeship program" fill className="object-contain p-6" />
      </LogoPanel>
      <div className="p-6 font-display font-bold text-2xl">Airbnb</div>
    </Card>
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as Interactive,u as Plain,f as WithLogoPanel,p as __namedExportsOrder,l as default};