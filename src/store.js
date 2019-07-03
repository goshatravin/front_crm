import Vue from 'vue'; // vue.js 
import Vuex from 'vuex'; // vuex для хранения данных
import axios from 'axios'; // доступ к api 
import jwtDecode from 'jwt-decode'; // декодирование токена
import createPersistedState from 'vuex-persistedstate'; // сохранения состояния переменных (localStorage)

Vue.use(Vuex);

export default new Vuex.Store({
    /**
     * Vuex Хранилище
     *
     * @param {String} status  Статус состояния аутентификации пользователя
     * @param {Array} token - Токен пользователя
     * @param {Array} statusOptions - Статус пользователя
     * @param {String} selected - Выбранное состояние пользователя (на месте, на обеде, перерыв)
     * @param {Boolean} dinerBlockpin - Вызов экрана блокировки при смене статуса
     * @param {String} name - ////
     * @param {Array} a - ////
     * @param {Array} autouse - ////
     * @param {String} apiServer - макрос для адресса сервера
     * @param {String} pin - пин код пользователя 
     * @param {Boolean} isActive - статус пользователя когда он на месте (Присутствую)
     * @param {Boolean} isDinner - статус пользователя когда он на обеде (На обеде)
     * @param {Boolean} isAway - статус пользователя когда он отсутствует (Перерыв)
     * @param {Boolean} navTour - навигационный тур для пользователя
     * @param {Boolean} topTour - тур по верхней панели пользователя 
     * @param {Boolean} addComplete - завершение регистрации
     * @param {String} refidNumber - реферативный номер для вывода в панели завершения регистрации 
     * @param {String} dttmcr - дата для вывода в панели завершения регистрации 
     */
    state: {
        status: '',
        token: JSON.parse(localStorage.getItem('token')),
        statusOptions: [],
        selected: '',
        dinerBlockpin: false,
        name: 'store',
        a: [],
        autouse: [],
        apiServer: 'xxxxx',
        pin: '',
        isActive: false,
        isDinner: false,
        isAway: false,
        navTour: true,
        topTour: false,
        addComplete: false,
        refidNumber: '',
        dttmcr: '',
    },
    

    mutations: {
        /**
         * Запрос на вход в систему
         * @param {String} state.status Статус состояния аутентификации пользователя
         */
        auth_request(state) {
            state.status = 'Загрузка';
        },

        /**
         * Успешный запрос на вход в систему , получает декодированный токен
         * @param {String} state.status Статус состояния аутентификации пользователя
         * @param {Array} decoded декодированный токен
         * @param {String} state.pin пинкод пользователя 
         * @param {Boolean} isActive статус пользователя (here)
         * @param {Boolean} isAway cтатус пользоватля (away)
         */
        auth_success(state, decoded) {
            state.status = 'Успешно';
            state.token = decoded;
            state.pin = decoded.pin_code;
            state.isActive = true;
            state.isAway = false;
            
        },
        /**
         * Смена пинкода пользователем 
         * @param {String} payload новый пинкод пользователя
         */
        pin_change(state,payload){
            state.pin = payload
            console.log(state.pin)
        },
        /**
         * Потраченый запрос на вход в систему
         * @param {String} state.status Статус состояния аутентификации пользователя
         */
        auth_error(state) {
            state.status = 'Ошибка входа';
        },

        /**
         * Выход из системы , очистка статуса и токена пользователя
         * @param {String}state.status Статус состояния аутентификации пользователя
         * @param {Array}state.token Статус состояния аутентификации пользователя
         */
        logout(state) {
            state.status = '';
            state.token = '';
        },

        /**
         * Смена статуса пользователя , вызов блокиратора экрана
         * @param {Boolean} state.dinerBlockpin  вызывает блок экрана
         * @param {String} data передает выбранный статус
         */
        colorChange(state, payload) {
            state.dinerBlockpin = true;
            state.selected = payload;
            state.isActive = false;
            state.isAway = true;
            console.log(state.selected)
        },

        /**
         * Снятие блокировки и смена статуса
         * @param {Boolean} state.dinerBlockpin  вызывает блок экрана
         * @param {String} data передает выбранный статус я
         * @param {Boolean} isActive статус пользователя (here)
         * @param {Boolean} isAway cтатус пользоватля (away)
         */
        colorChangeq(state, payload) {
            state.dinerBlockpin = false;
            state.selected = payload;
            state.isActive = true;
            state.isAway = false;
        },
        /**
         *  
         * @param {String} payload - обновленные данные 
         */
        update (state, payload) {
            state.statusOptions = payload
          },
        /**
         * Навигационный тур 
         * @param {Boolean} payload - передает значение true и запускает тур по навигации  
         */
        navTour(state,payload){
            state.navTour = payload
        },
        /**
         * тур по верхней панели 
         * @param {Boolean} payload - передает значение true и запускает тур по верхней панели 
         */
        topTour(state,payload){
            state.topTour = payload
        },
        /**
         * Завершает окно регистрации 
         * @param {Boolean} payload - передает значение true и закрывает форму регистрации 
         */
        addComplete(state,payload){
            state.addComplete = payload
        },
        /**
         * Передача рефиративного номера 
         * @param {Boolean} payload - передает значение true и запускает вывод рефиративного номера 
         */
        refid_number(state,payload){
            state.refidNumber = payload
         }
    },
    plugins: [createPersistedState()],
    actions: {
        /**
         * Функция аутентификации пользователя отправляет данные введенные пользователем на сервер получает в ответе JSON token
         * декодирует его и передеает в vuex , так же получает статусы пользователя
         * @param {Array}  data логин и пароль пользователя
         * @param {Array} token  ответ сервера со всеми данными (закодироваными) по пользователю
         * @param {Array} decoded  раскодированные данные по пользователю
         * @param {Array} statusOptions   Статус пользователя
         */
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                axios({
                url: 'xxxx',
                data: user,
                method: 'POST',
                })
                .then((resp) => {
                    const token = resp.data;
                    const decoded = jwtDecode(token);
                    console.log(decoded);
                    localStorage.setItem('token', JSON.stringify(decoded));
                    axios.defaults.headers.common.Authorization = decoded;
                    if (decoded.status == 0) {
                        commit('auth_success', decoded);
                        resolve(resp);
                        console.log(resp);

                        axios({
                            url: 'xxxxx',
                            method: 'POST',
                        })
                        .then((resp) => {
                            console.log(resp.data)
                            commit('update',resp.data)
                            commit('navTour', true)
                           
                        });
                    } else {
                        commit('auth_error');
                        console.log(this.state.status);
                    }
                })
                .catch((err) => {
                    commit('auth_error');
                    localStorage.removeItem('token');
                    reject(err);
                });
            });
        },
        /**
         * Функция выхода из ситемы ,  удаляет токен и очищяет заголовки
         */
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                commit('logout');
                localStorage.removeItem('token');
                delete axios.defaults.headers.common.Authorization;
                resolve();
            });
        },
        // add part
        sendMessage(context, message) {
            console.log(JSON.stringify(message));
            Vue.prototype.$socket.send(JSON.stringify(message));
        },
    },
    /**
     * ЧТО ТУТ ПРОИСХОДИТ ?
     */
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    /**
    * @param
    */
    getWsMessage: state => () => state.socket.message,
    },
   

});
