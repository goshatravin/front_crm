<template>
    <div class="about">
        <header>
            <navigation /> <!-- модуль навигации -->
            <main>
                <topPanel title="О программе" /> <!-- верхняя панель пользователя -->
                <div class="components-box" id="component-box">
                    <aboutVersion />  <!-- Блок с информацией о версии программы -->
                </div>
            </main>
        </header>
    </div>
</template>

<script>

import navigation from '../components/navigation.vue';
import topPanel from '../components/topPanel.vue';
import aboutVersion from '../components/aboutVersion.vue';
import { Socket } from 'dgram';
import { async } from 'q';

export default {
    components: {
        navigation,
        topPanel,
        aboutVersion,
        userData: [],
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
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    flex-direction: column;
    align-items: center;
}
</style>
