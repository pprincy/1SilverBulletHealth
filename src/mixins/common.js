const Constants = {
  LANDING_PAGE_CONFIG: {"requirementPlan":["Comprehensive Plans","Top Up Plans","All Plans"],"genderList":["Male","Female"],"memberOptions":["Self","Spouse","Son","Daughter","Father","Mother","Father-in-law","Mother-in-law"], "singleSelectMember":["Self","Father","Mother"] ,"preExistingDiseaseOptions":[{"sectionName":"Existing illness","options":{"Blood Pressure":false,"Asthama":false,"Diabetes":false,"Thyroid":false,"Heart Conditions":false,"Cancer":false}},{"sectionName":"Surgical procedure","options":{"Appendix":false,"Gall bladder":false,"C-section":false}}],"incomeBrackets":["2.5 L","2.5 L - 5 L","5 L - 10 L","> 10 L"]},
  CONSUMER: {"consumerId":"BCIBL", "distributorLogo": "https://health-ui-test.dmhzwuxjl6kln.amplifyapp.com/img/logo.13e17a4e.png", "contactEmail": "Contact@bajajcapital.com", "infoEmail": "info@bajajcapitalinsurance.com", "contactNumber": "1800-313-123123"},
  ADDONS_MASTER: {"10002":[{"optionSelected":"copay","optionName":"Co-payment","optionDesc":"Copayment of 10% or 20% can be chosen","addOnSumAssured":null,"inbuiltFeature":0,"premiumIncludedFlag":1,"premiumDetails":[],"type":"single-select","default":"10","values":[{"text":"10%","value":"10"},{"text":"20%","value":"20"}],"min":null,"max":null,"multipleOf":null,"temp_price":"Add to get price"},{"optionSelected":"reload","optionName":"Sum Insured Rebound","optionDesc":"Amount equivalent to the Claim amount paid under Basic Sum Insured will be added to the available Sum Insured.","addOnSumAssured":null,"inbuiltFeature":0,"premiumIncludedFlag":1,"premiumDetails":[],"type":"none","default":"1","values":[],"min":null,"max":null,"multipleOf":null,"temp_price":"Add to get price"},{"optionSelected":"supNCB","optionName":"Extended Cumulative Bonus","optionDesc":"Provides option to enhance cumulative bonus cover, however the same once opted for, cannot be opted out at subsequent Renewal.","addOnSumAssured":null,"inbuiltFeature":0,"premiumIncludedFlag":1,"premiumDetails":[],"type":"none","default":"1","values":[],"min":null,"max":null,"multipleOf":null,"temp_price":"Add to get price"}],"10003":[{"optionSelected":"copay","optionName":"Co-payment","optionDesc":"Copayment of 10% or 20% can be chosen","addOnSumAssured":null,"inbuiltFeature":0,"premiumIncludedFlag":1,"premiumDetails":[],"type":"single-select","default":"10","values":[{"text":"10%","value":"10"},{"text":"20%","value":"20"}],"min":null,"max":null,"multipleOf":null,"temp_price":"Add to get price"},{"optionSelected":"reload","optionName":"Sum Insured Rebound","optionDesc":"Amount equivalent to the Claim amount paid under Basic Sum Insured will be added to the available Sum Insured.","addOnSumAssured":null,"inbuiltFeature":0,"premiumIncludedFlag":1,"premiumDetails":[],"type":"none","default":"1","values":[],"min":null,"max":null,"multipleOf":null,"temp_price":"Add to get price"},{"optionSelected":"supNCB","optionName":"Extended Cumulative Bonus","optionDesc":"Provides option to enhance cumulative bonus cover, however the same once opted for, cannot be opted out at subsequent Renewal.","addOnSumAssured":null,"inbuiltFeature":0,"premiumIncludedFlag":1,"premiumDetails":[],"type":"none","default":"1","values":[],"min":null,"max":null,"multipleOf":null,"temp_price":"Add to get price"}],"10004":[{"optionSelected":"copay","optionName":"Co-payment","optionDesc":"Copayment of 10% or 20% can be chosen","addOnSumAssured":null,"inbuiltFeature":0,"premiumIncludedFlag":1,"premiumDetails":[],"type":"single-select","default":"10","values":[{"text":"10%","value":"10"},{"text":"20%","value":"20"}],"min":null,"max":null,"multipleOf":null,"temp_price":"Add to get price"},{"optionSelected":"reload","optionName":"Sum Insured Rebound","optionDesc":"Amount equivalent to the Claim amount paid under Basic Sum Insured will be added to the available Sum Insured.","addOnSumAssured":null,"inbuiltFeature":0,"premiumIncludedFlag":1,"premiumDetails":[],"type":"none","default":"1","values":[],"min":null,"max":null,"multipleOf":null,"temp_price":"Add to get price"},{"optionSelected":"supNCB","optionName":"Extended Cumulative Bonus","optionDesc":"Provides option to enhance cumulative bonus cover, however the same once opted for, cannot be opted out at subsequent Renewal.","addOnSumAssured":null,"inbuiltFeature":0,"premiumIncludedFlag":1,"premiumDetails":[],"type":"none","default":"1","values":[],"min":null,"max":null,"multipleOf":null,"temp_price":"Add to get price"}]},
  AGE:{
    "Self": ["18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99"],
    "Spouse": ["18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99"],
    "Father": ["36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99"],
    "Mother": ["36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99"],
    "Father-in-law": ["36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99"],
    "Mother-in-law": ["36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99"],
    "Son":["0.92","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
    "Daughter" :["0.92","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
   
  },
  //LAZY_LOADING:{"inerval":"5000"},
  //POLICY_COVER_AMOUNT:[{"text":"500000","value":"500000"},{"text":"1000000","value":"1000000"},{"text":"1500000","value":"1500000"},{"text":"2000000","value":"2000000"},{"text":"2500000","value":"2500000"},{"text":"3000000","value":"3000000"},{"text":"3500000","value":"3500000"},{"text":"4000000","value":"4000000"}],
  //POLICY_BENEFIT:[{"benefit_name":"Recovery Benefit","option_code":"recvBen","option_description":"Recovery Benefit Available"},{"benefit_name":"Hospital Cash Benefit","option_code":"hcb","option_description":"Hospital Cash Benefit Available"},{"benefit_name":"Super NCB","option_code":"supNCB","option_description":"Extended/Super NCB available"},{"benefit_name":"International Emergency Assistance","option_code":"intEmerg","option_description":"International Emergency Assistance Available"},{"benefit_name":"Maternity Cover","option_code":"matExp","option_description":"Maternity Cover availability"},{"benefit_name":"OPD Expenses","option_code":"opdExp","option_description":"OPD Expenses Covered"},{"benefit_name":"Unlimited Reload of SI","option_code":"ulReload","option_description":"Unlimited Reload"},{"benefit_name":"Zero Copayment","option_code":"copay","option_description":"No Copayment"},{"benefit_name":"Copayment/Deductible","option_code":"deduc","option_description":"Amount deductible for claim or %age of copayment"}],
  //INSURER_LIST:[{"manufacturer_name":"HDFC Ergo","manufacturer_id":"HDFCERGO"},{"manufacturer_name":"Niva Bupa","manufacturer_id":"NBHI"},{"manufacturer_name":"Aditya Birla","manufacturer_id":"ABHI"}],
  //LOGOUT_URL_REDIRECTION: ["https://www.bajajcapitalinsurance.com/"],
  //DISTRIBUTER:{"distributerID":"BCIBL","distributorName":"BCIBL", "distributorLogo": "https://insurance-manufacturer.s3.ap-south-1.amazonaws.com/logos/BCIBL+logo.png", "contactEmail": "Contact@bajajcapital.com", "infoEmail": "info@bajajcapitalinsurance.com", "contactNumber": "1800-313-123123"},
  //FEATURED_PLAN_ORDER: [{"plan_id":"10004","order":"1"},{"plan_id":"10005","order":"2"},{"plan_id":"10007","order":"3"},{"plan_id":"10006","order":"4"},{"plan_id":"10003","order":"5"},{"plan_id":"10008","order":"6"},{"plan_id":"10002","order":"7"}],
  //PAY_SETTINGS: {"HDFCERGO":"PRE", "NBHI": "PRE", "ABHI":"PRE"},
  //GATE_CRITERIA_SETTINGS: {"HDFCERGO":"NO", "NBHI": "NO", "ABHI":"NO"},
  //VIEW_MORE_COUNTER: 4,
  
};
Object.freeze(Constants);
export function getConsumer(){
  return Constants.CONSUMER;
}
export function getLandingPageConfig(){
  return Constants.LANDING_PAGE_CONFIG;
}
export function getAddOnsList() {
  return Constants.ADDONS_MASTER;
}
export function getage() {
  return Constants.AGE;
}
/*
export function getLazyLoadingConfig(){
  return Constants.LAZY_LOADING;
}
export function getPolicyCoverAmt(){
  return Constants.POLICY_COVER_AMOUNT;
}
export function getPolicyBenefitList(){
  return Constants.POLICY_BENEFIT;
}
export function getInsurerList(){
  return Constants.INSURER_LIST;
}
export function getLogoutURL(){
  return Constants.LOGOUT_URL_REDIRECTION;
}
export function getDistributer(){
  return Constants.DISTRIBUTER;
}
export function getFeaturedPlanOrder() {
  return Constants.FEATURED_PLAN_ORDER;
}
export function getPaySettings() {
  return Constants.PAY_SETTINGS;
}
export function getGateCriteriaSettings() {
  return Constants.GATE_CRITERIA_SETTINGS;
}*/