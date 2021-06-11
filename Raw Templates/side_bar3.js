<!--selector: MasumBhai-->
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);

    $("#toggleIcon").toggleClass("fa fa-angle-double-down fa fa-angle-double-up");
    $("#wrapper").toggleClass("toggled");

    if (isIE11) {
        if ($("#wrapper").hasClass("toggled")) {
            $("#sidebar-wrapper").css("margin-left", "-268px");
        } else {
            $("#sidebar-wrapper").css("margin-left", "-250px");
        }
    }
});