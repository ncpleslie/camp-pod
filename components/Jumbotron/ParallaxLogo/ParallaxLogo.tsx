// import Logo from "../../public/logo.svg";
import * as THREE from "three";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Plane, useAspect, useTexture } from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
  Vignette,
} from "@react-three/postprocessing";
import bgUrl from "./resources/bg.png";
import cloudsUrl from "./resources/clouds.png";
import grassUrl from "./resources/grass.png";
import lakeUrl from "./resources/lake.png";
import mountainUrl from "./resources/mountains.png";
import shoreUrl from "./resources/shore.png";
import sunriseUrl from "./resources/sunrise.png";
import titleUrl from "./resources/title.png";
import treeUrl from "./resources/trees.png";
import "./materials/layerMaterial";

const Scene = ({ dof }) => {
  const bgScale = useAspect(2679, 2679, 10);
  const scale = useAspect(2679, 2679, 0.5);
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
  const subject = useRef();
  const group = useRef();
  const layersRef = useRef([]);
  const [movement] = useState(() => new THREE.Vector3());
  const [temp] = useState(() => new THREE.Vector3());
  const [focus] = useState(() => new THREE.Vector3());
  const layers = [
    // BG
    { texture: textures[0], z: 19, scale: bgScale },
    // Sunrise
    {
      texture: textures[1],
      z: 20,
      scale: scale,
    },
    // Mountains
    { texture: textures[2], z: 30, scale: scale },
    // Clouds
    {
      texture: textures[3],
      z: 40,
      wiggle: 0.6,
      ref: subject,
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
      z: 70,
      // wiggle: 1,
      scale: scale,
    },
  ];

  useFrame((state, delta) => {
    dof.current.target = focus.lerp(subject.current.position, 0.05);
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
    layersRef.current[7].uniforms.time.value =
      layersRef.current[6].uniforms.time.value += delta;
    layersRef.current[3].uniforms.time.value += delta;
  }, 1);

  return (
    <group ref={group}>
      {layers.map(
        (
          { scale, texture, ref, factor = 0, scaleFactor = 1, wiggle = 0, z },
          i
        ) => (
          <Plane
            scale={scale}
            args={[1, 1, wiggle ? 10 : 1, wiggle ? 10 : 1]}
            position-z={z}
            key={i}
            ref={ref}
          >
            <layerMaterial
              movement={movement}
              textr={texture}
              factor={factor}
              ref={(el) => (layersRef.current[i] = el)}
              wiggle={wiggle}
              scale={scaleFactor}
            />
          </Plane>
        )
      )}
    </group>
  );
};

const Effects = React.forwardRef((props, ref) => {
  const { viewport: { width, height } } = useThree() // prettier-ignore
  return (
    <EffectComposer multisampling={0}>
      <DepthOfField
        ref={ref}
        bokehScale={0.5}
        focalLength={0.25}
        width={(width * 5) / 2}
        height={(height * 5) / 2}
      />
      {/* <Vignette /> */}
    </EffectComposer>
  );
});

const ParallaxLogo: React.FC = () => {
  const dof = useRef();
  return (
    <div className="h-screen">
      <Canvas
        linear
        orthographic
        gl={{ antialias: false, stencil: false, alpha: false, depth: false }}
        camera={{ zoom: 5, position: [0, 0, 200], far: 300, near: 0 }}
      >
        <Suspense fallback={null}>
          <Scene dof={dof} />
        </Suspense>
        <Effects ref={dof} />
      </Canvas>
    </div>
  );
};

export default ParallaxLogo;
