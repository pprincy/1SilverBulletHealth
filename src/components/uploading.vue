<template>
  <div class="loading_block text-center upload_page">
    <div>
      <div>
        <p>
          You document is getting uploaded...
        </p>
        <img src="assets/images/loading_gif.gif" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "uploding",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import '~@/assets/scss/components/loading.scss';
</style>
