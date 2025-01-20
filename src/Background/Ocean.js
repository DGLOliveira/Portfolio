import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Water } from "three-stdlib";
import * as WaterNormals from "./../Assets/waternormals.jpeg";
import { extend, useFrame, useThree, useLoader } from "@react-three/fiber";
extend({ Water });

export default function Ocean() {
    const ref = useRef();
    const gl = useThree((state) => state.gl);
    const waterNormals = useLoader(THREE.TextureLoader, WaterNormals.default);
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
    const geom = useMemo(() => new THREE.PlaneGeometry(1500, 1500), []);
    const config = useMemo(
        () => ({
            textureWidth: 1036,
            textureHeight: 1036,
            waterNormals,
            sunDirection: new THREE.Vector3(),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: 0.8,
            fog: true,
            format: gl.encoding,
        }),
        [waterNormals],
    );
    useFrame(
        (state, delta) => (ref.current.material.uniforms.time.value += delta),
    );
    return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />;
};