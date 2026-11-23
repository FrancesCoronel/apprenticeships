import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{l as t}from"./iframe-7xwgGrgk.js";import{a as n,n as r,o as i,r as a,s as o,t as s}from"./token-blocks-4LueeDw8.js";import{n as c,r as l,t as u}from"./tokens-BdzY3IGg.js";var d,f,p,m,h;function g(){return(g=e((()=>{d=t(),o(),l(),f={title:`Inti/Colour`,parameters:{layout:`padded`},tags:[`!autodocs`]},p={render:()=>(0,d.jsx)(a,{eyebrow:`Tokens`,title:`Colour`,intro:(0,d.jsxs)(d.Fragment,{children:[`Two themes, Day and Night, from one set of tokens in `,(0,d.jsx)(s,{children:`src/app/globals.css`}),`. Style through the Tailwind colour of the same name (`,(0,d.jsx)(s,{children:`bg-surface-sunrise`}),`, `,(0,d.jsx)(s,{children:`text-ink-muted`}),`, `,(0,d.jsx)(s,{children:`bg-inti`}),`), never a hex value. ESLint rejects hex, `,(0,d.jsx)(s,{children:`rgb()`}),` and Tailwind’s stock colours in `,(0,d.jsx)(s,{children:`src/`}),`.`]}),children:u.map(e=>(0,d.jsx)(i,{group:e},e.title))})},m={render:()=>(0,d.jsx)(a,{eyebrow:`Tokens`,title:`Contrast`,intro:`Every text and ground pair the site uses, measured in the theme that is showing. Text needs 4.5:1 and the focus ring 3:1 (WCAG 2.2 AA). Check both themes.`,children:(0,d.jsx)(n,{title:`Pairs`,children:(0,d.jsx)(r,{pairs:c})})})},h=[`Palette`,`Contrast`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Page eyebrow="Tokens" title="Colour" intro={<>
          Two themes, Day and Night, from one set of tokens in <Code>src/app/globals.css</Code>. Style through the Tailwind
          colour of the same name (<Code>bg-surface-sunrise</Code>, <Code>text-ink-muted</Code>, <Code>bg-inti</Code>), never a
          hex value. ESLint rejects hex, <Code>rgb()</Code> and Tailwind&rsquo;s stock colours in <Code>src/</Code>.
        </>}>
      {colourGroups.map(group => <SwatchGrid key={group.title} group={group} />)}
    </Page>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Page eyebrow="Tokens" title="Contrast" intro="Every text and ground pair the site uses, measured in the theme that is showing. Text needs 4.5:1 and the focus ring 3:1 (WCAG 2.2 AA). Check both themes.">
      <Section title="Pairs">
        <ContrastTable pairs={contrastPairs} />
      </Section>
    </Page>
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as Contrast,p as Palette,h as __namedExportsOrder,f as default};