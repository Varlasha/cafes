<template>
    <div class="page-wrapper">
        <SettingHeader title="Ваши отзывы" />
        <div class="content-wrapper">
            <div v-for="(item, index) in 10" :key="index" class="arr-card">
                <Card title="Название ресторана" sub="от имя пользователя" :items="[
                    { icons: 'trash-alt', val: '' },
                    { icons: 'pen-alt', val: '' }
                ]" />
            </div>
        </div>
        <MainFooter />
    </div>
</template>

<script>
import SettingHeader from '@/components/Joint/SettingHeader.vue';
import MainFooter from '@/components/Joint/MainFooter.vue';
import Card from '@/components/Cards/Card.vue';

export default {
    name: 'AllFeedback',
    components: {
        Card,
        MainFooter,
        SettingHeader
    }
}
</script>