<template>
  <div class="Propose-details">
    <ProposerDetailsPage />
  </div>
</template>

<script>
// @ is an alias to /src
import ProposerDetailsPage from "@/components/ProposerDetailsPage.vue";

export default {
  name: "ProposerDetailsView",
  components: {
    ProposerDetailsPage,
  },
};
</script>
