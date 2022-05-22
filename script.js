//accordion



let accordion = document.querySelectorAll('.container');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}


//burger bar


let navigation = document.getElementById('navbarlinks');
let toggleButton = document.getElementById('toggleBurger');
let topChild = document.getElementById('top-bar');
let middleChild = document.getElementById('middle-bar');
let bottomChild = document.getElementById('bottom-bar');

toggleButton.addEventListener('click', function() {
    navigation.classList.toggle('active');
    topChild.classList.toggle('top');
    middleChild.classList.toggle('middle');
    bottomChild.classList.toggle('bottom');
})