import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';

const Star = ({ position }: { position: THREE.Vector3 }) => {
    return (
        <mesh position={position}>
            <sphereGeometry args={[0.005, 24, 24]} />
            <meshBasicMaterial color="#ffffff" />
        </mesh>
    );
};

function Scene() {
    const starsRef = useRef<THREE.Group>(null);

    const stars = useMemo(() => {
        const temp = [];
        for (let i = 0; i < 1000; i++) {
            const x = (Math.random() - 0.5) * 10;
            const y = (Math.random() - 0.5) * 10;
            const z = (Math.random() - 0.5) * 10;
            temp.push(<Star key={i} position={new THREE.Vector3(x, y, z)} />);
        }
        return temp;
    }, []);

    useFrame(() => {
        if (starsRef.current) {
            starsRef.current.rotation.y += 0.0002;
        }
    });

    return (
        <group ref={starsRef}>
            {stars}
        </group>
    );
}

export default Scene;