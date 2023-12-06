<script lang="ts">
    // Specify the string you want to copy
    const stringToCopy = 'Your text here';

// Function to handle click and copy to clipboard
    function handleClick() {
      navigator.clipboard.writeText(stringToCopy)
        .then(() => {
          console.log('Text copied to clipboard');
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    }
</script>

<div on:click={handleClick} on:keydown={handleClick}>
  <slot />
</div>

<style lang="scss">
  @import "../../styles/colours";
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
    font-size: 1.5rem;
    user-select: none; /* Prevent text selection */
  }

  div:hover {
    background-color: $secondary_1;
    box-shadow: 0px 0px 5px 0px $primary_border, 0px 0px 10px 0px $primary_border,
      0px 0px 15px 0px $primary_border, 0px 0px 20px 0px $primary_border;
    cursor: pointer;
  }
</style>
