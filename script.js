let stopPropagationForm = document.getElementsByTagName("form");
for (let i = 0; i < stopPropagationForm.length; i++) {
    let form = stopPropagationForm[i];
    form.addEventListener("submit", function (e) {
        e.preventDefault();
    })
}

function appearMenuResponsive(){
    let navbarMenu=document.getElementById("navResponsive");
    let imgNav=document.getElementById("barsMenu");
        if(imgNav)
        {
            navResponsive.style.display="block";
        }
    }
document.getElementById("barsMenu").addEventListener("click", appearMenuResponsive);

function stopMenuResponsive(){
    let navbarMenu=document.getElementById("navResponsive");
    let imgNav=document.getElementById("closeNav");
        if(imgNav)
        {
            navResponsive.style.display="none";
        }
    }
document.getElementById("closeNav").addEventListener("click", stopMenuResponsive);