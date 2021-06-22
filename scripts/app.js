var elementToChange = document.getElementsByTagName("body")[0];
var pointer_left = document.querySelector('.arrow_left');
var pointer_right = document.querySelector('.arrow_right');
document.querySelector('body').addEventListener('mousemove', (event)=>{
    x = event.pageX;
    y = event.pageY;
    var tamañox = window.innerWidth;
    if (elementToChange.style.cursor == "none") {
        pointer_right.style.display = "none";
        pointer_left.style.display = "none";
    }
    if (x<(tamañox/2)) {
        //elementToChange.style.cursor = "none";
        pointer_right.style.display = "none";
        pointer_left.style.display = "block";
        pointer_left.style.top = y+1;
        pointer_left.style.left = x+1;
    } else {
        if (x>=(tamañox/2)) {
            //elementToChange.style.cursor = "none";
            pointer_left.style.display = "none";
            pointer_right.style.display = "block";
            pointer_right.style.top = y+1;
            pointer_right.style.left = x+1;
        }
    }
})
document.querySelector('body').addEventListener('click', (event)=>{
    x = event.pageX;
    y = event.pageY;
    var tamañox = window.innerWidth;
    if (x<(tamañox/2)) {
        pointer_left.classList = ('arrow_left_clicked');
        pointer_left.style.transition = 'all 0.15s linear'
        setTimeout(() => {
            pointer_left.classList = ('arrow_left');
            setTimeout(() => {
                pointer_left.style.transition = 'none';
            }, 80);
        }, 130);
    } else {
        if (x>=(tamañox/2)) {
            pointer_right.classList = ('arrow_right_clicked')
            pointer_right.style.transition = 'all 0.15s linear'
            setTimeout(() => {
                pointer_right.classList = ('arrow_right');
                setTimeout(() => {
                    pointer_right.style.transition = 'none';
                }, 80);
            }, 130);
        }
    }
    
})