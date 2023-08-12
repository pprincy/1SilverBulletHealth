<template>
    <!-- <div class="text-center" v-if="loading" style="padding-top: 50px">
      <loadingPage />
    </div> -->
  <div class="loading_block_outer" v-if="loading">
    <Loading3 :msg='loadingMessage'/>
    <div class="snippet" data-title=".dot-spin">
      <div class="stage">
        <div class="dot-spin"></div>
      </div>
    </div>
  </div>
  <div v-else class="">
    <Header />

    <div class="wrapper">
      <div class="inner-wrapper">
        <div class="row">
          <div class="col-12 col-md-12">
           
            <div class="pd-left">
              <div class="wizard-hold">
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade active show" id="step6" role="tabpanel" aria-labelledby="step6-tab">
                    <div class="px-4 pb-5">
                      <div class="floating-form"><br />
                        <div class="error-msg text-center" :innerHTML="errorMsgs">
                          <!-- {{ errorMsgs }} -->
                        </div><br />
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
                                    <div class="edit fs-14 ms-auto">
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
                        <!-- <div class="btn-hold text-center mt-4">
                          <button type="button" class="btn btn-warning rounded-pill text-white mx-2" @click="buyPolicy()">
                            <span>Proceed</span>
                            <em class="bi bi-chevron-right ms-2"></em>
                          </button>
                        </div> -->



                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--row-->

        <!-- Footer Code --><br/><br/><br/>
        <div class=" d-flex justify-content-center">
          <div
              class="
              footer-total-premium
              d-flex
              justify-content-between
              align-items-center
              position-absolute
              "
              >
              <div class="total-premium">
                <b>Total Premium: </b>
                &#8377;
                <strong>{{
                this.currency(this.tpv)
                }}</strong
                    >/{{
                getPayMode(this.pMode)
                }}
                <span class="feature-name">
                    <img src="~@/assets/images/info-button.png" alt=""/> 
                    <div class="tooltip-sec">
                      <table>
                          <tr>
                            <td>  
                                Premium:
                            </td>
                            <td>₹ 
                                {{
                                this.currency(this.pv)
                                }}
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">  
                                Taxes:
                            </td>
                            <td>₹  
                                {{this.currency(this.tv)}}
                            </td>
                          </tr>
                      </table>
                    </div>
                </span>
                <div >
                    <span class="premium-tax">Premium (Including Taxes)</span>
                    <!-- <span v-if="this.fpmultiFactor!='1'" class="premium-tax">In case of {{this.finalplanname}} frequency, {{this.fpmultiFactor}} time of premium will be collected.</span> -->
                </div>
              </div>
              <div v-if="this.b2c=='true'">
                <button type="submit" class="next-btn mt-0 d-flex justify-content-center align-items-center" id="accept" data-toggle="modal" data-target="#otpModal" @click="generateOTP()">
                Proceed <i><img src="~@/assets/images/next-arrow.png" /></i>
                </button>
              </div>
              <div v-else class="bttn-grp d-flex">
                <div v-if="payResponse.status != 'success'">
                  <button type="submit" class="next-btn mb-4" id="accept" data-bs-toggle="modal" data-bs-target="#otpModal" v-on:click="generateOTP()">
                  Accept 
                  </button>&nbsp;&nbsp;
                  <button type="submit" class="next-btn mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Reject 
                  </button>
                </div>
              </div>
          </div>
        </div>
        <!-- END: Footer Code-->

        <!-- OTP Modal Code -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Reason for Rejection</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Please mention your reasons here in less than 500 words" v-model="message" :maxlength=500 rows="3"></textarea>
                </div>
                <div class="modal-footer justify-content-center" >
                    <button type="button" class="next-btn2 mb-4 me-2" data-dismiss="modal" style="width:100px">Close</button>
                    <button type="button" class="next-btn2 mb-4" data-dismiss="modal" style="width:100px" @click="rejectedProposal()">Submit</button>
                </div>
              </div>
          </div>
        </div> 
        <div class="modal fade" id="otpModal" tabindex="-1" role="dialog" aria-labelledby="otpModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="loading_block_outer" v-if="loadingOTP">
                    <Loading3 :msg='loadingMessage'/>
                    <div class="snippet" data-title=".dot-spin">
                      <div class="stage">
                          <div class="dot-spin"></div>
                      </div>
                    </div>
                </div>
                <div class="modal-header">
                    <h5 class="modal-title">Validate OTP</h5>
                    <button type="button" class="btn-close" @click="otpModalReset()" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <input class="form-control" id="exampleFormControlTextarea2" placeholder="Please enter your 6 digit OTP" v-model="otp" :maxlength=6 />
                    <span v-if="otpSent != null" style="font-size:13px"> {{ otpSent }} </span>
                    <label class = "p-2" v-if="otpMessage != 'No'" for="exampleFormControlTextarea2"> {{ otpValid }} </label>
                    <a v-if="!disabledResend" style="float: right;"> 
                    <button class="cursor-pointer p-2" @click="generateOTP()" style="color:red; border:none; background-color:white;">Resend</button>
                    </a>
                    <a v-else style="font-weight: bold; color: #0a3f88; float: right;">
                    <span v-if="otpSent != null" class="p-2" > {{timerMinutes}}:{{timerSeconds}}</span>
                    </a>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="next-btn2 mb-4 me-2" data-dismiss="modal" @click="otpModalReset()" style="width:100px" >Close</button>
                    <button type="button" class="next-btn2 mb-4" @click="validateOTP()" style="width:100px" >Submit</button>
                </div>
              </div>
          </div>
        </div>
        <!-- END: OTP Modal Code -->
       

      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/HeaderDiy.vue";
import Loading3 from "@/components/loading3.vue";
import {getLogoutURL, getConsumer} from '@/mixins/common';
import moment from 'moment';
//import { getPaySettings } from '@/mixins/common';
import $ from "jquery";
export default {
  name: "ProposerDetailsCheckDiypage",
  components: {
    Header,
    Loading3,
  },
  mixins: [],
  mounted() {
    //console.log('store data: ', this.$store.state.configData);
    if(this.$store.state.configData) {
      this.configData = this.$store.state.configData;
    } else {
      this.getConfigData();
    }

    if(sessionStorage.getItem("kyc_response")) {
      this.kycData = JSON.parse(sessionStorage.getItem("kyc_response")); 
    }

    this.channel_type = JSON.parse(sessionStorage.getItem("channel_type"));
    if(this.$route.query.proposalId) {

      this.checkProposalStatus(this.$route.query.proposalId);

      this.proposalUiId = this.$route.query.proposalId;
      this.transactionId = this.$route.query.transactionId;
      console.log('proposalUiId: ', this.proposalUiId);
      console.log('transactionId: ', this.transactionId);
      let arr = this.transactionId.split("/");
      let rmId = arr[0];
      this.getProposalById(this.proposalUiId,rmId);
    } else if(this.$route.query.response) {
      // If payment response
      this.proposalUiId = JSON.parse(sessionStorage.getItem("proposal_ui_id"));
      this.quoteRequest = JSON.parse(sessionStorage.getItem("quote_request"));
      this.selectedPlan = JSON.parse(sessionStorage.getItem("selectedPlanForCheckout"));
      this.selectedPremiumPlan = JSON.parse(sessionStorage.getItem("selected_plan_data"));
      this.quoteRequestID = JSON.parse(sessionStorage.getItem("quoteRequestID"));
      this.insurerCode = this.selectedPlan.insuranceAndProducts.insuranceCompanyCode;
      this.productCode = this.selectedPlan.insuranceAndProducts.productCode;
      this.formInfo = JSON.parse(sessionStorage.getItem("filledData"));
      this.uiQuoteId = JSON.parse(sessionStorage.getItem("uiQuoteId"));
      
      this.tpv=this.selectedPremiumPlan.totalPremiumDetails[0].totalPremiumWithTax;
      //this.pMode=this.selectedPremiumPlan.individualDetails[0].premiumDetails[0].mode
      this.pv=this.selectedPremiumPlan.totalPremiumDetails[0].totalPremiumValue;
      this.tv=this.selectedPremiumPlan.totalPremiumDetails[0].totalTax;
      let tmpRes = this.$route.query.response;

      //var updatedRes = tmpRes.replace(/'/g,"'");
      let updatedRes = tmpRes.replace(/'/g, '"');
      this.payResponse = JSON.parse(updatedRes);
      sessionStorage.setItem("pay_response", JSON.stringify(this.payResponse));
      console.log("pay response: ", this.payResponse);

      let req = {
        "proposal_id": "",
        "proposal_ui_id": this.proposalUiId,
        "transaction_id": this.payResponse.transactionId,
        "payment_ammount": parseInt(this.payResponse.txnAmount),
        "payment_status": this.payResponse.status,
        "payment_remark": "Remark not available"
      };

      this.savePaymentDetails(req);

    }
  },
  data()
  {
    return{
      policyNo: "",
      applicationNo: "",
      channel_type: "",
      tpv:"",
      pMode:"",
      pv:"",
      b2c:true,
      tv:"",
      fpmultiFactor:"",
      finalplanname:"",
      loading: false,
      proposalUiId: "",
      transactionId: "",
      formInfo: "",
      uiQuoteId: "",
      otpTransactionId: "",
      otpExpiryTime: "",
      otp: "",
      otpSent: "",
      otpValid: "",
      loadingOTP: "",
      loadingMessage: "",
      otpMessage: "",
      quoteDetails: "",
      quoteRequest: "",
      timerMinutes: "",
      timerSeconds: "",
      disabledResend:true,
      message:"",
      rmData: "",
      selectedPremiumPlan: "",
      // Payment Related
      payResponse: "",
      kycData: "",
      errorMsgs: "",
    }
  },
  methods: {
    checkProposalStatus(proposalUiId)
    {
        let qData = [proposalUiId];
        var headers = {
            "quoteId":this.uiQuoteId,
            Authorization: "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
            "Content-Type": "application/json",
        };
        this.backendApi("getProposalStatus", qData, headers, "get")
        .then((response) => {
          if(response.data.status=='error')
          {
            console.log("proposal status unable to fetch")
            // let msg=['We are facing some issue while fetching proposal satus']
            //   this.$router.push({ path: '/alert-diy', query: {msg: msg }});
          }
          else if(response.data && response.data.data){
            console.log("proposal status:",JSON.stringify(response.data.data.value))
              sessionStorage.setItem("proposalStatusValue", JSON.stringify(response.data.data.value));

              
          }
          // console.log("response",response)
          // console.log("response",response.data.data.value)
        })
        .catch((error) => {
          console.log("error")
        })
    },
    getProposalById(proposalUiId,rmId) {
      this.loadingMessage = "Fetching your Application Details";
      this.loading = true;
        let qData = [proposalUiId];
        var headers = {
            "quoteId":this.uiQuoteId,
            Authorization: "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
            "Content-Type": "application/json",
        };
        this.backendApi("getProposalDetails", qData, headers, "get")
        .then((response) => {
          this.loading = false;
            if(response.status == "error")
            {
              
              // alert("Network Error");
              let msg=['We are facing some issue while fetching proposal details']
              //this.$router.push({ path: '/alert-diy', query: {msg: msg }});

              //redirect to page with msg
            }
            else
            {

              if(response.data.status == "failed")
              {
                this.loading = false;
                let msg=['We are facing some issue while fetching proposal details']
                this.$router.push({ path: '/alert-diy', query: {msg: msg }});
                // alert("Proposal data is not available");
              }
              // console.log('proposal details: ', response.data.data[0]);
              this.proposalDetails = response.data.data[0];
              this.uiQuoteId = this.proposalDetails.ui_quote_id;
              
              this.formInfo = JSON.parse(this.proposalDetails.proposal_json);
              console.log('this.formInfo : ', this.formInfo);
              localStorage.setItem("filledData", JSON.parse(this.proposalDetails.proposal_json));
              
              sessionStorage.setItem("filledData", this.proposalDetails.proposal_json);
              sessionStorage.setItem("proposal_ui_id", JSON.stringify(this.proposalDetails.proposal_ui_id));
              sessionStorage.setItem("uiQuoteId", JSON.stringify(this.proposalDetails.ui_quote_id));

              //Need rdmid here not code
              let qData = [rmId];
              let headers = {"quoteId":this.uiQuoteId,};
              if(this.proposalDetails["user_id"]) {
                this.backendApi("getRmDetailsDIY", qData, headers, "get")
                .then((response) => {
                  // console.log(response)
                  if(response == 'error') {
                    // this.$router.push({ path: '/alert-diy', query: { status: 'Error', msg: 'We are facing some issue while fetching RM details, please contact to RM' }});

                    // alert('Data not fetched, please contact your RM');
                  }
                  else if(response.status=="error")
                  {
                    this.$router.push({ path: '/alert-diy', query: { status: 'Error', msg: 'We are facing some issue while fetching RM details, please contact to RM' }});

                  }
                   else if(response && response.data) {
                    // console.log('rmData: 4: ', response.data['AadharNumber']);
                    this.rmData = response.data;
                    if(this.rmData.RoleId == '1') {
                      sessionStorage.setItem("channel_type", JSON.stringify("B2C"));
                      this.channel_type = 'B2C';
                    } else {
                      sessionStorage.setItem("channel_type", JSON.stringify("B2B"));
                      this.channel_type = 'B2B';
                    }
                    sessionStorage.setItem("rm_data", JSON.stringify(response.data));
                    localStorage.setItem("rm_data", JSON.stringify(response.data));
                    
                  }
                })
                .catch((error) => {
                  console.log('error msg block dp', error);
                  // this.$router.push({ path: '/alert-diy', query: { status: 'Error', msg: 'We are facing some issue while fetching RM details, please contact to RM' }});


                });
              }
              this.getQuoteDetails(this.uiQuoteId);
            }
            
        }) //proposal_ui_id, uiQuoteId, 
        .catch((error) => {
          console.log("error msg block dp", error);
            let msg=['We are facing some issue from backend while fetching proposal details 1']
            this.$router.push({ path: '/alert-diy', query: { msg: msg }});
        });
    },
    getQuoteDetails(ui_quote_id) {
      let qData = [ui_quote_id];
      var headers = {
          "quoteId":this.uiQuoteId,
          Authorization: "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
          "Content-Type": "application/json",
      };
      this.backendApi("getQuoteDetails", qData, headers, "get")
      .then((response) => {
          // console.log('quote details: ', response.data.data[0]);
          this.quoteDetails = response.data.data[0];
          this.quoteRequest = JSON.parse(this.quoteDetails.quote_request_json);
          console.log('this.quoteRequest: ', this.quoteRequest);
          this.uiQuoteId = this.proposalDetails.ui_quote_id;

          this.userDetails = {
              "gender": this.quoteDetails.gender,
              "fullname": this.quoteDetails.life_assured_name,
              "dob": this.quoteDetails.dob,
              "age": null,
              "mobile": this.quoteDetails.mobile_number,
              "zipcode": this.quoteDetails.zipcode,
              "annualincome": this.quoteDetails.annual_income,
              "inlakhs": null,
              "employmenttype": this.quoteDetails.employee_type,
              "education": this.quoteDetails.education,
              "smoke": this.quoteDetails.smoker,
              "whatsapp": false
          };
          
          localStorage.setItem('userProfile',JSON.stringify(this.userDetails));
          sessionStorage.setItem('user_profile',JSON.stringify(this.userDetails));
          sessionStorage.setItem('quote_request',this.quoteDetails.quote_request_json);

          this.getQuoteResponseDetails(this.uiQuoteId);
      })
      .catch((error) => {
        console.log("error msg block dp", error);
      });
    },
    getQuoteResponseDetails(ui_quote_id) {
      let qData = [ui_quote_id];
      var headers = {
        "quoteId":this.uiQuoteId,
        Authorization: "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
        "Content-Type": "application/json",
      };
      this.backendApi("getQuoteResponseDetails", qData, headers, "get")
      .then((response) => {
        // this.loading = false;
        console.log('quote response details: ', response.data.data);
        this.quoteResponseDetails = response.data.data;
        //let pln = JSON.parse(this.quoteResponseDetails.quote_response_data);
        let pln = this.quoteResponseDetails.quote_response_data;
          
        this.selectedPremiumPlan=pln;
        //this.includeAddOnsPremium();
        //this.includeRidersPremium();
        this.tpv=this.selectedPremiumPlan.totalPremiumDetails[0].totalPremiumWithTax;
        //this.pMode=this.selectedPremiumPlan.individualDetails[0].premiumDetails[0].mode
        this.pv=this.selectedPremiumPlan.totalPremiumDetails[0].totalPremiumValue;
        this.tv=this.selectedPremiumPlan.totalPremiumDetails[0].totalTax;
        console.log("pln",this.selectedPremiumPlan)
        sessionStorage.setItem("selected_plan_data", JSON.stringify(pln));
        sessionStorage.setItem("selectedPlanForCheckout", JSON.stringify(pln));
        // console.log("Session added for selectedPlanForCheckout")
        //this.getProposal();            
      })
      .catch((error) => {
        console.log("error msg block quote response", error);
      });
    },
    getProposal() {
      var self = this;
      this.selectedPlan = JSON.parse(sessionStorage.getItem("selectedPlanForCheckout"));
      this.quoteRequestID = JSON.parse(sessionStorage.getItem("quoteRequestID"));
      this.insurerCode = this.selectedPlan.insuranceAndProducts.insuranceCompanyCode;
      this.productCode = this.selectedPlan.insuranceAndProducts.productCode;
      var headers = {"quoteId":this.uiQuoteId,};
      this.loading = true;
      let reqData = [this.productCode, this.insurerCode, 1];
      this.backendApi("getProposal", reqData, headers, "get")
        .then((response) => {
          console.log('success proposal');
          // self.loading = false;
          self.apiError = false;
          if (response == 'error') {
            self.apiError = true;
        //  this.$router.push({ path: '/alert', query: { status: 'Error',backUrl:"proposal-page", msg: 'We are facing some issue while fetching proposal details' }});

          }
          else if(response.data.errors.length>0) 
          {
            
            let msg=[]
              for(let i=0;i<response.data.errors.length;i++)
              {
                  msg.push(response.data.errors[i]["errorIdentifier"])
              }
              
            this.$router.push({ path: '/alert-diy', query: {backUrl:'proposal-page',msgError:"We are facing some issue while fetching proposal data",reqId:response.data.reqId, msg:msg  }});

          }
          else if (response && response.data) {

            let data = this.$route.query.response;
            if(typeof(data) == "undefined") {
              self.loading = false;
            }
            this.formInfo = response.data.data;
            // console.log(this.formInfo);
            // Setting up previously filled data
            let filledData = JSON.parse(sessionStorage.getItem("filledData"));
            
            // Comment: Filled Data Code Removed Here
            
            // End setting previously filled data
            //this.mountedCode();
            //############################./End Setting up fieldGroups and other data ###########################

          }
        })
        .catch((error) => {
          console.log('error msg block proposal', error);
          let msg=['We are facing some issue from backend while fetching proposal data']
          this.$router.push({ path: '/networkalert', query: {backUrl:'proposal-page', msg: msg }});
        });
    },
    generateOTP() {
        this.otpSent = null;
        this.otpValid = null;
        this.loadingOTP = true;
        this.loadingMessage = "Sending OTP";
        console.log('get otp called');
        this.disabledResend = true;
        console.log('this.quoteRequest: ', this.quoteRequest);
        let reqBody = {
          "data": {
            "distributor": {
              "distributorID": this.quoteRequest.data.distributor.distributorID,
              "channelType": this.channel_type,
            },
            "insuranceCompanyCode": this.formInfo.manufacturerId,
            "UITrackingRefNo": this.proposalUiId,
            "OTPDetails": {
                "mobileNumber": this.formInfo.fieldGroups.proposerDetails.fieldGroups.personalDetails.fields.mobileNumber.input,
                "email": this.formInfo.fieldGroups.proposerDetails.fieldGroups.personalDetails.fields.email.input
            }
          }
        };
        console.log('otpReq: ', reqBody);
        // this.loading = true;
        // let headers = {Authorization: "Basic " + window.btoa(process.env.VUE_APP_USERNPASS),
        // "Content-Type": "application/json",
        // };
        let headers = {
            "quoteId": this.uiQuoteId,
        };
        this.backendApi("sendOtpApi", reqBody, headers).then((response) => {
          console.log('jkkkkkkkkkkkkkkkkkkkkk: ', response);
          if(response.status == 'error') {
            console.log('Inside error');
            this.loading = false;
            this.loadingOTP = false;
            this.otpSent = "";
            if(sessionStorage.getItem("otp_expiry_time")) {
              this.otpTransactionId = JSON.parse(sessionStorage.getItem("otp_transaction_id"));
              this.otpExpiryTime = JSON.parse(sessionStorage.getItem("otp_expiry_time"));
              this.resendOTP();
            }
          } else {
            this.loading = false;
            this.loadingOTP = false;
            this.otpTransactionId = response.data.data.OTPTransactionId;
            this.otpExpiryTime = response.data.data.ExpiryTime;
            sessionStorage.setItem("otp_transaction_id", JSON.stringify(this.otpTransactionId));
            sessionStorage.setItem("otp_expiry_time", JSON.stringify(this.otpExpiryTime));
            this.otpSent = "OTP has been sent successfully";
            this.resendOTP();
            // console.log('get otp response', response);   
          }
                   
            
        }).catch((error) => {
            console.log('error msg block get otp on proposal confirmation', error);
            self.loading = false;
            this.otpSent = "";
        });
    },
    resendOTP() {
      var exp = Date.parse(this.otpExpiryTime);
      console.log("expiryTime = ",this.otpExpiryTime);
      let self = this;
        const t = setInterval( function(){
          var timeleft = ((exp - new Date().getTime()));
          self.timerMinutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
          self.timerSeconds = Math.floor((timeleft % (1000 * 60)) / 1000);
          self.timerMinutes = self.timerMinutes < 10 ? "0"+self.timerMinutes : self.timerMinutes;
          self.timerSeconds = self.timerSeconds < 10 ? "0"+self.timerSeconds : self.timerSeconds;
          // console.log("minutes = ",self.timerMinutes);
          // console.log("seconds = ",self.timerSeconds);
          if (timeleft <= 0 || self.otpSent == null){
              clearInterval(t);
              self.disabledResend = false;
              self.timerMinutes = "";
              self.timerSeconds = "";
          }
      },1000);
      this.resendOtp = true;
    },
    validateOTP() {
        if (!this.otp) {
            this.otpSent = "Please enter OTP";
            this.otpValid = null;
        } else {
            console.log('validate otp called');
            console.log("this.configData: ", this.configData);
            let reqBody = {
                "data": {
                    "distributor": {
                      "distributorID": this.quoteRequest.data.distributor.distributorID,
                      "channelType": this.channel_type,
                    },
                    "insuranceCompanyCode": this.formInfo.manufacturerId,
                    "UITrackingRefNo": this.proposalUiId,
                    "OTPDetails": {
                        "OTP": this.otp,
                        "OTPTransactionId": this.otpTransactionId
                    }
                }
            };
            
            this.loadingOTP = true;
            this.loadingMessage = "Validating your OTP";
            let headers = {
                "quoteId": this.uiQuoteId,
            };
            
            this.backendApi("valOtpApi", reqBody, headers).then((response) => {
                this.loadingOTP = false;
                let payMethod = this.configData["PAY_SETTINGS"][this.formInfo.manufacturerId];
                this.otpMessage = response.data.data.OTPAccepted;
                // console.log("validated otp response = ", response);
                if (this.otpMessage == "Yes") {
                   
                  //$("#otpModal").modal("hide");
                  $("#otpModal").hide()
                  this.loading = true;
                  this.otpModalReset();
                  
                  if(payMethod == 'PRE') {

                    // Payment Code Started 
                    var returnLink= new URL(location).origin+"/#/proposal-details-check-diy";
                    let paymentRequest = {
                      "data": {
                        "additionalSetup": {
                          "currency": "INR",
                          "userCountry": "",
                          "userRegion": "",
                          "userLanguage": "",
                          "userIP": "",
                          "userAgent": "test me",
                          "userGeoLocation": {
                            "latitude": "",
                            "longitude": ""
                          }
                        },
                        "distributor": {
                          "distributorID": this.quoteRequest.data.distributor.distributorID,
                          "agentID": "ss",
                          "salesChannel": "",
                          "channelType": this.channel_type,
                          "varFields": [
                            {
                              "fieldName": "",
                              "fieldValue": ""
                            }
                          ]
                        },
                        "insuranceCompanyCode": this.formInfo.manufacturerId,
                        "applicationNo": "APP001",
                        "policyNo": "TATA001",
                        "quoteId":this.uiQuoteId,
                        "productCode": this.formInfo.productId,
                        "UITrackingRefNo": "test1",
                        "redirectUrl": returnLink,
                        "memberDetails": {
                          "firstName": this.formInfo.fieldGroups.proposerDetails.fieldGroups.personalDetails.fields.firstName.input,
                          "lastName": this.formInfo.fieldGroups.proposerDetails.fieldGroups.personalDetails.fields.lastName.input,
                          "mobileNumber": this.formInfo.fieldGroups.proposerDetails.fieldGroups.personalDetails.fields.mobileNumber.input,
                          "email": this.formInfo.fieldGroups.proposerDetails.fieldGroups.personalDetails.fields.email.input,
                          "varFields": [
                            {
                              "fieldName": "",
                              "fieldValue": ""
                            }
                          ]
                        },
                        "paymentDetails": {
                          "amountToBePaid": this.tpv,
                          "method": "",
                          "premiumPaymentFrequency": "",
                          "bankAccount": {
                            "name": "",
                            "accountNumber": "",
                            "ifsc": "",
                            "accountType": ""
                          },
                          "varFields": [
                            {
                              "fieldName": "",
                              "fieldValue": ""
                            }
                          ]
                        },
                        "varFields": [
                          {
                            "fieldName": "",
                            "fieldValue": ""
                          }
                        ]
                      },
                      "proposalUiId": this.proposalUiId 
                    };

                    let status = JSON.parse(sessionStorage.getItem("proposalStatusValue"));
                    if(status=="Proposal Submitted")
                    {
                      let msg='Proposal already submitted'
                      this.$router.push({ path: '/thankyou', query: {msg: msg}});
                    } else {
                      let qData=[this.proposalUiId];
                      let headers = {"quoteId":this.uiQuoteId};
                      this.backendApi("getPaymentDetailsByProposalUiId", qData, headers, "get")
                        .then((response) => {
                          if(response.data.data == null)
                          {
                            this.loadingMessage = "Redirecting to Payment Gateway"; 
                            this.initiatePayment(paymentRequest);                     
                          }
                          else
                          { // If payment already done
                            if(response.data.data.payment_status == "success")
                            {
                              console.log("Payment Already Completed");
                              this.buyPolicy();
                            }
                            else
                            {
                              this.loadingMessage = "Redirecting to Payment Gateway";
                              this.initiatePayment(paymentRequest);
                            }                    
                          }
                        })
                        .catch((error) => {
                          console.log("error msg block getPaymentDetailsByProposalUiId", error);
                        });
                    }

                    // End: Payment Code


                  } else {

                    this.loadingMessage = "Application submission is in progress";

                  }

                    
                  self.loading = false;
                  
                   
                } else {
                    // console.log('validate otp response', response.data.data.OTPAccepted);
                    this.otpMessage = null;
                    this.otpValid = !this.otp ? "Please enter OTP" : response.data.data.reason;
                    this.otp = "";
                    this.otpSent = null;
                }
            }).catch((error) => {
                console.log('error msg block get otp on proposal confirmation', error);
                self.loading = false;
            });
        }
    },
    otpModalReset() {
        this.otpSent = null;
        this.otpValid = null;
        this.otp = "";
        this.otpMessage = null;
        this.disabledResend = true;
        this.timerMinutes = "";
        this.timerSeconds = "";
        // --------
        this.otpTransactionId = "";
        this.otpExpiryTime = "";
        sessionStorage.removeItem('otp_transaction_id');
        sessionStorage.removeItem('otp_expiry_time');
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
    convertSentenceCase(value) {
      const result = value.replace(/([A-Z])/g, " $1");
      const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
      return finalResult;
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
    dateconvert(value) {
      const formattedDate = moment(value).format('DD/MM/YYYY')
      // console.log(formattedDate)
      return formattedDate;
    },
    currency(amt) {
      //return new Intl.NumberFormat().format(amt);
      let tmpAmt = parseFloat(amt).toFixed(2);
      return new Intl.NumberFormat().format(tmpAmt);
    },
    getPayMode(val) {
      if (val == "M") {
        return "Month";
      } else if (val == "Q") {
        return "Quarter";
      } else if (val == "HY") {
        return "Half Year";
      } else if (val == "Y") {
        return "Year";
      } else if (val == "S") {
        return "Single Pay";
      }
    },
    initiatePayment(qData) {
      let headers = {};
      this.backendApi("paymentApi", qData, headers)
        .then((response) => {
          if (response == 'error') {
            self.apiError = true;
          }
          else if (response.status == "error") {
            let msg = ['We are facing some issue while initiating payment process'];

            this.$router.push({ path: '/networkalert', query: { backUrl: 'proposal-details-check-diy', msg: msg } });
          }
          else if (response && response.data) {

            console.log('Payment response: ', response.data);
            let paymentUrl = response.data.data[0].paymentDetails.paymentUrl;
            console.log("Payment URL: ", paymentUrl);
            window.location.href = paymentUrl;
           
          }
        })
        .catch((error) => {
          console.log('error msg block dp', error);
          let msg = ['We are facing some issue from backend while initiating payment ']
          this.$router.push({ path: '/networkalert', query: { backUrl: 'proposal-details-check-diy', msg: msg } });
        });
    },
    getConfigData() {

        var headers = {
          Authorization: "Basic " + window.btoa(process.env.VUE_APP_USERNPASS),
          "Content-Type": "application/json",
        };

        let reqData = [getConsumer()['consumerId']];
          
        this.backendApi("getConfigData", reqData, headers, "get")
          .then((response) => {
            if (response == "error") {
              console.log("get config data error: block");
            } else if (response && response.data) {
              console.log("get config data success: response ", response.data.data.Jsondata[0].jsonDataUI);
              this.configData = response.data.data.Jsondata[0].jsonDataUI;
              this.$store.commit('setConfigData', response.data.data.Jsondata[0].jsonDataUI)
            }
          })
          .catch((error) => {
            console.log("error msg block get config data", error);
          });

    },
    rejectedProposal(){
        //send mail to RM
        this.sendMailToCustomerReject()
        //Update db with status id 10 for Proposal Modification Requested from customer
        this.updateProposalStatus(10);
        //Redirect to thankyou page
        this.$router.push('/thankYou');
    },
    sendMailToCustomerReject()
    {
      var rmData;
      if (localStorage.getItem("rm_data")){
       rmData = JSON.parse(localStorage.getItem("rm_data"));
      }

      var userProfile;
      if(localStorage.getItem("userProfile"))
      {
        userProfile = JSON.parse(localStorage.getItem("userProfile"));  
      }



      let emailBody = `<!DOCTYPE html>
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:th="http://www.thymeleaf.org">
        <head>
            <meta charset="ISO-8859-1" />
            <title>Insert title here</title>
        </head>
        <body>
            <table width="700"border="0"cellspacing="0" cellpadding="0" align="center"  bgcolor="#EEF3FB">
              <tr>
                  <td
                    style="  font-family: Public Sans; font-weight: 600; font-size: 18px;  color: #1f1f1f; padding: 20px 0px; text-align: center;" >
                    <center><img style="max-width: 150px"src="` + this.configData["DISTRIBUTER"]["distributorLogo"] + `" ></center>
                  </td>
              </tr>
              <tr>
                  <td>
                    <table width="700" border="0" cellspacing="0" cellpadding="0"  align="center"   bgcolor="#fff" style="border-radius: 5px; background-color: #fff;
                        margin-left: 30px; margin-right: 30px;" >
                        <tr>
                          <td width="50"></td>
                          <td
                              style="
                              font-family: Public Sans; font-weight: 600; font-size: 18px;color: #1f1f1f;padding: 20px 0px 10px 0px;" >
                              Dear ${rmData['Name']}
                          </td>
                          <td width="50"></td>
                        </tr>
                        <tr>
                          <td width="20"></td>
                          <td
                              style="font-family: Public Sans;font-size: 18px;color: #1f1f1f;padding: 20px 0px;line-height: 28px;">
                              Your client ${this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['firstName']['input']} ${this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['lastName']['input']} has rejected the proposal form with following reason.<br><br>
                              Proposal no: ${this.uiQuoteId}<br>
                  ${this.message}
                          </td>
                          <td width="50"></td>
                        </tr>
                        <tr>
                          <td width="50"></td>
                          <td style=" border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #1f1f1f; padding: 10px 0px 0px 0px; " ></td>
                          <td width="50"></td>
                        </tr>

                        
                <tr>
                          <td width="50"></td>
                          <td
                              style="font-family: Public Sans;font-size: 18px;color: #1f1f1f;padding: 20px 0px;line-height: 28px;" >
                              Regards,<br>
                              ` + this.configData["DISTRIBUTER"]["distributerID"] +`
                          </td>
                          <td width="50"></td>
                        </tr>
                <tr>
                          <td width="50"></td>
                          <td
                              style="font-family: Public Sans; font-size: 10px;  color: #1f1f1f; padding: 20px 0px; line-height: 22px;" >
                              *Insurance is the subject matter of solicitation. IRDAI Insurance Broking License No. 1. License Code No. IRDA/DB 1/22 Valid till 01/01/2023
                          </td>
                          <td width="50"></td>
                        </tr>
                    </table>
                  </td>
              </tr>
              <tr>
                  <td
                    style="  font-family: Public Sans; font-size: 12px;  text-align: center; opacity: 0.5; color: #1f1f1f;  padding: 10px; " >
                    <center><b style="color: black;"> Powered by </b><strong style="color: blue;font-size: 12px;">9Platforms Technology Pvt Ltd.</strong></center>
                  </td>
              </tr>
            </table>
        </body>
      </html>`;
      let qData = {
          "send_from":"customer.service@1silverbullet.tech",
          "subject":"Policy rejected "+this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['firstName']['input'] + " "+this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['lastName']['input'],
          "text": emailBody,
          "send_to":['dipak.bhosale@1silverbullet.tech','shailendrafinoux@gmail.com']
          //Removed rm's email other than in production.
          //"send_to":['dipak.bhosale@1silverbullet.tech',rmData['Email']]      
        };
        var headers = {
          "quoteId":this.uiQuoteId,
          Authorization: "Basic " + window.btoa(process.env.VUE_APP_USERNPASS),
          "Content-Type": "application/json",
        };
        this.backendApi("sendMail", qData, headers)
          .then((response) => {
            //console.log('save quote response: ', response);
            if(response == 'error') {
              self.apiError = true;
            } else if(response && response.data){
              
              console.log('email send success: ', response.data)
            }
          })
          .catch((error) => {
            console.log('error msg block email', error);
          });
    },
    updateProposalStatus(statusid)
    {
        let qData = {
          "proposal_ui_id":this.proposalUiId,
          "status_id": statusid
        };
        var headers = {
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
    savePaymentDetails(req){
    
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
              console.log('save payment success');
              //this.updateProposalStatus(13);
              this.sendMailPaymentConfirm();
              this.buyPolicy();
              
            }
            else
            {
              console.log('save payment success else part');
              this.updateProposalStatus(14);
              //redirect to thank you page
              // this.thankYouUrl = new URL(location).origin+"/#/payment?transactionId=" + response.data.transaction_id;
              // window.location.href = this.thankYouUrl;
              sessionStorage.setItem("payment_details", JSON.stringify(this.payResponse));
              this.thankYouUrl = new URL(location).origin+"/#/paymentfailure?transactionId=" + response.data.transaction_id;
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
    buyPolicy() {


      console.log('Buy Policy Called');


      //   if(this.spDetails.source) {

      var self = this;
      this.errorMsgs = "";
      this.selectedPlan = JSON.parse(sessionStorage.getItem("selectedPlanForCheckout"));
      this.formInfo["fieldGroups"]["payment"]["fields"]["instrumentNumber"]["input"] = this.payResponse.transactionId;
      //this.formInfo["fieldGroups"]["payment"]["fields"]["instrumentNumber"]["input"] = this.payResponse.varFields.bankReferenceNo;
      
      let reqData = {
        "data": {
          "quoteResponse": { "data": { "quote": [this.selectedPlan], "request": this.quoteRequest.data } },
          "data": this.formInfo,
          "payment_details": JSON.parse(sessionStorage.getItem("pay_response")),
          "cKyc": this.kycData
        },
        "proposalUiId":this.proposalUiId,
        
      };
      
      //let headers = {"quoteId":this.uiQuoteId};
      let headers = {};



      


        this.loading = true;
        console.log("this is the request of submit Proposal TATA", this.formInfo,reqData)
        this.backendApi("proposalVersionApi", reqData, headers)
          .then((response) => {
            //add reponse.data in db with ui_id
            // console.log('Sumbit proposal success', response);
            //Update proposal status to "Proposal Submitted"
            //this.updateProposalStatus(9);
            
            // self.loading = false;
            self.apiError = false;
            console.log("Hiiiiiiiiiiiiiiiiiiiiiiiiiiii TATA",response)
            if(response.data.errors){
              if(response.data.errors.length > 0)
              {
                self.loading = false;
                //Update proposal status to "Proposal Error"
                this.updateProposalStatus(12);
                //this.saveProposalResponse(reqData,response.data);
                //self.apiError = true;
                // console.log('inside error: ', response.data);
                let ck = 1;
                response.data.errors.forEach(function(element) {
                  self.errorMsgs += ck +'. '+ element.errorMessage +'<br/>';
                  ck++;
                });
              }
              else
              {
                if(response['status'] == 'error') {
                  self.loading = false;
                  //Update proposal status to "Proposal Error"
                  this.updateProposalStatus(12);
                  this.saveProposalResponse(reqData,response.data);
                  //self.apiError = true;
                  // console.log('inside error: ', response.data);
                  let ck = 1;
                  response.data.errors.forEach(function(element) {
                    self.errorMsgs += ck +'. '+ element.errorMessage +'<br/>';
                    ck++;
                  });

                } else if(response && response.data) {
                  //Update proposal status to "Proposal Submitted"
                  // this.updateProposalStatus(9);
                  //this.saveProposalResponse(reqData,response.data);
                  console.log('Submit proposal response: ', response.data)
                  // self.loading = false;
                  //this.response = response.data;

                  let reqData2 = [this.selectedPlan.insuranceAndProducts.productCode, this.selectedPlan.insuranceAndProducts.insuranceCompanyCode, response.data.reqId];
                  //this.reqTimeOut();
                  this.getProposalPoll(reqData2);
                  
                }
              }
            }
            else
            {
              if(response['status'] == 'error') {
                //Update proposal status to "Proposal Error"
                this.updateProposalStatus(12);
                this.saveProposalResponse(reqData,response.data);
                //self.apiError = true;
                // console.log('inside error: ', response.data);
                let ck = 1;
                response.data.errors.forEach(function(element) {
                  self.errorMsgs += ck +'. '+ element.errorMessage +'<br/>';
                  ck++;
                });

              } else if(response && response.data) {
                //Update proposal status to "Proposal Submitted"
                // this.updateProposalStatus(9);
                this.saveProposalResponse(reqData,response.data);
                // console.log('Submit proposal response: ', response.data)
                // self.loading = false;
                //this.response = response.data;

                let reqData2 = [this.selectedPlan.insuranceAndProducts.productCode, this.selectedPlan.insuranceAndProducts.insuranceCompanyCode, response.data.reqId];
                //this.reqTimeOut();
                this.getProposalPoll(reqData2);
                
              }
            }
            
            
          })
          .catch((error) => {
            console.log('error msg block submit proposal', error);
            self.loading = false;
          });



    },

    getProposalPoll(reqData) {
      let self = this;
      this.errorMsgs = "";
      console.log('get proposal called: ', reqData);
      // let headers = {
      //   Authorization: "Basic " + window.btoa(process.env.VUE_APP_PMSNPASS),
      //   "Content-Type": "application/json",
      // };
      let headers = {"quoteId":this.uiQuoteId,};
      this.loading = true;

      setTimeout(() => {
        // console.log("set time out called")
          this.backendApi("proposalPollApi", reqData, headers, "get")
          .then((response) => {
            console.log('Get proposal poll success: ', response);
            //self.loading = false;
            self.apiError = false;
            // ===================
            if(response == 'error') {
              //Update proposal status to "Proposal Error"
              this.updateProposalStatus(12);
              self.apiError = true;
              self.loading = false;
            } else if(response?.data?.errors?.length > 0){
              //Update proposal status to "Proposal Error"
              this.updateProposalStatus(12);
              clearTimeout(this.timer);
              self.apiError = true;
              self.loading = false;
              let ck = 1;
              response.data.errors.forEach(function(element) {
                self.errorMsgs += ck +'. '+ element.errorDisplayMessage +'<br/>';
                ck++;
              });
            } else if(response?.data?.error?.length > 0){
              //Update proposal status to "Proposal Error"
              this.updateProposalStatus(12);
              clearTimeout(this.timer);
              self.apiError = true;
              self.loading = false;
              let ck = 1;
              response.data.error.forEach(function(element) {
                self.errorMsgs += ck +'. '+ element.message +'<br/>';
                ck++;
              });
            } else if(response?.data?.data?.message) {
                
              //console.log('nside internal message');
              if(response.data.data.message == 'Please wait we are still processing the request') {
                self.getProposalPoll(reqData);
              }

            } else if(response?.data?.status?.code == 200) {
              console.log('success block');
              try {

                this.applicationNo=response.data.ManufacturerTracking.applicationNumber;
                this.policyNo=response.data.ManufacturerTracking.policyNumber;

              } catch(err) {
                console.log('error in assigning appno/polno: ', err);
              }

              this.updateProposalStatus(9);
              sessionStorage.setItem("policyNo",this.policyNo);
              sessionStorage.setItem("applicationNumber",this.applicationNo);
              this.$router.push('/thankyou');
            }

            
            // ===================
            
          })
          .catch((error) => {
            self.loading = false;
            console.log('error msg block get proposal poll', error);
          });
      }, 10000);

      

    },

    sendMailPaymentConfirm(){

      console.log('sendMailPaymentConfirm called:  pppp ');
      let totalAmount = JSON.parse(sessionStorage.getItem("selected_plan_data"));
        let qData = {
                      data:{
                        "distributor": {
                                "distributorID": this.configData["DISTRIBUTER"]["distributerID"],
                                "agentID": "",
                                "salesChannel": "",
                                "channelType": this.channel_type,
                                "varFields": [
                                  {
                                    "fieldName": "",
                                    "fieldValue": ""
                                  }
                                ]
                            },
                        "eventName": "payment",
                        "data": [
                            {
                                "fullName": this.formInfo.fieldGroups.proposerDetails.fieldGroups.personalDetails.fields.firstName.input + " " + this.formInfo.fieldGroups.proposerDetails.fieldGroups.personalDetails.fields.lastName.input,
                                "productName": this.selectedPlan.insuranceAndProducts.productName,
                                "transactionId": this.payResponse.transactionId,
                                "policyNo": "",
                                // "premiumAmount": this.selectedPlan.individualDetails[0].premiumDetails[0].totalPremiumValue,
                                "premiumAmount": this.currency(this.payResponse.txnAmount),
                                "emailId": [this.formInfo.fieldGroups.proposerDetails.fieldGroups.personalDetails.fields.email.input],
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
            console.log('confirmation email send: ', response);
            // this.loading = false;
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
             else if(response && response.data){
              
              // this.$router.push('/thankyoumail');
              console.log("sent payment confirmation mail",response);
              //window.location.href = new URL(location).origin
              
            }
          })
          .catch((error) => {
            console.log('error msg block email', error);
          let msg=['We are facing some issue from backend while sending an e-mail']
            this.$router.push({ path: '/networkalert', query: {backUrl:'proposal-details-check', msg: msg }});
          });
      
    },
  }
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>