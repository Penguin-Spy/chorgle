<script>
  export let href = undefined;
  export let action = undefined;
  export let type = undefined;
  export let tooltip = undefined;

  tooltip; // hide warning
</script>

{#if href !== undefined}
<a class={type} {href}>
  <slot></slot>
</a>
{:else if action !== undefined}
<button class={type} on:click={action}>
  <slot></slot>
</button>
{:else}
<div>
  Invalid button!
</div>
{/if}

<style>
  a, button {
    display: block;
    padding: 14px 16px;
    border-radius: 0 8px;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    border-color: transparent;
    background-color: var(--color-button);
    color: var(--color-button-text);
    text-align: center;
    text-decoration: none;
  }
  a:hover, button:hover {
    background-color: var(--color-button_active);
    color: var(--color-button_active-text);
  }
  button:focus-visible {
    outline: 2px solid var(--color-focus) !important;
  }
  a:focus-visible {
    box-shadow: inset 0 0 0 2px var(--color-focus);
  }
  a:focus, button:focus {
    outline: none;
  }

  /* --- Button styles --- */
  .nav {
    background-color: transparent;
    color: var(--color-button-text);
  }
  .nav:hover {
    background-color: var(--color-navbar_hover);
    color: var(--color-navbar_hover-text);
  }
  .nav.active {
    background-color: var(--color-button_active);
    color: var(--color-button_active-text);
  }

</style>