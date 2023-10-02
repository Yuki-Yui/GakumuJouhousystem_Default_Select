let gakkicode = 0;

function load_storage() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get("gakki", (data) => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                gakkicode = data.gakki;
                resolve(data);
            }
        });
    });
}

chrome.storage.local.get("gakki", function(data) {
    gakkicode = data.gakki;
});

function change(){
    const frame = document.getElementById("idForChangeMenu").getElementsByTagName("frame")[1].contentWindow;
    const gakki = frame.document.getElementById('gakkiKubunCode');
    if (gakki != null){
        gakki.value = gakkicode;
    }    
}

window.addEventListener('load', async function() {
    try {
        await load_storage();
        const gakki = document.getElementById('gakkiKubunCode');
        if(gakki != null){
            gakki.value = gakkicode;
        }
        else if(frameDOM != null) {
            frameDOM.onload = () => change();
        }
    } catch (error) {
        return;
    }
});
    
const frameDOM = document.body.getElementsByTagName("frame")[2];