import * as THREE from 'three'

export default class BasicCube {
    constructor() {
        this.seed = Math.random()
        const color = {r:1,g:1,b:1}
        this.color = new THREE.Color()
        this.color.setRGB(color.r, color.g, color.b)

        this.material = new THREE.MeshBasicMaterial({
            color: this.cubeColor
        })
        this.geometry = new THREE.BoxGeometry(5,5,5)
        this.mesh = new THREE.Mesh(this.geometry,this.material)

        this.root = this.mesh
    }
}