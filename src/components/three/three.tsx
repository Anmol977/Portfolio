import { Component } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
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

    constructor(props: any) {
        super(props);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.animate = this.animate.bind(this);
    }

    componentDidMount() {
        const w: number = 500;
        const h: number = 400;
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

        try {
            const loader = new GLTFLoader();
            loader.load('./scene.glb', (gltf) => {
                console.log(gltf)
                const root = gltf.scene;
                gltf.scene.scale.set(0.8, 0.8, 0.8);
                gltf.scene.position.x = 0;				    //Position (x = right+ left-) 
                gltf.scene.position.y = -1;				    //Position (y = up+, down-)
                gltf.scene.position.z = 0;
                this.scene.add(root);
            });
        } catch (err) {
            console.log(err)
        }



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

        this.frameId = window.requestAnimationFrame(this.animate)
        this.renderScene();
    }

    renderScene() {
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
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