//btn back to top
var myBtn = document.getElementById("back-to-top");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}


//menu de navigation
$(document).ready(function() {
    $(document).on('click', '.nav-item a', function (e) {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
});


$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

