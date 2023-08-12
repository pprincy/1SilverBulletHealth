<template>
<div class="wrapper"> 
  <div class="inner-wrapper"> 
    <div class="policyname">
      <div class="policyname-text d-flex align-items-center justify-content-between" >
          <div class="d-flex align-items-center">
            <span class="mr-4">
              <img v-if="this.insuranceCompanyCode" :src="selectedPlan.supportingData.insCompanyLogo" alt=""/>
            </span>
            <span class="d-inline-block align-middle brand-text">
              &nbsp;&nbsp;{{ this.productName }} : {{ this.planName }}
            </span>
          </div>
          <div class="propno">
            <span v-if="this.applicationNo">Insurer Application Number: {{this.applicationNo}}</span><br>
            <span v-if="this.referenceNumber" >CRN: {{this.referenceNumber}}</span>
          </div>
      </div>
      <div class="container">
          <div class="success-img-holder text-center mt-5 mb-3">
            <figure>
              <img src="~@/assets/images/payment_scuccessful.png" alt="" />
            </figure>
            <figcaption class="mb-4">
              <!-- <h1>Payment Successful!</h1> -->
              <h1>Thank You</h1><br>
              <div v-if="this.proposalStatus">
              <span >{{this.proposalStatus}}.</span><br><br>
              </div>
              <div v-else>
              <span>An email has been sent successfully to the customer’s registered email Id - {{ this.maskid }} and SMS on Mobile number {{this.hiddennum}}. </span><br><br>
              <span>Customer has to review and submit the proposal along with making a payment.</span><br>
              </div>
            </figcaption>
          </div>
          
      </div>
    </div>
  </div>
</div>  
</template>


<script>
//import {getInsuranceImages} from '@/mixins/common';
export default {
  name: "paymnt",
  //mixins: [getInsuranceImages],
  props: {  },
  components: {},
  data() {
    return {
      proposalStatus:"",
      userData:{},
      email:"",
      mobile:"",
      maskid:"",
      hiddennum:"",
      referenceNumber:"",
      applicationNo:"",
      insuranceCompanyCode:"",
      productName:"",
      planName: "",
    };
  },
  mounted() {
    if(sessionStorage.getItem("uiQuoteId"))
    this.referenceNumber=sessionStorage.getItem("uiQuoteId")
 
    this.selectedPlan = JSON.parse(sessionStorage.getItem("selected_plan_data"));
    console.log('this.selectedPlan: ', this.selectedPlan);
    this.insuranceCompanyCode=this.selectedPlan["insuranceAndProducts"]["insuranceCompanyCode"];
    this.productName=this.selectedPlan["insuranceAndProducts"]["productName"];
    this.planName =  this.selectedPlan["productDetails"]["planOption"]["planName"];
    if(this.selectedPlan["insuranceAndProducts"]["insuranceCompanyCode"] == "HDFC")
    {
      this.applicationNo=this.selectedPlan["trackInfo"]["varFields"][0]["fieldValue"]
    }
    let s=this.$route.query.msg
    this.proposalStatus=s
    this.userData = JSON.parse(sessionStorage.getItem("filledData"));
    this.email = this.userData["fieldGroups"]["proposerDetails"]["fieldGroups"]["personalDetails"]["fields"]["email"]["input"]
    this.mobile = this.userData["fieldGroups"]["proposerDetails"]["fieldGroups"]["personalDetails"]["fields"]["mobileNumber"]["input"]
    console.log("emailmob",this.email,this.mobile)



    console.log("data",this.userData)
    this.maskid = this.email.replace(/^(.)(.*)(.@.*)$/,
     (_, a, b, c) => a + b.replace(/./g, '*') + c);
     this.hiddennum= this.mobile.slice(0, 2) + this.mobile.slice(2).replace(/.(?=...)/g, '*');

  },
  methods: {

  },
};
</script>

<style scoped lang="scss">
//@import "~@/assets/scss/components/paymentsuccess.scss";

// @import "~@/assets/scss/components/paymentfailed.scss";
</style>