import React from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import gsap from 'gsap';
import PropTypes from 'proptypes';

export default function Letter({ i, count, radius, l }) {
    return (
        <group rotation={[0, 0, 0]}>
            <Text
                color="#f7b77e"
                position={[
                    radius * Math.sin((i / count) * Math.PI * 2),
                    -0.8,
                    radius * Math.cos((i / count) * Math.PI * 2)
                ]}
                rotation={[0, (i / count) * Math.PI * 2, 0]}
                i={i}>
                {l}
            </Text>
        </group>
    );
}

function Text({
    children,
    vAlign = 'center',
    hAlign = 'center',
    size = 10,
    color = '#000000',
    i,
    ...props
}) {
    const font = useLoader(THREE.FontLoader, '/bold.blob');
    const config = React.useMemo(
        () => ({
            font,
            size,
            height: 2,
            curveSegments: 30,
            bevelEnabled: true,
            bevelThickness: 2,
            bevelSize: 1,
            bevelOffset: 0.1,
            bevelSegments: 30
        }),
        [font]
    );
    const grpRef = React.useRef();

    const handleMeshUpdate = (s) => {
        const size = new THREE.Vector3();
        s.geometry.computeBoundingBox();
        s.geometry.boundingBox.getSize(size);
        s.position.x += hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x;
        s.position.y += vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y;
    };
    const meshRef = React.useRef();
    React.useLayoutEffect(() => handleMeshUpdate(meshRef.current), [children]);

    // Run Animation Effect Here
    React.useEffect(() => {
        gsap.defaults({
            duration: 1.4,
            ease: 'power3.inOut',
            delay: 1.5 + i * 0.1,
            yoyo: true,
            repeat: -1,
            repeatDelay: 1.6
        });
        gsap.to(meshRef.current.rotation, {
            x: Math.PI * 0.5
        });
        gsap.to(grpRef.current.position, {
            y: 1.8
        });
    });

    return (
        <>
            <group {...props} ref={grpRef}>
                <mesh ref={meshRef}>
                    <textBufferGeometry args={[children, config]} />
                    <meshStandardMaterial
                        attach="material"
                        metalness={0.2}
                        roughness={0.3}
                        color={color}
                    />
                </mesh>
            </group>
        </>
    );
}

Letter.propTypes = {
    i: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
    l: PropTypes.string.isRequired
};

Text.propTypes = {
    children: PropTypes.node.isRequired,
    vAlign: PropTypes.string,
    hAlign: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    i: PropTypes.number.isRequired
};
