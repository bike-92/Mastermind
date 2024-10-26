<script>
    import Title from './Title-component/Title.svelte';

    let showText = false;
    let workingText = 'The button Works';
    function checkSystem() {
        return showText = !showText;
    }
</script>

<Title />

<h1>Hi Alex</h1>
<div>
    <button on:click={checkSystem} class="bg-lime-500">click me!</button>
</div>
{#if showText}
    <p>{workingText}</p>
{/if}