<script lang="ts">
  export let label = 'label';
</script>

<div class="row">
  <label class="switch">
    <input id="checkbox" type="checkbox">
    <span class="slider"></span>
  </label>
  <label for="checkbox">{label}</label>
</div>

<style>
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--text-muted);
    transition: .4s;
    border-radius: 8px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: var(--text-bright);
    transition: .4s;
    border-radius: 30%;
  }

  input:checked + .slider {
    background-color: var(--selection);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--focus);
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }
</style>