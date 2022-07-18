import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Loader, Plane, useAspect, useTexture } from "@react-three/drei";
import { EffectComposer } from "@react-three/postprocessing";
import bgUrl from "./resources/bg.png";
import cloudsUrl from "./resources/clouds.png";
import grassUrl from "./resources/grass.png";
import lakeUrl from "./resources/lake.png";
import mountainUrl from "./resources/mountains.png";
import shoreUrl from "./resources/shore.png";
import sunriseUrl from "./resources/sunrise.png";
import titleUrl from "./resources/title_middle.png";
import treeUrl from "./resources/trees.png";
import "./materials/layerMaterial";
import ParallaxLoadingIndicator from "./loading/ParallaxLoadingIndicator";

const Scene = React.forwardRef<HTMLElement>((props, ref) => {
  const [yValue, setYValue] = useState(0);
  const [elScale, setElScale] = useState(0.7);
  const [sunElScale, setSunElScale] = useState(0.6);
  const bgScale = useAspect(2667, 2679, 10);
  const scale = useAspect(2679, 2679, elScale);
  const sunriseScale = useAspect(2679, 2679, sunElScale);
  const titleScale = useAspect(2667, 678, 0.25);
  const textures = useTexture([
    bgUrl.src,
    sunriseUrl.src,
    mountainUrl.src,
    cloudsUrl.src,
    grassUrl.src,
    shoreUrl.src,
    treeUrl.src,
    lakeUrl.src,
    titleUrl.src,
  ]);
  const subject = useRef<any>();
  const group = useRef<any>();
  const layersRef = useRef([]);
  const [movement] = useState(() => new THREE.Vector3());
  const [temp] = useState(() => new THREE.Vector3());
  const layers = [
    {
      texture: textures[1],
      z: 11,
      ref: subject,
      scale: sunriseScale,
    },
    // Mountains
    { texture: textures[2], z: 30, scale: scale },
    // Clouds
    {
      texture: textures[3],
      z: 40,
      wiggle: 0.6,
      scale: scale,
    },
    // Grass
    {
      texture: textures[4],
      z: 40,
      wiggle: 0.6,
      scale: scale,
    },
    // Shore
    {
      texture: textures[5],
      z: 50,
      scale: scale,
    },
    // Trees
    {
      texture: textures[6],
      z: 60,
      wiggle: 0.3,
      scale: scale,
    },
    // Lake
    {
      texture: textures[7],
      z: 70,
      wiggle: 0.25,
      scale: scale,
    },
    // Title
    {
      texture: textures[8],
      z: 81,
      // wiggle: 1,
      scale: titleScale,
    },
  ];

  useEffect(() => {
    const breakpoint = 1000;

    const resizeObserver = new ResizeObserver(() => {
      if (window.innerWidth >= breakpoint) {
        setYValue(-20);
        setElScale(0.7);
        setSunElScale(0.6);
        return;
      }

      setElScale(1);
      setSunElScale(0.8);
      setYValue(0);
    });

    // @ts-ignore - It is valid
    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useFrame((state, delta) => {
    movement.lerp(temp.set(state.mouse.x, state.mouse.y * 0.2, 0), 0.2);
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      state.mouse.x * 20,
      0.2
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.mouse.y / 10,
      0.2
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      -state.mouse.x / 2,
      0.2
    );
    layersRef.current[6].uniforms.time.value =
      layersRef.current[5].uniforms.time.value += delta;
    layersRef.current[2].uniforms.time.value += delta;
  }, 1);

  return (
    <group ref={group}>
      {layers.map(({ scale, texture, ref, wiggle = 0, z }, i) => (
        <Plane
          scale={scale}
          args={[1, 1, wiggle ? 10 : 1, wiggle ? 10 : 1]}
          position-z={z}
          position-y={yValue}
          key={i}
          ref={ref}
        >
          <layerMaterial
            movement={movement}
            textr={texture}
            ref={(el) => (layersRef.current[i] = el)}
            wiggle={wiggle}
          />
        </Plane>
      ))}
    </group>
  );
});

const ParallaxLogo: React.FC = () => {
  const canvas = useRef();
  return (
    <div className="h-[50vh] md:h-[80vh]" ref={canvas}>
      <Canvas
        linear
        orthographic
        gl={{ antialias: false, stencil: false, alpha: false, depth: false }}
        camera={{ zoom: 5, position: [0, 0, 200], far: 300, near: 0 }}
        className="bg-base-100"
        onCreated={(state) => {
          state.scene.background = new THREE.Color("#CFEAED");
        }}
      >
        <Suspense fallback={null}>
          <Scene ref={canvas} />
        </Suspense>
        <EffectComposer>
          <></>
        </EffectComposer>
      </Canvas>
      <ParallaxLoadingIndicator />
    </div>
  );
};

ParallaxLogo.displayName = "ParallaxLogo";

export default ParallaxLogo;
