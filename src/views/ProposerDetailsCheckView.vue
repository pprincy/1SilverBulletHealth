<template>
    <div class="Propose-details">
      <ProposerDetailsCheckPage />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import ProposerDetailsCheckPage from "@/components/ProposerDetailsCheckPage.vue";
  
  export default {
    name: "ProposerDetailsCheckView",
    components: {
      ProposerDetailsCheckPage,
    },
  };
  </script>
  