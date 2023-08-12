
import { createRouter, createWebHashHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";
import MultiQuotesView from "../views/MultiQuotesView.vue";
import ComparePlanView from "../views/ComparePlanView.vue";
import PlanDetailsView from "../views/PlanDetailsView.vue";
import ProposerDetailsView from "../views/ProposerDetailsView.vue";
import ProposerDetailsCheckView from "../views/ProposerDetailsCheckView.vue";
import ProposerDetailsCheckDiyView from "../views/ProposerDetailsCheckDiyView.vue";
import AddonRiderView from "../views/AddonRiderView.vue";
import PaymentView from "../views/paymentView.vue";
import Dashboard from "../views/dashboard.vue";
import loadingPage from "../views/loader.vue";
import GateCriteria from '../views/GateCriteria.vue';
import UploadDoc from '../views/UploadDocView.vue';
import thankYoumail from'../views/thankyoumail.vue';
// import alertpage from '../views/alertpage.vue'
import alertdiy from '../views/alert-diy.vue';
import networkalert from '../views/networkalert.vue';
import thankYouReject from'../views/thankyourejectdiy.vue';
import thankYouPage from'../views/thankyoupage.vue';
import paymentFailurePage from'../views/paymentfailurepage.vue';
import paymentSuccess from'../views/paymentsuccess.vue';
import CkycView from "../views/CkycView.vue";




const routes = [
  {
    path: "/",
    name: "landingpage",
    component: LandingView,
  },
  {
    path: '/multi-quote',
    name: 'multiquotes',
    component: MultiQuotesView
  },
  {
    path: '/compare-plan',
    name: 'Compareplan',
    component: ComparePlanView
  },
  {
    path: '/plan-details',
    name: 'plandetails',
    component: PlanDetailsView
  },
  {
    path: '/proposer-details',
    name: 'proposerDetails',
    component: ProposerDetailsView
  },
  {
    path: '/proposer-details-check',
    name: 'proposerDetailsCheck',
    component: ProposerDetailsCheckView
  },
  {
    path: '/proposal-details-check-diy',
    name: 'proposerDetailsCheckDiy',
    component: ProposerDetailsCheckDiyView
  },
  {
    path: '/addon-rider',
    name: 'addonrider',
    component: AddonRiderView
  },
  {
    path: '/payment',
    name: 'paymentPage',
    component: PaymentView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/loading',
    name: 'loadingPage',
    component: loadingPage
  },
  {
    path: '/gate-criteria',
    name: 'GateCriteria',
    component: GateCriteria
  },
  {
    path: '/upload-doc',
    name: 'UploadDoc',
    component: UploadDoc
  },
  {
    path: '/thankyoumail',
    name: 'thankYouMail',
    component: thankYoumail
  },
  {
    path: '/thankyou',
    name: 'thankyoupage',
    component: thankYouPage
  },
  {
    path: '/paymentfailure',
    name: 'paymentfailurepage',
    component: paymentFailurePage
  },
  // {
  //   path: '/alert',
  //   name: 'alertpage',
  //   component: alertpage
  // },
  {
    path: '/networkalert',
    name: 'networkalert',
    component: networkalert
  },
  {
    path: '/alert-diy',
    name: 'alertdiy',
    component: alertdiy
  },
  {
    path: '/thankYou',
    name: 'thankYouReject',
    component: thankYouReject
  },
  {
    path: '/paymentsuccess',
    name: 'paymentsuccess',
    component: paymentSuccess
  },
  {
    path: '/ckyc',
    name: 'CkycView',
    component: CkycView
  },
];

/* const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
}); */

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
})

export default router;
