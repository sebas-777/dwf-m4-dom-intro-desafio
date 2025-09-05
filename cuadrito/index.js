
const square = document.querySelector('.square');

function moveSquare() {
    //Inicializar coordenadas 
    let top = 0;
    let left = 0;
    const step = 10; //Cantidad de pixeles a mover por cada tecla presionada

    document.addEventListener('keydown',(e)=>{
       
        e.preventDefault();
        
        switch(e.key){
            
            case 'ArrowUp':
               console.log("subiendo");
               top = top - step;
               square.style.top = top + 'px';
               break;
            case 'ArrowDown':
                console.log("bajando");
                top = top + step;
                square.style.top = top + 'px';
                break;
            case 'ArrowLeft':
                console.log("izquierda");
                left = left - step;
                square.style.left = left + 'px';
                break;
            case 'ArrowRight':
                console.log("derecha");
                left = left + step;
                square.style.left = left + 'px';
                  break;
            default:
                break;
        }
    })
}


function main() {
    moveSquare();
}

main();