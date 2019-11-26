<script>
  import Tldr from "./valla/Tldr";
  import Context from "./valla/Context";
  import LongerTldr from "./valla/LongerTldr";
  import TheDonation from "./valla/TheDonation";
  import OnTheDonation from "./valla/OnTheDonation";

  const tabs = [
    "Tldr",
    "LongerTldr",
    "Context",
    "TheDonation",
    "OnTheDonation"
  ];
  let tabIndex = 0;
  $: tab = tabs[tabIndex];
</script>

<style>
  button {
    text-align: center;
    text-decoration: none;
    font-weight: bold;
  }
  .active {
    background-color: pink;
    color: black;
  }
  .inactive {
    background-color: white;
    color: #999;
  }
  button:hover {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .document-title {
    color: #39ff14;
    font-size: 110%;
    font-weight: bold;
    padding: 10px 0 10px 20px;
  }

  /* The navigation bar */
  .navbar {
    overflow: hidden;
    background-color: #333333;
  }

  /* Links inside the navbar */
  .navbar button {
    text-align: center;
    padding: 16px 16px;
    text-decoration: none;
    border-style: none inset none none;
    border-width: 1px;
    border-color: #222222;
  }

  /* Change background on mouse-over */
  .navbar button:hover {
    background: #ddd;
    color: black;
    cursor: pointer;
  }
</style>

<div>
  <div class="navbar">
    <div class="document-title">
      summary:
      <i>on the donation of constantine</i>
      by lorenzo valla
    </div>
    {#each tabs as tab, index}
      <button
        class={tabIndex === index ? 'active' : 'inactive'}
        on:click={() => (tabIndex = index)}>
        {tab}
      </button>
    {/each}
  </div>

  {#if tab === 'Tldr'}
    <Tldr />
  {:else if tab === 'LongerTldr'}
    <LongerTldr />
  {:else if tab === 'Context'}
    <Context />
  {:else if tab === 'TheDonation'}
    <TheDonation />
  {:else if tab === 'OnTheDonation'}
    <OnTheDonation />
  {/if}
</div>
