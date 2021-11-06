var elementToChange = document.getElementsByTagName("body")[0];
var pointer_left = document.querySelector('.arrow_left');
var pointer_right = document.querySelector('.arrow_right');
var brand_logo = document.querySelector(".brand_logo");
var tittle = document.querySelector(".tittle");
var price = document.querySelector(".price");
var description1 = document.querySelector(".description1");
var description2 = document.querySelector(".description2");
var explore_product = document.querySelector(".explore_product");
var actual_image = document.querySelector(".actual");
var last_image = document.querySelector(".last");
var next_image = document.querySelector(".next");
var product_details = document.querySelector(".product_details");
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
        next_image.src = data[1].route;
        last_image.src = "";
     },
    function(xhr) { console.error(xhr); }
);
document.querySelector('body').addEventListener('mousemove', (event)=>{
    x = event.pageX;
    y = event.pageY;
    var tamañox = window.innerWidth;
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
});
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
                    textAnimationOut();
                    textAnimationIn();
                    setTimeout(() => {
                        position_actual -= 1;
                        let s = position_actual;
                        brand_logo.src = data[s].brand_route;
                        tittle.textContent = data[s].tittle;
                        price.textContent = data[s].price;
                        description1.textContent = data[s].description_1;
                        description2.textContent = data[s].description_2;
                        actual_image.src = data[s].route;console.log(s)
                    }, 350);
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
                    textAnimationOut();
                    textAnimationIn();
                    laptopsAnimation(position_actual);
                    setTimeout(() => {
                        position_actual += 1;
                        let s = position_actual;
                        brand_logo.src = data[s].brand_route;
                        tittle.textContent = data[s].tittle;
                        price.textContent = data[s].price;
                        description1.textContent = data[s].description_1;
                        description2.textContent = data[s].description_2;
                    }, 350);
                }
            },
            function(xhr) { console.error(xhr); }
            );
        }
    }
})
function textAnimationOut(){
    brand_logo.style.transition = "all 0.17s linear";
    brand_logo.style.opacity = "0";
    brand_logo.style.transform = "translate(0,-180px)";
    setTimeout(() => {
        tittle.style.transition = "all 0.17s linear";
        tittle.style.opacity = "0";
        tittle.style.transform = "translate(0,-180px)";
        setTimeout(() => {
            price.style.transition = "all 0.17s linear";
            price.style.opacity = "0";
            price.style.transform = "translate(0,-180px)";
            setTimeout(() => {
                description1.style.transition = "all 0.17s linear";
                description1.style.opacity = "0";
                description1.style.transform = "translate(0,-180px)";
                setTimeout(() => {
                    description2.style.transition = "all 0.17s linear";
                    description2.style.opacity = "0";
                    description2.style.transform = "translate(0,-180px)";
                    setTimeout(() => {
                        explore_product.style.transition = "all 0.17s linear";
                        explore_product.style.opacity = "0";
                        explore_product.style.transform = "translate(0,-180px)";
                    }, 30);
                }, 40);
            }, 50);
        }, 60);
    }, 70);
}
function textAnimationIn(){
    setTimeout(() => {
        brand_logo.style.transition = "all 0s";
        brand_logo.style.transform = "translate(0,180px)";
        setTimeout(() => {
            brand_logo.style.transition = "all 0.17s linear";
            brand_logo.style.opacity = "1";
            brand_logo.style.transform = "translate(0,0px)";
            tittle.style.transition = "all 0s";
            tittle.style.transform = "translate(0,180px)";
            setTimeout(() => {
                tittle.style.transition = "all 0.17s linear";
                tittle.style.opacity = "1";
                tittle.style.transform = "translate(0,0px)";
                price.style.transition = "all 0s";
                price.style.transform = "translate(0,180px)";
                setTimeout(() => {
                    price.style.transition = "all 0.17s linear";
                    price.style.opacity = "1";
                    price.style.transform = "translate(0,0px)";
                    description1.style.transition = "all 0s";
                    description1.style.transform = "translate(0,180px)";
                    setTimeout(() => {
                        description1.style.transition = "all 0.17s linear";
                        description1.style.opacity = "1";
                        description1.style.transform = "translate(0,0px)";
                        description2.style.transition = "all 0s";
                        description2.style.transform = "translate(0,180px)";
                        setTimeout(() => {
                            description2.style.transition = "all 0.17s linear";
                            description2.style.opacity = "1";
                            description2.style.transform = "translate(0,0px)";
                            explore_product.style.transition = "all 0s";
                            explore_product.style.transform = "translate(0,180px)";
                            setTimeout(() => {
                                explore_product.style.transition = "all 0.17s linear";
                                explore_product.style.opacity = "1";
                                explore_product.style.transform = "translate(0,0px)";
                            },70);
                        },60);
                    },50);
                },40);
            },30); 
        },20);
    },700);
}
function laptopsAnimation(position){
    loadJSON('data.json',
    function(data) {
        position = position + 1;
        var actual_image = document.querySelector(".actual");
        var last_image = document.querySelector(".last");
        var next_image = document.querySelector(".next");
        actual_image.style.transition = "all 0.26s linear";
        actual_image.classList = "laps lap02 last";
        actual_image.style.opacity = "0";
        next_image.style.transition = "all 0.26s linear";
        next_image.classList = "laps lap02 actual";
        last_image.style.transition = "all 0.26s linear";
        last_image.classList = "laps lap01 next";
        
        console.log(position);
        var next_image = document.querySelector(".next");
        setTimeout(() => {
            next_image.src = data[position+1].route;
            
        }, 400);
        var last_image = document.querySelector(".last");
        setTimeout(() => {
            last_image.style.display = "none";
        }, 400);
        
    }, function(xhr) { console.error(xhr); }
    );
}

function laptopsAnimation2(position){
    position = position+1;
    loadJSON('data.json',
    function(data) {
        for (let i = 0; i < data.length; i++) {
            
            console.log(i);
        }
        

    }, function(xhr) { console.error(xhr); }
    );
    
    
}
function lastLaptop(){

}