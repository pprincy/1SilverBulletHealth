<template>
    <div>
        <innerheader />
        <thankyoureject />
    </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/HeaderDiy.vue";
import thankyoureject from "@/components/payment/thankYouReject.vue";

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