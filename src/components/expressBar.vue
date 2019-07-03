<template>
    <div class="express">
        <div class="overlay" @click="closeAll" v-if="overlay">
        </div>
        <!-- <div class="close" @click="closeAll" v-if="overlay">Закрыть</div> -->
         <iframe frameborder="0" id="frame" name="theFrame" v-if="frame">
         </iframe>
           <div class="express-bar__line">
           <div class="express-bar__title"   v-on:click="showContent('notifi')" >
                <p class="express-bar__text">Уведомления</p>
                <img class="message__arrow" name="notifi"  src="../assets/express-img/arrow.svg" alt="стрелочка">
            </div>
            <div class="notifi" style="display:none">
             
            </div>
        </div>
          <div class="express-bar__line">
           <div class="express-bar__title"    v-on:click="showContent('mail')" >
                <p class="express-bar__text">Почта</p>
                <img class="message__arrow" name="mail"  src="../assets/express-img/arrow.svg" alt="стрелочка">
            </div>
            <div class="mail" style="display:none">
               
            </div>
        </div>

        <div class="express-bar__line">
           <div class="express-bar__title" v-on:click="showContent('message')"  >
                <p class="express-bar__text">Сообщения</p>
                <img class="message__arrow" name="message"  src="../assets/express-img/arrow.svg" alt="стрелочка">
            </div>
            <div class="message" style="display:none" >
             
            </div>
        </div>
        
        <div class=" express-bar__line ">
            <div class="express-bar__title "  v-on:click="showContent('comment', !block['comment'])"  >
                <p class="express-bar__text ">Комментарий</p>
                <img class="comments__arrow" name="comment"  src="../assets/express-img/arrow.svg" alt="стрелочка" v-bind:class="{ rotated: block['comment']}">
            </div>
            <div class="comment" v-show="block['comment']">
       <div class="express__block" v-for="item in data" :key="item.desc">
            <div class="express__description">
                <!-- <p class="express__text title">Описание</p> -->
                <p class="express__content">{{item.desc}}</p>
            </div> 
            <div class="express__file">
                <div class="express__files" @click="getFile(file.id_claim_file)"  v-for="file in item.files" :key="file.size"> 
                    <div class="file__img--flex">
                        <p class="file__size file__img" :class=file.extention :title=file.name_file></p>
                        <div class="file__size file__size--small">{{file.size}}</div>
                    </div>
                    <div class="file__desc--flex">
                        <p class="file__size file__type">{{file.file_type}}</p>
                        <p class="file__size file__name">{{file.name_file}}</p>
                        <p class="file__size file__desc">{{file.file_desc}}</p>
                    </div>
                </div>
            </div>
        </div>
            </div>
       
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
             EVENT_LIST: this.$root._data.EVENT_LIST,
             data: [],
             showComments: false,
             getData: '',
             frame: false,
             overlay: false,
             //
             block: []
        };
    },
    mounted(){
        //  this.block['comment'] = false
         this.$root.$on(this.EVENT_LIST.SET_FILES, (arr) => {
              this.data = arr
            });
        this.$root.$on(this.EVENT_LIST.CLOSE_OPEN_FILES, (d)=>{
              this.showContent('comment',true)
            });
        
    },
    methods:{
        showContent:function(e,a){
            if (a === undefined) {
                a = true
            }
            console.log(a);
            this.$set(this.block, e, a)
        },
        getFile:function(id){
            axios({
                url: 'xxxx',
                
                    method: 'GET',
                })
                .then(resp =>{
                    console.log(resp.data);
                    if(resp.data){
                        this.frame = true
                        this.overlay = true
                    }else{
                        this.frame = false
                        this.overlay = false
                    }
                    setTimeout(lol,1000)
                    function lol(){
                        window.open(resp.data,"theFrame");
                    }
                    
                })
            // axios.get('http://quasar.accidentlaw.ru/sirius/get_file?id_claim_file='+id,{crossdomain: true})
            // .then(resp =>{
            //     console.log(resp);
            // })
        },
        closeAll:function(){
            this.overlay = false;
            this.frame = false;
        }
    }
};

</script>

<style scoped>
/* .close{
    position: absolute;
    right: 2rem;
    top: 5rem;
    background: var(--rageblue);
    color: var(--white);
    width: 5rem;
    height: 2.1rem;
    border-radius: 0.3125rem;
    border: none;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
} */
.overlay{
    position: absolute;
    opacity: 1;
    background: var(--grey);
    width: 100%;
    height: 95%;
    left: 0;
    cursor: pointer;
}
.iframe-button{
    width: 10rem;
    height: 10rem;
    background: red;
}
#frame{
    position: absolute;
    top: 5%;
    left:10%;
    width: 75rem;
    height: 57.5rem;
    border: 5px solid var(--grey);
}
#frame:after{
    content: "12312";
}
.rotated{
    transform: rotate(180deg);
}

.express-bar__title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left:var(--paddingleft);
    padding-right: 1rem;
    padding-top: 1.5rem;
    padding-bottom: 0.5rem;
     cursor: pointer;
}
.express-bar__line{
    border-bottom: 1px solid rgba(177, 181, 193, 0.2);
    padding-bottom: 1.0rem;
    /* box-shadow: 0px 1px 1px rgba(177, 181, 193, 0.3); */
}
.file__img{
    /* background: url("../assets/documents-img/file__img.svg"); */
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 4rem;
    width: 4rem;
    cursor: pointer;
    margin-right: 0.5rem; 
}
.jpg{
    background: url("../assets/documents-img/jp.svg");
}
.jpeg{
    background: url("../assets/documents-img/jp.svg");
}
.mp3{
    background: url("../assets/documents-img/mp.svg");
}
.png{
    background: url("../assets/documents-img/pn.svg");
}
.doc{
    background: url("../assets/documents-img/doc.svg");
}
.pdf{
    background: url("../assets/documents-img/pd.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 4rem;
    width: 4rem;
    cursor: pointer;
}
.express__file{
    display: flex;
    flex-wrap: wrap;
}

.file__size{
    font-size: 0.8rem;
}
.file__name{
    color: var(--normalgrey);
    font-weight: 500;
}
.file__type{
    color: var(--normalgrey);
    font-weight: 500;
    padding-bottom: 0.5rem;
    text-align: right;
}
.file__desc{
    /* color: var(--normalgrey); */
    font-weight: 400;
    padding-top: 0.2rem;
}
.express{
    flex: 1;
    box-shadow: var(--boxShadow);
    background: var(--white);
    overflow-y:scroll;
    height: 95vh;
}
.express__content{
    font-size: 0.8rem;
    /* line-height: 1.3rem; */
}
.express__description{
    padding: 0.5rem 0;
    padding-left: var(--paddingleft);
    padding-right: 1rem;
    width: 100%;
}
.express__files{
    padding-left: var(--paddingleft);
    padding-right: 1.5rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.express__text{
    padding-bottom: 1rem;
    color: var(--normalgrey);
}
.file__img--flex{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.file__size--small{
    font-size: 0.7rem;
    color: var(--normalgrey);
}
</style>
