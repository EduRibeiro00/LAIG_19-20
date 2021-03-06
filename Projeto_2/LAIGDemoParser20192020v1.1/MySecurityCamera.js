/**
 * MySecurityCamera - class that represent the 2nd screen, that is the security camera
 */
class MySecurityCamera extends CGFobject {
    /**
     * Constructor of the class
     * @param {*} scene - Reference to the scene object
     */
    constructor(scene) {
        super(scene);
        this.securityCameraShader = new CGFshader(scene.gl, "shaders/SecCamRec.vert", "shaders/SecCamRec.frag");
        this.securityCameraRec = new MyRectangle(scene, "SecurityCameraRec", 0.5, 1, -1, -0.5);
        // change texCoords for security camera rectangle
        this.securityCameraRec.texCoords = [
            0, 0,
			1, 0,
			0, 1,
			1, 1
        ];
        this.securityCameraRec.updateTexCoordsGLBuffers();
    }


    /**
     * Function to update the time factor in the fragment shader, in order to draw the white lines of the security camera
     * @param {*} t - Time factor for the shader
     */
    update(t) {
        this.securityCameraShader.setUniformsValues({ timeFactor: t / 100 % 1000});
    }


    /**
     * Display method for the security camera object
     */
    display() {
        this.scene.setActiveShader(this.securityCameraShader);
        this.scene.rttTexture.bind();
        this.securityCameraRec.display();
        this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.rttTexture.unbind();
    }
}