<template>
  <div class="text-center" v-if="loading" style="padding-top: 50px;">
    <loadingPage />
  </div>
  <div v-else class="">
    <Header />
    <div class="wrapper">
        <div class="policyname d-flex justify-content-around m-2" >
        <div class="policyname-text d-flex align-items-center">
          
          <router-link to="/dashboard" class="back-arrow">
            <img src="~@/assets/images/left-arrow-grey.png" alt="">
          </router-link>
          
          <span class="mr-4">
           <!-- <img v-if="this.insuranceCompanyCode" 
           
              :src="
                getInsurerImgs(
                    this.insuranceCompanyCode
                )
              "
              alt=""
            /> -->
          </span>
          <span class="d-inline-block align-middle brand-text">
              {{ this.productName }}
            </span>
        </div>
        <div>
            <div v-if="this.applicationNo != '' && this.applicationNo != null " class="appno">Insurer Application Number : {{this.applicationNo}}</div>
            <div v-if="this.uiQuoteId != '' && this.uiQuoteId != null " class="propno">CRN : {{this.uiQuoteId}}</div>
        </div>
      </div>
      
      


    <div class="main-bg" ref="formContainer">
        <!-- <b-overlay :show="show" rounded="sm"> -->
            <div class="container" >
                <!-- <div class="back-link">
                    <router-link to="">
                        <img src="~@/assets/images/back-arrow.png" alt="" />Back To Policy Review
                    </router-link>
                </div> -->
                <div class="doc-upld-section">
                    <h4>Upload Documents</h4>
                    <div v-if="checkRequirements()">
                        <p>No documents are pending for submission.</p>
                    </div>
                    <!-- <p>To confirm you are you, please upload digital photos of the following documents</p> -->
                    <ul>
                        <template v-for="(item, ind) in requirementJSON" :key="ind">
                            <li class="active mb-3" v-if="checkStatus(item)">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="doc-name d-flex justify-content-between align-items-center">
                                        <h4> {{ item.docCategoryDescription }} </h4>
                                        <!-- <img src="~@/assets/images/info-button.png" alt="" class="ml-1"> -->
                                    </div>
                                    <!-- <div class="doc-file dashed-border">
                                        <select name="" id="">
                                            <option value="">option 2</option>
                                            <option value="">option 3</option>
                                        </select>
                                    </div> -->
                                </div>
                                <div class="d-flex justify-content-between align-items-center mt-3 bordered-section">
                                    <div class="w-30 file-icon-sec">
                                        <img src="~@/assets/images/businessman.png" alt="">
                                    </div>
                                    <div class="doc-upload d-flex w-70">
                                        <!-- <button class="flex-fill">
                                            <img src="~@/assets/images/camera.png" alt="">Camera
                                        </button> -->
                                        <div class="doc-upload-select"> 
                                            <select :name="item.SBDocCategory" :id="item.SBDocCategory"  v-model="docIds[item.SBDocCategory]" @change="resetErrorMsg($event, item.SBDocCategory)">
                                                <option value="">Select</option>
                                                <option v-for="(item2, ind2) in item.allowedSBDocId" :value="item2.SBDocId" :key="ind2">{{ item2.docIdDescription }} </option>
                                            </select>
                                        </div> <!--doc-upload-select-->
                                        <div class="upload-input">
                                            <label class="custom-file-input">
                                                <input type="file" title="Please select document types from drop down and then click upload" :id="'file_' + item.SBDocCategory"  :disabled="checkError(item.SBDocCategory)" @change="previewFiles($event, item.SBDocCategory,ind)">
                                            </label>
                                        </div>
                                        <button type="button" class="btn btn-primary eyeicon-btn" data-bs-toggle="modal" :data-bs-target="'#imageModal_'+ item.SBDocCategory">
                                            <img src="~@/assets/images/eye.png" alt="" />
                                        </button>
                                    </div>
                                    
                                </div>
                                <div v-if="loading== true">
                                    <div class="snippet" data-title=".dot-spin">
                                      <div class="stage">
                                        <div class="dot-spin"></div>
                                       </div>
                                    </div>
                                    </div>
                                    <div v-if="loading==false">

                                      <div v-if="item.imgerror">
                                           <label v-if="arraySize(item.errormsg)"  class="imgerror">{{item.errormsg}}</label><br/>
                                      </div>
                                      <div v-if="item.imgerror">
                                           <label v-if="!arraySize(item.errormsg)"  class="imgerror">{{item.imgerror}}</label><br/>
                                      </div>

                                     <div v-if="!item.imgerror && this.finalStatus=='Success'" >
                                        <label v-if="arraySize(item.errormsg) " class="imgerror">{{item.errormsg}}</label>
                                        <label v-else-if="!arraySize(item.errormsg)"> <i v-if="item.fileName"><img src="~@/assets/images/uploaded.png" style="width:20px; height:20px" />{{item.fileName}}<br/>File Uploaded Successfully</i></label>
                                     </div>
                                     <div v-if="!item.imgerror && this.finalStatus=='Pending'" >
                                        <label v-if="!arraySize(item.errormsg)"> <i v-if="item.fileName"><img src="~@/assets/images/failed.png" style="width:20px; height:20px" />{{item.fileName}}<br/>Failed to Upload Document</i></label>
                                     </div>
                             

                                </div>
                                <div class="d-flex justify-content-between">
                                    <label>File size must be between:{{this.minFileSize}}-{{this.maxFileSize}}&nbsp;{{this.fileSizeUnit}}</label>
                                    <label>Supported File Types:{{this.supportedFileType}}</label>
                                </div>
                                <p class="error_msg" :id="'error_'+item.SBDocCategory"></p>
                            </li>
                               <!-- Modal -->
                               <div class="modal fade" :id="'imageModal_' + item.SBDocCategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">{{ item.docCategoryDescription }}</h5>
                                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <!-- <img class="image1" :id="'image1_' + item.SBDocCategory" :src="imagesObj[item.SBDocCategory]"> -->
                                            <embed
                                                class="doc_upload_block image1"
                                                v-if="imagesObj[item.SBDocCategory]"
                                                type="video/webm"
                                                :src="imagesObj[item.SBDocCategory]"
                                            />
                                            <div v-else  class="error_msg text-center doc_upload_block2">No Document Selected</div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- ./End Modal -->
                        </template>
                    </ul>
                    <div class="button wrap d-flex justify-content-center" >
                        <router-link to="/dashboard">
                            <button  type="submit" class="next-btn mb-4" >Proceed 
                            <i>
                                <img src="~@/assets/images/next-arrow.png" alt="">
                            </i>
                            </button>
                        </router-link>
                    </div>
                </div>
                
            </div>
        <!-- </b-overlay> -->
    </div>    
    </div>
</div>
</template>

<script>
import $ from "jquery";
import Uploading from "@/components/uploading.vue";
// Import the method.
import { useLoading } from 'vue3-loading-overlay';
// Import stylesheet
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
//import Loading3 from "@/components/loading3.vue";
import Header from "@/components/Header.vue";
import loadingPage from "@/components/loading.vue";

//import { getDistributer } from '@/mixins/common';
//import {getInsuranceImages} from '@/mixins/common';
export default {
    name:' uploaddoc',
    components: {
        Uploading,
        Header,
        loadingPage
    },
    mixins: [],
    mounted() {

        this.configData = this.$store.state.configData; 
        this.loading = false;
        this.imagesObj = {};
        this.distributorID = this.$route.query.distributorID;
        this.insuranceCompanyCode = this.$route.query.insuranceCompanyCode;
        this.applicationNo = this.$route.query.applicationNo;
        this.productCode=this.$route.query.productCode;
        console.log("this.productCode",this.productCode);
        
        
        
        if (sessionStorage.getItem("uiQuoteId")) {
             this.uiQuoteId = sessionStorage.getItem("uiQuoteId");
             console.log("uiQuoteId",this.uiQuoteId)
    }
    if (sessionStorage.getItem("proposal_ui_id")) {
             this.proposalUiId = JSON.parse(sessionStorage.getItem("proposal_ui_id"));
             console.log("proposalUiId",this.proposalUiId)
    }

        this.getProductName();
        if(this.distributorID == "undefined")
        {
            this.distributorID = this.configData["DISTRIBUTER"]["distributerID"];
        }

        console.log('this.distributorID: ', this.distributorID, 'this.insuranceCompanyCode: ', this.insuranceCompanyCode, 'this.applicationNo: ', this.applicationNo)

        this.testRequirementJSON = [
            {
                "status":"Pending",
                "manufacturerStatus":"",
                "SBDocCategory":"addrProof",
                "docCategoryDescription":"Address Proof",
                "allowedSBDocId":[
                {
                    "SBDocId":"addrProofPartnrFirm",
                    "docIdDescription":"Address proof of the Partnership Firm"
                },
                {
                    "SBDocId":"tcsBonafideLetter",
                    "docIdDescription":"TCS Bonafide Letter (Proof of Address)"
                }
                ],
                "description":"",
                "requestDate":"",
                "examDate":"",
                "receivedDate":"",
                "clientId":"",
                "firstName":"",
                "lastName":"",
                "manuRequirementNo":"",
                "varFields":[
                    {
                        "fieldName":"",
                        "fieldValue":""
                    }
                ]
            },
            {
                "status":"Pending",
                "manufacturerStatus":"",
                "SBDocCategory":"ageProof",
                "docCategoryDescription":"Age Proof",
                "allowedSBDocId":[
                {
                    "SBDocId":"aadhar",
                    "docIdDescription":"Aadhar ID Card - Non Standard"
                },
                {
                    "SBDocId":"baptismCert",
                    "docIdDescription":"Baptism Certificate"
                },
                {
                    "SBDocId":"defIdCard",
                    "docIdDescription":"Defense ID Card"
                },
                {
                    "SBDocId":"domicileCert",
                    "docIdDescription":"Domicile Certificate"
                }
                ],
                "description":"",
                "requestDate":"",
                "examDate":"",
                "receivedDate":"",
                "clientId":"",
                "firstName":"",
                "lastName":"",
                "manuRequirementNo":"",
                "varFields":[
                    {
                        "fieldName":"",
                        "fieldValue":""
                    }
                ]
            }
        ];

        // this.requirementJSON = this.testRequirementJSON;

        this.getDocRequirement(this.distributorID, this.insuranceCompanyCode, this.applicationNo,this.productCode);
    },
    props: {
        msg: String,
    },
    data() {
        return {
            configData: "",
            loading: true,
            pageloading: false,
            requirementJSON: "",
            testRequirementJSON: "",
            distributorID: this.distributorID,
            insuranceCompanyCode: "",
            applicationNo: "",
            productCode:"",
            productName:"",
            salesChannel: "Others",
            docIds: [],
            imagesObj: {},
            //loader: useLoading(),
            docCategoryDone:[],
            maxFileSize:0,
            minFileSize:0,
            fileSizeUnit:"",
            supportedFileType:"",
            fileName:"",
            imgerror:"",
            errormsg:[],
            finalStatus:"",
            finalCheck:[],
            proposalUiId:"",

        }
    },
    methods: {
        // finalCheckStatus(){
        //     if(this.finalCheck.length == this.requirementLength){
        //             console.log("status Updated to Proposal Submitted")
        //             this.updateProposalStatus(9);  
        //         }
        //     else{    
        //         if( this.docCategoryDone.length + this.finalCheck.length == this.requirementLength){  
        //             console.log("status Updated to Proposal Submitted")
        //             this.updateProposalStatus(9);
        //         }
        //         else{
        //             this.updateProposalStatus(2);
        //             console.log("status Updated to Pending Requirements")
        //         } 
        //     }
        // },
        checkRequirements(){
            if(this.requirementJSON.length == this.docCategoryDone.length)
            {
                return true;
            }
            else
            {
                return false;
            }
        },
        arraySize(value){

            if( value instanceof Array){
                return value.length != 0
            }
        },
        checkStatus(item)
        {
            if(item.SBDocCategory == "")
            {
                return false;
            }
            let status = this.docCategoryDone.includes(item.SBDocCategory);
            return !status; 
        },
        checkError(sbDocCat)
        {
            if(!this.docIds[sbDocCat])
            {
                return true;
            }
            else
            {
                return false;
            }
        },
        updateProposalStatus(statusid)
        {
        let qData = {
          "proposal_ui_id": this.proposalUiId,
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
        
        previewFiles(event, sbDocCat,index) {
            let file = event.target.files[0];
            this.imgerror="";
            this.errormsg=[];
                let minfs;
                let maxfs;
                if(this.fileSizeUnit=="KB"){
                    minfs=this.minFileSize*1024;
                    maxfs=this.maxFileSize*1024;
                    
                }
                
                if(this.fileSizeUnit=="MB"){
                    minfs=this.minFileSize*1024*1024;
                    maxfs=this.maxFileSize*1024*1024;
                  }
                if(file.size < minfs)  {
                    this.imgerror = `The file size is less than allowed file limit`;  
                }
                if(file.size > maxfs){
                    this.imgerror = `The file size is greater than allowed file limit`;  
                }
                
            console.log('get file called: ', event.target.files[0]);
            this.fileName =  event.target.files[0].name;
            for(let i=0;i<this.requirementJSON.length;i++)
            {
                if(index==i){
        
                       this.requirementJSON[i]["fileName"]=this.fileName
                       this.requirementJSON[i]["imgerror"]=this.imgerror
                       if(!this.docIds[sbDocCat]){
                           this.requirementJSON[i]["errormsg"].push("Please Select Doc Type First Then Select File");
                       }
                }
                
            }
            console.log("reqjson",this.requirementJSON)
            console.log('sbDocCat: ', sbDocCat);
            this.loading = false;

            console.log('docIds: ', this.docIds);
            if(!this.docIds[sbDocCat]){
                // $("#error_" + sbDocCat).text('Please Select Doc Type First Then Select File');
                // $('#file_' + sbDocCat).val('');
                // this.loading = true;
            } else {

                let fileType = file.type;
                console.log('file type: ', fileType);
                let extension = file.name.split('.').pop();
                console.log('extension: ', extension);

                const reader = new FileReader();
                let srcUrl = URL.createObjectURL(file);
                this.imagesObj[sbDocCat] = srcUrl;
                
                console.log('srcUrl: ', srcUrl);

                this.getBase64(file).then(
                    data => {   
                        this.uploadDoc(fileType, data, extension, sbDocCat, this.docIds[sbDocCat],index);
                    } 
                )

            }
            
            this.loading = true;

        },
        getBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });
        },
        uploadDoc(fileType, base64String, extension, sbDocCat, sbDocId,index) {

            let filledData;
            if (sessionStorage.getItem('filledData')) {
                filledData = JSON.parse(sessionStorage.getItem("filledData"));
            }
            let policynumber = "";
            try{
                policynumber = filledData.fieldGroups.traceInfo.fields.manuPolicyNo.input;
            }
            catch(err){
                console.log("policy number assignment failed", err);
            }
            if (sessionStorage.getItem('filledData')) {
                filledData = JSON.parse(sessionStorage.getItem("filledData"));
            }
            var base64result = base64String.split(',')[1];
            let qData = 
            {
                "data":
                {
                    "distributor": {
                        "distributorID": this.distributorID,
                        "agentID": "8925",
                        "salesChannel": this.salesChannel,
                        "varFields": []
                    },
                    "insuranceCompanyCode": this.insuranceCompanyCode,
                    "applicationNo": this.applicationNo,
                    "policyNo": policynumber,
                    "quoteId": "",
                    "individualDetails": [
                        {
                            "memberType": "Life Assured",
                            "memberSequenceNumber": 1,
                            "relationWithFirstLifeAssured": "Self",
                            "fileDetails": [
                                {
                                    "SBDocCategory": sbDocCat,
                                    "SBDocId": sbDocId,
                                    //"SBDocCategory": sbDocCat,
                                    //"SBDocId": sbDocId,
                                    "documentId": "",
                                    "documentExpiryDate": "",
                                    "byteArray": base64result,
                                    "docFormat": extension,
                                    "manuRequirementNo": "",
                                    "varFields": [
                                        {
                                            "fieldName": "",
                                            "fieldValue": ""
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "varFields": [
                        {
                            "fieldName": "",
                            "fieldValue": ""
                        }
                    ]
                }
            };

            var  headers = {
                "quoteId":this.uiQuoteId,
                Authorization: "Basic " + window.btoa(process.env.VUE_APP_USERNPASS),
                "Content-Type": "application/json",
            };
            
            //this.loading = true;
            this.show = true;
            // this.loader.show({
            //     canCancel: false,
            // });
            this.backendApi("uploadDoc", qData, headers)
                .then((response) => {
                    //console.log('save quote response: ', response);
                    this.loading = false;


                    //this.loader.hide();
                    if(response == 'error') {
                        self.apiError = true;
                    } else if(response.data.errors.length > 0) {
                        // let msg = '';
                        // response.data.errors.forEach((element, index) => {
                        // msg += element.errorMessage + '\n';
                        // });
                        let msg=[]

                        for(let i=0;i<response.data.errors.length;i++)
                        {
                            msg.push(response.data.errors[i]["errorMessage"])
                           
                        }

                        this.errormsg=msg;

                        this.requirementJSON[index]["errormsg"]=this.errormsg;
                        console.log("index",index);
                        console.log("errormsginupdoc",this.errormsg)
                        // this.loading = true;

                        console.log("errormsg",this.errormsg)
                       
                        // this.errormsg.push("Incorrect File Type");
                        // this.$router.push({ path: '/alert', query: {backUrl:'policy-quote', msg:msg  }});
                        // alert(msg);
                    } 
                    else if(response && response.data){
                        if(response.data.data.individualDetails[0]?.fileDetails[0]?.fileUploadStatus == 'Success') {
                           if(response.data.errors.length==0){
                            this.errormsg=[];
                            this.requirementJSON[index]["errormsg"]=this.errormsg;
                           }
                            // alert('File Uploaded Successfully');
                            if(this.imgerror==""){
                            this.uploadDocumentStatus(this.applicationNo,sbDocCat, "Success");
                            this.loading=true;
                            

                            }
                        }
                    
                    } 
                })
                .catch((error) => {
                    //this.loading = false;
                    //this.loader.hide()
                    console.log('error msg block doc uploading', error);
                });
        },
        resetErrorMsg(event, sbDocCat) {
            let val = event.target.value;
            console.log('event: ', event.target.value);
            console.log('sbDocCat: ', sbDocCat);

            if(val) {
                $("#error_"+sbDocCat).text('');
            }
        },
        getUploadRequiremnts(appnum,manufacturer,policyNumber){
            // console.log(requirement);
            let  headers = {"quoteId":this.uiQuoteId,};
            let qData = [appnum];

            this.backendApi("getUploadDocRequiremnts", qData, headers,"get")
                .then((response) => {
                    console.log(response);
                    this.docCategoryDone =[];
                    for(let i=0;i<response.data.length;i++)
                    {
                        this.docCategoryDone.push(response.data[i].category);
                    }
                    console.log(this.docCategoryDone);
                    for(let i=0;i<this.requirementJSON.length;i++)
                            { 
                                this.uploadRequiremnts(this.requirementJSON[i], 
                                appnum,
                                manufacturer,
                                policyNumber);
                            }
                    this.pageloading = false;
                    this.laoding= false;
                })
                .catch((error) => {
                    this.pageloading = false;
                    this.loading = false;
                    // this.show = false;
                    console.log('error msg block doc getUploadDocRequiremnts', error);
                });

        },
        uploadRequiremnts(requirement,appnum,manufacturer,policyno){
            console.log(requirement);
            this.minFileSize = requirement.minFileSize;
            this.maxFileSize = requirement.maxFileSize;
            this.fileSizeUnit = requirement.fileSizeUnit;
            this.supportedFileType = requirement.fileType;
            if(requirement.docCategoryDescription == "" ||requirement.SBDocCategory == "")
            {
                return;
            }
            let proposal_ui_id="";
            if (sessionStorage.getItem('proposal_ui_id')) {
                proposal_ui_id = JSON.parse(sessionStorage.getItem('proposal_ui_id'));
            }
            let  headers = {"quoteId":this.uiQuoteId,};
            let qData = {
                "proposal_ui_id":proposal_ui_id,
                "applicationNumber": appnum,
                "manufacturer":manufacturer,
                "insuranceCompanyCode":"",
                "productCode":"",
                "policyNumber":"",
                "insurance_company_status":"Pending",
                "manufacturerStatus":"Pending",
                "category":requirement.SBDocCategory,
                "name": requirement.name,
                "description": requirement.docCategoryDescription,
                "request_date":requirement.requestDate,
                "exam_date":requirement.examDate,
                "received_date": requirement.receivedDate,
                "clientId": requirement.clientId,
                "firstName":requirement.firstName,
                "lastName":requirement.lastName
                
            };

            this.backendApi("uploadDocRequiremnts", qData, headers)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    this.pageloading = false;
                    this.show = false;
                    console.log('error msg block doc requirement', error);
                });

        },
        uploadDocumentStatus(applicationNumber,category,status){
            
            let  headers = {"quoteId":this.uiQuoteId,};
            let qData = {
                "applicationNumber":applicationNumber,
                "category":category,
                "status":status};

            this.backendApi("uploadDocStatus", qData, headers)
                .then((response) => {
                    console.log(response);
                    this.finalStatus = response.data.insurance_company_status
                    if(this.finalStatus =='Success'){
                        this.finalCheck.push(this.finalStatus)
                    }
                    if(this.finalCheck.length == this.requirementLength){
                        console.log("status Updated to Proposal Submitted")
                        this.updateProposalStatus(9);  
                    }
                    else if( this.docCategoryDone.length + this.finalCheck.length == this.requirementLength){  
                        console.log("status Updated to Proposal Submitted")
                        this.updateProposalStatus(9);
                    }
                    this.loading= false; 
                })
                .catch((error) => {
                    this.show = false;
                    this.loading = false;
                    console.log('error msg block doc requirement', error);
                });

        },
        getDocRequirement() {
            this.pageloading = true;
            let  headers = {"quoteId":this.uiQuoteId,};
            let qData = 
            {
                "data":
                {
                    "distributorID": this.distributorID,
                    "insuranceCompanyCode": this.insuranceCompanyCode,
                    "applicationNo": this.applicationNo
                }
            };
            //this.loading = true;
            this.show = true;
            this.backendApi("getDocRequirements", qData, headers)
                .then((response) => {
                    //console.log('save quote response: ', response);
                    // this.pageloading= false;
                    this.show = false;
                    if(response == 'error') {
                        console.log('error block for get requirement');
                    } else if(response && response.data) {
                        
                        if(response.data.data.manufacturer) {
                            this.requirementJSON = response.data.data.manufacturer.product[0].requirements;
                            this.getUploadRequiremnts(response.data.data.applicationNumber,
                            response.data.data.manufacturer.insuranceCompanyCode,
                            response.data.data.manufacturer.product[0].policyNo);
                       for(let i=0;i<this.requirementJSON.length;i++)
                       {
                        this.requirementJSON[i].fileName=""
                        this.requirementJSON[i].imgerror=""
                        this.requirementJSON[i].errormsg=[]


                       }

                            // for(let i=0;i<this.requirementJSON.length;i++)
                            // {
                            //     this.uploadRequiremnts(this.requirementJSON[i], 
                            //     response.data.data.applicationNumber,
                            //     response.data.data.manufacturer.insuranceCompanyCode,
                            //     response.data.data.manufacturer.product[0].policyNo);
                            // }
                            
                        } else {
                            this.requirementJSON = this.testRequirementJSON;
                        }
                        console.log('requirement response: ', response.data);
                        this.requirementLength = response.data.data.manufacturer.product[0].requirements.length
                        console.log(" this.requirementLength", this.requirementLength)


                    
                    }
                    this.pageloading= false;
                })
                .catch((error) => {
                    this.pageloading = false;
                    this.show = false;
                    console.log('error msg block doc requirement', error);
                });
        },
        // getInsurerImgs(value) {
        //         let img = getInsuranceImages();
        //         return require("../assets/images/" + img[value]);
        //         },
        getProductName(){
            // this.pageloading = true;
            let  headers = {};
            let qData = [this.productCode,this.insuranceCompanyCode]
            console.log("this.productCode",this.productCode);
           
            this.show = true;
            this.backendApi("getProductName", qData, headers,"get")
                .then((response) => {
                    
                    // this.pageloading= false;
                    this.show = false;
                    console.log("getProductName",response)
                    if(response == 'error') 
                    {
                        console.log('error block for get productName');
                    }
                    else if(response && response.data.data.productName) 
                    {
                        // if(response.data.manufacturer) {
                            this.productName = response.data.data.productName;

                            console.log('productName:inside api', this.productName );
                           
                        // };
                    }
                })
                .catch((error) => {
                    this.pageloading = false;
                    this.show = false;
                    console.log('error msg block doc requirement', error);
                });
        }
    }
}
</script>


<style scoped lang="scss">
//@import '~@/assets/scss/components/uploaddoc.scss';
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
</style>