<template>
  <div class="text-center" v-if="loading" style="padding-top: 50px;">
    <loadingPage />
  </div>
  <div v-else class="thankyou" >
    <div v-if="selectedPlan">
      <div class="main_header d-flex justify-content-between align-items-center mx-5 mt-3" >
        <div class="d-flex align-items-center">
          <div>
            <img :src="selectedPlan?.supportingData?.insCompanyLogo" alt="image" />
          </div>
          <div> 
            <h4>{{ this.productName }}</h4>
          </div>
        </div>
        <div class="propno">
          
          <!-- <span v-if="this.applicationNo">Insurer Application Number: {{this.applicationNo}}</span><br> -->
          <span v-if="this.referenceNumber">CRN: {{this.referenceNumber}}</span>
      
        </div>
      </div>
      <div class="container">
          <div class="success-img-holder text-center mb-3">
            <figure>
              <img src="~@/assets/images/payment_scuccessful.png" alt="" />
              <h1 class="text-success">Payment successfull !</h1>
            </figure>
            <figcaption>
              <!--<span>Your proposal is submitted successfully to insurance company</span><br> 
              <span>Insurer will send email to the customer's registered email Id - {{ this.maskid }} and SMS to Mobile number {{this.hiddennum}}.</span>-->
              <h5>Thank you and Congratulations on your new health Insurance policy.</h5>
              <span>Your proposal is submitted successfully to insurance company and the details are shown below</span>
              <div class="table-responsive payment-table">
                <table>
                <tr>
                  <th>Product Name</th>
                  <td class="thankutext">{{ this.productName }}</td>
                </tr>
                <tr>
                  <th>Plan Name</th>
                  <td class="thankutext">{{ this.planName }}</td>
                </tr>
                <tr v-if="this.policyNo">
                  <th>Policy Number</th>
                  <td class="thankutext">{{ this.policyNo }}</td>
                </tr>
                <tr v-if="!this.policyNo">
                  <th>Proposal Number</th>
                  <td class="thankutext">{{ this.applicationNo }}</td>
                </tr>
                <tr>
                  <th>Premium Amount</th>
                  <td class="thankutext">
                    <em class="rupee">&#x20B9;</em>
                    {{
                      currency(selectedPlan.totalPremiumDetails[selectedPolicyIndex].totalPremiumWithTax)
                    }}
                  </td>
                </tr>
                <tr>
                  <th>Payment Success</th>
                  <td class="thankutext">Success</td>
                </tr>
              </table>
              </div>
            </figcaption>
            <div class="before-download">
              <button @click="downloadPolicy()">
                Get Policy Document
              </button>
            </div>
            <div class="download" v-if="policyPdf">
              <a :download="policyNo" :href="'data:application/pdf;base64,'+policyPdf">
                <em class="download-new mx-3"></em>
              </a>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>


<script>
import loadingPage from "@/components/loading.vue";
export default {
  name: "paymnt",
  props: {  },
  components: {
    loadingPage
  },
  data() {
    return {
      userData:{},
      email:"",
      mobile:"",
      maskid:"",
      hiddennum:"",
      referenceNumber:"",
      applicationNo:"",
      insuranceCompanyCode:"",
      selectedPolicyIndex: 0,
      productName:"",
      planName: "",
      selectedPlan: "",
      loading: false,
      requestJson: "",
      policyNo: "2825201177452400000",
      policyPdf: "",
      configData: "",
      channel_type: "",
    };
  },
  mounted() {
    
    this.configData = this.$store.state.configData;
    if(sessionStorage.getItem("uiQuoteId"))
    this.referenceNumber=sessionStorage.getItem("uiQuoteId")
 
    this.selectedPlan = JSON.parse(sessionStorage.getItem("selected_plan_data"));
    this.requestJson = JSON.parse(sessionStorage.getItem("quote_request"));
    this.insuranceCompanyCode=this.selectedPlan["insuranceAndProducts"]["insuranceCompanyCode"];
    this.productName=this.selectedPlan["insuranceAndProducts"]["productName"];
    this.planName=this.selectedPlan["productDetails"]["planOption"]["planName"];
    this.selectedPolicyIndex = this.getSelectedPolicyIndex(this.requestJson.data.product.policyTerm);

    this.userData = JSON.parse(sessionStorage.getItem("filledData"));
    this.email = this.userData["fieldGroups"]["proposerDetails"]["fieldGroups"]["personalDetails"]["fields"]["email"]["input"];
    this.mobile = this.userData["fieldGroups"]["proposerDetails"]["fieldGroups"]["personalDetails"]["fields"]["mobileNumber"]["input"];
    console.log("emailmob",this.email,this.mobile)

    this.channel_type = JSON.parse(sessionStorage.getItem("channel_type"));

    if(sessionStorage.getItem("policyNo")) {
      this.policyNo = JSON.parse(sessionStorage.getItem("policyNo"));
    }
    if(sessionStorage.getItem("applicationNumber")) {
      this.applicationNo = JSON.parse(sessionStorage.getItem("applicationNumber"));
    }
    

    console.log("data",this.userData)
    this.maskid = this.email.replace(/^(.)(.*)(.@.*)$/,
     (_, a, b, c) => a + b.replace(/./g, '*') + c);
    this.hiddennum= this.mobile.slice(0, 2) + this.mobile.slice(2).replace(/.(?=...)/g, '*');

  },
  methods: {
    downloadPolicy() {
      var self = this;
      console.log('downloadPolicy called: ');
      this.loading = true;
      let headers = {};
      let reqData = {
        "data" : {
          "distributor": {
              "distributorID": this.configData["CONSUMER"]["consumerId"],
              "agentID": "",
              "salesChannel": "",
              "channelType":this.channel_type,
              "varFields": [{
                  "fieldName":"transactionId",
                  "fieldValue":"eqeqeq"
              }]
          },
          "insuranceCompanyCode": this.selectedPlan.insuranceAndProducts.insuranceCompanyCode,
          "applicationNo": this.applicationNo.toString(),
          "productCode": this.selectedPlan.insuranceAndProducts.productCode,
          "policyNo": this.policyNo.toString(),
          "quoteId": "",
          "individualDetails": {
              "firstName": this.userData["fieldGroups"]["proposerDetails"]["fieldGroups"]["personalDetails"]["fields"]["firstName"]["input"],
              "lastName": this.userData["fieldGroups"]["proposerDetails"]["fieldGroups"]["personalDetails"]["fields"]["lastName"]["input"],
              "dob": this.userData["fieldGroups"]["proposerDetails"]["fieldGroups"]["personalDetails"]["fields"]["dateOfBirth"]["input"],
              "mobileNumber": parseInt(this.mobile)
          },
          "fileDetails": {
              "SBDocCategory": "policyDownload",
              "SBDocId": "policyDownloadDoc",
              "varFields": [
                  {
                      "fieldName": "",
                      "fieldValue": ""
                  }
              ]
          }
        }
      };

      this.backendApi("downloadPolicy", reqData, headers)
        .then((response) => {
          this.loading = false;
         
          if (response.status == "error") {

            let msg = [response.data.detail];
            this.$router.push({ path: '/networkalert', query: { backUrl: 'plandetails-page', msg: msg } });

          } else  {
            console.log('response: ', response.data);
            this.policyPdf = response.data;
          }

        })
        .catch((error) => {
          console.log('error msg block : get policy', error);
          self.loading = false;
          // self.apiError = true;
          //   let msg=['We are facing some issue from while fetching quotation API']

          //   this.$router.push({ path: '/networkalert', query: {backUrl:'policy-quote', msg: msg }});
        });
    },
    getSelectedPolicyIndex(pTerm) {
      let itemIndex = this.selectedPlan.productDetails.premiumForEachPolicyTerm.findIndex(item => item.policyTerm == pTerm);
      if(itemIndex > -1) {
        return itemIndex;
      }
    },
    currency(amt) {
      let tmpAmt = parseFloat(amt).toFixed(2);
      return new Intl.NumberFormat().format(tmpAmt);
    },
  },
};
</script>

<style scoped lang="scss">
//@import "~@/assets/scss/components/paymentsuccess.scss";
// @import "~@/assets/scss/components/paymentfailed.scss";
.thankutext {
  color: #0a3f88;
}

table {
  text-align: left;
  width: 40%;
  margin: 0px auto;
}
</style>