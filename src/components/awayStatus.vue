<template>
  <div
    class="wrap-part"
    v-if="this.$store.state.dinerBlockpin"
  >
    <div class="wrap" />
    <div class="wrap-box">
      <div class="login-box-text">
        <p class="login-box__item">
          Введите 4-значный пин-код
        </p>
      </div>
      <div class="warp-box_form">
        <input
          class="input_text"
          @input="pinCheck"
          maxlength="4"
          type="password"
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            datainfo: [], // массив для проверки пинкода
            b: this.$store.state.token
        };
    },
    methods: {
        /**
         * Проверяет пинкод на совпадения записывая введенные знаки в массив , если пинкод совпал снимает блокировку и меняет статус на (на месте)
         *
         * @param {String} data-  код статуса (на месте)
         */
        pinCheck({ type, target }) {
            this.datainfo = (target.value);
            if (this.datainfo == this.$store.state.pin) {
                this.$store.commit('colorChangeq', '392');
                axios({
                    url: 'xxxx',
                    data: {
                        data: [{
                            id_user: this.b.id_user,
                            id_status: '392',
                        }],
                    },
                    method: 'POST',
                })
                .then((resp) => {
                    console.log(resp);
                });
            }
        },
    },
};

</script>

<style scoped>
.wrap {
    position: absolute;
    height: 100vh;
    width: 100%;
    background: var(--lightgrey);
    opacity: 0.7;
    z-index: 1000;
    filter: blur(1px);
}
.warp-box_form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.login-box-text {
    background: var(--blue);
    border-radius: 5px 5px 0px 0px;
    padding: 1rem 2rem;
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

</style>
