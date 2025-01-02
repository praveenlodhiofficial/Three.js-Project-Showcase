import React, { useRef } from 'react';
import { useTexture, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const HollowCylindrical: React.FC = () => {
    const tex = useTexture("./image1.png");

    // Adjust texture settings
    tex.anisotropy = 20; // Increase anisotropy for better texture quality at angles
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;

    const hollowCylindrical = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (hollowCylindrical.current) {
            hollowCylindrical.current.rotation.y += 0.01; // Uncomment if you want to animate rotation
        }
    });

    return (
        <>
            <group rotation={[0, 1.5, 0.4]}>
                <mesh ref={hollowCylindrical}>
                    <cylinderGeometry args={[1, 1.7, 1.2, 60, 60, true]} />
                    <meshBasicMaterial
                        map={tex}
                        transparent
                        side={THREE.DoubleSide}
                    />
                </mesh>
                {/* You can add other elements inside this group if needed */}
            </group>

            {/* Fixed text using Sprite */}
            <sprite position={[0, 1.2, 0.05]}>
                <spriteMaterial attach="material">
                    <canvasTexture
                        attach="map"
                        image={createTextTexture('Jujutsu Kaisen')}
                    />
                </spriteMaterial>
            </sprite>
        </>
    );
};

const createTextTexture = (text: string) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (context) {
        context.font = '52px Times new Roman';
        context.fillStyle = '#F6F77D';
        context.textAlign = 'center';
        context.fillText(text, canvas.width/2, canvas.height/2);
    }
    return canvas;
};

export default HollowCylindrical;
