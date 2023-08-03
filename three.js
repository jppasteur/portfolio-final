
      // Setup Three.js scene
      const scene = new THREE.Scene();

      // Set the maximum width and height to 25% of the viewport
      const maxWidth = window.innerWidth * 1;
      const maxHeight = window.innerHeight * 1;

      const camera = new THREE.PerspectiveCamera(
        75,
        maxWidth / maxHeight, // Adjust the aspect ratio
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(maxWidth, maxHeight); // Set the renderer size
      document.body.appendChild(renderer.domElement);

      // Create a sphere geometry
      const radius = 1;
      const widthSegments = 32;
      const heightSegments = 32;
      const geometryInstagram = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
      const geometryFacebook = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

      // Load the texture images
      const textureLoader = new THREE.TextureLoader();
      const textureInstagram = textureLoader.load('instagram.png');
      const textureFacebook = textureLoader.load('linkedin.png');

      // Create materials with the loaded textures
      const materialInstagram = new THREE.MeshBasicMaterial({ map: textureInstagram });
      const materialFacebook = new THREE.MeshBasicMaterial({ map: textureFacebook });

      // Create the sphere meshes
      const sphereInstagram = new THREE.Mesh(geometryInstagram, materialInstagram);
      const sphereFacebook = new THREE.Mesh(geometryFacebook, materialFacebook);

      // Position the spheres
      sphereInstagram.position.x = -2; // Adjust the position based on your preference
      sphereFacebook.position.x = 2;  // Adjust the position based on your preference
      scene.add(sphereInstagram);
      scene.add(sphereFacebook);

      // Create 3D text for the titles
      const titleTextInstagram = 'Instagram';
      const titleTextFacebook = 'LinkedIn';
      const fontLoader = new THREE.FontLoader();
      fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
        const textGeometryInstagram = new THREE.TextGeometry(titleTextInstagram, {
          font: font,
          size: 0.3,
          height: 0.1,
        });

        const textGeometryFacebook = new THREE.TextGeometry(titleTextFacebook, {
          font: font,
          size: 0.3,
          height: 0.1,
        });

        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

        const titleMeshInstagram = new THREE.Mesh(textGeometryInstagram, textMaterial);
        const titleMeshFacebook = new THREE.Mesh(textGeometryFacebook, textMaterial);

        // Position the title meshes
        titleMeshInstagram.position.y = -2.6;
        titleMeshInstagram.position.x = -3; // Adjust the position based on your preference

        titleMeshFacebook.position.y = -2.6;
        titleMeshFacebook.position.x = 1.5; // Adjust the position based on your preference

        scene.add(titleMeshInstagram);
        scene.add(titleMeshFacebook);
      });

      // Position the camera
      camera.position.z = 5;

      // Function to handle the click event
      function onClick(event, url) {
        event.preventDefault();
        window.location.href = url;
      }

      // Function to animate the scene and handle click events
      function animate() {
        requestAnimationFrame(animate);

        // Rotate the spheres
        sphereInstagram.rotation.x += 0.01;
        sphereInstagram.rotation.y += 0.01;

        sphereFacebook.rotation.x += 0.01;
        sphereFacebook.rotation.y += 0.01;

        // Raycasting to detect clicks on the spheres
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        function onMouseMove(event) {
          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }

        document.addEventListener('mousemove', onMouseMove, false);

        function onMouseClick(event) {
          event.preventDefault();
          raycaster.setFromCamera(mouse, camera);

          const intersectsInstagram = raycaster.intersectObject(sphereInstagram);
          const intersectsFacebook = raycaster.intersectObject(sphereFacebook);

          if (intersectsInstagram.length > 0) {
            onClick(event, 'https://www.instagram.com/');
          }

          if (intersectsFacebook.length > 0) {
            onClick(event, 'https://www.facebook.com/');
          }
        }

        document.addEventListener('click', onMouseClick, false);

        // Render the scene
        renderer.render(scene, camera);
      }

      animate();