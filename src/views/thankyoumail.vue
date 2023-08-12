<template>
  <div>
      <!-- <Header /> -->
      <thankyoureject />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import thankyoureject from "@/components/payment/thankyoumail.vue";

export default {
  name: 'thankyourejectdiy',
  components: {
    Header,
    thankyoureject
  }
}
</script>

<style scoped lang="scss">
//@import '~@/assets/scss/components/paymentsuccess.scss';
</style>