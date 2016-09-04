<style>
    .container{display:flex;height:100%}
</style>

<template>
    <div class="container">
          <vnav></vnav>
          <div class="main">
              <vheader></vheader>
              <vmain></vmain>
          </div>
    </div>
</template>

<script>
import vheader from './components/public/header'
import vnav from './components/public/nav'
import vmain from './components/public/main'

export default {
  components: {
    vheader,
    vnav,
    vmain
  }
}
</script>
