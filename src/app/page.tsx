"use client"

// import HollowCylindrical from '@/components/hollowCylindrical'
// import { Canvas } from '@react-three/fiber'
// import React from 'react'

// const page = () => {
//   return (
//     <Canvas flat camera={{ fov: 60 }}  className='relative bottom-16'>
//       <ambientLight />
//       <HollowCylindrical />
//     </Canvas>
//   )
// }

// export default page


























import { Canvas } from '@react-three/fiber';
import React from 'react';
import { OrbitControls, useTexture } from '@react-three/drei';
import Cylinder from '@/components/hollowCylindrical';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';

const page = () => {
  return (
    <>
      <div className="m-5 px-[24vw] border-1 rounded-md mt-5 text-white uppercase font-mono font-light text-center text-[15px] shadow-lg">
        <p>
          `For better Quality and Experience zoom out by pressing (Ctrl) + (-)
          until the page is 67% zoomed out.`
        </p>
        <div className="text-right">
          <p className="relative">
            - Praveen Lodhi (Creator)
          </p>
        </div>
      </div>

      {/* CYLINDER */}

      <Canvas flat camera={{ fov: 60 }}  className='relative bottom-16'>
  <OrbitControls />
  <ambientLight />

  <Cylinder />
  <EffectComposer>
    <Bloom
      mipmapBlur
      intensity={5} // Lower intensity slightly
      luminanceThreshold={0.7} // Adjust threshold to reduce the number of pixels affected
      luminanceSmoothing={0.1} // Smoothing closer to 1 reduces the effect area
    />
    <ToneMapping adaptive={true} resolution={2000} maxLuminance={10} />
  </EffectComposer>
</Canvas>
    </>
  );
};


export default page