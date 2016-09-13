<style scoped>
input{margin:10px 0;}
.save{margin-bottom:20px;}
</style>
<template>
    <div class="page-system">
      <section>
          <h2 class="section-header">系统设置</h2>
          <div class="save">
              <button type="button" class="btn btn-default" @click="save">更新</button>
          </div>
          <div class="section-body">
            <div class="form-control">
                <label for="">title</label>
                <input type="text" name="name" v-model="settings.title">
            </div>
            <div class="form-control">
                <label for="">keywords</label>
                <input type="text" name="name" v-model="settings.keywords">
            </div>
            <div class="form-control">
                <label for="">description</label>
                <input type="text" name="name" v-model="settings.description">
            </div>
            <div class="form-control">
                <label for="">slogan</label>
                <input type="text" name="name" v-model="settings.slogan">
            </div>
            <div class="form-control">
                <input type="file" id="input_avator" @change="uploadAvator" :key="settings.title">
                <img :src="settings.avator"/>
            </div>
          </div>
      </section>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default{
        data(){
            return {
                settings:{}
            }
        },
        created:function(){
            fetch('/admin/settings')
                .then(res=>res.json())
                .then(data=>{
                    this.settings = data
                })
        },
        methods:{
            save:function(){
                let formData = new FormData()
                let file = document.getElementById('input_avator').files[0]
                console.log(file)
                formData.append('avator',file)
                for(var key in this.settings){
                    formData.append(key,this.settings[key])
                }
                fetch('/admin/settings',{
                    method:'POST',
                    body:formData
                }).then(res=>res.json())
                .then(data=>{
                    console.log(data)
                })
            },
            uploadAvator:function(){
                let formData = new FormData()
                let file = document.getElementById('input_avator').files[0]
                formData.append('avator',file)
                fetch('/admin/upload/avator',{
                    method:'POST',
                    body:formData
                }).then(res=>res.json())
                .then(data=>{
                    if(data.code == 0) {
                        Vue.set(this.settings,'avator','http://localhost:3000'+data.info.imgUrl)
                    }
                })
            }
        }
    }
</script>
