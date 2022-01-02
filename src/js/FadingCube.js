import BasicCube from './BasicCube';

export default class FadingCube extends  BasicCube {
    constructor() {
        super();
        this.life = 5
        this.initialTime = 0

        this.mesh.material.transparent = true
        this.mesh.material.opacity = 0.1
    }
    update(timeElapsed) {
        const currentTime = timeElapsed - this.initialTime
        const normalizedLife = currentTime / this.life
        this.mesh.material.opacity = 1 - normalizedLife

        this.mesh.rotation.x = normalizedLife * Math.PI

        if(normalizedLife > 1) this.OnDie()
    }

    OnDie() {

    }

    //timeElapsed == secondi passati dall'inizio della scena
    //this.life == seccondi che il cubo impiega ad apparire
}