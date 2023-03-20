<script lang="ts">
  export let rating = {};
  export let userRating = -1;

</script>


<form action="#" class:hasRating={userRating != -1}>
  {#each [0, 1, 2, 3, 4, 5] as n}
  <input value="{n}" id="star{n}" bind:group={userRating}
	  type="radio" name="rating" class="visuallyhidden">
	<label for="star{n}" class:selected={userRating == n}>
	  <span class="visuallyhidden">{n} {n === 1 ? "Star" : "Stars"}</span>
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <use href="https://chorgle.ml/{n === 0 ? "x" : "star"}.svg#root">
    </svg>
	</label>{/each}
</form>


<style>
  /* --- Colors --- */
  :is(form:hover, form:focus-within) > label {
    color: lime;
  }
  form.hasRating {
    color: green;
  }

  /* hide color on all stars after the selected/hovered one */
  label:hover ~ label,
  form:not(:hover) > label.selected ~ label {
    color: black;
  }

  input:focus-within + label {
    border-bottom: 2px dashed;
  }

  /* --- Layout --- */
  input {
    margin: 0;
  }
  svg {
    width: 1.5em;
    height: 1.5em;
  }
  form {
    user-select: none;
  }
  
  .visuallyhidden {
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    opacity: 0;
  }

  /*form {
    outline: 1px solid red;
  }
  input {
    outline: 1px solid blue;
  }
  label {
    outline: 1px solid green;
  }
  img, svg {
    outline: 1px solid orange;
  }*/
</style>