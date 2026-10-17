# WordTrail — Ödüllü reklam bağlantısı

## Şu anki durum

Yayıncı hesabı veya gerçek ödüllü reklam birimi yok. Kullanıcının isteğiyle
reklam seçeneği kapalı bırakıldı. Reklam düğmesi henüz gösterilmez; Google reklam
SDK'sına ağ isteği yapılmaz ve reklam izlenmiş gibi ödül verilmez.
10 dakikalık otomatik can yenilenmesi bağımsız olarak çalışır.

## Vercel / PWA için bağlama

Bu sürüm **Google Ad Manager / Google Publisher Tag ödüllü web reklamını** destekleyecek
bağlantı kodunu içerir. AdSense yayıncı kimliği veya AdMob kimliği bu alanın yerine geçmez.

1. Yayıncı hesabını ve siteyi hazırla; sağlayıcı gereksinimleri, uygun reklam envanteri
   ve gerekiyorsa kullanıcı izin/tercih akışı tamamlanmış olsun.
2. Ödüllü web reklam birimi oluştur. Kullanıcıya vaat edilen ödülü **1 can** olarak ayarla.
3. `www/rewarded-ads-config.js` içinde `adUnitPath:null` yerine gerçek Ad Manager yolunu yaz:

```js
window.REWARDED_ADS_CONFIG = Object.freeze({
  provider:'google-ad-manager',
  adUnitPath:'/GERCEK_AG_KODU/GERCEK_ODULLU_REKLAM_BIRIMI'
});
```

Yol yayıncı kimliği veya erişim sırrı değildir; web istemcisinde kullanılır.
`/GERCEK_AG_KODU/…` yalnızca yer tutucudur; gerçek yolun ağ kodu sayısaldır.

4. `npm run build` çalıştırıp Vercel'e dağıt; önbellek sürümü otomatik üretilir. Uygulamadaki yeni sürüm bandından Yenile'ye bas.
5. Can 5'in altındayken kalplere dokun, reklamı izlemeyi seç ve gerçek servisle doğrula.
   Envanterin boş olması veya tarayıcının desteklememesi durumlarını da kontrol et.

## Ödül koşulları

- SDK yalnızca kullanıcı reklamı izlemeyi seçtiğinde yüklenir.
- `rewardedSlotReady`: reklamı gösterir; **can vermez**.
- `rewardedSlotGranted`: aynı reklam için **yalnızca bir kez +1 can** verir.
- `rewardedSlotClosed`: ödül olayı olmadıysa **can vermez**.
- İlgisiz slot olayları, envanter yokluğu ve yükleme hataları ödül vermez.
- Can sayısı en fazla 5'tir; reklamla can alınca devam eden yenilenme süresi korunur.
- Tarayıcıdaki can penceresi reklam gösterilirken kapanır; SDK reklamının üzerini örtmez.
- Çevrimdışı oyun kullanılabilir; gerçek reklam gösterimi internet ve envanter gerektirir.

Kod: `www/rewarded-ads.js`, `www/economy.js` ve `www/app.js`.
`npm test` SDK olaylarının taklidiyle ödül koşullarını kontrol eder; gerçek reklam gösterimi yapmaz.
Canlar ve bölüm ödülleri bu sürümde tarayıcıdaki yerel kayıttadır. Kullanıcı hesabı,
sunucu tarafında cüzdan veya reklam ödülü doğrulaması bulunmaz. Ticari reklam yayını
öncesinde sağlayıcının gereksinimleri ve gerçek cihaz akışı ayrıca doğrulanmalıdır.

## Android APK

Mevcut bağlantı web/PWA içindir. Capacitor ile paketlenmiş APK'da yerel **AdMob rewarded**
kullanılacaksa ayrıca bir yerel eklenti ve gerçek AdMob uygulama/reklam birimi kimlikleri
bağlanmalıdır. Ödül, eklentinin doğrulanmış tamamlanma olayından yine aynı can modeline verilir.
Bu pakette yerel AdMob SDK'sı veya AdMob hesabı eklenmedi.
