<template>
  <div class="payment-page-wrapper">
    <payment/>
  </div>
</template>

<script>
// @ is an alias to /src
  import Header from "@/components/HeaderDiy.vue";
  import payment from "@/components/payment/payment.vue";

  export default {
    name: "PlanDetailsView",
    components: {
      payment,
    },
  };
</script>