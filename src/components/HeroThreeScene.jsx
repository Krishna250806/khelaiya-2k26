import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroThreeScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Device & Performance Detection for Low-End Optimization
    const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || navigator.maxTouchPoints > 0);
    const isLowEnd = isMobile || (typeof navigator !== 'undefined' && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x210314, 0.045);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8.5);

    // 3. Renderer Setup (Clamped pixel ratio for optimal FPS on low-end screens)
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: !isLowEnd, 
      powerPreference: "high-performance" 
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isLowEnd ? 1.25 : 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // 4. Lighting (Strict Palette: Gold, Maroon, Teal)
    const ambientLight = new THREE.AmbientLight(0xffeedd, 0.9);
    scene.add(ambientLight);

    // Radiant Gold Key Light
    const goldLight = new THREE.PointLight(0xfebf4a, 4, 16);
    goldLight.position.set(2, 3, 4);
    scene.add(goldLight);

    // Deep Maroon Warm Fill Light
    const maroonLight = new THREE.PointLight(0x801857, 3, 14);
    maroonLight.position.set(-3, -2, 2);
    scene.add(maroonLight);

    // Deep Teal Cool Rim Light
    const tealLight = new THREE.PointLight(0x186d80, 2.5, 14);
    tealLight.position.set(0, 4, -2);
    scene.add(tealLight);

    // 5. Build 3D Dandiya Stick Pair
    const dandiyaGroup = new THREE.Group();

    // Reusable Materials
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xfebf4a,
      metalness: 0.9,
      roughness: 0.22,
    });

    const maroonMaterial = new THREE.MeshStandardMaterial({
      color: 0x5f1040,
      metalness: 0.4,
      roughness: 0.45,
    });

    const tealMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f4d5b,
      metalness: 0.6,
      roughness: 0.35,
    });

    const pearlMaterial = new THREE.MeshStandardMaterial({
      color: 0xfff0c2,
      metalness: 0.1,
      roughness: 0.1,
    });

    // Helper to create one single ornate dandiya stick
    const createDandiyaStick = () => {
      const stick = new THREE.Group();

      // Main shaft (Cylinder)
      const shaftGeo = new THREE.CylinderGeometry(0.1, 0.1, 4.4, 32);
      const shaft = new THREE.Mesh(shaftGeo, maroonMaterial);
      stick.add(shaft);

      // Gold spiral / decorative rings along the shaft
      const ringGeo = new THREE.TorusGeometry(0.108, 0.02, 16, 32);
      for (let y = -1.8; y <= 1.8; y += 0.4) {
        const ring = new THREE.Mesh(ringGeo, goldMaterial);
        ring.rotation.x = Math.PI / 2;
        ring.position.y = y;
        stick.add(ring);
      }

      // Middle grip band (Teal accent)
      const gripGeo = new THREE.CylinderGeometry(0.105, 0.105, 0.8, 32);
      const grip = new THREE.Mesh(gripGeo, tealMaterial);
      grip.position.y = 0;
      stick.add(grip);

      // Top & Bottom ornate brass caps (bells/ghungroo finials)
      const capGeo = new THREE.SphereGeometry(0.18, 32, 16);
      const topCap = new THREE.Mesh(capGeo, goldMaterial);
      topCap.position.y = 2.25;
      stick.add(topCap);

      const bottomCap = new THREE.Mesh(capGeo, goldMaterial);
      bottomCap.position.y = -2.25;
      stick.add(bottomCap);

      // Tassels / small pearls at ends
      const pearlGeo = new THREE.SphereGeometry(0.06, 16, 16);
      const pearlTop = new THREE.Mesh(pearlGeo, pearlMaterial);
      pearlTop.position.y = 2.45;
      stick.add(pearlTop);

      const pearlBottom = new THREE.Mesh(pearlGeo, pearlMaterial);
      pearlBottom.position.y = -2.45;
      stick.add(pearlBottom);

      return stick;
    };

    // Stick 1
    const stick1 = createDandiyaStick();
    stick1.rotation.z = Math.PI / 4.5;
    stick1.position.z = 0.2;
    dandiyaGroup.add(stick1);

    // Stick 2 (Crossed)
    const stick2 = createDandiyaStick();
    stick2.rotation.z = -Math.PI / 4.5;
    stick2.position.z = -0.2;
    dandiyaGroup.add(stick2);

    scene.add(dandiyaGroup);

    // 6. Spinning Concentric 3D Mandala Halo Rings Behind
    const haloGroup = new THREE.Group();

    // Outer intricate ring
    const ring1Geo = new THREE.TorusGeometry(2.8, 0.03, 16, 100);
    const ring1 = new THREE.Mesh(ring1Geo, goldMaterial);
    haloGroup.add(ring1);

    // Inner patterned ring
    const ring2Geo = new THREE.TorusGeometry(2.2, 0.02, 16, 80);
    const ring2 = new THREE.Mesh(ring2Geo, goldMaterial);
    haloGroup.add(ring2);

    // Radial spokes on the mandala ring
    const spokeCount = 12;
    for (let i = 0; i < spokeCount; i++) {
      const angle = (i / spokeCount) * Math.PI * 2;
      const spokeGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.6, 8);
      const spoke = new THREE.Mesh(spokeGeo, goldMaterial);
      spoke.position.x = Math.cos(angle) * 2.5;
      spoke.position.y = Math.sin(angle) * 2.5;
      spoke.rotation.z = angle + Math.PI / 2;
      haloGroup.add(spoke);
    }

    haloGroup.position.z = -0.8;
    scene.add(haloGroup);

    // 7. Golden Festive Sparkle Particle System (Embers / Confetti)
    // Low-end devices use fewer particles to conserve memory and fill rate
    const particleCount = isLowEnd ? 140 : 380;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color(0xfebf4a);
    const maroonColor = new THREE.Color(0x9b246c);
    const tealColor = new THREE.Color(0x238ca3);

    for (let i = 0; i < particleCount; i++) {
      // Cylindrical / spherical cloud
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

      scales[i] = Math.random() * 0.06 + 0.02;

      // Color distribution (mostly gold, some maroon and teal sparks)
      const rnd = Math.random();
      const chosenColor = rnd > 0.35 ? goldColor : (rnd > 0.15 ? maroonColor : tealColor);
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material with round glow sprite
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.3, 'rgba(254,191,74,0.8)');
    grad.addColorStop(1, 'rgba(254,191,74,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fill();
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: isLowEnd ? 0.18 : 0.14,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMaterial);
    scene.add(particles);

    // 8. Mouse Parallax & Interaction (Skip heavy mouse listener if mobile)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.8;
      mouseY = y * 0.8;
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // 9. Intersection Observer: Stop render loop when Hero is not visible
    let isSceneVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isSceneVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(container);

    // 10. Render Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isSceneVisible) return; // Completely pause calculations when scrolled away

      const elapsed = clock.getElapsedTime();

      // Smooth mouse damping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate Dandiya sticks gracefully in rhythmic Garba motion
      dandiyaGroup.rotation.y = Math.sin(elapsed * 0.8) * 0.35 + targetX * 0.8;
      dandiyaGroup.rotation.x = Math.cos(elapsed * 0.6) * 0.2 + targetY * 0.6;
      dandiyaGroup.rotation.z = Math.sin(elapsed * 0.4) * 0.15;
      dandiyaGroup.position.y = Math.sin(elapsed * 1.4) * 0.18;

      // Individual stick gentle clashing rhythm
      stick1.rotation.z = (Math.PI / 4.5) + Math.sin(elapsed * 2.2) * 0.08;
      stick2.rotation.z = (-Math.PI / 4.5) - Math.sin(elapsed * 2.2) * 0.08;

      // Rotate Mandala Halo
      haloGroup.rotation.z = elapsed * 0.12;
      haloGroup.rotation.x = targetY * 0.3;
      haloGroup.rotation.y = targetX * 0.3;

      // Drifting particles motion
      const posArr = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        posArr[i * 3 + 1] += 0.008;
        if (posArr[i * 3 + 1] > 6) {
          posArr[i * 3 + 1] = -6;
        }
        posArr[i * 3] += Math.sin(elapsed + i) * 0.002;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      particles.rotation.y = elapsed * 0.03;

      // Camera subtle parallax
      camera.position.x += (targetX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (targetY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // 11. Handle Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      if (width < 640) {
        camera.position.z = 10.5;
      } else {
        camera.position.z = 8.5;
      }
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    handleResize();

    // 12. Cleanup
    return () => {
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      particleGeo.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      aria-hidden="true"
    />
  );
}
