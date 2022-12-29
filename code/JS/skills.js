
function filter(type, btn) {

    var elements = document.getElementsByClassName('skill');

    for (let i = 0; i < elements.length; i++) {

        removeActive();
        btn.classList.add('active')

        if(type == 'all'){

            elements[i].style.display = "flex";

        }else if (elements[i].classList.contains(type)) {

            elements[i].style.display = "flex";
            
        }else{

            elements[i].style.display = "none";
        }
    }
    
}

function removeActive(){

    var elements = document.querySelectorAll('.btn-tag');

    for (let i = 0; i < elements.length; i++) {

        if(elements[i].classList.contains('active')){

            elements[i].classList.remove('active');

        }
    }

}