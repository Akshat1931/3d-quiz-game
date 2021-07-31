import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import model from "./assets/nya/scene.glb"

export default class Ducky {
    constructor(scene, manager, x, y, z) {
        this.scene = scene;
        this.manager = manager
        this.model = null
        this.x = x
        this.y = y
        this.z = z
    }

    load() {
        new GLTFLoader(this.manager).load(
            model,
            (gltf) => {
                console.log('success')
                console.log(gltf)
                gltf.scene.scale.set(0.2, 0.2, 0.2)
                gltf.scene.position.x = this.x
                gltf.scene.position.y = 0.75
                gltf.scene.position.z = this.z
                this.scene.add(gltf.scene)
                this.model = gltf
            },
            (progress) => {
                console.log('progress')
                // console.log(progress)
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