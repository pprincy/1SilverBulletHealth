<template>
  <div>
      <Header />
      <paymentFailure />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/HeaderDiy.vue";
import paymentFailure from "@/components/payment/paymentfailure.vue";

export default {
  name: 'paymentfailurepage',
  components: {
    Header,
    paymentFailure
  }
}
</script>

<style scoped lang="scss">
//@import '~@/assets/scss/components/paymentsuccess.scss';
</style>