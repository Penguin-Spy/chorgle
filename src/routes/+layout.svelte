<script>
  import Button from '$lib/Button.svelte';
</script>


<nav>
  <li><Button type="nav" href="/">Home</Button></li>
  <li><Button type="nav" href="/~/0">My Channel</Button></li>
  <li><Button type="nav" href="/subscriptions">Subscriptions</Button></li>
  <li><Button type="nav" href="/history">History</Button></li>
  <li><Button type="nav" href="/upload">Upload</Button></li>
  <li><Button type="nav" href="/login">
    <img id="navbar_account-avatar" class="avatar loggedOut" src="https://www.gravatar.com/avatar/?d=mp&f=y" alt="">
    <span id="navbar_account-username">Log In</span>
  </Button></li>
</nav>

<main id="main-content">
  <slot></slot>
</main>

<style>
  @import "/src/app.css";
  
  nav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: var(--color-navbar);
    position: sticky;
    top: 0;
    z-index: 1;
  }
  li {
    float: left;
  }
  li:last-child {
    float: right;
  }
  nav >li img {
    overflow: visible;
    margin: -13px 4px -13px 0;
    height: 36px;
  }
  nav >li img.loggedOut {
    display: none;
  }

  main {
    margin: 16px 15% 0;
  }
  @media screen and (max-width: 600px) {
    main {
      margin: 16px 2% 0;
    }
  }
</style>