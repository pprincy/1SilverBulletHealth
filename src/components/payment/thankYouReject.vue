<template>
  <div>
    <div v-if="render" class="container">
      <div>
        <div class="failed-img-holder text-center mt-5 mb-3">
          <figure>
            <img src="~@/assets/images/payment_failed.png" alt="" />
          </figure>
          <figcaption class="mb-4">
            <h5>Thank you for submitting your response</h5>
            <span>{{message}}</span>
          </figcaption>
        </div>
        
      </div>
      <div class="blue-bg-section text-center">
        <h4>In case if you need any help</h4>
        <div class="d-flex align-items-center justify-content-center">
          <div class="blue-bg-section-inner">
            <h5>Contact us</h5>
            <b>{{this.rmMobileNumber}}</b>
          </div>
          <div class="blue-bg-section-inner">
            <h5>Email Us</h5>
            <b>{{this.contactEmail}}</b>
          </div>
          <div class="blue-bg-section-inner">
            <h5>Your RM</h5>
            <b>{{ this.rmName }} : {{ this.rmMobileNumber}}</b>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
//import {getDistributer} from '@/mixins/common';
export default {
  name: "thankyoureject",
  //mixins:[getDistributer],
  props: {
    msg: String,
  },
  components: {},
  data() {
    return {
      rmName: "",
      rmMobileNumber: "",
      render:true,
      message:"Your RM will get back to you with correct details"
    };
  },
  mounted() {
    let rmData = JSON.parse(sessionStorage.getItem("rm_data"));
    this.rmName = rmData["Name"];
    this.rmMobileNumber = rmData["Mobile"]
    //this.contactEmail = getDistributer()["contactEmail"]
    //this.contactNumber = getDistributer()["contactNumber"]
  },
  methods: {},
};
</script>

<style  lang="scss">
//@import "~@/assets/scss/components/paymentsuccess.scss";
// @import "~@/assets/scss/components/paymentfailed.scss";
</style>