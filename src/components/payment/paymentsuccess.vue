<template>
  <div>
    <div v-if="render" class="container">
      Payment Success Page
    </div>
  </div>
</template>


<script>
import axios from "axios";
//import {getDistributer} from '@/mixins/common';
export default {
  name: "paymentsuccess",
  //mixins:[getDistributer],
  props: {
    msg: String,
  },
  components: {},
  mounted() {
    let tmpRes = this.$route.query.response;

    //var updatedRes = tmpRes.replace(/'/g,"'");
    let updatedRes = tmpRes.replace(/'/g, '"');
    this.payResponse = JSON.parse(updatedRes);
    console.log("pay response: ", this.payResponse);

    //console.log('manufacturerCode: ', this.payResponse.manufacturerCode);

    let req = {
        "proposal_id": this.formInfo.fieldGroups.traceInfo.fields.manuApplicationNo.input,
        "proposal_ui_id": this.proposalUiId,
        "transaction_id": data.transactionId,
        "payment_ammount": this.selectedPlan.totalPremiumDetails[0].totalPremiumWithTax,
        "payment_status": data.status,
        "payment_remark": data.statusDescription
    }
  },
  data() {
    return {
      render: true,
      payResponse: "",
    };
  },
  methods: {
    savePaymentDtailsTATA(req){
    
      var headers = {
        "quoteId":this.uiQuoteId,
        Authorization: "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
        "Content-Type": "application/json",
      };
      
      //console.log('qData: ', qData);
      this.backendApi("savePaymentData", req, headers)
        .then((response) => {
           if(response == 'error') {
            self.apiError = true;
              // let msg=['We are facing some issue while saving payment data']
              // this.$router.push({ path: '/alert-diy', query: {msg: msg }});
          }
          else if(response.status=='error')
          {
              //  let msg=['We are facing some issue while saving payment data']
              // this.$router.push({ path: '/alert-diy', query: {msg: msg }});
          }
          else if(response && response.data){
            if(response.data.payment_status == 'success')
            {
              this.updateProposalStatus(13);
              this.sendMailPaymentConfirm();
              this.buyPolicyTATA();
              
            }
            else
            {
              this.updateProposalStatus(14);
              //redirect to thank you page
              this.thankYouUrl = new URL(location).origin+"/#/payment?transactionId=" + response.data.transaction_id;
              window.location.href = this.thankYouUrl; 
            }
          }
        })
        .catch((error) => {
          console.log('error msg block savePaymentData', error);
          // let msg=['We are facing some issue from backend while saving payment data']
          // this.$router.push({ path: '/alert-diy', query: {msg: msg }});
        });
    },
  },
};
</script>

<style  lang="scss">

</style>