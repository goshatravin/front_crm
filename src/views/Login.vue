<template>
    <main>
        <!-- <particles /> -->
        <div class="main-logo">
            <img
            src="../assets/login-img/main_logo.svg"
            alt="главный логотип"
            >
        </div>
        <div class="main-form">
            <div class="main-from__title">
                <p class="main-from__title-text">Вход в систему</p>
            </div>
            <form
                @submit.prevent="login"
                class="main-form__login"
                >
                <p class="main-form__login-status">
                {{ this.$store.state.status }}
                </p>
                <input
                class="main-form__login-input main-form__login-input_name"
                id="login"
                v-model="user_login"
                required
                placeholder="Имя"
                type="text"
                >
                <input
                class="main-form__login-input main-form__login-input_password"
                id="password"
                v-model="user_password"
                required
                placeholder="Пароль"
                type="password"
                >
                <input
                class="main-form__login-submit"
                type="submit"
                value="Войти"
                >
            </form>
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    width: 80%;
    height: 100vh;
}
.main-form {
    z-index: 1000;
}
.login-img_cancel {
    max-width: 1rem;
    padding-right: 0.1rem;
}
.main-logo {
    z-index: 1000;
}
.main-form__login-status {
    padding: 0.3rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.main-form__login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 18rem;
    width: 28rem;
    background: var(--white);
    box-shadow: var(--boxShadow);
    transition: 1s all;
}

.main-form__login-input {
    width: 15rem;
    padding: 0.8rem 2rem;
    margin-bottom: 1.4rem;
    border: none;
    color: var(--black);
    font-size: 0.8rem;
}

.main-form__login-input_name {
    background: url(../assets/login-img/login-img-input/login-input-img.svg) no-repeat 0.7rem;
    background-color: var(--lightgrey)
}

.main-form__login-input_password {
    background: url(../assets/login-img/login-img-input/password-input-img.svg) no-repeat 0.7rem;
    background-color: var(--lightgrey);
}

.main-form__login-submit {
    background: var(--rageblue);
    color: var(--white);
    width: 6rem;
    height: 2.5rem;
    border-radius: 0.3125rem;
    border: none;
    font-size: 0.9rem;
}

.main-from__title {
    background: var(--blue);
    border-radius: 5px 5px 0px 0px;
    padding: 1.5rem 2rem;
}

.main-from__title-text {
    color: var(--black);
    text-align: left;
}

</style>

<script>
import particles from '../components/particles.vue';

export default {
    data() {
        return {
            user_login: '',
            user_password: '',
        };
    },
    methods: {
        /**
         * Функция логина собирает login  и password и передает в store.js в action login
         */
        login() {
            const { user_login } = this;
            const { user_password } = this;
            this.$store.dispatch('login', {
                user_login,
                user_password,
            })
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err));
        },
    },
};

</script>
