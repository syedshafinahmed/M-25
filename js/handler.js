// console.log("Handler");
document.getElementById('btn-update-title').addEventListener('click', function () {
    const pageTitleElement = document.getElementById('page-title');
    pageTitleElement.innerText = "Updated Page Title";
    // console.log(pageTitleElement);
    // console.log('btn clicked');
})


document.getElementById('btn-login').addEventListener('click', function () {
    const userInfo = document.getElementById('user-info')
    userInfo.innerText = "Login Successful";
})


document.getElementById('btn-update').addEventListener('click', function () {
    const nameInput = document.getElementById('input-name');
    const name = nameInput.value;
    // console.log('name',name);
    const namePara = document.getElementById('name');
    namePara.innerText = name;
})