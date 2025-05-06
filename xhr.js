const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const SendHttpRequest= (metthod, url) => {
    const req = new XMLHttpRequest();
    req.open(method, url);

    req.responseType = 'json'; 

    req.onload = () => {
        const data = req.response;
        console.log('data');
    }

    req.send();
}

const getData= () => {
    SendHttpRequest('GET', 'https://reqres.in/api/users');
}

const PostData= () => {}

getBtn.addEventListener('click', getData); 
postBtn.addEventListener('click', PostData);











//'https://reqres.in/api/users'