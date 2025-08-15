        function enhanceWaveAnimation() {
            const flag = document.querySelector('.flag');
            
            setInterval(() => {
                flag.style.animation = 'none';
                setTimeout(() => {
                    flag.style.animation = 'windBlow 2.5s ease-in-out infinite';
                }, 100);
            }, 6000 + Math.random() * 3000); 
        }

        setTimeout(enhanceWaveAnimation, 5000);

        function animateChakra() {
            const chakra = document.querySelector('.chakra');
            setInterval(() => {
                chakra.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    chakra.style.transform = 'scale(1)';
                }, 200);
            }, 3000);
        }

        setTimeout(animateChakra, 3000);

        document.body.addEventListener('click', function(e) {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createSparkle(e.clientX, e.clientY);
                }, i * 100);
            }
        });

        function createSparkle(x, y) {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            sparkle.style.width = '6px';
            sparkle.style.height = '6px';
            sparkle.style.background = '#FFD700';
            sparkle.style.borderRadius = '50%';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '1000';
            sparkle.style.animation = 'sparkleAnim 1s ease-out forwards';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }

        // Add sparkle animation CSS
        const sparkleCSS = `
            @keyframes sparkleAnim {
                0% {
                    transform: scale(0) rotate(0deg);
                    opacity: 1;
                }
                50% {
                    transform: scale(1) rotate(180deg);
                    opacity: 1;
                }
                100% {
                    transform: scale(0) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = sparkleCSS;
        document.head.appendChild(style);
