let gakkicode = 0;
let autoClick = false;

function load_storage() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(["gakki","autoClick"], (data) => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                gakkicode = data.gakki;
                autoClick = data.autoClick;
                resolve(data);
            }
        });
    });
}

// chrome.storage.local.get("gakki", function(data) {
//     gakkicode = data.gakki;
// });

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
            if(!autoClick) return;
            let allInput = document.querySelectorAll('input');
            allInput.forEach((input)=>{
                console.log(input);
                if (input.value === " 検索開始 ") {
                    input.click();
                }
            });
        }
        else if(frameDOM != null) {
            frameDOM.onload = () => change();
        }
        frameDOM.onload = () => getImagesByAlt('Face Photo');
    } catch (error) {
        return;
    }
});
    
const frameDOM = document.body.getElementsByTagName("frame")[2];

function getImagesByAlt(altValue) {
    // すべてのimg要素を取得
    const frame = document.getElementById("idForChangeMenu").getElementsByTagName("frame")[1].contentWindow;
    let allImages = frame.document.querySelectorAll('img');
    let imagesWithAlt = [];

    // 画像要素のalt属性をチェックし、特定の値を持つものを抽出
    allImages.forEach(function(img) {
        imagesWithAlt.push(img)
        if (img.alt === altValue) {
            img.style.height = "auto";
        }
    });
    // console.log(imagesWithAlt);
    return imagesWithAlt;
}

