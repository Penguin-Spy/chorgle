<script lang="ts">
  import type { PageData } from './$types';
  import ChannelDetails from '$lib/ChannelDetails.svelte';

  export let data: PageData;

  console.log(data)
</script>

<svelte:head>
  <title>{data.video.title} - {data.channel.title} | Chorgle.ml</title>
</svelte:head>


<div class="video-container">
  <video id="video_element" src="{data.video.streamUrl}" controls></video>
</div>

<div class="video-details">
  <h1 id="video_title">{data.video.title}</h1>
  <div class="stats">
    <div class="detailList">
      <span>Views: {data.video.views}</span>
      <span>Uploaded: {data.video.uploaded}</span>
    </div>
    <div class="feedback">
      <svg id="video_rating-svg" viewBox="0 0 120 24">
        <defs><clipPath id="stars"><path d="m12,17.27l6.18,3.73l-1.64,-7.03l5.46,-4.73l-7.19,-0.62l-2.81,-6.62l-2.81,6.62l-7.19,0.62l5.45,4.73l-1.63,7.03l6.18,-3.73z M36,17.27l6.18,3.73l-1.64,-7.03l5.46,-4.73l-7.19,-0.62l-2.81,-6.62l-2.81,6.62l-7.19,0.62l5.45,4.73l-1.63,7.03l6.18,-3.73z M60,17.27l6.18,3.73l-1.64,-7.03l5.46,-4.73l-7.19,-0.62l-2.81,-6.62l-2.81,6.62l-7.19,0.62l5.45,4.73l-1.63,7.03l6.18,-3.73z M84,17.27l6.18,3.73l-1.64,-7.03l5.46,-4.73l-7.19,-0.62l-2.81,-6.62l-2.81,6.62l-7.19,0.62l5.45,4.73l-1.63,7.03l6.18,-3.73z M108,17.27l6.18,3.73l-1.64,-7.03l5.46,-4.73l-7.19,-0.62l-2.81,-6.62l-2.81,6.62l-7.19,0.62l5.45,4.73l-1.63,7.03l6.18,-3.73z" fill="currentColor"></path></clipPath></defs>
        <rect id="video_rating-bg" width="120" height="24" fill="currentColor" clip-path="url(#stars)"></rect>
        <rect id="video_rating-global" width="0" height="24" fill="currentColor" clip-path="url(#stars)"></rect>
        <rect id="video_rating-self" width="0" height="24" fill="currentColor" clip-path="url(#stars)"></rect>
      </svg>
      <button id="video_share" onclick="video.share()" title="Copy video URL to clipboard">🔗</button>
    </div>
  </div>    
  <ChannelDetails channel={data.channel} compact/>
  <div class="description">{data.video.description}</div>
</div>

<span>comments or something? idk</span>


<style>
  .video-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: calc(9/16 * 100%);
}
.video-container >video {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.video-details {
  margin-top: 8px;
  flex-wrap: wrap;
}

.video-details .detailList {
  flex: 1;
}

.video-details >h1 {
  margin: 0;
}

.video-details >.stats {
  display: flex;
  margin-bottom: 8px;
}
.video-details >.stats >.feedback {
  display: flex;
}
.video-details >.stats >.feedback >button {
  margin: 0 4px;
}
.video-details >.stats >.feedback >svg {
  margin: 0 4px;
  padding: 14px 16px;
  width: 120px;
  height: 24px;
}
.video-details >.stats >.feedback >svg #video_rating-bg {
  color: var(--color-button);
}
.video-details >.stats >.feedback >svg #video_rating-global {
  color: #9a9a9a;
}
.video-details >.stats >.feedback >svg #video_rating-self {
  color: transparent;
}
.video-details >.stats >.feedback >svg:hover #video_rating-self,
.video-details >.stats >.feedback >svg #video_rating-self.active {
  color: var(--color-button_active);
}


.video-details >.stats >.feedback >button:hover >.rating {
  filter: invert(1);
}

.video-details> .description {
  margin: 8px 0;
  padding: 8px 0;
  border-top: var(--color-bg) inset 4px;
  border-bottom: var(--color-bg) outset 4px;
}
</style>