<template>
    <div class="input_task">
        <div class="input_task-title">
            <p>Выбор провайдера</p>
        </div>
        <div class="providers">
            <div v-for="(item,index) in provider" :key="item.a" v-if="index <= 3" class="provider" @click="chooseProv"> 
                <div class="pr_name">
                    {{ item.provider_name }}
                </div>
                <div class="pr_adr">
                    <div class="img-box">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 52 52"
                            style="enable-background:new 0 0 52 52;"
                            xml:space="preserve"
                            width="512px"
                            height="512px"
                            class=""
                            >
                            <g>
                                <path
                                d="M38.853,5.324L38.853,5.324c-7.098-7.098-18.607-7.098-25.706,0h0  C6.751,11.72,6.031,23.763,11.459,31L26,52l14.541-21C45.969,23.763,45.249,11.72,38.853,5.324z M26.177,24c-3.314,0-6-2.686-6-6  s2.686-6,6-6s6,2.686,6,6S29.491,24,26.177,24z"
                                data-original="#1081E0"
                                class="active-path"
                                data-old_color="##B7D6F"
                                fill="#B7D6F5"
                                />
                            </g>
                        </svg>
                    </div>
                    {{ item.provider_address }}
                </div>

                <div class="pr_doc">
                    <div class="img-box">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="Layer_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style="enable-background:new 0 0 512 512;"
                            xml:space="preserve"
                            width="512px"
                            height="512px"
                            >
                            <g><g>
                                <g>
                                <g>
                                <path
                                d="M362.667,240h-53.333v-53.333c0-5.891-4.776-10.667-10.667-10.667h-85.333c-5.891,0-10.667,4.776-10.667,10.667V240     h-53.333c-5.891,0-10.667,4.776-10.667,10.667V336c0,5.891,4.776,10.667,10.667,10.667h53.333V400     c0,5.891,4.776,10.667,10.667,10.667h85.333c5.891,0,10.667-4.776,10.667-10.667v-53.333h53.333     c5.891,0,10.667-4.776,10.667-10.667v-85.333C373.333,244.776,368.558,240,362.667,240z M352,325.333h-53.333     c-5.891,0-10.667,4.776-10.667,10.667v53.333h-64V336c0-5.891-4.776-10.667-10.667-10.667H160v-64h53.333     c5.891,0,10.667-4.776,10.667-10.667v-53.333h64v53.333c0,5.891,4.776,10.667,10.667,10.667H352V325.333z"
                                data-original="#000000"
                                class="active-path"
                                data-old_color="##B7D6F"
                                fill="#B7D6F5"
                                />
                                <path
                                d="M450.571,112H341.333V81.472c0-24.341-20.16-44.139-44.939-44.139h-84.608c-23.829,0-41.12,18.56-41.12,44.139V112     H61.429C27.517,112.035,0.035,139.517,0,173.429v239.808c0.035,33.912,27.517,61.394,61.429,61.429h389.141     c33.912-0.035,61.394-27.517,61.429-61.429V173.429C511.965,139.518,484.483,112.035,450.571,112z M192,81.472     c0-11.349,6.112-22.805,19.787-22.805h84.608c13.013,0,23.605,10.229,23.605,22.805V112H192V81.472z M490.667,413.205     c-0.006,22.147-17.949,40.104-40.096,40.128H61.429c-22.135-0.023-40.072-17.961-40.096-40.096V173.429     c0.024-22.135,17.961-40.072,40.096-40.096h389.141c22.135,0.024,40.073,17.961,40.096,40.096V413.205z"
                                data-original="#000000"
                                class="active-path"
                                data-old_color="##B7D6F"
                                fill="#B7D6F5"
                                />
                                </g>
                                </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    {{ item.doctor }}
                </div>

                <div class="pr_data">
                    <div class="img-box">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 480.3 480.3"
                            style="enable-background:new 0 0 480.3 480.3;"
                            xml:space="preserve"
                            width="512px"
                            height="512px" class=""
                            ><g><g>
                            <g>
                            <path
                            d="M254.15,234.1V13.5c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v220.6c-31.3,6.3-55,34-55,67.2s23.7,60.9,55,67.2v98.2    c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-98.2c31.3-6.3,55-34,55-67.2C309.15,268.2,285.55,240.4,254.15,234.1z M240.65,342.8    c-22.9,0-41.5-18.6-41.5-41.5s18.6-41.5,41.5-41.5s41.5,18.6,41.5,41.5S263.55,342.8,240.65,342.8z"
                            data-original="#000000"
                            class="active-path"
                            data-old_color="#000000"
                            fill="#B7D6F5"
                            />
                            <path
                            d="M88.85,120.9V13.5c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v107.4c-31.3,6.3-55,34-55,67.2s23.7,60.9,55,67.2v211.4    c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V255.2c31.3-6.3,55-34,55-67.2S120.15,127.2,88.85,120.9z M75.35,229.6    c-22.9,0-41.5-18.6-41.5-41.5s18.6-41.5,41.5-41.5s41.5,18.6,41.5,41.5S98.15,229.6,75.35,229.6z"
                            data-original="#000000"
                            class="active-path"
                            data-old_color="#000000"
                            fill="#B7D6F5"
                            />
                            <path
                            d="M418.45,120.9V13.5c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v107.4c-31.3,6.3-55,34-55,67.2s23.7,60.9,55,67.2v211.5    c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V255.2c31.3-6.3,55-34,55-67.2S449.85,127.2,418.45,120.9z M404.95,229.6    c-22.9,0-41.5-18.6-41.5-41.5s18.6-41.5,41.5-41.5s41.5,18.6,41.5,41.5S427.85,229.6,404.95,229.6z"
                            data-original="#000000"
                            class="active-path"
                            data-old_color="#000000"
                            fill="#B7D6F5"
                            />
                            </g>
                            </g></g>
                        </svg>
                    </div>
                    {{ item.main_data }}
                </div>
                <div style="display:none" class="id_provider" >
                    {{ item.id_provider }}
                </div>
            </div>
        </div>
        <div id="map" />
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            EVENT_LIST: this.$root._data.EVENT_LIST,
            provider: {},
            myMap: '',
            fullAddress: '',
            center: [],
            startCoord: '',
            apiSrv: '',
            pick: '',
        };
    },
    mounted() {
        const vm = this;
        this.$root.$on(this.EVENT_LIST.PROVIDER_CHOOPSE, (arr) => {
            // vm.$set(vm.hint, 'Basic', arr)
            vm.provider = arr;
        });
        this.$root.$on(this.EVENT_LIST.SET_ADDRESS, (arr) => {
            vm.fullAddress = `${arr.country} ${arr.city} ${arr.address}`;
            if (typeof (arr.point) === 'object') {
                vm.startCoord = `${arr.country} ${arr.city}`;
                ymaps.geocode(vm.startCoord).then((res) => {
                    const firstGeoObject = res.geoObjects.get(0);
                    vm.center = firstGeoObject.geometry.getCoordinates();
                });
                /*
                axios({
                    method: 'post',
                    url: `${vm.apiSrv}/api/directory/citypoint`,
                    data: {
                        id_ref_city: arr.id_ref_city,
                        lat: vm.center[0],
                        lon: vm.center[1],
                    },
                }).then((res) => {});
                */
            } else {
                vm.center = arr.point;
            }
            console.log(vm.center);
            
        });
    },
    beforeMount() {
        if (document.getElementById('yandexMap')) return; // was already loaded
        const scriptTag = document.createElement('script');
        scriptTag.src = 'xxxx',
        scriptTag.id = 'yandexMap';
        document.getElementsByTagName('head')[0].appendChild(scriptTag);
        this.apiSrv = this.$store.state.apiServer;
    },
    methods: {
        chooseProv(e, target) {
            console.log()
            e.preventDefault();
            const parent = e.target.parentNode;
            for (let i = 0; i < parent.childNodes.length; i++) {
                if (parent.childNodes[i].className == 'pr_adr') {
                    this.pick = parent.childNodes[i].textContent;
                }
                if(parent.childNodes[i].className == 'id_provider') {
                    console.log(parent.childNodes[i].textContent)
                    this.$root.$emit(this.EVENT_LIST.SET_SELECTED_PROVIDER, Number(parent.childNodes[i].textContent));
                }
            }

            const { controls } = this;
            if (this.myMap == '') {
            this.myMap = new ymaps.Map('map', {
                center: this.center,
                zoom: 10,
                controls: [],
            });
            }
            this.myMap.controls.add('routePanelControl', {
                maxWidth: 300,
                visible: false,
            });
            const control = this.myMap.controls.get('routePanelControl');
            control.routePanel.state.set({
                from: this.fullAddress,
                to: this.pick,
            });

            // var cntr = this.myMap.controls.get('routePanelControl');
            // var multiRoutePromise = cntr.routePanel.getRouteAsync();
            // multiRoutePromise.then(function(multiRoute) {
            //     //https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/router/routePanel-docpage/
            //     multiRoute.model.events.add('requestsuccess', function() {
            //         var activeRoute = multiRoute.getActiveRoute();
            //         if (activeRoute) {
            //             console.log("Длина: " + activeRoute.properties.get("distance").text);
            //             console.log("Время прохождения: " + activeRoute.properties.get("duration").text);
            //         }
            //     });
            // }, function (err) {console.log(err);});   // ** Получение расстояния и времени ** //
            //  let parent = e.target.parentNode
            // for(var i=0 ; i< parent.childNodes.length; i++){
            //    if(parent.childNodes[i].className == "pr_adr"){
            //     this.pick = parent.childNodes[i].textContent;
            //    }
            // }
        },
    },

};
</script>
<style scoped>
.img-box{
    max-width: 2rem;
    position: absolute;
    left: 1rem;
}
svg{
    max-width: 100%;
    height: 1rem;
    transition: 1s all;
}
#map {
    max-width:  100%;
    height: 50%;
}
.providers {
    padding-left: 3rem;
    padding-top: 1rem;
    padding-right: 1rem;
    text-align: left;
    position: relative;
    cursor: pointer;
}

.provider {
    /* border: 1px solid red;
    margin-bottom: 10px; */
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--lightgrey);
    /* padding-bottom: 0.3rem; */
    transition: 0.5s all;
}
.provider:hover svg {
    /* background: var(--lightgrey);
    transition: 0.5s all;
    cursor: pointer; */
    /* transform: scale(1.5);
    transition: 1s all;
    fill: red;
    cursor: pointer; */
}
.pr_name {
    font-size: 0.85rem;
    font-weight: 300;
}
.pr_adr {
    font-size: 0.9rem;
    padding: 0.5rem 0 ;
    font-weight: 400;
    display: flex;
    align-items: center;
}
.pr_doc {
    font-weight: 300;
    font-size: 0.85rem
}
.pr_data{
    font-weight: 300;
    font-size: 0.85rem;
    padding-top: 0.5rem;
    display: flex;
    align-items: center;
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
    background: white;
    width: 25rem;
    box-shadow: 0px 0px 10px rgba(177, 181, 193, 0.3);
    height: 85vh;
    overflow: auto;

}
</style>
