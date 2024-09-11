
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function moveCube() {
    const cube = document.getElementById('cube');

    const x = Math.random() * (window.innerWidth - 100); 
    const y = Math.random() * (window.innerHeight - 100); 

    cube.style.left = `${x}px`;
    cube.style.top = `${y}px`;

    cube.style.backgroundColor = getRandomColor();
    const newSize = Math.random() * 500 + 100;
    cube.style.width = `${newSize}px`;
    cube.style.height = `${newSize}px`;
}


setInterval(moveCube, 2000);

 
