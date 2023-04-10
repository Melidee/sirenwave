<script lang="ts">
  import RangeSlider from "svelte-range-slider-pips";
  export let songLength: Number = 100;
  export let values: Array<Number> = [0];
</script>

<div class="range-slider">
  <RangeSlider
    bind:values
    min={0}
    max={songLength}
    range="min"
    float
    hover={true}
    id="slider"
  />
</div>

<style>
  :global(#slider) {
    position: absolute;
    height: 1vh;
    width: 80vw;
    left: 5.25vw;
    bottom: 1.5vh;
    padding: 0;
    margin: 0;
  }

  :global(#slider .rangeBar) {
    height: 1vh;
  }
  :global(#slider .rangeHandle) {
    height: 2vh;
    width: 2vh;
    top: 0.5vh;
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
