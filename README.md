
<div align="center">

  # ⚡ Digital Reality Portfolio
  
  <h3><i>Crafting Immersive Web Experiences</i></h3>

  <p>
    A high-performance, interactive 3D portfolio powered by <b>React</b>, <b>Three.js</b>, and <b>GSAP</b>.
    <br />
    <i>Designed by Chirag Mishra</i>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  </p>

  <!-- Replace with actual project screenshot later -->
  <img width="1898" height="939" alt="image" src="https://github.com/user-attachments/assets/14b2a98e-fd78-4e32-9ff2-8c1d5d7b9dc2" />

 <p> <h3>Here Demo Link:</h3> 
   https://3-d-portfolio-template-1.vercel.app/
 </p>

</div>

<br />

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **🌀 Immersive 3D Experience** | Reactive 3D elements powered by `React Three Fiber`. Responds to your scroll and mouse movements. |
| **🚅 Butter-Smooth Scrolling** | Integrated **Lenis** for premium, momentum-based scrolling physics that feel expensive. |
| **🎭 Cinematic Animations** | Complex timeline-based animations orchestrated with **GSAP ScrollTrigger**. |
| **💎 Premium UI System** | Glassmorphism, bentogrids, and shiny spotlight effects utilizing a custom **Tailwind CSS** system. |
| **📱 Flawless Responsive** | Adapts perfectly to mobile, tablet, and desktop viewports. |
| **📧 Seamless Contact** | Integrated modal contact form with smooth transitions and mailto integration. |

<br />

## 🛠️ Tech Stack & Dependencies

-   **Frontend Framework**: React 18 + Vite
-   **3D Engine**: Three.js + @react-three/fiber + @react-three/drei
-   **Styling**: Tailwind CSS + clsx + tailwind-merge
-   **Animation**: GSAP (GreenSock) + Lenis Scroll
-   **Icons**: Lucide React

<br />

## 🎨 Customizing the 3D Model

The portfolio currently features a **Spline 3D scene** - an interactive 3D design created with [Spline](https://spline.design). You can easily replace it with your own design!

### **Option 1: Use Your Own Spline Design** (Recommended ⭐)

1. **Create your design** at [spline.design](https://spline.design) (free account available)
2. **Export your scene**:
   - Click the "Export" button in Spline
   - Select "Code Export" → "React"
   - Copy the scene URL (e.g., `https://prod.spline.design/YOUR-ID/scene.splinecode`)
3. **Update App.jsx** - Replace the scene URL in [`src/App.jsx`](src/App.jsx) (around line 73):

```jsx
<Spline
  scene="https://prod.spline.design/YOUR-SCENE-ID/scene.splinecode"
  className="w-full h-full"
/>
```

### **Option 2: Switch Back to Three.js Custom Models**

If you want to use custom Three.js models instead:

1. **Install dependencies** (if removed):
   ```bash
   npm install @react-three/fiber @react-three/drei three
   ```

2. **Update App.jsx** imports:
   ```jsx
   import { Canvas } from '@react-three/fiber'
   import { Suspense } from 'react'
   import { Experience } from './components/Experience'
   ```

3. **Replace Spline with Canvas**:
   ```jsx
   <div className="fixed top-0 left-0 w-full h-screen z-0">
     <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
       <color attach="background" args={['#050505']} />
       <ambientLight intensity={0.5} />
       <pointLight position={[10, 10, 10]} intensity={1} />
       <Suspense fallback={null}>
         <Experience />
       </Suspense>
     </Canvas>
   </div>
   ```

4. **Use the Robot component** or any Three.js geometry - see [`Robot.jsx`](src/components/Robot.jsx) for the cartoonish robot example

### **Option 3: Use .glb/.gltf 3D Models**

1. Get a 3D model from [Sketchfab](https://sketchfab.com), [CGTrader](https://www.cgtrader.com), or create in Blender
2. Place the model in `public/` folder (e.g., `public/model.glb`)
3. Update Experience.jsx:

```jsx
import { useGLTF } from '@react-three/drei'

const model = useGLTF('/model.glb')
return <primitive object={model.scene} scale={1.5} />
```

### **Quick Spline Tips**

- **Interactive elements**: Add click events in Spline editor
- **Performance**: Keep poly count under 100k for smooth performance
- **Mobile**: Test on mobile devices - Spline scenes can be heavy
- **Loading**: Add a loading state while the scene loads

<br />

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

<br />

## 📫 Connect with Me

<div align="center">
  <a href="mailto:your.email@example.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
  <a href="https://linkedin.com/in/yourprofile">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://github.com/yourusername">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</div>

<br />
<br />

<p align="center">
  <i>Made with 💜 by Chirag Mishra</i>
</p>
