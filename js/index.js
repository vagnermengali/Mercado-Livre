const button_todos = document.querySelector(".todos");
const button_acessorios = document.querySelector(".acessorios");
const button_calcados = document.querySelector(".calçados");
const button_camisetas = document.querySelector(".camisetas");
const themeSwitch = document.querySelector('input');
const button_add = document.querySelector(".product-button-add fa fa-plus-circle");
const search_input = document.querySelector("#search")
const search_button = document.querySelector("#search-button")
//VITRINE
const card_ul = document.querySelector("#card");

function renderCard(card) {
    card_ul.insertAdjacentHTML("beforeend",
`
<li class="product">
            <div class="img-background"> 
              <img
              src=${card.img}
              class="product-img"
            />
          </div>
            <div class="product-main">
            <strong class="product-price">R$ ${card.value}</strong>
              <p class="product-category">
              ${card.description}<br>
             Frete grátis <i class="fa fa-bolt"></i><strong class="italic">FULL</strong> </p> 
             <div class="title-card">
             <h1 class="product-title">${card.nameItem}</h1>
              <button id="${card.id -1}" class="product-button-add fa fa-cart-plus fa-2x"></button>
              </div>
              
            </div>
          </li>
`
)
 return card_ul
}
data.map(renderCard)


//CARD-CART
const cart_card_ul = document.querySelector("#cart-card");
function renderCartCard(cartCard,index) {
  const totalPrice = carrinho.reduce((acc,elem)=>acc + elem.value, 0) 
  cart_card_ul.insertAdjacentHTML("beforeend",
`
          <li id=""cart-card" class="cart-card">
      <img src=${cartCard.img} >
      <section>
      <div class="camada1-cart">
       <h3 class="cart-card-title">${cartCard.nameItem}</h3>
      <button  " class="cart-card-button-remove fa fa-trash"></button>
      </div>
        <p class="cart-card-price">R$ ${cartCard.value}.00</p>
        <div class="camada2-cart">
        <button  " class="cart-card-button-sub fa fa-minus"></button>
        <p class="length-cart">${carrinho.length}</p>
          <button" class="cart-card-button-add fa fa-plus"></button>
          </div>
      </section>
      </li>
`
)
return cart_card_ul
}
//REMOVE E ADD
let carrinho = [];

const button_addxx = document.querySelector(".product-button-add fa fa-cart-plus fa-2x");
const button_remove = document.querySelector(".cart-card-button-remove");
const aside= document.querySelector(".cart-all");
addEventListener("click", (event) => {
const target = event.target
if(target.className === "product-button-add fa fa-cart-plus fa-2x" 
){
  let index = Number(target.id);
  carrinho.unshift(data[index])
  cart_card_ul.innerHTML = ""
  carrinho.map(renderCartCard)
}
if(target.className === "cart-card-button-remove fa fa-trash"){
  let index = Number(target.id);
  carrinho.splice(index,1)
  cart_card_ul.innerHTML = ""
  carrinho.map(renderCartCard)
}
if(carrinho.length > 0) {
  const totalPrice = carrinho.reduce((acc,elem)=>acc + elem.frete + elem.value, 0) 
  const totalFrete = carrinho.reduce((acc,elem)=>acc + elem.frete, 0) 
  const car_quanty_main= document.querySelector(".car-quanty-main");
  aside.classList.replace("remove","cart-visible")
  car_quanty_main.innerText = ""
  car_quanty_main.insertAdjacentHTML("beforeend",
`
  <div class="car-quanty-table">
  <p class="car-quanty">Frete: <span>R$ ${totalFrete}</span> </p>
  <p class="car-price">Total com frete: <span>R$ ${totalPrice}</span> </p>
</div>
<button class="finish" >Finalizar compra</button>
`
)
}if(carrinho.length == 0){
  aside.classList.replace("cart-visible","remove")
}
});
aside.classList.replace("cart-visible","remove")
addEventListener("click", (event) => {
  const target = event.target
  if(target.className === "product-main" 
  ){
    let index = Number(target.id);
    carrinho.unshift(data[index])
    cart_card_ul.innerHTML = ""
    carrinho.map(renderCartCard)
  }
})
addEventListener("click", (event) => {
  const searchTarget = event.target;
  if(searchTarget.id == "search-button"){
    const search_text = search_input.value.toLowerCase();
    const filterSearch = data.filter(
      (event) => event.nameItem.toLowerCase().split(" ").join("") == 
      search_text.toLowerCase().split(" ").join("") ||
      event.tag.toLowerCase() == search_text.toLowerCase().split(" ").join("")
    );
    card_ul.innerHTML = ""
    filterSearch.map(renderCard)
  }
});
addEventListener("click",(event) => {
  const category = event.target;
  const categoryOrigin = category.className;
  
  if(categoryOrigin  === "Camisetas"){
    card_ul.innerHTML = "";
    search.map(renderCard)
  }
  else if(categoryOrigin  === "Calçados"){
    card_ul.innerHTML = "";
    search.map(renderCard)
  }
  else if(categoryOrigin  === "Acessórios"){
    card_ul.innerHTML = "";
    search.map(renderCard)
  }
  else if(categoryOrigin === "Todos"){
    card_ul.innerHTML = "";
    data.map(renderCard)
  }
});
//CATEGORIA
addEventListener("click",(event) => {
  const category = event.target;
  const categoryOrigin = category.className;
  const search = data.filter((element)=>element.tag.toLowerCase() == categoryOrigin.toLowerCase())
  
  if(categoryOrigin  == "Camisetas"){
    card_ul.innerHTML = "";
    search.map(renderCard)
  }
  if(categoryOrigin  == "Calçados"){
    card_ul.innerHTML = "";
    search.map(renderCard)
  }
  if(categoryOrigin  == "Acessórios"){
    card_ul.innerHTML = "";
    search.map(renderCard)
  }
  if(categoryOrigin == "Todos"){
    card_ul.innerHTML = "";
    data.map(renderCard)
  }
});
//FILTER
addEventListener("click", (event) => {
  const searchTarget = event.target;
  if(searchTarget.className == "button fa fa-search"){
    const search_text = search_input.value.toLowerCase();
    const filterSearch = data.filter(
      (event) => event.nameItem.toLowerCase().split(" ").join("") == 
      search_text.toLowerCase().split(" ").join("") ||
      event.tag.toLowerCase() == search_text.toLowerCase().split(" ").join("")
    );
    card_ul.innerHTML = ""
    filterSearch.map(renderCard)
    console.log(filterSearch)
  if(filterSearch.length == 0){ 
    card_ul.innerHTML = ""
    card_ul.insertAdjacentHTML("beforeend",
  `
  <li class="list-empty">
  <div class="empty-main">
  <img class="empty-img" src="./img/search.png"/>
  <div>
  <h1 class="empty-title">Não há anúncios que correspondem à sua busca.</h1>
  <p class="text-empty"><strong class="negrito-empty">Revise a ortografia</strong> da palavra.</p>
  <p class="text-empty">Utilize <strong class="negrito-empty">palavras mais genéricas</strong> ou menos palavras.</p>
  <p class="text-empty"><strong class="negrito-empty">Navega pelas categorias</strong> para encontrar um produto similar</p>
  </div>
  </div>
  </li>
  `
  )
  }
}
});
