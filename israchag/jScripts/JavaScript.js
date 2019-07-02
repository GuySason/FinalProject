function show_hide(element) {
    var con = element.parentElement.querySelector(".content");
    //if (con.style.display == "") {
    //    con.style.display = "block";
    //} else {
    //    con.style.display = "";
    //}
    con.classList.toggle('open2');
    element.classList.toggle('open');
}
function tab_nav() {
    var navA = document.querySelectorAll("ul li>a");
    var navInner = document.querySelectorAll("li ul li>a");

    for (var i = 0, len = navA.length; i < len; i++) {
        navA[i].addEventListener("focus", function (event) {
            var innerUl = event.target.parentElement.querySelector("ul");
            if (innerUl) {
                document.getElementById("navtitnav").style.display = "block";
                innerUl.querySelector("ul").style.display = "block";
                innerUl.style.display = "block";
            }
        }, true);
    }

    document.getElementById("abcd").addEventListener("blur", function (event) {
        event.target.parentElement.parentElement.parentElement.parentElement.style.display = "none";
           }, true);

    //for (var i = 0, len = navInner.length; i < len; i++) {
    //    console.log(navInner[i].attr("id"));
    //    if (navInner[i].parentElement.nextElementSibling.id === "abc") {
    //        navInner[i].addEventListener("blur", function (event) {
    //            event.target.parentElement.style.display = "none"
    //        }, true);
    //    }
    //}
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//function tab_nav() {
//    var navA = document.querySelectorAll("ul li>a");
//    var navInner = document.querySelectorAll("li ul li>a");

//    for (var i = 0, len = navA.length; i < len; i++) {
//        navA[i].addEventListener("focus", function (event) {
//            var innerUl = event.target.parentElement.querySelector("ul")
//            if (innerUl) innerUl.style.display = "block";
//        }, true);
//    }

//    for (var i = 0, len = navInner.length; i < len; i++) {
//        if (navInner[i].parentElement.nextElementSibling === null) {
//            navInner[i].addEventListener("blur", function (event) {
//                event.target.parentElement.parentElement.style.display = "none"
//            }, true);
//        }
//    }
//}

function checkUrl() {
    if (window.location.href.includes("#roshJ")) {
        $("#roshJ").click();
    }
    if (window.location.href.includes("#lagJ")) {
        $("#lagJ").click();
    }

    if (window.location.href.includes("#peshachJ")) {
        $("#peshachJ").click();
    }
}