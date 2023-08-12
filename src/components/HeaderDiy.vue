<template>
    <header class="header">
      <div class="hold">
        <div class="logo">
          <a href=""><img src="../assets/images/logo.png" alt="logo"></a>
        </div>
  
        <div class="right ms-auto">
          <!-- <router-link to="/dashboard" class="dashbrd d-flex justify-content-center align-items-center">
            <button type="button" class="btn btn-light rounded-pill me-3">Dashboard</button>       
          </router-link> -->
          <div class="dropdown">
            <!-- <button class="btn dropdown-toggle btn-sm rounded-pill" type="button" id="dropdownMenuButton1"
              data-bs-toggle="dropdown" aria-expanded="false">
              <img src="../assets/images/user-dropdown.png" alt="img">
            </button> -->
            <!-- <ul class="dropdown-menu drop" aria-labelledby="dropdownMenuButton1">
              <li class=" ms-2 align-items-center d-flex"><img src="~@/assets/images/icon1.png" alt=""/><a class="dropdown-item" href="#">{{ rmData.Name }}</a></li>
              <li class="ms-2 align-items-center d-flex"><img src="~@/assets/images/icon2.png" alt=""/><a class="dropdown-item" href="#">{{ rmData.Mobile }}</a></li>
              <li class="ms-2 align-items-center d-flex"><img src="~@/assets/images/icon3.png" alt=""/><a class="dropdown-item" href="#">{{ rmData.Email }}</a></li>
              <li class="ms-2 align-items-center d-flex"><img src="~@/assets/images/left-arrow-grey.png" alt=""/><span class="dropdown-item cursor-pointer" @click="logout">Logout</span></li>
            </ul> -->
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  //import Wizard from "@/components/wizard.vue";
  import {getLogoutURL, getConsumer} from '@/mixins/common';
  export default {
    name: 'Header',
    components: {
  
    },
    props: {
  
    },
    mounted() {
      console.log(new URL(location).origin+"/#/proposaldetailscheckdiy")
      let rmId = this.$route.query.transactionId;
      try{
        let arr = rmId.split("/");
        rmId = arr[0];
      }
      catch (err){
        console.log("In split catch")
      }
      if(rmId && !this.$store.state.token){
        this.startSession(rmId);
      }
      
      if(!this.$store.state.configData) {
        this.getConfigData();
      }
    },
    data() {
        return {
        rmData: "",
        };
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

                this.getSPDetails(token, USERID, key);
              }

              
          })
          .catch((error) => {
              console.log('error msg block get token', error);
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
              if(response.data.Data[0] == undefined)
              {
                  let tmpData = {
                    "advisorCode": "149306",
                    "channelType": "BR",
                    "cusBankAccNo": "",
                    "bankName": "BBBJ",
                    "needRiskProfile": "",
                    "csrLimCode": "99999 (Dummy code)",
                    "cafosCode": "99999",
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
              }
              else
              {
                  console.log("defined SP");
                  sessionStorage.setItem("sp_details_data", JSON.stringify(response.data.Data[0]));
                  localStorage.setItem("sp_details_data", JSON.stringify(response.data.Data[0]));
              }          
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
              this.$store.commit('setToken',token)
              window.location.reload();
          })
          .catch((error) => {
              console.log(error);
              console.log("Failed to start session");
          })
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
        
    },
  
  }
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  
  </style>
  