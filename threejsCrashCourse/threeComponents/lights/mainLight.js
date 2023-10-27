import * as THREE from "three";

// Light (color, intensity, distance)
export const mainLight = new THREE.PointLight(0xffffff, 125, 100);
mainLight.position.set(10, 10, 10);
