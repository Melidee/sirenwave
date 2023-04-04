<script lang="ts">
  import RangeSlider from "svelte-range-slider-pips";
  export let max = 100;
  let values = [0];
</script>

<div class="range-slider" style="height: 10%;">
  <RangeSlider
    bind:values={values}
    min={0}
    {max}
    range="min"
    float
    hover={true}
    id="slider"
  />
</div>

<style>
  #slider {
    height: 10px;
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
    position: absolute;
    width: 80vw;
    margin: 0;
    padding: 0;
    bottom: 3vh;
    left: 5vw;
  }
</style>
