import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{l as t}from"./iframe-7xwgGrgk.js";import{a as n,r,s as i,t as a}from"./token-blocks-4LueeDw8.js";import{a as o,i as s,o as c,r as l}from"./tokens-BdzY3IGg.js";var u,d,f,p;function m(){return(m=e((()=>{u=t(),i(),l(),d={title:`Inti/Space, shape and depth`,parameters:{layout:`padded`},tags:[`!autodocs`]},f={name:`Space, shape and depth`,render:()=>(0,u.jsxs)(r,{eyebrow:`Tokens`,title:`Space, shape and depth`,intro:`Sections get room, corners are soft and only three shadows exist.`,children:[(0,u.jsx)(n,{title:`Layout`,children:(0,u.jsx)(`ul`,{className:`grid gap-4 sm:grid-cols-2 lg:grid-cols-3`,children:s.map(e=>(0,u.jsxs)(`li`,{className:`rounded-lg border border-hairline bg-surface-raised p-5 flex flex-col gap-1.5`,children:[(0,u.jsx)(`span`,{className:`text-sm text-ink-muted`,children:e.name}),(0,u.jsx)(`span`,{className:`font-display font-bold text-2xl`,children:e.value}),(0,u.jsx)(a,{children:e.detail})]},e.name))})}),(0,u.jsx)(n,{title:`Radius`,children:(0,u.jsx)(`ul`,{className:`grid gap-4 sm:grid-cols-2 lg:grid-cols-5`,children:o.map(e=>(0,u.jsxs)(`li`,{className:`flex flex-col gap-3`,children:[(0,u.jsx)(`div`,{className:`h-24 bg-surface-sunrise border-2 border-inti-deep ${e.className}`}),(0,u.jsx)(`span`,{className:`font-bold`,children:e.name}),(0,u.jsx)(a,{children:e.className}),(0,u.jsx)(`span`,{className:`text-sm text-ink-muted`,children:e.usage})]},e.name))})}),(0,u.jsx)(n,{title:`Shadow`,description:`Three shadows only. Hover transitions are 150ms ease-out on colour and shadow; nothing moves.`,children:(0,u.jsx)(`ul`,{className:`grid gap-8 sm:grid-cols-3 p-2`,children:c.map(e=>(0,u.jsxs)(`li`,{className:`flex flex-col gap-3`,children:[(0,u.jsx)(`div`,{className:`h-32 rounded-lg bg-surface-raised ${e.className}`}),(0,u.jsx)(a,{children:e.className}),(0,u.jsx)(`span`,{className:`text-sm text-ink-muted`,children:e.usage})]},e.name))})})]})},p=[`Overview`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Space, shape and depth",
  render: () => <Page eyebrow="Tokens" title="Space, shape and depth" intro="Sections get room, corners are soft and only three shadows exist.">
      <Section title="Layout">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {layout.map(item => <li key={item.name} className="rounded-lg border border-hairline bg-surface-raised p-5 flex flex-col gap-1.5">
              <span className="text-sm text-ink-muted">{item.name}</span>
              <span className="font-display font-bold text-2xl">{item.value}</span>
              <Code>{item.detail}</Code>
            </li>)}
        </ul>
      </Section>
      <Section title="Radius">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {radii.map(radius => <li key={radius.name} className="flex flex-col gap-3">
              <div className={\`h-24 bg-surface-sunrise border-2 border-inti-deep \${radius.className}\`} />
              <span className="font-bold">{radius.name}</span>
              <Code>{radius.className}</Code>
              <span className="text-sm text-ink-muted">{radius.usage}</span>
            </li>)}
        </ul>
      </Section>
      <Section title="Shadow" description="Three shadows only. Hover transitions are 150ms ease-out on colour and shadow; nothing moves.">
        <ul className="grid gap-8 sm:grid-cols-3 p-2">
          {shadows.map(shadow => <li key={shadow.name} className="flex flex-col gap-3">
              <div className={\`h-32 rounded-lg bg-surface-raised \${shadow.className}\`} />
              <Code>{shadow.className}</Code>
              <span className="text-sm text-ink-muted">{shadow.usage}</span>
            </li>)}
        </ul>
      </Section>
    </Page>
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Overview,p as __namedExportsOrder,d as default};