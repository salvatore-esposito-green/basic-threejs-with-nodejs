import * as THREE from 'three'
export default class BasicScene {
    constructor() {
        this.updatables = []
        this.clock = new THREE.Clock()
    }
    InitScene() {
        this.scene = new THREE.Scene()
        this.camera = this.GetCamera()
        this.camera.position.z = 50

        const renderObject = this.GetRenderer()
        this.clearColor = renderObject.clearColor
        this.renderer = renderObject.renderer
        document.body.appendChild(this.renderer.domElement)
        this.renderer.render(this.scene, this.camera)

        this.Update()
    }

    GetCamera() {
        const aspectRatio = window.innerWidth / window.innerHeight
        const camera = new THREE.PerspectiveCamera(45,
            aspectRatio,
            1,
            1000)
        return camera
    }

    GetRenderer() {
        const clearColor = new THREE.Color()
        clearColor.setRGB(0.1, 0.1, 0.1)

        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setClearColor(this.clearColor)

        return {
            clearColor,
            renderer
        }
    }

    Add(object) {
        this.scene.add(object.root)
        if(object.update) this.updatables.push(object)

        object.OnDie = () => { this.Remove(object)}
    }

    Remove(object) {
        this.updatables = this.updatables.filter(obj => obj.root.uuid !== object.root.uuid)
        this.scene.remove(object.root)
    }

    Update() {
        const timeElapsed = this.clock.getElapsedTime()
        for(let updatable of this.updatables) updatable.update(timeElapsed)
        this.renderer.render(this.scene, this.camera)
        requestAnimationFrame(() => this.Update())
    }
}