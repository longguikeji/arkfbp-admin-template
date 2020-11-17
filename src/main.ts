import Vue, { DirectiveOptions } from "vue";

import "normalize.css";
import ElementUI from "element-ui";
import SvgIcon from "vue-svgicon";
import VueCropper from "vue-cropper";
import "@/styles/element-variables.scss";
import "@/styles/index.scss";

import App from "@/App.vue";
import store from "@/store";
import { AppModule } from "@/store/modules/app";
import router from "@/router";
import i18n from "@/lang";
import "@/icons/components";
// import "@/permission";
import "@/utils/error-log";
import "@/pwa/register-service-worker";
import * as directives from "@/directives";
import * as filters from "@/filters";
import VueAMap from 'vue-amap';
import TablePage from '@/admin/TablePage/index.vue'

Vue.use(ElementUI, {
  size: AppModule.size, // Set element-ui default size
  i18n: (key: string, value: string) => i18n.t(key, value)
});
Vue.use(VueCropper);
Vue.use(SvgIcon, {
  tagName: "svg-icon",
  defaultWidth: "1em",
  defaultHeight: "1em"
});

// Register global directives
Object.keys(directives).forEach(key => {
  Vue.directive(key, (directives as { [key: string]: DirectiveOptions })[key]);
});

// Register global filter functions
Object.keys(filters).forEach(key => {
  Vue.filter(key, (filters as { [key: string]: Function })[key]);
});

Vue.config.productionTip = false;

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'fcc7e39778f5c5f773428cf03113c38b',
  plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4',
});

Vue.component('TablePage', TablePage)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
