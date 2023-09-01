<script lang="ts">
</script>

<container>
  <slot />
</container>

<style lang="scss">
  @import "../../styles/colours";
  container {
    display: flex;
    padding: 16px;
    align-items: center;
    justify-content: center;
    gap: 40px;
    border-radius: 5px;
    border: 2px solid $primary_border;
    box-shadow: 0px 0px 5px 0px $primary_border;
    height: 100%;
    font-size: 1.5rem;
  }

  container:hover {
    background-color: $secondary_1;
    box-shadow: 0px 0px 5px 0px $primary_border, 0px 0px 10px 0px $primary_border,
      0px 0px 15px 0px $primary_border, 0px 0px 20px 0px $primary_border;
    cursor: pointer;
  }
</style>
