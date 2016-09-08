<style>
header{
    height:68px;display:flex;font-size:14px;line-height:20px;padding:24px 30px;
    justify-content:space-between;border-bottom:1px solid #ccc;box-shadow:1px 0 2px 0 #ccc;
}
section{padding:40px;}
</style>
<template>
    <header>
        <div class="logo"></div>
        <div class="info">{{username}}</div>
    </header>
</template>
<script>
    export default {
        data(){
            return{
                username:'Sunny-L'
            }
        }
    }
</script>