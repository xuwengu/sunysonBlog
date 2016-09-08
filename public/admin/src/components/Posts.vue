<style scoped>

</style>
<template>
    <div class="page-system">
        <section>
            <h2 class="section-header">文章管理</h2>
            <div class="section-body">
                <div class="card" v-for="item in items">
                    <div class="card-header">
                        <h4>{{item.title}}</h4>
                        <span>{{item.last_update_time}}</span>
                    </div>
                    <div class="card-body">{{item.introduce}}</div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                items:[]
            }
        },
        mounted:function(){
            console.log(this)
            fetch('/admin/posts')
                .then(res=>res.json())
                .then(data=>{
                    this.items = data
                })
        }
    }
</script>