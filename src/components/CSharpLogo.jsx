import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const CSharpLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/e3a5d3e564a64fb0ab39665f44632520.glb')
  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.1} {...props} dispose={null}>
        <mesh      
          castShadow
          receiveShadow
          geometry={nodes['C#_C#_0'].geometry}
          material={materials.material}

          position={[0, 0.079, 0.181]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.37,0.37,0.5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/e3a5d3e564a64fb0ab39665f44632520.glb')

export default CSharpLogo 