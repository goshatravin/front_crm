import Vue from 'vue';
import Axios from 'axios';
import vSelect from 'vue-select';
import Vuelidate from 'vuelidate';
import IdleVue from 'idle-vue';
import Konami from 'konami';
import store from './store';
import router from './router';
import App from './App.vue';
import VueTour from 'vue-tour'
import VueClipboard from 'vue-clipboard2'


require('vue-tour/dist/vue-tour.css')
Vue.use(VueClipboard)
Vue.use(VueTour)
Vue.use(Konami);
const eventsHub = new Vue();
Vue.use(IdleVue, {
    eventEmitter: eventsHub,
    idleTime: 600000,
});
Vue.use(Vuelidate);
Vue.prototype.$http = Axios;
Vue.config.productionTip = false;
// Vue.use(VueParticles)
new Vue({
  router,
  store,
  Axios,
    /**
     * Перечисление событий emit 
     */
    data: {
        EVENT_LIST: {
            HITS_BASIC: 'HITS_BASIC', // Базовые подсказки
            HITS_SITUATION: 'HITS_SITUATION', // Подсказки по ситуациям
            PROVIDER_CHOOPSE: 'PROVIDER_CHOOPSE', // Загрузка подобранных провайдеров
            SET_ADDRESS: 'SET_ADDRESS', // установка местоположения ЗЛ для карта
            SET_SELECTED_PROVIDER: 'SET_SELECTED_PROVIDER', // Сохраняем выбранного провайдера 
            LOAD_BORDERO: 'LOAD_BORDERO', // Поиск по бордеро
            SET_BORDERO_TO_SHADOW_DOM: 'SET_BORDERO_TO_SHADOW_DOM', // Ввод данных через бордеро
            SET_FILES: 'SET_FILES', // Вывод файлов по документам 
            MED_QUESTIONS: 'MED_QUESTIONS', // вывод дополнительных медицинских вопросов 
            MED_SET_QUESTIONS_ANSWER: 'MED_SET_QUESTIONS_ANSWER', // Вывод выбранных медицинских вопросов
            CLOSE_OPEN_FILES: 'CLOSE_OPEN_FILES', // Закрытие формы с мед вопрсоами 

        },
    },
  watch: {
    $route(route) {
      console.log(route.name);
    },
  },
  render: h => h(App),
}).$mount('#app');
