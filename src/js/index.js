require('../css/style.css');
import * as THREE from 'three'

import BasicScene from './BasicScene';
import RotatingCube from './RotatingCube';
import ExpandingCube from './ExpandingCube';
import FadingCube from './FadingCube';
import Spark from './Spark';
import Explosion from './Explosion';
import OnClickRayCaster from './OnClickRayCaster';

console.log('inizio');

const basicScene = new BasicScene()
basicScene.InitScene()
const camera = basicScene.camera

const cubesNumber = 3
const spread = 60
for(let i = 0; i < cubesNumber; i++){
    const basicCube = new RotatingCube()
    basicCube.root.position.x = (Math.random() * spread) - (spread * 0.5)
    basicCube.root.position.y = (Math.random() * spread) - (spread * 0.5)
    basicCube.root.position.z = (Math.random() * spread) - (spread * 0.5)

    basicScene.Add(basicCube)
}

const expandingCube = new ExpandingCube()
basicScene.Add(expandingCube)

const clickRaycaster = new OnClickRayCaster(camera)
clickRaycaster.onClickEvent = newExplosion

function addFadingCube(point) {
    const fadingCube = new FadingCube()
    fadingCube.life = 3
    fadingCube.initialTime = basicScene.clock.getElapsedTime()

    fadingCube.root.position.copy(point)

    const newScale = new THREE.Vector3(5,5,5)
    fadingCube.root.scale.copy(newScale)

    basicScene.Add(fadingCube)
}


function newExplosion(point) {
    const explosion = new Explosion(basicScene,point)
    basicScene.Add(explosion)
}