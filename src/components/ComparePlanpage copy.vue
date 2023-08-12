<template>
    <div>
      <Header />

    <div class="cp-holder">
      
      <router-link to="/multi-quote">
        <div class="d-flex align-items-center pb-4">
        <em class="icon-arrow-left me-3"></em>
        <h3 class="mb-0">Back</h3>
        </div>
      </router-link>

      <div class="cp-heading">
        <h3>
          Comparison of Plans
        </h3>
      </div>

      <div class="cp-plan-details">
        <div class="cp-col-holder">
          <div class="cp-col cp-company-dtls">
              <figure></figure>
              <span class="cp-amt-number"> <h6>Policy Name</h6></span>
              <span class="cp-amt-number"> <h6>Cover</h6></span>
              <span class="cp-amt-number"> <h6>Premium</h6></span>
          </div>
          <div class="cp-col cp-company-dtls" v-for="(data, ind) in selectedPlans" :key="ind">
            <figure>
              <img :src="data.supportingData?.insCompanyLogo" alt="">
            </figure>
            <h5>{{ data.insuranceAndProducts.productName +' : ' + data.productDetails.planOption.planName }}</h5>
            <span class="cp-amt-number">&#8377; {{ convertInLakh(data.individualDetails[0].sumInsured) }}</span>
            <small>
              &#8377;  
              {{
                currency(data.productDetails.premiumForEachPolicyTerm[0].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue)
              }} 
              Per year
            </small>
            <button type="button" class="btn btn-warning text-white" @click="selectPlan(data)">
              buy now
            </button>
          </div>
        </div>

        <div class="checkbox-grp ">
          <div class="form-check me-3">
            <input class="form-check-input" type="checkbox" value="" id="cpchk1" checked="">
            <label class="form-check-label fs-12 font-reg" for="cpchk1"> Hide common features </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="cpchk1" checked="">
            <label class="form-check-label fs-12 font-reg" for="cpchk1"> Highlight differences </label>
          </div>
        </div>

        <div class="mid-heading">
          coverage
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>No Claim Bonus</h6>
          </div>
          <div class="cp-col highlighted-row">
            <h6>&#8377;  1.25 Lakh per year and upto maximum of additional &#8377;  7.5 lakh</h6>
          </div>
          <div class="cp-col highlighted-row">
            <h6>&#8377;  1.25 Lakh per year and upto maximum of additional &#8377;  7.5 lakh</h6>
          </div>
          <div class="cp-col highlighted-row">
            <h6>&#8377;  1.30 Lakh per year and upto maximum of additional &#8377;  7.5 lakh</h6>
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Covid Coverage</h6>
          </div>
          <div class="cp-col">
            <h6>Hospitalization due to omicron and all other variants of covid-19 are covered</h6>
          </div>
          <div class="cp-col">
            <h6>Hospitalization due to omicron and all other variants of covid-19 are covered</h6>
          </div>
          <div class="cp-col">
            <h6>Hospitalization due to omicron and all other variants of covid-19 are covered</h6>
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Room Rent Limit</h6>
          </div>
          <div class="cp-col">
            <h6>Single private a/c room</h6>
          </div>
          <div class="cp-col">
            <h6>Any category upto </h6>
          </div>
          <div class="cp-col">
            <h6>Any category </h6>
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Restoration of Cover</h6>
          </div>
          <div class="cp-col highlighted-row">
            <h6>&#8377; 5 lakh unlimited times in a year</h6>
          </div>
          <div class="cp-col highlighted-row">
            <h6>&#8377; 7 lakh unlimited times in a year</h6>
          </div>
          <div class="cp-col highlighted-row">
            <h6>&#8377; 8 lakh unlimited times in a year</h6>
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Organ Donor Cover</h6>
          </div>
          <div class="cp-col">
            <h6>Covered upto &#8377; 50,000</h6>
          </div>
          <div class="cp-col">
            <h6>Covered upto &#8377; 2,25,000</h6>
          </div>
          <div class="cp-col">
            <h6>Covered upto &#8377; 2,00,000</h6>
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Copay</h6>
          </div>
          <div class="cp-col">
            <h6>Full claim paid by insurer</h6>
          </div>
          <div class="cp-col">
            <h6>Full claim paid by insurer</h6>
          </div>
          <div class="cp-col">
            <h6>Full claim paid by insurer</h6>
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Pre-Hospitalization Cover</h6>
          </div>
          <div class="cp-col">
            <h6>Covered upto 60 days</h6>
          </div>
          <div class="cp-col">
            <h6>Covered upto 60 days</h6>
          </div>
          <div class="cp-col">
            <h6>Covered upto 90 days</h6>
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Post-Hospitalization Cover</h6>
          </div>
          <div class="cp-col">
            <h6>Covered upto 60 days</h6>
          </div>
          <div class="cp-col">
            <h6>Covered upto 60 days</h6>
          </div>
          <div class="cp-col">
            <h6>Covered upto 90 days</h6>
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Day Care Treatment</h6>
          </div>
          <div class="cp-col">
            <h6>All day care treatments</h6>
          </div>
          <div class="cp-col">
            <h6>Covered upto 60 days</h6>
          </div>
          <div class="cp-col">
            <h6>Covered upto 65 days</h6>
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Home Hospitalization</h6>
          </div>
          <div class="cp-col highlighted-row">
            <h6>Covered upto &#8377; 5 Lakh after 3 days</h6>
          </div>
          <div class="cp-col highlighted-row">
            <h6>Covered upto 60 days</h6>
          </div>
          <div class="cp-col highlighted-row">
            <h6>Covered upto 70 days</h6>
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Ambulance Charges</h6>
          </div>
          <div class="cp-col">
            <h6>Covered upto &#8377; 5 Lakh after 3 days</h6>
          </div>
          <div class="cp-col">
            <h6>Covered upto 60 days</h6>
          </div>
          <div class="cp-col">
            <h6>Covered upto 90 days</h6>
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Worldwide Coverage</h6>
          </div>
          <div class="cp-col">
            <img src="../assets/images/no-cross.png" alt="image" class="cp-table-img" />
          </div>
          <div class="cp-col">
            <img src="../assets/images/no-cross.png" alt="image" class="cp-table-img" />
          </div>
          <div class="cp-col">
            <img src="../assets/images/no-cross.png" alt="image" class="cp-table-img" />
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Maternity Benefit</h6>
          </div>
          <div class="cp-col highlighted-row">
            <h6>&#8377; 25000 Coverage for New born is part of maternity Sum Insured</h6>
          </div>
          <div class="cp-col highlighted-row">
            <h6>&#8377; 75000 Coverage for New born is part of maternity Sum Insured</h6>
          </div>
          <div class="cp-col highlighted-row">
            <h6>&#8377; 75000 Coverage for New born is part of maternity Sum Insured</h6>
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Super NCB</h6>
          </div>
          <div class="cp-col">
            <img src="../assets/images/no-cross.png" alt="image" class="cp-table-img" />
          </div>
          <div class="cp-col">
            <img src="../assets/images/no-cross.png" alt="image" class="cp-table-img" />
          </div>
          <div class="cp-col">
            <img src="../assets/images/no-cross.png" alt="image" class="cp-table-img" />
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>CI Cover</h6>
          </div>
          <div class="cp-col">
            <img src="../assets/images/yes-tick.png" alt="image" class="cp-table-img" />
          </div>
          <div class="cp-col">
            <img src="../assets/images/yes-tick.png" alt="image" class="cp-table-img" />
          </div>
          <div class="cp-col">
            <img src="../assets/images/yes-tick.png" alt="image" class="cp-table-img" />
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>OPD Cover</h6>
          </div>
          <div class="cp-col">
            <h6>Covered upto &#8377; 1,000 per year</h6>
          </div>
          <div class="cp-col">
            <h6>Covered upto &#8377; 1,000 per year</h6>
          </div>
          <div class="cp-col">
            <h6>Covered upto &#8377; 1,000 per year</h6>
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>PA Cover</h6>
          </div>
          <div class="cp-col">
            <img src="../assets/images/yes-tick.png" alt="image" class="cp-table-img" />
          </div>
          <div class="cp-col">
            <img src="../assets/images/yes-tick.png" alt="image" class="cp-table-img" />
          </div>
          <div class="cp-col">
            <img src="../assets/images/yes-tick.png" alt="image" class="cp-table-img" />
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="mid-heading"> Waiting Periods </div>
        
        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Initial Policy Waiting Period</h6>
          </div>
          <div class="cp-col">
            <h6>Covered after an initial waiting period of 30 days from the policy start date</h6>
          </div>
          <div class="cp-col">
            <h6>Covered after an initial waiting period of 30 days from the policy start date</h6>
          </div>
          <div class="cp-col">
            <h6>Covered after an initial waiting period of 30 days from the policy start date</h6>
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Specific Illness Waiting Period</h6>
          </div>
          <div class="cp-col">
            <h6>Covered after 4 years</h6>
          </div>
          <div class="cp-col">
            <h6>Covered after 6 years</h6>
          </div>
          <div class="cp-col">
            <h6>Covered after 7 years</h6>
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Maternity Waiting Period</h6>
          </div>
          <div class="cp-col">
            <h6>Discount of up to &#8377; 25,000 on maternity with no waiting period</h6>
          </div>
          <div class="cp-col">
            <h6>Discount of up to &#8377; 25,000 on maternity with no waiting period</h6>
          </div>
          <div class="cp-col">
            <h6>Discount of up to &#8377; 30,000 on maternity with no waiting period</h6>
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>PED Waiting Period</h6>
          </div>
          <div class="cp-col">
            <h6>Covered after 2 years</h6>
          </div>
          <div class="cp-col">
            <h6>Covered after 4 years</h6>
          </div>
          <div class="cp-col">
            <h6>Covered after 3 years</h6>
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>

        <div class="mid-heading"> company summary </div>
        
        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Claim Settlement Ratio</h6>
          </div>
          <div class="cp-col">
            <h6>97.63%</h6>
          </div>
          <div class="cp-col">
            <h6>97.63%</h6>
          </div>
          <div class="cp-col">
            <h6>93.63%</h6>
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>
        
        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Cashless Hospitals</h6>
          </div>
          <div class="cp-col">
            <h6>252+ hospitals</h6>
          </div>
          <div class="cp-col">
            <h6>Covered after 4 years</h6>
          </div>
          <div class="cp-col">
            <h6>Covered after 3 years</h6>
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>
        
        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Issurance TAT</h6>
          </div>
          <div class="cp-col">
            <img src="../assets/images/yes-tick.png" alt="image" class="cp-table-img" />
          </div>
          <div class="cp-col">
            <img src="../assets/images/yes-tick.png" alt="image" class="cp-table-img" />
          </div>
          <div class="cp-col">
            <img src="../assets/images/yes-tick.png" alt="image" class="cp-table-img" />
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>
        
        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Cashless Treatment Available</h6>
          </div>
          <div class="cp-col">
            <img src="../assets/images/yes-tick.png" alt="image" class="cp-table-img" />
          </div>
          <div class="cp-col">
            <img src="../assets/images/yes-tick.png" alt="image" class="cp-table-img" />
          </div>
          <div class="cp-col">
            <img src="../assets/images/yes-tick.png" alt="image" class="cp-table-img" />
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>
        
        <div class="cp-col-holder cp-main-dtls">
          <div class="cp-col">
            <h6>Claim TAT</h6>
          </div>
          <div class="cp-col">
            <img src="../assets/images/yes-tick.png" alt="image" class="cp-table-img" />
          </div>
          <div class="cp-col">
            <img src="../assets/images/yes-tick.png" alt="image" class="cp-table-img" />
          </div>
          <div class="cp-col">
            <img src="../assets/images/yes-tick.png" alt="image" class="cp-table-img" />
          </div>
          <!-- <div class="cp-col">
          </div> -->
        </div>
      </div>        
    </div>
    </div>


</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: 'ComparePlan',
  components: {
    Header
  },
  props: {

  },
  mounted() {
    this.selectedPlans = JSON.parse(sessionStorage.getItem("selectedForFilter"));
    console.log('selectedForFilter: ', this.selectedPlans);
  },
  data() {
    return {

      isCoverfor: false,
      isRecommended:false,
      selectedPlans: "",

    };
  },
  methods: {
    convertInLakh(amt) {
      if (amt < 10000000) {
        return amt / 100000 + " Lacs";
      } else {
        return amt / 10000000 + " Crore";
      }
    },
    currency(amt) {
      let tmpAmt = parseFloat(amt).toFixed(2);
      return new Intl.NumberFormat().format(tmpAmt);
    },
    selectPlan(selectedData) {
      // Save selected plan
      sessionStorage.setItem("selected_plan_data", JSON.stringify(selectedData));
      this.$router.push('/addon-rider');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
