var scene = new THREE.Scene();
                        scene.background = new THREE.Color(0xeeeeee);
                        var frustumSize = 5;
                        var aspect = window.innerWidth / window.innerHeight;
                        var camera = new THREE.OrthographicCamera(
                            frustumSize * aspect / -2,
                            frustumSize * aspect / 2,
                            frustumSize / 2,
                            frustumSize / -2,
                            0.1,
                            1000
                        );
                        camera.position.z = 5;
                        var renderer = new THREE.WebGLRenderer();
                        renderer.setSize(window.innerWidth, window.innerHeight);
                        document.body.appendChild(renderer.domElement);
                        var textureLoader = new THREE.TextureLoader();
                        var texture1 = textureLoader.load('./resources/testtest.png');
                        var texture2 = textureLoader.load('./resources/testing-tex.jpg');
                        var texture3 = textureLoader.load('./resources/testing-2-tex.png');
                        var geometry = new THREE.SphereGeometry(0.5, 32, 32);
                        var material1 = new THREE.MeshBasicMaterial({ map: texture1 });
                        var material2 = new THREE.MeshBasicMaterial({ map: texture2 });
                        var material3 = new THREE.MeshBasicMaterial({ map: texture3 });
                        var sphere1 = new THREE.Mesh(geometry, material1);
                        sphere1.position.x = -2.5;
                        var sphere2 = new THREE.Mesh(geometry, material2);
                        sphere2.position.x = 0;
                        var sphere3 = new THREE.Mesh(geometry, material3);
                        sphere3.position.x = 2.5;
                        scene.add(sphere1, sphere2, sphere3);
                        function animate() {
                            requestAnimationFrame(animate);
                            sphere1.rotation.x += 0.01;
                            sphere1.rotation.y += 0.01;
                            sphere2.rotation.x += 0.01;
                            sphere2.rotation.y += 0.01;
                            sphere3.rotation.x += 0.01;
                            sphere3.rotation.y += 0.01;
                            renderer.render(scene, camera);
                        }
                        animate();