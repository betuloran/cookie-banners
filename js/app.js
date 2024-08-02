// setCookie Fonksiyonu:Bu fonksiyon, belirtilen bir adı ve değeri olan bir çerezi (cookie) belirli bir süre için tarayıcıda ayarlar.
function setCookie(name, value, days) {
    var date = new Date(); // Yeni bir tarih nesnesi oluşturur.
    date.setDate(date.getDate() + days); // Tarihi, mevcut tarih artı belirtilen gün sayısı olarak ayarlar.
    document.cookie = name + '=' + escape(value) + '; expires=' + date.toUTCString();
    //Çerezi oluşturur ve tarayıcıya ekler.escape()'le value değeri güvenli bir biçimde kodlanır, expires'la çerezin ne zaman sona ereceği belirtilir.
    console.log('cookie' + name + 'created');// Çerezin oluşturulduğunu konsola yazar.

}

// getCookie Fonksiyonu: Bu fonksiyon, belirtilen adla bir çerezi (cookie) tarayıcıdan alır ve değerini döner.
function getCookie(cookieName) {
    var pattern = cookieName + '= (?<value>[0-9a-zA-Z\s]+);?'; // Çerez adını ve değerini yakalamak için bir düzen (regex) oluşturur.
    var regex = new RegExp(pattern);  // Düzen (regex) nesnesini oluşturur.
    var result = document.cookie.match(regex);  // Tüm çerezlerde düzeni arar ve eşleşen sonucu alır.
    if (result) {
        return result.groups.value;  // Eşleşen çerezin değerini döner.
    }
}

//showCookieBanner Fonksiyonu: Bu fonksiyon, belirli bir çerezin mevcut olup olmadığını kontrol eder ve çerez mevcut değilse belirtilen ID'ye 
//sahip öğeye 'active' sınıfını ekler (banner'ı görünür yapar).
function showCookieBanner(id) {
    if (!getCookie(id)) {  // Çerez mevcut değilse
        document.getElementById(id).classList.add('active');  // Belirtilen ID'ye sahip öğeye 'active' sınıfını ekler.
    }
}

//hideCookieBanner Fonksiyonu: Bu fonksiyon, belirtilen ID'ye sahip öğeden 'active' sınıfını kaldırır (banner'ı gizler) ve bir çerez oluşturur.
function hideCookieBanner(id) {
    document.getElementById(id).classList.remove('active');  // Belirtilen ID'ye sahip öğeden 'active' sınıfını kaldırır.
    setCookie(id, true, 1);  // Belirtilen adla bir çerez oluşturur ve 1 gün için geçerli olmasını sağlar.
}

//Son olarak, sayfa yüklendiğinde üç farklı banner'ın gösterilmesini sağlayan fonksiyon çağrıları:
showCookieBanner('banner-1');
showCookieBanner('banner-2');
showCookieBanner('banner-3');
//Bu çağrılar, her biri farklı bir ID'ye sahip olan üç banner'ın çerez durumunu kontrol eder ve gerekli durumlarda gösterir.