<script>
    const items = [1, 2, 3, 4];
  </script>
  
  <div class="grid grid-cols-4 gap-4">
    {#each items as item}
      <div class="bg-blue-500 text-white p-4 rounded-md">{item}</div>
    {/each}
  </div>