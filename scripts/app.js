var elementToChange = document.getElementsByTagName("body")[0];
var pointer_left = document.querySelector('.arrow_left');
var pointer_right = document.querySelector('.arrow_right');
var brand_logo = document.querySelector(".brand_logo");
var tittle = document.querySelector(".tittle");
var price = document.querySelector(".price");
var description1 = document.querySelector(".description1");
var description2 = document.querySelector(".description2");
var actual_image = document.querySelector(".actual");
var position_actual = 0;
function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}
loadJSON('data.json',
    function(data) { 
        brand_logo.src = data[0].brand_route;
        tittle.textContent = data[0].tittle;
        price.textContent = data[0].price;
        description1.textContent = data[0].description_1;
        description2.textContent = data[0].description_2;
        actual_image.src = data[0].route;
     },
    function(xhr) { console.error(xhr); }
);
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
        //Slide to Left
        loadJSON('data.json',
            function(data) {
                if (position_actual > 0) {
                    position_actual -= 1;
                    let s = position_actual;
                    console.log(position_actual)
                    brand_logo.src = data[s].brand_route;
                    tittle.textContent = data[s].tittle;
                    price.textContent = data[s].price;
                    description1.textContent = data[s].description_1;
                    description2.textContent = data[s].description_2;
                    actual_image.src = data[s].route;
                }
            },
            function(xhr) { console.error(xhr); }
        );
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
            //Slide to Right
            loadJSON('data.json',
            function(data) {
                if (position_actual < data.length-1) {
                    position_actual += 1;
                    let s = position_actual;
                    console.log(position_actual)
                    brand_logo.src = data[s].brand_route;
                    tittle.textContent = data[s].tittle;
                    price.textContent = data[s].price;
                    description1.textContent = data[s].description_1;
                    description2.textContent = data[s].description_2;
                    actual_image.src = data[s].route;
                }
            },
            function(xhr) { console.error(xhr); }
            );
        }
    }
    
})