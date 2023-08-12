<template>
    <div class="text-center" v-if="loading" style="padding-top: 50px;">
    <loadingPage />
  </div>

  
    <div v-else class="term-plan-qte">
        <Header />

       
        <div v-if="selectedPlan">
            <div class="container" >
               
                <div class="breakcrum-section d-flex justify-content-between align-items-center" >
                    <ul class="d-flex justify-content-between align-items-center" >
                        <li><router-link to="/">Home</router-link> <i class="icon-keyboard_arrow_right"></i></li>
                        <li><router-link to="/multi-quote">Term Insurance</router-link> <i class="icon-keyboard_arrow_right"></i></li>
                        <li class="active">Term Plan Quote</li>
                    </ul>
                   
                    <div class="d-flex flex-column justify-content-end">
                        <a target="_blank" :href="selectedPlan.supportingData.Messages.brochureLink" class="mb-1">
                            <img src="~@/assets/images/file.png" alt="" class="mr-1" > Know your plan in 2 minutes
                        </a>
                    </div>
                </div>
               
                <div class="d-flex main-section">
                    <div class="policy-dtl p-3 me-3 border-radius">
                        <div class="d-flex justify-content-center align-items-center">
                            <figure>
                                <img :src="selectedPlan.supportingData.insCompanyLogo" alt="" />
                               
                            </figure>
                            <figcaption>
                                {{ selectedPlan.insuranceAndProducts.productName }} : 
                                {{ selectedPlan.productDetails.planOption.planName }}
                          
                            </figcaption>
                        </div>
                        <hr>
                        <div class="policy-options-wrap">
                            <div class="policy-options mb-4">
                                <h6> Policy Cover </h6>
                                <select 
                                    @change="onChangeAmt($event)"
                                    v-model="selectedPlan.individualDetails[0].sumInsured" class="floating-input mb-2"
                                >
                                    <option
                                        v-for="(value, ind) in qAmt"
                                        :key="ind"
                                        v-bind:value="value.text"
                                        >
                                        &#8377; <span> {{ convertInLakh(value.text) }} </span>
                                    </option>
                                </select>
                            </div>
                            
                          
                        </div>
                        <!-- <div class="d-flex justify-content-center align-items-center rounded">
                            <div class="policy-dtl-box text-center mr-3 rounded">
                                <span class="d-block">
                                    <img src="~@/assets/images/policy-dtl1.png" alt="">
                                </span>
                                <b> {{
                                        getCsValue(
                                        selectedPlan.supportingData.Messages
                                            .ClaimSettlementPercent
                                        )
                                    }}
                                %</b>
                                <h6>Claim Settlement Ratio</h6>
                            </div>
                            <div class="policy-dtl-box text-center mr-3 rounded">
                                <span class="d-block">
                                    <img src="~@/assets/images/policy-dtl2.png" alt="">
                                </span>
                                <b> {{
                                        getCsValue(
                                        selectedPlan.supportingData.Messages
                                            .ClaimSettlementPercent
                                        )
                                    }}
                                %</b>
                                <h6>Easy Refund Policy</h6>
                            </div>
                            <div class="policy-dtl-box text-center rounded">
                                <span class="d-block">
                                    <img src="~@/assets/images/policy-dtl3.png" alt="">
                                </span>
                                <b> {{
                                        getCsValue(
                                        selectedPlan.supportingData.Messages
                                            .ClaimSettlementPercent
                                        )
                                    }}
                                %</b>
                                <h6>Claim <br>Settlement</h6>
                            </div>
                        </div> -->
                    </div>
                    
                    <div class="policy-dtl-info border-radius">
                        
                        <ul class="nav nav-tabs progressBar">
                            <div v-for="(value, ind) in eligibilityMapping.fieldGroups">
                                <li :class="'nav-item ' + activePage(ind)" v-if="!value.visibility?true:checkVisibility(value.visibility)">
                                    <a :class="'nav-item ' + activePage(ind)" data-toggle="tab" :href="'#termPlanQuote_' + ind">{{ value.label }}</a>
                                </li>
                            </div>
                        </ul>

                        <div class="tab-content label-rel">
                            <div v-for="(value, ind) in eligibilityMapping.fieldGroups" :class="'tab-pane ' + isTabContentActive(ind)" :id="'termPlanQuote_' + ind">
                                <!-- <h4>  {{ value["label"] }} </h4> -->
                                
                                <form @submit.prevent="submitForm(ind)" :id="value.name" method="post" class="floating-form">
                                    <div class="form-inner">
                                        <template v-for="(value2, ind2) in value.fields" :key="ind2">

                                            <div class="form-control1 label-clicked" v-if="!value2.visibility?true:checkVisibility(value2.visibility)">
                                                <div v-if="value2.type == 'text'">
                                                    <label :for="value2.id" class="form-item-label mb-2"> {{ value2.label }}
                                                        <text v-if="value2.mandatory == '1'" class="mandatory-mark">*</text>
                                                    </label>
                                                    <input
                                                        class="floating-input mb-2"
                                                        type="text"
                                                        :id="value2.id"
                                                        :name="value2.name"
                                                        v-model.trim="formInfo.fieldGroups[ind].fields[ind2].input"
                                                        :minlength="value2.min"
                                                        :maxlength="value2.max"
                                                        @keyup="getValidation($event,value2.id)"
                                                        :title="value2.description"
                                                    />
                                                    
                                                    <p class="error-text" :id="'error_' + value2.id"></p>
                                                </div>    

                                                <div v-if="value2.type == 'number'">
                                                    <label :for="value2.id" class="form-item-label mb-2"> {{ value2.label }} 
                                                        <text v-if="value2.mandatory == '1'" class="mandatory-mark">*</text>
                                                    </label>
                                                    <input
                                                        class="floating-input mb-2"
                                                        type="number"
                                                        :id="value2.id"
                                                        :name="value2.name"
                                                        v-model="formInfo.fieldGroups[ind].fields[ind2].input"
                                                        @keyup="getValidation($event,value2.id)"
                                                        :title="value2.description"
                                                    />
                                                    
                                                    <p class="error-text" :id="'error_' + value2.id"></p>
                                                </div>  

                                                <div v-if="value2.type == 'currency'">
                                                    <label :for="value2.id" class="form-item-label mb-2"> {{ value2.label }} 
                                                        <text v-if="value2.mandatory == '1'" class="mandatory-mark">*</text>
                                                    </label>
                                                    <input
                                                        class="floating-input mb-2"
                                                        type="text"
                                                        :id="value2.id"
                                                        :name="value2.name"
                                                        v-model="formInfo.fieldGroups[ind].fields[ind2].input"
                                                        @keypress="getValidation($event)"
                                                        @keyup="formatCurrency(ind,ind2)"
                                                        :title="value2.description"
                                                    />
                                                    
                                                    <p class="error-text" :id="'error_' + value2.id"></p>
                                                </div>

                                                <div v-if="value2.type == 'date'">
                                                    <label :for="value2.id" class="form-item-label mb-2"> {{ value2.label }} 
                                                        <text v-if="value2.mandatory == '1'" class="mandatory-mark">*</text>
                                                    </label>
                                                    <input
                                                        class="floating-input mb-2"
                                                        type="date"
                                                        :id="value2.id"
                                                        :name="value2.name"
                                                        v-model="formInfo.fieldGroups[ind].fields[ind2].input"
                                                        @keyup="getValidation($event,value2.id)"
                                                        :title="value2.description"
                                                    />
                                                    
                                                    <p class="error-text" :id="'error_' + value2.id"></p>
                                                </div> 

                                                <div v-if="value2.type == 'boolean'" class="small-grid yn-radio-type">
                                                    <!-- <span class="radio-span-wrap">
                                                        <div for="email" class="form-item-label text-left">
                                                            {{
                                                            value2.label
                                                            }} <text v-if="value2.mandatory == '1'" class="mandatory-mark">*</text>
                                                        </div>
                                                        <div class="d-flex radio-question">  
                                                            <div class="d-flex position-relative">
                                                                <input class="checkbox-tools" type="radio" :name="value2.name" v-bind:value="'1'" v-model="formInfo.fieldGroups[ind].fields[ind2].input" title="">
                                                                <label class="for-checkbox-tools mr-2" :for="value2.name">
                                                                    Yes
                                                                </label>
                                                            </div>
                                                            <div class="d-flex position-relative">
                                                                <input class="checkbox-tools" type="radio" :name="value2.name" v-bind:value="'0'" v-model="formInfo.fieldGroups[ind].fields[ind2].input" title="">
                                                                <label class="for-checkbox-tools" :for="value2.name">
                                                                    No
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <span class="error-text" :id="'error_' + value2.id"></span>
                                                    </span> -->
                                                    

                                                    <!--radio/calender/date html-- 10-08-->
                                                    <!-- <div class="form-control1 label-clicked" > -->
                                                    <label for="email" class="form-item-label mb-2" >
                                                        {{
                                                            value2.label
                                                        }} <text v-if="value2.mandatory == '1'" class="mandatory-mark">*</text>
                                                    </label>
                                                    <div class="d-flex radio-question" >
                                                        <label>
                                                            <input type="radio" :name="value2.name" v-bind:value="'1'" v-model="formInfo.fieldGroups[ind].fields[ind2].input" title=""/>
                                                            <div class="front-end box" :for="value2.name">
                                                                <span>Yes</span>
                                                            </div>
                                                        </label>

                                                        <label>
                                                            <input type="radio"  :name="value2.name" v-bind:value="'0'" v-model="formInfo.fieldGroups[ind].fields[ind2].input" title=""/>
                                                            <div class="back-end box" :for="value2.name">
                                                                <span>No</span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <span class="error-text" :id="'error_' + value2.id"></span>
                                                    <!-- </div> -->

                                                </div>

                                                <div v-if="value2.type == 'single-select'">
                                                    <label for="email" class="form-item-label mb-2">
                                                    {{
                                                        value2.label
                                                    }} <text v-if="value2.mandatory == '1'" class="mandatory-mark">*</text>
                                                    </label>
                                                    <select :name="value2.name" @change="getValidation($event, value2.id,value2.name)" :id="value2.name" v-model="formInfo.fieldGroups[ind].fields[ind2].input" class="floating-input mb-2">
                                                        <option value="">Select</option>
                                                        <option
                                                            :value="item.Value"
                                                            v-for="(item, ind3) in sortDropDown(value2.value)" :key="ind3"
                                                            title=""
                                                        >
                                                            {{ item.Text }}
                                                        </option>
                                                    </select>
                                                    <span class="error-text" :id="'error_' + value2.id"></span>
                                                </div>
                                                
                                                <div v-if="value2.type == 'multi-select'">
                                                    <label for="email" class="form-item-label mb-2">
                                                        {{
                                                            value2.label
                                                        }} <text v-if="value2.mandatory == '1'" class="mandatory-mark">*</text>
                                                    </label>
                                                    <multiselect :options="getMultiSelectValues(value2.value)" v-model="formInfo.fieldGroups[ind].fields[ind2].input" mode="tags" :createTag="true">
                                            
                                                    </multiselect>
                                                    <p class="error-text" :id="'error_' + value2.id"></p>
                                                </div>
                                                
                                            </div>

                                        </template>
                                        
                                        <!--radio/calender/date html-- 10-08 Temp Code for test -->
                                        <!-- <div>
                                            <label for="email" class="form-item-label" >
                                                test label for radio <text class="mandatory-mark">*</text>
                                            </label>
                                            <div class="d-flex radio-question" >
                                                <label>
                                                    <input type="radio" name="radio"  v-bind:value="'1'"  title=""/>
                                                    <div class="front-end box" for="radio">
                                                        <span>Yes</span>
                                                    </div>
                                                </label>

                                                <label>
                                                    <input type="radio" name="radio" v-bind:value="'0'" title=""/>
                                                    <div class="back-end box" for="radio">
                                                        <span>No</span>
                                                    </div>
                                                </label>
                                            </div>
                                            <span class="error-text"></span>
                                        </div> -->

                                    </div>

                                    <div class="button wrap d-flex justify-content-center mt-4">
                                        <button type="submit" class="btn btn-primary rounded-pill btn-block mx-2">
                                            Submit <i><img src="~@/assets/images/next-arrow.png" /></i>
                                        </button>
                                    </div>

                                </form>

                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
            <div class="footer-total-premium d-flex justify-content-between align-items-center" >
                <div class="total-premium" >
                    <b >Total Premium: </b> 
                    ₹ <strong> {{ selectedPlan.productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue
                                }}</strong>/ {{ selectedPlan.productDetails.policyTermUnit
                                }} 
                    <span class="feature-name" >
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAr0lEQVQokX3ST0sCURQF8J9PqaFQS1pHQn4Gv/+2fTvFIhBEsE0LR2rGzR14jjMdOLx3D/fcP49HN4rgFQbZPeEVc9yEVmKDNarckLDEU0/HPd5QDUNY4DlL+MIPJhHf4w+HFF1eWhUfgjnmzSi3wRyf+GhpBYqRy8Ub/HZuQp1wxKknIccRZULd0X7qeocNNK/0jRnuIn5sGXZ4R90YamzjHGMUeolVJFf/zdv7Nc6o2SDZjbHrFgAAAABJRU5ErkJggg==" alt="" >
                        <div class="tooltip-sec" >
                            <table>
                            <tr >
                                <td > Premium: </td>
                                <td >₹ {{ selectedPlan.productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].premiumValue
                                }}</td>
                            </tr> 
                           <tr >
                                <td class="text-left" > Taxes: </td>
                                <td >₹ {{selectedPlan.productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalTax }}</td>
                            </tr>
                            </table>
                        </div>
                    </span>
                    <span class="premium-tax" >Premium (Including Taxes)</span>
                </div>
                <!-- <div class="bttn-grp d-flex" >
                    <button type="button" class="next-btn" > Proceed 
                        <i class="m-0"> <img src="~@/assets/images/next-arrow.png" alt=""></i></button>
                </div> -->
            </div>
        </div>
    </div>    
</template>


<script>
import Multiselect from '@vueform/multiselect';
import $ from "jquery";

//import { getPolicyCoverAmt } from '@/mixins/common';
import Header from "@/components/Header.vue";
import loadingPage from "@/components/loading.vue";
//const {JSONPath} = require('jsonpath-plus');
export default {
    name: "gatecriteria",
    components: {
        Header,
        loadingPage,
         Multiselect
    },
    mixins:[],
    data() {
        return {
            configData: "",
            loading: false,
            errorCounter: 0,
            apiReqData: "",
            selectedPlan: "",
            selectedPlan2: "",
            selectedData: "",
            userInfo: "",
            eligibilityMapping: "",
            eligibilityMappingDemo: "",
            singleQuoteMapping: "",
            formInfo: {},
            qAmt: [],
            premiumPaymentTermArr: [],
            coverForArr: [],
            selectedAge: "",
            premiumPaymentFrequency: "",
          //  filterPageValues: [],
            spdata: {},
            spdataFlagForSQ: false,
        }
    },
    mounted() {       
     
        this.configData = this.$store.state.configData;

        this.apiReqData = JSON.parse(sessionStorage.getItem("request_json"));
        console.log("this.apiReqData: ", this.apiReqData);
   
        this.selectedData = JSON.parse(sessionStorage.getItem("selected_plan_data"));
        console.log("selected data5: ", this.selectedData);
        this.selectedPlan2 = this.selectedData;

        // End session data

        this.userData = JSON.parse(localStorage.getItem("userProfile"));
      
        this.qAmt = this.configData["POLICY_COVER_AMOUNT"];

        let spdetail_flag= process.env.VUE_APP_SPDETAIL_ONESB;
        if(spdetail_flag == 1)
        {
                if (sessionStorage.getItem("rm_data")){
                this.rmData = JSON.parse(sessionStorage.getItem("rm_data"));
                this.getSPDetailsOneSB(this.rmData.Userid, this.selectedPlan2.insuranceAndProducts.insuranceCompanyCode);
                }   
        }
        // Setting Mandatory Fields for Single Quote
       
        this.apiReqData.typeOfQuote = "Single Quote";
        this.apiReqData.data.personalInformation.individualDetails[0].quoteAmount = this.selectedPlan2.individualDetails[0].sumInsured;
        this.premiumPaymentTerm=this.selectedPlan2.productDetails.premiumPaymentTerm;

        this.apiReqData.data.product.premiumPaymentTerm = this.selectedPlan2.productDetails.premiumPaymentTerm;
        this.apiReqData.data.product.policyTerm = this.selectedPlan2.productDetails.policyTerm;
        this.apiReqData.data.product.insuranceAndProducts = [
            {
                insuranceCompanyCode:
                this.selectedPlan2.insuranceAndProducts.insuranceCompanyCode,
                productCode: [this.selectedPlan2.insuranceAndProducts.productCode],
            },
        ];
        this.apiReqData.data.product.healthCovers.OptionSelected =
        this.selectedPlan2.productDetails.healthCovers.optionSelected;
        this.apiReqData.data.product.healthCovers.OptionSelected =
        this.selectedPlan2.productDetails.healthCovers.optionSelected;
        this.apiReqData.data.product.premiumPaymentOption =
        this.selectedPlan2.productDetails.premiumPaymentOption;
        
        if(this.selectedPlan2.insuranceAndProducts.insuranceCompanyCode == "NBHI")
        {
            this.apiReqData.data.personalInformation.individualDetails[0].residentStatus = "residentIndian";
        }
        
   
        this.selectedPlan = JSON.parse(sessionStorage.getItem("selected_plan_data"));  
        this.gateCriteria();

      
        
          if(this.selectedPlan.productDetails.premiumPaymentOption == '3') {
    
              this.premiumPaymentTermArr = this.getPaymentTermValues();
            } else {
              this.premiumPaymentTermArr = [
                this.selectedPlan.productDetails.premiumPaymentTerm,
              ];
            }
            
        //set covertillage
        this.selectedAge =
            parseInt(this.selectedPlan.individualDetails[0].age) +
            parseInt(this.selectedPlan.productDetails.policyTerm);

        // Setting Premium Payment Frequency
        // this.premiumPaymentFrequency = this.selectedPlan.productDetails.premiumPaymentFrequency;
    },
 
    methods: {
        formatCurrency(ind,ind2){
            this.formInfo.fieldGroups[ind].fields[ind2].input = this.formInfo.fieldGroups[ind].fields[ind2].input.replace(/\D/g, "").replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, "$1,");
            // event.target.value = event.target.value.replace(/\D/g, "").replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, "$1,")

        },
        getMinOfTwo(val1, val2) {
            if(val1 > val2) {
                return val2;
            }
            return val1;
        },
        getSPDetailsOneSB(rm_code,man_code ) {
        let reqData = [man_code];
        let headers ={};
        this.backendApi("getSPDetailsOneSB", reqData, headers, "get")
        .then((response) => {
            if(response == 'error') {
            self.apiError = true;
            } else if(response && response.data) {
            console.log('response sp details: ', response.data);
            if(response.data.status == "failed")
            {
                //redirection to error page and on go back button redirect to homepage
                let msg=['SP details are not available']
                this.$router.push({ path: '/networkalert', query: {backUrl:'multi-quote', msg: msg }});
            }
            this.spdata = response.data.data;
            //   this.quotationSQcall();
            sessionStorage.setItem("sp_details_data", JSON.stringify(response.data.data));
            localStorage.setItem("sp_details_data", JSON.stringify(response.data.data));
            this.spdataFlagForSQ = true;
            this.apiReqData.distributor.agentID = this.spdata.spCode;  
            for(var attr in this.spdata.attributes)
                {
                    try{
                        let varfield = {};
                        varfield["fieldName"] = attr;
                        varfield["fieldValue"] =this.spdata.attributes[attr];
                        this.apiReqData.distributor.varFields.push(varfield);
                    }catch(err){
                        console.log("varfield assignment failed",err);
                    }            
                }
            }
        })
        .catch((error) => {
            console.log('error msg block spdetailOneSB API', error);
            let msg=['SP details are not available']
            this.$router.push({ path: '/networkalert', query: {backUrl:'multi-quote', msg: msg }});
        });
        },

        // getInsurerImgs(value) {
        //     let img = getInsuranceImages();
           
        //     return require("../assets/images/"+img[value]);
        // },
        convertInLakh(amt) {
            if (amt < 10000000) {
                return amt / 100000 + "L";
            } else {
                return amt / 10000000 + "Cr.";
            }
        },
       
        gateCriteria() {
            var self = this;
          //  let version = JSON.parse(process.env.VUE_APP_PROPOSAL_VERSION);
          //  let qData = [this.selectedPlan.insuranceAndProducts.productCode, this.selectedPlan.insuranceAndProducts.insuranceCompanyCode, version];
          let qData = ["P1C2PL","HDFC", 1];

         
            console.log(qData);
            let  headers = {};
            this.loading = true;
            this.backendApi("gateCriteria", qData, headers, "get")
            .then((response) => {
                console.log('gate crieria response: ', response);
                self.loading = false;
                if(response == 'error') {
                    self.apiError = true;
                } else if(response && response.data){
                    
                    console.log('response: ', response.data)
                    this.formInfo = response.data.data?.eligibilityMapping;
                    this.eligibilityMapping = response.data.data?.eligibilityMapping;

                    // this.formInfo = this.eligibilityMappingDemo;
                    // this.eligibilityMapping = this.eligibilityMappingDemo;

                    // if(response.data.data?.singleQuoteMapping) {
                    //     this.singleQuoteMapping = response.data.data?.singleQuoteMapping;
                    // }
                    
                    for (var key in this.formInfo.fieldGroups) {
                        let data = this.formInfo['fieldGroups'][key];
                        
                        if(data.fields) {
                            for(var key2 in data.fields) {
                                let data2 = this.formInfo['fieldGroups'][key]['fields'][key2];
                                if(data2.type == 'multi-select') {
                                this.formInfo['fieldGroups'][key]['fields'][key2]['input'] = []; 
                                } else if(data2.type == 'boolean') {
                                this.formInfo['fieldGroups'][key]['fields'][key2]['input'] = "";
                                } else if(data2.type == 'currency') {
                                this.formInfo['fieldGroups'][key]['fields'][key2]['input'] = "";
                                } else {
                                this.formInfo['fieldGroups'][key]['fields'][key2]['input'] = "";
                                }
                            } 
                        }

                        // fieldGroups
                        if(data.fieldGroups) {
                            for(var key2 in data.fieldGroups) {
                                let data2 = this.formInfo['fieldGroups'][key]['fieldGroups'][key2];
                                for(var key3 in data2.fields) {
                                    let data3 = this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3];
                                    if(data3.type == 'multi-select') {
                                        //console.log('key3: ', key3)
                                        this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input'] = []; 
                                    } else if(data3.type == 'boolean'){
                                        this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input'] = "";
                                    } else if(data3.type == 'currency'){
                                        this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input'] = "";
                                    }else {
                                        this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input'] = "";
                                    }
                                }

                                // 333333
                                // fieldGroups.fieldGroups
                                if(data2.fieldGroups) {
                                    for(var key3 in data2.fieldGroups) {
                                        let data3 = this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3];
                                        for(var key4 in data3.fields) {
                                            let data4 = this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4];
                                            if(data4.type == 'multi-select') {
                                                //console.log('key4: ', key4)
                                                this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'] = []; 
                                            } else if(data4.type == 'boolean'){
                                                this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'] = "";
                                            } else if(data4.type == 'currency'){
                                                this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'] = "";
                                            } else {
                                                this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'] = "";
                                            }
                                        }
                                    }
                                    // 333333
                                }
                            }
                        }
                    }

                    console.log('this.eligibilityMapping', this.eligibilityMapping);
                    //console.log('this.singleQuoteMapping', this.singleQuoteMapping);

                    // Setting up previously filled data
                    let filledData = JSON.parse(sessionStorage.getItem("gateCriteriaData"));
                    if(filledData) {
                            for (var key in this.formInfo.fieldGroups) {
                            let data = this.formInfo['fieldGroups'][key];
                            
                            if(data.fields) {
                                for(var key2 in data.fields) {
                                    let data2 = this.formInfo['fieldGroups'][key]['fields'][key2];
                                    if(data2.type == 'multi-select') {
                                        this.formInfo['fieldGroups'][key]['fields'][key2]['input'] = filledData['fieldGroups'][key]['fields'][key2]['input']; 
                                    } else if(data2.type == 'boolean') {
                                        this.formInfo['fieldGroups'][key]['fields'][key2]['input'] = filledData['fieldGroups'][key]['fields'][key2]['input'];
                                    } else if(data2.type == 'currency') {
                                        this.formInfo['fieldGroups'][key]['fields'][key2]['input'] = new Intl.NumberFormat('en-IN').format(parseInt(filledData['fieldGroups'][key]['fields'][key2]['input']));
                                    } else {
                                        this.formInfo['fieldGroups'][key]['fields'][key2]['input'] = filledData['fieldGroups'][key]['fields'][key2]['input'];
                                    }
                                } 
                            }

                            // fieldGroups
                            if(data.fieldGroups) {
                                for(var key2 in data.fieldGroups) {
                                    let data2 = this.formInfo['fieldGroups'][key]['fieldGroups'][key2];
                                    for(var key3 in data2.fields) {
                                        let data3 = this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3];
                                        if(data3.type == 'multi-select') {
                                            //console.log('key3: ', key3)
                                            this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input'] = filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input']; 
                                        } else if(data3.type == 'boolean'){
                                            this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input'] = filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input']; 
                                        } else if(data3.type == 'currency'){
                                            this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input'] = new Intl.NumberFormat('en-IN').format(parseInt(filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input'])); 
                                        } else {
                                            this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input'] = filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input']; 
                                        }
                                    }

                                    // 333333
                                    // fieldGroups.fieldGroups
                                    if(data2.fieldGroups) {
                                        for(var key3 in data2.fieldGroups) {
                                            let data3 = this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3];
                                            for(var key4 in data3.fields) {
                                                let data4 = this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4];
                                                if(data4.type == 'multi-select') {
                                                    //console.log('key4: ', key4)
                                                    this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'] = filledData['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'];
                                                } else if(data4.type == 'boolean'){
                                                    this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'] = filledData['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'];
                                                } else if(data4.type == 'currency'){
                                                    this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'] = new Intl.NumberFormat('en-IN').format(parseInt(filledData['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input']));
                                                } else {
                                                    this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'] = filledData['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'];
                                                }
                                            }
                                        }
                                        // 333333
                                    }
                                }
                            }
                        }
                    }
                }
            })
            .catch((error) => {
                console.log('error msg block dp', error);
            });
        },
       
       
        checkVisibility(value) {
            //console.log('check Visibility called: ', value);
            if(value) {
                let obj = this.getFinalObject(value);
                try {
                    return eval(obj);
                }
                catch(err) {
                    console.log('error exp: ', value);
                }
            } else {
                return true;
            }
            
        },
        printElement(data, vm) {

            var ele = '<div class="form-control1 label-clicked">'
            +'<input type="text" id="'+data.id+'" name="'+data.name+'" minlength="'+data.min+' maxlength="'+data.max+'" v-model="'+vm+'" title="'+data.description+'" @keypress="getValidation($event)">'
            +'<label for="" class="form-item-label mb-2">Name</label>'
            +'</div>';
            return ele;
        },
        getValidation(event,id) {
            console.log('event: ', event);
            $("#error_" + id).text('');
        },
        getColSize() {
            return 'col-md-6';
        },
        sortDropDown(list) {
            if(list){
                list = list.sort(sortbyname);
                function sortbyname(a, b) {
                    if (a.Text < b.Text) return -1;
                    if (a.Text > b.Text) return 1;
                    return 0;
                }
                return list;
            }
        },
        getCsValue(value) {

            var obj;
            if(value != null && value != 'null') {
                eval('obj='+value);
                var keys = Object.keys(obj);
                let len = keys.length;
                return obj[keys[len-1]];
            } else {
                return "";
            }
        },
        checkPattern(value, pattern) {

            try {
                return eval(eval(pattern).test(value));
            } 
            catch {
                console.log('Invalid pattern: ', pattern);
                return true;
            }
            
        },
        checkValidation(value, label="") {
        //console.log('check Validation called: ', value);
            if(value) {
                let obj = this.getFinalObject(value);
                try {
                    return eval(obj);
                }
                catch(err) {
                    console.log('error exp 2: ', value);
                    return false;
                }
            } else {
                //return false;
            }
        },
        submitForm(sectionIndex) {
            console.log('submit form called: ', this.formInfo);
            console.log('Single Quote Response: ', this.apiReqData);
            this.errorCounter = 0;
            $(".error-text").text('');
            // If FieldGroups (eligibilityMapping)
            let subArray = this.formInfo.fieldGroups;
            
            for(var key in subArray) {
            
                let fieldsArr = subArray[key].fields;
                for(var key2 in fieldsArr) {
                    let data = fieldsArr[key2];
                    //console.log('rules 1: ', data.name, data.validation);

                    if(this.checkVisibility(data.visibility) && this.checkVisibility(subArray[key].visibility)) {
                        if (data.input && data.type == 'currency') {
                            console.log('inside currency: f ', data);
                            var regex = /[.,]/g;
                            let income = data.input.replace(regex, '');
                            data.input = parseInt(income);
                        }
                        if((data.mandatory == '1') && (!data.input)) {
                            this.errorCounter++;
                            $("#error_"+data.id).text('This field is required');
                            console.log('invalid 1  mandatory:');
                        } else if(data.input && (data.pattern) && (this.checkPattern(data.input, data.pattern) == false)) {
                            this.errorCounter++;
                            $("#error_" + data.id).text('Incorrect Format');
                            console.log('rules 1 Incorrect: ', data.validation);
                        } else if(data.input && (data.max) && data.type == 'number' && (data.input < data.min || data.input > data.max)) {
                            console.log('inside number: ', data);
                            this.errorCounter++;
                            $("#error_" + data.id).text('Value should be between ' + data.min +' and ' + data.max);
                            console.log('rules number 1 Incorrect: ', data.validation);
                        } else if((data.validation != null) && (data.input) && (this.checkValidation(data.validation, data.label) == false)) {
                            this.errorCounter++;
                            $("#error_" + data.id).text('This plan is not eligible for your profile');
                            //$("#error_" + data.id).text('Invalid '+ data.label);
                            console.log('rules 1 invalid: ', data.validation);
                        } else {
                            // Setting Single Quote API Request
                            this.setSingleQuoteApiValue(data);
                        }
                        
                    } else {
                        // setting blank, previously filled data

                    }
                }
            }
            sessionStorage.setItem("gateCriteriaData", JSON.stringify(this.formInfo));
           // localStorage.setItem("filterPageValues", JSON.stringify(this.filterPageValues));
            console.log('error counter: ', this.errorCounter);
            var self = this;
            if(this.errorCounter == '0') {
                console.log('this.apiReqData Updated dddddd: ', this.apiReqData);
                sessionStorage.setItem("quote_request", JSON.stringify(this.apiReqData));
                console.log('this.error: ', this.errorCounter)
                self.$router.push('/policydetails');
                // setTimeout( function() { 
                    
                // }, 2000 );
                
            }
            
            
        },
        getMaxAge(value) {
            let ages = getMaxPolicyAge();
            return ages[value];
        },
        currency(amt) {
            return new Intl.NumberFormat('en-IN').format(amt)
        },
      
        getTotalPremiumAmount(data) {
            let itemIndex = data.findIndex(item => item.mode == this.premiumPaymentFrequency);
            if(itemIndex > -1) {
                return this.currency(data[itemIndex]['totalPremiumValue']);
            } else {
                return null;
            }
        },
        getpremiumValue(data) {
            let itemIndex = data.findIndex(item => item.mode == this.premiumPaymentFrequency);
            if(itemIndex > -1) {
                return this.currency(data[itemIndex]['premiumValue']);
            } else {
                return null;
           }
        },
        totalTax(data) { 
           let itemIndex = data.findIndex(item => item.mode == this.premiumPaymentFrequency);
            if(itemIndex > -1) {
                return this.currency(data[itemIndex]['totalTax']);
            } else {
                return null;
            }
        },
        // getAddOns() {
        //     let addOnsArr = [];
        //     this.selectedAddOnsIds = [];
        //     this.selectedPlan2.productDetails.AddOnSection.addOnSelected.forEach(
        //         (element, index) => {
        //         let tempArr = {
        //             OptionSelected: element.optionSelected,
        //             addOnSumAssured: element.addOnSumAssured,
        //             varFields: [
        //             {
        //                 fieldName: "",
        //                 fieldValue: "",
        //             },
        //             ],
        //         };

        //         if(element.checked == true || element.premiumIncludedFlag == 'Yes') {
        //             addOnsArr.push(tempArr);
        //             this.selectedAddOnsIds.push(element.optionSelected);
        //         }
        //         }
        //     );
        //     return addOnsArr;
        // },
        // getRiders() {
        //     let addRiderArr = [];
        //     this.selectedPlan2.individualDetails[0].rider.forEach(
        //         (element, index) => {
        //             let tempArr = {
        //                 riderCode: element.ridercode,
        //                 riderTerm: parseInt(element.riderTerm),
        //                 riderSA: parseInt(element.riderSA),
        //                 riderPremiumPayingTerm: parseInt(element.riderPremiumPayingTerm)
        //             }

        //             if(element.checked == true) {
        //                 addRiderArr.push(tempArr);
        //             }
        //         }
        //     );
        //     return addRiderArr;
        // },
        // getPlanId(productCode, selectedAdOns) {
        //     console.log('pcode: ', productCode, 'selectedAdOns: ', selectedAdOns)
        //     //let policyArr = getPlanData();
        //     //console.log('policy array: 99', policyArr);
        //     let productArray = getPlanData()[productCode];
        //     console.log('selected productArray: ', productArray);
        //     var planid = 0;
        //     for(var key in productArray) {
        //         let tempArr = productArray[key];
        //         if(tempArr.sort().join(',')=== selectedAdOns.sort().join(',')){
        //         console.log('matched: Key => ', key);
        //         planid = key;
        //         }
        //     }
        //     return planid;
        // },
        onChangeAmt(event) {
            //console.log(event.target.value);
         //   this.filterPageValues.quoteAmount = parseInt(event.target.value);
            this.apiReqData.personalInformation.individualDetails[0].quoteAmount =
                parseInt(event.target.value);
            //this.apiReqData.product.AddOnSection.
            //console.log(this.apiReqData);
            // this.getPolicy(this.apiReqData);
        },

        getPolicy(apiData) {
            //this.saveQuote();
            if(!this.spdata){
                let msg = ['SP details API not working']
                this.$router.push({ path: '/networkalert', query: {backUrl:'multi-quote', msg: msg }});
            }
            sessionStorage.setItem("quote_request", JSON.stringify(apiData));
            //this.apiReqData = JSON.parse(sessionStorage.getItem("quote_request"));
            var self = this;
            console.log("get policy called");
            let reqData=  { "data" : apiData };
            //let reqData = JSON.stringify(apiData);
            // var  headers={
            //     Authorization: "Basic " + window.btoa(process.env.VUE_APP_USERNPASS),
            //     "Content-Type": "application/json",
            // };
            let headers = {};
            // New Format
            this.loading = true;
            this.backendApi("getPolicies", reqData, headers)
                .then((response) => { 
                this.loading = false;
                this.apiError = false;
                if(response == 'error'||response.status == 'error') {
                    self.apiError = true;
                    console.log("errorrrrrrrrrr")
                    let msg=['We are facing some issue from backend while fetching quotation Api']

          this.$router.push({ path: '/networkalert', query: {backUrl:'addon-rider', msg: msg }});
                } else if(response && response.data.data.quote){ 
                    console.log(response);
                    this.loading = false;
                    this.apiError = false;
                    this.selectedPlan = response.data.data.quote[0];
                    this.selectedPlan.individualDetails[0].rider.forEach(
                        (element, index) => {
                            this.selectedPlan.individualDetails[0].rider[index].checked = true;
                        }
                    );
                    //localStorage.setItem('selectedPlanForCheckout', JSON.stringify(this.selectedPlan));
                    //localStorage.setItem('quoteRequestID', JSON.stringify(response.data.reqId));
                    this.quoteRequestID = response.data.reqId;
                    //sessionStorage.setItem("selectedPlanForCheckout", JSON.stringify(this.selectedPlan));

                    sessionStorage.setItem("selected_plan_data", JSON.stringify(this.selectedPlan));
                    sessionStorage.setItem("quoteRequestID", JSON.stringify(response.data.reqId));

                    

                    // ########################### Setting Required Values ###########################
                    
                    this.wholeLifeAge = this.selectedPlan.supportingData.Messages.wholeLifeAge;
                    console.log('whole life age: ', this.wholeLifeAge);
                    this.premiumPaymentTermArr = this.getPaymentTermValues()
                    
                     if(this.selectedPlan.productDetails.premiumPaymentOption == '3') {

                        this.premiumPaymentTermArr = this.getPaymentTermValues();
                        } else {
                this.premiumPaymentTermArr = [
                this.selectedPlan.productDetails.premiumPaymentTerm,
              ];
            }
                    
                    this.selectedAge =
                    parseInt(this.selectedPlan.individualDetails[0].age) +
                    parseInt(this.selectedPlan.productDetails.policyTerm);

                    // Calling Gate Criteria
                    this.gateCriteria();

                    // Setting Cover For
                    let startCoverFor = parseInt(this.selectedPlan.individualDetails[0].age) +  parseInt(this.selectedPlan.supportingData.validRanges.PolicyTerm.min);
                    //let endCoverFor = parseInt(this.selectedPlan.supportingData.validRanges.PolicyTerm.max);
                    let endCoverFor = this.getMaxAge(this.selectedPlan.insuranceAndProducts.productCode);
                    //console.log('startCoverFor', startCoverFor, 'endCoverFor', endCoverFor)
                    for (var i = startCoverFor; i <= endCoverFor; i++) {
                    this.coverForArr.push(i);
                    }

                    // Setting Premium Payment Frequency
                    this.premiumPaymentFrequency = this.selectedPlan.productDetails.premiumPaymentFrequency;

                    this.optionSelectedArr = this.getFwrConfig(
                        this.selectedPlan.insuranceAndProducts.productCode
                    );

                    this.ppoArr = this.getPpoConfig(
                    this.selectedPlan.insuranceAndProducts.productCode
                    );

                    this.returnOfPremiumPercentage = this.apiReqData.product.AddOnSection.returnOfPremium.returnOfPremiumPercentage;
                    if (
                    this.selectedPlan.productDetails.policyTerm ==
                    99 - parseInt(this.selectedPlan.individualDetails[0].age)
                    ) {
                    //console.log("if block executed");
                    this.isWholeLifeSelected = 1;
                    } else {
                    //console.log("else block executed");
                    this.isWholeLifeSelected = 0;
                    }

                    this.includeAddOnsPremium();
                    this.includeRidersPremium();

                    // ########################### End Setting Required Values ###########################

                    // Quote response api section
                    // let qResData = {
                    //     "ui_quote_id": this.uiQuoteId,
                    //     "quote_response_id": response.data.reqId,
                    //     "annual_income": this.userData.annualincome,
                    //     "quote_response_data": JSON.stringify(response.data.data.quote),
                    // };

                    // this.saveQuoteResponse(qResData);   
                } else if(response.data.errors.length > 0) {
           
                    // let msg = '';
                    // response.data.errors.forEach((element, index) => {
                    // msg += element.errorMessage + '\n';
                    // });
                    let msg=[]
                    for(let i=0;i<response.data.errors.length;i++)
                    {
                        msg.push(response.data.errors[i]["errorMessage"])
                    }
                    let msgError="We are facing some issue while fetching quotation Api"
                    this.$router.push({ path: '/networkalert', query: {backUrl:'gate-criteria',msgError:msgError,reqId:response.data.reqId, msg:msg  }});
                    // alert(msg);
                }
                
            })
            .catch((error) => {
            console.log('error msg', error);
            this.loading = false;
            this.apiError = true;
            let msg=['We are facing some issue from backend while fetching quotation Api']
          this.$router.push({ path: '/networkalert', query: {backUrl:'addon-rider', msg: msg }});
            });
            
        },
        // Configrations
        getFwrConfig(pCode) {
            // Based on DBPMaster
            //console.log('getFwrConfig called', pCode)
            let tempArr = [];
            if (pCode == "T50" || pCode == "T51") {
                tempArr = [4, 5, 6, 7];
            } else if (pCode == "T52") {
                tempArr = [4];
            } else if (pCode == "T53") {
                tempArr = [4];
            } else if (pCode == "40038") {
                tempArr = [4, 5, 6];
            } else if (pCode == "12023") {
                tempArr = [4, 5, 6];
            } else if (pCode == "12013") { // copy of 12023 for testing purpose only
                tempArr = [4, 5, 6];
            } else if (pCode == "T54") {
                tempArr = [4];
            } else if (pCode == "T38") {
                tempArr = [4];
            } else if (pCode == "T41") {
                tempArr = [4];
            } else if (pCode == "T39") {
                tempArr = [4];
            } else if (pCode == "T40") {
                tempArr = [4];
            } else if (pCode == "T55") {
                tempArr = [4, 5, 6, 7];
            } else if (pCode == "T56") {
                tempArr = [4, 5, 6 , 7];
            } else if (pCode == "T43") {
                tempArr = [4];
            } else if (pCode == "T58") {
                tempArr = [4];
            } else if (pCode == "T59") {
                tempArr = [4];
            } else if (pCode == "T60") {
                tempArr = [4];
            } else if (pCode == "T61") {
                tempArr = [4];
            } else if (pCode == "P1C2PL") {
                tempArr = [4];
            } else if (pCode == "12003") {
                tempArr = [4, 6, 8];
            } else if (pCode == "12013") {
                tempArr = [4, 5, 7];
            } else if (pCode == "SamRakSp") {
                tempArr = [4, 5, 6];
            } else if (pCode == "25") {
                tempArr = [4, 6];
            } 
            return tempArr;
        },
        getPpoConfig(pCode) {
            //productMaster table
            //console.log("getppocalled: ", pCode);
            let tempArr = [];
            if (pCode == "T50") {
                tempArr = [1];
            } else if (pCode == "T51") {
                tempArr = [2, 3];
            } else if (pCode == "T52") {
                tempArr = [1];
            } else if (pCode == "T53") {
                tempArr = [2, 3];
            } else if (pCode == "40038") {
                tempArr = [2, 3];
            } else if (pCode == "T54") {
                tempArr = [2];
            } else if (pCode == "T38") {
                tempArr = [2];
            } else if (pCode == "T41") {
                tempArr = [2];
            } else if (pCode == "T39") {
                tempArr = [1];
            } else if (pCode == "T40") {
                tempArr = [1];
            } else if (pCode == "T55") {
                tempArr = [1];
            } else if (pCode == "T56") {
                tempArr = [2, 3];
            } else if (pCode == "T43") {
                tempArr = [2];
            } else if (pCode == "T58") {
                tempArr = [1];
            } else if (pCode == "T59") {
                tempArr = [2, 3];
            } else if (pCode == "T60") {
                tempArr = [1];
            } else if (pCode == "T61") {
                tempArr = [2, 3];
            } else if (pCode == "P1C2PL") {
                tempArr = [1, 2, 3];
            } else if (pCode == "12003") {
                tempArr = [2, 3];
            } else if (pCode == "12013") {
                tempArr = [1, 2, 3];
            } else if (pCode == "SamRakSp") {
                tempArr = [1, 2, 3];
            } else if (pCode == "25") {
                tempArr = [1, 3];
            }
            return tempArr;
        },
        getPaymentTermValues() {
            let pCode = this.selectedPlan.insuranceAndProducts.productCode;
      let policyTerm = this.apiReqData.product.policyTerm;
      let age = this.selectedPlan.individualDetails[0].age;
            //productMaster table
               let tempArr = [];
            if (pCode == "T51") {
        if(this.isWholeLifeSelected == 1) {
          tempArr = [10, 60 - age];
        } else {
          if(this.selectedAge < 65) {
            tempArr = [5, 7, 10, policyTerm - 5];
          } else {
            tempArr = [5, 7, 10, policyTerm - 5, 60 - age];
          }
        }
        } else if (pCode == "T53") {
        tempArr = [policyTerm - 5];
      } else if (pCode == "40038") {
        tempArr = [60 - (age +1)];
      } else if (pCode == "T56") {
        tempArr = [5, 10, policyTerm-5];
      } else if (pCode == "T59") {
        tempArr = [5, 10];
      } else if (pCode == "T60") {
        tempArr = [];
      } else if (pCode == "T61") {
        tempArr = [5, 10, policyTerm-5];
      } else if (pCode == "P1C2PL") {
        tempArr = [];
        for(var i = 5; i< policyTerm; i++) {
          tempArr.push(i);
        }
      } else if (pCode == "12003") {
        tempArr = [10];
      } else if (pCode == "12023") {
        tempArr = [5, 10, 15, 20, (60-age)];
      } else if (pCode == "12013") {
        tempArr = [15, policyTerm];
      } else if (pCode == "SamRakSp") {
        //tempArr = [5, 82];
        if(this.selectedPlan.productDetails.AddOnSection.returnOfPremium.returnOfPremiumPercentage == '100') {
          tempArr = [5, 10, 12];
        } else {
          //let endVal = this.getMinOfTwo(this.selectedPlan.productDetails.policyTerm, 81);
          let endVal = this.getMinOfTwo(this.apiReqData.product.policyTerm, 81);
          //endCoverFor = parseInt(this.selectedPlan.individualDetails[0].age) + this.getMinOfTwo(100 - parseInt(this.selectedPlan.individualDetails[0].age), 82);
          for(var i=5; i <endVal; i++) {
            tempArr.push(i);
          }
        }
        
      } else if (pCode == "25") {
        tempArr = [5, 47];
      } else if (pCode == "ABTLSHLD"){
        tempArr = [6,8,10];
      }
      console.log('mp arr:', tempArr)
        return tempArr;
      },
        // removeAddOns(adOnId) {
        //     this.apiReqData.product.AddOnSection.AddOns = this.getAddOns2(adOnId);
        //     let tmpPlanId = this.getPlanId(this.selectedPlan.insuranceAndProducts.productCode, this.selectedAddOnsIds);
        //     console.log('temp plan id: ', tmpPlanId);

        //     if(tmpPlanId > 0) {
        //         this.apiReqData.product.planOption.OptionSelected = "";
        //     } 
        //     this.getPolicy(this.apiReqData);
        // },
        includeAddOnsPremium() {
            let addOnsAmt = 0;
            this.selectedPlan.productDetails.AddOnSection.addOnSelected.forEach(
                (element, index) => {
                if( element.premiumIncludedFlag == 'No') {
                    addOnsAmt += element.premiumDetails[0].totalPremiumValue;
                }
                }
            );
            this.selectedPlan.individualDetails[0].premiumDetails[0].totalPremiumValue += addOnsAmt;
        },
        includeRidersPremium() {
            let riderAmt = 0;
            this.selectedPlan.individualDetails[0].rider.forEach(
                (element, index) => {
                    riderAmt += element.premiumDetails[0].totalRiderPremiumValue;
                }
            );
            this.selectedPlan.individualDetails[0].premiumDetails[0].totalPremiumValue += riderAmt;
        },
        activePage(val) {
            if (val == "personalInformation") {
                return "active";
            } else {
                return "disabled";
            }
        },
        isTabContentActive(val) {
            if (val == "personalInformation") {
                return "in active";
            } else {
                return "";
            }
        },
        getFinalObject(tempResponse) {
            //console.log('tempResponse: ', tempResponse)
            var tempString = JSON.stringify(tempResponse);
            var updatedString = tempString.replace(/'input' in formInfo\[/g, "formInfo[");
            var updatedString2 = updatedString.replace(/formInfo\[/g, "this.formInfo[");
            var updatedString3 = updatedString2.replace(/userData\[/g, "this.userData[");
            updatedString3 = updatedString3.replace(/selectedPlan\[/g, "this.selectedPlan[");
            //var updatedString3 = updatedString2.replace(/this.this./g, "this.");
            //console.log('final String: ', updatedString3);
            return JSON.parse(updatedString3); 
        },
        setSingleQuoteApiValue(data) {
            // this.apiReqData;
            console.log('setSingleQuoteApiValue: ', data);
            if(data.pathType == 
"array") { // Level 1
                let bsArray;
               // console.log("mp",data.basePath);
                eval('bsArray = ' + 'this.apiReqData' + data.basePath);
                // Finding Index based on condition
                let itemIndex = bsArray.findIndex(item => eval(this.checkAll(data.singleQuoteMappingCondition)));
                 console.log('string: ', 'this.apiReqData' + data.basePath + '[' +itemIndex+ "]['" + data.fieldToMap +"'] = data.input");
                if(data.type == 'number')
                {
                    eval('this.apiReqData' + data.basePath + '[' +itemIndex+ "]['" + data.fieldToMap +"'] = parseInt(data.input)");
                }
                else if(data.type == 'currency'){
                    eval('this.apiReqData' + data.basePath + '[' +itemIndex+ "]['" + data.fieldToMap +"'] = parseInt(data.input)");
                }
                else
                {
                    eval('this.apiReqData' + data.basePath + '[' +itemIndex+ "]['" + data.fieldToMap +"'] = data.input");
                }
                
            } else {
                console.log('data.fieldToMap: ', data.fieldToMap);
                eval('this.apiReqData '+ data.fieldToMap +" = data.input");
            }
            //this.apiReqData.
        },
        checkAll(arrToCheck) {
            let len = arrToCheck.length;
            let str = '';
            for(var i = 0; i < len; i++) {
                if(i == 0) {
                    str += 'item.' + [arrToCheck[i]['key']] + ' == ' + "'" + [arrToCheck[i]['value']] + "'";
                } else {
                    str += ' && item.' + [arrToCheck[i]['key']] + ' == ' + "'" + [arrToCheck[i]['value']] + "'";
                }
            }
            return str;
        },
        getMultiSelectValues(data) {
            //return data;
            // console.log('getMultiSelectValues called: ', data)
            let tempData = [];
            data.forEach(
                (element, index) => {
                tempData.push(element.Text)
                }
            );
            //console.log('getMultiSelectValues called: ', tempData)
            return tempData;
        },
    }
};
</script>

<style scoped lang="scss"></style>