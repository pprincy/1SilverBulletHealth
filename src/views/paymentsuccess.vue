<template>
    <div>
        <innerheader />
        <paymentsuccess />
    </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/HeaderDiy.vue";
import paymentsuccess from "@/components/payment/paymentsuccess.vue";

export default {
  name: 'thankyourejectdiy',
  components: {
    Header,
    paymentsuccess
  }
}
</script>

<style scoped lang="scss">
//@import '~@/assets/scss/components/paymentsuccess.scss';
</style>