<template>
    <div class="personal">
        <header>
            <div class="header-wrapp" v-if="this.$store.state.addComplete">
                <div class="wrap-box">
                    <div class="login-box-text">
                        <p class="login-box__item">
                           
                        </p>
                    </div>
                    <div class="warp-box_form">
                        <p class="wrap-box_from-text">Дело №{{this.$store.state.refidNumber}} успешно <br> зарегистрировано!</p>
                        <!-- svg -complete -->
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px"
                        y="0px" viewBox="0 0 568.599 568.599" style="enable-background:new 0 0 568.599 568.599;" xml:space="preserve"
                        width="512px" height="512px">
                        <g>
                        <g>
                        <g>
                        <path
                        d="M565.692,147.211L507.96,89.479c-4.08-4.08-10.404-4.08-14.484,0L241.128,342.031L75.276,176.179    c-4.08-4.08-10.404-4.08-14.484,0L3.06,233.911c-4.08,4.08-4.08,10.404,0,14.484l230.724,230.724    c1.836,1.836,4.488,3.06,7.14,3.06s5.304-1.02,7.14-3.06l317.628-317.424C569.568,157.615,569.568,151.291,565.692,147.211z     M241.128,457.495L24.684,241.051l43.248-43.248l165.852,165.852c4.08,4.08,10.404,4.08,14.484,0L500.82,111.103l43.248,43.248    L241.128,457.495z"
                        data-original="#000000" class="active-path" data-old_color="#0892d0" fill="#0892d0" />
                        <path
                        d="M497.148,133.543L352.92,277.771c-2.04,2.04-2.04,5.304,0,7.14c1.02,1.02,2.244,1.428,3.672,1.428    c1.428,0,2.652-0.408,3.672-1.428L500.82,144.355l10.812,10.812c2.04,2.04,5.304,2.04,7.14,0c2.04-2.04,2.04-5.304,0-7.14    l-14.484-14.484c-1.02-1.02-2.244-1.428-3.672-1.428C499.188,132.115,498.168,132.523,497.148,133.543z"
                        data-original="#000000" class="active-path" data-old_color="#0892d0" fill="#0892d0" />
                        </g>
                        </g>
                        </g>
                        </svg>
                        <!--  -->
                    </div>
                </div>
            </div>
            <navigation /> <!-- модуль навигации -->
            <main>
                <topPanel title="Регистрация нового дела" /> <!-- верхняя панель пользователя -->
                <div class="components-box">
                    <div class="main-box">
                        <addNew /> <!-- Панель регистрации нового дела -->
                        <events /> <!-- Панель отслеживания событий об ошибках и событиях по новому делу -->
                        <provSelect /> <!-- Панель Выбора провайдера -->
                    </div>
                    <div class="express-box">
                     <express-bar/>
                    </div>
                     
                </div>
             
                
            </main>
        </header>
    </div>
</template>
<script>
    import navigation from '../components/navigation.vue';
    import topPanel from '../components/topPanel.vue';
    import addNew from '../components/add-components/addNew.vue';
    import events from '../components/add-components/events.vue';
    import provSelect from '../components/add-components/provSelect.vue';
    import expressBar from '../components/expressBar.vue';

    export default {
        components: {
            navigation,
            topPanel,
            addNew,
            events,
            provSelect,
            expressBar,
        },
    };

</script>

<style scoped>
    header {
        display: flex;
    }
    main {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .main-box{
        padding: 2rem;
         display: flex;
        justify-content: space-between;
        width: 80rem;
    }
    .components-box {
        display: flex;
        justify-content: space-between;
    }
    .express-box{
        width: 23rem;    
    }
    .header-wrapp {
        position: absolute;
        height: 100%;
        width: 100%;
        background: var(--lightgrey);
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .compleate-box {
        width: 20rem;
        height: 20rem;
        background: red;
    }
    .warp-box_form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 60%;
        width: 100%;
        padding-top: 1rem;

    }
    .login-box-text {
        background: var(--blue);
        border-radius: 5px 5px 0px 0px;
        padding: 1.5rem 2rem;
        text-align: left;
    }
    .wrap-box {
        position: absolute;
        top: 40%;
        left: 40%;
        z-index: 100000;
        box-shadow: var(--boxShadow);
        height: 12rem;
        width: 20rem;
        background: white;
        border-radius: 5px 5px 0px 0px;
        text-align: center;
    }
    .input_text {
        width: 7rem;
        padding: 0.8rem 2rem;
        margin-bottom: 0.5rem;
        margin-top: 2.5rem;
        border: none;
        color: var(--black);
        background-color: var(--lightgrey);
        font-size: 1rem;
    }
    .wrap-box_from-text{
        line-height: 1.5rem;

    }
    svg{
        max-width: 5rem;
        transition: all 0.3s;
    }
    svg path {
        -webkit-animation: londing 6s linear 0s;
        -o-animation: londing 6s linear 0s;
        animation: londing 6s linear 0s;
    }
    @keyframes londing {
        0% {
            opacity: 0;
            stroke-dashoffset: -900;
        }

        50% {
            stroke-dashoffset: 0;
        }

        100% {
            opacity: 1;
            stroke-dashoffset: 900;
        }
    }

</style>
