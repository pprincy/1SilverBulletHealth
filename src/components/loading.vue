<template>
  <div class="loading_block_outer">
  <div class="loading_block text-center">
    <div>
      <figure>
        <img src="~@/assets/images/loading_img.jpg" alt="" />
      </figure>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <p>Fetching personalised quote for you...</p>
            <b>buy now &amp; Save more!</b>
          </div>
          <div class="carousel-item">
            <p>Fetching quote from a company having the best claim ratio..</p>
            <b>buy now &amp; Save more!</b>
          </div>
          <div class="carousel-item">
            <p>
              Fetching quote from top insurance companies in the Life Term
              segment...
            </p>
            <b>buy now &amp; Save more!</b>
          </div>
        </div>
      </div>
      <div>
       <img src="~@/assets/images/loading_gif.svg" alt="" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "loadingPage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
