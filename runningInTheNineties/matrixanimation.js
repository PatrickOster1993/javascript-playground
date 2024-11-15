const canvas = document.getElementById('matrix');
        const ctx = canvas.getContext('2d');
        const startButton = document.getElementById('startButton');

        let width, height, columns;
        const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        let drops = [];

        function setup() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            columns = Math.floor(width / 20);
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = 1;
            }
        }

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#0F0';
            ctx.font = '15px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        let animationId;

        function animate() {
            draw();
            animationId = requestAnimationFrame(animate);
        }

        startButton.addEventListener('click', () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
                animationId = null;
                startButton.textContent = 'Start Matrix';
            } else {
                setup();
                animate();
                startButton.textContent = 'Stop Matrix';
            }
        });

        window.addEventListener('resize', setup);
