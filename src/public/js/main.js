
window.onresize = function (e) {
    //alert(123);
    if(window.innerWidth > 1210){
        document.querySelectorAll("#nav-title ul li a.nav-icon").forEach(function (node, i, list) {
            node.style.marginLeft = "23px";
        });
        document.querySelectorAll("#nav-title ul li a.nav-link").forEach(function (node, i, list) {
            node.style.marginLeft = "41px";
        });
        $("#nav-title ul li a.nav-link").css("margin-left","23px");
        $("#nav-title ul li a.nav-icon").css("margin-left","41px");
    }else if(window.innerWidth <= 1210){
        document.querySelectorAll("#nav-title ul li a.nav-icon").forEach(function (node, i, list) {
            node.style.marginLeft = "3px";
        });
        document.querySelectorAll("#nav-title ul li a.nav-link").forEach(function (node, i, list) {
            node.style.marginLeft = "3px";
        });
        $("#nav-title ul li a.nav-link").css("margin-left","3px");
        $("#nav-title ul li a.nav-icon").css("margin-left","3px");
    }

};