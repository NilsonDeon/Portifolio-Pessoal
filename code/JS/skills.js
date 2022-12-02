
function filter(type) {

    var elements = document.getElementsByClassName('skill');

    for (let i = 0; i < elements.length; i++) {

        console.log(elements[i].classList);

        if(type == 'all'){

            elements[i].style.display = "flex";

        }else if (elements[i].classList.contains(type)) {

            elements[i].style.display = "flex";
            
        }else{

            elements[i].style.display = "none";
        }
    }
    
}

/* switch (type) {
        case 'all':
            
           

            break;
            
        case 'programming':
            for (let i = 0; i < elements.length; index++) {

                if (type in elements[i].classList) {
                    elements[i].style.display = "flex";

                }else{
                    elements[i].style.display = "none";
                }
            }
            break;

        case 'web-dev':
            for (let i = 0; i < elements.length; index++) {
            
                
            }
            break;

        case 'game-dev':
            for (let i = 0; i < elements.length; index++) {
            
            }
            break;

        case 'management':
            for (let i = 0; i < elements.length; index++) {
                
            }
            break;
    } */