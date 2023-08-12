<template>
    <div class="ckyc">
      <CkycPage />
    </div>
    
  </template>
  
  <script>
  // @ is an alias to /src
  import CkycPage from "@/components/CkycPage.vue";
  
  export default {
    name: "CkycView",
    components: {
      CkycPage,
    },
  };
  </script>
  