<template>
  <div class="">
    <Header />

    <div class="wrapper">
      <div class="inner-wrapper">
      <router-link to="/addon-rider">
<div class="d-flex align-items-center pt-4 pb-2">
<em class="icon-arrow-left me-3"></em>
<h3 class="mb-0">Back</h3>
</div>
</router-link>
      <div class="row">
          <div class="col-md-8">
            <div class="pd-left">
              
              <Stepper />
              
            </div>  
          </div>
          <div class="col-md-4">
            <div class="pd-right">
              <div class="pd-right-section1">
                <h3>Policy Details</h3>
                <div class="policy-dts-wrap">
                  <div class="policy-name">
                    <figure>
                      <img src="../assets/images/logo-img3.png" alt="">
                    </figure>
                    <h6 class="mb-0 me-auto">ReAssure</h6>
                    <a href="https://www.nivabupa.com/content/dam/nivabupa/PDF/reassure/ReAssure%20-%20%20Brochure.pdf">
                      <em class="download"></em>
                    </a>
                  </div>
                  <div class="p-details">
                    <ul class="policy-item-detail1">
                      <li>
                        <h6>Sum Insured</h6>
                        <span>5 lac</span>
                      </li>
                      <li>
                        <h6>Members Insured</h6>
                        <span>2 Adults &amp; 1 Child</span>
                      </li>
                      <li>
                        <h6>Policy Tenure</h6>
                        <span>1 Year</span>
                      </li>
                      <li>
                        <h6> Payment Frequency</h6>
                        <span>Yearly</span>
                      </li>
                    </ul>
                    <ul class="policy-item-detail2">
                      <li>
                        <h6>Net Premium</h6>
                        <span> 13,012 </span>
                      </li>
                      <!-- <li>
                        <h6>Addons</h6>
                        <span>NA</span>
                      </li> -->
                      <li>
                        <h6>GST @ 18%</h6>
                        <span>2,342</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul class="ttl-preminum">
                  <li><b>Total Premium</b></li>
                  <span>&#8377;15,354</span>
                </ul>
                <!-- <div class="important-link">
                  <a href="">
                    <img src="~@/assets/images/link.png" alt="">
                    Proposal Link
                  </a>
                  <a href="">
                    <img src="~@/assets/images/pdf-icon.png" alt="">
                    Download Brochure
                  </a>
                </div> -->
              </div> 
              <!-- <div class="pd-checkbox-grp row">
                <h6 class="ps-0">Addons</h6>
                <div class="form-check col-md-6">
                  <input class="form-check-input" type="checkbox" value="" id="pd-chk1" checked="">
                  <label class="form-check-label fs-12 font-reg" for="pd-chk1"> Auto Recharge <b>458</b> </label>
                </div>
                <div class="form-check col-md-6">
                  <input class="form-check-input" type="checkbox" value="" id="pd-chk1">
                  <label class="form-check-label fs-12 font-reg" for="pd-chk1"> OPD Cover <b>1567</b> </label>
                </div>
                <div class="form-check col-md-6">
                  <input class="form-check-input" type="checkbox" value="" id="pd-chk3">
                  <label class="form-check-label fs-12 font-reg" for="pd-chk3"> OPD Cover <b>1567</b> </label>
                </div>
                <div class="form-check col-md-6">
                  <input class="form-check-input" type="checkbox" value="" id="pd-chk4">
                  <label class="form-check-label fs-12 font-reg" for="pd-chk4"> Super NCB <b>200</b> </label>
                </div>
                <a href="#" class="view-more ps-0">View More</a>
              </div>
              <div class="pd-checkbox-grp row">
                <h6 class="ps-0">Riders</h6>
                <div class="form-check col-md-6">
                  <input class="form-check-input" type="checkbox" value="" id="pd-rider-chk1" checked="">
                  <label class="form-check-label fs-12 font-reg" for="pd-rider-chk1"> Covid Care <b>197</b> </label>
                </div>
                <div class="form-check col-md-6">
                  <input class="form-check-input" type="checkbox" value="" id="pd-rider-chk1">
                  <label class="form-check-label fs-12 font-reg" for="pd-rider-chk1"> Care Shield <b>245</b> </label>
                </div>
                <div class="form-check col-md-6">
                  <input class="form-check-input" type="checkbox" value="" id="pd-rider-chk3">
                  <label class="form-check-label fs-12 font-reg" for="pd-rider-chk3"> Copayment Waiver <b>357</b> </label>
                </div>
                <div class="form-check col-md-6">
                  <input class="form-check-input" type="checkbox" value="" id="pd-rider-chk4">
                  <label class="form-check-label fs-12 font-reg" for="pd-rider-chk4"> Super NCB <b>200</b> </label>
                </div>
                <a href="#" class="view-more ps-0">View More</a>
              </div> -->
            </div>
          </div>
      </div> <!--row-->
    </div> 
    </div>

  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Stepper from "@/components/stepper.vue";
export default {
  name: 'ProposerDetailspage',
  components: {
    Header,
    Stepper
  },
  mounted() {

},
  props: {

  },
  data() {
    return {
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
