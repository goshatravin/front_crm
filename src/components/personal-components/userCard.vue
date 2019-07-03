<template>
  <div class="idCard">
    <div class="idCard-title">
      <p>Карточка</p>
    </div>
    <div class="personal-info">
      <div class="photo-info">
        <img :src="'data:image/png;base64,'+ userArray.photo" class="img-q" alt="" >
      </div>
      <div class="text-info">
        <p class="info_text">
          Имя: <span>{{ userArray.full_name }}</span>
        </p>
        <p class="info_text">
          Должность: <span>{{ userArray.name_position }}</span>
        </p>
        <p class="info_text">
          Дата рождения: <span>{{ userArray.dob }}</span>
        </p>
        <p class="info_text">
          Рейтинг: <span>{{ userArray.rang }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            userArray: [],
            b: this.$store.state.token.id_user,
            passwords: false,
            update: 'update',
        };
    },
    beforeMount() {
        /**
         * Отправляем на сервер id  пользователя в ответе получает массив с данными по пользователю
         * @param {Array} userArray - массив с данными по пользователю
         * @param {String} id_user -  id пользователя
         */
        axios({
            url: 'xxxx',
            data: {
                data: this.b,
            },
            method: 'POST',
        })
        .then((resp) => {
            const idCard_data = resp.data;
            this.userArray = idCard_data;
            console.log(idCard_data);
        });
    },
    // methods: {
    //     changePas (e) {
    //         const pass = document.getElementById('password').value
    //         axios({
    //             url: 'http://10.80.101.187:8081/api/user/info',
    //             data: {
    //                 data: [{
    //                     sql_state: this.update,
    //                     id_user: this.b,
    //                     pin_code: pass
    //                 }]
    //             },
    //             method: 'POST'
    //         })
    //         .then((resp) => {
    //             console.log(data)
    //             console.log(resp)
    //         })
    //     }
    // }
};

</script>

<style scoped>
.idCard-title {
    border-bottom: 1px solid var(--grey);
    height: 3rem;
    display: flex;
    align-items: center;
    padding-left: var(--paddingleft);
    background: var(--blue);
}

.idCard {
    background: white;
    width: 30rem;
    box-shadow: var(--boxShadow);
}
.img-q {
    max-width: 8rem;
    max-height: 8rem;
    border-radius: 5rem;
    margin-right: 1rem;
}

.personal-info {
    display: flex;
    justify-content: space-around;
    padding: 3rem var(--paddingleft);
}

.info_text {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.3rem;
}

.info_text span {
    padding-left: 2rem;
    font-weight: 600;
    text-align: right;
}

</style>
