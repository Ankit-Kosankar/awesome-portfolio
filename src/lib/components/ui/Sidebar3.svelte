<script lang="ts">
	import { writable } from 'svelte/store';

	// State management
	const isDropdownOpen = writable(false);
	const isTracingComplete = writable(false);

	// Toggle dropdown and tracing
	function handleShapeClick() {
		isTracingComplete.set(true);
		isDropdownOpen.update(current => !current);
	}
</script>

<style>
	.shape-container {
		position: relative;
		width: 300px;
		height: 150px;
		cursor: pointer;
	}

	.custom-shape {
		stroke: #3778D4;
		stroke-width: 4;
		fill: none;
		transition: all 1.5s ease;
	}

	.shape-traced {
		stroke-dasharray: 500;
		stroke-dashoffset: 500;
		animation: trace 1.5s ease forwards;
	}

	.shape-filled {
		fill: rgba(55, 125, 255, 0.7);
	}

	@keyframes trace {
		to {
			stroke-dashoffset: 0;
		}
	}

	.dropdown {
		position: absolute;
		top: 100%;
		margin-top: 0.5rem;
		background-color: white;
		border: 1px solid #e5e7eb;
		border-radius: 0.5rem;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
		padding: 1rem;
		width: 250px;
		z-index: 10;
	}

	.dropdown-item {
		padding: 0.5rem;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	.dropdown-item:hover {
		background-color: #f3f4f6;
	}
</style>

<div class="shape-container">
	<svg 
		viewBox="0 0 300 150" 
		on:click={handleShapeClick}
	>
		<path 
			d="M50,75 Q150,20 250,75 T450,75" 
			class="custom-shape"
			class:shape-traced={$isTracingComplete}
			class:shape-filled={$isTracingComplete}
		/>
	</svg>

	{#if $isDropdownOpen}
		<div class="dropdown">
			<div class="dropdown-item">Option 1</div>
			<div class="dropdown-item">Option 2</div>
			<div class="dropdown-item">Option 3</div>
		</div>
	{/if}
</div>