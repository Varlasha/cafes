<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Test',
    props: {
        title: {
            type: String,
            default: "Название ресторана"
        },
        description: {
            type: String,
            default: "Вкусно от слова бесконечно! Ресторан в прекрасном месте с потрясающими видами."
        }
    }
}
</script>
