<template>
  <div class="plandetails">
    <PlanDetailsPage />
  </div>
</template>

<script>
// @ is an alias to /src
import PlanDetailsPage from "@/components/PlanDetailsPage.vue";

export default {
  name: "PlanDetailsView",
  components: {
    PlanDetailsPage,
  },
};
</script>
