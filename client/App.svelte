<script>
  import Home from "./components/Home";
  import Past from "./components/Past";
  import Books from "./components/Books";

  const links = [
    { name: "GITHUB", url: "https://github.com/cdrappi" },
    { name: "GIN RICKY", url: "https://heyhowsgame.herokuapp.com" }
  ];
  const tabs = [{ name: "HOME" }, { name: "PAST" }, { name: "BOOKS" }];

  let tabIndex = 0;
  $: tab = tabs[tabIndex];
</script>

<style>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 625px;
    /* background-color: #002b36; */
    background-color: #073642;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  li {
    float: left;
  }

  button {
    cursor: pointer;
  }
  .active {
    background-color: yellow;
  }
  .inactive {
    background-color: gray;
  }

  * {
    font-family: monospace;
  }
</style>

<div>
  <span class="org-document-title">christian drappi</span>

  <div>
    <ul>
      {#each tabs as tab, index}
        <li>
          <button
            class={tabIndex === index ? 'active' : 'inactive'}
            on:click={() => (tabIndex = index)}>
            {tab.name}
          </button>
        </li>
      {/each}
      <li>
        <div style="height: 1em; width: 2em" />
      </li>
      {#each links as link}
        <li>
          <button>
            <a href={link.url} target="_blank">{link.name}</a>
          </button>
        </li>
      {/each}
    </ul>
  </div>

  {#if tab.name === 'HOME'}
    <Home />
  {:else if tab.name === 'PAST'}
    <Past />
  {:else if tab.name === 'BOOKS'}
    <Books />
  {/if}
</div>
