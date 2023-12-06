<script lang="ts">
  import PlaynowButton from '../components/Button/PlaynowButton.svelte'
  import SectionContainer from '../components/Container/SectionContainer.svelte'
  import VerticalStack from '../components/Stack/VerticalStack.svelte'
  import HorizontalStack from '../components/Stack/HorizontalStack.svelte'

  import Screenshot_1 from '../public/images/screenshot-1.png'
  import PPTOKEN from '../public/images/pprace-token.png'
  import DextoolsButton from '../public/images/dextools-button.png'
  import GitbookButton from '../public/images/gitbook-button.png'
  import { breakpoints } from '../styles/breakpoints'

  import TextContainer from '../components/Container/TextContainer.svelte'
  import ContractContainer from '../components/Container/ContractContainer.svelte'
  import {
    PEPERACING_TOKEN_ADDRESS,
    PEPERACING_RACE_ADDRESS,
  } from '../constants'
  import { formatAddress } from '../utils'
  import UniswapButton from '../components/Button/UniswapButton.svelte'
  import DexscreenerButton from '../components/Button/DexscreenerButton.svelte'

  let backgroundEl: any
  let screenSize: number
</script>

<svelte:window bind:innerWidth={screenSize} />

<SectionContainer id="main" stripes={true}>
  <VerticalStack>
    <title><span style="color: #049C5F">PepeRace</span></title>
    <description
      >First Telegram <span style="color: #049C5F"
        ><span style="color: #049C5F">PePe</span></span
      >
      Race Bot <br /> Bet on your winning
      <span style="color: #049C5F">PePe</span>
    </description>
    <div style="height: 24px;" />
    <PlaynowButton buttonText="PLAY NOW" />
  </VerticalStack>
</SectionContainer>

<!-- THE GAME SECTION -->
<SectionContainer id="the-game">
  <pepe-underlay />

  <VerticalStack>
    <section-title>The Game</section-title>
    <HorizontalStack>
      {#if screenSize >= breakpoints.large}
        <img
          src={Screenshot_1}
          alt="screenshot"
          style="border-radius: 5px;
        border: 2px solid #049C5F;
        box-shadow: 0px 0px 6px 0px #049C5F"
        />
      {/if}
      <VerticalStack>
        <game-rule>
          1. <span style="color: #049C5F">PepeRace</span> starts every 5
          minutes, with 4 PePes in race. /bet on your favourite
          <span style="color: #049C5F">PePe</span> suit ()
        </game-rule>
        <game-rule>
          2. <span style="color: #049C5F">PepeRace</span> Begins. Your
          <span style="color: #049C5F">PePe</span> leaps forward 1 tile when your
          suit is drawn.
        </game-rule>
        <game-rule
          >3. Your <span style="color: #049C5F">PePe</span> wins if it is the
          first
          <span style="color: #049C5F">PePe</span> crossing the finish line.
        </game-rule>
        <game-rule>
          4. The winning <span style="color: #049C5F">PePe</span> will earn the
          stakes paid out by the bets placed by players on losing Pepe. Settled
          by the
          <span style="color: #049C5F">PepeRace</span> contract.
        </game-rule>
      </VerticalStack>
    </HorizontalStack>
  </VerticalStack>
</SectionContainer>

<SectionContainer id="how-to-bet" stripes={true}>
  <pepe-underlay />

  <VerticalStack>
    <section-title>How To Bet</section-title>
    <HorizontalStack>
      <VerticalStack>
        <game-rule>
          1. Connect Wallet via @PePeRace_bot Message @PePeRace_bot on Telegram
          and type /Connect
        </game-rule>
        <game-rule> 2. XXX XXXXX </game-rule>
        <game-rule>
          3. Place your /Bet during Race Type /Bet and indicate your amount and
          PePe Suit. E.g. “/Bet 1000 hearts” to bet 1,000 $PPRACE on hearts PePe
        </game-rule>
        <PlaynowButton buttonText="PLAY NOW" />
      </VerticalStack>
      {#if screenSize >= breakpoints.large}
        <img
          src={Screenshot_1}
          alt="screenshot"
          style="border-radius: 5px;
  border: 2px solid #049C5F;
  box-shadow: 0px 0px 6px 0px #049C5F"
        />
      {/if}
    </HorizontalStack>
  </VerticalStack>
</SectionContainer>

<SectionContainer id="token">
  <pepe-underlay />

  <VerticalStack>
    <section-title>$PPRACE</section-title>
    <game-rule>
      <span style="color: #049C5F">$PPRACE</span> is the betting currency to bet
      in the
      <span style="color: #049C5F">PePeRace</span>. Deflationary with burns from
      every round.
    </game-rule>
    <pepe-token-wrapper>
      <img
        src={PPTOKEN}
        alt="pepetoken"
        style="width: 100%; height: 100%; object-fit: cover;"
      />
    </pepe-token-wrapper>
    <ContractContainer stringToCopy={PEPERACING_TOKEN_ADDRESS}
      >{`$PPRACE: ${formatAddress(
        PEPERACING_TOKEN_ADDRESS
      )}`}</ContractContainer
    >
    {#if screenSize >= breakpoints.large}
      <HorizontalStack>
        <UniswapButton />
        <DexscreenerButton />
      </HorizontalStack>
    {/if}
    {#if screenSize < breakpoints.large}
      <div>
        <UniswapButton />
        <DexscreenerButton />
      </div>
    {/if}
  </VerticalStack>
</SectionContainer>
{#if screenSize >= breakpoints.large}
  <HorizontalStack>
    <VerticalStack>
      <subtitle>Taxes</subtitle>
      <TextContainer>
        <description>
          5% Buy Tax<br />5% Sell Tax<br />X% XXX<br />Y% XXX<br />Z% XXX
        </description>
      </TextContainer>
    </VerticalStack>
    <VerticalStack>
      <subtitle>Race Prize Breakdown</subtitle>
      <TextContainer>
        <description>
          90% split amongst winners<br /> 5% burn <br />5% rev share
        </description>
      </TextContainer>
    </VerticalStack>
  </HorizontalStack>
{/if}

{#if screenSize < breakpoints.large}
  <VerticalStack>
    <VerticalStack>
      <subtitle>Taxes</subtitle>
      <TextContainer>
        <description>
          5% Buy Tax<br />5% Sell Tax<br />X% XXX<br />Y% XXX<br />Z% XXX
        </description>
      </TextContainer>
    </VerticalStack>
    <VerticalStack>
      <subtitle>Race Prize Breakdown</subtitle>
      <TextContainer>
        <description>
          90% split amongst winners<br /> 5% burn <br />5% rev share
        </description>
      </TextContainer>
    </VerticalStack>
  </VerticalStack>
{/if}

<info-container>
  <subtitle>Contracts</subtitle>
  <ContractContainer stringToCopy={PEPERACING_TOKEN_ADDRESS}
    >{`$PPRACE: ${formatAddress(PEPERACING_TOKEN_ADDRESS)}`}</ContractContainer
  >
  <ContractContainer stringToCopy={PEPERACING_RACE_ADDRESS}
    >{`PEPERACING: ${formatAddress(
      PEPERACING_RACE_ADDRESS
    )}`}</ContractContainer
  >
</info-container>

<PlaynowButton buttonText="PLAY NOW" />

<style lang="scss">
  @import '../styles/colours';
  @import '../styles/breakpoints.scss';

  title {
    width: auto;

    display: flex;
    align-items: center;

    color: $secondary_1;
    text-shadow: 0px 0px 36px $secondary_1;
    font-size: 9em;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  section-title {
    width: auto;

    display: flex;
    align-items: center;

    color: $secondary_1;
    text-shadow: 0px 0px 36px $secondary_1;
    font-size: 4.5em;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  subtitle {
    width: auto;

    display: flex;
    align-items: center;

    color: $secondary_1;
    text-shadow: 0px 0px 36px $secondary_1;
    font-size: 2em;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  description {
    max-width: 440px;
    width: 440px;

    align-items: center;
    text-align: center;

    color: $primary;
    font-size: 1.5em;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    word-break: normal;
  }

  game-rule {
    align-items: left;
    text-align: left;
    max-width: 440px;
    align-self: left;
    align-content: left;

    color: $primary;
    font-size: 1em;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    word-break: normal;
    text-shadow: 0px 0px 36px $secondary_1;
    padding: 1rem;
  }

  @media (max-width: $large) {
    title {
      font-size: 4.5rem;
    }

    section-title {
      font-size: 2.5rem;
    }

    subtitle {
      font-size: 1.5rem;
    }

    description {
      font-size: 1rem;
      width: 300px;
    }

    game-rule {
      font-size: 1rem;
    }
  }

  @keyframes spinCoin {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(1turn); /* or you could use 360deg */
    }
  }

  pepe-token-wrapper {
    animation: spinCoin 3s infinite;
    width: 320px;
    height: 320px;
    padding-bottom: 2rem;
  }

  pepe-underlay {
    background: url('../public/images/pepe-ascii.png') no-repeat center center
      fixed;
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0px;
    opacity: 0.5;
    z-index: -1;
  }
  info-container {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: top;
    justify-content: center;
    padding: 2rem;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
</style>
