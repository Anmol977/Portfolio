import React, { Component } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect'

class Scene extends Component {
    scene: any;
    camera: any;
    renderer: any;
    material: any;
    sphere: any;
    mount: any;
    frameId: any;
    controls: any;
    effect: any;
    startTime: any = new Date();

    constructor(props: any) {
        super(props);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.animate = this.animate.bind(this);
    }

    componentDidMount() {
        const width: number = 500;
        const height: number = 500;
        let aspRatio: number = width / height;

        const scene = new THREE.Scene();
        this.scene = scene;

        const camera: any = new THREE.PerspectiveCamera(75, aspRatio, 1, 1000);
        // camera.position.y = 150;
        // camera.position.z = 500;
        camera.position.z = 6;
        this.camera = camera;

        const renderer = new THREE.WebGLRenderer();
        this.renderer = renderer;

        const sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 20, 10), new THREE.MeshPhongMaterial({ flatShading: true }));
        scene.add(sphere);
        this.sphere = sphere;

        const plane = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshBasicMaterial({ color: 0xe0e0e0 }));
        plane.position.y = - 100;
        plane.rotation.x = Math.PI / 2;
        scene.add(plane);

        const pointLight1 = new THREE.PointLight(0xffffff);
        pointLight1.position.set(100, 100, 100);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xffffff, 0.25);
        pointLight2.position.set(- 100, - 100, - 100);
        scene.add(pointLight2);


        const effect = new AsciiEffect(this.renderer, ' .:-+*=%@#', { invert: true });
        effect.setSize(width, height);
        this.effect = effect;

        const controls = new OrbitControls(this.camera, this.effect.domElement);
        this.controls = controls;

        this.mount.appendChild(this.effect.domElement);

        this.start();
    }

    componentWillUnmount() {
        this.stop();
        this.mount.removeChild(this.effect.domElement);
    }

    start() {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }

    stop() {
        cancelAnimationFrame(this.frameId)
    }

    animate() {

        this.frameId = window.requestAnimationFrame(this.animate)
        this.renderScene();
    }

    renderScene() {
        // const timer: any = Date.now() - this.startTime;
        // this.sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150;
        this.sphere.rotation.x = 2000 * 0.0003;
        this.sphere.rotation.z = 2000 * 0.0002;
        this.controls.update();
        this.effect.render(this.scene, this.camera);
    }

    render() {
        return (
            <div
                // style={{ width: '300px', height: '300px' }}
                ref={(mount) => { this.mount = mount }}
            />
        )
    }

}






export default Scene;