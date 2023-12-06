<script lang="ts">
  import uniswapLogo from '../../public/images/uniswap.svg'

  export let handleClick: () => void = () => {
    // Open Uniswap
    window.open(
      'https://app.uniswap.org/#/swap?inputCurrency=0x4a81f8796e0c6ad4877a51c86693b0de8093f2ef&outputCurrency=ETH',
      '_blank'
    )
  }
</script>

<button on:click={handleClick}>
  UNISWAP
  <!-- <img src={uniswapLogo} alt="uniswap-button" /> -->
</button>

<style lang="scss">
  @import '../../styles/colours';
  button {
    all: unset; /* Reset default styles */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 16px;
    border-radius: 5px;
    border: 2px solid $primary;
    box-shadow: 0px 0px 5px 0px $primary;
    font-size: 1.5rem;
    user-select: none; /* Prevent text selection */
    background-color: rgb(252, 114, 255); /* Set a neutral background */
    cursor: pointer; /* Change cursor to pointer to indicate it's clickable */
    height: 100%;
    width: auto; /* Adjust width as needed */
    min-width: 160px;

    color: inherit; /* Inherit text color from parent */
  }

  button:hover {
    background-color: rgb(252, 114, 255);
    box-shadow:
      0px 0px 5px 0px $primary_border,
      0px 0px 10px 0px $primary_border,
      0px 0px 15px 0px $primary_border,
      0px 0px 20px 0px $primary_border;
    cursor: pointer;
  }

  button:active {
    background-color: rgb(252, 114, 255);
    box-shadow:
      0px 0px 5px 0px $primary_border,
      0px 0px 10px 0px $primary_border,
      0px 0px 15px 0px $primary_border,
      0px 0px 20px 0px $primary_border;
    cursor: pointer;
  }
</style>
