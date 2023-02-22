// variable declaration 

const closeBtn = document.querySelector('.close-btn');
const showBtn = document.querySelector('.btn');
const modalContainer = document.querySelector('.model-container');
const modalContent = document.querySelector('.modal_content');


// function close model 
const closeModel = ()=> {
    modalContent.classList.add('slide-up');
    
    setTimeout(() => {
        modalContainer.classList.remove('show');
        modalContent.classList.remove('slide-up');
    }, 500);
}

// function show model 
const showModel = ()=> {
    modalContainer.classList.add('show');
}

// add evenet on buttons
closeBtn.addEventListener('click', closeModel);
modalContainer.addEventListener('click', closeModel);
showBtn.addEventListener('click', showModel);

