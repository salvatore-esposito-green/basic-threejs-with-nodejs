import Spark from './Spark';
import * as THREE from 'three'

export default class Explosion {
    constructor(scene, point) {
        this.life = 3
        this.initialTime = scene.clock.getElapsedTime()
        this.createSpark = this.createSpark.bind(this)
        this.Sparks = []
        this.basicScene = scene
        this.root = new THREE.Group()

        let hue = Math.random()
        const saturation = 0.7 + (Math.random() * 0.3)
        let lightness = 0.45 + (0.15 * Math.random())

        for(let i =0;i < 500; i++){
            const color = new THREE.Color()
            const rest = i % 4
            const kLuma = 0.02 * rest
            const kSat = 0.06 * rest

            let currentHue = hue + (0.5 * (i % 2))
            currentHue = currentHue % 1
            color.setHSL(currentHue,saturation - kSat, lightness + kLuma)
            this.createSpark(color)
        }
        this.root.position.copy(point)
        scene.Add(this)
    }

    createSpark(color) {
        const spark = new Spark(color)
        spark.life = 3
        spark.initialTime = this.basicScene.clock.getElapsedTime()
        spark.root.rotation.z = Math.random() * Math.PI * 2
        spark.root.rotation.x = Math.random() * Math.PI * 2
        this.root.add(spark.root)
        this.Sparks.push(spark)
    }

    update(timeElapsed) {
        for (const spark of this.Sparks){
            spark.update(timeElapsed)
        }
        const currentTime = timeElapsed - this.initialTime
        const lifeTime = currentTime / this.life
        if(lifeTime > 1) this.OnDie()
    }

    OnDie() {

    }
}