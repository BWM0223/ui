import{C as c}from"./475SGCPX.js";import{u as g}from"./BfqBvf-7.js";import{t as w}from"./CihHYs_k.js";import{_ as h}from"./DfSBlfuI.js";import{bR as C,ac as V,cB as y,b0 as p,bK as t,a9 as m,bd as S,ab as l,bs as b,b3 as d,aE as _,b4 as f,b2 as v,ad as x}from"./D_fBr3q7.js";import"./CiPV8clP.js";const $={class:"color-input--swatch-wrapper flex w-full"},r=`
	color-input--swatch
	after:content-vertical-holder
	min-w-4
	flex-1
	relative
	before:content-['']
	before:absolute
	before:inset-0
	before:bg-transparency-squares
	before:z-[-1]
`,N={__name:"WColorSwatchButton",props:{id:{type:String,required:!1},tempValue:{type:null,required:!0},value:{type:Object,required:!0}},setup(s){const o=C(),n=g(),e=s,a=m(()=>new c("srgb",[e.value.r/255,e.value.g/255,e.value.b/255],e.value.a??1).toString()),i=m(()=>e.tempValue?new c("srgb",[e.tempValue.r/255,e.tempValue.g/255,e.tempValue.b/255],e.tempValue.a??1).toString():"");return(u,k)=>(S(),V(h,p({id:s.id,class:t(w)(`
		color-input--button
		p-0
		flex
		flex-nowrap
		min-w-4
		overflow-hidden
		[&_.button--label]:items-stretch
		[&_.button--label]:gap-0
		after:hidden
	`,t(o).class),"aria-label":t(n)("color-input.aria-and-title-prefix")+a.value,title:t(n)("color-input.aria-and-title-prefix")+a.value},{...t(o),class:void 0}),{label:y(()=>[l("div",$,[b(u.$slots,"default",d(_({stringColor:a.value,classes:r})),()=>[l("div",{class:v(r),style:f(`background:${a.value}`)},null,4)]),s.tempValue?b(u.$slots,"temp",d(p({key:0},{tempStringColor:i.value,classes:r})),()=>[l("div",{class:v(r),style:f(`background:${i.value}`)},null,4)]):x("",!0)])]),_:3},16,["id","class","aria-label","title"]))}};export{N as default};
