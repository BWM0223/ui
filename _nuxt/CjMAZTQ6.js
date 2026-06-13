import{cd as y,ac as d,cB as a,b0 as c,bK as e,k,a$ as v,bd as n,m as D,bs as s,ad as u,an as r,j as $,i as P,ab as m,g as C,b2 as V,l as S,am as f,bA as b,h as q,D as w}from"./D_fBr3q7.js";import{t as g}from"./CihHYs_k.js";import{_ as x}from"./DfSBlfuI.js";const N=Object.assign({name:"WPopup",inheritAttrs:!1},{__name:"WPopup",props:v({title:{type:String,required:!1},description:{type:String,required:!1},backdropClass:{type:String,required:!1},contentProps:{type:Object,required:!1},rootProps:{type:Object,required:!1},to:{type:String,required:!1,default:"#root"}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const i=y(t,"modelValue",{type:Boolean,default:!1});return(l,o)=>(n(),d(e(k),c(t.rootProps,{open:i.value,"onUpdate:open":o[1]||(o[1]=p=>i.value=p)}),{default:a(()=>[l.$slots.button?(n(),d(e(D),{key:0,"as-child":""},{default:a(()=>[s(l.$slots,"button")]),_:3})):u("",!0),r(e($),{to:t.to},{default:a(()=>[r(e(P),{"as-child":""},{default:a(()=>[s(l.$slots,"backdrop",{class:"popup--backdrop absolute inset-0 bg-black/50"},()=>[o[2]||(o[2]=m("div",{class:"popup--backdrop absolute inset-0 bg-black/50"},null,-1))])]),_:3}),r(e(C),c({...t.contentProps,class:void 0},{class:e(g)(`
				popup--content
				z-100
				focus:outline-none
				fixed
				top-1/2
				left-1/2
				-translate-x-1/2
				-translate-y-1/2
				animate-contentShow
				max-w-[100dvw]
				max-h-[100dvh]
				overflow-auto
				scrollbar-hidden
				p-5
			`,t.contentProps?.class)}),{default:a(()=>[m("div",{class:V(e(g)(`
					popup--content-inner
					flex
					flex-col
					bg-neutral-100
					dark:bg-neutral-800
					rounded-md
					flex
					flex-col
					gap-3
					p-2
				`))},[s(l.$slots,"popup",{},()=>[s(l.$slots,"title",{},()=>[t.title?(n(),d(e(S),{key:0,class:"text-lg font-bold"},{default:a(()=>[f(b(t.title),1)]),_:1})):u("",!0)]),s(l.$slots,"description",{},()=>[t.description?(n(),d(e(q),{key:0},{default:a(()=>[f(b(t.description),1)]),_:1})):u("",!0)]),s(l.$slots,"extra")]),r(e(w),{"as-child":""},{default:a(()=>[s(l.$slots,"close",{},()=>[r(x,{class:"justify-self-end",onClick:o[0]||(o[0]=p=>i.value=!1)},{default:a(()=>[...o[3]||(o[3]=[f(" Close ",-1)])]),_:1})])]),_:3})],2)]),_:3},16,["class"])]),_:3},8,["to"])]),_:3},16,["open"]))}});export{N as default};
