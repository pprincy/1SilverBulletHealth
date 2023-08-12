<template>
  <div class="text-center" v-if="loading" style="padding-top: 50px">
    <loadingPage />
  </div>
  <div v-else class="">
    <Header />

    <div class="wrapper">
      <div class="inner-wrapper">
        <!-- <div>
          <router-link to="/proposer-details">
            <div class="d-flex align-items-center pt-4 pb-2">
              <em class="icon-arrow-left me-3"></em>
              <h3 class="mb-0">Back</h3>
            </div>
          </router-link>
        </div> -->
        <div class="row">

          <!-- Policy Details -->
          <div class="policyname" v-if="selectedPlan">
            <router-link to="/proposer-details" class="back-arrow py-3">
              <img src="~@/assets/images/left-arrow-grey.png" alt="">
              <h3 class="mb-0 ms-1">Back</h3>
            </router-link>
            <!-- <div class="policyname-text d-flex align-items-center justify-content-between mb-3">               -->
              <!-- <div class="d-flex align-items-center">
                <span class="me-3">
                  <img
                    :src="selectedPlan.supportingData.insCompanyLogo"
                    alt=""
                  />
                </span>
                <h6>{{ selectedPlan['insuranceAndProducts']['productName'] }} : {{ selectedPlan.productDetails.planOption.planName }}</h6>
              </div>
              <div class="d-flex justify-content-end flex-column">
                <label v-if="this.applicationNo != '' && this.applicationNo != null " class="appno">Application Number : {{this.applicationNo}}</label>
                <label v-if="this.uiQuoteId != '' && this.uiQuoteId != null " class="propno">Reference Number : {{this.uiQuoteId}}</label>
                <div class="d-flex justify-content-end" v-if="selectedPlan.other.biUrl">
                  <a :href="selectedPlan.other.biUrl" target="_blank">
                    <button class="btn btn-warning rounded-pill text-white p-1 px-3"> Benefit Illustration </button>
                  </a>
                </div>
              </div> -->
            <!-- </div> -->
            
          </div>
          <!-- END: Policy Details -->

          <div class="col-12 col-md-8 prop-dtls-chk-left-panel">
            <div class="pd-left">
              <div class="wizard-hold">
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade active show" id="step6" role="tabpanel" aria-labelledby="step6-tab">
                    <div class="px-4">
                      <div class="floating-form"><br />
                        <h3>You have completed all details</h3>
                        <h6 class="base-reg">Just review the information before payment</h6>
                        <div class="form-wrapper pt-3">
                          <div class="accordion" id="preview">
                            <div class="accordian-wrapper" v-for="(value, ind) in formInfo.fieldGroups" :key="ind">
                              <div class="accordion-item" v-if="ind != 'traceInfo' && ind != 'distributor'">
                                <h2 class="accordion-header" :id="'previewheading_' + ind" v-if="!value.visibility?true:checkVisibility(value.visibility)">
                                  <div class="accordion-button collapsed" data-bs-toggle="collapse"
                                    :data-bs-target="'#previewcollapse_' + ind" aria-expanded="false"
                                    :aria-controls="'previewcollapse_' + ind">
                                    <h4>{{ checkArray(value) ? value[0].label : value.label }}</h4>
                                    <div class="edit fs-14 ms-auto" @click="editDetails(ind)"><em class="bi bi-pencil me-2"></em><span>Edit</span>
                                    </div>
                                  </div>
                                </h2>
                                <div :id="'previewcollapse_' + ind" :class="'accordion-collapse collapse ' + getShow(ind)"
                                  :aria-labelledby="'previewheading_' + ind" data-bs-parent="#preview" style="">
                                  <div class="accordion-body pdc-wrapper">
                                  <div v-if="checkArray(value)">
                                    <div v-for="(data, index) in value" :key="index">
                                      <h3>{{ data.relation }}</h3>
                                      <template class="" v-for="(value2, ind2) in data.fields" :key="ind2">
                                        <div class="mb-4" v-if="value2.type == 'static'">
                                          <div>
                                            <h6>{{ value2["label"] }}</h6>
                                          </div>
                                        </div>
                                        <div class="mb-4">
                                          <div v-if="value2.type == 'single-select'">
                                            <h6>{{ value2["label"] }}</h6>
                                            <b>{{ getSelectValue(value2.value, value2["input"]) }}</b>
                                          </div>
                                          <div v-else-if="value2.type == 'currency'">
                                            <h6>{{ value2["label"] }}</h6>
                                            <b>{{ this.currency(value2["input"]) }}</b>
                                          </div>
                                          <div v-else-if="value2.type == 'multi-select'">
                                            <h6>{{ value2["label"] }}</h6>
                                            <!-- <b>{{ getMultiSelectValue(value2.value, value2["input"]) }}</b> -->
                                            <b>{{ value2["input"].toString() }}</b>
                                          </div>
                                          <div v-else-if="value2.type == 'boolean'">
                                            <h6>{{ value2["label"] }}</h6>
                                            <b>{{ (value2["input"] == '1') ? 'Yes' : 'No' }}</b>
                                          </div>
                                          <div v-else-if="value2.type == 'date'">
                                            <h6>{{ value2["label"] }}</h6>
                                            <b>{{ dateconvert(value2["input"]) }}</b>
                                          </div>
                                          <div v-else-if="value2.type == 'file'">
                                            <h6>{{ value2["label"] }}</h6>
                                            <button type="button" class="btn btn-primary eyeicon-btn" data-toggle="modal"
                                              data-target="#imageModal" v-if="formInfo.fieldGroups[ind].fields[ind2].input"
                                              @click="previewFiles(formInfo.fieldGroups[ind].fields[ind2].input)">
                                              <img src="~@/assets/images/eye.png" alt="" />
                                            </button>
                                          </div>
                                          <div v-else-if="value2.type == 'checkbox'">
                                            <h6>
                                              <img v-if="value2.input" src="~@/assets/images/check-mark.svg"
                                                class="check-markimg" alt="" />
                                              {{ value2["label"] }}
                                            </h6>
                                            <!-- <b>{{ value2["input"] }}</b> -->
                                          </div>
                                          <div v-else>
                                            <h6>{{ value2["label"] }}</h6>
                                            <b>{{ value2["input"] }}</b>
                                          </div>
                                        </div>
                                        <div v-if="value2.input == '0' && value2.type == 'number'">
                                          <!-- to handle case where input is zero and type number -->
                                          <h6>{{ value2["label"] }}</h6>
                                          <b>{{ value2["input"] }}</b>
                                        </div>
                                        <div v-if="value2.input == '0' && value2.type == 'currency'">
                                          <h6>{{ value2["label"] }}</h6>
                                          <b>{{ this.currency(value2["input"]) }}</b>
                                        </div>
                                      </template>


                                      <template v-for="(value2, ind2) in data.fieldGroups" :key="ind2">
                                        <fieldset v-if="!value2.visibility ? true : checkVisibility(value2.visibility)">
                                          <!-- <legend>{{ convertSentenceCase(value2["name"]) }}</legend> -->
                                          <legend>{{ convertSentenceCase(value2["label"]) }} </legend>
                                          <div class="pro-details">
                                            <template class="" v-for="(value3, ind3) in value2.fields" :key="ind3">
                                              <div class="mb-4" v-if="value3.type == 'static'">
                                                <div>
                                                  <h6>{{ value3["label"] }}</h6>
                                                </div>
                                              </div>
                                              <div class="mb-4">
                                                <div v-if="value3.type == 'single-select'">
                                                  <h6>{{ value3["label"] }}</h6>
                                                  <b>{{ getSelectValue(value3.value, value3["input"]) }}</b>
                                                </div>
                                                <div v-else-if="value3.type == 'currency'">
                                                  <h6>{{ value3["label"] }}</h6>
                                                  <b>{{ this.currency(value3["input"]) }}</b>
                                                </div>
                                                <div v-else-if="value3.type == 'multi-select'">
                                                  <h6>{{ value3["label"] }}</h6>
                                                  <!-- <b>{{ getMultiSelectValue(value3.value, value3["input"]) }}</b> -->
                                                  <b>{{ value3["input"].toString() }}</b>
                                                </div>
                                                <div v-else-if="value3.type == 'boolean'">
                                                  <h6>{{ value3["label"] }}</h6>
                                                  <b>{{ (value3["input"] == '1') ? 'Yes' : 'No' }}</b>
                                                </div>
                                                <div v-else-if="value3.type == 'date' && value3.input">
                                                  <h6>{{ value3["label"] }}</h6>
                                                  <b>{{ dateconvert(value3["input"]) }}</b>
                                                </div>
                                                <div v-else-if="value3.type == 'file'">
                                                  <h6>{{ value3["label"] }}</h6>
                                                  <button type="button" class="btn btn-primary eyeicon-btn"
                                                    data-toggle="modal" data-target="#imageModal"
                                                    v-if="formInfo.fieldGroups[ind].fieldGroups[ind2].fields[ind3].input"
                                                    @click="previewFiles(formInfo.fieldGroups[ind].fieldGroups[ind2].fields[ind3].input)">
                                                    <img src="~@/assets/images/eye.png" alt="" />
                                                  </button>
                                                </div>
                                                <div v-else-if="value3.type == 'checkbox'">
                                                  <h6>
                                                    <img v-if="value3.input" src="~@/assets/images/check-mark.svg"
                                                      class="check-markimg" alt="" />
                                                    {{ value3["label"] }}
                                                  </h6>
                                                  <!-- <b>{{ value3["input"] }}</b> -->
                                                </div>
                                                <div v-else>
                                                  <h6>{{ value3["label"] }}</h6>
                                                  <b>{{ value3["input"] }}</b>
                                                </div>
                                              </div>
                                              <div v-if="value3.input == '0' && value3.type == 'number'">
                                                <!-- to handle case where input is zero and type number -->
                                                <h6>{{ value3["label"] }}</h6>
                                                <b>{{ value3["input"] }}</b>
                                              </div>
                                              <div v-if="value3.input == '0' && value3.type == 'currency'">
                                                <h6>{{ value3["label"] }}</h6>
                                                <b>{{ this.currency(value3["input"]) }}</b>
                                              </div>
                                            </template>
                                          </div>
                                        </fieldset>
                                      </template>
                                    </div>
                                  </div>
                                  <div v-else class="">
                                    <div class="pro-details">
                                      <template class="" v-for="(value2, ind2) in value.fields" :key="ind2">
                                        
                                        <div class="mb-4" v-if="value2.type == 'static'">
                                          <div>
                                            <h6>{{ value2["label"] }}</h6>
                                          </div>
                                        </div>
                                      
                                        <div class="mb-4">
                                          <div v-if="value2.type == 'single-select'">
                                            <h6>{{ value2["label"] }}</h6>
                                            <b>{{ getSelectValue(value2.value, value2["input"]) }}</b>
                                          </div>
                                          <div v-else-if="value2.type == 'currency'">
                                            <h6>{{ value2["label"] }}</h6>
                                            <b>{{ this.currency(value2["input"]) }}</b>
                                          </div>
                                          <div v-else-if="value2.type == 'multi-select'">
                                            <h6>{{ value2["label"] }}</h6>
                                            <!-- <b>{{ getMultiSelectValue(value2.value, value2["input"]) }}</b> -->
                                            <b>{{ value2["input"].toString() }}</b>
                                          </div>
                                          <div v-else-if="value2.type == 'boolean'">
                                            <h6>{{ value2["label"] }}</h6>
                                            <b>{{ (value2["input"] == '1') ? 'Yes' : 'No' }}</b>
                                          </div>
                                          <div v-else-if="value2.type == 'date'">
                                            <h6>{{ value2["label"] }}</h6>
                                            <b>{{ dateconvert(value2["input"]) }}</b>
                                          </div>
                                          <div v-else-if="value2.type == 'file'">
                                            <h6>{{ value2["label"] }}</h6>
                                            <button type="button" class="btn btn-primary eyeicon-btn" data-toggle="modal"
                                              data-target="#imageModal" v-if="formInfo.fieldGroups[ind].fields[ind2].input"
                                              @click="previewFiles(formInfo.fieldGroups[ind].fields[ind2].input)">
                                              <img src="~@/assets/images/eye.png" alt="" />
                                            </button>
                                          </div>
                                          <div v-else-if="value2.type == 'checkbox'">
                                            <h6>
                                              <img v-if="value2.input" src="~@/assets/images/check-mark.svg"
                                                class="check-markimg" alt="" />
                                              {{ value2["label"] }}
                                            </h6>
                                            <!-- <b>{{ value2["input"] }}</b> -->
                                          </div>
                                          <div v-else>
                                            <h6>{{ value2["label"] }}</h6>
                                            <b>{{ value2["input"] }}</b>
                                          </div>
                                        </div>
                                        <div v-if="value2.input == '0' && value2.type == 'number'">
                                          <h6>{{ value2["label"] }}</h6>
                                          <b>{{ value2["input"] }}</b>
                                        </div>
                                        <div v-if="value2.input == '0' && value2.type == 'currency'">
                                          <h6>{{ value2["label"] }}</h6>
                                          <b>{{ this.currency(value2["input"]) }}</b>
                                        </div>
                                        
                                      </template>
                                    </div>


                                    <template v-for="(value2, ind2) in value.fieldGroups" :key="ind2">
                                      <fieldset v-if="!value2.visibility ? true : checkVisibility(value2.visibility)">
                                        <!-- <legend>{{ convertSentenceCase(value2["name"]) }}</legend> -->
                                        <legend>{{ convertSentenceCase(value2["label"]) }}</legend>
                                        <div class="pro-details">
                                          <template class="" v-for="(value3, ind3) in value2.fields" :key="ind3">
                                            <div class="mb-4" v-if="value3.type == 'static'">
                                              <div>
                                                <h6>{{ value3["label"] }}</h6>
                                              </div>
                                            </div>
                                            <div class="mb-4">
                                              <div v-if="value3.type == 'single-select'">
                                                <h6>{{ value3["label"] }}</h6>
                                                <b>{{ getSelectValue(value3.value, value3["input"]) }}</b>
                                              </div>
                                              <div v-else-if="value3.type == 'currency'">
                                                <h6>{{ value3["label"] }}</h6>
                                                <b>{{ this.currency(value3["input"]) }}</b>
                                              </div>
                                              <div v-else-if="value3.type == 'multi-select'">
                                                <h6>{{ value3["label"] }}</h6>
                                                <!-- <b>{{ getMultiSelectValue(value3.value, value3["input"]) }}</b> -->
                                                <b>{{ value3["input"].toString() }}</b>
                                              </div>
                                              <div v-else-if="value3.type == 'boolean'">
                                                <h6>{{ value3["label"] }}</h6>
                                                <b>{{ (value3["input"] == '1') ? 'Yes' : 'No' }}</b>
                                              </div>
                                              <div v-else-if="value3.type == 'date' && value3.input">
                                                <h6>{{ value3["label"] }}</h6>
                                                <b>{{ dateconvert(value3["input"]) }}</b>
                                              </div>
                                              <div v-else-if="value3.type == 'file'">
                                                <h6>{{ value3["label"] }}</h6>
                                                <button type="button" class="btn btn-primary eyeicon-btn"
                                                  data-toggle="modal" data-target="#imageModal"
                                                  v-if="formInfo.fieldGroups[ind].fieldGroups[ind2].fields[ind3].input"
                                                  @click="previewFiles(formInfo.fieldGroups[ind].fieldGroups[ind2].fields[ind3].input)">
                                                  <img src="~@/assets/images/eye.png" alt="" />
                                                </button>
                                              </div>
                                              <div v-else-if="value3.type == 'checkbox'">
                                                <h6>
                                                  <img v-if="value3.input" src="~@/assets/images/check-mark.svg"
                                                    class="check-markimg" alt="" />
                                                  {{ value3["label"] }}
                                                </h6>
                                                <!-- <b>{{ value3["input"] }}</b> -->
                                              </div>
                                              <div v-else>
                                                <h6>{{ value3["label"] }}</h6>
                                                <b>{{ value3["input"] }}</b>
                                              </div>
                                            </div>
                                            <div v-if="value3.input == '0' && value3.type == 'number'">
                                              <!-- to handle case where input is zero and type number -->
                                              <h6>{{ value3["label"] }}</h6>
                                              <b>{{ value3["input"] }}</b>
                                            </div>
                                            <div v-if="value3.input == '0' && value3.type == 'currency'">
                                              <h6>{{ value3["label"] }}</h6>
                                              <b>{{ this.currency(value3["input"]) }}</b>
                                            </div>
                                          </template>
                                        </div>


                                        <!-- 333333 -->
                                        <template v-for="(value3, ind3) in value.fieldGroups[ind2].fieldGroups"
                                          :key="ind3">
                                          <fieldset v-if="!value3.visibility ? true : checkVisibility(value3.visibility)">
                                            <legend>{{ convertSentenceCase(value3["label"]) }}</legend>
                                            <div class="pro-details">
                                              <template class="" v-for="(value4, ind4) in value3.fields" :key="ind4">
                                                <div class="mb-4" v-if="value4.type == 'static'">
                                                  <div>
                                                    <h6>{{ value4["label"] }}</h6>
                                                  </div>
                                                </div>
                                                <div class="mb-4">
                                                  <div v-if="value4.type == 'single-select'">
                                                    <h6>{{ value4["label"] }}</h6>
                                                    <b>{{ getSelectValue(value4.value, value4["input"]) }}</b>
                                                  </div>
                                                  <div v-else-if="value4.type == 'currency'">
                                                    <h6>{{ value4["label"] }}</h6>
                                                    <b>{{ this.currency(value4["input"]) }}</b>
                                                  </div>
                                                  <div v-else-if="value4.type == 'multi-select'">
                                                    <h6>{{ value4["label"] }}</h6>
                                                    <!-- <b>{{ getMultiSelectValue(value4.value, value4["input"]) }}</b> -->
                                                    <b>{{ value4["input"].toString() }}</b>
                                                  </div>
                                                  <div v-else-if="value4.type == 'boolean'">
                                                    <h6>{{ value4["label"] }}</h6>
                                                    <b>{{ (value4["input"] == '1') ? 'Yes' : 'No' }}</b>
                                                  </div>
                                                  <div v-else-if="value4.type == 'date' && value4.input">
                                                    <h6>{{ value4["label"] }}</h6>
                                                    <b>{{ dateconvert(value4["input"]) }}</b>
                                                  </div>
                                                  <div v-else-if="value4.type == 'file'">
                                                    <h6>{{ value4["label"] }}</h6>
                                                    <button type="button" class="btn btn-primary eyeicon-btn"
                                                      data-toggle="modal" data-target="#imageModal"
                                                      v-if="formInfo.fieldGroups[ind].fieldGroups[ind2].fieldGroups[ind3].fields[ind4].input"
                                                      @click="previewFiles(formInfo.fieldGroups[ind].fieldGroups[ind2].fieldGroups[ind3].fields[ind4].input)">
                                                      <img src="~@/assets/images/eye.png" alt="" />
                                                    </button>
                                                  </div>
                                                  <div v-else-if="value4.type == 'checkbox'">
                                                    <h6>
                                                      <img v-if="value4.input" src="~@/assets/images/check-mark.svg"
                                                        class="check-markimg" alt="" />
                                                      {{ value4["label"] }}
                                                    </h6>
                                                    <!-- <b>{{ value4["input"] }}</b> -->
                                                  </div>
                                                  <div v-else>
                                                    <h6>{{ value4["label"] }}</h6>
                                                    <b>{{ value4["input"] }}</b>
                                                  </div>
                                                </div>
                                                <div v-if="value4.input == '0' && value4.type == 'number'">
                                                  <!-- to handle case where input is zero and type number -->
                                                  <h6>{{ value4["label"] }}</h6>
                                                  <b>{{ value4["input"] }}</b>
                                                </div>
                                                <div v-if="value4.input == '0' && value4.type == 'currency'">
                                                  <h6>{{ value4["label"] }}</h6>
                                                  <b>{{ this.currency(value4["input"]) }}</b>
                                                </div>
                                              </template>
                                            </div>
                                          </fieldset>
                                        </template>
                                        <!-- 333333 -->



                                      </fieldset>
                                    </template>
                                  </div>



                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="btn-hold pb-4 text-center mt-4">
                          <!-- <button type="button"
                            class="btn btn-outline-secondary rounded-pill mx-2"><em
                              class="bi bi-chevron-left me-2"></em><span>Previous</span>
                          </button> -->
                          <button type="button" class="btn btn-warning rounded-pill text-white mx-2" @click="buyPolicy()">
                            <span>Proceed</span>
                            <em class="bi bi-chevron-right ms-2"></em>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 prop-dtls-chk-right-panel">
            <div class="pd-right sticky-top" v-if="selectedPlan">
              <div class="pd-right-section1 shadow">
                <div class="poposer-header d-flex justify-content-between align-items-center">
                  <h3>Policy Details</h3>
                <div class="ref-num">
                <label v-if="this.applicationNo != '' && this.applicationNo != null " class="appno">Application Number : {{this.applicationNo}}</label>
                <label v-if="this.uiQuoteId != '' && this.uiQuoteId != null " class="propno">CRN : {{this.uiQuoteId}}</label>
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
                      <h6>{{ selectedPlan['insuranceAndProducts']['productName'] }} <br/> {{ selectedPlan.productDetails.planOption.planName }}</h6>
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
                        <h6>Sum Insured</h6>
                        <span><em class="rupee">&#x20B9;</em> {{
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
                        <span>&#8377;
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
                        <h6>GST</h6>
                        <span>&#8377;
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
        <!--row-->

        <!-- Session Expiry Alert -->
        <div v-if="editProposalFlag" id="editProposalAlert" class="custom-warning-alert modal fade show">
          <div class="modal-backdrop fade show"></div>
          <div class="modal-dialog modal-dialog-centered premium-modal">
            <div class="modal-content">
              <div class="modal-header">
                <div class="icon-box">
                  <i class="bi bi-exclamation-lg"></i>
                </div>
                <h5 class="modal-title pt-4 px-5">Edit Proposal Warning!</h5>
                <!-- <button type="button" @click="closeAlertDialog()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
              </div>
              <div class="modal-body">
                <p><span class="p-2" style="text-align: center; font-weight: bold; color: #0a3f88; float: right;"> Do you really want to edit these details?</span></p>
              </div>
              <div class="modal-footer justify-content-center">
                <!-- <button id = "close" class="btn btn-warning text-white btn-sm" @click="closeAlertDialog()"> Close</button> -->
                  <button type="button" class="btn text-white btn-sm" @click="editProposalCancel()" style="width:100px" >Cancel</button>
                  <button type="button" class="btn text-white btn-sm" @click="editProposalOk()" style="width:100px" >Ok</button>
              </div>
            </div>
          </div>
        </div>
        <!-- ./Session Expiry Alert -->
      </div>
    </div>
  </div>
</template>
  
<script>
import Header from "@/components/Header.vue";
import loadingPage from "@/components/loading.vue";
import moment from 'moment';
//import { getPaySettings } from '@/mixins/common';
import $ from "jquery";
export default {
  name: "ProposerDetailsCheckpage",
  components: {
    Header,
    loadingPage,
  },
  mixins: [],
  mounted() {

    console.log('store data: ', this.$store.state.configData);
    this.configData = this.$store.state.configData;

    this.channel_type = JSON.parse(sessionStorage.getItem("channel_type"));

    this.requestJson = JSON.parse(sessionStorage.getItem("request_json"));
    this.selectedPlan = JSON.parse(sessionStorage.getItem("selected_plan_data"));
    this.proposalUiId = JSON.parse(sessionStorage.getItem("proposal_ui_id"));
    
    console.log("this.selectedPlan: ", this.selectedPlan);
    if (sessionStorage.getItem('uiQuoteId')) {
      this.uiQuoteId = JSON.parse(sessionStorage.getItem('uiQuoteId'));
    }
    // DP Relaetd
    let sessionData = sessionStorage.getItem("userProfile");
    if (sessionData != null) {
      this.userData = JSON.parse(sessionData);
      this.selectedMembersList = this.userData.memberList;
      console.log("this.userData: ", this.userData.memberList);
    }

    this.rmData = JSON.parse(sessionStorage.getItem("rm_data"));

    this.selectedPolicyIndex = this.getSelectedPolicyIndex(
      this.requestJson.data.product.policyTerm
    );

    this.formInfo = JSON.parse(sessionStorage.getItem("filledData"));
    this.proposalJson = this.formInfo;

    if (!this.formInfo) {
      // Redirecction Logic

    } else {
      //console.log(this.formInfo)
      console.log('this.form info iii: ', this.formInfo);

      //let containerObject = new JSONObject(this.formInfo);
      //has method
      // if (this.formInfo.fieldGroups.otpDetails) {
      //   //get Value of video
      //   console.log('otp present');
      // } else {
      //   console.log('otp not present');
      // }
    }

    this.noOfAdult = 0;
    this.noOfChild = 0;
    for (let i = 0; i < this.selectedPlan.individualDetails.length; i++) {
      if (this.selectedPlan.individualDetails[i].insuredRelWithProposer == 'Son' || this.selectedPlan.individualDetails[i].insuredRelWithProposer == 'Daughter') {
        this.noOfChild++;
      } else {
        this.noOfAdult++;
      }
    }


  },
  props: {},
  data() {
    return {
      configData: "",
      loading: false,
      channel_type: "",
      noOfAdult: 0,
      noOfChild: 0,
      requestJson: "",
      selectedPlan: "",
      proposalJson: "",
      formInfo: {},
      errorCounter: 0,
      userData: "",
      selectedMembersList: [],
      proposalUiId: 0,
      rmData: "",
      filledData: "",
      proposalUiId: "",
      channel_type: "",
      editProposalFlag: false,
      tabIndexToEdit: "",
    };
  },
  methods: {
    buyPolicy() {
      //this.convertProposalJson();
      this.channel_type = JSON.parse(sessionStorage.getItem("channel_type"));
      if(this.channel_type == "B2B") // B2B case
      {
        console.log('inside b2b');
        this.updateProposalStatus(11);
        this.sendMailToCustomer();   
      }
      else // B2C case
      { 
      
        console.log('B TO C');
        var resumeLink= new URL(location).origin+"/#/proposal-details-check-diy?proposalId="+this.proposalUiId+'&transactionId='+this.rmData['transaction_id'];
        window.location.href = resumeLink;

      }
    },
    sendMailToCustomer()
    {
      this.loading = true;
      console.log('sendMailToCustomer: called')
      console.log(new URL(location).origin+"/#/proposal-details-check-diy");
      let rmData = JSON.parse(sessionStorage.getItem("rm_data"));
      console.log(rmData);
      var resumeLink= new URL(location).origin+"/#/proposal-details-check-diy?proposalId="+this.proposalUiId+'&transactionId='+rmData['transaction_id'];
      console.log("printResumeLink",resumeLink);
      
        let qData = {
                      data:{
                        "distributor": {
                          "distributorID": this.requestJson.data.distributor.distributorID,
                          "channelType": this.channel_type,
                        },
                        //"distributorID": "BCIBL",
                        "eventName": "reviewAndPayHealth",
                        "data": [
                          {
                              "resumeLink": resumeLink,
                              "mobileNumber": this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['mobileNumber']['input'],
                              "channel": "sms"
                          },
                          {
                              "resumeLink": resumeLink,
                              "fullName": this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['firstName']['input'] + " " + this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['lastName']['input'],
                              "productName": this.selectedPlan["insuranceAndProducts"]["productName"],
                              "emailId": [this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['email']['input']],
                              "channel": "email"
                          }
                        ]
                      }
                    }
        var headers = {
          "quoteId":this.uiQuoteId,
          Authorization: "Basic " + window.btoa(process.env.VUE_APP_USERNPASS),
          "Content-Type": "application/json",
        };
        this.backendApi("sendEmailandSMS", qData, headers)
          .then((response) => {
            //console.log('save quote response: ', response);
            this.loading = false;
            if(response == 'error') {
              self.apiError = true;
            // let msg=['We are facing some issue while sending an e-mail']

            // this.$router.push({ path: '/networkalert', query: {backUrl:'proposal-details-check', msg: msg }});
              // alert("Error occurred while sending Mail. Please try again!");
            }
            else if(response.status.error=="error")
            {
              let msg=['We are facing some issue while sending an e-mail']

              this.$router.push({ path: '/networkalert', query: {backUrl:'proposal-details-check', msg: msg }});
            }
            else if(response && response.data) {
              console.log('inside thank you page redirection block');
              this.$router.push('/thankyoumail');
              //window.location.href = new URL(location).origin
              
            }
          })
          .catch((error) => {
            console.log('error msg block email', error);
          let msg=['We are facing some issue from backend while sending an e-mail']
            this.$router.push({ path: '/networkalert', query: {backUrl:'proposal-details-check', msg: msg }});
          });
    },
    updateProposalStatus(statusid)
    {
        let qData = {
          "proposal_ui_id":this.proposalUiId,
          "status_id": statusid
          };
        var headers = {
          "quoteId":this.uiQuoteId,
          Authorization: "Basic " + window.btoa(process.env.VUE_APP_USERNPASS),
          "Content-Type": "application/json",
        };
        
        this.backendApi("ProposalStatus", qData, headers)
          .then((response) => {
            if(response == 'error') {
              self.apiError = true;
              // let msg=['We are facing some issue while saving proposal status']
              // this.$router.push({ path: '/alert-diy', query: {msg: msg }});
            }
            
             else if(response && response.data) {
              console.log('proposal status updated: ', response.data)
            }
          })
          .catch((error) => {
            console.log('error msg block email', error);
            // let msg=['We are facing some issue from backend while saving proposal status']
            //   this.$router.push({ path: '/alert-diy', query: {msg: msg }});
          });
    },
    isAreaSelected(val) {
      if (val == "proposerDetails") {
        //return "true";
      }
    },
    checkArray(data) {
      return Array.isArray(data);
    },
    getShow(tab) {
      if (tab == 'proposerDetails') {
        return "show";
      } else {
        return '';
      }
    },
    activePage(val) {
      if (val == "proposerDetails") {
        return "active";
      } else {
        //return "disabled";
        return "";
      }
    },
    convertSentenceCase(value) {
      const result = value.replace(/([A-Z])/g, " $1");
      const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
      return finalResult;
    },
    isTabContentActive(val) {
      if (val == "proposerDetails") {
        return "show active";
      } else {
        //return "disabled";
        return "";
      }
    },
    getSelectValue(array, val) {
      if (array) {
        let itemIndex = array.findIndex(item => item.Value == val);
        if (array[itemIndex]) {
          return array[itemIndex]['Text'];
        }
      } else {
        return '';
      }
    },
    dateconvert(value) {
      const formattedDate = moment(value).format('DD/MM/YYYY')
      // console.log(formattedDate)
      return formattedDate;
    },
    getColSize(val, ind1, ind2) {
      if (ind1 == "healthQuestions") {
        return "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12";
      } else if (val == "boolean") {
        return "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12";
      } else {
        return "col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4";
      }
    },
    currency(amt) {
      //return new Intl.NumberFormat().format(amt);
      let tmpAmt = parseFloat(amt).toFixed(2);
      return new Intl.NumberFormat().format(tmpAmt);
    },
    getDescriptionText(str) {
      let descText = "";
      if (str) {
        var check = str.includes("#");
        if (check) {
          let tempArr = str.split("#");
          descText = tempArr[0];
        } else {
          descText = str;
        }
      } else {
        descText = "";
      }
      return descText;
    },
    getVisitibilityExp(exp, index) {
      console.log("getVisitibilityExp called: ", exp, index);
      let ind = "'" + index + "'";
      let result = exp.replace(/index/g, ind);
      //console.log('final index: ', ind);
      //console.log('final index result: ', result);
      return result;
    },
    getVisitibilityExpIndexZero(exp) {
      let length = this.proposalJson.fieldGroups.insuredMembers.length;
      let tempResult = "";
      for (var i = 0; i < length; i++) {
        if (i > 0) {
          tempResult += " || (" + exp.replace(/index/g, i) + ")";
        } else {
          tempResult = "(" + exp.replace(/index/g, i) + ")";
        }
      }
      return tempResult;
    },
    checkVisibility(value) {
      //console.log("check Visibility called: ", value);
      // default expression evalutiona added along with visibility
      if (value) {
        let obj = this.getFinalObject(value);
        try {
          return eval(obj);
        } catch (err) {
          console.log("error exp: ", value);
        }
      } else {
        return true;
      }
    },
    getDescriptionTextArray(str) {
      let tempArr = [];
      if (str) {
        var check = str.includes("#");
        if (check) {
          tempArr = str.split("#");
        } else {
          tempArr[0] = str;
          tempArr[1] = str;
        }
      } else {
        tempArr[0] = "";
        tempArr[1] = "";
      }

      return tempArr;
    },
    getDescriptionText(str) {
      let descText = "";
      if (str) {
        var check = str.includes("#");
        if (check) {
          let tempArr = str.split("#");
          descText = tempArr[0];
        } else {
          descText = str;
        }
      } else {
        descText = "";
      }
      return descText;
    },
    checkValidation(value, label = "") {
      //console.log('check Validation called: ', value);
      if (value) {
        let obj = this.getFinalObject(value);
        try {
          return eval(obj);
        } catch (err) {
          console.log("error exp 2: ", value);
          return true;
        }
      } else {
        //return false;
      }
    },
    getFinalObject(tempResponse) {
      //console.log('tempResponse: ', tempResponse)
      var tempString = JSON.stringify(tempResponse);
      var updatedString = tempString.replace(
        /'input' in formInfo\[/g,
        "formInfo["
      );
      var updatedString2 = updatedString.replace(
        /formInfo\[/g,
        "this.formInfo["
      );
      //var updatedString3 = updatedString2.replace(/this.this./g, "this.");
      //console.log('final String: ', updatedString3);
      return JSON.parse(updatedString2);
    },
    getMemberWiseInput(healthQues) {
      console.log("getMemberWiseInput: ", healthQues);
      var tempString = JSON.stringify(healthQues);
      //console.log('hhhhhhhhhhhhhhhh: ', tempString);membersInputJson
      //var updatedString = tempString.replace(/"input":""/g, '"input":[{"memberSequenceNumber": "1","answer": "0"},{"memberSequenceNumber": "2","answer": "0"},{"memberSequenceNumber": "3","answer": "0"}]');
      var updatedString = tempString.replace(
        /"input":""/g,
        '"input":' + JSON.stringify(this.membersInputJson)
      );
      //console.log('getMemberWiseInput: updated', JSON.parse(updatedString));
      return JSON.parse(updatedString);
    },
    activeNextTab(currentTab) {
      console.log("active next tab called", this.tabsArr);
      let ckk = this.checkVisibility(
        this.formInfo["fieldGroups"][currentTab]["visibility"]
      );
      if (ckk == true) {
        // Setting Up Filled Tab on localstorage
        /* localStorage.setItem("filledDataTab", JSON.stringify(currentTab));
                sessionStorage.setItem("filledDataTab", JSON.stringify(currentTab));
 
                localStorage.setItem("filledData", JSON.stringify(this.formInfo));
                sessionStorage.setItem("filledData", JSON.stringify(this.formInfo)); */
      }

      var tabIndex = this.tabsArr.indexOf(currentTab);
      let nextTab;
      //console.log('tab index: ', tabIndex)
      if (tabIndex < this.tabsArr.length - 1) {
        nextTab = this.tabsArr[tabIndex + 1];
        //console.log('next tab: ', nextTab);
      } else {
        // If conntrol is on last tab
        console.log("inside: conntrol is on last tab");
        //this.$router.push('/proposaldetailscheck');
      }
      if (nextTab) {
        this.activeTab(nextTab);
      }
    },
    activeTab(tabToActive) {
      console.log("ativeTab Called", tabToActive);

      // Scroll Top
      //this.scrollToTop();

      console.log(
        "vb logic: ",
        this.formInfo["fieldGroups"][tabToActive]["visibility"]
      );
      let ckk = this.checkVisibility(
        this.formInfo["fieldGroups"][tabToActive]["visibility"]
      );
      if (ckk == true) {
        //console.log('this.tabsArr', this.tabsArr)
        this.currentTab = tabToActive;
        sessionStorage.setItem("currentTab", JSON.stringify(this.currentTab));

        for (var i = 0; i < this.tabsArr.length; i++) {
          var tab = this.tabsArr[i];
          if ($("#step" + tab + "-tab").hasClass("active")) {
            console.log("inside tab active");
            $("#step" + tab + "-tab").removeClass("active");
            $("#step" + tab + "-tab").attr("aria-selected", "false");
            //$("#step" + tab + '-tab').addClass("disabled");
            $("#step" + tab).removeClass("show active");
          }
        }
        if ($("#step" + tabToActive + "-tab").hasClass("disabled")) {
          $("#step" + tabToActive + "-tab").removeClass("disabled");
        }
        $("#step" + tabToActive + "-tab").addClass("active");
        $("#step" + tabToActive).addClass("show active");
        $("#step" + tabToActive + "-tab").attr("aria-selected", "true");
      } else {
        this.activeNextTab(tabToActive);
      }
    },
    goBack() {
      this.currentTab = JSON.parse(sessionStorage.getItem("currentTab"));
      console.log("current tab: ", this.currentTab);
      var tabIndex = this.tabsArr.indexOf(this.currentTab);
      this.activePrevTab(this.currentTab);
    },
    activePrevTab(tabToActive) {
      console.log("active prev tab called", this.tabsArr);
      var tabIndex = this.tabsArr.indexOf(tabToActive);
      if (tabIndex > 0) {
        console.log("inside prev tab true");
        let prevTab = this.tabsArr[tabIndex - 1];
        //console.log('uuu: ', this.formInfo['fieldGroups'][prevTab]['visibility']);
        let ckk = this.checkVisibility(
          this.formInfo["fieldGroups"][prevTab]["visibility"]
        );
        if (ckk == true) {
          this.activeTab(prevTab);
        } else {
          this.activePrevTab(prevTab);
        }
      } else {
        this.$router.push("/checkout");
      }
    },
    convertInLakh(amt) {
      if (amt < 10000000) {
        return amt / 100000 + " Lac";
      } else {
        return amt / 10000000 + " Cr.";
      }
    },
    getSelectedPremium(pTerm) {
      let itemIndex =
        this.selectedPlan.productDetails.premiumForEachPolicyTerm.findIndex(
          (item) => item.policyTerm == pTerm
        );
      if (itemIndex > -1) {
        return this.selectedPlan.productDetails.premiumForEachPolicyTerm[
          itemIndex
        ];
      }
    },
    getSelectedPolicyIndex(pTerm) {
      let itemIndex =
        this.selectedPlan.productDetails.premiumForEachPolicyTerm.findIndex(
          (item) => item.policyTerm == pTerm
        );
      if (itemIndex > -1) {
        return itemIndex;
      }
    },
    checkPattern(value, pattern) {
      try {
        return true;
        return eval(eval(pattern).test(value));
      } catch {
        console.log("Invalid regular expression: ", pattern);
        return true;
      }
    },
    editDetails(tabIndex) {
      this.editProposalFlag = true;
      this.tabIndexToEdit = tabIndex;
    },
    editProposalCancel() {
      this.editProposalFlag = false;
    },
    editProposalOk(){
      console.log('edit inside');
      self.editProposalFlag = false;
      sessionStorage.setItem("filledDataTab", JSON.stringify(this.tabIndexToEdit));
      this.$router.push('/proposer-details');
    },
    closeAlertDialog() {
      this.editProposalFlag = false;
    }
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
  