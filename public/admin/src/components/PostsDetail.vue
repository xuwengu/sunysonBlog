<style>
.edit-textarea {
    flex: 1;
    border-right: 1px solid #ccc;
    padding: 20px
}

.preview {
    flex: 1;
    padding: 20px;
}

input,
textarea {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
}

div[contenteditable="true"] {
    border: 1px solid #ccc;
    padding: 5px;
}

.detail-content {
    min-height: 50vh
}
</style>
<template>
<div class="page-view page-post_detail">
    <div>
        <ul>
            <li><a href="javascript:;" @click="save(true)">发布</a></li>
            <li><a href="javascript:;" @click="save(false)">保存为草稿</a></li>
            <li><a href="javascript:;" @click="del">删除</a></li>
        </ul>
    </div>
    <div class="flex flex-center">
        <div class="edit-textarea">
            <input type="" name="" v-model="detail.title"><br>
            <div contenteditable="true">
                {{detail.introduce}}
            </div>
            <p>
                创建时间: {{detail.create_time}} | 最后更新时间： {{detail.last_update_time}}
            </p>
            <textarea v-model="detail.content" class="detail-content" @keydown="edit"></textarea>
        </div>
        <div class="preview">
            <div v-html="compileMarkdown(detail.content)"></div>
        </div>
    </div>
</div>
</template>
<script>
import marked from 'marked'
import _ from 'lodash'
import timeago from 'timeago.js'
export default {
    data() {
        return {
            detail: {
                title: '',
                introduce: '',
                create_time: null,
                last_update_time: null,
                content: '# hello world!!!'
            }
        }
    },
    created: function() {
        var id = this.$route.params.id
        if (id) {
            fetch(`/admin/posts/detail/${id}`)
                .then(res => res.json())
                .then(data => {
                    data.info.post.create_time = timeago().format(new Date(data.info.post.create_time), 'zh_CN')
                    data.info.post.last_update_time = timeago().format(new Date(data.info.post.last_update_time), 'zh_CN')
                    this.detail = data.info.post
                })
        }
    },
    methods: {
        compileMarkdown: marked,
        /*update:_.debounce(function(e){
            this.detail.content = e.target.value
            var keyCode = e.keyCode || e.which
            if(keyCode == 'Tab'){
                e.preventDefault();
            }
            console.log(e)
        },50),*/
        edit: function(e) {
            if (e.keyCode == 9) {
                e.preventDefault();
                e.target.value = e.target.value + '\t'
            }
            this.detail.content = e.target.value
        },
        save: function(is_publish) {
            if (this.$route.params.id) {
                let url = is_publish ? '/admin/posts/publish' : '/admin/posts/save_to_draft'
                fetch(url, {
                        method: 'POST',
                        body: this.detail
                    }).then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            } else {
                if (is_publish) {
                    this.detail.is_publish = true
                } else {
                    this.detail.is_publish = false
                }
                fetch('/admin/posts/add', {
                        method: 'POST',
                        body: this.detail
                    }).then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            }
        },
        del: function() {
            fetch('/admin/posts/del/' + this.detail._id)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }
}
</script>
