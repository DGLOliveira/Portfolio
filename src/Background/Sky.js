import { useState, useEffect, useContext, Suspense } from "react";
import { Sky } from "@react-three/drei";
import { Context } from "../Context/Context.js";


export default function SkyBox() {
    const context = useContext(Context);
    const lightThemeInclinationRange=[0.8, 0.5];
    const lightThemeRaylightRange=[0.05, 1];
    const darkThemeInclinationRange=[0.44, 0.495];
    const darkThemeRaylightRange=[50, 20];
    const [state, setState] = useState({
        inclination: 0.48,
        raylight: 10
    });

    useEffect(() => {
        let inclination;
        let raylight;
        if (context.darkMode) {
            inclination = context.scrollTop / context.scrollTopMax * (darkThemeInclinationRange[1] - darkThemeInclinationRange[0]) + darkThemeInclinationRange[0];
            raylight = context.scrollTop / context.scrollTopMax * (darkThemeRaylightRange[1] - darkThemeRaylightRange[0]) + darkThemeRaylightRange[0];
            setState({
                inclination: inclination,
                raylight: raylight
            });
        } else {
            inclination = context.scrollTop / context.scrollTopMax * (lightThemeInclinationRange[1] - lightThemeInclinationRange[0]) + lightThemeInclinationRange[0];
            raylight = context.scrollTop / context.scrollTopMax * (lightThemeRaylightRange[1] - lightThemeRaylightRange[0]) + lightThemeRaylightRange[0];
            setState({
                inclination: inclination,
                raylight: 0.05
            });
        }
    }, [context.darkMode, context.scrollTop]);


    return (
        <Sky
            distance={450000}
            inclination={state.inclination}
            rayleigh={state.raylight}
            azimuth={0.25}
            turbidity={1}
        />
    );
}