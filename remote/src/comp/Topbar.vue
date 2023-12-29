<template>
    <div>
        <p>{{ add }}</p>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'TopBar',
    data() {
        return {
            title: ['This is remote TopBar','remote', 'use', 'lodash']
        }
    },
    computed: {
        add() {
            return _.join(this.title, ' , ')
        }
    }
}
</script>