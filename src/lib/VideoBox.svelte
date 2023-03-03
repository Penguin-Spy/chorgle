<script lang=ts>
  export let channel;
  export let video;
</script>

<a href="/~/{channel.id}/{video.id}" class="videoBox">
  <div class="noThumbnail">?</div>
  <span>{video.title}</span>
</a>

<style>
  .videoBox {
    width: 220px;
    margin: 10px;
    background-color: var(--color-bg-alt);
    color: var(--color-text);
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    border-radius: 0 12px;
  }
  .videoBox > img {
    width: 100%;
    pointer-events: none;
    border-radius: 0 12px;
    object-fit: cover;
    height: 124px;
    min-height: 124px;
  }
  .videoBox > .noThumbnail {
    height: 124px;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: xxx-large;
  }
  .videoBox > span {
    pointer-events: none;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 4px 2px 2px;
  }
  .videoBox:hover > span {
    text-decoration: underline;
  }
</style>