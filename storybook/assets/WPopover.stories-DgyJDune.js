import{ae as b,ac as w,S as g,e as x}from"./vue.esm-bundler-AO_tuUZ6.js";import{n as B,x as S}from"./index-C-090Xcl.js";import"./WRoot-Bkx09XHA.js";import"./iframe-J7JveNbZ.js";import"./twMerge-CLwyhV7-.js";const C={component:B,title:"Components/Popover",args:{}},e={render:h=>{const f=h;return{components:S,setup:()=>{const P=w("collisionBoundary"),p=g(!1),d=["TL","TC","TR","BL","BC","BR"],t=g("TL"),m=g(!0),y=x(()=>{switch(t.value){case"TL":return"align-self: flex-start; justify-self: flex-start;";case"TC":return"align-self: flex-start; justify-self: center;";case"TR":return"align-self: flex-start; justify-self: flex-end;";case"BL":return"align-self: flex-end; justify-self: flex-start;";case"BC":return"align-self: flex-end; justify-self: center;";case"BR":return"align-self: flex-end; justify-self: flex-end;";default:return""}});return b(p,()=>{if(!p.value&&m.value){const v=d.indexOf(t.value);v<5?t.value=d[v+1]:t.value=d[0]}}),{args:f,buttonPos:t,autoRotatePos:m,buttonStyle:y,value:p,collisionBoundary:P}},template:`
            <WSimpleInput
                :suggestions="['TL', 'TR', 'BL', 'BR']"
                :restrict-to-suggestions="true"
                :suggestions-filter="(_, items) => items"
                :label="'Button Position'"
                v-model="buttonPos"
            >
            </WSimpleInput>
            <div>
                <label>Auto Rotate Position</label>
                <input type="checkbox" v-model="autoRotatePos">
            </div>
            <div
                ref="collisionBoundary"
                class="border border-red-500"
            >
                <div
                    class="overflow-auto max-w-[100vw] max-h-[100vh]"
                >
                    <div
                        class="test bg-transparency-squares"
                            
                        :style="{
                            display: 'grid',	
                            width: '100vw',
                            height: '80vh',
                            padding: '50px',
                            border: '1px solid black',
                            ...args.container
                        }"
                    >
                                
                    <WPopover v-model="value" v-bind="{
                        ...args,
                        contentProps: {...args.contentProps, collisionBoundary},
                        width:undefined,
                        height:undefined,
                    }" >
                        <template #button>
                            <WButton :style="buttonStyle" @click="value = !value" >Toggle Popover</WButton>
                        </template>
                        <template #popover>
                                <WDebug
                                    :style="{width: args.width, height: args.height}"
                                    class="overflow-auto"
                                >
                                    Popover Content
                                </WDebug>
                        </template>
                    </WPopover>
                    </div>
                </div>
            </div>
            `}}},r={...e,args:{container:{width:"150vw",height:"150vh"}}},n={...e,args:{contentProps:{sticky:"partial"},container:{width:"150vw",height:"150vh"}}},o={...e,args:{height:"500px",contentProps:{prioritizePosition:!0,side:"top"},container:{width:"150vw",height:"150vh"}}},s={...e,args:{width:"110vw",height:"110vh"}},a={...e,args:{contentProps:{side:"right",align:"start"}}},i={...e,args:{contentProps:{side:"left",align:"end"}}},l={...e,args:{contentProps:{side:"bottom",align:"start"}}},c={...e,args:{contentProps:{side:"top",align:"end"}}},u={...e,args:{contentProps:{width:"300px",height:"500px",side:"right",align:"start"},animationDirection:"use-align"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const args = _args as any as NonNullable<Story["args"]>;
    return {
      components: components as any,
      setup: () => {
        const collisionBoundary = useTemplateRef("collisionBoundary");
        const value = ref(false);
        const buttonPositions = ["TL", "TC", "TR", "BL", "BC", "BR"] as const;
        const buttonPos = ref<typeof buttonPositions[number]>("TL");
        const autoRotatePos = ref(true);
        const buttonStyle = computed(() => {
          switch (buttonPos.value) {
            case "TL":
              return \`align-self: flex-start; justify-self: flex-start;\`;
            case "TC":
              return \`align-self: flex-start; justify-self: center;\`;
            case "TR":
              return \`align-self: flex-start; justify-self: flex-end;\`;
            case "BL":
              return \`align-self: flex-end; justify-self: flex-start;\`;
            case "BC":
              return \`align-self: flex-end; justify-self: center;\`;
            case "BR":
              return \`align-self: flex-end; justify-self: flex-end;\`;
            default:
              return "";
          }
        });
        watch(value, () => {
          if (!value.value && autoRotatePos.value) {
            const buttonI = buttonPositions.indexOf(buttonPos.value);
            if (buttonI < 5) {
              buttonPos.value = buttonPositions[buttonI + 1]!;
            } else {
              buttonPos.value = buttonPositions[0]!;
            }
          }
        });
        return {
          args,
          buttonPos,
          autoRotatePos,
          buttonStyle,
          value,
          collisionBoundary
        };
      },
      template: \`
            <WSimpleInput
                :suggestions="['TL', 'TR', 'BL', 'BR']"
                :restrict-to-suggestions="true"
                :suggestions-filter="(_, items) => items"
                :label="'Button Position'"
                v-model="buttonPos"
            >
            </WSimpleInput>
            <div>
                <label>Auto Rotate Position</label>
                <input type="checkbox" v-model="autoRotatePos">
            </div>
            <div
                ref="collisionBoundary"
                class="border border-red-500"
            >
                <div
                    class="overflow-auto max-w-[100vw] max-h-[100vh]"
                >
                    <div
                        class="test bg-transparency-squares"
                            
                        :style="{
                            display: 'grid',	
                            width: '100vw',
                            height: '80vh',
                            padding: '50px',
                            border: '1px solid black',
                            ...args.container
                        }"
                    >
                                
                    <WPopover v-model="value" v-bind="{
                        ...args,
                        contentProps: {...args.contentProps, collisionBoundary},
                        width:undefined,
                        height:undefined,
                    }" >
                        <template #button>
                            <WButton :style="buttonStyle" @click="value = !value" >Toggle Popover</WButton>
                        </template>
                        <template #popover>
                                <WDebug
                                    :style="{width: args.width, height: args.height}"
                                    class="overflow-auto"
                                >
                                    Popover Content
                                </WDebug>
                        </template>
                    </WPopover>
                    </div>
                </div>
            </div>
            \`
    };
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    container: {
      width: "150vw",
      height: "150vh"
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    contentProps: {
      sticky: "partial"
    },
    container: {
      width: "150vw",
      height: "150vh"
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    height: "500px",
    contentProps: {
      prioritizePosition: true,
      side: "top"
    },
    container: {
      width: "150vw",
      height: "150vh"
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Should cover button due to prioritizePosition",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    width: "110vw",
    height: "110vh"
  }
}`,...s.parameters?.docs?.source},description:{story:"When the popover is too wide, it's set to overscroll content although ideally the popover should scroll it's own content.",...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    contentProps: {
      side: "right",
      align: "start"
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    contentProps: {
      side: "left",
      align: "end"
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    contentProps: {
      side: "bottom",
      align: "start"
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    contentProps: {
      side: "top",
      align: "end"
    }
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Primary,
  args: {
    contentProps: {
      width: "300px",
      height: "500px",
      side: "right",
      align: "start"
    },
    animationDirection: "use-align"
  }
}`,...u.parameters?.docs?.source}}};const E=["Primary","PopoverPreventsBoundaryEscape","PopoverAllowBoundaryEscape","PopoverPositionPriority","PopoverTooBig","PopoverRightStart","PopoverLeftEnd","PopoverBottomStart","PopoverTopEnd","RightMenuShapeExample"];export{n as PopoverAllowBoundaryEscape,l as PopoverBottomStart,i as PopoverLeftEnd,o as PopoverPositionPriority,r as PopoverPreventsBoundaryEscape,a as PopoverRightStart,s as PopoverTooBig,c as PopoverTopEnd,e as Primary,u as RightMenuShapeExample,E as __namedExportsOrder,C as default};
