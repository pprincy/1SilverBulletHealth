<template>
<div class="loading_block_outer" v-if="loading">
    <Loading3 msg='Downloading payment receipt'/>
    <div class="snippet" data-title=".dot-spin">
      <div class="stage">
        <div class="dot-spin"></div>
      </div>
    </div>
  </div>
<div v-else>
  <div>
    <div v-if="render" class="container">
      <div v-if="this.paymentDetails['payment_status'].toLowerCase() == 'success' || this.paymentDetails['payment_status'].toLowerCase() == 'pending realisation'">
        <div class="success-img-holder text-center mt-5 mb-3">
          <figure>
            <img src="~@/assets/images/payment_scuccessful.png" alt="" />
          </figure>
          <figcaption class="mb-4">
            <h1>Payment Successful!</h1>
            <span>Thank you for an opportunity to Insure you!!!</span>
          </figcaption>
        </div>
        <div class="prop-submission">
          <span
            >Your proposal is submitted successfully to insurance company</span
          >
          <div class="d-flex prop-submission-holder">
            <div class="prop-submission-inner">
              <h5>Proposal Number</h5>
              <b>{{this.paymentDetails['proposal_id']}}</b>
            </div>
            <div class="prop-submission-inner">
              <h5>Payment Status</h5>
              <b v-if="this.paymentDetails['payment_status'] == 'success'">Success</b>
              <b v-else>{{this.paymentDetails['payment_status']}}</b>
            </div>
          </div>
          <div>
          <button 
            v-if="this.manuId == 'TATA' "
            class="d-flex dwnld-btn  align-items-center justify-content-center " 
             >
            <img src="~@/assets/images/download-arw.png" alt="" />
            Download Payment Receipt
          </button>
          
          <button
           v-else
            class="d-flex dwnld-btn align-items-center justify-content-center"
            @click="downloadReceiptEvent()"
          >
            <img src="~@/assets/images/download-arw.png" alt="" />
            Download Payment Receipt
          </button>
        </div>
          <br>
          <button
            class="d-flex dwnld-btn align-items-center justify-content-center"
            @click="redirectIPru()"
          >
            Upload documents
          </button>
        </div>
      </div>
      <div v-else>
        <div class="failed-img-holder text-center mt-5 mb-3">
          <figure>
            <img src="~@/assets/images/payment_failed.png" alt="" />
          </figure>
          <figcaption class="mb-4">
            <h1>Payment Failed!</h1>
            <span>An error accurred while processing your payment</span>
          </figcaption>
        </div>
        <div class="try-btn mt-4">
          <button @click="resumejourney()" type="submit">
            Try Again
            <i><img src="~@/assets/images/next-arrow.png" alt="" /></i>
          </button>
        </div>
      </div>
      <div class="blue-bg-section text-center">
        <h4>In case if you need any help</h4>
        <div class="d-flex align-items-center justify-content-center">
          <div class="blue-bg-section-inner">
            <h5>Contact us</h5>
            <b>{{this.paymentDetails['Mobile']}}</b>
          </div>
          <div class="blue-bg-section-inner">
            <h5>Email Us</h5>
            <b>{{this.contactEmail}}</b>
          </div>
          <div class="blue-bg-section-inner">
            <h5>Your RM</h5>
            <b>{{ this.paymentDetails['Name'] }} : {{ this.paymentDetails['Mobile']}}</b>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import axios from "axios";
import Loading3 from "@/components/loading3.vue";
//import {getDistributer} from '@/mixins/common';
export default {
  name: "paymnt",
  mixins:[],
  props: {
    msg: String,
  },
  components: {Loading3},
  data() {
    return {
      paymentStatus: "",
      rmName: "",
      rmMobileNumber: "",
      paymentDetails: [],
      render:false,
      transactionId:"",
      loading: false,
      recieptResp:[],
      manuId:"",
      configData: "",

    };
  },
  mounted() {
    // this.paymentResponse();
    this.getPayment()
    
    if(this.$store.state.configData) {
      this.configData = this.$store.state.configData;
    }
    this.contactEmail = this.configData["DISTRIBUTER"]["contactEmail"];
    this.contactNumber = this.configData["DISTRIBUTER"]["contactNumber"];
    let sp = JSON.parse(sessionStorage.getItem("selected_plan_data"))
    this.manuId= sp.insuranceAndProducts.insuranceCompanyCode

    
  },
  methods: {
    resumejourney(){
      if(sessionStorage.getItem('proposal_ui_id')) {
        this.proposalUiId = JSON.parse(sessionStorage.getItem('proposal_ui_id'));
      }
	
	    let rmData = JSON.parse(sessionStorage.getItem("rm_data"));
      console.log("rm",rmData);
      let transId= rmData['transaction_id'];
      this.$router.push(new URL(location).origin+'/#/proposaldetailscheckdiy?proposalId='+this.proposalUiId+'&transactionId='+transId);


    },
    downloadReceiptEvent(){
      this.loading = true;
      this.getProposalById(this.paymentDetails['proposal_ui_id']);
    },
    getProposalById(proposalUiId) {
        let qData = [proposalUiId];
        var headers = {
            Authorization: "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
            "Content-Type": "application/json",
        };
        this.backendApi("getProposalDetails", qData, headers, "get")
        .then((response) => {
            let proposalDetails = response.data.data[0];
            let prop_json = JSON.parse(proposalDetails.proposal_json);
            this.downloadReceipt(prop_json);
        }) 
        .catch((error) => {
          console.log("error msg block getProposalById", error);
        });
    },
    redirectIPru()
    {

      let filledData;
      if (sessionStorage.getItem('filledData')) {
        filledData = JSON.parse(sessionStorage.getItem("filledData"));
      }
      if(filledData['manufacturerId']=="TATA")
      {
        let link = "/#/upload-doc-diy?distributorID=" + this.distributorID + "&insuranceCompanyCode="+filledData['manufacturerId']+"&applicationNo="+filledData.fieldGroups.traceInfo.fields.manuApplicationNo.input+"&productCode="+filledData["productId"];
        window.location.href = new URL(location).origin + link;
      }
      else
      {
        var  headers = {
          Authorization: "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
          "Content-Type": "application/json",
        };
        let qData = [this.paymentDetails['proposal_ui_id']];
        this.backendApi("getResumeURL", qData, headers, "get")
          .then((response) => {
            if(response == 'error') {
              self.apiError = true;
            } else if(response && response.data) {
              if(response.data[1]['resumeURL']!='')
                window.location.href = response.data[1]['resumeURL'];
            }
          })
          .catch((error) => {
            console.log('error msg block dp', error);
          });
      }
    },
    downloadReceipt(prop_json)
    {
      let reqData= 
      {
        "data":
        {
          "distributor": {
              "distributorID": prop_json.fieldGroups.distributor.fields.distributorID.input,
              "agentID": "",
              "salesChannel": "",
              "varFields": []
          },
          "insuranceCompanyCode": prop_json.manufacturerId,
          "applicationNo": this.paymentDetails['proposal_id'],
          "productCode":prop_json.productId,
          "policyNo": "",
          "quoteId": "",
          "individualDetails": {
              "firstName": prop_json.fieldGroups.proposerDetails.fieldGroups.personalDetails.fields.firstName.input,
              "lastName": prop_json.fieldGroups.proposerDetails.fieldGroups.personalDetails.fields.lastName.input,
              "dob": prop_json.fieldGroups.proposerDetails.fieldGroups.personalDetails.fields.dateOfBirth.input,
              "mobileNumber": parseInt(prop_json.fieldGroups.proposerDetails.fieldGroups.personalDetails.fields.mobileNumber.input)
          },
          "fileDetails": {
              "SBDocCategory": "receiptDownload",
              "SBDocId": "firstReceiptDownload",
              "varFields": [
                  {
                      "fieldName": "",
                      "fieldValue": ""
                  }
              ]
          }
        }
      };

      let headers = {};

      this.backendApi("downloadReceipt", reqData, headers)
            .then((response) => {
              console.log("resp",response)
              let recieptResp;
              try{
               recieptResp=JSON.parse(response.data)
              this.loading = false;
              }
              catch(error)
              {
              }
                
              if(recieptResp.errors)
              {
                let msg=['We are facing some issue while downloading the receipt']
              this.$router.push({ path: '/alert-diy', query: { msg: msg }});
                // alert("Download Receipt not available");
              }
              else{
                if(response.data){
                  var pdf = response.data;
                  console.log("pdf", pdf);
                  const linkSource = `data:application/pdf;base64,${pdf}`;
                  const downloadLink = document.createElement("a");
                  const fileName = "PaymentReceipt.pdf";
                  downloadLink.href = linkSource;
                  downloadLink.download = fileName;
                  downloadLink.click();
                }
                else{
                  let msg=['We are facing some issue while downloading the receipt']
              this.$router.push({ path: '/alert-diy', query: { msg: msg }});
                  // alert("Download Receipt not available");
                }
              }
              
              
            })
            .catch((error) => {
              console.log('error occured in download receipt', error);
              self.loading = false;
            });


    },
    display(data)
    {
     this.render=true
      this.paymentDetails= JSON.parse(JSON.stringify(data))
      

    },
    getPayment(){
      this.render=false;
      let rmId = this.$route.query.transactionId;
      let arr = rmId.split("/");
      rmId = arr[0];

        let qData=[rmId]
         let headers = {};
       this.backendApi("getPaymentDetails", qData, headers, "get")
        .then((response) => {
          this.display(response.data.data);
        })
        .catch((error) => {
          console.log("error msg block dp", error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
//@import "~@/assets/scss/components/paymentsuccess.scss";
// @import "~@/assets/scss/components/paymentfailed.scss";
</style>