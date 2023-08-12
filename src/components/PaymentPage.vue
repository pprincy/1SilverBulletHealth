<template>
  <div class="">
    <Header />

<div class="wrapper">
    <div class="inner-wrapper">
        <!-- <div class="d-flex align-items-center pt-4 pb-2"> -->
            <a href="#/proposer-details" class="">
                <div class="d-flex align-items-center pt-4 pb-2">
                    <em class="icon-arrow-left me-3"></em>
                    <h3 class="mb-0">Back</h3>
                </div>
            </a>
            <div class="row">
                <div class="col-md-8">
                    <div class="pd-left">
                        <div class="payment-inner-section">
                            <h3>Choose a payment option</h3>

                            <section class="gal-container" id="accordion1" >
                            
                            <div class="radio-section-wrapper">
                                <input  id="ac-1" name="accordion-1" type="radio" >
                                <label for="ac-1" class="radio-label">
                                    <div class="card-dtls">
                                        <h6>Cards (Credit/Debit)</h6>
                                        <p>Pay using any credit or debit card</p>
                                    </div>
                                    <ul class="card-list">
                                        <li><img src="../assets/images/card1.png" alt=""></li>
                                        <li><img src="../assets/images/card2.png" alt=""></li>
                                        <li><img src="../assets/images/card3.png" alt=""></li>
                                        <li><img src="../assets/images/card4.png" alt=""></li>
                                    </ul>    
                                </label>
                                <article class="ac-small floating-form" >
                                    <form action="">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <div class="floating-label">
                                                    <input class="floating-input" type="text" placeholder=" " value="">
                                                    <label>Card Number</label>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <div class="floating-label">
                                                    <input class="floating-input" type="text" placeholder=" " value="">
                                                    <label>Name on Card</label>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <div class="row">
                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                        <div class="floating-label">
                                                            <!-- <input class="floating-input" type="text" placeholder=" " value="4589-1564-3278-6984"> -->
                                                            <div class="floating-label">
                                                                <select class="floating-select format">
                                                                    <option value="">Select</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                    <option value="9">9</option>
                                                                    <option value="10">10</option>
                                                                    <option value="11">11</option>
                                                                    <option value="12">12</option>
                                                                </select>
                                                                <label>Expiry Month</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                        <div class="floating-label">
                                                            <div class="floating-label">
                                                                <select class="floating-select format">
                                                                    <option value="">Select</option>
                                                                    <option value="3">2023</option>
                                                                    <option value="4">2024</option>
                                                                    <option value="5">2025</option>
                                                                    <option value="6">2026</option>
                                                                    <option value="7">2027</option>
                                                                    <option value="8">2028</option>
                                                                    <option value="9">2029</option>
                                                                    <option value="10">2030</option>
                                                                </select>
                                                                <label>Expiry Year</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <div class="row">
                                                    <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                                                        <div class="floating-label">
                                                            <input class="floating-input" type="text" placeholder=" " value="">
                                                            <label>CVV</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                                                        <div class="cvvIcon"><img src="../assets/images/cvvIcon.png" alt=""></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" class="btn btn-warning rounded-pill text-white">
                                            <span>Pay &#8377; 15,354 </span>
                                        </button>
                                    </form>
                                </article>
                            </div>
                            
                            <div class="radio-section-wrapper no-pointer">
                                <input id="ac-2" name="accordion-2" type="radio" >
                                <label for="ac-2" class="radio-label">
                                    <div class="card-dtls">
                                        <h6>Net Banking</h6>
                                        <p>Pay using any of 47 supported banks</p>
                                    </div>
                                </label>
                                <article class="ac-medium" >
                                                                
                                </article>
                            </div>
                            
                            <div class="radio-section-wrapper no-pointer">
                                <input id="ac-3" name="accordion-3" type="radio" >
                                <label for="ac-3" class="radio-label">
                                    <div class="card-dtls">
                                        <h6>UPI</h6>
                                        <p>Pay with any UPI app like Phonepe, Paytm, Google Pay and more</p>
                                    </div>
                                    <ul class="card-list">
                                        <li><img src="../assets/images/pg-icon1.png" alt=""></li>
                                        <li><img src="../assets/images/pg-icon2.png" alt=""></li>
                                        <li><img src="../assets/images/pg-icon3.png" alt=""></li>
                                    </ul>
                                </label>
                                <article class="ac-medium" >
                                                                
                                </article>
                            </div>
                            
                            <div class="radio-section-wrapper no-pointer">
                                <input id="ac-4" name="accordion-4" type="radio" >
                                <label for="ac-4" class="radio-label">
                                    <div class="card-dtls">
                                        <h6>Wallet</h6>
                                        <p>PayZapp, ItzCash, Mobikwik wallet and more available</p>
                                    </div>
                                    <ul class="card-list">
                                        <li><img src="../assets/images/pg-icon-1.png" alt=""></li>
                                        <li><img src="../assets/images/pg-icon-2.png" alt=""></li>
                                        <li><img src="../assets/images/pg-icon-3.png" alt=""></li>
                                    </ul>
                                </label>
                                <article class="ac-medium" >
                                                                
                                </article>
                            </div>
                            
                            <div class="radio-section-wrapper no-pointer">
                                <input id="ac-5" name="accordion-5" type="radio" >
                                <label for="ac-5" class="radio-label">
                                    <div class="card-dtls">
                                        <h6>EMI</h6>
                                        <p>Credit Card, Debit Card and Cardless EMI options available</p>
                                    </div>
                                </label>
                                <article class="ac-medium" >
                                                                
                                </article>
                            </div>
                            </section>

                        </div>    
                    </div> <!--pd-left ends--->
                </div>
                <div class="col-md-4">
                    <div class="pd-right">
                        <div class="pd-right-section1">
                            <h3>Policy Cart</h3>
                            <div class="policy-dts-wrap">
                            <div class="policy-name">
                                <figure>
                                <img src="../assets/images/logo-img3.png" alt="">
                                </figure>
                                <h6 class="mb-0 me-auto">ReAssure</h6>
                                <a href="https://www.nivabupa.com/content/dam/nivabupa/PDF/reassure/ReAssure%20-%20%20Brochure.pdf" target="_blank">
                                <em class="download"></em>
                                </a>
                            </div>
                            <div class="p-details">
                                <ul class="policy-item-detail1">
                                    <li>
                                        <h6>Policy Type</h6>
                                        <span>Health Insurance </span>
                                    </li>
                                    <li>
                                        <h6>Proposal No.</h6>
                                        <span>1120045589105 </span>
                                    </li>
                                </ul>
                                <!-- <ul class="policy-item-detail2">
                                    <li>
                                        <h6>Net Premium</h6>
                                        <span> 22,560 </span>
                                    </li>
                                </ul> -->
                            </div>
                            </div>
                            <ul class="ttl-preminum">
                            <li><b>Payable Amount</b></li>
                            <span>&#8377; 15,354</span>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        <!-- </div> -->
    </div>
</div>
   


  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: 'paymentPage',
  components: {
    Header
  },
  mounted() {
    var radio = window.location.hash;
    function checkRadio() {
        if (radio === ("ac-1" || "ac-2" || "ac-3" || "ac-4"|| "ac-5") ){
            document.getElementById("accordion1").onclick = function() {
                var openAcc = window.open(this.href);
            }
        }   
        // else {
        //     document.getElementByID("accordion2").onclick = function() {
        //     var openAcc = window.open(this.href);
        //     }
        // }
        // check the radio button
        document.getElementById(radio).checked = true;
    }
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
