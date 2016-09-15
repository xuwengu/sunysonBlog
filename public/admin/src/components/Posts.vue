<style scoped>

</style>
<template>
    <div class="page-view page-system">
        <section>
            <h2 class="section-header">文章管理</h2>
            <router-link :to="{path:'posts/add'}">新增</router-link>
            <div class="section-body">
                <div class="card" v-for="(item,index) in items">
                    <div class="card-header">
                        <div class="operation">
                            <router-link :to="{path:'posts/detail/'+item._id}">编辑</router-link>
                        </div>
                        <div class="flex flex-center">
                            <h4>{{item.title}}</h4>
                            <span>{{item.last_update_time}}</span>
                        </div>
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
            fetch('/admin/posts')
                .then(res=>res.json())
                .then(data=>{
                    if(data.code == 0){
                        this.items = data.info.posts
                    }
                })
        },
    }
</script>
