import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    
    const handleCopy = () => {
        navigator.clipboard.writeText('seboka7502@gmail.com');
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                {/* First Grid Item */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        
                            <img 
                                src="/assets/WhatsApp Image 2024-07-10 at 12.40.52_b90ab495.jpg" 
                                alt="grid1" 
                                className="w-full  sm:h-[276px] h-fit object-contain" 
                            />
                        
                        <div>
                            <p className="grid-headtext"></p>
                            <p className="grid-subtext">
                                With a passion for programming and the skills I have acquired over the years of studying and learning,
                                I can confidently say I have the ability to work on big projects and produce great results. I am a quick learner
                                and always willing to learn new things.
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Second Grid Item */}
                <div className="col-span-1 xl:row-span-3" >
                    <div className="grid-container">
                        <img 
                            src="/assets/The Full Stack Web Development.jpeg" 
                            alt="grid-2" 
                            className="w-full  sm:w-[276px] h-fit object-contain" 
                        />
                
                        <div>
                            <p className="grid-headtext">Full-Stack Dev</p>
                            <p className="grid-subtext">
                                I specialize in ASP.NET Core (C#), with JavaScript, CSS, and some React, Next.js ecosystem. 
                                Using Figma and other tools. I focus on the back-end and back-end. For databases, I work with SQL Server.
                                
                                As a Software Development I have learnt a lot about SDLC, System analysis and the ethics around sytems
                                and software development.
                            </p>                       
                        </div>
                     </div>   
                </div>

                {/* Globe Section */}
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: -26.267206,
                                    lng: 28.122071,
                                    text: "My Location",
                                    color: 'white',
                                    size: 20,
                                }]}
                            />
                        </div>   
                    
                        <div className="grid-headtext">
                            <p>Very flexible; I can work on-site or remotely across most timezones.</p>
                            <p className="grid-subtext">
                                I am based in Johannesburg, but relocating is not an issue at all.
                            </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                {/* Large Grid Item */}
                <div className="col-span-2 xl:row-span-3">
                    <div className="grid-container">        
                            <img 
                                src="/assets/grid3.png" 
                                alt="grid-3" 
                                className="w-full sm:h-[266] h-fit object-contain" 
                            />                     
                        <div>
                            <p className="grid-headtext">How It Started</p>
                            <p className="grid-subtext">
                                I've always been a kid around computers 😂, always wanting to solve problems. It became a hobby,
                                I knew I was meant for this. My love for it grew, and I wanted to learn and know more. I ended up
                                studying Software Development, and here I am today still pushing.
                                Building things and bringing websites to life through code is the best feeling ever 🧑‍💻
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Grid Item */}
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">                      
                            <img 
                                src="/assets/grid4.png" 
                                alt="grid-4" 
                                className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" 
                            />                     
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img 
                                    src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} 
                                    alt="copy" 
                                />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                                    seboka7502@gmail.com 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;