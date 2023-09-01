<script lang="ts">
</script>

<container>
  <slot />
</container>

<style lang="scss">
  @import "../../styles/colours";
  container {
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: center;

    width: 100%;

    gap: 5rem;
    word-break: break-all;
  }
</style>
