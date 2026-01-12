"use client";

import React, { useEffect, useRef } from 'react';

const FlyingBirdsBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();

        // Boid parameters - Optimized for performance
        const numBoids = 50; // Reduced from 150 to 50
        const visualRange = 75; // Reduced from 100
        const speedLimit = 2.5; // Reduced from 3
        const minDistance = 35; // Reduced from 40
        const turnFactor = 0.05;
        const centeringFactor = 0.003; // Further reduced
        const matchingFactor = 0.03; // Reduced from 0.05

        class Boid {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.dx = Math.random() * 10 - 5;
                this.dy = Math.random() * 10 - 5;
                this.history = [];
                this.color = `hsl(${Math.random() * 60 + 180}, 70%, 70%)`; // Blue/Cyan variants
            }

            distance(other) {
                return Math.sqrt(
                    (this.x - other.x) ** 2 + (this.y - other.y) ** 2
                );
            }

            keepWithinBounds() {
                const margin = 100;
                if (this.x < margin) this.dx += turnFactor;
                if (this.x > canvas.width - margin) this.dx -= turnFactor;
                if (this.y < margin) this.dy += turnFactor;
                if (this.y > canvas.height - margin) this.dy -= turnFactor;
            }

            flyTowardsCenter(boids) {
                let centerX = 0;
                let centerY = 0;
                let numNeighbors = 0;

                for (let other of boids) {
                    if (this.distance(other) < visualRange) {
                        centerX += other.x;
                        centerY += other.y;
                        numNeighbors++;
                    }
                }

                if (numNeighbors > 0) {
                    centerX /= numNeighbors;
                    centerY /= numNeighbors;

                    this.dx += (centerX - this.x) * centeringFactor;
                    this.dy += (centerY - this.y) * centeringFactor;
                }
            }

            avoidOthers(boids) {
                let moveX = 0;
                let moveY = 0;
                for (let other of boids) {
                    if (other !== this) {
                        const dist = this.distance(other);
                        if (dist < minDistance) {
                            moveX += this.x - other.x;
                            moveY += this.y - other.y;
                        }
                    }
                }

                this.dx += moveX * 0.05;
                this.dy += moveY * 0.05;
            }

            matchVelocity(boids) {
                let avgDX = 0;
                let avgDY = 0;
                let numNeighbors = 0;

                for (let other of boids) {
                    if (this.distance(other) < visualRange) {
                        avgDX += other.dx;
                        avgDY += other.dy;
                        numNeighbors++;
                    }
                }

                if (numNeighbors > 0) {
                    avgDX /= numNeighbors;
                    avgDY /= numNeighbors;

                    this.dx += (avgDX - this.dx) * matchingFactor;
                    this.dy += (avgDY - this.dy) * matchingFactor;
                }
            }

            limitSpeed() {
                const speed = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
                if (speed > speedLimit) {
                    this.dx = (this.dx / speed) * speedLimit;
                    this.dy = (this.dy / speed) * speedLimit;
                }
            }

            update(boids) {
                this.flyTowardsCenter(boids);
                this.avoidOthers(boids);
                this.matchVelocity(boids);
                this.limitSpeed();
                this.keepWithinBounds();

                this.x += this.dx;
                this.y += this.dy;

                this.history.push({ x: this.x, y: this.y });
                if (this.history.length > 3) this.history.shift(); // Reduced history length
            }

            draw() {
                const angle = Math.atan2(this.dy, this.dx);

                // Optimized drawing - simpler shape
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(angle);

                ctx.fillStyle = this.color;
                // Simpler triangle shape
                ctx.beginPath();
                ctx.moveTo(8, 0);
                ctx.lineTo(-4, 3);
                ctx.lineTo(-4, -3);
                ctx.closePath();
                ctx.fill();

                ctx.restore();
            }
        }

        const boids = [];
        for (let i = 0; i < numBoids; i++) {
            boids.push(new Boid());
        }

        const animate = () => {
            // Use semi-transparent overlay for trail effect instead of clearRect
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Optimize rendering by skipping frames on low-end devices
            const now = performance.now();
            if (now - lastFrameTime < 16) return; // Cap at ~60fps
            lastFrameTime = now;

            for (let boid of boids) {
                boid.update(boids);
                boid.draw();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        let lastFrameTime = 0;

        animate();
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-gradient-to-t
             from-white to-white"
        />
    );
};

export default FlyingBirdsBackground;
