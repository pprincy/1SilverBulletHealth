<template>
    <div>
        <Header />
        <NetworkAlert />
    </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import NetworkAlert from "@/components/alert/networkAlert.vue";

export default {
  name: 'alert',
  components: {
    Header,
    NetworkAlert
  }
}
</script>

<style scoped lang="scss">
// @import '~@/assets/scss/components/paymentsuccess.scss';
</style>