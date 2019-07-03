<template>
    <header> 
        <navigation /> <!-- модуль навигации -->
        <topPanel title="Стартовая страница" />   <!-- верхняя панель пользователя -->
    </header>
</template>
<script>
import navigation from '../components/navigation.vue';
import topPanel from '../components/topPanel.vue';

export default {
    components: {
        navigation,
        topPanel,
    },
    created() {
        window.onbeforeunload = function() {
            return 'You have unsaved changes!';
        }
    },
};
</script>

<style scoped>
header {
    display: flex;
}
</style>
