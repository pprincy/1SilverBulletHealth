<template>
    <div>
        <Header />
        <alertpage />
    </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import alertpage from "@/components/alert/alertpage.vue";

export default {
  name: 'alert',
  components: {
    Header,
     alertpage
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/scss/components/paymentsuccess.scss';
</style>