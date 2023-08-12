<template>
    <div class="loading_block text-center">
      <div>
        <figure>
          <img src="~@/assets/images/loading_img.png" alt="" />
        </figure>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <p>{{msg}}</p>
              <!-- <b>buy now &amp; Save more!</b> -->
            </div>
            <!-- <div class="carousel-item">
              <p>Fetching quote from a company having the best claim ratio..</p>
              <b>buy now &amp; Save more!</b>
            </div>
            <div class="carousel-item">
              <p>
                Fetching quote from top insurance companies in the Life Term
                segment...
              </p>
              <b>buy now &amp; Save more!</b>
            </div> -->
          </div>
        </div>
        <div>
          <img src="~@/assets/images/loading_gif.gif" alt="" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "loading3",
    props: {
      msg: String,
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <!-- <style scoped lang="scss">

  </style> -->
  