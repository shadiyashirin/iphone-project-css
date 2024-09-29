function goToSite() {
    window.location.href = "./productdetail.html";  // Replace with the desired URL
}


function changeColor(img) {
    // Prevent the click from affecting parent elements (i.e., stop navigation)
    //event.stopPropagation();

    //const img = document.querSelector('.like-img');
    const imgSrc = img.src.split('/').pop();

    if (imgSrc === 'Like.png') {
        img.src = './images/red-like.png';  // Switch to the second image
    } else {
        img.src = './images/Like.png';  // Switch back to the first image
    }
}


function goToCart(){
    window.location.href = "./cart.html";
}


function goToStep1(){
    window.location.href = "./step1.html";
}

function goToStep2(){
    window.location.href = "./step2.html";
}

function goToLast(){
    window.location.href = "./last.html";
}