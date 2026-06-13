import{S as p}from"./vue.esm-bundler-AO_tuUZ6.js";import{x as d,h as u}from"./index-C-090Xcl.js";import"./WRoot-Bkx09XHA.js";import"./iframe-J7JveNbZ.js";import"./twMerge-CLwyhV7-.js";const F={component:u,title:"Components/FileInput",args:{}},r={render:t=>{const e=t;return{components:d,setup:()=>{const l=p([]);function i(c){console.log(c),l.value=c}return{args:e,errorHandler:i,errors:l}},template:`
            <!-- compact breaks in flexbox if not styled correctly -->
            <div class="flex w-full">
                <WFileInput v-bind="{...args}" @errors="errorHandler">
                    ${e._slot}
                </WFileInput>
            </div>
            <div
                v-if="errors.length > 0"
                class="border-2 border-red-500 rounded-lg p-2 mt-2 w-full"
            >
                <div v-for="err of errors" :key="err">
                    {{err}}
                </div>
            </div>
        `}}},n={...r,args:{...r.args,multiple:!0}},o={...r,args:{...r.args,multiple:!0,formats:[]}},s={...r,args:{...r.args,label:"Compact",compact:!0,_slot:`
            <template #label>
                Upload
            </template>
        `}},a={render:t=>({components:d,setup:()=>{const e=p([]);return{args:t,errors:e,errorHandler:i=>e.value=i}},template:`
            <WDebug :title="'Errors'">{{errors}}</WDebug>
            <WFileInput v-bind="{...args}"  @errors="errorHandler"></WFileInput>
        `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const args = _args as any as NonNullable<Story["args"]>;
    return {
      components: components as any,
      setup: () => {
        const errors = ref([]);
        function errorHandler(errs: any) {
          // eslint-disable-next-line no-console
          console.log(errs);
          errors.value = errs;
        }
        return {
          args,
          errorHandler,
          errors
        };
      },
      template: \`
            <!-- compact breaks in flexbox if not styled correctly -->
            <div class="flex w-full">
                <WFileInput v-bind="{...args}" @errors="errorHandler">
                    \${args._slot}
                </WFileInput>
            </div>
            <div
                v-if="errors.length > 0"
                class="border-2 border-red-500 rounded-lg p-2 mt-2 w-full"
            >
                <div v-for="err of errors" :key="err">
                    {{err}}
                </div>
            </div>
        \`
    };
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...SingleFile,
  args: {
    ...SingleFile.args,
    multiple: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...SingleFile,
  args: {
    ...SingleFile.args,
    multiple: true,
    formats: []
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...SingleFile,
  args: {
    ...SingleFile.args,
    label: "Compact",
    compact: true,
    _slot: \`
            <template #label>
                Upload
            </template>
        \`
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: components as any,
    setup: () => {
      const errors = ref([]);
      const errorHandler = (e: any) => errors.value = e;
      return {
        args,
        errors,
        errorHandler
      };
    },
    template: \`
            <WDebug :title="'Errors'">{{errors}}</WDebug>
            <WFileInput v-bind="{...args}"  @errors="errorHandler"></WFileInput>
        \`
  })
}`,...a.parameters?.docs?.source}}};const S=["SingleFile","MultipleFile","AnyFormat","Compact","ErrorHandling"];export{o as AnyFormat,s as Compact,a as ErrorHandling,n as MultipleFile,r as SingleFile,S as __namedExportsOrder,F as default};
