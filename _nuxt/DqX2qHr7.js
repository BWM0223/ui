import{aZ as S,bd as a,af as n,ab as o,cw as D,b7 as _,b2 as I,bK as l,bs as L,ad as u,bA as d,b0 as M,q as E,br as z,cF as ee,bw as N,a9 as A,bn as F,an as v,cB as k}from"./D_fBr3q7.js";import{I as te}from"./CdDy59Xf.js";import{u as ie}from"./LOXcQEyK.js";import{u as le}from"./BfqBvf-7.js";import{t as g}from"./CihHYs_k.js";import{_ as se}from"./DfSBlfuI.js";import R from"./DdBGHBtG.js";import"./CiPV8clP.js";const ae={style:{"vertical-align":"-0.125em",height:"1em",display:"inline-block",width:"auto"},viewBox:"0 0 24 24"};function ne(i,m){return a(),n("svg",ae,[...m[0]||(m[0]=[o("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[o("path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}),o("path",{d:"M14 2v5a1 1 0 0 0 1 1h5"})],-1)])])}const re=S({name:"lucide-file",render:ne}),oe={style:{"vertical-align":"-0.125em",height:"1em",display:"inline-block",width:"auto"},viewBox:"0 0 24 24"};function ce(i,m){return a(),n("svg",oe,[...m[0]||(m[0]=[o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v12m5-7l-5-5l-5 5m14 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},null,-1)])])}const fe=S({name:"lucide-upload",render:ce}),ue=["for"],de={class:"text-ellipsis overflow-hidden shrink-1 hidden @min-[15ch]:block"},me={key:1,class:"file-input--label-count"},pe={key:2,class:"file-input--label-name text-ellipsis overflow-hidden shrink-9999 hidden @3xs:block"},ve={key:3,class:"file-input--label-name text-ellipsis overflow-hidden shrink-9999 @3xs:hidden"},he={key:0,class:"file-input--formats-label flex-col items-center text-sm max-w-full hidden @min-[15ch]:flex"},xe={class:"text-ellipsis overflow-hidden max-w-full"},ge={class:"file-input--formats-list overflow-hidden text-ellipsis max-w-full"},we=["id","accept","multiple","aria-invalid","aria-errormessage"],be={class:"flex flex-initial basis-full justify-start items-center max-w-full gap-2 px-1"},ye=["title"],ke={class:"file-input--preview flex flex-initial basis-full justify-center"},je={key:0,class:"file-input--preview-image bg-transparency-squares flex h-[80px] flex-wrap items-center justify-center"},Ue=["src"],$e={key:1,class:"file-input--preview-no-image flex h-[80px] flex-1 basis-full flex-wrap items-center justify-center"},Ie={key:1,class:"file-input--errors flex flex-col gap-2 text-sm text-red-600 dark:text-red-400 items-center px-2"},Ce=Object.assign({name:"WFileInput",inheritAttrs:!1},{__name:"WFileInput",props:{id:{type:String,required:!1},multiple:{type:Boolean,required:!1,default:!1},formats:{type:Array,required:!1,default:()=>["image/*",".jpeg",".jpg",".png"]},compact:{type:Boolean,required:!1,default:!1},inputAttrs:{type:Object,required:!1},wrapperAttrs:{type:Object,required:!1}},emits:["input","errors"],setup(i,{expose:m,emit:H}){const h=le(),p=F(null),x=i,B=ie(x),V=H,s=N([]),c=N([]),j=F(!1),w=F(!1);function W(){p.value&&(p.value.value="");for(const e of s)e.previewUrl&&URL.revokeObjectURL(e.previewUrl);s.splice(0,s.length)}D(s,()=>{V("input",s.map(e=>e.file),W)}),D(c,()=>{c.length>0&&(j.value=!0,V("errors",[...c],U))});function U(){j.value=!1,c.splice(0,c.length)}const P=A(()=>x.formats?.filter(e=>!e.startsWith("."))??[]),$=A(()=>x.formats?.filter(e=>e.startsWith("."))??[]);_(()=>{for(const e of s)e.previewUrl&&URL.revokeObjectURL(e.previewUrl)});function K(e){e.previewUrl&&URL.revokeObjectURL(e.previewUrl);const r=s.indexOf(e);r>-1&&s.splice(r,1)}const X=A(()=>$.value.join(", "));function Z(e){if("dataTransfer"in e&&e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files.length>0)return p.value.files=e.dataTransfer.files,e.preventDefault(),w.value=!1,q(p.value.files)}async function G(e){if(e.preventDefault(),p.value.files)return q(p.value.files)}function q(e){const r=[];for(const t of e){const b=t.type.startsWith("image"),J=x.formats.length===0,C=P.value.find(f=>f.endsWith("/*")?t.type.startsWith(f.slice(0,-2)):f===t.type)!==void 0,O=$.value.find(f=>t.name.endsWith(f))!==void 0;if(!J&&(!C||!O)){const f=t.name.match(/.*(\..*)/)?.[1]??"Unknown",Q=t.type===""?"":` (${t.type})`,Y=`File type ${f}${Q} is not allowed. Allowed file types are: ${X.value}.`,y=new Error(Y);y.file=t,y.isValidExtension=O,y.isValidMimeType=C,r.push(y);continue}const T=b?URL.createObjectURL(t):void 0;r.length>0||s.find(f=>f.file===t)||(x.multiple||s.length<1?s.push({file:t,isImg:b,previewUrl:T}):s.splice(0,s.length,{file:t,isImg:b,previewUrl:T}))}if(r.length>0)return c.splice(0,c.length,...r),!1;c.length>0&&U()}return m({clearFiles:W,clearErrors:U}),(e,r)=>(a(),n("div",M({class:l(g)(`
		file-input
		justify-center
		border-2
		border-dashed
		border-accent-500/80
		focus-outline-within
		transition-[border-color,box-shadow]
		ease-out
		hover:bg-accent-500/10
		outlined-focus-within
	`,i.compact&&"rounded-sm",!i.compact&&`
			flex
			w-full
			flex-col
			items-stretch
			gap-2
			rounded-xl
			p-2
		`,w.value&&"bg-accent-500/10",l(c).length>0&&j.value&&"errored border-red-400 hover:border-red-500",i.wrapperAttrs?.class)},{...i.wrapperAttrs,class:void 0},{onDrop:Z,onDragover:r[1]||(r[1]=ee(t=>w.value=!0,["prevent"])),onDragleave:r[2]||(r[2]=t=>w.value=!1)}),[o("div",{class:I(l(g)(`
			file-input--wrapper
			relative
			justify-center
		`,i.compact&&"flex gap-2",!i.compact&&`
				file-input
				flex
				flex-col
				items-center
			`))},[o("label",{for:l(B),class:I(l(g)(`
				file-input--label
				pointer-events-none
				flex
				gap-1
				items-center
				justify-center
				whitespace-nowrap
				max-w-full
				px-1
			`))},[i.compact||i.multiple||l(s).length===0?L(e.$slots,"icon",{key:0},()=>[v(R,null,{default:k(()=>[v(l(fe))]),_:1})]):u("",!0),L(e.$slots,"label",{},()=>[o("div",de,d(i.compact?i.multiple?l(h)("file-input.compact-choose-file-plural"):l(h)("file-input.compact-choose-file"):i.multiple?l(h)("file-input.non-compact-choose-file-plural"):l(h)("file-input.non-compact-choose-file")),1)]),i.compact&&i.multiple?(a(),n("div",me,d(` (${l(s).length})`),1)):u("",!0),i.compact&&!i.multiple&&l(s).length>0?(a(),n("div",pe,d(` (${l(s)[0]?.file.name})`),1)):u("",!0),i.compact&&!i.multiple&&l(s).length>0?(a(),n("div",ve,d(" (...)"))):u("",!0)],10,ue),!i.compact&&i.formats?.length>0?(a(),n("label",he,[L(e.$slots,"formats",{},()=>[o("div",xe,d(l(h)("file-input.accepted-formats"))+":",1)]),o("div",ge,d($.value.join(", ")),1)])):u("",!0),o("input",M({id:l(B),class:l(g)(`
				file-input--input
				absolute
				inset-[calc(var(--spacing)*-2)]
				cursor-pointer
				z-0
				text-[0]
				opacity-0
			`,i.inputAttrs?.class),type:"file",accept:i.formats.join(", "),multiple:i.multiple},{...i.inputAttrs,class:void 0},{"aria-invalid":l(c).length>0,"aria-errormessage":l(c).map(t=>t.message).join(", "),ref_key:"el",ref:p,onInput:G,onClick:r[0]||(r[0]=t=>t.target.value=null)}),null,16,we)],2),!i.compact&&l(s).length>0?(a(),n("div",{key:0,class:I(l(g)(`file-input--previews
			flex items-stretch justify-center gap-4 flex-wrap
			`,i.multiple&&`
				w-full
			`))},[(a(!0),n(E,null,z(l(s),t=>(a(),n("div",{class:"file-input--preview-wrapper z-1 relative flex min-w-0 max-w-[150px] flex-initial flex-col items-center gap-1 p-1 rounded-sm border border-neutral-300 dark:border-neutral-800 shadow-md shadow-neutral-800/30 bg-neutral-100 dark:bg-neutral-900 [&:hover_.file-input--remove-button]:opacity-100",key:t.file.name},[o("div",be,[v(se,{border:!1,class:"file-input--remove-button rounded-full p-0","aria-label":`Remove file ${t.file.name}`,onClick:b=>K(t)},{default:k(()=>[v(R,null,{default:k(()=>[v(l(te))]),_:1})]),_:1},8,["aria-label","onClick"]),o("div",{class:"file-input--preview-filename min-w-0 flex-1 basis-0 truncate break-all rounded-sm text-sm",title:t.file.name},d(t.file.name),9,ye)]),o("div",ke,[t.isImg?(a(),n("div",je,[o("img",{class:"max-h-full w-auto",src:t.previewUrl},null,8,Ue)])):u("",!0),t.isImg?u("",!0):(a(),n("div",$e,[v(R,null,{default:k(()=>[v(l(re),{class:"text-4xl opacity-50"})]),_:1})]))])]))),128))],2)):u("",!0),!i.compact&&l(c).length>0?(a(),n("div",Ie,[(a(!0),n(E,null,z(l(c),t=>(a(),n("div",{class:"file-input--error text-center",key:t.message},d(t.message),1))),128))])):u("",!0)],16))}});export{Ce as default};
