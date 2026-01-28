import React from "react";
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch (e) {
      setWebglSupported(false);
      return;
    }

    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      containerRef.current.appendChild(renderer.domElement);

      sceneRef.current = scene;
      rendererRef.current = renderer;

      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = 150;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 20;
        positions[i + 1] = (Math.random() - 0.5) * 20;
        positions[i + 2] = (Math.random() - 0.5) * 20;

        const color = new THREE.Color();
        color.setHSL(0.6 + Math.random() * 0.1, 0.8, 0.6);
        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
      });

      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      const geometries = [
        new THREE.BoxGeometry(0.2, 0.2, 0.2),
        new THREE.OctahedronGeometry(0.15),
        new THREE.TetrahedronGeometry(0.15)
      ];

      const materials = [
        new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.6 }),
        new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.6 }),
        new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.6 })
      ];

      const shapes = [];
      for (let i = 0; i < 8; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const material = materials[Math.floor(Math.random() * materials.length)];
        const mesh = new THREE.Mesh(geometry, material);
        
        mesh.position.set(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15
        );
        
        mesh.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );
        
        shapes.push(mesh);
        scene.add(mesh);
      }

      camera.position.z = 5;

      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);

        particles.rotation.x += 0.001;
        particles.rotation.y += 0.002;

        shapes.forEach((shape, index) => {
          shape.rotation.x += 0.005 + index * 0.001;
          shape.rotation.y += 0.005 + index * 0.001;
          shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
        });

        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
        }
        if (containerRef.current && renderer.domElement) {
          try {
            containerRef.current.removeChild(renderer.domElement);
          } catch (e) {}
        }
        renderer.dispose();
      };
    } catch (error) {
      console.warn('WebGL initialization failed:', error);
      setWebglSupported(false);
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8))'
      }}
    />
  );
}
