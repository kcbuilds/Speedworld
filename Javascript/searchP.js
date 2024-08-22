
// ***** Search Section ============================ 

var word = document.getElementById("search-bike");
word.addEventListener("keypress", function (event) {

    if (event.keyCode == 13) {
        openPage();
        word.value = '';
    }
});


function openPage() {
    var x = document.getElementById("search-bike").value.toLowerCase();


// KTM Bike =====================================>
    if (x === " ktm 790 duke" || x === "790duke" || x === "790 duke" || x === "duke 790" || x === "duke790") {
        window.open("./790duke.html", "_self");
    }

    else if (x === " ktm 390 duke" || x === "390duke" || x === "390 duke" || x === "duke 390" || x === "duke390") {
        window.open("./390duke.html", "_self");
    }

    else if (x === " ktm 200 duke" || x === "200duke" || x === "200 duke" || x === "duke 200" || x === "duke200") {
        window.open("./200duke.html", "_self");
    }

    else if (x === " ktm 250 duke" || x === "250duke" || x === "250 duke" || x === "duke 250" || x === "duke250") {
        window.open("./250duke.html", "_self");
    }

    else if (x === " ktm 125 duke" || x === "125duke" || x === "125 duke" || x === "duke 125" || x === "duke125") {
        window.open("./125duke.html", "_self");
    }

    else if (x === " ktm duke" || x === "duke" || x === "ktm" || x === "ktm bike") {
        window.open("./KTM.html", "_self");}

// BMW Bike =====================================>
    else if (x === " bmw s 1000rr" || x === "bmw s1000rr" || x === "s1000rr") {
        window.open("./Bmw-s1000rr.html", "_self");
    }

    else if (x === "bmw g 310r" || x === "bmw g310r" || x === "g310r") {
        window.open("./Bmw-G310r.html", "_self");
    }

    else if (x === "bmw r 1250rt" || x === "bmw r1250rt" || x === "bmw r 1250") {
        window.open("./Bmw-R1250rt.html", "_self");
    }

    else if (x === "bmw r nine t" || x === "bmw r ninet") {
        window.open("./Bmw-r9t.html", "_self");
    }

    else if (x === "bmw s 1000xr" || x === "bmw s1000xr") {
        window.open("./Bmw-s1000xr.html", "_self");
    }

    else if (x === "bmw" || x === "bmw bike" || x === "bmw bikes") {
        window.open("./Bmw.html", "_self");
    }



// Benelli Bike =====================================>
    else if (x === "benelli 502c" || x === "502c benelli" || x === "502c") {
        window.open("./B-502c.html", "_self");
    }

    else if (x === "benelli imperiale 400" || x === "imperiale 400" || x === "imperiale" || x === "benelli 400" ) {
        window.open("./B-Imperiale400.html", "_self");
    }

    else if (x === "benelli leoncino 500" || x === "leoncino 500" || x === "benelli leoncino" || x === "leoncino" || x === "leoncino 500") {
        window.open("./B-leoncino.html", "_self");
    }

    else if (x === "benelli trk 251" || x === "benelli trk" || x === "trk 250" || x === "250 trk") {
        window.open("./B-251.html", "_self");
    }

    else if (x === "benelli trk 502" || x === "benelli trk" || x === "trk 502" || x === "502 trk") {
        window.open("./B-502.html", "_self");
    }

    else if (x === "benelli" || x === "benelli bike" || x === "beneli") {
        window.open("./Benelli.html", "_self");
    }



// Ducati Bike =====================================>
    else if (x === "ducati diavel 1250s" || x === "diavel 1250s" || x === "diavel" || x === "1260s diavel") {
        window.open("./D-diavel1260s.html", "_self");
    }

    else if (x === "ducati monster" || x === "monster" || x === "monster ducati" || x === "monster1200") {
        window.open("./D-monster1200.html", "_self");
    }

    else if (x === "ducati multistrata v4" || x === "multistrata v4" || x === "ducati multistrata" || x === "multistrata") {
        window.open("./D-multistradaV4.html", "_self");
    }

    else if (x === "ducati streetfighter v4s" || x === "streetfighter v4s" || x === "ducati streetfighter") {
        window.open("./D-streetfighterV4s.html", "_self");
    }

    else if (x === "ducati xdiavel blackstar" || x === "xdiavel blackstar" || x === "ducati xdiavel" || x === "blackstar") {
        window.open("./D-xdiavelblackstar.html", "_self");
    }

    else if (x === "ducati" || x === "dukati" || x === "bucati") {
        window.open("./Ducati.html", "_self");
    }



// Harley Davidson Bike =====================================>
    else if (x === "harley davidson america 1250" || x === "hd america 1250" || x === "hd america" || x === "america 1250" ) {
        window.open("./HD-adventure1250.html", "_self");
    }

    else if (x === "harley davidson iron 883" || x === "hd iron 883" || x === "iron 883") {
        window.open("./HD-cruiser883.html", "_self");
    }

    else if (x === "harley davidson roadking" || x === "hd roadkin" || x === "roadking") {
        window.open("./HD-roadking.html", "_self");
    }

    else if (x === "harley davidson sportster" || x === "sportster" || x === "hd sportster") {
        window.open("./HD-sportsterS.html", "_self");
    }

    else if (x === "harley davidson" || x === "hd" || x === "harley" || x === "davidson") {
        window.open("./HDavidson.html", "_self");
    }



// Honda Bike =====================================>
    else if (x === "honda cb500x" || x === "cb500x" || x === "cb500" || x === "honda cb") {
        window.open("./H-500X.html", "_self");
    }

    else if (x === "honda cb650r" || x === "cb650r" || x === "650r" || x === "honda 650r") {
        window.open("./H-650R.html", "_self");
    }

    else if (x === "honda cbr650r" || x === "cbr650r" || x === "650r" || x === "cbr") {
        window.open("./H-cbr650r.html", "_self");
    }

    else if (x === "honda cbr1000rrr" || x === "cbr1000" || x === "cbr1000rr" || x === "1000rrr") {
        window.open("./H-cbr1000RR-R.html", "_self");
    }

    else if (x === "honda goldwing" || x === "goldwing") {
        window.open("./H-goldwing.html", "_self");
    }

    else if (x === "honda" || x === "honda bike" || x === "hoda" || x === "hond") {
        window.open("./Honda.html", "_self");
    }
    


// Kawasaki Bike =====================================>
    else if (x === "kawasaki 1000sx" || x === "1000sx" || x === "kawa 1000sx" || x === "kawasaki1000sx") {
        window.open("./K-Ninja1000sx.html", "_self");
    }

    else if (x === "kawasaki k h2 se" || x === "kawasaki kh2se" || x === "h2 se" || x === "k h2 se") {
        window.open("./K-ZH2se.html", "_self");
    }

    else if (x === "kawasaki kx100" || x === "kx100" || x === "kawasaki 100" || x === "kawasaki kx") {
        window.open("./K-kx100.html", "_self");
    }

    else if (x === "kawasaki versys 1000" || x === "kawasaki versys" || x === "versys" || x === "verys") {
        window.open("./K-Versys1000.Html", "_self");
    }

    else if (x === "kawasaki z h2" || x === "kawasaki zh2" || x === "z h2" || x === "kawasaki z") {
        window.open("./K-ZH2.html", "_self");
    }

    else if (x === "kawasaki" || x === "kawasaki bike" || x === "ninja" || x === "kawasaki ninja") {
        window.open("./Kawasaki.html", "_self");
    }



// Royal Enfield Bike =====================================>
    else if (x === "royal enfield classic 350" || x === "royal enfield classic" || x === "classic 350" || x === "royalenfield classic") {
        window.open("./RE-classic350.html", "_self");
    }

    else if (x === "royal enfield gt 650" || x === "royalenfield gt" || x === "royal enfield gt" || x === "gt 650") {
        window.open("./RE-Gt650.html", "_self");
    }

    else if (x === "royal enfield interceptor 650" || x === "interceptor 650" || x === "interceptor" || x === "royal enfield interceptor") {
        window.open("./RE-interceptor650.html", "_self");
    }

    else if (x === "royal enfield meteor 350" || x === "royal enfield meteor" || x === "meteor 350" || x === "meteor") {
        window.open("./RE-meteor350.html", "_self");
    }

    else if (x === "royal enfield scram 411" || x === "scram 411" || x === "scram" || x === "royal enfield scram") {
        window.open("./RE-scram411.html", "_self");
    }

    else if (x === "royal enfield" || x === "royal enfield bike" || x === "re bikes" || x === "royal") {
        window.open("./RoyalEnfied.html", "_self");
    }



// Yahama Bike =====================================>
    else if (x === "yamaha fz s fi" || x === "fz s fi" || x === "yamaha fz s" || x === "fz s") {
        window.open("./Y-fzS.html", "_self");
    }

    else if (x === "yamaha fz25" || x === "fz25" || x === "yamaha fz" || x === "fz") {
        window.open("./Y-FZ25.html", "_self");
    }

    else if (x === "yamaha mt 15 v2" || x === "yamaha mt" || x === "mt15" || x === "mt15 v2") {
        window.open("./Y-MT15.html", "_self");
    }

    else if (x === "yamaha" || x === "yamaha bikes" || x === "yamaha bike") {
        window.open("./Yamaha.html", "_self");
    }


    else if (x === "yamaha yzf r15 s" || x === "yzf r15s" || x === "yzf r15" || x === "r15 s") {
        window.open("./Y-R15s.html", "_self");
    }

    else if (x === "yamaha yzf r15 v4" || x === "yzf r15 v4" || x === "yamaha r15 v4" || x === "r15 v4") {
        window.open("./Y-15v4.html", "_self");
    }

   
    



    else {
        window.open("./error.html", "_self");
    }

}

// ***** End Search Section ============================ 

// else if (x === "" || x === "" || x === "" || x === "") {
//     window.open("./Html Pages/", "_s