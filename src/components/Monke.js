import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import model from "./assets/neko/scene.glb"

export default class Monke {
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
                gltf.scene.scale.set(0.2, 0.2, 0.2)
                gltf.scene.rotation.y = Math.PI / 2
                gltf.scene.position.x = this.x
                gltf.scene.position.y = 1
                gltf.scene.position.z = this.z
                this.scene.add(gltf.scene)
                this.model = gltf
            },
            (error) => {
                console.log('error')
                console.log(error)
            }
        )
    }
    animationData() {
        return this.model
    }
    update() {
        this.scene.rotation.y += 0.1
    }

}