const gakki = document.getElementById('gakki');
const autoclick = document.getElementById('autoclick');
const submitButton = document.getElementById('submitButton');
const messageBox = document.getElementById('message');

chrome.storage.local.get(["gakki","autoClick"], (data) => {
    gakkicode = data.gakki;
    autoClick = data.autoClick;
    // alert(autoclick);
    gakki.value = gakkicode;
    autoclick.checked = autoClick;
});

submitButton.addEventListener('click', () => {
    const gakki_value = gakki.value;
    const autoclick_value = autoclick.checked;

    chrome.storage.local.set({
        "gakki" : gakki_value,
        "autoClick" : autoclick_value
    }, function() {
        messageBox.innerHTML = '値を保存しました。<br>ページを再読み込みしてください。';
    });
});