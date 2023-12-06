<script lang="ts">
  import { showToast } from '../../stores'
  // Specify the string you want to copy
  export let stringToCopy: string

  // Function to handle click and copy to clipboard
  function handleClick() {
    navigator.clipboard
      .writeText(stringToCopy)
      .then(() => {
        showToast.set(true)
        setTimeout(() => showToast.set(false), 3000) // Hide the toast after 3 seconds
      })
      .catch(err => {
        console.error('Failed to copy text: ', err)
      })
  }
</script>

<div on:click={handleClick}>
  <slot />
</div>

<style lang="scss">
  @import '../../styles/colours';

  div {
    display: flex;
    padding: 16px;
    align-items: center;
    justify-content: center;
    gap: 40px;
    border-radius: 5px;
    border: 2px solid $primary_border;
    box-shadow: 0px 0px 5px 0px $primary_border;
    height: 100%;
    min-width: 400px;

    font-size: 1.5rem;
    user-select: none; /* Prevent text selection */
    font-size: x-large;
  }

  @media (max-width: 768px) {
    div {
      font-size: small;
      min-width: 240px;
    }
  }

  div:hover {
    background-color: $secondary_1;
    box-shadow:
      0px 0px 5px 0px $primary_border,
      0px 0px 10px 0px $primary_border,
      0px 0px 15px 0px $primary_border,
      0px 0px 20px 0px $primary_border;
    cursor: pointer;
  }
</style>
