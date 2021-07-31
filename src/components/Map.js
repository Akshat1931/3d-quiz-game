import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import model from "./assets/pirates/scene.glb"

export default class Test {
    constructor(scene, manager) {
        this.scene = scene;
        this.manager = manager
        this.model = null
    }

    load() {
        new GLTFLoader(this.manager).load(
            model,
            (gltf) => {
                console.log('success')
                console.log(gltf)
                gltf.scene.scale.set(0.0025, 0.0025, 0.0025)
                gltf.scene.position.y = 0
                gltf.scene.position.z = -1.5
                // gltf.scene.traverse(function (node) {

                //     if (node.isMesh || node.isLight) node.castShadow = true;
                //     if (node.isMesh || node.isLight) node.receiveShadow = true;

                // });

                this.scene.add(gltf.scene)
                this.model = gltf
            },
            (error) => {
                // console.log('error')
                console.log(error)
            }
        )
    }
    animationData() {
        return this.model
    }

}