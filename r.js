function resetclass(element, classname){
    element.classList.remove(classname);
}
document.getElementsByClassName('show-signup')
[0].addEventListener("click",function(){
    let  form = document.getElementsByClassName('form')[0];
    resetclass(form, "sign");
    resetclass(form, "reset");
    form.classList.add('signup')
    document.getElementById('submit-btn').innerText = "signup"
});
document.getElementsByClassName('show-signup')
[0].addEventListener("click",function(){
    let  form = document.getElementsByClassName('form')[0];
    resetclass(form, "signup");
    resetclass(form, "reset");
    form.classList.add('signin')
    document.getElementById('submit-btn').innerText = "signin"
});
document.getElementsByClassName('show-signup')
[0].addEventListener("click",function(){
    let  form = document.getElementsByClassName('form')[0];
    resetclass(form, "signup");
    resetclass(form, "signin");
    form.classList.add('reset')
    document.getElementById('submit-btn').innerText = "reset password"
});
document.getElementsByClassName("reset")[0].addEventListener("click",function(){
    let  form = document.getElementsByClassName('isaac')[0];
    // @ts-ignore
    resetclass(isaac, "reset");
    form.classList.repeat('reset')
    document.getElementsByClassName('isaac').innerText = "reset"
})