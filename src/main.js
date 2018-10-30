import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faCheck, faCircle  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
library.add(faTrash, faCheck, faCircle);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>',
});
