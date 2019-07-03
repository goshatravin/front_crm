<template>
  <div class="idCard">
    <div class="idCard-title">
      <p>Журнализация изменений проекта</p>
    </div>
    <div class="personal-info">
      <img
        class="personal-info_img"
        src="../assets/login-img/main_logo.svg"
        alt="главный логотип"
      >
      <div class="about-version">
           <p class="sV">
            sirius version 1.1.1
          </p>
        <ul class="about-version_list">
            <p class="status status--new">Новое в функционале</p>
             <p class="module">Модуль “Регистрация дела + медблок”:</p>
             <li class="about-version_list-item"><span class="item--span item--feature">SRS-11</span> - при вводе даты рождения застрахованного лица значение в поле возраст рассчитывается автоматически;</li>
             <li class="about-version_list-item"><span class="item--span item--feature">SRS-12</span> - заблокирована возможность вносить изменения в поля “Рефномер” и “Дата и время регистрации”;</li>
             <li class="about-version_list-item"><span class="item--span item--feature">SRS-19</span> - в форму регистрации добавлено поле “Симптомы (вручную)” для ввода симптомов, отсутствующих в справочнике;</li>
             <li class="about-version_list-item"><span class="item--span item--feature">SRS-21</span> - добавлен автоматический поиск полиса в бордеро и заполнение полей данными из выбранного в результате поиска полиса;</li>
             <li class="about-version_list-item"><span class="item--span item--feature">SRS-27</span> - добавлено поле “Наименование отеля (вручную)”;</li>
             <li class="about-version_list-item"><span class="item--span item--feature">SRS-57</span> - добавлена базовая проверка при плавающих сроках действия полиса (в случае, если количество дней пребывания за границей может быть превышено);</li>
             <li class="about-version_list-item"><span class="item--span item--feature">SRS-29</span> - переработан вид подсказки - теперь в первую очередь отображается скрипт подсказки, а при нажатии на кнопку “Дополнительно” выводятся пункты регламентирующих документов;</li>
             <li class="about-version_list-item"><span class="item--span item--feature">SRS-31</span> - ручной выбор диагноза: в случае, если симптомы из справочника не выбираются, в поле “Диагноз” доступен список диагнозов, аналогичный тому, что доступен в системе Fregat;</li>
             <li class="about-version_list-item"><span class="item--span item--feature">SRS-34</span> - в справочник 5024 “Цели поездки” добавлен параметр “Не выводить в Sirius”, позволяющий скрывать значения справочника;</li>
             <li class="about-version_list-item"><span class="item--span item--feature">SRS-35</span> - добавлена базовая проверка для даты начала действия полиса, в случае, если дата начала действия полиса больше текущей даты, выводится предупреждение о том, что дата начала действия полиса еще не наступила;</li>
             <li class="about-version_list-item"><span class="item--span item--feature">SRS-37</span> - добавлена возможность копировать наименование отеля в соответствующем поле;</li>
             <li class="about-version_list-item"><span class="item--span item--feature">SRS-39</span> - добавлено поле “Номер сертификата туроператора”;</li>
             <li class="about-version_list-item"><span class="item--span item--feature">SRS-41</span> - в выпадающем списке поля “Туроператор” код туроператора скрыт;</li>
             <li class="about-version_list-item"><span class="item--span item--feature">SRS-45</span> - добавлена базовая проверка: в случае выбора симптома с параметром "Критичный", базовая проверка выводит предупреждение о необходимости вызова КСП, а также скрипт для каждой страны;</li>
             <li class="about-version_list-item"><span class="item--span item--feature">SRS-46</span> - в медицинском блоке добавлены уточняющие вопросы, помогающие дифференцировать предварительных диагноз;</li>
             <li class="about-version_list-item"><span class="item--span item--feature">SRS-47</span> - в форму регистрации добавлено поле “Температура” для указания температуры тела ЗЛ.</li>
             <p class="module">Модуль “Список дел”:</p>
             <li class="about-version_list-item"><span class="item--span item--feature">SRS-58</span> - добавлен модуль “Список дел”, отображающий дела, зарегистрированные через Sirius, а также список комментариев к делам.</li>
             <p class="status status--bugfix">Исправленные баги</p>
             <p class="module">Модуль “Регистрация дела + медблок”:</p>
             <li class="about-version_list-item"><span class="item--span item--bugfix">SRS-14</span>  - отсутствует выпадающий список для поля “Тип случая”;</li>
             <li class="about-version_list-item"><span class="item--span item--bugfix">SRS-20</span>  - отсутствует выпадающий список для поля “Тип события”;</li>
             <li class="about-version_list-item"><span class="item--span item--bugfix">SRS-24</span> - при изменении СК в форме регистрации данные в выпадающих списках полей не соответствуют новой СК;</li>
             <li class="about-version_list-item"><span class="item--span item--bugfix">SRS-26</span>  - при непоследовательном вводе данных в форме регистрации провайдер не предлагается;</li>
             <li class="about-version_list-item"><span class="item--span item--bugfix">SRS-54 </span> - отсутсвует выпадающий список для поля “Серия полиса”;</li>
             <li class="about-version_list-item"><span class="item--span item--bugfix">SRS-59</span> - периодически отсутствуют выпадающие списки.</li>


             
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {

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

.sV {
    margin-bottom: 1rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 200;
    color: var(--rageblue);
}
.module{
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
    color: var(--black);
    font-weight: 500;

}
.status{
    text-align: center;
    padding-top: 1rem;
    font-weight: 100;
}
.status--new{
    color: var(--rageblue);
}
.status--bugfix{
    color: var(--red);
}
.idCard {
    background: white;
    width: 30rem;
    box-shadow: var(--boxShadow);
}
.item--span{
    font-weight: 700;
}
.item--feature{
    color: var(--rageblue);
}
.item--bugfix{
    color: var(--red);
}
.about-version {
    /* max-width: 15rem; */
    margin: 1rem auto;
}

.about-version_list-item {
    padding-bottom: 1rem;
    padding-right: 0.1rem;
    text-align: left;
}

.personal-info_img {
    max-width: 6rem;
    margin: 1rem auto;
}

.personal-info {
    display: flex;
    justify-content: space-around;
    padding: 3rem var(--paddingleft);
    flex-direction: column;
    /* background:  linear-gradient(var(--white), var(--blue)); */
}
.about-version_list{
    height: 30rem;
    overflow: scroll;
}
</style>
