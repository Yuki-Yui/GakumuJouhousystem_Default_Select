const gakki = document.getElementById('gakki');
const submitButton = document.getElementById('submitButton');
const messageBox = document.getElementById('message');

chrome.storage.local.get("gakki", function(data) {
    gakkicode = data.gakki;
    gakki.value = gakkicode;
});

submitButton.addEventListener('click', function() {
    const gakki_value = gakki.value;

    chrome.storage.local.set({
        gakki: gakki_value
    }, function() {
        messageBox.innerHTML = '値を保存しました。<br>ページを再読み込みしてください。';
    });
});