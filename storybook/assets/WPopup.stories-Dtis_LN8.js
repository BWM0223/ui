import{S as i}from"./vue.esm-bundler-AO_tuUZ6.js";import{o as l,x as d}from"./index-C-090Xcl.js";import"./WRoot-Bkx09XHA.js";import"./iframe-J7JveNbZ.js";import"./twMerge-CLwyhV7-.js";const h={component:l,title:"Components/Popup",args:{title:"Popup Title",description:"Popup Description"}},e={render:n=>{const a=n;return{components:d,setup:()=>{const p=i(!1);return{args:a,value:p}},template:`
            <div class="test bg-transparency-squares flex items-center justify-center" style="height:80vh;border:1px solid black;">
                <WPopup
                    :title="args.title"
                    :description="args.description"
                    v-model="value"
                    v-bind="args"
                >
                    ${a._slots}
                    <template #button>
                        <WButton>Open Modal Popup</WButton>
                    </template>
                    <template #extra>
                        <div
                            :style="{width: args.width, height: args.height}"
                        >
                            <div>Extra Slot</div>
                        </div>
                    </template>
                </WPopup>
            </div>
        `}}},t={...e,args:{_slots:`
            <template #title>
                <div>Title Slot</div>
            </template>
            <template #description>
                <div>Description Slot</div>
            </template>
            <template #close>
                <div>Close Slot</div>
            </template>
            <template #backdrop>
                <div>Backdrop Slot</div>
            </template>
        `}},r={...e,args:{_slots:`
            <template #popup>
                <div>Popup Slot - Replaces Other Slots except Close (note, you must provide reka's DialogTitle and DialogDescription to avoid it's warnings</div>
            </template>
        `}},s={...e,args:{width:"80vw",height:"80vh"}},o={...e,args:{width:"110vw",height:"110vh"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const args = _args as any as NonNullable<Story["args"]>;
    return {
      components: components as any,
      setup: () => {
        const value = ref(false);
        return {
          args,
          value
        };
      },
      template: \`
            <div class="test bg-transparency-squares flex items-center justify-center" style="height:80vh;border:1px solid black;">
                <WPopup
                    :title="args.title"
                    :description="args.description"
                    v-model="value"
                    v-bind="args"
                >
                    \${args._slots}
                    <template #button>
                        <WButton>Open Modal Popup</WButton>
                    </template>
                    <template #extra>
                        <div
                            :style="{width: args.width, height: args.height}"
                        >
                            <div>Extra Slot</div>
                        </div>
                    </template>
                </WPopup>
            </div>
        \`
    };
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    _slots: \`
            <template #title>
                <div>Title Slot</div>
            </template>
            <template #description>
                <div>Description Slot</div>
            </template>
            <template #close>
                <div>Close Slot</div>
            </template>
            <template #backdrop>
                <div>Backdrop Slot</div>
            </template>
        \`
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    _slots: \`
            <template #popup>
                <div>Popup Slot - Replaces Other Slots except Close (note, you must provide reka's DialogTitle and DialogDescription to avoid it's warnings</div>
            </template>
        \`
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    width: "80vw",
    height: "80vh"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    width: "110vw",
    height: "110vh"
  }
}`,...o.parameters?.docs?.source}}};const S=["Primary","OtherSlots","PopupSlots","PopupLarge","PopupTooBig"];export{t as OtherSlots,s as PopupLarge,r as PopupSlots,o as PopupTooBig,e as Primary,S as __namedExportsOrder,h as default};
