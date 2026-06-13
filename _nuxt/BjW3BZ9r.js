import{aZ as m,bd as s,af as b,ab as r,ac as n,cB as a,bK as t,M as y,an as o,N as h,b0 as u,O as c,bs as d,K as k,J as w,b3 as P,aE as v,am as T,bA as x,H as q}from"./D_fBr3q7.js";import{u as B}from"./-CIVZdLS.js";import{t as S}from"./CihHYs_k.js";import f from"./DdBGHBtG.js";const N={style:{"vertical-align":"-0.125em",height:"1em",display:"inline-block",width:"auto"},viewBox:"0 0 24 24"};function A(e,l){return s(),b("svg",N,[...l[0]||(l[0]=[r("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[r("circle",{cx:"12",cy:"12",r:"10"}),r("path",{d:"M12 16v-4m0-4h.01"})],-1)])])}const p=m({name:"lucide-info",render:A}),D={class:"tooltip--content-container text-sm whitespace-pre-wrap flex flex-col justify-center"},$={__name:"WTooltip",props:{constrainWidthTo:{type:[Number,String,null],required:!1,default:"available"},constrainHeightTo:{type:[Number,String,null],required:!1,default:"available"},delayDuration:{type:Number,required:!1,default:200},disabled:{type:Boolean,required:!1,default:!1},triggerWhileDisabled:{type:Boolean,required:!1,default:!1},content:{type:String,required:!1,default:""},collisionBoundary:{type:null,required:!1},to:{type:String,required:!1,default:"#root"},rootProps:{type:null,required:!1},contentProps:{type:null,required:!1}},setup(e){const l=e,g=B("tooltip",l,[l?.contentProps?.style]);return(i,C)=>(s(),n(t(y),{disabled:e.disabled},{default:a(()=>[o(t(h),u({"delay-duration":e.rootProps?.delayDuration??200,"disable-closing-trigger":e.rootProps?.disableClosingTrigger??!1},e.rootProps),{default:a(()=>[e.triggerWhileDisabled?(s(),n(t(c),{key:0,"as-child":""},{default:a(()=>[r("span",null,[d(i.$slots,"default",{},()=>[o(f,{class:"text-neutral-500"},{default:a(()=>[o(t(p))]),_:1})])])]),_:3})):(s(),n(t(c),{key:1},{default:a(()=>[d(i.$slots,"default",{},()=>[o(f,{class:"text-neutral-500"},{default:a(()=>[o(t(p))]),_:1})])]),_:3})),o(t(k),{to:e.to},{default:a(()=>[o(t(w),u({style:t(g),class:t(S)(`
					z-100
					tooltip--content-wrapper
					origin-[var(--reka-tooltip-content-transform-origin)]
					data-[side=top]:animate-slideDownAndFade
					data-[side=right]:animate-slideLeftAndFade
					data-[side=bottom]:animate-slideUpAndFade
					data-[side=left]:animate-slideRightAndFade
					bg-neutral-50
					dark:bg-neutral-800
					rounded-sm
					shadow-sm
					shadow-black/30
					border
					border-black/30
					p-2
					overflow-auto
				`,e.contentProps?.class)},{collisionPadding:20,side:"top",...e.contentProps,class:void 0,style:void 0}),{default:a(()=>[r("div",D,[d(i.$slots,"content",P(v({content:e.content})),()=>[T(x(e.content),1)])]),o(t(q),{class:"tooltip--arrow -mt-px fill-neutral-50 dark:fill-neutral-800 drop-shadow-[0_2px_1px_rgba(0,0,0,0.3)] relative"})]),_:3},16,["style","class"])]),_:3},8,["to"])]),_:3},16,["delay-duration","disable-closing-trigger"])]),_:3},8,["disabled"]))}};export{$ as default};
