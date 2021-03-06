const baseUrl = "https://www.kimbinhvo.one/wp-json/wp/v2/posts?_embed&per_page=13";
const carouselContainer = document.querySelector(".carousel-container");
const mainContainer = document.querySelector(".main-blog");
const featureContainer = document.querySelector(".featured");
const featureColorContainer = document.querySelector(".featured-color");
const featureContainer2 = document.querySelector(".featured-2");
const featureColorContainer2 = document.querySelector(".featured-color-2");
const featureContainer3 = document.querySelector(".featured-3");

async function getPosts(url){
    const response = await fetch(url);
    console.log(response);
    const posts = await response.json();
    console.log(posts);

    for(let i = 0; i < posts.length; i++){
    
        carouselContainer.innerHTML += ` <div class= "slides">
                                            <p class="number"> ${[i+1]} / 13 </p>
                                            <img src="${posts[i]._embedded['wp:featuredmedia']['0'].source_url}"> 
                                            <h3> ${posts[i].title.rendered} </h3>
                                            <p> ${posts[i].excerpt.rendered} </p>
                                            <a class="cta-product-carousel" id="cta" href="specific.html?id=${posts[i].id}">Read More</a>
                                        </div>`; 
                          
        }
 
    for(let i = 0; i < posts.length; i++){
        if(i === 1){
            break;
        }
        mainContainer.innerHTML += `<div class= "main-blog-img"> 
                                        <img id="image1" src="${posts[i]._embedded['wp:featuredmedia']['0'].source_url}"> 
                                    </div>  
                                    <div class= "main-blog-text">
                                        <h2> ${posts[i].title.rendered} </h2>
                                        <p> ${posts[i].excerpt.rendered} </p>
                                        <a class="cta-product" id="cta" href="specific.html?id=${posts[i].id}">Read More</a>
                                    </div>`;                         
    }

    for(let i = 1; i < posts.length; i++){
        if(i === 3){
            break;
        }
        featureContainer.innerHTML += `<div class="products"> 
                                        <img id="image1" src="${posts[i]._embedded['wp:featuredmedia']['0'].source_url}">        
                                        <h3> ${posts[i].title.rendered} </h3>
                                        <p> ${posts[i].excerpt.rendered} </p>
                                        <a class="cta-product" id="cta" href="specific.html?id=${posts[i].id}">Read More</a>
                                    </div>`;                   
    }

    for(let i = 3; i < posts.length; i++){
        if(i === 4){
            break;
        }
        featureColorContainer.innerHTML += `<div class= "products-img"> 
                                            <img id="image1" src="${posts[i]._embedded['wp:featuredmedia']['0'].source_url}"> 
                                        </div>  
                                        <div class= "products-text">
                                            <h3> ${posts[i].title.rendered} </h3>
                                            <p> ${posts[i].excerpt.rendered} </p>
                                            <a class="cta-product-color" id="cta" href="specific.html?id=${posts[i].id}">Read More</a>
                                            <p></p>
                                        </div>
                                        <p></p>`;     
    }

    for(let i = 4; i < posts.length; i++){
        if(i === 8){
            break;
        }
        featureContainer2.innerHTML += `<div class="products"> 
                                        <img id="image1" src="${posts[i]._embedded['wp:featuredmedia']['0'].source_url}">        
                                        <h3> ${posts[i].title.rendered} </h3>
                                        <p> ${posts[i].excerpt.rendered} </p>
                                        <a class="cta-product" id="cta" href="specific.html?id=${posts[i].id}">Read More</a>
                                    </div>`;                   
    }

    for(let i = 8; i < posts.length; i++){
        if(i === 9){
            break;
        }
        featureColorContainer2.innerHTML += `<div class= "products-img"> 
                                            <img id="image1" src="${posts[i]._embedded['wp:featuredmedia']['0'].source_url}"> 
                                        </div>  
                                        <div class= "products-text">
                                            <h3> ${posts[i].title.rendered} </h3>
                                            <p> ${posts[i].excerpt.rendered} </p>
                                            <a class="cta-product-color" id="cta" href="specific.html?id=${posts[i].id}">Read More</a>
                                            <p></p>
                                        </div>
                                        <p></p>`;     
    }

    for(let i = 9; i < posts.length; i++){
        if(i === 13){
            break;
        }
        featureContainer3.innerHTML += `<div class="products"> 
                                        <img id="image1" src="${posts[i]._embedded['wp:featuredmedia']['0'].source_url}">        
                                        <h3> ${posts[i].title.rendered} </h3>
                                        <p> ${posts[i].excerpt.rendered} </p>
                                        <a class="cta-product" id="cta" href="specific.html?id=${posts[i].id}">Read More</a>
                                    </div>`;                   
    }
}
getPosts(baseUrl);

//Carousel
var index = 1;
showSlides(index);

function plusSlides(n) {
    showSlides(index += n);
}

function currentSlide(n) {
    showSlides(index = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) {
        index = 1
    } 
    if (n < 1) {
        index = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slides[index-1].style.display = "block"; 
    document.getElementById("hide").style.display ="none";
  }

    
