<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { spring, type Spring } from 'svelte/motion';
	import { get } from 'svelte/store';
	import { fade } from 'svelte/transition';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let width: number;
	let height: number;
	let nodes: Node[] = [];
	let animationFrame: number;

	const NODE_COUNT = 70;
	const NODE_RADIUS = 3;
	const CONNECTION_DISTANCE = 100;

	interface Node {
		x: Spring<number>;
		y: Spring<number>;
		vx: number;
		vy: number;
	}

	const SPEED = 15; // Increase from 0.5 to 1.5 to see more movement

	function createNode(): Node {
		return {
			x: spring(Math.random() * width, { stiffness: 0.1, damping: 0.9 }), // Higher stiffness/damping
			y: spring(Math.random() * height, { stiffness: 0.1, damping: 0.9 }),
			vx: (Math.random() - 0.5) * SPEED,
			vy: (Math.random() - 0.5) * SPEED
		};
	}

	function updateNodes(): void {
		nodes.forEach((node) => {
			let x = get(node.x) + node.vx;
			let y = get(node.y) + node.vy;

			if (x < 0 || x > width) node.vx *= -1;
			if (y < 0 || y > height) node.vy *= -1;

			node.x.set(x);
			node.y.set(y);
		});
	}

	function drawNodes(): void {
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = '#ff6347'; 
    ctx.strokeStyle = 'rgba(70, 130, 180, 0.5)'; 

    nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(get(node.x), get(node.y), NODE_RADIUS, 0, Math.PI * 2);
        ctx.fill();

        nodes.forEach((otherNode) => {
            const dx = get(node.x) - get(otherNode.x);
            const dy = get(node.y) - get(otherNode.y);
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < CONNECTION_DISTANCE) {
                ctx.beginPath();
                ctx.moveTo(get(node.x), get(node.y));
                ctx.lineTo(get(otherNode.x), get(otherNode.y));
                ctx.stroke();
            }
        });
    });
}

	function animate(): void {
		updateNodes();
		drawNodes();
		animationFrame = requestAnimationFrame(animate);
	}

	onMount(() => {
		width = window.innerWidth;
		height = window.innerHeight;
		canvas.width = width;
		canvas.height = height;
		ctx = canvas.getContext('2d')!;


		if (ctx) {
			for (let i = 0; i < NODE_COUNT; i++) {
				nodes.push(createNode());
			}
			animate();
		}

		const handleResize = () => {
			width = window.innerWidth;
			height = window.innerHeight;
			canvas.width = width;
			canvas.height = height;
		};

		window.addEventListener('resize', handleResize);

		return () => {
			cancelAnimationFrame(animationFrame);
			window.removeEventListener('resize', handleResize);
		};
	});

	onDestroy(() => {
		if (animationFrame) {
			cancelAnimationFrame(animationFrame);
		}
	});
</script>

<canvas bind:this={canvas} class="fixed inset-0 -z-10 h-full w-full bg-background text-white" transition:fade
></canvas>
