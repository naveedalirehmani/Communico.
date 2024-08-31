const circle = document.getElementById('circle');
        let mouseX = 0, mouseY = 0, circleX = 0, circleY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function updateCirclePosition() {
            // Add some delay to the circle's movement
            circleX += (mouseX - circleX) * 0.2;
            circleY += (mouseY - circleY) * 0.2;

            // Set the position of the circle
            circle.style.left = `${circleX - 5}px`;
            circle.style.top = `${circleY - 5}px`;

            // Add rotation
            circle.style.transform = `rotate(${circleX + circleY}deg)`;

            // Request the next animation frame
            requestAnimationFrame(updateCirclePosition);
        }

        updateCirclePosition(); 
