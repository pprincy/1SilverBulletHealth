<template>
  <div>
    <div class="container">
        <div class="failed-img-holder text-center mt-5 mb-3">
          <figure>
            <img src="~@/assets/images/payment_failed.png" alt="" />
          </figure>
          <br>
          <figcaption class="mb-4">

            <span id="errorText">Sorry, something went wrong, Please try again after sometime.</span><br>
            <!-- <span id="errorText">We are facing with following error.</span><br> -->
            
            <div v-if="this.msgError">
            <span id="errorMsgHeading">{{this.msgError}}.</span>
            </div>
             <div v-if="this.reqId">
            <span id="errorMsg"><b>Request Id: </b>{{this.reqId}}.</span>
            </div>
            <div v-if="this.msg.length=='1'">
            <span  id="errorMsg">{{this.msg[0]}}.</span>
            </div>
            
            <div v-else>
             <span v-if="!flag" id="errorMsg">{{this.msg[0]}}....<button id="moreBtn" v-on:click="moreError">more</button></span>
            <span v-if="flag" id="errorMsg">{{this.msg[0]}}....<button id="moreBtn" v-on:click="moreError">less</button></span>
            </div>
            <!-- <div v-if="flag"> -->
            <div v-if="flag" v-for="(error,index) in this.msg" :key="error">
            <span v-if="index!='0'" id="errorMsg">{{error}}.</span>
            </div>
            
           
            
          </figcaption>
        </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "alertdiypage",
  props: {  },
  components: {},
  data() {
    return {
         msg:[],
        msgError:"",
       
        flag:false,
        reqId:"",
    };
  },
  
  methods:{
        moreError(){
        this.flag=!this.flag
    },
  },
  mounted() {
    
   let m=this.$route.query.msg
    
    let e=this.$route.query.msgError
    this.msgError=e
    let r=this.$route.query.reqId
    this.reqId=r
    
    
    if(typeof(m)=="string")
    this.msg.push(m)
    else
    this.msg=m
  },
  methods: {
    moreError(){
        this.flag=!this.flag
    },
  },
};
</script>

<style scoped lang="scss">
#errorMsgHeading{
  font-size: 17px;
}
#errorText{
    font-size: 20px;
}
#errorMsg{
    font-size: 15px;
    font-weight: 400;
    text-align: left;
}
#moreBtn{
    color: blue;
    cursor: pointer;
    border: none;
    background-color: white;
}
#btn{
    width:70px;
    height:30px;

    font-size: 15px;
    border:solid 1px rgb(245, 94, 94);
    border-radius: 4px;
    background-color: rgb(245, 94, 94)
}
// @import "~@/assets/scss/components/paymentsuccess.scss";
// @import "~@/assets/scss/components/paymentfailed.scss";
</style>