<template>
  <div class="text-center" v-if="loading" style="padding-top: 50px;">
    <!-- Loading.. -->
    <loadingPage />
  </div>
  <div v-else class="">
    <Header />

    <div class="wrapper" v-if="responseJson">
      <div class="inner-wrapper">
        <router-link to="/multi-quote">
          <div class="d-flex align-items-center py-4">
            <em class="icon-arrow-left me-3"></em>
            <h3 class="mb-0">Plan Details</h3>
          </div>
        </router-link>
        <div class="plantopcard">
          <div class="planname">
            <!-- <small>Policy Cover</small> -->
            <div class="d-flex flex-row align-items-center mt-1">
              <div class="img-box">
                <img v-if="selectedPlan?.supportingData?.insCompanyLogo" :src="selectedPlan?.supportingData?.insCompanyLogo" alt="image" />
              </div>
              <div class="brand-text">
                {{ selectedPlan.insuranceAndProducts.productName }} -
                {{ selectedPlan.productDetails.planOption.planName }}
              </div>
            </div>
          </div>
          <ul class="plan-info mx-auto">
            <li>
              <small>Policy Cover</small>
              <h4 class="mb-0">₹ {{ convertInLakh(selectedPlan.individualDetails[0].sumInsured) }}</h4>
            </li>
            <li>
              <small>Premium</small>
              <h4 class="mb-0">₹ 
                {{
                      currency(selectedPlan.productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue)
                    }}
                <span class="fs-12">/year</span></h4>
              <small class="notetxt fs-14 d-block text-end">₹ &nbsp;&nbsp; {{
                            currency(getPerMonthPremium(selectedPlan.productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue))
                          }}<span
                  class="fs-12">/month</span></small>
            </li>
          </ul>
          <router-link to="/addon-rider">
            <button type="button" class="btn btn-warning base-bold text-white d-flex align-items-center mx-xs-auto mx-sm-auto mx-md-auto my-2">
              <span>Proceed to buy</span>
              <em class="bi bi-chevron-right ms-2"></em>
            </button>
          </router-link>
        </div>
        <div class="tab-hold white-bg">
          <div class="error-msg text-center">{{ this.errorMsg }}</div>
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item" v-for="(dt, ind) in responseJson.section" :key="ind">
              <a :class="'nav-link '+ activePage(ind)" :id="ind+'-tab'" data-bs-toggle="tab" :href="'#tab_'+ind" role="tab"
                :aria-controls="'#tab_'+ind" aria-selected="true">{{ dt.sectionName }}</a>
            </li>
            <li class="nav-item" v-if="!isCashLessPage">
              <a class="nav-link" id="cashless-tab" data-bs-toggle="tab" href="#cashless" role="tab" aria-controls="cashless" aria-selected="false">Cashless Hospitals</a>
            </li>
          </ul>
          <div class="tab-content">
            <div v-for="(dt, ind) in responseJson.section" :key="ind" :class="'tab-pane fade ' + isTabContentActive(ind)" :id="'tab_'+ind" role="tabpanel" aria-labelledby="features-tab">
              <div v-if="dt.sectionName != 'Cashless Hospitals'">

                <div class="claim-top mt-2" v-if="dt.sectionName == 'Claims Procedure'">
                  <div class="item">
                    <div class="img-box">
                      <img src="../assets/images/alarm.png" alt="img" />
                    </div>
                    <p>1silverbullet provides <strong>30 min. guaranteed claim assistance</strong></p>
                  </div>
                  <div class="item border-start">
                    <div class="img-box">
                      <img src="../assets/images/certificate.png" alt="img" />
                    </div>
                    <p>100% Claims guarantee for peace of mind </p>
                  </div>
                </div>

                <ul class="features">
                  <li :class="'fea_cls '+isSelected(ind2)" v-for="(dt2, ind2) in dt.section" :key="ind2" :id="'features_section_'+ind2">
                    <a @click="scrollMeTo('section_'+ind2)">{{ dt2.sectionName }}</a>
                  </li>
                </ul>
                
                <div class="subsectionloop" v-for="(dt2, ind2) in dt.section" :key="ind2" >
                  <div class="info mb-40 features-main-block" v-if="ind2 == '0'" :id="'section_'+ind2">
                    <div class="info-item" v-for="(dt3, ind3) in dt2.section" :key="ind3">
                      <div>
                        <img v-if="dt3.icon" :src="dt3.icon" alt="logo" />
                      </div>
                      <h4>{{ dt3.header }}</h4>
                      <div class="tab-text" v-for="(dt4, ind4) in dt3.info" :key="ind4">
                        {{ dt4.data }}
                      </div>
                    </div>
                  </div>

                  <div v-else :id="'section_'+ind2" class="features-main-block">
                    <h4 class="mb-2">{{ dt2.sectionName}}</h4>
                    <div class="accordion features" :id="dt2.section">
                      <div class="accordion-item" v-for="(dt3, ind3) in dt2.section" :key="ind3">
                        <h2 class="accordion-header" :id="'coverheading1'+ind3">
                          <div :class="'accordion-button ' + isCollapsed(ind3)" data-bs-toggle="collapse" :data-bs-target="'#ac_'+dt3.optionId+ind3"
                            :aria-expanded="isAreaExpanded(ind3)" :aria-controls="'ac_'+dt3.optionId+ind3">
                            <div class="cir24 green me-3"><i class="bi bi-check-lg text-success"></i></div> <span>{{ dt3.header }}</span>
                          </div>
                        </h2>
                        <div :id="'ac_'+dt3.optionId+ind3" :class="'accordion-collapse collapse ' + isCollapseShow(ind3)" :aria-labelledby="'coverheading1'+ind3"
                          :data-bs-parent="'#'+dt2.sectionName">
                          <div class="accordion-body">
                            <p v-for="(dt4, ind4) in dt3.info" :key="ind4">
                              {{ dt4.data }}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                  


                </div>
                <!-- Features Footer Content -->
                <div class="features-footer" v-if="dt.sectionName == 'Features'">
                  <h4 class="mb-3">Plan Brochures</h4>
                  <div class="row mb-40 features-footer-content">
                    <div class="col-3" v-if="responseJson.brochure">
                      <div class="cream-bg rounded-3 p-3 d-flex align-items-center">
                        <em class="bi bi-file-earmark-pdf text-primary me-2"></em>
                        <a :href="responseJson.brochure" target="_blank" class="text-primary base-med fs-14">Plan Brochure</a>
                      </div>
                    </div>
                    <div class="col-3" v-if="responseJson.policyWording">
                      <div class="cream-bg rounded-3 p-3 d-flex align-items-center">
                        <em class="bi bi-file-earmark-pdf text-primary me-2"></em>
                        <a :href="responseJson.policyWording" target="_blank" class="text-primary base-med fs-14">Policy Wordings</a>
                      </div>
                    </div>
                    <!-- <div class="col-3">
                      <div class="cream-bg rounded-3 p-3 d-flex align-items-center">
                        <em class="bi bi-file-earmark-pdf text-primary me-2"></em>
                        <a href="https://www.nivabupa.com/content/dam/nivabupa/PDF/reassure/ReAssure%20-%20Policy%20Document.pdf" target="_blank" class="text-primary base-med fs-14">Prospectus</a>
                      </div>
                    </div> -->
                    <div class="col-3" v-if="responseJson.networkList">
                      <div class="cream-bg rounded-3 p-3 d-flex align-items-center">
                        <!-- <em class="bi bi-file-earmark-pdf text-primary me-2"></em> -->
                        <a :href="responseJson.networkList" target="_blank" class="text-primary base-med fs-14">Network list</a>
                      </div>
                    </div>
                  </div>
                  
                  <h4 class="mb-3">{{ responseJson.aboutCompany }}</h4>
                  <p class="mb-1">{{responseJson.aboutDescription}}</p>
                </div>
                <!-- END: Features Footer Content -->
              </div>
              <div v-else>
                <ul class="features">
                  <li :class="isSelected(ind2)" v-for="(dt2, ind2) in dt.section" :key="ind2">
                    <a href="javascript:void(0)">{{ dt2.sectionName }}</a>
                  </li>
                </ul>
                
                <div class="subsectionloop" v-for="(dt2, ind2) in dt.section" :key="ind2">
                  <div class="info mb-40" v-if="ind2 == '0'">
                    <div class="info-item" v-for="(dt3, ind3) in dt2.section" :key="ind3">
                      <div>
                        <img v-if="dt3.icon" :src="dt3.icon" alt="logo" />
                      </div>
                      
                      <p v-for="(dt4, ind4) in dt3.info" :key="ind4">
                        <a target="_blank" :href="dt4.data"><strong>{{ dt3.header }}</strong></a>
                        <!-- {{ dt4.data }} -->
                      </p>
                    </div>
                  </div>

                  <div v-else :id="'section_'+ind2">
                    <h4 class="mb-2">{{ dt2.subSectionName}}</h4>
                    <div class="accordion features" :id="dt2.subSectionName">
                      <div class="accordion-item" v-for="(dt3, ind3) in dt2.subSubSection" :key="ind3">
                        <h2 class="accordion-header" :id="'coverheading1'+ind3">
                          <div :class="'accordion-button ' + isCollapsed(ind3)" data-bs-toggle="collapse" :data-bs-target="'#ac_'+dt3.optionId+ind3"
                            :aria-expanded="isAreaExpanded(ind3)" :aria-controls="'ac_'+dt3.optionId+ind3">
                            <div class="cir24 green me-3"><i class="bi bi-check-lg text-success"></i></div> <span>{{ dt3.header }}</span>
                          </div>
                        </h2>
                        <div :id="'ac_'+dt3.optionId+ind3" :class="'accordion-collapse collapse ' + isCollapseShow(ind3)" :aria-labelledby="'coverheading1'+ind3"
                          :data-bs-parent="'#'+dt2.subSectionName">
                          <div class="accordion-body">
                            <p v-for="(dt4, ind4) in dt3.data" :key="ind4">
                              {{ dt4.data }}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                </div>
                
                

              </div>
            </div>
            <!-- If Cashless page is not available in API Response -->
            <div v-if="!isCashLessPage" class="tab-pane fade" id="cashless" role="tabpanel" aria-labelledby="cashless-tab">
              <div class="pt-4">
                <h4>281 Cashless Hospitals found in your area</h4>
              </div>
              <div class="search-hold mb-40">
                <div class="select-cnt">
                  <select class="normal-select">
                  <option value="1" selected>Mumbai</option>
                  <option value="2">Pune</option>
                  <option value="3">Nasik</option>
                  <option value="4">Nagpur</option>
                  <option value="5">Kolahpur</option>
                </select>
                </div>
                <div class="search-cnt">
                  <input type="text" class="search-box" placeholder="Search Hospital">
                </div>
              </div>
              <h4 class="mb-3">Top Hospitals</h4>
              <div class="row hsp-list">
                <div class="col-sm-12 col-md-4 mb-sm-3">
                  <div class="cream-bg p-4 bdradius8">
                    <h6>Fortis S.L. Raheja Hospital</h6>
                    <p>Raheja Rugnalaya Marg, Mahim West, Mumbai, Maharashtra 400016</p>
                  </div>
                </div>
                <div class="col-sm-12 col-md-4 mb-sm-3">
                  <div class="cream-bg p-4 bdradius8">
                    <h6>Mallika Hospital</h6>
                    <p>Sharma Estate S.V. Road,Jogeshwari West, Mumbai, Maharashtra 400102</p>
                  </div>
                </div>
                <div class="col-sm-12 col-md-4 mb-sm-3">
                  <div class="cream-bg p-4 bdradius8">
                    <h6>Aditi Hospital</h6>
                    <p>90 Feet Rd, Thakur Complex, Kandivali East, Mumbai, Maharashtra 400101</p>
                  </div>
                </div>
              </div>

              <h4 class="mb-3">Other Hospitals</h4>
              <div class="hsp-list other scroll-cnt mb-0">
                <div class="hsp-item">
                  <div class="">
                    <h6>Fortis S.L. Raheja Hospital</h6>
                    <p>Raheja Rugnalaya Marg, Mahim West, Mumbai, Maharashtra 400016</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Mallika Hospital</h6>
                    <p>Sharma Estate S.V. Road,Jogeshwari West, Mumbai, Maharashtra 400102</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Aditi Hospital</h6>
                    <p>90 Feet Rd, Thakur Complex, Kandivali East, Mumbai, Maharashtra 400101</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Fortis S.L. Raheja Hospital</h6>
                    <p>Raheja Rugnalaya Marg, Mahim West, Mumbai, Maharashtra 400016</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Mallika Hospital</h6>
                    <p>Sharma Estate S.V. Road,Jogeshwari West, Mumbai, Maharashtra 400102</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Aditi Hospital</h6>
                    <p>90 Feet Rd, Thakur Complex, Kandivali East, Mumbai, Maharashtra 400101</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Fortis S.L. Raheja Hospital</h6>
                    <p>Raheja Rugnalaya Marg, Mahim West, Mumbai, Maharashtra 400016</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Mallika Hospital</h6>
                    <p>Sharma Estate S.V. Road,Jogeshwari West, Mumbai, Maharashtra 400102</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Aditi Hospital</h6>
                    <p>90 Feet Rd, Thakur Complex, Kandivali East, Mumbai, Maharashtra 400101</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Fortis S.L. Raheja Hospital</h6>
                    <p>Raheja Rugnalaya Marg, Mahim West, Mumbai, Maharashtra 400016</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Mallika Hospital</h6>
                    <p>Sharma Estate S.V. Road,Jogeshwari West, Mumbai, Maharashtra 400102</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Aditi Hospital</h6>
                    <p>90 Feet Rd, Thakur Complex, Kandivali East, Mumbai, Maharashtra 400101</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Fortis S.L. Raheja Hospital</h6>
                    <p>Raheja Rugnalaya Marg, Mahim West, Mumbai, Maharashtra 400016</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Mallika Hospital</h6>
                    <p>Sharma Estate S.V. Road,Jogeshwari West, Mumbai, Maharashtra 400102</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Aditi Hospital</h6>
                    <p>90 Feet Rd, Thakur Complex, Kandivali East, Mumbai, Maharashtra 400101</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Fortis S.L. Raheja Hospital</h6>
                    <p>Raheja Rugnalaya Marg, Mahim West, Mumbai, Maharashtra 400016</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Mallika Hospital</h6>
                    <p>Sharma Estate S.V. Road,Jogeshwari West, Mumbai, Maharashtra 400102</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Aditi Hospital</h6>
                    <p>90 Feet Rd, Thakur Complex, Kandivali East, Mumbai, Maharashtra 400101</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Fortis S.L. Raheja Hospital</h6>
                    <p>Raheja Rugnalaya Marg, Mahim West, Mumbai, Maharashtra 400016</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Mallika Hospital</h6>
                    <p>Sharma Estate S.V. Road,Jogeshwari West, Mumbai, Maharashtra 400102</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Aditi Hospital</h6>
                    <p>90 Feet Rd, Thakur Complex, Kandivali East, Mumbai, Maharashtra 400101</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Fortis S.L. Raheja Hospital</h6>
                    <p>Raheja Rugnalaya Marg, Mahim West, Mumbai, Maharashtra 400016</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Mallika Hospital</h6>
                    <p>Sharma Estate S.V. Road,Jogeshwari West, Mumbai, Maharashtra 400102</p>
                  </div>
                </div>
                <div class="hsp-item">
                  <div class="">
                    <h6>Aditi Hospital</h6>
                    <p>90 Feet Rd, Thakur Complex, Kandivali East, Mumbai, Maharashtra 400101</p>
                  </div>
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
  name: 'plandetails',
  props: {

  },
  components: {
    Header,
    loadingPage
  },
  mounted() {
    
    this.requestJson = JSON.parse(sessionStorage.getItem("request_json"));
    this.selectedPlan = JSON.parse(sessionStorage.getItem("selected_plan_data"));

    console.log('this.requestJson: ', this.requestJson);
    console.log('this.selectedPlan: ', this.selectedPlan);

    this.responseJson = {
      "section": [
          {
              "icon": "",
              "section": [
                  {
                      "section": [
                          {
                              "id": "ulReload",
                              "name": "Unlimited Reload of SI",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "Unlimited reinstatement of sum insured applicable for any illness or anyone insured (Single claim under this benefit will be payable up to base sum insured)",
                                      "shortData":"Unlimited Reinstatement of SI for all illnesses of all insured",
                                      "icon": ""
                                  }
                              ],
                              "header": "ReAssure Benefit"
                          },
                          {
                              "id": "safGuard",
                              "name": "Safe Guard",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "a. Claim safeguard: Non-payable items paid up to sum insured b. Booster benefit safeguard: No impact on Booster benefit if claims in a policy year is up to 50,000 c. Sum insured safeguard: CPI (Consumer Price Index) linked increase in base sum insured",
                                      "shortData":"Claim Safeguard, Booster Benefit SafeGuard and SI Safeguard available",
                                      "icon": ""
                                  }
                              ],
                              "header": "Safeguard"
                          },
                          {
                              "id": "domAirAm",
                              "name":"Air ambulance",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "Cashless claim: Covered up to sum insured Reimbursement claim: Covered up to 2.5 Lacs",
                                      "shortData":"Hospital Authorised Air Ambulance Expenses Covered upto SI",
                                      "icon": ""
                                  }
                              ],
                              "header": "Air ambulance"
                          }
                      ],
                      "description": "",
                      "disclaimers": [
                          {}
                      ],
                      "sectionName": "Highlights"
                  },
                  {
                      "section": [
                          {
                              "id": "advTech",
                              "name":"Advanced Technology Methods",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "Covered up to sum insured with sub-limit of 1 Lac on few robotic surgeries",
                                      "shortData":"Available with sub limit of 1 lac on listed surgeries",
                                      "icon": ""
                                  }
                              ],
                              "header": "Modern treatments"
                          },
                          {
                              "id": "ayush",
                              "name":"AYUSH",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "We will indemnify the Medical Expenses incurred on the Insured Person's Hospitalization for Inpatient Care during the Policy Period on treatment taken under Ayurveda, Unani, Siddha and Homeopathy.",
                                      "shortData":"Treatment under Registered Ayurveda, Unani, Siddha and Homeopathy Clinics",
                                      "icon": ""
                                  }
                              ],
                              "header": "Alternative Treatments"
                          },
                          {
                              "id": "domAirAm",
                              "name":"Air ambulance",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "Pays for AirAmbulance transportation in an airplane or helicopter for Emergency Care which requires immediate and rapid ambulance  transportation as prescribed by a Medical Practitioner, from the site of first occurrence of the Illness / Accident to the nearest Hospital,that ground transportation cannot provide ",
                                      "shortData":"Hospital Authorised Air Ambulance Expenses Covered upto SI",
                                      "icon": ""
                                  }
                              ],
                              "header": "Air Ambulance Cover"
                          },
                          {
                              "id": "emerAmb",
                              "name":"Emergency ambulance",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "Covered upto 2,000 per hospitalization.",
                                      "shortData":"Covered upto 2,000 per hospitalization.",
                                      "icon": ""
                                  }
                              ],
                              "header": "Emergency ambulance"
                          },
                          {
                              "id": "eOpin",
                              "name":"e opinion",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "Once for any condition for which hospitalization is triggered",
                                      "shortData":"Once if hospitalization is required",
                                      "icon": ""
                                  }
                              ],
                              "header": "Second medical opinion"
                          },
                          {
                              "id": "hlthChk",
                              "name":"Annual Health Checkup",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "Annual (From Day 1); For defined list of tests; up to 500 for every 1 Lac sum insured (Individual policy: maximum 5,000 per Insured; Family Floater policy: maximum 10,000 per policy)",
                                      "shortData":"Upto Rs 500 for every 1 lac SI for defined tests. Max Rs 10000",
                                      "icon": ""
                                  }
                              ],
                              "header": "Health check-up"
                          },
                          {
                              "id": "homeCar",
                              "name":"Home Care Treatment",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "We will indemnify the Medical Expenses incurred on the Insured Persons treatment taken at home for Chemotherapy or Dialysis",
                                      "shortData":"Home care expenses for Chemotherapy or Dialysis will be reimbursed",
                                      "icon": ""
                                  }
                              ],
                              "header": "Home Care treatment"
                          },
                          {
                              "id": "ncb",
                              "name":"NCB",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "In case of claim free year, increase of 50% of base sum insured in a policy year; maximum up to 100% (In case of a claim, reduction of accumulated Cumulative Bonus by 50% of Base Sum Insured)",
                                      "shortData":"50% increase in SIevery claim free year upto max 100% of SI",
                                      "icon": ""
                                  }
                              ],
                              "header": "Booster benefit"
                          },
                          {
                              "id": "shrAcCas",
                              "name":"Shared accommodation cash benefit",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "Up to 15 Lacs base sum insured: 800 per day (maximum 4,800) Above 15 Lacs base sum insured: 1,000 per day; (maximum 6,000)",
                                      "shortData":"800-1000 per day as per SI upto a max of 6 days",
                                      "icon": ""
                                  }
                              ],
                              "header": "Shared accommodation cash benefit"
                          },
                          {
                              "id": "ulReload",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "Unlimited reinstatement of sum insured applicable for any illness or anyone insured (Single claim under this benefit will be payable up to base sum insured)",
                                      "shortData":"Unlimited Reinstatement of SI for all illnesses of all insured",
                                      "icon": ""
                                  }
                              ],
                              "header": "ReAssure"
                          }
                      ],
                      "description": "",
                      "sectionName": "Coverage"
                  },
                  {
                              "section": [
                                  {
                                      "id": "hcb",
                                      "name":"Hospital Cash Benefit",
                                      "icon": "",
                                      "info": [
                                          {
                                              "data": "Up to 5 Lac base sum insured: 1,000/day 7.5 Lacs to 15 Lacs base sum insured: 2,000/day Above 15 Lacs base sum insured: 4,000/day. Min 48 hours of hospitalization and max upto 30 days",
                                              "shortData":"1,000, 2000 & 4000 per day for SI upto 5 Lacs, between 7.5 lacs to 15 Lacs & above 15 Lacs respectively. Max 30 days",
                                              "icon": ""
                                          }
                                      ],
                                      "header": "Hospital Cash Benefit"
                                  },
                                  {
                                      "id": "PACover",
                                      "name":"Personal Accident Cover",
                                      "icon": "",
                                      "info": [
                                          {
                                              "data": "5 times of base sum insured; subject to maximum of 1 Crore",
                                              "shortData":"",
                                              "icon": ""
                                          }
                                      ],
                                      "header": "Parent and Child Care Cover - Booster"
                                  },
                                  {
                                      "id": "safGuard",
                                      "name":"Safe Guard",
                                      "icon": "",
                                      "info": [
                                          {
                                              "data": "a. Claim safeguard: Non-payable items paid up to sum insured b. Booster benefit safeguard: No impact on Booster benefit if claims in a policy year is up to 50,000 c. Sum insured safeguard: CPI (Consumer Price Index) linked increase in base sum insured",
                                              "shortData":"Claim Safeguard, Booster Benefit SafeGuard and SI Safeguard available",
                                              "icon": ""
                                          }
                                      ],
                                      "header": "Parent and Child Care Cover - Booster"
                                  }
                              ],
                              "description": "",
                              "disclaimers": [
                                  {}
                              ],
                              "sectionName": "Add-on Coverages"
                          },
                  {
                      "section": [
                          {
                              "id": "initWaitingTime",
                              "name":"Initial Waiting Period",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "Standard Waiting period of 30 Days",
                                      "shortData":"30 Days",
                                      "icon": ""
                                  }
                              ],
                              "header": "Initial Waiting period"
                          },
                          {
                              "id": "pedWaitingTime",
                              "name":"Pre Existing Disease Waiting Period",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "Pre existing disease waiting period is 36 months",
                                      "shortData":"36 Months",
                                      "icon": ""
                                  }
                              ],
                              "header": "PED Waiting Period"
                          },
                          {
                              "id": "specificIllnessProcedureWaitingTime",
                              "name":"Specified disease/procedure waiting period",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "Expenses related to the treatment of the listed conditions, surgeries/treatments shall be excluded until the expiry of 24 months of continuous coverage after the date of inception of the first Policy with us.",
                                      "shortData":"24 Months",
                                      "icon": ""
                                  }
                              ],
                              "header": "PED Waiting Period"
                          }
                      ],
                      "description": "",
                      "disclaimers": [
                          {}
                      ],
                      "sectionName": "Waiting Periods"
                  },
                  {
                      "section": [
                          {
                              "id": "brochureLink",
                              "name":"Product Brochure",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "https://www.hdfcergo.com/docs/default-source/downloads/brochures/myhealth-suraksha-brochureaddfd5a1e98c4e25a83076f1e9cd856e.pdf",
                                      "shortData":"",
                                      "icon": ""
                                  }
                              ],
                              "header": "Brochure link of the product"
                          },
                          {
                              "id": "maxAdultInsuredAllowed",
                              "name": "Max No. of Adults allowed",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "Max number of adults allowed is 4",
                                      "shortData":"",
                                      "icon": ""
                                  }
                              ],
                              "header": "Max no of adults included in the policy"
                              
                          },
                          {
                              "id": "maxChildInsuredAllowed",
                              "name": "Max No. of Child(ren) allowed",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "Max number of childrens allowed is 3",
                                      "shortData":"",
                                      "icon": ""
                                  }
                              ],
                              "header": "Max nunber of Children allowed in the policy"
                          },
                          {
                              "id": "policyIssuanceTime",
                              "name": "Policy Issuance Time",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "Instant in case of STP. Within 15 days in case of medical cases.",
                                      "shortData":"",
                                      "icon": ""
                                  }
                              ],
                              "header": "Policy Issuance Time"
                          },
                          {
                              "id": "policyPortabilityFAQ",
                              "name":"Policy Portability FAQ Link",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "https://www.irdai.gov.in/ADMINCMS/cms/Uploadedfiles/RTI_FAQ/Portability%20and%20migration%20facility08122021.pdf#:~:text=FAQs%20on%20Portability%20%3A%20What%20is%20portability%20under,gained%20for%20pre-existing%20conditions%20and%20time%20bound%20exclusions.",
                                      "shortData":"",
                                      "icon": ""
                                  }
                              ],
                              "header": "FAQs on Portability of Health Insurance Policy"
                          },
                          {
                              "id": "policyTerm",
                              "name":"Policy Terms",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "1 Year, 2 Years, 3 Years",
                                      "shortData":"",
                                      "icon": ""
                                  }
                              ],
                              "header": "Policy terms allowed in the plan"
                          },
                          {
                              "id": "premiumPaymentFrequency",
                              "name":"Premium Payment Frequency",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "Monthly, Quarterly, Half Yearly, Annual",
                                      "shortData":"",
                                      "icon": ""
                                  }
                              ],
                              "header": "Frequency of premium payment allowed in the plan"
                          },
                          {
                              "id": "productFeaturesDesc",
                              "name":"Product Features Description",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "Key features of the policy:\n 1. Multiple sum insured options ranging from Rs .3 Lacs to Rs .75 Lacs available under this policy. \n 2. Any age entry option with lifetime renewal \n 3. Exclusive covers like Air ambulance cover, Recovery benefit,Infertility cover \n 4. Wellness features like Fitness discount @ renewal, Health incentives for maintenance of health\n 5. Flexi benefits like choosing room rent capping, co pay in order to avail discounts on premium \n 6. Various discount options to like family discount, long term policy discount,loyalty discount \n 7. Long term policy options up to 3 years with attractive premium rate \n 8. Option to pay yearly premium in 3,6 and 12 equal installments ",
                                      "shortData":"",
                                      "icon": ""
                                  }
                              ],
                              "header": "Product Features Description"
                          }
                      ],
                      "description": "",
                      "disclaimers": [
                          {}
                      ],
                      "sectionName": "Policy Information"
                  }
              ],
              "sectionName": "Features"
          },
          {
              "icon": "",
              "section": [
                  {
                      "section": [
                          {
                              "id": "",
                              "name":"",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "For Planned Treatment",
                                      "shortData":"",
                                      "icon": ""
                                  },
                                  {
                                      "data": "We must be contacted to pre-authorize Cashless Facility for planned treatment at least 72 hours prior to the proposed treatment. Once the request for pre-authorisation hs been granted, the treatment must take place within 15 days of the pre-authorization date at a Network Provider",
                                      "shortData":"",
                                      "icon": ""
                                  },
                                  {
                                      "data": "For Emergency Treatment",
                                      "shortData":"",
                                      "icon": ""
                                  },
                                  {
                                      "data": "If the Insured Person has been Hospitalized in an Emergency, We must be contacted to pre-authorize Cashless Facility within 48 hours of the Insured Person’s Hospitalization or before discharge from the Hospital, whichever is earlier",
                                      "shortData":"",
                                      "icon": ""
                                  }
                              ],
                              "header": "Process for Obtaining Pre-Authorization"
                          }
                      ],
                      "description": "For this, you would require a Cashless Health Card. A cashless mediclaim can only be filed in a network hospital.  A network hospital is the one with which the health insurance company has a tie - up.Your insurer will directly settle the bills with the hospital.In case ofa cashless claim you just have to pay a small amount against deductibles.",
                      "disclaimers": [
                          {}
                      ],
                      "sectionName": "Cashless Claims"
                  },
                  {
                      "section": [
                          {
                              "id": "",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "For medical claims – Reimbursement Facility",
                                      "shortData":"",
                                      "icon": ""
                                  },
                                  {
                                      "data": "We shall be provided with the following necessary information and documentation in respect of all claims at Your/Insured Person’s expense within 30 days of the Insured Event giving rise to a claim or within 30 days from the date of occurrence of an Insured Event",
                                      "shortData":"",
                                      "icon": ""
                                  }
                              ],
                              "header": "Claim Document"
                          }
                      ],
                      "description": "For this, you would require a Cashless Health Card. A cashless mediclaim can only be filed in a network hospital.  A network hospital is the one with which the health insurance company has a tie - up.Your insurer will directly settle the bills with the hospital.In case ofa cashless claim you just have to pay a small amount against deductibles.",
                      "disclaimers": [
                          {}
                      ],
                      "sectionName": "Reimbursement Claims"
                  }
              ],
              "sectionName": "Claims Procedure"
          },
          {
              "icon": "",
              "section": [
                  {
                      "section": [
                          {
                              "id": "",
                              "icon": "",
                              "info": [
                                  {
                                      "data": "https://rules.nivabupa.com/hospital-network/",
                                      "shortData":"",
                                      "icon": ""
                                  }
                              ],
                              "header": "Click on the link to get the list of all the hospitals"
                          }
                      ],
                      "description": "",
                      "disclaimers": [
                          {}
                      ],
                      "sectionName": "Niva Bupa Cashless Hospitals List Link"
                  }
              ],
              "sectionName": "Cashless Hospitals"
          }
      ],
      "brochure": "https://www.nivabupa.com/content/dam/nivabupa/PDF/reassure/ReAssure%20-%20%20Brochure.pdf",
      "planCode": "10005",
      "planName": "Niva Bupa: ReAssure",
      "networkList": "https://rules.nivabupa.com/hospital-network/",
      "productCode": "Reassure",
      "productLogo": "https://insurance-manufacturer.s3.ap-south-1.amazonaws.com/logos/NBHI+ReAssure+Logo.jpg",
      "productName": "ReAssure",
      "policyWording": "https://www.nivabupa.com/content/dam/nivabupa/PDF/reassure/ReAssure%20-%20Policy%20Document.pdf",
      "insCompanyLogo": "https://insurance-manufacturer.s3.ap-south-1.amazonaws.com/logos/Niva+Bupa+Logo.png",
      "insuranceCompanyCode": "NBHI",
      "insuranceCompanyName": "Niva Bupa Health Insurance"
    };

    this.getProductUi();
  },
  data() {
    return {
      responseJson: "",
      selectedPlan: "",
      isCashLessPage: true,
      loading: false,
      errorMsg: "",
    };
  },
  methods: {
    activePage(val) {
      console.log('active page called: ', val)
      if (val == 0) {
          return "active";
      } else {
          return "";
      }
    },
    isTabContentActive(val) {
      if (val == 0) {
        return "show in active";
      } else {
        return "";
      }
    },
    isSelected(val) {
      if (val == 0) {
        return "select";
      } else {
        return "";
      }
    },
    scrollMeTo(refName) {
      console.log('scroll me to called: ', refName);
      var ele = document.getElementById(refName);
      
      $(".fea_cls").removeClass('select');
      $("#features_" + refName).addClass('select');

      ele.scrollIntoView({ behavior: 'smooth'});
    },
    isAreaExpanded(val) {
      if (val == 0) {
        return true;
      } else {
        return false;
      }
    },
    isCollapsed(val) {
      if (val == 0) {
        return "";
      } else {
        return 'collapsed';
      }
    },
    isCollapseShow(val) {
      if (val == 0) {
        return "show";
      } else {
        return '';
      }
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
            console.log('proposal response: ', response);
            this.responseJson = response.data.data;
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
    convertInLakh(amt) {
      if (amt < 10000000) {
        return amt / 100000 + "L";
      } else {
        return amt / 10000000 + "Cr.";
      }
    },
    currency(amt) {
      let tmpAmt = parseFloat(amt).toFixed(2);
      return new Intl.NumberFormat().format(tmpAmt);
    },
    getPerMonthPremium(value) {
      return Math.ceil(value / 12);
    },
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
