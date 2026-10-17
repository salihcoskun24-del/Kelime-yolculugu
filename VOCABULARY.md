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

- `www/words.js`: orijinal İngilizce bankası.
- `www/vocabularies.js`: beş yeni dilin sabit bankaları.
- `kelime-listeleri/`: her dil için 1.000 satırlık, bölüm ve aşama içeren UTF-8 CSV.
- `npm run check`: her dilde tam 1.000 kayıt, tekrar etmeyen kaynak metinler,
  bölüm içinde ayırt edilebilir Türkçe kartlar, yerel alfabeler ve JS sözdizimi.
- `npm run vocabulary:export`: CSV dosyalarını mevcut bankalardan yeniden üretir.

Üretim uygulaması çeviri API'sine istek göndermez; listeler pakete gömülüdür.
Yayınlanmış bir dilin kayıtlarını veya bölüm sırasını değiştirirken kaydedilmiş
oturum ve tamamlanmış bölüm verileri için bir geçiş tasarlanmalıdır.

## Bölüm sonu cümleleri

`www/sentences.js`, her dilde 100 bölüm için üçer soru (toplam 1.800) içerir.
Her sorunun `wordIndex` değeri o bölümdeki on kelimeden birine işaret eder.
Sorular farklı üç kelimeye aittir. `answer` cümlede gereken çekimli biçim olabilir.
Her cümlede tek boşluk, Türkçe anlam ve o bölümün sorularından üç farklı seçenek vardır.
Türkçe anlam, birden çok kelimenin dil bilgisi bakımından uyabildiği durumlarda hedefi açıklar.

`scripts/sentence-source.json` özgün İngilizce bağlam cümlelerini ve Türkçe anlamlarını
saklar. Diğer diller için otomatik çeviri taslakları kullanıldı; kayıp işaretler,
çevrilmeden kalan cümleler ve aynı biçimde görünen seçenekler düzeltildi.
Almanca ayrılabilen eylemlerde boşluk eylemin çekimli bölümünü kapsayabilir.
Tüm cümleler ana dili konuşan bir editör tarafından doğrulanmış değildir.
CSV listeleri `cumle-sorulari/` içindedir. `npm run sentences:export` bunları üretir.
Veri kontrolü 100 bölüm, üç ayrı hedef kelime, tek boşluk ve ayrı seçenekleri denetler.
