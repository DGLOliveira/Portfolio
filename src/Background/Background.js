import { useState, useEffect, useContext, Suspense } from "react";
import { Context } from "../Context/Context.js";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Sky } from "@react-three/drei";
import Ocean from "./Ocean.js";
import SkyBox from "./Sky.js";

export default function Background() {
    const context = useContext(Context);
    const [state, setState] = useState({
        fog: {
            color: 0x000080
        }
    });

    useEffect(() => {
        if (context.darkMode) {
            setState({
                fog: {
                    color: 0x101020
                }
            });
        } else {
            setState({
                fog: {
                    color: 0xffffff
                }
            });
        }
    }, [context.darkMode]);


    return (
        <div id="background">
            <Suspense fallback={null}>
                <Canvas
                    gl={{ antialias: false }}
                    dpr={window.devicePixelRatio}
                    camera={{ position: [0, 25, 10], near: 2 }}
                >
                    <OrbitControls target={[0, 25, 0]} />
                    <fog
                        attach="fog"
                        color={state.fog.color}
                    />
                    <SkyBox />
                    <Stars
                        radius={440}
                    />
                    <Ocean />
                </Canvas>
            </Suspense>
        </div>
    );
};