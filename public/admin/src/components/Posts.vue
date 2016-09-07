<style scoped>

</style>
<template>
    <div class="page-system">
        this is posts page...
    </div>
</template>
<script>
    export default{
        data(){
            fetch('/admin/posts').then(res=>{
                    console.log(res)
                })
            return {}
        }
    }
</script>