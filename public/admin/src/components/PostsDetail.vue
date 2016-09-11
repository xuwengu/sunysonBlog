<style>
    .edit-textarea{flex:1;border-right:1px solid #ccc;padding:20px}
    .preview{flex:1;padding:20px;}
    input,textarea{width:100%;padding:5px;}
</style>
<template>
<div class="page-post_detail">
    <div>
        <ul>
            <li><a href="">发布</a></li>
            <li><a href="">保存为草稿</a></li>
            <li><a href="">删除</a></li>
        </ul>
    </div>
    <div class="flex flex-center">
        <div class="edit-textarea">
            <input type="" name="" v-model="detail.title"><br>
            <input type="" name="" v-model="detail.introduce"> <br>
            <p>
                创建时间: {{detail.create_time}} | 最后更新时间： {{detail.last_update_time}}
            </p>
            <textarea v-html="detail.content"></textarea>
        </div>
        <div class="preview" >
            <textarea  v-html="detail.content"></textarea>
        </div>
    </div>
</div>
</template>
<script>
    import marked from 'marked'
    export default {
        data(){
            return {
                detail:{
                    title:'',
                    introduce:'',
                    create_time:null,
                    last_update_time:null,
                    content:'# hello world!!!'
                }
            }
        },
        created:function(){
            var id = this.$route.params.id
            fetch(`/admin/posts/detail/${id}`)
                .then(res=>res.json())
                .then(data=>{
                    this.detail = data.info.detail
                })
        },
        filters:{
            marked:marked
        }
    }
</script>