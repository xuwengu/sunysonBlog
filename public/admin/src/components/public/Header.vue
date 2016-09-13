<style>
header{
    height:68px;display:flex;font-size:14px;line-height:20px;padding:24px 30px;
    justify-content:space-between;border-bottom:1px solid #ccc;box-shadow:1px 0 2px 0 #ccc;
}

a:hover{color:#4caf50}
.text-success{color:#4caf50}
.row{display:flex;justify-content: space-between;padding:15px;}
.card{position:relative;padding:20px;box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.33);margin:20px;min-width:240px;}
.card:before{position:absolute;width:4px;left:-1px;top:-1px;bottom:-1px;content:' '}
.card-blue:before{background:#2196f3}
.card-orange:before{background:#ff9800}
.card-red:before{background:#f44336}
.card-green:before{background:#4caf50}

section .section-header{margin-bottom:30px;}

strong{font-weight: 500;font-size:180%}
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
