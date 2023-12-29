<template>
    <div>
        <p>{{ title }}</p>
        <remoteTopbar />
    </div>
</template>

<script>
import remoteTopbar from 'remote-app/TopBar';

export default {
    name: 'host-app',
    data() {
        return {
            title: 'i am vue host'
        }
    },
    components: {
        remoteTopbar,
    }
}
</script>