import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Environment, Ring } from "@react-three/drei";
import WorkSpace from "../components/WorkSpace";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Rings from "../components/Rings.jsx";
import Cube from "../components/Cube.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: '440px' });
    const isMobile = useMediaQuery({ maxWidth: '768px' });
    const isTablet = useMediaQuery({ minWidth: '768px', maxWidth: '1024px' });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="relative w-full h-screen bg-black">
            {/* Text Content - Top */}
            <div className="relative z-20 w-full pt-24 pb-6 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-xl md:text-2xl font-medium text-white text-center font-generalsans">
                        Hi, I am Given<span className="waving-hand"> 👋</span>
                    </h1>
                    <p className="text-sm md:text-base text-gray-400 text-center mt-2 font-generalsans">
                        A Software Developer. Welcome to my World! Whatever you can imagine,
                        we can build.
                    </p>
                </div>
            </div>

            {/* 3D Model Container */}
            <div className="absolute inset-0 top-0 z-10">
                <Canvas
                    className="w-full h-full"
                    camera={{
                        position: [0, 0, 20],
                        fov: 45,
                        near: 0.1,
                        far: 1000
                    }}
                    shadows
                >
                    <Suspense fallback={<CanvasLoader />}>
                        <color attach="background" args={['#000000']} />
                        <ambientLight intensity={0.5} />
                        <directionalLight
                            position={[5, 5, 5]}
                            intensity={1}
                            castShadow
                        />
                        <directionalLight
                            position={[-5, -5, -5]}
                            intensity={0.3}
                        />
                        <pointLight
                            position={[0, 5, 0]}
                            intensity={0.5}
                        />
                        <Environment preset="city" />

                        <HeroCamera isMobile={isMobile}>
                            <group>
                                <WorkSpace
                                    position={sizes.deskPosition}
                                    rotation={[0, 0, 0]}
                                    scale={sizes.deskScale}
                                    castShadow
                                    receiveShadow
                                />                 
                               
                                <Cube position={sizes.cubePosition} scale={sizes.cubeScale} />
                                
                            </group>
                        </HeroCamera>
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-fit z-20">
                <a href="#about" className="w-fit" >
                    <Button name="Let's Get Started" isBeam={true} containerClass="px-8 py-3 sm:w-auto w-full" />
                </a>
            </div>
        </section>
    );
};

export default Hero;