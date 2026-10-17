# -*- coding: utf-8 -*-
import os, json, random
from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.gridlayout import GridLayout
from kivy.uix.scrollview import ScrollView
from kivy.uix.button import Button
from kivy.uix.label import Label
from kivy.uix.widget import Widget
from kivy.core.window import Window
from kivy.metrics import dp
from kivy.clock import Clock
from kivy.graphics import Color, Line, RoundedRectangle

WORDS = """cat:kedi;dog:köpek;sun:güneş;moon:ay;water:su;bread:ekmek;house:ev;book:kitap;tree:ağaç;car:araba;mother:anne;father:baba;sister:kız kardeş;brother:erkek kardeş;school:okul;teacher:öğretmen;student:öğrenci;table:masa;chair:sandalye;window:pencere;door:kapı;garden:bahçe;flower:çiçek;bird:kuş;fish:balık;milk:süt;coffee:kahve;tea:çay;apple:elma;orange:portakal;morning:sabah;evening:akşam;night:gece;today:bugün;tomorrow:yarın;yesterday:dün;happy:mutlu;sad:üzgün;big:büyük;small:küçük;fast:hızlı;slow:yavaş;hot:sıcak;cold:soğuk;clean:temiz;dirty:kirli;easy:kolay;difficult:zor;new:yeni;old:eski;red:kırmızı;blue:mavi;green:yeşil;yellow:sarı;black:siyah;white:beyaz;pink:pembe;purple:mor;brown:kahverengi;gray:gri;one:bir;two:iki;three:üç;four:dört;five:beş;six:altı;seven:yedi;eight:sekiz;nine:dokuz;ten:on;head:baş;hand:el;foot:ayak;eye:göz;ear:kulak;nose:burun;mouth:ağız;hair:saç;heart:kalp;face:yüz;city:şehir;village:köy;street:sokak;road:yol;bridge:köprü;river:nehir;sea:deniz;mountain:dağ;forest:orman;island:ada;walk:yürümek;run:koşmak;eat:yemek yemek;drink:içmek;sleep:uyumak;read:okumak;write:yazmak;speak:konuşmak;listen:dinlemek;watch:izlemek;friend:arkadaş;family:aile;child:çocuk;baby:bebek;man:adam;woman:kadın;boy:erkek çocuk;girl:kız çocuk;neighbor:komşu;guest:misafir;work:çalışmak;play:oynamak;learn:öğrenmek;teach:öğretmek;buy:satın almak;sell:satmak;open:açmak;close:kapatmak;start:başlamak;finish:bitirmek;strong:güçlü;weak:zayıf;rich:zengin;poor:fakir;young:genç;beautiful:güzel;ugly:çirkin;heavy:ağır;light:hafif;deep:derin;answer:cevap;question:soru;reason:sebep;result:sonuç;problem:sorun;solution:çözüm;example:örnek;idea:fikir;choice:seçim;decision:karar;journey:yolculuk;ticket:bilet;airport:havalimanı;station:istasyon;hotel:otel;passport:pasaport;luggage:bagaj;map:harita;direction:yön;destination:varış noktası;health:sağlık;illness:hastalık;doctor:doktor;nurse:hemşire;medicine:ilaç;hospital:hastane;pain:ağrı;fever:ateş;cough:öksürük;recovery:iyileşme;knowledge:bilgi;skill:beceri;experience:deneyim;effort:çaba;success:başarı;failure:başarısızlık;opportunity:fırsat;challenge:zorluk;progress:ilerleme;achievement:kazanım;freedom:özgürlük;justice:adalet;responsibility:sorumluluk;respect:saygı;honesty:dürüstlük;courage:cesaret;patience:sabır;trust:güven;wisdom:bilgelik;loyalty:sadakat;economy:ekonomi;industry:sanayi;government:hükümet;society:toplum;culture:kültür;education:eğitim;environment:çevre;technology:teknoloji;research:araştırma;development:gelişim;analyze:analiz etmek;evaluate:değerlendirmek;compare:karşılaştırmak;investigate:araştırmak;interpret:yorumlamak;demonstrate:göstermek;establish:kurmak;maintain:sürdürmek;achieve:başarmak;improve:iyileştirmek;consequence:netice;assumption:varsayım;perspective:bakış açısı;priority:öncelik;strategy:strateji;framework:çerçeve;principle:ilke;concept:kavram;criterion:ölçüt;hypothesis:hipotez;resilience:dayanıklılık;ambiguity:belirsizlik;inequality:eşitsizlik;accountability:hesap verebilirlik;sustainability:sürdürülebilirlik;feasibility:uygulanabilirlik;credibility:güvenilirlik;consistency:tutarlılık;innovation:yenilikçilik;implication:çıkarım
shirt:gömlek;pants:pantolon;shoes:ayakkabılar;coat:palto;dress:elbise;skirt:etek;hat:şapka;socks:çoraplar;belt:kemer;gloves:eldivenler;
kitchen:mutfak;bathroom:banyo;bedroom:yatak odası;living room:oturma odası;roof:çatı;floor:zemin;wall:duvar;ceiling:tavan;stairs:merdivenler;balcony:balkon;
bed:yatak;pillow:yastık;blanket:battaniye;mirror:ayna;lamp:lamba;sofa:kanepe;carpet:halı;drawer:çekmece;cupboard:dolap;shelf:raf;
spoon:kaşık;fork:çatal;knife:bıçak;plate:tabak;bowl:kase;glass:bardak;cup:fincan;pot:tencere;pan:tava;napkin:peçete;
rice:pirinç;cheese:peynir;butter:tereyağı;egg:yumurta;meat:et;chicken:tavuk;potato:patates;tomato:domates;onion:soğan;carrot:havuç;
banana:muz;grape:üzüm;strawberry:çilek;peach:şeftali;pear:armut;lemon:limon;cherry:kiraz;watermelon:karpuz;pineapple:ananas;melon:kavun;
breakfast:kahvaltı;lunch:öğle yemeği;dinner:akşam yemeği;snack:atıştırmalık;sugar:şeker;salt:tuz;pepper:biber;honey:bal;flour:un;oil:yağ;
rain:yağmur;snow:kar;wind:rüzgâr;cloud:bulut;storm:fırtına;thunder:gök gürültüsü;lightning:şimşek;fog:sis;ice:buz;weather:hava durumu;
spring:ilkbahar;summer:yaz;autumn:sonbahar;winter:kış;season:mevsim;week:hafta;month:aylık dönem;year:yıl;hour:saatlik süre;minute:dakika;
Monday:pazartesi;Tuesday:salı;Wednesday:çarşamba;Thursday:perşembe;Friday:cuma;Saturday:cumartesi;Sunday:pazar;weekend:hafta sonu;calendar:takvim;date:tarih;
first:birinci;second:ikinci;third:üçüncü;last:sonuncu;next:sonraki;previous:önceki;early:erken;late:geç;always:her zaman;never:asla;
sometimes:bazen;often:sık sık;usually:genellikle;rarely:nadiren;already:zaten;still:hâlâ;soon:yakında;later:daha sonra;again:tekrar;finally:sonunda;
left:sol;right:sağ;above:yukarıda;below:aşağıda;inside:içeride;outside:dışarıda;behind:arkasında;between:arasında;near:yakın;far:uzak;
bus:otobüs;train:tren;plane:uçak;ship:gemi;bicycle:bisiklet;motorcycle:motosiklet;taxi:taksi;subway:metro;tram:tramvay;truck:kamyon;
engine:motor;wheel:tekerlek;brake:fren;seat:koltuk;driver:sürücü;passenger:yolcu;traffic:trafik;speed:hız;fuel:yakıt;parking:otopark;
shop:dükkân;market:pazar yeri;bank:banka;post office:postane;library:kütüphane;museum:müze;cinema:sinema;theater:tiyatro;restaurant:restoran;bakery:fırın;
police:polis;firefighter:itfaiyeci;lawyer:avukat;engineer:mühendis;farmer:çiftçi;artist:sanatçı;musician:müzisyen;chef:aşçı;dentist:diş hekimi;pilot:pilot;
computer:bilgisayar;phone:telefon;screen:ekran;keyboard:klavye;mouse:fare;printer:yazıcı;camera:kamera;charger:şarj cihazı;battery:pil;headphones:kulaklık;
message:mesaj;email:e-posta;password:şifre;website:internet sitesi;application:uygulama;file:dosya;folder:klasör;download:indirmek;upload:yüklemek;search:aramak;
call:aramak (telefonla);send:göndermek;receive:almak;reply:yanıtlamak;share:paylaşmak;save:kaydetmek;delete:silmek;copy:kopyalamak;paste:yapıştırmak;print:yazdırmak;
stand:ayakta durmak;sit:oturmak;jump:zıplamak;swim:yüzmek;dance:dans etmek;sing:şarkı söylemek;draw:çizmek;paint:boyamak;cook:pişirmek;wash:yıkamak;
cut:kesmek;carry:taşımak;push:itmek;pull:çekmek;throw:fırlatmak;catch:yakalamak;hold:tutmak;drop:düşürmek;lift:kaldırmak;touch:dokunmak;
look:bakmak;see:görmek;hear:duymak;smell:koklamak;taste:tadına bakmak;feel:hissetmek;think:düşünmek;know:bilmek;remember:hatırlamak;forget:unutmak;
love:sevmek;hate:nefret etmek;hope:umut etmek;fear:korkmak;worry:endişelenmek;smile:gülümsemek;laugh:gülmek;cry:ağlamak;shout:bağırmak;whisper:fısıldamak;
ask:sormak;tell:anlatmak;explain:açıklamak;describe:betimlemek;discuss:tartışmak;agree:katılmak;disagree:katılmamak;promise:söz vermek;refuse:reddetmek;accept:kabul etmek;
meet:buluşmak;visit:ziyaret etmek;invite:davet etmek;join:katılmak;leave:ayrılmak;arrive:varmak;return:geri dönmek;follow:takip etmek;lead:önderlik etmek;wait:beklemek;
build:inşa etmek;break:kırmak;repair:onarmak;create:oluşturmak;destroy:yok etmek;change:değiştirmek;replace:yerine koymak;move:hareket etmek;stop:durmak;continue:devam etmek;
find:bulmak;lose:kaybetmek;keep:saklamak;give:vermek;take:almak;bring:getirmek;offer:teklif etmek;borrow:ödünç almak;lend:ödünç vermek;pay:ödemek;
cost:mal olmak;spend:harcamak;earn:kazanmak (para);invest:yatırım yapmak;owe:borçlu olmak;afford:gücü yetmek;charge:ücret almak;refund:geri ödeme;discount:indirim;receipt:fiş;
cheap:ucuz;expensive:pahalı;free:ücretsiz;valuable:değerli;worth:değer;price:fiyat;cash:nakit;coin:madeni para;bill:fatura;budget:bütçe;
empty:boş;full:dolu;wide:geniş;narrow:dar;thick:kalın;thin:ince;soft:yumuşak;hard:sert;rough:pürüzlü;smooth:pürüzsüz;
bright:parlak;dark:karanlık;loud:yüksek sesli;quiet:sessiz;dry:kuru;wet:ıslak;fresh:taze;rotten:çürük;sharp:keskin;blunt:kör (kesici);
kind:nazik;cruel:zalim;polite:kibar;rude:kaba;generous:cömert;selfish:bencil;humble:alçakgönüllü;proud:gururlu;shy:utangaç;confident:özgüvenli;
brave:cesur;calm:sakin;angry:kızgın;jealous:kıskanç;curious:meraklı;honest:dürüst;lazy:tembel;active:hareketli;serious:ciddi;funny:komik;
safe:güvenli;dangerous:tehlikeli;healthy:sağlıklı;sick:hasta;tired:yorgun;hungry:aç;thirsty:susamış;awake:uyanık;asleep:uykuda;alive:hayatta;
body:vücut;neck:boyun;shoulder:omuz;arm:kol;elbow:dirsek;finger:parmak;leg:bacak;knee:diz;ankle:ayak bileği;back:sırt;
brain:beyin;blood:kan;bone:kemik;muscle:kas;skin:deri;stomach:mide;lung:akciğer;liver:karaciğer;kidney:böbrek;throat:boğaz;
symptom:belirti;disease:hastalık (tıbbi);infection:enfeksiyon;injury:yaralanma;treatment:tedavi;appointment:randevu;prescription:reçete;surgery:ameliyat;emergency:acil durum;ambulance:ambulans;
exercise:egzersiz;training:antrenman;competition:yarışma;victory:zafer;defeat:yenilgi;score:skor;team:takım;coach:antrenör;player:oyuncu;referee:hakem;
ball:top;goal:gol;match:karşılaşma;race:yarış;track:pist;field:saha;court:oyun alanı;stadium:stadyum;medal:madalya;champion:şampiyon;
language:dil;grammar:dil bilgisi;vocabulary:kelime hazinesi;sentence:cümle;paragraph:paragraf;chapter:bölüm;lesson:ders;homework:ev ödevi;exam:sınav;grade:not;
subject:konu;topic:başlık;title:başlık (eser);meaning:anlam;definition:tanım;translation:çeviri;pronunciation:telaffuz;accent:aksan;conversation:sohbet;argument:tartışma;
fact:olgu;opinion:görüş;belief:inanç;doubt:şüphe;evidence:kanıt;proof:ispat;mistake:hata;error:yanlışlık;detail:ayrıntı;summary:özet;
plan:plan;project:proje;task:görev;duty:yükümlülük;objective:amaç;target:hedeflenen nokta;deadline:son tarih;schedule:program;meeting:toplantı;report:rapor;
manager:yönetici;employee:çalışan;employer:işveren;colleague:iş arkadaşı;customer:müşteri;client:hizmet alan müşteri;supplier:tedarikçi;owner:sahip;partner:ortak;contract:sözleşme;
salary:maaş;wage:ücret;income:gelir;expense:gider;profit:kâr;loss:zarar;tax:vergi;debt:borç;loan:kredi;interest:faiz;
office:ofis;factory:fabrika;warehouse:depo;branch:şube;headquarters:genel merkez;department:departman;position:pozisyon;career:kariyer;promotion:terfi;retirement:emeklilik;
hire:işe almak;dismiss:işten çıkarmak;resign:istifa etmek;apply:başvurmak;interview:mülakat;recruit:personel almak;supervise:denetlemek;manage:yönetmek;organize:düzenlemek;coordinate:koordine etmek;
approve:onaylamak;reject:geri çevirmek;request:talep etmek;require:gerektirmek;allow:izin vermek;permit:müsaade etmek;prevent:önlemek;prohibit:yasaklamak;oblige:zorunlu kılmak;comply:uymak;
law:kanun;rule:kural;regulation:yönetmelik;policy:politika (kurum);procedure:prosedür;standard:standart;entitlement:hak sahipliği;obligation:yükümlülük;penalty:ceza;violation:ihlal;
tribunal:mahkeme heyeti;judge:hâkim;trial:yargılama;witness:tanık;testimony:tanıklık;claim:iddia;complaint:şikâyet;appeal:temyiz başvurusu;verdict:hüküm;conviction:mahkûmiyet kararı;
citizen:vatandaş;resident:ikamet eden;immigrant:göçmen;refugee:mülteci;border:sınır;visa:vize;permit card:izin kartı;identity:kimlik;nationality:uyruk;citizenship:vatandaşlık;
election:seçim (siyasi);vote:oy;candidate:aday;parliament:parlamento;minister:bakan;president:devlet başkanı;mayor:belediye başkanı;democracy:demokrasi;republic:cumhuriyet;constitution:anayasa;
community:topluluk;population:nüfus;generation:nesil;tradition:gelenek;custom:âdet;heritage:miras;diversity:çeşitlilik;minority:azınlık;majority:çoğunluk;solidarity:dayanışma;
nature:doğa;wildlife:yaban hayatı;habitat:yaşam alanı;species:tür;ecosystem:ekosistem;climate:iklim;pollution:kirlilik;waste:atık;recycling:geri dönüşüm;conservation:koruma;
energy:enerji;electricity:elektrik;solar:güneş enerjili;wind power:rüzgâr enerjisi;coal:kömür;gas:doğal gaz;resource:kaynak;consumption:tüketim;emission:salım;carbon:karbon;
earth:dünya (gezegen);planet:gezegen;star:yıldız;universe:evren;galaxy:galaksi;orbit:yörünge;gravity:yerçekimi;atmosphere:atmosfer;surface:yüzey;temperature:sıcaklık derecesi;
matter:madde;atom:atom;molecule:molekül;element:element;compound:bileşik;mixture:karışım;reaction:tepkime;pressure:basınç;density:yoğunluk;volume:hacim;
measurement:ölçüm;quantity:miktar;quality:kalite;ratio:oran;percentage:yüzde;average:ortalama;total:toplam;difference:fark;increase:artış;decrease:azalış;
calculate:hesaplamak;estimate:tahmin etmek;measure:ölçmek;weigh:tartmak;count:saymak;divide:bölmek;multiply:çarpmak;subtract:çıkarmak;add:toplamak;solve:çözmek;
observe:gözlemlemek;experiment:deney yapmak;test:sınamak;verify:doğrulamak;confirm:teyit etmek;identify:belirlemek;classify:sınıflandırmak;distinguish:ayırt etmek;predict:öngörmek;conclude:sonuca varmak;
method:yöntem;approach:yaklaşım;process:süreç;system:sistem;structure:yapı;function:işlev;component:bileşen;feature:özellik;pattern:örüntü;model:model;
cause:neden olmak;effect:etki;impact:tesir;influence:etkilemek;factor:etken;variable:değişken;condition:koşul;context:bağlam;circumstance:durum;outcome:netice (sonuç);
benefit:fayda;advantage:avantaj;disadvantage:dezavantaj;risk:risk;threat:tehdit;hazard:tehlike;obstacle:engel;barrier:bariyer;limitation:sınırlama;constraint:kısıt;
essential:temel (vazgeçilmez);necessary:gerekli;optional:isteğe bağlı;mandatory:zorunlu;relevant:ilgili;appropriate:uygun;adequate:yeterli;insufficient:yetersiz;effective:etkili;efficient:verimli;
accurate:doğru (hassas);precise:kesin;reliable:güvenilir;valid:geçerli;invalid:geçersiz;correct:doğru;incorrect:yanlış;consistent:tutarlı;stable:istikrarlı;flexible:esnek;
complex:karmaşık;simple:basit;abstract:soyut;concrete:somut;general:genel;specific:belirli;common:yaygın;rare:ender;unique:benzersiz;typical:tipik;
internal:içsel;external:dışsal;local:yerel;global:küresel;domestic:yurt içi;foreign:yabancı;public:kamusal;private:özel;official:resmî;informal:gayriresmî;
individual:bireysel;collective:ortaklaşa;personal:kişisel;professional:mesleki;social:toplumsal;economic:ekonomik;political:siyasi;legal:kanuni;ethical:etik;technical:teknik;
potential:potansiyel;actual:gerçekleşmiş;possible:mümkün;impossible:imkânsız;probable:muhtemel;unlikely:olası olmayan;certain:kesin;uncertain:belirsiz;obvious:açıkça belli;subtle:ince (fark edilmesi zor);
temporary:geçici;permanent:kalıcı;immediate:derhal olan;gradual:kademeli;rapid:hızlı gelişen;constant:sabit;frequent:sık gerçekleşen;occasional:ara sıra olan;annual:yıllık;monthly:aylık;
initial:başlangıçtaki;final:nihai;prior:önceki;subsequent:sonraki;current:mevcut;former:eski (önceki);recent:yakın tarihli;future:gelecekteki;historical:tarihsel;contemporary:çağdaş;
expand:genişletmek;reduce:azaltmak;enhance:geliştirmek;modify:değişiklik yapmak;adjust:ayarlamak;adapt:uyarlamak;transform:dönüştürmek;convert:çevirmek;integrate:bütünleştirmek;separate:ayırmak;
include:içermek;exclude:hariç tutmak;involve:içine almak;contain:barındırmak;consist:oluşmak;comprise:kapsamak;represent:temsil etmek;indicate:işaret etmek;reflect:yansıtmak;imply:ima etmek;
assume:varsaymak;suppose:farz etmek;consider:dikkate almak;recognize:tanımak (fark etmek);realize:farkına varmak;perceive:algılamak;understand:anlamak;comprehend:kavramak;infer:çıkarım yapmak;deduce:sonuç çıkarmak;
assess:değer biçmek;examine:incelemek;inspect:teftiş etmek;review:gözden geçirmek;monitor:izlemek;trace:izini sürmek;audit:denetim yapmak;diagnose:teşhis etmek;detect:tespit etmek;discover:keşfetmek;
implement:uygulamaya koymak;execute:yerine getirmek;conduct:yürütmek;perform:gerçekleştirmek;operate:işletmek;administer:idare etmek;facilitate:kolaylaştırmak;enable:olanak sağlamak;support:desteklemek;assist:yardımcı olmak;
allocate:tahsis etmek;distribute:dağıtmak;assign:atamak;delegate:devretmek;transfer:aktarmak;submit:sunmak;deliver:teslim etmek;provide:sağlamak;obtain:elde etmek;acquire:edinmek"""
PAIRS = [tuple(p.strip().split(':', 1)) for p in WORDS.replace('\n',';').split(';') if p.strip()]
assert len(PAIRS)==1000 and len(set(k.lower() for k,v in PAIRS))==1000

BG=(.055,.085,.15,1)
BLUE=(.13,.33,.59,1)
GOLD=(.95,.69,.21,1)
GREEN=(.15,.59,.43,1)
RED=(.81,.19,.29,1)

class WordGame(App):
    def build(self):
        Window.clearcolor=BG
        self.store=os.path.join(self.user_data_dir,'kelime_ilerleme.json')
        self.unlocked=1
        try:
            with open(self.store,encoding='utf-8') as f:
                self.unlocked=max(1,min(100,int(json.load(f).get('unlocked',1))))
        except (OSError, ValueError, TypeError):
            pass
        self.level=1
        self.main=BoxLayout(orientation='vertical')
        self.show_map()
        return self.main

    def save(self):
        try:
            with open(self.store,'w',encoding='utf-8') as f:
                json.dump({'unlocked':self.unlocked},f)
        except OSError: pass

    def clear(self):
        self.main.clear_widgets()

    def label(self,text,size=19,height=44,color=(1,1,1,1)):
        return Label(text=text,font_size='%ssp'%size,bold=True,color=color,
                     size_hint_y=None,height=dp(height),halign='center',valign='middle')

    def button(self,text,fn,color=BLUE,height=52,size=16):
        b=Button(text=text,font_size='%ssp'%size,bold=True,
                 size_hint_y=None,height=dp(height),background_normal='',
                 background_color=color)
        b.bind(on_release=lambda _b:fn())
        return b

    def show_map(self,*args):
        self.clear()
        self.main.add_widget(self.label('KELIME YOLCULUGU',23,58,GOLD))
        self.main.add_widget(self.label('100 LEVEL  |  1000 KELIME',15,32))
        self.main.add_widget(self.label('Acilan level: %d / 100'%self.unlocked,15,34))
        scroll=ScrollView(do_scroll_x=False)
        path=GridLayout(cols=3,spacing=dp(9),padding=[dp(16),dp(12),dp(16),dp(20)],
                        size_hint_y=None,row_default_height=dp(74),row_force_default=True)
        path.bind(minimum_height=path.setter('height'))
        # Six-corner style: each level is a hexagonal milestone along a winding route.
        for n in range(1,101):
            offset=(n-1)%6
            col=[0,1,2,2,1,0][offset]
            for c in range(3):
                if c!=col:
                    path.add_widget(Widget())
                    continue
                open_level=n<=self.unlocked
                done=n<self.unlocked
                text=('✓\n' if done else ('🔒\n' if not open_level else '★\n'))+str(n)
                b=Button(text=text,font_size='18sp',bold=True,
                         background_normal='',background_color=(GREEN if done else GOLD if open_level else (.19,.23,.32,1)),
                         color=(.06,.10,.16,1) if open_level else (.65,.67,.72,1))
                if open_level:
                    b.bind(on_release=lambda _b,level=n:self.start(level))
                else:
                    b.disabled=True
                path.add_widget(b)
        scroll.add_widget(path)
        self.main.add_widget(scroll)
        self.main.add_widget(self.button('DEVAM ET  -  LEVEL %d'%self.unlocked,
                                         lambda:self.start(self.unlocked),GREEN,56))

    def start(self,level):
        self.level=level
        self.selected=None
        self.matched=0
        self.blocked=False
        self.answers=dict(PAIRS[(level-1)*10:level*10])
        english=list(self.answers.keys())
        turkish=list(self.answers.values())
        random.shuffle(english)
        random.shuffle(turkish)
        self.clear()
        head=BoxLayout(size_hint_y=None,height=dp(48),spacing=dp(6),padding=dp(4))
        head.add_widget(self.button('‹ HARITA',self.show_map,BLUE,46,13))
        head.add_widget(self.label('LEVEL %d / 100'%level,19,46,GOLD))
        self.main.add_widget(head)
        self.status=self.label('DOGRU 0 / 10   |   HATA HAKKI 0',14,42)
        self.main.add_widget(self.status)
        self.main.add_widget(self.label('INGILIZCE                     TURKCE',13,28))
        board=GridLayout(cols=2,spacing=dp(5),padding=dp(5))
        self.main.add_widget(board)
        self.buttons=[]
        for i in range(10):
            for side,word in [('en',english[i]),('tr',turkish[i])]:
                b=Button(text=word,font_size='14sp',background_normal='',
                         background_color=BLUE,halign='center',valign='middle')
                b.text_size=(None,None)
                b.bind(size=lambda w,sz: setattr(w,'text_size',(max(10,sz[0]-dp(10)),sz[1])))
                b.bind(on_release=lambda btn,s=side,w=word:self.choose(s,w,btn))
                board.add_widget(b)
                self.buttons.append(b)

    def choose(self,side,word,button):
        if self.blocked or button.disabled: return
        if self.selected is None:
            self.selected=(side,word,button)
            button.background_color=GOLD
            return
        old_side,old_word,old_button=self.selected
        if old_button is button:
            button.background_color=BLUE
            self.selected=None
            return
        if old_side==side:
            old_button.background_color=BLUE
            button.background_color=GOLD
            self.selected=(side,word,button)
            return
        self.selected=None
        en=word if side=='en' else old_word
        tr=word if side=='tr' else old_word
        if self.answers.get(en)==tr:
            for b in (button,old_button):
                b.disabled=True
                b.text=''
                b.opacity=0
            self.matched+=1
            self.status.text='DOGRU %d / 10   |   HATA HAKKI 0'%self.matched
            if self.matched==10:
                self.blocked=True
                if self.level==self.unlocked and self.unlocked<100:
                    self.unlocked+=1
                    self.save()
                Clock.schedule_once(lambda dt:self.celebrate(),.35)
        else:
            self.blocked=True
            button.background_color=RED
            old_button.background_color=RED
            self.status.text='YANLIS!  LEVEL BASTAN BASLIYOR'
            Clock.schedule_once(lambda dt:self.start(self.level),1.1)

    def celebrate(self):
        self.clear()
        self.main.add_widget(Widget())
        self.main.add_widget(self.label('★  TEBRIKLER!  ★',29,76,GOLD))
        self.main.add_widget(self.label('LEVEL %d TAMAMLANDI'%self.level,21,56))
        self.main.add_widget(self.label('10 / 10 DOGRU ESLESTIRME',17,52,GREEN))
        self.main.add_widget(self.label('Toplam %d kelimeyi gectin!'%(self.level*10),17,52))
        self.main.add_widget(Widget())
        if self.level<100:
            self.main.add_widget(self.button('SONRAKI LEVEL  →',lambda:self.start(self.level+1),GREEN,62,18))
        else:
            self.main.add_widget(self.label('1000 KELIME TAMAMLANDI!',20,70,GOLD))
        self.main.add_widget(self.button('LEVEL HARITASI',self.show_map,BLUE,54))
        self.main.add_widget(Widget())

if __name__=='__main__':
    WordGame().run()
