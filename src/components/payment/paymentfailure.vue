<template>
  <div>
    <div class="d-flex justify-content-between
          align-items-center mx-5 mt-3" >
        <div class="d-flex align-items-center">
          <span class="mr-4">
           <!-- <img v-if="this.insuranceCompanyCode"  :src="getInsurerImgs(this.insuranceCompanyCode)" alt=""/> -->
          </span>
          <span class="d-inline-block align-middle brand-text">
              {{ this.productName }}
            </span>
        </div>
        <div class="propno">
          
        </div>
      </div>
    <div class="container">
        <div class="success-img-holder text-center mt-5 mb-3">
          <figure><br/>
            <img src="~@/assets/images/payment_failed.png" alt="" />
          </figure>
          <figcaption class="mb-4">
            <h2 class="text-danger">Payment Failed!</h2>
            <span>{{this.paymentResponse.statusDescription}}</span><br>
            <!-- <span>Insurer will send email to the customer's registered email Id - {{ this.maskid }} and SMS to Mobile number {{this.hiddennum}}.</span> -->
          </figcaption>
        </div>
        <div class="text-center">
          <button class="btn btn-outline-warning" @click="resumejourney()" type="submit">
            Try Again
            <i><img src="~@/assets/images/next-arrow.png" alt="" /></i>
          </button>
        </div>
    </div>
  </div>
</template>


<script>
//import {getInsuranceImages} from '@/mixins/common';
export default {
  name: "paymentFailure",
  props: {  },
  //mixins: [getInsuranceImages],
  components: {},
  data() {
    return {
      userData:{},
      paymentResponse: "",
      proposalUiId: "",
      resumeUrl: "",
    };
  },
  mounted() {
    
    this.paymentResponse = JSON.parse(sessionStorage.getItem("payment_details"));

    console.log('this.paymentResponse: ', this.paymentResponse);

  
  },
  methods: {

    resumejourney(){

      if(sessionStorage.getItem('proposal_ui_id')) {
        this.proposalUiId = JSON.parse(sessionStorage.getItem('proposal_ui_id'));
      }
	
	    let rmData = JSON.parse(sessionStorage.getItem("rm_data"));
      console.log("rm",rmData);
      let transId= rmData['transaction_id'];
      this.resumeUrl = new URL(location).origin+'/#/proposal-details-check-diy?proposalId='+this.proposalUiId+'&transactionId='+transId;
      window.location.href = this.resumeUrl;
    },
  },
};
</script>

<style scoped lang="scss">
//@import "~@/assets/scss/components/paymentsuccess.scss";
// @import "~@/assets/scss/components/paymentfailed.scss";
</style>