const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');


const getData= () => {

    fetch('https://fakestoreapi.com/products')
     .then(response => response.json())
     
    
        /*
        You cannot 'GET' any URL from the search/address bar using XMLHttpRequest due to browser security restrictions. Here’s why:
        1. Protocol (e.g., http vs. https)
        2. Domain (e.g., www.example.com vs. api.example.com)
        3. Port (e.g., :80 vs. :8080)
        */
    }
    
    


const PostData= () => {}

getBtn.addEventListener('click', getData); 
postBtn.addEventListener('click', PostData);











//'https://reqres.in/api/users'