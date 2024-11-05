import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef, useState, useEffect } from "react";
import React from "react";
import * as THREE from 'three';
import { OrbitControls } from "@react-three/drei";

const HeroCamera = ({ children, isMobile }) => {
    const groupRef = useRef();
    const [isOrbitActive, setIsOrbitActive] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(20);

    useEffect(() => {
        if (groupRef.current) {
            // Set a subtle initial rotation for a slightly higher view
            groupRef.current.rotation.set(0.05, -0.4, 0); // Minor upward adjustment
            // Adjust scale slightly for a modest size increase
            groupRef.current.scale.set(1.1, 1.1, 1.1);
        }
    }, []);

    useFrame((state, delta) => {
        if (!isOrbitActive && groupRef.current) {
            // Invert vertical rotation by negating state.pointer.y
            const rotationX = Math.max(Math.min(-state.pointer.y * 0.2, 0.5), -0.3); // Inverted vertical rotation
            const rotationY = -state.pointer.x * 0.3; // Horizontal rotation
            // Apply smooth rotation with constraints
            easing.dampE(
                groupRef.current.rotation,
                [rotationX, rotationY, 0.01],
                0.3,
                delta
            );

            // Smooth transition for zoom level
            const targetPosition = new THREE.Vector3(0, 5, zoomLevel);
            easing.damp3(
                state.camera.position,
                [targetPosition.x, targetPosition.y, targetPosition.z],
                0.3,
                delta
            );
        }
    });

    // Handle zoom updates
    const handleZoom = (zoom) => {
        setZoomLevel(zoom);
    };

    return (
        <group ref={groupRef}>
            {children}
            <OrbitControls
                enableDamping
                dampingFactor={0.05}
                minDistance={10}
                maxDistance={30}
                enablePan={false}
                enableZoom={false}
                rotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2} // Prevent viewing below the floor
                minPolarAngle={0} // Prevent viewing from below
                onZoom={(e) => handleZoom(e.target.getDistance())}
                onStart={() => setIsOrbitActive(true)}
                onEnd={() => setIsOrbitActive(false)}
            />
        </group>
    );
};

export default HeroCamera;