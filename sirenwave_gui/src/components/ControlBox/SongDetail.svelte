<script lang="ts">
  import hiThisIsFlume from "../../assets/hiThisIsFlume.png";
  import albumIcon from "../../assets/albumIcon.png";
  import artistIcon from "../../assets/artistIcon.png";
</script>

<div>
  <div class="icon" />
  <img src={hiThisIsFlume} alt="song icon" class="icon" />
  <div class="detail-container">
    <h3 class="title">Ecdysis</h3>
    <img
      src={albumIcon}
      alt="album icon"
      class="detail-icon album"
    />
    <h4 class="detail-text album" >Hi This is Flume</h4>
    <img
      src={artistIcon}
      alt="artist icon"
      class="detail-icon artist"
    />
    <h4 class="detail-text artist">Flume</h4>
  </div>
</div>

<style>
  .icon {
    position: absolute;
    width: 9vh;
    height: 9vh;
    top: 1.75vh;
    left: 7vw;
    border-radius: 15%;
    background-color: #3f3f3f;
  }

  .title {
    position: absolute;
    top: 0.25vh;
    margin: 0;
    padding: 0;
    color: #d3d3d3;
    font-weight: 600;
    font-size: 2.75vh;

  }

  .detail-container {
    position: absolute;
    width: calc(50% - 4.25vh - 7vw - 18vh );
    height: 9vh;
    left: calc(7vw + 10vh);
    top: 1.75vh;
    overflow: hidden;
  }

  .detail-text {
    position: absolute;
    left: 2.5vh;
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 2vh;
    color: #d6d6d6;
  }

  .detail-icon {
    position: absolute;
    height: 2vh;
    width: 2vh;
  }

  .album {
    top: 4vh;
  }

  .artist {
    top: 6.75vh
  }
</style>
