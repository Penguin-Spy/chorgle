<script lang=ts>
  import Button from '$lib/Button.svelte';
  
  export let channel;
  export let compact = false;

  function subscribe() {
    console.log('subscribe clicked')
  }
  
</script>


<div class="channel">
  <img class="avatar" data-compact={compact} src={channel.avatar} alt="{channel.title}'s avatar">
  <div class="detailList" data-compact={compact}>
    <a href="/~/{channel.id}">{channel.title}</a>
    <span>{channel.subscribers} subscribers</span>
  </div>
  <Button action={subscribe}>Subscribe</Button>
  {#if !compact}
  <div class="description">{channel.description}</div>
  {/if}
</div>
  
<style>
  .channel {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }
  .avatar {
    float: left;
    width: 64px;
    margin-right: 8px;
  }
  .detailList {
    flex: 1;
  }
  .detailList > a {
    width: max-content;
    color: var(--color-text);
    text-decoration: none;
  }
  .detailList > a:hover {
    text-decoration: underline;
  }
  .detailList > span {
    font-size: small;
    color: var(--color-text-alt);
  }

  .avatar[data-compact=true],
  .detailList[data-compact=true] {
    margin-top: -16px;
  }
  
  .description {
    margin-top: 8px;
    flex-basis: 100%;
  }
</style>