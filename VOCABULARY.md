# Kelime listeleri

İngilizce, Almanca, İspanyolca, Rusça, Arapça ve Fransızcada 1.000'er sözlük kaydı bulunur.
Her dil 100 bölümdür; bir bölüm 10 kelime veya kısa ifadedir. Karşılıklar Türkçedir.

## Sıralama

Beş yeni dilin sırası aynı kavram planını izler: sayılar, renkler, aile ve günlük nesneler;
ev ve yiyecekler; temel eylemler; insanlar ve duygular; şehir ve seyahat; öğrenme ve iş;
sağlık, toplum ve dünya; bilim ve yöntem; soyut kavramlar; ileri eylemler ve kavramlar.
Başlangıç 1–30, orta 31–60, ileri 61–85 ve ustalık 86–100 bölümleridir.
Bu, uygulama için hazırlanmış öğrenme sıralamasıdır; resmî CEFR derecelendirmesi değildir.

İngilizce eski kullanıcı kayıtlarıyla uyum için orijinal bölüm sırasını korur.
Yeni beş dilde aynı 1.000 temel kavram yeniden sıralanmıştır.

## Veri hazırlığı

Kavram temeli, kullanıcının sağladığı Python dosyasındaki 1.000 İngilizce–Türkçe çifttir.
Beş dildeki çeviri taslakları otomatik metin çevirisiyle oluşturuldu; eş seslilik,
sözcük türü ve konu bağlamı hataları üzerinde dil bazında düzeltmeler yapıldı.
Örneğin yaz/mevsim, ateş/hastalık, fiş/alışveriş, fare/bilgisayar, kol/uzuv,
madde/kimya ve çarpmak/matematik ayrıldı. Bazı yakın anlamlı maddelerde
Türkçe karşılık açıklığa kavuşturuldu. Ana dili konuşan bir editör tarafından
tüm kayıtların doğrulaması yapılmadı.

Almanca adlar büyük harflidir; seçili eş seslilerde artikel kullanılır.
Arapça eylemlerde çoğunlukla üçüncü tekil şahıs geniş zaman biçimi kullanılır;
Arapçada İngilizcedeki gibi bağımsız mastar biçimi varsayılmaz.
Rusça ve diğer dillerde Latin harfli okunuş yerine yerel alfabe kullanılır.
Telaffuz, cihazın seçilen dil için sağladığı metin okuma sesini kullanır.

## Dosyalar ve doğrulama

WordTrail 4 kaynakları aynı adlardaki `kelime-listeleri/` ve `cumle-sorulari/` CSV dosyalarıdır.
Her kayıtta sabit bölüm:sıra kimliği ve tr/en/de/es/ru/ar/fr çeviri kolonları vardır.
Bütün ana dillerin kelime ve cümle anlamları doludur; 36 çiftin tamamı açıktır.
`conceptId` ortak kavramı tanımlar; farklı bölüm sıraları satır numarasıyla birleştirilmez.
Cümle anlamları, 300 ortak bağlamın ilgili dildeki tam cümlesinden alınır.
`scripts/data.cjs` kaynakları `translations` nesneli modele okur.
`npm run vocabulary:export` ve `npm run sentences:export` eksiksiz çiftlerin JSON dosyalarını üretir.
`npm run check` bütün çiftlerdeki eksik kelime/cümle çevirisi sayısını raporlar;
10 kartlık bölümde her ana dilin dolu anlamlarının eşsizliğini ayrı doğrular.
Eksik çift hiçbir zaman Türkçe anlamlara dönerek açılmaz.

Eski `www/words.js`, `vocabularies.js`, `sentences.js` dosyaları tarihsel kaynak olarak
korunur; üretim web çıktısında veya runtime yükleme listesinde bulunmaz.
Uygulama yalnızca seçilen çiftin JSON dosyasını indirir; ziyaret edilen çiftler çevrimdışı saklanır.
Kaynak CSV kimliklerini ve yayımlanmış bölüm sırasını değiştirme; mevcut kayıtlar bunları kullanır.
Arayüzdeki yeni yedi dil çevirilerini ana dilini konuşan biri kontrol etsin.

`npm run translations:complete` kalıcı kavram kimlikleri ve cümle bağlamları üzerinden
çevirileri yeniden oluşturur. Önceki 6.000 kaynak kelime/Türkçe karşılık ve 1.800
sorunun metni, cevabı ve kelime kimliği aynı kalır. `npm test` bu korumayı ve tüm
çiftlerin karşılıklı anlam uyumunu doğrular.
