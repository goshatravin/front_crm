<template>
    <div class="personal">
        <header>
            <navigation /> <!-- модуль навигации -->
            <main>
                <topPanel title="Личный кабинет" /> <!-- верхняя панель пользователя -->
                <div class="components-box">
                    <userCard />
                    <userPin />
                    <achivment/>
                </div>
            </main>
        </header>
    </div>
</template>

<script>
import navigation from '../components/navigation.vue';
import topPanel from '../components/topPanel.vue';
import userCard from '../components/personal-components/userCard.vue';
import userPin from '../components/personal-components/userPin.vue';
import achivment from '../components/personal-components/achievement.vue';

export default {
    components: {
        navigation,
        topPanel,
        userCard,
        userPin,
        achivment,
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
.components-box {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    max-width: 90rem;
}

</style>
