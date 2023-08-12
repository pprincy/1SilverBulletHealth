<template>
    <div class="text-center" v-if="loading" style="padding-top: 50px;">
        <loadingPage />
    </div>
    <div v-else class="">
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

                            <div class="wizard-hold">
    <ul class="nav nav-tabs wizard-step" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="step1-tab" data-bs-toggle="tab" data-bs-target="#step1" type="button"
          role="tab" aria-controls="step1" aria-selected="true">
          <div class="cir">
            <i class="bi bi-person"></i>
            <span class="bi bi-check"></span>
          </div>
          <span class="txt">Proposal Details</span>
          <div class="line"></div>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link " id="step2-tab" data-bs-toggle="tab" data-bs-target="#step2" type="button"
          role="tab" aria-controls="step2" aria-selected="false">
          <div class="cir">
            <i class="bi bi-person"></i>
            <span class="bi bi-check"></span>
          </div>
          <span class="txt">Insured Details</span>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="step3-tab" data-bs-toggle="tab" data-bs-target="#step3" type="button"
          role="tab" aria-controls="step3" aria-selected="false">
          <div class="cir">
            <i class="bi bi-heart-pulse"></i>
            <span class="bi bi-check"></span>
          </div>
          <span class="txt">Medical</span>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link " id="step4-tab" data-bs-toggle="tab" data-bs-target="#step4" type="button" role="tab"
          aria-controls="step4" aria-selected="false">
          <div class="cir">
            <i class="bi bi-person-add"></i>
            <span class="bi bi-check"></span>
          </div>
          <span class="txt">Nominee</span>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link " id="step5-tab" data-bs-toggle="tab" data-bs-target="#step5" type="button" role="tab"
          aria-controls="step5" aria-selected="false">
          <div class="cir">
            <i class="bi bi-arrow-left-right"></i>
            <span class="bi bi-check"></span>
          </div>
          <span class="txt">Portability</span>
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link " id="step6-tab" data-bs-toggle="tab" data-bs-target="#step6" type="button" role="tab"
          aria-controls="step6" aria-selected="false">
          <div class="cir">
            <i class="bi bi-eye"></i>
            <span class="bi bi-check"></span>
          </div>
          <span class="txt">Preview</span>
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="step1" role="tabpanel" aria-labelledby="step1-tab">
        <div class="tab-body">
          <!--Proposer detail form step1-->
          <div class="floating-form">
            <h3>Let's start with proposer details</h3>
            <h6 class="base-reg">Proposer is going to pay the premium and avail tax benefits</h6>
            <div class="form-wrapper pt-3">
              <form action="">
                <h5 class="mb-3">Proposer's details</h5>
                <div class="row mb-3">
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="Jay">
                      <label>First Name</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="Prakash">
                      <label>Middle Name</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="Yadav">
                      <label>Last Name</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <!-- <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>Date of Birth</label>
                    </div> -->
                    <!-- <div class="floating-label dob">
                      <Datepicker v-model="date1" auto-apply :enable-time-picker="false" />
                      <label class="dob-label">Date of Birth</label>
                    </div> -->
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder="" value="">
                      <label>Date of Birth</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <select class="floating-select format">
                        <option></option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="2">Transgender</option>
                      </select>
                      <label>Gender</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>PAN Number</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>Email</label>
                    </div>
                  </div>
                </div>

                <h5 class="mb-3">Address details</h5>
                <div class="row mb-3">
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label field1">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>Address Line 1</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label field1">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>Address Line 2</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label field1">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>Pincode</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label field1">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>City</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label field1">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>State</label>
                    </div>
                  </div>
                </div>

                

                <!-- <div class="btn-hold text-center">
                  <button type="button" class="btn btn-warning rounded-pill text-white mx-2">
                    <span>Continue with Insured Details</span>
                    <em class="bi bi-chevron-right ms-2"></em>
                  </button>
                </div> -->

                <div class="btn-hold text-center">
                  <!-- <button type="button" class="btn btn-outline-secondary rounded-pill mx-2">
                    <em class="bi bi-chevron-left me-2"></em>
                    <span>Previous</span>
                  </button> -->
                  <button type="button" class="btn btn-warning rounded-pill text-white mx-2" @click="activeTab('step2')">
                    <span>Proceed</span>
                    <em class="bi bi-chevron-right ms-2"></em>
                  </button>
                </div>

              </form>
            </div>
          </div>
          <!--Proposer detail form step1-->
        </div>
      </div>
      <div class="tab-pane fade" id="step2" role="tabpanel" aria-labelledby="step2-tab">
        <div class="tab-body">
          <!--Insured detail form step2-->
          <div class="floating-form">
            <h3>More details about the members to be insured</h3>
            <h6 class="base-reg">Proposer is going to pay the premium and avail tax benefits</h6>

            <div class="form-wrapper pt-3">

              <form action="">
                <h5 class="mb-3">Jay Prakash Yadav (Self)</h5>
                <div class="row mb-3">

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <!-- <div class="floating-label dob">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <Datepicker v-model="date2" auto-apply :enable-time-picker="false"  />
                      <label class="dob-label">Date of Birth</label>
                    </div> -->
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder="" value="">
                      <label>Date of Birth</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>Age</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <select class="floating-select format">
                        <option></option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Transgender</option>
                      </select>
                      <label>Gender</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <select class="floating-select format">
                        <option></option>
                        <option value= "1 ">1 Feet 5 Inches</option>
                        <option value= "2 ">1 Feet 6 Inches</option>
                        <option value= "3 ">1 Feet 7 Inches</option>
                        <option value=" 4" >1 Feet 8 Inches</option>
                        <option value= "5 ">1 Feet 9 Inches</option>
                        <option value= "6 ">1 Feet 10 Inches</option>
                        <option value= "7 ">1 Feet 11 Inches</option>
                        <option value= "8 ">2 Feet 0 Inches</option>
                        <option value= "9 ">2 Feet 1 Inches</option>
                        <option value= "10" >2 Feet 2 Inches</option>
                        <option value= "11" >2 Feet 3 Inches</option>
                        <option value= "12" >2 Feet 4 Inches</option>
                        <option value= "13" >2 Feet 5 Inches</option>
                        <option value= "14" >2 Feet 6 Inches</option>
                        <option value= "15" >2 Feet 7 Inches</option>
                        <option value= "16" >2 Feet 8 Inches</option>
                        <option value= "17" >2 Feet 9 Inches</option>
                        <option value= "18" >2 Feet 10 Inches</option>
                        <option value= "19" >2 Feet 11 Inches</option>
                        <option value= "20" >3 Feet 0 Inches</option>
                        <option value= "21" >3 Feet 1 Inches</option>
                        <option value= "22" >3 Feet 2 Inches</option>
                        <option value= "23" >3 Feet 3 Inches</option>
                        <option value= "24" >3 Feet 4 Inches</option>
                        <option value= "25" >3 Feet 5 Inches</option>
                        <option value= "26" >3 Feet 6 Inches</option>
                        <option value= "27" >3 Feet 7 Inches</option>
                        <option value= "28" >3 Feet 8 Inches</option>
                        <option value= "29" >3 Feet 9 Inches</option>
                        <option value= "30" >3 Feet 10 Inches</option>
                        <option value= "31" >3 Feet 11 Inches</option>
                        <option value= "32">4 Feet 0 Inches</option>
                        <option value= "33">4 Feet 1 Inches</option>
                        <option value= "34">4 Feet 2 Inches</option>
                        <option value= "35">4 Feet 3 Inches</option>
                        <option value= "36">4 Feet 4 Inches</option>
                        <option value= "37">4 Feet 5  Inches</option>
                        <option value= "38">4 Feet 6 Inches</option>
                        <option value= "39">4 Feet 7 Inches</option>
                        <option value= "40">4 Feet 8 Inches</option>
                        <option value= "41">4 Feet 9 Inches</option>
                        <option value= "42">4 Feet 10 Inches</option>
                        <option value= "43">4 Feet 11 Inches</option>
                        <option value= "44">5 Feet 0 Inches</option>
                        <option value= "45">5 Feet 1 Inches</option>
                        <option value= "46">5 Feet 2 Inches</option>
                        <option value= "47" >5 Feet 3 Inches</option>
                        <option value= "48">5 Feet 4 Inches</option>
                        <option value= "49" >5 Feet 5 Inches</option>
                        <option value= "50">5 Feet 6 Inches</option>
                        <option value= "51">5 Feet 7 Inches</option>
                        <option value= "52">5 Feet 8 Inches</option>
                        <option value= "53">5 Feet 9 Inches</option>
                        <option value= "54">5 Feet 10 Inches</option>
                        <option value= "55">5 Feet 11 Inches</option>
                        <option value= "56">6 Feet 0 Inches</option>
                        <option value= "57">6 Feet 1 Inches</option>
                        <option value= "58">6 Feet 2 Inches</option>
                        <option value= "59">6 Feet 3 Inches</option>
                        <option value= "60">6 Feet 4 Inches</option>
                        <option value= "61">6 Feet 5 Inches</option>
                        <option value= "62">6 Feet 6 Inches</option>
                        <option value= "63" >6 Feet 7 Inches</option>
                        <option value= "64">6 Feet 8 Inches</option>
                        <option value= "65" >6 Feet 9 Inches</option>
                        <option value= "66">6 Feet 10 Inches</option>
                        <option value= "67">6 Feet 11 Inches</option>
                      </select>
                      <label>Height</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <select class="floating-select format">
                        <option></option>
                        <option value=" 1" >0</option>
                        <option value=" 2" >1</option>
                        <option value=" 3" >2</option>
                        <option value=" 4" >3</option>
                        <option value=" 5" >4</option>
                        <option value=" 6" >5</option>
                        <option value=" 7" >6</option>
                        <option value=" 8" >7</option>
                        <option value=" 9" >8</option>
                        <option value= "10">9</option>
                        <option value= "11" >10</option>
                        <option value= "12" >11</option>
                        <option value= "13" >12</option>
                        <option value= "14" >13</option>
                        <option value= "15" >14</option>
                        <option value= "16" >15</option>
                        <option value= "17" >16</option>
                        <option value= "18" >17</option>
                        <option value= "19" >18</option>
                        <option value= "20" >19</option>
                        <option value= "21" >20</option>
                        <option value= "22" >21</option>
                        <option value= "23" >22</option>
                        <option value= "24" >23</option>
                        <option value= "25" >24</option>
                        <option value= "26" >25</option>
                        <option value= "27" >26</option>
                        <option value= "28" >27</option>
                        <option value= "29" >28</option>
                        <option value= "30" >29</option>
                        <option value= "31" >30</option>
                        <option value= "32" >31</option>
                        <option value= "33" >32</option>
                        <option value= "35" >33</option>
                        <option value= "36" >34</option>
                        <option value= "37" >35</option>
                        <option value= "38" >36</option>
                        <option value= "39" >37</option>
                        <option value= "40" >38</option>
                        <option value= "41" >39</option>
                        <option value= "42" >40</option>
                        <option value= "43" >41</option>
                        <option value= "44" >42</option>
                        <option value= "45" >43</option>
                        <option value= "46" >44</option>
                        <option value= "47" >45</option>
                        <option value= "48" >46</option>
                        <option value= "49" >47</option>
                        <option value= "50" >48</option>
                        <option value= "51 ">49</option>
                        <option value= "52 ">50</option>
                        <option value= "53 ">51</option>
                        <option value= "54 ">52</option>
                        <option value= "55 ">53</option>
                        <option value= "56 ">54</option>
                        <option value= "57 ">55</option>
                        <option value= "58 ">56</option>
                        <option value= "59 ">57</option>
                        <option value= "60 ">58</option>
                        <option value= "61 ">59</option>
                        <option value= "62 ">60</option>
                        <option value= "63 ">61</option>
                        <option value= "64 ">62</option>
                        <option value=" 65" >63</option>
                        <option value= "66 ">64</option>
                        <option value= "67" >64</option>
                        <option value= "68" >65</option>
                        <option value= "69" >66</option>
                        <option value= "70" >67</option>
                        <option value= "71" >68</option>
                        <option value= "72" >69</option>
                        <option value= "73" >70</option>
                        <option value= "74" >71</option>
                        <option value= "75" >72</option>
                        <option value= "76" >73</option>
                        <option value= "77" >74</option>
                        <option value= "78" >75</option>
                        <option value= "79" >76</option>
                        <option value= "80" >77</option>
                        <option value= "81" >78</option>
                        <option value= "82" >79</option>
                        <option value= "83">79</option>
                        <option value= "84">80</option>
                        <option value= "85">81</option>
                        <option value= "86">82</option>
                        <option value= "87">83</option>
                        <option value= "88">84</option>
                        <option value= "89">85</option>
                        <option value= "90">86</option>
                        <option value= "91">87</option>
                        <option value= "92">88</option>
                        <option value= "93">89</option>
                        <option value=" 94" >90</option>
                        <option value= "95">91</option>
                        <option value= "96">92</option>
                        <option value= "97">93</option>
                        <option value= "98">94</option>
                        <option value= "99 ">94</option>
                        <option value= "100" >95</option>
                        <option value= "101" >96</option>
                        <option value= "102" >97</option>
                        <option value= "103" >98</option>
                        <option value= "104" >99</option>
                        <option value= "105" >100</option>
                        <option value= "106" >101</option>
                        <option value= "107" >102</option>
                        <option value= "108" >103</option>
                        <option value= "109" >104</option>
                        <option value= "110" >105</option>
                        <option value= "111" >106</option>
                        <option value= "112" >107</option>
                        <option value= "113" >108</option>
                        <option value= "114" >109</option>
                        <option value= "115" >110</option>
                      </select>
                      <label>Weight in KGs</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <select class="floating-select format">
                        <option></option>
                        <option value= "1 ">18</option>
                        <option value= "2 ">19</option>
                        <option value= "3 ">20</option>
                        <option value= "4 ">21</option>
                        <option value= "5 ">22</option>
                        <option value= "6 ">23</option>
                        <option value= "7 ">24</option>
                        <option value= "8 ">25</option>
                        <option value= "9 ">26</option>
                        <option value= "10" >27</option>
                        <option value= "11" >28</option>
                        <option value= "12" >29</option>
                        <option value= "13" >30</option>
                        <option value= "14" >31</option>
                        <option value= "15" >32</option>  
                      </select>
                      <label>BMI</label>
                    </div>
                  </div>

                </div>

                <h5 class="mb-3">Spouse's Details</h5>
                <div class="row mb-3">
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>First Name</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>Middle Name</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>Last Name</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <!-- <div class="floating-label dob">
                      <Datepicker v-model="date3" auto-apply :enable-time-picker="false"  />
                      <label class="dob-label">Date of Birth</label>
                    </div> -->
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder="" value="">
                      <label>Date of Birth</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>Age</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <select class="floating-select format">
                        <option></option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Transgender</option>
                      </select>
                      <label>Gender</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <select class="floating-select format">
                        <option></option>
                        <option value= "1 ">1 Feet 5 Inches</option>
                        <option value= "2 ">1 Feet 6 Inches</option>
                        <option value= "3 ">1 Feet 7 Inches</option>
                        <option value=" 4" >1 Feet 8 Inches</option>
                        <option value= "5 ">1 Feet 9 Inches</option>
                        <option value= "6 ">1 Feet 10 Inches</option>
                        <option value= "7 ">1 Feet 11 Inches</option>
                        <option value= "8 ">2 Feet 0 Inches</option>
                        <option value= "9 ">2 Feet 1 Inches</option>
                        <option value= "10" >2 Feet 2 Inches</option>
                        <option value= "11" >2 Feet 3 Inches</option>
                        <option value= "12" >2 Feet 4 Inches</option>
                        <option value= "13" >2 Feet 5 Inches</option>
                        <option value= "14" >2 Feet 6 Inches</option>
                        <option value= "15" >2 Feet 7 Inches</option>
                        <option value= "16" >2 Feet 8 Inches</option>
                        <option value= "17" >2 Feet 9 Inches</option>
                        <option value= "18" >2 Feet 10 Inches</option>
                        <option value= "19" >2 Feet 11 Inches</option>
                        <option value= "20" >3 Feet 0 Inches</option>
                        <option value= "21" >3 Feet 1 Inches</option>
                        <option value= "22" >3 Feet 2 Inches</option>
                        <option value= "23" >3 Feet 3 Inches</option>
                        <option value= "24" >3 Feet 4 Inches</option>
                        <option value= "25" >3 Feet 5 Inches</option>
                        <option value= "26" >3 Feet 6 Inches</option>
                        <option value= "27" >3 Feet 7 Inches</option>
                        <option value= "28" >3 Feet 8 Inches</option>
                        <option value= "29" >3 Feet 9 Inches</option>
                        <option value= "30" >3 Feet 10 Inches</option>
                        <option value= "31" >3 Feet 11 Inches</option>
                        <option value= "32">4 Feet 0 Inches</option>
                        <option value= "33">4 Feet 1 Inches</option>
                        <option value= "34">4 Feet 2 Inches</option>
                        <option value= "35">4 Feet 3 Inches</option>
                        <option value= "36">4 Feet 4 Inches</option>
                        <option value= "37">4 Feet 5  Inches</option>
                        <option value= "38">4 Feet 6 Inches</option>
                        <option value= "39">4 Feet 7 Inches</option>
                        <option value= "40">4 Feet 8 Inches</option>
                        <option value= "41">4 Feet 9 Inches</option>
                        <option value= "42">4 Feet 10 Inches</option>
                        <option value= "43">4 Feet 11 Inches</option>
                        <option value= "44">5 Feet 0 Inches</option>
                        <option value= "45">5 Feet 1 Inches</option>
                        <option value= "46">5 Feet 2 Inches</option>
                        <option value= "47" >5 Feet 3 Inches</option>
                        <option value= "48">5 Feet 4 Inches</option>
                        <option value= "49" >5 Feet 5 Inches</option>
                        <option value= "50">5 Feet 6 Inches</option>
                        <option value= "51">5 Feet 7 Inches</option>
                        <option value= "52">5 Feet 8 Inches</option>
                        <option value= "53">5 Feet 9 Inches</option>
                        <option value= "54">5 Feet 10 Inches</option>
                        <option value= "55">5 Feet 11 Inches</option>
                        <option value= "56">6 Feet 0 Inches</option>
                        <option value= "57">6 Feet 1 Inches</option>
                        <option value= "58">6 Feet 2 Inches</option>
                        <option value= "59">6 Feet 3 Inches</option>
                        <option value= "60">6 Feet 4 Inches</option>
                        <option value= "61">6 Feet 5 Inches</option>
                        <option value= "62">6 Feet 6 Inches</option>
                        <option value= "63" >6 Feet 7 Inches</option>
                        <option value= "64">6 Feet 8 Inches</option>
                        <option value= "65" >6 Feet 9 Inches</option>
                        <option value= "66">6 Feet 10 Inches</option>
                        <option value= "67">6 Feet 11 Inches</option>
                      </select>
                      <label>Height</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <select class="floating-select format">
                        <option></option>
                        <option value=" 1" >0</option>
                        <option value=" 2" >1</option>
                        <option value=" 3" >2</option>
                        <option value=" 4" >3</option>
                        <option value=" 5" >4</option>
                        <option value=" 6" >5</option>
                        <option value=" 7" >6</option>
                        <option value=" 8" >7</option>
                        <option value=" 9" >8</option>
                        <option value= "10">9</option>
                        <option value= "11" >10</option>
                        <option value= "12" >11</option>
                        <option value= "13" >12</option>
                        <option value= "14" >13</option>
                        <option value= "15" >14</option>
                        <option value= "16" >15</option>
                        <option value= "17" >16</option>
                        <option value= "18" >17</option>
                        <option value= "19" >18</option>
                        <option value= "20" >19</option>
                        <option value= "21" >20</option>
                        <option value= "22" >21</option>
                        <option value= "23" >22</option>
                        <option value= "24" >23</option>
                        <option value= "25" >24</option>
                        <option value= "26" >25</option>
                        <option value= "27" >26</option>
                        <option value= "28" >27</option>
                        <option value= "29" >28</option>
                        <option value= "30" >29</option>
                        <option value= "31" >30</option>
                        <option value= "32" >31</option>
                        <option value= "33" >32</option>
                        <option value= "35" >33</option>
                        <option value= "36" >34</option>
                        <option value= "37" >35</option>
                        <option value= "38" >36</option>
                        <option value= "39" >37</option>
                        <option value= "40" >38</option>
                        <option value= "41" >39</option>
                        <option value= "42" >40</option>
                        <option value= "43" >41</option>
                        <option value= "44" >42</option>
                        <option value= "45" >43</option>
                        <option value= "46" >44</option>
                        <option value= "47" >45</option>
                        <option value= "48" >46</option>
                        <option value= "49" >47</option>
                        <option value= "50" >48</option>
                        <option value= "51 ">49</option>
                        <option value= "52 ">50</option>
                        <option value= "53 ">51</option>
                        <option value= "54 ">52</option>
                        <option value= "55 ">53</option>
                        <option value= "56 ">54</option>
                        <option value= "57 ">55</option>
                        <option value= "58 ">56</option>
                        <option value= "59 ">57</option>
                        <option value= "60 ">58</option>
                        <option value= "61 ">59</option>
                        <option value= "62 ">60</option>
                        <option value= "63 ">61</option>
                        <option value= "64 ">62</option>
                        <option value=" 65" >63</option>
                        <option value= "66 ">64</option>
                        <option value= "67" >64</option>
                        <option value= "68" >65</option>
                        <option value= "69" >66</option>
                        <option value= "70" >67</option>
                        <option value= "71" >68</option>
                        <option value= "72" >69</option>
                        <option value= "73" >70</option>
                        <option value= "74" >71</option>
                        <option value= "75" >72</option>
                        <option value= "76" >73</option>
                        <option value= "77" >74</option>
                        <option value= "78" >75</option>
                        <option value= "79" >76</option>
                        <option value= "80" >77</option>
                        <option value= "81" >78</option>
                        <option value= "82" >79</option>
                        <option value= "83">79</option>
                        <option value= "84">80</option>
                        <option value= "85">81</option>
                        <option value= "86">82</option>
                        <option value= "87">83</option>
                        <option value= "88">84</option>
                        <option value= "89">85</option>
                        <option value= "90">86</option>
                        <option value= "91">87</option>
                        <option value= "92">88</option>
                        <option value= "93">89</option>
                        <option value=" 94" >90</option>
                        <option value= "95">91</option>
                        <option value= "96">92</option>
                        <option value= "97">93</option>
                        <option value= "98">94</option>
                        <option value= "99 ">94</option>
                        <option value= "100" >95</option>
                        <option value= "101" >96</option>
                        <option value= "102" >97</option>
                        <option value= "103" >98</option>
                        <option value= "104" >99</option>
                        <option value= "105" >100</option>
                        <option value= "106" >101</option>
                        <option value= "107" >102</option>
                        <option value= "108" >103</option>
                        <option value= "109" >104</option>
                        <option value= "110" >105</option>
                        <option value= "111" >106</option>
                        <option value= "112" >107</option>
                        <option value= "113" >108</option>
                        <option value= "114" >109</option>
                        <option value= "115" >110</option>
                      </select>
                      <label>Weight in KGs</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <select class="floating-select format">
                        <option></option>
                        <option value= "1 ">18</option>
                        <option value= "2 ">19</option>
                        <option value= "3 ">20</option>
                        <option value= "4 ">21</option>
                        <option value= "5 ">22</option>
                        <option value= "6 ">23</option>
                        <option value= "7 ">24</option>
                        <option value= "8 ">25</option>
                        <option value= "9 ">26</option>
                        <option value= "10" >27</option>
                        <option value= "11" >28</option>
                        <option value= "12" >29</option>
                        <option value= "13" >30</option>
                        <option value= "14" >31</option>
                        <option value= "15" >32</option>  
                      </select>
                      <label>BMI</label>
                    </div>
                  </div>

                </div>
                <h5 class="mb-3">Son's Details</h5>
                <div class="row mb-3">
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>First Name</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>Middle Name</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>Last Name</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <!-- <div class="floating-label dob">
                      <Datepicker v-model="date4" auto-apply :enable-time-picker="false"  />
                      <label class="dob-label">Date of Birth</label>
                    </div> -->
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder="" value="">
                      <label>Date of Birth</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>Age</label>
                    </div>
                  </div>
                   <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <select class="floating-select format">
                        <option></option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Transgender</option>
                      </select>
                      <label>Gender</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <select class="floating-select format">
                        <option></option>
                        <option value= "1 ">1 Feet 5 Inches</option>
                        <option value= "2 ">1 Feet 6 Inches</option>
                        <option value= "3 ">1 Feet 7 Inches</option>
                        <option value=" 4" >1 Feet 8 Inches</option>
                        <option value= "5 ">1 Feet 9 Inches</option>
                        <option value= "6 ">1 Feet 10 Inches</option>
                        <option value= "7 ">1 Feet 11 Inches</option>
                        <option value= "8 ">2 Feet 0 Inches</option>
                        <option value= "9 ">2 Feet 1 Inches</option>
                        <option value= "10" >2 Feet 2 Inches</option>
                        <option value= "11" >2 Feet 3 Inches</option>
                        <option value= "12" >2 Feet 4 Inches</option>
                        <option value= "13" >2 Feet 5 Inches</option>
                        <option value= "14" >2 Feet 6 Inches</option>
                        <option value= "15" >2 Feet 7 Inches</option>
                        <option value= "16" >2 Feet 8 Inches</option>
                        <option value= "17" >2 Feet 9 Inches</option>
                        <option value= "18" >2 Feet 10 Inches</option>
                        <option value= "19" >2 Feet 11 Inches</option>
                        <option value= "20" >3 Feet 0 Inches</option>
                        <option value= "21" >3 Feet 1 Inches</option>
                        <option value= "22" >3 Feet 2 Inches</option>
                        <option value= "23" >3 Feet 3 Inches</option>
                        <option value= "24" >3 Feet 4 Inches</option>
                        <option value= "25" >3 Feet 5 Inches</option>
                        <option value= "26" >3 Feet 6 Inches</option>
                        <option value= "27" >3 Feet 7 Inches</option>
                        <option value= "28" >3 Feet 8 Inches</option>
                        <option value= "29" >3 Feet 9 Inches</option>
                        <option value= "30" >3 Feet 10 Inches</option>
                        <option value= "31" >3 Feet 11 Inches</option>
                        <option value= "32">4 Feet 0 Inches</option>
                        <option value= "33">4 Feet 1 Inches</option>
                        <option value= "34">4 Feet 2 Inches</option>
                        <option value= "35">4 Feet 3 Inches</option>
                        <option value= "36">4 Feet 4 Inches</option>
                        <option value= "37">4 Feet 5  Inches</option>
                        <option value= "38">4 Feet 6 Inches</option>
                        <option value= "39">4 Feet 7 Inches</option>
                        <option value= "40">4 Feet 8 Inches</option>
                        <option value= "41">4 Feet 9 Inches</option>
                        <option value= "42">4 Feet 10 Inches</option>
                        <option value= "43">4 Feet 11 Inches</option>
                        <option value= "44">5 Feet 0 Inches</option>
                        <option value= "45">5 Feet 1 Inches</option>
                        <option value= "46">5 Feet 2 Inches</option>
                        <option value= "47" >5 Feet 3 Inches</option>
                        <option value= "48">5 Feet 4 Inches</option>
                        <option value= "49" >5 Feet 5 Inches</option>
                        <option value= "50">5 Feet 6 Inches</option>
                        <option value= "51">5 Feet 7 Inches</option>
                        <option value= "52">5 Feet 8 Inches</option>
                        <option value= "53">5 Feet 9 Inches</option>
                        <option value= "54">5 Feet 10 Inches</option>
                        <option value= "55">5 Feet 11 Inches</option>
                        <option value= "56">6 Feet 0 Inches</option>
                        <option value= "57">6 Feet 1 Inches</option>
                        <option value= "58">6 Feet 2 Inches</option>
                        <option value= "59">6 Feet 3 Inches</option>
                        <option value= "60">6 Feet 4 Inches</option>
                        <option value= "61">6 Feet 5 Inches</option>
                        <option value= "62">6 Feet 6 Inches</option>
                        <option value= "63" >6 Feet 7 Inches</option>
                        <option value= "64">6 Feet 8 Inches</option>
                        <option value= "65" >6 Feet 9 Inches</option>
                        <option value= "66">6 Feet 10 Inches</option>
                        <option value= "67">6 Feet 11 Inches</option>
                      </select>
                      <label>Height</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <select class="floating-select format">
                        <option></option>
                        <option value=" 1" >0</option>
                        <option value=" 2" >1</option>
                        <option value=" 3" >2</option>
                        <option value=" 4" >3</option>
                        <option value=" 5" >4</option>
                        <option value=" 6" >5</option>
                        <option value=" 7" >6</option>
                        <option value=" 8" >7</option>
                        <option value=" 9" >8</option>
                        <option value= "10">9</option>
                        <option value= "11" >10</option>
                        <option value= "12" >11</option>
                        <option value= "13" >12</option>
                        <option value= "14" >13</option>
                        <option value= "15" >14</option>
                        <option value= "16" >15</option>
                        <option value= "17" >16</option>
                        <option value= "18" >17</option>
                        <option value= "19" >18</option>
                        <option value= "20" >19</option>
                        <option value= "21" >20</option>
                        <option value= "22" >21</option>
                        <option value= "23" >22</option>
                        <option value= "24" >23</option>
                        <option value= "25" >24</option>
                        <option value= "26" >25</option>
                        <option value= "27" >26</option>
                        <option value= "28" >27</option>
                        <option value= "29" >28</option>
                        <option value= "30" >29</option>
                        <option value= "31" >30</option>
                        <option value= "32" >31</option>
                        <option value= "33" >32</option>
                        <option value= "35" >33</option>
                        <option value= "36" >34</option>
                        <option value= "37" >35</option>
                        <option value= "38" >36</option>
                        <option value= "39" >37</option>
                        <option value= "40" >38</option>
                        <option value= "41" >39</option>
                        <option value= "42" >40</option>
                        <option value= "43" >41</option>
                        <option value= "44" >42</option>
                        <option value= "45" >43</option>
                        <option value= "46" >44</option>
                        <option value= "47" >45</option>
                        <option value= "48" >46</option>
                        <option value= "49" >47</option>
                        <option value= "50" >48</option>
                        <option value= "51 ">49</option>
                        <option value= "52 ">50</option>
                        <option value= "53 ">51</option>
                        <option value= "54 ">52</option>
                        <option value= "55 ">53</option>
                        <option value= "56 ">54</option>
                        <option value= "57 ">55</option>
                        <option value= "58 ">56</option>
                        <option value= "59 ">57</option>
                        <option value= "60 ">58</option>
                        <option value= "61 ">59</option>
                        <option value= "62 ">60</option>
                        <option value= "63 ">61</option>
                        <option value= "64 ">62</option>
                        <option value=" 65" >63</option>
                        <option value= "66 ">64</option>
                        <option value= "67" >64</option>
                        <option value= "68" >65</option>
                        <option value= "69" >66</option>
                        <option value= "70" >67</option>
                        <option value= "71" >68</option>
                        <option value= "72" >69</option>
                        <option value= "73" >70</option>
                        <option value= "74" >71</option>
                        <option value= "75" >72</option>
                        <option value= "76" >73</option>
                        <option value= "77" >74</option>
                        <option value= "78" >75</option>
                        <option value= "79" >76</option>
                        <option value= "80" >77</option>
                        <option value= "81" >78</option>
                        <option value= "82" >79</option>
                        <option value= "83">79</option>
                        <option value= "84">80</option>
                        <option value= "85">81</option>
                        <option value= "86">82</option>
                        <option value= "87">83</option>
                        <option value= "88">84</option>
                        <option value= "89">85</option>
                        <option value= "90">86</option>
                        <option value= "91">87</option>
                        <option value= "92">88</option>
                        <option value= "93">89</option>
                        <option value=" 94" >90</option>
                        <option value= "95">91</option>
                        <option value= "96">92</option>
                        <option value= "97">93</option>
                        <option value= "98">94</option>
                        <option value= "99 ">94</option>
                        <option value= "100" >95</option>
                        <option value= "101" >96</option>
                        <option value= "102" >97</option>
                        <option value= "103" >98</option>
                        <option value= "104" >99</option>
                        <option value= "105" >100</option>
                        <option value= "106" >101</option>
                        <option value= "107" >102</option>
                        <option value= "108" >103</option>
                        <option value= "109" >104</option>
                        <option value= "110" >105</option>
                        <option value= "111" >106</option>
                        <option value= "112" >107</option>
                        <option value= "113" >108</option>
                        <option value= "114" >109</option>
                        <option value= "115" >110</option>
                      </select>
                      <label>Weight in KGs</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="floating-label">
                      <select class="floating-select format">
                        <option></option>
                        <option value= "1 ">18</option>
                        <option value= "2 ">19</option>
                        <option value= "3 ">20</option>
                        <option value= "4 ">21</option>
                        <option value= "5 ">22</option>
                        <option value= "6 ">23</option>
                        <option value= "7 ">24</option>
                        <option value= "8 ">25</option>
                        <option value= "9 ">26</option>
                        <option value= "10" >27</option>
                        <option value= "11" >28</option>
                        <option value= "12" >29</option>
                        <option value= "13" >30</option>
                        <option value= "14" >31</option>
                        <option value= "15" >32</option>  
                      </select>
                      <label>BMI</label>
                    </div>
                  </div>

                </div>

                <div class="btn-hold text-center">
                  <button type="button" class="btn btn-outline-secondary rounded-pill mx-2" @click="activeTab('step1')">
                    <em class="bi bi-chevron-left me-2"></em>
                    <span>Previous</span>
                  </button>
                  <button type="button" class="btn btn-warning rounded-pill text-white mx-2" @click="activeTab('step3')">
                    <span>Proceed</span>
                    <em class="bi bi-chevron-right ms-2"></em>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <!--Insured detail form step2-->
        </div>
      </div>
      <div class="tab-pane fade" id="step3" role="tabpanel" aria-labelledby="step3-tab">
        <div class="tab-body">
          <!--medical detail form step3-->
          <div>
            <h1>Help us know the medical condition of your family</h1>
            <h6>We'll only ask for the details insurance companies need</h6>

            <span class="mid-heading mt-5">Medical Questions for Jay Prakash Yadav, Anjali Singh, Amit Kumar</span>

            <form action="" class="floating-form">
              <div class="md-frm-field">
                <p class="mid-heading-text">Has any Proposed to be Insured been diagnosed with or suffered from / is
                  suffering from or is currently under medication
                  for the following. If Your response is yes to any of the following questions,
                  please specify details of the same in the additional information section</p>
                <label for="" class="mid-heading-span">Select member(s) who take regular medication as part of long-term
                  treatment for any pre-existing disease</label>

                <div class="more-dropdown" >
                  <div class="select-btn" @click="$event.currentTarget.classList.toggle('show')">
                    <span class="floating-input">Select Members</span>
                    <span class="arrow-dwn">
                        <img src="~@/assets/images/user-dropdown-arrow.png" alt=""> 
                    </span>
                  </div>

                  <div class="list-items">
                    <h6>Select Members</h6>
                    <ul>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk1">
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk1"> Jay Prakash
                            Yadav</label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk2">
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk2"> Anjali Singh</label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk3">
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk3"> Amit Kumar</label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

              <div class="md-frm-field">
                <p class="mid-heading-text">Any Respiratory disease / Disease of Lungs, Pleura and airway
                  (including but not limited to Asthma / Tuberculosis / Pleural effusion / Bronchitis / Emphysema)</p>
                <label for="" class="mid-heading-span">Select member(s) who have disease</label>

                <div class="more-dropdown">
                  <div class="select-btn" @click="$event.currentTarget.classList.toggle('show')">
                    <span class="floating-input">Select Members</span>
                    <span class="arrow-dwn">
                        <img src="~@/assets/images/user-dropdown-arrow.png" alt=""> 
                    </span>
                  </div>

                  <div class="list-items">
                    <h6>Select Members</h6>
                    <ul>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk4">
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk4"> Jay Prakash
                            Yadav</label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk5">
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk5"> Anjali Singh</label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk6">
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk6"> Amit Kumar</label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

              <div class="md-frm-field">
                <p class="mid-heading-text">Do You smoke, consume alcohol, or chew tobacco, ghutka or paan or use any
                  recreational drugs?
                  If 'Yes' then please provide the frequency &amp; amount consumed. *</p>
                <label for="" class="mid-heading-span">Select member(s) who smokes or consume alcohol</label>

                <div class="more-dropdown">
                  <div class="select-btn" @click="$event.currentTarget.classList.toggle('show')">
                    <span class="floating-input">Select Members</span>
                    <span class="arrow-dwn">
                        <img src="~@/assets/images/user-dropdown-arrow.png" alt=""> 
                    </span>
                  </div>

                  <div class="list-items">
                    <h6>Select Members</h6>
                    <ul>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk7">
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk7"> Jay Prakash
                            Yadav</label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk8">
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk8"> Anjali Singh
                            </label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk9">
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk9"> Amit Kumar
                            </label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

              <div class="md-frm-field">
                <p class="mid-heading-text">Have any of the above mentioned person(s) to be insured been diagnosed / hospitalized for any illness / injury during the last 48 months?</p>
                <label for="" class="mid-heading-span">Select member(s) who smokes or consume alcohol</label>

                <div class="more-dropdown">
                  <div class="select-btn" @click="$event.currentTarget.classList.toggle('show')">
                    <span class="floating-input">Select Members</span>
                    <span class="arrow-dwn">
                        <img src="~@/assets/images/user-dropdown-arrow.png" alt=""> 
                    </span>
                  </div>

                  <div class="list-items">
                    <h6>Select Members</h6>
                    <ul>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk1" >
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk1"> Jay Prakash
                            Yadav</label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk2" >
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk2"> Anjali Singh
                            </label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk3" >
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk3"> Amit Kumar
                            </label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

              <div class="md-frm-field">
                <p class="mid-heading-text">Have any of the person(s) to be insured ever filed a claim with their
                  current / previous insurer?</p>
                <label for="" class="mid-heading-span">Select member(s)</label>

                <div class="more-dropdown">
                  <div class="select-btn" @click="$event.currentTarget.classList.toggle('show')">
                    <span class="floating-input">Select Members</span>
                    <span class="arrow-dwn">
                        <img src="~@/assets/images/user-dropdown-arrow.png" alt=""> 
                    </span>
                  </div>

                  <div class="list-items">
                    <h6>Select Members</h6>
                    <ul>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk1">
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk1"> Jay Prakash
                            Yadav</label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk2" >
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk2"> Anjali Singh
                            </label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk3" >
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk3"> Amit Kumar
                            </label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

              <div class="md-frm-field">
                <p class="mid-heading-text">Has any proposal for Health insurance been declined, cancelled or charged a
                  higher premium?</p>
                <label for="" class="mid-heading-span">Select member(s)</label>

                <div class="more-dropdown">
                  <div class="select-btn" @click="$event.currentTarget.classList.toggle('show')">
                    <span class="floating-input">Select Members</span>
                    <span class="arrow-dwn">
                        <img src="~@/assets/images/user-dropdown-arrow.png" alt=""> 
                    </span>
                  </div>

                  <div class="list-items">
                    <h6>Select Members</h6>
                    <ul>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk1">
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk1"> Jay Prakash
                            Yadav</label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk2">
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk2"> Parth Prakash
                            Yadav</label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk3">
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk3"> Bhakti Prakash
                            Yadav</label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

              <div class="md-frm-field">
                <p class="mid-heading-text">Is any of the person(s) to be insured, already covered under any other
                  health insurance policy of Religare Health Insurance?</p>
                <label for="" class="mid-heading-span">Select member(s)</label>

                <div class="more-dropdown">
                  <div class="select-btn" @click="$event.currentTarget.classList.toggle('show')">
                    <span class="floating-input">Select Members</span>
                    <span class="arrow-dwn">
                        <img src="~@/assets/images/user-dropdown-arrow.png" alt=""> 
                    </span>
                  </div>
                  <div class="list-items">
                    <h6>Select Members</h6>
                    <ul>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk1">
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk1"> Jay Prakash
                            Yadav</label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk2">
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk2"> Bhakti Prakash
                            Yadav</label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                      <li class="item">
                        <div class="form-check col-md-6">
                          <input class="form-check-input" type="checkbox" value="" id="select-member-chk3">
                          <label class="form-check-label fs-12 font-reg" for="select-member-chk3"> Parth Prakash
                            Yadav</label>
                        </div>
                        <div class="floating-label">
                          <input class="floating-input" type="text" placeholder=" " value="">
                          <label>Existing Since</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="btn-hold text-center">
                <button type="button" class="btn btn-outline-secondary rounded-pill mx-2" @click="activeTab('step2')">
                  <em class="bi bi-chevron-left me-2"></em>
                  <span>Previous</span>
                </button>
                <button type="button" class="btn btn-warning rounded-pill text-white mx-2" @click="activeTab('step4')">
                  <span>Proceed</span>
                  <em class="bi bi-chevron-right ms-2"></em>
                </button>
              </div>

            </form>
          </div>
          <!--medical detail form step3-->
        </div>
      </div>
      <div class="tab-pane fade" id="step4" role="tabpanel" aria-labelledby="step4-tab">
        <div class="tab-body">
          <!--Nominee detail form step4-->
          <div class="floating-form">
            <h3>Tell us who you want to make nominee</h3>
            <h6 class="base-reg">In case of any mishappening to the proposer, nominee is the person who gets the benefits</h6>

            <div class="form-wrapper pt-3">

              <form action="">
                <div class="d-flex align-items-center mb-3">
                  <h5 class="mb-0">Nominee Details</h5>
                  <!-- <div class="ms-auto fs-12 grey base-med" data-bs-toggle="modal" data-bs-target="#savechangesModal">
                    <em class="bi bi-trash3-fill  me-2"></em>
                    Delete
                  </div> -->
                </div>
                <div class="row mb-3">

                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>Name of the Nominee</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>Nominee PAN</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder="" value="">
                      <label>Date of Birth</label>
                    </div>
                    <!-- <div class="floating-label dob">
                      <Datepicker  auto-apply :enable-time-picker="false"  />
                      <label class="dob-label">Nominee Date of Birth</label>
                    </div> -->
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label">
                      <select class="floating-select format">
                        <option value=""></option>
                        <option value="1">Wife</option>
                        <option value="2">Son</option>
                        <option value="3">Daughter</option>
                        <option value="4">Father</option>
                        <option value="5">Mother</option>
                        <option value="6">Brother</option>
                        <option value="7">Sister</option>
                      </select>
                      <label>Nominee Relationship</label>
                    </div>
                  </div>
                  <!-- <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="50">
                      <label>Percentage Payout</label>
                      <span class="suffixtxt">%</span>
                    </div>
                  </div> -->

                </div>

                <!-- <div class="d-flex align-items-center mb-3" data-bs-toggle="modal" data-bs-target="#savechangesModal">
                  <h5 class="mb-0">Nominee Details</h5>
                  <div class="ms-auto fs-12 grey base-med">
                    <em class="bi bi-trash3-fill  me-2"></em>
                    Delete
                  </div>
                </div>
                <div class="row mb-3">

                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="Parth Jay Yadav">
                      <label>Name of the Nominee</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="HUJPA3569H">
                      <label>Nominee PAN</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label dob">
                      <Datepicker v-model="date6" auto-apply :enable-time-picker="false"  />
                      <label class="dob-label">Nominee Date of Birth</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label">
                      <select class="floating-select format">
                        <option value="1" selected>Son</option>
                        <option value="2">Wife</option>
                        <option value="3">Daughter</option>
                        <option value="4">Father</option>
                        <option value="5">Mother</option>
                      </select>
                      <label>Nominee Relationship</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="50">
                      <label>Percentage Payout</label>
                      <span class="suffixtxt">%</span>
                    </div>
                  </div>

                  <div class="col-12 mb-4">
                    <div class="">
                      <em class="cir me-2">+</em>
                      <span class="base-med text-primary fs-14">Add Nominee</span>
                    </div>
                  </div>

                </div> -->

                <div class="btn-hold text-center">
                  <button type="button" class="btn btn-outline-secondary rounded-pill mx-2" @click="activeTab('step3')">
                    <em class="bi bi-chevron-left me-2"></em>
                    <span>Previous</span>
                  </button>
                  <button type="button" class="btn btn-warning rounded-pill text-white mx-2" @click="activeTab('step5')">
                    <span>Proceed</span>
                    <em class="bi bi-chevron-right ms-2"></em>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <!--Nominee detail form step4-->
        </div>
      </div>
      <div class="tab-pane fade" id="step5" role="tabpanel" aria-labelledby="step5-tab">
        <div class="tab-body">
          <!--Portability detail form step5-->
          <div class="floating-form">
            <h3>Give us the details of your current policy</h3>
            <div class="form-wrapper pt-3">
              <form action="">
                <!-- <h5 class="mb-3">Nominee</h5> -->
                <div class="row mb-3">
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>Company Name</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>Plan Name</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <!-- <div class="floating-label dob">
                      <Datepicker v-model="date7" auto-apply :enable-time-picker="false"  />
                      <label class="dob-label">Policy Start Date</label>
                    </div> -->
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder="" value="">
                      <label>Policy Start Date</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <!-- <div class="floating-label dob">
                      <Datepicker v-model="date8" auto-apply :enable-time-picker="false"  />
                      <label class="dob-label">Policy End Date</label>
                    </div> -->
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder="" value="">
                      <label>Policy End Date</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label">
                      <select class="floating-select format">
                        <option value=""></option>
                        <option value="1">Family Floater</option>
                        <option value="2">Individual</option>
                        <option value="3">Super Topup</option>
                        <option value="4">Topup</option>
                      </select>
                      <label>Policy Type</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label">
                      <select class="floating-select format">
                        <option value=""></option>
                        <option value="1">Affordable Premium</option>
                        <option value="2">Higher Claim Settlement Ratio</option>
                        <option value="3">More Visibility</option>
                        <option value="4">Hospital Availability</option>
                      </select>
                      <label>Portability Reason</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>Policy Number</label>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="floating-label">
                      <input class="floating-input" type="text" placeholder=" " value="">
                      <label>Policy Product ID</label>
                    </div>
                  </div>

                </div>

                <div class="btn-hold text-center">
                  <button type="button" class="btn btn-outline-secondary rounded-pill mx-2" @click="activeTab('step4')">
                    <em class="bi bi-chevron-left me-2"></em>
                    <span>Previous</span>
                  </button>
                  <button type="button" class="btn btn-warning rounded-pill text-white mx-2" @click="activeTab('step6')">
                    <span>Preview</span>
                    <em class="bi bi-chevron-right ms-2"></em>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <!--Portability detail form step5-->
        </div>
      </div>
      <div class="tab-pane fade" id="step6" role="tabpanel" aria-labelledby="step6-tab">
        <div class="tab-body">
          <!--Preview step6-->
          <div class="floating-form">
            <h3>You have completed all details</h3>
            <h6 class="base-reg">Just review the information before payment</h6>

            <div class="form-wrapper pt-3">
              <div class="accordion" id="preview">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="previewheading1">
                      <div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#previewcollapse1"
                        aria-expanded="true" aria-controls="previewcollapse1">
                        <h4>Proposer Details (Self)</h4>
                        <div class="edit fs-14 ms-auto">
                          <em class="bi bi-pencil me-2"></em>
                          <span>Edit</span>
                        </div>
                      </div>
                    </h2>
                    <div id="previewcollapse1" class="accordion-collapse collapse show" aria-labelledby="previewheading1"
                      data-bs-parent="#preview">
                      <div class="accordion-body">
                        <ul>
                          <li>
                            <label class="labelreg">Full Name</label>
                            <div class="inputvalue">Jay Prakash Yadav</div>
                          </li>
                          <li>
                            <label class="labelreg">Date of Birth</label>
                            <div class="inputvalue">16-08-1988</div>
                          </li>
                          <li>
                            <label class="labelreg">Age</label>
                            <div class="inputvalue">35 Yrs</div>
                          </li>
                          <li>
                            <label class="labelreg">Gender</label>
                            <div class="inputvalue">Male</div>
                          </li>
                          <li>
                            <label class="labelreg">Height</label>
                            <div class="inputvalue">6 Feet 0 Inches</div>
                          </li>
                          <li>
                            <label class="labelreg">Weight in kgs</label>
                            <div class="inputvalue">89 kgs</div>
                          </li>
                          <li>
                            <label class="labelreg">BMI</label>
                            <div class="inputvalue">29.1</div>
                          </li>
                          <li>
                            <label class="labelreg">PAN Number</label>
                            <div class="inputvalue">AGVPY8738N</div>
                          </li>
                          <li class="w-100">
                            <label class="labelreg">Address</label>
                            <div class="inputvalue">401, Madhuban colony, Chincholi Bandar, Ram Nagar, Malad (W), Maharastra, Mumbai 400064</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="previewheading2">
                      <div class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#previewcollapse2"
                        aria-expanded="false" aria-controls="previewcollapse2">
                        <h4>Spouse Details</h4>
                        <div class="edit fs-14 ms-auto">
                          <em class="bi bi-pencil me-2"></em>
                          <span>Edit</span>
                        </div>
                      </div>
                    </h2>
                    <div id="previewcollapse2" class="accordion-collapse collapse" aria-labelledby="previewheading2"
                      data-bs-parent="#preview">
                      <div class="accordion-body">
                        <ul>
                          <li>
                            <label class="labelreg">Full Name</label>
                            <div class="inputvalue">Anjali Singh</div>
                          </li>
                          <li>
                            <label class="labelreg">Date of Birth</label>
                            <div class="inputvalue">25-05-1990</div>
                          </li>
                          <li>
                            <label class="labelreg">Age</label>
                            <div class="inputvalue">32 Yrs</div>
                          </li>
                          <li>
                            <label class="labelreg">Gender</label>
                            <div class="inputvalue">Female</div>
                          </li>
                          <li>
                            <label class="labelreg">Height</label>
                            <div class="inputvalue">5 Feet 4 Inches</div>
                          </li>
                          <li>
                            <label class="labelreg">Weight in kgs</label>
                            <div class="inputvalue">51 kgs</div>
                          </li>
                          <li>
                            <label class="labelreg">BMI</label>
                            <div class="inputvalue">19.9</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="previewheading3">
                      <div class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#previewcollapse3"
                        aria-expanded="false" aria-controls="previewcollapse3">
                        <h4>Son Details</h4>
                        <div class="edit fs-14 ms-auto">
                          <em class="bi bi-pencil me-2"></em>
                          <span>Edit</span>
                        </div>
                      </div>
                    </h2>
                    <div id="previewcollapse3" class="accordion-collapse collapse" aria-labelledby="previewheading3"
                      data-bs-parent="#preview">
                      <div class="accordion-body">
                        <ul>
                          <li>
                            <label class="labelreg">Full Name</label>
                            <div class="inputvalue">Amit Kumar</div>
                          </li>
                          <li>
                            <label class="labelreg">Date of Birth</label>
                            <div class="inputvalue">16-08-2019</div>
                          </li>
                          <li>
                            <label class="labelreg">Age</label>
                            <div class="inputvalue">35 Yrs</div>
                          </li>
                          <li>
                            <label class="labelreg">Gender</label>
                            <div class="inputvalue">Male</div>
                          </li>
                          <li>
                            <label class="labelreg">Height</label>
                            <div class="inputvalue">2 Feet 5 Inches</div>
                          </li>
                          <li>
                            <label class="labelreg">Weight in kgs</label>
                            <div class="inputvalue">18 kgs</div>
                          </li>
                          <li>
                            <label class="labelreg">BMI</label>
                            <div class="inputvalue">21</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="previewheading4">
                      <div class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#previewcollapse4"
                        aria-expanded="false" aria-controls="previewcollapse4">
                        <h4>Nominee</h4>
                        <div class="edit fs-14 ms-auto">
                          <em class="bi bi-pencil me-2"></em>
                          <span>Edit</span>
                        </div>
                      </div>
                    </h2>
                    <div id="previewcollapse4" class="accordion-collapse collapse" aria-labelledby="previewheading4"
                      data-bs-parent="#preview">
                      <div class="accordion-body">
                        <div class="fs-14 base-med"><span class="grey">Nominee:</span> Om Prakash Yadav</div>
                        <ul class="three">
                          <li>
                            <label class="labelreg">Nominee PAN</label>
                            <div class="inputvalue">ALAPH7856D</div>
                          </li>
                          <li>
                            <label class="labelreg">Relationship</label>
                            <div class="inputvalue">Brother</div>
                          </li>
                          <li>
                            <label class="labelreg">Date Of Birth</label>
                            <div class="inputvalue">10/09/1991</div>
                          </li>
                          <!-- <li>
                            <label class="labelreg">Percentage Payout</label>
                            <div class="inputvalue">50%</div>
                          </li> -->
                        </ul>

                        <!-- <div class="fs-14 base-med"><span class="grey">Nominee:</span> Parth Jay Yadav</div> -->
                        <!-- <ul class="three">
                          <li>
                            <label class="labelreg">Nominee PAN</label>
                            <div class="inputvalue">ALAPH7856D</div>
                          </li>
                          <li>
                            <label class="labelreg">Relationship</label>
                            <div class="inputvalue">Son</div>
                          </li>
                          <li>
                            <label class="labelreg">Percentage Payout</label>
                            <div class="inputvalue">50%</div>
                          </li>
                        </ul> -->
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="previewheading5">
                      <div class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#previewcollapse5"
                        aria-expanded="false" aria-controls="previewcollapse5">
                        <h4>Portability</h4>
                        <div class="edit fs-14 ms-auto">
                          <em class="bi bi-pencil me-2"></em>
                          <span>Edit</span>
                        </div>
                      </div>
                    </h2>
                    <div id="previewcollapse5" class="accordion-collapse collapse" aria-labelledby="previewheading5"
                      data-bs-parent="#preview">
                      <div class="accordion-body">
                        <ul>
                          <li>
                            <label class="labelreg">Company Name</label>
                            <div class="inputvalue"></div>
                          </li>
                          <li>
                            <label class="labelreg">Plan Name</label>
                            <div class="inputvalue"></div>
                          </li>
                          <li>
                            <label class="labelreg">Start Date</label>
                            <div class="inputvalue"></div>
                          </li>
                          <li>
                            <label class="labelreg">End Date</label>
                            <div class="inputvalue"></div>
                          </li>
                          <li>
                            <label class="labelreg">Policy Type</label>
                            <div class="inputvalue"></div>
                          </li>
                          <li>
                            <label class="labelreg">Portability Reason</label>
                            <div class="inputvalue"></div>
                          </li>
                          <li class="">
                            <label class="labelreg">Policy Number</label>
                            <div class="inputvalue"></div>
                          </li>
                          <li>
                            <label class="labelreg">Policy Product Id</label>
                            <div class="inputvalue"></div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              
            </div>

            <div class="btn-hold text-center mt-4">

                  <button type="button" class="btn btn-outline-secondary rounded-pill mx-2" @click="activeTab('step5')">

                    <em class="bi bi-chevron-left me-2"></em>

                    <span>Previous</span>

                  </button>

                  <router-link to="/payment">

                    <button type="button" class="btn btn-warning rounded-pill text-white mx-2" >

                      <span>Pay</span>

                      <em class="bi bi-chevron-right ms-2"></em>

                    </button>

                  </router-link>

                </div>
          </div>
          <!--Preview step6-->
        </div>
      </div>
    </div>

    <!-- Delete Modal Start-->
<div class="modal fade" id="savechangesModal" tabindex="-1" aria-labelledby="savechangesModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h5 class="modal-title" id="savechangesModalLabel"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body py-0">
            <div class="text-center">
                <h4 class="text-primary">Do you really want to delete Nominee1</h4>
            </div>
            
        </div>
        <div class="modal-footer justify-content-center border-0">
            <div class="btn-hold mb-4">
                <button class="btn btn-sm btn-outline-secondary rounded-pill " type="button">No</button>
                <button class="btn btn-sm btn-warning text-white rounded-pill" type="button" data-bs-dismiss="modal">Delete</button>
            </div>
            
          
        </div>
      </div>
    </div>
  </div>
<!-- Delete Modal end-->
  </div>

                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="pd-right" v-if="selectedPlan">
                            <div class="pd-right-section1">
                                <h3>Policy Details</h3>
                                <div class="policy-dts-wrap">
                                    <div class="policy-name">
                                        <figure>
                                            <img :src="selectedPlan?.supportingData?.insCompanyLogo" alt="image" />
                                        </figure>
                                        <h6 class="mb-0 me-auto">{{ selectedPlan?.insuranceAndProducts?.productName }}
                                        </h6>
                                        <a :href="selectedPlan?.supportingData?.Messages?.brochureLink" target="_blank">
                                            <em class="download"></em>
                                        </a>
                                    </div>
                                    <div class="p-details">
                                        <ul class="policy-item-detail1">
                                            <li>
                                                <h6>Sum Insured</h6>
                                                <span>{{
                                                    convertInLakh(selectedPlan?.individualDetails[0]?.sumInsured)
                                                }}</span>
                                            </li>
                                            <li>
                                                <h6>Members Insured</h6>
                                                <span>2 Adults &amp; 1 Child</span>
                                            </li>
                                            <li>
                                                <h6>Policy Tenure</h6>
                                                <span>
                                                    <!--{{ selectedPlan?.productDetails?.policyTermUnit }}-->
                                                    {{
                                                        currency(selectedPlan.productDetails.premiumForEachPolicyTerm[selectedPolicyIndex].policyTerm)
                                                    }} Year
                                                </span>
                                            </li>
                                            <li>
                                                <h6> Payment Frequency</h6>
                                                <span><!-- {{ selectedPlan?.productDetails?.policyTermUnit }}-->
                                                    Yearly</span>
                                            </li>
                                        </ul>
                                        <ul class="policy-item-detail2">
                                            <li>
                                                <h6>Net Premium</h6>
                                                <span>
                                                    {{
                                                        currency(selectedPlan.productDetails.premiumForEachPolicyTerm[selectedPolicyIndex].premiumForEachPPO[0].premiumForEachPPF[0].premiumValue)
                                                    }}
                                                </span>
                                            </li>
                                            <!-- <li>
                                                <h6>Addons</h6>
                                                <span>1,430</span>
                                            </li> -->
                                            <li>
                                                <h6>GST @ 18%</h6>
                                                <span>
                                                    {{
                                                        currency(selectedPlan.productDetails.premiumForEachPolicyTerm[selectedPolicyIndex].premiumForEachPPO[0].premiumForEachPPF[0].totalTax)
                                                    }}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <ul class="ttl-preminum">
                                    <li><b>Total Premium</b></li>
                                    <span>&#8377;
                                        {{
    currency(selectedPlan.productDetails.premiumForEachPolicyTerm[selectedPolicyIndex].premiumForEachPPO[0].premiumForEachPPF[0].totalPremiumValue)
                                        }}
                                    </span>
                                </ul>

                            </div>

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
import loadingPage from "@/components/loading.vue";
import $ from "jquery";

export default {
    name: 'ProposerDetailspage',
    components: {
        Header,
        Stepper,
        loadingPage
    },
   
    mounted() {

        this.requestJson = JSON.parse(sessionStorage.getItem("request_json"));
        this.selectedPlan = JSON.parse(sessionStorage.getItem("selected_plan_data"));
        console.log('this.selectedPlan: ', this.selectedPlan);

        this.selectedPolicyIndex = this.getSelectedPolicyIndex(this.requestJson.data.product.policyTerm);

        sessionStorage.setItem("request_json_flag_proposal", JSON.stringify(1));

        this.proposalJson = {
            "manufacturerId": "HDFCERGO",
            "productId": "2825",
            "productGroupId": "health",
            "productGroupType": "Insurance",
            "fieldGroups": {
                "proposerDetails": {
                    "id": 237,
                    "name": "proposerDetails",
                    "description": "Section to capture the proposal details",
                    "parent": null,
                    "label": "Proposer Details",
                    "type": null,
                    "sizeOfArray": null,
                    "visibility": null,
                    "validation": null,
                    "order": 1,
                    "fieldGroups": {
                        "personalDetails": {
                            "id": 295,
                            "name": "personalDetails",
                            "description": "Section to capture the personal details of the propser",
                            "parent": 237,
                            "label": "Personal Details",
                            "type": null,
                            "sizeOfArray": null,
                            "visibility": null,
                            "validation": null,
                            "order": 1,
                            "fields": {
                                "title": {
                                    "id": "2491",
                                    "label": "Salutation",
                                    "name": "title",
                                    "description": "Title of Insured",
                                    "mandatory": 1,
                                    "type": "single-select",
                                    "value": [{
                                        "Text": "Miss",
                                        "Value": "ms"
                                    },
                                    {
                                        "Text": "Mr",
                                        "Value": "mr"
                                    },
                                    {
                                        "Text": "Mrs",
                                        "Value": "mrs"
                                    }
                                    ],
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "firstName": {
                                    "id": "2492",
                                    "label": "First Name",
                                    "name": "firstName",
                                    "description": "Name as per valid Id Proof.",
                                    "mandatory": 1,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": 2,
                                    "max": 50,
                                    "pattern": "/^[A-Za-\\s]+$/",
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "middleName": {
                                    "id": "2493",
                                    "label": "Middle Name",
                                    "name": "middleName",
                                    "description": "Middle Name as per valid Id Proof.",
                                    "mandatory": 0,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": 2,
                                    "max": 50,
                                    "pattern": "/^[A-Za-z\\s]+$/",
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "lastName": {
                                    "id": "2494",
                                    "label": "Last Name",
                                    "name": "lastName",
                                    "description": "Last Name as per valid Id Proof",
                                    "mandatory": 1,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": 2,
                                    "max": 50,
                                    "pattern": "/^[A-Za-z\\s]+$/",
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "gender": {
                                    "id": "2495",
                                    "label": "Gender",
                                    "name": "gender",
                                    "description": "Choose gender",
                                    "mandatory": 1,
                                    "type": "single-select",
                                    "value": [{
                                        "Text": "FEMALE",
                                        "Value": "female"
                                    },
                                    {
                                        "Text": "MALE",
                                        "Value": "male"
                                    }
                                    ],
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "dateOfBirth": {
                                    "id": "2510",
                                    "label": "Date of Birth",
                                    "name": "dateOfBirth",
                                    "description": "Please enter Date of Birth",
                                    "mandatory": 0,
                                    "type": "date",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "maritalStatus": {
                                    "id": "2526",
                                    "label": "Insured Person's Marital status.",
                                    "name": "maritalStatus",
                                    "description": "Select your correct marital Status",
                                    "mandatory": 1,
                                    "type": "single-select",
                                    "value": [{
                                        "Text": "Divorced",
                                        "Value": "divorced"
                                    },
                                    {
                                        "Text": "Married",
                                        "Value": "married"
                                    },
                                    {
                                        "Text": "Single",
                                        "Value": "single"
                                    },
                                    {
                                        "Text": "WIDOWED",
                                        "Value": "widowed"
                                    }
                                    ],
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "email": {
                                    "id": "2506",
                                    "label": "Email",
                                    "name": "email",
                                    "description": "Email ID of proposer Example abc@example.com",
                                    "mandatory": 1,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": 5,
                                    "max": 100,
                                    "pattern": "/[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]{2,}/",
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "mobileNumber": {
                                    "id": "2507",
                                    "label": "Mobile Number",
                                    "name": "mobileNumber",
                                    "description": "Mobile Number of Proposer",
                                    "mandatory": 1,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": 10,
                                    "pattern": "/^[+0]{0,2}()?[0-9]{10}$/",
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "telephoneNumber": {
                                    "id": "2508",
                                    "label": "Landline Number",
                                    "name": "telephoneNumber",
                                    "description": "Landline Number",
                                    "mandatory": 0,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": 11,
                                    "pattern": "/^[+0]{0,2}()?[0-9]{15}$/",
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "PAN": {
                                    "id": "2511",
                                    "label": "PAN Detail",
                                    "name": "PAN",
                                    "description": "Enter PAN Details",
                                    "mandatory": 0,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": 10,
                                    "pattern": "/^([A-Z]{5}[0-9]{4}[A-Z]{1})$/",
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "occupation": {
                                    "id": "2514",
                                    "label": "Profession",
                                    "name": "occupation",
                                    "description": "\"If your Occupation is not in the list please select 'Others'\"",
                                    "mandatory": null,
                                    "type": "single-select",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": 50,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                }
                            }
                        },
                        "communicationAddressDetails": {
                            "id": 296,
                            "name": "communicationAddressDetails",
                            "description": "Section to capture the mailing address details of the proposer",
                            "parent": 237,
                            "label": "Communication Address Details",
                            "type": null,
                            "sizeOfArray": null,
                            "visibility": null,
                            "validation": null,
                            "order": 2,
                            "fields": {
                                "address1": {
                                    "id": "2496",
                                    "label": "Address Line 1",
                                    "name": "address1",
                                    "description": "Address should be as per Valid Proof to send policy document",
                                    "mandatory": 1,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": 1,
                                    "max": 50,
                                    "pattern": "/^[#.0-9a-zA-Zs,-]+$/",
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "address2": {
                                    "id": "2497",
                                    "label": "Address Line 2",
                                    "name": "address2",
                                    "description": null,
                                    "mandatory": 0,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": 50,
                                    "pattern": "/^[#.0-9a-zA-Zs,-]+$/",
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "address3": {
                                    "id": "2498",
                                    "label": "Address Line 3",
                                    "name": "address3",
                                    "description": null,
                                    "mandatory": 0,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": 50,
                                    "pattern": "/^[#.0-9a-zA-Zs,-]+$/",
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "landmark": {
                                    "id": "3071",
                                    "label": "Landmark",
                                    "name": "landmark",
                                    "description": "Please enter Landmark near your Residence",
                                    "mandatory": 0,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "zipCode": {
                                    "id": "2501",
                                    "label": "Pincode",
                                    "name": "zipCode",
                                    "description": null,
                                    "mandatory": 1,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": 1,
                                    "max": 6,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "cityDistrict": {
                                    "id": "2504",
                                    "label": "City District",
                                    "name": "cityDistrict",
                                    "description": null,
                                    "mandatory": 1,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "state": {
                                    "id": "2499",
                                    "label": "State",
                                    "name": "state",
                                    "description": "State",
                                    "mandatory": 1,
                                    "type": "single-select",
                                    "value": null,
                                    "default": null,
                                    "min": 1,
                                    "max": 30,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "nationality": {
                                    "id": "2500",
                                    "label": "Nationality",
                                    "name": "nationality",
                                    "description": "Nationality",
                                    "mandatory": 1,
                                    "type": "single-select",
                                    "value": null,
                                    "default": null,
                                    "min": 1,
                                    "max": 30,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "sameAddress": {
                                    "id": "3072",
                                    "label": "Is your Permanent address same as Communication address?",
                                    "name": "sameAddress",
                                    "description": "Is your Permanent address same as Communication address?",
                                    "mandatory": 1,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                }
                            }
                        },
                        "permanentAddressDetails": {
                            "id": 297,
                            "name": "permanentAddressDetails",
                            "description": "Section to capture the permanent address details of the proposer",
                            "parent": 237,
                            "label": "Permanent Address Details",
                            "type": null,
                            "sizeOfArray": null,
                            "visibility": null,
                            "validation": null,
                            "order": 3,
                            "fields": {
                                "address1": {
                                    "id": "2496",
                                    "label": "Address Line 1",
                                    "name": "address1",
                                    "description": "Address should be as per Valid Proof to send policy document",
                                    "mandatory": 1,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": 1,
                                    "max": 50,
                                    "pattern": "/^[#.0-9a-zA-Zs,-]+$/",
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "address2": {
                                    "id": "2497",
                                    "label": "Address Line 2",
                                    "name": "address2",
                                    "description": null,
                                    "mandatory": 0,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": 50,
                                    "pattern": "/^[#.0-9a-zA-Zs,-]+$/",
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "address3": {
                                    "id": "2498",
                                    "label": "Address Line 3",
                                    "name": "address3",
                                    "description": null,
                                    "mandatory": 0,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": 50,
                                    "pattern": "/^[#.0-9a-zA-Zs,-]+$/",
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "landmark": {
                                    "id": "3071",
                                    "label": "Landmark",
                                    "name": "landmark",
                                    "description": "Please enter Landmark near your Residence",
                                    "mandatory": 0,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "zipCode": {
                                    "id": "2501",
                                    "label": "Pincode",
                                    "name": "zipCode",
                                    "description": null,
                                    "mandatory": 1,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": 1,
                                    "max": 6,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "cityDistrict": {
                                    "id": "2504",
                                    "label": "City District",
                                    "name": "cityDistrict",
                                    "description": null,
                                    "mandatory": 1,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "state": {
                                    "id": "2499",
                                    "label": "State",
                                    "name": "state",
                                    "description": "State",
                                    "mandatory": 1,
                                    "type": "single-select",
                                    "value": null,
                                    "default": null,
                                    "min": 1,
                                    "max": 30,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "nationality": {
                                    "id": "2500",
                                    "label": "Nationality",
                                    "name": "nationality",
                                    "description": "Nationality",
                                    "mandatory": 1,
                                    "type": "single-select",
                                    "value": null,
                                    "default": null,
                                    "min": 1,
                                    "max": 30,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                }
                            }
                        },
                        "identificationDetails": {
                            "id": 298,
                            "name": "identificationDetails",
                            "description": "Section to capture the identification details of the proposer",
                            "parent": 237,
                            "label": "Identification Details",
                            "type": null,
                            "sizeOfArray": null,
                            "visibility": null,
                            "validation": null,
                            "order": 4,
                            "fields": {
                                "idProof": {
                                    "id": "2518",
                                    "label": "ID Proof Type",
                                    "name": "idProof",
                                    "description": "ID Proof Type",
                                    "mandatory": 0,
                                    "type": "single-select",
                                    "value": [{
                                        "Text": "ADHAR CARD",
                                        "Value": "adhar card"
                                    },
                                    {
                                        "Text": "DRIVING LICENSE",
                                        "Value": "driving license"
                                    },
                                    {
                                        "Text": "GAS CONNECTION",
                                        "Value": "gas connection"
                                    },
                                    {
                                        "Text": "OTHER",
                                        "Value": "other"
                                    },
                                    {
                                        "Text": "PAN",
                                        "Value": "pan"
                                    },
                                    {
                                        "Text": "PASSPORT",
                                        "Value": "passport"
                                    },
                                    {
                                        "Text": "RATION CARD",
                                        "Value": "ration card"
                                    },
                                    {
                                        "Text": "TELEPHONE BILL & AFFIDAVIT",
                                        "Value": "telephone bill & affidavit"
                                    },
                                    {
                                        "Text": "VOTER CARD",
                                        "Value": "voter card"
                                    }
                                    ],
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "idProofNumber": {
                                    "id": "2519",
                                    "label": "ID Number",
                                    "name": "idProofNumber",
                                    "description": "ID Prrof Number",
                                    "mandatory": 0,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": 50,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "existingEIANo": {
                                    "id": "2516",
                                    "label": "eIA Number",
                                    "name": "existingEIANo",
                                    "description": "\"If yes please enter your e insurance account number",
                                    "mandatory": null,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": 50,
                                    "pattern": "/^[a-zA-Z0-9]{1,20}$/",
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "gstNo": {
                                    "id": "2512",
                                    "label": "GST Identification Number",
                                    "name": "gstNo",
                                    "description": "GSTIN if applicable",
                                    "mandatory": 0,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": 15,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "gstState": {
                                    "id": "2513",
                                    "label": "GST State",
                                    "name": "gstState",
                                    "description": "GST State",
                                    "mandatory": 0,
                                    "type": "single-select",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                }
                            }
                        }
                    }
                },
                "portabilityDetails": {
                    "id": 301,
                    "name": "portabilityDetails",
                    "description": "Section to capture porting policy (if any)",
                    "parent": null,
                    "label": "Portability Details",
                    "type": null,
                    "sizeOfArray": null,
                    "visibility": null,
                    "validation": null,
                    "order": 1,
                    "fields": {
                        "portApplicable": {
                            "id": "2538",
                            "label": "If Portability Applicable",
                            "name": "portApplicable",
                            "description": "If you want to apply for portability of current policy?",
                            "mandatory": 0,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "portPolicyEntryDate": {
                            "id": "2539",
                            "label": "Porting Policy Entry Date",
                            "name": "portPolicyEntryDate",
                            "description": "Porting policy entry date",
                            "mandatory": 0,
                            "type": "date",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "portPolicyExpirySI": {
                            "id": "2540",
                            "label": "Porting Policy SI",
                            "name": "portPolicyExpirySI",
                            "description": "Porting Policy Available Sum Insured",
                            "mandatory": 0,
                            "type": "number",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "copayPer": {
                            "id": "2542",
                            "label": "Copay Percentage",
                            "name": "copayPer",
                            "description": "Copay percentage",
                            "mandatory": 0,
                            "type": "number",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        }
                    }
                },
                "insuredMembers": [{
                    "id": 238,
                    "name": "insuredMembers",
                    "description": "Section to capture insured members details",
                    "parent": null,
                    "label": "Insured Members Details",
                    "type": "array",
                    "sizeOfArray": null,
                    "visibility": null,
                    "validation": null,
                    "order": 2,
                    "fieldGroups": {
                        "insuredMemberPersonalDetails": {
                            "id": 299,
                            "name": "insuredMemberPersonalDetails",
                            "description": "Section to capture the personal details of the insured",
                            "parent": 238,
                            "label": "Personal Details",
                            "type": null,
                            "sizeOfArray": null,
                            "visibility": null,
                            "validation": null,
                            "order": 1,
                            "fields": {
                                "title": {
                                    "id": "2491",
                                    "label": "Salutation",
                                    "name": "title",
                                    "description": "Title of Insured",
                                    "mandatory": 1,
                                    "type": "single-select",
                                    "value": [{
                                        "Text": "Miss",
                                        "Value": "ms"
                                    },
                                    {
                                        "Text": "Mr",
                                        "Value": "mr"
                                    },
                                    {
                                        "Text": "Mrs",
                                        "Value": "mrs"
                                    }
                                    ],
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "firstName": {
                                    "id": "2521",
                                    "label": "First Name",
                                    "name": "firstName",
                                    "description": "Name as per valid Id Proof.",
                                    "mandatory": 1,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": 2,
                                    "max": 50,
                                    "pattern": "/^[A-Za-\\s]+$/",
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "middleName": {
                                    "id": "2522",
                                    "label": "Middle Name",
                                    "name": "middleName",
                                    "description": "Middle Name as per valid Id Proof.",
                                    "mandatory": 0,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": 2,
                                    "max": 50,
                                    "pattern": "/^[A-Za-z\\s]+$/",
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "lastName": {
                                    "id": "2523",
                                    "label": "Last Name",
                                    "name": "lastName",
                                    "description": "Last Name as per valid Id Proof",
                                    "mandatory": 1,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": 2,
                                    "max": 50,
                                    "pattern": "/^[A-Za-z\\s]+$/",
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "dateOfBirth": {
                                    "id": "2527",
                                    "label": "Date of Birth",
                                    "name": "dateOfBirth",
                                    "description": "Date of Birth",
                                    "mandatory": 1,
                                    "type": "date",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "insuredRelWithProposer": {
                                    "id": "2524",
                                    "label": "Relation with Proposor",
                                    "name": "insuredRelWithProposer",
                                    "description": "Relation with Proposer",
                                    "mandatory": 1,
                                    "type": "single-select",
                                    "value": [{
                                        "Text": "Dependent Daughter",
                                        "Value": "dependent daughter"
                                    },
                                    {
                                        "Text": "Dependent Son",
                                        "Value": "dependent son"
                                    },
                                    {
                                        "Text": "Father",
                                        "Value": "father"
                                    },
                                    {
                                        "Text": "Father In Law",
                                        "Value": "father in law"
                                    },
                                    {
                                        "Text": "Husband",
                                        "Value": "husband"
                                    },
                                    {
                                        "Text": "Mother",
                                        "Value": "mother"
                                    },
                                    {
                                        "Text": "Mother In Law",
                                        "Value": "mother in law"
                                    },
                                    {
                                        "Text": "Self",
                                        "Value": "self"
                                    },
                                    {
                                        "Text": "Wife",
                                        "Value": "wife"
                                    }
                                    ],
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "gender": {
                                    "id": "2533",
                                    "label": "Gender",
                                    "name": "gender",
                                    "description": "Choose gender",
                                    "mandatory": 1,
                                    "type": "single-select",
                                    "value": [{
                                        "Text": "FEMALE",
                                        "Value": "female"
                                    },
                                    {
                                        "Text": "MALE",
                                        "Value": "male"
                                    }
                                    ],
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "maritalStatus": {
                                    "id": "2526",
                                    "label": "Insured Person's Marital status.",
                                    "name": "maritalStatus",
                                    "description": "Select your correct marital Status",
                                    "mandatory": 1,
                                    "type": "single-select",
                                    "value": [{
                                        "Text": "Divorced",
                                        "Value": "divorced"
                                    },
                                    {
                                        "Text": "Married",
                                        "Value": "married"
                                    },
                                    {
                                        "Text": "Single",
                                        "Value": "single"
                                    },
                                    {
                                        "Text": "WIDOWED",
                                        "Value": "widowed"
                                    }
                                    ],
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "ifDependent": {
                                    "id": "2525",
                                    "label": "If insured is dependent",
                                    "name": "ifDependent",
                                    "description": "Are you dependent on proposer?",
                                    "mandatory": 1,
                                    "type": "boolean",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "occupation": {
                                    "id": "2532",
                                    "label": "Profession",
                                    "name": "occupation",
                                    "description": "Choose profession",
                                    "mandatory": 0,
                                    "type": "single-select",
                                    "value": [{
                                        "Text": "Advocate / Lawyer",
                                        "Value": "advocate / lawyer"
                                    },
                                    {
                                        "Text": "Agriculture",
                                        "Value": "agriculture"
                                    },
                                    {
                                        "Text": "Businessman/Industrialist Large Scale",
                                        "Value": "businessman/industrialist large scale"
                                    },
                                    {
                                        "Text": "Businessman/Industrialist Medium Scale",
                                        "Value": "businessman/industrialist medium scale"
                                    },
                                    {
                                        "Text": "Businessman/Industrialist Small Scale",
                                        "Value": "businessman/industrialist small scale"
                                    },
                                    {
                                        "Text": "Chartered Accountants",
                                        "Value": "chartered accountants"
                                    },
                                    {
                                        "Text": "Clerical",
                                        "Value": "clerical"
                                    },
                                    {
                                        "Text": "Doctor",
                                        "Value": "doctor"
                                    },
                                    {
                                        "Text": "Executive - Middle Level",
                                        "Value": "executive - middle level"
                                    },
                                    {
                                        "Text": "Executive - Senior Level",
                                        "Value": "executive - senior level"
                                    },
                                    {
                                        "Text": "Executive Junior Level",
                                        "Value": "executive junior level"
                                    },
                                    {
                                        "Text": "Farming",
                                        "Value": "farming"
                                    },
                                    {
                                        "Text": "Hdfc Ergo Employee",
                                        "Value": "hdfc ergo employee"
                                    },
                                    {
                                        "Text": "Hospitality and Support Workers",
                                        "Value": "hospitality and support workers"
                                    },
                                    {
                                        "Text": "Housewife",
                                        "Value": "housewife"
                                    },
                                    {
                                        "Text": "Labourer",
                                        "Value": "labourer"
                                    },
                                    {
                                        "Text": "LnT Employee",
                                        "Value": "lnt employee"
                                    },
                                    {
                                        "Text": "Not working",
                                        "Value": "not working"
                                    },
                                    {
                                        "Text": "Others",
                                        "Value": "others"
                                    },
                                    {
                                        "Text": "Police/ Para Militry/ Defence",
                                        "Value": "police/ para militry/ defence"
                                    },
                                    {
                                        "Text": "Professor",
                                        "Value": "professor"
                                    },
                                    {
                                        "Text": "Retired",
                                        "Value": "retired"
                                    },
                                    {
                                        "Text": "Salesperson",
                                        "Value": "salesperson"
                                    },
                                    {
                                        "Text": "Self employed Professional",
                                        "Value": "self employed professional"
                                    },
                                    {
                                        "Text": "Service",
                                        "Value": "service"
                                    },
                                    {
                                        "Text": "Shop owner",
                                        "Value": "shop owner"
                                    },
                                    {
                                        "Text": "Software Professional",
                                        "Value": "software professional"
                                    },
                                    {
                                        "Text": "Student",
                                        "Value": "student"
                                    },
                                    {
                                        "Text": "Supervisor",
                                        "Value": "supervisor"
                                    }
                                    ],
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "weight": {
                                    "id": "2529",
                                    "label": "Weight in KGs",
                                    "name": "weight",
                                    "description": "eight in KGs",
                                    "mandatory": 1,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": 5,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "height": {
                                    "id": "2528",
                                    "label": "Height in centimeters",
                                    "name": "height",
                                    "description": "Height in cms",
                                    "mandatory": 1,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": 5,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                }
                            }
                        },
                        "insuredMemberCurrentHealthStatus": {
                            "id": 300,
                            "name": "insuredMemberCurrentHealthStatus",
                            "description": "Section to capture the health status and habits of the insured",
                            "parent": 238,
                            "label": "Current Health Status",
                            "type": null,
                            "sizeOfArray": null,
                            "visibility": null,
                            "validation": null,
                            "order": 2,
                            "fields": {
                                "ped": {
                                    "id": "2534",
                                    "label": "Pre Existing Disease",
                                    "name": "ped",
                                    "description": "\"If you have pre existing diseases please give details\"",
                                    "mandatory": null,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": 100,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "ageProof": {
                                    "id": "2530",
                                    "label": "Age Proof ID Number",
                                    "name": "ageProof",
                                    "description": "Age proof id number",
                                    "mandatory": 0,
                                    "type": "single-select",
                                    "value": [{
                                        "Text": "Adhar Card",
                                        "Value": "adhar card"
                                    },
                                    {
                                        "Text": "Birth Certificate",
                                        "Value": "birth certificate"
                                    },
                                    {
                                        "Text": "Copy of baptism",
                                        "Value": "copy of baptism"
                                    },
                                    {
                                        "Text": "Domicile Certificate",
                                        "Value": "domicile certificate"
                                    },
                                    {
                                        "Text": "Driving License",
                                        "Value": "driving license"
                                    },
                                    {
                                        "Text": "Govt. ID",
                                        "Value": "govt. id"
                                    },
                                    {
                                        "Text": "LIC Policy",
                                        "Value": "lic policy"
                                    },
                                    {
                                        "Text": "PAN Card",
                                        "Value": "pan card"
                                    },
                                    {
                                        "Text": "School LC",
                                        "Value": "school lc"
                                    },
                                    {
                                        "Text": "X / XII Certificate",
                                        "Value": "x / xii certificate"
                                    }
                                    ],
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "ageProofId": {
                                    "id": "2531",
                                    "label": "Age proof document",
                                    "name": "ageProofId",
                                    "description": "Age proof Document",
                                    "mandatory": 0,
                                    "type": "text",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "isDiabetic": {
                                    "id": "2536",
                                    "label": "If Diabetic",
                                    "name": "isDiabetic",
                                    "description": "If suffering from diabetes",
                                    "mandatory": 0,
                                    "type": "boolean",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "hyperTensn": {
                                    "id": "2535",
                                    "label": "If hypertension",
                                    "name": "hyperTensn",
                                    "description": "If suffering from Hyper tension",
                                    "mandatory": 0,
                                    "type": "boolean",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                },
                                "isSmoker": {
                                    "id": "2537",
                                    "label": "If Smoker",
                                    "name": "isSmoker",
                                    "description": "If smoker",
                                    "mandatory": 0,
                                    "type": "boolean",
                                    "value": null,
                                    "default": null,
                                    "min": null,
                                    "max": null,
                                    "pattern": null,
                                    "input": "",
                                    "visibility": null,
                                    "validation": ""
                                }
                            }
                        }
                    }
                }],
                "healthQuestions": {
                    "id": 239,
                    "name": "healthQuestions",
                    "description": "Section to capture health questions",
                    "parent": null,
                    "label": "Health Questions",
                    "type": null,
                    "sizeOfArray": null,
                    "visibility": null,
                    "validation": null,
                    "order": 3,
                    "fields": {
                        "Q1": {
                            "id": "Q1",
                            "label": "Height (Ft/ Inches)",
                            "name": "Q1",
                            "description": null,
                            "mandatory": 1,
                            "type": "single-select",
                            "value": [{
                                "Text": "3 feet 04 inches",
                                "Value": "3 feet 4 inches"
                            },
                            {
                                "Text": "3 feet 05 inches",
                                "Value": "3 feet 5 inches"
                            },
                            {
                                "Text": "3 feet 06 inches",
                                "Value": "3 feet 6 inches"
                            },
                            {
                                "Text": "3 feet 07 inches",
                                "Value": "3 feet 7 inches"
                            },
                            {
                                "Text": "3 feet 08 inches",
                                "Value": "3 feet 8 inches"
                            },
                            {
                                "Text": "3 feet 09 inches",
                                "Value": "3 feet 9 inches"
                            },
                            {
                                "Text": "3 feet 10 inches",
                                "Value": "3 feet 10 inches"
                            },
                            {
                                "Text": "3 feet 11 inches",
                                "Value": "3 feet 11 inches"
                            },
                            {
                                "Text": "4 feet 00 inches",
                                "Value": "4 feet 0 inches"
                            },
                            {
                                "Text": "4 feet 01 inches",
                                "Value": "4 feet 1 inches"
                            },
                            {
                                "Text": "4 feet 02 inches",
                                "Value": "4 feet 2 inches"
                            },
                            {
                                "Text": "4 feet 03 inches",
                                "Value": "4 feet 3 inches"
                            },
                            {
                                "Text": "4 feet 04 inches",
                                "Value": "4 feet 4 inches"
                            },
                            {
                                "Text": "4 feet 05 inches",
                                "Value": "4 feet 5 inches"
                            },
                            {
                                "Text": "4 feet 06 inches",
                                "Value": "4 feet 6 inches"
                            },
                            {
                                "Text": "4 feet 07 inches",
                                "Value": "4 feet 7 inches"
                            },
                            {
                                "Text": "4 feet 08 inches",
                                "Value": "4 feet 8 inches"
                            },
                            {
                                "Text": "4 feet 09 inches",
                                "Value": "4 feet 9 inches"
                            },
                            {
                                "Text": "4 feet 10 inches",
                                "Value": "4 feet 10 inches"
                            },
                            {
                                "Text": "4 feet 11 inches",
                                "Value": "4 feet 11 inches"
                            },
                            {
                                "Text": "5 feet 00 inches",
                                "Value": "5 feet 0 inches"
                            },
                            {
                                "Text": "5 feet 01 inches",
                                "Value": "5 feet 1 inches"
                            },
                            {
                                "Text": "5 feet 02 inches",
                                "Value": "5 feet 2 inches"
                            },
                            {
                                "Text": "5 feet 03 inches",
                                "Value": "5 feet 3 inches"
                            },
                            {
                                "Text": "5 feet 04 inches",
                                "Value": "5 feet 4 inches"
                            },
                            {
                                "Text": "5 feet 05 inches",
                                "Value": "5 feet 5 inches"
                            },
                            {
                                "Text": "5 feet 06 inches",
                                "Value": "5 feet 6 inches"
                            },
                            {
                                "Text": "5 feet 07 inches",
                                "Value": "5 feet 7 inches"
                            },
                            {
                                "Text": "5 feet 08 inches",
                                "Value": "5 feet 8 inches"
                            },
                            {
                                "Text": "5 feet 09 inches",
                                "Value": "5 feet 9 inches"
                            },
                            {
                                "Text": "5 feet 10 inches",
                                "Value": "5 feet 10 inches"
                            },
                            {
                                "Text": "5 feet 11 inches",
                                "Value": "5 feet 11 inches"
                            },
                            {
                                "Text": "6 feet 00 inches",
                                "Value": "6 feet 0 inches"
                            },
                            {
                                "Text": "6 feet 01 inches",
                                "Value": "6 feet 1 inches"
                            },
                            {
                                "Text": "6 feet 02 inches",
                                "Value": "6 feet 2 inches"
                            },
                            {
                                "Text": "6 feet 03 inches",
                                "Value": "6 feet 3 inches"
                            },
                            {
                                "Text": "6 feet 04 inches",
                                "Value": "6 feet 4 inches"
                            },
                            {
                                "Text": "6 feet 05 inches",
                                "Value": "6 feet 5 inches"
                            },
                            {
                                "Text": "6 feet 06 inches",
                                "Value": "6 feet 6 inches"
                            },
                            {
                                "Text": "6 feet 07 inches",
                                "Value": "6 feet 7 inches"
                            },
                            {
                                "Text": "6 feet 08 inches",
                                "Value": "6 feet 8 inches"
                            },
                            {
                                "Text": "6 feet 09 inches",
                                "Value": "6 feet 9 inches"
                            },
                            {
                                "Text": "6 feet 10 inches",
                                "Value": "6 feet 10 inches"
                            },
                            {
                                "Text": "6 feet 11 inches",
                                "Value": "6 feet 11 inches"
                            },
                            {
                                "Text": "7 feet 00 inches",
                                "Value": "7 feet 0 inches"
                            },
                            {
                                "Text": "7 feet 01 inches",
                                "Value": "7 feet 1 inches"
                            },
                            {
                                "Text": "7 feet 02 inches",
                                "Value": "7 feet 2 inches"
                            },
                            {
                                "Text": "7 feet 03 inches",
                                "Value": "7 feet 3 inches"
                            },
                            {
                                "Text": "7 feet 04 inches",
                                "Value": "7 feet 4 inches"
                            },
                            {
                                "Text": "7 feet 05 inches",
                                "Value": "7 feet 5 inches"
                            },
                            {
                                "Text": "7 feet 06 inches",
                                "Value": "7 feet 6 inches"
                            },
                            {
                                "Text": "7 feet 07 inches",
                                "Value": "7 feet 7 inches"
                            },
                            {
                                "Text": "7 feet 08 inches",
                                "Value": "7 feet 8 inches"
                            },
                            {
                                "Text": "7 feet 09 inches",
                                "Value": "7 feet 9 inches"
                            },
                            {
                                "Text": "7 feet 10 inches",
                                "Value": "7 feet 10 inches"
                            },
                            {
                                "Text": "7 feet 11 inches",
                                "Value": "7 feet 11 inches"
                            },
                            {
                                "Text": "2 feet 00 inches",
                                "Value": "2 feet 0 inches"
                            },
                            {
                                "Text": "2 feet 01 inches",
                                "Value": "2 feet 1 inches"
                            },
                            {
                                "Text": "2 feet 02 inches",
                                "Value": "2 feet 2 inches"
                            },
                            {
                                "Text": "2 feet 03 inches",
                                "Value": "2 feet 3 inches"
                            },
                            {
                                "Text": "2 feet 04 inches",
                                "Value": "2 feet 4 inches"
                            },
                            {
                                "Text": "2 feet 05 inches",
                                "Value": "2 feet 5 inches"
                            },
                            {
                                "Text": "2 feet 06 inches",
                                "Value": "2 feet 6 inches"
                            },
                            {
                                "Text": "2 feet 07 inches",
                                "Value": "2 feet 7 inches"
                            },
                            {
                                "Text": "2 feet 08 inches",
                                "Value": "2 feet 8 inches"
                            },
                            {
                                "Text": "2 feet 09 inches",
                                "Value": "2 feet 9 inches"
                            },
                            {
                                "Text": "2 feet 10 inches",
                                "Value": "2 feet 10 inches"
                            },
                            {
                                "Text": "2 feet 11 inches",
                                "Value": "2 feet 11 inches"
                            },
                            {
                                "Text": "3 feet 00 inches",
                                "Value": "3 feet 0 inches"
                            },
                            {
                                "Text": "3 feet 01 inches",
                                "Value": "3 feet 1 inches"
                            },
                            {
                                "Text": "3 feet 02 inches",
                                "Value": "3 feet 2 inches"
                            },
                            {
                                "Text": "3 feet 03 inches",
                                "Value": "3 feet 3 inches"
                            }
                            ],
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q3": {
                            "id": "Q3",
                            "label": "Weight (Kilograms)",
                            "name": "Q3",
                            "description": null,
                            "mandatory": 1,
                            "type": "number",
                            "value": null,
                            "default": null,
                            "min": 3,
                            "max": 200,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q4": {
                            "id": "Q4",
                            "label": "Do you consume or have ever consumed tobacco?",
                            "name": "Q4",
                            "description": null,
                            "mandatory": 2,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": 1,
                            "max": 50,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q5": {
                            "id": "Q5",
                            "label": "Tobacco consumed as ",
                            "name": "Q5",
                            "description": null,
                            "mandatory": 1,
                            "type": "single-select",
                            "value": [{
                                "Text": "All of the above",
                                "Value": "AllOfTheAbove"
                            },
                            {
                                "Text": "Bidi",
                                "Value": "Bidi"
                            },
                            {
                                "Text": "Cigar",
                                "Value": "Cigar"
                            },
                            {
                                "Text": "Cigarettes",
                                "Value": "Cigarettes"
                            },
                            {
                                "Text": "Gutka",
                                "Value": "Gutka"
                            },
                            {
                                "Text": "Pan",
                                "Value": "pan"
                            }
                            ],
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q4'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q4']['input'][index]['answer']=='1'",
                            "validation": ""
                        },
                        "Q6": {
                            "id": "Q6",
                            "label": "Quantity per day",
                            "name": "Q6",
                            "description": null,
                            "mandatory": 1,
                            "type": "single-select",
                            "value": [{
                                "Text": "6-10units",
                                "Value": "6To10Units"
                            },
                            {
                                "Text": ">10units",
                                "Value": "10Units"
                            },
                            {
                                "Text": "<5units",
                                "Value": "5Units"
                            }
                            ],
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q4'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q4']['input'][index]['answer']=='1' && 'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q5'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q5']['input'][index]['answer']!==\"\"",
                            "validation": ""
                        },
                        "Q7": {
                            "id": "Q7",
                            "label": "Since How many years",
                            "name": "Q7",
                            "description": null,
                            "mandatory": 1,
                            "type": "number",
                            "value": null,
                            "default": null,
                            "min": 1,
                            "max": 90,
                            "pattern": null,
                            "input": "",
                            "visibility": "'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q4'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q4']['input'][index]['answer']=='1' && 'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q5'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q5']['input'][index]['answer']!==\"\"",
                            "validation": ""
                        },
                        "Q8": {
                            "id": "Q8",
                            "label": "Do you consume or have ever consumed Alcohol",
                            "name": "Q8",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q9": {
                            "id": "Q9",
                            "label": "Alcohol consumed as ",
                            "name": "Q9",
                            "description": "Alcohol consumed as ",
                            "mandatory": 1,
                            "type": "single-select",
                            "value": [{
                                "Text": "All of the above",
                                "Value": "AllOfTheAbove"
                            },
                            {
                                "Text": "Beer(Bottles)",
                                "Value": "BeerBottles"
                            },
                            {
                                "Text": "Liquor(Pegs)",
                                "Value": "LiquorPegs"
                            },
                            {
                                "Text": "Wine(Glasses)",
                                "Value": "WineGlasses"
                            }
                            ],
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q8'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q8']['input'][index]['answer'] == '1'",
                            "validation": ""
                        },
                        "Q10": {
                            "id": "Q10",
                            "label": "Quantity per day",
                            "name": "Q10",
                            "description": null,
                            "mandatory": 1,
                            "type": "single-select",
                            "value": [{
                                "Text": "1-2",
                                "Value": "1to2"
                            },
                            {
                                "Text": ">2",
                                "Value": "GreaterThan2"
                            },
                            {
                                "Text": "Occasional",
                                "Value": "Occasional"
                            }
                            ],
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q8'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q8']['input'][index]['answer']=='1' && 'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q9'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q9']['input'][index]['answer']!==\"\"",
                            "validation": ""
                        },
                        "Q11": {
                            "id": "Q11",
                            "label": "Since How many years",
                            "name": "Q11",
                            "description": null,
                            "mandatory": 1,
                            "type": "number",
                            "value": null,
                            "default": null,
                            "min": 1,
                            "max": 100,
                            "pattern": null,
                            "input": "",
                            "visibility": "'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q8'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q8']['input'][index]['answer']=='1' && 'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q9'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q9']['input'][index]['answer']!==\"\"",
                            "validation": ""
                        },
                        "Q12": {
                            "id": "Q12",
                            "label": "Do you consume or have ever consumed Narcotics",
                            "name": "Q12",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q13": {
                            "id": "Q13",
                            "label": "Is your occupation associated with any specific hazard or do you take part in activities or have hobbies that could be dangerous in any way ? (eg - occupation - Chemical factory, mines, explosives, radiation, corrosive chemicals- aviation other than as a fare paying passenger, diving, mountaineering, any form of racing, etc )",
                            "name": "Q13",
                            "description": "Please select Yes or No",
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q14": {
                            "id": "Q14",
                            "label": "Are you employed in the armed, para military or police forces ?(If yes, please provide Rank, Department/Division, Date of last medical & category after medical exam).",
                            "name": "Q14",
                            "description": "Please select Yes or No",
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": 50,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q15": {
                            "id": "Q15",
                            "label": "Have you lost weight of 10 kgs or more in the last six months?",
                            "name": "Q15",
                            "description": "Please select Yes or No",
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q16": {
                            "id": "Q16",
                            "label": "Family details of the life assured(include parents/sibling) Are any of your family members suffering from /have suffered from/have died of heart disease,Diabetes Mellitus, cancer or any other hereditary/familial disorder, before 55 years of age.if yes please provide details below.",
                            "name": "Q16",
                            "description": "Please select Yes or No",
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q17": {
                            "id": "Q17",
                            "label": "Have you undergone or been advised to undergo any tests/investigations or any surgery or hospitalized for observation or treatment in the past?",
                            "name": "Q17",
                            "description": "Please select Yes or No",
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q19": {
                            "id": "Q19",
                            "label": "Have you ever suffered or being diagnosed with or been treated for any of the following? (Hypertension/ High BP/ high cholesterol)",
                            "name": "Q19",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q20": {
                            "id": "Q20",
                            "label": "Have you ever suffered or being diagnosed with or been treated for any of the following? (Chest Pain/ Heart Attack/ any other heart disease or problem)",
                            "name": "Q20",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q21": {
                            "id": "Q21",
                            "label": "Have you ever suffered or being diagnosed with or been treated for any of the following? (Undergone angioplasty, bypass surgery, heart surgery)",
                            "name": "Q21",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q22": {
                            "id": "Q22",
                            "label": "Have you ever suffered or being diagnosed with or been treated for any of the following? (Diabetes/ High Blood Sugar/ Sugar in Urine)",
                            "name": "Q22",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q23": {
                            "id": "Q23",
                            "label": "Have you ever suffered or being diagnosed with or been treated for any of the following? (Asthma, Tuberculosis or any other respiratory disorder)",
                            "name": "Q23",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q24": {
                            "id": "Q24",
                            "label": "Have you ever suffered or being diagnosed with or been treated for any of the following? (Nervous disorders/ stroke/ paralysis/ epilepsy)",
                            "name": "Q24",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q25": {
                            "id": "Q25",
                            "label": "Have you ever suffered or being diagnosed with or been treated for any of the following? (Any GastroIntestinal disorders like Pancreatitis, Colitis etc.)",
                            "name": "Q25",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q26": {
                            "id": "Q26",
                            "label": "Have you ever suffered or being diagnosed with or been treated for any of the following? (Liver disorders/ Jaundice/ Hepatitis B or C)",
                            "name": "Q26",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q27": {
                            "id": "Q27",
                            "label": "Have you ever suffered or being diagnosed with or been treated for any of the following? (Genitourinary disorders related to kidney, prostate, urinary system)",
                            "name": "Q27",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q28": {
                            "id": "Q28",
                            "label": "Have you ever suffered or being diagnosed with or been treated for any of the following? (Cancer, Tumor, Growth or Cyst of any Kind)",
                            "name": "Q28",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q29": {
                            "id": "Q29",
                            "label": "Have you ever suffered or being diagnosed with or been treated for any of the following? (HIV infection AIDS or positive test for HIV)",
                            "name": "Q29",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q30": {
                            "id": "Q30",
                            "label": "Have you ever suffered or being diagnosed with or been treated for any of the following? (Any blood disorders like Anaemeia, Thalassemia etc)",
                            "name": "Q30",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q31": {
                            "id": "Q31",
                            "label": "Have you ever suffered or being diagnosed with or been treated for any of the following? (Psychiatric or mental disorders)",
                            "name": "Q31",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q32": {
                            "id": "Q32",
                            "label": "Have you ever suffered or being diagnosed with or been treated for any of the following? (Any other disorder not mentioned above)",
                            "name": "Q32",
                            "description": "Select correct option",
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q33": {
                            "id": "Q33",
                            "label": "Would you like to fill the Health Declaration Form?",
                            "name": "Q33",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q19'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q19']['input'][index]['answer']=='1' ) || ('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q20'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q20']['input'][index]['answer']=='1' ) ||('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q21'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q21']['input'][index]['answer']=='1')  ||('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q22'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q22']['input'][index]['answer']=='1' ) || ('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q23'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q23']['input'][index]['answer']=='1' ) ||('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q24'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q24']['input'][index]['answer']=='1' ) || ('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q25'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q25']['input'][index]['answer']=='1' ) || ('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q26'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q26']['input'][index]['answer']=='1'  )|| ('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q27'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q27']['input'][index]['answer']=='1' ) ||('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q28'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q28']['input'][index]['answer']=='1' ) ||('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q29'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q29']['input'][index]['answer']=='1' ) || ('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q30'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q30']['input'][index]['answer']=='1')  || ('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q19'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q31']['input'][index]['answer']=='1'  || formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q32']['input'][index]['answer']=='1')",
                            "validation": ""
                        },
                        "Q34": {
                            "id": "Q34",
                            "label": "What is the name of the medical condition?",
                            "name": "Q34",
                            "description": "Enter valid medical condition",
                            "mandatory": 1,
                            "type": "text",
                            "value": null,
                            "default": null,
                            "min": 1,
                            "max": 50,
                            "pattern": "/^[a-zA-Z0-9,\\.\\s]*$/",
                            "input": "",
                            "visibility": "'Q33' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields'] && 'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q33'] &&  formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q33']['input'][index]['answer']=='1'",
                            "validation": ""
                        },
                        "Q35": {
                            "id": "Q35",
                            "label": "What was the date of diagnosis?",
                            "name": "Q35",
                            "description": "Type correct date here",
                            "mandatory": 1,
                            "type": "date",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "'Q33' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields'] && 'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q33'] &&  formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q33']['input'][index]['answer']=='1'",
                            "validation": "'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q35'] && new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q35']['input'][index]['answer'])<new Date()"
                        },
                        "Q36": {
                            "id": "Q36",
                            "label": "How long did the treatment go on for?",
                            "name": "Q36",
                            "description": "Type the number of days here",
                            "mandatory": 1,
                            "type": "number",
                            "value": null,
                            "default": null,
                            "min": 1,
                            "max": 99,
                            "pattern": "/^[a-zA-Z0-9,\\.\\s]*$/",
                            "input": "",
                            "visibility": "'Q33' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields'] && 'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q33'] &&  formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q33']['input'][index]['answer']=='1'",
                            "validation": ""
                        },
                        "Q37": {
                            "id": "Q37",
                            "label": "What is the current state of the medical condition?",
                            "name": "Q37",
                            "description": "Type your state of current health",
                            "mandatory": 1,
                            "type": "text",
                            "value": null,
                            "default": null,
                            "min": 1,
                            "max": 50,
                            "pattern": "/^[a-zA-Z0-9,\\.\\s]*$/",
                            "input": "",
                            "visibility": "'Q33' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields'] && 'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q33'] &&  formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q33']['input'][index]['answer']=='1'",
                            "validation": ""
                        },
                        "Q38": {
                            "id": "Q38",
                            "label": "Please provide details of the treatment",
                            "name": "Q38",
                            "description": "Provide details of the treatment",
                            "mandatory": 1,
                            "type": "text",
                            "value": null,
                            "default": null,
                            "min": 1,
                            "max": 50,
                            "pattern": "/^[a-zA-Z0-9,\\.\\s]*$/",
                            "input": "",
                            "visibility": "'Q33' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields'] && 'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q33'] &&  formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q33']['input'][index]['answer']=='1'",
                            "validation": ""
                        },
                        "Q39": {
                            "id": "Q39",
                            "label": "What tests have you undergone for treatment?",
                            "name": "Q39",
                            "description": "Provide correct treatment here",
                            "mandatory": 1,
                            "type": "text",
                            "value": null,
                            "default": null,
                            "min": 1,
                            "max": 50,
                            "pattern": "/^[a-zA-Z0-9,\\.\\s]*$/",
                            "input": "",
                            "visibility": "'Q33' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields'] && 'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q33'] &&  formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q33']['input'][index]['answer']=='1'",
                            "validation": ""
                        },
                        "Q40": {
                            "id": "Q40",
                            "label": "Any other details you want to provide\n",
                            "name": "Q40",
                            "description": "Provide correct details",
                            "mandatory": 1,
                            "type": "text",
                            "value": null,
                            "default": null,
                            "min": 1,
                            "max": 50,
                            "pattern": "/^[a-zA-Z0-9,\\.\\s]*$/",
                            "input": "",
                            "visibility": "'Q33' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields'] && 'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q33'] &&  formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q33']['input'][index]['answer']=='1'",
                            "validation": ""
                        },
                        "Q41": {
                            "id": "Q41",
                            "label": "Have you ever suffered/are suffering from or have undergone investigations or treatment for any gynecological complications such as disorders of cervix,uterus,ovaries,breast, breast lump,cyst etc.",
                            "name": "Q41",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['personalDetails']['fields']['gender'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['personalDetails']['fields']['gender']['input' ]== 'F')||('input' in formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['relationWithFirstLifeAssured'] && 'input' in formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['gender'] && formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['relationWithFirstLifeAssured']['input'][index]['answer']==\"self\" && formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['gender']['input'][index]['answer']==='F')",
                            "validation": ""
                        },
                        "Q42": {
                            "id": "Q42",
                            "label": "Do you have any congenital defect/abnormality/physical deformity/handicap?",
                            "name": "Q42",
                            "description": "Please select Yes or No",
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q43": {
                            "id": "Q43",
                            "label": " Did you have any ailment/injury/accident requiring treatment/medication for more than a week or have you availed leave for more than 5 days on medical grounds in the last two years?",
                            "name": "Q43",
                            "description": "Please select Yes or No",
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q44": {
                            "id": "Q44",
                            "label": "Are you pregnant at present ?",
                            "name": "Q44",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['personalDetails']['fields']['gender'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['personalDetails']['fields']['gender']['input' ]== 'F')||('input' in formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['relationWithFirstLifeAssured'] && 'input' in formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['gender'] && formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['relationWithFirstLifeAssured']['input'][index]['answer']==\"self\" && formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['gender']['input'][index]['answer']==='F')",
                            "validation": ""
                        },
                        "Q45": {
                            "id": "Q45",
                            "label": "Confirm the Duration (in weeks)",
                            "name": "Q45",
                            "description": null,
                            "mandatory": 1,
                            "type": "text",
                            "value": null,
                            "default": null,
                            "min": 1,
                            "max": 50,
                            "pattern": "/^[0-9]+$/",
                            "input": "",
                            "visibility": "'Q44' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields'] && 'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q44'] &&  formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q44']['input'][index]['answer']=='1'",
                            "validation": ""
                        },
                        "Q1000": {
                            "id": "Q1000",
                            "label": "Remarks",
                            "name": "Q1000",
                            "description": "Provide remarks if applicable",
                            "mandatory": 1,
                            "type": "text",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": 250,
                            "pattern": null,
                            "input": "",
                            "visibility": "('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q13'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q13']['input'][index]['answer']=='1' )||('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q14'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q14']['input'][index]['answer']=='1' )||('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q15'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q15']['input'][index]['answer']=='1' )||('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q16'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q16']['input'][index]['answer']=='1' )||('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q17'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q17']['input'][index]['answer']=='1' )||\n    ('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q19'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q19']['input'][index]['answer']=='1' ) || ('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q20'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q20']['input'][index]['answer']=='1' ) ||('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q21'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q21']['input'][index]['answer']=='1')  ||('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q22'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q22']['input'][index]['answer']=='1' ) || ('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q23'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q23']['input'][index]['answer']=='1' ) ||('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q24'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q24']['input'][index]['answer']=='1' ) || ('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q25'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q25']['input'][index]['answer']=='1' ) || ('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q26'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q26']['input'][index]['answer']=='1'  )|| ('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q27'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q27']['input'][index]['answer']=='1' ) ||('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q28'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q28']['input'][index]['answer']=='1' ) ||('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q29'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q29']['input'][index]['answer']=='1' ) || ('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q30'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q30']['input'][index]['answer']=='1')  || ('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q31'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q31']['input'][index]['answer']=='1') || ('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q32'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q32']['input'][index]['answer']=='1')|| ('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q41'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q41']['input'][index]['answer']=='1') || ('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q42'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q42']['input'][index]['answer']=='1') || ('input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q43'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q43']['input'][index]['answer']=='1')",
                            "validation": ""
                        },
                        "Q51": {
                            "id": "Q51",
                            "label": "Have you ever been tested positive for COVID 19",
                            "name": "Q51",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q52": {
                            "id": "Q52",
                            "label": "Are you fully recovered?",
                            "name": "Q52",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q51'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q51']['input'][index]['answer']=='1'",
                            "validation": ""
                        },
                        "Q53": {
                            "id": "Q53",
                            "label": "Date of diagnosis",
                            "name": "Q53",
                            "description": "Provide date here",
                            "mandatory": 1,
                            "type": "date",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q51']['input'][index]['answer']=='1' && 'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q52'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q52']['input'][index]['answer']==='1'",
                            "validation": "'input' in  formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q53'] && 'input' in  formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q54'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q53']['input'][index]['answer'] < formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q54']['input'][index]['answer']"
                        },
                        "Q54": {
                            "id": "Q54",
                            "label": "Date of recovery",
                            "name": "Q54",
                            "description": "Provide date here",
                            "mandatory": 1,
                            "type": "date",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q51']['input'][index]['answer']=='1' && 'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q52'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q52']['input'][index]['answer']==='1'",
                            "validation": "'input' in  formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q53'] && 'input' in  formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q54'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q53']['input'][index]['answer'] < formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q54']['input'][index]['answer'] && new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q54']['input'][index]['answer']) < new Date() "
                        },
                        "Q55": {
                            "id": "Q55",
                            "label": "Were you  hospitalized for Covid19 treatment :",
                            "name": "Q55",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "'input' in formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q51'] && formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q51']['input'][index]['answer']=='1'",
                            "validation": ""
                        },
                        "Q56": {
                            "id": "Q56",
                            "label": "In the last 1 months have you or any of your family member been self-isolated with symptoms on medical advice?(excluding mandatory government orders to remain at home)",
                            "name": "Q56",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q57": {
                            "id": "Q57",
                            "label": " In the last 1 month did you have persistent cough, fever ,sore throat, nausea, vomiting ,diarrhea, difficulty in breathing ,loss of smell and taste any other symptoms of coronavirus (COVID-19) and advised to do a Covid test or you/your family member have been in contact with an individual suspected or confirmed  to have COVID-19? ",
                            "name": "Q57",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q58": {
                            "id": "Q58",
                            "label": " Do you work in an occupation like health care worker/Corona warrior Include (General Practitioners, Doctors, Hospital Doctors, Surgeons, Therapists, Nurses, Pathologist, paramedics, Pharmacist, Ward helpers, Individuals working in Hospitals/ Clinics having novel coronavirus (SARS-CoV-2/COVID-19) Ward ?)  where you have a higher risk to get in close contact with COVID-19 patients or with coronavirus contaminated material ? ",
                            "name": "Q58",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q67": {
                            "id": "Q67",
                            "label": "Have you been vaccinated for COVID19?",
                            "name": "Q67",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q68": {
                            "id": "Q68",
                            "label": "Date of First dose ",
                            "name": "Q68",
                            "description": "Provide correct date here",
                            "mandatory": 1,
                            "type": "date",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q67']['input'][index]['answer']==='1'",
                            "validation": "new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q68']['input'][index]['answer'])>=new Date('2020-12-08') && new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q68']['input'][index]['answer'])<new Date()"
                        },
                        "Q69": {
                            "id": "Q69",
                            "label": "Name of vaccine ",
                            "name": "Q69",
                            "description": "Select the name of vaccine",
                            "mandatory": 1,
                            "type": "single-select",
                            "value": [{
                                "Text": "CoronaVac",
                                "Value": "coronaVac"
                            },
                            {
                                "Text": "Covaxin",
                                "Value": "covaxin"
                            },
                            {
                                "Text": "Covidshield",
                                "Value": "covidshield"
                            },
                            {
                                "Text": "Covovax",
                                "Value": "covovax"
                            },
                            {
                                "Text": "Janssen",
                                "Value": "janssen"
                            },
                            {
                                "Text": "Moderna",
                                "Value": "moderna"
                            },
                            {
                                "Text": "Novavax",
                                "Value": "novavax"
                            },
                            {
                                "Text": "Janssen",
                                "Value": "others"
                            },
                            {
                                "Text": "Pfizer-BioNTech",
                                "Value": "pfizerBioNTech"
                            },
                            {
                                "Text": "Sinopharm",
                                "Value": "sinophram"
                            },
                            {
                                "Text": "Sputnik",
                                "Value": "sputnik"
                            }
                            ],
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": "/^[a-zA-z]+$/",
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q67']['input'][index]['answer']==='1'",
                            "validation": "!/(.)\\1{2,}/.test(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q69']['input'][index]['answer'])"
                        },
                        "Q70": {
                            "id": "Q70",
                            "label": "Have you been vaccinated with Second dose",
                            "name": "Q70",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q71": {
                            "id": "Q71",
                            "label": " Date of Second dose ",
                            "name": "Q71",
                            "description": "Provide correct date here",
                            "mandatory": 1,
                            "type": "date",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q70']['input'][index]['answer']==='1'",
                            "validation": "new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q71']['input'][index]['answer'])>=new Date('2021-01-05') && new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q71']['input'][index]['answer'])<new Date() && (formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q68']['input'][index]['answer']<formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q71']['input'][index]['answer'])"
                        },
                        "Q72": {
                            "id": "Q72",
                            "label": "Name of vaccine ",
                            "name": "Q72",
                            "description": "Select the name of vaccine",
                            "mandatory": 1,
                            "type": "single-select",
                            "value": [{
                                "Text": "CoronaVac",
                                "Value": "coronaVac"
                            },
                            {
                                "Text": "Covaxin",
                                "Value": "covaxin"
                            },
                            {
                                "Text": "Covidshield",
                                "Value": "covidshield"
                            },
                            {
                                "Text": "Covovax",
                                "Value": "covovax"
                            },
                            {
                                "Text": "Janssen",
                                "Value": "janssen"
                            },
                            {
                                "Text": "Moderna",
                                "Value": "moderna"
                            },
                            {
                                "Text": "Novavax",
                                "Value": "novavax"
                            },
                            {
                                "Text": "Janssen",
                                "Value": "others"
                            },
                            {
                                "Text": "Pfizer-BioNTech",
                                "Value": "pfizerBioNTech"
                            },
                            {
                                "Text": "Sinopharm",
                                "Value": "sinophram"
                            },
                            {
                                "Text": "Sputnik",
                                "Value": "sputnik"
                            }
                            ],
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": "/^[a-zA-z&,.]+$/",
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q70']['input'][index]['answer']==='1'",
                            "validation": "!/(.)\\1{2,}/.test(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q72']['input'][index]['answer'])"
                        },
                        "Q73": {
                            "id": "Q73",
                            "label": "Have you experienced any adverse reaction post vaccination   ",
                            "name": "Q73",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q74": {
                            "id": "Q74",
                            "label": "Please share details including treatment taken for the same and date of complete recovery",
                            "name": "Q74",
                            "description": "Provide details if applicable",
                            "mandatory": 1,
                            "type": "text",
                            "value": null,
                            "default": null,
                            "min": 2,
                            "max": 50,
                            "pattern": "/^[a-zA-z0-9 ,.-]+$/",
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q73']['input'][index]['answer']==='1'\n",
                            "validation": ""
                        },
                        "Q75": {
                            "id": "Q75",
                            "label": "Are your currently residing outside of India",
                            "name": "Q75",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q76": {
                            "id": "Q76",
                            "label": "Name of country ",
                            "name": "Q76",
                            "description": null,
                            "mandatory": 1,
                            "type": "single-select",
                            "value": [{
                                "Text": "Abkhazia",
                                "Value": "Abkhazia"
                            },
                            {
                                "Text": "Afghanistan",
                                "Value": "Afghanistan"
                            },
                            {
                                "Text": "Aland",
                                "Value": "Aland"
                            },
                            {
                                "Text": "Albania",
                                "Value": "Albania"
                            },
                            {
                                "Text": "Algeria",
                                "Value": "Algeria"
                            },
                            {
                                "Text": "American Samoa",
                                "Value": "American Samoa"
                            },
                            {
                                "Text": "Andorra",
                                "Value": "Andorra"
                            },
                            {
                                "Text": "Angola",
                                "Value": "Angola"
                            },
                            {
                                "Text": "Anguilla",
                                "Value": "Anguilla"
                            },
                            {
                                "Text": "Antigua and Barbuda",
                                "Value": "Antigua and Barbuda"
                            },
                            {
                                "Text": "Argentina",
                                "Value": "Argentina"
                            },
                            {
                                "Text": "Armenia",
                                "Value": "Armenia"
                            },
                            {
                                "Text": "Aruba",
                                "Value": "Aruba"
                            },
                            {
                                "Text": "Ascension",
                                "Value": "Ascension"
                            },
                            {
                                "Text": "Ashmore and Cartier Islands",
                                "Value": "Ashmore and Cartier Islands"
                            },
                            {
                                "Text": "Australia",
                                "Value": "Australia"
                            },
                            {
                                "Text": "Australian Antarctic Territory",
                                "Value": "Australian Antarctic Territory"
                            },
                            {
                                "Text": "Austria",
                                "Value": "Austria"
                            },
                            {
                                "Text": "Azerbaijan",
                                "Value": "Azerbaijan"
                            },
                            {
                                "Text": "Bahamas, The",
                                "Value": "Bahamas, The"
                            },
                            {
                                "Text": "Bahrain",
                                "Value": "Bahrain"
                            },
                            {
                                "Text": "Baker Island",
                                "Value": "Baker Island"
                            },
                            {
                                "Text": "Bangladesh",
                                "Value": "Bangladesh"
                            },
                            {
                                "Text": "Barbados",
                                "Value": "Barbados"
                            },
                            {
                                "Text": "Belarus",
                                "Value": "Belarus"
                            },
                            {
                                "Text": "Belgium",
                                "Value": "Belgium"
                            },
                            {
                                "Text": "Belize",
                                "Value": "Belize"
                            },
                            {
                                "Text": "Benin",
                                "Value": "Benin"
                            },
                            {
                                "Text": "Bermuda",
                                "Value": "Bermuda"
                            },
                            {
                                "Text": "Bhutan",
                                "Value": "Bhutan"
                            },
                            {
                                "Text": "Bolivia",
                                "Value": "Bolivia"
                            },
                            {
                                "Text": "Bosnia and Herzegovina",
                                "Value": "Bosnia and Herzegovina"
                            },
                            {
                                "Text": "Botswana",
                                "Value": "Botswana"
                            },
                            {
                                "Text": "Bouvet Island",
                                "Value": "Bouvet Island"
                            },
                            {
                                "Text": "Brazil",
                                "Value": "Brazil"
                            },
                            {
                                "Text": "British Indian Ocean Territory",
                                "Value": "British Indian Ocean Territory"
                            },
                            {
                                "Text": "British Sovereign Base Areas",
                                "Value": "British Sovereign Base Areas"
                            },
                            {
                                "Text": "British Virgin Islands",
                                "Value": "British Virgin Islands"
                            },
                            {
                                "Text": "Brunei",
                                "Value": "Brunei"
                            },
                            {
                                "Text": "Bulgaria",
                                "Value": "Bulgaria"
                            },
                            {
                                "Text": "Burkina Faso",
                                "Value": "Burkina Faso"
                            },
                            {
                                "Text": "Burundi",
                                "Value": "Burundi"
                            },
                            {
                                "Text": "Cambodia",
                                "Value": "Cambodia"
                            },
                            {
                                "Text": "Cameroon",
                                "Value": "Cameroon"
                            },
                            {
                                "Text": "Canada",
                                "Value": "Canada"
                            },
                            {
                                "Text": "Cape Verde",
                                "Value": "Cape Verde"
                            },
                            {
                                "Text": "Cayman Islands",
                                "Value": "Cayman Islands"
                            },
                            {
                                "Text": "CD",
                                "Value": "CongoCD"
                            },
                            {
                                "Text": "Central African Republic",
                                "Value": "Central African Republic"
                            },
                            {
                                "Text": "CG",
                                "Value": "CongoCG"
                            },
                            {
                                "Text": "Chad",
                                "Value": "Chad"
                            },
                            {
                                "Text": "Chile",
                                "Value": "Chile"
                            },
                            {
                                "Text": "China, People's Republic of",
                                "Value": "China, People's Republic of"
                            },
                            {
                                "Text": "China, Republic of (Taiwan)",
                                "Value": "China, Republic of (Taiwan)"
                            },
                            {
                                "Text": "Christmas Island",
                                "Value": "Christmas Island"
                            },
                            {
                                "Text": "Clipperton Island",
                                "Value": "Clipperton Island"
                            },
                            {
                                "Text": "Cocos (Keeling) Islands",
                                "Value": "Cocos (Keeling) Islands"
                            },
                            {
                                "Text": "Colombia",
                                "Value": "Colombia"
                            },
                            {
                                "Text": "Comoros",
                                "Value": "Comoros"
                            },
                            {
                                "Text": "Cook Islands",
                                "Value": "Cook Islands"
                            },
                            {
                                "Text": "Coral Sea Islands",
                                "Value": "Coral Sea Islands"
                            },
                            {
                                "Text": "Costa Rica",
                                "Value": "Costa Rica"
                            },
                            {
                                "Text": "Cote d'Ivoire (Ivory Coast)",
                                "Value": "Cote d'Ivoire (Ivory Coast)"
                            },
                            {
                                "Text": "Croatia",
                                "Value": "Croatia"
                            },
                            {
                                "Text": "Cuba",
                                "Value": "Cuba"
                            },
                            {
                                "Text": "Cyprus",
                                "Value": "Cyprus"
                            },
                            {
                                "Text": "Czech Republic",
                                "Value": "Czech Republic"
                            },
                            {
                                "Text": "Denmark",
                                "Value": "Denmark"
                            },
                            {
                                "Text": "Djibouti",
                                "Value": "Djibouti"
                            },
                            {
                                "Text": "Dominica",
                                "Value": "Dominica"
                            },
                            {
                                "Text": "Dominican Republic",
                                "Value": "Dominican Republic"
                            },
                            {
                                "Text": "Ecuador",
                                "Value": "Ecuador"
                            },
                            {
                                "Text": "Egypt",
                                "Value": "Egypt"
                            },
                            {
                                "Text": "El Salvador",
                                "Value": "El Salvador"
                            },
                            {
                                "Text": "Equatorial Guinea",
                                "Value": "Equatorial Guinea"
                            },
                            {
                                "Text": "Eritrea",
                                "Value": "Eritrea"
                            },
                            {
                                "Text": "Estonia",
                                "Value": "Estonia"
                            },
                            {
                                "Text": "Ethiopia",
                                "Value": "Ethiopia"
                            },
                            {
                                "Text": "Falkland Islands (Islas Malvinas)",
                                "Value": "Falkland Islands (Islas Malvinas)"
                            },
                            {
                                "Text": "Faroe Islands",
                                "Value": "Faroe Islands"
                            },
                            {
                                "Text": "Fiji",
                                "Value": "Fiji"
                            },
                            {
                                "Text": "Finland",
                                "Value": "Finland"
                            },
                            {
                                "Text": "France",
                                "Value": "France"
                            },
                            {
                                "Text": "French Guiana",
                                "Value": "French Guiana"
                            },
                            {
                                "Text": "French Polynesia",
                                "Value": "French Polynesia"
                            },
                            {
                                "Text": "French Southern and Antarctic Lands",
                                "Value": "French Southern and Antarctic Lands"
                            },
                            {
                                "Text": "Gabon",
                                "Value": "Gabon"
                            },
                            {
                                "Text": "Gambia, The",
                                "Value": "Gambia, The"
                            },
                            {
                                "Text": "Georgia",
                                "Value": "Georgia"
                            },
                            {
                                "Text": "Germany",
                                "Value": "Germany"
                            },
                            {
                                "Text": "Ghana",
                                "Value": "Ghana"
                            },
                            {
                                "Text": "Gibraltar",
                                "Value": "Gibraltar"
                            },
                            {
                                "Text": "Greece",
                                "Value": "Greece"
                            },
                            {
                                "Text": "Greenland",
                                "Value": "Greenland"
                            },
                            {
                                "Text": "Grenada",
                                "Value": "Grenada"
                            },
                            {
                                "Text": "Guadeloupe",
                                "Value": "Guadeloupe"
                            },
                            {
                                "Text": "Guam",
                                "Value": "Guam"
                            },
                            {
                                "Text": "Guatemala",
                                "Value": "Guatemala"
                            },
                            {
                                "Text": "Guernsey",
                                "Value": "Guernsey"
                            },
                            {
                                "Text": "Guinea",
                                "Value": "Guinea"
                            },
                            {
                                "Text": "Guinea-Bissau",
                                "Value": "Guinea-Bissau"
                            },
                            {
                                "Text": "Guyana",
                                "Value": "Guyana"
                            },
                            {
                                "Text": "Haiti",
                                "Value": "Haiti"
                            },
                            {
                                "Text": "Heard Island and McDonald Islands",
                                "Value": "Heard Island and McDonald Islands"
                            },
                            {
                                "Text": "Honduras",
                                "Value": "Honduras"
                            },
                            {
                                "Text": "Hong Kong",
                                "Value": "Hong Kong"
                            },
                            {
                                "Text": "Howland Island",
                                "Value": "Howland Island"
                            },
                            {
                                "Text": "Hungary",
                                "Value": "Hungary"
                            },
                            {
                                "Text": "Iceland",
                                "Value": "Iceland"
                            },
                            {
                                "Text": "India",
                                "Value": "India"
                            },
                            {
                                "Text": "Indonesia",
                                "Value": "Indonesia"
                            },
                            {
                                "Text": "Iran",
                                "Value": "Iran"
                            },
                            {
                                "Text": "Iraq",
                                "Value": "Iraq"
                            },
                            {
                                "Text": "Ireland",
                                "Value": "Ireland"
                            },
                            {
                                "Text": "Isle of Man",
                                "Value": "Isle of Man"
                            },
                            {
                                "Text": "Israel",
                                "Value": "Israel"
                            },
                            {
                                "Text": "Italy",
                                "Value": "Italy"
                            },
                            {
                                "Text": "Jamaica",
                                "Value": "Jamaica"
                            },
                            {
                                "Text": "Japan",
                                "Value": "Japan"
                            },
                            {
                                "Text": "Jarvis Island",
                                "Value": "Jarvis Island"
                            },
                            {
                                "Text": "Jersey",
                                "Value": "Jersey"
                            },
                            {
                                "Text": "Johnston Atoll",
                                "Value": "Johnston Atoll"
                            },
                            {
                                "Text": "Jordan",
                                "Value": "Jordan"
                            },
                            {
                                "Text": "Kazakhstan",
                                "Value": "Kazakhstan"
                            },
                            {
                                "Text": "Kenya",
                                "Value": "Kenya"
                            },
                            {
                                "Text": "Kingman Reef",
                                "Value": "Kingman Reef"
                            },
                            {
                                "Text": "Kiribati",
                                "Value": "Kiribati"
                            },
                            {
                                "Text": "Korea, North",
                                "Value": "Korea, North"
                            },
                            {
                                "Text": "Korea, South",
                                "Value": "Korea, South"
                            },
                            {
                                "Text": "Kuwait",
                                "Value": "Kuwait"
                            },
                            {
                                "Text": "Kyrgyzstan",
                                "Value": "Kyrgyzstan"
                            },
                            {
                                "Text": "Laos",
                                "Value": "Laos"
                            },
                            {
                                "Text": "Latvia",
                                "Value": "Latvia"
                            },
                            {
                                "Text": "Lebanon",
                                "Value": "Lebanon"
                            },
                            {
                                "Text": "Lesotho",
                                "Value": "Lesotho"
                            },
                            {
                                "Text": "Liberia",
                                "Value": "Liberia"
                            },
                            {
                                "Text": "Libya",
                                "Value": "Libya"
                            },
                            {
                                "Text": "Liechtenstein",
                                "Value": "Liechtenstein"
                            },
                            {
                                "Text": "Lithuania",
                                "Value": "Lithuania"
                            },
                            {
                                "Text": "Luxembourg",
                                "Value": "Luxembourg"
                            },
                            {
                                "Text": "Macau",
                                "Value": "Macau"
                            },
                            {
                                "Text": "Macedonia",
                                "Value": "Macedonia"
                            },
                            {
                                "Text": "Madagascar",
                                "Value": "Madagascar"
                            },
                            {
                                "Text": "Malawi",
                                "Value": "Malawi"
                            },
                            {
                                "Text": "Malaysia",
                                "Value": "Malaysia"
                            },
                            {
                                "Text": "Maldives",
                                "Value": "Maldives"
                            },
                            {
                                "Text": "Mali",
                                "Value": "Mali"
                            },
                            {
                                "Text": "Malta",
                                "Value": "Malta"
                            },
                            {
                                "Text": "Marshall Islands",
                                "Value": "Marshall Islands"
                            },
                            {
                                "Text": "Martinique",
                                "Value": "Martinique"
                            },
                            {
                                "Text": "Mauritania",
                                "Value": "Mauritania"
                            },
                            {
                                "Text": "Mauritius",
                                "Value": "Mauritius"
                            },
                            {
                                "Text": "Mayotte",
                                "Value": "Mayotte"
                            },
                            {
                                "Text": "Mexico",
                                "Value": "Mexico"
                            },
                            {
                                "Text": "Micronesia",
                                "Value": "Micronesia"
                            },
                            {
                                "Text": "Midway Islands",
                                "Value": "Midway Islands"
                            },
                            {
                                "Text": "Moldova",
                                "Value": "Moldova"
                            },
                            {
                                "Text": "Monaco",
                                "Value": "Monaco"
                            },
                            {
                                "Text": "Mongolia",
                                "Value": "Mongolia"
                            },
                            {
                                "Text": "Montenegro",
                                "Value": "Montenegro"
                            },
                            {
                                "Text": "Montserrat",
                                "Value": "Montserrat"
                            },
                            {
                                "Text": "Morocco",
                                "Value": "Morocco"
                            },
                            {
                                "Text": "Mozambique",
                                "Value": "Mozambique"
                            },
                            {
                                "Text": "Myanmar (Burma)",
                                "Value": "Myanmar (Burma)"
                            },
                            {
                                "Text": "Nagorno-Karabakh",
                                "Value": "Nagorno-Karabakh"
                            },
                            {
                                "Text": "Namibia",
                                "Value": "Namibia"
                            },
                            {
                                "Text": "Nauru",
                                "Value": "Nauru"
                            },
                            {
                                "Text": "Navassa Island",
                                "Value": "Navassa Island"
                            },
                            {
                                "Text": "Nepal",
                                "Value": "Nepal"
                            },
                            {
                                "Text": "Netherlands",
                                "Value": "Netherlands"
                            },
                            {
                                "Text": "Netherlands Antilles",
                                "Value": "Netherlands Antilles"
                            },
                            {
                                "Text": "New Caledonia",
                                "Value": "New Caledonia"
                            },
                            {
                                "Text": "New Zealand",
                                "Value": "New Zealand"
                            },
                            {
                                "Text": "Nicaragua",
                                "Value": "Nicaragua"
                            },
                            {
                                "Text": "Niger",
                                "Value": "Niger"
                            },
                            {
                                "Text": "Nigeria",
                                "Value": "Nigeria"
                            },
                            {
                                "Text": "Niue",
                                "Value": "Niue"
                            },
                            {
                                "Text": "Norfolk Island",
                                "Value": "Norfolk Island"
                            },
                            {
                                "Text": "Northern Cyprus",
                                "Value": "Northern Cyprus"
                            },
                            {
                                "Text": "Northern Mariana Islands",
                                "Value": "Northern Mariana Islands"
                            },
                            {
                                "Text": "Norway",
                                "Value": "Norway"
                            },
                            {
                                "Text": "Oman",
                                "Value": "Oman"
                            },
                            {
                                "Text": "Pakistan",
                                "Value": "Pakistan"
                            },
                            {
                                "Text": "Palau",
                                "Value": "Palau"
                            },
                            {
                                "Text": "Palmyra Atoll",
                                "Value": "Palmyra Atoll"
                            },
                            {
                                "Text": "Panama",
                                "Value": "Panama"
                            },
                            {
                                "Text": "Papua New Guinea",
                                "Value": "Papua New Guinea"
                            },
                            {
                                "Text": "Paraguay",
                                "Value": "Paraguay"
                            },
                            {
                                "Text": "Peru",
                                "Value": "Peru"
                            },
                            {
                                "Text": "Peter I Island",
                                "Value": "Peter I Island"
                            },
                            {
                                "Text": "Philippines",
                                "Value": "Philippines"
                            },
                            {
                                "Text": "Pitcairn Islands",
                                "Value": "Pitcairn Islands"
                            },
                            {
                                "Text": "Poland",
                                "Value": "Poland"
                            },
                            {
                                "Text": "Portugal",
                                "Value": "Portugal"
                            },
                            {
                                "Text": "Pridnestrovie (Transnistria)",
                                "Value": "Pridnestrovie (Transnistria)"
                            },
                            {
                                "Text": "Puerto Rico",
                                "Value": "Puerto Rico"
                            },
                            {
                                "Text": "Qatar",
                                "Value": "Qatar"
                            },
                            {
                                "Text": "Queen Maud Land",
                                "Value": "Queen Maud Land"
                            },
                            {
                                "Text": "Reunion",
                                "Value": "Reunion"
                            },
                            {
                                "Text": "Romania",
                                "Value": "Romania"
                            },
                            {
                                "Text": "Ross Dependency",
                                "Value": "Ross Dependency"
                            },
                            {
                                "Text": "Russia",
                                "Value": "Russia"
                            },
                            {
                                "Text": "Rwanda",
                                "Value": "Rwanda"
                            },
                            {
                                "Text": "Saint Barthelemy",
                                "Value": "Saint Barthelemy"
                            },
                            {
                                "Text": "Saint Helena",
                                "Value": "Saint Helena"
                            },
                            {
                                "Text": "Saint Kitts and Nevis",
                                "Value": "Saint Kitts and Nevis"
                            },
                            {
                                "Text": "Saint Lucia",
                                "Value": "Saint Lucia"
                            },
                            {
                                "Text": "Saint Martin",
                                "Value": "Saint Martin"
                            },
                            {
                                "Text": "Saint Pierre and Miquelon",
                                "Value": "Saint Pierre and Miquelon"
                            },
                            {
                                "Text": "Saint Vincent and the Grenadines",
                                "Value": "Saint Vincent and the Grenadines"
                            },
                            {
                                "Text": "Samoa",
                                "Value": "Samoa"
                            },
                            {
                                "Text": "San Marino",
                                "Value": "San Marino"
                            },
                            {
                                "Text": "Sao Tome and Principe",
                                "Value": "Sao Tome and Principe"
                            },
                            {
                                "Text": "Saudi Arabia",
                                "Value": "Saudi Arabia"
                            },
                            {
                                "Text": "Senegal",
                                "Value": "Senegal"
                            },
                            {
                                "Text": "Serbia",
                                "Value": "Serbia"
                            },
                            {
                                "Text": "Seychelles",
                                "Value": "Seychelles"
                            },
                            {
                                "Text": "Sierra Leone",
                                "Value": "Sierra Leone"
                            },
                            {
                                "Text": "Singapore",
                                "Value": "Singapore"
                            },
                            {
                                "Text": "Slovakia",
                                "Value": "Slovakia"
                            },
                            {
                                "Text": "Slovenia",
                                "Value": "Slovenia"
                            },
                            {
                                "Text": "Solomon Islands",
                                "Value": "Solomon Islands"
                            },
                            {
                                "Text": "Somalia",
                                "Value": "Somalia"
                            },
                            {
                                "Text": "Somaliland",
                                "Value": "Somaliland"
                            },
                            {
                                "Text": "South Africa",
                                "Value": "South Africa"
                            },
                            {
                                "Text": "South Georgia & South Sandwich Islands",
                                "Value": "South Georgia & South Sandwich Islands"
                            },
                            {
                                "Text": "South Ossetia",
                                "Value": "South Ossetia"
                            },
                            {
                                "Text": "Spain",
                                "Value": "Spain"
                            },
                            {
                                "Text": "Sri Lanka",
                                "Value": "Sri Lanka"
                            },
                            {
                                "Text": "Sudan",
                                "Value": "Sudan"
                            },
                            {
                                "Text": "Suriname",
                                "Value": "Suriname"
                            },
                            {
                                "Text": "Svalbard",
                                "Value": "Svalbard"
                            },
                            {
                                "Text": "Swaziland",
                                "Value": "Swaziland"
                            },
                            {
                                "Text": "Sweden",
                                "Value": "Sweden"
                            },
                            {
                                "Text": "Switzerland",
                                "Value": "Switzerland"
                            },
                            {
                                "Text": "Syria",
                                "Value": "Syria"
                            },
                            {
                                "Text": "Tajikistan",
                                "Value": "Tajikistan"
                            },
                            {
                                "Text": "Tanzania",
                                "Value": "Tanzania"
                            },
                            {
                                "Text": "Thailand",
                                "Value": "Thailand"
                            },
                            {
                                "Text": "Timor-Leste (East Timor)",
                                "Value": "Timor-Leste (East Timor)"
                            },
                            {
                                "Text": "Togo",
                                "Value": "Togo"
                            },
                            {
                                "Text": "Tokelau",
                                "Value": "Tokelau"
                            },
                            {
                                "Text": "Tonga",
                                "Value": "Tonga"
                            },
                            {
                                "Text": "Trinidad and Tobago",
                                "Value": "Trinidad and Tobago"
                            },
                            {
                                "Text": "Tristan da Cunha",
                                "Value": "Tristan da Cunha"
                            },
                            {
                                "Text": "Tunisia",
                                "Value": "Tunisia"
                            },
                            {
                                "Text": "Turkey",
                                "Value": "Turkey"
                            },
                            {
                                "Text": "Turkmenistan",
                                "Value": "Turkmenistan"
                            },
                            {
                                "Text": "Turks and Caicos Islands",
                                "Value": "Turks and Caicos Islands"
                            },
                            {
                                "Text": "Tuvalu",
                                "Value": "Tuvalu"
                            },
                            {
                                "Text": "U.A.E.",
                                "Value": "U.A.E."
                            },
                            {
                                "Text": "U.S. Virgin Islands",
                                "Value": "U.S. Virgin Islands"
                            },
                            {
                                "Text": "Uganda",
                                "Value": "Uganda"
                            },
                            {
                                "Text": "Ukraine",
                                "Value": "Ukraine"
                            },
                            {
                                "Text": "United Kingdom",
                                "Value": "United Kingdom"
                            },
                            {
                                "Text": "United States",
                                "Value": "United States"
                            },
                            {
                                "Text": "Uruguay",
                                "Value": "Uruguay"
                            },
                            {
                                "Text": "Uzbekistan",
                                "Value": "Uzbekistan"
                            },
                            {
                                "Text": "Vanuatu",
                                "Value": "Vanuatu"
                            },
                            {
                                "Text": "Vatican City",
                                "Value": "Vatican City"
                            },
                            {
                                "Text": "Venezuela",
                                "Value": "Venezuela"
                            },
                            {
                                "Text": "Vietnam",
                                "Value": "Vietnam"
                            },
                            {
                                "Text": "Wake Island",
                                "Value": "Wake Island"
                            },
                            {
                                "Text": "Wallis and Futuna",
                                "Value": "Wallis and Futuna"
                            },
                            {
                                "Text": "Yemen",
                                "Value": "Yemen"
                            },
                            {
                                "Text": "Zambia",
                                "Value": "Zambia"
                            },
                            {
                                "Text": "Zimbabwe",
                                "Value": "Zimbabwe"
                            }
                            ],
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q75']['input'][index]['answer']==='1'",
                            "validation": ""
                        },
                        "Q77": {
                            "id": "Q77",
                            "label": "City",
                            "name": "Q77",
                            "description": "Type name of city",
                            "mandatory": 1,
                            "type": "text",
                            "value": null,
                            "default": null,
                            "min": 2,
                            "max": 15,
                            "pattern": "/^[a-zA-z&,.]+$/",
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q75']['input'][index]['answer']==='1'",
                            "validation": "!/(.)\\1{2,}/.test(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q77']['input'][index]['answer'])"
                        },
                        "Q78": {
                            "id": "Q78",
                            "label": "Date of travel",
                            "name": "Q78",
                            "description": "Provide date of travel",
                            "mandatory": 1,
                            "type": "date",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q75']['input'][index]['answer']==='1'",
                            "validation": "Math.abs(Math.floor(new Date() - new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q78']['input'][index]['answer']))/1000/60/60/24/365)<=5 && new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q78']['input'][index]['answer']) < new Date() "
                        },
                        "Q79": {
                            "id": "Q79",
                            "label": "Intended duration (in Months)",
                            "name": "Q79",
                            "description": null,
                            "mandatory": 1,
                            "type": "number",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": 280,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q75']['input'][index]['answer']==='1'",
                            "validation": ""
                        },
                        "Q80": {
                            "id": "Q80",
                            "label": "Have you travelled abroad in past 14 days",
                            "name": "Q80",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q81": {
                            "id": "Q81",
                            "label": "Name of country ",
                            "name": "Q81",
                            "description": null,
                            "mandatory": 1,
                            "type": "single-select",
                            "value": [{
                                "Text": "Abkhazia",
                                "Value": "Abkhazia"
                            },
                            {
                                "Text": "Afghanistan",
                                "Value": "Afghanistan"
                            },
                            {
                                "Text": "Aland",
                                "Value": "Aland"
                            },
                            {
                                "Text": "Albania",
                                "Value": "Albania"
                            },
                            {
                                "Text": "Algeria",
                                "Value": "Algeria"
                            },
                            {
                                "Text": "American Samoa",
                                "Value": "American Samoa"
                            },
                            {
                                "Text": "Andorra",
                                "Value": "Andorra"
                            },
                            {
                                "Text": "Angola",
                                "Value": "Angola"
                            },
                            {
                                "Text": "Anguilla",
                                "Value": "Anguilla"
                            },
                            {
                                "Text": "Antigua and Barbuda",
                                "Value": "Antigua and Barbuda"
                            },
                            {
                                "Text": "Argentina",
                                "Value": "Argentina"
                            },
                            {
                                "Text": "Armenia",
                                "Value": "Armenia"
                            },
                            {
                                "Text": "Aruba",
                                "Value": "Aruba"
                            },
                            {
                                "Text": "Ascension",
                                "Value": "Ascension"
                            },
                            {
                                "Text": "Ashmore and Cartier Islands",
                                "Value": "Ashmore and Cartier Islands"
                            },
                            {
                                "Text": "Australia",
                                "Value": "Australia"
                            },
                            {
                                "Text": "Australian Antarctic Territory",
                                "Value": "Australian Antarctic Territory"
                            },
                            {
                                "Text": "Austria",
                                "Value": "Austria"
                            },
                            {
                                "Text": "Azerbaijan",
                                "Value": "Azerbaijan"
                            },
                            {
                                "Text": "Bahamas, The",
                                "Value": "Bahamas, The"
                            },
                            {
                                "Text": "Bahrain",
                                "Value": "Bahrain"
                            },
                            {
                                "Text": "Baker Island",
                                "Value": "Baker Island"
                            },
                            {
                                "Text": "Bangladesh",
                                "Value": "Bangladesh"
                            },
                            {
                                "Text": "Barbados",
                                "Value": "Barbados"
                            },
                            {
                                "Text": "Belarus",
                                "Value": "Belarus"
                            },
                            {
                                "Text": "Belgium",
                                "Value": "Belgium"
                            },
                            {
                                "Text": "Belize",
                                "Value": "Belize"
                            },
                            {
                                "Text": "Benin",
                                "Value": "Benin"
                            },
                            {
                                "Text": "Bermuda",
                                "Value": "Bermuda"
                            },
                            {
                                "Text": "Bhutan",
                                "Value": "Bhutan"
                            },
                            {
                                "Text": "Bolivia",
                                "Value": "Bolivia"
                            },
                            {
                                "Text": "Bosnia and Herzegovina",
                                "Value": "Bosnia and Herzegovina"
                            },
                            {
                                "Text": "Botswana",
                                "Value": "Botswana"
                            },
                            {
                                "Text": "Bouvet Island",
                                "Value": "Bouvet Island"
                            },
                            {
                                "Text": "Brazil",
                                "Value": "Brazil"
                            },
                            {
                                "Text": "British Indian Ocean Territory",
                                "Value": "British Indian Ocean Territory"
                            },
                            {
                                "Text": "British Sovereign Base Areas",
                                "Value": "British Sovereign Base Areas"
                            },
                            {
                                "Text": "British Virgin Islands",
                                "Value": "British Virgin Islands"
                            },
                            {
                                "Text": "Brunei",
                                "Value": "Brunei"
                            },
                            {
                                "Text": "Bulgaria",
                                "Value": "Bulgaria"
                            },
                            {
                                "Text": "Burkina Faso",
                                "Value": "Burkina Faso"
                            },
                            {
                                "Text": "Burundi",
                                "Value": "Burundi"
                            },
                            {
                                "Text": "Cambodia",
                                "Value": "Cambodia"
                            },
                            {
                                "Text": "Cameroon",
                                "Value": "Cameroon"
                            },
                            {
                                "Text": "Canada",
                                "Value": "Canada"
                            },
                            {
                                "Text": "Cape Verde",
                                "Value": "Cape Verde"
                            },
                            {
                                "Text": "Cayman Islands",
                                "Value": "Cayman Islands"
                            },
                            {
                                "Text": "CD",
                                "Value": "CongoCD"
                            },
                            {
                                "Text": "Central African Republic",
                                "Value": "Central African Republic"
                            },
                            {
                                "Text": "CG",
                                "Value": "CongoCG"
                            },
                            {
                                "Text": "Chad",
                                "Value": "Chad"
                            },
                            {
                                "Text": "Chile",
                                "Value": "Chile"
                            },
                            {
                                "Text": "China, People's Republic of",
                                "Value": "China, People's Republic of"
                            },
                            {
                                "Text": "China, Republic of (Taiwan)",
                                "Value": "China, Republic of (Taiwan)"
                            },
                            {
                                "Text": "Christmas Island",
                                "Value": "Christmas Island"
                            },
                            {
                                "Text": "Clipperton Island",
                                "Value": "Clipperton Island"
                            },
                            {
                                "Text": "Cocos (Keeling) Islands",
                                "Value": "Cocos (Keeling) Islands"
                            },
                            {
                                "Text": "Colombia",
                                "Value": "Colombia"
                            },
                            {
                                "Text": "Comoros",
                                "Value": "Comoros"
                            },
                            {
                                "Text": "Cook Islands",
                                "Value": "Cook Islands"
                            },
                            {
                                "Text": "Coral Sea Islands",
                                "Value": "Coral Sea Islands"
                            },
                            {
                                "Text": "Costa Rica",
                                "Value": "Costa Rica"
                            },
                            {
                                "Text": "Cote d'Ivoire (Ivory Coast)",
                                "Value": "Cote d'Ivoire (Ivory Coast)"
                            },
                            {
                                "Text": "Croatia",
                                "Value": "Croatia"
                            },
                            {
                                "Text": "Cuba",
                                "Value": "Cuba"
                            },
                            {
                                "Text": "Cyprus",
                                "Value": "Cyprus"
                            },
                            {
                                "Text": "Czech Republic",
                                "Value": "Czech Republic"
                            },
                            {
                                "Text": "Denmark",
                                "Value": "Denmark"
                            },
                            {
                                "Text": "Djibouti",
                                "Value": "Djibouti"
                            },
                            {
                                "Text": "Dominica",
                                "Value": "Dominica"
                            },
                            {
                                "Text": "Dominican Republic",
                                "Value": "Dominican Republic"
                            },
                            {
                                "Text": "Ecuador",
                                "Value": "Ecuador"
                            },
                            {
                                "Text": "Egypt",
                                "Value": "Egypt"
                            },
                            {
                                "Text": "El Salvador",
                                "Value": "El Salvador"
                            },
                            {
                                "Text": "Equatorial Guinea",
                                "Value": "Equatorial Guinea"
                            },
                            {
                                "Text": "Eritrea",
                                "Value": "Eritrea"
                            },
                            {
                                "Text": "Estonia",
                                "Value": "Estonia"
                            },
                            {
                                "Text": "Ethiopia",
                                "Value": "Ethiopia"
                            },
                            {
                                "Text": "Falkland Islands (Islas Malvinas)",
                                "Value": "Falkland Islands (Islas Malvinas)"
                            },
                            {
                                "Text": "Faroe Islands",
                                "Value": "Faroe Islands"
                            },
                            {
                                "Text": "Fiji",
                                "Value": "Fiji"
                            },
                            {
                                "Text": "Finland",
                                "Value": "Finland"
                            },
                            {
                                "Text": "France",
                                "Value": "France"
                            },
                            {
                                "Text": "French Guiana",
                                "Value": "French Guiana"
                            },
                            {
                                "Text": "French Polynesia",
                                "Value": "French Polynesia"
                            },
                            {
                                "Text": "French Southern and Antarctic Lands",
                                "Value": "French Southern and Antarctic Lands"
                            },
                            {
                                "Text": "Gabon",
                                "Value": "Gabon"
                            },
                            {
                                "Text": "Gambia, The",
                                "Value": "Gambia, The"
                            },
                            {
                                "Text": "Georgia",
                                "Value": "Georgia"
                            },
                            {
                                "Text": "Germany",
                                "Value": "Germany"
                            },
                            {
                                "Text": "Ghana",
                                "Value": "Ghana"
                            },
                            {
                                "Text": "Gibraltar",
                                "Value": "Gibraltar"
                            },
                            {
                                "Text": "Greece",
                                "Value": "Greece"
                            },
                            {
                                "Text": "Greenland",
                                "Value": "Greenland"
                            },
                            {
                                "Text": "Grenada",
                                "Value": "Grenada"
                            },
                            {
                                "Text": "Guadeloupe",
                                "Value": "Guadeloupe"
                            },
                            {
                                "Text": "Guam",
                                "Value": "Guam"
                            },
                            {
                                "Text": "Guatemala",
                                "Value": "Guatemala"
                            },
                            {
                                "Text": "Guernsey",
                                "Value": "Guernsey"
                            },
                            {
                                "Text": "Guinea",
                                "Value": "Guinea"
                            },
                            {
                                "Text": "Guinea-Bissau",
                                "Value": "Guinea-Bissau"
                            },
                            {
                                "Text": "Guyana",
                                "Value": "Guyana"
                            },
                            {
                                "Text": "Haiti",
                                "Value": "Haiti"
                            },
                            {
                                "Text": "Heard Island and McDonald Islands",
                                "Value": "Heard Island and McDonald Islands"
                            },
                            {
                                "Text": "Honduras",
                                "Value": "Honduras"
                            },
                            {
                                "Text": "Hong Kong",
                                "Value": "Hong Kong"
                            },
                            {
                                "Text": "Howland Island",
                                "Value": "Howland Island"
                            },
                            {
                                "Text": "Hungary",
                                "Value": "Hungary"
                            },
                            {
                                "Text": "Iceland",
                                "Value": "Iceland"
                            },
                            {
                                "Text": "India",
                                "Value": "India"
                            },
                            {
                                "Text": "Indonesia",
                                "Value": "Indonesia"
                            },
                            {
                                "Text": "Iran",
                                "Value": "Iran"
                            },
                            {
                                "Text": "Iraq",
                                "Value": "Iraq"
                            },
                            {
                                "Text": "Ireland",
                                "Value": "Ireland"
                            },
                            {
                                "Text": "Isle of Man",
                                "Value": "Isle of Man"
                            },
                            {
                                "Text": "Israel",
                                "Value": "Israel"
                            },
                            {
                                "Text": "Italy",
                                "Value": "Italy"
                            },
                            {
                                "Text": "Jamaica",
                                "Value": "Jamaica"
                            },
                            {
                                "Text": "Japan",
                                "Value": "Japan"
                            },
                            {
                                "Text": "Jarvis Island",
                                "Value": "Jarvis Island"
                            },
                            {
                                "Text": "Jersey",
                                "Value": "Jersey"
                            },
                            {
                                "Text": "Johnston Atoll",
                                "Value": "Johnston Atoll"
                            },
                            {
                                "Text": "Jordan",
                                "Value": "Jordan"
                            },
                            {
                                "Text": "Kazakhstan",
                                "Value": "Kazakhstan"
                            },
                            {
                                "Text": "Kenya",
                                "Value": "Kenya"
                            },
                            {
                                "Text": "Kingman Reef",
                                "Value": "Kingman Reef"
                            },
                            {
                                "Text": "Kiribati",
                                "Value": "Kiribati"
                            },
                            {
                                "Text": "Korea, North",
                                "Value": "Korea, North"
                            },
                            {
                                "Text": "Korea, South",
                                "Value": "Korea, South"
                            },
                            {
                                "Text": "Kuwait",
                                "Value": "Kuwait"
                            },
                            {
                                "Text": "Kyrgyzstan",
                                "Value": "Kyrgyzstan"
                            },
                            {
                                "Text": "Laos",
                                "Value": "Laos"
                            },
                            {
                                "Text": "Latvia",
                                "Value": "Latvia"
                            },
                            {
                                "Text": "Lebanon",
                                "Value": "Lebanon"
                            },
                            {
                                "Text": "Lesotho",
                                "Value": "Lesotho"
                            },
                            {
                                "Text": "Liberia",
                                "Value": "Liberia"
                            },
                            {
                                "Text": "Libya",
                                "Value": "Libya"
                            },
                            {
                                "Text": "Liechtenstein",
                                "Value": "Liechtenstein"
                            },
                            {
                                "Text": "Lithuania",
                                "Value": "Lithuania"
                            },
                            {
                                "Text": "Luxembourg",
                                "Value": "Luxembourg"
                            },
                            {
                                "Text": "Macau",
                                "Value": "Macau"
                            },
                            {
                                "Text": "Macedonia",
                                "Value": "Macedonia"
                            },
                            {
                                "Text": "Madagascar",
                                "Value": "Madagascar"
                            },
                            {
                                "Text": "Malawi",
                                "Value": "Malawi"
                            },
                            {
                                "Text": "Malaysia",
                                "Value": "Malaysia"
                            },
                            {
                                "Text": "Maldives",
                                "Value": "Maldives"
                            },
                            {
                                "Text": "Mali",
                                "Value": "Mali"
                            },
                            {
                                "Text": "Malta",
                                "Value": "Malta"
                            },
                            {
                                "Text": "Marshall Islands",
                                "Value": "Marshall Islands"
                            },
                            {
                                "Text": "Martinique",
                                "Value": "Martinique"
                            },
                            {
                                "Text": "Mauritania",
                                "Value": "Mauritania"
                            },
                            {
                                "Text": "Mauritius",
                                "Value": "Mauritius"
                            },
                            {
                                "Text": "Mayotte",
                                "Value": "Mayotte"
                            },
                            {
                                "Text": "Mexico",
                                "Value": "Mexico"
                            },
                            {
                                "Text": "Micronesia",
                                "Value": "Micronesia"
                            },
                            {
                                "Text": "Midway Islands",
                                "Value": "Midway Islands"
                            },
                            {
                                "Text": "Moldova",
                                "Value": "Moldova"
                            },
                            {
                                "Text": "Monaco",
                                "Value": "Monaco"
                            },
                            {
                                "Text": "Mongolia",
                                "Value": "Mongolia"
                            },
                            {
                                "Text": "Montenegro",
                                "Value": "Montenegro"
                            },
                            {
                                "Text": "Montserrat",
                                "Value": "Montserrat"
                            },
                            {
                                "Text": "Morocco",
                                "Value": "Morocco"
                            },
                            {
                                "Text": "Mozambique",
                                "Value": "Mozambique"
                            },
                            {
                                "Text": "Myanmar (Burma)",
                                "Value": "Myanmar (Burma)"
                            },
                            {
                                "Text": "Nagorno-Karabakh",
                                "Value": "Nagorno-Karabakh"
                            },
                            {
                                "Text": "Namibia",
                                "Value": "Namibia"
                            },
                            {
                                "Text": "Nauru",
                                "Value": "Nauru"
                            },
                            {
                                "Text": "Navassa Island",
                                "Value": "Navassa Island"
                            },
                            {
                                "Text": "Nepal",
                                "Value": "Nepal"
                            },
                            {
                                "Text": "Netherlands",
                                "Value": "Netherlands"
                            },
                            {
                                "Text": "Netherlands Antilles",
                                "Value": "Netherlands Antilles"
                            },
                            {
                                "Text": "New Caledonia",
                                "Value": "New Caledonia"
                            },
                            {
                                "Text": "New Zealand",
                                "Value": "New Zealand"
                            },
                            {
                                "Text": "Nicaragua",
                                "Value": "Nicaragua"
                            },
                            {
                                "Text": "Niger",
                                "Value": "Niger"
                            },
                            {
                                "Text": "Nigeria",
                                "Value": "Nigeria"
                            },
                            {
                                "Text": "Niue",
                                "Value": "Niue"
                            },
                            {
                                "Text": "Norfolk Island",
                                "Value": "Norfolk Island"
                            },
                            {
                                "Text": "Northern Cyprus",
                                "Value": "Northern Cyprus"
                            },
                            {
                                "Text": "Northern Mariana Islands",
                                "Value": "Northern Mariana Islands"
                            },
                            {
                                "Text": "Norway",
                                "Value": "Norway"
                            },
                            {
                                "Text": "Oman",
                                "Value": "Oman"
                            },
                            {
                                "Text": "Pakistan",
                                "Value": "Pakistan"
                            },
                            {
                                "Text": "Palau",
                                "Value": "Palau"
                            },
                            {
                                "Text": "Palmyra Atoll",
                                "Value": "Palmyra Atoll"
                            },
                            {
                                "Text": "Panama",
                                "Value": "Panama"
                            },
                            {
                                "Text": "Papua New Guinea",
                                "Value": "Papua New Guinea"
                            },
                            {
                                "Text": "Paraguay",
                                "Value": "Paraguay"
                            },
                            {
                                "Text": "Peru",
                                "Value": "Peru"
                            },
                            {
                                "Text": "Peter I Island",
                                "Value": "Peter I Island"
                            },
                            {
                                "Text": "Philippines",
                                "Value": "Philippines"
                            },
                            {
                                "Text": "Pitcairn Islands",
                                "Value": "Pitcairn Islands"
                            },
                            {
                                "Text": "Poland",
                                "Value": "Poland"
                            },
                            {
                                "Text": "Portugal",
                                "Value": "Portugal"
                            },
                            {
                                "Text": "Pridnestrovie (Transnistria)",
                                "Value": "Pridnestrovie (Transnistria)"
                            },
                            {
                                "Text": "Puerto Rico",
                                "Value": "Puerto Rico"
                            },
                            {
                                "Text": "Qatar",
                                "Value": "Qatar"
                            },
                            {
                                "Text": "Queen Maud Land",
                                "Value": "Queen Maud Land"
                            },
                            {
                                "Text": "Reunion",
                                "Value": "Reunion"
                            },
                            {
                                "Text": "Romania",
                                "Value": "Romania"
                            },
                            {
                                "Text": "Ross Dependency",
                                "Value": "Ross Dependency"
                            },
                            {
                                "Text": "Russia",
                                "Value": "Russia"
                            },
                            {
                                "Text": "Rwanda",
                                "Value": "Rwanda"
                            },
                            {
                                "Text": "Saint Barthelemy",
                                "Value": "Saint Barthelemy"
                            },
                            {
                                "Text": "Saint Helena",
                                "Value": "Saint Helena"
                            },
                            {
                                "Text": "Saint Kitts and Nevis",
                                "Value": "Saint Kitts and Nevis"
                            },
                            {
                                "Text": "Saint Lucia",
                                "Value": "Saint Lucia"
                            },
                            {
                                "Text": "Saint Martin",
                                "Value": "Saint Martin"
                            },
                            {
                                "Text": "Saint Pierre and Miquelon",
                                "Value": "Saint Pierre and Miquelon"
                            },
                            {
                                "Text": "Saint Vincent and the Grenadines",
                                "Value": "Saint Vincent and the Grenadines"
                            },
                            {
                                "Text": "Samoa",
                                "Value": "Samoa"
                            },
                            {
                                "Text": "San Marino",
                                "Value": "San Marino"
                            },
                            {
                                "Text": "Sao Tome and Principe",
                                "Value": "Sao Tome and Principe"
                            },
                            {
                                "Text": "Saudi Arabia",
                                "Value": "Saudi Arabia"
                            },
                            {
                                "Text": "Senegal",
                                "Value": "Senegal"
                            },
                            {
                                "Text": "Serbia",
                                "Value": "Serbia"
                            },
                            {
                                "Text": "Seychelles",
                                "Value": "Seychelles"
                            },
                            {
                                "Text": "Sierra Leone",
                                "Value": "Sierra Leone"
                            },
                            {
                                "Text": "Singapore",
                                "Value": "Singapore"
                            },
                            {
                                "Text": "Slovakia",
                                "Value": "Slovakia"
                            },
                            {
                                "Text": "Slovenia",
                                "Value": "Slovenia"
                            },
                            {
                                "Text": "Solomon Islands",
                                "Value": "Solomon Islands"
                            },
                            {
                                "Text": "Somalia",
                                "Value": "Somalia"
                            },
                            {
                                "Text": "Somaliland",
                                "Value": "Somaliland"
                            },
                            {
                                "Text": "South Africa",
                                "Value": "South Africa"
                            },
                            {
                                "Text": "South Georgia & South Sandwich Islands",
                                "Value": "South Georgia & South Sandwich Islands"
                            },
                            {
                                "Text": "South Ossetia",
                                "Value": "South Ossetia"
                            },
                            {
                                "Text": "Spain",
                                "Value": "Spain"
                            },
                            {
                                "Text": "Sri Lanka",
                                "Value": "Sri Lanka"
                            },
                            {
                                "Text": "Sudan",
                                "Value": "Sudan"
                            },
                            {
                                "Text": "Suriname",
                                "Value": "Suriname"
                            },
                            {
                                "Text": "Svalbard",
                                "Value": "Svalbard"
                            },
                            {
                                "Text": "Swaziland",
                                "Value": "Swaziland"
                            },
                            {
                                "Text": "Sweden",
                                "Value": "Sweden"
                            },
                            {
                                "Text": "Switzerland",
                                "Value": "Switzerland"
                            },
                            {
                                "Text": "Syria",
                                "Value": "Syria"
                            },
                            {
                                "Text": "Tajikistan",
                                "Value": "Tajikistan"
                            },
                            {
                                "Text": "Tanzania",
                                "Value": "Tanzania"
                            },
                            {
                                "Text": "Thailand",
                                "Value": "Thailand"
                            },
                            {
                                "Text": "Timor-Leste (East Timor)",
                                "Value": "Timor-Leste (East Timor)"
                            },
                            {
                                "Text": "Togo",
                                "Value": "Togo"
                            },
                            {
                                "Text": "Tokelau",
                                "Value": "Tokelau"
                            },
                            {
                                "Text": "Tonga",
                                "Value": "Tonga"
                            },
                            {
                                "Text": "Trinidad and Tobago",
                                "Value": "Trinidad and Tobago"
                            },
                            {
                                "Text": "Tristan da Cunha",
                                "Value": "Tristan da Cunha"
                            },
                            {
                                "Text": "Tunisia",
                                "Value": "Tunisia"
                            },
                            {
                                "Text": "Turkey",
                                "Value": "Turkey"
                            },
                            {
                                "Text": "Turkmenistan",
                                "Value": "Turkmenistan"
                            },
                            {
                                "Text": "Turks and Caicos Islands",
                                "Value": "Turks and Caicos Islands"
                            },
                            {
                                "Text": "Tuvalu",
                                "Value": "Tuvalu"
                            },
                            {
                                "Text": "U.A.E.",
                                "Value": "U.A.E."
                            },
                            {
                                "Text": "U.S. Virgin Islands",
                                "Value": "U.S. Virgin Islands"
                            },
                            {
                                "Text": "Uganda",
                                "Value": "Uganda"
                            },
                            {
                                "Text": "Ukraine",
                                "Value": "Ukraine"
                            },
                            {
                                "Text": "United Kingdom",
                                "Value": "United Kingdom"
                            },
                            {
                                "Text": "United States",
                                "Value": "United States"
                            },
                            {
                                "Text": "Uruguay",
                                "Value": "Uruguay"
                            },
                            {
                                "Text": "Uzbekistan",
                                "Value": "Uzbekistan"
                            },
                            {
                                "Text": "Vanuatu",
                                "Value": "Vanuatu"
                            },
                            {
                                "Text": "Vatican City",
                                "Value": "Vatican City"
                            },
                            {
                                "Text": "Venezuela",
                                "Value": "Venezuela"
                            },
                            {
                                "Text": "Vietnam",
                                "Value": "Vietnam"
                            },
                            {
                                "Text": "Wake Island",
                                "Value": "Wake Island"
                            },
                            {
                                "Text": "Wallis and Futuna",
                                "Value": "Wallis and Futuna"
                            },
                            {
                                "Text": "Yemen",
                                "Value": "Yemen"
                            },
                            {
                                "Text": "Zambia",
                                "Value": "Zambia"
                            },
                            {
                                "Text": "Zimbabwe",
                                "Value": "Zimbabwe"
                            }
                            ],
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q80']['input'][index]['answer']==='1'",
                            "validation": ""
                        },
                        "Q82": {
                            "id": "Q82",
                            "label": "City",
                            "name": "Q82",
                            "description": "Type name of city",
                            "mandatory": 1,
                            "type": "text",
                            "value": null,
                            "default": null,
                            "min": 2,
                            "max": 15,
                            "pattern": "/^[a-zA-z&,.]+$/",
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q80']['input'][index]['answer']==='1'",
                            "validation": "!/(.)\\1{2,}/.test(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q82']['input'][index]['answer'])"
                        },
                        "Q83": {
                            "id": "Q83",
                            "label": "Date Arrived",
                            "name": "Q83",
                            "description": "Provide date of arrival",
                            "mandatory": 1,
                            "type": "date",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q80']['input'][index]['answer']==='1'",
                            "validation": "new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q83']['input'][index]['answer']) <= new Date() \n"
                        },
                        "Q84": {
                            "id": "Q84",
                            "label": "Date Departed",
                            "name": "Q84",
                            "description": "Provide date of departure",
                            "mandatory": 1,
                            "type": "date",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q80']['input'][index]['answer']==='1'",
                            "validation": "(Math.floor(new Date() - new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q84']['input'][index]['answer']))/1000/60/60/24)<=14 && (Math.floor(new Date() - new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q84']['input'][index]['answer']))/1000/60/60/24)>0"
                        },
                        "Q85": {
                            "id": "Q85",
                            "label": "Name of country ",
                            "name": "Q85",
                            "description": null,
                            "mandatory": 0,
                            "type": "single-select",
                            "value": [{
                                "Text": "Abkhazia",
                                "Value": "Abkhazia"
                            },
                            {
                                "Text": "Afghanistan",
                                "Value": "Afghanistan"
                            },
                            {
                                "Text": "Aland",
                                "Value": "Aland"
                            },
                            {
                                "Text": "Albania",
                                "Value": "Albania"
                            },
                            {
                                "Text": "Algeria",
                                "Value": "Algeria"
                            },
                            {
                                "Text": "American Samoa",
                                "Value": "American Samoa"
                            },
                            {
                                "Text": "Andorra",
                                "Value": "Andorra"
                            },
                            {
                                "Text": "Angola",
                                "Value": "Angola"
                            },
                            {
                                "Text": "Anguilla",
                                "Value": "Anguilla"
                            },
                            {
                                "Text": "Antigua and Barbuda",
                                "Value": "Antigua and Barbuda"
                            },
                            {
                                "Text": "Argentina",
                                "Value": "Argentina"
                            },
                            {
                                "Text": "Armenia",
                                "Value": "Armenia"
                            },
                            {
                                "Text": "Aruba",
                                "Value": "Aruba"
                            },
                            {
                                "Text": "Ascension",
                                "Value": "Ascension"
                            },
                            {
                                "Text": "Ashmore and Cartier Islands",
                                "Value": "Ashmore and Cartier Islands"
                            },
                            {
                                "Text": "Australia",
                                "Value": "Australia"
                            },
                            {
                                "Text": "Australian Antarctic Territory",
                                "Value": "Australian Antarctic Territory"
                            },
                            {
                                "Text": "Austria",
                                "Value": "Austria"
                            },
                            {
                                "Text": "Azerbaijan",
                                "Value": "Azerbaijan"
                            },
                            {
                                "Text": "Bahamas, The",
                                "Value": "Bahamas, The"
                            },
                            {
                                "Text": "Bahrain",
                                "Value": "Bahrain"
                            },
                            {
                                "Text": "Baker Island",
                                "Value": "Baker Island"
                            },
                            {
                                "Text": "Bangladesh",
                                "Value": "Bangladesh"
                            },
                            {
                                "Text": "Barbados",
                                "Value": "Barbados"
                            },
                            {
                                "Text": "Belarus",
                                "Value": "Belarus"
                            },
                            {
                                "Text": "Belgium",
                                "Value": "Belgium"
                            },
                            {
                                "Text": "Belize",
                                "Value": "Belize"
                            },
                            {
                                "Text": "Benin",
                                "Value": "Benin"
                            },
                            {
                                "Text": "Bermuda",
                                "Value": "Bermuda"
                            },
                            {
                                "Text": "Bhutan",
                                "Value": "Bhutan"
                            },
                            {
                                "Text": "Bolivia",
                                "Value": "Bolivia"
                            },
                            {
                                "Text": "Bosnia and Herzegovina",
                                "Value": "Bosnia and Herzegovina"
                            },
                            {
                                "Text": "Botswana",
                                "Value": "Botswana"
                            },
                            {
                                "Text": "Bouvet Island",
                                "Value": "Bouvet Island"
                            },
                            {
                                "Text": "Brazil",
                                "Value": "Brazil"
                            },
                            {
                                "Text": "British Indian Ocean Territory",
                                "Value": "British Indian Ocean Territory"
                            },
                            {
                                "Text": "British Sovereign Base Areas",
                                "Value": "British Sovereign Base Areas"
                            },
                            {
                                "Text": "British Virgin Islands",
                                "Value": "British Virgin Islands"
                            },
                            {
                                "Text": "Brunei",
                                "Value": "Brunei"
                            },
                            {
                                "Text": "Bulgaria",
                                "Value": "Bulgaria"
                            },
                            {
                                "Text": "Burkina Faso",
                                "Value": "Burkina Faso"
                            },
                            {
                                "Text": "Burundi",
                                "Value": "Burundi"
                            },
                            {
                                "Text": "Cambodia",
                                "Value": "Cambodia"
                            },
                            {
                                "Text": "Cameroon",
                                "Value": "Cameroon"
                            },
                            {
                                "Text": "Canada",
                                "Value": "Canada"
                            },
                            {
                                "Text": "Cape Verde",
                                "Value": "Cape Verde"
                            },
                            {
                                "Text": "Cayman Islands",
                                "Value": "Cayman Islands"
                            },
                            {
                                "Text": "CD",
                                "Value": "CongoCD"
                            },
                            {
                                "Text": "Central African Republic",
                                "Value": "Central African Republic"
                            },
                            {
                                "Text": "CG",
                                "Value": "CongoCG"
                            },
                            {
                                "Text": "Chad",
                                "Value": "Chad"
                            },
                            {
                                "Text": "Chile",
                                "Value": "Chile"
                            },
                            {
                                "Text": "China, People's Republic of",
                                "Value": "China, People's Republic of"
                            },
                            {
                                "Text": "China, Republic of (Taiwan)",
                                "Value": "China, Republic of (Taiwan)"
                            },
                            {
                                "Text": "Christmas Island",
                                "Value": "Christmas Island"
                            },
                            {
                                "Text": "Clipperton Island",
                                "Value": "Clipperton Island"
                            },
                            {
                                "Text": "Cocos (Keeling) Islands",
                                "Value": "Cocos (Keeling) Islands"
                            },
                            {
                                "Text": "Colombia",
                                "Value": "Colombia"
                            },
                            {
                                "Text": "Comoros",
                                "Value": "Comoros"
                            },
                            {
                                "Text": "Cook Islands",
                                "Value": "Cook Islands"
                            },
                            {
                                "Text": "Coral Sea Islands",
                                "Value": "Coral Sea Islands"
                            },
                            {
                                "Text": "Costa Rica",
                                "Value": "Costa Rica"
                            },
                            {
                                "Text": "Cote d'Ivoire (Ivory Coast)",
                                "Value": "Cote d'Ivoire (Ivory Coast)"
                            },
                            {
                                "Text": "Croatia",
                                "Value": "Croatia"
                            },
                            {
                                "Text": "Cuba",
                                "Value": "Cuba"
                            },
                            {
                                "Text": "Cyprus",
                                "Value": "Cyprus"
                            },
                            {
                                "Text": "Czech Republic",
                                "Value": "Czech Republic"
                            },
                            {
                                "Text": "Denmark",
                                "Value": "Denmark"
                            },
                            {
                                "Text": "Djibouti",
                                "Value": "Djibouti"
                            },
                            {
                                "Text": "Dominica",
                                "Value": "Dominica"
                            },
                            {
                                "Text": "Dominican Republic",
                                "Value": "Dominican Republic"
                            },
                            {
                                "Text": "Ecuador",
                                "Value": "Ecuador"
                            },
                            {
                                "Text": "Egypt",
                                "Value": "Egypt"
                            },
                            {
                                "Text": "El Salvador",
                                "Value": "El Salvador"
                            },
                            {
                                "Text": "Equatorial Guinea",
                                "Value": "Equatorial Guinea"
                            },
                            {
                                "Text": "Eritrea",
                                "Value": "Eritrea"
                            },
                            {
                                "Text": "Estonia",
                                "Value": "Estonia"
                            },
                            {
                                "Text": "Ethiopia",
                                "Value": "Ethiopia"
                            },
                            {
                                "Text": "Falkland Islands (Islas Malvinas)",
                                "Value": "Falkland Islands (Islas Malvinas)"
                            },
                            {
                                "Text": "Faroe Islands",
                                "Value": "Faroe Islands"
                            },
                            {
                                "Text": "Fiji",
                                "Value": "Fiji"
                            },
                            {
                                "Text": "Finland",
                                "Value": "Finland"
                            },
                            {
                                "Text": "France",
                                "Value": "France"
                            },
                            {
                                "Text": "French Guiana",
                                "Value": "French Guiana"
                            },
                            {
                                "Text": "French Polynesia",
                                "Value": "French Polynesia"
                            },
                            {
                                "Text": "French Southern and Antarctic Lands",
                                "Value": "French Southern and Antarctic Lands"
                            },
                            {
                                "Text": "Gabon",
                                "Value": "Gabon"
                            },
                            {
                                "Text": "Gambia, The",
                                "Value": "Gambia, The"
                            },
                            {
                                "Text": "Georgia",
                                "Value": "Georgia"
                            },
                            {
                                "Text": "Germany",
                                "Value": "Germany"
                            },
                            {
                                "Text": "Ghana",
                                "Value": "Ghana"
                            },
                            {
                                "Text": "Gibraltar",
                                "Value": "Gibraltar"
                            },
                            {
                                "Text": "Greece",
                                "Value": "Greece"
                            },
                            {
                                "Text": "Greenland",
                                "Value": "Greenland"
                            },
                            {
                                "Text": "Grenada",
                                "Value": "Grenada"
                            },
                            {
                                "Text": "Guadeloupe",
                                "Value": "Guadeloupe"
                            },
                            {
                                "Text": "Guam",
                                "Value": "Guam"
                            },
                            {
                                "Text": "Guatemala",
                                "Value": "Guatemala"
                            },
                            {
                                "Text": "Guernsey",
                                "Value": "Guernsey"
                            },
                            {
                                "Text": "Guinea",
                                "Value": "Guinea"
                            },
                            {
                                "Text": "Guinea-Bissau",
                                "Value": "Guinea-Bissau"
                            },
                            {
                                "Text": "Guyana",
                                "Value": "Guyana"
                            },
                            {
                                "Text": "Haiti",
                                "Value": "Haiti"
                            },
                            {
                                "Text": "Heard Island and McDonald Islands",
                                "Value": "Heard Island and McDonald Islands"
                            },
                            {
                                "Text": "Honduras",
                                "Value": "Honduras"
                            },
                            {
                                "Text": "Hong Kong",
                                "Value": "Hong Kong"
                            },
                            {
                                "Text": "Howland Island",
                                "Value": "Howland Island"
                            },
                            {
                                "Text": "Hungary",
                                "Value": "Hungary"
                            },
                            {
                                "Text": "Iceland",
                                "Value": "Iceland"
                            },
                            {
                                "Text": "India",
                                "Value": "India"
                            },
                            {
                                "Text": "Indonesia",
                                "Value": "Indonesia"
                            },
                            {
                                "Text": "Iran",
                                "Value": "Iran"
                            },
                            {
                                "Text": "Iraq",
                                "Value": "Iraq"
                            },
                            {
                                "Text": "Ireland",
                                "Value": "Ireland"
                            },
                            {
                                "Text": "Isle of Man",
                                "Value": "Isle of Man"
                            },
                            {
                                "Text": "Israel",
                                "Value": "Israel"
                            },
                            {
                                "Text": "Italy",
                                "Value": "Italy"
                            },
                            {
                                "Text": "Jamaica",
                                "Value": "Jamaica"
                            },
                            {
                                "Text": "Japan",
                                "Value": "Japan"
                            },
                            {
                                "Text": "Jarvis Island",
                                "Value": "Jarvis Island"
                            },
                            {
                                "Text": "Jersey",
                                "Value": "Jersey"
                            },
                            {
                                "Text": "Johnston Atoll",
                                "Value": "Johnston Atoll"
                            },
                            {
                                "Text": "Jordan",
                                "Value": "Jordan"
                            },
                            {
                                "Text": "Kazakhstan",
                                "Value": "Kazakhstan"
                            },
                            {
                                "Text": "Kenya",
                                "Value": "Kenya"
                            },
                            {
                                "Text": "Kingman Reef",
                                "Value": "Kingman Reef"
                            },
                            {
                                "Text": "Kiribati",
                                "Value": "Kiribati"
                            },
                            {
                                "Text": "Korea, North",
                                "Value": "Korea, North"
                            },
                            {
                                "Text": "Korea, South",
                                "Value": "Korea, South"
                            },
                            {
                                "Text": "Kuwait",
                                "Value": "Kuwait"
                            },
                            {
                                "Text": "Kyrgyzstan",
                                "Value": "Kyrgyzstan"
                            },
                            {
                                "Text": "Laos",
                                "Value": "Laos"
                            },
                            {
                                "Text": "Latvia",
                                "Value": "Latvia"
                            },
                            {
                                "Text": "Lebanon",
                                "Value": "Lebanon"
                            },
                            {
                                "Text": "Lesotho",
                                "Value": "Lesotho"
                            },
                            {
                                "Text": "Liberia",
                                "Value": "Liberia"
                            },
                            {
                                "Text": "Libya",
                                "Value": "Libya"
                            },
                            {
                                "Text": "Liechtenstein",
                                "Value": "Liechtenstein"
                            },
                            {
                                "Text": "Lithuania",
                                "Value": "Lithuania"
                            },
                            {
                                "Text": "Luxembourg",
                                "Value": "Luxembourg"
                            },
                            {
                                "Text": "Macau",
                                "Value": "Macau"
                            },
                            {
                                "Text": "Macedonia",
                                "Value": "Macedonia"
                            },
                            {
                                "Text": "Madagascar",
                                "Value": "Madagascar"
                            },
                            {
                                "Text": "Malawi",
                                "Value": "Malawi"
                            },
                            {
                                "Text": "Malaysia",
                                "Value": "Malaysia"
                            },
                            {
                                "Text": "Maldives",
                                "Value": "Maldives"
                            },
                            {
                                "Text": "Mali",
                                "Value": "Mali"
                            },
                            {
                                "Text": "Malta",
                                "Value": "Malta"
                            },
                            {
                                "Text": "Marshall Islands",
                                "Value": "Marshall Islands"
                            },
                            {
                                "Text": "Martinique",
                                "Value": "Martinique"
                            },
                            {
                                "Text": "Mauritania",
                                "Value": "Mauritania"
                            },
                            {
                                "Text": "Mauritius",
                                "Value": "Mauritius"
                            },
                            {
                                "Text": "Mayotte",
                                "Value": "Mayotte"
                            },
                            {
                                "Text": "Mexico",
                                "Value": "Mexico"
                            },
                            {
                                "Text": "Micronesia",
                                "Value": "Micronesia"
                            },
                            {
                                "Text": "Midway Islands",
                                "Value": "Midway Islands"
                            },
                            {
                                "Text": "Moldova",
                                "Value": "Moldova"
                            },
                            {
                                "Text": "Monaco",
                                "Value": "Monaco"
                            },
                            {
                                "Text": "Mongolia",
                                "Value": "Mongolia"
                            },
                            {
                                "Text": "Montenegro",
                                "Value": "Montenegro"
                            },
                            {
                                "Text": "Montserrat",
                                "Value": "Montserrat"
                            },
                            {
                                "Text": "Morocco",
                                "Value": "Morocco"
                            },
                            {
                                "Text": "Mozambique",
                                "Value": "Mozambique"
                            },
                            {
                                "Text": "Myanmar (Burma)",
                                "Value": "Myanmar (Burma)"
                            },
                            {
                                "Text": "Nagorno-Karabakh",
                                "Value": "Nagorno-Karabakh"
                            },
                            {
                                "Text": "Namibia",
                                "Value": "Namibia"
                            },
                            {
                                "Text": "Nauru",
                                "Value": "Nauru"
                            },
                            {
                                "Text": "Navassa Island",
                                "Value": "Navassa Island"
                            },
                            {
                                "Text": "Nepal",
                                "Value": "Nepal"
                            },
                            {
                                "Text": "Netherlands",
                                "Value": "Netherlands"
                            },
                            {
                                "Text": "Netherlands Antilles",
                                "Value": "Netherlands Antilles"
                            },
                            {
                                "Text": "New Caledonia",
                                "Value": "New Caledonia"
                            },
                            {
                                "Text": "New Zealand",
                                "Value": "New Zealand"
                            },
                            {
                                "Text": "Nicaragua",
                                "Value": "Nicaragua"
                            },
                            {
                                "Text": "Niger",
                                "Value": "Niger"
                            },
                            {
                                "Text": "Nigeria",
                                "Value": "Nigeria"
                            },
                            {
                                "Text": "Niue",
                                "Value": "Niue"
                            },
                            {
                                "Text": "Norfolk Island",
                                "Value": "Norfolk Island"
                            },
                            {
                                "Text": "Northern Cyprus",
                                "Value": "Northern Cyprus"
                            },
                            {
                                "Text": "Northern Mariana Islands",
                                "Value": "Northern Mariana Islands"
                            },
                            {
                                "Text": "Norway",
                                "Value": "Norway"
                            },
                            {
                                "Text": "Oman",
                                "Value": "Oman"
                            },
                            {
                                "Text": "Pakistan",
                                "Value": "Pakistan"
                            },
                            {
                                "Text": "Palau",
                                "Value": "Palau"
                            },
                            {
                                "Text": "Palmyra Atoll",
                                "Value": "Palmyra Atoll"
                            },
                            {
                                "Text": "Panama",
                                "Value": "Panama"
                            },
                            {
                                "Text": "Papua New Guinea",
                                "Value": "Papua New Guinea"
                            },
                            {
                                "Text": "Paraguay",
                                "Value": "Paraguay"
                            },
                            {
                                "Text": "Peru",
                                "Value": "Peru"
                            },
                            {
                                "Text": "Peter I Island",
                                "Value": "Peter I Island"
                            },
                            {
                                "Text": "Philippines",
                                "Value": "Philippines"
                            },
                            {
                                "Text": "Pitcairn Islands",
                                "Value": "Pitcairn Islands"
                            },
                            {
                                "Text": "Poland",
                                "Value": "Poland"
                            },
                            {
                                "Text": "Portugal",
                                "Value": "Portugal"
                            },
                            {
                                "Text": "Pridnestrovie (Transnistria)",
                                "Value": "Pridnestrovie (Transnistria)"
                            },
                            {
                                "Text": "Puerto Rico",
                                "Value": "Puerto Rico"
                            },
                            {
                                "Text": "Qatar",
                                "Value": "Qatar"
                            },
                            {
                                "Text": "Queen Maud Land",
                                "Value": "Queen Maud Land"
                            },
                            {
                                "Text": "Reunion",
                                "Value": "Reunion"
                            },
                            {
                                "Text": "Romania",
                                "Value": "Romania"
                            },
                            {
                                "Text": "Ross Dependency",
                                "Value": "Ross Dependency"
                            },
                            {
                                "Text": "Russia",
                                "Value": "Russia"
                            },
                            {
                                "Text": "Rwanda",
                                "Value": "Rwanda"
                            },
                            {
                                "Text": "Saint Barthelemy",
                                "Value": "Saint Barthelemy"
                            },
                            {
                                "Text": "Saint Helena",
                                "Value": "Saint Helena"
                            },
                            {
                                "Text": "Saint Kitts and Nevis",
                                "Value": "Saint Kitts and Nevis"
                            },
                            {
                                "Text": "Saint Lucia",
                                "Value": "Saint Lucia"
                            },
                            {
                                "Text": "Saint Martin",
                                "Value": "Saint Martin"
                            },
                            {
                                "Text": "Saint Pierre and Miquelon",
                                "Value": "Saint Pierre and Miquelon"
                            },
                            {
                                "Text": "Saint Vincent and the Grenadines",
                                "Value": "Saint Vincent and the Grenadines"
                            },
                            {
                                "Text": "Samoa",
                                "Value": "Samoa"
                            },
                            {
                                "Text": "San Marino",
                                "Value": "San Marino"
                            },
                            {
                                "Text": "Sao Tome and Principe",
                                "Value": "Sao Tome and Principe"
                            },
                            {
                                "Text": "Saudi Arabia",
                                "Value": "Saudi Arabia"
                            },
                            {
                                "Text": "Senegal",
                                "Value": "Senegal"
                            },
                            {
                                "Text": "Serbia",
                                "Value": "Serbia"
                            },
                            {
                                "Text": "Seychelles",
                                "Value": "Seychelles"
                            },
                            {
                                "Text": "Sierra Leone",
                                "Value": "Sierra Leone"
                            },
                            {
                                "Text": "Singapore",
                                "Value": "Singapore"
                            },
                            {
                                "Text": "Slovakia",
                                "Value": "Slovakia"
                            },
                            {
                                "Text": "Slovenia",
                                "Value": "Slovenia"
                            },
                            {
                                "Text": "Solomon Islands",
                                "Value": "Solomon Islands"
                            },
                            {
                                "Text": "Somalia",
                                "Value": "Somalia"
                            },
                            {
                                "Text": "Somaliland",
                                "Value": "Somaliland"
                            },
                            {
                                "Text": "South Africa",
                                "Value": "South Africa"
                            },
                            {
                                "Text": "South Georgia & South Sandwich Islands",
                                "Value": "South Georgia & South Sandwich Islands"
                            },
                            {
                                "Text": "South Ossetia",
                                "Value": "South Ossetia"
                            },
                            {
                                "Text": "Spain",
                                "Value": "Spain"
                            },
                            {
                                "Text": "Sri Lanka",
                                "Value": "Sri Lanka"
                            },
                            {
                                "Text": "Sudan",
                                "Value": "Sudan"
                            },
                            {
                                "Text": "Suriname",
                                "Value": "Suriname"
                            },
                            {
                                "Text": "Svalbard",
                                "Value": "Svalbard"
                            },
                            {
                                "Text": "Swaziland",
                                "Value": "Swaziland"
                            },
                            {
                                "Text": "Sweden",
                                "Value": "Sweden"
                            },
                            {
                                "Text": "Switzerland",
                                "Value": "Switzerland"
                            },
                            {
                                "Text": "Syria",
                                "Value": "Syria"
                            },
                            {
                                "Text": "Tajikistan",
                                "Value": "Tajikistan"
                            },
                            {
                                "Text": "Tanzania",
                                "Value": "Tanzania"
                            },
                            {
                                "Text": "Thailand",
                                "Value": "Thailand"
                            },
                            {
                                "Text": "Timor-Leste (East Timor)",
                                "Value": "Timor-Leste (East Timor)"
                            },
                            {
                                "Text": "Togo",
                                "Value": "Togo"
                            },
                            {
                                "Text": "Tokelau",
                                "Value": "Tokelau"
                            },
                            {
                                "Text": "Tonga",
                                "Value": "Tonga"
                            },
                            {
                                "Text": "Trinidad and Tobago",
                                "Value": "Trinidad and Tobago"
                            },
                            {
                                "Text": "Tristan da Cunha",
                                "Value": "Tristan da Cunha"
                            },
                            {
                                "Text": "Tunisia",
                                "Value": "Tunisia"
                            },
                            {
                                "Text": "Turkey",
                                "Value": "Turkey"
                            },
                            {
                                "Text": "Turkmenistan",
                                "Value": "Turkmenistan"
                            },
                            {
                                "Text": "Turks and Caicos Islands",
                                "Value": "Turks and Caicos Islands"
                            },
                            {
                                "Text": "Tuvalu",
                                "Value": "Tuvalu"
                            },
                            {
                                "Text": "U.A.E.",
                                "Value": "U.A.E."
                            },
                            {
                                "Text": "U.S. Virgin Islands",
                                "Value": "U.S. Virgin Islands"
                            },
                            {
                                "Text": "Uganda",
                                "Value": "Uganda"
                            },
                            {
                                "Text": "Ukraine",
                                "Value": "Ukraine"
                            },
                            {
                                "Text": "United Kingdom",
                                "Value": "United Kingdom"
                            },
                            {
                                "Text": "United States",
                                "Value": "United States"
                            },
                            {
                                "Text": "Uruguay",
                                "Value": "Uruguay"
                            },
                            {
                                "Text": "Uzbekistan",
                                "Value": "Uzbekistan"
                            },
                            {
                                "Text": "Vanuatu",
                                "Value": "Vanuatu"
                            },
                            {
                                "Text": "Vatican City",
                                "Value": "Vatican City"
                            },
                            {
                                "Text": "Venezuela",
                                "Value": "Venezuela"
                            },
                            {
                                "Text": "Vietnam",
                                "Value": "Vietnam"
                            },
                            {
                                "Text": "Wake Island",
                                "Value": "Wake Island"
                            },
                            {
                                "Text": "Wallis and Futuna",
                                "Value": "Wallis and Futuna"
                            },
                            {
                                "Text": "Yemen",
                                "Value": "Yemen"
                            },
                            {
                                "Text": "Zambia",
                                "Value": "Zambia"
                            },
                            {
                                "Text": "Zimbabwe",
                                "Value": "Zimbabwe"
                            }
                            ],
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q80']['input'][index]['answer']==='1'",
                            "validation": ""
                        },
                        "Q86": {
                            "id": "Q86",
                            "label": "City",
                            "name": "Q86",
                            "description": "Type name of city",
                            "mandatory": 0,
                            "type": "text",
                            "value": null,
                            "default": null,
                            "min": 2,
                            "max": 15,
                            "pattern": "/^[a-zA-z&,.]+$/",
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q80']['input'][index]['answer']==='1'",
                            "validation": "!/(.)\\1{2,}/.test(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q86']['input'][index]['answer'])"
                        },
                        "Q87": {
                            "id": "Q87",
                            "label": "Date Arrived",
                            "name": "Q87",
                            "description": "Provide date of arrival",
                            "mandatory": 0,
                            "type": "date",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q80']['input'][index]['answer']==='1'",
                            "validation": "new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q87']['input'][index]['answer']) <= new Date()"
                        },
                        "Q88": {
                            "id": "Q88",
                            "label": "Date Departed",
                            "name": "Q88",
                            "description": "Provide date of departure",
                            "mandatory": 0,
                            "type": "date",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q80']['input'][index]['answer']==='1'",
                            "validation": "(Math.floor(new Date() - new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q88']['input'][index]['answer']))/1000/60/60/24)<=14 && (Math.floor(new Date() - new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q88']['input'][index]['answer']))/1000/60/60/24)>0"
                        },
                        "Q89": {
                            "id": "Q89",
                            "label": "Name of country ",
                            "name": "Q89",
                            "description": null,
                            "mandatory": 0,
                            "type": "single-select",
                            "value": [{
                                "Text": "Abkhazia",
                                "Value": "Abkhazia"
                            },
                            {
                                "Text": "Afghanistan",
                                "Value": "Afghanistan"
                            },
                            {
                                "Text": "Aland",
                                "Value": "Aland"
                            },
                            {
                                "Text": "Albania",
                                "Value": "Albania"
                            },
                            {
                                "Text": "Algeria",
                                "Value": "Algeria"
                            },
                            {
                                "Text": "American Samoa",
                                "Value": "American Samoa"
                            },
                            {
                                "Text": "Andorra",
                                "Value": "Andorra"
                            },
                            {
                                "Text": "Angola",
                                "Value": "Angola"
                            },
                            {
                                "Text": "Anguilla",
                                "Value": "Anguilla"
                            },
                            {
                                "Text": "Antigua and Barbuda",
                                "Value": "Antigua and Barbuda"
                            },
                            {
                                "Text": "Argentina",
                                "Value": "Argentina"
                            },
                            {
                                "Text": "Armenia",
                                "Value": "Armenia"
                            },
                            {
                                "Text": "Aruba",
                                "Value": "Aruba"
                            },
                            {
                                "Text": "Ascension",
                                "Value": "Ascension"
                            },
                            {
                                "Text": "Ashmore and Cartier Islands",
                                "Value": "Ashmore and Cartier Islands"
                            },
                            {
                                "Text": "Australia",
                                "Value": "Australia"
                            },
                            {
                                "Text": "Australian Antarctic Territory",
                                "Value": "Australian Antarctic Territory"
                            },
                            {
                                "Text": "Austria",
                                "Value": "Austria"
                            },
                            {
                                "Text": "Azerbaijan",
                                "Value": "Azerbaijan"
                            },
                            {
                                "Text": "Bahamas, The",
                                "Value": "Bahamas, The"
                            },
                            {
                                "Text": "Bahrain",
                                "Value": "Bahrain"
                            },
                            {
                                "Text": "Baker Island",
                                "Value": "Baker Island"
                            },
                            {
                                "Text": "Bangladesh",
                                "Value": "Bangladesh"
                            },
                            {
                                "Text": "Barbados",
                                "Value": "Barbados"
                            },
                            {
                                "Text": "Belarus",
                                "Value": "Belarus"
                            },
                            {
                                "Text": "Belgium",
                                "Value": "Belgium"
                            },
                            {
                                "Text": "Belize",
                                "Value": "Belize"
                            },
                            {
                                "Text": "Benin",
                                "Value": "Benin"
                            },
                            {
                                "Text": "Bermuda",
                                "Value": "Bermuda"
                            },
                            {
                                "Text": "Bhutan",
                                "Value": "Bhutan"
                            },
                            {
                                "Text": "Bolivia",
                                "Value": "Bolivia"
                            },
                            {
                                "Text": "Bosnia and Herzegovina",
                                "Value": "Bosnia and Herzegovina"
                            },
                            {
                                "Text": "Botswana",
                                "Value": "Botswana"
                            },
                            {
                                "Text": "Bouvet Island",
                                "Value": "Bouvet Island"
                            },
                            {
                                "Text": "Brazil",
                                "Value": "Brazil"
                            },
                            {
                                "Text": "British Indian Ocean Territory",
                                "Value": "British Indian Ocean Territory"
                            },
                            {
                                "Text": "British Sovereign Base Areas",
                                "Value": "British Sovereign Base Areas"
                            },
                            {
                                "Text": "British Virgin Islands",
                                "Value": "British Virgin Islands"
                            },
                            {
                                "Text": "Brunei",
                                "Value": "Brunei"
                            },
                            {
                                "Text": "Bulgaria",
                                "Value": "Bulgaria"
                            },
                            {
                                "Text": "Burkina Faso",
                                "Value": "Burkina Faso"
                            },
                            {
                                "Text": "Burundi",
                                "Value": "Burundi"
                            },
                            {
                                "Text": "Cambodia",
                                "Value": "Cambodia"
                            },
                            {
                                "Text": "Cameroon",
                                "Value": "Cameroon"
                            },
                            {
                                "Text": "Canada",
                                "Value": "Canada"
                            },
                            {
                                "Text": "Cape Verde",
                                "Value": "Cape Verde"
                            },
                            {
                                "Text": "Cayman Islands",
                                "Value": "Cayman Islands"
                            },
                            {
                                "Text": "CD",
                                "Value": "CongoCD"
                            },
                            {
                                "Text": "Central African Republic",
                                "Value": "Central African Republic"
                            },
                            {
                                "Text": "CG",
                                "Value": "CongoCG"
                            },
                            {
                                "Text": "Chad",
                                "Value": "Chad"
                            },
                            {
                                "Text": "Chile",
                                "Value": "Chile"
                            },
                            {
                                "Text": "China, People's Republic of",
                                "Value": "China, People's Republic of"
                            },
                            {
                                "Text": "China, Republic of (Taiwan)",
                                "Value": "China, Republic of (Taiwan)"
                            },
                            {
                                "Text": "Christmas Island",
                                "Value": "Christmas Island"
                            },
                            {
                                "Text": "Clipperton Island",
                                "Value": "Clipperton Island"
                            },
                            {
                                "Text": "Cocos (Keeling) Islands",
                                "Value": "Cocos (Keeling) Islands"
                            },
                            {
                                "Text": "Colombia",
                                "Value": "Colombia"
                            },
                            {
                                "Text": "Comoros",
                                "Value": "Comoros"
                            },
                            {
                                "Text": "Cook Islands",
                                "Value": "Cook Islands"
                            },
                            {
                                "Text": "Coral Sea Islands",
                                "Value": "Coral Sea Islands"
                            },
                            {
                                "Text": "Costa Rica",
                                "Value": "Costa Rica"
                            },
                            {
                                "Text": "Cote d'Ivoire (Ivory Coast)",
                                "Value": "Cote d'Ivoire (Ivory Coast)"
                            },
                            {
                                "Text": "Croatia",
                                "Value": "Croatia"
                            },
                            {
                                "Text": "Cuba",
                                "Value": "Cuba"
                            },
                            {
                                "Text": "Cyprus",
                                "Value": "Cyprus"
                            },
                            {
                                "Text": "Czech Republic",
                                "Value": "Czech Republic"
                            },
                            {
                                "Text": "Denmark",
                                "Value": "Denmark"
                            },
                            {
                                "Text": "Djibouti",
                                "Value": "Djibouti"
                            },
                            {
                                "Text": "Dominica",
                                "Value": "Dominica"
                            },
                            {
                                "Text": "Dominican Republic",
                                "Value": "Dominican Republic"
                            },
                            {
                                "Text": "Ecuador",
                                "Value": "Ecuador"
                            },
                            {
                                "Text": "Egypt",
                                "Value": "Egypt"
                            },
                            {
                                "Text": "El Salvador",
                                "Value": "El Salvador"
                            },
                            {
                                "Text": "Equatorial Guinea",
                                "Value": "Equatorial Guinea"
                            },
                            {
                                "Text": "Eritrea",
                                "Value": "Eritrea"
                            },
                            {
                                "Text": "Estonia",
                                "Value": "Estonia"
                            },
                            {
                                "Text": "Ethiopia",
                                "Value": "Ethiopia"
                            },
                            {
                                "Text": "Falkland Islands (Islas Malvinas)",
                                "Value": "Falkland Islands (Islas Malvinas)"
                            },
                            {
                                "Text": "Faroe Islands",
                                "Value": "Faroe Islands"
                            },
                            {
                                "Text": "Fiji",
                                "Value": "Fiji"
                            },
                            {
                                "Text": "Finland",
                                "Value": "Finland"
                            },
                            {
                                "Text": "France",
                                "Value": "France"
                            },
                            {
                                "Text": "French Guiana",
                                "Value": "French Guiana"
                            },
                            {
                                "Text": "French Polynesia",
                                "Value": "French Polynesia"
                            },
                            {
                                "Text": "French Southern and Antarctic Lands",
                                "Value": "French Southern and Antarctic Lands"
                            },
                            {
                                "Text": "Gabon",
                                "Value": "Gabon"
                            },
                            {
                                "Text": "Gambia, The",
                                "Value": "Gambia, The"
                            },
                            {
                                "Text": "Georgia",
                                "Value": "Georgia"
                            },
                            {
                                "Text": "Germany",
                                "Value": "Germany"
                            },
                            {
                                "Text": "Ghana",
                                "Value": "Ghana"
                            },
                            {
                                "Text": "Gibraltar",
                                "Value": "Gibraltar"
                            },
                            {
                                "Text": "Greece",
                                "Value": "Greece"
                            },
                            {
                                "Text": "Greenland",
                                "Value": "Greenland"
                            },
                            {
                                "Text": "Grenada",
                                "Value": "Grenada"
                            },
                            {
                                "Text": "Guadeloupe",
                                "Value": "Guadeloupe"
                            },
                            {
                                "Text": "Guam",
                                "Value": "Guam"
                            },
                            {
                                "Text": "Guatemala",
                                "Value": "Guatemala"
                            },
                            {
                                "Text": "Guernsey",
                                "Value": "Guernsey"
                            },
                            {
                                "Text": "Guinea",
                                "Value": "Guinea"
                            },
                            {
                                "Text": "Guinea-Bissau",
                                "Value": "Guinea-Bissau"
                            },
                            {
                                "Text": "Guyana",
                                "Value": "Guyana"
                            },
                            {
                                "Text": "Haiti",
                                "Value": "Haiti"
                            },
                            {
                                "Text": "Heard Island and McDonald Islands",
                                "Value": "Heard Island and McDonald Islands"
                            },
                            {
                                "Text": "Honduras",
                                "Value": "Honduras"
                            },
                            {
                                "Text": "Hong Kong",
                                "Value": "Hong Kong"
                            },
                            {
                                "Text": "Howland Island",
                                "Value": "Howland Island"
                            },
                            {
                                "Text": "Hungary",
                                "Value": "Hungary"
                            },
                            {
                                "Text": "Iceland",
                                "Value": "Iceland"
                            },
                            {
                                "Text": "India",
                                "Value": "India"
                            },
                            {
                                "Text": "Indonesia",
                                "Value": "Indonesia"
                            },
                            {
                                "Text": "Iran",
                                "Value": "Iran"
                            },
                            {
                                "Text": "Iraq",
                                "Value": "Iraq"
                            },
                            {
                                "Text": "Ireland",
                                "Value": "Ireland"
                            },
                            {
                                "Text": "Isle of Man",
                                "Value": "Isle of Man"
                            },
                            {
                                "Text": "Israel",
                                "Value": "Israel"
                            },
                            {
                                "Text": "Italy",
                                "Value": "Italy"
                            },
                            {
                                "Text": "Jamaica",
                                "Value": "Jamaica"
                            },
                            {
                                "Text": "Japan",
                                "Value": "Japan"
                            },
                            {
                                "Text": "Jarvis Island",
                                "Value": "Jarvis Island"
                            },
                            {
                                "Text": "Jersey",
                                "Value": "Jersey"
                            },
                            {
                                "Text": "Johnston Atoll",
                                "Value": "Johnston Atoll"
                            },
                            {
                                "Text": "Jordan",
                                "Value": "Jordan"
                            },
                            {
                                "Text": "Kazakhstan",
                                "Value": "Kazakhstan"
                            },
                            {
                                "Text": "Kenya",
                                "Value": "Kenya"
                            },
                            {
                                "Text": "Kingman Reef",
                                "Value": "Kingman Reef"
                            },
                            {
                                "Text": "Kiribati",
                                "Value": "Kiribati"
                            },
                            {
                                "Text": "Korea, North",
                                "Value": "Korea, North"
                            },
                            {
                                "Text": "Korea, South",
                                "Value": "Korea, South"
                            },
                            {
                                "Text": "Kuwait",
                                "Value": "Kuwait"
                            },
                            {
                                "Text": "Kyrgyzstan",
                                "Value": "Kyrgyzstan"
                            },
                            {
                                "Text": "Laos",
                                "Value": "Laos"
                            },
                            {
                                "Text": "Latvia",
                                "Value": "Latvia"
                            },
                            {
                                "Text": "Lebanon",
                                "Value": "Lebanon"
                            },
                            {
                                "Text": "Lesotho",
                                "Value": "Lesotho"
                            },
                            {
                                "Text": "Liberia",
                                "Value": "Liberia"
                            },
                            {
                                "Text": "Libya",
                                "Value": "Libya"
                            },
                            {
                                "Text": "Liechtenstein",
                                "Value": "Liechtenstein"
                            },
                            {
                                "Text": "Lithuania",
                                "Value": "Lithuania"
                            },
                            {
                                "Text": "Luxembourg",
                                "Value": "Luxembourg"
                            },
                            {
                                "Text": "Macau",
                                "Value": "Macau"
                            },
                            {
                                "Text": "Macedonia",
                                "Value": "Macedonia"
                            },
                            {
                                "Text": "Madagascar",
                                "Value": "Madagascar"
                            },
                            {
                                "Text": "Malawi",
                                "Value": "Malawi"
                            },
                            {
                                "Text": "Malaysia",
                                "Value": "Malaysia"
                            },
                            {
                                "Text": "Maldives",
                                "Value": "Maldives"
                            },
                            {
                                "Text": "Mali",
                                "Value": "Mali"
                            },
                            {
                                "Text": "Malta",
                                "Value": "Malta"
                            },
                            {
                                "Text": "Marshall Islands",
                                "Value": "Marshall Islands"
                            },
                            {
                                "Text": "Martinique",
                                "Value": "Martinique"
                            },
                            {
                                "Text": "Mauritania",
                                "Value": "Mauritania"
                            },
                            {
                                "Text": "Mauritius",
                                "Value": "Mauritius"
                            },
                            {
                                "Text": "Mayotte",
                                "Value": "Mayotte"
                            },
                            {
                                "Text": "Mexico",
                                "Value": "Mexico"
                            },
                            {
                                "Text": "Micronesia",
                                "Value": "Micronesia"
                            },
                            {
                                "Text": "Midway Islands",
                                "Value": "Midway Islands"
                            },
                            {
                                "Text": "Moldova",
                                "Value": "Moldova"
                            },
                            {
                                "Text": "Monaco",
                                "Value": "Monaco"
                            },
                            {
                                "Text": "Mongolia",
                                "Value": "Mongolia"
                            },
                            {
                                "Text": "Montenegro",
                                "Value": "Montenegro"
                            },
                            {
                                "Text": "Montserrat",
                                "Value": "Montserrat"
                            },
                            {
                                "Text": "Morocco",
                                "Value": "Morocco"
                            },
                            {
                                "Text": "Mozambique",
                                "Value": "Mozambique"
                            },
                            {
                                "Text": "Myanmar (Burma)",
                                "Value": "Myanmar (Burma)"
                            },
                            {
                                "Text": "Nagorno-Karabakh",
                                "Value": "Nagorno-Karabakh"
                            },
                            {
                                "Text": "Namibia",
                                "Value": "Namibia"
                            },
                            {
                                "Text": "Nauru",
                                "Value": "Nauru"
                            },
                            {
                                "Text": "Navassa Island",
                                "Value": "Navassa Island"
                            },
                            {
                                "Text": "Nepal",
                                "Value": "Nepal"
                            },
                            {
                                "Text": "Netherlands",
                                "Value": "Netherlands"
                            },
                            {
                                "Text": "Netherlands Antilles",
                                "Value": "Netherlands Antilles"
                            },
                            {
                                "Text": "New Caledonia",
                                "Value": "New Caledonia"
                            },
                            {
                                "Text": "New Zealand",
                                "Value": "New Zealand"
                            },
                            {
                                "Text": "Nicaragua",
                                "Value": "Nicaragua"
                            },
                            {
                                "Text": "Niger",
                                "Value": "Niger"
                            },
                            {
                                "Text": "Nigeria",
                                "Value": "Nigeria"
                            },
                            {
                                "Text": "Niue",
                                "Value": "Niue"
                            },
                            {
                                "Text": "Norfolk Island",
                                "Value": "Norfolk Island"
                            },
                            {
                                "Text": "Northern Cyprus",
                                "Value": "Northern Cyprus"
                            },
                            {
                                "Text": "Northern Mariana Islands",
                                "Value": "Northern Mariana Islands"
                            },
                            {
                                "Text": "Norway",
                                "Value": "Norway"
                            },
                            {
                                "Text": "Oman",
                                "Value": "Oman"
                            },
                            {
                                "Text": "Pakistan",
                                "Value": "Pakistan"
                            },
                            {
                                "Text": "Palau",
                                "Value": "Palau"
                            },
                            {
                                "Text": "Palmyra Atoll",
                                "Value": "Palmyra Atoll"
                            },
                            {
                                "Text": "Panama",
                                "Value": "Panama"
                            },
                            {
                                "Text": "Papua New Guinea",
                                "Value": "Papua New Guinea"
                            },
                            {
                                "Text": "Paraguay",
                                "Value": "Paraguay"
                            },
                            {
                                "Text": "Peru",
                                "Value": "Peru"
                            },
                            {
                                "Text": "Peter I Island",
                                "Value": "Peter I Island"
                            },
                            {
                                "Text": "Philippines",
                                "Value": "Philippines"
                            },
                            {
                                "Text": "Pitcairn Islands",
                                "Value": "Pitcairn Islands"
                            },
                            {
                                "Text": "Poland",
                                "Value": "Poland"
                            },
                            {
                                "Text": "Portugal",
                                "Value": "Portugal"
                            },
                            {
                                "Text": "Pridnestrovie (Transnistria)",
                                "Value": "Pridnestrovie (Transnistria)"
                            },
                            {
                                "Text": "Puerto Rico",
                                "Value": "Puerto Rico"
                            },
                            {
                                "Text": "Qatar",
                                "Value": "Qatar"
                            },
                            {
                                "Text": "Queen Maud Land",
                                "Value": "Queen Maud Land"
                            },
                            {
                                "Text": "Reunion",
                                "Value": "Reunion"
                            },
                            {
                                "Text": "Romania",
                                "Value": "Romania"
                            },
                            {
                                "Text": "Ross Dependency",
                                "Value": "Ross Dependency"
                            },
                            {
                                "Text": "Russia",
                                "Value": "Russia"
                            },
                            {
                                "Text": "Rwanda",
                                "Value": "Rwanda"
                            },
                            {
                                "Text": "Saint Barthelemy",
                                "Value": "Saint Barthelemy"
                            },
                            {
                                "Text": "Saint Helena",
                                "Value": "Saint Helena"
                            },
                            {
                                "Text": "Saint Kitts and Nevis",
                                "Value": "Saint Kitts and Nevis"
                            },
                            {
                                "Text": "Saint Lucia",
                                "Value": "Saint Lucia"
                            },
                            {
                                "Text": "Saint Martin",
                                "Value": "Saint Martin"
                            },
                            {
                                "Text": "Saint Pierre and Miquelon",
                                "Value": "Saint Pierre and Miquelon"
                            },
                            {
                                "Text": "Saint Vincent and the Grenadines",
                                "Value": "Saint Vincent and the Grenadines"
                            },
                            {
                                "Text": "Samoa",
                                "Value": "Samoa"
                            },
                            {
                                "Text": "San Marino",
                                "Value": "San Marino"
                            },
                            {
                                "Text": "Sao Tome and Principe",
                                "Value": "Sao Tome and Principe"
                            },
                            {
                                "Text": "Saudi Arabia",
                                "Value": "Saudi Arabia"
                            },
                            {
                                "Text": "Senegal",
                                "Value": "Senegal"
                            },
                            {
                                "Text": "Serbia",
                                "Value": "Serbia"
                            },
                            {
                                "Text": "Seychelles",
                                "Value": "Seychelles"
                            },
                            {
                                "Text": "Sierra Leone",
                                "Value": "Sierra Leone"
                            },
                            {
                                "Text": "Singapore",
                                "Value": "Singapore"
                            },
                            {
                                "Text": "Slovakia",
                                "Value": "Slovakia"
                            },
                            {
                                "Text": "Slovenia",
                                "Value": "Slovenia"
                            },
                            {
                                "Text": "Solomon Islands",
                                "Value": "Solomon Islands"
                            },
                            {
                                "Text": "Somalia",
                                "Value": "Somalia"
                            },
                            {
                                "Text": "Somaliland",
                                "Value": "Somaliland"
                            },
                            {
                                "Text": "South Africa",
                                "Value": "South Africa"
                            },
                            {
                                "Text": "South Georgia & South Sandwich Islands",
                                "Value": "South Georgia & South Sandwich Islands"
                            },
                            {
                                "Text": "South Ossetia",
                                "Value": "South Ossetia"
                            },
                            {
                                "Text": "Spain",
                                "Value": "Spain"
                            },
                            {
                                "Text": "Sri Lanka",
                                "Value": "Sri Lanka"
                            },
                            {
                                "Text": "Sudan",
                                "Value": "Sudan"
                            },
                            {
                                "Text": "Suriname",
                                "Value": "Suriname"
                            },
                            {
                                "Text": "Svalbard",
                                "Value": "Svalbard"
                            },
                            {
                                "Text": "Swaziland",
                                "Value": "Swaziland"
                            },
                            {
                                "Text": "Sweden",
                                "Value": "Sweden"
                            },
                            {
                                "Text": "Switzerland",
                                "Value": "Switzerland"
                            },
                            {
                                "Text": "Syria",
                                "Value": "Syria"
                            },
                            {
                                "Text": "Tajikistan",
                                "Value": "Tajikistan"
                            },
                            {
                                "Text": "Tanzania",
                                "Value": "Tanzania"
                            },
                            {
                                "Text": "Thailand",
                                "Value": "Thailand"
                            },
                            {
                                "Text": "Timor-Leste (East Timor)",
                                "Value": "Timor-Leste (East Timor)"
                            },
                            {
                                "Text": "Togo",
                                "Value": "Togo"
                            },
                            {
                                "Text": "Tokelau",
                                "Value": "Tokelau"
                            },
                            {
                                "Text": "Tonga",
                                "Value": "Tonga"
                            },
                            {
                                "Text": "Trinidad and Tobago",
                                "Value": "Trinidad and Tobago"
                            },
                            {
                                "Text": "Tristan da Cunha",
                                "Value": "Tristan da Cunha"
                            },
                            {
                                "Text": "Tunisia",
                                "Value": "Tunisia"
                            },
                            {
                                "Text": "Turkey",
                                "Value": "Turkey"
                            },
                            {
                                "Text": "Turkmenistan",
                                "Value": "Turkmenistan"
                            },
                            {
                                "Text": "Turks and Caicos Islands",
                                "Value": "Turks and Caicos Islands"
                            },
                            {
                                "Text": "Tuvalu",
                                "Value": "Tuvalu"
                            },
                            {
                                "Text": "U.A.E.",
                                "Value": "U.A.E."
                            },
                            {
                                "Text": "U.S. Virgin Islands",
                                "Value": "U.S. Virgin Islands"
                            },
                            {
                                "Text": "Uganda",
                                "Value": "Uganda"
                            },
                            {
                                "Text": "Ukraine",
                                "Value": "Ukraine"
                            },
                            {
                                "Text": "United Kingdom",
                                "Value": "United Kingdom"
                            },
                            {
                                "Text": "United States",
                                "Value": "United States"
                            },
                            {
                                "Text": "Uruguay",
                                "Value": "Uruguay"
                            },
                            {
                                "Text": "Uzbekistan",
                                "Value": "Uzbekistan"
                            },
                            {
                                "Text": "Vanuatu",
                                "Value": "Vanuatu"
                            },
                            {
                                "Text": "Vatican City",
                                "Value": "Vatican City"
                            },
                            {
                                "Text": "Venezuela",
                                "Value": "Venezuela"
                            },
                            {
                                "Text": "Vietnam",
                                "Value": "Vietnam"
                            },
                            {
                                "Text": "Wake Island",
                                "Value": "Wake Island"
                            },
                            {
                                "Text": "Wallis and Futuna",
                                "Value": "Wallis and Futuna"
                            },
                            {
                                "Text": "Yemen",
                                "Value": "Yemen"
                            },
                            {
                                "Text": "Zambia",
                                "Value": "Zambia"
                            },
                            {
                                "Text": "Zimbabwe",
                                "Value": "Zimbabwe"
                            }
                            ],
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q80']['input'][index]['answer']==='1'",
                            "validation": ""
                        },
                        "Q90": {
                            "id": "Q90",
                            "label": "City",
                            "name": "Q90",
                            "description": "Type name of city",
                            "mandatory": 0,
                            "type": "text",
                            "value": null,
                            "default": null,
                            "min": 2,
                            "max": 15,
                            "pattern": "/^[a-zA-z&,.]+$/",
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q80']['input'][index]['answer']==='1'",
                            "validation": "!/(.)\\1{2,}/.test(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q90']['input'][index]['answer'])"
                        },
                        "Q91": {
                            "id": "Q91",
                            "label": "Date Arrived",
                            "name": "Q91",
                            "description": "Provide date of arrival",
                            "mandatory": 0,
                            "type": "date",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q80']['input'][index]['answer']==='1'",
                            "validation": "new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q91']['input'][index]['answer']) <= new Date() "
                        },
                        "Q92": {
                            "id": "Q92",
                            "label": "Date Departed",
                            "name": "Q92",
                            "description": "Provide date of departure",
                            "mandatory": 0,
                            "type": "date",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q80']['input'][index]['answer']==='1'",
                            "validation": "(Math.floor(new Date() - new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q92']['input'][index]['answer']))/1000/60/60/24)<=14 && (Math.floor(new Date() - new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q92']['input'][index]['answer']))/1000/60/60/24)>0"
                        },
                        "Q93": {
                            "id": "Q93",
                            "label": "Do you intend to travel abroad in next 3 month",
                            "name": "Q93",
                            "description": null,
                            "mandatory": 1,
                            "type": "boolean",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "Q94": {
                            "id": "Q94",
                            "label": "Name of country ",
                            "name": "Q94",
                            "description": null,
                            "mandatory": 1,
                            "type": "single-select",
                            "value": [{
                                "Text": "Abkhazia",
                                "Value": "Abkhazia"
                            },
                            {
                                "Text": "Afghanistan",
                                "Value": "Afghanistan"
                            },
                            {
                                "Text": "Aland",
                                "Value": "Aland"
                            },
                            {
                                "Text": "Albania",
                                "Value": "Albania"
                            },
                            {
                                "Text": "Algeria",
                                "Value": "Algeria"
                            },
                            {
                                "Text": "American Samoa",
                                "Value": "American Samoa"
                            },
                            {
                                "Text": "Andorra",
                                "Value": "Andorra"
                            },
                            {
                                "Text": "Angola",
                                "Value": "Angola"
                            },
                            {
                                "Text": "Anguilla",
                                "Value": "Anguilla"
                            },
                            {
                                "Text": "Antigua and Barbuda",
                                "Value": "Antigua and Barbuda"
                            },
                            {
                                "Text": "Argentina",
                                "Value": "Argentina"
                            },
                            {
                                "Text": "Armenia",
                                "Value": "Armenia"
                            },
                            {
                                "Text": "Aruba",
                                "Value": "Aruba"
                            },
                            {
                                "Text": "Ascension",
                                "Value": "Ascension"
                            },
                            {
                                "Text": "Ashmore and Cartier Islands",
                                "Value": "Ashmore and Cartier Islands"
                            },
                            {
                                "Text": "Australia",
                                "Value": "Australia"
                            },
                            {
                                "Text": "Australian Antarctic Territory",
                                "Value": "Australian Antarctic Territory"
                            },
                            {
                                "Text": "Austria",
                                "Value": "Austria"
                            },
                            {
                                "Text": "Azerbaijan",
                                "Value": "Azerbaijan"
                            },
                            {
                                "Text": "Bahamas, The",
                                "Value": "Bahamas, The"
                            },
                            {
                                "Text": "Bahrain",
                                "Value": "Bahrain"
                            },
                            {
                                "Text": "Baker Island",
                                "Value": "Baker Island"
                            },
                            {
                                "Text": "Bangladesh",
                                "Value": "Bangladesh"
                            },
                            {
                                "Text": "Barbados",
                                "Value": "Barbados"
                            },
                            {
                                "Text": "Belarus",
                                "Value": "Belarus"
                            },
                            {
                                "Text": "Belgium",
                                "Value": "Belgium"
                            },
                            {
                                "Text": "Belize",
                                "Value": "Belize"
                            },
                            {
                                "Text": "Benin",
                                "Value": "Benin"
                            },
                            {
                                "Text": "Bermuda",
                                "Value": "Bermuda"
                            },
                            {
                                "Text": "Bhutan",
                                "Value": "Bhutan"
                            },
                            {
                                "Text": "Bolivia",
                                "Value": "Bolivia"
                            },
                            {
                                "Text": "Bosnia and Herzegovina",
                                "Value": "Bosnia and Herzegovina"
                            },
                            {
                                "Text": "Botswana",
                                "Value": "Botswana"
                            },
                            {
                                "Text": "Bouvet Island",
                                "Value": "Bouvet Island"
                            },
                            {
                                "Text": "Brazil",
                                "Value": "Brazil"
                            },
                            {
                                "Text": "British Indian Ocean Territory",
                                "Value": "British Indian Ocean Territory"
                            },
                            {
                                "Text": "British Sovereign Base Areas",
                                "Value": "British Sovereign Base Areas"
                            },
                            {
                                "Text": "British Virgin Islands",
                                "Value": "British Virgin Islands"
                            },
                            {
                                "Text": "Brunei",
                                "Value": "Brunei"
                            },
                            {
                                "Text": "Bulgaria",
                                "Value": "Bulgaria"
                            },
                            {
                                "Text": "Burkina Faso",
                                "Value": "Burkina Faso"
                            },
                            {
                                "Text": "Burundi",
                                "Value": "Burundi"
                            },
                            {
                                "Text": "Cambodia",
                                "Value": "Cambodia"
                            },
                            {
                                "Text": "Cameroon",
                                "Value": "Cameroon"
                            },
                            {
                                "Text": "Canada",
                                "Value": "Canada"
                            },
                            {
                                "Text": "Cape Verde",
                                "Value": "Cape Verde"
                            },
                            {
                                "Text": "Cayman Islands",
                                "Value": "Cayman Islands"
                            },
                            {
                                "Text": "CD",
                                "Value": "CongoCD"
                            },
                            {
                                "Text": "Central African Republic",
                                "Value": "Central African Republic"
                            },
                            {
                                "Text": "CG",
                                "Value": "CongoCG"
                            },
                            {
                                "Text": "Chad",
                                "Value": "Chad"
                            },
                            {
                                "Text": "Chile",
                                "Value": "Chile"
                            },
                            {
                                "Text": "China, People's Republic of",
                                "Value": "China, People's Republic of"
                            },
                            {
                                "Text": "China, Republic of (Taiwan)",
                                "Value": "China, Republic of (Taiwan)"
                            },
                            {
                                "Text": "Christmas Island",
                                "Value": "Christmas Island"
                            },
                            {
                                "Text": "Clipperton Island",
                                "Value": "Clipperton Island"
                            },
                            {
                                "Text": "Cocos (Keeling) Islands",
                                "Value": "Cocos (Keeling) Islands"
                            },
                            {
                                "Text": "Colombia",
                                "Value": "Colombia"
                            },
                            {
                                "Text": "Comoros",
                                "Value": "Comoros"
                            },
                            {
                                "Text": "Cook Islands",
                                "Value": "Cook Islands"
                            },
                            {
                                "Text": "Coral Sea Islands",
                                "Value": "Coral Sea Islands"
                            },
                            {
                                "Text": "Costa Rica",
                                "Value": "Costa Rica"
                            },
                            {
                                "Text": "Cote d'Ivoire (Ivory Coast)",
                                "Value": "Cote d'Ivoire (Ivory Coast)"
                            },
                            {
                                "Text": "Croatia",
                                "Value": "Croatia"
                            },
                            {
                                "Text": "Cuba",
                                "Value": "Cuba"
                            },
                            {
                                "Text": "Cyprus",
                                "Value": "Cyprus"
                            },
                            {
                                "Text": "Czech Republic",
                                "Value": "Czech Republic"
                            },
                            {
                                "Text": "Denmark",
                                "Value": "Denmark"
                            },
                            {
                                "Text": "Djibouti",
                                "Value": "Djibouti"
                            },
                            {
                                "Text": "Dominica",
                                "Value": "Dominica"
                            },
                            {
                                "Text": "Dominican Republic",
                                "Value": "Dominican Republic"
                            },
                            {
                                "Text": "Ecuador",
                                "Value": "Ecuador"
                            },
                            {
                                "Text": "Egypt",
                                "Value": "Egypt"
                            },
                            {
                                "Text": "El Salvador",
                                "Value": "El Salvador"
                            },
                            {
                                "Text": "Equatorial Guinea",
                                "Value": "Equatorial Guinea"
                            },
                            {
                                "Text": "Eritrea",
                                "Value": "Eritrea"
                            },
                            {
                                "Text": "Estonia",
                                "Value": "Estonia"
                            },
                            {
                                "Text": "Ethiopia",
                                "Value": "Ethiopia"
                            },
                            {
                                "Text": "Falkland Islands (Islas Malvinas)",
                                "Value": "Falkland Islands (Islas Malvinas)"
                            },
                            {
                                "Text": "Faroe Islands",
                                "Value": "Faroe Islands"
                            },
                            {
                                "Text": "Fiji",
                                "Value": "Fiji"
                            },
                            {
                                "Text": "Finland",
                                "Value": "Finland"
                            },
                            {
                                "Text": "France",
                                "Value": "France"
                            },
                            {
                                "Text": "French Guiana",
                                "Value": "French Guiana"
                            },
                            {
                                "Text": "French Polynesia",
                                "Value": "French Polynesia"
                            },
                            {
                                "Text": "French Southern and Antarctic Lands",
                                "Value": "French Southern and Antarctic Lands"
                            },
                            {
                                "Text": "Gabon",
                                "Value": "Gabon"
                            },
                            {
                                "Text": "Gambia, The",
                                "Value": "Gambia, The"
                            },
                            {
                                "Text": "Georgia",
                                "Value": "Georgia"
                            },
                            {
                                "Text": "Germany",
                                "Value": "Germany"
                            },
                            {
                                "Text": "Ghana",
                                "Value": "Ghana"
                            },
                            {
                                "Text": "Gibraltar",
                                "Value": "Gibraltar"
                            },
                            {
                                "Text": "Greece",
                                "Value": "Greece"
                            },
                            {
                                "Text": "Greenland",
                                "Value": "Greenland"
                            },
                            {
                                "Text": "Grenada",
                                "Value": "Grenada"
                            },
                            {
                                "Text": "Guadeloupe",
                                "Value": "Guadeloupe"
                            },
                            {
                                "Text": "Guam",
                                "Value": "Guam"
                            },
                            {
                                "Text": "Guatemala",
                                "Value": "Guatemala"
                            },
                            {
                                "Text": "Guernsey",
                                "Value": "Guernsey"
                            },
                            {
                                "Text": "Guinea",
                                "Value": "Guinea"
                            },
                            {
                                "Text": "Guinea-Bissau",
                                "Value": "Guinea-Bissau"
                            },
                            {
                                "Text": "Guyana",
                                "Value": "Guyana"
                            },
                            {
                                "Text": "Haiti",
                                "Value": "Haiti"
                            },
                            {
                                "Text": "Heard Island and McDonald Islands",
                                "Value": "Heard Island and McDonald Islands"
                            },
                            {
                                "Text": "Honduras",
                                "Value": "Honduras"
                            },
                            {
                                "Text": "Hong Kong",
                                "Value": "Hong Kong"
                            },
                            {
                                "Text": "Howland Island",
                                "Value": "Howland Island"
                            },
                            {
                                "Text": "Hungary",
                                "Value": "Hungary"
                            },
                            {
                                "Text": "Iceland",
                                "Value": "Iceland"
                            },
                            {
                                "Text": "India",
                                "Value": "India"
                            },
                            {
                                "Text": "Indonesia",
                                "Value": "Indonesia"
                            },
                            {
                                "Text": "Iran",
                                "Value": "Iran"
                            },
                            {
                                "Text": "Iraq",
                                "Value": "Iraq"
                            },
                            {
                                "Text": "Ireland",
                                "Value": "Ireland"
                            },
                            {
                                "Text": "Isle of Man",
                                "Value": "Isle of Man"
                            },
                            {
                                "Text": "Israel",
                                "Value": "Israel"
                            },
                            {
                                "Text": "Italy",
                                "Value": "Italy"
                            },
                            {
                                "Text": "Jamaica",
                                "Value": "Jamaica"
                            },
                            {
                                "Text": "Japan",
                                "Value": "Japan"
                            },
                            {
                                "Text": "Jarvis Island",
                                "Value": "Jarvis Island"
                            },
                            {
                                "Text": "Jersey",
                                "Value": "Jersey"
                            },
                            {
                                "Text": "Johnston Atoll",
                                "Value": "Johnston Atoll"
                            },
                            {
                                "Text": "Jordan",
                                "Value": "Jordan"
                            },
                            {
                                "Text": "Kazakhstan",
                                "Value": "Kazakhstan"
                            },
                            {
                                "Text": "Kenya",
                                "Value": "Kenya"
                            },
                            {
                                "Text": "Kingman Reef",
                                "Value": "Kingman Reef"
                            },
                            {
                                "Text": "Kiribati",
                                "Value": "Kiribati"
                            },
                            {
                                "Text": "Korea, North",
                                "Value": "Korea, North"
                            },
                            {
                                "Text": "Korea, South",
                                "Value": "Korea, South"
                            },
                            {
                                "Text": "Kuwait",
                                "Value": "Kuwait"
                            },
                            {
                                "Text": "Kyrgyzstan",
                                "Value": "Kyrgyzstan"
                            },
                            {
                                "Text": "Laos",
                                "Value": "Laos"
                            },
                            {
                                "Text": "Latvia",
                                "Value": "Latvia"
                            },
                            {
                                "Text": "Lebanon",
                                "Value": "Lebanon"
                            },
                            {
                                "Text": "Lesotho",
                                "Value": "Lesotho"
                            },
                            {
                                "Text": "Liberia",
                                "Value": "Liberia"
                            },
                            {
                                "Text": "Libya",
                                "Value": "Libya"
                            },
                            {
                                "Text": "Liechtenstein",
                                "Value": "Liechtenstein"
                            },
                            {
                                "Text": "Lithuania",
                                "Value": "Lithuania"
                            },
                            {
                                "Text": "Luxembourg",
                                "Value": "Luxembourg"
                            },
                            {
                                "Text": "Macau",
                                "Value": "Macau"
                            },
                            {
                                "Text": "Macedonia",
                                "Value": "Macedonia"
                            },
                            {
                                "Text": "Madagascar",
                                "Value": "Madagascar"
                            },
                            {
                                "Text": "Malawi",
                                "Value": "Malawi"
                            },
                            {
                                "Text": "Malaysia",
                                "Value": "Malaysia"
                            },
                            {
                                "Text": "Maldives",
                                "Value": "Maldives"
                            },
                            {
                                "Text": "Mali",
                                "Value": "Mali"
                            },
                            {
                                "Text": "Malta",
                                "Value": "Malta"
                            },
                            {
                                "Text": "Marshall Islands",
                                "Value": "Marshall Islands"
                            },
                            {
                                "Text": "Martinique",
                                "Value": "Martinique"
                            },
                            {
                                "Text": "Mauritania",
                                "Value": "Mauritania"
                            },
                            {
                                "Text": "Mauritius",
                                "Value": "Mauritius"
                            },
                            {
                                "Text": "Mayotte",
                                "Value": "Mayotte"
                            },
                            {
                                "Text": "Mexico",
                                "Value": "Mexico"
                            },
                            {
                                "Text": "Micronesia",
                                "Value": "Micronesia"
                            },
                            {
                                "Text": "Midway Islands",
                                "Value": "Midway Islands"
                            },
                            {
                                "Text": "Moldova",
                                "Value": "Moldova"
                            },
                            {
                                "Text": "Monaco",
                                "Value": "Monaco"
                            },
                            {
                                "Text": "Mongolia",
                                "Value": "Mongolia"
                            },
                            {
                                "Text": "Montenegro",
                                "Value": "Montenegro"
                            },
                            {
                                "Text": "Montserrat",
                                "Value": "Montserrat"
                            },
                            {
                                "Text": "Morocco",
                                "Value": "Morocco"
                            },
                            {
                                "Text": "Mozambique",
                                "Value": "Mozambique"
                            },
                            {
                                "Text": "Myanmar (Burma)",
                                "Value": "Myanmar (Burma)"
                            },
                            {
                                "Text": "Nagorno-Karabakh",
                                "Value": "Nagorno-Karabakh"
                            },
                            {
                                "Text": "Namibia",
                                "Value": "Namibia"
                            },
                            {
                                "Text": "Nauru",
                                "Value": "Nauru"
                            },
                            {
                                "Text": "Navassa Island",
                                "Value": "Navassa Island"
                            },
                            {
                                "Text": "Nepal",
                                "Value": "Nepal"
                            },
                            {
                                "Text": "Netherlands",
                                "Value": "Netherlands"
                            },
                            {
                                "Text": "Netherlands Antilles",
                                "Value": "Netherlands Antilles"
                            },
                            {
                                "Text": "New Caledonia",
                                "Value": "New Caledonia"
                            },
                            {
                                "Text": "New Zealand",
                                "Value": "New Zealand"
                            },
                            {
                                "Text": "Nicaragua",
                                "Value": "Nicaragua"
                            },
                            {
                                "Text": "Niger",
                                "Value": "Niger"
                            },
                            {
                                "Text": "Nigeria",
                                "Value": "Nigeria"
                            },
                            {
                                "Text": "Niue",
                                "Value": "Niue"
                            },
                            {
                                "Text": "Norfolk Island",
                                "Value": "Norfolk Island"
                            },
                            {
                                "Text": "Northern Cyprus",
                                "Value": "Northern Cyprus"
                            },
                            {
                                "Text": "Northern Mariana Islands",
                                "Value": "Northern Mariana Islands"
                            },
                            {
                                "Text": "Norway",
                                "Value": "Norway"
                            },
                            {
                                "Text": "Oman",
                                "Value": "Oman"
                            },
                            {
                                "Text": "Pakistan",
                                "Value": "Pakistan"
                            },
                            {
                                "Text": "Palau",
                                "Value": "Palau"
                            },
                            {
                                "Text": "Palmyra Atoll",
                                "Value": "Palmyra Atoll"
                            },
                            {
                                "Text": "Panama",
                                "Value": "Panama"
                            },
                            {
                                "Text": "Papua New Guinea",
                                "Value": "Papua New Guinea"
                            },
                            {
                                "Text": "Paraguay",
                                "Value": "Paraguay"
                            },
                            {
                                "Text": "Peru",
                                "Value": "Peru"
                            },
                            {
                                "Text": "Peter I Island",
                                "Value": "Peter I Island"
                            },
                            {
                                "Text": "Philippines",
                                "Value": "Philippines"
                            },
                            {
                                "Text": "Pitcairn Islands",
                                "Value": "Pitcairn Islands"
                            },
                            {
                                "Text": "Poland",
                                "Value": "Poland"
                            },
                            {
                                "Text": "Portugal",
                                "Value": "Portugal"
                            },
                            {
                                "Text": "Pridnestrovie (Transnistria)",
                                "Value": "Pridnestrovie (Transnistria)"
                            },
                            {
                                "Text": "Puerto Rico",
                                "Value": "Puerto Rico"
                            },
                            {
                                "Text": "Qatar",
                                "Value": "Qatar"
                            },
                            {
                                "Text": "Queen Maud Land",
                                "Value": "Queen Maud Land"
                            },
                            {
                                "Text": "Reunion",
                                "Value": "Reunion"
                            },
                            {
                                "Text": "Romania",
                                "Value": "Romania"
                            },
                            {
                                "Text": "Ross Dependency",
                                "Value": "Ross Dependency"
                            },
                            {
                                "Text": "Russia",
                                "Value": "Russia"
                            },
                            {
                                "Text": "Rwanda",
                                "Value": "Rwanda"
                            },
                            {
                                "Text": "Saint Barthelemy",
                                "Value": "Saint Barthelemy"
                            },
                            {
                                "Text": "Saint Helena",
                                "Value": "Saint Helena"
                            },
                            {
                                "Text": "Saint Kitts and Nevis",
                                "Value": "Saint Kitts and Nevis"
                            },
                            {
                                "Text": "Saint Lucia",
                                "Value": "Saint Lucia"
                            },
                            {
                                "Text": "Saint Martin",
                                "Value": "Saint Martin"
                            },
                            {
                                "Text": "Saint Pierre and Miquelon",
                                "Value": "Saint Pierre and Miquelon"
                            },
                            {
                                "Text": "Saint Vincent and the Grenadines",
                                "Value": "Saint Vincent and the Grenadines"
                            },
                            {
                                "Text": "Samoa",
                                "Value": "Samoa"
                            },
                            {
                                "Text": "San Marino",
                                "Value": "San Marino"
                            },
                            {
                                "Text": "Sao Tome and Principe",
                                "Value": "Sao Tome and Principe"
                            },
                            {
                                "Text": "Saudi Arabia",
                                "Value": "Saudi Arabia"
                            },
                            {
                                "Text": "Senegal",
                                "Value": "Senegal"
                            },
                            {
                                "Text": "Serbia",
                                "Value": "Serbia"
                            },
                            {
                                "Text": "Seychelles",
                                "Value": "Seychelles"
                            },
                            {
                                "Text": "Sierra Leone",
                                "Value": "Sierra Leone"
                            },
                            {
                                "Text": "Singapore",
                                "Value": "Singapore"
                            },
                            {
                                "Text": "Slovakia",
                                "Value": "Slovakia"
                            },
                            {
                                "Text": "Slovenia",
                                "Value": "Slovenia"
                            },
                            {
                                "Text": "Solomon Islands",
                                "Value": "Solomon Islands"
                            },
                            {
                                "Text": "Somalia",
                                "Value": "Somalia"
                            },
                            {
                                "Text": "Somaliland",
                                "Value": "Somaliland"
                            },
                            {
                                "Text": "South Africa",
                                "Value": "South Africa"
                            },
                            {
                                "Text": "South Georgia & South Sandwich Islands",
                                "Value": "South Georgia & South Sandwich Islands"
                            },
                            {
                                "Text": "South Ossetia",
                                "Value": "South Ossetia"
                            },
                            {
                                "Text": "Spain",
                                "Value": "Spain"
                            },
                            {
                                "Text": "Sri Lanka",
                                "Value": "Sri Lanka"
                            },
                            {
                                "Text": "Sudan",
                                "Value": "Sudan"
                            },
                            {
                                "Text": "Suriname",
                                "Value": "Suriname"
                            },
                            {
                                "Text": "Svalbard",
                                "Value": "Svalbard"
                            },
                            {
                                "Text": "Swaziland",
                                "Value": "Swaziland"
                            },
                            {
                                "Text": "Sweden",
                                "Value": "Sweden"
                            },
                            {
                                "Text": "Switzerland",
                                "Value": "Switzerland"
                            },
                            {
                                "Text": "Syria",
                                "Value": "Syria"
                            },
                            {
                                "Text": "Tajikistan",
                                "Value": "Tajikistan"
                            },
                            {
                                "Text": "Tanzania",
                                "Value": "Tanzania"
                            },
                            {
                                "Text": "Thailand",
                                "Value": "Thailand"
                            },
                            {
                                "Text": "Timor-Leste (East Timor)",
                                "Value": "Timor-Leste (East Timor)"
                            },
                            {
                                "Text": "Togo",
                                "Value": "Togo"
                            },
                            {
                                "Text": "Tokelau",
                                "Value": "Tokelau"
                            },
                            {
                                "Text": "Tonga",
                                "Value": "Tonga"
                            },
                            {
                                "Text": "Trinidad and Tobago",
                                "Value": "Trinidad and Tobago"
                            },
                            {
                                "Text": "Tristan da Cunha",
                                "Value": "Tristan da Cunha"
                            },
                            {
                                "Text": "Tunisia",
                                "Value": "Tunisia"
                            },
                            {
                                "Text": "Turkey",
                                "Value": "Turkey"
                            },
                            {
                                "Text": "Turkmenistan",
                                "Value": "Turkmenistan"
                            },
                            {
                                "Text": "Turks and Caicos Islands",
                                "Value": "Turks and Caicos Islands"
                            },
                            {
                                "Text": "Tuvalu",
                                "Value": "Tuvalu"
                            },
                            {
                                "Text": "U.A.E.",
                                "Value": "U.A.E."
                            },
                            {
                                "Text": "U.S. Virgin Islands",
                                "Value": "U.S. Virgin Islands"
                            },
                            {
                                "Text": "Uganda",
                                "Value": "Uganda"
                            },
                            {
                                "Text": "Ukraine",
                                "Value": "Ukraine"
                            },
                            {
                                "Text": "United Kingdom",
                                "Value": "United Kingdom"
                            },
                            {
                                "Text": "United States",
                                "Value": "United States"
                            },
                            {
                                "Text": "Uruguay",
                                "Value": "Uruguay"
                            },
                            {
                                "Text": "Uzbekistan",
                                "Value": "Uzbekistan"
                            },
                            {
                                "Text": "Vanuatu",
                                "Value": "Vanuatu"
                            },
                            {
                                "Text": "Vatican City",
                                "Value": "Vatican City"
                            },
                            {
                                "Text": "Venezuela",
                                "Value": "Venezuela"
                            },
                            {
                                "Text": "Vietnam",
                                "Value": "Vietnam"
                            },
                            {
                                "Text": "Wake Island",
                                "Value": "Wake Island"
                            },
                            {
                                "Text": "Wallis and Futuna",
                                "Value": "Wallis and Futuna"
                            },
                            {
                                "Text": "Yemen",
                                "Value": "Yemen"
                            },
                            {
                                "Text": "Zambia",
                                "Value": "Zambia"
                            },
                            {
                                "Text": "Zimbabwe",
                                "Value": "Zimbabwe"
                            }
                            ],
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q93']['input'][index]['answer']==='1'",
                            "validation": ""
                        },
                        "Q95": {
                            "id": "Q95",
                            "label": "City",
                            "name": "Q95",
                            "description": "Type name of city",
                            "mandatory": 1,
                            "type": "text",
                            "value": null,
                            "default": null,
                            "min": 2,
                            "max": 15,
                            "pattern": "/^[a-zA-z&,.]+$/",
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q93']['input'][index]['answer']==='1'",
                            "validation": "!/(.)\\1{2,}/.test(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q95']['input'][index]['answer'])"
                        },
                        "Q96": {
                            "id": "Q96",
                            "label": "Date of travel",
                            "name": "Q96",
                            "description": "Provide date of travel",
                            "mandatory": 1,
                            "type": "date",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q93']['input'][index]['answer']==='1'",
                            "validation": "(Math.floor(new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q96']['input'][index]['answer'])-new Date())/1000/60/60/24)<=90 && (Math.floor(new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q96']['input'][index]['answer'])-new Date())/1000/60/60/24)>0"
                        },
                        "Q97": {
                            "id": "Q97",
                            "label": "Intended duration (in Months)",
                            "name": "Q97",
                            "description": null,
                            "mandatory": 0,
                            "type": "number",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": 280,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q93']['input'][index]['answer']==='1'",
                            "validation": ""
                        },
                        "Q98": {
                            "id": "Q98",
                            "label": "Name of country ",
                            "name": "Q98",
                            "description": null,
                            "mandatory": 0,
                            "type": "single-select",
                            "value": [{
                                "Text": "Abkhazia",
                                "Value": "Abkhazia"
                            },
                            {
                                "Text": "Afghanistan",
                                "Value": "Afghanistan"
                            },
                            {
                                "Text": "Aland",
                                "Value": "Aland"
                            },
                            {
                                "Text": "Albania",
                                "Value": "Albania"
                            },
                            {
                                "Text": "Algeria",
                                "Value": "Algeria"
                            },
                            {
                                "Text": "American Samoa",
                                "Value": "American Samoa"
                            },
                            {
                                "Text": "Andorra",
                                "Value": "Andorra"
                            },
                            {
                                "Text": "Angola",
                                "Value": "Angola"
                            },
                            {
                                "Text": "Anguilla",
                                "Value": "Anguilla"
                            },
                            {
                                "Text": "Antigua and Barbuda",
                                "Value": "Antigua and Barbuda"
                            },
                            {
                                "Text": "Argentina",
                                "Value": "Argentina"
                            },
                            {
                                "Text": "Armenia",
                                "Value": "Armenia"
                            },
                            {
                                "Text": "Aruba",
                                "Value": "Aruba"
                            },
                            {
                                "Text": "Ascension",
                                "Value": "Ascension"
                            },
                            {
                                "Text": "Ashmore and Cartier Islands",
                                "Value": "Ashmore and Cartier Islands"
                            },
                            {
                                "Text": "Australia",
                                "Value": "Australia"
                            },
                            {
                                "Text": "Australian Antarctic Territory",
                                "Value": "Australian Antarctic Territory"
                            },
                            {
                                "Text": "Austria",
                                "Value": "Austria"
                            },
                            {
                                "Text": "Azerbaijan",
                                "Value": "Azerbaijan"
                            },
                            {
                                "Text": "Bahamas, The",
                                "Value": "Bahamas, The"
                            },
                            {
                                "Text": "Bahrain",
                                "Value": "Bahrain"
                            },
                            {
                                "Text": "Baker Island",
                                "Value": "Baker Island"
                            },
                            {
                                "Text": "Bangladesh",
                                "Value": "Bangladesh"
                            },
                            {
                                "Text": "Barbados",
                                "Value": "Barbados"
                            },
                            {
                                "Text": "Belarus",
                                "Value": "Belarus"
                            },
                            {
                                "Text": "Belgium",
                                "Value": "Belgium"
                            },
                            {
                                "Text": "Belize",
                                "Value": "Belize"
                            },
                            {
                                "Text": "Benin",
                                "Value": "Benin"
                            },
                            {
                                "Text": "Bermuda",
                                "Value": "Bermuda"
                            },
                            {
                                "Text": "Bhutan",
                                "Value": "Bhutan"
                            },
                            {
                                "Text": "Bolivia",
                                "Value": "Bolivia"
                            },
                            {
                                "Text": "Bosnia and Herzegovina",
                                "Value": "Bosnia and Herzegovina"
                            },
                            {
                                "Text": "Botswana",
                                "Value": "Botswana"
                            },
                            {
                                "Text": "Bouvet Island",
                                "Value": "Bouvet Island"
                            },
                            {
                                "Text": "Brazil",
                                "Value": "Brazil"
                            },
                            {
                                "Text": "British Indian Ocean Territory",
                                "Value": "British Indian Ocean Territory"
                            },
                            {
                                "Text": "British Sovereign Base Areas",
                                "Value": "British Sovereign Base Areas"
                            },
                            {
                                "Text": "British Virgin Islands",
                                "Value": "British Virgin Islands"
                            },
                            {
                                "Text": "Brunei",
                                "Value": "Brunei"
                            },
                            {
                                "Text": "Bulgaria",
                                "Value": "Bulgaria"
                            },
                            {
                                "Text": "Burkina Faso",
                                "Value": "Burkina Faso"
                            },
                            {
                                "Text": "Burundi",
                                "Value": "Burundi"
                            },
                            {
                                "Text": "Cambodia",
                                "Value": "Cambodia"
                            },
                            {
                                "Text": "Cameroon",
                                "Value": "Cameroon"
                            },
                            {
                                "Text": "Canada",
                                "Value": "Canada"
                            },
                            {
                                "Text": "Cape Verde",
                                "Value": "Cape Verde"
                            },
                            {
                                "Text": "Cayman Islands",
                                "Value": "Cayman Islands"
                            },
                            {
                                "Text": "CD",
                                "Value": "CongoCD"
                            },
                            {
                                "Text": "Central African Republic",
                                "Value": "Central African Republic"
                            },
                            {
                                "Text": "CG",
                                "Value": "CongoCG"
                            },
                            {
                                "Text": "Chad",
                                "Value": "Chad"
                            },
                            {
                                "Text": "Chile",
                                "Value": "Chile"
                            },
                            {
                                "Text": "China, People's Republic of",
                                "Value": "China, People's Republic of"
                            },
                            {
                                "Text": "China, Republic of (Taiwan)",
                                "Value": "China, Republic of (Taiwan)"
                            },
                            {
                                "Text": "Christmas Island",
                                "Value": "Christmas Island"
                            },
                            {
                                "Text": "Clipperton Island",
                                "Value": "Clipperton Island"
                            },
                            {
                                "Text": "Cocos (Keeling) Islands",
                                "Value": "Cocos (Keeling) Islands"
                            },
                            {
                                "Text": "Colombia",
                                "Value": "Colombia"
                            },
                            {
                                "Text": "Comoros",
                                "Value": "Comoros"
                            },
                            {
                                "Text": "Cook Islands",
                                "Value": "Cook Islands"
                            },
                            {
                                "Text": "Coral Sea Islands",
                                "Value": "Coral Sea Islands"
                            },
                            {
                                "Text": "Costa Rica",
                                "Value": "Costa Rica"
                            },
                            {
                                "Text": "Cote d'Ivoire (Ivory Coast)",
                                "Value": "Cote d'Ivoire (Ivory Coast)"
                            },
                            {
                                "Text": "Croatia",
                                "Value": "Croatia"
                            },
                            {
                                "Text": "Cuba",
                                "Value": "Cuba"
                            },
                            {
                                "Text": "Cyprus",
                                "Value": "Cyprus"
                            },
                            {
                                "Text": "Czech Republic",
                                "Value": "Czech Republic"
                            },
                            {
                                "Text": "Denmark",
                                "Value": "Denmark"
                            },
                            {
                                "Text": "Djibouti",
                                "Value": "Djibouti"
                            },
                            {
                                "Text": "Dominica",
                                "Value": "Dominica"
                            },
                            {
                                "Text": "Dominican Republic",
                                "Value": "Dominican Republic"
                            },
                            {
                                "Text": "Ecuador",
                                "Value": "Ecuador"
                            },
                            {
                                "Text": "Egypt",
                                "Value": "Egypt"
                            },
                            {
                                "Text": "El Salvador",
                                "Value": "El Salvador"
                            },
                            {
                                "Text": "Equatorial Guinea",
                                "Value": "Equatorial Guinea"
                            },
                            {
                                "Text": "Eritrea",
                                "Value": "Eritrea"
                            },
                            {
                                "Text": "Estonia",
                                "Value": "Estonia"
                            },
                            {
                                "Text": "Ethiopia",
                                "Value": "Ethiopia"
                            },
                            {
                                "Text": "Falkland Islands (Islas Malvinas)",
                                "Value": "Falkland Islands (Islas Malvinas)"
                            },
                            {
                                "Text": "Faroe Islands",
                                "Value": "Faroe Islands"
                            },
                            {
                                "Text": "Fiji",
                                "Value": "Fiji"
                            },
                            {
                                "Text": "Finland",
                                "Value": "Finland"
                            },
                            {
                                "Text": "France",
                                "Value": "France"
                            },
                            {
                                "Text": "French Guiana",
                                "Value": "French Guiana"
                            },
                            {
                                "Text": "French Polynesia",
                                "Value": "French Polynesia"
                            },
                            {
                                "Text": "French Southern and Antarctic Lands",
                                "Value": "French Southern and Antarctic Lands"
                            },
                            {
                                "Text": "Gabon",
                                "Value": "Gabon"
                            },
                            {
                                "Text": "Gambia, The",
                                "Value": "Gambia, The"
                            },
                            {
                                "Text": "Georgia",
                                "Value": "Georgia"
                            },
                            {
                                "Text": "Germany",
                                "Value": "Germany"
                            },
                            {
                                "Text": "Ghana",
                                "Value": "Ghana"
                            },
                            {
                                "Text": "Gibraltar",
                                "Value": "Gibraltar"
                            },
                            {
                                "Text": "Greece",
                                "Value": "Greece"
                            },
                            {
                                "Text": "Greenland",
                                "Value": "Greenland"
                            },
                            {
                                "Text": "Grenada",
                                "Value": "Grenada"
                            },
                            {
                                "Text": "Guadeloupe",
                                "Value": "Guadeloupe"
                            },
                            {
                                "Text": "Guam",
                                "Value": "Guam"
                            },
                            {
                                "Text": "Guatemala",
                                "Value": "Guatemala"
                            },
                            {
                                "Text": "Guernsey",
                                "Value": "Guernsey"
                            },
                            {
                                "Text": "Guinea",
                                "Value": "Guinea"
                            },
                            {
                                "Text": "Guinea-Bissau",
                                "Value": "Guinea-Bissau"
                            },
                            {
                                "Text": "Guyana",
                                "Value": "Guyana"
                            },
                            {
                                "Text": "Haiti",
                                "Value": "Haiti"
                            },
                            {
                                "Text": "Heard Island and McDonald Islands",
                                "Value": "Heard Island and McDonald Islands"
                            },
                            {
                                "Text": "Honduras",
                                "Value": "Honduras"
                            },
                            {
                                "Text": "Hong Kong",
                                "Value": "Hong Kong"
                            },
                            {
                                "Text": "Howland Island",
                                "Value": "Howland Island"
                            },
                            {
                                "Text": "Hungary",
                                "Value": "Hungary"
                            },
                            {
                                "Text": "Iceland",
                                "Value": "Iceland"
                            },
                            {
                                "Text": "India",
                                "Value": "India"
                            },
                            {
                                "Text": "Indonesia",
                                "Value": "Indonesia"
                            },
                            {
                                "Text": "Iran",
                                "Value": "Iran"
                            },
                            {
                                "Text": "Iraq",
                                "Value": "Iraq"
                            },
                            {
                                "Text": "Ireland",
                                "Value": "Ireland"
                            },
                            {
                                "Text": "Isle of Man",
                                "Value": "Isle of Man"
                            },
                            {
                                "Text": "Israel",
                                "Value": "Israel"
                            },
                            {
                                "Text": "Italy",
                                "Value": "Italy"
                            },
                            {
                                "Text": "Jamaica",
                                "Value": "Jamaica"
                            },
                            {
                                "Text": "Japan",
                                "Value": "Japan"
                            },
                            {
                                "Text": "Jarvis Island",
                                "Value": "Jarvis Island"
                            },
                            {
                                "Text": "Jersey",
                                "Value": "Jersey"
                            },
                            {
                                "Text": "Johnston Atoll",
                                "Value": "Johnston Atoll"
                            },
                            {
                                "Text": "Jordan",
                                "Value": "Jordan"
                            },
                            {
                                "Text": "Kazakhstan",
                                "Value": "Kazakhstan"
                            },
                            {
                                "Text": "Kenya",
                                "Value": "Kenya"
                            },
                            {
                                "Text": "Kingman Reef",
                                "Value": "Kingman Reef"
                            },
                            {
                                "Text": "Kiribati",
                                "Value": "Kiribati"
                            },
                            {
                                "Text": "Korea, North",
                                "Value": "Korea, North"
                            },
                            {
                                "Text": "Korea, South",
                                "Value": "Korea, South"
                            },
                            {
                                "Text": "Kuwait",
                                "Value": "Kuwait"
                            },
                            {
                                "Text": "Kyrgyzstan",
                                "Value": "Kyrgyzstan"
                            },
                            {
                                "Text": "Laos",
                                "Value": "Laos"
                            },
                            {
                                "Text": "Latvia",
                                "Value": "Latvia"
                            },
                            {
                                "Text": "Lebanon",
                                "Value": "Lebanon"
                            },
                            {
                                "Text": "Lesotho",
                                "Value": "Lesotho"
                            },
                            {
                                "Text": "Liberia",
                                "Value": "Liberia"
                            },
                            {
                                "Text": "Libya",
                                "Value": "Libya"
                            },
                            {
                                "Text": "Liechtenstein",
                                "Value": "Liechtenstein"
                            },
                            {
                                "Text": "Lithuania",
                                "Value": "Lithuania"
                            },
                            {
                                "Text": "Luxembourg",
                                "Value": "Luxembourg"
                            },
                            {
                                "Text": "Macau",
                                "Value": "Macau"
                            },
                            {
                                "Text": "Macedonia",
                                "Value": "Macedonia"
                            },
                            {
                                "Text": "Madagascar",
                                "Value": "Madagascar"
                            },
                            {
                                "Text": "Malawi",
                                "Value": "Malawi"
                            },
                            {
                                "Text": "Malaysia",
                                "Value": "Malaysia"
                            },
                            {
                                "Text": "Maldives",
                                "Value": "Maldives"
                            },
                            {
                                "Text": "Mali",
                                "Value": "Mali"
                            },
                            {
                                "Text": "Malta",
                                "Value": "Malta"
                            },
                            {
                                "Text": "Marshall Islands",
                                "Value": "Marshall Islands"
                            },
                            {
                                "Text": "Martinique",
                                "Value": "Martinique"
                            },
                            {
                                "Text": "Mauritania",
                                "Value": "Mauritania"
                            },
                            {
                                "Text": "Mauritius",
                                "Value": "Mauritius"
                            },
                            {
                                "Text": "Mayotte",
                                "Value": "Mayotte"
                            },
                            {
                                "Text": "Mexico",
                                "Value": "Mexico"
                            },
                            {
                                "Text": "Micronesia",
                                "Value": "Micronesia"
                            },
                            {
                                "Text": "Midway Islands",
                                "Value": "Midway Islands"
                            },
                            {
                                "Text": "Moldova",
                                "Value": "Moldova"
                            },
                            {
                                "Text": "Monaco",
                                "Value": "Monaco"
                            },
                            {
                                "Text": "Mongolia",
                                "Value": "Mongolia"
                            },
                            {
                                "Text": "Montenegro",
                                "Value": "Montenegro"
                            },
                            {
                                "Text": "Montserrat",
                                "Value": "Montserrat"
                            },
                            {
                                "Text": "Morocco",
                                "Value": "Morocco"
                            },
                            {
                                "Text": "Mozambique",
                                "Value": "Mozambique"
                            },
                            {
                                "Text": "Myanmar (Burma)",
                                "Value": "Myanmar (Burma)"
                            },
                            {
                                "Text": "Nagorno-Karabakh",
                                "Value": "Nagorno-Karabakh"
                            },
                            {
                                "Text": "Namibia",
                                "Value": "Namibia"
                            },
                            {
                                "Text": "Nauru",
                                "Value": "Nauru"
                            },
                            {
                                "Text": "Navassa Island",
                                "Value": "Navassa Island"
                            },
                            {
                                "Text": "Nepal",
                                "Value": "Nepal"
                            },
                            {
                                "Text": "Netherlands",
                                "Value": "Netherlands"
                            },
                            {
                                "Text": "Netherlands Antilles",
                                "Value": "Netherlands Antilles"
                            },
                            {
                                "Text": "New Caledonia",
                                "Value": "New Caledonia"
                            },
                            {
                                "Text": "New Zealand",
                                "Value": "New Zealand"
                            },
                            {
                                "Text": "Nicaragua",
                                "Value": "Nicaragua"
                            },
                            {
                                "Text": "Niger",
                                "Value": "Niger"
                            },
                            {
                                "Text": "Nigeria",
                                "Value": "Nigeria"
                            },
                            {
                                "Text": "Niue",
                                "Value": "Niue"
                            },
                            {
                                "Text": "Norfolk Island",
                                "Value": "Norfolk Island"
                            },
                            {
                                "Text": "Northern Cyprus",
                                "Value": "Northern Cyprus"
                            },
                            {
                                "Text": "Northern Mariana Islands",
                                "Value": "Northern Mariana Islands"
                            },
                            {
                                "Text": "Norway",
                                "Value": "Norway"
                            },
                            {
                                "Text": "Oman",
                                "Value": "Oman"
                            },
                            {
                                "Text": "Pakistan",
                                "Value": "Pakistan"
                            },
                            {
                                "Text": "Palau",
                                "Value": "Palau"
                            },
                            {
                                "Text": "Palmyra Atoll",
                                "Value": "Palmyra Atoll"
                            },
                            {
                                "Text": "Panama",
                                "Value": "Panama"
                            },
                            {
                                "Text": "Papua New Guinea",
                                "Value": "Papua New Guinea"
                            },
                            {
                                "Text": "Paraguay",
                                "Value": "Paraguay"
                            },
                            {
                                "Text": "Peru",
                                "Value": "Peru"
                            },
                            {
                                "Text": "Peter I Island",
                                "Value": "Peter I Island"
                            },
                            {
                                "Text": "Philippines",
                                "Value": "Philippines"
                            },
                            {
                                "Text": "Pitcairn Islands",
                                "Value": "Pitcairn Islands"
                            },
                            {
                                "Text": "Poland",
                                "Value": "Poland"
                            },
                            {
                                "Text": "Portugal",
                                "Value": "Portugal"
                            },
                            {
                                "Text": "Pridnestrovie (Transnistria)",
                                "Value": "Pridnestrovie (Transnistria)"
                            },
                            {
                                "Text": "Puerto Rico",
                                "Value": "Puerto Rico"
                            },
                            {
                                "Text": "Qatar",
                                "Value": "Qatar"
                            },
                            {
                                "Text": "Queen Maud Land",
                                "Value": "Queen Maud Land"
                            },
                            {
                                "Text": "Reunion",
                                "Value": "Reunion"
                            },
                            {
                                "Text": "Romania",
                                "Value": "Romania"
                            },
                            {
                                "Text": "Ross Dependency",
                                "Value": "Ross Dependency"
                            },
                            {
                                "Text": "Russia",
                                "Value": "Russia"
                            },
                            {
                                "Text": "Rwanda",
                                "Value": "Rwanda"
                            },
                            {
                                "Text": "Saint Barthelemy",
                                "Value": "Saint Barthelemy"
                            },
                            {
                                "Text": "Saint Helena",
                                "Value": "Saint Helena"
                            },
                            {
                                "Text": "Saint Kitts and Nevis",
                                "Value": "Saint Kitts and Nevis"
                            },
                            {
                                "Text": "Saint Lucia",
                                "Value": "Saint Lucia"
                            },
                            {
                                "Text": "Saint Martin",
                                "Value": "Saint Martin"
                            },
                            {
                                "Text": "Saint Pierre and Miquelon",
                                "Value": "Saint Pierre and Miquelon"
                            },
                            {
                                "Text": "Saint Vincent and the Grenadines",
                                "Value": "Saint Vincent and the Grenadines"
                            },
                            {
                                "Text": "Samoa",
                                "Value": "Samoa"
                            },
                            {
                                "Text": "San Marino",
                                "Value": "San Marino"
                            },
                            {
                                "Text": "Sao Tome and Principe",
                                "Value": "Sao Tome and Principe"
                            },
                            {
                                "Text": "Saudi Arabia",
                                "Value": "Saudi Arabia"
                            },
                            {
                                "Text": "Senegal",
                                "Value": "Senegal"
                            },
                            {
                                "Text": "Serbia",
                                "Value": "Serbia"
                            },
                            {
                                "Text": "Seychelles",
                                "Value": "Seychelles"
                            },
                            {
                                "Text": "Sierra Leone",
                                "Value": "Sierra Leone"
                            },
                            {
                                "Text": "Singapore",
                                "Value": "Singapore"
                            },
                            {
                                "Text": "Slovakia",
                                "Value": "Slovakia"
                            },
                            {
                                "Text": "Slovenia",
                                "Value": "Slovenia"
                            },
                            {
                                "Text": "Solomon Islands",
                                "Value": "Solomon Islands"
                            },
                            {
                                "Text": "Somalia",
                                "Value": "Somalia"
                            },
                            {
                                "Text": "Somaliland",
                                "Value": "Somaliland"
                            },
                            {
                                "Text": "South Africa",
                                "Value": "South Africa"
                            },
                            {
                                "Text": "South Georgia & South Sandwich Islands",
                                "Value": "South Georgia & South Sandwich Islands"
                            },
                            {
                                "Text": "South Ossetia",
                                "Value": "South Ossetia"
                            },
                            {
                                "Text": "Spain",
                                "Value": "Spain"
                            },
                            {
                                "Text": "Sri Lanka",
                                "Value": "Sri Lanka"
                            },
                            {
                                "Text": "Sudan",
                                "Value": "Sudan"
                            },
                            {
                                "Text": "Suriname",
                                "Value": "Suriname"
                            },
                            {
                                "Text": "Svalbard",
                                "Value": "Svalbard"
                            },
                            {
                                "Text": "Swaziland",
                                "Value": "Swaziland"
                            },
                            {
                                "Text": "Sweden",
                                "Value": "Sweden"
                            },
                            {
                                "Text": "Switzerland",
                                "Value": "Switzerland"
                            },
                            {
                                "Text": "Syria",
                                "Value": "Syria"
                            },
                            {
                                "Text": "Tajikistan",
                                "Value": "Tajikistan"
                            },
                            {
                                "Text": "Tanzania",
                                "Value": "Tanzania"
                            },
                            {
                                "Text": "Thailand",
                                "Value": "Thailand"
                            },
                            {
                                "Text": "Timor-Leste (East Timor)",
                                "Value": "Timor-Leste (East Timor)"
                            },
                            {
                                "Text": "Togo",
                                "Value": "Togo"
                            },
                            {
                                "Text": "Tokelau",
                                "Value": "Tokelau"
                            },
                            {
                                "Text": "Tonga",
                                "Value": "Tonga"
                            },
                            {
                                "Text": "Trinidad and Tobago",
                                "Value": "Trinidad and Tobago"
                            },
                            {
                                "Text": "Tristan da Cunha",
                                "Value": "Tristan da Cunha"
                            },
                            {
                                "Text": "Tunisia",
                                "Value": "Tunisia"
                            },
                            {
                                "Text": "Turkey",
                                "Value": "Turkey"
                            },
                            {
                                "Text": "Turkmenistan",
                                "Value": "Turkmenistan"
                            },
                            {
                                "Text": "Turks and Caicos Islands",
                                "Value": "Turks and Caicos Islands"
                            },
                            {
                                "Text": "Tuvalu",
                                "Value": "Tuvalu"
                            },
                            {
                                "Text": "U.A.E.",
                                "Value": "U.A.E."
                            },
                            {
                                "Text": "U.S. Virgin Islands",
                                "Value": "U.S. Virgin Islands"
                            },
                            {
                                "Text": "Uganda",
                                "Value": "Uganda"
                            },
                            {
                                "Text": "Ukraine",
                                "Value": "Ukraine"
                            },
                            {
                                "Text": "United Kingdom",
                                "Value": "United Kingdom"
                            },
                            {
                                "Text": "United States",
                                "Value": "United States"
                            },
                            {
                                "Text": "Uruguay",
                                "Value": "Uruguay"
                            },
                            {
                                "Text": "Uzbekistan",
                                "Value": "Uzbekistan"
                            },
                            {
                                "Text": "Vanuatu",
                                "Value": "Vanuatu"
                            },
                            {
                                "Text": "Vatican City",
                                "Value": "Vatican City"
                            },
                            {
                                "Text": "Venezuela",
                                "Value": "Venezuela"
                            },
                            {
                                "Text": "Vietnam",
                                "Value": "Vietnam"
                            },
                            {
                                "Text": "Wake Island",
                                "Value": "Wake Island"
                            },
                            {
                                "Text": "Wallis and Futuna",
                                "Value": "Wallis and Futuna"
                            },
                            {
                                "Text": "Yemen",
                                "Value": "Yemen"
                            },
                            {
                                "Text": "Zambia",
                                "Value": "Zambia"
                            },
                            {
                                "Text": "Zimbabwe",
                                "Value": "Zimbabwe"
                            }
                            ],
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q93']['input'][index]['answer']==='1'",
                            "validation": ""
                        },
                        "Q99": {
                            "id": "Q99",
                            "label": "City",
                            "name": "Q99",
                            "description": "Type name of city",
                            "mandatory": 0,
                            "type": "text",
                            "value": null,
                            "default": null,
                            "min": 2,
                            "max": 15,
                            "pattern": "/^[a-zA-z&,.]+$/",
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q93']['input'][index]['answer']==='1'",
                            "validation": "!/(.)\\1{2,}/.test(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q99']['input'][index]['answer'])"
                        },
                        "Q100": {
                            "id": "Q100",
                            "label": "Date of travel",
                            "name": "Q100",
                            "description": "Provide date here",
                            "mandatory": 0,
                            "type": "date",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q93']['input'][index]['answer']==='1'",
                            "validation": "(Math.floor(new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q100']['input'][index]['answer'])-new Date())/1000/60/60/24)<=90 && (Math.floor(new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q100']['input'][index]['answer'])-new Date())/1000/60/60/24)>0"
                        },
                        "Q101": {
                            "id": "Q101",
                            "label": "Intended duration (in Months)",
                            "name": "Q101",
                            "description": null,
                            "mandatory": 0,
                            "type": "number",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": 280,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q93']['input'][index]['answer']==='1'",
                            "validation": ""
                        },
                        "Q102": {
                            "id": "Q102",
                            "label": "Name of country ",
                            "name": "Q102",
                            "description": null,
                            "mandatory": 0,
                            "type": "single-select",
                            "value": [{
                                "Text": "Abkhazia",
                                "Value": "Abkhazia"
                            },
                            {
                                "Text": "Afghanistan",
                                "Value": "Afghanistan"
                            },
                            {
                                "Text": "Aland",
                                "Value": "Aland"
                            },
                            {
                                "Text": "Albania",
                                "Value": "Albania"
                            },
                            {
                                "Text": "Algeria",
                                "Value": "Algeria"
                            },
                            {
                                "Text": "American Samoa",
                                "Value": "American Samoa"
                            },
                            {
                                "Text": "Andorra",
                                "Value": "Andorra"
                            },
                            {
                                "Text": "Angola",
                                "Value": "Angola"
                            },
                            {
                                "Text": "Anguilla",
                                "Value": "Anguilla"
                            },
                            {
                                "Text": "Antigua and Barbuda",
                                "Value": "Antigua and Barbuda"
                            },
                            {
                                "Text": "Argentina",
                                "Value": "Argentina"
                            },
                            {
                                "Text": "Armenia",
                                "Value": "Armenia"
                            },
                            {
                                "Text": "Aruba",
                                "Value": "Aruba"
                            },
                            {
                                "Text": "Ascension",
                                "Value": "Ascension"
                            },
                            {
                                "Text": "Ashmore and Cartier Islands",
                                "Value": "Ashmore and Cartier Islands"
                            },
                            {
                                "Text": "Australia",
                                "Value": "Australia"
                            },
                            {
                                "Text": "Australian Antarctic Territory",
                                "Value": "Australian Antarctic Territory"
                            },
                            {
                                "Text": "Austria",
                                "Value": "Austria"
                            },
                            {
                                "Text": "Azerbaijan",
                                "Value": "Azerbaijan"
                            },
                            {
                                "Text": "Bahamas, The",
                                "Value": "Bahamas, The"
                            },
                            {
                                "Text": "Bahrain",
                                "Value": "Bahrain"
                            },
                            {
                                "Text": "Baker Island",
                                "Value": "Baker Island"
                            },
                            {
                                "Text": "Bangladesh",
                                "Value": "Bangladesh"
                            },
                            {
                                "Text": "Barbados",
                                "Value": "Barbados"
                            },
                            {
                                "Text": "Belarus",
                                "Value": "Belarus"
                            },
                            {
                                "Text": "Belgium",
                                "Value": "Belgium"
                            },
                            {
                                "Text": "Belize",
                                "Value": "Belize"
                            },
                            {
                                "Text": "Benin",
                                "Value": "Benin"
                            },
                            {
                                "Text": "Bermuda",
                                "Value": "Bermuda"
                            },
                            {
                                "Text": "Bhutan",
                                "Value": "Bhutan"
                            },
                            {
                                "Text": "Bolivia",
                                "Value": "Bolivia"
                            },
                            {
                                "Text": "Bosnia and Herzegovina",
                                "Value": "Bosnia and Herzegovina"
                            },
                            {
                                "Text": "Botswana",
                                "Value": "Botswana"
                            },
                            {
                                "Text": "Bouvet Island",
                                "Value": "Bouvet Island"
                            },
                            {
                                "Text": "Brazil",
                                "Value": "Brazil"
                            },
                            {
                                "Text": "British Indian Ocean Territory",
                                "Value": "British Indian Ocean Territory"
                            },
                            {
                                "Text": "British Sovereign Base Areas",
                                "Value": "British Sovereign Base Areas"
                            },
                            {
                                "Text": "British Virgin Islands",
                                "Value": "British Virgin Islands"
                            },
                            {
                                "Text": "Brunei",
                                "Value": "Brunei"
                            },
                            {
                                "Text": "Bulgaria",
                                "Value": "Bulgaria"
                            },
                            {
                                "Text": "Burkina Faso",
                                "Value": "Burkina Faso"
                            },
                            {
                                "Text": "Burundi",
                                "Value": "Burundi"
                            },
                            {
                                "Text": "Cambodia",
                                "Value": "Cambodia"
                            },
                            {
                                "Text": "Cameroon",
                                "Value": "Cameroon"
                            },
                            {
                                "Text": "Canada",
                                "Value": "Canada"
                            },
                            {
                                "Text": "Cape Verde",
                                "Value": "Cape Verde"
                            },
                            {
                                "Text": "Cayman Islands",
                                "Value": "Cayman Islands"
                            },
                            {
                                "Text": "CD",
                                "Value": "CongoCD"
                            },
                            {
                                "Text": "Central African Republic",
                                "Value": "Central African Republic"
                            },
                            {
                                "Text": "CG",
                                "Value": "CongoCG"
                            },
                            {
                                "Text": "Chad",
                                "Value": "Chad"
                            },
                            {
                                "Text": "Chile",
                                "Value": "Chile"
                            },
                            {
                                "Text": "China, People's Republic of",
                                "Value": "China, People's Republic of"
                            },
                            {
                                "Text": "China, Republic of (Taiwan)",
                                "Value": "China, Republic of (Taiwan)"
                            },
                            {
                                "Text": "Christmas Island",
                                "Value": "Christmas Island"
                            },
                            {
                                "Text": "Clipperton Island",
                                "Value": "Clipperton Island"
                            },
                            {
                                "Text": "Cocos (Keeling) Islands",
                                "Value": "Cocos (Keeling) Islands"
                            },
                            {
                                "Text": "Colombia",
                                "Value": "Colombia"
                            },
                            {
                                "Text": "Comoros",
                                "Value": "Comoros"
                            },
                            {
                                "Text": "Cook Islands",
                                "Value": "Cook Islands"
                            },
                            {
                                "Text": "Coral Sea Islands",
                                "Value": "Coral Sea Islands"
                            },
                            {
                                "Text": "Costa Rica",
                                "Value": "Costa Rica"
                            },
                            {
                                "Text": "Cote d'Ivoire (Ivory Coast)",
                                "Value": "Cote d'Ivoire (Ivory Coast)"
                            },
                            {
                                "Text": "Croatia",
                                "Value": "Croatia"
                            },
                            {
                                "Text": "Cuba",
                                "Value": "Cuba"
                            },
                            {
                                "Text": "Cyprus",
                                "Value": "Cyprus"
                            },
                            {
                                "Text": "Czech Republic",
                                "Value": "Czech Republic"
                            },
                            {
                                "Text": "Denmark",
                                "Value": "Denmark"
                            },
                            {
                                "Text": "Djibouti",
                                "Value": "Djibouti"
                            },
                            {
                                "Text": "Dominica",
                                "Value": "Dominica"
                            },
                            {
                                "Text": "Dominican Republic",
                                "Value": "Dominican Republic"
                            },
                            {
                                "Text": "Ecuador",
                                "Value": "Ecuador"
                            },
                            {
                                "Text": "Egypt",
                                "Value": "Egypt"
                            },
                            {
                                "Text": "El Salvador",
                                "Value": "El Salvador"
                            },
                            {
                                "Text": "Equatorial Guinea",
                                "Value": "Equatorial Guinea"
                            },
                            {
                                "Text": "Eritrea",
                                "Value": "Eritrea"
                            },
                            {
                                "Text": "Estonia",
                                "Value": "Estonia"
                            },
                            {
                                "Text": "Ethiopia",
                                "Value": "Ethiopia"
                            },
                            {
                                "Text": "Falkland Islands (Islas Malvinas)",
                                "Value": "Falkland Islands (Islas Malvinas)"
                            },
                            {
                                "Text": "Faroe Islands",
                                "Value": "Faroe Islands"
                            },
                            {
                                "Text": "Fiji",
                                "Value": "Fiji"
                            },
                            {
                                "Text": "Finland",
                                "Value": "Finland"
                            },
                            {
                                "Text": "France",
                                "Value": "France"
                            },
                            {
                                "Text": "French Guiana",
                                "Value": "French Guiana"
                            },
                            {
                                "Text": "French Polynesia",
                                "Value": "French Polynesia"
                            },
                            {
                                "Text": "French Southern and Antarctic Lands",
                                "Value": "French Southern and Antarctic Lands"
                            },
                            {
                                "Text": "Gabon",
                                "Value": "Gabon"
                            },
                            {
                                "Text": "Gambia, The",
                                "Value": "Gambia, The"
                            },
                            {
                                "Text": "Georgia",
                                "Value": "Georgia"
                            },
                            {
                                "Text": "Germany",
                                "Value": "Germany"
                            },
                            {
                                "Text": "Ghana",
                                "Value": "Ghana"
                            },
                            {
                                "Text": "Gibraltar",
                                "Value": "Gibraltar"
                            },
                            {
                                "Text": "Greece",
                                "Value": "Greece"
                            },
                            {
                                "Text": "Greenland",
                                "Value": "Greenland"
                            },
                            {
                                "Text": "Grenada",
                                "Value": "Grenada"
                            },
                            {
                                "Text": "Guadeloupe",
                                "Value": "Guadeloupe"
                            },
                            {
                                "Text": "Guam",
                                "Value": "Guam"
                            },
                            {
                                "Text": "Guatemala",
                                "Value": "Guatemala"
                            },
                            {
                                "Text": "Guernsey",
                                "Value": "Guernsey"
                            },
                            {
                                "Text": "Guinea",
                                "Value": "Guinea"
                            },
                            {
                                "Text": "Guinea-Bissau",
                                "Value": "Guinea-Bissau"
                            },
                            {
                                "Text": "Guyana",
                                "Value": "Guyana"
                            },
                            {
                                "Text": "Haiti",
                                "Value": "Haiti"
                            },
                            {
                                "Text": "Heard Island and McDonald Islands",
                                "Value": "Heard Island and McDonald Islands"
                            },
                            {
                                "Text": "Honduras",
                                "Value": "Honduras"
                            },
                            {
                                "Text": "Hong Kong",
                                "Value": "Hong Kong"
                            },
                            {
                                "Text": "Howland Island",
                                "Value": "Howland Island"
                            },
                            {
                                "Text": "Hungary",
                                "Value": "Hungary"
                            },
                            {
                                "Text": "Iceland",
                                "Value": "Iceland"
                            },
                            {
                                "Text": "India",
                                "Value": "India"
                            },
                            {
                                "Text": "Indonesia",
                                "Value": "Indonesia"
                            },
                            {
                                "Text": "Iran",
                                "Value": "Iran"
                            },
                            {
                                "Text": "Iraq",
                                "Value": "Iraq"
                            },
                            {
                                "Text": "Ireland",
                                "Value": "Ireland"
                            },
                            {
                                "Text": "Isle of Man",
                                "Value": "Isle of Man"
                            },
                            {
                                "Text": "Israel",
                                "Value": "Israel"
                            },
                            {
                                "Text": "Italy",
                                "Value": "Italy"
                            },
                            {
                                "Text": "Jamaica",
                                "Value": "Jamaica"
                            },
                            {
                                "Text": "Japan",
                                "Value": "Japan"
                            },
                            {
                                "Text": "Jarvis Island",
                                "Value": "Jarvis Island"
                            },
                            {
                                "Text": "Jersey",
                                "Value": "Jersey"
                            },
                            {
                                "Text": "Johnston Atoll",
                                "Value": "Johnston Atoll"
                            },
                            {
                                "Text": "Jordan",
                                "Value": "Jordan"
                            },
                            {
                                "Text": "Kazakhstan",
                                "Value": "Kazakhstan"
                            },
                            {
                                "Text": "Kenya",
                                "Value": "Kenya"
                            },
                            {
                                "Text": "Kingman Reef",
                                "Value": "Kingman Reef"
                            },
                            {
                                "Text": "Kiribati",
                                "Value": "Kiribati"
                            },
                            {
                                "Text": "Korea, North",
                                "Value": "Korea, North"
                            },
                            {
                                "Text": "Korea, South",
                                "Value": "Korea, South"
                            },
                            {
                                "Text": "Kuwait",
                                "Value": "Kuwait"
                            },
                            {
                                "Text": "Kyrgyzstan",
                                "Value": "Kyrgyzstan"
                            },
                            {
                                "Text": "Laos",
                                "Value": "Laos"
                            },
                            {
                                "Text": "Latvia",
                                "Value": "Latvia"
                            },
                            {
                                "Text": "Lebanon",
                                "Value": "Lebanon"
                            },
                            {
                                "Text": "Lesotho",
                                "Value": "Lesotho"
                            },
                            {
                                "Text": "Liberia",
                                "Value": "Liberia"
                            },
                            {
                                "Text": "Libya",
                                "Value": "Libya"
                            },
                            {
                                "Text": "Liechtenstein",
                                "Value": "Liechtenstein"
                            },
                            {
                                "Text": "Lithuania",
                                "Value": "Lithuania"
                            },
                            {
                                "Text": "Luxembourg",
                                "Value": "Luxembourg"
                            },
                            {
                                "Text": "Macau",
                                "Value": "Macau"
                            },
                            {
                                "Text": "Macedonia",
                                "Value": "Macedonia"
                            },
                            {
                                "Text": "Madagascar",
                                "Value": "Madagascar"
                            },
                            {
                                "Text": "Malawi",
                                "Value": "Malawi"
                            },
                            {
                                "Text": "Malaysia",
                                "Value": "Malaysia"
                            },
                            {
                                "Text": "Maldives",
                                "Value": "Maldives"
                            },
                            {
                                "Text": "Mali",
                                "Value": "Mali"
                            },
                            {
                                "Text": "Malta",
                                "Value": "Malta"
                            },
                            {
                                "Text": "Marshall Islands",
                                "Value": "Marshall Islands"
                            },
                            {
                                "Text": "Martinique",
                                "Value": "Martinique"
                            },
                            {
                                "Text": "Mauritania",
                                "Value": "Mauritania"
                            },
                            {
                                "Text": "Mauritius",
                                "Value": "Mauritius"
                            },
                            {
                                "Text": "Mayotte",
                                "Value": "Mayotte"
                            },
                            {
                                "Text": "Mexico",
                                "Value": "Mexico"
                            },
                            {
                                "Text": "Micronesia",
                                "Value": "Micronesia"
                            },
                            {
                                "Text": "Midway Islands",
                                "Value": "Midway Islands"
                            },
                            {
                                "Text": "Moldova",
                                "Value": "Moldova"
                            },
                            {
                                "Text": "Monaco",
                                "Value": "Monaco"
                            },
                            {
                                "Text": "Mongolia",
                                "Value": "Mongolia"
                            },
                            {
                                "Text": "Montenegro",
                                "Value": "Montenegro"
                            },
                            {
                                "Text": "Montserrat",
                                "Value": "Montserrat"
                            },
                            {
                                "Text": "Morocco",
                                "Value": "Morocco"
                            },
                            {
                                "Text": "Mozambique",
                                "Value": "Mozambique"
                            },
                            {
                                "Text": "Myanmar (Burma)",
                                "Value": "Myanmar (Burma)"
                            },
                            {
                                "Text": "Nagorno-Karabakh",
                                "Value": "Nagorno-Karabakh"
                            },
                            {
                                "Text": "Namibia",
                                "Value": "Namibia"
                            },
                            {
                                "Text": "Nauru",
                                "Value": "Nauru"
                            },
                            {
                                "Text": "Navassa Island",
                                "Value": "Navassa Island"
                            },
                            {
                                "Text": "Nepal",
                                "Value": "Nepal"
                            },
                            {
                                "Text": "Netherlands",
                                "Value": "Netherlands"
                            },
                            {
                                "Text": "Netherlands Antilles",
                                "Value": "Netherlands Antilles"
                            },
                            {
                                "Text": "New Caledonia",
                                "Value": "New Caledonia"
                            },
                            {
                                "Text": "New Zealand",
                                "Value": "New Zealand"
                            },
                            {
                                "Text": "Nicaragua",
                                "Value": "Nicaragua"
                            },
                            {
                                "Text": "Niger",
                                "Value": "Niger"
                            },
                            {
                                "Text": "Nigeria",
                                "Value": "Nigeria"
                            },
                            {
                                "Text": "Niue",
                                "Value": "Niue"
                            },
                            {
                                "Text": "Norfolk Island",
                                "Value": "Norfolk Island"
                            },
                            {
                                "Text": "Northern Cyprus",
                                "Value": "Northern Cyprus"
                            },
                            {
                                "Text": "Northern Mariana Islands",
                                "Value": "Northern Mariana Islands"
                            },
                            {
                                "Text": "Norway",
                                "Value": "Norway"
                            },
                            {
                                "Text": "Oman",
                                "Value": "Oman"
                            },
                            {
                                "Text": "Pakistan",
                                "Value": "Pakistan"
                            },
                            {
                                "Text": "Palau",
                                "Value": "Palau"
                            },
                            {
                                "Text": "Palmyra Atoll",
                                "Value": "Palmyra Atoll"
                            },
                            {
                                "Text": "Panama",
                                "Value": "Panama"
                            },
                            {
                                "Text": "Papua New Guinea",
                                "Value": "Papua New Guinea"
                            },
                            {
                                "Text": "Paraguay",
                                "Value": "Paraguay"
                            },
                            {
                                "Text": "Peru",
                                "Value": "Peru"
                            },
                            {
                                "Text": "Peter I Island",
                                "Value": "Peter I Island"
                            },
                            {
                                "Text": "Philippines",
                                "Value": "Philippines"
                            },
                            {
                                "Text": "Pitcairn Islands",
                                "Value": "Pitcairn Islands"
                            },
                            {
                                "Text": "Poland",
                                "Value": "Poland"
                            },
                            {
                                "Text": "Portugal",
                                "Value": "Portugal"
                            },
                            {
                                "Text": "Pridnestrovie (Transnistria)",
                                "Value": "Pridnestrovie (Transnistria)"
                            },
                            {
                                "Text": "Puerto Rico",
                                "Value": "Puerto Rico"
                            },
                            {
                                "Text": "Qatar",
                                "Value": "Qatar"
                            },
                            {
                                "Text": "Queen Maud Land",
                                "Value": "Queen Maud Land"
                            },
                            {
                                "Text": "Reunion",
                                "Value": "Reunion"
                            },
                            {
                                "Text": "Romania",
                                "Value": "Romania"
                            },
                            {
                                "Text": "Ross Dependency",
                                "Value": "Ross Dependency"
                            },
                            {
                                "Text": "Russia",
                                "Value": "Russia"
                            },
                            {
                                "Text": "Rwanda",
                                "Value": "Rwanda"
                            },
                            {
                                "Text": "Saint Barthelemy",
                                "Value": "Saint Barthelemy"
                            },
                            {
                                "Text": "Saint Helena",
                                "Value": "Saint Helena"
                            },
                            {
                                "Text": "Saint Kitts and Nevis",
                                "Value": "Saint Kitts and Nevis"
                            },
                            {
                                "Text": "Saint Lucia",
                                "Value": "Saint Lucia"
                            },
                            {
                                "Text": "Saint Martin",
                                "Value": "Saint Martin"
                            },
                            {
                                "Text": "Saint Pierre and Miquelon",
                                "Value": "Saint Pierre and Miquelon"
                            },
                            {
                                "Text": "Saint Vincent and the Grenadines",
                                "Value": "Saint Vincent and the Grenadines"
                            },
                            {
                                "Text": "Samoa",
                                "Value": "Samoa"
                            },
                            {
                                "Text": "San Marino",
                                "Value": "San Marino"
                            },
                            {
                                "Text": "Sao Tome and Principe",
                                "Value": "Sao Tome and Principe"
                            },
                            {
                                "Text": "Saudi Arabia",
                                "Value": "Saudi Arabia"
                            },
                            {
                                "Text": "Senegal",
                                "Value": "Senegal"
                            },
                            {
                                "Text": "Serbia",
                                "Value": "Serbia"
                            },
                            {
                                "Text": "Seychelles",
                                "Value": "Seychelles"
                            },
                            {
                                "Text": "Sierra Leone",
                                "Value": "Sierra Leone"
                            },
                            {
                                "Text": "Singapore",
                                "Value": "Singapore"
                            },
                            {
                                "Text": "Slovakia",
                                "Value": "Slovakia"
                            },
                            {
                                "Text": "Slovenia",
                                "Value": "Slovenia"
                            },
                            {
                                "Text": "Solomon Islands",
                                "Value": "Solomon Islands"
                            },
                            {
                                "Text": "Somalia",
                                "Value": "Somalia"
                            },
                            {
                                "Text": "Somaliland",
                                "Value": "Somaliland"
                            },
                            {
                                "Text": "South Africa",
                                "Value": "South Africa"
                            },
                            {
                                "Text": "South Georgia & South Sandwich Islands",
                                "Value": "South Georgia & South Sandwich Islands"
                            },
                            {
                                "Text": "South Ossetia",
                                "Value": "South Ossetia"
                            },
                            {
                                "Text": "Spain",
                                "Value": "Spain"
                            },
                            {
                                "Text": "Sri Lanka",
                                "Value": "Sri Lanka"
                            },
                            {
                                "Text": "Sudan",
                                "Value": "Sudan"
                            },
                            {
                                "Text": "Suriname",
                                "Value": "Suriname"
                            },
                            {
                                "Text": "Svalbard",
                                "Value": "Svalbard"
                            },
                            {
                                "Text": "Swaziland",
                                "Value": "Swaziland"
                            },
                            {
                                "Text": "Sweden",
                                "Value": "Sweden"
                            },
                            {
                                "Text": "Switzerland",
                                "Value": "Switzerland"
                            },
                            {
                                "Text": "Syria",
                                "Value": "Syria"
                            },
                            {
                                "Text": "Tajikistan",
                                "Value": "Tajikistan"
                            },
                            {
                                "Text": "Tanzania",
                                "Value": "Tanzania"
                            },
                            {
                                "Text": "Thailand",
                                "Value": "Thailand"
                            },
                            {
                                "Text": "Timor-Leste (East Timor)",
                                "Value": "Timor-Leste (East Timor)"
                            },
                            {
                                "Text": "Togo",
                                "Value": "Togo"
                            },
                            {
                                "Text": "Tokelau",
                                "Value": "Tokelau"
                            },
                            {
                                "Text": "Tonga",
                                "Value": "Tonga"
                            },
                            {
                                "Text": "Trinidad and Tobago",
                                "Value": "Trinidad and Tobago"
                            },
                            {
                                "Text": "Tristan da Cunha",
                                "Value": "Tristan da Cunha"
                            },
                            {
                                "Text": "Tunisia",
                                "Value": "Tunisia"
                            },
                            {
                                "Text": "Turkey",
                                "Value": "Turkey"
                            },
                            {
                                "Text": "Turkmenistan",
                                "Value": "Turkmenistan"
                            },
                            {
                                "Text": "Turks and Caicos Islands",
                                "Value": "Turks and Caicos Islands"
                            },
                            {
                                "Text": "Tuvalu",
                                "Value": "Tuvalu"
                            },
                            {
                                "Text": "U.A.E.",
                                "Value": "U.A.E."
                            },
                            {
                                "Text": "U.S. Virgin Islands",
                                "Value": "U.S. Virgin Islands"
                            },
                            {
                                "Text": "Uganda",
                                "Value": "Uganda"
                            },
                            {
                                "Text": "Ukraine",
                                "Value": "Ukraine"
                            },
                            {
                                "Text": "United Kingdom",
                                "Value": "United Kingdom"
                            },
                            {
                                "Text": "United States",
                                "Value": "United States"
                            },
                            {
                                "Text": "Uruguay",
                                "Value": "Uruguay"
                            },
                            {
                                "Text": "Uzbekistan",
                                "Value": "Uzbekistan"
                            },
                            {
                                "Text": "Vanuatu",
                                "Value": "Vanuatu"
                            },
                            {
                                "Text": "Vatican City",
                                "Value": "Vatican City"
                            },
                            {
                                "Text": "Venezuela",
                                "Value": "Venezuela"
                            },
                            {
                                "Text": "Vietnam",
                                "Value": "Vietnam"
                            },
                            {
                                "Text": "Wake Island",
                                "Value": "Wake Island"
                            },
                            {
                                "Text": "Wallis and Futuna",
                                "Value": "Wallis and Futuna"
                            },
                            {
                                "Text": "Yemen",
                                "Value": "Yemen"
                            },
                            {
                                "Text": "Zambia",
                                "Value": "Zambia"
                            },
                            {
                                "Text": "Zimbabwe",
                                "Value": "Zimbabwe"
                            }
                            ],
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q93']['input'][index]['answer']==='1'",
                            "validation": ""
                        },
                        "Q103": {
                            "id": "Q103",
                            "label": "City",
                            "name": "Q103",
                            "description": "Select the name of vaccine",
                            "mandatory": 0,
                            "type": "text",
                            "value": null,
                            "default": null,
                            "min": 2,
                            "max": 15,
                            "pattern": "/^[a-zA-z&,.]+$/",
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q93']['input'][index]['answer']==='1'",
                            "validation": "!/(.)\\1{2,}/.test(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q103']['input'][index]['answer'])"
                        },
                        "Q104": {
                            "id": "Q104",
                            "label": "Date of travel",
                            "name": "Q104",
                            "description": "Provide date here",
                            "mandatory": 0,
                            "type": "date",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q93']['input'][index]['answer']==='1'",
                            "validation": "(Math.floor(new Date(formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q104']['input'][index]['answer'])-new Date())/1000/60/60/24)<=90 && (Math.floor(new Datef(ormInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q104']['input'][index]['answer'])-new Date())/1000/60/60/24)>0"
                        },
                        "Q105": {
                            "id": "Q105",
                            "label": "Intended duration (in Months)",
                            "name": "Q105",
                            "description": null,
                            "mandatory": 0,
                            "type": "number",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": 280,
                            "pattern": null,
                            "input": "",
                            "visibility": "formInfo['fieldGroups']['firstLifeAssuredDetails']['fieldGroups']['healthQuestionnaire']['fields']['Q93']['input'][index]['answer']==='1'",
                            "validation": ""
                        }
                    }
                },
                "nomineeInfo": {
                    "id": 240,
                    "name": "nomineeInfo",
                    "description": "Section to capture nominee details",
                    "parent": null,
                    "label": "Nominee Details",
                    "type": null,
                    "sizeOfArray": null,
                    "visibility": null,
                    "validation": null,
                    "order": 4,
                    "fields": {
                        "fullName": {
                            "id": "2546",
                            "label": "full name of the nominee",
                            "name": "fullName",
                            "description": "Name of Nominee",
                            "mandatory": 1,
                            "type": "text",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": 100,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "nomineeRelationWithProposer": {
                            "id": "2547",
                            "label": "nominee relation with proposer",
                            "name": "nomineeRelationWithProposer",
                            "description": "Nominee relationship with Proposer",
                            "mandatory": 1,
                            "type": "single-select",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "dateOfBirth": {
                            "id": "2548",
                            "label": "Date of Birth of Nominee",
                            "name": "dateOfBirth",
                            "description": "Nominee DOB",
                            "mandatory": 1,
                            "type": "date",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": null,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        },
                        "address": {
                            "id": "2549",
                            "label": "Full address of Nominee",
                            "name": "address",
                            "description": "Address of Nominee",
                            "mandatory": 0,
                            "type": "text",
                            "value": null,
                            "default": null,
                            "min": null,
                            "max": 100,
                            "pattern": null,
                            "input": "",
                            "visibility": null,
                            "validation": ""
                        }
                    }
                },
                "payment": {
                    "id": 241,
                    "name": "payment",
                    "description": "Section to capture payment info",
                    "parent": null,
                    "label": "Payment",
                    "type": null,
                    "sizeOfArray": null,
                    "visibility": null,
                    "validation": null,
                    "order": 5
                }
            }
        };

        this.formInfo = this.proposalJson;
        //console.log('this.proposalJson.data.fieldGroups: ', this.proposalJson.data.fieldGroups);

        // for (var key in this.proposalJson.fieldGroups) {
        //     if (this.checkArray(this.proposalJson.fieldGroups[key])) {
        //         this.tabsArr.push(this.proposalJson.fieldGroups[key][0]['name']);
        //     } else {
        //         this.tabsArr.push(this.proposalJson.fieldGroups[key]['name']);
        //     }

        // }

        this.tabsArr = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6'];
        this.currentTab = 'step1';
        console.log('this.tabsArr: ', this.tabsArr);
        console.log('this.current tab: ', this.currentTab);

        this.getProposalJson();
    },
    props: {

    },
    data() {
        return {
            loading: false,
            requestJson: "",
            selectedPlan: "",
            selectedPolicyIndex: 0,
            proposalJson: "",
            formInfo: {},
            errorCounter: 0,
            submittedTab: "",
            tabsArr: [],
            currentTab: "",
        };
    },
    methods: {
        getProposalJson() {
            this.loading = true;
            let reqData = {
                "productId": "2825",
                "manufacturerId": "HDFCERGO",
                "version": 1
            };
            let headers = {};

            this.backendApi("getProposalJson", reqData, headers, "get")
                .then((response) => {
                    this.loading = false;

                    console.log('proposal response: ', response);


                })
                .catch((error) => {
                    console.log('error msg block : get proposal', error);
                    self.loading = false;
                    // self.apiError = true;
                    //   let msg=['We are facing some issue from while fetching quotation API']

                    //   this.$router.push({ path: '/networkalert', query: {backUrl:'policy-quote', msg: msg }});
                });
        },
        isAreaSelected(val) {
            if (val == "proposerDetails") {
                //return "true";
            }
        },
        activePage(val) {
            if (val == "proposerDetails") {
                return "active";
            } else {
                //return "disabled";
                return "";
            }
        },
        isTabContentActive(val) {
            if (val == "proposerDetails") {
                return "show active";
            } else {
                //return "disabled";
                return "";
            }
        },
        getColSize(val, ind1, ind2) {
            if (ind1 == 'healthQuestions') {
                return 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'
            } else if (val == 'boolean') {
                return 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'
            } else {
                return 'col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4';
            }
        },
        currency(amt) {
            //return new Intl.NumberFormat().format(amt);
            let tmpAmt = parseFloat(amt).toFixed(2);
            return new Intl.NumberFormat().format(tmpAmt);
        },
        checkArray(data) {
            return Array.isArray(data);
        },
        getDescriptionText(str) {
            let descText = "";
            if (str) {
                var check = str.includes("#");
                if (check) {
                    let tempArr = str.split("#");
                    descText = tempArr[0];
                } else {
                    descText = str;
                }
            } else {
                descText = "";
            }
            return descText;
        },
        sortDropDown(list) {
            //return list;
            if (list) {
                list = list.sort(sortbyname);
                function sortbyname(a, b) {
                    if (a.Text < b.Text) return -1;
                    if (a.Text > b.Text) return 1;
                    return 0;
                }
                return list;
            }
        },
        submitForm(sectionIndex) {

            console.log('form submitted: ', sectionIndex);
            let subArray = this.formInfo['fieldGroups'][sectionIndex];
            console.log('subArray: ', subArray);

            // ############# Validation Section #############
            this.errorCounter = 0;
            $(".error-msg").text('');
            // If Fields
            var scrollTop = '';

            // If Array
            if (this.checkArray(subArray)) {
                for (var key in subArray) {
                    let fieldsArr = subArray[key].fields;
                    console.log('fieldsArr: ', fieldsArr)
                    for (var key2 in fieldsArr) {
                        console.log('inside fieldsArr')
                        let data = fieldsArr[key2];
                        if (this.checkVisibility(data.visibility) && this.checkVisibility(subArray[key].visibility)) {
                            let errorTxt = this.getDescriptionTextArray(data.description);
                            if ((data.mandatory == '1') && (data.type == 'checkbox' && data.input == false)) {
                                this.errorCounter++;
                                if (scrollTop == '') {
                                    scrollTop = data.id;
                                }
                                $("#error_" + data.id).text('This field is required');
                                console.log('invalid 1  mandatory:', data);
                            }
                            else if (data.type == "multi-select" && (data.mandatory == '1') && (data.input.length == 0)) {
                                this.errorCounter++;
                                if (scrollTop == '') {
                                    scrollTop = data.id;
                                }
                                $("#error_" + data.id).text('This field is required');
                            }
                            else if ((data.mandatory == '1') && (!data.input && data.input != '0')) {
                                this.errorCounter++;
                                if (scrollTop == '') {
                                    scrollTop = data.id;
                                }
                                $("#error_" + data.id).text('This field is required');
                                //console.log('invalid 1 0000 mandatory:', data);
                            } else if (data.input && (data.pattern) && (this.checkPattern(data.input, data.pattern) == false)) {
                                this.errorCounter++;
                                if (scrollTop == '') {
                                    scrollTop = data.id;
                                }
                                $("#error_" + data.id).text(errorTxt[0]);
                                console.log('data.id: ', data.id);
                                console.log('rules 1: ', data.pattern);
                            } else if (data.input && (data.max) && data.type == 'number' && (data.input < data.min || data.input > data.max)) {
                                console.log('inside number: ', data);
                                this.errorCounter++;
                                if (scrollTop == '') {
                                    scrollTop = data.id;
                                }
                                $("#error_" + data.id).text('Value should be between ' + data.min + ' and ' + data.max);
                                console.log('rules number 1 Incorrect: ', data.validation, data);
                            } else if ((data.validation != null) && (data.input) && (this.checkValidation(data.validation, data.description) == false)) {
                                this.errorCounter++;
                                if (scrollTop == '') {
                                    scrollTop = data.id;
                                }
                                $("#error_" + data.id).text(errorTxt[1]);
                                console.log('rules 1 invalid: ', data.validation);
                            }

                        } else {
                            // setting blank, previously filled data
                            this.formInfo['fieldGroups'][sectionIndex][key]['fields'][key2]['input'] = "";
                        }
                    }
                }
            }

            // If Fields
            for (var key in subArray.fields) {
                let data = subArray.fields[key];

                if (this.checkVisibility(data.visibility)) {
                    let errorTxt = this.getDescriptionTextArray(data.description);
                    if ((data.mandatory == '1') && (data.type == 'checkbox' && data.input == false)) {
                        this.errorCounter++;
                        if (scrollTop == '') {
                            scrollTop = data.id;
                        }
                        $("#error_" + data.id).text('This field is required');
                        console.log('invalid 1  mandatory:', data);
                    } else if ((data.mandatory == '1') && (!data.input && data.input != '0')) {
                        this.errorCounter++;
                        if (scrollTop == '') {
                            scrollTop = data.id;
                        }
                        // console.log(scrollTop);
                        console.log('invalid fields: mandatory: dt', data);
                        $("#error_" + data.id).text('This field is required');
                    } else if (data.input && (data.pattern) && (this.checkPattern(data.input, data.pattern) == false)) {
                        this.errorCounter++;
                        if (scrollTop == '') {
                            scrollTop = data.id;
                        }
                        $("#error_" + data.id).text(errorTxt[0]);
                        console.log('data.id: ', data.id);
                        console.log('rules 1 Incorrect: ', data.pattern);
                    } else if (data.input && (data.max) && data.type == 'number' && (data.input < data.min || data.input > data.max)) {
                        console.log('inside number: f ', data);
                        this.errorCounter++;
                        if (scrollTop == '') {
                            scrollTop = data.id;
                        }
                        $("#error_" + data.id).text('Value should be between ' + data.min + ' and ' + data.max);
                        console.log('rules number Incorrect: ', data.validation);
                    } else if ((data.validation) && (data.input) && (this.checkValidation(data.validation, data.label) == false)) {
                        this.errorCounter++;
                        if (scrollTop == '') {
                            scrollTop = data.id;
                        }
                        console.log('invalid fields rules: ', data.validation);
                        $("#error_" + data.id).text(errorTxt[1]);
                    }

                } else {
                    // setting blank, previously filled data
                    this.formInfo['fieldGroups'][sectionIndex]['fields'][key]['input'] = "";
                }
            }

            // if (scrollTop != '') {
            //     var ele = document.getElementById(scrollTop);
            //     ele.scrollIntoView();
            //     ele.focus();
            //     ele.placeholder = ele.getAttribute("ph");
            // }

            // If FieldGroups
            for (var key in subArray.fieldGroups) {

                let fieldsArr = subArray.fieldGroups[key].fields;
                for (var key2 in fieldsArr) {
                    let data = fieldsArr[key2];
                    if (this.checkVisibility(data.visibility) && this.checkVisibility(subArray.fieldGroups[key].visibility)) {
                        let errorTxt = this.getDescriptionTextArray(data.description);
                        if ((data.mandatory == '1') && (data.type == 'checkbox' && data.input == false)) {
                            this.errorCounter++;
                            if (scrollTop == '') {
                                scrollTop = data.id;
                            }
                            $("#error_" + data.id).text('This field is required');
                            console.log('invalid 1  mandatory:', data);
                        }
                        else if (data.type == "multi-select" && (data.mandatory == '1') && (data.input.length == 0)) {
                            this.errorCounter++;
                            if (scrollTop == '') {
                                scrollTop = data.id;
                            }
                            $("#error_" + data.id).text('This field is required');
                        }
                        else if ((data.mandatory == '1') && (!data.input && data.input != '0')) {
                            this.errorCounter++;
                            if (scrollTop == '') {
                                scrollTop = data.id;
                            }
                            $("#error_" + data.id).text('This field is required');
                            //console.log('invalid 1 0000 mandatory:', data);
                        } else if (data.input && (data.pattern) && (this.checkPattern(data.input, data.pattern) == false)) {
                            this.errorCounter++;
                            if (scrollTop == '') {
                                scrollTop = data.id;
                            }
                            $("#error_" + data.id).text(errorTxt[0]);
                            console.log('data.id: ', data.id);
                            console.log('rules 1: ', data.pattern);
                        } else if (data.input && (data.max) && data.type == 'number' && (data.input < data.min || data.input > data.max)) {
                            console.log('inside number: ', data);
                            this.errorCounter++;
                            if (scrollTop == '') {
                                scrollTop = data.id;
                            }
                            $("#error_" + data.id).text('Value should be between ' + data.min + ' and ' + data.max);
                            console.log('rules number 1 Incorrect: ', data.validation, data);
                        } else if ((data.validation != null) && (data.input) && (this.checkValidation(data.validation, data.description) == false)) {
                            this.errorCounter++;
                            if (scrollTop == '') {
                                scrollTop = data.id;
                            }
                            $("#error_" + data.id).text(errorTxt[1]);
                            console.log('rules 1 invalid: ', data.validation);
                        }

                    } else {
                        // setting blank, previously filled data
                        this.formInfo['fieldGroups'][sectionIndex]['fieldGroups'][key]['fields'][key2]['input'] = "";
                    }
                }
            }

            if (scrollTop != '') {
                var ele = document.getElementById(scrollTop);
                ele.scrollIntoView();
                ele.focus();
                ele.placeholder = ele.getAttribute("ph");
            }

            console.log('this.errorCounter: ', this.errorCounter)
            if (this.errorCounter == '0') {

                this.submittedTab = sectionIndex;

                console.log('submitted data modified: ', this.formInfo);

                // Calling Save Proposal
                this.activeNextTab(sectionIndex);
            } else {
                //this.activeNextTab(sectionIndex);
            }

        },
        checkVisibility(value) {
            //console.log('check Visibility called: ', value);
            // default expression evalutiona added along with visibility
            if (value) {
                let obj = this.getFinalObject(value);
                try {
                    return eval(obj);
                }
                catch (err) {
                    console.log('error exp: ', value);
                }
            } else {
                return true;
            }

        },
        getDescriptionTextArray(str) {
            let tempArr = [];
            if (str) {
                var check = str.includes("#");
                if (check) {
                    tempArr = str.split("#");
                } else {
                    tempArr[0] = str;
                    tempArr[1] = str;
                }
            } else {
                tempArr[0] = "";
                tempArr[1] = "";
            }

            return tempArr;
        },
        getDescriptionText(str) {
            let descText = "";
            if (str) {
                var check = str.includes("#");
                if (check) {
                    let tempArr = str.split("#");
                    descText = tempArr[0];
                } else {
                    descText = str;
                }
            } else {
                descText = "";
            }
            return descText;
        },
        checkValidation(value, label = "") {
            //console.log('check Validation called: ', value);
            if (value) {
                let obj = this.getFinalObject(value);
                try {
                    return eval(obj);
                }
                catch (err) {
                    console.log('error exp 2: ', value);
                    return true;
                }
            } else {
                //return false;
            }
        },
        getFinalObject(tempResponse) {
            //console.log('tempResponse: ', tempResponse)
            var tempString = JSON.stringify(tempResponse);
            var updatedString = tempString.replace(/'input' in formInfo\[/g, "formInfo[");
            var updatedString2 = updatedString.replace(/formInfo\[/g, "this.formInfo[");
            //var updatedString3 = updatedString2.replace(/this.this./g, "this.");
            //console.log('final String: ', updatedString3);
            return JSON.parse(updatedString2);
        },
        activeNextTab(currentTab) {
            console.log('active next tab called', this.tabsArr);
            let ckk = this.checkVisibility(this.formInfo['fieldGroups'][currentTab]['visibility']);
            if (ckk == true) {
                // Setting Up Filled Tab on localstorage
                /* localStorage.setItem("filledDataTab", JSON.stringify(currentTab));
                sessionStorage.setItem("filledDataTab", JSON.stringify(currentTab));

                localStorage.setItem("filledData", JSON.stringify(this.formInfo));
                sessionStorage.setItem("filledData", JSON.stringify(this.formInfo)); */
            }

            var tabIndex = this.tabsArr.indexOf(currentTab);
            let nextTab;
            //console.log('tab index: ', tabIndex)
            if (tabIndex < this.tabsArr.length - 1) {
                nextTab = this.tabsArr[tabIndex + 1];
                //console.log('next tab: ', nextTab);
            } else {
                // If conntrol is on last tab
                console.log('inside: conntrol is on last tab');
                //this.$router.push('/proposaldetailscheck');
            }
            if (nextTab) {
                this.activeTab(nextTab);
            }
        },
        activeTab(tabToActive) {
            console.log('ativeTab Called', tabToActive)

            // Scroll Top
            //this.scrollToTop();

            // console.log('vb logic: ', this.formInfo['fieldGroups'][tabToActive]['visibility']);
            // let ckk = this.checkVisibility(this.formInfo['fieldGroups'][tabToActive]['visibility']);
            // if (ckk == true) {
                //console.log('this.tabsArr', this.tabsArr)
                this.currentTab = tabToActive;
                sessionStorage.setItem("currentTab", JSON.stringify(this.currentTab));

                for (var i = 0; i < this.tabsArr.length; i++) {
                    var tab = this.tabsArr[i];
                    if ($("#" + tab + '-tab').hasClass("active")) {
                        console.log('inside tab active')
                        $("#" + tab + '-tab').removeClass("active");
                        $("#" + tab + '-tab').attr("aria-selected", "false");
                        //$("#step" + tab + '-tab').addClass("disabled");
                        $("#" + tab).removeClass("show active");
                    }
                }
                if ($("#" + tabToActive + '-tab').hasClass("disabled")) {
                    $("#" + tabToActive + '-tab').removeClass("disabled");
                }
                $("#" + tabToActive + '-tab').addClass('active');
                $("#" + tabToActive).addClass('show active');
                $("#" + tabToActive + '-tab').attr("aria-selected", "true");
            // } else {
            //     this.activeNextTab(tabToActive);
            // }

        },
        goBack() {
            this.currentTab = JSON.parse(sessionStorage.getItem("currentTab"));
            console.log('current tab: ', this.currentTab)
            var tabIndex = this.tabsArr.indexOf(this.currentTab);
            this.activePrevTab(this.currentTab);
        },
        activePrevTab(tabToActive) {
            console.log('active prev tab called', this.tabsArr);
            var tabIndex = this.tabsArr.indexOf(tabToActive);
            if (tabIndex > 0) {
                console.log('inside prev tab true')
                let prevTab = this.tabsArr[tabIndex - 1];
                //console.log('uuu: ', this.formInfo['fieldGroups'][prevTab]['visibility']);
                let ckk = this.checkVisibility(this.formInfo['fieldGroups'][prevTab]['visibility']);
                if (ckk == true) {
                    this.activeTab(prevTab);
                } else {
                    this.activePrevTab(prevTab);
                }
            } else {
                this.$router.push('/checkout');
            }
        },
        convertInLakh(amt) {
            if (amt < 10000000) {
                return amt / 100000 + "Lac";
            } else {
                return amt / 10000000 + "Cr.";
            }
        },
        getSelectedPremium(pTerm) {
            let itemIndex = this.selectedPlan.productDetails.premiumForEachPolicyTerm.findIndex(item => item.policyTerm == pTerm);
            if (itemIndex > -1) {
                return this.selectedPlan.productDetails.premiumForEachPolicyTerm[itemIndex];
            }
        },
        getSelectedPolicyIndex(pTerm) {
            let itemIndex = this.selectedPlan.productDetails.premiumForEachPolicyTerm.findIndex(item => item.policyTerm == pTerm);
            if (itemIndex > -1) {
                return itemIndex;
            }
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
