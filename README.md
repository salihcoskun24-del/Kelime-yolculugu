# WordTrail

**Mağaza başlığı: WordTrail: Learn Languages**

Telefona kurulabilen, çevrimdışı çalışan kelime oyunu. Altı hedef dilde 100'er bölüm,
1.000'er kelime ve 300'er cümle sorusu içerir. Ana dil ve arayüz için yedi seçenek vardır:
Türkçe, English, Deutsch, Español, Русский, العربية, Français. WordTrail adı çevrilmez.

[ZIP'i indir](https://github.com/salihcoskun24-del/Kelime-yolculugu/raw/refs/heads/main/Kelime_Yolculugu_Mobil.zip)

## Ana dil ve kullanılabilir çiftler

İlk açılışta cihaz diline uygun bir öneri gösterilir; kullanıcı ana dilini kendisi seçer.
Ana menünün üstündeki seçici arayüzü hemen değiştirir; tercih cihazda saklanır.
Arapça arayüz RTL'dir. Öğrenilen kelimenin yönü hedef dile, anlam kartının yönü ana dile bağlıdır.
Kullanıcının ana dili hedef listesinden gizlenir.

**Şu anda yalnızca Türkçe ana dilli altı çiftin kelime ve cümle çevirileri hazırdır.**
Diğer ana dillerde arayüz çalışır; eksik çiftler “kelime listeleri yakında” mesajıyla
kapalıdır. Türkçe anlamlara sessizce geri dönülmez. Yedi dilin arayüz çevirileri başlangıç
taslağıdır; **her dilin çevirilerini ana dilini konuşan biri kontrol etsin.**

## Oyun

- Yeni bölüm oturumundan önce 10 sesli tanıtım kartı; Hazırım/Atla, Ayarlar'dan kapatma.
- 10 doğru eşleşme ve ardından 3 doğru boşluk doldurma sorusu bölümü tamamlar.
- İlk eşleştirme hatası doğru çiftleri korur; aynı denemedeki ikinci hata 0/10'a döndürür.
  Hata sayacı kayıtla korunur; yeniden başlatma ve kurtarmada sıfırlanır.
- İpucu ve Kaldığım yere gel her çiftte 5 hakla başlar. Kurtarma, sıfırlanma anındaki
  doğru eşleşmeleri 1 hakla geri getirir. Geri getirilecek veri yoksa harcanmaz.
- İlk tamamlamada +1 ipucu; ilk tamamlanan 5'in katı bölümlerde ayrıca +1 geri dönme.
  Aynı bölümün tekrarı/sıfırlama ödül çiftlemeye izin vermez.
- 5 can tüm çiftlerde ortaktır. Yalnızca cümle testinde yanlış cevap can azaltır.
  10 dakikada 1 can yenilenir; kapalıyken geçen süre sayılır. Can sıfırken bölüm durur.
- Zor kelimeler yanlış eşleştirme/cümle/pratik veya kelime defterindeki Bilemedim ile
  tekrar listesine girer. Leitner kutuları 1/3/7 gün, oturum en fazla 10 vadesi gelmiş soru.
- Pratik yalnızca tamamlanmış bölümleri kullanır: Dinle ve seç, Ters yön, Yazarak,
  60 saniyelik Hız modu. Yazarak en/de/es/fr dillerindedir; harf/aksan farkına ve
  uzun kelimelerde tek harf hatasına tolerans gösterir, doğru biçimi gösterir.
- Tekrar/pratik can harcamaz ve bölüm ödülü vermez; can sıfırken de kullanılabilir.
- Günlük hedef 1/2/3 birim: 1 bölüm veya 10 tekrar yanıtı/doğru pratik cevabı 1 birimdir.
  Diller ve çiftler ortak seri oluşturur. Cihazın yerel günü kullanılır; tarih geriye
  alınınca günlük sayım bekler. Kaçırılan gün seriyi sıfırlar, en iyi seri saklanır.
- Çift başına istatistikler, hız rekoru ve tarihli rozetler. Altı dil rozeti için her
  hedef dilde herhangi bir çiftte bölüm tamamlamak yeterlidir.
- Sistem/Açık/Koyu tema; varsayılan Sistem. Cihazın azaltılmış hareket tercihi desteklenir.

## Veri modeli ve yeni çeviri ekleme

Kaynaklar aynı adlarla `kelime-listeleri/` ve `cumle-sorulari/` CSV dosyalarındadır.
Kelime kolonları: `id;target;text;level;stage;tr;en;de;es;ru;ar;fr`.
Cümle kolonları: `id;target;level;wordId;text;answer;tr;en;de;es;ru;ar;fr`.
Boş çeviri hücresi “hazır değil” demektir. Kimlikler değişmez: `1:0` … `100:9`.
`scripts/data.cjs`, bunları `{id,target,text,level,stage,translations:{tr,en,de,es,ru,ar,fr}}`
modeline okur. Cümlelerde de ayrı çeviri alanları vardır.

`npm run vocabulary:export` veya `npm run sentences:export`, kaynak CSV'lerden
`www/data/catalog.json` ve **yalnızca eksiksiz çiftler** için `<hedef>-<ana>.json` üretir.
Bir çifti açmak için 1.000 kelime ve 300 cümle anlamını doldur; bölümdeki 10 anlam kartı
birbirinden farklı olmalı. `npm run check`, her çiftin eksik sayısını raporlar ve
her ana dil için bölüm içi eşsizliği ayrı kontrol eder. Yeni çeviriler eklenince build
kataloğu otomatik günceller. JSON üretim dosyalarını elle düzenleme.

`www/words.js`, `vocabularies.js`, `sentences.js` önceki sürümün tarihsel kaynakları olarak
aynı adlarla korunur; uygulama bunları yüklemez ve web build'e/önbelleğe dahil etmez.
Üretimde çeviri API'sine istek gönderilmez. Cihazın seslendirme kalitesi ve çevrimdışı
ses desteği ilgili ses paketine bağlıdır.

## Kayıt, geçiş ve yedek

**localStorage anahtarı `ky-v2` aynen korunur.** İç şema 4'tür; ilerleme anahtarları
`es-tr`, `es-en`, `ru-ar` gibi hedef–ana çiftleridir. Önceki v2/v3 kayıtların ve eski
İngilizce kaydın tüm ilerleme/oturum/kurtarma/tekrar verisi Türkçe ana dil çiftlerine
otomatik taşınır. Çift değiştirmek diğer çiftlerin verisini silmez.
Tema, tanıtım ve ana dil tercihi ayrı `ky-preferences-v1` kaydındadır.

JSON yedeği bütün çiftleri, tekrar verisini, istatistikleri, rozetleri ve günlük veriyi içerir.
Eski yedekler `*-tr` olarak alınır; başka çiftlerin ilerlemesi korunur.
Yedek yüklemek mevcut canları ve yenilenme zamanını geri sarmaz; mevcut seri ve gün içi
hedef ilerlemesini korur. En iyi serinin büyük olanı alınır. Tercihler yedekten değiştirilmez.
Dil çifti sıfırlama o çiftin tekrar/istatistik/rekorunu da siler; mevcut yardımcı hakları,
önceden alınmış ödül kaydı, canlar ve ortak seri/rozetler korunur.
Kayıt bu cihazın tarayıcısına ve uygulamanın adresine özeldir; otomatik eşitleme yoktur.

## Vercel ve yerel çalıştırma

Vercel projesini bu GitHub deposuna bağla. `vercel.json` içindeki build `npm run build`,
çıktı `dist` olarak ayarlıdır; API anahtarı gerekmez. Web uygulaması için bağımlılık kurulumu gerekmez.

```sh
npm test
npm run build
python -m http.server 8080 --directory dist
```

Python ile hızlı deneme: `python calistir.py`; Windows'ta `BASLAT_WINDOWS.bat`.
Bu yol aynı `www` dosyalarını sunar; kaynak değişince önce `npm run build` çalıştır.
Android: Chrome menüsü → Uygulamayı yükle. iPhone: Safari → Paylaş → Ana Ekrana Ekle.
Telefona kurulum ve service worker için HTTPS gerekir (localhost hariç).

## Çevrimdışı kullanım ve güncelleme

Uygulama kabuğu ve yedi küçük arayüz sözlüğü önbelleğe alınır; bütün kelime bankaları
önceden indirilmez. Yalnızca seçilen çiftin tek JSON dosyası yüklenir ve `wordtrail-pairs-v1`
veri önbelleğinde tutulur. Önceden açılmış çiftler çevrimdışı kullanılabilir; hiç açılmamış
bir çift için önce internet gerekir. İlk yüklemenin tamamlanmasını bekle.

Uygulama cache adı `wordtrail-<package sürümü>-<içerik hash'i>` olarak build sırasında
üretilir. Kabuğa eklenen dosyalar otomatik listeye girer; `data/` altındaki çiftler ise
istek üzerine saklanır. Network-first çevrimdışı önbelleğe döner. Yeni SW beklerken
“Yeni sürüm var — Yenile” bandı gösterilir; yalnızca kullanıcı basınca etkinleşir ve
sayfa yenilenir. Önceki seçili çift önbellekleri güncellemede korunur.

## Android / mağaza kimliği

`capacitor.config.json`: `appName: WordTrail`, **yer tutucu** `appId: com.wordtrail.app`.
**Yayından önce kendi alan adınla değiştir; yayından sonra değiştirilemez.**
Mağaza başlığı: **WordTrail: Learn Languages**. Marka adı hiçbir arayüz dilinde çevrilmez.

Node.js, Android Studio/SDK ve JDK kurulu geliştirme bilgisayarında:

```sh
npm install
npm run android:add
npm run android:sync
npm run android:open
```

Bu paket hazır APK/IPA içermez. iOS yerel derlemesi için macOS/Xcode ve imzalama gerekir.

## Testler

`npm test`: ekonomi/reklam, Leitner/seri/rozet, önbellek build'i, WCAG AA renk çiftleri,
yedi dilin anahtar/yer tutucu eşitliği, t() anahtarları ve çift bazlı kayıt/yedek geçişi.
`npm run build`: CSV doğrulama, her çiftin eksik raporu ve web çıktısı.
`npm run test:browser`: Playwright + Chromium ile oyun akışları, ilk ana dil seçimi,
yedi dil/RTL, sentetik test çiftinde farklı kart yönleri, sadece seçili çift isteği,
ilerleme yalıtımı ve gerçek service worker ile çevrimdışı güncelleme.
Testler kendi HTTP sunucularını açar. Özel kurulum: `PLAYWRIGHT_MODULE`, `BROWSER_EXECUTABLE`.

Gerçek reklam hesabı henüz yoktur; reklam seçeneği kapalıdır. Ayrıntılar: REWARDED_ADS.md.
