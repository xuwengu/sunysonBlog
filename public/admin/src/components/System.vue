<style scoped>
input{margin:10px 0;}
.save{margin-bottom:20px;}
</style>
<template>
    <div class="page-system">
      <section>
          <h2 class="section-header">系统设置</h2>
          <div class="save">
              <button type="button" class="btn btn-default">更新</button>
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
                <img src="" alt="" />
            </div>
          </div>
      </section>
    </div>
</template>
<script>
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
        }
    }
</script>
