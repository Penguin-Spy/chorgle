<script lang=ts>
  export let channel;
  export let compact = false;
</script>


<div class="channel">
  <img class="avatar" data-compact={compact} src={channel.avatar} alt="{channel.title}'s avatar">
  <div class="detailList" data-compact={compact}>
    <a href="/~/{channel.id}">{channel.title}</a>
    <span>{channel.subscribers} subscribers</span>
  </div>
  <button class="subscribe" onclick="channel.subscribe()">Subscribe</button>
  <div class="description">{channel.description}</div>
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

  button {
    margin: 0 4px;
  }
  .description {
    margin-top: 8px;
    flex-basis: 100%;
  }
</style>