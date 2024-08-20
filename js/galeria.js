const images = document.querySelectorAll('.img-juegos-mas-vendidos');
const descriptionBox = document.getElementById('description-box');
export function rellenarGaleria(){
    images.forEach(image => {
        image.addEventListener('mouseover', (event) => {
            const description = event.target.getAttribute('data-description');
            descriptionBox.textContent = description;
            descriptionBox.style.display = 'block';
            descriptionBox.style.left = `${event.pageX}px`;
            descriptionBox.style.top = `${event.pageY + 20}px`;
        });
    
        image.addEventListener('mousemove', (event) => {
            descriptionBox.style.left = `${event.pageX}px`;
            descriptionBox.style.top = `${event.pageY + 20}px`;
        });
    
        image.addEventListener('mouseout', () => {
            descriptionBox.style.display = 'none';
        });
    });

}