# Kelime Yolculuğu

Altı dilde 100'er bölüm ve 1.000'er kelime içeren, telefona eklenebilen eşleştirme oyunu.
İngilizce, Almanca, İspanyolca, Rusça, Arapça ve Fransızca kelimeleri Türkçeleriyle eşleştir.

**[Uygulamayı ZIP olarak indir](https://github.com/salihcoskun24-del/Kelime-yolculugu/raw/refs/heads/main/Kelime_Yolculugu_Mobil.zip)**

Paket hazır APK değildir; PWA ve Android APK üretmek için Capacitor ayarları içerir.

## Sürüm 3.0

- **İki hata hakkı:** İlk yanlış eşleşme ilerlemeyi korur; ikinci yanlış 0/10'a döndürür. Hata sayacı oturumla saklanır; yeniden başlatma ve kurtarmada sıfırlanır.
- **Bölüm tanıtımı:** Yeni oturumdan önce 10 sesli kelime kartı, Hazırım ve Atla. Ayarlar'dan kapatılabilir; devam eden bölümde gösterilmez.
- **Zor kelimeler:** Yanlış eşleştirme, cümle/pratik cevabı ve kelime defterindeki Bilemedim kelimeyi tekrar listesine ekler. Bildim/Bilemedim düğmeleri vardır. Leitner kutuları 1/3/7 gün; doğru cevap kutuyu ilerletir, yanlış ertesi güne döndürür. Tekrar en fazla 10 vadesi gelmiş sorudur.
- **Pratik:** Tamamlanan bölümlerle Dinle ve seç, Ters yön, Yazarak ve 60 saniyelik Hız modu. Yazarak yalnızca İngilizce, Almanca, İspanyolca ve Fransızcada görünür; harf/aksan farkı ve uzun kelimede tek harf hatası kabul edilir, doğrusu gösterilir.
- **Günlük hedef ve seri:** 1/2/3 birim, varsayılan 1. Bir bölüm veya 10 tekrar yanıtı ya da 10 doğru pratik = 1 birim. Diller ortak sayılır. Cihazın yerel günü kullanılır; gün kaçınca seri sıfırlanır, tarih geriye alınınca günlük kayıt bekler. Tamamlanmış günün hedefi sonradan değiştirilmez.
- **İstatistik ve 24 rozet:** Dil başına öğrenilen kelime, bölüm, doğruluk, hız rekoru; ortak seri/en iyi seri ve tarihli rozetler. Eski kayıtlarda yalnızca bölüm rozetleri geriye dönük hesaplanır; doğruluk sayaçları bu sürümden başlar.
- **Sistem / Açık / Koyu:** Varsayılan Sistem; tercih ilerlemeden ayrı `ky-preferences-v1` kaydındadır. Tema CSS'den önce uygulanır; meta theme-color da güncellenir.
- **Güvenli sürüm geçişi:** Network-first önbellek çevrimdışı çalışır. Yeni sürüm beklerken “Yeni sürüm var — Yenile” bandı çıkar; yalnızca düğmeye basınca sürüm değişir ve sayfa yenilenir. Oyun ortasında otomatik yenilenmez.

Tekrar ve pratik can harcamaz, bölüm ödülü vermez ve bölüm ilerlemesini değiştirmez; can sıfırken de kullanılabilir.
İlerleme yedeği tekrar verisi, istatistikler, rozetler ve günlük veriyi içerir. Geri yükleme mevcut canları, mevcut seri ve gün içi hedef ilerlemesini korur; en iyi serinin büyük olanını alır. Tema ve tanıtım tercihi yedekten etkilenmez. Dil sıfırlama o dilin tekrar, istatistik ve hız rekorunu da siler; kazanılmış ortak rozetler kalır.

## Önceki özellikler

- Tüm diller için ortak **5 can**; cümle testindeki her yanlışta **−1 can**.
- Eksilen canlar **10 dakikada +1** yenilenir; kapalıyken geçen süre de sayılır.
- Can sıfırken bölüm oynama, test yanıtlama ve bölüm geçişi durur; ilerleme saklanır.
- İlk kez tamamlanan her bölüm **+1 ipucu**; 5'in katı bölümler ayrıca **+1 geri dönme hakkı**.

- Her bölümün sonunda bölümden üç kelimeyle cümlede boşluk doldurma.
- Altı dilde toplam **1.800 cümle sorusu**, Türkçe anlamı ve üç cevap seçeneği.
- Bölüm açma koşulu: **10 eşleşme + 3 doğru cümle**.
- Yanlış eşleştirme sonrası önceki doğru eşleşmeleri 1 hakla geri getirme.

- Açılışta altı dilden birini seç; ana ekrandaki dil düğmesinden değiştir.
- Her dilin bölüm ilerlemesi, devam eden eşleşmeleri ve yardımcı hakları ayrı saklanır.
- Yeni beş dilde kolaydan zora 1.000'er kayıt; sıralı listeler `kelime-listeleri/` klasöründe.
- Kelimeye dokununca o dilin sesiyle telaffuz; Arapça kartlarda sağdan sola metin.
- Bölümlerin altında **Kaldığım yere gel** ve **İpucu** düğmeleri.
- Her dilde her yardımcı için bir defalık **5 hak**.
- Eski İngilizce ilerlemesi otomatik taşınır; İngilizce bölüm sırası korunur.
- 3D görünümlü ada, animasyonlar, kutlama, sesler, kelime defteri ve tüm diller için yedekleme.

## Yardımcılar

**Kaldığım yere gel:** Yanlış eşleştirmeyle sıfırlanan bölümde önceki doğru
çiftleri **1 hak** karşılığında geri getirir. Örneğin 8 doğru yaptıktan sonra
ilk yanlışta 8/10 kalır; aynı denemedeki ikinci yanlışta bölüm 0/10 olur; bu düğmeyle **8/10** geri gelir.
Kayıt sayfa yenilenince ve dil değiştirilince korunur. Haritadan da kurtarılabilir.
Geri getirilecek doğru çift yoksa veya aynı sayıya zaten ulaştıysan hak gitmez.
Kayıt bir defa geri getirilir; aynı kayıt için tekrar hak düşmez.

**İpucu:** Eşleştirmede doğru çifti, cümlede doğru seçeneği 5 saniye işaretler.
Doğru cevabı otomatik işaretlemez. İpucu görünürken tekrar basmak ikinci hak harcamaz.
Yanıtlanmış cümlede ipucu istemek hak harcamaz.

## Cümle soruları

10 çifti eşleştirince o bölümdeki üç farklı kelime için üç cümle açılır.
Türkçe anlamından yararlanarak boşluğa uygun seçeneği seç.
Doğru yanıttan sonra dolu cümleyi dinleyebilir, sonraki soruya geçebilirsin.
Son soruda **Bölümü tamamla** ile sonraki bölüm açılır.
Cümlede yanlış seçim yalnızca o soruyu yeniden denetir; eşleşmeler korunur.
Cümle aşaması ve doğru yanıtlanan soru sayısı kaydedilir.
Cümlede gereken çekimli biçimler kullanılabilir; sözlükteki temel biçimden farklı görünebilir.
Cümleler `cumle-sorulari/` CSV dosyalarındadır; `npm run sentences:export` ile yeniden üretilir.
Eski sürümde tamamlanan bölümler korunur; tekrar oynanırlarsa yeni cümle aşaması da gösterilir.

## Canlar ve bölüm ödülleri

Kullanıcının bu cihazda **5 ortak canı** vardır. Dil değiştirmek yeni can vermez.
Yalnızca bölüm sonundaki cümle testinde yanlış bir seçeneğe dokunmak 1 can götürür.
Doğru cevaplar ve eşleştirme hataları can götürmez.

İlk can kaybında 10 dakikalık sayaç başlar. Sonraki yanlışlar devam eden sayacı
başa almaz. Her 10 dakikada bir can eklenir, en fazla 5 olabilir. Örneğin sıfır
canla 30 dakika beklediğinde 3 can gelir. Uygulama kapalıyken de geçen süre
sonraki açılışta hesaplanır. Kalplere dokunarak sayacı ve can ekranını açabilirsin.
Can sıfırken bölüm oyunu durur; menü, kelime defteri, tekrar ve pratik kullanılabilir. Eşleşmeler ve
cümle ilerlemesi korunur; yeni can gelince aynı yerden devam edilir.

Her dilde ipucu ve geri dönme hakkı başlangıçta 5'er adettir. O dilde:

- İlk kez tamamlanan her bölüm: **+1 ipucu**.
- İlk kez tamamlanan 5, 10, 15, …, 100. bölümler: ayrıca **+1 geri dönme hakkı**.
- Aynı bölümün tekrarı veya ilerlemeyi sıfırlama tekrar ödül vermez.

Yardımcı bakiyeleri 5'in üzerine çıkabilir. Eski ilerleme korunur; güncellemeden
önce tamamlanan bölümler için geriye dönük ödül dağıtılmaz.
Eski yedeği yüklemek bu cihazdaki can sayacını veya alınmış bölüm ödülü kaydını geri sarmaz.

## Ödüllü reklam durumu

Henüz yayıncı hesabı veya reklam birimi yok; **reklamla can kazanma pasif**.
Sayaç ve otomatik yenilenme çalışır. Reklam izlenmiş gibi can veren demo yoktur.
Vercel/PWA için Google Ad Manager ödüllü web reklamı bağlantısı hazırlanmıştır;
yalnızca SDK'nın ödül olayıyla **+1 can** verir. Erken kapatma, boş envanter
veya yükleme hatası can vermez. Hesap hazır olduğunda [REWARDED_ADS.md](REWARDED_ADS.md)
yönergeleriyle gerçek birim bağlanır. Canlar reklamla da 5'i aşmaz.

## Vercel'de yayınla

1. **Add New → Project** ile bu GitHub deposunu içe aktar.
2. **Root Directory** depo kökü olarak kalsın; `www` seçme.
3. Framework **Other** olmalı. `vercel.json` diğer ayarları tanımlar.
4. **Deploy**'a bas. Çıktı klasörü `dist`, build komutu `npm run build`.

Ortam değişkeni veya API anahtarı gerekmez. Web sürümü statik olduğundan
Vercel'de Android/Capacitor bağımlılıkları kurulmaz.
Depo zaten bağlıysa push sonrası otomatik dağıtım başlayabilir; başlamazsa **Redeploy** seç.
Eski özel build/output ayarları varsa bu değerlerle eşleştir.

## Yerelde çalıştır

Python 3 ile:

```sh
python calistir.py
```

Windows'ta `BASLAT_WINDOWS.bat` da kullanılabilir. `http://localhost:8080` adresini aç.
Aynı Wi-Fi üzerindeki telefonda terminalde gösterilen yerel IP adresini kullan.

Vercel çıktısını yerelde kontrol etmek için:

```sh
npm run check
npm test
npm run build
python -m http.server 8080 --directory dist
```

## Telefonuna ekle

Vercel'in HTTPS adresini aç. Android Chrome: **Menü → Uygulamayı yükle / Ana ekrana ekle**.
iPhone Safari: **Paylaş → Ana Ekrana Ekle**.
İlk açılışta tüm dillerin uygulama dosyaları önbelleğe alınır; sonrasında oyun çevrimdışı çalışır.
Telaffuzun çalışması ve çevrimdışı ses desteği, cihazdaki ilgili dilin ses paketine bağlıdır.
Yeni sürüm bulunduğunda gösterilen Yenile düğmesine bas. Derleme cache adını package.json sürümü ve dosya içerik hash'inden üretir; elle sürüm artırmak gerekmez. www altına eklenen tüm dosyalar otomatik önbellek listesine girer.

## Kayıt ve yedek

Ayarlar'dan tüm dillerin ilerlemesini, devam eden bölümünü, cümle aşamasını, geri getirilebilir eşleşmelerini ve yardımcı haklarını JSON olarak yedekle.
Eski İngilizce yedekleri de içe aktarılabilir; diğer diller korunur.
Canlar ve sayaç bu cihazdaki canlı kayıtta korunur; ilerleme yedeği yüklemek bunları doldurmaz.
Kayıt bu cihazın tarayıcısında ve bu adrese özeldir; cihazlar arasında otomatik eşitlenmez.

## Android APK üretme

Node.js 22+, JDK 21, Android SDK ve Android Studio ile:

```sh
npm install
npm run android:add
npm run android:sync
npm run android:open
```

Android Studio'dan APK oluştur. Yerel APK derlemesi bu ortamda yapılmadı.

## Veri ve doğrulama

Veri sıralaması, alfabe tercihleri ve çeviri hazırlığı için [VOCABULARY.md](VOCABULARY.md).
Tekrarlanabilir veri kontrolleri `npm run check` ile çalışır ve build sırasında da uygulanır.
Oyun kontrolleri, kayıt geçişi ve sınırlar [DOGRULAMA.txt](DOGRULAMA.txt) dosyasında.
Orijinal Python/Kivy kaynak dosyası `original/` içinde korunur.

## Tarayıcı doğrulaması

`npm test` veri/ekonomi/Leitner/seri/rozet, otomatik SW derlemesi ve tema kontrast testlerini çalıştırır.
`npm run build` sonrasında, Playwright ve Chromium kurulu geliştirme ortamında `npm run test:browser`
ile gerçek eşleştirme/kurtarma, cümle canları, tekrar/pratik, tema, kayıt taşıma ve çevrimdışı SW güncelleme
akışları denenir. Testler kendi geçici HTTP sunucularını açar. Özel kurulum için
`PLAYWRIGHT_MODULE` ve `BROWSER_EXECUTABLE` ortam değişkenleri kullanılabilir.
