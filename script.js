document.getElementById("b").addEventListener("click",function(){
    const str1 = document.getElementById("text_id").value;
    console.log("str1 =");
    console.log(str1);
    const cipercode = caesarCiper(str1,1);
    document.getElementById("display").innerHTML = cipercode;
})

function caesarCiper(s, count) {
    const lower = s.toLowerCase();
    const upper = s.toUpperCase();
    console.log("lower value is");
    console.log(lower);
    console.log("upper value is");
    console.log(upper);

    var res="";
    var asc = "";
    var asciistring = "";
    for(var i=0;i < s.length;i++) { 
        if(lower[i] !== upper[i]) {
            asc = s.charCodeAt(i);
            res += String.fromCharCode(s.charCodeAt(i) + count);
        }else {
            res += s[i];
        }
    }
    console.log("RES value is");
    console.log(res);

    return res;
}