<template>
  <header class="header">
    <div class="hold">
      <div class="logo">
        <a href=""><img src="../assets/images/logo.png" alt="logo"></a>
      </div>

      <div class="right ms-auto">
        <router-link to="/dashboard" class="dashbrd d-flex justify-content-center align-items-center">
        <button type="button" class="btn btn-light rounded-pill me-3">Dashboard</button>       
      </router-link>
        <div class="dropdown">
          <button class="btn dropdown-toggle btn-sm rounded-pill" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            <img src="../assets/images/user-dropdown.png" alt="img">
          </button>
          <ul class="dropdown-menu drop" aria-labelledby="dropdownMenuButton1">
            <li class=" ms-2 align-items-center d-flex"><img src="~@/assets/images/icon1.png" alt=""/><a class="dropdown-item" href="#">{{ rmData.Name }}</a></li>
            <li class="ms-2 align-items-center d-flex"><img src="~@/assets/images/icon2.png" alt=""/><a class="dropdown-item" href="#">{{ rmData.Mobile }}</a></li>
            <li class="ms-2 align-items-center d-flex"><img src="~@/assets/images/icon3.png" alt=""/><a class="dropdown-item" href="#">{{ rmData.Email }}</a></li>
            <li class="ms-2 align-items-center d-flex"><img src="~@/assets/images/left-arrow-grey.png" alt=""/><span class="dropdown-item cursor-pointer" @click="logout">Logout</span></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <!-- Session Expiry Alert -->
  <div v-if="tokenWarningFlag" id="tokenWarningAlert" class="custom-warning-alert modal fade show">
    <div class="modal-backdrop fade show"></div>
    <div class="modal-dialog modal-dialog-centered premium-modal">
      <div class="modal-content">
        <div class="modal-header">
          <div class="icon-box">
            <i class="bi bi-exclamation-lg"></i>
          </div>
          <h5 class="modal-title text-center pt-4 px-5">Session Expiry Warning!</h5>
          <!-- <button type="button" @click="closeAlertDialog()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
        </div>
        <div class="modal-body">
          <p><span class="p-2">Your session is about to expire. Please click Ok to continue</span></p>
        </div>
        <div class="modal-footer justify-content-center">
          <!-- <button id = "close" class="btn btn-warning text-white btn-sm" @click="closeAlertDialog()"> Close</button> -->
            <button type="button" class="btn text-white btn-sm" @click="tokenExpireWarningCancel = true" style="width:100px" >Cancel</button>
            <button type="button" class="btn text-white btn-sm" @click="tokenExpireWarning = true" style="width:100px" >Ok</button>
        </div>
      </div>
    </div>
  </div>
  <!-- ./Session Expiry Alert -->
  <!-- Session Expiry Modal -->
  <div class="modal fade" id="tokenWarningModal" tabindex="-1" role="dialog" aria-labelledby="tokenWarningModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title">Session Expiry Warning</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
              <a>
                  <span class="p-2" style="text-align: center; font-weight: bold; color: #0a3f88; float: right;"> Your session is about expire. Please click Ok to continue</span>
              </a>
          </div>
          <div class="modal-footer justify-content-center">
              <button type="button" class="next-btn mb-4" @click="tokenExpireWarningCancel = true" style="width:100px" >Cancel</button>
              <button type="button" class="next-btn mb-4" @click="tokenExpireWarning = true" style="width:100px" >Ok</button>
          </div>
        </div>
    </div>
  </div>
  <!-- END: Session Expiry Modal -->
</template>

<script>
//import Wizard from "@/components/wizard.vue";
import {getLogoutURL, getConsumer} from '@/mixins/common';
import $ from "jquery";
import { Buffer } from 'buffer';
export default {
  name: 'Header',
  components: {

  },
  props: {

  },
  data()
  {
    return{
      rmData: "",
      loading: false,
      tokenWarningFlag: false,
      tokenExpireWarning: false,
      tokenExpireWarningCancel: false,
      intervalTime: null,
    }
  },
  unmounted() {
    clearInterval(this.intervalTime); // - Clears Interval
  },
  mounted() {

    //this.configData = this.$store.state.configData;
    
    let rmId = this.$route.query.id;
    let diy = this.$route.query.diy ? this.$route.query.diy : false;
    if(sessionStorage.getItem("diy") == null){
      sessionStorage.setItem("diy",diy)
    }
    // if (this.$store.state.token && sessionStorage.getItem("rm_data")) {
    //   this.rmData = JSON.parse(sessionStorage.getItem("rm_data"))
    // } else {
    //   if(rmId){
    //     this.startSession(rmId)
    //   }
    // }
    if (this.$store.state.token && sessionStorage.getItem("rm_data")) {
      this.rmData = JSON.parse(sessionStorage.getItem("rm_data"));

      if(JSON.parse(sessionStorage.getItem("sessionExpiryTime")) == true) {
        this.tokenWarning();
      }
    } else if(!this.$store.state.token){
      if(rmId){
        this.startSession(rmId)
      }
    }
      
    if(!this.$store.state.configData) {
      this.getConfigData();
    }
      
    // Token warning 
    // setInterval( function(){
    //   $("#tokenWarningModal").modal("show");
    // },5000);
  },
  methods: {
    getToken() {
      this.backendApi("getToken")
      .then((response) => {
        //console.log('save quote response: ', response);
          if(response == 'error') {
          self.apiError = true;
        } else if(response && response.data){
          //console.log('response token: ', response.data)

          let token = response.data.Data.Token;
          let USERID = response.data.Data.UserID;
          let key = this.rmData.Userid;

          let spdetail_flag= process.env.VUE_APP_SPDETAIL_ONESB;
          if(spdetail_flag == 0)
          {
            this.getSPDetails(token, USERID, key);
          }
        }

        
      })
      .catch((error) => {
        console.log('error msg block get token', error);
        let tmpData = {
            "advisorCode": "149306",
            "channelType": "BR",
            "cusBankAccNo": "",
            "bankName": "BBBJ",
            "needRiskProfile": "",
            "csrLimCode": "99999 (Dummy code)",
            "cafosCode": "",
            "oppId": "",
            "fscCode": "01325137",
            "spCode": "109337",
            "bankBrnch": "SBIN",
            "source": "0BBJ",
            "lanNo": "",
            "selectedTab": "",
            "subChannel": ""
          };
          
          sessionStorage.setItem("sp_details_data", JSON.stringify(tmpData));
          localStorage.setItem("sp_details_data", JSON.stringify(tmpData));
      });
    },
    getSPDetails(token, USERID, key) {
      let qData = {
        "data":{
          "UserID": USERID, 
          "Token": token,  
          "Key": key 
        }
      }
      this.backendApi("getSPDetails", qData)
      .then((response) => {
          if(response == 'error') {
          self.apiError = true;
        } else if(response && response.data) {
          //console.log('response sp details: ', response.data)
          // sessionStorage.setItem("sp_details_data", JSON.stringify(response.data.Data));
          // localStorage.setItem("sp_details_data", JSON.stringify(response.data.Data));
          let tmpData = {
            "advisorCode": "00050007",
            "channelType": "BR",
            "cusBankAccNo": "",
            "bankName": "BBBJ",
            "needRiskProfile": "",
            "csrLimCode": "99999",
            "cafosCode": "",
            "oppId": "",
            "fscCode": "01370250",
            "spCode": "93432",
            "bankBrnch": "BJ00",
            "source": "0BBJ",
            "lanNo": "",
            "selectedTab": "",
            "subChannel": ""
          };
          
          sessionStorage.setItem("sp_details_data", JSON.stringify(tmpData));
          localStorage.setItem("sp_details_data", JSON.stringify(tmpData));
        }
      })
      .catch((error) => {
        console.log('error msg block sp', error);
      });
    },
    startSession(rmId){
      let data = {
        transactionId: rmId
      }
      this.backendApi("generateToken", data)
      .then((resp) => {
        let token = resp.data.data.token.access_token;
        this.$store.commit('setToken',token);
        this.fetchRmDetails(token);
        
      })
      .catch((error) => {
        console.log(error);
        console.log("Failed to start session");
      })
    },
    fetchRmDetails(token){
      this.backendApi("getRmDetails", [], {"Authorization":`Bearer ${token}`}, "get")
        .then((response) => {
          if(response == 'error') {
          } else if(response && response.data) {
            this.rmData = response.data[0];

              if(this.rmData.RoleId == '1') {
                sessionStorage.setItem("channel_type", JSON.stringify("B2C"));
              } else {
                sessionStorage.setItem("channel_type", JSON.stringify("B2B"));
              }
              sessionStorage.setItem("rm_data", JSON.stringify(this.rmData));
              localStorage.setItem("rm_data", JSON.stringify(this.rmData));
              sessionStorage.setItem("sessionExpiryTime",'true');
              window.location.href = new URL(location).origin;
          }
        })
        .catch((error) => {
          console.log('error msg block dp', error);
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
            this.$store.commit('setConfigData', response.data.data.Jsondata[0].jsonDataUI)
          }
        })
        .catch((error) => {
          console.log("error msg block get config data", error);
        });

    },
    logout(){
      sessionStorage.removeItem("rm_data");
      localStorage.removeItem("rm_data");
      if (sessionStorage.getItem("rm_data")){
        this.rmData = JSON.parse(sessionStorage.getItem("rm_data"))
      }
      else
      this.rmData = "";
      window.location.href = new URL(location).origin;
    },
    tokenWarning() {
      let self = this;
      this.intervalTime = setInterval( function(){
        let decodedToken = self.parseJwt(self.$store.state.token);
        //console.log("Buffor TTTTTTT",((decodedToken['expires'] - Date.now() / 1000) / 60));
        let timer = ((decodedToken['expires'] - Date.now() / 1000) / 60);
        if (timer <= 1 && timer > 0) {
          self.tokenWarningFlag = true;
          if(self.tokenExpireWarningCancel == true){
            sessionStorage.setItem("sessionExpiryTime",'false');
            clearInterval(self.intervalTime);
            self.tokenWarningFlag = false;
          } 

          if(self.tokenExpireWarning == true){
            self.tokenWarningFlag = false;
            let data = {
              currentToken: self.$store.state.token
            }
            self.backendApi("refreshToken", data)
            .then((resp) => {
              if(resp.data.errors.length>0){
                self.$router.push({ path: '/networkalert', query: {msg: resp.data.errors[0]['errorMessage'] }});
              }
              self.tokenExpireWarning = false;
              let token = resp.data.data.newToken.access_token;
              self.$store.commit('setToken',token);
              self.callTokenWarning();
            })
            .catch((error) => {
              console.log("Failed to start session");
            })
          }
        }
        else if(timer <= 0){
          self.tokenWarningFlag = false;
          sessionStorage.setItem("sessionExpiryTime",'false');
          clearInterval(self.intervalTime);
          sessionStorage.removeItem('vuex')
          window.location.href = `${window.location.origin}/#/networkalert?msg=Your session time is expired , kindly login again&backUrl=logout`;
        } else {
          //console.log("else block executed");
        }
      },1000);
    },
    callTokenWarning(){
      clearInterval(this.intervalTime);
      this.tokenWarning();
    },
    parseJwt(token) {
      return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    },
    closeAlertDialog() {
      this.tokenWarningFlag = false;
    }
    
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
