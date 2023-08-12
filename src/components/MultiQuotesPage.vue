<template>
  <div class="text-center" v-if="loading" style="padding-top: 50px;">
    <loadingPage />
  </div>
  <div v-else class="">
    <Header />

    

    <div class="wrapper">
      <!-- Custom Alert -->
      <div v-if="alertMsg" id="customAlert" class="custom-error-alert modal fade show">
        <div class="modal-backdrop fade show"></div>
        <div class="modal-dialog modal-dialog-centered premium-modal">
          <div class="modal-content">
            <div class="modal-header">
              <div class="icon-box">
                <!-- <i class="bi bi-check2"></i> -->
                <i class="bi bi-x"></i>
                <!-- <i class="bi bi-exclamation-lg"></i> -->
              </div>
              <!-- <h5 class="modal-title"></h5> -->
              <!-- <button type="button" @click="closeAlertDialog()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
            </div>
            <div class="modal-body">
              <p class="p-2">{{alertMsg}}</p>
            </div>
            <div class="modal-footer">
              <button id = "close" class="btn btn-block text-white btn-sm" @click="closeAlertDialog()"> Close</button>
            </div>
          </div>
        </div>
      </div>
      <!-- ./Custom Alert -->


      <div class="top-filter">
        <div class="top-hold">
          <div class="cover-item">
            <small>Cover for</small>
            <div class="txt">
              {{ noOfAdult }} {{ (noOfAdult > 1) ? 'Adults' : 'Adult' }}
              <span v-if="noOfChild > 0">  &amp; {{ noOfChild }} {{ (noOfChild > 1) ? 'Children' : 'Child'}}</span>
              <em class="bi bi-pencil ms-2" @click="(isCoverfor = !isCoverfor)" data-bs-toggle="offcanvas" data-bs-target="#edit" aria-controls="offcanvasRight"></em>
            </div>
            
          </div>
          <div class="select-hold">
            <div class="select-item">
              <select class="normal-select" value="" @change="policyCoverChangeAmt($event)" v-model="quoteAmount">
                <option value="0">
                  All Plans
                </option>
                <option v-for="(data, ind) in policyCoverAmtList" :key="ind" :value="data.value">
                  <em class="rupee">&#x20B9;</em> {{ convertInLakh(data.text) }}
                </option>
              </select>
            </div>
            <div class="select-item">
              <div class="like-select-box" @click="(isBenefits = !isBenefits)">Policy Benefits</div>
              <div class="benefits-cnt" v-if="isBenefits" v-click-outside="onClickOutside">
                <div class="check-group mb-2">
                  <div class="form-check w-100" v-for="(data, ind) in policyBenefitList" :key="ind">
                    <input class="form-check-input" type="checkbox" :value="data.option_code" :id="'chk' + ind"
                      @click="getPolicyBenefits" v-model="policyBenefitCodes" />
                    <label class="form-check-label p-0" :for="'chk' + ind">{{ data.benefit_name }}</label>
                  </div>
                </div>
                <!-- <div class="d-flex justify-content-end">
                  <button type="button" class="btn btn-sm btn-warning rounded-pill px-4 base-med text-white"
                    @click="applyPolicyBenefit()">Apply</button>
                </div> -->
              </div>
            </div>
            <div class="select-item">
              <div class="like-select-box" @click="(isInsurer = !isInsurer)">Insurer</div>

              <div class="insurer-cnt" v-if="isInsurer" v-click-outside="onClickOutside">
                <div class="check-group mb-2">
                  <div class="form-check" :class="checkResIns(data.manufacturer_id)" v-for="(data, ind) in insurerList"
                    :key="ind">
                    <input class="form-check-input" type="checkbox" v-model="insurerCodes" :value="data.manufacturer_id"
                      :id="'inschk' + ind" @click="getInsurer">
                    <label class="form-check-label" :for="'inschk' + ind">
                      {{ data.manufacturer_name }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="inner-wrapper d-flex flex-wrap inner-wrapper-padding">
        <div class="right-panel">
          <span class="text-danger">{{ erMsg }}</span>
          <div class="heading-cnt" v-if="noOfResults > 0">
            <h3 class="mb-0">Showing {{ noOfResults }} results</h3>

            <div class="qt-link" v-if="noOfResults > 0">
              &nbsp;&nbsp;&nbsp;&nbsp;<a @click="openEmailModal()" data-bs-target="#emailModal" data-bs-toggle="modal" class="cursor-pointer">
                <!-- <img src="~@/assets/images/email.svg" alt="" > -->
                <span>Send Quotes To Customer</span>
              </a>
            </div>

            <div class="quote-filter">
              <div class="dropdown">
                <div class="btn dropdown-toggle btn-sm rounded-pill after-none" id="dropdownMenuButton1"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <em class="iconpng sort1"></em>
                  <span class="mx-2">Sort by</span>
                  <em class="iconpng sort2"></em>
                </div>

                <ul class="dropdown-menu list" aria-labelledby="dropdownMenuButton1">
                  <li><a @click="sortByLowestPremium(1)" :class="sortSelectedId === 1 ? 'active' : null"
                      class="dropdown-item" href="javascript:void(0)">Premium Low to High</a></li>
                  <li><a @click="sortByHighestPremium(2)" :class="sortSelectedId === 2 ? 'active' : null"
                      class="dropdown-item" href="javascript:void(0)">Premium High to Low</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Plan List -->
          <div v-for="(dt, ind) in responseData" :key="ind">
            <div class="plan-cnt shadow-sm" v-if="getInsurerFilter(dt.data[0].insuranceAndProducts.insuranceCompanyCode) && getBenefitsFilter(dt.data[0].productDetails.healthCovers)">
              <div class="img-cnt">
                <div class="img-box">
                  <!-- <img src="../assets/images/logo-img1.jpg" alt="image" /> -->
                  <img :src="dt.data[0]?.supportingData?.insCompanyLogo" alt="image" />
                </div>
                <div v-if="dt.data.length > 1" class="moreplan collapsed" data-bs-toggle="collapse" :href="'#collapseExample' + ind"
                  role="button" aria-expanded="false" aria-controls="collapseExample">
                  <span class="fs-12 base-med text-primary me-1">{{ countMorePlans(dt.data) }}</span>
                  <em class="pngrightarrow"></em>
                </div>
              </div>
              <div class="info-item">
                <div class="info-cnt">
                  <div class="info-hold">
                    <div class="info-desc">
                      <div class="info-inner">
                        <div class="title">
                          <h5>{{ dt.data[0].insuranceAndProducts.productName + ' : ' +
                            dt.data[0].productDetails.planOption.planName }}</h5>
                          <a :href="dt.data[0].supportingData.Messages.brochureLink" target="_blank">
                            <em class="download-new mx-3"></em>
                          </a>
                        </div>
                        <ul class="cover-terms-hospital">
                          <li>
                            <div class="d-flex align-items-center">
                              <em class="rupee">₹</em><span> {{
                                convertInLakh(dt.data[0].individualDetails[0].sumInsured)
                              }}</span>
                            </div>
                            <small>Policy Cover</small>
                          </li>
                          <li>
                            <div class="d-flex align-items-center">
                              <span>{{
                                getHospitalsNumbers(dt.data[0].supportingData.Messages.HospitalLocator.hospitalList)
                              }}</span>
                              <em class="iconpng icon-pngrightarrow ms-2"></em>
                            </div>
                            <small>Hospitals</small>
                          </li>
                        </ul>
                      </div>
                      <div class="btn-cnt text-center">
                        <div class="btn btn-warning text-white" @click="selectPlan(dt.data[0])">
                          <em class="rupee">&#x20B9;</em>
                          <span>
                            {{
                              currency(dt.data[0].productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue)
                            }}
                            <small class="text-white">/ year</small>
                          </span>
                          <em class="bi bi-chevron-right"></em>
                        </div>
                        <small class="notetxt">
                          <em class="rupee">&#x20B9;</em> {{
                            currency(getPerMonthPremium(dt.data[0].productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue))
                          }} / month
                        </small>
                      </div>
                      <ul class="claim-ratio-discount-cnt me-5">
                        <li class="claim-ratio">{{
                          getCsValue(dt.data[0].supportingData.Messages.ClaimSettlementPercent)
                        }}% claim settlement ratio</li>
                      </ul> 
                      <ul class="info-list">
                        <li v-for="(dt2, ind2) in dt.data[0].productDetails.healthCovers" :key="ind2" :class="'me-2 '+chkOption(ind2, 'mpol', ind)">{{
                          dt2.optionName
                        }}</li>
                        <span v-if="dt.data[0].productDetails.healthCovers.length > viewMoreCounter">
                          <li class="viewbtn" :id="'view-more-mpol-'+ind" @click="viewMore('mpol', ind)">
                            <span>View More..</span>
                          </li>
                          <li class="viewbtn d-none" :id="'hide-more-mpol-'+ind" @click="viewLess('mpol', ind)">
                            <span>Hide..</span>
                          </li>
                        </span>
                      </ul>
                    </div>
                  </div>
                  <div class="addon-cnt">
                    <div @click="viewPlanDetails(dt.data[0])" tag="div"
                      class="d-inline-flex align-items-center cursor-pointer">
                      <span>View Plan Details</span>
                      <em class="iconpng icon-pngrightarrow ms-2"></em>
                    </div>
                    <div class="form-check ms-auto">
                      <label class="form-check-label fs-12 base-med text-primary p-0">
                        <input class="form-check-input" type="checkbox" :id="'plan_p' + ind" :value="ind + '_P_0'"
                          @click="getCompare($event)">
                        Add to compare
                      </label>
                    </div>
                  </div>
                </div>
                <div class="collapse" v-if="dt.data.length > 1" :id="'collapseExample' + ind">
                  <div v-for="(dt2, ind2) in dt.data" :key="ind2">
                    <div v-if="ind2 > 0" class="info-cnt border-top">
                      <div class="info-hold">
                        <div class="info-desc">
                          <div class="info-inner">
                            <div class="title">
                              <h5>{{ dt2.insuranceAndProducts.productName + ' : ' + dt2.productDetails.planOption.planName
                              }}</h5>
                              <a :href="dt2.supportingData.Messages.brochureLink" target="_blank">
                                <em class="download-new mx-3"></em>
                              </a>
                            </div>
                            <ul class="cover-terms-hospital">
                              <li>
                                <div class="d-flex align-items-center">
                                  <em class="rupee">₹</em><span> {{
                                    convertInLakh(dt2.individualDetails[0].sumInsured)
                                  }}</span>
                                </div>
                                <small>Policy Cover</small>
                              </li>
                              <li>
                                <div class="d-flex align-items-center">
                                  <span>{{
                                    getHospitalsNumbers(dt2.supportingData.Messages.HospitalLocator.hospitalList)
                                  }}</span>
                                  <em class="iconpng icon-pngrightarrow ms-2"></em>
                                </div>
                                <small>Hospitals</small>
                              </li>
                            </ul>
                          </div>
                          <div class="btn-cnt text-center">
                            <div class="btn btn-warning text-white" @click="selectPlan(dt2)">
                              <em class="rupee">&#x20B9;</em>
                              <span>
                                {{
                                  currency(dt2.productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue)
                                }}
                                <small class="text-white">/ year</small>
                              </span>
                              <em class="bi bi-chevron-right"></em>
                            </div>
                            <small class="notetxt">
                              <em class="rupee">&#x20B9;</em> {{
                                currency(getPerMonthPremium(dt2.productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue))
                              }} / month
                            </small>
                          </div>
                          <ul class="claim-ratio-discount-cnt me-5">
                            <li class="claim-ratio">{{
                              getCsValue(dt2.supportingData.Messages.ClaimSettlementPercent)
                            }}% claim settlement ratio</li>
                          </ul>
                          <ul class="info-list">
                            <li v-for="(dt3, ind3) in dt2.productDetails.healthCovers" :key="ind3" :class="'me-2 '+chkOption(ind3, 'mpol4', ind2)">{{
                              dt3.optionName
                            }}</li>
                            <span v-if="dt2.productDetails.healthCovers.length > viewMoreCounter">
                              <li class="viewbtn" :id="'view-more-mpol4-'+ind2" @click="viewMore('mpol4', ind2)">
                                <span>View More..</span>
                              </li>
                              <li class="viewbtn d-none" :id="'hide-more-mpol4-'+ind2" @click="viewLess('mpol4', ind2)">
                                <span>Hide..</span>
                              </li>
                            </span>
                          </ul>
                        </div>
                      </div>
                      <div class="addon-cnt">
                        <div @click="viewPlanDetails(dt2)" tag="div"
                          class="d-inline-flex align-items-center  cursor-pointer">
                          <span>View Plan Details</span>
                          <em class="iconpng icon-pngrightarrow ms-2"></em>
                        </div>
                        <div class="form-check ms-auto">
                          <label class="form-check-label fs-12 base-med text-primary p-0">
                            <input class="form-check-input" type="checkbox" :id="'plan_p' + ind"
                              :value="ind + '_P_' + ind2" @click="getCompare($event)">
                            Add to compare
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--.\ End plan list-->
          <div v-if="loading2" class="text-center">
            <img class="loader2" src="~@/assets/images/loading_gif.svg" alt="" />
          </div>
          <!-- Most popular plans -->
          <div class="carousel-block shadow-sm" id="popular_plan_section" v-if="featuredPlanList.length > 0">
            <div class="d-flex align-items-center mb-2">
              <em class="star me-3"></em>
              <h4 class="mb-0">Most Popular Plans for your Risk Profile</h4>
            </div>
            <div id="carouselExampleIndicators" class="carousel slide" data-interval="false">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <template v-for="(dt, ind) in featuredPlanList">
                  <div v-if="ind < 3" :class="'carousel-item ' + activeCarousel(ind)">
                    <div class="plan-cnt" v-if="getInsurerFilter(dt.insuranceAndProducts.insuranceCompanyCode) && getBenefitsFilter(dt.productDetails.healthCovers)">
                    <div class="img-cnt">
                      <div class="img-box">
                        <img :src="dt.supportingData?.insCompanyLogo" alt="image" />
                      </div>
                    </div>
                    <div class="info-item">
                      <div class="info-cnt">
                        <div class="info-hold">
                          <div class="info-desc">
                            <div class="info-inner">
                              <div class="title">
                                <h5>{{ dt.insuranceAndProducts.productName + ' : ' +
                                  dt.productDetails.planOption.planName }}</h5>
                                <a :href="dt.supportingData.Messages.brochureLink" target="_blank">
                                  <em class="download-new mx-3"></em>
                                </a>
                              </div>
                              <ul class="cover-terms-hospital">
                                <li>
                                  <div class="d-flex align-items-center">
                                    <em class="rupee">₹</em><span> {{
                                      convertInLakh(dt.individualDetails[0].sumInsured)
                                    }}</span>
                                  </div>
                                  <small>Policy Cover</small>
                                </li>
                                <li>
                                  <div class="d-flex align-items-center">
                                    <span>{{
                                      getHospitalsNumbers(dt.supportingData.Messages.HospitalLocator.hospitalList)
                                    }}</span>
                                    <em class="iconpng icon-pngrightarrow ms-2"></em>
                                  </div>
                                  <small>Hospitals</small>
                                </li>
                              </ul>
                            </div>
                            <div class="btn-cnt text-center">
                              <div class="btn btn-warning text-white" @click="selectPlan(dt)">
                                <em class="rupee">&#x20B9;</em>
                                <span>
                                  {{
                                    currency(dt.productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue)
                                  }}
                                  <small class="text-white">/ year</small>
                                </span>
                                <em class="bi bi-chevron-right"></em>
                              </div>
                              <small class="notetxt">
                                <em class="rupee">&#x20B9;</em> {{
                                  currency(getPerMonthPremium(dt.productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue))
                                }} / month
                              </small>
                            </div>
                            <ul class="claim-ratio-discount-cnt">
                              <li class="claim-ratio">{{
                                getCsValue(dt.supportingData.Messages.ClaimSettlementPercent)
                              }}% claim settlement ratio</li>
                            </ul>
                            <ul class="info-list">
                              <li class="me-2" v-for="(dt2, ind2) in dt.productDetails.healthCovers" :key="ind2" :class="'me-2 '+chkOption(ind2, 'mpol2', ind)">{{
                                dt2.optionName
                              }}</li>
                              <span v-if="dt.productDetails.healthCovers.length > viewMoreCounter">
                                <li class="viewbtn" :id="'view-more-mpol2-'+ind" @click="viewMore('mpol2', ind)">
                                  <span>View More..</span>
                                </li>
                                <li class="viewbtn d-none" :id="'hide-more-mpol2-'+ind" @click="viewLess('mpol2', ind)">
                                  <span>Hide..</span>
                                </li>
                              </span>
                            </ul>
                          </div>
                        </div>
                        <div class="addon-cnt">
                          <div @click="viewPlanDetails(dt.data[0])" tag="div"
                            class="d-inline-flex align-items-center cursor-pointer">
                            <span>View Plan Details</span>
                            <em class="iconpng icon-pngrightarrow ms-2"></em>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </template>
              </div>
              <div class="nxt-prv">
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <!--.\ END : Most popular plans -->
          <br/>
          <!-- Most economic plans -->
          <div class="carousel-block shadow-sm" id="economic_plan_section" v-if="economicPlanList.length > 0">
            <div class="d-flex align-items-center mb-2">
              <em class="lowest-price me-3"></em>
              <h4 class="mb-0">Most Economical Plans for your Risk Profile</h4>
            </div>
            <div id="carouselExampleIndicators2" class="carousel slide" data-interval="false">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <template v-for="(dt, ind) in economicPlanList">
                  <div v-if="ind < 3" :class="'carousel-item ' + activeCarousel(ind)">
                    <div class="plan-cnt" v-if="getInsurerFilter(dt.insuranceAndProducts.insuranceCompanyCode) && getBenefitsFilter(dt.productDetails.healthCovers)">
                    <div class="img-cnt">
                      <div class="img-box">
                        <img :src="dt.supportingData?.insCompanyLogo" alt="image" />
                      </div>
                    </div>
                    <div class="info-item">
                      <div class="info-cnt">
                        <div class="info-hold">
                          <div class="info-desc">
                            <div class="info-inner">
                              <div class="title">
                                <h5>{{ dt.insuranceAndProducts.productName + ' : ' +
                                  dt.productDetails.planOption.planName }}</h5>
                                <a :href="dt.supportingData.Messages.brochureLink" target="_blank">
                                  <em class="download-new mx-3"></em>
                                </a>
                              </div>
                              <ul class="cover-terms-hospital">
                                <li>
                                  <div class="d-flex align-items-center">
                                    <em class="rupee">₹</em><span> {{
                                      convertInLakh(dt.individualDetails[0].sumInsured)
                                    }}</span>
                                  </div>
                                  <small>Policy Cover</small>
                                </li>
                                <li>
                                  <div class="d-flex align-items-center">
                                    <span>{{
                                      getHospitalsNumbers(dt.supportingData.Messages.HospitalLocator.hospitalList)
                                    }}</span>
                                    <em class="iconpng icon-pngrightarrow ms-2"></em>
                                  </div>
                                  <small>Hospitals</small>
                                </li>
                              </ul>
                            </div>
                            <div class="btn-cnt text-center">
                              <div class="btn btn-warning text-white" @click="selectPlan(dt)">
                                <em class="rupee">&#x20B9;</em>
                                <span>
                                  {{
                                    currency(dt.productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue)
                                  }}
                                  <small class="text-white">/ year</small>
                                </span>
                                <em class="bi bi-chevron-right"></em>
                              </div>
                              <small class="notetxt">
                                <em class="rupee">&#x20B9;</em> {{
                                  currency(getPerMonthPremium(dt.productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue))
                                }} / month
                              </small>
                            </div>
                            <ul class="claim-ratio-discount-cnt">
                              <li class="claim-ratio">{{
                                getCsValue(dt.supportingData.Messages.ClaimSettlementPercent)
                              }}% claim settlement ratio</li>
                            </ul>
                            <ul class="info-list">
                              <li class="me-2" v-for="(dt2, ind2) in dt.productDetails.healthCovers" :key="ind2" :class="'me-2 '+chkOption(ind2, 'mpol3', ind)">{{
                                dt2.optionName
                              }}</li>
                              <span v-if="dt.productDetails.healthCovers.length > viewMoreCounter">
                                <li class="viewbtn" :id="'view-more-mpol3-'+ind" @click="viewMore('mpol3', ind)">
                                  <span>View More..</span>
                                </li>
                                <li class="viewbtn d-none" :id="'hide-more-mpol3-'+ind" @click="viewLess('mpol3', ind)">
                                  <span>Hide..</span>
                                </li>
                              </span>
                            </ul>
                          </div>
                        </div>
                        <div class="addon-cnt">
                          <div @click="viewPlanDetails(dt.data[0])" tag="div"
                            class="d-inline-flex align-items-center cursor-pointer">
                            <span>View Plan Details</span>
                            <em class="iconpng icon-pngrightarrow ms-2"></em>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </template>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <!--.\ END : Most economic plans -->
        </div>
        <div class="quick-panel">
          <div class="quick-cnt shadow-sm text-center">
            <h3 class="text-capitalize">Quickly find</h3>
            <div class="content pb-3">
              <div class="d-flex align-items-center justify-content-center py-3 border-bottom" v-if="featuredPlanList.length > 0">
                <em class="star me-3"></em>
                <p class="fs-16 cursor-pointer text-capitalize" @click="scrollMeTo('popular_plan_section')">Most popular plans</p>
              </div>
              <div class="d-flex align-items-center justify-content-center py-3 border-bottom" v-if="economicPlanList.length > 0">
                <em class="lowest-price me-3"></em>               
                <p class="fs-16 cursor-pointer text-capitalize" @click="scrollMeTo('economic_plan_section')">Most economic plans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Compare Section -->
      <div class="compare-cnt" v-if="idsToCompare.length > 0">
        <div class="plan-hold">
          <div class="plan-card" v-for="(dt3, ind3) in selectedForFilter" :key="ind3">
            <span class="close" v-on:click="removeFromFilter(ind3)">
              <em class="bi bi-x"></em>
            </span>
            <div class="img-box">
              <!-- <img src="../assets/images/logo-img1.jpg" alt="image" /> -->
              <img :src="dt3.supportingData?.insCompanyLogo" alt="image" />
            </div>
            <h5>{{ dt3.insuranceAndProducts.productName }}</h5>
            - {{ dt3.productDetails.planOption.planName }}
          </div>
          <div class="plan-card add-more-plan" v-if="idsToCompare.length < 3" v-on:click="scrollToTop">
            <div class="img-box">
              <img src="../assets/images/add-more-plan.png" alt="image" />
            </div>
            <h5>Add More Plans</h5>
          </div>
          <div class="btn-hold">
            <!-- <router-link to="/compare-plan"> -->
            <button type="button" class="btn btn-warning rounded-pill text-white d-flex align-items-center"
              @click="goToCompare()">
              <span>Compare</span>
              <em class="bi bi-chevron-right ms-2"></em>
            </button>
            <!-- </router-link> -->
          </div>
        </div>
      </div>
      <!-- .\ End Compare Section -->
    </div>

    <!--edit profile section -->
    <div class="offcanvas offcanvas-end offcanvas-edit" tabindex="-1" id="edit" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <div class="top-filter">
          <div class="top-hold">
            <div class="cover-item">
              <small>Cover for</small>
                <div class="txt">
                  {{ noOfAdult }} {{ (noOfAdult > 1) ? 'Adults' : 'Adult' }}
                  <span v-if="noOfChild > 0">  &amp; {{ noOfChild }} {{ (noOfChild > 1) ? 'Children' : 'Child'}}</span>
                </div>
            </div>
          </div>
        </div>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="cover-for">
          <div class="d-flex align-items-center mb-3">
            <h6 class="mb-0">Cover For</h6>
          </div>
          <div class="floating-form">
            <div class="wrap">
              <div class="scroll-cnt">
                <div class="labeltxt mb-3">Whom do you want insurance for ?</div>
                <div v-for="(item, index) in userData.memberList" :key="index">
                  <div class="row replica mb-4">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-5">
                      <div class="floating-label mb-0">
                        <select class="floating-select format" v-model="this.userData.memberList[index].member" @change="getFieldValidation(index, 'member', 'page2')" @click="getMember(index)">
                          <option value="" selected></option>
                          <option
                            :value="item1"
                            :disabled="checkSelectedMember(index,item1)"
                            v-for="(item1, ind) in memberOptions"
                            :key="ind"
                          >
                            {{ item1 }}
                          </option>
                        </select>
                        <label>Select Member</label>
                      </div>
                      <p class="error-text" v-if="memberError.length>0">{{ memberError[index].member}}</p>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-2">
                      <div class="floating-label mb-0">
                        <select class="floating-input px-0"  
                        @change="getFieldValidation(index, 'age', 'page2')"
                          v-model="this.userData.memberList[index].age"
                          @keypress="isNumber($event)">
                        <option value="">Select</option>
                        <option :value="memberAge" v-for="(memberAge,ageIndex) in this.userData.memberList[index].member?this.age[this.userData.memberList[index].member]:this.defaultAge" :key="ageIndex">
                          <span v-if="memberAge=='0.92'">3 to 12 msonths</span>
                          <span v-else>{{memberAge}} Year</span>
                        </option>
                        </select>
                        <label>Age</label>
                      </div>
                      <p class="error-text" v-if="memberError.length>0">{{ memberError[index].age}}</p>
                    </div>
                    
                    <div
                      class="col-xs-10 col-sm-10 col-md-10 col-lg-4 position-relative"
                    >
                      <div class="notetxt">Any pre-existing disease?</div>
                      
                      <div class="switch-hold">
                        <input :checked=this.userData.toolTipList[index]  type="checkbox" class="toggle" :id="'toggle1'+index" @click=changeToggle($event,index) />
                        
                        <label
                          :for="'toggle1' + index"
                
                          @mouseover="this.toolTip[index]  = true"
                          @mouseleave="this.toolTip[index]  = false"
                        >
                          <span class="on">Yes</span>
                          <span class="off">No</span>
                        </label>
              
                        <div v-if="this.userData.toolTipList[index] && this.toolTip[index]"  :id="'tooltip'+index" class="cname-tooltip">
                          {{this.userData.tooltipData[index]}}
                        </div>
                      </div>
                      <div class="check-cnt" v-if="this.currentToggle==index && this.userData.memberList[index].isIllness && this.userData.toolTipList[index]">
                        <h6>
                          <b>{{ this.preExistingDisease[0]["sectionName"] }}</b>
                        </h6>
                        <div class="check-group mb-2">
                          <div
                            class="form-check"
                            v-for="(item2, ind2) in this.userData.memberList[index].disease.existingIllness"
                            :key="ind2"
                          >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              :checked=this.userData.memberList[index].disease.existingIllness[ind2]
                              :id="'chk'+ item2 + index "
                              @click="tooltipData($event,index,ind2, 'illness')"
                              
          
                            />
                            <label class="form-check-label p-0" :for="'chk' + item2 + index"> 
                              {{ ind2 }}
                            </label>
                          </div>
                        </div>
                        <h6>
                          <b>{{ this.preExistingDisease[1]["sectionName"] }}</b>
                        </h6>
                        <div class="check-group mb-2">
                          <div
                            class="form-check w-100"
                            v-for="(item, ind) in this.userData.memberList[index].disease.surgicalProcedure"
                            :key="ind"  
                          >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              :checked=userData.memberList[index].disease.surgicalProcedure[ind]
                              :id="'chksp' + item + index"
                              @click="tooltipData($event,index,ind,'surgical')"
                            />
                            <label class="form-check-label p-0" :for="'chksp'+item + index ">
                              {{ ind }}
                            </label>
                          </div>
                        </div>
                        <button
                          type="button"
                          class="
                            btn btn-sm btn-warning
                            rounded-pill
                            px-3
                            base-med
                            text-white
                          "
                          @click="getDisease(index)"
                        >
                          Apply
                        </button>
                      </div>
                      <button :disabled="!this.userData.toolTipList[index]" class="edit-button"><em  class="bi bi-pencil" @click=editPED(index)></em></button>
                    </div>
                    <div
                      class="col-xs-2 col-sm-2 col-md-2 col-lg-1"
                      v-if="index != 0"
                    >
                      <em
                        class="icon sm icon-bin cursor-pointer"
                        @click="deleteMember(index)"
                      ></em>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center my-3 cursor-pointer" @click="addMember(ind)">
              <em class="cir me-2">+</em>
              <span class="base-med text-primary fs-14">Add More Member</span>
            </div>
          </div>
          <div class="labeltxt mb-3">What is your Gender?</div>
          <div class="input-group input-type-radio mb-1">
            <ul class="customicon mb-3">
              <li v-for="(item, ind) in this.genderList" :key="ind">
              <input
                type="radio"
                :disabled="rmDataFlag"
                :id="'gender' + item"
                :name="gender"
                @change="getFieldValidation('', 'gender')"
                v-model="userData.gender"
                v-bind:value="item"
              />
              <label :for="'gender' + item">
                <em class="icon icon-male" v-if="item == 'Male'"></em>
                <em class="icon icon-female" v-if="item == 'Female'"></em>
                <span>{{ item }}</span>
              </label>
            </li>
            </ul>
            <p class="error-text" v-if="error.gender">
            {{ error.gender }}
          </p>
          </div>
          <!-- <div class="labeltxt mb-3">&nbsp;</div> -->
          <div class="row floating-content">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="floating-label">
              <input
                class="floating-input"
                type="text"
                placeholder=" "
                :disabled="rmDataFlag"
                v-model.trim="userData.zipCode"
                pattern="\d*"
                maxlength="6"
                minlength="6"
                @change="getFieldValidation('', 'zipCode')"
                @keyup="callPincode($event)"
                @keypress="isNumber($event)"
              />
              <label>Enter your Pin Code</label>
              <p class="error-text" v-if="error.zipCode">
                {{ error.zipCode }}
              </p>
            </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="floating-label">
              <input
                class="floating-input"
                type="text"
                placeholder=" "
                v-model="userData.city"
                disabled
                @keypress="lettersSpaceOnly($event)"
              />
              <label>City</label>
            </div>
            <p class="error-text" v-if="error.city">
              {{ error.city }}
            </p>
            </div>
          </div>
          <button type="button" class="btn btn-sm btn-warning rounded-pill px-3 base-med text-white"  v-on:click="nextClick()">Apply</button>
        </div>
      </div>
    </div>
    <!-- End: edit profile section -->

    <!-- Send Quotes to customer Modal -->
    <div
      class="modal fade"
      id="emailModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="emailModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="emailModalTitle">Enter Email Id</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            </button>
          </div>
          <div class="modal-body">
            <div class="benefit-input">
              <input type="text" class="form-control" v-model.trim="quoteSendingEmails" @keyup="checkEmail($event)"/>
              <p class="error-text"> {{ emailErrorMsg }} </p>
            </div>
            
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" :disabled="!isValidQuotesEmail" @click="sendQuotesToCustomer()">Send Quotes</button>
          </div>
        </div>
      </div>
    </div>
    <!-- END : Send Quotes to customer Modal -->
  </div>
</template>

<script>
//import Wizard from "@/components/wizard.vue";
import Header from "@/components/Header.vue";
import loadingPage from "@/components/loading.vue";
import vClickOutside from 'click-outside-vue3';
//import GateCriteria from '../views/GateCriteria.vue';
//import { getLandingPageConfig, getGateCriteriaSettings } from '@/mixins/common';
import {getage } from "@/mixins/common";

import $ from "jquery";
//import bootstrap from 'bootstrap';
export default {
  name: "MultiQuotes",
  components: {
    Header,
    loadingPage
  },
  mixins: [],
  props: {},
  mounted() {
    console.log('store data: ', this.$store.state.configData);
    this.configData = this.$store.state.configData;
    this.age = getage();
    this.viewMoreCounter = this.configData["VIEW_MORE_COUNTER"];
    this.contactNumber = this.configData["DISTRIBUTER"]["contactNumber"];
    this.infoEmail = this.configData["DISTRIBUTER"]["infoEmail"];
    this.distributorLogo = this.configData["DISTRIBUTER"]["distributorLogo"];
    // Setting Config Data
    this.channel_type = JSON.parse(sessionStorage.getItem("channel_type"));
    this.error = [];
    this.landingPageDetails = this.configData["LANDING_PAGE_CONFIG"];
    this.genderList = this.configData["LANDING_PAGE_CONFIG"]["genderList"];
    this.memberOptions = this.configData["LANDING_PAGE_CONFIG"]["memberOptions"];
    this.singleSelectedMember = this.configData["LANDING_PAGE_CONFIG"]["singleSelectMember"];
    //this.consumerId = getConsumer()["consumerId"];
    this.consumerId = this.configData["CONSUMER"]["consumerId"];
    this.apiCallinginterval = parseInt(this.configData["LAZY_LOADING"]['inerval']);
    this.policyCoverAmtList = this.configData["POLICY_COVER_AMOUNT"];
    this.policyBenefitList = this.configData["POLICY_BENEFIT"];
    this.preExistingDisease = this.configData["LANDING_PAGE_CONFIG"]["preExistingDiseaseOptions"];
    this.insurerList = this.configData["INSURER_LIST"];
    this.featuredOrders = this.configData["FEATURED_PLAN_ORDER"];
    var plans = { "Comprehensive Plans": "Family Floater", "Top Up Plans": "Top Up", "All Plans": "All Plans", }
    if (sessionStorage.getItem("rm_data")) {
      this.rmData = JSON.parse(sessionStorage.getItem("rm_data"));
      let sessionData = sessionStorage.getItem("userProfile");
      if (sessionData != null) {
        this.userData = JSON.parse(sessionData)
        this.memberData=this.userData.selectedMember
      }
      else{
          let data = this.preExistingDisease;
          this.userData.memberList[0].disease.existingIllness= JSON.parse(JSON.stringify(this.preExistingDisease[0].options))
          this.userData.memberList[0].disease.surgicalProcedure= JSON.parse(JSON.stringify(this.preExistingDisease[1].options))
        }
        this.rmDataFlag=false
    }
    else{
      this.rmData=""
      this.rmDataFlag=true
      localStorage.removeItem("userProfile")
      sessionStorage.removeItem("userProfile",this.userData)
      
    }

    this.requestJson = {
      "data": {
        "typeOfQuote": "Multi-Quote",
        "quoteCategory": "Sum Insured",
        "alternateFreqRequired": null,
        "outOfBoundConfig": null,
        "finalQuote": "0",
        
        "distributor": {
          "distributorID": this.consumerId,
          "salesChannel": "Online",
          "channelType": this.channel_type,
          "agentID": this.rmData.Userid,
          "varFields": []
        },
        "personalInformation": {
          "individualDetails": [

          ]
        },
        "product": {
          "productType": "health",
          "healthProductType": plans[this.userData.plan],
          "insuranceAndProducts": [
            {
              "insuranceCompanyCode": "",
              "productCode": [
                ""
              ]
            }
          ],
          "planOption": {
            "planId": "",
            "varFields": [
              {
                "fieldName": "",
                "fieldValue": ""
              }
            ]
          },
          "healthCovers": [
            {
              "optionSelected": "",
              "optionValue": "",
              "varFields": [
                {
                  "fieldName": "",
                  "fieldValue": ""
                }
              ]
            }
          ]
        },
        "other": {
          "keyFeatureDocLanguage": "",
          "varFields": [
            {
              "fieldName": "",
              "fieldValue": ""
            }
          ]
        }
      }
    };
    this.noOfAdult = 0;
    this.noOfChild = 0;
    for (let i = 0; i < this.userData.memberList.length; i++) {
      if (this.userData.memberList[i].member == 'Son' || this.userData.memberList[i].member == 'Daughter') {
        this.noOfChild++;
      } else {
        this.noOfAdult++;
      }
      let individualJson = {
        "memberType": "Insured",
        "memberSequenceNumber": i + 1,
        "gender": this.getGender(i),
        "age": parseFloat(this.userData.memberList[i].age),
        "insuredRelWithProposer": this.userData.memberList[i].member,
        "zipCode": this.userData.zipCode,
        // "memberType": "Insured",
        // "memberSequenceNumber": i+1,
        // "firstName": "",
        // "middleName": "",
        // "lastName": "",
        // "gender": "Female",
        "dateOfBirth": "",
        // "age": parseInt(this.userData.memberList[i].age),
        // "occupation": "",
        "maritalStatus": this.getMaritalStatus(i),
        "mobileNumber": parseInt(this.userData.contactDetails.mobileNumber),
        // "annualIncome": 1000000,
        "quoteAmount": this.quoteAmount,
        // "email": "",
        // "tobacco": "",
        // "insuredRelWithProposer": this.userData.memberList[i].member,
        // "zipCode": this.userData.zipCode,
        "state": this.userData.state,
        "city": this.userData.city,
        // "varFields": []
      }
      this.requestJson.data.personalInformation.individualDetails.push(individualJson)
    }
    this.getQuotationApi();
    // let data = this.preExistingDisease;
    // this.userData.memberList[0].disease.existingIllness= JSON.parse(JSON.stringify(this.preExistingDisease[0].options))
    // this.userData.memberList[0].disease.surgicalProcedure= JSON.parse(JSON.stringify(this.preExistingDisease[1].options))
      
    for(let i=0;i<this.userData.memberList.length;i++)
    {
      let jsonError={
          member: "",
          age: "",
        }
      this.memberError.push(jsonError)
    }
    //this.getConfigData();
  },
  data() {
    return {
      // Config Data
      defaultAge:[],
      configData: "",
      distributorLogo: "",
      alertMsg: "",
      currentToggle:null,
      rmDataFlag:false,
      rmData: null,
      viewMoreCounter: 0,
      //userData: {},
      channel_type: "",
      userData: {
        plan: null,
        gender: null,
        zipCode: null,
        city: null,
        state:null,
         
        memberList: [
          {
            member: "",
            age: "",
            isIllness: false,
            disease: {
              existingIllness: {},
              surgicalProcedure: {},
            },
          },
        ],
        income: null,
        contactDetails: {
          firstName: null,
          middleName: null,
          lastName: null,
          mobileNumber: null,
          emailId: null,
         
        },
        tooltipData:[[]],
        toolTipList:[false],
        selectedMember:[],
       
      },
      toolTip:[false],
        ttdata:[[]],
        stdata:"",
      noOfAdult: 0,
      noOfChild: 0,
      policyBenefitList: "",
      insurerList: "",
      policyCoverAmtList: "",
      policyBenefitCodes: [],
      insurerCodes: [],
      // Page Data
      isCoverfor: true,
      isRecommended: false,
      consumerId: "",
      requestId: "",
      requestJson: "",
      responseData: [],
      responseDataOutOfRange: [],
      apiCallinginterval: "",
      disableButtons: false,
      pollapiflag: false,
      polling: null,
      loading: false,
      loading2: false,
      quoteAmount: 0,
      isRecommended: false,
      isBenefits: false,
      isInsurer: false,
      idsToCompare: [],
      noOfResults: 0,
      selectedHealthCovers: [],
      sortSelectedId: 0,
      erMsg: "",
      respondedInsurer: [],
      uiQuoteId: "",
      featuredOrders: "",
      featuredPlanList: [],
      economicPlanList: [],
      error: {
        gender:null,
        zipCode:null,
        city:null,
      },
      singleSelectedMember:[],
      memberData:[''],
      memberError: [],
      isEdit:false,
      quoteSendingEmails: "",
      emailErrorMsg: "",
      isValidQuotesEmail: false,
      contactNumber: "",
      infoEmail: "",
    };
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  methods: {
    getGender(index) {
      if (this.userData.gender == "Male") {
        if (this.userData.memberList[index].member == "Self")
          return "Male"
        else if (this.userData.memberList[index].member == "Spouse")
          return "Female"
        else if (this.userData.memberList[index].member == "Son")
          return "Male"
        else if (this.userData.memberList[index].member == "Daughter")
          return "Female"
        else if (this.userData.memberList[index].member == "Father")
          return "Male"
        else if (this.userData.memberList[index].member == "Mother")
          return "Female"
        else if (this.userData.memberList[index].member == "Father-in-law")
          return "Male"
        else if (this.userData.memberList[index].member == "Mother-in-law")
          return "Female"
      }
      else if (this.userData.gender == "Female") {
        if (this.userData.memberList[index].member == "Self")
          return "Female"
        else if (this.userData.memberList[index].member == "Spouse")
          return "Male"
        else if (this.userData.memberList[index].member == "Son")
          return "Male"
        else if (this.userData.memberList[index].member == "Daughter")
          return "Female"
        else if (this.userData.memberList[index].member == "Father")
          return "Male"
        else if (this.userData.memberList[index].member == "Mother")
          return "Female"
        else if (this.userData.memberList[index].member == "Father-in-law")
          return "Male"
        else if (this.userData.memberList[index].member == "Mother-in-law")
          return "Female"
      }
    },
    getMaritalStatus(index) {
      console.log("this.userData", this.userData, index)
      if (this.userData.memberList[index].member == "Son" || this.userData.memberList[index].member == "Daughter" || this.userData.memberList.length == 1)
        return "Single"
      else
        return "Married"
    },
    getDOB(age) {
      let newDate = new Date()
      let currentYear = newDate.getFullYear();
      let formatedDate = newDate.toISOString().substring(0, 10)
      let dobYear = currentYear - age
      let newDOB = formatedDate.replace(currentYear, dobYear)
      return newDOB
    },
    onClickOutside(event) {
      console.log('Clicked outside. Event: ', event);
      this.isCoverfor = false;
      this.isRecommended = false;
      this.isBenefits = false;
      this.isInsurer = false;
    
    },
    pollData() {
      //console.log('poll data called');
      //this.disableButtons = true;
      this.polling = setInterval(() => {
        if (this.pollapiflag == false) {
          this.getPolicy();
        } else {
          this.loading2 = false;

          if (this.responseData.length == 0) {
            this.erMsg = 'No products found as per your selected filter. Please change the filters.';
          }

          this.beforeDestroy();
        }
      }, this.apiCallinginterval)
    },
    beforeDestroy() {
      //console.log("before destroy called");
      //this.disableButtons = false;
      clearInterval(this.polling)
    },
    getQuotationApi() {
      this.loading = true;
      this.saveQuote();
      // Resetting Values
      this.pollapiflag = false;
      this.responseData = [];
      this.responseDataOutOfRange = [];
      this.respondedInsurer = [];
      this.featuredPlanList = [];
      this.economicPlanList = [];

      let reqData = this.requestJson;
      // Save request json
      sessionStorage.setItem("request_json", JSON.stringify(reqData));
      let headers = {};

      this.backendApi("getQuotation", reqData, headers)
        .then((response) => {
          this.loading = false;
          this.requestId = response.data.reqId;
          this.loading2 = true;
          console.log('response: ', response);
          if (response.status == "error") {

            let msg = [response.data.detail];
            this.$router.push({ path: '/networkalert', query: { backUrl: 'plandetails-page', msg: msg } });

          } else if (response.data.errors.length == 0) {
            this.getPolicy();
            this.pollData();
          } else {
            this.loading2 = false;
            if (this.responseData.length == 0) {
              this.erMsg = 'No products found as per your selected filter. Please change the filters.';
              this.beforeDestroy();
            }
          }

          if (this.responseData.length > 0) {
            this.loading2 = false;
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
    getPolicy() {

      let headers = {};
      let reqData = [this.requestId];
      let self = this;
      this.loading2 = true;
      //console.log('get policy called');
      this.backendApi("getPolicies", reqData, headers, "get")
        .then((response) => {
          this.loading = false;
          //console.log('poll response: ', response);

          if (self.responseData.length > 0) {
            this.loading2 = false;
          }

          if (response == 'error') {
            //self.apiError = true;
          } else if (response && response.data) {

            //console.log('response data: ', response.data);
            if (response.data.data.request) {
              for (let i = 0; i < this.requestJson.data.personalInformation.individualDetails.length; i++) {
                this.requestJson.data.personalInformation.individualDetails[i].dateOfBirth = response.data.data.request.personalInformation.individualDetails[i].dateOfBirth
              }
              sessionStorage.setItem("request_json", JSON.stringify(this.requestJson));
            }

            if (response.data?.data?.quote?.length > 0) {

              response.data.data.quote.forEach((element, index) => {
                if (element.supportingData.outOfRangeDetails.length > 0) {
                  self.responseDataOutOfRange.push(element);
                } else {
                  var pcode = element.insuranceAndProducts.insuranceCompanyCode;
                  let itemIndex = self.responseData.findIndex(item => item.product_code == pcode);
                  if (itemIndex > -1) {
                    self.responseData[itemIndex]['data'].push(element);
                  } else {
                    let temp = {
                      "product_code": pcode,
                      "data": [element]
                    };
                    self.responseData.push(temp);
                    self.respondedInsurer.push(pcode);
                  }

                  // Featured Plan Section
                  let planId = element.productDetails.planOption.planId;
                  let itemIndex2 = self.featuredOrders.findIndex(item => item.plan_id == planId);
                  if (itemIndex2 > -1) {
                    let planOrd = self.featuredOrders[itemIndex2];
                    let tmpElement = element;
                    tmpElement['order'] = planOrd['order'];
                    this.featuredPlanList.push(tmpElement);
                  }

                  this.economicPlanList.push(element);

                  // END : Featured Plan Section

                }

                

              })

              // Sorting Featured Plan
              this.featuredPlanList.sort(
                (a, b) =>
                  Number(a.order) -
                  Number(b.order)
              );

              //console.log('this.featuredPlanList: ', this.featuredPlanList);

              // Sorting Economic Plan
              this.economicPlanList.sort(
                    (a, b) =>
                      Number(a.productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue) -
                      Number(b.productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue)
                  );

              //  console.log("after savequote")
              let qResData = {
                "ui_quote_id": this.uiQuoteId,
                "quote_response_id": response.data.reqId,
                "annual_income": this.requestJson.data.personalInformation.individualDetails[0].annualIncome,
                "quote_response_data": JSON.stringify(response.data.data.quote)
              };
              this.saveQuoteResponse(qResData);
            }

            //console.log('self.responseData: ', self.responseData);

            // Stop Polling
            if (response.data.data.isPollComplete != undefined) {
              if (response.data.data.isPollComplete == true) {
                this.pollapiflag = true;
                this.sortByLowestPremium(1);
                // for(let i=0;i<this.requestJson.data.personalInformation.individualDetails.length;i++)
                // {
                //    this.requestJson.data.personalInformation.individualDetails[i].dateOfBirth=response.data.data.quote[0].individualDetails[i].dateOfBirth
                // }
                //  sessionStorage.setItem("request_json", JSON.stringify(this.requestJson));
              }
            }
            console.log("PollDataFlag: " + this.pollapiflag);
            // Counting Results
            // this.noOfResults = this.responseData.length;
            this.countQuotesAsPerFilter();
          }
        })
        .catch((error) => {
          console.log('error msg block : get poll', error);
          self.loading = false;
          // self.apiError = true;
          //   let msg=['We are facing some issue from while fetching quotation API']

          //   this.$router.push({ path: '/networkalert', query: {backUrl:'policy-quote', msg: msg }});
        });
    },

    // Common Function
    convertInLakh(amt) {
      if (amt < 10000000) {
        return amt / 100000 + " Lac";
      } else {
        return amt / 10000000 + " Cr.";
      }
    },
    policyCoverChangeAmt(event) {
      this.quoteAmount = parseInt(event.target.value);
      for (let i = 0; i < this.requestJson.data.personalInformation.individualDetails.length; i++) {
        this.requestJson.data.personalInformation.individualDetails[i].quoteAmount = this.quoteAmount;
      }
      this.getQuotationApi();
    },
    getHospitalsNumbers(text) {
      const myArray = text.split("+");
      return myArray[0] + '+';
    },
    getCsValue(value) {
      var obj;
      if (value != null && value != 'None' && value != undefined) {
        eval('obj=' + value);
        var keys = Object.keys(obj);
        let len = keys.length;
        return obj[keys[len - 1]];
      } else {
        return "";
      }
    },
    getCompare(event) {
      if (event.target.checked === true) {
        console.log("if block eecuted", this.idsToCompare);

        var len = this.idsToCompare.length;
        if (len < 3) {
          this.idsToCompare.push(event.target.value);
        } else {
          event.target.checked = false;
          this.alertMsg = 'Only 3 plans can be chosen to compare at one time.';
        }
      } else {
        console.log("else block eecuted", this.idsToCompare);
        var index2 = this.idsToCompare.indexOf(event.target.value);
        if (index2 !== -1) {
          this.errorListSelect = ""
          this.idsToCompare.splice(index2, 1);
        }
        console.log("else block eecuted", this.idsToCompare);
      }

      this.selectedForFilter = [];
      this.idsToCompare.forEach((element, index) => {
        const myArray = element.split("_");
        let temp;
        if (myArray[1] == 'P') {
          temp = this.responseData[myArray[0]]['data'][myArray[2]];
        } else {
          temp = this.responseDataOutOfRange[myArray[0]]['data'][myArray[2]];
        }
        this.selectedForFilter.push(temp);
      })
      sessionStorage.setItem('selectedForFilter', JSON.stringify(this.selectedForFilter));
      sessionStorage.setItem('idsToCompare', JSON.stringify(this.idsToCompare));
      console.log('selected for filter', this.selectedForFilter);
    },
    goToCompare() {
      if (this.idsToCompare.length > 1) {
        this.$router.push('/compare-plan');
      } else {
        this.alertMsg = 'Please select at least 2 policies for compare.';
      }
    },
    scrollToTop() {
      console.log('scrollToTop called');
      $('html, body').animate({ scrollTop: 0 }, 'fast');
    },
    removeFromFilter(ind) {
      console.log('removeFromFilter called: ', ind);
      console.log('this.idsToCompare called: ', this.idsToCompare);
      let val = this.idsToCompare[ind];
      const myArray = val.split("_");
      if (myArray[1] == 'P') {
        $('#plan_p' + myArray[0]).prop('checked', false); // Unchecks it
      } else {
        $('#plan_o' + myArray[0]).prop('checked', false); // Unchecks it
      }
      var index2 = this.idsToCompare.indexOf(val);
      if (index2 !== -1) {
        this.idsToCompare.splice(index2, 1);
      }
      this.selectedForFilter.splice(ind, 1);
      sessionStorage.setItem('selectedForFilter', JSON.stringify(this.selectedForFilter));
      sessionStorage.setItem('idsToCompare', JSON.stringify(this.idsToCompare));
    },
    getPerMonthPremium(value) {
      return Math.ceil(value / 12);
    },
    getPolicyBenefits(event) {
      if (event.target.checked) {
        console.log(event.target.value);
        this.policyBenefitCodes.push(event.target.value);
      } else {
        //console.log(event.target.value);
        var index = this.policyBenefitCodes.indexOf(event.target.value);
        if (index !== -1) {
          this.policyBenefitCodes.splice(index, 1);
        }
      }
      console.log('Policy Benefit selected: ', this.policyBenefitCodes);

    },
    getBenefitsFilter(optionCode) {
      console.log('getBenefitsFilter called: ', this.policyBenefitCodes);
      this.countQuotesAsPerFilter();
      return this.getBenefitCompare(optionCode);
    },
    getBenefitCompare(optionCode) {
      console.log('getBenefitCompare called: ', optionCode);
      var retDt = true;
      if (this.policyBenefitCodes.length > 0) {
        for(let key in this.policyBenefitCodes) {
          let tenpData = this.policyBenefitCodes[key];
          let itemIndex = optionCode.findIndex(item => item.optionSelected == tenpData);
          if(itemIndex <= -1) {
            retDt = false;
            console.log('value mismatched');
            break;
          }
        }
        console.log('Value Matched');
        return retDt;
      } else {
        return true;
      }
    },
    applyPolicyBenefit() {
      this.selectedHealthCovers = [];
      this.policyBenefitCodes.forEach((element, index) => {
        let tempData = {
          "optionSelected": element,
          "optionValue": ""
        };
        this.selectedHealthCovers.push(tempData);
      });

      this.requestJson.data.product.healthCovers = this.selectedHealthCovers;
      this.getQuotationApi();
    },
    countMorePlans(val) {
      //console.log('inside count more plans: ', val);
      let len = (val.length - 1);
      let flen;
      if (len > 1) {
        flen = len + ' More Plans';
      } else {
        flen = len + ' More Plan';
      }
      return flen;
    },
    viewPlanDetails(selectedData) {
      this.beforeDestroy();
      // Save selected plan
      sessionStorage.setItem("selected_plan_data", JSON.stringify(selectedData));
      this.$router.push('/plan-details');
    },
    selectPlan(selectedData) {
      this.beforeDestroy();
      // Save selected plan
      sessionStorage.setItem("selected_plan_data", JSON.stringify(selectedData));
      let gateCriteriaCheck = this.configData['GATE_CRITERIA_SETTINGS'][selectedData.insuranceAndProducts.insuranceCompanyCode];
      if(gateCriteriaCheck == 'YES') {
        this.$router.push('/gate-criteria');
      } else {
        this.$router.push('/addon-rider');
      }
      
    },
    sortByLowestPremium(num) {
      this.sortSelectedId = num;

      this.responseData.forEach((element, index) => {
        this.responseData[index]['data'].sort(
          (a, b) =>
            Number(a.productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue) -
            Number(b.productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue)
        );
      });

      this.responseData.sort(
        (a, b) =>
          Number(a.data[0].productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue) -
          Number(b.data[0].productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue)
      );
      //console.log("ascending", this.responseData);
    },
    sortByHighestPremium(num) {
      this.sortSelectedId = num;
      this.responseData.forEach((element, index) => {
        this.responseData[index]['data'].sort(
          (a, b) =>
            Number(b.productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue) -
            Number(a.productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue)
        );
      });
      this.responseData.sort(
        (a, b) =>
          Number(b.data[0].productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue) -
          Number(a.data[0].productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue)
      );
      //console.log("descending", this.responseData);
    },
    getInsurer(event) {

      if (event.target.checked) {
        this.insurerCodes.push(event.target.value);
      } else {
        var index = this.insurerCodes.indexOf(event.target.value);
        if (index !== -1) {
          this.insurerCodes.splice(index, 1);
        }
      }
      console.log('Insurer selected: ', this.insurerCodes);
      this.countQuotesAsPerFilter();
    },
    getInsurerFilter(code) {
      if (this.insurerCodes.length > 0) {
        let index = this.insurerCodes.indexOf(code);
        if (index > -1) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    countQuotesAsPerFilter() {
      this.erMsg = "";
      let counter = 0;
      console.log('this.responseData: ', this.responseData);
      if(this.policyBenefitCodes.length > 0) {
        console.log('if insurer codes: ');
        this.responseData.forEach((element, index) => {
          element['data'].forEach((element2, index2) => {
            console.log('get benefit compare : ', element2);
            if(this.getBenefitCompare(element2.productDetails.healthCovers)) {
              counter += 1;
            }
          })
          
        })
      } else if (this.insurerCodes.length > 0) {
        console.log('if block ppf2: ');
        this.responseData.forEach((element, index) => {
          let insurerIndex = this.insurerCodes.indexOf(element.product_code);
          if (insurerIndex > -1) {
            counter += parseInt(element.data.length);
          }
        })
      } else {
        //console.log('else block get ppf2');
        this.responseData.forEach((element, index) => {
          counter += parseInt(element.data.length);
        })
      }
      this.noOfResults = counter;
      if (this.noOfResults == 0 && this.pollapiflag != true) {
        this.erMsg = '';
      } else if (this.noOfResults == 0) {
        this.erMsg = 'No products found as per your selected filter. Please change the filters.';
      } else {
        this.erMsg = '';
      }
    },
    checkResIns(insurerCode) {
      if (this.respondedInsurer.length > 0) {
        let index = this.respondedInsurer.indexOf(insurerCode);
        if (index == -1) {
          return 'd-none';
        }
      } else {
        return '';
      }
    },
    activeCarousel(index) {
      if(index == 0) {
        return 'active';
      }
    },
    scrollMeTo(refName) {
      console.log('scroll me to called: ', refName);
      var ele = document.getElementById(refName).offsetTop;
      // ele.scrollIntoView({
      //   top: elementPosition - 10, //add your necessary value
      //   behavior: "smooth"  //Smooth transition to roll
      // });
      window.scrollTo({
        top: ele - 140, 
        behavior: "smooth"
      });
    },
    saveQuote() {
      //console.log('save quote called');
      var headers = {
        Authorization: "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
        "Content-Type": "application/json",
      };

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
        "quote_request_json": JSON.stringify(this.requestJson)
      };
      //console.log('qData: ', qData);
      this.backendApi("saveQuote", qData, headers)
        .then((response) => {
          //console.log('save quote response: ', response);
          //console.log("response status code",response.status)
          if (response == 'error') {
            self.apiError = true;
          }
          else if (response.status == "error") {
            let msg = ['We are facing some issue while saving quote data']

            this.$router.push({ path: '/networkalert', query: { backUrl: 'policy-quote', msg: msg } });
          }
          else if (response && response.data) {


            this.uiQuoteId = response.data.data.ui_quote_id;
            //console.log("savequote")
            //this.getWhatsapp();
            //this.getQuotationApi()

            //console.log('ui quote id: ', this.uiQuoteId)
          }
        })
        .catch((error) => {
          console.log('error msg block dp', error);
          let msg = ['We are facing some issue from backend while saving quote data ']
          this.$router.push({ path: '/networkalert', query: { backUrl: 'policy-quote', msg: msg } });
        });
    },
    saveQuoteResponse(quoteResData) {
      var headers = {
        Authorization: "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
        "Content-Type": "application/json",
      };
      this.backendApi("saveQuoteResponse", quoteResData, headers)
        .then((response) => {
          //console.log('save quote response: ', response);
          if (response == 'error') {
            self.apiError = true;
            // let msg=['We are facing some issue while saving quote response data']

            // this.$router.push({ path: '/alert', query: {backUrl:'policy-quote', msg: msg }});
          }
          //  else if(response.status=="error")
          // {
          //   let msg=['We are facing some issue while saving quote response data']

          //   this.$router.push({ path: '/alert', query: {backUrl:'policy-quote', msg: msg }});
          // }
          else if (response && response.data) {
            //this.uiQuoteId = response.data.data.ui_quote_id;
            //console.log('ui quote id: ', this.uiQuoteId)
          }
        })
        .catch((error) => {
          console.log('error msg block dp', error);
          // let msg=['We are facing some issue from backend while saving quote response data ']

          // this.$router.push({ path: '/alert', query: {backUrl:'policy-quote', msg: msg }});
        });
    },
    currency(amt) {
      let tmpAmt = parseFloat(amt).toFixed(2);
      return new Intl.NumberFormat().format(tmpAmt);
    },
    getAdultAndChildText() {

    },
    getFieldValidation(index='',key,page)
    {
      
          if(key=="gender")
          {
            if(!this.userData.gender)
            this.error["gender"] = "Select Your Gender";
            else
            this.error["gender"] = "";
          }
         
          else if(key=="zipCode")
          {
            if(!this.userData.zipCode)
            this.error["zipCode"] = "Please Enter Pin Code";
            else if(!this.error["zipCode"])
            this.error["zipCode"] = "";
            
          }
      
            if(key=="member")
            {
              if(!this.userData.memberList[index].member)
              this.memberError[index].member = "Please select member";
              else
              this.memberError[index].member = "";
            }
            else if(key=="age")
            {
              if(!this.userData.memberList[index].age)
              this.memberError[index].age = "Please enter member's age";
              else
              this.memberError[index].age = "";
            }
          
       
 
       
    },
    callPincode(evt) {
      let val = evt.target.value;
      if(val.length < 6){
         this.error["zipCode"]="Please enter valid Pin Code"
      }
       else if (val.length == 6) {
        var headers = {
          Authorization: "Basic " + window.btoa(process.env.VUE_APP_USERNPASS),
          "Content-Type": "application/json",
        };
        let reqData = [val];
        this.backendApi("getPincodeInfo", reqData, headers, "get")
          .then((response) => {
            if (response == "error") {
              console.log("pincode api error: block");
            } else if (response && response.data && Object.keys(response.data.data).length!=0) {
              this.error["zipCode"]=""
              let v = response.data.data[0];
              this.userData.city = response.data.data[0].city;
              this.userData.state= response.data.data[0].state;
            }
            else if(response && response.data && Object.keys(response.data.data).length==0)
            {
              this.error["zipCode"]="Please enter valid Pin Code"
              this.userData.city=""
            }
          })
          .catch((error) => {
            console.log("error msg block getting pincode info", error);
          });
      } else {
      }
    },
    isNumber: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      console.log(charCode);
      //if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode == 46) {
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    lettersSpaceOnly(evt) {
      evt = evt ? evt : event;
      var charCode = evt.charCode
        ? evt.charCode
        : evt.keyCode
        ? evt.keyCode
        : evt.which
        ? evt.which
        : 0;
      if (
        charCode > 32 &&
        (charCode < 65 || charCode > 90) &&
        (charCode < 97 || charCode > 122)
      ) {
        evt.preventDefault();
      }
      return true;
    },
    checkSelectedMember(index,item)
     {
          if(this.memberData.indexOf(item)!=-1 && this.singleSelectedMember.indexOf(item)!=-1 )
          return true;
          else
          return false
     },
     getMember(index)
     {      
      if(this.userData.memberList[index].member.length!=0)
        this.memberData.splice(index,1,this.userData.memberList[index].member)
        this.userData.selectedMember=this.memberData
     },
     changeToggle(event,index)
    {
       this.userData.toolTipList[index]=event.target.checked
       this.userData.memberList[index].isIllness=event.target.checked
      if(event.target.checked==false) {
        this.userData.tooltipData[index]=[]
        this.userData.memberList[index].disease.existingIllness=JSON.parse(JSON.stringify(this.preExistingDisease[0].options))
        this.userData.memberList[index].disease.surgicalProcedure=JSON.parse(JSON.stringify(this.preExistingDisease[1].options))
      }
 
      if(this.currentToggle && this.currentToggle!=index)
      {
      this.userData.memberList[this.currentToggle].isIllness=false
      if(this.userData.tooltipData[this.currentToggle].length==0)
         {
            this.userData.toolTipList[this.currentToggle]=false
         }
      }
        this.currentToggle=index
    },
    editPED(index)
    {
        if(this.userData.toolTipList[index]==true)
       {
          this.userData.memberList[index].isIllness=!this.userData.memberList[index].isIllness
       }

       if(this.currentToggle && this.currentToggle!=index)
      {
      this.userData.memberList[this.currentToggle].isIllness=false
      if(this.userData.tooltipData[this.currentToggle].length==0)
         {
            this.userData.toolTipList[this.currentToggle]=false
         }
      }
        this.currentToggle=index

       
    },
    deleteMember(index) {
      this.userData.memberList.splice(index, 1);
      this.userData.toolTipList.splice(index,1)
      this.toolTip.splice(index,1)
      this.userData.tooltipData.splice(index,1)
      this.memberError.splice(index,1)
       this.memberData.splice(index,1)
    },
    addMember(index) {
   
      // this.memberError=[]
      let newMember = {
        member: "",
        age: "",
        isIllness: false,
        disease: {
          existingIllness: {},
          surgicalProcedure: {},
        },
      };

      let errorJson = {
          member: "",
          age: "",
        };

      this.memberError.push(JSON.parse(JSON.stringify(errorJson)));
    
      newMember.disease.existingIllness= JSON.parse(JSON.stringify(this.preExistingDisease[0].options))
      newMember.disease.surgicalProcedure= JSON.parse(JSON.stringify(this.preExistingDisease[1].options))
      this.userData.memberList.push(newMember);
      this.userData.tooltipData.push([])
      this.userData.toolTipList.push(false)
      this.toolTip.push(false)
      this.memberData.push('')
    
    },
    tooltipData(event,index,ind2,diseaseType){
      if (event.currentTarget.checked ==true) {
      if(diseaseType=="illness")
      this.userData.memberList[index].disease.existingIllness[ind2]=true
      else
      this.userData.memberList[index].disease.surgicalProcedure[ind2]=true

        if(this.userData.tooltipData.length>index)
        {
        for(let i=0;i<this.userData.tooltipData.length;i++)
        {
          if(i==index)
          this.userData.tooltipData[i].push(ind2)
        }
        }
        else{
          let ttjson=[]
        ttjson.push(ind2)
        this.userData.tooltipData.push(ttjson)
        }
        }
      if(event.currentTarget.checked==false) {
        let ind = this.ttdata.indexOf(ind2);
        for(let i=0;i<this.userData.tooltipData.length;i++)
        {
          if(i==index)
          {
            for(let j=0;j<this.userData.tooltipData[i].length;j++)
            {
              if(this.userData.tooltipData[i][j]==ind2)
              {
                this.userData.tooltipData[i].splice(j,1);
              }
            }
          
          }
        }
        
        if(diseaseType=="illness")
      this.userData.memberList[index].disease.existingIllness[ind2]=false
      else
      this.userData.memberList[index].disease.surgicalProcedure[ind2]=false
      }
      
    },
    getDisease(index)
    {
         this.userData.memberList[index].isIllness = false
         if(this.userData.tooltipData[index].length==0)
         {
            this.userData.toolTipList[index]=false
         }
        
    },
    getConfigData() {
      
       
      var headers = {
        Authorization: "Basic " + window.btoa(process.env.VUE_APP_USERNPASS),
        "Content-Type": "application/json",
      };

      let reqData = ["BCIBL"];
        
        this.backendApi("getConfigData", reqData, headers, "get")
          .then((response) => {
            if (response == "error") {
              console.log("get config data error: block");
            } else if (response && response.data) {
              console.log("get config data success: response ", response.data);
            }
          })
          .catch((error) => {
            console.log("error msg block get config data", error);
          });
      
    },
    getValidate()
    {
     
        for(let key in this.userData)
        {
          if(key=="gender")
          {
            if(!this.userData.gender)
            this.error["gender"] = "Select Your Gender";
            else
            this.error["gender"] = "";
          }
         
          else if(key=="zipCode")
          {
            if(!this.userData.zipCode)
            this.error["zipCode"] = "Please Enter Pin Code";
            else if(!this.error["zipCode"])
            this.error["zipCode"] = "";
            
          }
        
      
        var MemberData=JSON.stringify(this.userData.memberList)
        var final_list=JSON.parse(MemberData)
        var self_data={}
        final_list.forEach((element, index, array) => {            
            if (element.member === 'Self' ){
                var obje={"Self":element.age}
                self_data['Self']=element.age
            }
            if (element.member === 'Spouse')
            {
                self_data['Spouse']=element.age
            }
             if (element.member === 'Father')
            {
                self_data['Father']=element.age
            }
             if(element.member==='Mother')
             {
                self_data['Mother']=element.age
             }  
            } );

        for(let i=0;i<this.userData.memberList.length;i++)
        {
          for(let key in this.userData.memberList[i])
          {
            if(key=="member")
            {
              if(!this.userData.memberList[i].member)
              this.memberError[i].member = "Please Select Member";
              else
              this.memberError[i].member = "";
            }
            else if(key=="age")
            {
              if(!this.userData.memberList[i].age)
              this.memberError[i].age = "Please enter member's age";
              else
              this.memberError[i].age = "";
              
                   if(this.userData.memberList[i].member == 'Son' || this.userData.memberList[i].member == 'Daughter'  && self_data.hasOwnProperty('Self'))
              {
                  if (self_data['Self'] - this.userData.memberList[i].age < 18 || self_data['Spouse'] - this.userData.memberList[i].age < 18  )
                {
                  this.memberError[i].age = "Age Difference of "+this.userData.memberList[i].member+" should be greater than 18";
                }
             }

             if(this.userData.memberList[i].member == 'Son' || this.userData.memberList[i].member == 'Daughter' && self_data.hasOwnProperty('Spouse'))
              {
                  if (self_data['Spouse'] - this.userData.memberList[i].age < 18  )
                {
                  this.memberError[i].age = "Age Difference of "+this.userData.memberList[i].member+" should be greater than 18";
                }
             }

              if(this.userData.memberList[i].member == 'Son' || this.userData.memberList[i].member == 'Daughter')
              {
                 
                if ( self_data['Father'] - this.userData.memberList[i].age  < 36 || self_data['Mother'] - this.userData.memberList[i].age  < 36){
                      this.memberError[i].age = "Age Difference of "+this.userData.memberList[i].member+" with Father and  Mother should be greater than 36";
                      }
                }
              if(this.userData.memberList[i].member == 'Father' || this.userData.memberList[i].member == 'Mother' && self_data.hasOwnProperty('Self'))
              {
                  if ( this.userData.memberList[i].age - self_data['Self'] < 18)
                {

                      this.memberError[i].age = "Age Difference of "+this.userData.memberList[i].member+" and Self should be greater than 18";                }
              }

              if(this.userData.memberList[i].member == 'Self' && this.userData.memberList[i].age < 18 )
              {
                this.memberError[i].age = "Please select age greater than 18";
              }
              else if(this.userData.memberList[i].member == 'Spouse' && this.userData.memberList[i].age < 18 )
              {
                this.memberError[i].age = "Please select Spouse age greater than 18";
              }

            }
          }
        }

        for(let i=0;i<this.memberError.length;i++)
        {
          for(let key in this.memberError[i])
          {
            if(this.memberError[i][key])
            return false
          }
        }
        return true
      
       }
    },
    openEmailModal() {
      console.log('openEmailModal called');
      // var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
      //   keyboard: false
      // });
      // var modalToggle = document.getElementById('emailModal') // relatedTarget
      // myModal.hide(modalToggle);
      
      //$("#emailModal").modal('show');
    },
    checkEmail(event) {
      console.log('check email called: ', event.target.value);
      let emailStr = event.target.value;
      const EMAIL = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
      let checkEmail = emailStr.match(EMAIL);
      if(checkEmail==null) {
        this.emailErrorMsg = "Please Enter Valid Email";
        this.isValidQuotesEmail = false;
      } else {
        this.emailErrorMsg = "";
        this.isValidQuotesEmail = true;
      }
    },
    sendQuotesToCustomer() {
      console.log('sendQuotesToCustomer called');
      var quotesList = "";
      this.responseData.forEach(
        (element, index) => {
          element.data.forEach(
            (element2, index2) => {
              let tmp = '<tr>'
                +'<td>'+ element2.insuranceAndProducts.insuranceCompanyCode +'</td>'
                +'<td>'+ element2.insuranceAndProducts.productName +'</td>'
                +'<td>'+ element2.productDetails.planOption.planName +'</td>'
                +'<td>&#8377;'+ element2.individualDetails[0].sumInsured +'</td>'
                +'<td>&#8377;'+ element2.productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue +'</td>'
              +'</tr>';

              quotesList += tmp;
            }
          );
        }
      );

      console.log('quotesList: ', quotesList);

      var text = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'
          +'<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">'
            +'<head>'
              +'<!--[if gte mso 9]>'
              +'<xml>'
              +'<o:OfficeDocumentSettings>'
                +'<o:AllowPNG/>'
                +'<o:PixelsPerInch>96</o:PixelsPerInch>'
              +'</o:OfficeDocumentSettings>'
              +'</xml>'
              +'<![endif]--><!--[if (mso)|(mso 16)]>'
              +'<style type="text/css">a{text-decoration:none;color:#0249A3}</style>'
              +'<![endif]-->'
              +'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'
              +'<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
              +'<title>Email</title>'
              +'<style type="text/css">'
              +'@media screen and (min-width: 750px){'
              +'body{font-family:Arial,Helvetica,sans-serif!important;font-weight:500}'
              +'body,table,thead,tbody,tr,td,img'
              +'{padding:0;margin:0;border:none;border-spacing:0px;border-collapse:collapse;vertical-align:top}'
              +'.wrapper{padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:10px}'
              +'h1,h2,h3,h4,h5,h6,p{margin:0;padding:0;padding-bottom:20px;line-height:1.6}'
              +'img{width:100%;display:block}'
              +'.main-table{width:710px;margin:0 auto;margin-top:5px}'
              +'.main-table tr td{font-size:14px!important;line-height:18px!important}'
              +'.main-table-td{padding:10px!important}'
              +'.main-table tr td.order-detl-mob{font-size:21px!important}'
              +'.brand-logo img{width:auto!important}'
              +'.main-table tr.totl-cost-td td{font-size:18px!important;line-height:18px!important}'
              +'table{border-spacing:0}'
              +'.order-details-table td{font-size: 9px!important;}'
              +'}'
              +'</style>'
            +'</head>'
            +'<body cellspacing="0" cellpadding="0" border="0" class="body" style="padding-top:5px !important;padding-bottom:5px !important; margin:0px !important; display:block !important; min-width:100% !important; width:100% !important; -webkit-text-size-adjust:none; background-color: #eceaea; " bgcolor="#eceaea">'
              +'<!--[if !mso]><!-->'
              +'<table align="center" style="background-color: #eceaea;margin-top: 5px;width: 100%;">'
              +'<tr>'
                +'<td>'
                  +'<table style="" class="main-table" align="center">'
                    +'<tr>'
                    +'<td style="background: #fff;" class="main-table-td">'
                      +'<table width="100%" style="background: #fff;border-collapse: collapse;" align="center" >'
                        +'<tr>'
                          +'<td>'
                          +'<table width="100%" style="border-collapse: collapse;">'
                            +'<tr>'
                              +'<td width="20%" class="mobile-td1" style="vertical-align: middle;">'
                                +'<table border="0">'
                                +'<tr>'
                                  +'<td class="brand-logo"> <img src="' + this.distributorLogo + '" alt="" style="width: 100%;"></td>'
                                +'</tr>'
                                +'</table>'
                              +'</td>'
                            +'</tr>'
                            +'<tr>'
                              +'<td height="10px" colspan="2"></td>'
                            +'</tr>'
                            +'<tr>'
                              +'<td height="10px" colspan="2"></td>'
                            +'</tr>'
                          +'</table>'
                          +'</td>'
                        +'</tr>'
                        +'<tr>'
                          +'<td>'
                          +'<table style="font-size: 9px;border-collapse: collapse;">'
                            +'<tr>'
                              +'<td>Dear '+this.userData['contactDetails']['firstName']+',</td>'
                            +'</tr>'
                            +'<tr>'
                              +'<td height="10px"></td>'
                            +'</tr>'
                            +'<tr>'
                              +'<td>Thank you for showing interest in our health insurance product offerings. You searched for '+ this.userData.memberList.length +' members. Based on the member profiles and Sum Insured, below are the list of plans available for you:</td>'
                            +'</tr>'
                          +'</table>'
                          +'</td>'
                        +'</tr>'
                        +'<tr>'
                          +'<td height="15px"></td>'
                        +'</tr>'
                        +'<tr>'
                          +'<td>'
                          +'<table width="100%" style="font-size: 9px;border-collapse: collapse;">'
                            +'<thead>'
                              +'<tr>'
                                +'<td height="20px"></td>'
                                +'<td height="20px"></td>'
                                +'<td height="20px"></td>'
                                +'<td height="20px"></td>'
                                +'<td height="20px"></td>'
                              +'</tr>'
                              +'<tr>'
                                +'<td style="color: #0000ff;">Insurance Company</td>'
                                +'<td style="color: #0000ff;">Product Name</td>'
                                +'<td style="color: #0000ff;">Plan Name</td>'
                                +'<td style="color: #0000ff;">Sum Insured</td>'
                                +'<td style="color: #0000ff;">Premium</td>'
                              +'</tr>'
                              + quotesList
                            +'</thead>'
                          +'</table>'
                          +'</td>'
                        +'</tr>'
                        +'<tr>'
                        +'<td>'
                          +'<table width="100%" style="border-collapse: collapse;">'
                            +'<tr>'
                              +'<td height="40px"></td>'
                            +'</tr>'
                            +'<tr>'
                              +'<td style="font-size: 9px;">For any assistance, please feel free to contact us at ' + this.contactNumber +' or email us at <a href="javascript:void(0)">' + this.infoEmail +'</a></td>'
                            +'</tr>'
                            +'<tr>'
                              +'<td height="20px"></td>'
                            +'</tr>'
                            +'<tr>'
                              +'<td style="font-size: 9px;border-collapse: collapse;">*Insurance is the subject matter of solicitation. IRDAI Insurance Broking License No. 1. License Code No. IRDA/DB 1/22 Valid till 01/01/2023</td>'
                            +'</tr>'
                          +'</table>'
                        +'</td>'
                        +'</tr>'
                      +'</table>'
                    +'</td>'
                    +'</tr>'
                  +'</table>'
                +'</td>'
              +'</tr>'
              +'</table>'
              +'<!--<![endif]--><!--[if gte mso 14]>'
              +'<table style="" class="main-table" align="center">'
              +'<tr>'
                +'<td style="background: #fff;" class="main-table-td">'
                  +'<table width="100%" style="background: #fff;border-collapse: collapse;" align="center" >'
                    +'<tr>'
                    +'<td >'
                      +'<table width="100%" style="border-collapse: collapse;">'
                        +'<tr>'
                          +'<td width="20%" class="mobile-td1" style="vertical-align: middle;">'
                          +'<table border="0">'
                            +'<tr>'                              
                              +'<td class="brand-logo"> <img src="' + this.distributorLogo + '" alt="" style="width: 100%;"></td>'
                            +'</tr>'
                          +'</table>'
                          +'</td>'
                        +'</tr>'
                        +'<tr>'
                          +'<td height="10px" colspan="2"></td>'
                        +'</tr>'
                        +'<tr>'
                          +'<td height="10px" colspan="2"></td>'
                        +'</tr>'
                      +'</table>'
                    +'</td>'
                    +'</tr>'
                    +'<tr>'
                    +'<td>'
                      +'<table style="font-size: 9px;border-collapse: collapse;">'
                        +'<tr>'
                          +'<td>Hello '+this.userData['contactDetails']['firstName']+',</td>'
                        +'</tr>'
                        +'<tr>'
                          +'<td height="10px"></td>'
                        +'</tr>'
                        +'<tr>'
                          +'<td>Thank you for showing interest in our health insurance product offerings. You searched for '+ this.userData.memberList.length +' members. Based on the member profiles and Sum Insured, below are the list of plans available for you:</td>'
                        +'</tr>'
                      +'</table>'
                    +'</td>'
                    +'</tr>'
                    +'<tr>'
                    +'<td>'
                      +'<table width="100%" style="border-collapse: collapse;">'
                        +'<tr>'
                          +'<td height="15px"></td>'
                        +'</tr>'
                      +'</table>'
                    +'</td>'
                    +'</tr>'
                    +'<tr>'
                    +'<td height="15px"></td>'
                    +'</tr>'
                    +'<tr>'
                    +'<td>'
                      +'<table style="border-collapse: collapse;">'
                        +'<tr>'
                          +'<td height="10px"></td>'
                        +'</tr>'
                      +'</table>'
                    +'</td>'
                    +'</tr>'
                    +'<tr>'
                    +'<td valign="top" style="border-bottom:1px solid #ccc;"></td>'
                    +'</tr>'
                    +'<tr>'
                    +'<td>'
                      +'<table width="100%" style="border-collapse: collapse;">'
                        +'<tr>'
                          +'<td height="4px"></td>'
                        +'</tr>'
                        +'<tr>'
                          +'<td height="4px"></td>'
                        +'</tr>'
                      +'</table>'
                    +'</td>'
                    +'</tr>'
                    +'<tr>'
                    +'<td>'
                      +'<table width="100%" style="font-size: 9px;border-collapse: collapse;">'
                        +'<thead>'
                          +'<tr>'
                            +'<td height="20px"></td>'
                            +'<td height="20px"></td>'
                            +'<td height="20px"></td>'
                            +'<td height="20px"></td>'
                            +'<td height="20px"></td>'
                          +'</tr>'
                          +'<tr>'
                            +'<td style="color: #0000ff;">Insurance Company</td>'
                            +'<td style="color: #0000ff;">Product Name</td>'
                            +'<td style="color: #0000ff;">Plan Name</td>'
                            +'<td style="color: #0000ff;">Sum Insured</td>'
                            +'<td style="color: #0000ff;">Premium</td>'
                          +'</tr>'
                          + quotesList
                        +'</thead>'
                      +'</table>'
                    +'</td>'
                    +'</tr>'
                    +'<tr>'
                    +'<td>'
                      +'<table width="100%" style="border-collapse: collapse;">'
                        +'<tr>'
                          +'<td height="40px"></td>'
                        +'</tr>'
                        +'<tr>'
                          +'<td style="font-size: 9px;">For any assistance, please feel free to contact us at ' + this.contactNumber +' or email us at <a href="javascript:void(0)">' + this.infoEmail +'</a></td>'
                        +'</tr>'
                        +'<tr>'
                          +'<td height="20px"></td>'
                        +'</tr>'
                        +'<tr>'
                          +'<td style="font-size: 9px;border-collapse: collapse;">*Insurance is the subject matter of solicitation. IRDAI Insurance Broking License No. 1. License Code No. IRDA/DB 1/22 Valid till 01/01/2023</td>'
                        +'</tr>'
                      +'</table>'
                    +'</td>'
                    +'</tr>'
                  +'</table>'
                +'</td>'
              +'</tr>'
              +'</table>'
              +'<![endif]-->'
            +'</body>'
          +'</html>';

          console.log('email text: ', text);

          let qData = {
          "send_from":"customer.service@1silverbullet.tech",
          "subject":"Quotes",
          "text":text,
          "send_to":[this.quoteSendingEmails]      
        };
        var headers = {
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
    nextClick() {
      //this.onClickOutside();
      if(this.getValidate())
      {
       
        localStorage.setItem("userProfile",JSON.stringify(this.userData));
        sessionStorage.setItem("userProfile", JSON.stringify(this.userData));
        console.log('Inside get validate: ');
        //window.location.href = new URL(location).origin;
        location.reload( true );
        //this.$router.push("/multi-quote");
           
      }
      
    },
    chkOption(ind, sec, mainIndex) {
      if(ind > parseInt(this.viewMoreCounter - 1)) {
        return sec+'_'+mainIndex + ' d-none';
      }
    }, 
    viewMore(sec, index) {
      if ($("." + sec+'_'+index).hasClass("d-none")) {
        $("." + sec+'_'+index).removeClass("d-none");
        $("#view-more-"+ sec+'-'+index).addClass("d-none");
        $("#hide-more-"+ sec+'-'+index).removeClass("d-none");
      }
    },
    viewLess(sec, index) {
      $("." + sec+'_'+index).addClass("d-none");
      $("#view-more-"+ sec+'-'+index).removeClass("d-none");
      $("#hide-more-"+ sec+'-'+index).addClass("d-none");
    },
    closeAlertDialog() {
      this.alertMsg = '';
    }
    

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scroll-area {
  position: relative;
  margin: auto;
  width: 600px;
  height: 400px;
}
.error-text {
  color: red;
  font-size: 12px;
  text-align: left;
  margin-bottom: 0;
}
.edit-button{
  background: none;
  border: none;
}

#alert {
  border: 1px solid gray;
  width: 300px;
  margin: 0px auto;
  color: red;
  border-radius: 10px;
  background: hsl(0, 0%, 100%);
  padding: 10px;
  text-align: center;
}
</style>
