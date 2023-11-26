

<template>
  <div class="logo">
    <img src="/images/logo.svg" alt="logo">
  </div>

</template>
<script>
export default {
  name: "Logo"
}
</script>

<style lang="scss" scoped>
.logo {
  max-width: 235px;
  max-height: 35px;
  overflow: hidden;

  >img {
    width: 100%;
    height: 100%;
  }
}
</style>