<template>
  <div>
      <Header />
      <thankyou />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/HeaderDiy.vue";
import thankyou from "@/components/payment/thankyou.vue";

export default {
  name: 'thankyoupage',
  components: {
    Header,
    thankyou
  }
}
</script>

<style scoped lang="scss">
//@import '~@/assets/scss/components/paymentsuccess.scss';
</style>