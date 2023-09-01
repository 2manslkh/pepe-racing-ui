<script lang="ts">
  import TelegramLogo from "../../public/images/telegram.png";
  export let handleClick: () => void = () => {
    console.log("Unassigned Button");
  };
  export let buttonText = "INSERT_TEXT";
</script>

<a href="https://t.me/peperacing_bot" target="_blank">
  <button on:click={handleClick}>
    <button-text>{buttonText}</button-text>
    <img src={TelegramLogo} alt="telegram-logo" width="30px" height="25px" />
  </button>
</a>

<style lang="scss">
  @import "../../styles/colours";
  @keyframes glowing {
    0% {
      box-shadow: 0 0 5px $primary_border;
    }
    50% {
      box-shadow: 0 0 20px $primary_border, 0 0 30px $primary_border;
    }
    100% {
      box-shadow: 0 0 5px $primary_border;
    }
  }

  button {
    /* Buttons */

    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    gap: 8px;

    width: 200px;
    height: 52px;

    background: none;
    border-radius: 10px;
    border: 3px solid $primary_border;
    box-shadow: 0px 0px 5px 0px $primary_border, 0px 0px 10px 0px $primary_border,
      0px 0px 30px 0px $primary_border;
    /* Inside auto layout */
    animation: glowing 1.5s infinite alternate;

    cursor: pointer;
  }

  button:active {
    background: $secondary_1;
    border: 0px;
  }
  button:hover {
    background: rgba(255, 255, 255, 0.9);
    border: 0px;
  }

  button-text {
    /* NEXT */
    font-family: "Modeseven";
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: $secondary_1;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
</style>
