<script lang="ts">
  import type { PageData } from './$types';
  import Button from '$lib/Button.svelte';
  import ChannelDetails from '$lib/ChannelDetails.svelte';
  import StarRating from '$lib/StarRating.svelte';

  export let data: PageData;

  function copyURL() {
    navigator.clipboard.writeText(location.href).then(function() {
      console.log(`copied: ${location.href}`);
    }, function(err) {
      console.error('failed copy: ', err);
    });
  }
</script>

<svelte:head>
  <title>{data.video.title} - {data.channel.title} | Chorgle</title>
</svelte:head>


<div class="video-container">
  <!-- svelte-ignore a11y-media-has-caption 
       will add captions & subtitles later -->
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
      <StarRating rating={data.video.rating}/>
      <Button action={copyURL} tooltip="Copy video URL to clipboard">🔗</Button>
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

.video-details> .description {
  margin: 8px 0;
  padding: 8px 0;
  border-top: var(--color-bg) inset 4px;
  border-bottom: var(--color-bg) outset 4px;
}
</style>