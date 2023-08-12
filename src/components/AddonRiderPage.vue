<template>
  <div class="text-center" v-if="loading" style="padding-top: 50px;">
    <loadingPage />
  </div>
  <div v-else class="">
    <Header />

    <div class="wrapper">
      <div class="inner-wrapper">
        <router-link to="/multi-quote">
          <div class="d-flex align-items-center py-4">
            <em class="icon-arrow-left me-3"></em>
            <h3 class="mb-0">Back</h3>
          </div>
        </router-link>

        <div v-if="selectedPlan">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-8 col-lg-8">
              <div class="addontopcard">
                <!-- <div class="addonname">
                  <div class="img-box">
                    <img :src="selectedPlan?.supportingData?.insCompanyLogo" alt="image" />
                  </div>
                  <div class="desc">
                    {{ selectedPlan.insuranceAndProducts.productName }}<br>
                     {{ selectedPlan.productDetails.planOption.planName }}
                  </div>
                </div> -->
                <ul class="addon-info ms-auto">
                  <li class="d-flex align-items-center">
                    <router-link to="/plan-details" class="d-flex align-items-center">
                      <em class="favorites"></em>
                      <span class="mx-2">See all Features</span>
                      <em class="iconpng icon-pngrightarrow"></em>
                    </router-link>
                  </li>
                  <li class="d-flex align-items-center">
                    <a class="d-flex align-items-center" target="_blank" :href="selectedPlan?.supportingData?.Messages?.linkForHospitalLocator">
                      <em class="hospital-3"></em>
                      <span class="mx-2">{{
                        getHospitalsNumbers(selectedPlan.supportingData.Messages.HospitalLocator.hospitalList)
                      }} Cashless Hospitals</span>
                      <em class="iconpng icon-pngrightarrow"></em>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="white-bg floating-form">
                <div class="block">
                  <h4>Cover Amount</h4>
                  <!-- <p>Medical treatments are getting costlier every year. Higher the cover better it is.</p> -->
                  <div class="slct-box">
                    <div class="floating-label mb-0">
                      <select class="floating-select format" @change="policyCoverChangeAmt()"
                        v-model="selectedPlan.individualDetails[0].sumInsured">
                        <option v-for="(data, ind) in this.responseData.supportingData.sumInsuredList" :key="ind" :value="data">
                          <em class="rupee">&#x20B9;</em> {{ convertInLakh(data) }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="block">
                  <h4>Policy Period</h4>
                  <!-- <p>Choosing a multi-year plan saves your money and the trouble of remembering yearly renewals.</p> -->
                  <div class="input-group input-type-radio mt-3">

                    <ul class="three">
                      <li class="" v-for="(dt2, ind2) in selectedPlan.productDetails.premiumForEachPolicyTerm" :key="ind2">

                        <input type="radio" :id="dt2.policyTerm" name="plan" v-bind:value="dt2.policyTerm"
                          v-model="selectedPolicyTerm">
                        <label :for="dt2.policyTerm" @click="chnagePolicyPeriod(dt2.policyTerm, ind2)">
                          <div class="years_sec"> {{ dt2.policyTerm }} Year  @  <strong class="text-primary"><em
                                class="rupee">&#x20B9;</em> {{
                                  currency(dt2.premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue)
                                }}</strong></div>
                          <!-- <div class="">&nbsp;</div> -->
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="block add-ons" v-if="addOnList">
                  <h4>Add-Ons</h4>
                  <!-- <p>You should get these additional benefits to enhance your current plan</p> -->
                  <ul class="rider-box">
                    <li v-for="(data, ind) in addOnList" :key = "ind">
                      <div class="top">
                        <h5>{{ data.optionName }}</h5>
                        <div class="price cursor-pointer d-none loader-img" :id="'loader_img_'+data.optionSelected">
                          <img src="../assets/images/loading_gif.gif" alt="image">
                        </div>
                        <!-- <span class="fw-bold" :id="'option_value_'+data.optionSelected">{{getAddOnSelectionOV(data.optionSelected, this.selectedPlan.productDetails.healthCovers)}}</span> -->
                        <span :id="'option_value_'+data.optionSelected" :class="(checkAddOnSelection(data.optionSelected, this.selectedPlan.productDetails.healthCovers)?'':'d-none')">
                          <select @change="updateAddOnsValue($event, data)" v-if="data.values.length > 0">
                            <option :value="item.value" v-for="(item, ind2) in data.values" :key="ind2" :selected="getAddOnSelectionOV(item.value, data.optionSelected, this.selectedPlan.productDetails.healthCovers)">
                              {{ item.text }}
                            </option>
                          </select>
                        </span>
                        <div :class="'price cursor-pointer '+(checkAddOnSelection(data.optionSelected, this.selectedPlan.productDetails.healthCovers)?'d-none':'')" :id="'add_button_'+data.optionSelected" @click="addAddOns(data)">
                          <em class="bi bi-plus fs-4 me-2"></em>
                          <span class="">Add</span>
                        </div>
                        <div :class="'price cursor-pointer '+(checkAddOnSelection(data.optionSelected, this.selectedPlan.productDetails.healthCovers)?'':'d-none')" :id="'remove_button_'+data.optionSelected" @click="removeAddOns(data)">
                          <em class="bi bi-trash fs-4"></em>
                          <!-- <span class="">Remove</span> -->
                        </div>
                        <!-- <div v-if="data.values.length > 0" :class="'price cursor-pointer '+(checkAddOnSelection(data.optionSelected, this.selectedPlan.productDetails.healthCovers)?'':'d-none')" :id="'edit_button_'+data.optionSelected" @click="editAddOns(data)" data-bs-target="#addOnModal" data-bs-toggle="modal">
                          <em class="bi bi-pencil fs-4"></em>
                        </div> -->
                      </div>
                      <!-- <p v-for="(data2, ind2) in data.info" :key="ind2">{{ data2.shortData }}</p> -->
                      <p>{{ data.optionDesc }}</p>
                    </li> 
                    
                  </ul>
                </div>
                <!-- <div class="pad30">
                  <h4>Recommended Riders</h4>
                  <p>Riders are a smart way to enhance your cover at a fraction of the cost.</p>
                  <br/>
                  <ul class="like-table">
                    <li>
                      <div class="company">
                        <img src="../assets/images/logo-img1.jpg" alt="image" />
                        <span>Super Health Plus top up</span>
                      </div>
                      <div class="cover">
                        <small>Cover</small>
                        <select class="normal-select">
                          <option value="1">5 Lacs</option>
                          <option value="2" selected>10 Lacs</option>
                          <option value="3">15 Lacs</option>
                          <option value="4">20 Lacs</option>
                          <option value="5">25 Lacs</option>
                        </select>
                      </div>
                      <div class="member">
                        <label>Member(s)</label>
                        <select class="normal-select">
                          <option value="1">All</option>
                          <option value="2">Self</option>
                          <option value="3">Spouse</option>
                          <option value="4">Son</option>
                        </select>
                      </div>
                      <div class="price">
                        <em class="bi bi-plus fs-4 me-2"></em>
                        <span class=""><em class="rupee">&#x20B9;</em>3,461</span>
                      </div>
                    </li>
                    <li>
                      <div class="company">
                        <img src="../assets/images/nbhi-logo.png" alt="image" />
                        <span>Health Recharge</span>
                      </div>
                      <div class="cover">
                        <small>Cover</small>
                        <select class="normal-select">
                          <option value="1">5 Lacs</option>
                          <option value="2" selected>10 Lacs</option>
                          <option value="3">15 Lacs</option>
                          <option value="4">20 Lacs</option>
                          <option value="5">25 Lacs</option>
                        </select>
                      </div>
                      <div class="member">
                        <label>Member(s)</label>
                        <select class="normal-select">
                          <option value="1" selected>All</option>
                          <option value="2">Self</option>
                          <option value="3">Spouse</option>
                          <option value="4">Son</option>
                        </select>
                      </div>
                      <div class="price">
                        <em class="bi bi-plus fs-4 me-2"></em>
                        <span class=""><em class="rupee">&#x20B9;</em>2,987</span>
                      </div>
                    </li>
                    <li>
                      <div class="company">
                        <img src="../assets/images/logo-img3.jpg" alt="image" />
                        <span>Health Suraksha Top Up</span>
                      </div>
                      <div class="cover">
                        <small>Cover</small>
                        <select class="normal-select">
                          <option value="1">5 Lacs</option>
                          <option value="2">10 Lacs</option>
                          <option value="3">15 Lacs</option>
                          <option value="4">20 Lacs</option>
                          <option value="5" selected>25 Lacs</option>
                        </select>
                      </div>
                      <div class="member">
                        <label>Member(s)</label>
                        <select class="normal-select">
                          <option value="1" selected>All</option>
                          <option value="2">Self</option>
                          <option value="3">Spouse</option>
                          <option value="4">Son</option>
                        </select>
                      </div>
                      <div class="price">
                        <em class="bi bi-plus fs-4 me-2"></em>
                        <span class=""><em class="rupee">&#x20B9;</em>4,678</span>
                      </div>
                    </li>
                    <li>
                      <div class="company">
                        <img src="../assets/images/logo-img3.jpg" alt="image" />
                        <span>Health Suraksha Top Up Plus</span>
                      </div>
                      <div class="cover">
                        <small>Cover</small>
                        <select class="normal-select">
                          <option value="1">5 Lacs</option>
                          <option value="2">10 Lacs</option>
                          <option value="3">15 Lacs</option>
                          <option value="4">20 Lacs</option>
                          <option value="5" selected>25 Lacs</option>
                        </select>
                      </div>
                      <div class="member">
                        <label>Member(s)</label>
                        <select class="normal-select">
                          <option value="1" selected>All</option>
                          <option value="2">Self</option>
                          <option value="3">Spouse</option>
                          <option value="4">Son</option>
                        </select>
                      </div>
                      <div class="price">
                        <em class="bi bi-plus fs-4 me-2"></em>
                        <span class=""><em class="rupee">&#x20B9;</em>5,899</span>
                      </div>
                    </li>
                    <li>
                      <div class="company">
                        <img src="../assets/images/logo-img3.jpg" alt="image" />
                        <span>Health Medisure Super Top Up</span>
                      </div>
                      <div class="cover">
                        <small>Cover</small>
                        <select class="normal-select">
                          <option value="1">5 Lacs</option>
                          <option value="2">10 Lacs</option>
                          <option value="3">15 Lacs</option>
                          <option value="4">20 Lacs</option>
                          <option value="5" selected>25 Lacs</option>
                        </select>
                      </div>
                      <div class="member">
                        <label>Member(s)</label>
                        <select class="normal-select">
                          <option value="1" selected>All</option>
                          <option value="2">Self</option>
                          <option value="3">Spouse</option>
                          <option value="4">Son</option>
                        </select>
                      </div>
                      <div class="price">
                        <em class="bi bi-plus fs-4 me-2"></em>
                        <span class=""><em class="rupee">&#x20B9;</em>4,980</span>
                      </div>
                    </li>
                  </ul>
                </div> -->

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
                              <span>
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
                      <div class="d-flex align-items-center justify-content-center mt-3 pb-3">
                        <router-link to="/ckyc" tag="button" class="btn btn-warning text-white">
                          <span class="fs-18 base-med">Proceed to Proposal</span>
                          <em class="bi bi-chevron-right ms-3"></em>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- EDIT: AddOns Option Values Modal -->
    <div
      class="modal fade"
      id="addOnModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="emailModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="emailModalTitle">Edit Add Ons Option Values</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            </button>
          </div>
          <div class="modal-body">
            <div class="benefit-input">
              <select class="form-select" name="addonvalue" id="addonvalue" v-model.trim="editAddOnsOptionValue">
                <option :value="item.value" v-for="(item, ind) in editAddOnsData.values" :key="ind">
                  {{ item.text }}
                </option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" @click="updateAddOnsValue()">Apply</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { getAddOnsList } from '@/mixins/common';
import loadingPage from "@/components/loading.vue";
import $ from "jquery";
export default {
  name: 'addonrider',
  props: {

  }, 
  components: {
    Header,
    loadingPage
  },
  mixins: [getAddOnsList],

  mounted() {
    // Inside Mounted

    console.log('store data: ', this.$store.state.configData);
    this.configData = this.$store.state.configData;

    this.requestJson = JSON.parse(sessionStorage.getItem("request_json"));
    this.selectedPlan = JSON.parse(sessionStorage.getItem("selected_plan_data"));

    console.log('this.requestJson: ', this.requestJson);
    console.log('this.selectedPlan: ', this.selectedPlan);

    this.channel_type = JSON.parse(sessionStorage.getItem("channel_type"));

    if (sessionStorage.getItem("rm_data")) {
      this.rmData = JSON.parse(sessionStorage.getItem("rm_data"));
      let sessionData = sessionStorage.getItem("userProfile");
      if(sessionData != null)
      {
        this.userData=JSON.parse(sessionData)
      }
    }

    this.policyCoverAmtList = this.configData["POLICY_COVER_AMOUNT"];

    if(!sessionStorage.getItem("request_json_flag_proposal")) {
      // Modify Request JSON for Single Quote
      this.requestJson.data.typeOfQuote = 'Single Quote';
      this.requestJson.data.finalizeQuote = 'No';
      this.requestJson.data.product.insuranceAndProducts[0].insuranceCompanyCode = this.selectedPlan.insuranceAndProducts.insuranceCompanyCode;
      this.requestJson.data.product.insuranceAndProducts[0].productCode = [this.selectedPlan.insuranceAndProducts.productCode];
      //this.requestJson.data.product.supportingData[0].insCompanyLogo = [this.selectedPlan.supportingData.insCompanyLogo];

      this.requestJson.data.product.policyTerm = 1;
      this.requestJson.data.product.planOption.planId = this.selectedPlan.productDetails.planOption.planId;
      for(let i=0; i < this.requestJson.data.personalInformation.individualDetails.length; i++) {
        this.requestJson.data.personalInformation.individualDetails[i].quoteAmount = parseInt(this.selectedPlan.individualDetails[0].sumInsured);
      }

    } else {
      sessionStorage.removeItem('request_json_flag_proposal');
    }

    this.selectedPolicyTerm = this.requestJson.data.product.policyTerm;
    this.selectedPolicyIndex = this.getSelectedPolicyIndex(this.requestJson.data.product.policyTerm);

    console.log('Updated requestJson: ', this.requestJson);

    this.getQuotationApi();
    
    this.addOnList = getAddOnsList()[this.selectedPlan.productDetails.planOption.planId];
    console.log("this.addOnList: ", this.addOnList);

  },
  data() {
    return {
      configData: "",
      rmData:null,
      noOfAdult:"",
      applicationNo: "",
      uiQuoteId: "",
      noOfChild: "",
      userData:{},
      loading: false,
      loading2: false,
      responseData: "",
      productUiData: "",
      addOnList: "",
      requestId: "",
      quoteResponseID: "",
      requestJson: "",
      selectedPlan: "",
      policyCoverAmtList: "",
      quoteAmount: 500000,
      selectedPolicyTerm: 1,
      selectedPolicyIndex: 0,
      pollRequestId: "",
      polling: null,
      errorFlag: "",
      channel_type: "",
      editAddOnsData: "",
      editAddOnsOptionValue: "",
      pevEditAddOnOptionValue: "",
    };
  },
  methods: {
    // Function for Quotation API
    getQuotationApi() {
      var self = this;
      this.loading = true;
      let reqData = this.requestJson;
      console.log('get quotation called');
      // Save request json  
      sessionStorage.setItem("request_json", JSON.stringify(reqData));
      let headers = {};

      this.backendApi("getQuotation", reqData, headers)
        .then((response) => {
          this.loading = false;

          if (response.status == "error") {
            
            let msg = [response.data.detail];
            this.$router.push({ path: '/networkalert', query: {backUrl:'multi-quote', msg: msg }});

          } else if(response.data.errors.length>0) {
            
            let msg = [];
            for(let i=0; i<response.data.errors.length; i++)
            {
              msg.push(response.data.errors[i]["errorIdentifier"]);
            } 
            this.$router.push({ path: '/networkalert', query: {backUrl:'multi-quote',msgError:"We are facing some issue while fetching policy details data",reqId:response.data.reqId, msg:msg  }});

          } else if (response.data.data.quote && response.data.data.quote.length > 0) {

            // Success response
            this.quoteResponseID = response.data.reqId;
            this.responseData = response.data.data.quote[0];
            console.log('SQ Response: ', this.responseData);
            this.selectedPlan = this.responseData;
            sessionStorage.setItem("quote_response_id", JSON.stringify(this.quoteResponseID));
            sessionStorage.setItem("selected_plan_data", JSON.stringify(this.selectedPlan));
            this.saveQuote(response.data.data);

          } else if(response.data.errors.length == 0 && Object.keys(response.data.data).length === 0) {

            this.pollRequestId = response.data.reqId;
            this.errorFlag= true;
            setTimeout(function() {
              self.getPolicy();
              self.pollData();
            },1000);

          }
          

        })
        .catch((error) => {
          console.log('error msg block : get policy', error);
          self.loading = false;
        });
    },
    getQuotationApi2(selAddOn, ckk) {
      var self = this;
      //this.loading = true;
      let reqData = this.requestJson;
      console.log('get quotation called');
      // Save request json
      sessionStorage.setItem("request_json", JSON.stringify(reqData));
      let headers = {};
      if($("#loader_img_" + selAddOn.optionSelected).hasClass("d-none")) {
        $("#loader_img_" + selAddOn.optionSelected).removeClass("d-none");
      }
      
      if(ckk != '1') {
        $("#remove_button_" + selAddOn.optionSelected).addClass("d-none");
        if(!$("#edit_button_" + selAddOn.optionSelected).hasClass("d-none")) {
          $("#edit_button_" + selAddOn.optionSelected).addClass("d-none");
          $("#option_value_" + selAddOn.optionSelected).addClass("d-none");
        }
      }

      this.backendApi("getQuotation", reqData, headers)
        .then((response) => {
          //this.loading = false;
          $("#loader_img_" + selAddOn.optionSelected).addClass("d-none");
          // if($("#remove_button_" + selAddOn.optionSelected).hasClass("d-none")) {
          //   $("#remove_button_" + selAddOn.optionSelected).removeClass("d-none");
          // }
          if(ckk == '2') {
            if($("#add_button_" + selAddOn.optionSelected).hasClass("d-none")) {
              $("#add_button_" + selAddOn.optionSelected).removeClass("d-none");
            }
          }

          if(ckk == '3') {
            if($("#remove_button_" + selAddOn.optionSelected).hasClass("d-none")) {
              $("#remove_button_" + selAddOn.optionSelected).removeClass("d-none");
              $("#option_value_" + selAddOn.optionSelected).removeClass("d-none");
            }

            if($("#edit_button_" + selAddOn.optionSelected).hasClass("d-none") && selAddOn.values.length > 0) {
              $("#edit_button_" + selAddOn.optionSelected).removeClass("d-none");
            }
          }

          if (response.status == "error") {
            
            let msg = [response.data.detail];
            this.$router.push({ path: '/networkalert', query: {backUrl:'addonrider-page', msg: msg }});

          } else if(response.data.errors.length>0) {
            
            let msg = [];
            for(let i=0; i<response.data.errors.length; i++)
            {
              msg.push(response.data.errors[i]["errorIdentifier"]);
            } 
            this.$router.push({ path: '/networkalert', query: {backUrl:'addon-rider',msgError:"We are facing some issue while fetching policy details data",reqId:response.data.reqId, msg:msg  }});

          } else if (response.data.data.quote && response.data.data.quote.length > 0) {

            // Success response
            this.quoteResponseID = response.data.reqId;
            this.responseData = response.data.data.quote[0];
            console.log('SQ Response: ', this.responseData);
            this.selectedPlan = this.responseData;
            sessionStorage.setItem("selected_plan_data", JSON.stringify(this.selectedPlan));
            this.saveQuote(response.data.data);

          } else if(response.data.errors.length == 0 && Object.keys(response.data.data).length === 0) {

            this.pollRequestId = response.data.reqId;
            this.errorFlag= true;
            setTimeout(function() {
              self.getPolicy();
              self.pollData();
            },1000);

          }
          

        })
        .catch((error) => {
          console.log('error msg block : get policy', error);
          self.loading = false;
        });
    },
    getProductUi() {
      console.log('getProductUi : ');
      this.loading = true;

      this.errorMsg = "";
      
      let reqData = {
        "manufacturerId": this.selectedPlan.insuranceAndProducts.insuranceCompanyCode,
        "productId": this.selectedPlan.insuranceAndProducts.productCode,
        "planId": this.selectedPlan.productDetails.planOption.planId
      };
      let headers = {};

      this.backendApi("getProductUi", reqData, headers, "get")
        .then((response) => {
          this.loading = false;
          if(response.status=="error")
          {
            
            let msg = [response.data.detail];
            this.$router.push({ path: '/networkalert', query: {backUrl:'plandetails-page', msg: msg }});

          } else {
            
            this.productUiData = response.data.data;
            console.log('productUiData response: ', this.productUiData);

            let addOnIndex = this.productUiData.section[0].section.findIndex(item => item.sectionName == "Add-on Coverages");
            console.log('Add on index: ', addOnIndex);
            this.addOnList = this.productUiData.section[0].section[addOnIndex].section;
            console.log("this.addOnList: ", this.addOnList);
          }
          

          
          

        })
        .catch((error) => {
          console.log('error msg block : get proposal', error);
          this.loading = false;
          // self.apiError = true;
          //   let msg=['We are facing some issue from while fetching quotation API']

          //   this.$router.push({ path: '/networkalert', query: {backUrl:'policy-quote', msg: msg }});
        });
    },
    pollData(){
      this.reqTimeOut();
      this.disableButtons = true;
      this.polling = setInterval(() => {
        if(this.pollapiflag == false){
          this.getPolicy();
        } else {
          this.loading = false;
          this.beforeDestroy();
        }
      }, this.apiCallinginterval)
    },
    reqTimeOut() {
      this.timer = setTimeout(() => {
        this.pollapiflag = true;
        this.$router.push({ path: '/alert', query: { status: 'Error',backUrl:"addon-rider", msg: "No response received, Please try again" }});
      }, 180000);
    },
    beforeDestroy () {
      clearInterval(this.polling);
    },
    getPolicy(){
      var self = this;
      this.loading = true;
      this.pollapiflag = false;
      let headers = {};
      let reqData = [this.pollRequestId];

      this.backendApi("getPolicies", reqData, headers, "get")
        .then((response) => {
          this.loading = false;
          if(response == 'error') {
            //self.apiError = true;
          } else if(response && response.data) {
            if(response.data.data.request){
              this.saveQuoteRequest = response.data.data.request;
              sessionStorage.setItem("quote_request", JSON.stringify(response.data.data.request));
            }
          

            // Stop Polling
            if(response.data.data.isPollComplete != undefined) {
              if(response.data.data.isPollComplete == true) {
                this.pollapiflag = true;
                clearTimeout(this.timer);
              }
            }

            console.log("PollDataFlag: "+ this.pollapiflag);
            

          }

        })
        .catch((error) => {
          console.log('error msg block get life term', error);
          self.loading = false;
          //self.apiError = true;
        });
    },
    saveQuote(apiData) {
      if(sessionStorage.getItem('sp_details_data'))
      {
        console.log("sp details not present");
      }
      console.log('save quote called', apiData);
      var  headers = {
        Authorization: "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
        "Content-Type": "application/json",
      };
      //console.log('this.apiData ll ', this.apiData);
      let qData = {
        "life_assured_name": this.userData.contactDetails.firstName,
        "mobile_number": this.userData.contactDetails.mobileNumber,
        "dob": "",
        "gender": this.userData.gender,
        "zipcode": this.userData.zipCode,
        "annual_income": "",
        "employee_type": "",
        //"education": this.requestJson.data.personalInformation.individualDetails[0].qualification,
        "education": "",
        "smoker": "",
        "type_of_quote": this.requestJson.data.typeOfQuote,
        "rm_code": this.requestJson.data.distributor.agentID,
        "rm_info_json": JSON.stringify(this.requestJson.data.distributor),
        "quote_request_json": JSON.stringify({ data: apiData.request })
      };
      //console.log('qData: ', qData);
      this.backendApi("saveQuote", qData, headers)
        .then((response) => {
          //console.log('save quote response: ', response);
          if(response == 'error') {
            self.apiError = true;

            //   let msg=['We are facing some issue while saving quote data']

            // this.$router.push({ path: '/alert', query: {backUrl:'policy-details', msg: msg }});
          }
          else if(response.status=="error")
          {
            //let msg=['We are facing some issue while saving quote data']

            //this.$router.push({ path: '/networkalert', query: {backUrl:'addon-rider', msg: msg }});
          }
          else if(response && response.data){
            
            this.uiQuoteId = response.data.data.ui_quote_id;
            sessionStorage.setItem("uiQuoteId", JSON.stringify(this.uiQuoteId));
            if (sessionStorage.getItem('proposal_ui_id')) {
              sessionStorage.removeItem('proposal_ui_id');
            }
            console.log('before calling getQuotationApi - ', apiData);
            // this.getQuotationApi(apiData)
            console.log('ui quote id: ', this.uiQuoteId)
            // Quote response api section
            
            let qResData = {
              "ui_quote_id": this.uiQuoteId,
              "quote_response_id": this.quoteResponseID,
              "annual_income": this.userData.annualincome,
              "quote_response_data": JSON.stringify(apiData.quote),
            };
            this.saveQuoteResponse(qResData);
            
          }
        })
        .catch((error) => {
          console.log('error msg block dp', error);
          // alert("Unable to save Quote please refresh the page")
              let msg=['We are facing some issue from backend while saving quote data']
            this.$router.push({ path: '/networkalert', query: {backUrl:'policy-details', msg: msg }});
        });
    },
    saveQuoteResponse(quoteResData) {
      var  headers={
        Authorization: "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
        "Content-Type": "application/json",
      };
      this.backendApi("saveQuoteResponse", quoteResData, headers)
        .then((response) => {
          //console.log('save quote response: ', response);
          if(response == 'error') {
            self.apiError = true;
            // let msg=['We are facing some issue while saving quote response data']

            // this.$router.push({ path: '/alert', query: {backUrl:'policy-details', msg: msg }});
          }
          // else if(response.status=="error")
          // {
          //   let msg=['We are facing some issue while saving quote response data']

          //   this.$router.push({ path: '/alert', query: {backUrl:'policy-details', msg: msg }});
          // }
          else if(response && response.data) {
            //this.uiQuoteId = response.data.data.ui_quote_id;
            //console.log('ui quote id: ', this.uiQuoteId)
            /* let logData = {
              "ui_quote_id": this.uiQuoteId,
              "quote_request_id": this.quoteRequestID,
              "mobile_number": this.userData.mobile,
              "dob": this.userData.dob,
              "page_name": "policydetails",
              "tag_name": "",
              "data": JSON.stringify(this.selectedData)
            };
            this.saveLogData(logData); */
          }
        })
        .catch((error) => {
          console.log('error msg block dp', error);
          // let msg=['We are facing some issue from backend']

          // this.$router.push({ path: '/alert', query: {backUrl:'policy-details', msg: msg }});
          // alert("Unable to save Quote Response please refresh the page")
        });
    },
    getHospitalsNumbers(text) {
      const myArray = text.split("+");
      return myArray[0] + '+';
    },
    convertInLakh(amt) {
      if (amt < 10000000) {
        return amt / 100000 + " Lac";
      } else {
        return amt / 10000000 + " Cr.";
      }
    },
    policyCoverChangeAmt() {
      this.quoteAmount = this.selectedPlan.individualDetails[0].sumInsured;
      for(let i=0; i < this.requestJson.data.personalInformation.individualDetails.length; i++)
      {
        this.requestJson.data.personalInformation.individualDetails[i].quoteAmount = parseInt(this.quoteAmount);
      }
      this.getQuotationApi();
    },
    currency(amt) {
      let tmpAmt = parseFloat(amt).toFixed(2);
      return new Intl.NumberFormat().format(tmpAmt);
    },
    chnagePolicyPeriod(val, ind2) {
      
      this.selectedPolicyTerm = val;
      this.selectedPolicyIndex = ind2;
      this.requestJson.data.product.policyTerm = this.selectedPolicyTerm;
      sessionStorage.setItem("request_json", JSON.stringify(this.requestJson));
      //console.log("this.requestJson: ", this.requestJson);
      //this.saveQuote(this.requestJson, 2);
    },
    getSelectedPolicyIndex(pTerm) {
      let itemIndex = this.selectedPlan.productDetails.premiumForEachPolicyTerm.findIndex(item => item.policyTerm == pTerm);
      if(itemIndex > -1) {
        return itemIndex;
      }
    },
    addAddOns(selAddOn) {
      //console.log("selAddOn: ", selAddOn.optionSelected);
      $("#add_button_" + selAddOn.optionSelected).addClass("d-none");
      let defaultVal = (selAddOn.default == null)?selAddOn.values[0].value:selAddOn.default;
      let tmp = {
        "optionSelected": selAddOn.optionSelected,
        "optionValue": defaultVal,
        "varFields": [
            {
                "fieldName": "",
                "fieldValue": ""
            }
        ]
      };
      
      this.requestJson.data.product.healthCovers.push(tmp);
      this.getQuotationApi2(selAddOn, 1);
    },
    removeAddOns(selAddOn) {
      let addOnsArr = [];
      this.selectedPlan.productDetails.healthCovers.forEach(
        (element, index) => {
          let tempArr = {
            "optionSelected": element.optionSelected,
            "optionValue": element.optionValue,
            "varFields": [
                {
                    "fieldName": "",
                    "fieldValue": ""
                }
            ]
          };
          if(selAddOn.optionSelected != element.optionSelected && element.inbuiltInPlan != 'Yes') {
            addOnsArr.push(tempArr);
          }
        }
      );

      this.requestJson.data.product.healthCovers = addOnsArr;
      this.getQuotationApi2(selAddOn, 2);
    },
    checkAddOnSelection(addOnID, selectedAddOnsArray) {
      console.log('checkAddOnSelection called: ', addOnID, selectedAddOnsArray);
      let itemIndex = selectedAddOnsArray.findIndex(item => item.optionSelected == addOnID);
      if(itemIndex > -1) {
        console.log('addons mathced');
        return true;
      } else {
        return false;
      }
    },
    editAddOns(selAddOn) {
      console.log('edit add ons called: ', selAddOn);
      this.editAddOnsData = selAddOn;
      let itemIndex = this.selectedPlan.productDetails.healthCovers.findIndex(item => item.optionSelected == this.editAddOnsData.optionSelected);
      this.editAddOnsOptionValue = this.selectedPlan.productDetails.healthCovers[itemIndex].optionValue;
    },
    updateAddOnsValue(event, data) {
      let val = event.target.value;
      console.log("updateAddOnsValue called: ", event.target.value, data);
      // console.log("updateAddOnsValue called: ", this.editAddOnsOptionValue);
      // console.log('this.editAddOnsData" ', this.editAddOnsData);
      // console.log('this.editAddOnsOptionValue: ', this.editAddOnsOptionValue);
      
      let tempArr = {
        "optionSelected": data.optionSelected,
        "optionValue": val,
        "varFields": [
          {
              "fieldName": "",
              "fieldValue": ""
          }
        ]
      };
      let itemIndex = this.requestJson.data.product.healthCovers.findIndex(item => item.optionSelected == data.optionSelected);
      this.requestJson.data.product.healthCovers[itemIndex] = tempArr;
      this.getQuotationApi2(data, 3);
    },
    getAddOnSelectionOV(currentValue, optionCode, selectedAddOnsArray) {
      console.log('option', optionCode, selectedAddOnsArray)
      
      let itemIndex = selectedAddOnsArray.findIndex(item => item.optionSelected == optionCode);
      if(itemIndex > -1) {
        let selectedOptionValue =  selectedAddOnsArray[itemIndex].optionValue;
        console.log('jkkjjkjkjk: ', selectedOptionValue);
        if(currentValue == selectedOptionValue) {
          return true;
        }
        //return selectedOptionValue;
        // let itemIndex2 = this.addOnList.findIndex(item => item.optionSelected == optionCode);
        // if(itemIndex2 > -1) {
        //   let addOnDetails = this.addOnList[itemIndex2];
        //   let itemIndex3 = addOnDetails.values.findIndex(item => item.value == selectedOptionValue);
        //   if(itemIndex3 > -1) {
        //     return addOnDetails.values[itemIndex3].value;
        //   }
        // }
        //return selectedAddOnsArray[itemIndex].optionValue;
      } else {
        return "";
      }
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
