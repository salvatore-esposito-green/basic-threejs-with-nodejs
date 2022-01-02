import BasicCube from './BasicCube';

export default class RotatingCube extends BasicCube {
    update(timeElapsed) {
        this.color.r = Math.abs(Math.sin(timeElapsed))
        this.material.color = this.color
        this.root.rotation.x = timeElapsed * (Math.PI * 0.5) + this.seed
        this.root.rotation.y = timeElapsed * (Math.PI)
    }
}