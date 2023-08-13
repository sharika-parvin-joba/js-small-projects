document.addEventListener('DOMContentLoaded',function(){
   
   let products=document.querySelector('.main-div')
    async function fetchProducts(url){
    let data=await fetch(url);
    let response=await data.json();
    console.log(response);

for(let i=0;i<response.length;i++){
   
    products.innerHTML +=`
    
    <div class="columns">
        <img src="${response[i].image}" alt="" class="image">
        <p class="title fs-5 fw-bold py-2">Title: ${response[i].title.length>20?response[i].title.substring(0,20).concat('...more'):response[i].title}</p>
        <p class="category mb-0">Category: ${response[i].category}</p>
        <div class="price-div">
           <p class="price mb-0">Price: ${response[i].price}</p>
           <p class="rating mb-0">Rating: ${response[i].rating.rate}</p>
        </div>
        <p class="desc mb-0">Description: ${response[i].description.length > 40 ? response[i].description.substring(0,40).concat('...'):response[i].description}</p>
        <a href="btn" data-productId="${response[i].id}">ADD TO CART</a>
    </div>
 `;
    }
}

    fetchProducts('https://fakestoreapi.com/products')
})