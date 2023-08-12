<template>
  <div class="">
    <Header />

    <div class="position-relative">
      <div class="panel-hold">
        <div class="left-panel">
          <ul class="mq-list">
            <li>
              <h5>Policy Cover</h5>
              <div class="w-25 ms-auto">
                <select class="normal-select" value=" ">
                  <option value="1"><em class="rupee">&#x20B9;</em> 5 L</option>
                  <option value="2" selected><em class="rupee">&#x20B9;</em> 10 L</option>
                  <option value="3"><em class="rupee">&#x20B9;</em> 15 L</option>
                  <option value="4"><em class="rupee">&#x20B9;</em> 20 L</option>
                  <option value="5"><em class="rupee">&#x20B9;</em> 25 L</option>
                  <option value="5"><em class="rupee">&#x20B9;</em> 30 L</option>
                  <option value="5"><em class="rupee">&#x20B9;</em> 35 L</option>
                  <option value="5"><em class="rupee">&#x20B9;</em> 40 L</option>
                </select>
              </div>
            </li>
            <li>
              <h5>Policy Terms</h5>
              <div class="w-25 ms-auto">
                <select class="normal-select" value=" ">
                  <option value="1" selected>1 Yr</option>
                  <option value="2">2 Yrs</option>
                  <option value="3">3 Yrs</option>
                  <option value="4">4 Yrs</option>
                  <option value="5">5 Yrs</option>
                  <option value="6">6 Yrs</option>
                </select>
              </div>
            </li>
            <li>
              <div class="w-100">
                <h5 class="mb-2">Premium Paying Frequency</h5>
                <div class="input-group input-type-radio">
                  <ul class="terms">
                    <li class="">
                      <input type="radio" id="rb1" name="r" checked="checked" required>
                      <label for="rb1">
                        <span>Monthly</span>
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="rb2" name="r" required>
                      <label for="rb2">
                        <span>Half Yearly</span>
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="rb3" name="r" required>
                      <label for="rb3">
                        <span>Yearly</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div>
                <h5 class="mb-2">
                  Policy Benefits
                </h5>
                <div class="check-group mb-2">
                  <div class="form-check w-100">
                    <input class="form-check-input" type="checkbox" value="" id="chk" checked>
                    <label class="form-check-label p-0" for="chk">
                      Maternity Covered
                    </label>
                  </div>
                  <div class="form-check w-100">
                    <input class="form-check-input" type="checkbox" value="" id="chk1">
                    <label class="form-check-label p-0" for="chk1">
                      PED Covered After 1 Year
                    </label>
                  </div>
                  <div class="form-check w-100">
                    <input class="form-check-input" type="checkbox" value="" id="chk2">
                    <label class="form-check-label p-0" for="chk2">
                      Restoration Benefit Available
                    </label>
                  </div>
                  <div class="form-check w-100">
                    <input class="form-check-input" type="checkbox" value="" id="chk3">
                    <label class="form-check-label p-0" for="chk3">
                      Thyriod
                    </label>
                  </div>
                  <div class="form-check w-100">
                    <input class="form-check-input" type="checkbox" value="" id="chk4">
                    <label class="form-check-label p-0" for="chk4">
                      No Pre-Medical Checkup
                    </label>
                  </div>
                  <div class="form-check w-100">
                    <input class="form-check-input" type="checkbox" value="" id="chk5">
                    <label class="form-check-label p-0" for="chk5">
                      Non Allopathic Treatment Covered
                    </label>
                  </div>
                  <div class="form-check w-100">
                    <input class="form-check-input" type="checkbox" value="" id="chk6">
                    <label class="form-check-label p-0" for="chk6">
                      Zero Co-payment
                    </label>
                  </div>
                  <div class="form-check w-100">
                    <input class="form-check-input" type="checkbox" value="" id="chk7">
                    <label class="form-check-label p-0" for="chk7">
                      OPD Expenses Covered
                    </label>
                  </div>
                  <div class="form-check w-100">
                    <input class="form-check-input" type="checkbox" value="" id="chk8">
                    <label class="form-check-label p-0" for="chk8">
                      No Room Rent Limit
                    </label>
                  </div>

                </div>
              </div>
            </li>
            <li>
              <div>
                <h5 class="mb-2">Insurer</h5>
                <div class="check-group mb-2">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="chk9">
                    <label class="form-check-label" for="chk9">
                      Aditya Birla
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="chk10">
                    <label class="form-check-label " for="chk10">
                      Niva Bupa
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="chk11">
                    <label class="form-check-label p-0" for="chk11">
                      Care Health
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="chk12">
                    <label class="form-check-label p-0" for="chk12">
                      Royal Sundaram
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="chk13">
                    <label class="form-check-label p-0" for="chk13">
                      HDFC Ergo
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="chk14">
                    <label class="form-check-label p-0" for="chk14">
                      Sbi General
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="chk15">
                    <label class="form-check-label p-0" for="chk15">
                      Manipal Cigna
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="chk16">
                    <label class="form-check-label p-0" for="chk16">
                      Star Health
                    </label>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="right-panel">
          <div class="cover-cnt">
            <div class="cover-item">
              <small>Cover for</small>
              <div class="txt">2 Adults &amp; 2 child <em class="bi bi-pencil ms-2"
                  @click="(isCoverfor = !isCoverfor)"></em></div>
              <div class="cover-for" v-if="isCoverfor">
                <div class="d-flex align-items-center mb-3">
                  <h6 class="mb-0">Cover For</h6>
                  <em class="bi bi-pencil ms-auto"></em>
                </div>

                <div class="floating-form">
                  <div class="item">
                    <div class="chk-box">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="chk17" checked="">
                        <label class="form-check-label p-0" for="chk17">Self</label>
                      </div>
                    </div>
                    <div class="slct-box">
                      <div class="floating-label mb-0">
                        <select class="floating-select format" value=" ">
                          <option value="1" selected>30 Yrs</option>
                          <option value="2">31 Yrs</option>
                          <option value="3">32 Yrs</option>
                          <option value="4">33 Yrs</option>
                          <option value="5">34 Yrs</option>
                          <option value="6">35 Yrs</option>
                        </select>
                        <label>Age</label>
                      </div>
                    </div>

                  </div>
                  <div class="item">
                    <div class="chk-box">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="chk18" checked="">
                        <label class="form-check-label p-0" for="chk18">Spouse</label>
                      </div>
                    </div>
                    <div class="slct-box">
                      <div class="floating-label mb-0">
                        <select class="floating-select format" value=" ">
                          <option value="1" selected>30 Yrs</option>
                          <option value="2">31 Yrs</option>
                          <option value="3">32 Yrs</option>
                          <option value="4">33 Yrs</option>
                          <option value="5">34 Yrs</option>
                          <option value="6">35 Yrs</option>
                        </select>
                        <label>Age</label>
                      </div>
                    </div>

                  </div>
                  <div class="item">
                    <div class="chk-box">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="chk19" checked="">
                        <label class="form-check-label p-0" for="chk19">Son</label>
                      </div>
                    </div>
                    <div class="slct-box">
                      <div class="floating-label mb-0">
                        <select class="floating-select format" value=" ">
                          <option value="1" selected>30 Yrs</option>
                          <option value="2">31 Yrs</option>
                          <option value="3">32 Yrs</option>
                          <option value="4">33 Yrs</option>
                          <option value="5">34 Yrs</option>
                          <option value="6">35 Yrs</option>
                        </select>
                        <label>Age</label>
                      </div>
                    </div>

                  </div>
                  <div class="item">
                    <div class="chk-box">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="chk20" checked="">
                        <label class="form-check-label p-0" for="chk20">Daughter</label>
                      </div>
                    </div>
                    <div class="slct-box">
                      <div class="floating-label mb-0">
                        <select class="floating-select format" value=" ">
                          <option value="1" selected>30 Yrs</option>
                          <option value="2">31 Yrs</option>
                          <option value="3">32 Yrs</option>
                          <option value="4">33 Yrs</option>
                          <option value="5">34 Yrs</option>
                          <option value="6">35 Yrs</option>
                        </select>
                        <label>Age</label>
                      </div>
                    </div>

                  </div>
                </div>

                <button type="button"
                  class="btn btn-sm btn-warning rounded-pill px-3 base-med text-white">Apply</button>
              </div>
            </div>
            <div class="cover-item">
              <small>City</small>
              <div class="txt">Mumbai <em class="bi bi-pencil ms-2"></em></div>
            </div>
            <div class="cover-item">
              <small>Income</small>
              <div class="txt">5 to 10 L <em class="bi bi-pencil ms-2"></em></div>
            </div>
          </div>
          <div class="heading-cnt">
            <h4 class="mb-0">Showing 3 results</h4>
            <div class="quote-filter ms-auto">
              <div class="compare-plans">
                <em class="iconpng balance-weight me-2"></em>
                <span>Compare Plans</span>
              </div>
              <div class="recommended" @click="(isRecommended = !isRecommended)">
                <em class="iconpng sort1"></em>
                <span class="mx-2">Recommended</span>
                <em class="iconpng sort2"></em>
              </div>

              <div class="recommended-cnt" v-if="isRecommended">
                <h6 class="">Recommended</h6>
                <ul class="list">
                  <li class="active">Sort By Premium Low to High</li>
                  <li>Sort By Premium High to Low</li>
                  <li>Sort By recommeded Plans</li>
                </ul>

              </div>
            </div>
          </div>
          <div class="plan-cnt">
            <div class="img-cnt">
              <div class="img-box">
                <router-link to="/plan-details" ><img src="../assets/images/logo-img1.jpg" alt="image" /></router-link>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="comparechk1" checked>
                <label class="form-check-label fs-12 font-reg" for="comparechk1">
                  Compare
                </label>
              </div>
            </div>
            <div class="info-cnt">
              <div class="info-hold">
                <div class="info-desc">
                  <h5>Activ Health-Platinum Enhance</h5>
                  <ul class="cover-terms-hospital">
                    <li>
                      <div><em class="rupee">&#x20B9;</em>10 L</div>
                      <small>Policy Cover</small>
                    </li>
                    <li>
                      <div>1 Year</div>
                      <small>Policy Term</small>
                    </li>
                    <li>
                      <div>175 <em class="bi bi-chevron-right text-primary ms-2"></em></div>
                      <small>Hospitals</small>
                    </li>
                  </ul>
                  <ul class="claim-ratio-discount-cnt">
                    <li class="claim-ratio">93.76 % claim settlement ratio</li>
                  </ul>
                  <ul class="info-list">
                    <li class="me-2">10% Co-pay</li>
                    <li class="me-2">25% NCB</li>
                    <li class="me-2">Recovery Benefit Available</li>
                    <li class="">Cataract Cover Available</li>
                  </ul>
                </div>
                <div class="btn-cnt text-center">
<router-link to="/addon-rider"  class="btn btn-warning text-white">
<em class="rupee">&#x20B9;</em>
<span>20,574 <small class="text-white">/ year</small></span>
<em class="bi bi-chevron-right"></em>
</router-link>
<small class="notetxt"><em class="rupee">&#x20B9;</em> 1,800/ month</small>
</div>

              </div>
              <div class="addon-cnt d-flex w-100 pt-3">
                <router-link to="/plan-details" tag="a">
<div class="d-inline-flex align-items-center">
<span>View Plan Details</span>
<em class="iconpng icon-pngrightarrow ms-2"></em>
</div>
</router-link>
                <div class="d-inline-flex align-items-center ms-3">
                  <span>Addon</span>
                  <em class="iconpng icon-pngrightarrow ms-2"></em>
                </div>

                <div class="d-inline-flex align-items-center ms-auto">
                  <span>Download Brochure</span>
                  <em class="bi bi-file-earmark-pdf text-primary ms-2"></em>
                </div>
              </div>
            </div>
            <div class="patch-hold">
              <div class="more-plan-patch">
              <span>3 More Plans</span>
              <em class="iconpng icon-pngrightarrow ms-2"></em>
            </div>
            </div>
          </div>
          <div class="plan-cnt">
            <div class="img-cnt">
              <div class="img-box">
                <img src="../assets/images/logo-img2.jpg" alt="image" />
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="comparechk2" checked>
                <label class="form-check-label fs-12 font-reg" for="comparechk2">
                  Compare
                </label>
              </div>
            </div>
            <div class="info-cnt">
              <div class="info-hold">
                <div class="info-desc">
                  <h5>Care Supreme</h5>
                  <ul class="cover-terms-hospital">
                    <li>
                      <div><em class="rupee">&#x20B9;</em>10 L</div>
                      <small>Policy Cover</small>
                    </li>
                    <li>
                      <div>1 Year</div>
                      <small>Policy Term</small>
                    </li>
                    <li>
                      <div>215 <em class="bi bi-chevron-right text-primary ms-2"></em></div>
                      <small>Hospitals</small>
                    </li>
                  </ul>
                  <ul class="claim-ratio-discount-cnt">
                    <li class="claim-ratio">98.99 % Claim settlement ratio</li>
                    <li class="increase-cnt">Price increasing by 15% soon!</li>
                  </ul>
                  <ul class="info-list">
                    <li class="me-2">Unlimited Reload</li>
                    <li class="me-2">Co-pay Applicable</li>
                    <li class="me-2">10,000 Deductible</li>
                    <li class="">OPD Expenses Covered</li>
                  </ul>
                </div>
                <div class="btn-cnt text-center">
                  <router-link to="/addon-rider"  class="btn btn-warning text-white">
                    <button type="button" class="btn btn-warning text-white">
                      <em class="rupee">&#x20B9;</em>
                      <span>18,352 <small class="text-white">/ year</small></span>
                      <em class="bi bi-chevron-right"></em>
                    </button>
                  </router-link>
                  <small class="notetxt"><em class="rupee">&#x20B9;</em>1605 / month</small>
                </div>

              </div>
              <div class="addon-cnt d-flex w-100 pt-3">
                <div class="d-inline-flex align-items-center">
                  <span>View Plan Details</span>
                  <em class="iconpng icon-pngrightarrow ms-2"></em>
                </div>
                <div class="d-inline-flex align-items-center ms-3">
                  <span>Addon</span>
                  <em class="iconpng icon-pngrightarrow ms-2"></em>
                </div>

                <div class="d-inline-flex align-items-center ms-auto">
                  <span>Download Brochure</span>
                  <em class="bi bi-file-earmark-pdf text-primary ms-2"></em>
                </div>
              </div>
            </div>
            <div class="patch-hold">
              <div class="more-plan-patch">
              <span>5 More Plans</span>
              <em class="iconpng icon-pngrightarrow ms-2"></em>
            </div>
            </div>
          </div>
          <div class="plan-cnt">
            <div class="img-cnt">
              <div class="img-box">
                <img src="../assets/images/logo-img3.jpg" alt="image" />
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="comparechk3" checked>
                <label class="form-check-label fs-12 font-reg" for="comparechk3">
                  Compare
                </label>
              </div>
            </div>
            <div class="info-cnt">
              <div class="info-hold">
                <div class="info-desc">
                  <h5>my : health suraksha family</h5>
                  <ul class="cover-terms-hospital">
                    <li>
                      <div><em class="rupee">&#x20B9;</em>10 L</div>
                      <small>Policy Cover</small>
                    </li>
                    <li>
                      <div>1 Year</div>
                      <small>Policy Term</small>
                    </li>
                    <li>
                      <div>252 <em class="bi bi-chevron-right text-primary ms-2"></em></div>
                      <small>Hospitals</small>
                    </li>
                  </ul>
                  <ul class="claim-ratio-discount-cnt">
                    <li class="claim-ratio">96.23 % claim settlement ratio</li>
                    <li class="discount-cnt">5% Online discount on checkout*</li>
                  </ul>
                  <ul class="info-list">
                    <li class="me-2">Rebound of Sum Insured</li>
                    <li class="me-2">Waiting Period Modification</li>
                    <li class="me-2">Secure Benefit Included</li>
                  </ul>
                </div>
                <div class="btn-cnt text-center">
                  <router-link to="/addon-rider"  class="btn btn-warning text-white">
                    <button type="button" class="btn btn-warning text-white">
                      <em class="rupee">&#x20B9;</em>
                      <span>22,698 <small class="text-white">/ year</small></span>
                      <em class="bi bi-chevron-right"></em>
                    </button>
                  </router-link>
                  <small class="notetxt"><em class="rupee">&#x20B9;</em>1,986 / month</small>
                </div>

              </div>
              <div class="addon-cnt d-flex w-100 pt-3">
                <div class="d-inline-flex align-items-center">
                  <span>View Plan Details</span>
                  <em class="iconpng icon-pngrightarrow ms-2"></em>
                </div>
                <div class="d-inline-flex align-items-center ms-3">
                  <span>Addon</span>
                  <em class="iconpng icon-pngrightarrow ms-2"></em>
                </div>

                <div class="d-inline-flex align-items-center ms-auto">
                  <span>Download Brochure</span>
                  <em class="bi bi-file-earmark-pdf text-primary ms-2"></em>
                </div>
              </div>
            </div>
            <div class="patch-hold">
              <div class="more-plan-patch">
              <span>2 More Plans</span>
              <em class="iconpng icon-pngrightarrow ms-2"></em>
            </div>
            </div>
          </div>
          <!-- <div class="plan-cnt">
            <div class="img-cnt">
              <div class="img-box">
                <img src="../assets/images/logo-img1.jpg" alt="image" />
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="comparechk4">
                <label class="form-check-label fs-12 font-reg" for="comparechk4">
                  Compare
                </label>
              </div>
            </div>
            <div class="info-cnt">
              <div class="info-hold">
                <div class="info-desc">
                  <h5>Activ Health-Platinum Enhance</h5>
                  <ul class="cover-terms-hospital">
                    <li>
                      <div><em class="rupee">&#x20B9;</em>10 L</div>
                      <small>Policy Cover</small>
                    </li>
                    <li>
                      <div>1 Year</div>
                      <small>Policy Term</small>
                    </li>
                    <li>
                      <div>276 <em class="bi bi-chevron-right text-primary ms-2"></em></div>
                      <small>Hospitals</small>
                    </li>
                  </ul>
                  <ul class="claim-ratio-discount-cnt">
                    <li class="claim-ratio">93.76 % Claim Settlement Ratio</li>
                    <li class="discount-cnt">5% Online discount on checkout*</li>
                  </ul>
                  <ul class="info-list">
                    <li class="me-2">10% Co-pay</li>
                    <li class="me-2">10% renewal bonus</li>
                    <li class="me-2">PPN Discount 10%</li>
                    <li class="">5000 room rent limit</li>
                  </ul>
                </div>
                <div class="btn-cnt text-center">
                  <button type="button" class="btn btn-warning text-white">
                    <em class="rupee">&#x20B9;</em>
                    <span>21,568 <small class="text-white">/ year</small></span>
                    <em class="bi bi-chevron-right"></em>
                  </button>
                  <small class="notetxt"><em class="rupee">&#x20B9;</em> 1,887/ month</small>
                </div>

              </div>
              <div class="addon-cnt d-flex w-100 pt-3">
                <div class="d-inline-flex align-items-center">
                  <span>View Plan Details</span>
                  <em class="iconpng icon-pngrightarrow ms-2"></em>
                </div>
                <div class="d-inline-flex align-items-center ms-3">
                  <span>Addon</span>
                  <em class="iconpng icon-pngrightarrow ms-2"></em>
                </div>

                <div class="d-inline-flex align-items-center ms-auto">
                  <span>Download Brochure</span>
                  <em class="bi bi-file-earmark-pdf text-primary ms-2"></em>
                </div>
              </div>
            </div>
            <div class="patch-hold">
              <div class="more-plan-patch">
              <span>3 More Plans</span>
              <em class="iconpng icon-pngrightarrow ms-2"></em>
            </div>
            </div>
          </div> -->

        </div>
      </div>
      <div class="compare-cnt">
        <div class="plan-hold">
          <div class="plan-card">
            <span class="close">
              <em class="bi bi-x"></em>
            </span>
            <div class="img-box">
              <img src="../assets/images/logo-img1.jpg" alt="image" />
            </div>
            <h5>Activ Health-Platinum Enhance</h5>
          </div>
          <div class="plan-card">
            <span class="close">
              <em class="bi bi-x"></em>
            </span>
            <div class="img-box">
              <img src="../assets/images/logo-img2.jpg" alt="image" />
            </div>
            <h5>Care Supreme</h5>
          </div>
          <div class="plan-card">
            <span class="close">
              <em class="bi bi-x"></em>
            </span>
            <div class="img-box">
              <img src="../assets/images/logo-img3.jpg" alt="image" />
            </div>
            <h5>my : health suraksha family</h5>
          </div>
          <!-- <div class="plan-card add-more-plan">
            <div class="img-box">
              <img src="../assets/images/add-more-plan.png" alt="image" />
            </div>
            <h5>Add More Plans</h5>
          </div> -->
          <div class="btn-hold">
            <button type="button" class="btn btn-warning rounded-pill text-white d-flex align-items-center">

              <span>Compare</span>
              <em class="bi bi-chevron-right ms-2"></em>
            </button>
          </div>
        </div>
        <!-- <div class="d-flex justify-content-center align-items-center">
            <div class="plan-card position-relative d-flex justify-content-center align-items-center flex-column mr-4">
              <span><img src="../assets/images/cross.svg" alt=""></span>
              <img src="../assets/images/HDFC_Life.png" alt="">
              <h4>Click 2 Protect Life </h4>
            </div>
            <div class="plan-card position-relative d-flex justify-content-center align-items-center flex-column mr-4">
              <span><img src="../assets/images/cross.svg" alt=""></span>
              <img src="../assets/images/maxlife.png" alt="">
              <h4>Smart Secure Plus Plan </h4>
            </div>
            <div class="plan-card d-flex justify-content-center align-items-center flex-column mr-4 add-more-plan">
              <img src="../assets/images/add-more-plan.png" alt="">
              <h4>Add more plans </h4>
            </div>
            <div>
            <router-link  to="/compareplan" class="compare-plan-btn" >
                Compare <i class="icon-navigate_next"></i>
            </router-link>
            </div>
          </div> -->
      </div>
    </div>

  </div>
</template>

<script>
//import Wizard from "@/components/wizard.vue";
import Header from "@/components/Header.vue";
export default {
  name: 'MultiQuotes',
  components: {
    Header
  },
  props: {

  },
  data() {
    return {

      isCoverfor: false,
      isRecommended:false

    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
