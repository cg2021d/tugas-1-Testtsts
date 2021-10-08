function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");




    const naget = {
        yel: [1,0.3,0],
        blue: [0,0,1],
      oki : [-0.4503187758799, 0.481593458079],  
      p1:  [-0.7235189272893, 0.4654133147819],  //1 leftstart
      p2:  [-0.660424653187, 0.4808649737458],
      p3: [-0.6166449527894, 0.5143435681674],
      p4:  [-0.5406742962173, 0.5297952271312],
      p5:  [-0.4801552986089, 0.547822162589],
      p6:  [-0.4338003217174, 0.5400963331071],
      p7:  [-0.3565420268983, 0.5246446741433],
      p8:  [-0.2792837320791, 0.4911660797217],
      p9:  [-0.2380793081755, 0.462838038288],
      p10:  [-0.2490115186908, 0.4194577764951],
      p11:  [-0.2432298611635, 0.3894426582098],
      p12:  [-0.2728455408442, 0.3727033609989],
      p13:  [-0.2540603724532, 0.3821442340432],
      p14:  [-0.3204881559826, 0.3920179347037],
      p15:  [-0.3964588125548, 0.4177706996434],
      p16:  [-0.4492519806813, 0.4267841673723],
      p17:  [-0.5, 0.4],
      p18:  [-0.5574135934281, 0.3920179347037],
      p19:  [-0.6140696762955, 0.3598269785291],
      p20:  [-0.6655752061749, 0.3495258725532],
      p21:  [-0.7170807360544, 0.3495258725532],
      p22:  [-0.7582851599579, 0.3727033609989],
      p23:  [-0.7788873719097, 0.4177706996434],
      p24:  [-0.749271692229, 0.455112208806], //24

        
      oka:  [0.5194037709386, 0.3850509961952],
      p25:  [0.3164110793234, 0.4962921721022], //25 rightstart
      p26:  [0.2636187188175, 0.4992580350519],
      p27:  [0.2517552670184, 0.4690062329643],
      p28:  [0.2470098862988, 0.4363817405169],
      p29:  [0.2345532619098, 0.4055367658393],
      p30:  [0.2607040008814, 0.3398196759878],
      p31:  [0.3147777221821, 0.3310981080361],
      p32:  [0.4, 0.3],
      p33:  [0.5397941753367, 0.3084220313616],
      p34:  [0.632242795625, 0.3747059477947],
      p35:  [0.733412983865, 0.4392455506375],
      p36:  [0.7770208236237, 0.4933192719382],
      p37:  [0.7770208236237, 0.5351827981065],
      p38:  [0.7212027887326, 0.5753020106844],
      p39:  [0.6514302451188, 0.5753020106844],
      p40:  [0.5783338350192, 0.5210768957731],
      p41:  [0.490898630972, 0.4517065433546],
      p42:  [0.4403868822419, 0.4539185108683],
      p43:  [0.3634887198995, 0.4695900142055],//43
    };

    const vertices = [
        ...naget.oki, ...naget.yel,
        ...naget.p1, ...naget.yel,
        ...naget.p2, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p2, ...naget.yel,
        ...naget.p3, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p3, ...naget.yel,
        ...naget.p4, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p4, ...naget.yel,
        ...naget.p5, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p5, ...naget.yel,
        ...naget.p6, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p6, ...naget.yel,
        ...naget.p7, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p7, ...naget.yel,
        ...naget.p8, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p8, ...naget.yel,
        ...naget.p9, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p9, ...naget.yel,
        ...naget.p10, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p10, ...naget.yel,
        ...naget.p11, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p11, ...naget.yel,
        ...naget.p12, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p12, ...naget.yel,
        ...naget.p13, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p13, ...naget.yel,
        ...naget.p14, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p14, ...naget.yel,
        ...naget.p15, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p15, ...naget.yel,
        ...naget.p16, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p16, ...naget.yel,
        ...naget.p17, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p17, ...naget.yel,
        ...naget.p18, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p18, ...naget.yel,
        ...naget.p19, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p19, ...naget.yel,
        ...naget.p20, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p20, ...naget.yel,
        ...naget.p21, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p21, ...naget.yel,
        ...naget.p22, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p22, ...naget.yel,
        ...naget.p23, ...naget.yel,

        ...naget.oki, ...naget.yel,
        ...naget.p23, ...naget.yel,
        ...naget.p24, ...naget.yel,


        ...naget.oka, ...naget.yel,
        ...naget.p25, ...naget.yel,
        ...naget.p26, ...naget.yel,

        ...naget.oka, ...naget.yel,
        ...naget.p26, ...naget.yel,
        ...naget.p27, ...naget.yel,

        ...naget.oka, ...naget.yel,
        ...naget.p27, ...naget.yel,
        ...naget.p28, ...naget.yel,

        ...naget.oka, ...naget.yel,
        ...naget.p28, ...naget.yel,
        ...naget.p29, ...naget.yel,

        ...naget.oka, ...naget.yel,
        ...naget.p29, ...naget.yel,
        ...naget.p30, ...naget.yel,

        ...naget.oka, ...naget.yel,
        ...naget.p30, ...naget.yel,
        ...naget.p31, ...naget.yel,

        ...naget.oka, ...naget.yel,
        ...naget.p31, ...naget.yel,
        ...naget.p32, ...naget.yel,

        ...naget.oka, ...naget.yel,
        ...naget.p32, ...naget.yel,
        ...naget.p33, ...naget.yel,

        ...naget.oka, ...naget.yel,
        ...naget.p33, ...naget.yel,
        ...naget.p34, ...naget.yel,

        ...naget.oka, ...naget.yel,
        ...naget.p34, ...naget.yel,
        ...naget.p35, ...naget.yel,

        ...naget.oka, ...naget.yel,
        ...naget.p35, ...naget.yel,
        ...naget.p36, ...naget.yel,

        ...naget.oka, ...naget.yel,
        ...naget.p36, ...naget.yel,
        ...naget.p37, ...naget.yel,

        ...naget.oka, ...naget.yel,
        ...naget.p37, ...naget.yel,
        ...naget.p38, ...naget.yel,

        ...naget.oka, ...naget.yel,
        ...naget.p38, ...naget.yel,
        ...naget.p39, ...naget.yel,

        ...naget.oka, ...naget.yel,
        ...naget.p39, ...naget.yel,
        ...naget.p40, ...naget.yel,

        ...naget.oka, ...naget.yel,
        ...naget.p40, ...naget.yel,
        ...naget.p41, ...naget.yel,

        ...naget.oka, ...naget.yel,
        ...naget.p41, ...naget.yel,
        ...naget.p42, ...naget.yel,

        ...naget.oka, ...naget.yel,
        ...naget.p42, ...naget.yel,
        ...naget.p43, ...naget.yel,
    ];






    // Linked list for vertices
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;

        void main() {
            gl_Position = vec4(aPosition + uChange, 0.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;

        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    // Preparing .exe
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 2 * Float32Array.BYTES_PER_ELEMENT, 0);
    // gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

    var speedRaw = 1;
    var speed = speedRaw / 600;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function render() {
        if (change >= 0.5 || change <= -0.5) {
            speed = -speed;
        }
        
        // change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(1.0, 1.0, 1.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.drawArrays(gl.POINTS, 0, 43);
        // gl.drawArrays(gl.TRIANGLE_FAN, 24, 19);
    }

    setInterval(render, 1000 / 60);
}
