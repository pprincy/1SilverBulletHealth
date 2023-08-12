<template>
 <div class="text-center" v-if="loading" style="padding-top: 50px;">
    <loadingPage />
  </div>
  <div v-else class="">
    <Header />

    <div class="cp-holder">
      <router-link to="/multi-quote">
        <div class="d-flex align-items-center pb-4">
          <em class="icon-arrow-left me-3"></em>
          <h3 class="mb-0">Back</h3>
        </div>
      </router-link>

      <div class="cp-heading">
        <h3>Comparison of Plans</h3>
      </div>

      <div class="cp-plan-details">
        <div class="cp-col-holder">
          <div class="cp-col cp-company-dtls">
            <figure></figure>
            <span class="cp-amt-number">
              <h6>Plan Name</h6>
            </span>
            <span class="cp-amt-number">
              <h6>Cover</h6>
            </span>
            <span class="cp-amt-number">
              <h6>Premium</h6>
            </span>
          </div>
          <div class="cp-col cp-company-dtls" v-for="(data, ind) in selectedPlans" :key="ind">
            <figure>
              <img :src="data.supportingData?.insCompanyLogo" alt="" />
            </figure>
            <h5>
              {{
                data.insuranceAndProducts.productName +
                " : " +
                data.productDetails.planOption.planName
              }}
            </h5>
            <span class="cp-amt-number">&#8377;
              {{ convertInLakh(data.individualDetails[0].sumInsured) }}</span>
            
              <button type="button" class="btn btn-warning text-white" @click="selectPlan(data)">

                <small>
                    &#8377;
                    {{
                        currency(
                        data.productDetails.premiumForEachPolicyTerm[0]
                            .premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue
                        )
                    }}
                    / year
                </small>

            </button>
          </div>
        </div>
      
        <div class="checkbox-grp">
            
          <div class="form-check me-3">
            <input class="form-check-input" type="radio" name="test1" v-on:click="filetrCompare(1)" id="cpchk1" />
            <label class="form-check-label fs-12 font-reg" for="cpchk1">
              Hide common features
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="test1" v-on:click="filetrCompare(2)" id="cpchk2" />
            <label class="form-check-label fs-12 font-reg" for="cpchk2">
              Highlight differences
            </label>
          </div>
          <div class="form-check">
            <button class="btn btn-warning text-white btn-sm" v-on:click="filetrCompare(0)">Reset</button>
          </div>
        </div>

        <div class="compare-wrapper mb-3" v-for="(dt, ind) in comparePlanData.section" :key="ind">
          <div class="mid-heading">{{ dt.sectionName }}</div>

          <div :class="'cp-col-holder cp-main-dtls ' + getCompareClasses(dt, ind2)" v-for="(dt2, ind2) in dt.section[0].section" :key="ind2">
            <div class="cp-col">
              <h6>{{ dt2?.name }}</h6>
            </div>
            <div class="cp-col highlighted-row word-break">
              <h6 v-if="dt2?.info[0]?.shortData">
                {{ dt2?.info[0]?.shortData }}
              </h6>
              <img v-else
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAACaklEQVRIia3WvW8URxjH8Q+2iYSNLDv22br1YVwkDQWCDipAouEv4L2gQzSkSAESSZMmRVCkFFQUNJQUiBaJCvEO0rUIkGWdb0ens8TpOCsiyVGs17qcb71ruF+38/zm+e7MPPOya3l5WUHtxyHMYxwf8Q6v0S6SYCwnPoWrOI8fMzyf8Qi3cH+7ZLsyRja6AbmO2Zwf6tUT/ITng4IjA9q+x0Pc3CEIjuLxBjAXNiOZkuM7hPRqDH/it+1go7iHg98A6tUNXMyC/YxjQwKluoV9/bASfhkyCPbi937YFUwMclerVSsrK9tmrNVqqtVqVvi0jdGlsAtZzqmpKc1mU71eHxgPIWg0GiYnJ7NSjOJsClvCD1nOxcVF8/PzQghbgHEcq9frSqWSpaWlrBRwkqRMc6uvXC7rdrtCCJvfIQRxHJudnbWwsJCX4nAKi/KcEEWJLYRgfX1dq9VSKpWKgEgOh5ExfFfEnQI7nY5Wq2V8fLwoKNWeEXwq6g4haLfbJiYmdDodcRwX7foPPo3hbRF3HMeba1SpVKyurorjWLfbVS6X87q/I1mz15JrYneWs7cYKpUK/r+GyAM+Iyn9tuTwHaharbZZ3ikoVRRF5ubmhBDyNv6DFAa3s1zNZtP09HRmMURRZGZmxtraWlaKRgpLL88RvDG8E79XV/FXCoH/cBn/Dhn0QnLy64WRXOnXhghq4Iyk7LfA4A8DbtivBJ3C+97GQW+QX3HJDjZ7n17iCF71BwbB4A4O4K7i6xgkxXBU34hSZT3lerWIczgheaTObbR/xgc8lZT2A/y9XaIisC19JC/iHU/zF6tgv97O5wayAAAAAElFTkSuQmCC"
                alt="image" class="cp-table-img" />
            </div>

            <div class="cp-col highlighted-row word-break">
              <h6 v-if="dt?.section[1]?.section[ind2]?.info[0]?.shortData">
                {{ dt?.section[1]?.section[ind2]?.info[0]?.shortData }}
              </h6>
              <img v-else
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAACaklEQVRIia3WvW8URxjH8Q+2iYSNLDv22br1YVwkDQWCDipAouEv4L2gQzSkSAESSZMmRVCkFFQUNJQUiBaJCvEO0rUIkGWdb0ens8TpOCsiyVGs17qcb71ruF+38/zm+e7MPPOya3l5WUHtxyHMYxwf8Q6v0S6SYCwnPoWrOI8fMzyf8Qi3cH+7ZLsyRja6AbmO2Zwf6tUT/ITng4IjA9q+x0Pc3CEIjuLxBjAXNiOZkuM7hPRqDH/it+1go7iHg98A6tUNXMyC/YxjQwKluoV9/bASfhkyCPbi937YFUwMclerVSsrK9tmrNVqqtVqVvi0jdGlsAtZzqmpKc1mU71eHxgPIWg0GiYnJ7NSjOJsClvCD1nOxcVF8/PzQghbgHEcq9frSqWSpaWlrBRwkqRMc6uvXC7rdrtCCJvfIQRxHJudnbWwsJCX4nAKi/KcEEWJLYRgfX1dq9VSKpWKgEgOh5ExfFfEnQI7nY5Wq2V8fLwoKNWeEXwq6g4haLfbJiYmdDodcRwX7foPPo3hbRF3HMeba1SpVKyurorjWLfbVS6X87q/I1mz15JrYneWs7cYKpUK/r+GyAM+Iyn9tuTwHaharbZZ3ikoVRRF5ubmhBDyNv6DFAa3s1zNZtP09HRmMURRZGZmxtraWlaKRgpLL88RvDG8E79XV/FXCoH/cBn/Dhn0QnLy64WRXOnXhghq4Iyk7LfA4A8DbtivBJ3C+97GQW+QX3HJDjZ7n17iCF71BwbB4A4O4K7i6xgkxXBU34hSZT3lerWIczgheaTObbR/xgc8lZT2A/y9XaIisC19JC/iHU/zF6tgv97O5wayAAAAAElFTkSuQmCC"
                alt="image" class="cp-table-img" />
            </div>

            <div class="cp-col highlighted-row word-break" v-if="dt?.section[2]?.section[ind2]">
              <h6 v-if="dt?.section[2]?.section[ind2]?.info[0]?.shortData">
                {{ dt?.section[2]?.section[ind2]?.info[0]?.shortData }}
              </h6>
              <img v-else
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAACaklEQVRIia3WvW8URxjH8Q+2iYSNLDv22br1YVwkDQWCDipAouEv4L2gQzSkSAESSZMmRVCkFFQUNJQUiBaJCvEO0rUIkGWdb0ens8TpOCsiyVGs17qcb71ruF+38/zm+e7MPPOya3l5WUHtxyHMYxwf8Q6v0S6SYCwnPoWrOI8fMzyf8Qi3cH+7ZLsyRja6AbmO2Zwf6tUT/ITng4IjA9q+x0Pc3CEIjuLxBjAXNiOZkuM7hPRqDH/it+1go7iHg98A6tUNXMyC/YxjQwKluoV9/bASfhkyCPbi937YFUwMclerVSsrK9tmrNVqqtVqVvi0jdGlsAtZzqmpKc1mU71eHxgPIWg0GiYnJ7NSjOJsClvCD1nOxcVF8/PzQghbgHEcq9frSqWSpaWlrBRwkqRMc6uvXC7rdrtCCJvfIQRxHJudnbWwsJCX4nAKi/KcEEWJLYRgfX1dq9VSKpWKgEgOh5ExfFfEnQI7nY5Wq2V8fLwoKNWeEXwq6g4haLfbJiYmdDodcRwX7foPPo3hbRF3HMeba1SpVKyurorjWLfbVS6X87q/I1mz15JrYneWs7cYKpUK/r+GyAM+Iyn9tuTwHaharbZZ3ikoVRRF5ubmhBDyNv6DFAa3s1zNZtP09HRmMURRZGZmxtraWlaKRgpLL88RvDG8E79XV/FXCoH/cBn/Dhn0QnLy64WRXOnXhghq4Iyk7LfA4A8DbtivBJ3C+97GQW+QX3HJDjZ7n17iCF71BwbB4A4O4K7i6xgkxXBU34hSZT3lerWIczgheaTObbR/xgc8lZT2A/y9XaIisC19JC/iHU/zF6tgv97O5wayAAAAAElFTkSuQmCC"
                alt="image" class="cp-table-img" />
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
  name: "ComparePlan",
  components: {
    Header,
    loadingPage
  },
  props: {},
  mounted() {
    if(sessionStorage.getItem("selectedForFilter")) {
      this.selectedPlans = JSON.parse(sessionStorage.getItem("selectedForFilter"));
      let compareRequest = { "productInfo": [] };

      for(var i = 0; i < this.selectedPlans.length; i++) {
        let tmpReq = {
          "manufacturerId": this.selectedPlans[i].insuranceAndProducts.insuranceCompanyCode,
          "productId": this.selectedPlans[i].insuranceAndProducts.productCode,
          "planId": this.selectedPlans[i].productDetails.planOption.planId
        };

        compareRequest.productInfo.push(tmpReq);
      }

      console.log('final compare request: ', compareRequest);
      
      this.getCpmparePlan(compareRequest);

      

    } else {
      this.$router.push("/");
    }
    
    console.log("selectedForFilter: ", this.selectedPlans);

    /*this.comparePlanData = {
        "section": [
            {
                "sectionName": "Coverage",
                "section": [
                    {
                        "planId": "10003",
                        "icon": "",
                        "section": [
                            {
                                "id": "PACover",
                                "name": "Personal Accident Cover",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "advTech",
                                "name": "Advanced Technology Methods",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "ayush",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "We will pay Medical Expenses on Hospitalization of Insured Person in AYUSH Hospital for followingAlternative Treatments prescribed by Medical Practitioner u Ayurvedic u Unani u Siddha u Homeopathy provided that; i. The procedure performed on the Insured Person cannot be carried out on Outpatient basis iii. In the event of admissible Claim under this Cover, no Claim shall be admissible forAllopathic treatment of same Illness or Injury Insured Person shall bear specified percentage of admissible Claim amount under each and every Claim If Optional cover of Co-payment is opted for.",
                                        "icon": "",
                                        "shortData": "Treatment under Registered Ayurveda, Unani, Siddha and Homeopathy Clinics Covered"
                                    }
                                ],
                                "name": "AYUSH",
                                "header": "Alternative Treatments"
                            },
                            {
                                "id": "ciCov",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Multiple optional plans to cover - 9/12/ 15/ 18/ 25/ 40/ 51 Critical Illnesses u 90 days waiting period shall apply from the commencement of the policy period to all claims under the policy u 7 days survival period shall be apply from the date of occurrence of illness, medical event or surgical procedure.",
                                        "icon": "",
                                        "shortData": "Available as Addon"
                                    }
                                ],
                                "name": "Critical Illness",
                                "header": "my:Health Critical Illness Add on"
                            },
                            {
                                "id": "copWaiv",
                                "name": "Copayment Waiver",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "copay",
                                "name": "Copayment",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "copay",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Provides an option such that the Co-Payment amount will applied on each and every claim under all hospitalization covers, wherever applicable under the Policy. Once the Co-Payment option is availed by the Insured Person, it cannot be opted out of at subsequent Renewal.",
                                        "icon": "",
                                        "shortData": "15% or 25% as chosen"
                                    }
                                ],
                                "name": "Copayment",
                                "header": "Co-payment"
                            },
                            {
                                "id": "dayCare",
                                "name": "Day Care",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "domAirAm",
                                "name": "Air ambulance",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "domAirAmb",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Pays up to Rs. 2 lacs for AirAmbulance transportation in an airplane or helicopter for Emergency Care which requires immediate and rapid ambulance  transportation as prescribed by a Medical Practitioner, from the site of first occurrence of the Illness / Accident to the nearest Hospital,that ground transportation cannot provide ",
                                        "icon": "",
                                        "shortData": "up to Rs. 2 lacs"
                                    }
                                ],
                                "name": "Air ambulance",
                                "header": "Air Ambulance Cover"
                            },
                            {
                                "id": "domicTrt",
                                "name": "Domiciliary Hospitalization",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "eOpin",
                                "name": "e opinion",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "emerAmb",
                                "name": "Emergency ambulance",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "hcb",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Provides a daily cash benefit for admissible hospitalization of Insured person u Hospital cash allowance for every 24 hrs. Hospitalisation in a regular hospital room,maximum upto 30 days u 2 times of the base hospital cash benefit, for hospitalisation in ICU",
                                        "icon": "",
                                        "shortData": "3000 or 5000 per day"
                                    }
                                ],
                                "name": "Hospital Cash Benefit",
                                "header": "my:health Hospital Cash Add-on"
                            },
                            {
                                "id": "hlthChk",
                                "name": "Annual Health Checkup",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "homeCar",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Insured Person will be entitled for Health Check up every year, at our Network Service Provider as per list of tests given below irrespective of Claims made under the Policy.",
                                        "icon": "",
                                        "shortData": "Once Every Year on Renewal"
                                    }
                                ],
                                "name": "Home Care Treatment",
                                "header": "Preventive Health Check Up- Booster"
                            },
                            {
                                "id": "intCovr",
                                "name": "International Coverage",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "matExp",
                                "name": "Maternity Cover",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "menHlth",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "The Coverage for Mental illness is applicable if done in Mental Health Establishment and is subject to the provisions contained in the Mental Health Care Act, 2017,as amended from time to time and other applicable laws and Regulations ",
                                        "icon": "",
                                        "shortData": "Covered Upto SI"
                                    }
                                ],
                                "name": "Mental Health Treatment",
                                "header": "Mental Healthcare"
                            },
                            {
                                "id": "ncb",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "On each Renewal of the Policy with Us, 10%/ 25% of Basic Sum Insured under expiring Policy shall be applied as Cumulative Bonus in the Policy provided that; \n 1. There has been no claim under the Policy in expiring year under Section A\n 2. Cumulative Bonus will be reduced at the same rate as accrued in the event of admissible Claim under Section A of the Policy.\n 3. Cumulative Bonus can be accumulated upto 100 % / 200% of Basic Sum Insured. \n 4.Cumulative Bonus applied will be applicable only to Insured Person covered under expiring Policy and who continue to remain insured on Renewal. \n 5. In case of multiyear policies,Cumulative Bonus that has accrued for the second and third Policy Year will be credited on Renewal.Accrued Cumulative Bonus may be utilized in case ofany Claim during Policy tenure",
                                        "icon": "",
                                        "shortData": "10% at each claimfree year, max 100%"
                                    }
                                ],
                                "name": "NCB",
                                "header": "Cumulative Bonus"
                            },
                            {
                                "id": "obesity",
                                "name": "Obesity Treatment",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "opdExp",
                                "name": "OPD Expenses",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "pAndCCov",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Pays for the expenses arising out of pregnancy, infertility treatment and childbirth as per details mentioned below: \n 1. Parent Care i.Maternity Expenses: Medical Expenses for a delivery(including caesarean section) on Hospitalization or the lawful medical termination of pregnancy during the Policy Period.\n ii.OPD Treatment: In Pre - natal and post - natal period up to the limit of this Cover provided Claim under Maternity Expenses is admissible under the Policy.\n iii.Infertility Treatment: Pays for Medical Expenses incurred for infertility treatment,assisted reproductive treatments undertaken on advice of a Medical Practitioner.This cover is applicable for both Male and Female Insured Person.\n 2. Child Care Pays for Child Care for New Born Babyunder this cover if Claim for Maternity Expensesis admissible under the Policy. a) New Born baby cover: Pays for Medical Expenses towards treatment of a New Born Baby\n b) Vaccination Charges: Pays for expenses incurred on vaccination for New Born Baby as per National Immunization Schedule until New Born Baby completes 1 year of age ",
                                        "icon": "",
                                        "shortData": "Covers for Maternity expenses, Infertility treatment and New-Born child care expenses"
                                    }
                                ],
                                "name": "Parent & Child Cover",
                                "header": "Parent and Child Care Cover - Booster"
                            },
                            {
                                "id": "ppnDisc",
                                "name": "PPN Discount",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "recvBen",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Pays Rs 15000 amount upon Medically necessary hospitalization of an Insured Person exceeding 10 consecutive and continuous days and for which Claim is admissible, This benefit is not applicable if Medical treatment is taken under Home Healthcare and Domiciliary Hospitalization ",
                                        "icon": "",
                                        "shortData": "Rs 15000 if hospitalization exceeds 10 days"
                                    }
                                ],
                                "name": "Recovery Benefit",
                                "header": "Recovery Benefit"
                            },
                            {
                                "id": "reload",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "We will add to the Sum Insured, an amount equivalent to the Claim amount paid under Basic Sum Insured, subject to maximum of Basic Sum Insured, on subsequent Hospitalization of the Insured Person during Policy Year subject to;\n i.The Total Sum Insured added under this cover will not exceed the Basic Sum Insured in a Policy Year\n ii.Total of Basic Sum Inured under Hospitalization Cover, Cumulative / Extended Cumulative Bonus( if applicable) earned and Sum Insured Rebound will be available to all Insured Persons for all claims under SectionAduring the current Policy Year and subject to the condition that a single claim in a Policy Year cannot exceed the sum of Basic Sum Insured and the Cumulative / Extended Cumulative Bonus(if opted) earned \niii.In case of treatment for Chemotherapy and Dialysis. Sum Insured Rebound will be applicable only once in lifetime of Policy \n i.This cover will be applicable annually for policies with term more than one year.\n ii.Any unutilized amount of Sum Insured Rebound cannot be carried over to next Policy Year or Renewal Policy \n iii.The Sum Insured Rebound can be utilized for Claims under Hospitalization Cover only ",
                                        "icon": "",
                                        "shortData": "Once in a policy year"
                                    }
                                ],
                                "name": "Reload/Rebound of SI",
                                "header": "Sum Insured Rebound"
                            },
                            {
                                "id": "safGuard",
                                "name": "Safe Guard",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "shrAcCas",
                                "name": "Shared accommodation cash benefit",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "supNCB",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Provides option to enhance cumulative bonus cover, however the same once opted for, cannot be opted out at subsequent Renewal.",
                                        "icon": "",
                                        "shortData": "25% or 50% of SI per claimfree year subject to max of 200% of SI"
                                    }
                                ],
                                "name": "Super NCB",
                                "header": "Extended Cumulative Bonus"
                            },
                            {
                                "id": "ulReload",
                                "name": "Unlimited Reload of SI",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "wpMod",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Provides option to modify Waiting Period for Parent and Child Care Booster to 3 years",
                                        "icon": "",
                                        "shortData": "Can reduce waiting period of Parent and Child Care Booster to 3 years"
                                    }
                                ],
                                "name": "Wating Period Modification",
                                "header": "Waiting Period Modification option"
                            }
                        ]
                    },
                    {
                        "planId": "10005",
                        "icon": "",
                        "section": [
                            {
                                "id": "PACover",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "5 times of base sum insured; subject to maximum of 1 Crore",
                                        "icon": "",
                                        "shortData": "5 times of base sum insured; subject to maximum of 1 Crore"
                                    }
                                ],
                                "name": "Personal Accident Cover",
                                "header": "Parent and Child Care Cover - Booster"
                            },
                            {
                                "id": "advTech",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Covered up to sum insured with sub-limit of 1 Lac on few robotic surgeries",
                                        "icon": "",
                                        "shortData": "Available with sub limit of 1 lac on listed surgeries"
                                    }
                                ],
                                "name": "Advanced Technology Methods",
                                "header": "Modern treatments"
                            },
                            {
                                "id": "ayush",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "We will indemnify the Medical Expenses incurred on the Insured Person's Hospitalization for Inpatient Care during the Policy Period on treatment taken under Ayurveda, Unani, Siddha and Homeopathy.",
                                        "icon": "",
                                        "shortData": "Treatment under Registered Ayurveda, Unani, Siddha and Homeopathy Clinics"
                                    }
                                ],
                                "name": "AYUSH",
                                "header": "Alternative Treatments"
                            },
                            {
                                "id": "ciCov",
                                "name": "Critical Illness",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "copWaiv",
                                "name": "Copayment Waiver",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "copay",
                                "name": "Copayment",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "copay",
                                "name": "Copayment",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "dayCare",
                                "name": "Day Care",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "domAirAm",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Pays for AirAmbulance transportation in an airplane or helicopter for Emergency Care which requires immediate and rapid ambulance  transportation as prescribed by a Medical Practitioner, from the site of first occurrence of the Illness / Accident to the nearest Hospital,that ground transportation cannot provide ",
                                        "icon": "",
                                        "shortData": "Hospital Authorised Air Ambulance Expenses Covered upto SI"
                                    }
                                ],
                                "name": "Air ambulance",
                                "header": "Air Ambulance Cover"
                            },
                            {
                                "id": "domAirAmb",
                                "name": "Air ambulance",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "domicTrt",
                                "name": "Domiciliary Hospitalization",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "eOpin",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Once for any condition for which hospitalization is triggered",
                                        "icon": "",
                                        "shortData": "Once if hospitalization is required"
                                    }
                                ],
                                "name": "e opinion",
                                "header": "Second medical opinion"
                            },
                            {
                                "id": "emerAmb",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Covered upto 2,000 per hospitalization.",
                                        "icon": "",
                                        "shortData": "Covered upto 2,000 per hospitalization."
                                    }
                                ],
                                "name": "Emergency ambulance",
                                "header": "Emergency ambulance"
                            },
                            {
                                "id": "hcb",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Up to 5 Lac base sum insured: 1,000/day 7.5 Lacs to 15 Lacs base sum insured: 2,000/day Above 15 Lacs base sum insured: 4,000/day. Min 48 hours of hospitalization and max upto 30 days",
                                        "icon": "",
                                        "shortData": "1,000, 2000 & 4000 per day for SI upto 5 Lacs, between 7.5 lacs to 15 Lacs & above 15 Lacs respectively. Max 30 days"
                                    }
                                ],
                                "name": "Hospital Cash Benefit",
                                "header": "Hospital Cash Benefit"
                            },
                            {
                                "id": "hlthChk",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Annual (From Day 1); For defined list of tests; up to 500 for every 1 Lac sum insured (Individual policy: maximum 5,000 per Insured; Family Floater policy: maximum 10,000 per policy)",
                                        "icon": "",
                                        "shortData": "Upto Rs 500 for every 1 lac SI for defined tests. Max Rs 10000"
                                    }
                                ],
                                "name": "Annual Health Checkup",
                                "header": "Health check-up"
                            },
                            {
                                "id": "homeCar",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "We will indemnify the Medical Expenses incurred on the Insured Persons treatment taken at home for Chemotherapy or Dialysis",
                                        "icon": "",
                                        "shortData": "Home care expenses for Chemotherapy or Dialysis will be reimbursed"
                                    }
                                ],
                                "name": "Home Care Treatment",
                                "header": "Home Care treatment"
                            },
                            {
                                "id": "intCovr",
                                "name": "International Coverage",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "matExp",
                                "name": "Maternity Cover",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "menHlth",
                                "name": "Mental Health Treatment",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "ncb",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "In case of claim free year, increase of 50% of base sum insured in a policy year; maximum up to 100% (In case of a claim, reduction of accumulated Cumulative Bonus by 50% of Base Sum Insured)",
                                        "icon": "",
                                        "shortData": "50% increase in SIevery claim free year upto max 100% of SI"
                                    }
                                ],
                                "name": "NCB",
                                "header": "Booster benefit"
                            },
                            {
                                "id": "obesity",
                                "name": "Obesity Treatment",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "opdExp",
                                "name": "OPD Expenses",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "pAndCCov",
                                "name": "Parent & Child Cover",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "ppnDisc",
                                "name": "PPN Discount",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "recvBen",
                                "name": "Recovery Benefit",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "reload",
                                "name": "Reload/Rebound of SI",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "safGuard",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "a. Claim safeguard: Non-payable items paid up to sum insured b. Booster benefit safeguard: No impact on Booster benefit if claims in a policy year is up to 50,000 c. Sum insured safeguard: CPI (Consumer Price Index) linked increase in base sum insured",
                                        "icon": "",
                                        "shortData": "Claim Safeguard, Booster Benefit SafeGuard and SI Safeguard available"
                                    }
                                ],
                                "name": "Safe Guard",
                                "header": "Parent and Child Care Cover - Booster"
                            },
                            {
                                "id": "shrAcCas",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Up to 15 Lacs base sum insured: 800 per day (maximum 4,800) Above 15 Lacs base sum insured: 1,000 per day; (maximum 6,000)",
                                        "icon": "",
                                        "shortData": "800-1000 per day as per SI upto a max of 6 days"
                                    }
                                ],
                                "name": "Shared accommodation cash benefit",
                                "header": "Shared accommodation cash benefit"
                            },
                            {
                                "id": "supNCB",
                                "name": "Super NCB",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "ulReload",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Unlimited reinstatement of sum insured applicable for any illness or anyone insured (Single claim under this benefit will be payable up to base sum insured)",
                                        "icon": "",
                                        "shortData": "Unlimited Reinstatement of SI for all illnesses of all insured"
                                    }
                                ],
                                "name": "Unlimited Reload of SI",
                                "header": "ReAssure"
                            },
                            {
                                "id": "wpMod",
                                "name": "Wating Period Modification",
                                "icon": "",
                                "info": []
                            }
                        ]
                    },
                    {
                        "planId": "10008",
                        "icon": "",
                        "section": [
                            {
                                "id": "PACover",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Benefits under this Section (34) are subject to the terms, conditions and exclusions of this Policy. The Sum Insured and/or the sub-limit for each Benefit under Section (34) is specified against that Benefit in the Policy Schedule /the Product Benefit Table. Payment of the Benefit shall be subject to the availability of the Sum Insured/applicable sub-limit for that Benefit",
                                        "icon": "",
                                        "shortData": "Personal Accident cover available as addon"
                                    }
                                ],
                                "name": "Personal Accident Cover",
                                "header": "Personal Accident Cover (AD, PTD)"
                            },
                            {
                                "id": "advTech",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "We will add to the Sum Insured, an amount equivalent to the Claim amount paid under Basic Sum Insured, subject to maximum of Basic Sum Insured, on subsequent Hospitalization of the Insured Person during Policy Year subject to;\n i.The Total Sum Insured added under this cover will not exceed the Basic Sum Insured in a Policy Year\n ii.Total of Basic Sum Inured under Hospitalization Cover, Cumulative / Extended Cumulative Bonus( if applicable) earned and Sum Insured Rebound will be available to all Insured Persons for all claims under SectionAduring the current Policy Year and subject to the condition that a single claim in a Policy Year cannot exceed the sum of Basic Sum Insured and the Cumulative / Extended Cumulative Bonus(if opted) earned \niii.In case of treatment for Chemotherapy and Dialysis. Sum Insured Rebound will be applicable only once in lifetime of Policy \n i.This cover will be applicable annually for policies with term more than one year.\n ii.Any unutilized amount of Sum Insured Rebound cannot be carried over to next Policy Year or Renewal Policy \n iii.The Sum Insured Rebound can be utilized for Claims under Hospitalization Cover only ",
                                        "icon": "",
                                        "shortData": "Once in a policy year"
                                    }
                                ],
                                "name": "Advanced Technology Methods",
                                "header": "Modern Treatment Methods and Advancement in Technologies"
                            },
                            {
                                "id": "ayush",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "We shall cover on a reimbursement basis, up to the limits as specified in the Policy Schedule / Product Benefit Table of this Policy, towards the Medical Expenses for In-patient Hospitalization incurred with respect to the Insured Persons Ayush Treatment undergone in any AYUSH Hospital.",
                                        "icon": "",
                                        "shortData": "AYUSH treatments covered upto limits specified"
                                    }
                                ],
                                "name": "AYUSH",
                                "header": "AYUSH Cover"
                            },
                            {
                                "id": "ciCov",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "If the Insured Person suffers from a Critical Illness of the nature as specified in this Section during the Policy Period and while the Policy is in force, then We shall pay the Sum Insured as set out in the Policy Schedule / Product Benefit Table for that Critical Illness provided that the Critical Illness is first diagnosed or first manifests itself during the Policy Period as a first incidence.",
                                        "icon": "",
                                        "shortData": "Critical Illnesses Expenses Coevred upto SI"
                                    }
                                ],
                                "name": "Critical Illness",
                                "header": "Critical Illness Cover"
                            },
                            {
                                "id": "copWaiv",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "If this Benefit is in force, the applicable Mandatory Co-payment specified in Section (21) shall not apply on payable claims under the Policy as specified in the Policy Schedule/ Product Benefit Table.",
                                        "icon": "",
                                        "shortData": "If opted for this addon, copayment will be waived"
                                    }
                                ],
                                "name": "Copayment Waiver",
                                "header": "Waiver of Mandatory Co-payment"
                            },
                            {
                                "id": "copay",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "A mandatory Co-payment as specified in the Policy Schedule shall apply to all payable claims amount in respect of an Insured Person. Conditions: (i)For persons who have opted for a Waiver of Mandatory Co-payment this Co-payment will not apply. (ii)Mandatory co-payment is not applicable for optional Benefits - Personal Accident (AD, PTD) and Critical Illness cover.",
                                        "icon": "",
                                        "shortData": "Copayment of 10,15,20 % allowed for treatment in higher zone hospital for SI upto 3 lacs"
                                    }
                                ],
                                "name": "Copayment",
                                "header": "Mandatory Co-payment"
                            },
                            {
                                "id": "copay",
                                "name": "Copayment",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "dayCare",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Day Care Treatment means medical treatment, and/or surgical procedure which is:i. Undertaken under General or Local Anaesthesia in a hospital/day care centre in less than 24 hrs because of technological advancement,and ii. Which would have otherwise required hospitalization of more than 24 hours. Treatment normally taken on an out-patient basis is not included in the scope of this definition.",
                                        "icon": "",
                                        "shortData": "Listed Day Care Procecures Covered"
                                    }
                                ],
                                "name": "Day Care",
                                "header": "Day Care Treatment"
                            },
                            {
                                "id": "domAirAm",
                                "name": "Air ambulance",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "domAirAmb",
                                "name": "Air ambulance",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "domicTrt",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "We shall cover the Medical Expenses incurred for the Insured Persons Domiciliary Hospitalization, up to the limits as specified in the Policy Schedule / Product Benefit Table of this Policy, during the Policy Period following an Illness or Injury that occurs during the Policy Period.",
                                        "icon": "",
                                        "shortData": "Up to the limits as specified in the Policy Schedule Covered"
                                    }
                                ],
                                "name": "Domiciliary Hospitalization",
                                "header": "Domiciliary Hospitalization"
                            },
                            {
                                "id": "eOpin",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "If an Insured Person is diagnosed with any Major Illness, during the Policy Period, the Insured Person may at his/her sole discretion choose to avail an E-opinion from Our panel of Domestic and International Medical Practitioners",
                                        "icon": "",
                                        "shortData": "Second E opinion for any major illness"
                                    }
                                ],
                                "name": "e opinion",
                                "header": "Second E-Opinion for Major Illness"
                            },
                            {
                                "id": "emerAmb",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "We shall cover the costs incurred up to the limits as specified in the Policy Schedule / Product Benefit Table of this Policy, towards transportation of the Insured Person by Road Ambulance to a nearest Hospital from the place of occurrence of an Emergency for treatment, where such Emergency occurs during the Policy Period.",
                                        "icon": "",
                                        "shortData": "Rs 3500 per hospitlization"
                                    }
                                ],
                                "name": "Emergency ambulance",
                                "header": "Road Ambulance Cover"
                            },
                            {
                                "id": "hcb",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "We will pay the Hospital Cash Benefit specified in the Policy Schedule, for each continuous and completed period of 24 hours of Hospitalisation, during the Policy Period for treatment of an Illness or Injury. This Benefit shall be payable for a maximum limit of 30 days in a Policy Year and 10 days for each claim.",
                                        "icon": "",
                                        "shortData": "Rs 500 to 5000 in multiples of 500 per day after 24 hours of hospitalization"
                                    }
                                ],
                                "name": "Hospital Cash Benefit",
                                "header": "Hospital Cash Benefit"
                            },
                            {
                                "id": "hlthChk",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Insured Person(s) Aged 18 years and above on the Start date of the Policy may avail a comprehensive health check-up once in a Policy Year in accordance with the table below and as specified in the Policy Schedule/Product Benefit Table of this Policy.",
                                        "icon": "",
                                        "shortData": "Once in a policy year"
                                    }
                                ],
                                "name": "Annual Health Checkup",
                                "header": "Health Check-up Program"
                            },
                            {
                                "id": "homeCar",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "We shall cover the treatment expenses up to the limits as specified in the Policy Schedule/ Product Benefit Table of this Policy for the Insured Personâ€™s treatment at his/her home for Illnesses / Injuries such as chemotherapy, dengue, gastroenteritis, hepatitis, peritoneal dialysis on a cashless basis only availed through our Network Provider / Empanelled Service Providers providing such facility, listed on Our website.",
                                        "icon": "",
                                        "shortData": "Home care treatment allowed as per specified limit for specific treatments"
                                    }
                                ],
                                "name": "Home Care Treatment",
                                "header": "Home Treatment"
                            },
                            {
                                "id": "intCovr",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Benefits under this Section B.V.(36) are subject to the terms, conditions and exclusions of this Policy. The Sum Insured and/or the sub-limit for each Benefit under Section is specified against that Benefit in the Policy Schedule / Product Benefit Table of this Policy. Payment of the Benefit shall be subject to the availability of the Sum Insured and the applicable sub-limit for that Benefit. Our maximum, total and cumulative liability in respect of an Insured Person for any and all claims arising under a Benefit during the Policy Period for that Insured Person shall not exceed the Sum Insured/sub-limit specified against the applicable Benefit in the Policy Schedule / Product Benefit Table.",
                                        "icon": "",
                                        "shortData": "Apllicable with Sub Limits of listed major illnesses"
                                    }
                                ],
                                "name": "International Coverage",
                                "header": "International Coverage for Major Illnesses"
                            },
                            {
                                "id": "matExp",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Where Maternity Expenses is opted as an Optional Cover under this Policy, We will cover Maternity Expenses up to the Maternity Sum Insured specified in the Policy Schedule after a waiting period of 48 months from the inception of the 1st Policy where Maternity Expenses option is selected, if Renewed with Us continuously without any break and Maternity Expenses has been opted continuously as an Optional Cover under this Policy, for the delivery of a child and/ or Maternity Expenses related to a Medically Necessary Treatment and lawful medical termination of pregnancy up to a maximum of 2 events including (a) 2 deliveries (including twins) or (b) 2 terminations or (c) 1 delivery (including twins) and 1 termination during the lifetime of an Insured Person between the Ages of 18 years to 45 years where the mother is the Insured Person.",
                                        "icon": "",
                                        "shortData": "Maternity Expenses avaialble with specified limits"
                                    }
                                ],
                                "name": "Maternity Cover",
                                "header": "Maternity Expenses"
                            },
                            {
                                "id": "menHlth",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "We shall cover the Medical Expenses incurred by the Insured Person upto the limit specified in the Policy Schedule/Product Benefit Table of this Policy, towards Hospitalization of the Insured Person under Section B.I.(1) (In- patient Hospitalization) specifically for any Mental Illnesses. Pre-hospitalization Medical Expenses incurred, immediately preceding the Insured Personâ€™s admission to the Hospital and Post- hospitalization Medical Expenses incurred immediately following the Insured Personâ€™s discharge, within the Policy Period will also be indemnified under this Benefit in accordance with as per Section B.I.(2) (Pre-hospitalization Medical Expenses) and Section B.I.(3) (Post- hospitalization Medical Expenses) respectively.",
                                        "icon": "",
                                        "shortData": "Mental Illnesses Expenses Covered"
                                    }
                                ],
                                "name": "Mental Health Treatment",
                                "header": "Mental Illness Hospitalization"
                            },
                            {
                                "id": "ncb",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "We shall apply a Cumulative Bonus in the form of No Claim Bonus at such rates as specified in the Policy Schedule/ Product Benefit Table of this Policy on the Sum Insured of the expiring Policy as specified for Section B.I in the Policy Schedule on a cumulative basis, provided that the Insured Person(s) has not made any claim under Section B.I in a Policy Year and has successfully Renewed the Policy with Us continuously and without any break. The accumulated Cumulative Bonus shall not exceed 100% of the Sum Insured on the Renewed Policy as specified in the Policy Schedule/ Product Benefit Table of this Policy.",
                                        "icon": "",
                                        "shortData": "50% increase, upto 100% of SI or 1 Cr whichever is less"
                                    }
                                ],
                                "name": "NCB",
                                "header": "Cumulative Bonus"
                            },
                            {
                                "id": "obesity",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "We shall cover the related Medical Expenses as specified in the Policy Schedule/Product Benefit Table of this Policy if the Insured Person is hospitalized for a Bariatric Surgery which is medically necessary, on the written advice of a Medical Practitioner",
                                        "icon": "",
                                        "shortData": "Obesity treatment realated expenses covered"
                                    }
                                ],
                                "name": "Obesity Treatment",
                                "header": "Obesity Treatment"
                            },
                            {
                                "id": "opdExp",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "We will cover costs incurred for medically necessary consultations, diagnostic tests and pharmacy expenses on an out-patient basis upto the amount specified in the Product Benefit Table and Policy Schedule. Appointments can be scheduled through Our website or the mobile application; You can also call Our contact center toll free number specified in the Policy Schedule for scheduling an appointment.",
                                        "icon": "",
                                        "shortData": "OPD Expenses are covered"
                                    }
                                ],
                                "name": "OPD Expenses",
                                "header": "OPD Expenses"
                            },
                            {
                                "id": "pAndCCov",
                                "name": "Parent & Child Cover",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "ppnDisc",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "If this option is chosen by the Policyholder on the basis of the conditions provided below, then the Policyholder is entitled for a discount of 10% on the premium payable.",
                                        "icon": "",
                                        "shortData": "Discount of 10% on premium if treatment taken with Preferred Provider Network"
                                    }
                                ],
                                "name": "PPN Discount",
                                "header": "Preferred Provider Network (PPN) Discount"
                            },
                            {
                                "id": "recvBen",
                                "name": "Recovery Benefit",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "reload",
                                "name": "Reload/Rebound of SI",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "safGuard",
                                "name": "Safe Guard",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "shrAcCas",
                                "name": "Shared accommodation cash benefit",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "supNCB",
                                "name": "Super NCB",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "ulReload",
                                "name": "Unlimited Reload of SI",
                                "icon": "",
                                "info": []
                            },
                            {
                                "id": "wpMod",
                                "name": "Wating Period Modification",
                                "icon": "",
                                "info": []
                            }
                        ]
                    }
                ]
            },
            {
                "sectionName": "Waiting Periods",
                "section": [
                    {
                        "planId": "10003",
                        "icon": "",
                        "section": [
                            {
                                "id": "initWaitingTime",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Standard Waiting period of 30 Days",
                                        "icon": "",
                                        "shortData": "30 Days"
                                    }
                                ],
                                "name": "Initial Waiting Period",
                                "header": "Initial Waiting period"
                            },
                            {
                                "id": "pedWaitingTime",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Pre existing disease waiting period is 36 months",
                                        "icon": "",
                                        "shortData": "48 Months"
                                    }
                                ],
                                "name": "Pre Existing Disease Waiting Period",
                                "header": "PED Waiting Period"
                            },
                            {
                                "id": "specificIllnessProcedureWaitingTime",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Expenses related to the treatment of the listed conditions, surgeries/treatments shall be excluded until the expiry of 24 months of continuous coverage after the date of inception of the first Policy with us.",
                                        "icon": "",
                                        "shortData": "24 Months"
                                    }
                                ],
                                "name": "Specified disease/procedure waiting period",
                                "header": "Specific Illness/Procedures Waiting Time"
                            }
                        ]
                    },
                    {
                        "planId": "10005",
                        "icon": "",
                        "section": [
                            {
                                "id": "initWaitingTime",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Standard Waiting period of 30 Days",
                                        "icon": "",
                                        "shortData": "30 Days"
                                    }
                                ],
                                "name": "Initial Waiting Period",
                                "header": "Initial Waiting period"
                            },
                            {
                                "id": "pedWaitingTime",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Pre existing disease waiting period is 36 months",
                                        "icon": "",
                                        "shortData": "36 Months"
                                    }
                                ],
                                "name": "Pre Existing Disease Waiting Period",
                                "header": "PED Waiting Period"
                            },
                            {
                                "id": "specificIllnessProcedureWaitingTime",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Expenses related to the treatment of the listed conditions, surgeries/treatments shall be excluded until the expiry of 24 months of continuous coverage after the date of inception of the first Policy with us.",
                                        "icon": "",
                                        "shortData": "24 Months"
                                    }
                                ],
                                "name": "Specified disease/procedure waiting period",
                                "header": "Specific Illness/Procedures Waiting Time"
                            }
                        ]
                    },
                    {
                        "planId": "10008",
                        "icon": "",
                        "section": [
                            {
                                "id": "initWaitingTime",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Standard Waiting period of 30 Days",
                                        "icon": "",
                                        "shortData": "30 Days. For Critical Illnesses-90 Days"
                                    }
                                ],
                                "name": "Initial Waiting Period",
                                "header": "Initial Waiting period"
                            },
                            {
                                "id": "pedWaitingTime",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Pre existing disease waiting period is 36 months",
                                        "icon": "",
                                        "shortData": "36 Months"
                                    }
                                ],
                                "name": "Pre Existing Disease Waiting Period",
                                "header": "PED Waiting Period"
                            },
                            {
                                "id": "specificIllnessProcedureWaitingTime",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Expenses related to the treatment of the listed conditions, surgeries/treatments shall be excluded until the expiry of 24 months of continuous coverage after the date of inception of the first Policy with us.",
                                        "icon": "",
                                        "shortData": "24 Months"
                                    }
                                ],
                                "name": "Specified disease/procedure waiting period",
                                "header": "Specific Illness/Procedures Waiting Time"
                            }
                        ]
                    }
                ]
            },
            {
                "sectionName": "Policy Information",
                "section": [
                    {
                        "planId": "10003",
                        "icon": "",
                        "section": [
                            {
                                "id": "brochureLink",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "https://www.hdfcergo.com/docs/default-source/downloads/brochures/myhealth-suraksha-brochureaddfd5a1e98c4e25a83076f1e9cd856e.pdf",
                                        "icon": "",
                                        "shortData": "https://www.hdfcergo.com/docs/default-source/downloads/brochures/myhealth-suraksha-brochureaddfd5a1e98c4e25a83076f1e9cd856e.pdf"
                                    }
                                ],
                                "name": "Brochure Link",
                                "header": "Brochure link of the product"
                            },
                            {
                                "id": "maxAdultInsuredAllowed",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Max number of adults allowed is 4",
                                        "icon": "",
                                        "shortData": "4"
                                    }
                                ],
                                "name": "Max No of Adults Allowed",
                                "header": "Max no of adults included in the policy"
                            },
                            {
                                "id": "maxChildInsuredAllowed",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Max number of childrens allowed is 3",
                                        "icon": "",
                                        "shortData": "3"
                                    }
                                ],
                                "name": "Max No of Child(ren) Allowed",
                                "header": "Max nunber of Children allowed in the policy"
                            },
                            {
                                "id": "policyIssuanceTime",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Instant in case of STP. Within 15 days in case of medical cases.",
                                        "icon": "",
                                        "shortData": "15 Minutes for STP Cases"
                                    }
                                ],
                                "name": "Policy Issuance Time",
                                "header": "Policy Issuance Time"
                            },
                            {
                                "id": "policyPortabilityFAQ",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "https://www.irdai.gov.in/ADMINCMS/cms/Uploadedfiles/RTI_FAQ/Portability%20and%20migration%20facility08122021.pdf#:~:text=FAQs%20on%20Portability%20%3A%20What%20is%20portability%20under,gained%20for%20pre-existing%20conditions%20and%20time%20bound%20exclusions.",
                                        "icon": "",
                                        "shortData": "https://www.irdai.gov.in/ADMINCMS/cms/Uploadedfiles/RTI_FAQ/Portability%20and%20migration%20facility08122021.pdf#:~:text=FAQs%20on%20Portability%20%3A%20What%20is%20portability%20under,gained%20for%20pre-existing%20conditions%20and%20time%20bound%20exclusions."
                                    }
                                ],
                                "name": "Policy Portability FAQ",
                                "header": "FAQs on Portability of Health Insurance Policy"
                            },
                            {
                                "id": "policyTerm",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "1 Year, 2 Years, 3 Years",
                                        "icon": "",
                                        "shortData": "1,2,3 Years"
                                    }
                                ],
                                "name": "Policy Terms",
                                "header": "Policy terms allowed in the plan"
                            },
                            {
                                "id": "premiumPaymentFrequency",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Monthly, Quarterly, Half Yearly, Annual",
                                        "icon": "",
                                        "shortData": "Monthly, Quarterly, Half Yearly, Annual"
                                    }
                                ],
                                "name": "Premium Payment Frequecy",
                                "header": "Frequency of premium payment allowed in the plan"
                            },
                            {
                                "id": "productFeaturesDesc",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Key features of the policy:\n 1. Multiple sum insured options ranging from Rs .3 Lacs to Rs .75 Lacs available under this policy. \n 2. Any age entry option with lifetime renewal \n 3. Exclusive covers like Air ambulance cover, Recovery benefit,Infertility cover \n 4. Wellness features like Fitness discount @ renewal, Health incentives for maintenance of health\n 5. Flexi benefits like choosing room rent capping, co pay in order to avail discounts on premium \n 6. Various discount options to like family discount, long term policy discount,loyalty discount \n 7. Long term policy options up to 3 years with attractive premium rate \n 8. Option to pay yearly premium in 3,6 and 12 equal installments ",
                                        "icon": "",
                                        "shortData": "Refer to Policy Brochure"
                                    }
                                ],
                                "name": "Product Features Description",
                                "header": "Product Features Description"
                            }
                        ]
                    },
                    {
                        "planId": "10005",
                        "icon": "",
                        "section": [
                            {
                                "id": "brochureLink",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "https://www.hdfcergo.com/docs/default-source/downloads/brochures/myhealth-suraksha-brochureaddfd5a1e98c4e25a83076f1e9cd856e.pdf",
                                        "icon": "",
                                        "shortData": "https://www.hdfcergo.com/docs/default-source/downloads/brochures/myhealth-suraksha-brochureaddfd5a1e98c4e25a83076f1e9cd856e.pdf"
                                    }
                                ],
                                "name": "Product Brochure",
                                "header": "Brochure link of the product"
                            },
                            {
                                "id": "maxAdultInsuredAllowed",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Max number of adults allowed is 4",
                                        "icon": "",
                                        "shortData": "2 Adults"
                                    }
                                ],
                                "name": "Max No. of Adults allowed",
                                "header": "Max no of adults included in the policy"
                            },
                            {
                                "id": "maxChildInsuredAllowed",
                                "icon": "4 Children",
                                "info": [
                                    {
                                        "data": "Max number of childrens allowed is 3",
                                        "icon": "",
                                        "shortData": ""
                                    }
                                ],
                                "name": "Max No. of Child(ren) allowed",
                                "header": "Max number of Children allowed in the policy"
                            },
                            {
                                "id": "policyIssuanceTime",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Instant in case of STP. Within 15 days in case of medical cases.",
                                        "icon": "",
                                        "shortData": "Instant for STP cases"
                                    }
                                ],
                                "name": "Policy Issuance Time",
                                "header": "Policy Issuance Time"
                            },
                            {
                                "id": "policyPortabilityFAQ",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "https://www.irdai.gov.in/ADMINCMS/cms/Uploadedfiles/RTI_FAQ/Portability%20and%20migration%20facility08122021.pdf#:~:text=FAQs%20on%20Portability%20%3A%20What%20is%20portability%20under,gained%20for%20pre-existing%20conditions%20and%20time%20bound%20exclusions.",
                                        "icon": "",
                                        "shortData": "https://www.irdai.gov.in/ADMINCMS/cms/Uploadedfiles/RTI_FAQ/Portability%20and%20migration%20facility08122021.pdf#:~:text=FAQs%20on%20Portability%20%3A%20What%20is%20portability%20under,gained%20for%20pre-existing%20conditions%20and%20time%20bound%20exclusions."
                                    }
                                ],
                                "name": "Policy Portability FAQ Link",
                                "header": "FAQs on Portability of Health Insurance Policy"
                            },
                            {
                                "id": "policyTerm",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "1 Year, 2 Years, 3 Years",
                                        "icon": "",
                                        "shortData": "1,2,3 Years"
                                    }
                                ],
                                "name": "Policy Terms",
                                "header": "Policy terms allowed in the plan"
                            },
                            {
                                "id": "premiumPaymentFrequency",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Monthly, Quarterly, Half Yearly, Annual",
                                        "icon": "",
                                        "shortData": "Monthly, Quarterly, Half Yearly, Annual"
                                    }
                                ],
                                "name": "Premium Payment Frequency",
                                "header": "Frequency of premium payment allowed in the plan"
                            },
                            {
                                "id": "productFeaturesDesc",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Key features of the policy:\n 1. Multiple sum insured options ranging from Rs .3 Lacs to Rs .75 Lacs available under this policy. \n 2. Any age entry option with lifetime renewal \n 3. Exclusive covers like Air ambulance cover, Recovery benefit,Infertility cover \n 4. Wellness features like Fitness discount @ renewal, Health incentives for maintenance of health\n 5. Flexi benefits like choosing room rent capping, co pay in order to avail discounts on premium \n 6. Various discount options to like family discount, long term policy discount,loyalty discount \n 7. Long term policy options up to 3 years with attractive premium rate \n 8. Option to pay yearly premium in 3,6 and 12 equal installments ",
                                        "icon": "",
                                        "shortData": "Refer Product Brochure"
                                    }
                                ],
                                "name": "Product Features Description",
                                "header": "Product Features Description"
                            }
                        ]
                    },
                    {
                        "planId": "10008",
                        "icon": "",
                        "section": [
                            {
                                "id": "brochureLink",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "https://www.adityabirlacapital.com/healthinsurance/assets/PDF/20221007T083431.pdf",
                                        "icon": "",
                                        "shortData": "https://www.adityabirlacapital.com/healthinsurance/assets/PDF/20221007T083431.pdf"
                                    }
                                ],
                                "name": "Product Brochure",
                                "header": "Brochure link of the product"
                            },
                            {
                                "id": "maxAdultInsuredAllowed",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Max number of adults allowed is 2",
                                        "icon": "",
                                        "shortData": ""
                                    }
                                ],
                                "name": "Max No. of Adults allowed",
                                "header": "Max no of adults included in the policy"
                            },
                            {
                                "id": "maxChildInsuredAllowed",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Max number of childrens allowed is 3",
                                        "icon": "",
                                        "shortData": ""
                                    }
                                ],
                                "name": "Max No. of Child(ren) allowed",
                                "header": "Max nunber of Children allowed in the policy"
                            },
                            {
                                "id": "policyIssuanceTime",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Instant in case of STP. Within 15 days in case of medical cases.",
                                        "icon": "",
                                        "shortData": "15 Minutes for STP Cases"
                                    }
                                ],
                                "name": "Policy Issuance Time",
                                "header": "Policy Issuance Time"
                            },
                            {
                                "id": "policyPortabilityFAQ",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "https://www.irdai.gov.in/ADMINCMS/cms/Uploadedfiles/RTI_FAQ/Portability%20and%20migration%20facility08122021.pdf#:~:text=FAQs%20on%20Portability%20%3A%20What%20is%20portability%20under,gained%20for%20pre-existing%20conditions%20and%20time%20bound%20exclusions.",
                                        "icon": "",
                                        "shortData": "https://www.irdai.gov.in/ADMINCMS/cms/Uploadedfiles/RTI_FAQ/Portability%20and%20migration%20facility08122021.pdf#:~:text=FAQs%20on%20Portability%20%3A%20What%20is%20portability%20under,gained%20for%20pre-existing%20conditions%20and%20time%20bound%20exclusions."
                                    }
                                ],
                                "name": "Policy Portability FAQ Link",
                                "header": "FAQs on Portability of Health Insurance Policy"
                            },
                            {
                                "id": "policyTerm",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "1 Year, 2 Years, 3 Years",
                                        "icon": "",
                                        "shortData": "1,2,3 Years"
                                    }
                                ],
                                "name": "Policy Terms",
                                "header": "Policy terms allowed in the plan"
                            },
                            {
                                "id": "premiumPaymentFrequency",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Monthly, Quarterly, Half Yearly, Annual",
                                        "icon": "",
                                        "shortData": ""
                                    }
                                ],
                                "name": "Premium Payment Frequency",
                                "header": "Monthly, Quarterly, Half Yearly, Annual"
                            },
                            {
                                "id": "productFeaturesDesc",
                                "icon": "",
                                "info": [
                                    {
                                        "data": "Key features of the policy:\n 1. Multiple sum insured options ranging from Rs .3 Lacs to Rs .75 Lacs available under this policy. \n 2. Any age entry option with lifetime renewal \n 3. Exclusive covers like Air ambulance cover, Recovery benefit,Infertility cover \n 4. Wellness features like Fitness discount @ renewal, Health incentives for maintenance of health\n 5. Flexi benefits like choosing room rent capping, co pay in order to avail discounts on premium \n 6. Various discount options to like family discount, long term policy discount,loyalty discount \n 7. Long term policy options up to 3 years with attractive premium rate \n 8. Option to pay yearly premium in 3,6 and 12 equal installments ",
                                        "icon": "",
                                        "shortData": "Refer to Policy Brochure"
                                    }
                                ],
                                "name": "Product Features Description",
                                "header": "Product Features Description"
                            }
                        ]
                    }
                ]
            }
        ]
    };*/
  },
  data() {
    return {
      loading: false,
      isCoverfor: false,
      isRecommended: false,
      selectedPlans: "",
      comparePlanData: "",
      compareFilter: 0,
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
      sessionStorage.setItem(
        "selected_plan_data",
        JSON.stringify(selectedData)
      );
      this.$router.push("/addon-rider");
    },
    getCpmparePlan(qData) {
      //console.log('save quote called');
      var self = this;
      var headers = {};
      let qData2 = {"data": qData};
      self.loading = true;
      this.backendApi("getComparePlan", qData2, headers)
        .then((response) => {
          self.loading = false;
          if (response == 'error') {
            self.apiError = true;
          }
          else if (response.status == "error") {
            let msg = ['We are facing some issue while getting compare plan data']

            this.$router.push({ path: '/networkalert', query: { backUrl: 'multi-quote', msg: msg } });
          }
          else if (response && response.data) {

            console.log('compare response: ', response.data);
            this.comparePlanData = response.data.data;
           
          }
        })
        .catch((error) => {
          console.log('error msg block dp', error);
          let msg = ['We are facing some issue from backend while getting compare plan data ']
          this.$router.push({ path: '/networkalert', query: { backUrl: 'multi-quote', msg: msg } });
        });
    },
    filetrCompare(value) {
        this.compareFilter = value;
        console.log("filetrCompare called: ", this.compareFilter);
        if(this.compareFilter == 1) {
            $(".common-features").addClass("d-none");
            if ($(".high-diff").hasClass("my-text-red")) {
                $(".high-diff").removeClass("my-text-red");
            }
        } else if(this.compareFilter == 2) {
            if ($(".common-features").hasClass("d-none")) {
                $(".common-features").removeClass("d-none");
            }

            $(".high-diff").addClass("my-text-red");
        } else {
            $("#cpchk1").prop('checked', false);
            $("#cpchk2").prop('checked', false);
            if ($(".high-diff").hasClass("my-text-red")) {
                $(".high-diff").removeClass("my-text-red");
            }
            if ($(".common-features").hasClass("d-none")) {
                $(".common-features").removeClass("d-none");
            }
        }
    },
    getCompareClasses(dt, ind2) {
        console.log('dt: ', dt, 'ind2: ', ind2);
        console.log('section length: ', dt.section.length);

        if(dt.section.length == 2) { 
            if(dt?.section[0]?.section[ind2]?.info[0]?.shortData && dt?.section[1]?.section[ind2]?.info[0]?.shortData) {
                return "common-features";
            } else {
                return "high-diff";
            }
        } else {
            if(dt?.section[0]?.section[ind2]?.info[0]?.shortData && dt?.section[1]?.section[ind2]?.info[0]?.shortData && dt?.section[2]?.section[ind2]?.info[0]?.shortData) {
                return "common-features";
            } else {
                return "high-diff";
            }
        }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
