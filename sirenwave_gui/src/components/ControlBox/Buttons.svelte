<script lang="ts">
  import Fa from "svelte-fa";
  import {
    faPlay,
    faPause,
    faForwardStep,
    faBackwardStep,
    faRepeat,
    faShuffle,
  } from "@fortawesome/free-solid-svg-icons";
  export let shuffle: boolean = false;
  export let repeat: "off" | "on" | "one" = "off";
  export let playing = false;
  let _ = repeat;

  let buttonOffColor = "#6d6d6d";
  let buttonOnColor = "#00ffb3";

  let shuffleColor = buttonOffColor;
  function toggleShuffle(): void {
    shuffle = !shuffle;
    shuffleColor = shuffle ? buttonOnColor : buttonOffColor;
  }

  let repeatColor = buttonOffColor;
  function toggleRepeat(): void {
    if (repeat === "off") {
      repeat = "on";
      repeatColor = buttonOnColor;
    } else if (repeat === "on") {
      repeat = "one";
      repeatColor = "#42d4f5";
    } else if (repeat === "one") {
      repeat = "off";
      repeatColor = buttonOffColor;
    }
    console.log(repeat)
  }

  function playPause(): void {
    playing = !playing;
  }

  function skipBack(): void {
    console.log("back!");
  }

  function skipForward(): void {
    console.log("forward!");
  }
</script>

<div>
  <button type="button" class="outside shuffle" on:click={toggleShuffle}>
    <Fa
      icon={faShuffle}
      size="2.75vh"
      color={shuffleColor}
      translateX={"0.3vh"}
      translateY={"0.025vh"}
    />
  </button>
  <button type="button" class="skip back" on:click={skipBack}>
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
      <div>
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
  <button type="button" class="skip forward" on:click={skipForward}>
    <div>
      <Fa
        icon={faForwardStep}
        size="3.75vh"
        color="#00ffb3"
        fw
        translateX={0.35}
        scale={1}
      />
    </div>
  </button>
  <button type="button" class="outside repeat" on:click={toggleRepeat}>
    <Fa
      icon={faRepeat}
      size="2.75vh"
      color={repeatColor}
      translateX={"0.3vh"}
      translateY={"0.025vh"}
    />
  </button>
</div>

<style>
  button {
    all: unset;
    transition: 0.3s;
  }

  .play-pause {
    position: absolute;
    width: 8.5vh;
    height: 8.5vh;
    left: calc(50% - 4.25vh);
    top: 2.15vh;
    display: flex;
    justify-items: center;
    align-items: center;
    background-color: #232323;
    border-radius: 50%;
  }

  .play-pause:hover {
    background-color: #313131;
  }

  .skip {
    position: absolute;
    margin-top: 3vh;
    width: 7vh;
    height: 7vh;
    background-color: #232323;
    border-radius: 50%;
  }

  .skip:hover {
    background-color: #313131;
  }

  .forward {
    left: calc(50% + 1vw + 4.25vh);
  }

  .back {
    left: calc(50% - 1vw - 11.25vh);
  }

  .outside {
    position: absolute;
    top: 4.25vh;
    width: 4.5vh;
    height: 4.5vh;
    border-radius: 50%;
  }

  .outside:hover {
    background-color: #313131;
  }

  .shuffle {
    left: calc(50% - 1vw - 17vh);
  }

  .repeat {
    left: calc(50% + 1vw + 12.5vh);
  }
</style>
