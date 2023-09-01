<script lang="ts">
  // variables
  import TwitterLogo from "../../public/images/twitter.png";
  import TelegramLogo from "../../public/images/telegram.png";

  let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />

<footer-wrapper>
  <!-- <div style="display:flex; flex-direction: column;"> -->
  <icons-wrapper>
    <img src={TwitterLogo} alt="twitter" width="30px" height="25px" />
    <img src={TelegramLogo} alt="telegram" width="30px" height="25px" />
  </icons-wrapper>
  <small-text>(C) PEPERACE 2023. ALL RIGHTS RESERVED</small-text>
  <!-- </div> -->
</footer-wrapper>

<style lang="scss">
  @import "../../styles/colours";
  @import "../../styles/breakpoints";

  footer-wrapper {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    /* position: fixed; */

    width: 100%;
    max-width: 1440px;
    gap: 2rem;
    padding: 32px;
    height: 240px;

    @media screen and (max-width: $large) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-left: 0px;
      padding-right: 0px;
      height: 240px;
    }
  }

  icons-wrapper {
    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 2rem;

    width: auto;

    /* Inside auto layout */
    color: $background;
    font-size: 1rem;
    font-weight: 400;
  }

  small-text {
    color: #fff;
    text-align: center;
    font-family: ModeSeven;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
</style>
