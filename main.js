        // Simple animation for skill icons on page load
        document.addEventListener('DOMContentLoaded', function() {
            const skillItems = document.querySelectorAll('.skill-item');
            
            skillItems.forEach((item, index) => {
                // Set initial state
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                
                // Animate in with delay
                setTimeout(() => {
                    item.style.transition = 'opacity 0.5s, transform 0.5s';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 200);
            });
        });