import BasicCube from './BasicCube';

export default class ExpandingCube extends BasicCube{
    update(timeElapsed) {
        const red = Math.abs(Math.sin(timeElapsed))
        this.color.r = red
        this.material.color = this.color
        this.root.scale.x = red * (Math.PI * 0.5) + this.seed
        this.root.position.y = 6 //test
    }
}