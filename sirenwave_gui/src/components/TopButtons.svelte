<script lang="ts">
  import Fa from "svelte-fa";
  import { faFolder, faGear } from "@fortawesome/free-solid-svg-icons";
  export let menus: Array<String> = [
    "Playlists",
    "Albums",
    "Tracks",
    "Artists",
  ];
  let menuButtons = [];
  let index = 0;
  for (let i = 0; i < menus.length; i++) {
    menuButtons.push({ text: menus[i], index: i });
  }
</script>

<div>
  <button type="button" class="library">
    <Fa icon={faFolder} size="3.75vh" />
  </button>
  <div class="menu-container">
    {#each menuButtons as menuButton}
      <button
        type="button" class="menu-button">{menuButton.text}</button
      >
    {/each}
  </div>
  <button type="button" class="settings">
    <Fa icon={faGear} size="3.75vh" />
  </button>
</div>

<style>
  button {
    all: unset;
    height: 8vh;
    color: #d6d6d6;
    font-size: 3vh;
    text-align: center;
    background-color: #232323;
    border-radius: 0.5vh;
  }

  button:hover {
    color: #00ffb3;
  }

  .menu-button {
    margin-left: 0.5vw;
    flex-grow: 1;
  }

  .menu-container {
    position: absolute;
    top: 6vh;
    left: calc(4vw + 10vh);
    width: calc(91.5vw - 20vh);
    display: flex;
  }

  .library {
    position: absolute;
    top: 6vh;
    left: 5vw;
    width: 8vh;
  }

  .settings {
    position: absolute;
    top: 6vh;
    right: 5vw;
    width: 8vh;
  }
</style>
