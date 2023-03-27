<nav>
  <li><a href="/">Home</a></li>
  <li><a href="/~/0">My Channel</a></li>
  <li><a href="/subscriptions">Subscriptions</a></li>
  <li><a href="/history">History</a></li>
  <li><a href="/upload">Upload</a></li>
  <li><a id="navbar_account" href="/login">
    <img id="navbar_account-avatar" class="avatar loggedOut" src="https://www.gravatar.com/avatar/?d=mp&f=y" alt="">
    <span id="navbar_account-username">Log In</span>
  </a></li>
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
  nav >li {
    float: left;
  }
  nav >li:last-child {
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
  nav> li> a {
    background-color: transparent;
    color: var(--color-button-text);
  }
  nav> li> a:hover {
    background-color: var(--color-navbar_hover);
    color: var(--color-navbar_hover-text);
  }
  a:focus-visible {
    box-shadow: inset 0 0 0 2px var(--color-focus);
  }
  a:focus { outline: none; }
  nav> li.active> a {
    background-color: var(--color-button_active);
    color: var(--color-button_active-text);
  }

  a {
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
  a:hover {
    background-color: var(--color-button_active);
    color: var(--color-button_active-text);
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