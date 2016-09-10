<style scoped>

</style>
<template>
    <div class="page-tags">
        <section>
            <h2 class="section-header">标签管理</h2>
            <div class="section-body">
                <div class="card" v-for="item in items">
                    <div class="card-header">
                        <div class="operation">
                            <a href="">编辑</a>
                        </div>
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
            return {}
        },
        mounted:function(){
            
        }
    }
</script>