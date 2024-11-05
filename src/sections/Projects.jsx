import React, { Suspense } from "react";
import {myProjects} from "../constants/index.js"
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer.jsx";

const Project=()=>{
    return(
        <section className="c-space my-20" id="Mywork">
            <p className="head-text">My work</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={myProjects[0].spotlight} alt="spotlight" className=" w-full h-96 object-cover rounded-xl" />
                    </div>
                    <div className="p-3 backdrop:-filter backdrop:-blur-3xl w-fit rounded-lg" style={myProjects[0].logoStyle} >
                        <img src={myProjects[0].logo} alt="logo" className="w-10 h-10 shadow-sm" />
                    </div>
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{myProjects[0].title}</p>
                        <p className="animatedText">{myProjects[0].desc}</p>
                        <p className="animatedText">{myProjects[0].subdesc}</p>
                    </div>
                    <a className="flex items-center gap-2 cursor-pointer text-white-600" href={myProjects[0].href} target="_blank" rel="noreferrer">
                        <p>Check Live Site</p>
                        <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
                    </a>
                </div>
                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                            <Canvas>
                                <ambientLight intensity={Math.PI}/>
                                <directionalLight position={[10,10,5]}/>
                                <Center>
                                    <Suspense fallback={<CanvasLoader/>}>
                                    <group scale={1.8} position={[0,-3,0]} rotation={[0,-0.1,0]}>
                                        <DemoComputer/>
                                    </group>
                                    </Suspense>
                                </Center>
                                <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false}/>
                            </Canvas>
                    </div>
            </div>
        </section>
    )
};
export default Project