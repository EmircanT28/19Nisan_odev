function kelimesayibul() {
        var a = document.getElementById("text").value;
        var kelimeler = new Array();
        kelimeler = a.split(' ');
        var kelimesayi = kelimeler.length;
        console.log("Kelime sayısı :"+" "+kelimesayi)       
    } 