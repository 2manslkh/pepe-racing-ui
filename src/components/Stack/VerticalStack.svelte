<script lang="ts">
</script>

<container>
  <slot />
</container>

<style lang="scss">
  @import "../../styles/colours";
  container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;

    gap: 1rem;
    word-break: break-all;
  }
</style>
