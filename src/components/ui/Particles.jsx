import { useEffect, useRef } from 'react';
import { Renderer, Camera, Geometry, Program, Mesh } from 'ogl';

import './Particles.css';

const defaultColors = ['#ffffff', '#fde047', '#f472b6']; // Updated to match user's color schema

const hexToRgb = hex => {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(c => c + c)
      .join('');
  }
  const int = parseInt(hex, 16);
  const r = ((int >> 16) & 255) / 255;
  const g = ((int >> 8) & 255) / 255;
  const b = (int & 255) / 255;
  return [r, g, b];
};

const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;

  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;

  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vRandom = random;
    vColor = color;

    vec3 pos = position;

    float time = uTime * (0.5 + random.y);
    pos.x += sin(time + random.z * 6.28) * uSpread;
    pos.y += cos(time + random.w * 6.28) * uSpread;
    pos.z += sin(time + random.x * 6.28) * uSpread;

    vec4 mvPosition = viewMatrix * modelMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Scale size based on distance from camera and randomness
    float size = uBaseSize * (1.0 + random.x * uSizeRandomness);
    gl_PointSize = size / length(mvPosition.xyz);
  }
`;

const fragment = /* glsl */ `
  precision highp float;

  varying vec4 vRandom;
  varying vec3 vColor;
  uniform float uAlphaParticles;

  void main() {
    // Circle shape
    float dist = distance(gl_PointCoord, vec2(0.5));
    if (dist > 0.5) discard;

    float alpha = 1.0;
    if (uAlphaParticles > 0.5) {
      alpha = smoothstep(0.5, 0.2, dist) * (0.3 + vRandom.y * 0.7);
    } else {
      alpha = smoothstep(0.5, 0.45, dist);
    }

    gl_FragColor = vec4(vColor, alpha);
  }
`;

const Particles = ({
  particleCount = 200,
  particleSpread = 10,
  speed = 0.1,
  particleColors = defaultColors,
  moveParticlesOnHover = false,
  particleHoverFactor = 1,
  alphaParticles = false,
  particleBaseSize = 100,
  sizeRandomness = 1,
  cameraDistance = 20,
  disableRotation = false,
}) => {
  const containerRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      depth: false,
      alpha: true
    });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 15 });
    camera.position.set(0, 0, cameraDistance);

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };
    window.addEventListener('resize', resize, false);
    resize();

    const handleMouseMove = e => {
      // Use window-relative coordinates for global background
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 - 1;
      mouseRef.current = { x, y };
    };

    if (moveParticlesOnHover) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    const count = particleCount;
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 4);
    const colors = new Float32Array(count * 3);

    const palette = particleColors.map(c => hexToRgb(c));

    for (let i = 0; i < count; i++) {
      positions.set([Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1], i * 3);
      randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
      const color = palette[Math.floor(Math.random() * palette.length)];
      colors.set(color, i * 3);
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randoms },
      color: { size: 3, data: colors },
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: particleSpread },
        uBaseSize: { value: particleBaseSize * window.devicePixelRatio },
        uSizeRandomness: { value: sizeRandomness },
        uAlphaParticles: { value: alphaParticles ? 1 : 0 }
      },
      transparent: true,
      depthTest: false,
    });

    const mesh = new Mesh(gl, { mode: gl.POINTS, geometry, program });

    let request;
    const update = (t) => {
      request = requestAnimationFrame(update);

      if (!disableRotation) {
        mesh.rotation.y = t * 0.0001 * speed;
        mesh.rotation.x = t * 0.0001 * speed;
      }

      if (moveParticlesOnHover) {
        mesh.position.x += (mouseRef.current.x * particleHoverFactor - mesh.position.x) * 0.1;
        mesh.position.y += (mouseRef.current.y * particleHoverFactor - mesh.position.y) * 0.1;
      }

      program.uniforms.uTime.value = t * 0.001 * speed;
      renderer.render({ scene: mesh, camera });
    };
    request = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('resize', resize);
      if (moveParticlesOnHover) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(request);
      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [
    particleCount,
    particleSpread,
    speed,
    particleColors,
    moveParticlesOnHover,
    particleHoverFactor,
    alphaParticles,
    particleBaseSize,
    sizeRandomness,
    cameraDistance,
    disableRotation,
  ]);

  return <div ref={containerRef} className="particles-container" />;
};

export default Particles;
