let gakkicode = 2;

chrome.storage.local.get("gakki", function(data) {
    gakkicode = data.gakki;
});

function change(){
    console.log("a")
    const frame = document.getElementById("idForChangeMenu").getElementsByTagName("frame")[1].contentWindow;
    const gakki = frame.document.getElementById('gakkiKubunCode');
    if (gakki != null){
        gakki.value = gakkicode;
    }    
}


window.addEventListener('load', function() {
    const gakki = document.getElementById('gakkiKubunCode');
    if(gakki != null){
        gakki.value = gakkicode;
    }
    else if(frameDOM != null) {
        frameDOM.onload = () => change();
    }
});
    
const frameDOM = document.body.getElementsByTagName("frame")[2];