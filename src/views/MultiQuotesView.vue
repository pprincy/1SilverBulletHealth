<template>
  <div class="multiquote">
    <MultiQuotesPage />
  </div>
</template>

<script>
// @ is an alias to /src
import MultiQuotesPage from "@/components/MultiQuotesPage.vue";

export default {
  name: "MultiQuotesView",
  components: {
    MultiQuotesPage,
  },
};
</script>
