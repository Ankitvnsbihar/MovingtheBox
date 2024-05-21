document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');
    const container = document.querySelector('.container');
    const step = 10;
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        const boxRect = box.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        

        switch(key){
            case 'ArrowUp':
                if(boxRect.top - step >= containerRect.top){
                    box.style.top = `${box.offsetTop - step}px`;

                }
                break;
                case 'ArrowDown':
                    if(boxRect.bottom + step <= containerRect.bottom){
                        box.style.top = `${box.offsetTop + step}px`;
                    }
                    break;
                    case 'ArrowLeft':
                        if(boxRect.left - step >= containerRect.left){
                            box.style.left = `${box.offsetLeft - step}px`;
                        }
                        break;
                        case 'ArrowRight':
                            if(boxRect.right + step <= containerRect.right){
                                box.style.left = `${box.offsetLeft + step}px`;
                            }
                            break;
                           
        }
        
    })
})