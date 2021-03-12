import React, { Component } from 'react'
import * as THREE from 'three'

import HomeText from './info-content/HomeText'
import textureImg from '../../styles/assets/logo.png'

class Plane extends Component {
  state = {
    loaded: false
  }
  
  componentDidMount() {
    
    let texture = null
    
    const loaderPromise = new Promise(function(resolve) {
      function loadDone(x) {
        resolve(x)
      }
      const loader = new THREE.TextureLoader()
      loader.load(textureImg, loadDone)
    })
    
    loaderPromise
      .then(function(response) {
        texture = response
        init()
        
      }, function(error) {
        console.log(error)
      })
    
    const init =() => {
    
      const scene = new THREE.Scene()
      scene.background = new THREE.Color( 0x333333 )
      const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
      camera.position.z = 0.80
    
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize( window.innerWidth, window.innerHeight )
      this.mount.appendChild( renderer.domElement )
    
      const material = new THREE.MeshBasicMaterial({map: texture})
      material.transparent = true
      material.opacity = 0.2

      let plane = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(), 
        material
      )

      scene.add( plane )
      function animate() {
        requestAnimationFrame( animate )
        plane.rotation.x += 0.001
        plane.rotation.y += 0.001
        renderer.render( scene, camera )
      }
    
      animate()

      this.setState({
        loaded: true
      })
    }
  }

  render() {
    const { usage, infos } = this.props

    return (
      <>
        {
          this.state.loaded === false &&
          <div style={{height: '100vh', background: '#333'}}></div>
        }
        <div ref={ref => (this.mount = ref)}>
          {usage === 'home' && 
            <HomeText infos={infos}/>
          }
        </div>
      </>
    )
  }
}

export default Plane