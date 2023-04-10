<script lang="ts">
  import {
    faVolumeHigh,
    faVolumeLow,
    faVolumeOff,
  } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import RangeSlider from "svelte-range-slider-pips";
  export let volume: number = 0;
  let volumes = [0];
  $: volumes, (volume = volumes[0]);
</script>

<div class="volumeIcon">
  {#if volume == 0}
    <Fa icon={faVolumeOff} size="2.5vh" color="#00ffb3" pull="left" />
  {:else if volume <= 50}
    <Fa icon={faVolumeLow} size="2.5vh" color="#00ffb3" pull="left" />
  {:else}
    <Fa icon={faVolumeHigh} size="2.5vh" color="#00ffb3" pull="left" />
  {/if}
</div>
<div class="range-slider">
  <RangeSlider
    bind:values={volumes}
    min={0}
    max={100}
    range="min"
    float
    hover={true}
    id="volslider"
  />
</div>

<style>
  :global(#volslider) {
    position: absolute;
    height: 0.5vh;
    width: 12vw;
    right: 7vw;
    top: 6.5vh;
    padding: 0;
    margin: 0;
  }

  :global(#volslider .rangeBar) {
    height: 0.5vh;
  }
  :global(#volslider .rangeHandle) {
    height: 1.25vh;
    width: 1.25vh;
    top: 0.25vh;
  }

  .volumeIcon {
    position: absolute;
    top: 5.5vh;
    left: 68.5vw;
    height: 2.5vh;
    width: 10vw;
  }

  .range-slider {
    --range-slider: #d6d6d6;
    --range-handle-inactive: #00ffb3;
    --range-handle: #00ffb3;
    --range-handle-focus: #00ffb3;
    --range-handle-border: var(--range-handle);
    --range-range-inactive: var(--range-handle-inactive);
    --range-range: var(--range-handle-focus);
    --range-float-inactive: var(--range-handle-inactive);
    --range-float: var(--range-handle-focus);
    --range-float-text: white;
    margin: 0;
    padding: 0;
  }
</style>
