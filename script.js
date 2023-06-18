var t = 0;
function c() {

    var a = document.getElementById("NUM1").value;
    var a2 = document.getElementById("NUM2").value;
    var a3 = document.getElementById("NUM3").value;

    if (a > 0) {
        document.getElementById("2").innerHTML = (a * 5) + " " + "$";
        t += parseInt(a * 5);

    }
    if (a2 > 0) {
        document.getElementById("4").innerHTML = (a2 * 19) + " " + "$";
        t += parseInt(a2 * 19);
    }
    if (a3 > 0) {
        document.getElementById("6").innerHTML = (a3 * 7) + " " + "$";
        t += parseInt(a3 * 7);
    }
    document.getElementById("total").innerHTML = parseInt(t);


}



function deleteRow(e) {

    // console.log(e.target)
    // e.target.style.color='green'
    if (confirm('etes vous sur?')) {

        e.target.parentNode.parentNode.remove();
    }

}


const iconsTrash = document.querySelectorAll('i.fa-trash-can')

for (let i = 0; i < iconsTrash.length; i++) {
    iconsTrash[i].addEventListener('click', deleteRow)
}


const iconsHearts = document.querySelectorAll('.fa-heart')

for (let i = 0; i < iconsHearts.length; i++) {
    iconsHearts[i].addEventListener('click', function (e) {
        e.target.classList.toggle('fa-regular')
        e.target.classList.toggle('fa-solid')
    })
}

// console.log(iconsTrash);
