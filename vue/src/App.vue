

<template>
  <Settings @setting-vue="appVueProvider" />
</template>

  <script setup>
  import Settings from "./components/Settings.vue";
  import { reactive } from 'vue'
  // import { onMounted } from 'vue'
  /* 
  //import SettingsShadownRoot from "./components/SettingsShadowRoot.vue";
  //Define Shadown Root 
  // customElements.define("my-vue-web-comp-shadown-root", SettingsShadownRoot);
  // document.body.appendChild(new SettingsShadownRoot());
  */

  const vueConst = reactive({ reactive: null});

  function appVueProvider(e) {
    console.log("appVueProvider");
    vueConst.reactive = e;
    const sendEvent = new CustomEvent("vueSendEvent", {
      bubbles: true,
      detail: {
        vueObj: vueConst.reactive,
      },
    });
    document.dispatchEvent(sendEvent);
  }
  
  </script>

<style scoped>
</style>