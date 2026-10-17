# Kelime Yolculuğu

Altı dilde 100'er bölüm ve 1.000'er kelime içeren, telefona eklenebilen eşleştirme oyunu.
İngilizce, Almanca, İspanyolca, Rusça, Arapça ve Fransızca kelimeleri Türkçeleriyle eşleştir.

**[Uygulamayı ZIP olarak indir](https://github.com/salihcoskun24-del/Kelime-yolculugu/raw/refs/heads/main/Kelime_Yolculugu_Mobil.zip)**

Paket hazır APK değildir; PWA ve Android APK üretmek için Capacitor ayarları içerir.

## Yenilikler

- Açılışta altı dilden birini seç; ana ekrandaki dil düğmesinden değiştir.
- Her dilin bölüm ilerlemesi, devam eden eşleşmeleri ve yardımcı hakları ayrı saklanır.
- Yeni beş dilde kolaydan zora 1.000'er kayıt; sıralı listeler `kelime-listeleri/` klasöründe.
- Kelimeye dokununca o dilin sesiyle telaffuz; Arapça kartlarda sağdan sola metin.
- Bölümlerin altında **Kaldığım yere gel** ve **İpucu** düğmeleri.
- Her dilde her yardımcı için bir defalık **5 hak**.
- Eski İngilizce ilerlemesi otomatik taşınır; İngilizce bölüm sırası korunur.
- 3D görünümlü ada, animasyonlar, kutlama, sesler, kelime defteri ve tüm diller için yedekleme.

## Yardımcılar

**Kaldığım yere gel:** Haritayı aktif bölüme kaydırır. Eski bir bölüm oynuyorsan
kayıtlı aktif bölümüne ve eşleşmelerine döndürür. Zaten oradaysan hak harcamaz.
Ana ekrandaki normal devam düğmesi ve bölüm seçmek ücretsizdir.

**İpucu:** Oynanan bölümde doğru bir çifti 5 saniye işaretler. Bölüm haritasından
kullanılırsa aktif bölümü açıp orada ipucu verir. Otomatik puan kazandırmaz.
İpucu görünürken tekrar basmak ikinci hak harcamaz.

Haklar bölüm geçişinde, sayfa yenilemede veya ilerleme sıfırlamada yenilenmez.
Bakiye sıfır olunca düğme pasif olur. Reklam izleme veya ödül verme henüz eklenmedi.
Bakiyeler dil başına `progress[language].jump` ve `.hint` alanlarında yerel saklanır.
İleride ödüllü reklam eklendiğinde hak verme işlemi gerçek reklam tamamlama
sonucuna bağlanmalı; bu yerel kayıt bir reklam doğrulama sistemi değildir.

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
npm run build
python -m http.server 8080 --directory dist
```

## Telefonuna ekle

Vercel'in HTTPS adresini aç. Android Chrome: **Menü → Uygulamayı yükle / Ana ekrana ekle**.
iPhone Safari: **Paylaş → Ana Ekrana Ekle**.
İlk açılışta tüm dillerin uygulama dosyaları önbelleğe alınır; sonrasında oyun çevrimdışı çalışır.
Telaffuzun çalışması ve çevrimdışı ses desteği, cihazdaki ilgili dilin ses paketine bağlıdır.
Yeni sürüm dağıtıldıktan sonra açık uygulamayı yeniden yükle; eski sürüm görünüyorsa kapatıp tekrar aç.

## Kayıt ve yedek

Ayarlar'dan tüm dillerin ilerlemesini, devam eden bölümünü ve yardımcı haklarını JSON olarak yedekle.
Eski İngilizce yedekleri de içe aktarılabilir; diğer diller korunur.
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
