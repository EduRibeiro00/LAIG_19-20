/**
 * MySecurityCamera - class that represent the 2nd screen, that is the security camera
 */
class MySecurityCamera extends CGFobject {
    /**
     * Constructor of the class
     * @param {*} scene - Reference to the scene object
     */
    constructor(scene) {
        // TODO: make security camera display scene
        // TODO: implement the shaders
        super(scene);
        this.securityCameraShader = new CGFshader(scene.gl, "shaders/SecCamRec.vert", "shaders/SecCamRec.frag");
        this.securityCameraRec = new MyRectangle(scene, "SecurityCameraRec", 0.5, 1, -1, -0.5);
    }


    /**
     * Display method for the security camera object
     */
    display() {
        this.scene.rttTexture.bind();
        this.scene.setActiveShader(this.securityCameraShader);
        this.securityCameraRec.display();
        this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.rttTexture.unbind();
    }
}