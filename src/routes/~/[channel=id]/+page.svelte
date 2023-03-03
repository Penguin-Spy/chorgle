<script lang="ts">
  import type { PageData } from './$types';
	import ChannelDetails from '$lib/ChannelDetails.svelte';
  import VideoBox from '$lib/VideoBox.svelte';

  export let data: PageData;

  console.log(data)
</script>

<svelte:head>
  <title>{data.channel.title} | Chorgle.ml</title>
</svelte:head>

<ChannelDetails channel={data.channel} />
<div class="videoBoxes">
  {#each data.videos as video}
    <VideoBox channel={data.channel} {video} />
  {/each}
</div>

<style>
  .videoBoxes {
    display: flex;
    flex-wrap: wrap;
  }  
  @media screen and (max-width: 600px) {
    .videoBoxes {
      justify-content: center;
    }
  }
</style>