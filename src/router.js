import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Main from './views/Main.vue';
import Personal from './views/Personal.vue';
import About from './views/About.vue';
import Add from './views/Add.vue';
import Documents from './views/Documents.vue'
import store from './store.js';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      name: 'main',
      component: Main,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/add',
      name: 'add',
      component: Add,
      meta: {
        requiresAuth: true,
      },
    },
    {
        path: '/documents',
        name: 'documents',
        component: Documents,
        meta: {
          requiresAuth: true,
        },
      },
  ],
});

// Предотвращает закрытие страницы add или обновления 
router.beforeEach((to, from, next) => {
    if(from.name == 'add' ){
        const answer = window.confirm('Завершить регистрацию?')
        if (answer) {
            next()
        } else {
            return 
        }
    }
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next();
            return;
        }
        next('/login');
    } else {
        next();
    }
});
router.afterEach((to,from,next) =>{
    if(from.name == "add"){
        console.log("312312")
        store.commit('addComplete', false)
    }
})
export default router;

