<script lang="ts">
  import playIcon from "../../assets/playIcon.svg";
  import pauseIcon from "../../assets/pauseIcon.svg";
  import skipForwardIcon from "../../assets/skipForwardIcon.svg";
  import skipBackIcon from "../../assets/skipBackIcon.svg";
  import Fa from "svelte-fa";
  import {
    faPlay,
    faPause,
    faForwardStep,
    faBackwardStep,
    faFlag,
  } from "@fortawesome/free-solid-svg-icons";
  export let playing = false;

  function playPause(): void {
    playing = !playing;
  }

  function skipBack(): void {console.log("back!")}

  function skipForward(): void {console.log("forward!")}
</script>

<div>
  <button type="button" class="skip-button back" on:click={skipBack}>
    <Fa
      icon={faBackwardStep}
      size="3.75vh"
      color="#00ffb3"
      fw
      translateX={0.275}
      scale={1}
    />
  </button>
  {#if playing}
    <button type="button" class="play-pause" on:click={playPause}>
      <div>
        <Fa
          icon={faPause}
          size="5vh"
          color="#00ffb3"
          fw
          translateX="0.245vh"
          scale={1.15}
        />
      </div>
    </button>
  {:else}
    <button type="button" class="play-pause" on:click={playPause}>
      <div class="play-pause-icon">
        <Fa
          icon={faPlay}
          size="5vh"
          color="#00ffb3"
          fw
          translateX="0.2625vh"
          scale={1}
        />
      </div>
    </button>
  {/if}
  <button type="button" class="skip-button forward" on:click={skipForward}>
    <div>
      <Fa
        icon={faForwardStep}
        size="3.75vh"
        color="#00ffb3"
        fw
        translateX={0.325}
        scale={1}
      />
    </div>
  </button>
</div>

<style>
  button { 
    transition: 0.3s;
  }
  
  button:hover {
    background-color: #313131;
  }

  .play-pause {
    all: unset;
    width: 8.5vh;
    height: 8.5vh;
    margin-top: 2vh;
    background-color: #232323;
    border-radius: 50%;
    position: absolute;
    left: calc(50% - 4.25vh);
    display: flex;
    justify-items: center;
    align-items: center;
  }

  .play-pause-icon {
    top: 50%;
    left: 50%;
  }

  .skip-button {
    all: unset;
    position: absolute;
    margin-top: 3vh;
    width: 7vh;
    height: 7vh;
    background-color: #232323;
    border-radius: 50%;
  }

  .forward {
    left: calc(50% + 1vw + 4.25vh);
  }

  .back {
    left: calc(50% - 1vw - 11.25vh);
  }
</style>
