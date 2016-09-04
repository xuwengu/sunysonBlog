<style scoped>
    header{height:68px;line-height:68px;display:flex;justify-content:space-between;}
</style>
<template>
    <header>
        <div class="slogan">三分天注定，七分靠打拼。</div>
        <div class="info">
            Hi,{{username}}
        </div>
    </header>
</template>

<script>
export default {
  data () {
    return {
      username: 'Sunny-L'
    }
  }
}
</script>