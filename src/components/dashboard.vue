<template>
    <!-- <div class="loading_block_outer" v-if="loading">
      <Loading />
    </div> -->
    <!-- <div class="text-center" v-if="loading" style="padding-top: 50px;">
    Loading..

  </div> -->
  
  <div class="">
  
    <Header />
    <div class="wrapper">
      <div class="col-3" v-if="loading">
    <div class="snippet" data-title=".dot-spin">
      <div class="stage">
        <div class="dot-spin"></div>
      </div>
    </div>
  </div>
   
    <!-- desktop version starts here -->
    <div class="dashbrd-wrap">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h5>Dashboard</h5>
          <!-- <router-link to="/policy-quote">
            <img src="~@/assets/images/back-btn.png" alt="" />
            Back
          </router-link> -->
          <a @click="goBack()" class="cursor-pointer">
            <img src="~@/assets/images/back-btn.png" alt="" />
            Back
          </a>
        </div>
  
        <!-- <span class="svg-icon svg-icon-1 position-absolute ms-6">
                <inline-svg src="@assets/images/search.svg" />
              </span> -->
        <div class="d-flex justify-content-between floating-form">
          <div class="form-control1 label-clicked floating-label">
            <input
              class="form-control form-control-solid w-250px ps-15 floating-input"
              type="text"
              v-model.trim="searchQuery"
              v-on:input="resultQuery()"
              placeholder="Search"
              style="width: 200px"
            />
            <label class="form-item-label" style=" font-weight: bold;">Search here</label>
          </div>
  
          <div class="d-flex floating-form">
            <div class="form-control1 label-clicked floating-label">
              <select
                class="form-control form-control-solid floating-input"
                style="width: 200px"
                v-model="fltr"
              >
                <option disabled value="">Select filter</option>
                <option>Proposal No.</option>
                <option>Customer Name</option>
                <option>Insurance Company</option>
                <option>Mobile No.</option></select
              ><label class="form-item-label" style="font-weight: bold;">Custom Search</label>
            </div>
            <!-- <div v-if="selected != null"> -->
              <div class="form-control1 label-clicked floating-label">
                <input
                  class="form-control form-control-solid floating-input"
                  v-model="filterText"       
                  style="width: 200px"         
                /><label class="form-item-label" style="font-weight: bold;">Enter Filter Text</label>
              </div>
            <!-- </div> -->
            <div class="form-control1 label-clicked floating-label">
              <input
                class="form-control floating-input"
                style="width: 200px"
                type="date"
                id="startDate"
                name="startDate"
                v-model="startDate"
              />
              <label for="startDate" class="form-item-label" style="font-weight: bold;" >Start Date</label>
            </div>
            <div class="form-control1 label-clicked floating-label">
              <input
                class="form-control floating-input"
                style="width: 200px"
                type="date"
                id="startDate"
                name="startDate"
                v-model="endDate"
              />
              <label for="endDate" class="form-item-label" style="font-weight: bold;">End Date</label>
            </div>
              <button
                type="button"
                class="btn btn-default"
                v-on:click="filter()"
                >
                <i><img src="~@/assets/images/icons8-funnel-20.png" /></i>
              </button>
              <div>
                <button
                type="button"
                class="btn btn-default"
                v-on:click="reset()"
              >
              <span>Reset</span>
              </button></div>
          </div>
          
        </div>
        <div class="d-flex justify-content-center">
            <span id="errorList">{{this.errorList}}</span>
          </div>
        <table class="table dashbrd-table">
          <thead>
            <tr>
              <th></th>
              <th 
                v-on:click="sorting('ui_quote_id')"
                style="cursor: pointer"
                id="dahboard-proposal-no"
              >
                Proposal <br>Number <img src="~@/assets/images/icons8-sort-10.png" />
              </th>
              <th 
                v-on:click="sorting('proposal_id')"
                style="cursor: pointer"
                id="dahboard-proposal-no"
              >
                Application <br>Number <img src="~@/assets/images/icons8-sort-10.png" />
              </th>
              <th v-on:click="sorting('name')" style="cursor: pointer">
                Customer <br>Name <img src="~@/assets/images/icons8-sort-10.png" />
              </th>
              <th v-on:click="sorting('name')" style="cursor: pointer">
                Line of <br>Business <img src="~@/assets/images/icons8-sort-10.png" />
              </th> 
            
              <th
                v-on:click="sorting('insurance_company_code')"
                style="cursor: pointer"
              >
                Insurance <br>Company <img src="~@/assets/images/icons8-sort-10.png" />
              </th>
              <th v-on:click="sorting('mobile_number')" style="cursor: pointer">
                      Mobile <br>Number <img src="~@/assets/images/icons8-sort-10.png" />
                      </th>
              <th v-on:click="sorting('created_at')" style="cursor: pointer">
                Proposal <br>Initiate Date <img src="~@/assets/images/icons8-sort-10.png" />
              </th>
              <th v-on:click="sorting('total_premium')" style="cursor: pointer">
                Premium<br> (₹) <img src="~@/assets/images/icons8-sort-10.png" />
              </th>
              <th
                v-on:click="sorting('transaction_date')"
                style="cursor: pointer"
              >
                Payment <br>Date <img src="~@/assets/images/icons8-sort-10.png" />
              </th>
              <th v-on:click="sorting('value')" style="cursor: pointer">
                Proposal <br>Status <img src="~@/assets/images/icons8-sort-10.png" />
              </th>
              <th style="cursor: pointer">
                Actions <br> <img src="~@/assets/images/icons8-sort-10.png" />
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(user,index) in sorted" :key="user.proposal_ui_id">
              <tr
                
                class="accordion-toggle content-row-inner"
              >
                <!--td>{{ index }}</td-->
                <td>
                  <!-- <div class="d-inline-block ml-1">
                    <button
                    data-toggle="collapse" 
                    :data-target="`#demo${user.proposal_ui_id}`"
                      class=""
                      type="button"
                      v-on:click="getRequirements(user, index)"
                    > -->
                      <img
                      class="" 
                      data-bs-toggle="collapse" 
                      :data-bs-target="`#demo${user.proposal_ui_id}`" 
                      v-on:click="getRequirements(user, index)"
                      src="~@/assets/images/plus-icon.png" alt="" />
                    <!-- </button>
                  </div> -->
                </td>
                <td>{{ user.ui_quote_id }}</td>
                <td>{{ user.proposal_manu_id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.line_of_business }}</td>
                <td>{{ user.insurance_company_code }}</td>
                <td>{{ user.mobile_number }}</td>
                <td>{{ this.changeDateFormat(user.created_at) }}</td>
                <td style="text-align: right">{{ user.total_premium }}</td>
                <td>{{ this.changeDateFormat(user.transaction_date) }}</td>
                <td>
                  <span
                    v-if="user.value == 'Proposal Application Pending'||user.value == 'Proposal Modification Requested'||user.value == 'Awaiting Client Approval'||user.value == 'Proposal Error'"
                    class="clr-green cursor-pointer"
                    @click="resumeProposalJourney(user.proposal_ui_id,user.value)"
                  >
                    {{ user.value }}
                  </span>
                  <span v-else class="clr-green">
                    {{ user.value }}
                  </span>
                </td>
                <td>
  
                <div class="col-width d-flex justify-content-between align-items-center">
                  <button v-if="retriggerPaymentEnable(user)" type="button" class="btn btn-primary" data-toggle="modal" title="Resend payment link to customer" v-on:click="this.retriggerPayment(user)">
                      <img src="~@/assets/images/currency_rupee.png" class="col-width d-flex justify-content-center align-items-center" alt="" title="Resend payment link to customer" />
                  </button>
                </div>
                </td>
                <td>
                  <div 
                    title="Upload Customer's Document"
                     class="d-inline-block ml-1">
                    <button v-if="enableUploadDoc(user)" @click="docuploadlink(user)">
                      <img 
                        src="~@/assets/images/eye.png" alt="" />
                      </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="13" class="hiddenRow p-0">
                  <div
                    class="accordian-body collapse"
                    :id="`demo${user.proposal_ui_id}`"
                  >
                    <table v-if="index==childStatus" class="table mb-0">
                      <thead>
                        <tr class="inner-table-header">
                          <th>Application Number</th>
                          <th>Category</th>
                          <th>Status</th>
                          <th>Description</th>
                          <th>Request Date</th>
                          <th>Exam Date</th>
                          <th>Received Date</th>
                        </tr>
                      </thead>
                      <tbody>  
                      <!-- <template
                          v-for="(data, index) in requirements"
                          :key="index"
                        > -->
                          <template
                            v-for="item in requirements"
                            :key="item.proposal_ui_id"
                          >
                          <!-- v-if="user.proposal_ui_id === item.proposal_ui_id" -->
                            <tr
                              
                              class="accordion-toggle inner-table-content"
                            >
                              <td>{{ item.applicationNumber}}</td>
                              <td>{{ item.category }}</td>
                              <td>{{ item.insurance_company_status }}</td>
                              <td>{{ item.description }}</td>
                              <td>{{ item.request_date }}</td>
                              <td>{{ item.exam_date }}</td>
                              <td>{{ item.received_date }}</td>
                            </tr>
                          </template>
                        <!-- </template> -->
                        <!-- </td>
                          </tr> -->
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
        <!-- <div class="d-flex justify-content-center">
            <span id="errorList"> {{this.errorList[0]}}</span>
          </div> -->
        <div class="d-flex justify-content-between">
          <div class="p-2">
            
            Displaying {{ startRange }} to {{ enditems }} items from
            {{ totalRecords }}
          </div>
          
          <div class="ml-auto p-2">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" style="cursor: pointer">
                  <span :disabled="this.prevDisabled" v-on:click="firstPage()"
                    >&laquo;</span
                  >
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" style="cursor: pointer">
                  <span :disabled="this.nextDisabled" v-on:click="previous()"
                    >&lsaquo;</span
                  >
                </a>
              </li>
              <li class="page-item">
                <a class="page-link">Page</a>
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                >{{displayPage}}</a>
              </li>
              <li class="page-item">
                <a class="page-link">of {{ totalPages }}</a>
              </li>
              <li class="page-item">
                <a class="page-link" style="cursor: pointer">
                  <span :disabled="this.nextDisabled" v-on:click="next()"
                    >&rsaquo;</span
                  >
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" style="cursor: pointer">
                  <span :disabled="this.nextDisabled" v-on:click="lastPage()"
                    >&raquo;</span
                  >
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- desktop version ends here -->
    <!-- mobile version starts here -->
    <div class="dashboard-mobile-version">
       <div>
           <a @click="goBack()" class="cursor-pointer justify-content-right">
            <img src="~@/assets/images/back-btn.png" alt="" />
            Back
             </a>
          <h5 class="d-flex justify-content-center">Dashboard</h5>
       </div>
         <div class="dashboard-header">
          <div class="form-1">
            <div class="form-control1 label-clicked">
              <div>
              <select
                class="form-control form-control-solid"
                style="width: 130px"
                v-model="fltr"
              >
                <option disabled value="">Select filter</option>
                <option>Proposal No.</option>
                <option>Customer Name</option>
                <option>Insurance Company</option>
                <option>Mobile No.</option></select
              ><label class="form-item-label Custom-label" style="font-weight: bold;">Custom Search</label>
            </div><br>
            <!-- <div v-if="selected != null"> -->
              <div class="form-control1 label-clicked">
                <input
                  class="form-control form-control-solid "
                  v-model="filterText"       
                  style="width: 130px"       
                /><label class="form-item-label filter-label" style="font-weight: bold;">Enter Filter Text</label>
              </div>
            <!-- </div> -->
            </div>
          </div>
          <div class="form-2">
            <div class="form-control1 label-clicked click-date">
              <div>
                <input
                class="form-control"
                style="width: 140px"
                type="date"
                id="startDate"
                name="startDate"
                v-model="startDate"
              />
              <label for="startDate" class="form-item-label start-date-label" style="font-weight: bold;">Start Date</label><br>
            </div>
            <div class="form-control1 label-clicked">
              <input
                class="form-control"
                style="width: 140px"
                type="date"
                id="startDate"
                name="startDate"
                v-model="endDate"
              />
              <label for="endDate" class="form-item-label end-date-label" style="font-weight: bold;">End Date</label>
            </div>
            </div>
          </div>
         <div>
          <div class="filter-reset">
          <div>
              <button
                type="button"
                class="btn btn-default"
                v-on:click="filter()"
              >
                <i><img src="~@/assets/images/icons8-funnel-20.png" /></i>
              </button>
              </div>
              <br>
              <div>
                <button
                type="button"
                class="btn btn-default"
                v-on:click="reset()"
              >
              <span>Reset</span>
              </button></div>
  
          </div>
          
        </div>
   
         </div>
         <div class="form-control1 label-clicked Search-label">
            <input
              class="form-control form-control-solid w-250px ps-15"
              type="text"
              v-model.trim="searchQuery"
              v-on:input="resultQuery()"
              placeholder="Search"
              style="width: 200px"
            />
            <label class="form-item-label" style="font-weight: bold;">Search here</label>
          </div>
  
          <div v-for="user in proposal" :key="user.proposal_ui_id">
          <div class="content-holder">
            
                   <div class="col-width">
                     <div class="col-content">
                      <h6>Proposal No.</h6>
                      <b>{{ user.ui_quote_id }}</b>
                  </div>
                     <div class="col-content">
                      <h6>Customer Name</h6>
                      <b>{{ user.name }}</b>
                  </div>
                 <div class="col-content">
                      <h6>Insurance Company</h6>
                      <b>{{ user.insurance_company_code }}</b>
                  </div>
                  <div class="col-content">
                      <h6>Mobile Number</h6>
                      <b>{{ user.mobile_number }}</b>
                  </div>
                   </div>
                  <div class="col-width">
                  <div class="col-content">
                      <h6>Purchase Date</h6>
                      <b>{{ this.changeDateFormat(user.created_at) }}</b>
                  </div>
                  <div class="col-content">
                      <h6>Premium (&#8377;)</h6>
                      <b>{{ user.total_premium }}</b>
                  </div>   
                  <div class="col-content">
                      <h6>Payment Date</h6>
                      <b>{{ this.changeDateFormat(user.transaction_date) }}</b>
                  </div>
                  <div class="col-content">
                      <h6>Propsal Status</h6>
                   <span
                    v-if="user.value == 'Proposal Application Pending'||user.value == 'Proposal Modification Requested'"
                    class="clr-green cursor-pointer"
                    @click="resumeProposalJourney(user.proposal_ui_id)"
                  >
                    {{ user.value }}
                  </span>
                  <span v-else class="clr-green">
                    {{ user.value }}
                  </span>
                  </div>
                  <div class="col-content">
                  <h6>Actions</h6>
                  <div class="col-width d-flex justify-content-between align-items-center">
                    <button v-if="retriggerPaymentEnable(user)" type="button" class="btn btn-primary" data-toggle="modal" v-on:click="this.retriggerPayment(user)" title="Resend payment link to customer">
                        <img src="~@/assets/images/currency_rupee.png" class="col-width d-flex justify-content-center align-items-center" alt="" title="Resend payment link to customer" />
                    </button>
                  </div>
                  </div>
                </div>
              <div class="col-width d-flex justify-content-between align-items-center">
               <button v-if="enableUploadDoc(user)" type="button" class="btn btn-primary" data-toggle="modal" v-on:click="getRequirements(user.proposal_ui_id, index)">
                   <img src="~@/assets/images/eye.png" alt="" />
                </button>
              </div>
            </div>     
              </div>
               <div>
          <div class="d-flex justify-content-center">
          
            Displaying {{ startRange }} to {{ enditems }} items from
            {{ totalRecords }}
          
          </div>
          <!-- <div class="d-flex justify-content-center">
            <span id="errorList"> {{this.errorList[0]}}</span>
          </div> -->
           <div class="d-flex justify-content-center">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" style="cursor: pointer">
                  <span :disabled="this.prevDisabled" v-on:click="firstPage()"
                    >&laquo;</span
                  >
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" style="cursor: pointer">
                  <span :disabled="this.nextDisabled" v-on:click="previous()"
                    >&lsaquo;</span
                  >
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" >Page</a>
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                >{{displayPage}}</a>
              </li>
              <li class="page-item">
                <a class="page-link">of {{ totalPages }}</a>
              </li>
              <li class="page-item">
                <a class="page-link" style="cursor: pointer">
                  <span :disabled="this.nextDisabled" v-on:click="next()"
                    >&rsaquo;</span
                  >
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" style="cursor: pointer">
                  <span :disabled="this.nextDisabled" v-on:click="lastPage()"
                    >&raquo;</span
                  >
                </a>
              </li>
            </ul>
          </div>
      </div>
    </div>
    </div>
    </div>
         
     
    <!-- mobile version ends here -->
  </template>
  
  
  <script>
  import axios from "axios";
  import Header from "@/components/Header.vue";
  //import { getDistributer } from '@/mixins/common';
  import Loading from "@/components/loading.vue";
  export default {
    name: "dashboard",
    props: {
      msg: String,
    },
    mixins: [],
    components: {
         Header,Loading
    },
    
    mounted() {
      this.configData = this.$store.state.configData; 
      this.distributorID = this.configData["DISTRIBUTER"]["distributerID"];
      this.loading = true;
      let rmData = JSON.parse(localStorage.getItem("rm_data"));
      this.selectedPlan=JSON.parse(sessionStorage.getItem("selected_plan_data"));
      this.formInfo=JSON.parse(sessionStorage.getItem("filledData"));
      console.log("filled details-", this.formInfo);
      console.log("selected_plan_data",this.selectedPlan);
      this.rmCode = rmData.Userid;
      
      this.getdashboardData();
    },
    data() {
      return {
        startRange: 0,
        distributorID: "",
        enditems: 50,
        sortBy: "",
        selectedPlan:[],
        formInfo:[],
        sortDirection: "asc",
        reverse: false,
        searchQuery: "",
        filterText: "",
        hover:{},
        fltr: "",
        selected: "",
        filterColumn: {
          "Proposal No.": "ui_quote_id",
          "Customer Name": "name",
          "Mobile No.": "mobile_number",
          "Insurance Company": "insurance_company_code",
        },
        startDate: "",
        endDate: "",
        totalPages: 0,
        requirements: [],
        proposal: [],
        formInfo: {},
        //   searchProposal:[],
        proposalNumber: "",
        rmCode: "",
        pageNumber: 0,
        pageSize: 50,
        pageSizeArray: [10, 20, 50],
        displayPage: 1,
        nextDisabled: false,
        prevDisabled: true,
        totalRecords: 0,
        loading: false,
        initCust: [],
        // Resume related
        proposalUiId: "",
        uiQuoteId: "",
        proposalDetails: "",
        quoteDetails: "",
        quoteResponseDetails: "",
        status: [],
        flag: false,
        childStatus:"",
        errorList:"",
        errorListTop:[],
        configData: "",
        
      };
    },
    methods: {
      // gtpageNumber() {
      //   if (this.goToPageNumber >= 1) {
      //     this.pageNumber = this.goToPageNumber - 1;
      //     this.getdashboardData();
      //     this.displayPage = this.pageNumber + 1;
      //   }
      // },
      reset(){
        this.searchQuery = "";
        this.fltr = "";
        this.startDate = "";
        this.endDate = "";
        this.filterText = "";
        this.selected = "";
        this.displayPage = 1;
        this.getdashboardData();
      },
  
      sorting(s) {
        if (s === this.sortBy) {
          this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
        }
        this.sortBy = s;
      },
  
      resultQuery() {
        this.proposal.splice(0, this.proposal.length, ...this.initCust);
  
        if (this.searchQuery !== "") {
          let results = [];
          for (let j = 0; j < this.proposal.length; j++) {
            if (this.searchingFunc(this.proposal[j], this.searchQuery)) {
              results.push(this.proposal[j]);
            }
          }
          this.proposal.splice(0, this.proposal.length, ...results);
          this.startRange = this.proposal.length > 0 ? 1 : 0;
          this.enditems = this.proposal.length;
        }
      },
      searchingFunc(obj, value) {
        for (let key in obj) {
          if (!Number.isInteger(obj[key]) && !(typeof obj[key] === "object")) {
            if (obj[key].toLowerCase().indexOf(value.toLowerCase()) != -1) {
              return true;
            }
          }
          else if(Number.isInteger(obj[key])){
             if (obj[key].toString().toLowerCase().indexOf(value.toLowerCase()) != -1) {
              return true;
            }
          }
        } 
        return false;
      },
      filter() {
          this.errorList=""
          this.errorList=""
        if( ((this.fltr != "") && (this.filterText != "")) || ((this.startDate != "") && (this.endDate != ""))){
          this.selected = this.filterColumn[this.fltr];
          this.getdashboardData(); 
        }
        else if (((this.fltr == "") && (this.filterText == "")) || ((this.startDate != "") && (this.endDate != ""))){
          this.getdashboardData();
        }
        else if(((this.fltr == "") && (this.filterText != "")))
        {
          this.errorList=""
          this.errorList="Please select a filter"
           window.scrollTo(0, 0);
          // alert("Please select a Filter");
        }
         else if(this.filterText == "") {
          this.errorListTop=""
          this.errorListTop="Please enter a filter text"
           window.scrollTo(0, 0);
          // alert("Please enter a Filter Text");
        }  
  
      },
      getdashboardData() {
  
        this.pageNumber = this.displayPage > 0 ? this.displayPage -1 : 0;
        let endTime =  '23:59:59';
        let startTime = '00:00:00';
        let qData = {
          pageSize: this.pageSize,
          pageNumber: this.pageNumber,
          columnName: this.selected,
          filterText: this.filterText,
          startDate : this.startDate + " "+startTime,
          endDate: this.endDate + " "+endTime 
        };
        let headers = {};
        this.backendApi("getDashboardDataFilter", qData, headers, "get")
        // axios
        //   .get(
        //     "http://127.0.0.1:8000/v1/getProposalByRmFilter?rmCode=8925&pageSize=50&pageNumber=" +
        //       this.pageNumber +
        //       "&columnName=" +
        //       this.selected +
        //       "&filterText=" +
        //       this.filterText +
        //       "&startDate=" +
        //       this.startDate +
        //       "&endDate=" +
        //       this.endDate
        //   )
          .then((response) => {
            this.loading = false;
            
            this.proposal = response.data.data.resp;
            // console.log("this.proposal");
            // console.log(this.proposal);
            this.totalRecords = response.data.data.count;
            this.totalPages = Math.ceil(this.totalRecords / 50);
            this.enditems = this.proposal.length + this.pageNumber * 50;
            this.startRange = this.pageNumber*50 + 1;
            if(this.totalRecords == 0){
                this.startRange = 0;
                this.displayPage = 0;
            }
            // this.displayItems();
            this.initCust = [];
            this.initCust.splice(0, this.proposal.length, ...this.proposal);
            if (this.proposal.length == 0) {
             
              
              this.pageNumber = this.displayPage - 1;
            }
          })
          .catch((error) => {
            console.log("error msg block dp", error);
          });
      },
      onChangeSize(event) {
        this.pageSize = parseInt(event.target.value);
        this.pageNumber = 0;
        this.displayPage = this.pageNumber + 1;
        this.getdashboardData();
      },
      next() {
        if (this.searchQuery != "") {
          this.pageNumber = this.pageNumber + 1;
          this.displayPage = this.pageNumber + 1;
          this.getdashboardData();
          this.resultQuery();
          this.nextDisabled = false;
        } else if (this.proposal.length >= this.pageSize) {
          this.pageNumber = this.pageNumber + 1;
          this.displayPage = this.pageNumber + 1;
          this.getdashboardData();
          this.nextDisabled = false;
        } else if (this.proposal.length == 0) {
          this.errorList=""
          this.errorList="No more proposals data"
           window.scrollTo(0, 0);
          // alert("No more proposals");
          this.nextDisabled = true;
        } else {
          this.errorList=""
          this.errorList="No more proposals data"
           window.scrollTo(0, 0);
          // alert("No more proposals");
        }
      },
      previous() {
        if (this.pageNumber != 0) {
          this.pageNumber = this.pageNumber - 1;
          this.displayPage = this.pageNumber + 1;
          this.getdashboardData();
        } else {
          this.errorList=""
          this.errorList="Already on first page"
          
          // alert("Already on first page");
          this.prevDisabled = true;
           window.scrollTo(0, 0);
        }
      },
      firstPage() {
        if (this.pageNumber != 0) {
          this.pageNumber = 0;
          this.displayPage = this.pageNumber + 1;
          this.getdashboardData();
        } else {
          this.errorList=""
          this.errorList="Already on first page"
          // alert("Already on first page");
          this.prevDisabled = true;
        }
      },
      displayItems() {
        // if((this.totalRecords) <= 50)
        // {
        //   this.items = this.totalRecords;
        //   this.displayPage = 1;
        // }
        // else if(this.displayPage*50 > this.totalRecords)
        // {
        //   this.items = this.totalRecords;
        //   // this.displayPage = 1;
        // }
        // else
        // {
        //   this.items = this.displayPage*50;
        // }
        this.enditems = this.proposal.length + this.pageNumber * 50;
      },
      lastPage() {
        if (this.enditems != this.totalRecords) {
          this.displayPage = Math.ceil(this.totalRecords / 50);
          this.pageNumber = this.displayPage - 1;
          this.enditems = this.totalRecords;
          this.getdashboardData();
        } else {
          this.errorList=""
          this.errorList="No more proposals"
           window.scrollTo(0, 0);
           
          //     Swal.fire({
          //     title: 'Wrning',
          //     text:   "No more proposal",
          //     icon: 'warning',
            
          // });
          // alert("No more proposals !");
        }
      },
      enableUploadDoc(user){
        if (user.insurance_company_code == "HDFC") {
          return false;
        } else if (user.insurance_company_code == "TATA"){
          return user.value=="Proposal Submitted" || user.value=="Requirements pending";
        } else if(user.insurance_company_code == "ICICI"){
          return user.value=="Proposal Submitted" || user.value=="Requirements pending";
        } else{
          return false;
        }
      },
      getProposalById(proposalUiId) {
        let qData = [proposalUiId];
        var headers = {
          Authorization:
            "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
          "Content-Type": "application/json",
        };
        this.backendApi("getProposalDetails", qData, headers, "get")
          .then((response) => {
            this.proposalDetails = response.data.data[0];
            this.uiQuoteId = this.proposalDetails.ui_quote_id;
  
            localStorage.setItem(
              "filledData",
              JSON.parse(this.proposalDetails.proposal_json)
            );
            sessionStorage.setItem(
              "filledData",
              this.proposalDetails.proposal_json
            );
            sessionStorage.setItem(
              "proposal_ui_id",
              JSON.stringify(this.proposalDetails.proposal_ui_id)
            );
            sessionStorage.setItem(
              "uiQuoteId",
              JSON.stringify(this.proposalDetails.ui_quote_id)
            );
            //call sp details api 
            let spdetail_flag= process.env.VUE_APP_SPDETAIL_ONESB;
            if(spdetail_flag == 1)
            {
              if (sessionStorage.getItem("rm_data")){
                this.rmData = JSON.parse(sessionStorage.getItem("rm_data"));
                this.getSPDetailsOneSB(this.rmData.Userid, this.proposalDetails.insurance_company_code);
              }
            }
            this.getQuoteDetails(this.uiQuoteId);
            //this.proposal = response.data.data;
          }) //proposal_ui_id, uiQuoteId,
          .catch((error) => {
            console.log("error msg block dp", error);
          });
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
              this.$router.push({ path: '/networkalert', query: {backUrl:'policy-quote', msg: msg }});
            }
            sessionStorage.setItem("sp_details_data", JSON.stringify(response.data.data));
            localStorage.setItem("sp_details_data", JSON.stringify(response.data.data));
          }
        })
        .catch((error) => {
          console.log('error msg block spdetailOneSB API', error);
          let msg=['SP details are not available']
          this.$router.push({ path: '/networkalert', query: {backUrl:'policy-quote', msg: msg }});
        });
      },
      getQuoteDetails(ui_quote_id) {
        let qData = [ui_quote_id];
        var headers = {
          Authorization:
            "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
            "Content-Type": "application/json",
        };
        this.backendApi("getQuoteDetails", qData, headers, "get")
          .then((response) => {
            this.quoteDetails = response.data.data[0];
            this.uiQuoteId = this.proposalDetails.ui_quote_id;
  
            this.userDetails = {
              gender: this.quoteDetails.gender,
              fullname: this.quoteDetails.life_assured_name,
              dob: this.quoteDetails.dob,
              age: null,
              mobile: this.quoteDetails.mobile_number,
              zipcode: this.quoteDetails.zipcode,
              annualincome: this.quoteDetails.annual_income,
              inlakhs: null,
              employmenttype: this.quoteDetails.employee_type,
              education: this.quoteDetails.education,
              smoke: this.quoteDetails.smoker,
              whatsapp: false,
            };
  
            localStorage.setItem("userProfile", JSON.stringify(this.userDetails));
            sessionStorage.setItem(
              "user_profile",
              JSON.stringify(this.userDetails)
            );
            sessionStorage.setItem(
              "request_json",
              this.quoteDetails.quote_request_json
            );
  
            this.getQuoteResponseDetails(this.uiQuoteId);
          })
          .catch((error) => {
            console.log("error msg block dp", error);
          });
      },
  
      getQuoteResponseDetails(ui_quote_id) {
        let qData = [ui_quote_id];
        var headers = {
          Authorization:
            "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
          "Content-Type": "application/json",
        };
        this.backendApi("getQuoteResponseDetails", qData, headers, "get")
          .then((response) => {
            console.log("quote response details: ", response.data.data);
            this.quoteResponseDetails = response.data.data;
            //let pln = JSON.parse(this.quoteResponseDetails.quote_response_data);
            let pln = this.quoteResponseDetails.quote_response_data;
            sessionStorage.setItem("selected_plan_data", JSON.stringify(pln));
            sessionStorage.setItem(
              "selectedPlanForCheckout",
              JSON.stringify(pln)
            );
  
            let reqData = [this.userDetails.mobile, this.userDetails.dob];
            this.getLogData(reqData);
          })
          .catch((error) => {
            console.log("error msg block quote response", error);
          });
      },
      getLogData(qData) {
        var headers = {
          Authorization:
            "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
          "Content-Type": "application/json",
        };
        this.backendApi("getLogData", qData, headers, "get")
          .then((response) => {
            console.log("log data response details: ", response.data.data);
            this.logDetails = response.data.data;
            sessionStorage.setItem(
              "filledDataTab",
              JSON.stringify(this.logDetails.tag_name)
            );
            sessionStorage.setItem(
              "currentTab",
              JSON.stringify(this.logDetails.tag_name)
            );
  
            let productGroupId = JSON.parse(sessionStorage.getItem("filledData")).productGroupId;

            console.log('productGroupId: ', productGroupId);

            setTimeout(() => {
              if(productGroupId == 'health') {
                this.$router.push("/proposer-details");
              } else {
                this.$router.push("/proposal");
              }
              
            }, 1000);
          })
          .catch((error) => {
            console.log("error msg block dp", error);
          });
      },
      async retriggerPayment(user){
        this.loading = true
        if (user.insurance_company_code == "ICICI") {
          // for icici
          var headers = {
            Authorization: "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
            "Content-Type": "application/json",
          };
          let qData = [user.proposal_ui_id];
          this.backendApi("getResumeURL", qData, headers, "get")
            .then((response) => {
              if (response == 'error') {
                self.apiError = true;
              } else if (response && response.data) {
                console.log(response)
                if (response.data[1]['resumeURL'] != '') {
                  window.location.href = response.data[1]['resumeURL'];
                }
              }
            })
            .catch((error) => {
              console.log('error msg block dp', error);
            });
        } else if (user.insurance_company_code == "HDFC"){
          var headers = {
            Authorization: "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
            "Content-Type": "application/json",
          };
          let qData = [user.proposal_manu_id];
          this.backendApi("triggerPayment", qData, headers, "get")
          .then((response) => {
              if (response == 'error') {
                self.apiError = true;
              } else if (response && response.data) {
                console.log(response)
                if ("Status" in response.data.data && response.data.data["Status"].search("Success")!=-1 ) {
                  //toast
                  console.log("payment re-triggered")
                } else {
                  console.log("payment trigger failed")
                }
                this.loading=false
              }
            })
            .catch((error) => {
              console.log('error msg block dp', error);
            });
        }
        else if (user.insurance_company_code == "TATA"){
          let distributorID = this.configDat["DISTRIBUTER"]["distributerID"];
          let distributorLogo = this.configDat["DISTRIBUTER"]["distributorLogo"];
          this.infoEmail = this.configDat["DISTRIBUTER"]["infoEmail"];
          this.formInfo = await this.getProposal(user.proposal_ui_id);
          this.selectedPlan = await this.getQuote(user.ui_quote_id);
          console.log(this.selectedPlan)
          console.log(new URL(location).origin+"/#/proposaldetailscheckdiy");
          let rmData = JSON.parse(sessionStorage.getItem("rm_data"));
          console.log(rmData);
          var resumeLink= new URL(location).origin+"/#/proposaldetailscheckdiy?proposalId="+user.proposal_ui_id+'&transactionId='+rmData['transaction_id'];
          var emailBody = `<!DOCTYPE html>
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
                 <center><img style="max-width: 150px"src="` + distributorLogo + `" ></center>
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
                          Dear ${this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['firstName']['input']} ${this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['lastName']['input']}
                       </td>
                       <td width="50"></td>
                    </tr>
                    <tr>
                       <td width="20"></td>
                       <td
                          style="font-family: Public Sans;font-size: 18px;color: #1f1f1f;padding: 20px 0px;line-height: 28px;">
                          Thank you for choosing ${this.selectedPlan["insuranceAndProducts"]["productName"]}. Your application is ready!<br>
                          Please review your application. If you are happy with the details, kindly approve the form with OTP verification and make payment.
                          <center>
                             <br/>
                             <a style=" background-color: orange;
                                text-decoration-line: none;
                                padding: 10px;
                                border-radius: 4px;
                                border-color: transparent;
                                color: white;
                                font-weight: bold;" href=${resumeLink}> Review and Pay </a>
                          </center>
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
                          style="
                          font-family: Public Sans; font-size: 14px;  color: #1f1f1f; padding: 20px 0px; line-height: 22px;" >
                          For any assistance, please feel free to contact us at 1800 212 123123 or <br>
                          email ${this.infoEmail}
                       </td>
                       <td width="50"></td>
                    </tr>
                    <tr>
                       <td width="50"></td>
                       <td
                          style="font-family: Public Sans;font-size: 18px;color: #1f1f1f;padding: 20px 0px;line-height: 28px;" >
                          Regards,<br>
                          ${distributorID}
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
        </table>+
     </body>
  </html>`;
  
  
          let qData = {
            "send_from":"customer.service@1silverbullet.tech",
            "subject":"Your application for "+this.selectedPlan["insuranceAndProducts"]["productName"],
            "text": emailBody,
            "send_to":[this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['email']['input']]
          // this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['email']['input']
          };
          var headers = {
            Authorization: "Basic " + window.btoa(process.env.VUE_APP_USERNPASS),
            "Content-Type": "application/json",
          };
          this.backendApi("sendMail", qData, headers)
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
               else if(response && response.data){
                
                this.$router.push('/thankyoumail');
                //window.location.href = new URL(location).origin
                
              }
            })
            .catch((error) => {
              console.log('error msg block email', error);
            let msg=['We are facing some issue from backend while sending an e-mail']
              this.$router.push({ path: '/networkalert', query: {backUrl:'proposal-details-check', msg: msg }});
            });
        }
      },
      retriggerPaymentEnable(user){
        if (user.insurance_company_code == "ICICI" || user.insurance_company_code == "HDFC") {
          return user.transaction_date==null && user.value=="Proposal Submitted";
        }
        else if (user.insurance_company_code == "TATA"){
          return user.value=="Awaiting Client Approval";
        }
      },
      resumeProposalJourney (puid,status) {
        console.log("resumeProposalJourney called", puid);
        this.getProposalById(puid);
        // Updating proposal to "Proposal Application Pending" in case of "Awaiting Client Approval"
        if(status == 'Awaiting Client Approval')
        {
          this.updateProposalStatus(puid,1);
        }
      },
      getProposal(proposalUiId){
        let qData = [proposalUiId];
        var headers = {
          Authorization:
            "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
          "Content-Type": "application/json",
        };
        return this.backendApi("getProposalDetails", qData, headers, "get")
          .then((response) => {
            this.proposalDetails = response.data.data[0];
            let resp = JSON.parse(this.proposalDetails.proposal_json)
            sessionStorage.setItem("filledData",this.proposalDetails.proposal_json);
            return resp;
          }) //proposal_ui_id, uiQuoteId,
          .catch((error) => {
            console.log("error msg block dp", error);
          });
      },
      getQuote(ui_quote_id){
        let qData = [ui_quote_id];
        var headers = {
          Authorization:
            "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
          "Content-Type": "application/json",
        };
        return this.backendApi("getQuoteResponseDetails", qData, headers, "get")
          .then((response) => {
            console.log("quote response details: ", response.data.data);
            this.quoteResponseDetails = response.data.data;
            //let pln = JSON.parse(this.quoteResponseDetails.quote_response_data);
            let pln = this.quoteResponseDetails.quote_response_data;
            console.log(pln)
            return pln;
          })
          .catch((error) => {
            console.log("error msg block quote response", error);
          });
      },
      updateProposalStatus(puid,statusid)
      {
          let qData = {
            "proposal_ui_id":puid,
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
              } else if(response && response.data) {
                console.log('proposal status updated: ', response.data)
              }
            })
            .catch((error) => {
              console.log('error msg block email', error);
            });
      },
      goBack() {
        // this.$router.push("");
        this.$router.push({ path: '/'});
      },
      docuploadlink(user)
      {
        let qData = [user.proposal_ui_id];
        let headers = {};
        this.backendApi("getProposalDetails", qData, headers, "get")
          .then((response) => {
            this.proposalDetails = response.data.data[0];
            this.uiQuoteId = this.proposalDetails.ui_quote_id;
  
            localStorage.setItem(
              "filledData",
              JSON.parse(this.proposalDetails.proposal_json)
            );
            sessionStorage.setItem(
              "filledData",
              this.proposalDetails.proposal_json
            );
            sessionStorage.setItem(
              "proposal_ui_id",
              JSON.stringify(this.proposalDetails.proposal_ui_id)
            );
            sessionStorage.setItem(
              "uiQuoteId",
              JSON.stringify(this.proposalDetails.ui_quote_id)
            );
  
          }) 
          .catch((error) => {
            console.log("error msg block dp", error);
          });
  
          let link = "/#/upload-doc?distributorID=" + this.distributorID + "&insuranceCompanyCode="+user.insurance_company_code+"&applicationNo="+user.proposal_manu_id + "&productCode="+user.product_code;
        if(user.value == "Proposal Submitted" || user.value == "Requirements pending")
        {
          if(user.insurance_company_code == "ICICI"){
          let headers = {
            Authorization: "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
            "Content-Type": "application/json",
          };
          this.backendApi("getResumeURL", qData, headers, "get")
            .then((response) => {
              if(response == 'error') {
                self.apiError = true;
              } else if(response && response.data) {
                if(response.data[1]['resumeURL']!='')
                  window.location.href = response.data[1]['resumeURL'];
              }
            })
            .catch((error) => {
              console.log('error msg block dp', error);
            });
        }
        else{
          window.location.href = new URL(location).origin + link;
        }
        }
        // return link;
      },
      getRequirements(user, index) {
        this.requirements = [];
        this.childStatus=index
          let qData = [user.proposal_manu_id];
          let headers = {};
          this.backendApi("getPendingUploadDocRequiremnts", qData, headers, "get")
            .then((response) => {
               this.requirements=response.data            
              // console.log("req",index,this.requirements)
            })
            .catch((error) => {
              console.log("error msg block dp", error);
            });
         
        qData = [user.proposal_ui_id];
        headers = {};
        this.backendApi("getProposalDetails", qData, headers, "get")
          .then((response) => {
            this.proposalDetails = response.data.data[0];
            this.uiQuoteId = this.proposalDetails.ui_quote_id;
  
            localStorage.setItem(
              "filledData",
              JSON.parse(this.proposalDetails.proposal_json)
            );
            sessionStorage.setItem(
              "filledData",
              this.proposalDetails.proposal_json
            );
            sessionStorage.setItem(
              "proposal_ui_id",
              JSON.stringify(this.proposalDetails.proposal_ui_id)
            );
            sessionStorage.setItem(
              "uiQuoteId",
              JSON.stringify(this.proposalDetails.ui_quote_id)
            );
  
          }) 
          .catch((error) => {
            console.log("error msg block dp", error);
          });
          
       
      },
      changeDateFormat(inp) {
        var str = "";
        let monthNames = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ];
        var d;
        if (typeof inp == typeof str) {
          d = new Date(Date.parse(inp));
          str =
            d.getDate().toString() +
            "-" +
            monthNames[d.getMonth()] +
            "-" +
            d.getFullYear().toString();
        }
        return str;
      },
    },
    computed: {
      sorted: function () {
        return this.proposal.sort((p1, p2) => {
          let modifier = 1;
          if (this.sortDirection === "desc") modifier = -1;
          if (p1[this.sortBy] == null || p2[this.sortBy] == null) {
            return 0 * modifier;
          }
           if (this.sortBy == "ui_quote_id") {
            if (parseInt(p1[this.sortBy]) < parseInt(p2[this.sortBy]))
              return -1 * modifier;
            if (parseInt(p1[this.sortBy]) > parseInt(p2[this.sortBy]))
              return 1 * modifier;
          }
          if (this.sortBy == "total_premium") {
            if (parseInt(p1[this.sortBy]) < parseInt(p2[this.sortBy]))
              return -1 * modifier;
            if (parseInt(p1[this.sortBy]) > parseInt(p2[this.sortBy]))
              return 1 * modifier;
          }
          if (p1[this.sortBy].toLowerCase() < p2[this.sortBy].toLowerCase())
            return -1 * modifier;
          if (p1[this.sortBy].toLowerCase() > p2[this.sortBy].toLowerCase())
            return 1 * modifier;
          return 0;
        });
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
 
  
  #goToPageNumber {
    width: 175px;
  }
  
  .btn {
    font-weight: bold;
    width: 70px;
    height: 45px;
    margin: 1px;
    border: 1px solid grey;
    background-color: white;
  }
  #errorList{
    color: red;
    
  }
  #errorListTop{
    color: red;
    
  }
  .dot-spin {
    position: fixed;
    right: 50%;
    bottom: 50%;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: transparent;
    color: transparent;
    box-shadow: 0 -18px 0 0 #9880ff, 12.72984px -12.72984px 0 0 #9880ff,
      18px 0 0 0 #9880ff, 12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0),
      0 18px 0 0 rgba(152, 128, 255, 0),
      -12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0),
      -18px 0 0 0 rgba(152, 128, 255, 0),
      -12.72984px -12.72984px 0 0 rgba(152, 128, 255, 0);
    animation: dotSpin 1.5s infinite linear;
  }
  @keyframes dotSpin {
    0%,
    100% {
      box-shadow: 0 -18px 0 0 #9880ff, 12.72984px -12.72984px 0 0 #9880ff,
        18px 0 0 0 #9880ff, 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    12.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 0 #9880ff, 18px 0 0 0 #9880ff,
        12.72984px 12.72984px 0 0 #9880ff, 0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    25% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 0 #9880ff,
        12.72984px 12.72984px 0 0 #9880ff, 0 18px 0 0 #9880ff,
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    37.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 0 #9880ff,
        0 18px 0 0 #9880ff, -12.72984px 12.72984px 0 0 #9880ff,
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    50% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 0 #9880ff,
        -12.72984px 12.72984px 0 0 #9880ff, -18px 0 0 0 #9880ff,
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    62.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 0 #9880ff,
        -18px 0 0 0 #9880ff, -12.72984px -12.72984px 0 0 #9880ff;
    }
    75% {
      box-shadow: 0 -18px 0 0 #9880ff,
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 0 #9880ff,
        -12.72984px -12.72984px 0 0 #9880ff;
    }
    87.5% {
      box-shadow: 0 -18px 0 0 #9880ff, 12.72984px -12.72984px 0 0 #9880ff,
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 0 #9880ff;
    }
  }
  
  // .pagination .btn-next
  // .pagination .btn-prev
  //   {
  //   background: none;
  //   border-radius: 0.375rem;
  //   font-weight: 500;
  //   font-size: 1.0rem;
  //   font-family: Poppins, Helvetica, sans-serif;
  // }
  </style>