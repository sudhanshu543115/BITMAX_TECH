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

        // Boid parameters
        // Boid parameters
        const numBoids = 150;
        const visualRange = 100;
        const speedLimit = 3;
        const minDistance = 40; // Increased separation distance
        const turnFactor = 0.05;
        const centeringFactor = 0.005; // Reduced from 1 to avoid clumping
        const matchingFactor = 0.05;

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
                if (this.history.length > 5) this.history.shift();
            }

            draw() {
                const angle = Math.atan2(this.dy, this.dx);

                // Draw trails
                // ctx.beginPath();
                // ctx.moveTo(this.history[0]?.x || this.x, this.history[0]?.y || this.y);
                // for (let point of this.history) {
                //      ctx.lineTo(point.x, point.y);
                // }
                // ctx.strokeStyle = this.color;
                // ctx.stroke();

                // Draw Bird (Triangle/Arrow shape)
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(angle);

                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.moveTo(10, 0);   // Nose
                ctx.lineTo(-5, 5);   // Left wing back
                ctx.lineTo(-2, 0);   // Center back (notch)
                ctx.lineTo(-5, -5);  // Right wing back
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
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear screen
            // Or use transparent fill for trails:
            // ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            // ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let boid of boids) {
                boid.update(boids);
                boid.draw();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

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
