<template>
  <div class="text-center" v-if="loading" style="padding-top: 50px">
    <loadingPage />
  </div>
  <div v-else class="">
    <Header />

    <div class="wrapper ckyc_section">
      <div class="inner-wrapper">
        <router-link to="/addon-rider">
          <div class="d-flex align-items-center py-4">
            <em class="icon-arrow-left me-3"></em>
            <h3 class="mb-0">Back</h3>
          </div>
        </router-link>
        <!-- <div
          v-if="selectedPlan"
          class="policyname-text d-flex align-items-center justify-content-between mb-3"
        >
          <div class="d-flex align-items-center">
            <span class="me-3">
              <img :src="selectedPlan?.supportingData?.insCompanyLogo" alt="image" />
            </span>
            <h6>Family Health Suraksha : Platinum Smart</h6>
          </div>
        </div> -->
        <div class="row">
          <div class="col-12 col-sm-12 col-md-8 col-lg-8">
            <div class="tabs_ckyc">
              <ul class="nav nav-tabs wizard-step" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    <div class="cir">
                      <i class="bi bi-person"></i>
                      <span class="bi bi-check"></span>
                    </div>
                    <span class="txt">cKYC</span>
                    <div class="line"></div>
                  </button>
                </li>
                <template v-for="(data, ind) in proposalJson.fieldGroups" :key = "ind">
                  <li class="nav-item" role="presentation" v-if="(ind !='traceInfo' && ind != 'distributor') && data.visibility != 'false'">
                    <button
                      class="nav-link disabled"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      <div class="cir">
                        <i class="bi bi-person"></i>
                        <span class="bi bi-check"></span>
                      </div>
                      <span class="txt">
                        {{ checkArray(data) ? data[0].label : data.label }}</span>
                      <div class="line"></div>
                    </button>
                  </li>
                </template>
              </ul>
            </div>
            <div class="ckyc_content">
              <h4>Section to capture the basic cKYC details</h4>
              <!-- <span class="base-reg">Section to capture the basic cKYC details</span> -->
              <div class="ckyc_details pt-3 mb-3">
                <div class="row mb-3">
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="floating-label">
                      <input
                        class="floating-input"
                        type="text"
                        v-model="panNumber"
                        placeholder=""
                        maxlength="10"
                      />
                      <label>PAN Number</label>
                      <span class="text-danger">{{
                        errorMsg["pan_number"]
                      }}</span>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="floating-label">
                      <input
                        class="floating-input floating-input-date"
                        type="date"
                        v-model="dateOfBirth"
                        placeholder="Date of Birth"
                      />
                      <label>Date of Birth</label>
                    </div>
                    <span class="text-danger">{{ errorMsg["dob"] }}</span>
                  </div>
                </div>
                <div class="row mb-3 text-center">
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <button
                      type="button"
                      class="btn btn-warning rounded-pill text-white mx-2 fetchKycBtn"
                      v-on:click="fetchKyc()"
                      :disabled="!panNumber && !dateOfBirth"
                    >
                      <span>Fetch KYC</span>
                    </button>
                  </div>
                </div>
              </div>

              <!-- when CKYC details is Successful -->
              <div class="ckyc_success mb-3" v-if="kycStatus == 'approved'">
                <p class="success_msg">
                  Your CKYC is Successfully received and updated in the Proposer
                  form.
                </p>
                <p>
                  You will now be redirected to Proposal page, to fill the
                  missing details.
                </p>
                <br />
                <router-link to="/proposer-details">
                  <button
                    type="button"
                    class="btn btn-warning rounded-pill text-white mx-2"
                  >
                    <span>Continue</span>
                    <em class="bi bi-chevron-right ms-2"></em>
                  </button>
                </router-link>
              </div>
              <!-- when CKYC details fails to fetch -->
              <div class="ckyc_fails mb-3" v-if="kycRedirectUrl">
                <p class="fail_msg mb-3">
                  <span class="c1"
                    >Sorry could not Fetch details from CKYC.</span
                  >
                  You will be redirected to insurance company's website in 5
                  seconds. Kindly close the window once you have completed the
                  KYC process
                </p>
                <p>
                  If you are not redirected to the website, please click here
                  <a target="_blank" :href="kycRedirectUrl"
                    ><u>Verify KYC</u></a
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              
            <div class="content sticky-top">
                <div class="pd-right" v-if="selectedPlan">
                  <div class="pd-right-section1 shadow">
                    <div class="d-flex justify-content-between align-items-center poposer-header">
                      <h3>Policy Details</h3>
                      <div class="ref-num">
                        <h6 v-if="this.applicationNo != '' && this.applicationNo != null " class="appno">Application Number : {{this.applicationNo}}</h6>
                        <h6 v-if="this.uiQuoteId != '' && this.uiQuoteId != null " class="propno">CRN : {{this.uiQuoteId}}</h6>
                        <div class="d-flex justify-content-end" v-if="selectedPlan.other.biUrl">
                          <a :href="selectedPlan.other.biUrl" target="_blank">
                            <button class="btn btn-warning rounded-pill text-white p-1 px-3"> Benefit Illustration </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="policy-dts-wrap">
                      <div class="policy-name">
                        <figure>
                          <img :src="selectedPlan?.supportingData?.insCompanyLogo" alt="image" />
                        </figure>
                        <h6 class="mb-0 me-auto">
                          {{ selectedPlan?.insuranceAndProducts?.productName }}
                          <br> {{ selectedPlan.productDetails.planOption.planName }}
                        </h6>
                        <a :href="
                          selectedPlan?.supportingData?.Messages?.brochureLink
                        " target="_blank">
                          <em class="download-new"></em>
                        </a>
                      </div>
                      <div class="p-details">
                        <ul class="policy-item-detail1 mt-4">
                          <li>
                            <h6 class="mb-0">Base Premium - 
                              {{
                                currency(selectedPlan.productDetails.premiumForEachPolicyTerm[selectedPolicyIndex].policyTerm)
                              }} 
                              Year
                            </h6>
                            <span class="fs-16 base-med"><em class="rupee">&#x20B9;</em>
                            {{
                              currency(selectedPlan.productDetails.premiumForEachPolicyTerm[selectedPolicyIndex].premiumForEachPPO[0].premiumForEachPPF[0].premiumValue)
                            }}
                            </span>
                          </li>
                          <li>
                            <h6>Sum Insured</h6>
                            <span> ₹ {{
                              convertInLakh(
                                selectedPlan?.individualDetails[0]?.sumInsured
                              )
                            }}</span>
                          </li>
                          <li>
                            <h6>Members Insured</h6>
                            {{ noOfAdult }} {{ (noOfAdult > 1) ? 'Adults' : 'Adult' }}
                            <span v-if="noOfChild > 0">  &amp; {{ noOfChild }} {{ (noOfChild > 1) ? 'Children' : 'Child'}}</span>
                          </li>
                          <li>
                            <h6>Policy Tenure</h6>
                            <span>
                              <!--{{ selectedPlan?.productDetails?.policyTermUnit }}-->
                              {{
                                currency(
                                  selectedPlan.productDetails
                                    .premiumForEachPolicyTerm[selectedPolicyIndex]
                                    .policyTerm
                                )
                              }}
                              Year
                            </span>
                          </li>
                          <!-- <li>
                            <h6>Payment Frequency</h6>
                            <span>{{ selectedPlan?.productDetails?.policyTermUnit }}
                              Yearly</span>
                          </li> -->
                          <li>
                            <h6>Net Premium</h6>
                            <span><em class="rupee">&#x20B9;</em> 
                              {{
                                currency(
                                  selectedPlan.productDetails
                                    .premiumForEachPolicyTerm[selectedPolicyIndex]
                                    .premiumForEachPPO[0].premiumForEachPPF[0]
                                    .premiumValue
                                )
                              }}
                            </span>
                          </li>
                          <!-- <li>
                              <h6>Addons</h6>
                              <span>1,430</span>
                          </li> -->
                          <li>
                            <h6>GST @ 18%</h6>
                            <span> <em class="rupee">&#x20B9;</em> 
                              {{
                                currency(
                                  selectedPlan.productDetails
                                    .premiumForEachPolicyTerm[selectedPolicyIndex]
                                    .premiumForEachPPO[0].premiumForEachPPF[0]
                                    .totalTax
                                )
                              }}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul class="ttl-preminum poposer-footer">
                      <li><b>Total Premium</b></li>
                      <span>&#8377;
                        {{
                          currency(
                            selectedPlan.productDetails.premiumForEachPolicyTerm[
                              selectedPolicyIndex
                            ].premiumForEachPPO[0].premiumForEachPPF[0]
                              .totalPremiumValue
                          )
                        }}
                      </span>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import loadingPage from "@/components/loading.vue";
import $ from "jquery";
export default {
  name: "Ckyc",
  props: {

  },
  components: {
    Header,
    loadingPage,
  },
  mounted() {
    console.log('store data: ', this.$store.state.configData);
    this.configData = this.$store.state.configData;

    // Removing session data
    if(sessionStorage.getItem('filledData')) {
      sessionStorage.removeItem('filledData');
      sessionStorage.removeItem('currentTab');
      sessionStorage.removeItem('proposal_ui_id');
      sessionStorage.removeItem('filledDataTab');
    }
    
    this.requestJson = JSON.parse(sessionStorage.getItem("request_json"));
    this.selectedPlan = JSON.parse(sessionStorage.getItem("selected_plan_data"));
    this.quoteResponseId = JSON.parse(sessionStorage.getItem("quote_response_id"));

    console.log('this.requestJson: ', this.requestJson);
    console.log('this.selectedPlan: ', this.selectedPlan);

    this.selectedPolicyIndex = this.getSelectedPolicyIndex(this.requestJson.data.product.policyTerm);

    this.channel_type = JSON.parse(sessionStorage.getItem("channel_type"));

    if (sessionStorage.getItem("rm_data")) {
      this.rmData = JSON.parse(sessionStorage.getItem("rm_data"));
      let sessionData = sessionStorage.getItem("userProfile");
      if(sessionData != null)
      {
        this.userData=JSON.parse(sessionData)
      }
    }
    this.getProposal();
  },
  data() {
    return {
      loading: false,
      configData: "",
      rmData: "",
      requestJson: "",
      proposalJson: "",
      selectedPlan: "",
      userData: "",
      channel_type: "",
      panNumber: "",
      dateOfBirth: "",
      quoteResponseId: "",
      kycResponse: "",
      kycStatus: "",
      kycRedirectUrl: "",
      errorMsg: [],
      selectedPolicyIndex: "",
    };
  },
  methods: {
    getProposal() {
      this.loading = true;
      var self = this;
      let reqData = {
        "productId": this.selectedPlan.insuranceAndProducts.productCode,
        "manufacturerId": this.selectedPlan.insuranceAndProducts.insuranceCompanyCode,
        //"planId": this.selectedPlan.productDetails.planOption.planId,
        "version": 1
      };
      // let reqData = {
      //   productId: "2825",
      //   manufacturerId: "HDFCERGO",
      //   version: 1,
      // };
      let headers = {};

      this.backendApi("getProposal", reqData, headers, "get")
        .then((response) => {
          this.loading = false;

          console.log("proposal response: ", response);

          if (response.status == "error") {

            let msg = [response.data.detail];
            this.$router.push({ path: '/networkalert', query: { backUrl: 'proposer-page', msg: msg } });

          } else if (response.data.errors.length > 0) {

            let msg = [];
            for (let i = 0; i < response.data.errors.length; i++) {
              msg.push(response.data.errors[i]["errorIdentifier"]);
            }
            this.$router.push({ path: '/networkalert', query: { backUrl: 'proposal-page', msgError: "We are facing some issue while fetching proposal data", reqId: response.data.reqId, msg: msg } });

          } else {
            this.proposalJson = response.data.data;

            
            
          }
        })
        .catch((error) => {
          console.log("error msg block : get proposal", error);
          self.loading = false;
          // self.apiError = true;
          //   let msg=['We are facing some issue from while fetching quotation API']

          //   this.$router.push({ path: '/networkalert', query: {backUrl:'policy-quote', msg: msg }});
        });
    },
    fetchKyc() {
      console.log('fetchKyc called: ', this.panNumber, 'DOB: ', this.dateOfBirth);
      this.errorMsg = [];
      var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

      if(!this.panNumber) {
        this.errorMsg["pan_number"] = "Please enter pan card number";
      } else if(!this.dateOfBirth) {
        this.errorMsg["dob"] = "Please enter date of birth";
      } else {
        if(regpan.test(this.panNumber)) {
          // valid pan card number
          this.getCkycDetails();
        } else {
          // invalid pan card number
          this.errorMsg["pan_number"] = "Invalid pan card number";
        }
      }
      
    },
    getCkycDetails() {
      var self = this;
      this.loading = true;
      

      let reqData = {
        "data":{
          "personalInformation": {
          "dateOfBirth": this.dateFormat(this.dateOfBirth),
          "email": this.userData.contactDetails.emailId,
          "mobileNumber": this.userData.contactDetails.mobileNumber,
          "zipCode": this.userData.zipCode,
          "pan": this.panNumber
        },
   
        "product": {
          "insuranceCompanyCode": this.selectedPlan.insuranceAndProducts.insuranceCompanyCode,
          "productId": ""
        },
        "trackInfo": {
          "manufacturerQuoteID": this.getManuQuoteID(this.selectedPlan.insuranceAndProducts.insuranceCompanyCode),
          "manuApplicationNo": this.getManuApplicationNo(this.selectedPlan.insuranceAndProducts.insuranceCompanyCode),
          "KYCRequestID": this.quoteResponseId
        },
        "distributor": {
          "distributorID": this.configData["CONSUMER"]["consumerId"],
          "agentID": "agentId",
          "salesChannel": "online",
          "channelType": this.channel_type
        },
        "kycInfo": {
          "ReturnURL": "https://www.1silvebullet.tech"  
        }
      }
    };

      // Save request json  
      //sessionStorage.setItem("request_json", JSON.stringify(reqData));
      let headers = {};

      this.backendApi("getCkyc", reqData, headers)
        .then((response) => {
          this.loading = false;
          this.kycResponse = response.data.data;
          this.kycStatus = this.kycResponse.kycInfo.Status;
          if(this.kycStatus == "approved") {
            sessionStorage.setItem("kyc_response", JSON.stringify(this.kycResponse));
            setTimeout(function() { 
              self.$router.push("proposer-details");
            }, 2000);
            
          } else {
            sessionStorage.removeItem('kyc_response');
            this.kycRedirectUrl = this.kycResponse.kycInfo.RedirectURL;
            setTimeout(function() { 
              window.open(self.kycRedirectUrl, '_blank').focus();
            }, 3000);
          }

        })
        .catch((error) => {
          console.log('error msg block : get kyc', error);
          self.loading = false;
        });
    },
    dateFormat(inputDate) {
      var date = new Date(inputDate);
      if (!isNaN(date.getTime())) {
        let d = (date.getMonth() + 1);
        if(d <= 9){
          d = '0'+ d;
        }
        return date.getDate() + '-' + d + '-' + date.getFullYear();
      }
    },
    checkArray(data) {
      return Array.isArray(data);
    },
    currency(amt) {
      let tmpAmt = parseFloat(amt).toFixed(2);
      return new Intl.NumberFormat().format(tmpAmt);
    },
    getSelectedPolicyIndex(pTerm) {
      let itemIndex = this.selectedPlan.productDetails.premiumForEachPolicyTerm.findIndex(item => item.policyTerm == pTerm);
      if(itemIndex > -1) {
        return itemIndex;
      }
    },
    getManuQuoteID(productCode) {
      if(productCode == 'HDFCERGO') {
        return this.selectedPlan.trackInfo.manufacturerQuoteID;
      } else if(productCode == 'NBHI') {
        return 'Guid';
      } else if(productCode == 'ABHI') {
        return this.panNumber;
      } else {
        return this.selectedPlan.trackInfo.manufacturerQuoteID;
      }
    },
    getManuApplicationNo(productCode) {
      if(productCode == 'HDFCERGO') {
        return this.selectedPlan.trackInfo.manufacturerQuoteID;
      } else if(productCode == 'NBHI') {
        return 'Guid';
      } else if(productCode == 'ABHI') {
        return this.panNumber;
      } else {
        return this.selectedPlan.trackInfo.manufacturerQuoteID;
      }
    },
    convertInLakh(amt) {
      if (amt < 10000000) {
        return amt / 100000 + " Lac";
      } else {
        return amt / 10000000 + " Cr.";
      }
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>