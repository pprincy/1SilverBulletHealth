<template>

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

                <div class="d-flex align-items-center">
                  <h5 class="me-2">choose one option</h5>
                  <div class="radio-btn-grp">
                    <div class="radio-btn-wrap">
                      <input type="radio" id="radio-1" checked name="booleanRadio">
                      <label for="radio-1" class="radio-label">Yes</label>
                    </div>
                    <div class="radio-btn-wrap">
                      <input type="radio" id="radio-2" name="booleanRadio">
                      <label for="radio-2" class="radio-label">No</label>
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
                  <button type="button" class="btn btn-warning rounded-pill text-white mx-2">
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
                  <button type="button" class="btn btn-outline-secondary rounded-pill mx-2">
                    <em class="bi bi-chevron-left me-2"></em>
                    <span>Previous</span>
                  </button>
                  <button type="button" class="btn btn-warning rounded-pill text-white mx-2">
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
                <button type="button" class="btn btn-outline-secondary rounded-pill mx-2">
                  <em class="bi bi-chevron-left me-2"></em>
                  <span>Previous</span>
                </button>
                <button type="button" class="btn btn-warning rounded-pill text-white mx-2">
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
                  <button type="button" class="btn btn-outline-secondary rounded-pill mx-2">
                    <em class="bi bi-chevron-left me-2"></em>
                    <span>Previous</span>
                  </button>
                  <button type="button" class="btn btn-warning rounded-pill text-white mx-2">
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
                  <button type="button" class="btn btn-outline-secondary rounded-pill mx-2">
                    <em class="bi bi-chevron-left me-2"></em>
                    <span>Previous</span>
                  </button>
                  <button type="button" class="btn btn-warning rounded-pill text-white mx-2">
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

                  <button type="button" class="btn btn-outline-secondary rounded-pill mx-2">

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

</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref } from 'vue';
export default {
  name: "wizard-comp",
  components: {
    Datepicker
  },
  setup() {
    const date = ref(new Date());
    const date1 = ref(new Date());
    const date2 = ref(new Date());
    const date3 = ref(new Date());
    const date4 = ref(new Date());
    const date5 = ref(new Date());
    const date6 = ref(new Date());
    const date7 = ref(new Date());
    const date8 = ref(new Date());

    return {
      date,
      date1:"04/24/1990",
      date2:"04/24/1990",
      date3:"07/18/1992",
      date4:"09/19/2019",
      date5:"03/28/2000",
      date6:"08/14/2001",
      date7:"05/22/2023",
      date8:"05/21/2023",
      
    }
  },
  data() {
    return {
      isShow: true,
    };
  },
  mounted() {

  },
  methods: {

  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
