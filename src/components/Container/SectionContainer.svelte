<script lang="ts">
  export let id = "";
  export let stripes: boolean = false;

  let stripeClass = stripes
    ? "background: repeating-linear-gradient(to bottom,#049c5f26,#049c5f26 5px,transparent 5px,transparent 10px); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;"
    : "";
</script>

<div style={stripeClass}>
  <container {id}>
    <slot />
    <!-- <div style={stripeClass} /> -->
  </container>
</div>

<style lang="scss">
  @import "../../styles/colours";
  container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
</style>
