<style scoped>

</style>
<template>
    <div class="page-tags">
        <section>
            <h2 class="section-header">标签管理</h2>
            <div class="section-body">
                <div class="card" v-for="(item,index) in tags" v-bind:key="item.id">
                    <div class="card-header">
                        <div class="operation">
                            <a  v-on:click="handleEdit(index)">编辑{{index}}</a>
                        </div>
                        <h4>
                            <span v-show="!item.isEdit">{{item.title}}{{item.id}}</span>
                            <input v-show="item.is_edit" type="text" name="" v-model="item.index" />
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
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
            handleEdit:function(index){
                this.tags[index].is_edit = true
                // this.tags[index].id = this.tags[index].id + ''
                console.log(this.tags[index])
            }
        }
    }
</script>