# Kelime Yolculuğu

100 bölüm ve 1.000 İngilizce–Türkçe kelime içeren, telefon ekranlarına uyumlu eşleştirme oyunu.

## ZIP dosyasını indir

**[Uygulamayı ZIP olarak indir](https://github.com/salihcoskun24-del/Kelime-yolculugu/raw/refs/heads/main/Kelime_Yolculugu_Mobil.zip)**

Dosya indikten sonra ZIP’i çıkarıp `OKU_BENI.txt` dosyasını aç.
Paket hazır APK değildir. Android ve iPhone’da ana ekrana eklenebilen web uygulaması ve Android APK üretmek için Capacitor ayarları içerir.

## Özellikler

- 3D görünümlü ada illüstrasyonu ve animasyonlu bölüm haritası
- 100 bölüm, 1.000 kelime, her bölümde 10 eşleşme
- Yanlış eşleşmede bölümü yeniden başlatma
- Ses efektleri ve kutlama animasyonu
- Yerel ilerleme kaydı, kelime defteri ve JSON yedekleme
- HTTPS üzerinden ilk yüklemeden sonra çevrimdışı kullanım

## Bilgisayarda çalıştır

Python 3 kurulu bilgisayarda:

```sh
python calistir.py
```

Windows’ta `BASLAT_WINDOWS.bat` da kullanılabilir. `http://localhost:8080` adresini aç.
Aynı Wi-Fi üzerindeki telefondan terminalde gösterilen yerel IP adresi ile erişebilirsin.
Yerel HTTP bağlantısında telefona yükleme ve çevrimdışı kullanım desteklenmez; bunlar HTTPS gerektirir.

## Vercel’de yayınla

1. Vercel hesabında **Add New → Project** seç.
2. GitHub’dan **salihcoskun24-del/Kelime-yolculugu** deposunu içe aktar.
3. **Root Directory** depo kökü olarak kalsın (`www` seçme).
4. Framework **Other** olmalı. `vercel.json` kurulum, build ve çıktı ayarlarını otomatik tanımlar.
5. **Deploy** düğmesine bas. Oluşan HTTPS adresini telefonda aç.

Çıktı klasörü `dist`, build komutu `npm run build` olarak tanımlıdır.
Web sürümü bağımsız statik dosyalardan oluştuğu için Vercel’de Capacitor/Android bağımlılıkları kurulmaz.
Ortam değişkeni gerekmez. Depo zaten Vercel’e bağlıysa bu commit yeni bir dağıtım başlatabilir;
başlatmazsa **Deployments → Redeploy** seç. Eski elle girilmiş build/output ayarları varsa
bunları yukarıdaki değerlerle eşleştir veya proje ayarlarına bırak.

Yerelde aynı çıktıyı hazırlamak için:

```sh
npm run build
python -m http.server 8080 --directory dist
```

Canlı adreste Android Chrome’dan **Uygulamayı yükle / Ana ekrana ekle**;
iPhone Safari’den **Paylaş → Ana Ekrana Ekle** seçeneğini kullan.
Vercel hesabına bu işlemde dağıtım yapılmadı; GitHub projesi dağıtıma hazırlandı.

## Telefona ekle

`www` klasörünün içeriğini HTTPS sunan statik barındırmaya yükle.
Android Chrome’da **Menü → Uygulamayı yükle / Ana ekrana ekle**;
iPhone Safari’de **Paylaş → Ana Ekrana Ekle** seçeneğini kullan.
Bu depoyu oluşturmak tek başına canlı site yayınlamaz.

## Android APK üretme

Node.js 22+, JDK 21, Android SDK ve Android Studio kurulu bilgisayarda:

```sh
npm install
npm run android:add
npm run android:sync
npm run android:open
```

Android Studio’dan APK oluştur. Bu projede yerel APK derlemesi ve fiziksel telefon testi yapılmadı.
Ayrıntılar `OKU_BENI.txt` dosyasında.

## Doğrulama

Chromium’da 320, 390 ve 768 piksel genişliklerde kontrol edildi.
Eşleşme, yanlış cevapta sıfırlama, bölüm açma, kayıt, arama ve çevrimdışı yeniden yükleme kontrolleri geçti.
3D etkiler SVG/CSS ile sağlanır; gerçek zamanlı 3D motor kullanılmaz.

Orijinal Python/Kivy kaynak kodu `original/` klasöründe korunur.
