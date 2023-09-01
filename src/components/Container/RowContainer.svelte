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
    align-items: center;
    justify-content: center;
    gap: 32px;
  }
</style>
