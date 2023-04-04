<script lang="ts">
  import Buttons from "./Buttons.svelte";
  import SliderBar from "./SliderBar.svelte";
  import SongDetail from "./SongDetail.svelte";
</script>

<div class="mainBox">
  <Buttons />
  <SliderBar />
  <SongDetail/>
</div>

<style>
  .mainBox {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 90vw;
    height: 15vh;
    left: calc(5vw - 3px);
    bottom: 10vh;
    border: 3px solid #00ffb3;
    border-radius: 20px;
    background-image: linear-gradient(rgba(3, 2, 1, 1), rgba(0, 0, 0, 0));
  }
</style>
