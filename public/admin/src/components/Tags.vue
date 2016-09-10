<style scoped>

</style>
<template>
    <div class="page-tags">
        <section>
            <h2 class="section-header">标签管理</h2>
            <div class="section-body">
                <div class="card" v-for="(item,index) in tags" v-bind:key="index">
                    <div class="card-header">
                        <div class="operation">
                            <a  @click="handleEdit(item)">编辑</a>
                        </div>
                        <h4>
                            <span v-show="!item.is_edit">{{item.title}}</span>
                            <input v-show="item.is_edit" type="text" v-model="item.index" @blur="handleUpdate(item)"/>
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default{
        data:function(){
            return {
                tags:[]
            } 
        },
        created:function(){
            fetch('/admin/tags').
                then(res=>res.json()).
                then(data=>{
                    this.tags = data.info.tags
                })
        },
        methods:{
            handleEdit:function(item){
                Vue.set(item,'is_edit',true)
            },
            handleUpdate:function(item){
                fetch('/admin/tags/update',{
                    method:'POST',
                    body:item
                }).then(res=>res.json())
                .then(data=>{
                    console.log(data)
                })
            }
        }
    }
</script>