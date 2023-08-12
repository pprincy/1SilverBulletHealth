<template>
  <div class="wizard-cnt floating-form">
    <div class="step">
      <ul class="wizard threestep">
        <li cl :class="[this.currentTabIndex == 1 ? 'active' : '']">
          <!--:class="{ active: isActive, 'completed': iscompleted }"-->
          <div class="hold">
            <div class="check"></div>
            <span class="number">1</span>
          </div>
        </li>
        <li class="" :class="[this.currentTabIndex == 2 ? 'active' : '']">
          <div class="hold">
            <div class="check"></div>
            <span class="number">2</span>
          </div>
        </li>
        <li :class="[this.currentTabIndex == 3 ? 'active' : '']">
          <div class="hold">
            <div class="check"></div>
            <span class="number">3</span>
          </div>
        </li>
      </ul>
      <div class="progress">
        <div
          class="progress-bar bg-warning"
          role="progressbar"
          :style="[
            this.currentTabIndex == 2
              ? 'width : 50%'
              : this.currentTabIndex == 3
              ? 'width : 100%'
              : '',
          ]"
        ></div>
      </div>
    </div>

    <div class="wizard-body" v-if="currentTabIndex === 1">
      <div class="wrap">
        <div class="labeltxt mb-3">Select Your Requirement <span class="mandatory-mark">*</span></div>
        <div class="input-group input-type-radio mb-3">
          <ul class="three">
            <li class="" v-for="(item, ind) in this.requirements" :key="ind">
              <input
                type="radio"
                :disabled="rmDataFlag"
                :id="'plan' + item"
                :name="'plan' + item"
                v-model="userData.plan"
                @change="getFieldValidation('', 'plan', 'page1')"
                v-bind:value="item"
              />
              <label :for="'plan' + item">
                <span>{{ item }}</span>
              </label>
            </li>
            <!-- <li class="">
                      <input type="radio" id="rb4" name="plan" required v-model="userData.plan">
                      <label for="rb4">
                        <span>Top Up Plans</span>
                      </label>
                    </li> -->
            <!-- <li class="">
                      <input type="radio" id="rb5" name="plan" required v-model="userData.plan">
                      <label for="rb5">
                        <span>All Plans</span>
                      </label>
                    </li> -->
          </ul>
        </div>
        <p class="error-text" v-if="error.plan">
          {{ error.plan }}
        </p>

        <!-- <div class="mb-3">
          <div class="control-group d-flex">
            <label class="control control--radio flex-grow-1">
              <input type="radio" name="radio" checked="checked" />
              <span>Comprehensive Plans</span>
              <div class="control__indicator"></div>
            </label>
            <label class="control control--radio mx-3 flex-grow-1">
              <input type="radio" name="radio" />
              <span>Top Up Plans</span>
              <div class="control__indicator"></div>
            </label>
            <label class="control control--radio flex-grow-1">
              <input type="radio" name="radio" />
              <span>All Plans</span>
              <div class="control__indicator"></div>
            </label>
          </div>
        </div> -->
        <div class="labeltxt mb-3">What is your Gender <span class="mandatory-mark">*</span></div>
        <div class="input-group input-type-radio mb-3">
          <ul class="customicon mb-3">
            <li v-for="(item, ind) in this.genderList" :key="ind">
              <input
                type="radio"
                :disabled="rmDataFlag"
                :id="'gender' + item"
                :name="gender"
                @change="getFieldValidation('', 'gender', 'page1')"
                v-model="userData.gender"
                v-bind:value="item"
              />
              <label :for="'gender' + item">
                <em class="icon icon-male" v-if="item == 'Male'"></em>
                <em class="icon icon-female" v-if="item == 'Female'"></em>
                <span>{{ item }}</span>
              </label>
            </li>
            <!-- <li>
              <input type="radio" id="rb2" name="r" v-model="userData.gender" required>
              <label for="rb2">
                <em class="icon icon-female"></em>
                <span>Female</span>
              </label>
            </li> -->
          </ul>
          <p class="error-text" v-if="error.gender">
            {{ error.gender }}
          </p>
        </div>
        <!-- <div class="labeltxt mb-3">&nbsp;</div> -->
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="floating-label font-check">
              <input
                class="floating-input"
                type="text"
                placeholder=" "
                :disabled="rmDataFlag"
                v-model.trim="userData.zipCode"
                pattern="\d*"
                maxlength="6"
                minlength="6"
                @change="getFieldValidation('', 'zipCode', 'page1')"
                @keyup="callPincode($event)"
                @keypress="isNumber($event)"
              />
              <label>Enter your Pin Code <span class="mandatory-mark">*</span></label>
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
              <label>City <span class="mandatory-mark">*</span></label>
            </div>
            <p class="error-text" v-if="error.city">
              {{ error.city }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="wizard-body" v-if="currentTabIndex === 2">
      <div class="wrap">
        <div class="scroll-cnt">
          <div class="labeltxt mb-3">Whom do you want insurance for ?</div>
          <div v-for="(item, index) in userData.memberList" :key="index">
            <div class="row replica mb-4">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-5">
                <div class="floating-label mb-0" >
                  <select class="floating-select format" v-model="this.userData.memberList[index].member" @change="getFieldValidation(index, 'member', 'page2')" @click="getMember(index)">
                     <option value="" selected>Select</option>
                    <option
                       
                      :value="item1"
                      :disabled="checkSelectedMember(index,item1)"
                      v-for="(item1, ind) in memberOptions"
                      :key="ind">
                      {{ item1 }}
                    </option>
                  </select>
                  <label>Select Member <span class="mandatory-mark">*</span></label>
                </div>
                <p class="error-text" v-if="memberError.length > 0">
                  {{ memberError[index].member }}
                </p>

              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-2" >
                <div class="floating-label mb-0">
                  <select class="floating-input px-0"  
                   @change="getFieldValidation(index, 'age', 'page2')"
                    v-model="this.userData.memberList[index].age"
                    @keypress="isNumber($event)">
                  <option value="">Select</option>
                  <option :value="memberAge" v-for="(memberAge,ageIndex) in this.userData.memberList[index].member?this.age[this.userData.memberList[index].member]:this.defaultAge" :key="ageIndex">
                    <span v-if="memberAge=='0.92'">3 to 12 months</span>
                    <span v-else>{{memberAge}} Year</span>
                  </option>
                   </select>
                  <label>Age <span class="mandatory-mark">*</span></label>
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
                <div
                  class="check-cnt"
                  v-if="this.currentToggle==index && this.userData.memberList[index].isIllness && this.userData.toolTipList[index]"
                  v-click-outside="onClickOutside"
                >
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
            <div class="text-center my-3 cursor-pointer" @click="addMember(index)">
        <em class="cir me-2">+</em>
        <span class="base-med text-primary fs-14">Add More Member</span>
      </div>
        </div>
      </div>
    
    </div>
    <div class="wizard-body" v-if="currentTabIndex === 3">
      <div class="wrap">
        <div class="labeltxt mb-3">Your Income Bracket</div>
        <div class="input-group input-type-radio mb-3">
          <ul class="customradio">
            <li
              class=""
              v-for="(item, index) in this.incomebracket"
              :key="index"
            >
              <input
                type="radio"
                :id="'income' + item"
                :name="income"
                v-model="userData.income"
                v-bind:value="item"
              />
              <label :for="'income' + item">
                <span>{{ item }}</span>
              </label>
            </li>
            <!-- <li>
              <input type="radio" id="rb2" name="r" required v-model="userData.income">
              <label for="rb2">
                <span>2.5 L - 5 L</span>
              </label>
            </li> -->
            <!-- <li>
              <input type="radio" id="rb3" name="r" required v-model="userData.income">
              <label for="rb3">
                <span>5 L - 10 L</span>
              </label>
            </li> -->
            <!-- <li>
              <input type="radio" id="rb4" name="r" required v-model="userData.income">
              <label for="rb4">
                <span> > 10 L  </span>
              </label>
            </li> -->
          </ul>
        </div>
        <p class="error-text" v-if="error.income">{{ error.income }}</p>
        <div class="labeltxt mb-3">Your Contact Details</div>
        <div class="row Details">
          <div
            class="
              col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4
              mb-3
            "
          >
            <div class="floating-label">
              <input
                class="floating-input"
                type="text"
                placeholder=" "
                v-model.trim="userData.contactDetails.firstName"
                pattern="[A-Za-z]"
                 minlength="2"
                maxlength="20"
                @change="getFieldValidation('', 'firstName', 'page3')"
                @keypress="lettersSpaceOnly($event)"
              />
              <label>First Name <span class="mandatory-mark">*</span></label>
            </div>
            <p class="error-text" v-if="error.firstName">
              {{ error.firstName }}
            </p>
          </div>
          <div
            class="
              col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4
              mb-3
            "
          >
            <div class="floating-label">
              <input
                class="floating-input"
                type="text"
                maxlength="20"
                minlength="2"
                placeholder=" "
                v-model="userData.contactDetails.middleName"
                @change="getFieldValidation('', 'middleName', 'page3')"
                @keypress="lettersSpaceOnly($event)"
              />
              <label>Middle Name</label>
            </div>
            <p class="error-text" v-if="error.middleName">
              {{ error.middleName }}
            </p>
          </div>
          <div
            class="
              col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4
              mb-3
            "
          >
            <div class="floating-label">
              <input
                class="floating-input"
                type="text"
                placeholder=" "
                v-model.trim="userData.contactDetails.lastName"
                pattern="[A-Za-z]"
                maxlength="20"
                minlength="2"
                @change="getFieldValidation('', 'lastName', 'page3')"
                @keypress="lettersSpaceOnly($event)"
              />
              <label>Last Name <span class="mandatory-mark">*</span></label>
            </div>
            <p class="error-text" v-if="error.lastName">{{ error.lastName }}</p>
          </div>
          <div
            class="
              col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6
              mb-3
            "
          >
            <div class="floating-label">
              <input
                class="floating-input"
                type="text"
                placeholder=" "
                v-model="userData.contactDetails.mobileNumber"
                maxlength="10"
                @keypress="isNumber($event)"
                @change="getFieldValidation('', 'mobileNumber', 'page3')"
              />
              <label>Mobile No. <span class="mandatory-mark">*</span></label>
            </div>
          
            <p class="error-text" v-if="error.mobileNumber">{{ error.mobileNumber  }}</p>
            
          </div>
          <div
            class="
              col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6
              mb-3
            "
          >
            <div class="floating-label">
              <input
                class="floating-input"
                type="text"
                placeholder=" "
                v-model.trim="userData.contactDetails.emailId"
                pattern="[A-Za-z]"
                 @change="getFieldValidation('', 'emailId', 'page3')"
              />
              <label>Email ID <span class="mandatory-mark">*</span></label>
            </div>
            <p class="error-text" v-if="error.emailId">{{ error.emailId }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="step-foot">
      <div class="step-btn">
        <button
          type="button"
          class="btn btn-outline-secondary rounded-pill btn-block mx-2"
          v-if="this.currentTabIndex > 1"
          v-on:click="previousClick()"
        >
          <em class="bi bi-chevron-left me-2"></em>
          <span>Back</span>
        </button>

        <button
          type="button"
          class="btn btn-primary rounded-pill btn-block mx-2"
          v-on:click="nextClick()"
          v-if="this.currentTabIndex < 3 && this.rmData"
        >
          <span class="">Next</span>
          <em class="bi bi-chevron-right ms-2"></em>
        </button>
        <!-- <button type="button" class="btn btn-warning rounded-pill btn-block mx-2 text-white"
          v-if="this.currentTabIndex == 3">
          <span>Get Quote</span> 
          <em class="bi bi-chevron-right ms-2"></em></button> -->
        <button
          class="btn btn-warning rounded-pill btn-block mx-2 text-white"
          v-on:click="nextClick()"
          v-if="this.currentTabIndex == 3"
        >
          <span>Get Quote</span>
          <em class="bi bi-chevron-right ms-2"></em>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import vueCustomScrollbar from "vue-custom-scrollbar";
import "vue-custom-scrollbar/dist/vueScrollbar.css";
import vClickOutside from "click-outside-vue3";
import { getDiseaseCount, getLandingPageConfig, getConsumer ,getage} from "@/mixins/common";
// import { Session } from 'inspector';
import $ from "jquery";

export default {
  name: "wizard-comp",
  // mixins: [getDiseaseCount, getLandingPageConfig],
  components: {
    vueCustomScrollbar,
  },

  data() {
    return {
      defaultAge:[],
      configData: "",
      currentToggle:null,
      rmDataFlag:false,
      rmData:"",
       errormsg: null,
       errorMob:null,
      currentTabIndex: 1,
      isActive: true,
      activeTooltip: false,
      iscompleted: false,
      isIlliness1: false,
      isIlliness2: false,
      isIlliness3: false,
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false,
      },
      toolTip:[false],
      ttdata:[[]],
      stdata:"",
      userData: {
        plan: null,
        gender: null,
        zipCode: null,
        city: null,
        state:null,
         age:null,
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
        selectedOption :null,
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
        selectedMember:[]
      },
      error: {
        gender:null,
        plan:null,
        zipCode:null,
        city:null,
        firstName:null,
        middleName:null,
        lastName:null,
        mobileNumber:null,
        emailId:null,

      },
      memberData:[''],
      memberError: [],
      singleSelectedMember:[]
    };
    
  },
  mounted() {
    this.configData = this.$store.state.configData;  
    // calling API for configration data
    //this.getConfigData();
    
    this.error = [];
    this.age = getage();
    this.landingPageDetails = getLandingPageConfig();
    this.requirements = getLandingPageConfig()["requirementPlan"];
    this.genderList = getLandingPageConfig()["genderList"];
    this.incomebracket = getLandingPageConfig()["incomeBrackets"];
    this.memberOptions = getLandingPageConfig()["memberOptions"];
    this.singleSelectedMember = getLandingPageConfig()["singleSelectMember"]
    this.preExistingDisease = getLandingPageConfig()["preExistingDiseaseOptions"];
     if (sessionStorage.getItem("rm_data")) {
      this.rmData = JSON.parse(sessionStorage.getItem("rm_data"))
       let sessionData=sessionStorage.getItem("userProfile")
        if(sessionData!=null)
        {
        this.userData=JSON.parse(sessionData)
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
    
    
    
    for(let i=0;i<this.userData.memberList.length;i++)
    {
      let jsonError={
          member: "",
          age: "",
        }
      this.memberError.push(jsonError)
    }
    
    
    
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    
    checkSelectedMember(index,item)
    {
      
      
          if(this.memberData.indexOf(item)!=-1 && this.singleSelectedMember.indexOf(item)!=-1  )
          return true;
          else
          return false
     },
     getMember(index)
     {      
      if(this.userData.memberList[index].member.length!=0)
      
        this.memberData.splice(index,1,this.userData.memberList[index].member)
        this.userData.selectedMember=this.memberData
        this.selectedOption = this.userData.selectedMember[index]
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
    deleteMember(index) {
      this.userData.memberList.splice(index, 1);
      this.userData.toolTipList.splice(index,1)
      this.toolTip.splice(index,1)
      this.userData.tooltipData.splice(index,1)
      this.memberError.splice(index,1)
       this.memberData.splice(index,1)
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
    previousClick() {
      if (this.currentTabIndex > 1) {
        this.currentTabIndex -= 1;
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
    getFieldValidation(index='',key,page)
    {
       if(page=="page1")
       {
       
          if(key=="gender")
          {
            if(!this.userData.gender)
            this.error["gender"] = "Select Your Gender";
            else
            this.error["gender"] = "";
          }
          else if(key=="plan")
          {
            if(!this.userData.plan)
            this.error["plan"] = "Select Your Requirement";
            else
            this.error["plan"] = "";
          }
          else if(key=="zipCode")
          {
            if(!this.userData.zipCode)
            this.error["zipCode"] = "Please Enter Pin Code";
            else if(!this.error["zipCode"])
            this.error["zipCode"] = "";
            
          }
        }
        else if(page=="page2")
       {
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
          
       }
       else if(page=="page3")
       {
          
          if(key=="firstName")
          {
            if(!this.userData.contactDetails.firstName)
            this.error["firstName"] = "Please enter your first name";
            else if(this.userData.contactDetails.firstName.trim().length < 2){
            this.error["firstName"] = "Please Enter Valid Name";
            }
            else
            this.error["firstName"] ="";
          }
           if(key=="middleName")
          {
            // if(!this.userData.contactDetails.middleName)
            // this.error["middleName"] = "Please enter your middle name";
            if(this.userData.contactDetails.middleName && this.userData.contactDetails.middleName.trim().length < 2){
            this.error["middleName"] = "Please Enter Valid Name";
            }
            else
            this.error["middleName"] ="";
          }
          
          else if(key=="lastName")
          {
            if(!this.userData.contactDetails.lastName)
            this.error["lastName"] = "Please enter your last name";
            else if(this.userData.contactDetails.lastName.trim().length < 2){
            this.error["lastName"] = "Please Enter Valid Name";
            }
            else
            this.error["lastName"] = "";
          }
          else if(key=="mobileNumber")
          {
              var MOB = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if(!this.userData.contactDetails.mobileNumber)
            this.error["mobileNumber"] = "Please enter your mobile number";
            else if(this.userData.contactDetails.mobileNumber){
              let checkmobileNumber= this.userData.contactDetails.mobileNumber.match(MOB)
              if(checkmobileNumber==null)
              this.error["mobileNumber"] ="Please enter valid mobile number";
              else
               this.error["mobileNumber"] = "";
            }
            else
            this.error["mobileNumber"] = "";
            
          }
           else if(key=="emailId")
          {
            const EMAIL = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
            
            if(!this.userData.contactDetails.emailId)
            this.error["emailId"] = "Please enter your email id";
            else if(this.userData.contactDetails.emailId)
            {
             let checkEmail=this.userData.contactDetails.emailId.match(EMAIL)
             if(checkEmail==null)
             this.error["emailId"] = "Please enter valid email id"
             else
            this.error["emailId"] = "";
            }
            else
            this.error["emailId"] = "";
            
          }
        
       }
        
       
    },
    getValidate(page)
    {
       if(page=="page1")
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
          else if(key=="plan")
          {
            if(!this.userData.plan)
            this.error["plan"] = "Select Your Requirement";
            else
            this.error["plan"] = "";
          }
          else if(key=="zipCode")
          {
            if(!this.userData.zipCode)
            this.error["zipCode"] = "Please Enter Pin Code";
            else if(!this.error["zipCode"])
            this.error["zipCode"] = "";
            
          }
        }
        if(this.error["gender"]=="" && this.error["plan"]=="" && this.error["zipCode"]=="")
        return true
        else
        return false
       }
       else if(page=="page2")
       {
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
             if(element.member==='Father-in-law')
             {
                self_data['Father-in-law']=element.age
             }  
             if(element.member==='Mother-in-law')
             {
                self_data['Mother-in-law']=element.age
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
              if(this.userData.memberList[i].member == 'Father' && this.userData.memberList[i].age < 18 )
              {
                this.memberError[i].age = "Please select  Father age greater than 18";
              }
              else if(this.userData.memberList[i].member == 'Mother' && this.userData.memberList[i].age < 18 )
              {
                this.memberError[i].age = "Please select Mother age greater than 18";
              }
               if(this.userData.memberList[i].member == 'Father' && this.userData.memberList[i].age < 18 )
              {
                this.memberError[i].age = "Please select  Father age greater than 18";
              }
              else if(this.userData.memberList[i].member == 'Mother' && this.userData.memberList[i].age < 18 )
              {
                this.memberError[i].age = "Please select Mother age greater than 18";
              }
               if(this.userData.memberList[i].member == 'Father-in-law' && this.userData.memberList[i].age < 18 )
              {
                this.memberError[i].age = "Please select  Father-in-law age greater than 18";
              }
              else if(this.userData.memberList[i].member == 'Mother-in-law' && this.userData.memberList[i].age < 18 )
              {
                this.memberError[i].age = "Please select Mother-in-law age greater than 18";
              }

              if(this.userData.memberList[i].member == 'Father-in-law' || this.userData.memberList[i].member == 'Mother-in-law' && self_data.hasOwnProperty('Spouse'))
              {
              if ( this.userData.memberList[i].age - self_data['Spouse'] < 18)
                {
                    this.memberError[i].age = "Age Difference of spouse and "+this.userData.memberList[i].member+" should be greater than 18"; 
                }
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
       else if(page=="page3")
       {
          for(let key in this.userData.contactDetails)
        {
          if(key=="firstName")
          {
            if(!this.userData.contactDetails.firstName)
            this.error["firstName"] = "Please enter your first name";
            else if(this.userData.contactDetails.firstName.trim().length < 2){
            this.error["firstName"] = "Please Enter Valid Name";
            }
            else
            this.error["firstName"] = "";
          }

          if(key=="middleName")
          {
            // if(!this.userData.contactDetails.middleName)
            // this.error["middleName"] = "Please enter your middle name";
            if(this.userData.contactDetails.middleName && this.userData.contactDetails.middleName.trim().length < 2){
            this.error["middleName"] = "Please Enter Valid Name";
            }
            else
            this.error["middleName"] ="";
          }

          else if(key=="lastName")
          {
            if(!this.userData.contactDetails.lastName)
            this.error["lastName"] = "Please enter your last name";
             else if(this.userData.contactDetails.lastName.trim().length < 2){
            this.error["lastName"] = "Please Enter Valid Name";
            }
            else
            this.error["lastName"] = "";
          }
          else if(key=="mobileNumber")
          {
              var MOB = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if(!this.userData.contactDetails.mobileNumber)
            this.error["mobileNumber"] = "Please enter your mobile number";
            else if(this.userData.contactDetails.mobileNumber){
              let checkmobileNumber= this.userData.contactDetails.mobileNumber.match(MOB)
              if(checkmobileNumber==null)
              this.error["mobileNumber"] ="Please enter valid mobile number";
              else
               this.error["mobileNumber"] = "";
            }
            else
            this.error["mobileNumber"] = "";

            
          }
           else if(key=="emailId")
          {
            const EMAIL = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
            
            if(!this.userData.contactDetails.emailId)
            this.error["emailId"] = "Please enter your email id";
            else if(this.userData.contactDetails.emailId)
            {
             let checkEmail=this.userData.contactDetails.emailId.match(EMAIL)
             if(checkEmail==null)
             this.error["emailId"] = "Please enter valid email id"
             else
            this.error["emailId"] = "";
            }
            else
            this.error["emailId"] = "";
            
          }
        }
        
       
        if(this.error["firstName"]=="" && (this.userData.contactDetails.middleName?this.error["middleName"]=="":true) && this.error["lastName"]=="" && this.error["mobileNumber"]=="" && this.error["emailId"]=="")
        return true
        else
        return false
       }
    },
    nextClick() {
      
      if (this.currentTabIndex == 1) {
        if(this.getValidate("page1"))
        {
          localStorage.setItem("userProfile",JSON.stringify(this.userData));
          sessionStorage.setItem("userProfile", JSON.stringify(this.userData));
          this.currentTabIndex += 1;
        }  
      } else if (this.currentTabIndex == 2) {
       if(this.getValidate("page2"))
       {
          localStorage.setItem("userProfile",JSON.stringify(this.userData));
          sessionStorage.setItem("userProfile", JSON.stringify(this.userData));
          this.currentTabIndex += 1;
       }
      } else if (this.currentTabIndex == 3) {
        if(this.getValidate("page3"))
       {
           localStorage.setItem("userProfile",JSON.stringify(this.userData));
           sessionStorage.setItem("userProfile", JSON.stringify(this.userData));
            this.$router.push("/multi-quote");
       }
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
    onClickOutside(event) {
      // this.userData.memberList[index].isIllness
    },
    scrollHanle(evt) {
      console.log(evt);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
.floating-form .floating-input , .font-check {
  font-family: 'Open Sans', sans-serif!important;
}
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
</style>
