import React, { Component } from "react";
import ReactDOM from "react-dom";

import textureImg from "../../styles/assets/img.jpg"

import * as THREE from "three";
import { CompressedPixelFormat } from "three";
class Plane extends Component {
  componentDidMount() {
   

    let texture
    let mouse = new THREE.Vector2(0,0)
    
    const loaderPromise = new Promise(function(resolve) {
      function loadDone(x) {
        console.log("loader completed")
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
      const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
      camera.position.z = 0.5
    
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize( window.innerWidth, window.innerHeight )
      this.mount.appendChild( renderer.domElement )
    
      let plane = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(), 
        new THREE.MeshBasicMaterial({map: texture})
      )
      console.log(plane)
      scene.add( plane )
      function animate() {
        requestAnimationFrame( animate )
        plane.rotation.x += 0.001
        plane.rotation.y += 0.001
        renderer.render( scene, camera )
      }
    
      animate()
    }
  }

  render() {
    const { name } = this.props
    
    return (
      <>
        <div ref={ref => (this.mount = ref)}>
          <div className="glitch name content-border" data-text={name}>
          {name}
          </div>
        </div>
      </>
    )
  }
}

export default Plane