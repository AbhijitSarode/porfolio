import * as THREE from 'three';


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Particles
// const particles = new THREE.Particles({

// })


const vertices = [];

for ( let i = 0; i < 10000; i ++ ) {

	const x = THREE.MathUtils.randFloatSpread( 2000 );
	const y = THREE.MathUtils.randFloatSpread( 2000 );
	const z = THREE.MathUtils.randFloatSpread( 2000 );

	vertices.push( x, y, z );

}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

const material = new THREE.PointsMaterial( { color: 0xffffff } );

const points = new THREE.Points( geometry, material );

scene.add( points );






// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}


// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(4, 1, - 4)
scene.add(camera)

// Renderer
 const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Animate
const clock = new THREE.Clock()

 const tick = () =>
 {
	 const elapsedTime = clock.getElapsedTime()
 

	 renderer.render(scene, camera)
 
	 // Call tick again on the next frame
	 window.requestAnimationFrame(tick)
 }
 
 tick()



/*


((d) => {
	const c = d.querySelector(".webgl");
	const ctx = c.getContext("2d");
  
	c.width = innerWidth;
	c.height = innerHeight;
  
	class Particles {
	  constructor({ x, y, color, radius, d }) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.radius = radius;
		this.d = d;
		this.lineWidth = 0.5;
		this.range = 200;
	  }
  
	  update(particles) {
		const length = particles.length;
		this.d = border(this.x, this.y, this.d, this.radius);
  
		this.x += this.d.x;
		this.y += this.d.y;
  
		for (let i = 0; i < length; i++) {
		  if (this === particles[i]) continue;
		  const dist = distance(this, particles[i]);
		  if (dist < this.range) {
			ctx.lineWidth = this.lineWidth;
			ctx.strokeStyle = `rgba(255,255,255,${1 - dist / this.range})`;
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(particles[i].x, particles[i].y);
			ctx.stroke();
			ctx.closePath();
		  }
		}
  
		this.draw();
	  }
  
	  draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	  }
	}
  
	let particles;
  
	const init = (e) => {
	  c.width = innerWidth;
	  c.height = innerHeight;
  
	  const particlesLenght = 30;
	  particles = [];
  
	  for (let i = 0; i < particlesLenght; i++) {
		particles.push(new Particles(setup()));
	  }
	};
  
	const distance = (p1, p2) => {
	  return Math.hypot(p1.x - p2.x, p1.y - p2.y);
	};
  
	const border = (x, y, d, radius) => {
	  if (x + radius >= c.width || x - radius <= 0) {
		d.x = -d.x;
	  }
  
	  if (y + radius >= c.height || y - radius <= 0) {
		d.y = -d.y;
	  }
  
	  return { x: d.x, y: d.y };
	};
  
	const animation = () => {
	  
	  ctx.clearRect(0, 0, c.width, c.height);
  
  
	  particles.forEach((particle) => {
		particle.update(particles);
	  });
  
	  requestAnimationFrame(animation);
  
	};
  
	const setup = (e = false) => {
	  const degrees = 360;
	  const radius = 3;
	  const { x, y } = mouseOnCanvas(e, radius, c);
	  const speed = 1 + Math.random() * 0.1;
	  const directionAngle = Math.floor(Math.random() * degrees);
	  const color = "rgba(255,255,255,1)";
  
	  const d = {
		x: Math.cos(directionAngle) * speed,
		y: Math.sin(directionAngle) * speed
	  };
	  return { x, y, color, radius, d };
	};
  
	const mouseOnCanvas = (e, radius, c) => {
	  const bounding = c.getBoundingClientRect();
	  const mx =
		e.clientX - bounding.left || minMax(0 + radius, c.width - radius);
	  const my =
		e.clientY - bounding.top || minMax(0 + radius, c.height - radius);
  
	  const xInCanvas =
		mx <= radius
		  ? mx + radius + 0.5
		  : mx + radius >= c.width
		  ? mx - radius - 0.5
		  : mx;
	  const yInCanvas =
		my <= radius
		  ? my + radius + 0.5
		  : my + radius >= c.height
		  ? my - radius - 0.5
		  : my;
  
	  return { x: xInCanvas, y: yInCanvas };
	};
  
	const minMax = (min, max) => Math.random() * (max - min) + min;
  
	init();
	requestAnimationFrame(animation);
	window.addEventListener("resize", init);
  })(document);
  


  */