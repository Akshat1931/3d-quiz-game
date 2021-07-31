import {
    BoxGeometry,
    Mesh,
    LoadingManager,
    TextureLoader,
    MeshBasicMaterial
} from "three";
import texture from "./textures/transparent.png"

export default class Block extends Mesh {

    constructor() {
        const loadingManager = new LoadingManager()
        const textureLoader = new TextureLoader(loadingManager)
        const colorTexture = textureLoader.load(texture)
        super(new BoxGeometry(3.5, 2, 3), new MeshBasicMaterial({
            transparent: true, alphaMap: colorTexture
        }))
    }
    setBlock(x, z) {
        this.position.x = x
        this.position.z = z
        this.position.y = 1
    }
}