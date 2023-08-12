export const getRequestData = (api, data) => {
  
  //console.log('getRequestData', api, 'URL: ', process.env.VUE_APP_URL)
  return {
    body: data,
    url: apis[api]["url"],
    baseURL:apis[api]["baseURL"] == undefined ? process.env.VUE_APP_URL : process.env["VUE_APP_URL_" + apis[api]["baseURL"]],
    source:apis[api]["baseURL"] == undefined ? "DEFAULT": apis[api]["baseURL"],
  };
};

const apis = {
  downloadPolicy:{
    url: "/v1/health/downloadReciept",
    baseURL: "RMD"
  },
  getComparePlan: {
    url: "/v1/health/compareApi",
    baseURL: "RMD"
  },
  getCkyc: {
    url: "/v1/health/ckyc",
    baseURL: "RMD"
  },
  paymentApi: {
    url: "/v1/lifeterm/paymentUrlApi",
    baseURL: "RMD"
  },
  getPincodeInfo: {
    url: "/v1/lifeterm/zipcode?zipcode=param1",
    baseURL: "RMD"
  },
  getConfigData: {
    url: "/v1/health/configuration?distributorId=param1",
    baseURL: "RMD"
  },
  getQuotation: {
    url: "/v1/health/quotationApi",
    baseURL: "RMD"
  },
  getPolicies: {
    url: "/v1/health/getLifeTermApi?requestId=param1",
    baseURL: "RMD"
  },
  getProductUi: {
    url: "/v1/health/getProductUiDataApi?manufacturerId=param1&productId=param2&planId=param3",
    baseURL: "RMD"
  },
  saveQuote: {
    url: "/v1/quote",
    baseURL: "RMD"
  },
  saveQuoteResponse: {
    url: "/v1/quoteResponse",
    baseURL: "RMD"
  },
  generateToken:{
    url: "/v1/token",
    baseURL: "RMD"
  },  
  getRmDetails: {
    url: "/v1/getRM_Details",
    baseURL: "RMD"
  },
  // Dashboard Related
  getDashboardDataFilter:{
    url: "/v1/getProposalByRmFilter?pageSize=param1&pageNumber=param2&columnName=param3&filterText=param4&startDate=param5&endDate=param6",
    baseURL: "RMD"
  },
  getProposalDetails: {         
    url: "/v1/ProposalByProposalUiId?proposalUiId=param1",
    baseURL: "RMD"
  },
  getSPDetailsOneSB: {
    url: "/v1/spdetails?manufacturerId=param1",
    baseURL: "RMD"
  },
  getQuoteDetails: {         
    url: "/v1/QuoteDetails?UiQuoteId=param1",
    baseURL: "RMD"
  },

  saveLogData: {
    url: "/v1/logData",
    baseURL: "RMD"
  },
  getLogData: {
    url: "/v1/logdata?mobileNumber=param1&DOB=param2",
    baseURL: "RMD"
  },
 
  triggerPayment: {
    url: "/v1/lifeterm/hdfcPayment/param1",
    baseURL: "RMD"
  },
  sendMail: {
    url: "/v1/sendMail",
    baseURL: "RMD"
  },

  getQuoteResponseDetails: {         
    url: "/v1/QuoteResponse?UiQuoteId=param1",
    baseURL: "RMD"
  },
  ProposalStatus: {
    url: "/v1/ProposalStatus?proposal_ui_id=param1&status_id=param2",
    baseURL: "RMD"
  },
  savePaymentData:{
    url: "/v1/savePaymentData",
    baseURL: "RMD"
  },
  saveProposal: {
    url: "/v1/proposalData",
    baseURL: "RMD"
  },
  saveResumeURL:{
    url: "/v1/manufacturerResumeURL",
    baseURL: "RMD"
  },
  getResumeURL: {
    url: "/v1/manufacturerResumeURL?proposal_ui_id=param1",
    baseURL: "RMD"
  },
  getPendingUploadDocRequiremnts:{
    url: "/v1/pendingDocumentUploadList?id=param1",
    baseURL: "RMD"
  },

  quotationApiGet: {
    url: "/v1/lifeterm/quotationApi",
    baseURL: "RMD"
  },
  saveApplicationNumber: {
    url: "/v1/saveProposalManufacturerId",
    baseURL: "RMD"
  },
  getQuotation: {
    url: "/v1/health/quotationApi",
    baseURL: "RMD"
  },
  getPolicies: {
    url: "/v1/health/getLifeTermApi?requestId=param1",
    baseURL: "RMD"
  },
  saveQuote: {
    url: "/v1/quote",
    baseURL: "RMD"
  },
  saveQuoteResponse: {
    url: "/v1/quoteResponse",
    baseURL: "RMD"
  },
  getToken: {
    url: "/v1/getTokenProxy",
    baseURL: "RMD"
  },
  getSPDetails: {
    url: "/v1/SPDetailsProxy",
    baseURL: "RMD"
  },
  getSPDetailsOneSB: {
    url: "/v1/spdetails?rmCode=param1&manufacturerId=param2",
    baseURL: "RMD"
  },
  
  // getProductInfo: {
  //   url: "/quote/getProductUIData?manufacturerId=param1&productId=param2",
  //   baseURL: "TEST"
  // },
  getPincodeInfo: {
    url: "/v1/lifeterm/zipcode?zipcode=param1",
    baseURL: "RMD"
  },
  getIFSCInfo: {
    url: "/v1/lifeterm/ifsc?ifscCode=param1",
    baseURL: "RMD"
  },
  triggerPayment: {
    url: "/v1/lifeterm/hdfcPayment/param1",
    baseURL: "RMD"
  },
  getProposal: {
    url: "/v1/health/proposalApi?productId=param1&manufacturerId=param2&version=param3",
    baseURL: "PROPOSAL"
  },
  validateProposal:{
    url: "/v1/lifeterm/proposalValidationProxy",
    baseURL: "RMD"
  },
  // submitProposal: {
  //   url: "proposal?version=1",
  //   baseURL: "PROPOSAL"
  // },
  // getProposalPoll: {
  //   url: "proposal/poll?productId=param1&manufacturerId=param2&requestId=param3",
  //   baseURL: "PROPOSAL"
  // },
  // getReqId: {
  //   url: "/quote"
  // },
  // getLifeTerm: {
  //   url: "/quote/param1"
  // },
  gateCriteria: {
    url: "/v1/lifeterm/gateCriteria?productGroupId=LifeTerm&productId=param1&manufacturerId=param2&version=param3",
    baseURL:"RMD"
  },
  getDocRequirements: {
    url: "/v1/lifeterm/gateDocRequirements",
    baseURL: "RMD"
  },
  sendMail: {
    url: "/v1/sendMail",
    baseURL: "RMD"
  },
  ProposalStatus: {
    url: "/v1/ProposalStatus?proposal_ui_id=param1&status_id=param2",
    baseURL: "RMD"
  },
  getProposalStatus: {
    url: "/v1/proposalStatusByProposalUiId?proposal_ui_id=param1",
    baseURL: "RMD"
  },
  getRmDetails: {
    url: "/v1/getRM_Details",
    baseURL: "RMD"
  },
  getRmDetailsDIY: {
    url: "/v1/getRM_Details_DIY?id=param1",
    baseURL: "RMD"
  },
  getDashboardData:{
    url: "/v1/getProposalByRm?rmCode=param1&pageSize=param2&pageNumber=param3",
    baseURL: "RMD"
  },
  /*getDashboardDataFilter:{
    url: "/v1/getProposalByRmFilter?rmCode=param1&pageSize=param2&pageNumber=param3&columnName=param4&filterText=param5&startDate=param6&endDate=param7",
    baseURL: "RMD"
  },*/
  sendEmailandSMS: {
    url: "/v1/lifeterm/communication",
    baseURL: "RMD"
  },
  getRequirements:{
    url: "/v1/getRequirementsByProposal?proposalId=param1",
    baseURL: "RMD"
  },
  getPaymentDetails:{
    url: "/v1/getPaymentDetail?transactionId=param1",
    baseURL: "RMD"
  },
  getPaymentDetailsByProposalUiId:{
    url: "/v1/getPaymentDetailByProposalUiId?proposal_ui_id=param1",
    baseURL: "RMD"
  },
  // sendSMS: {
  //   url: "/sendsms?username=param1&password=param2&to=param3&from=param4&udh=param5&text=param6",
  //   baseURL: "SMS"
  // },
  // getOTP: {
  //   url: "/sendotp",
  //   baseURL: "PROPOSAL"
  // },
  // submitOTP: {
  //   url: "/valotp",
  //   baseURL: "PROPOSAL"
  // },
  uploadDoc: {
    url: "/v1/lifeterm/uploadDoc",
    baseURL: "RMD"
  },
  getWhatsappDetails: {
    url: "/v1/consentMaster",
    baseURL: "RMD"
  },
  saveProposalResponse: {
    url: "/v1/proposalResponse",
    baseURL: "RMD"
  },
  // getPaymentURL: {
  //   url: "/v1/payment/url",
  //   baseURL: "PAYMENT"
  // },
  quotationApiGet: {
    url: "/v1/lifeterm/quotationApi",
    baseURL: "RMD"
  },
  
  proposalApiGet: {
    url: "/v1/proposalApi",
    baseURL: "RMD"
  },
  sendOtpApi: {
    url: "/v1/lifeterm/sendOtpApi",
    baseURL: "RMD"
  },
  valOtpApi: {
    url: "/v1/lifeterm/valOtpApi",
    baseURL: "RMD"
  },
  proposalVersionApi: {
    url: "/v1/health/proposalVersionApi",
    baseURL: "RMD"
  },
  proposalPollApi: {
    url: "/v1/lifeterm/proposalPollApi?productId=param1&manufacturerId=param2&requestId=param3",
    baseURL: "RMD"
  },
  getProductUiDataApi: {
    url: "/v1/lifeterm/getProductUiDataApi?manufacturerId=param1&productId=param2",
    baseURL: "RMD"
  },
  paymentUrlApi: {
    url: "/v1/lifeterm/paymentUrlApi",
    baseURL: "RMD"
  },
  getLifeTermApi: {
    url: "/v1/lifeterm/getLifeTermApi?requestId=param1",
    baseURL: "RMD"
  },
  downloadReceipt:{
    url: "/v1/lifeterm/downloadReciept",
    baseURL: "RMD"
  },
  uploadDocRequiremnts:{
    url: "/v1/documentUpload",
    baseURL: "RMD"
  },
  getUploadDocRequiremnts:{
    url: "/v1/documentUpload?id=param1",
    baseURL: "RMD"
  },
  getPendingUploadDocRequiremnts:{
    url: "/v1/pendingDocumentUploadList?id=param1",
    baseURL: "RMD"
  },
  uploadDocStatus:{
    url: "/v1/documentUploadStatus?applicationNumber=param1&category=param2&status=param3",
    baseURL: "RMD"
  // },
  // redirectpage:{
  //   url: "/v1/1sb/redirect",
  //   baseURL: "RMD"
  },
  generateToken:{
    url: "/v1/token",
    baseURL: "RMD"
  },  
  refreshToken:{
    url: "/v1/refresh/token",
    baseURL: "RMD"
  }
};