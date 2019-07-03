<template>
  <div class="input_task">
    <div class="input_task-title">
      <p>Формирование заявки</p>
    </div>
    <form class="input_task__field">
      <!--<button @click="RegCase">REG</button> -->
      <p class="field_code"> Страховая компания </p>
      <p class="field_script"> Добрый день! Балт Ассистанс, слушаю Вас. Просим сообщить название вашей страховой компании. </p>
      <v-select
        class="select-toggle"
        label="name_directory"
        :options="vSelectData['insCompany']"
        @input="createJSON('insCompany')"
        v-model="selectedData['id_partner']"
        name="id_partner"
      />

      <p class="field_code"> Тип полиса </p>
      <p class="field_script"> Назовите тип вашего полиса </p>
      <v-select
        class="select-toggle"
        label="name_directory"
        :options="vSelectData['insPolicy']"
        @input="createJSON('insPolicy')"
        v-model="selectedData['id_policy_format']"
      />

      <p class="field_code"> Тип случая </p>
      <p class="field_script"> Что у вас случилось </p>
      <v-select 
        class="select-toggle" 
        label="name_directory"
        :options="vSelectData['typecase']"
        @input="createJSON('typecase')"
        v-model="selectedData['id_type_case']"/>

      <div v-for="(block, bl_index) in this.regField" :key="bl_index" >
        <div class="block-num">
          {{ JSON.parse(block.json_block).block_num }}.
          {{ JSON.parse(block.json_block).block_name }}
        </div>

        <div class="pb1" v-for="(rows, row_index) in JSON.parse(block.json_field)" :key="row_index">
          <div v-show="(!rows.row.system_name.match('_number_country_code'))">
            <div v-if="!(!!rows.row.system_name.match('_number') && rows.row.field_type == 'number')">
              <div class="field_code">
                <span class="field_code_small"><!--{{rows.row.field_code}}--></span>   {{ rows.row.field_name }}  
              </div>
              <!-- <div class="field_name"> </div> -->
              <div class="field_script">
                {{ rows.row.script }}
              </div>
                            
              <div
                class="field_input"
                v-show="!rows.row.control_source"
              >
                <input
                  :type="rows.row.field_type"
                  :placeholder="rows.row.field_placeholder"
                  :name="rows.row.system_name"
                  :readonly="rows.row.block"
                  :data-not_null="rows.row.not_null"
                  :data_directory="rows.row.control_source"
                  :group="rows.row.id_group"
                  @blur="tmp"
                  v-model="selectedData[rows.row.system_name]"
                >
                <!-- <div class="copy" data_copy="rows.row.copy"></div> -->
              </div>   <!-- INPUT  -->

              <div class="copy-box" v-show="!!rows.row.control_source">
                <v-select
                  class="select-toggle"
                  :multiple="rows.row.multiselect"
                  :data-multiple="rows.row.multiselect"
                  label="name_directory"
                  max-height="250px"
                  :copy="rows.row.copy" 
                  :placeholder="rows.row.field_placeholder"
                  :options="referenceList[rows.row.control_source]"
                  :data_directory="rows.row.control_source"
                  :name="rows.row.system_name"
                  @input="createJSON(rows.row.system_name)"
                  v-model="selectedData[rows.row.system_name]"
                />
                    <div  class="copy" :data_copy="rows.row.copy" alt="Скопировать" @click="doCopy(selectedData[rows.row.system_name])" v-show="ArrCopy['copy_' + rows.row.system_name]">
                        <svg class="copy-svg" title="Скопировать"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 34.555 34.555" style="enable-background:new 0 0 34.555 34.555;" xml:space="preserve" width="512px" height="512px"><g><g>
                        <g>
                        <g>
                        <path d="M24.065,34.555H5.489c-1.379,0-2.5-1.122-2.5-2.5V7.864c0-1.378,1.121-2.5,2.5-2.5h2.364c0.276,0,0.5,0.224,0.5,0.5     s-0.224,0.5-0.5,0.5H5.489c-0.827,0-1.5,0.673-1.5,1.5v24.19c0,0.827,0.673,1.5,1.5,1.5h18.576c0.827,0,1.5-0.673,1.5-1.5v-2.365     c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v2.365C26.565,33.433,25.444,34.555,24.065,34.555z" data-original="#000000" class="active-path" data-old_color="#0892d0" fill="#0892d0"/>
                        </g>
                        </g>
                        <g>
                        <g>
                        <path d="M29.065,29.19H10.489c-1.379,0-2.5-1.122-2.5-2.5V2.5c0-1.378,1.121-2.5,2.5-2.5h13.604c0.276,0,0.5,0.224,0.5,0.5     S24.37,1,24.094,1H10.489c-0.827,0-1.5,0.673-1.5,1.5v24.19c0,0.827,0.673,1.5,1.5,1.5h18.576c0.827,0,1.5-0.673,1.5-1.5V7.661     c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V26.69C31.565,28.069,30.444,29.19,29.065,29.19z" data-original="#000000" class="active-path" data-old_color="#0892d0" fill="#0892d0"/>
                        <path d="M31.065,8.161h-6.972c-0.276,0-0.5-0.224-0.5-0.5V0.688c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v6.473h6.472     c0.276,0,0.5,0.224,0.5,0.5S31.342,8.161,31.065,8.161z" data-original="#000000" class="active-path" data-old_color="#0892d0" fill="#0892d0"/>
                        <path d="M31.065,8.161c-0.13,0-0.26-0.051-0.358-0.151l-6.972-7.161c-0.192-0.198-0.188-0.514,0.01-0.707     c0.197-0.191,0.516-0.187,0.707,0.01l6.972,7.161c0.192,0.198,0.188,0.514-0.01,0.707C31.317,8.114,31.191,8.161,31.065,8.161z" data-original="#000000" class="active-path" data-old_color="#0892d0" fill="#0892d0"/>
                        </g>
                        </g>
                        </g>
                        </g> 
                        </svg>
                    </div>
              </div>  <!-- Vselect  -->
            </div>
            <div v-else>
              <div class="field_code">
                <span class="field_code_small"><!--{{rows.row.field_code}}--></span>   {{ rows.row.field_name }}  
              </div>
              <vue-tel-input
                v-bind="{name:rows.row.system_name,id:'cl_'+rows.row.system_name, defaultCountry: 'ru'}"
                placeholder="Введите номер телефона"
                @onInput="onInput"
                @input="createJSON(rows.row.system_name)"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
    <!-- <vue-tel-input  @onInput="onInput" v-bind="bindProps"  id="telinput"></vue-tel-input> -->
    <div class="regcase-container">
        <button class="regcase"  @click="RegCase">Зарегистрировать</button>
    </div>
    
  </div>
</template>
<script>

import vSelect from 'vue-select';
import VueTelInput from 'vue-tel-input';
import Axios from 'axios';
import 'vue-select/dist/vue-select.css';
import 'vue-tel-input/dist/vue-tel-input.css';
import { setTimeout } from 'timers';

export default {
    components: {
        vSelect,
        VueTelInput,
       

    },
    methods: {
        doCopy: function (e) {
            // console.log(e.name_directory)
            this.$copyText(e.name_directory).then(function (e) {
                // alert('Copied')
                // console.log(e)
            }, function (e) {
                // console.log(e)
            })

        },
        tmp(e) {
            //this.$set(this.ArrCopy, 'copy_hotel', true)
            switch (e.target.type) {
                case 'text':
                case 'date':
                case 'number':
                    if (e.target.name == 'address') {
                        this.address.address = e.target.value;
                        this.$root.$emit(this.EVENT_LIST.SET_ADDRESS, this.address);
                    }
                    this.$set(this.finalJSON, e.target.name, e.target.value);
                    // if(e.isTrusted == undefined){
                    //     e.target = document.getElementsByName(e.target.name)[0]
                    // }
                    // if(e.target.value != ''){ //  добавление сининего цвета
                    //     e.target.classList.add('active')
                        
                    // }else{
                    //     e.target.classList.remove('active')
                    // }
                break;
                case 'checkbox':
                    this.$set(this.finalJSON, e.target.name, +e.target.checked);
                break;
             
            }
        },
    onInput({ number, isValid, country}) {
        this.phone.number = number;
        this.phone.isValid = isValid;
        this.phone.country = country && country.name;
        this.phone.iso2 = country.iso2;
        //console.log(this.phone)
        this.$set(this.finalJSON, this.phone.elem, this.phone.number);
        this.$set(this.finalJSON, this.phone.elem + '_country', this.phone.iso2);
        console.log(this.finalJSON)
        if(!this.phone.isValid){
            document.getElementById('cl_'+this.phone.elem).classList.add('red')
        }else{
             document.getElementById('cl_'+this.phone.elem).classList.remove('red')
        }
    },
        RegCase(e) {
            e.preventDefault();

            Axios({
                method: 'post',
                url: this.apiSrv + '/api/case/case_registration',
                data:{
                    'data': JSON.stringify(this.finalJSON)
                }
            }).then(res => {
                console.log(res)
            })
            // Закрытие окна регистрации по нажатию кнопки 
            this.$store.commit('refid_number', this.finalJSON["refid_number"])
            console.log(JSON.stringify(this.finalJSON));
            this.$store.commit('addComplete', true)
            if(this.$store.state.addComplete == true){
                const vm = this;
                setTimeout(close , 3000)
                function close(){
                    vm.$router.push('/')
                }
                 
            }
            
        },

        createJSON(event) {
            // console.log(event);
            // console.log(document.getElementsByName(event))
            // if(document.getElementsByName(event)[1]){
            //     console.log(document.getElementsByName(event)[1].innerHTML);
            // }
             
            // if(document.getElementsByName(event)[0]){
            //     if(document.getElementsByName(event)[1].innerText != ''){
            //         document.getElementsByName(event)[0].classList.add('active')
            //     }else{
            //         document.getElementsByName(event)[0].classList.remove('active')
            //     }
               
            // }
            
            // if(document.getElementsByName(event)[1].innerText = ''){
            //     console.log("Пусто")
            // }else{
            //     console.log("Полно")
            // }
            const a = [...document.querySelectorAll("div[copy='true']")]
            for (var t in a){
                if (event == a[t].getAttribute('name') && this.selectedData[event] != null){
                    this.$set(this.ArrCopy, "copy_" + a[t].getAttribute('name'), true)
                }
            }
            const arr = ['foreign_number', 'home_number'];
            if(arr.indexOf(event) >= 0){
                this.phone.elem = event
            }
            
            if (event == 'insCompany') {
                if (this.selectedData.id_partner == null) {
                    this.selectedData = {};
                    this.$set(this.selectedData, 'id_partner', '')
                    this.$set(this.selectedData, 'id_policy_format', '')            
                }
                this.finalJSON = {};
                this.regField = [];
            }
            if (event == 'insPolicy') {
                if (this.selectedData.id_policy_format == null) {
                    this.finalJSON = {};
                    this.regField = [];
                }
            }
            if (event == 'city') {
                if (this.checkIsNull(this.selectedData[event])){
                    this.address.point = this.selectedData[event].map_point;
                    this.address.id_ref_catalog = this.selectedData[event].id_ref_directory;
                }
            }
            for (const key in this.selectedData) {
                if (this.selectedData[key] !== null) {
                    if (key == 'simptoms') {
                        this.simptoms = [];
                        for (const key_sm in this.selectedData[key]) {
                            this.simptoms.push(this.selectedData[key][key_sm].id_ref_directory);
                        }
                        this.$set(this.finalJSON, key, this.simptoms);
                    }
                    if (this.checkIsNull(this.selectedData[key].id_ref_directory)) {
                        this.$set(this.finalJSON, key, this.selectedData[key].id_ref_directory);
                    }
                }
                else{
                    this.$set(this.finalJSON, key, '');
                }
            }
            switch (event) {
                case 'insCompany':
                    this.uploadTypePolicy();
                break;
                case 'insPolicy':
                    this.uploadRegField();
                break;
                case 'country':
                    if (this.selectedData.country !== null){
                        this.address.country = this.selectedData.country.name_directory;
                    }
                    this.selectedData["city"] = null;
                    this.finalJSON["city"] = "";
                // this.$root.$emit(this.EVENT_LIST['SET_ADDRESS'], this.address);
                    this.uploadRef('country');
                break;
                case 'hotel':
                    console.log([...document.querySelectorAll("div[copy='true']")].value);
                    this.address['address'] = this.selectedData['hotel'].address;
                    this.$set(this.selectedData, 'address', this.address['address'])
                    this.$set(this.finalJSON, 'address', this.address['address'])
                break;
                case 'city':
                    if (this.checkIsNull(this.selectedData.city)){
                        console.log('1')
                        this.address.city = this.selectedData.city.name_directory;
                        this.$root.$emit(this.EVENT_LIST.SET_ADDRESS, this.address);
                        this.uploadRef('hotel');
                    }else{
                        this.$set(this.referenceList, 'hotel', []);
                    }
                break;
                case 'simptoms':
                    this.uploadRef('simptoms');
                    // отправка финального json  для получения вопросов
                    this.$root.$emit(this.EVENT_LIST.MED_QUESTIONS, this.finalJSON);

                break;
            }
            // console.log(this.finalJSON[event]);
            // if(document.getElementsByName(event)[1]){
                
            //     if(this.finalJSON[event]){
            //         console.log('if'+event)
            //         console.log(document.getElementsByName(event));
            //         document.getElementsByName(event)[1].style.background="#0892d0";
            //         document.getElementsByName(event)[1].style.color="white";
            //     }else{
            //         document.getElementsByName(event)[1].style.background="none";
            //         document.getElementsByName(event)[1].style.color="black";
            //          console.log('else'+event)
            //     }
            // }
             
        },
        uploadRegField(event) {
            const vm = this;
            console.log(JSON.stringify(this.finalJSON));
            Axios({
            method: 'post',
            url: `${this.apiSrv}/api/directory/getregfield`,
            data: {
            data: JSON.stringify(this.finalJSON),
            },
            }).then((res) => {
                this.regField = res.data;
                if (res.data[0]) {
                    this.tmpRef = res.data[0].json_dir;
                    res.data.forEach((el) => {
                        if (JSON.stringify(el.json_def_val) != '[]') {
                            for (const i in el.json_def_val) {
                                const data = el.json_def_val[i];
                                for (const key in data) {
                                    vm.$set(vm.finalJSON, key, data[key]);
                                    vm.$set(vm.selectedData, key, data[key]);
                                    vm.$set(vm.finalJSON, 'id_user', '566');
                                }
                            }
                        }
                    });
                    Axios({
                        method: 'post',
                        url: `${this.apiSrv}/api/directory/refs`,
                        data: {
                            ref: this.tmpRef,
                            param: this.finalJSON,
                        },
                    }).then((resRef) => {
                        resRef.data.forEach((element) => {
                            this.$set(this.referenceList, element.directory, element.directory_value);
                        });
                    });
                }
            });
        },
        uploadTypePolicy() {
            Axios({
                method: 'post',
                url: `${this.apiSrv}/api/directory/instypepolicy`,
                data: {
                    data: this.finalJSON.id_partner,
                },
            }).then((res) => {
                this.$set(this.vSelectData, 'insPolicy', res.data);
            });
        },
        uploadRef(name_ref) {
            Axios({
                method: 'post',
                url: `${this.apiSrv}/api/directory/ref`,
                data: {
                    ref: name_ref,
                    param: this.finalJSON,
                },
            }).then((res) => {
                let arrayIndex;
                switch (name_ref) {
                    case 'country':
                        arrayIndex = 'f_return_city';
                    break;
                    case 'hotel':
                        arrayIndex = 'f_return_hotel';
                    break;
                    case 'simptoms':
                        arrayIndex = 'f_return_possible_diagnos';
                    break;
                }
                if (name_ref == 'diagnosis') {
                    console.log(res.data);
                    this.$root.$emit(this.EVENT_LIST.PROVIDER_CHOOPSE, res.data);
                } else {
                    this.$set(this.referenceList, arrayIndex, res.data);
                }
            });
        },
        setDataShadowDom(fld, val){
            const tmpg = {target: {type: 'text', name:fld, value:val}}
            this.$set(this.selectedData, fld, val)
            this.tmp(tmpg)
        },
        checkIsNull(val){
            if (typeof(val) == 'undefined'){
                return !true;
            }
            if (val == null){
                return !true;
            }
            if (val.length == 0){
                return !true;
            }
            return !false;
        }
    },

    watch: {
        finalJSON: {
            handler(val, oldVal) {
                 //Установка коротких наименований для обьектов
                const tFJ = this.TMP_finalJSON
                const FJ = this.finalJSON
                if((this.checkIsNull(FJ["memo_number"]) || this.checkIsNull(FJ["policy_number"])) && this.checkIsNull(FJ["dob"])){
                        Axios({
                            method: 'post',
                            url: this.apiSrv + '/api/case/findbordero',
                            data: {
                                'data': JSON.stringify(this.finalJSON)
                            }
                        })
                        .then(res => {
                            this.$root.$emit(this.EVENT_LIST['LOAD_BORDERO'], res.data);
                        })
                }
                Axios({
                    method: 'post',
                    url: `${this.apiSrv}/api/hint/basic`,
                    data: {
                        data: JSON.stringify(this.finalJSON),
                    },
                })
                .then((res) => {
                    this.$root.$emit(this.EVENT_LIST.HITS_BASIC, res.data);
                });

                Axios({
                    method: 'post',
                    url: this.apiSrv + '/api/hint/basicsituation',
                    data:{
                        'data': JSON.stringify(this.finalJSON)
                    }
                })
                .then(res => {
                    this.$root.$emit(this.EVENT_LIST['HITS_SITUATION'], res.data);
                })
                // Метод для расчета возраста
                if (this.checkIsNull(FJ["dob"])){
                    if (this.TMP_finalJSON["dob"] != this.finalJSON["dob"]){
                        // Получение необходмимого формата даты регистрации случая
                        const date_reg = this.finalJSON["dttmcr"].split(' ')
                        const el_data = date_reg[0].split('.')
                        const reg_date = new Date(el_data[2], el_data[1] -1, el_data[0])
                        // Получение необходмимого формата даты рождения
                        const date_dob = this.finalJSON["dob"].split('-')
                        const dob_date = new Date(date_dob[0], date_dob[1]-1, date_dob[2])
                        //Разница между датами
                        var timeDiff = Math.abs(reg_date.getTime() - dob_date.getTime());
                        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
                        this.setDataShadowDom('age', parseInt(diffDays/365))
                    }
                    this.TMP_finalJSON["dob"] = this.finalJSON["dob"];
                }

                //Работа подбора провайдера 
               
                //Проверка что необходимые поля заполнены
                if (this.checkIsNull(FJ["country"]) && this.checkIsNull(FJ["simptoms"]) && this.checkIsNull(FJ["diagnosis"])){
                    //Проверка на что необходимые поля изменились с последним изменением
                    if (tFJ["country"] != FJ["country"] || tFJ["simptoms"] != FJ["simptoms"] || tFJ["diagnosis"] != FJ["diagnosis"] || tFJ["city"] != FJ["city"]){
                        this.uploadRef('diagnosis');
                    }
                    // Установка последных данных для отслеживания изменений
                    tFJ["country"] = FJ["country"];
                    tFJ["simptoms"] = FJ["simptoms"];
                    tFJ["diagnosis"] = FJ["diagnosis"];
                    tFJ["city"] = FJ["city"];
                }else{
                    //Если необходимые поля не заполнены то очистить список провайдеров
                    this.$root.$emit(this.EVENT_LIST.PROVIDER_CHOOPSE, []);
                }
            },
            deep: true,
        },
    },
    beforeMount() {
        const vm = this;
        this.apiSrv = this.$store.state.apiServer,
        Axios({
            method: 'get',
            url: `${this.apiSrv}/api/directory/inscompanies`,
        })
        .then((res) => {
            this.$set(this.vSelectData, 'insCompany', res.data);
        });
        
        Axios({
            method: 'get',
            url: `${this.apiSrv}/api/directory/typecase`,
        })
        .then((res) => {
            this.$set(this.vSelectData, 'typecase', res.data);
        });
    },
    mounted(){
        const vm = this;
        this.$root.$on(this.EVENT_LIST.SET_BORDERO_TO_SHADOW_DOM, (arr) => {
            // vm.$set(vm.hint, 'Basic', arr);
            console.log(arr)
            vm.setDataShadowDom(arr.fild, arr.value)
        });
        this.$root.$on(this.EVENT_LIST.SET_SELECTED_PROVIDER, (prov_string) => {
            this.$set(this.finalJSON, 'id_provider', prov_string);
            console.log(this.finalJSON)
        });
        // ловит с мед вопросами
        this.$root.$on(this.EVENT_LIST.MED_SET_QUESTIONS_ANSWER, (answer) => {
            this.$set(this.finalJSON, 'questions', answer);
            this.$root.$emit(this.EVENT_LIST.MED_QUESTIONS, this.finalJSON);
            this.uploadRef('simptoms');
            // console.log(answer);
            // console.log(this.finalJSON);
            // console.log(typeof(this.finalJSON))
            // console.log([...this.finalJSON])
            //  console.log([...this.finalJSON]);
            // .push(this.selectedData[key][key_sm].id_ref_directory);
            // console.log(this.finalJSON);
        });
    },
    data() {
        return {
            message: 'Copy These Text',
            EVENT_LIST: this.$root._data.EVENT_LIST,
            vSelectData: [],
            selectedData: {},
            finalJSON: {},
            regField: [],
            apiSrv: '',
            referenceList: [],
            simptoms: [],
            address: [],
            ArrCopy:[],
            phone: {
                number: '',
                isValid: false,
                country: undefined,
                elem: '',
                
            },
            TMP_finalJSON:{} // Для хранение данных перед изменением
        };
    },
};

</script>

<style scoped>
.copy-box{
    display: flex;
    position: relative;
}
.copy{
    width: 1.5rem;
    height: 1.5rem;
    /* background: var(--blue); */
    margin-left: 0.7rem;
    align-self: center;
    margin-bottom: 0.5rem;
    position: relative;
    
}
.copy svg{
    max-width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    transition: 1s all;
}
.copy svg:hover{
    transform: scale(1.2);
}
.copy-done{
    display: none;
}
.copy-done:after{
    width: 2rem;
    height: 1rem;
    content: 'Готово';
    font-size: 0.6rem;
    border: 1px solid  var(--grey);
    padding: 0.3rem;
    position: absolute;
    bottom: 2rem;
    left: -0.7rem;

}
.vue-tel-input{
    max-width: 20rem;
    margin: 0.7rem 0;
}
.cl_foreign_number{
    margin: 1rem 0;
}
input[type="date"]{
    font-size: 1.05rem;
}
input[type="checkbox"]{
    cursor:pointer;
    width: 1.5rem;
    height:1.5rem;
    /* zoom: 0.1; */
}
.red {
    border: 1px solid var(--red)!important;
}
.regcase {
    background: var(--rageblue);
    color: var(--white);
    width: 8rem;
    height: 2.5rem;
    border-radius: 0.3125rem;
    font-size: 0.8rem;
    margin: 1rem 1rem 0rem 1rem;
    position: absolute;
    left: 72.2rem;
    cursor: pointer;
    outline: none;

}

.vs--searchable .vs__dropdown-toggle {
    cursor: pointer;
}
.block-num {
    margin: 1.5rem 0;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--grey);
    font-weight: 200;
}
[name=refid_number] {
    pointer-events: none;
}
.pb1 {
    padding: 1rem 0;
}
/* .field_code{
float: left;
} */
.select-toggle {
    max-width: 20rem;
    cursor: pointer;
    font-size: 0.8rem;
    flex: 1;
}
.select-toggle >*{
    color: var(--black);
}
.vs__dropdown-toggle{
    color: var(--black);
}
.input_task-title {
    border-bottom: 1px solid var(--grey);
    height: 3rem;
    display: flex;
    align-items: center;
    padding-left: var(--paddingleft);
    background: var(--blue);
}
.input_task {
    background: var(--white);
    width: 25rem;
}
input {
    width: 20rem;
    padding: 0.4rem;
    background: none;
    border: 1px solid rgba(60,60,60,.26);
    border-radius: 4px;
    white-space: normal;
    font-size: 0.8rem;
    color: var(--black);
}
.input_task__field {
    padding-left: var(--paddingleft);
    padding-top: 1rem;
    box-shadow: 0px 0px 10px rgba(177, 181, 193, 0.3);
    overflow: auto;
    height: 80vh;
    text-align: left;
}
.input_task-f_group {
 max-width: 20rem;
}
.input_text {
    width: 20rem;
    padding: 0.5rem 0.8rem;
    margin-bottom: 1rem;
    border: none;
    background-color: #EDF2F6;
    color: var(--black);
}
.field_script {
    font-size: 0.8rem;
    opacity: 1;
    max-width: 20rem;
    padding-top: 0.5rem;
    padding-bottom: 0.3rem;
    color: #1d6180;
}
.field_code {
    max-width: 20rem;
    font-weight: 400;
}
.input_task-j_part {
    padding-top: 1rem;
}
.select-toggle {
    margin-bottom: 0.5rem;
}
.warning {
    border: 1px solid #fcc600;
}
.active{
    border: 1px solid var(--rageblue);
    background: var(--rageblue);
    opacity: 0.6;
    color: white;
}
</style>
