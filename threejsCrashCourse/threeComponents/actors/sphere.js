import * as THREE from "three";

// Create our sphere

// Geometry is the shape of the 3D item.
const geometry = new THREE.SphereGeometry(3, 64, 64);

// Material is the layer that covers the geometry.
const material = new THREE.MeshStandardMaterial({
  color: "#cc00ff",
});

// Mesh is the combination of the geometry and material.
export const sphereMesh = new THREE.Mesh(geometry, material);
