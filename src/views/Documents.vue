<template>
    <div class="about">
        <header>
            <navigation /> <!-- модуль навигации -->
            <main>
                <topPanel title="Список дел" /> <!-- верхняя панель пользователя -->
                <div class="components-box">
                    <documentList/>
                    <expressBar/>
                </div>
            </main>
        </header>
    </div>
</template>

<script>

import navigation from '../components/navigation.vue';
import topPanel from '../components/topPanel.vue';
import documentList from '../components/document-components/documentList.vue'
import expressBar from '../components/expressBar.vue'

export default {
    components: {
        navigation,
        topPanel,
        documentList,
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
    overflow: hidden;
}
.components-box {
    display: flex;
    justify-content: flex-start;
    max-width: 100%;
    flex-direction: row;
}

</style>
