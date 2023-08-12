<template>
  <div class="landing">
    <Header @clicked-rm-details="captureRmData"/>
    <div class="left-div">

      <div class="img-box">
        <img src="../assets/images/family-img.png" alt="image">
      </div>

      <div class="customer-no">
        <button type="button" class="btn btn-primary px-3 py-2 d-flex align-items-center"><em
            class="icon sm icon-phone me-2"></em><span>18204587282</span></button>
            <div class="text"><label>*</label><p>All discounts are provided by insurers as per IRDAI approved insurance plans.</p></div>
      </div>
    </div>
    <div class="right-div">
      <div class="landingcard">
        <div class="text-center">
          <div class="text-center text-light bg-danger mb-3" v-if="!rmData">RM data not available, please login first!</div>
          <h1 class="mb-3">Buy Health Insurance Plans Online</h1>
          <h3>Get upto <span class="percentage">10%</span> Online Discount*</h3>
        </div>
        <Wizard/>
      </div>
      <div class="disterm-cnt">
        <ul class="foot-link">
        <li class="">
          <a href="#" class="">Terms &amp; Conditions</a>
        </li>
        <li class="">
          <a href="#" class="">Disclaimer</a>
        </li>
      </ul>
      </div>
    </div>

  </div>
</template>

<script>
import Wizard from "@/components/wizard.vue";
import Header from "@/components/Header.vue";
export default {
  name: 'LandingPage',
  components: {
    Wizard,
    Header
  },
  data(){
    return{
       rmData:""
    }
  },
  props: {

  },
  mounted()
  {
    if (sessionStorage.getItem("rm_data")) {
      this.rmData = JSON.parse(sessionStorage.getItem("rm_data"))
    }
    else
    {
      this.rmData=""
    }
  },
  methods:{
    captureRmData(val){
      //  this.rmData=val
      //  console.log("this.rmData",this.rmData)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
