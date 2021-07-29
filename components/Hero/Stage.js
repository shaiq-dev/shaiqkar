import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Plane, Reflector } from '@react-three/drei';
import gsap from 'gsap';
import PropTypes from 'proptypes';
import Letter from './Letter';

const Pavement = () => {
    return (
        <>
            <Plane
                rotation-x={-Math.PI * 0.5}
                position={[0, -7.9, 0]}
                args={[700, 700]}
                receiveShadow>
                <meshBasicMaterial
                    // color={'#181718'}
                    attach="material"
                    transparent={true}
                    opacity={0.3}
                />
            </Plane>
            <Reflector
                resolution={1024}
                args={[700, 700]}
                mirror={1}
                mixBlur={0.01}
                mixStrength={1}
                minDepthThreshold={1}
                maxDepthThreshold={1.2}
                depthToBlurRatioBias={0.1}
                position={[0, -8, 0]}
                rotation={[-Math.PI * 0.5, 0, 0]}>
                {(Material, props) => (
                    <Material attach="material" metalness={0} roughness={1} {...props} />
                )}
            </Reflector>
        </>
    );
};

const Rotate = ({ text, count, radius, position }) => {
    const grpRef = React.useRef();

    React.useEffect(() => {
        gsap.to(grpRef.current.rotation, {
            duration: 6,
            y: Math.PI * 1.3 + Math.PI * 2,
            repeat: -1,
            ease: 'power3.inOut',
            onComplete: () => console.log('Hi')
        });
    });
    return (
        <group ref={grpRef} position={position} rotation={[0, Math.PI * 1.3, 0]} scale={[-1, 1, 1]}>
            {text.split('').map((l, i) => (
                <Letter key={`1${i}`} l={l} radius={radius} i={i} count={count} />
            ))}
        </group>
    );
};

export default function Stage() {
    return (
        <Canvas colorManagement camera={{ fov: 30, position: [0, 90, 180] }}>
            <color attach="background" args={['#E8BC2']} />
            <directionalLight position={[-40, 20, 20]} color="#c59cf1" />
            <directionalLight position={[15.5, 20, -20]} intensity={1} color="#8d69cb" />
            <ambientLight color="#ff501a" />
            <Suspense fallback={null}>
                <Pavement />
                <Environment preset="night" />
                <Rotate text={'SHAIQKAR'} start={Math.PI * 1.18} count={11} radius={25} />
            </Suspense>
        </Canvas>
    );
}

Rotate.propTypes = {
    text: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
    start: PropTypes.number,
    position: PropTypes.array
};
