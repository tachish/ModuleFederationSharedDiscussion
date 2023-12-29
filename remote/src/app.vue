<template>
    <div>
        <p>{{ title }}</p>
        <TopBar></TopBar>
    </div>
</template>

<script>
import TopBar from './comp/Topbar.vue';

export default {
    data() {
        return {
            title: 'i am vue romote app'
        }
    },
    components: {
        TopBar: TopBar
    }
}
</script>