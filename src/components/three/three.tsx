import { Component } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Spinner } from "@chakra-ui/react"

function easeOutCirc(x: number) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}
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
    mixer: any;
    startTime: any = new Date();
    loading: boolean = true;
    angle: number = 0;
    radius: number = 10;

    constructor(props: any) {
        super(props);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.animate = this.animate.bind(this);
    }

    async loadScene() {
        return new Promise((resolve, reject) => {
            let root;
            const loader = new GLTFLoader();
            loader.load('./scene.glb', (gltf) => {
                console.log(gltf)
                root = gltf.scene;
                gltf.scene.scale.set(0.9, 0.9, 0.9);
                gltf.scene.position.x = 0;
                gltf.scene.position.y = -1;
                gltf.scene.position.z = 0;
                this.scene.add(root);
                resolve(root)
            }, undefined,
                function (error: any) {
                    reject(error)
                }
            );
        })
    }

    componentDidMount() {
        const w: number = 300;
        const h: number = 300;
        let aspRatio: number = w / h;

        const scene = new THREE.Scene();
        this.scene = scene;

        const camera: any = new THREE.PerspectiveCamera(75, aspRatio, 1, 1000);
        camera.position.z = 6;
        camera.position.y = 2;
        this.camera = camera;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(w, h);
        renderer.setClearColor(0xffffff, 0);
        renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer = renderer;

        const pointLight1 = new THREE.PointLight(0xffffff);
        pointLight1.position.set(100, 100, 100);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xffffff, 0.25);
        pointLight2.position.set(- 100, - 100, - 100);
        scene.add(pointLight2);

        this.loadScene().then(() => this.loading = false);

        const controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls = controls;


        this.mount.appendChild(this.renderer.domElement);

        this.start();
    }

    componentWillUnmount() {
        this.stop();
        this.mount.removeChild(this.renderer.domElement);
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
        this.camera.position.x = this.radius * Math.cos(this.angle);
        this.camera.position.z = this.radius * Math.sin(this.angle);
        this.angle += 0.01;
        this.frameId = window.requestAnimationFrame(this.animate)
        this.renderScene();
    }

    renderScene() {
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        { console.log(this.loading) }
        return (
            <div
                ref={(mount) => { this.mount = mount }}
            />
        )
    }

}

export default Scene;