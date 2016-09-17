<style scoped>

</style>
<template>
<div class="swal-layer" :class="type">
    <div class="swal-header">
        <h5>{{text}}</h5>
    </div>
</div>
</template>

<script>
export default {
    props: ['text', 'type'],
    data() {
        return {}
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {},
    components: {}
}
</script>
