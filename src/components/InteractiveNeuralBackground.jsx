import React, { useRef, useEffect } from 'react';

const InteractiveNeuralBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        
        let width = window.innerWidth;
        let height = window.innerHeight;
        const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x for performance

        // Detect mobile for reduced workload
        const isMobile = width <= 768;
        
        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        
        window.addEventListener('resize', resize);
        resize();

        // Node definitions — capped for performance
        const maxNodes = isMobile ? 40 : 120;
        const NUM_NODES = Math.min(Math.floor((width * height) / 15000), maxNodes);
        const MAX_DISTANCE = isMobile ? 150 : 200;
        const nodes = [];

        // Generate nodes
        for (let i = 0; i < NUM_NODES; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                z: Math.random() * 2 + 0.5, // Depth for 3D parallax
                vx: (Math.random() - 0.5) * 1.0,
                vy: (Math.random() - 0.5) * 1.0,
                pulse: Math.random() * Math.PI * 2,
                baseColor: Math.random() > 0.5 ? '255, 255, 255' : '170, 170, 170', // White or Grey
            });
        }

        const mouse = { x: width / 2, y: height / 2, active: false };

        // Only add mouse interaction on non-touch devices
        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;
        };
        
        const handleMouseLeave = () => { 
            mouse.active = false; 
        };
        
        if (!isMobile) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseleave', handleMouseLeave);
        }

        let time = 0;

        const render = () => {
            time += 0.01;

            // Deep cyber background with trailing effect for smooth motion blur
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = 'rgba(5, 5, 5, 0.3)'; // Monochrome dark grey
            ctx.fillRect(0, 0, width, height);

            ctx.globalCompositeOperation = 'lighter';

            // Update & Draw Nodes
            for (let i = 0; i < NUM_NODES; i++) {
                let node = nodes[i];
                
                // Drift movement
                node.x += node.vx / node.z;
                node.y += node.vy / node.z;
                node.pulse += 0.02;

                // Screen Wrap
                if (node.x < -50) node.x = width + 50;
                if (node.x > width + 50) node.x = -50;
                if (node.y < -50) node.y = height + 50;
                if (node.y > height + 50) node.y = -50;

                // Mouse interaction (Repel and slight pull)
                if (mouse.active) {
                    const dx = mouse.x - node.x;
                    const dy = mouse.y - node.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < 250) {
                        const force = (250 - dist) / 250;
                        // Push away from cursor smoothly
                        node.x -= (dx / dist) * force * 1.5;
                        node.y -= (dy / dist) * force * 1.5;
                        
                        // Nodes get excited (move faster) near mouse
                        node.pulse += 0.1;
                    }
                }

                // Draw connections
                for (let j = i + 1; j < NUM_NODES; j++) {
                    let other = nodes[j];
                    const dx = node.x - other.x;
                    const dy = node.y - other.y;
                    const distSq = dx * dx + dy * dy;

                    // Use squared distance comparison to avoid sqrt when possible
                    if (distSq < MAX_DISTANCE * MAX_DISTANCE) {
                        const dist = Math.sqrt(distSq);
                        // Calculate opacity based on distance
                        let opacity = (1 - (dist / MAX_DISTANCE)) * 0.6;
                        
                        // Extra brightness if near mouse
                        if (mouse.active) {
                            const mDx = mouse.x - node.x;
                            const mDy = mouse.y - node.y;
                            const mDistSq = mDx * mDx + mDy * mDy;
                            if (mDistSq < 40000) opacity *= 1.5; // 200^2
                        }

                        // Gradient line
                        const grad = ctx.createLinearGradient(node.x, node.y, other.x, other.y);
                        grad.addColorStop(0, `rgba(${node.baseColor}, ${opacity})`);
                        grad.addColorStop(1, `rgba(${other.baseColor}, ${opacity})`);

                        ctx.beginPath();
                        ctx.strokeStyle = grad;
                        ctx.lineWidth = 1.5 / node.z;
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();

                        // Simulated Data Packets flowing
                        if (Math.random() < 0.002) {
                            ctx.beginPath();
                            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 3})`;
                            // Random position along the line
                            const t = Math.random();
                            const flowX = node.x + dx * t;
                            const flowY = node.y + dy * t;
                            ctx.arc(flowX, flowY, 2, 0, Math.PI * 2);
                            ctx.fill();
                        }
                    }
                }
            }

            // Draw the nodes themselves
            for (let i = 0; i < NUM_NODES; i++) {
                let node = nodes[i];
                
                // Throbbing size
                const size = (1.5 + Math.sin(node.pulse) * 0.5) / node.z;
                
                // Outer glow
                ctx.beginPath();
                ctx.fillStyle = `rgba(${node.baseColor}, 0.8)`;
                ctx.arc(node.x, node.y, size * 2.5, 0, Math.PI * 2);
                ctx.fill();

                // Bright core
                ctx.beginPath();
                ctx.fillStyle = '#ffffff';
                ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            if (!isMobile) {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseleave', handleMouseLeave);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="neural-canvas"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none' // Let clicks pass through, window listener handles interaction
            }}
        />
    );
};

export default InteractiveNeuralBackground;
