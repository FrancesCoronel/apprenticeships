import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{l as t}from"./iframe-7xwgGrgk.js";import{n,t as r}from"./image-DYKaRwwL.js";import{r as i,t as a}from"./section-heading-C9pAfZtC.js";import{a as o,i as s,r as c,s as l,t as u}from"./token-blocks-4LueeDw8.js";var d,f,p,m;function h(){return(h=e((()=>{d=t(),r(),i(),l(),f={title:`Inti/Motifs`,parameters:{layout:`padded`},tags:[`!autodocs`]},p={name:`Sun mark and eyebrow`,render:()=>(0,d.jsxs)(c,{eyebrow:`Motifs`,title:`The sun, and nothing else`,intro:(0,d.jsxs)(d.Fragment,{children:[`The sun mark (`,(0,d.jsx)(u,{children:`public/images/logo.svg`}),`) is a gold disc with an inner ring and 24 alternating rays. It is the logo at small sizes and the page’s main image at large ones. There is no other illustration.`]}),children:[(0,d.jsx)(o,{title:`Sizes`,description:`Minimum size 24px.`,children:(0,d.jsx)(`div`,{className:`flex flex-wrap items-end gap-8`,children:[24,44,52,120].map(e=>(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,d.jsx)(n,{src:`/images/logo.svg`,alt:``,width:e,height:e}),(0,d.jsxs)(`span`,{className:`text-sm text-ink-muted tabular-nums`,children:[e,`px`]})]},e))})}),(0,d.jsx)(o,{title:`Rising from the edge`,description:`At large sizes the sun is cropped by the bottom of the sunrise band, or by the corner of the night stat card.`,children:(0,d.jsxs)(`div`,{className:`grid gap-6 md:grid-cols-2`,children:[(0,d.jsx)(`div`,{className:`relative overflow-hidden h-56 rounded-lg bg-surface-sunrise`,children:(0,d.jsx)(n,{src:`/images/logo.svg`,alt:``,width:360,height:360,className:`absolute max-w-none size-[360px] -bottom-[190px] -right-16`})}),(0,d.jsxs)(`div`,{className:`band-night relative overflow-hidden h-56 rounded-xl bg-night text-on-night p-8`,children:[(0,d.jsx)(n,{src:`/images/logo.svg`,alt:``,width:260,height:260,className:`absolute max-w-none size-[260px] -right-[110px] -top-[120px]`}),(0,d.jsx)(`p`,{className:`relative pt-16 font-display font-extrabold text-5xl text-night-accent tabular-nums`,children:`593,000+`})]})]})}),(0,d.jsx)(o,{title:`Rising sun eyebrow`,description:`A half sun on the horizon beside a caps label, above every section title. Use SectionHeading, or Eyebrow on its own.`,children:(0,d.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,d.jsx)(a,{children:`The directory`}),(0,d.jsx)(a,{children:`About`}),(0,d.jsx)(a,{children:`Community`})]})}),(0,d.jsx)(o,{title:`Using Inti with care`,description:`Inca religion and its symbols still matter to Andean communities today.`,children:(0,d.jsxs)(`ul`,{className:`grid gap-3 md:grid-cols-2`,children:[(0,d.jsx)(s,{kind:`do`,children:`Draw the sun as an abstract disc with rays.`}),(0,d.jsx)(s,{kind:`dont`,children:`Give the sun a face, a costume or a personality, or animate it as a character.`}),(0,d.jsx)(s,{kind:`dont`,children:`Use the chakana, tocapu textile designs or any stepped motif.`}),(0,d.jsxs)(s,{kind:`do`,children:[`Say “Inca”. In Quechua, `,(0,d.jsx)(`em`,{children:`inti`}),` means sun and `,(0,d.jsx)(`em`,{children:`quri`}),` means gold.`]}),(0,d.jsx)(s,{kind:`dont`,children:`Spin the sun or add parallax. Respect reduced motion.`}),(0,d.jsx)(s,{kind:`do`,children:`Use text labels first. Arrows are text characters (← →), not icons.`})]})})]})},m=[`SunAndEyebrow`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Sun mark and eyebrow",
  render: () => <Page eyebrow="Motifs" title="The sun, and nothing else" intro={<>
          The sun mark (<Code>public/images/logo.svg</Code>) is a gold disc with an inner ring and 24 alternating rays. It is
          the logo at small sizes and the page&rsquo;s main image at large ones. There is no other illustration.
        </>}>
      <Section title="Sizes" description="Minimum size 24px.">
        <div className="flex flex-wrap items-end gap-8">
          {[24, 44, 52, 120].map(size => <div key={size} className="flex flex-col items-center gap-2">
              <Image src="/images/logo.svg" alt="" width={size} height={size} />
              <span className="text-sm text-ink-muted tabular-nums">{size}px</span>
            </div>)}
        </div>
      </Section>
      <Section title="Rising from the edge" description="At large sizes the sun is cropped by the bottom of the sunrise band, or by the corner of the night stat card.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden h-56 rounded-lg bg-surface-sunrise">
            <Image src="/images/logo.svg" alt="" width={360} height={360} className="absolute max-w-none size-[360px] -bottom-[190px] -right-16" />
          </div>
          <div className="band-night relative overflow-hidden h-56 rounded-xl bg-night text-on-night p-8">
            <Image src="/images/logo.svg" alt="" width={260} height={260} className="absolute max-w-none size-[260px] -right-[110px] -top-[120px]" />
            <p className="relative pt-16 font-display font-extrabold text-5xl text-night-accent tabular-nums">593,000+</p>
          </div>
        </div>
      </Section>
      <Section title="Rising sun eyebrow" description="A half sun on the horizon beside a caps label, above every section title. Use SectionHeading, or Eyebrow on its own.">
        <div className="flex flex-col gap-3">
          <Eyebrow>The directory</Eyebrow>
          <Eyebrow>About</Eyebrow>
          <Eyebrow>Community</Eyebrow>
        </div>
      </Section>
      <Section title="Using Inti with care" description="Inca religion and its symbols still matter to Andean communities today.">
        <ul className="grid gap-3 md:grid-cols-2">
          <Rule kind="do">Draw the sun as an abstract disc with rays.</Rule>
          <Rule kind="dont">Give the sun a face, a costume or a personality, or animate it as a character.</Rule>
          <Rule kind="dont">Use the chakana, tocapu textile designs or any stepped motif.</Rule>
          <Rule kind="do">Say &ldquo;Inca&rdquo;. In Quechua, <em>inti</em> means sun and <em>quri</em> means gold.</Rule>
          <Rule kind="dont">Spin the sun or add parallax. Respect reduced motion.</Rule>
          <Rule kind="do">Use text labels first. Arrows are text characters (&larr; &rarr;), not icons.</Rule>
        </ul>
      </Section>
    </Page>
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as SunAndEyebrow,m as __namedExportsOrder,f as default};