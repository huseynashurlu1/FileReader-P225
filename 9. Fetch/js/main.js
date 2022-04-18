// localStorage
// sessionStorage

// setItem / removeItem

// localStorage.setItem('firstname',"Yamil Layicov");
// localStorage.setItem('group_name',"P225");

// localStorage.clear();

// let username = document.getElementById('username');

// username.innerHTML = localStorage.getItem('firstname');


// JSON => parse / stringify

if(localStorage.getItem('basket') === null) {
  localStorage.setItem('basket',JSON.stringify([]));
}





let btn = document.getElementById('btn');

btn.onclick = function(e) {
  e.preventDefault();

  let prod_id = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
  let prod_name = e.target.parentElement.previousElementSibling.previousElementSibling.children[0].innerText;

  let basket = JSON.parse(localStorage.getItem('basket'));

  basket.push({
    id: prod_id,
    name: prod_name
  })

  localStorage.setItem('basket',JSON.stringify(basket))
  Count();

}


function Count(){
  let count_prod = document.getElementById('count_main');

  let basket = JSON.parse(localStorage.getItem('basket'));
  count_prod.innerText = basket.length;
}