// Three fixed, contextual fill-in-the-blank exercises per level and language.
const SENTENCES = {
  "es": [
    [
      {
        "wordIndex": 0,
        "text": "El ___ está durmiendo en la silla.",
        "answer": "gato",
        "translation": "Kedi sandalyede uyuyor."
      },
      {
        "wordIndex": 2,
        "text": "El ___ nos da luz y calor.",
        "answer": "sol",
        "translation": "Güneş bize ışık ve sıcaklık verir."
      },
      {
        "wordIndex": 7,
        "text": "Leo un ___ antes de acostarme.",
        "answer": "libro",
        "translation": "Yatmadan önce bir kitap okurum."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Mi ___ hace una sopa deliciosa.",
        "answer": "madre",
        "translation": "Annem lezzetli çorba yapar."
      },
      {
        "wordIndex": 4,
        "text": "Los niños van a la ___ todas las mañanas.",
        "answer": "escuela",
        "translation": "Çocuklar her sabah okula gider."
      },
      {
        "wordIndex": 9,
        "text": "Abre la ___ para tomar un poco de aire fresco.",
        "answer": "ventana",
        "translation": "Biraz temiz hava için lütfen pencereyi aç."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Esta ___ huele maravilloso.",
        "answer": "flor",
        "translation": "Bu çiçek harika kokuyor."
      },
      {
        "wordIndex": 5,
        "text": "Tomo un vaso de ___ con el desayuno.",
        "answer": "leche",
        "translation": "Kahvaltıda bir bardak süt içerim."
      },
      {
        "wordIndex": 8,
        "text": "Pone una ___ roja en su bolso.",
        "answer": "manzana",
        "translation": "Çantasına kırmızı bir elma koyar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Hay ___ vela en el pastel.",
        "answer": "una",
        "translation": "Pastanın üzerinde bir mum var."
      },
      {
        "wordIndex": 2,
        "text": "Un triángulo tiene ___ lados.",
        "answer": "tres",
        "translation": "Bir üçgenin üç kenarı vardır."
      },
      {
        "wordIndex": 9,
        "text": "Tengo ___ dedos.",
        "answer": "diez",
        "translation": "On parmağım var."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "La señal de alto es ___.",
        "answer": "roja",
        "translation": "Dur işareti kırmızıdır."
      },
      {
        "wordIndex": 1,
        "text": "El cielo está ___ hoy.",
        "answer": "azul",
        "translation": "Bugün gökyüzü mavidir."
      },
      {
        "wordIndex": 2,
        "text": "Las hojas son ___ en primavera.",
        "answer": "verdes",
        "translation": "Yapraklar ilkbaharda yeşildir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Mi mejor ___ vive al lado.",
        "answer": "amigo",
        "translation": "En iyi arkadaşım yan evde yaşar."
      },
      {
        "wordIndex": 1,
        "text": "Cenamos juntos en ___.",
        "answer": "familia",
        "translation": "Aile olarak birlikte akşam yemeği yeriz."
      },
      {
        "wordIndex": 3,
        "text": "El ___ aún no puede caminar.",
        "answer": "bebé",
        "translation": "Bebek henüz yürüyemiyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Utilice un casco para proteger su ___.",
        "answer": "cabeza",
        "translation": "Başını korumak için kask tak."
      },
      {
        "wordIndex": 3,
        "text": "Un pedacito de polvo se me metió en el ___.",
        "answer": "ojo",
        "translation": "Gözüme küçük bir toz kaçtı."
      },
      {
        "wordIndex": 8,
        "text": "El ejercicio es bueno para tu ___.",
        "answer": "corazón",
        "translation": "Egzersiz kalbin için iyidir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Desayunamos por ___.",
        "answer": "la mañana",
        "translation": "Sabah kahvaltı yaparız."
      },
      {
        "wordIndex": 4,
        "text": "Visitaremos a nuestros abuelos ___.",
        "answer": "mañana",
        "translation": "Yarın büyükanne ve büyükbabamızı ziyaret edeceğiz."
      },
      {
        "wordIndex": 6,
        "text": "Me siento ___ cuando veo a mis amigos.",
        "answer": "feliz",
        "translation": "Arkadaşlarımı görünce mutlu hissederim."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Ten cuidado; la sopa está ___.",
        "answer": "caliente",
        "translation": "Dikkat et; çorba sıcak."
      },
      {
        "wordIndex": 4,
        "text": "Por favor mantenga su habitación ___.",
        "answer": "limpia",
        "translation": "Lütfen odanı temiz tut."
      },
      {
        "wordIndex": 8,
        "text": "Compré un teléfono ___ ayer.",
        "answer": "nuevo",
        "translation": "Dün yeni bir telefon aldım."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Me gusta ___ por el parque.",
        "answer": "caminar",
        "translation": "Parkta yürümeyi severim."
      },
      {
        "wordIndex": 5,
        "text": "___ un cuento todas las noches.",
        "answer": "Leemos",
        "translation": "Her akşam bir hikâye okuruz."
      },
      {
        "wordIndex": 4,
        "text": "Los bebés necesitan ___ mucho.",
        "answer": "dormir",
        "translation": "Bebeklerin çok uyuması gerekir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Lleva una ___ blanca para trabajar.",
        "answer": "camisa",
        "translation": "İşe beyaz bir gömlek giyer."
      },
      {
        "wordIndex": 3,
        "text": "Toma tu ___; hace frío afuera.",
        "answer": "abrigo",
        "translation": "Paltonu al; dışarısı soğuk."
      },
      {
        "wordIndex": 6,
        "text": "Lleva un ___ para protegerse del sol.",
        "answer": "sombrero",
        "translation": "Güneşten korunmak için şapka takar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Cocinamos nuestras comidas en la ___.",
        "answer": "cocina",
        "translation": "Yemeklerimizi mutfakta pişiririz."
      },
      {
        "wordIndex": 4,
        "text": "La lluvia cae sobre el ___.",
        "answer": "techo",
        "translation": "Yağmur çatıya düşüyor."
      },
      {
        "wordIndex": 9,
        "text": "Cultivamos flores en el ___.",
        "answer": "balcón",
        "translation": "Balkonda çiçek yetiştiririz."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Apoyé la cabeza en la suave ___.",
        "answer": "almohada",
        "translation": "Başımı yumuşak yastığa koyarım."
      },
      {
        "wordIndex": 3,
        "text": "Se mira en el ___ antes de irse.",
        "answer": "espejo",
        "translation": "Çıkmadan önce aynaya bakar."
      },
      {
        "wordIndex": 9,
        "text": "Pon el libro en el ___.",
        "answer": "estante",
        "translation": "Kitabı rafa koy."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Como sopa con ___.",
        "answer": "cuchara",
        "translation": "Çorbayı kaşıkla içerim."
      },
      {
        "wordIndex": 2,
        "text": "Usa un ___ para cortar el pan.",
        "answer": "cuchillo",
        "translation": "Ekmeği kesmek için bıçak kullan."
      },
      {
        "wordIndex": 3,
        "text": "Hay un sándwich en el ___.",
        "answer": "plato",
        "translation": "Tabakta bir sandviç var."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Me gusta el ___ en mi sándwich.",
        "answer": "queso",
        "translation": "Sandviçimde peynir severim."
      },
      {
        "wordIndex": 3,
        "text": "La gallina puso un ___.",
        "answer": "huevo",
        "translation": "Tavuk bir yumurta yumurtladı."
      },
      {
        "wordIndex": 9,
        "text": "El conejo está comiendo una ___.",
        "answer": "zanahoria",
        "translation": "Tavşan bir havuç yiyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Un ___ maduro tiene la piel amarilla.",
        "answer": "plátano",
        "translation": "Olgun bir muzun kabuğu sarıdır."
      },
      {
        "wordIndex": 5,
        "text": "Añade un poco de ___ a tu té.",
        "answer": "limón",
        "translation": "Çayına biraz limon ekle."
      },
      {
        "wordIndex": 7,
        "text": "En verano comemos ___ fría.",
        "answer": "sandía",
        "translation": "Yazın soğuk karpuz yeriz."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Tomamos el ___ antes de ir a la escuela.",
        "answer": "desayuno",
        "translation": "Okula gitmeden önce kahvaltı yaparız."
      },
      {
        "wordIndex": 5,
        "text": "Esta sopa necesita un poco de ___.",
        "answer": "sal",
        "translation": "Bu çorbanın biraz tuza ihtiyacı var."
      },
      {
        "wordIndex": 7,
        "text": "Las abejas producen ___.",
        "answer": "miel",
        "translation": "Arılar bal üretir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Nadamos en el mar durante el ___.",
        "answer": "verano",
        "translation": "Yaz boyunca denizde yüzeriz."
      },
      {
        "wordIndex": 3,
        "text": "Suele hacer frío en ___.",
        "answer": "invierno",
        "translation": "Kışın hava genellikle soğuktur."
      },
      {
        "wordIndex": 7,
        "text": "Un ___ tiene doce meses.",
        "answer": "año",
        "translation": "Bir yılda on iki ay vardır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "La semana laboral comienza el ___.",
        "answer": "lunes",
        "translation": "Çalışma haftası pazartesi başlar."
      },
      {
        "wordIndex": 6,
        "text": "Normalmente descansamos el ___.",
        "answer": "domingo",
        "translation": "Genellikle pazar günü dinleniriz."
      },
      {
        "wordIndex": 8,
        "text": "Marque la fecha de la reunión en el ___.",
        "answer": "calendario",
        "translation": "Toplantı tarihini takvimde işaretle."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Llevamos un paraguas debido a la ___.",
        "answer": "lluvia",
        "translation": "Yağmur nedeniyle şemsiye aldık."
      },
      {
        "wordIndex": 1,
        "text": "Las montañas están cubiertas de ___ blanca.",
        "answer": "nieve",
        "translation": "Dağlar beyaz karla kaplı."
      },
      {
        "wordIndex": 2,
        "text": "El fuerte ___ movía las ramas.",
        "answer": "viento",
        "translation": "Güçlü rüzgâr dalları hareket ettirdi."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Quiero ___ un nuevo idioma.",
        "answer": "aprender",
        "translation": "Yeni bir dil öğrenmek istiyorum."
      },
      {
        "wordIndex": 4,
        "text": "Necesitamos ___ algo de pan.",
        "answer": "comprar",
        "translation": "Biraz ekmek satın almamız gerekiyor."
      },
      {
        "wordIndex": 6,
        "text": "Por favor, ___ la puerta.",
        "answer": "abre",
        "translation": "Lütfen kapıyı aç."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "Los peces pueden ___ en el agua.",
        "answer": "nadar",
        "translation": "Balıklar suda yüzebilir."
      },
      {
        "wordIndex": 5,
        "text": "Nos gusta ___ juntos.",
        "answer": "cantar",
        "translation": "Birlikte şarkı söylemeyi severiz."
      },
      {
        "wordIndex": 8,
        "text": "Quiero ___ la cena esta noche.",
        "answer": "cocinar",
        "translation": "Bu akşam yemek pişirmek istiyorum."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Por favor, ___ la manzana por la mitad.",
        "answer": "corta",
        "translation": "Lütfen elmayı ikiye kes."
      },
      {
        "wordIndex": 4,
        "text": "No ___ basura al suelo.",
        "answer": "tirar",
        "translation": "Yere çöp atma."
      },
      {
        "wordIndex": 9,
        "text": "No ___ la sartén caliente.",
        "answer": "toque",
        "translation": "Sıcak tavaya dokunma."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "¿Puedes ___ los pájaros afuera?",
        "answer": "oír",
        "translation": "Dışarıdaki kuşları duyabiliyor musun?"
      },
      {
        "wordIndex": 8,
        "text": "Puedo ___ tu nombre.",
        "answer": "recordar",
        "translation": "Adını hatırlayabiliyorum."
      },
      {
        "wordIndex": 6,
        "text": "Por favor, ___ antes de responder.",
        "answer": "piensa",
        "translation": "Lütfen cevaplamadan önce düşün."
      }
    ],
    [
      {
        "wordIndex": 5,
        "text": "Una palabra amable puede hacer ___.",
        "answer": "sonreír",
        "translation": "Nazik bir söz birini gülümsetebilir."
      },
      {
        "wordIndex": 7,
        "text": "Es normal ___ cuando te sientes triste.",
        "answer": "llorar",
        "translation": "Üzgün hissedince ağlamak normaldir."
      },
      {
        "wordIndex": 9,
        "text": "Por favor ___; el bebé está durmiendo.",
        "answer": "susurra",
        "translation": "Lütfen fısılda; bebek uyuyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Puedes ___ ayuda al profesor.",
        "answer": "pedir",
        "translation": "Öğretmenden yardım isteyebilirsin."
      },
      {
        "wordIndex": 2,
        "text": "¿Puedes ___ la regla?",
        "answer": "explicarme",
        "translation": "Kuralı bana açıklayabilir misin?"
      },
      {
        "wordIndex": 7,
        "text": "No ___ algo que no pueda hacer.",
        "answer": "prometa",
        "translation": "Yapamayacağın bir şey için söz verme."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "___ a nuestros vecinos a cenar.",
        "answer": "Invitaremos",
        "translation": "Komşularımızı akşam yemeğine davet edeceğiz."
      },
      {
        "wordIndex": 5,
        "text": "Por favor ___ antes de las ocho en punto.",
        "answer": "llegue",
        "translation": "Lütfen saat sekizden önce var."
      },
      {
        "wordIndex": 9,
        "text": "Por favor, ___ aquí un momento.",
        "answer": "espera",
        "translation": "Lütfen burada bir dakika bekle."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Planean ___ una nueva escuela.",
        "answer": "construir",
        "translation": "Yeni bir okul inşa etmeyi planlıyorlar."
      },
      {
        "wordIndex": 2,
        "text": "¿Puedes ___ mi bicicleta?",
        "answer": "reparar",
        "translation": "Bisikletimi onarabilir misin?"
      },
      {
        "wordIndex": 9,
        "text": "Podemos ___ después de un breve descanso.",
        "answer": "continuar",
        "translation": "Kısa bir aradan sonra devam edebiliriz."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "No puedo ___ mis llaves.",
        "answer": "encontrar",
        "translation": "Anahtarlarımı bulamıyorum."
      },
      {
        "wordIndex": 7,
        "text": "¿Puedo ___ tu bolígrafo?",
        "answer": "tomar prestado",
        "translation": "Kalemini ödünç alabilir miyim?"
      },
      {
        "wordIndex": 9,
        "text": "Puedes ___ con tarjeta.",
        "answer": "pagar",
        "translation": "Kartla ödeyebilirsin."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Por favor ___ un mensaje.",
        "answer": "envíame",
        "translation": "Lütfen bana bir mesaj gönder."
      },
      {
        "wordIndex": 5,
        "text": "Recuerda ___ tu trabajo.",
        "answer": "guardar",
        "translation": "Çalışmanı kaydetmeyi unutma."
      },
      {
        "wordIndex": 9,
        "text": "¿Puedes ___ este documento?",
        "answer": "imprimir",
        "translation": "Bu belgeyi yazdırabilir misin?"
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Un león es un animal ___.",
        "answer": "fuerte",
        "translation": "Aslan güçlü bir hayvandır."
      },
      {
        "wordIndex": 4,
        "text": "El árbol ___ necesita agua.",
        "answer": "joven",
        "translation": "Genç ağacın suya ihtiyacı var."
      },
      {
        "wordIndex": 7,
        "text": "Esta maleta es demasiado ___ para mí.",
        "answer": "pesada",
        "translation": "Bu bavul benim için çok ağır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "La botella está ___; por favor llénelo.",
        "answer": "vacía",
        "translation": "Şişe boş; lütfen doldur."
      },
      {
        "wordIndex": 6,
        "text": "Esta manta se siente muy ___.",
        "answer": "suave",
        "translation": "Bu battaniye çok yumuşak hissettiriyor."
      },
      {
        "wordIndex": 2,
        "text": "El río es demasiado ___ para cruzarlo por aquí.",
        "answer": "ancho",
        "translation": "Nehir buradan geçmek için çok geniş."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "Por favor, haga ___ en la biblioteca.",
        "answer": "silencio",
        "translation": "Lütfen kütüphanede sessiz ol."
      },
      {
        "wordIndex": 5,
        "text": "Mis zapatos están ___ por la lluvia.",
        "answer": "mojados",
        "translation": "Ayakkabılarım yağmurdan ıslak."
      },
      {
        "wordIndex": 8,
        "text": "Ten cuidado con ese cuchillo ___.",
        "answer": "afilado",
        "translation": "O keskin bıçağa dikkat et."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Nuestro maestro siempre es ___ con nosotros.",
        "answer": "amable",
        "translation": "Öğretmenimiz bize her zaman naziktir."
      },
      {
        "wordIndex": 4,
        "text": "Es ___ y comparte lo que tiene.",
        "answer": "generoso",
        "translation": "O cömerttir ve sahip olduklarını paylaşır."
      },
      {
        "wordIndex": 8,
        "text": "El niño ___ habló en voz muy baja.",
        "answer": "tímido",
        "translation": "Utangaç çocuk çok yumuşak bir sesle konuştu."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "El ___ bombero rescató al niño.",
        "answer": "valiente",
        "translation": "Cesur itfaiyeci çocuğu kurtardı."
      },
      {
        "wordIndex": 4,
        "text": "El estudiante ___ hizo muchas preguntas.",
        "answer": "curioso",
        "translation": "Meraklı öğrenci birçok soru sordu."
      },
      {
        "wordIndex": 5,
        "text": "Una persona ___ dice la verdad.",
        "answer": "honesta",
        "translation": "Dürüst bir insan doğruyu söyler."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Comer verduras te ayuda a mantenerte ___.",
        "answer": "saludable",
        "translation": "Sebze yemek sağlıklı kalmana yardımcı olur."
      },
      {
        "wordIndex": 4,
        "text": "Me siento ___ después del largo viaje.",
        "answer": "cansado",
        "translation": "Uzun yolculuktan sonra yorgun hissediyorum."
      },
      {
        "wordIndex": 6,
        "text": "Después de correr, tengo mucha ___.",
        "answer": "sed",
        "translation": "Koştuktan sonra çok susamış olurum."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Llevaba el bolso al ___.",
        "answer": "hombro",
        "translation": "Çantayı omzunda taşıdı."
      },
      {
        "wordIndex": 5,
        "text": "Llevaba un anillo en el ___.",
        "answer": "dedo",
        "translation": "Parmağına bir yüzük taktı."
      },
      {
        "wordIndex": 7,
        "text": "Me lastimé la ___ cuando me caí.",
        "answer": "rodilla",
        "translation": "Düştüğümde dizimi incittim."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Ella quedó ___ en la carrera.",
        "answer": "primera",
        "translation": "Yarışta birinci geldi."
      },
      {
        "wordIndex": 6,
        "text": "Llegamos ___ para conseguir buenos asientos.",
        "answer": "temprano",
        "translation": "İyi koltuklar bulmak için erken geldik."
      },
      {
        "wordIndex": 9,
        "text": "___ olvido el cumpleaños de mi madre.",
        "answer": "Nunca",
        "translation": "Annemin doğum gününü asla unutmam."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "___ camino al trabajo.",
        "answer": "A veces",
        "translation": "Bazen işe yürürüm."
      },
      {
        "wordIndex": 6,
        "text": "El autobús llegará ___.",
        "answer": "pronto",
        "translation": "Otobüs yakında gelecek."
      },
      {
        "wordIndex": 8,
        "text": "Por favor lea la frase ___.",
        "answer": "otra vez",
        "translation": "Lütfen cümleyi tekrar oku."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Gire a la ___ en la siguiente calle.",
        "answer": "izquierda",
        "translation": "Bir sonraki sokakta sola dön."
      },
      {
        "wordIndex": 7,
        "text": "El banco está ___ la escuela y el parque.",
        "answer": "entre",
        "translation": "Banka okul ile parkın arasındadır."
      },
      {
        "wordIndex": 9,
        "text": "El aeropuerto está ___ del centro de la ciudad.",
        "answer": "lejos",
        "translation": "Havalimanı şehir merkezinden uzaktır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Mucha gente vive en esta gran ___.",
        "answer": "ciudad",
        "translation": "Bu büyük şehirde birçok insan yaşar."
      },
      {
        "wordIndex": 4,
        "text": "El viejo ___ cruza el río.",
        "answer": "puente",
        "translation": "Eski köprü nehrin üzerinden geçer."
      },
      {
        "wordIndex": 8,
        "text": "En el ___ viven muchos animales salvajes.",
        "answer": "bosque",
        "translation": "Ormanda birçok vahşi hayvan yaşar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Tomamos el ___ al colegio.",
        "answer": "autobús",
        "translation": "Okula otobüsle gideriz."
      },
      {
        "wordIndex": 4,
        "text": "Viajo en mi ___ por el parque.",
        "answer": "bicicleta",
        "translation": "Parkta bisikletime binerim."
      },
      {
        "wordIndex": 1,
        "text": "El ___ sale del andén dos.",
        "answer": "tren",
        "translation": "Tren ikinci perondan kalkar."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "La bicicleta tiene una ___ rota.",
        "answer": "rueda",
        "translation": "Bisikletin kırık bir tekerleği var."
      },
      {
        "wordIndex": 4,
        "text": "El ___ se detuvo en el semáforo en rojo.",
        "answer": "conductor",
        "translation": "Sürücü kırmızı ışıkta durdu."
      },
      {
        "wordIndex": 8,
        "text": "El coche no puede funcionar sin ___.",
        "answer": "combustible",
        "translation": "Araba yakıt olmadan çalışamaz."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Guardo mi dinero en el ___.",
        "answer": "banco",
        "translation": "Paramı bankada tutarım."
      },
      {
        "wordIndex": 4,
        "text": "Puedes pedir prestados libros de la ___.",
        "answer": "biblioteca",
        "translation": "Kütüphaneden ödünç kitap alabilirsin."
      },
      {
        "wordIndex": 9,
        "text": "Compramos pan fresco en la ___.",
        "answer": "panadería",
        "translation": "Fırından taze ekmek alırız."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "El ___ diseñó un nuevo puente.",
        "answer": "ingeniero",
        "translation": "Mühendis yeni bir köprü tasarladı."
      },
      {
        "wordIndex": 4,
        "text": "El ___ cultiva hortalizas.",
        "answer": "granjero",
        "translation": "Çiftçi sebze yetiştirir."
      },
      {
        "wordIndex": 8,
        "text": "Visita al ___ si te duele el diente.",
        "answer": "dentista",
        "translation": "Dişin ağrıyorsa diş hekimine git."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Necesitas un ___ para subir al tren.",
        "answer": "billete",
        "translation": "Trene binmek için bilete ihtiyacın var."
      },
      {
        "wordIndex": 5,
        "text": "Muestra tu ___ en la frontera.",
        "answer": "pasaporte",
        "translation": "Sınırda pasaportunu göster."
      },
      {
        "wordIndex": 7,
        "text": "Utilice el ___ para encontrar el museo.",
        "answer": "mapa",
        "translation": "Müzeyi bulmak için haritayı kullan."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "El ___ examinó al paciente.",
        "answer": "médico",
        "translation": "Doktor hastayı muayene etti."
      },
      {
        "wordIndex": 4,
        "text": "Tome este ___ después del desayuno.",
        "answer": "medicamento",
        "translation": "Bu ilacı kahvaltıdan sonra al."
      },
      {
        "wordIndex": 7,
        "text": "El niño tiene ___ alta.",
        "answer": "fiebre",
        "translation": "Çocuğun yüksek ateşi var."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Las entradas son ___ esta semana.",
        "answer": "baratas",
        "translation": "Biletler bu hafta ucuz."
      },
      {
        "wordIndex": 5,
        "text": "¿Cuál es el ___ de este bolso?",
        "answer": "precio",
        "translation": "Bu çantanın fiyatı nedir?"
      },
      {
        "wordIndex": 9,
        "text": "Debemos mantenernos dentro de nuestro ___.",
        "answer": "presupuesto",
        "translation": "Bütçemizin sınırları içinde kalmalıyız."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "El ___ regular es bueno para la salud.",
        "answer": "ejercicio",
        "translation": "Düzenli egzersiz sağlığın için iyidir."
      },
      {
        "wordIndex": 6,
        "text": "Nuestro ___ ganó el partido.",
        "answer": "equipo",
        "translation": "Takımımız karşılaşmayı kazandı."
      },
      {
        "wordIndex": 7,
        "text": "El ___ explicó la nueva estrategia.",
        "answer": "entrenador",
        "translation": "Antrenör yeni stratejiyi açıkladı."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "El niño pateó la ___ hacia la red.",
        "answer": "pelota",
        "translation": "Çocuk topu ağlara doğru vurdu."
      },
      {
        "wordIndex": 8,
        "text": "Ganó una ___ de oro en la competencia.",
        "answer": "medalla",
        "translation": "Yarışmada altın madalya kazandı."
      },
      {
        "wordIndex": 7,
        "text": "Miles de aficionados llenaron el ___.",
        "answer": "estadio",
        "translation": "Binlerce taraftar stadyumu doldurdu."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Utilizo una ___ para escribir informes.",
        "answer": "computadora",
        "translation": "Rapor yazmak için bilgisayar kullanırım."
      },
      {
        "wordIndex": 3,
        "text": "Escribe tu nombre en el ___.",
        "answer": "teclado",
        "translation": "Adını klavyede yaz."
      },
      {
        "wordIndex": 8,
        "text": "La ___ de mi teléfono está casi vacía.",
        "answer": "batería",
        "translation": "Telefonumun pili neredeyse boş."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Elija una ___ segura para su cuenta.",
        "answer": "contraseña",
        "translation": "Hesabın için güçlü bir şifre seç."
      },
      {
        "wordIndex": 5,
        "text": "Guarde el ___ antes de cerrar el programa.",
        "answer": "archivo",
        "translation": "Programı kapatmadan önce dosyayı kaydet."
      },
      {
        "wordIndex": 9,
        "text": "Puede ___ información en línea.",
        "answer": "buscar",
        "translation": "İnternette bilgi arayabilirsin."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "El turco es mi primer ___.",
        "answer": "idioma",
        "translation": "Türkçe benim ilk dilimdir."
      },
      {
        "wordIndex": 7,
        "text": "Termino mi ___ antes de cenar.",
        "answer": "tarea",
        "translation": "Ödevimi akşam yemeğinden önce bitiririm."
      },
      {
        "wordIndex": 8,
        "text": "Mañana tenemos un ___ de matemáticas.",
        "answer": "examen",
        "translation": "Yarın matematik sınavımız var."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "¿Cuál es el ___ de esta palabra?",
        "answer": "significado",
        "translation": "Bu kelimenin anlamı nedir?"
      },
      {
        "wordIndex": 5,
        "text": "Esta ___ es fácil de entender.",
        "answer": "traducción",
        "translation": "Bu çeviriyi anlamak kolaydır."
      },
      {
        "wordIndex": 6,
        "text": "Escuchar ayuda a mejorar tu ___.",
        "answer": "pronunciación",
        "translation": "Dinlemek telaffuzunu geliştirmeye yardımcı olur."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "El profesor hizo una ___ interesante.",
        "answer": "pregunta",
        "translation": "Öğretmen ilginç bir soru sordu."
      },
      {
        "wordIndex": 5,
        "text": "Necesitamos una ___ a este problema.",
        "answer": "solución",
        "translation": "Bu soruna bir çözüm bulmamız gerekiyor."
      },
      {
        "wordIndex": 7,
        "text": "Esa es una gran ___.",
        "answer": "idea",
        "translation": "Bu harika bir fikir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "En mi ___, esta es una buena idea.",
        "answer": "opinión",
        "translation": "Bence bu iyi bir fikir."
      },
      {
        "wordIndex": 4,
        "text": "La policía está buscando ___.",
        "answer": "pruebas",
        "translation": "Polis kanıt arıyor."
      },
      {
        "wordIndex": 9,
        "text": "Escribe un breve ___ de la historia.",
        "answer": "resumen",
        "translation": "Hikâyenin kısa bir özetini yaz."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Estamos trabajando en un nuevo ___.",
        "answer": "proyecto",
        "translation": "Yeni bir proje üzerinde çalışıyoruz."
      },
      {
        "wordIndex": 6,
        "text": "La ___ para el informe es el viernes.",
        "answer": "fecha límite",
        "translation": "Raporun son teslim tarihi cumadır."
      },
      {
        "wordIndex": 8,
        "text": "La ___ comienza a las nueve.",
        "answer": "reunión",
        "translation": "Toplantı dokuzda başlar."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Cada ___ tiene un escritorio.",
        "answer": "empleado",
        "translation": "Her çalışanın bir masası var."
      },
      {
        "wordIndex": 4,
        "text": "El ___ preguntó por el precio.",
        "answer": "cliente",
        "translation": "Müşteri fiyatı sordu."
      },
      {
        "wordIndex": 9,
        "text": "Lea el ___ antes de firmarlo.",
        "answer": "contrato",
        "translation": "İmzalamadan önce sözleşmeyi oku."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Recibe su ___ todos los meses.",
        "answer": "salario",
        "translation": "Maaşını her ay alır."
      },
      {
        "wordIndex": 6,
        "text": "Pagamos ___ sobre nuestros ingresos.",
        "answer": "impuestos",
        "translation": "Gelirimiz üzerinden vergi öderiz."
      },
      {
        "wordIndex": 8,
        "text": "Pidió un ___ para comprar una casa.",
        "answer": "préstamo",
        "translation": "Ev almak için kredi çekti."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Mi ___ está en el segundo piso.",
        "answer": "oficina",
        "translation": "Ofisim ikinci katta."
      },
      {
        "wordIndex": 1,
        "text": "La ___ produce automóviles.",
        "answer": "fábrica",
        "translation": "Fabrika araba üretir."
      },
      {
        "wordIndex": 7,
        "text": "Quiere una ___ en medicina.",
        "answer": "carrera",
        "translation": "Tıp alanında kariyer istiyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "El ___ controla muchas funciones del cuerpo.",
        "answer": "cerebro",
        "translation": "Beyin vücudun birçok işlevini kontrol eder."
      },
      {
        "wordIndex": 1,
        "text": "El corazón bombea ___ por todo el cuerpo.",
        "answer": "sangre",
        "translation": "Kalp vücuda kan pompalar."
      },
      {
        "wordIndex": 4,
        "text": "Protege tu ___ del sol.",
        "answer": "piel",
        "translation": "Cildini güneşten koru."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "La tos puede ser un ___ de un resfriado.",
        "answer": "síntoma",
        "translation": "Öksürük soğuk algınlığının bir belirtisi olabilir."
      },
      {
        "wordIndex": 5,
        "text": "Tengo ___ con el médico mañana.",
        "answer": "cita",
        "translation": "Yarın doktorla randevum var."
      },
      {
        "wordIndex": 8,
        "text": "Llama a una ambulancia en caso de ___.",
        "answer": "emergencia",
        "translation": "Acil bir durumda ambulans çağır."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Los estudiantes pueden ___ dinero trabajando a tiempo parcial.",
        "answer": "ganar",
        "translation": "Öğrenciler yarı zamanlı çalışarak para kazanabilir."
      },
      {
        "wordIndex": 3,
        "text": "Es aconsejable ___ en educación.",
        "answer": "invertir",
        "translation": "Eğitime yatırım yapmak akıllıcadır."
      },
      {
        "wordIndex": 9,
        "text": "Guarde el ___ en caso de que necesite un reembolso.",
        "answer": "recibo",
        "translation": "İade gerekirse diye fişi sakla."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "La empresa planea ___ más ingenieros.",
        "answer": "contratar",
        "translation": "Şirket daha fazla mühendis işe almayı planlıyor."
      },
      {
        "wordIndex": 8,
        "text": "Necesitamos ___ el evento con cuidado.",
        "answer": "organizar",
        "translation": "Etkinliği dikkatle düzenlememiz gerekiyor."
      },
      {
        "wordIndex": 7,
        "text": "¿Puedes ___ un equipo de diez personas?",
        "answer": "dirigir",
        "translation": "On kişilik bir takımı yönetebilir misin?"
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "El gerente debe ___ la solicitud.",
        "answer": "aprobar",
        "translation": "Yönetici talebi onaylamalıdır."
      },
      {
        "wordIndex": 6,
        "text": "Un casco puede ayudar a ___ lesiones graves.",
        "answer": "prevenir",
        "translation": "Kask ciddi yaralanmaları önlemeye yardımcı olabilir."
      },
      {
        "wordIndex": 9,
        "text": "Todos los empleados deben ___ con las normas de seguridad.",
        "answer": "cumplir",
        "translation": "Tüm çalışanlar güvenlik kurallarına uymalıdır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Todo ___ tiene derechos y responsabilidades.",
        "answer": "ciudadano",
        "translation": "Her vatandaşın hakları ve sorumlulukları vardır."
      },
      {
        "wordIndex": 4,
        "text": "Cruzamos la ___ de noche.",
        "answer": "frontera",
        "translation": "Sınırı gece geçtik."
      },
      {
        "wordIndex": 7,
        "text": "El oficial comprobó mi ___.",
        "answer": "identidad",
        "translation": "Görevli kimliğimi kontrol etti."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Nuestra ___ ayuda a las personas necesitadas.",
        "answer": "comunidad",
        "translation": "Topluluğumuz ihtiyaç sahiplerine yardım eder."
      },
      {
        "wordIndex": 3,
        "text": "Compartir una comida es una ___ importante aquí.",
        "answer": "tradición",
        "translation": "Bir yemeği paylaşmak burada önemli bir gelenektir."
      },
      {
        "wordIndex": 6,
        "text": "Celebramos la ___ de nuestra ciudad.",
        "answer": "diversidad",
        "translation": "Şehrimizin çeşitliliğini kutlarız."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Pasar tiempo en la ___ me ayuda a relajarme.",
        "answer": "naturaleza",
        "translation": "Doğada zaman geçirmek rahatlamama yardımcı olur."
      },
      {
        "wordIndex": 5,
        "text": "El ___ está cambiando en todo el mundo.",
        "answer": "clima",
        "translation": "İklim dünya genelinde değişiyor."
      },
      {
        "wordIndex": 8,
        "text": "El ___ ayuda a reducir los residuos.",
        "answer": "reciclaje",
        "translation": "Geri dönüşüm atıkları azaltmaya yardımcı olur."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Necesitamos ___ para calentar nuestros hogares.",
        "answer": "energía",
        "translation": "Evlerimizi ısıtmak için enerjiye ihtiyacımız var."
      },
      {
        "wordIndex": 4,
        "text": "La quema de ___ produce contaminación del aire.",
        "answer": "carbón",
        "translation": "Kömür yakmak hava kirliliğine neden olur."
      },
      {
        "wordIndex": 6,
        "text": "El agua es un ___ natural precioso.",
        "answer": "recurso",
        "translation": "Su değerli bir doğal kaynaktır."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "La Tierra es el ___ en el que vivimos.",
        "answer": "planeta",
        "translation": "Dünya üzerinde yaşadığımız gezegendir."
      },
      {
        "wordIndex": 2,
        "text": "La ___ más brillante es visible esta noche.",
        "answer": "estrella",
        "translation": "Bu gece en parlak yıldız görünüyor."
      },
      {
        "wordIndex": 6,
        "text": "La ___ nos mantiene en el suelo.",
        "answer": "gravedad",
        "translation": "Yerçekimi bizi yerde tutar."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Un ___ es una unidad básica de materia.",
        "answer": "átomo",
        "translation": "Atom maddenin temel bir birimidir."
      },
      {
        "wordIndex": 7,
        "text": "La ___ dentro del recipiente aumentó.",
        "answer": "presión",
        "translation": "Kabın içindeki basınç arttı."
      },
      {
        "wordIndex": 8,
        "text": "La ___ del agua cambia con la temperatura.",
        "answer": "densidad",
        "translation": "Suyun yoğunluğu sıcaklıkla değişir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Consulta la ___ antes de realizar el pedido.",
        "answer": "cantidad",
        "translation": "Siparişi vermeden önce miktarı kontrol et."
      },
      {
        "wordIndex": 5,
        "text": "El ___ de dos y cuatro es tres.",
        "answer": "promedio",
        "translation": "İki ve dördün ortalaması üçtür."
      },
      {
        "wordIndex": 7,
        "text": "¿Puedes ver la ___ entre estas imágenes?",
        "answer": "diferencia",
        "translation": "Bu resimler arasındaki farkı görebiliyor musun?"
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Por favor ___ el coste total.",
        "answer": "calcule",
        "translation": "Lütfen toplam maliyeti hesapla."
      },
      {
        "wordIndex": 2,
        "text": "Necesitamos ___ la habitación antes de comprar una alfombra.",
        "answer": "medir",
        "translation": "Halı almadan önce odayı ölçmemiz gerekiyor."
      },
      {
        "wordIndex": 6,
        "text": "Si ___ tres por cuatro, obtienes doce.",
        "answer": "multiplica",
        "translation": "Üç ile dördü çarparsan on iki elde edersin."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Los científicos ___ el comportamiento de los animales.",
        "answer": "observan",
        "translation": "Bilim insanları hayvanların davranışlarını gözlemler."
      },
      {
        "wordIndex": 3,
        "text": "Siempre ___ la información antes de compartirla.",
        "answer": "verifique",
        "translation": "Bilgiyi paylaşmadan önce her zaman doğrula."
      },
      {
        "wordIndex": 8,
        "text": "Es difícil ___ el tiempo con exactitud.",
        "answer": "predecir",
        "translation": "Hava durumunu tam olarak öngörmek zordur."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Este ___ facilita el aprendizaje.",
        "answer": "método",
        "translation": "Bu yöntem öğrenmeyi kolaylaştırır."
      },
      {
        "wordIndex": 4,
        "text": "Estudiamos la ___ del edificio.",
        "answer": "estructura",
        "translation": "Binanın yapısını inceledik."
      },
      {
        "wordIndex": 6,
        "text": "Cada ___ tiene una función importante.",
        "answer": "componente",
        "translation": "Her bileşenin önemli bir işlevi vardır."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "El sueño tiene un fuerte ___ sobre la concentración.",
        "answer": "efecto",
        "translation": "Uykunun dikkat üzerinde güçlü bir etkisi vardır."
      },
      {
        "wordIndex": 4,
        "text": "El coste es un ___ importante en nuestra decisión.",
        "answer": "factor",
        "translation": "Maliyet kararımızda önemli bir etkendir."
      },
      {
        "wordIndex": 7,
        "text": "Puedes entender mejor una palabra en el ___.",
        "answer": "contexto",
        "translation": "Bir kelimeyi bağlam içinde daha iyi anlayabilirsin."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Un ___ de caminar es una mejor salud.",
        "answer": "beneficio",
        "translation": "Yürümenin bir faydası daha iyi sağlıktır."
      },
      {
        "wordIndex": 3,
        "text": "El uso del cinturón de seguridad reduce el ___ de sufrir lesiones.",
        "answer": "riesgo",
        "translation": "Emniyet kemeri takmak yaralanma riskini azaltır."
      },
      {
        "wordIndex": 6,
        "text": "La falta de dinero puede ser un ___ para la educación.",
        "answer": "obstáculo",
        "translation": "Para eksikliği eğitimin önünde bir engel olabilir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "El agua limpia es ___ para la vida.",
        "answer": "necesaria",
        "translation": "Temiz su yaşam için gereklidir."
      },
      {
        "wordIndex": 2,
        "text": "El ejercicio extra es ___.",
        "answer": "opcional",
        "translation": "Ek alıştırma isteğe bağlıdır."
      },
      {
        "wordIndex": 9,
        "text": "Una máquina ___ utiliza menos energía.",
        "answer": "eficiente",
        "translation": "Verimli bir makine daha az enerji kullanır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Necesitamos información ___ para tomar una buena decisión.",
        "answer": "exacta",
        "translation": "İyi bir karar vermek için doğru bilgiye ihtiyacımız var."
      },
      {
        "wordIndex": 2,
        "text": "Este sitio web es una fuente de información ___.",
        "answer": "confiable",
        "translation": "Bu internet sitesi güvenilir bir bilgi kaynağıdır."
      },
      {
        "wordIndex": 9,
        "text": "Nuestro horario es ___, por lo que podemos cambiar el horario.",
        "answer": "flexible",
        "translation": "Programımız esnek, bu yüzden saati değiştirebiliriz."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "El cerebro humano es muy ___.",
        "answer": "complejo",
        "translation": "İnsan beyni çok karmaşıktır."
      },
      {
        "wordIndex": 2,
        "text": "La libertad es un concepto ___.",
        "answer": "abstracto",
        "translation": "Özgürlük soyut bir kavramdır."
      },
      {
        "wordIndex": 8,
        "text": "Las huellas dactilares de cada persona son ___.",
        "answer": "únicas",
        "translation": "Her insanın parmak izleri benzersizdir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "La lectura aumenta tu ___.",
        "answer": "conocimiento",
        "translation": "Okumak bilgini artırır."
      },
      {
        "wordIndex": 3,
        "text": "Aprender un idioma requiere tiempo y ___.",
        "answer": "esfuerzo",
        "translation": "Dil öğrenmek zaman ve çaba gerektirir."
      },
      {
        "wordIndex": 6,
        "text": "Este trabajo es una gran ___ para mí.",
        "answer": "oportunidad",
        "translation": "Bu iş benim için harika bir fırsat."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Todo el mundo merece vivir en ___.",
        "answer": "libertad",
        "translation": "Herkes özgürlük içinde yaşamayı hak eder."
      },
      {
        "wordIndex": 6,
        "text": "Enseñar a los niños pequeños requiere ___.",
        "answer": "paciencia",
        "translation": "Küçük çocuklara öğretmenlik yapmak sabır gerektirir."
      },
      {
        "wordIndex": 7,
        "text": "Puede generar ___ cumpliendo sus promesas.",
        "answer": "confianza",
        "translation": "Sözlerini tutarak güven oluşturabilirsin."
      }
    ],
    [
      {
        "wordIndex": 4,
        "text": "La comida es una parte importante de nuestra ___.",
        "answer": "cultura",
        "translation": "Yemek, kültürümüzün önemli bir parçasıdır."
      },
      {
        "wordIndex": 5,
        "text": "Todo niño tiene derecho a la ___.",
        "answer": "educación",
        "translation": "Her çocuğun eğitim hakkı vardır."
      },
      {
        "wordIndex": 7,
        "text": "La ___ moderna facilita la comunicación.",
        "answer": "tecnología",
        "translation": "Modern teknoloji iletişimi kolaylaştırır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Todos deben respetar la ___.",
        "answer": "ley",
        "translation": "Herkes kanuna saygı göstermelidir."
      },
      {
        "wordIndex": 4,
        "text": "Siga el ___ correcto.",
        "answer": "procedimiento",
        "translation": "Lütfen doğru prosedürü takip et."
      },
      {
        "wordIndex": 8,
        "text": "Hay una ___ por infringir las reglas.",
        "answer": "penalización",
        "translation": "Kuralları çiğnemenin bir cezası var."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "El ___ escuchó al testigo.",
        "answer": "juez",
        "translation": "Hâkim tanığı dinledi."
      },
      {
        "wordIndex": 3,
        "text": "El ___ describió lo sucedido.",
        "answer": "testigo",
        "translation": "Tanık ne olduğunu anlattı."
      },
      {
        "wordIndex": 8,
        "text": "El jurado anunció su ___.",
        "answer": "veredicto",
        "translation": "Jüri hükmünü açıkladı."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Las próximas ___ se celebrarán en junio.",
        "answer": "elecciones",
        "translation": "Bir sonraki seçim haziranda yapılacak."
      },
      {
        "wordIndex": 2,
        "text": "Cada ___ respondió las mismas preguntas.",
        "answer": "candidato",
        "translation": "Her aday aynı soruları yanıtladı."
      },
      {
        "wordIndex": 9,
        "text": "La ___ protege los derechos fundamentales.",
        "answer": "constitución",
        "translation": "Anayasa temel hakları korur."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Compramos verduras a un agricultor ___.",
        "answer": "local",
        "translation": "Yerel bir çiftçiden sebze alırız."
      },
      {
        "wordIndex": 5,
        "text": "Aprender un idioma ___ abre nuevas puertas.",
        "answer": "extranjero",
        "translation": "Yabancı bir dil öğrenmek yeni kapılar açar."
      },
      {
        "wordIndex": 7,
        "text": "Esta es información ___; por favor no lo compartas.",
        "answer": "privada",
        "translation": "Bu özel bir bilgidir; lütfen paylaşma."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Mantenga segura su información ___.",
        "answer": "personal",
        "translation": "Kişisel bilgilerini güvende tut."
      },
      {
        "wordIndex": 7,
        "text": "Debe obtener asesoramiento ___ antes de firmar.",
        "answer": "legal",
        "translation": "İmzalamadan önce hukuki tavsiye almalısın."
      },
      {
        "wordIndex": 8,
        "text": "La empresa sigue estrictos estándares ___.",
        "answer": "éticos",
        "translation": "Şirket sıkı etik standartlara uyar."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "¿Es ___ cambiar la fecha?",
        "answer": "posible",
        "translation": "Tarihi değiştirmek mümkün mü?"
      },
      {
        "wordIndex": 6,
        "text": "Estoy ___ de que esta es la respuesta correcta.",
        "answer": "seguro",
        "translation": "Bunun doğru cevap olduğundan eminim."
      },
      {
        "wordIndex": 8,
        "text": "La respuesta es ___ cuando lees la pregunta con atención.",
        "answer": "obvia",
        "translation": "Soruyu dikkatle okuyunca cevap açıkça bellidir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Esta es sólo una solución ___.",
        "answer": "temporal",
        "translation": "Bu yalnızca geçici bir çözümdür."
      },
      {
        "wordIndex": 3,
        "text": "Notamos una mejora ___ en su salud.",
        "answer": "gradual",
        "translation": "Sağlığında kademeli bir iyileşme fark ettik."
      },
      {
        "wordIndex": 8,
        "text": "La empresa publica un informe ___.",
        "answer": "anual",
        "translation": "Şirket yıllık bir rapor yayımlar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "El plan ___ cambió después de la reunión.",
        "answer": "inicial",
        "translation": "Başlangıçtaki plan toplantıdan sonra değişti."
      },
      {
        "wordIndex": 4,
        "text": "¿Cuál es su dirección ___?",
        "answer": "actual",
        "translation": "Mevcut adresin nedir?"
      },
      {
        "wordIndex": 7,
        "text": "Debemos pensar en las generaciones ___.",
        "answer": "futuras",
        "translation": "Gelecekteki nesilleri düşünmeliyiz."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Debemos ___ los precios antes de comprar.",
        "answer": "comparar",
        "translation": "Satın almadan önce fiyatları karşılaştırmalıyız."
      },
      {
        "wordIndex": 7,
        "text": "Es importante ___ un equilibrio saludable.",
        "answer": "mantener",
        "translation": "Sağlıklı bir denge sürdürmek önemlidir."
      },
      {
        "wordIndex": 9,
        "text": "La práctica puede ___ tu pronunciación.",
        "answer": "mejorar",
        "translation": "Alıştırma yapmak telaffuzunu iyileştirebilir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "La empresa planea ___ su negocio.",
        "answer": "ampliar",
        "translation": "Şirket işini genişletmeyi planlıyor."
      },
      {
        "wordIndex": 1,
        "text": "Deberíamos ___ nuestro consumo de agua.",
        "answer": "reducir",
        "translation": "Su tüketimimizi azaltmalıyız."
      },
      {
        "wordIndex": 5,
        "text": "Los animales deben ___ a los cambios en su entorno.",
        "answer": "adaptarse",
        "translation": "Hayvanlar çevrelerindeki değişikliklere uyum sağlamalıdır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Por favor ___ su número de teléfono en el formulario.",
        "answer": "incluya",
        "translation": "Lütfen telefon numaranı forma ekle."
      },
      {
        "wordIndex": 6,
        "text": "Las líneas rojas ___ carreteras en este mapa.",
        "answer": "representan",
        "translation": "Bu haritada kırmızı çizgiler yolları temsil eder."
      },
      {
        "wordIndex": 8,
        "text": "Los espejos ___ la luz.",
        "answer": "reflejan",
        "translation": "Aynalar ışığı yansıtır."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Por favor, ___ todas las opciones antes de decidirse.",
        "answer": "considere",
        "translation": "Lütfen karar vermeden önce tüm seçenekleri dikkate al."
      },
      {
        "wordIndex": 6,
        "text": "Puedo ___ la idea principal de este texto.",
        "answer": "comprender",
        "translation": "Bu metnin ana fikrini anlayabiliyorum."
      },
      {
        "wordIndex": 8,
        "text": "Podemos ___ el significado a partir del contexto.",
        "answer": "inferir",
        "translation": "Bağlamdan anlam çıkarabiliriz."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "El médico ___ su rodilla.",
        "answer": "examinará",
        "translation": "Doktor dizini inceleyecek."
      },
      {
        "wordIndex": 3,
        "text": "Por favor ___ sus respuestas antes de enviarlas.",
        "answer": "revise",
        "translation": "Lütfen göndermeden önce cevaplarını gözden geçir."
      },
      {
        "wordIndex": 9,
        "text": "Viajar nos ayuda a ___ nuevas culturas.",
        "answer": "descubrir",
        "translation": "Seyahat yeni kültürler keşfetmemize yardımcı olur."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "La escuela ___ la nueva política el próximo mes.",
        "answer": "implementará",
        "translation": "Okul yeni politikayı gelecek ay uygulamaya koyacak."
      },
      {
        "wordIndex": 6,
        "text": "Las imágenes pueden ___ el proceso de aprendizaje.",
        "answer": "facilitar",
        "translation": "Resimler öğrenme sürecini kolaylaştırabilir."
      },
      {
        "wordIndex": 8,
        "text": "Los buenos amigos ___ entre sí.",
        "answer": "se apoyan",
        "translation": "İyi arkadaşlar birbirini destekler."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Debemos ___ suficiente tiempo a cada tarea.",
        "answer": "destinar",
        "translation": "Her görev için yeterli zaman tahsis etmeliyiz."
      },
      {
        "wordIndex": 1,
        "text": "Los voluntarios ___ alimentos entre las familias.",
        "answer": "repartirán",
        "translation": "Gönüllüler ailelere yiyecek dağıtacak."
      },
      {
        "wordIndex": 7,
        "text": "La biblioteca puede ___ información útil.",
        "answer": "proporcionar",
        "translation": "Kütüphane yararlı bilgiler sağlayabilir."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Intente ver la situación desde una ___ diferente.",
        "answer": "perspectiva",
        "translation": "Durumu farklı bir bakış açısından görmeye çalış."
      },
      {
        "wordIndex": 3,
        "text": "La seguridad es nuestra primera ___.",
        "answer": "prioridad",
        "translation": "Güvenlik ilk önceliğimizdir."
      },
      {
        "wordIndex": 9,
        "text": "El científico probó una nueva ___.",
        "answer": "hipótesis",
        "translation": "Bilim insanı yeni bir hipotezi sınadı."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "La comunidad mostró una gran ___ después del desastre.",
        "answer": "resiliencia",
        "translation": "Topluluk felaketten sonra büyük dayanıklılık gösterdi."
      },
      {
        "wordIndex": 4,
        "text": "El proyecto se centra en la ___ ambiental.",
        "answer": "sostenibilidad",
        "translation": "Proje çevresel sürdürülebilirliğe odaklanır."
      },
      {
        "wordIndex": 8,
        "text": "La empresa fomenta la ___ y el pensamiento creativo.",
        "answer": "innovación",
        "translation": "Şirket yenilikçiliği ve yaratıcı düşünmeyi teşvik eder."
      }
    ]
  ],
  "ru": [
    [
      {
        "wordIndex": 0,
        "text": "___ спит на стуле.",
        "answer": "Кот",
        "translation": "Kedi sandalyede uyuyor."
      },
      {
        "wordIndex": 2,
        "text": "___ дарит нам свет и тепло.",
        "answer": "Солнце",
        "translation": "Güneş bize ışık ve sıcaklık verir."
      },
      {
        "wordIndex": 7,
        "text": "Я читаю ___ перед сном.",
        "answer": "книгу",
        "translation": "Yatmadan önce bir kitap okurum."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Моя ___ готовит вкусный суп.",
        "answer": "мама",
        "translation": "Annem lezzetli çorba yapar."
      },
      {
        "wordIndex": 4,
        "text": "Дети ходят в ___ каждое утро.",
        "answer": "школу",
        "translation": "Çocuklar her sabah okula gider."
      },
      {
        "wordIndex": 9,
        "text": "Пожалуйста, откройте ___, чтобы подышать свежим воздухом.",
        "answer": "окно",
        "translation": "Biraz temiz hava için lütfen pencereyi aç."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Этот ___ чудесно пахнет.",
        "answer": "цветок",
        "translation": "Bu çiçek harika kokuyor."
      },
      {
        "wordIndex": 5,
        "text": "Я выпиваю стакан ___ за завтраком.",
        "answer": "молока",
        "translation": "Kahvaltıda bir bardak süt içerim."
      },
      {
        "wordIndex": 8,
        "text": "Она кладет в сумку красное ___.",
        "answer": "яблоко",
        "translation": "Çantasına kırmızı bir elma koyar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "На торте ___ свеча.",
        "answer": "одна",
        "translation": "Pastanın üzerinde bir mum var."
      },
      {
        "wordIndex": 2,
        "text": "У треугольника ___ стороны.",
        "answer": "три",
        "translation": "Bir üçgenin üç kenarı vardır."
      },
      {
        "wordIndex": 9,
        "text": "У меня ___ пальцев.",
        "answer": "десять",
        "translation": "On parmağım var."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Знак остановки ___.",
        "answer": "красный",
        "translation": "Dur işareti kırmızıdır."
      },
      {
        "wordIndex": 1,
        "text": "Небо сегодня ___.",
        "answer": "голубое",
        "translation": "Bugün gökyüzü mavidir."
      },
      {
        "wordIndex": 2,
        "text": "Листья ___ весной.",
        "answer": "зеленые",
        "translation": "Yapraklar ilkbaharda yeşildir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Мой лучший ___ живет по соседству.",
        "answer": "друг",
        "translation": "En iyi arkadaşım yan evde yaşar."
      },
      {
        "wordIndex": 1,
        "text": "Мы ужинаем вместе ___.",
        "answer": "семьей",
        "translation": "Aile olarak birlikte akşam yemeği yeriz."
      },
      {
        "wordIndex": 3,
        "text": "___ еще не может ходить.",
        "answer": "Ребенок",
        "translation": "Bebek henüz yürüyemiyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Наденьте шлем, чтобы защитить ___.",
        "answer": "голову",
        "translation": "Başını korumak için kask tak."
      },
      {
        "wordIndex": 3,
        "text": "Мне в ___ попала крошечная пылинка.",
        "answer": "глаз",
        "translation": "Gözüme küçük bir toz kaçtı."
      },
      {
        "wordIndex": 8,
        "text": "Физические упражнения полезны для вашего ___.",
        "answer": "сердца",
        "translation": "Egzersiz kalbin için iyidir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Мы завтракаем ___.",
        "answer": "утром",
        "translation": "Sabah kahvaltı yaparız."
      },
      {
        "wordIndex": 4,
        "text": "Мы навестим наших бабушку и дедушку ___.",
        "answer": "завтра",
        "translation": "Yarın büyükanne ve büyükbabamızı ziyaret edeceğiz."
      },
      {
        "wordIndex": 6,
        "text": "Я чувствую себя ___, когда вижу своих друзей.",
        "answer": "счастливым",
        "translation": "Arkadaşlarımı görünce mutlu hissederim."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Будь осторожен; суп ___.",
        "answer": "горячий",
        "translation": "Dikkat et; çorba sıcak."
      },
      {
        "wordIndex": 4,
        "text": "Пожалуйста, держите свою комнату ___.",
        "answer": "чистой",
        "translation": "Lütfen odanı temiz tut."
      },
      {
        "wordIndex": 8,
        "text": "Вчера я купил ___ телефон.",
        "answer": "новый",
        "translation": "Dün yeni bir telefon aldım."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Я люблю ___ в парке.",
        "answer": "гулять",
        "translation": "Parkta yürümeyi severim."
      },
      {
        "wordIndex": 5,
        "text": "Мы ___ рассказ каждый вечер.",
        "answer": "читаем",
        "translation": "Her akşam bir hikâye okuruz."
      },
      {
        "wordIndex": 4,
        "text": "Младенцам нужно ___ много.",
        "answer": "спать",
        "translation": "Bebeklerin çok uyuması gerekir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "На работу он носит белую ___.",
        "answer": "рубашку",
        "translation": "İşe beyaz bir gömlek giyer."
      },
      {
        "wordIndex": 3,
        "text": "Возьмите свое ___; на улице холодно.",
        "answer": "пальто",
        "translation": "Paltonu al; dışarısı soğuk."
      },
      {
        "wordIndex": 6,
        "text": "Она носит ___, чтобы защитить себя от солнца.",
        "answer": "шляпу",
        "translation": "Güneşten korunmak için şapka takar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Мы готовим еду на ___.",
        "answer": "кухне",
        "translation": "Yemeklerimizi mutfakta pişiririz."
      },
      {
        "wordIndex": 4,
        "text": "Дождь падает на ___.",
        "answer": "крышу",
        "translation": "Yağmur çatıya düşüyor."
      },
      {
        "wordIndex": 9,
        "text": "Выращиваем цветы на ___.",
        "answer": "балконе",
        "translation": "Balkonda çiçek yetiştiririz."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Я положил голову на мягкую ___.",
        "answer": "подушку",
        "translation": "Başımı yumuşak yastığa koyarım."
      },
      {
        "wordIndex": 3,
        "text": "Прежде чем уйти, она смотрит в ___.",
        "answer": "зеркало",
        "translation": "Çıkmadan önce aynaya bakar."
      },
      {
        "wordIndex": 9,
        "text": "Поставьте книгу на ___.",
        "answer": "полку",
        "translation": "Kitabı rafa koy."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Я ем суп ___.",
        "answer": "ложкой",
        "translation": "Çorbayı kaşıkla içerim."
      },
      {
        "wordIndex": 2,
        "text": "Используйте ___, чтобы нарезать хлеб.",
        "answer": "нож",
        "translation": "Ekmeği kesmek için bıçak kullan."
      },
      {
        "wordIndex": 3,
        "text": "На ___ лежит сэндвич.",
        "answer": "тарелке",
        "translation": "Tabakta bir sandviç var."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Мне нравится ___ на моем сэндвиче.",
        "answer": "сыр",
        "translation": "Sandviçimde peynir severim."
      },
      {
        "wordIndex": 3,
        "text": "Курица снесла ___.",
        "answer": "яйцо",
        "translation": "Tavuk bir yumurta yumurtladı."
      },
      {
        "wordIndex": 9,
        "text": "Кролик ест ___.",
        "answer": "морковку",
        "translation": "Tavşan bir havuç yiyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "У спелого ___ желтая кожица.",
        "answer": "банана",
        "translation": "Olgun bir muzun kabuğu sarıdır."
      },
      {
        "wordIndex": 5,
        "text": "Добавьте в чай ​​немного ___.",
        "answer": "лимона",
        "translation": "Çayına biraz limon ekle."
      },
      {
        "wordIndex": 7,
        "text": "Летом мы едим холодный ___.",
        "answer": "арбуз",
        "translation": "Yazın soğuk karpuz yeriz."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Мы едим ___ перед тем, как идти в школу.",
        "answer": "завтрак",
        "translation": "Okula gitmeden önce kahvaltı yaparız."
      },
      {
        "wordIndex": 5,
        "text": "Этот суп нужно немного ___.",
        "answer": "посолить",
        "translation": "Bu çorbanın biraz tuza ihtiyacı var."
      },
      {
        "wordIndex": 7,
        "text": "Пчелы производят ___.",
        "answer": "мед",
        "translation": "Arılar bal üretir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Мы купаемся в море ___.",
        "answer": "летом",
        "translation": "Yaz boyunca denizde yüzeriz."
      },
      {
        "wordIndex": 3,
        "text": "Обычно ___ холодно.",
        "answer": "зимой",
        "translation": "Kışın hava genellikle soğuktur."
      },
      {
        "wordIndex": 7,
        "text": "___ состоит из двенадцати месяцев.",
        "answer": "Год",
        "translation": "Bir yılda on iki ay vardır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Рабочая неделя начинается в ___.",
        "answer": "понедельник",
        "translation": "Çalışma haftası pazartesi başlar."
      },
      {
        "wordIndex": 6,
        "text": "Обычно мы отдыхаем в ___.",
        "answer": "воскресенье",
        "translation": "Genellikle pazar günü dinleniriz."
      },
      {
        "wordIndex": 8,
        "text": "Отметьте дату встречи в ___.",
        "answer": "календаре",
        "translation": "Toplantı tarihini takvimde işaretle."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Мы взяли зонтик из-за ___.",
        "answer": "дождя",
        "translation": "Yağmur nedeniyle şemsiye aldık."
      },
      {
        "wordIndex": 1,
        "text": "Горы покрыты белым ___.",
        "answer": "снежком",
        "translation": "Dağlar beyaz karla kaplı."
      },
      {
        "wordIndex": 2,
        "text": "Сильный ___ шевелил ветки.",
        "answer": "ветер",
        "translation": "Güçlü rüzgâr dalları hareket ettirdi."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Я хочу ___ новый язык.",
        "answer": "выучить",
        "translation": "Yeni bir dil öğrenmek istiyorum."
      },
      {
        "wordIndex": 4,
        "text": "Нам нужно ___ немного хлеба.",
        "answer": "купить",
        "translation": "Biraz ekmek satın almamız gerekiyor."
      },
      {
        "wordIndex": 6,
        "text": "Пожалуйста, ___ дверь.",
        "answer": "откройте",
        "translation": "Lütfen kapıyı aç."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "Рыбы могут ___ в воде.",
        "answer": "плавать",
        "translation": "Balıklar suda yüzebilir."
      },
      {
        "wordIndex": 5,
        "text": "Нам нравится ___ вместе.",
        "answer": "петь",
        "translation": "Birlikte şarkı söylemeyi severiz."
      },
      {
        "wordIndex": 8,
        "text": "Я хочу ___ ужин сегодня вечером.",
        "answer": "приготовить",
        "translation": "Bu akşam yemek pişirmek istiyorum."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Пожалуйста, ___ яблоко пополам.",
        "answer": "разрежьте",
        "translation": "Lütfen elmayı ikiye kes."
      },
      {
        "wordIndex": 4,
        "text": "Не ___ мусор на землю.",
        "answer": "выбрасывайте",
        "translation": "Yere çöp atma."
      },
      {
        "wordIndex": 9,
        "text": "Не ___ к горячей сковороде.",
        "answer": "прикасайтесь",
        "translation": "Sıcak tavaya dokunma."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Вы ___ птиц на улице?",
        "answer": "слышите",
        "translation": "Dışarıdaki kuşları duyabiliyor musun?"
      },
      {
        "wordIndex": 8,
        "text": "Я ___ ваше имя.",
        "answer": "помнил",
        "translation": "Adını hatırlayabiliyorum."
      },
      {
        "wordIndex": 6,
        "text": "Пожалуйста, ___, прежде чем ответить.",
        "answer": "подумайте",
        "translation": "Lütfen cevaplamadan önce düşün."
      }
    ],
    [
      {
        "wordIndex": 5,
        "text": "Доброе слово может заставить человека ___.",
        "answer": "улыбнуться",
        "translation": "Nazik bir söz birini gülümsetebilir."
      },
      {
        "wordIndex": 7,
        "text": "___, когда вам грустно, это нормально.",
        "answer": "плакать",
        "translation": "Üzgün hissedince ağlamak normaldir."
      },
      {
        "wordIndex": 9,
        "text": "Пожалуйста, ___; ребенок спит.",
        "answer": "шепотом",
        "translation": "Lütfen fısılda; bebek uyuyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Вы можете ___ за помощью к учителю.",
        "answer": "обратиться",
        "translation": "Öğretmenden yardım isteyebilirsin."
      },
      {
        "wordIndex": 2,
        "text": "Можете ли вы ___ мне это правило?",
        "answer": "объяснить",
        "translation": "Kuralı bana açıklayabilir misin?"
      },
      {
        "wordIndex": 7,
        "text": "Не ___ того, чего вы не можете сделать.",
        "answer": "обещайте",
        "translation": "Yapamayacağın bir şey için söz verme."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Мы ___ наших соседей на ужин.",
        "answer": "пригласим",
        "translation": "Komşularımızı akşam yemeğine davet edeceğiz."
      },
      {
        "wordIndex": 5,
        "text": "Пожалуйста, ___ до восьми часов.",
        "answer": "приходите",
        "translation": "Lütfen saat sekizden önce var."
      },
      {
        "wordIndex": 9,
        "text": "Пожалуйста, ___ здесь немного.",
        "answer": "подождите",
        "translation": "Lütfen burada bir dakika bekle."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Они планируют ___ новую школу.",
        "answer": "построить",
        "translation": "Yeni bir okul inşa etmeyi planlıyorlar."
      },
      {
        "wordIndex": 2,
        "text": "Можете ли вы ___ мой велосипед?",
        "answer": "отремонтировать",
        "translation": "Bisikletimi onarabilir misin?"
      },
      {
        "wordIndex": 9,
        "text": "Мы можем ___ после небольшого перерыва.",
        "answer": "продолжить",
        "translation": "Kısa bir aradan sonra devam edebiliriz."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Я не могу ___ свои ключи.",
        "answer": "найти",
        "translation": "Anahtarlarımı bulamıyorum."
      },
      {
        "wordIndex": 7,
        "text": "Могу ли я ___ вашу ручку?",
        "answer": "одолжить",
        "translation": "Kalemini ödünç alabilir miyim?"
      },
      {
        "wordIndex": 9,
        "text": "Вы можете ___ картой.",
        "answer": "оплатить",
        "translation": "Kartla ödeyebilirsin."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Пожалуйста, ___ мне сообщение.",
        "answer": "отправьте",
        "translation": "Lütfen bana bir mesaj gönder."
      },
      {
        "wordIndex": 5,
        "text": "Не забудьте ___ свою работу.",
        "answer": "сохранить",
        "translation": "Çalışmanı kaydetmeyi unutma."
      },
      {
        "wordIndex": 9,
        "text": "Можете ли вы ___ этот документ?",
        "answer": "распечатать",
        "translation": "Bu belgeyi yazdırabilir misin?"
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Лев — ___ животное.",
        "answer": "сильное",
        "translation": "Aslan güçlü bir hayvandır."
      },
      {
        "wordIndex": 4,
        "text": "___ дереву нужна вода.",
        "answer": "Молодому",
        "translation": "Genç ağacın suya ihtiyacı var."
      },
      {
        "wordIndex": 7,
        "text": "Этот чемодан слишком ___ для меня.",
        "answer": "тяжелый",
        "translation": "Bu bavul benim için çok ağır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Бутылка ___; пожалуйста, заполните его.",
        "answer": "пуста",
        "translation": "Şişe boş; lütfen doldur."
      },
      {
        "wordIndex": 6,
        "text": "Это одеяло очень ___.",
        "answer": "мягкое",
        "translation": "Bu battaniye çok yumuşak hissettiriyor."
      },
      {
        "wordIndex": 2,
        "text": "Река слишком ___, чтобы ее можно было пересечь здесь.",
        "answer": "широка",
        "translation": "Nehir buradan geçmek için çok geniş."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "Пожалуйста, соблюдайте ___ в библиотеке.",
        "answer": "тихо",
        "translation": "Lütfen kütüphanede sessiz ol."
      },
      {
        "wordIndex": 5,
        "text": "Моя обувь ___ от дождя.",
        "answer": "мокрая",
        "translation": "Ayakkabılarım yağmurdan ıslak."
      },
      {
        "wordIndex": 8,
        "text": "Будьте осторожны с этим ___ ножом.",
        "answer": "острым",
        "translation": "O keskin bıçağa dikkat et."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Наш учитель всегда ___ к нам.",
        "answer": "добрый",
        "translation": "Öğretmenimiz bize her zaman naziktir."
      },
      {
        "wordIndex": 4,
        "text": "Он ___ и делится тем, что имеет.",
        "answer": "щедр",
        "translation": "O cömerttir ve sahip olduklarını paylaşır."
      },
      {
        "wordIndex": 8,
        "text": "___ ребенок говорил очень тихо.",
        "answer": "Застенчивый",
        "translation": "Utangaç çocuk çok yumuşak bir sesle konuştu."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "___ пожарный спас ребенка.",
        "answer": "Отважный",
        "translation": "Cesur itfaiyeci çocuğu kurtardı."
      },
      {
        "wordIndex": 4,
        "text": "___ студент задал много вопросов.",
        "answer": "Любопытный",
        "translation": "Meraklı öğrenci birçok soru sordu."
      },
      {
        "wordIndex": 5,
        "text": "___ человек говорит правду.",
        "answer": "Честный",
        "translation": "Dürüst bir insan doğruyu söyler."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Употребление овощей помогает оставаться ___.",
        "answer": "здоровым",
        "translation": "Sebze yemek sağlıklı kalmana yardımcı olur."
      },
      {
        "wordIndex": 4,
        "text": "Я чувствую себя ___ после долгого путешествия.",
        "answer": "усталым",
        "translation": "Uzun yolculuktan sonra yorgun hissediyorum."
      },
      {
        "wordIndex": 6,
        "text": "После пробежки я очень ___.",
        "answer": "хочу пить",
        "translation": "Koştuktan sonra çok susamış olurum."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Сумку он нес на ___.",
        "answer": "плече",
        "translation": "Çantayı omzunda taşıdı."
      },
      {
        "wordIndex": 5,
        "text": "Она носила кольцо на ___.",
        "answer": "пальце",
        "translation": "Parmağına bir yüzük taktı."
      },
      {
        "wordIndex": 7,
        "text": "Я повредил ___, когда упал.",
        "answer": "колено",
        "translation": "Düştüğümde dizimi incittim."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Она пришла ___ в гонке.",
        "answer": "первой",
        "translation": "Yarışta birinci geldi."
      },
      {
        "wordIndex": 6,
        "text": "Мы приехали ___, чтобы занять хорошие места.",
        "answer": "рано",
        "translation": "İyi koltuklar bulmak için erken geldik."
      },
      {
        "wordIndex": 9,
        "text": "Я ___ не забываю день рождения моей матери.",
        "answer": "никогда",
        "translation": "Annemin doğum gününü asla unutmam."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Я ___ хожу на работу пешком.",
        "answer": "иногда",
        "translation": "Bazen işe yürürüm."
      },
      {
        "wordIndex": 6,
        "text": "Автобус прибудет ___.",
        "answer": "скоро",
        "translation": "Otobüs yakında gelecek."
      },
      {
        "wordIndex": 8,
        "text": "Пожалуйста, прочитайте предложение ___.",
        "answer": "еще раз",
        "translation": "Lütfen cümleyi tekrar oku."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Поверните ___ на следующей улице.",
        "answer": "налево",
        "translation": "Bir sonraki sokakta sola dön."
      },
      {
        "wordIndex": 7,
        "text": "Банк находится ___ школой и парком.",
        "answer": "между",
        "translation": "Banka okul ile parkın arasındadır."
      },
      {
        "wordIndex": 9,
        "text": "Аэропорт находится ___ от центра города.",
        "answer": "далеко",
        "translation": "Havalimanı şehir merkezinden uzaktır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "В этом большом ___ живет множество людей.",
        "answer": "городе",
        "translation": "Bu büyük şehirde birçok insan yaşar."
      },
      {
        "wordIndex": 4,
        "text": "Старый ___ пересекает реку.",
        "answer": "мост",
        "translation": "Eski köprü nehrin üzerinden geçer."
      },
      {
        "wordIndex": 8,
        "text": "В ___ обитает множество диких животных.",
        "answer": "лесе",
        "translation": "Ormanda birçok vahşi hayvan yaşar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Мы ездим в школу на ___.",
        "answer": "автобусе",
        "translation": "Okula otobüsle gideriz."
      },
      {
        "wordIndex": 4,
        "text": "Я катаюсь на ___ по парку.",
        "answer": "велосипеде",
        "translation": "Parkta bisikletime binerim."
      },
      {
        "wordIndex": 1,
        "text": "___ отправляется со второй платформы.",
        "answer": "Поезд",
        "translation": "Tren ikinci perondan kalkar."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "У велосипеда сломано ___.",
        "answer": "колесо",
        "translation": "Bisikletin kırık bir tekerleği var."
      },
      {
        "wordIndex": 4,
        "text": "___ остановился на красный свет.",
        "answer": "Водитель",
        "translation": "Sürücü kırmızı ışıkta durdu."
      },
      {
        "wordIndex": 8,
        "text": "Автомобиль не может работать без ___.",
        "answer": "топлива",
        "translation": "Araba yakıt olmadan çalışamaz."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Я храню свои деньги в ___.",
        "answer": "банке",
        "translation": "Paramı bankada tutarım."
      },
      {
        "wordIndex": 4,
        "text": "Вы можете брать книги в ___.",
        "answer": "библиотеке",
        "translation": "Kütüphaneden ödünç kitap alabilirsin."
      },
      {
        "wordIndex": 9,
        "text": "Мы покупаем свежий хлеб в ___.",
        "answer": "пекарне",
        "translation": "Fırından taze ekmek alırız."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "___ спроектировал новый мост.",
        "answer": "Инженер",
        "translation": "Mühendis yeni bir köprü tasarladı."
      },
      {
        "wordIndex": 4,
        "text": "___ выращивает овощи.",
        "answer": "Фермер",
        "translation": "Çiftçi sebze yetiştirir."
      },
      {
        "wordIndex": 8,
        "text": "Посетите ___, если у вас болит зуб.",
        "answer": "стоматолога",
        "translation": "Dişin ağrıyorsa diş hekimine git."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Чтобы сесть на поезд, вам нужен ___.",
        "answer": "билет",
        "translation": "Trene binmek için bilete ihtiyacın var."
      },
      {
        "wordIndex": 5,
        "text": "Покажите свой ___ на границе.",
        "answer": "паспорт",
        "translation": "Sınırda pasaportunu göster."
      },
      {
        "wordIndex": 7,
        "text": "Используйте ___, чтобы найти музей.",
        "answer": "карту",
        "translation": "Müzeyi bulmak için haritayı kullan."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "___ осмотрел пациента.",
        "answer": "Врач",
        "translation": "Doktor hastayı muayene etti."
      },
      {
        "wordIndex": 4,
        "text": "Примите это ___ после завтрака.",
        "answer": "лекарство",
        "translation": "Bu ilacı kahvaltıdan sonra al."
      },
      {
        "wordIndex": 7,
        "text": "У ребенка высокая ___.",
        "answer": "лихорадка",
        "translation": "Çocuğun yüksek ateşi var."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "На этой неделе билеты ___.",
        "answer": "дешевы",
        "translation": "Biletler bu hafta ucuz."
      },
      {
        "wordIndex": 5,
        "text": "Какова ___ этой сумки?",
        "answer": "цена",
        "translation": "Bu çantanın fiyatı nedir?"
      },
      {
        "wordIndex": 9,
        "text": "Мы должны оставаться в рамках нашего ___.",
        "answer": "бюджета",
        "translation": "Bütçemizin sınırları içinde kalmalıyız."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Регулярные ___ полезны для здоровья.",
        "answer": "физические упражнения",
        "translation": "Düzenli egzersiz sağlığın için iyidir."
      },
      {
        "wordIndex": 6,
        "text": "Наша ___ выиграла матч.",
        "answer": "команда",
        "translation": "Takımımız karşılaşmayı kazandı."
      },
      {
        "wordIndex": 7,
        "text": "___ объяснил новую стратегию.",
        "answer": "Тренер",
        "translation": "Antrenör yeni stratejiyi açıkladı."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Ребенок забил ___ в сетку.",
        "answer": "мяч",
        "translation": "Çocuk topu ağlara doğru vurdu."
      },
      {
        "wordIndex": 8,
        "text": "На соревнованиях она завоевала золотую ___.",
        "answer": "медаль",
        "translation": "Yarışmada altın madalya kazandı."
      },
      {
        "wordIndex": 7,
        "text": "Тысячи болельщиков заполнили ___.",
        "answer": "стадион",
        "translation": "Binlerce taraftar stadyumu doldurdu."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Я использую ___ для написания отчетов.",
        "answer": "компьютер",
        "translation": "Rapor yazmak için bilgisayar kullanırım."
      },
      {
        "wordIndex": 3,
        "text": "Введите свое имя на ___.",
        "answer": "клавиатуре",
        "translation": "Adını klavyede yaz."
      },
      {
        "wordIndex": 8,
        "text": "___ моего телефона почти разряжена.",
        "answer": "Батарея",
        "translation": "Telefonumun pili neredeyse boş."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Выберите надежный ___ для своей учетной записи.",
        "answer": "пароль",
        "translation": "Hesabın için güçlü bir şifre seç."
      },
      {
        "wordIndex": 5,
        "text": "Сохраните ___ перед закрытием программы.",
        "answer": "файл",
        "translation": "Programı kapatmadan önce dosyayı kaydet."
      },
      {
        "wordIndex": 9,
        "text": "Вы можете ___ информацию в Интернете.",
        "answer": "поискать",
        "translation": "İnternette bilgi arayabilirsin."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Турецкий — мой первый ___.",
        "answer": "язык",
        "translation": "Türkçe benim ilk dilimdir."
      },
      {
        "wordIndex": 7,
        "text": "Я заканчиваю ___ до ужина.",
        "answer": "домашнее задание",
        "translation": "Ödevimi akşam yemeğinden önce bitiririm."
      },
      {
        "wordIndex": 8,
        "text": "Завтра у нас ___ по математике.",
        "answer": "экзамен",
        "translation": "Yarın matematik sınavımız var."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "Каково ___ этого слова?",
        "answer": "значение",
        "translation": "Bu kelimenin anlamı nedir?"
      },
      {
        "wordIndex": 5,
        "text": "Этот ___ легко понять.",
        "answer": "перевод",
        "translation": "Bu çeviriyi anlamak kolaydır."
      },
      {
        "wordIndex": 6,
        "text": "Слушание помогает улучшить ваше ___.",
        "answer": "произношение",
        "translation": "Dinlemek telaffuzunu geliştirmeye yardımcı olur."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Учитель задал интересный ___.",
        "answer": "вопрос",
        "translation": "Öğretmen ilginç bir soru sordu."
      },
      {
        "wordIndex": 5,
        "text": "Нам нужно ___ этой проблемы.",
        "answer": "решение",
        "translation": "Bu soruna bir çözüm bulmamız gerekiyor."
      },
      {
        "wordIndex": 7,
        "text": "Это отличная ___.",
        "answer": "идея",
        "translation": "Bu harika bir fikir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "На мой ___, это хорошая идея.",
        "answer": "мнение",
        "translation": "Bence bu iyi bir fikir."
      },
      {
        "wordIndex": 4,
        "text": "Полиция ищет ___.",
        "answer": "доказательства",
        "translation": "Polis kanıt arıyor."
      },
      {
        "wordIndex": 9,
        "text": "Напишите краткое ___ истории.",
        "answer": "резюме",
        "translation": "Hikâyenin kısa bir özetini yaz."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Мы работаем над новым ___.",
        "answer": "проектом",
        "translation": "Yeni bir proje üzerinde çalışıyoruz."
      },
      {
        "wordIndex": 6,
        "text": "___ отчета — пятница.",
        "answer": "Срок подачи",
        "translation": "Raporun son teslim tarihi cumadır."
      },
      {
        "wordIndex": 8,
        "text": "___ начнется в девять.",
        "answer": "Встреча",
        "translation": "Toplantı dokuzda başlar."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "У каждого ___ есть письменный стол.",
        "answer": "сотрудника",
        "translation": "Her çalışanın bir masası var."
      },
      {
        "wordIndex": 4,
        "text": "___ спросил о цене.",
        "answer": "клиент",
        "translation": "Müşteri fiyatı sordu."
      },
      {
        "wordIndex": 9,
        "text": "Прочтите ___ перед его подписанием.",
        "answer": "контракт",
        "translation": "İmzalamadan önce sözleşmeyi oku."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Она получает свою ___ каждый месяц.",
        "answer": "зарплату",
        "translation": "Maaşını her ay alır."
      },
      {
        "wordIndex": 6,
        "text": "Мы платим ___ на наш доход.",
        "answer": "налог",
        "translation": "Gelirimiz üzerinden vergi öderiz."
      },
      {
        "wordIndex": 8,
        "text": "Он взял ___, чтобы купить дом.",
        "answer": "кредит",
        "translation": "Ev almak için kredi çekti."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Мой ___ находится на втором этаже.",
        "answer": "офис",
        "translation": "Ofisim ikinci katta."
      },
      {
        "wordIndex": 1,
        "text": "___ производит автомобили.",
        "answer": "Завод",
        "translation": "Fabrika araba üretir."
      },
      {
        "wordIndex": 7,
        "text": "Она хочет ___ в медицине.",
        "answer": "карьеру",
        "translation": "Tıp alanında kariyer istiyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "___ контролирует многие функции организма.",
        "answer": "Мозг",
        "translation": "Beyin vücudun birçok işlevini kontrol eder."
      },
      {
        "wordIndex": 1,
        "text": "Сердце перекачивает ___ по всему телу.",
        "answer": "кровь",
        "translation": "Kalp vücuda kan pompalar."
      },
      {
        "wordIndex": 4,
        "text": "Защищайте свою ___ от солнца.",
        "answer": "кожу",
        "translation": "Cildini güneşten koru."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Кашель может быть ___ простуды.",
        "answer": "симптомом",
        "translation": "Öksürük soğuk algınlığının bir belirtisi olabilir."
      },
      {
        "wordIndex": 5,
        "text": "Завтра у меня ___ с врачом.",
        "answer": "встреча",
        "translation": "Yarın doktorla randevum var."
      },
      {
        "wordIndex": 8,
        "text": "Вызовите скорую помощь в ___.",
        "answer": "чрезвычайной ситуации",
        "translation": "Acil bir durumda ambulans çağır."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Студенты могут ___ деньги, работая неполный рабочий день.",
        "answer": "зарабатывать",
        "translation": "Öğrenciler yarı zamanlı çalışarak para kazanabilir."
      },
      {
        "wordIndex": 3,
        "text": "Разумно ___ в образование.",
        "answer": "инвестировать",
        "translation": "Eğitime yatırım yapmak akıllıcadır."
      },
      {
        "wordIndex": 9,
        "text": "Сохраните ___ на случай, если вам понадобится возврат средств.",
        "answer": "квитанцию",
        "translation": "İade gerekirse diye fişi sakla."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Компания планирует ___ больше инженеров.",
        "answer": "нанять",
        "translation": "Şirket daha fazla mühendis işe almayı planlıyor."
      },
      {
        "wordIndex": 8,
        "text": "Нам необходимо тщательно ___ мероприятие.",
        "answer": "организовать",
        "translation": "Etkinliği dikkatle düzenlememiz gerekiyor."
      },
      {
        "wordIndex": 7,
        "text": "Сможете ли вы ___ командой из десяти человек?",
        "answer": "управлять",
        "translation": "On kişilik bir takımı yönetebilir misin?"
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Менеджер должен ___ запрос.",
        "answer": "одобрить",
        "translation": "Yönetici talebi onaylamalıdır."
      },
      {
        "wordIndex": 6,
        "text": "Шлем может помочь ___ серьезные травмы.",
        "answer": "предотвратить",
        "translation": "Kask ciddi yaralanmaları önlemeye yardımcı olabilir."
      },
      {
        "wordIndex": 9,
        "text": "Все сотрудники должны ___ правила безопасности.",
        "answer": "соблюдать",
        "translation": "Tüm çalışanlar güvenlik kurallarına uymalıdır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Каждый ___ имеет права и обязанности.",
        "answer": "гражданин",
        "translation": "Her vatandaşın hakları ve sorumlulukları vardır."
      },
      {
        "wordIndex": 4,
        "text": "Мы пересекли ___ ночью.",
        "answer": "границу",
        "translation": "Sınırı gece geçtik."
      },
      {
        "wordIndex": 7,
        "text": "Офицер проверил мою ___.",
        "answer": "личность",
        "translation": "Görevli kimliğimi kontrol etti."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Наше ___ помогает нуждающимся.",
        "answer": "сообщество",
        "translation": "Topluluğumuz ihtiyaç sahiplerine yardım eder."
      },
      {
        "wordIndex": 3,
        "text": "Совместная трапеза здесь является важной ___.",
        "answer": "традицией",
        "translation": "Bir yemeği paylaşmak burada önemli bir gelenektir."
      },
      {
        "wordIndex": 6,
        "text": "Мы отмечаем ___ нашего города.",
        "answer": "разнообразие",
        "translation": "Şehrimizin çeşitliliğini kutlarız."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Проведение времени на ___ помогает мне расслабиться.",
        "answer": "природе",
        "translation": "Doğada zaman geçirmek rahatlamama yardımcı olur."
      },
      {
        "wordIndex": 5,
        "text": "___ меняется во всем мире.",
        "answer": "Климат",
        "translation": "İklim dünya genelinde değişiyor."
      },
      {
        "wordIndex": 8,
        "text": "___ помогает сократить количество отходов.",
        "answer": "Переработка",
        "translation": "Geri dönüşüm atıkları azaltmaya yardımcı olur."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Нам нужна ___ для обогрева наших домов.",
        "answer": "энергия",
        "translation": "Evlerimizi ısıtmak için enerjiye ihtiyacımız var."
      },
      {
        "wordIndex": 4,
        "text": "Сжигание ___ приводит к загрязнению воздуха.",
        "answer": "угля",
        "translation": "Kömür yakmak hava kirliliğine neden olur."
      },
      {
        "wordIndex": 6,
        "text": "Вода — ценный природный ___.",
        "answer": "ресурс",
        "translation": "Su değerli bir doğal kaynaktır."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Земля — это ___, на которой мы живем.",
        "answer": "планета",
        "translation": "Dünya üzerinde yaşadığımız gezegendir."
      },
      {
        "wordIndex": 2,
        "text": "Сегодня ночью будет видна самая яркая ___.",
        "answer": "звезда",
        "translation": "Bu gece en parlak yıldız görünüyor."
      },
      {
        "wordIndex": 6,
        "text": "___ удерживает нас на земле.",
        "answer": "Гравитация",
        "translation": "Yerçekimi bizi yerde tutar."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "___ – это базовая единица материи.",
        "answer": "Атом",
        "translation": "Atom maddenin temel bir birimidir."
      },
      {
        "wordIndex": 7,
        "text": "___ внутри контейнера возросло.",
        "answer": "Давление",
        "translation": "Kabın içindeki basınç arttı."
      },
      {
        "wordIndex": 8,
        "text": "___ воды меняется в зависимости от температуры.",
        "answer": "Плотность",
        "translation": "Suyun yoğunluğu sıcaklıkla değişir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Проверьте ___ перед размещением заказа.",
        "answer": "количество",
        "translation": "Siparişi vermeden önce miktarı kontrol et."
      },
      {
        "wordIndex": 5,
        "text": "___ двух и четырех равно трем.",
        "answer": "Среднее",
        "translation": "İki ve dördün ortalaması üçtür."
      },
      {
        "wordIndex": 7,
        "text": "Видите ли вы ___ между этими изображениями?",
        "answer": "разницу",
        "translation": "Bu resimler arasındaki farkı görebiliyor musun?"
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Пожалуйста, ___ общую стоимость.",
        "answer": "подсчитайте",
        "translation": "Lütfen toplam maliyeti hesapla."
      },
      {
        "wordIndex": 2,
        "text": "Прежде чем покупать ковер, нам нужно ___ комнату.",
        "answer": "измерить",
        "translation": "Halı almadan önce odayı ölçmemiz gerekiyor."
      },
      {
        "wordIndex": 6,
        "text": "Если ___ три на четыре, получится двенадцать.",
        "answer": "умножить",
        "translation": "Üç ile dördü çarparsan on iki elde edersin."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Ученые ___ за поведением животных.",
        "answer": "наблюдают",
        "translation": "Bilim insanları hayvanların davranışlarını gözlemler."
      },
      {
        "wordIndex": 3,
        "text": "Всегда ___ информацию, прежде чем делиться ею.",
        "answer": "проверяйте",
        "translation": "Bilgiyi paylaşmadan önce her zaman doğrula."
      },
      {
        "wordIndex": 8,
        "text": "Трудно ___ погоду точно.",
        "answer": "предсказать",
        "translation": "Hava durumunu tam olarak öngörmek zordur."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Этот ___ упрощает обучение.",
        "answer": "метод",
        "translation": "Bu yöntem öğrenmeyi kolaylaştırır."
      },
      {
        "wordIndex": 4,
        "text": "Мы изучили ___ здания.",
        "answer": "конструкцию",
        "translation": "Binanın yapısını inceledik."
      },
      {
        "wordIndex": 6,
        "text": "Каждый ___ выполняет важную функцию.",
        "answer": "компонент",
        "translation": "Her bileşenin önemli bir işlevi vardır."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Сон оказывает сильное ___ на концентрацию.",
        "answer": "влияние",
        "translation": "Uykunun dikkat üzerinde güçlü bir etkisi vardır."
      },
      {
        "wordIndex": 4,
        "text": "Стоимость является важным ___ в нашем решении.",
        "answer": "фактором",
        "translation": "Maliyet kararımızda önemli bir etkendir."
      },
      {
        "wordIndex": 7,
        "text": "Вы можете лучше понять слово в ___.",
        "answer": "контексте",
        "translation": "Bir kelimeyi bağlam içinde daha iyi anlayabilirsin."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Одним из ___ ходьбы является улучшение здоровья.",
        "answer": "преимуществ",
        "translation": "Yürümenin bir faydası daha iyi sağlıktır."
      },
      {
        "wordIndex": 3,
        "text": "Пристегивание ремня безопасности снижает ___ травм.",
        "answer": "риск",
        "translation": "Emniyet kemeri takmak yaralanma riskini azaltır."
      },
      {
        "wordIndex": 6,
        "text": "Отсутствие денег может стать ___ для получения образования.",
        "answer": "препятствием",
        "translation": "Para eksikliği eğitimin önünde bir engel olabilir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Чистая вода ___ для жизни.",
        "answer": "необходима",
        "translation": "Temiz su yaşam için gereklidir."
      },
      {
        "wordIndex": 2,
        "text": "Дополнительное упражнение является ___.",
        "answer": "необязательным",
        "translation": "Ek alıştırma isteğe bağlıdır."
      },
      {
        "wordIndex": 9,
        "text": "___ машина потребляет меньше энергии.",
        "answer": "Эффективная",
        "translation": "Verimli bir makine daha az enerji kullanır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Чтобы принять правильное решение, нам нужна ___ информация.",
        "answer": "точная",
        "translation": "İyi bir karar vermek için doğru bilgiye ihtiyacımız var."
      },
      {
        "wordIndex": 2,
        "text": "Этот веб-сайт является ___ источником информации.",
        "answer": "надежным",
        "translation": "Bu internet sitesi güvenilir bir bilgi kaynağıdır."
      },
      {
        "wordIndex": 9,
        "text": "Наше расписание ___, поэтому мы можем изменить время.",
        "answer": "гибкое",
        "translation": "Programımız esnek, bu yüzden saati değiştirebiliriz."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Человеческий мозг очень ___.",
        "answer": "сложен",
        "translation": "İnsan beyni çok karmaşıktır."
      },
      {
        "wordIndex": 2,
        "text": "Свобода — это ___ понятие.",
        "answer": "абстрактное",
        "translation": "Özgürlük soyut bir kavramdır."
      },
      {
        "wordIndex": 8,
        "text": "Отпечатки пальцев каждого человека ___.",
        "answer": "уникальны",
        "translation": "Her insanın parmak izleri benzersizdir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Чтение увеличивает ваши ___.",
        "answer": "знания",
        "translation": "Okumak bilgini artırır."
      },
      {
        "wordIndex": 3,
        "text": "Изучение языка требует времени и ___.",
        "answer": "усилий",
        "translation": "Dil öğrenmek zaman ve çaba gerektirir."
      },
      {
        "wordIndex": 6,
        "text": "Эта работа — отличная ___ для меня.",
        "answer": "возможность",
        "translation": "Bu iş benim için harika bir fırsat."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Каждый заслуживает жить в ___.",
        "answer": "свободе",
        "translation": "Herkes özgürlük içinde yaşamayı hak eder."
      },
      {
        "wordIndex": 6,
        "text": "Обучение маленьких детей требует ___.",
        "answer": "терпения",
        "translation": "Küçük çocuklara öğretmenlik yapmak sabır gerektirir."
      },
      {
        "wordIndex": 7,
        "text": "Вы можете завоевать ___, сдерживая свои обещания.",
        "answer": "доверие",
        "translation": "Sözlerini tutarak güven oluşturabilirsin."
      }
    ],
    [
      {
        "wordIndex": 4,
        "text": "Еда — важная часть нашей ___.",
        "answer": "культуры",
        "translation": "Yemek, kültürümüzün önemli bir parçasıdır."
      },
      {
        "wordIndex": 5,
        "text": "Каждый ребенок имеет право на ___.",
        "answer": "образование",
        "translation": "Her çocuğun eğitim hakkı vardır."
      },
      {
        "wordIndex": 7,
        "text": "Современные ___ облегчают общение.",
        "answer": "технологии",
        "translation": "Modern teknoloji iletişimi kolaylaştırır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Каждый должен уважать ___.",
        "answer": "закон",
        "translation": "Herkes kanuna saygı göstermelidir."
      },
      {
        "wordIndex": 4,
        "text": "Пожалуйста, следуйте правильной ___.",
        "answer": "процедуре",
        "translation": "Lütfen doğru prosedürü takip et."
      },
      {
        "wordIndex": 8,
        "text": "За нарушение правил предусмотрен ___.",
        "answer": "штраф",
        "translation": "Kuralları çiğnemenin bir cezası var."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "___ выслушал свидетеля.",
        "answer": "Судья",
        "translation": "Hâkim tanığı dinledi."
      },
      {
        "wordIndex": 3,
        "text": "___ описал произошедшее.",
        "answer": "Свидетель",
        "translation": "Tanık ne olduğunu anlattı."
      },
      {
        "wordIndex": 8,
        "text": "Жюри огласило свой ___.",
        "answer": "вердикт",
        "translation": "Jüri hükmünü açıkladı."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Следующие ___ состоятся в июне.",
        "answer": "выборы",
        "translation": "Bir sonraki seçim haziranda yapılacak."
      },
      {
        "wordIndex": 2,
        "text": "Каждый ___ ответил на одни и те же вопросы.",
        "answer": "кандидат",
        "translation": "Her aday aynı soruları yanıtladı."
      },
      {
        "wordIndex": 9,
        "text": "___ защищает основные права.",
        "answer": "Конституция",
        "translation": "Anayasa temel hakları korur."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Мы покупаем овощи у ___ фермера.",
        "answer": "местного",
        "translation": "Yerel bir çiftçiden sebze alırız."
      },
      {
        "wordIndex": 5,
        "text": "Изучение ___ языка открывает новые двери.",
        "answer": "иностранного",
        "translation": "Yabancı bir dil öğrenmek yeni kapılar açar."
      },
      {
        "wordIndex": 7,
        "text": "Это ___ информация; пожалуйста, не делитесь этим.",
        "answer": "частная",
        "translation": "Bu özel bir bilgidir; lütfen paylaşma."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Обеспечьте безопасность вашей ___ информации.",
        "answer": "личной",
        "translation": "Kişisel bilgilerini güvende tut."
      },
      {
        "wordIndex": 7,
        "text": "Перед подписанием вам следует получить ___ консультацию.",
        "answer": "юридическую",
        "translation": "İmzalamadan önce hukuki tavsiye almalısın."
      },
      {
        "wordIndex": 8,
        "text": "Компания следует строгим ___ стандартам.",
        "answer": "этическим",
        "translation": "Şirket sıkı etik standartlara uyar."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "___ изменить дату?",
        "answer": "Можно ли",
        "translation": "Tarihi değiştirmek mümkün mü?"
      },
      {
        "wordIndex": 6,
        "text": "Я ___, что это правильный ответ.",
        "answer": "уверен",
        "translation": "Bunun doğru cevap olduğundan eminim."
      },
      {
        "wordIndex": 8,
        "text": "Ответ ___, если внимательно прочитать вопрос.",
        "answer": "очевиден",
        "translation": "Soruyu dikkatle okuyunca cevap açıkça bellidir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Это лишь ___ решение.",
        "answer": "временное",
        "translation": "Bu yalnızca geçici bir çözümdür."
      },
      {
        "wordIndex": 3,
        "text": "Мы заметили ___ улучшение ее здоровья.",
        "answer": "постепенное",
        "translation": "Sağlığında kademeli bir iyileşme fark ettik."
      },
      {
        "wordIndex": 8,
        "text": "Компания публикует ___ отчет.",
        "answer": "ежегодный",
        "translation": "Şirket yıllık bir rapor yayımlar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "___ план изменился после встречи.",
        "answer": "Первоначальный",
        "translation": "Başlangıçtaki plan toplantıdan sonra değişti."
      },
      {
        "wordIndex": 4,
        "text": "Какой у вас ___ адрес?",
        "answer": "текущий",
        "translation": "Mevcut adresin nedir?"
      },
      {
        "wordIndex": 7,
        "text": "Мы должны думать о ___ поколениях.",
        "answer": "будущих",
        "translation": "Gelecekteki nesilleri düşünmeliyiz."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Нам следует ___ цены перед покупкой.",
        "answer": "сравнить",
        "translation": "Satın almadan önce fiyatları karşılaştırmalıyız."
      },
      {
        "wordIndex": 7,
        "text": "Важно ___ здоровый баланс.",
        "answer": "поддерживать",
        "translation": "Sağlıklı bir denge sürdürmek önemlidir."
      },
      {
        "wordIndex": 9,
        "text": "Практика может ___ ваше произношение.",
        "answer": "улучшить",
        "translation": "Alıştırma yapmak telaffuzunu iyileştirebilir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Компания планирует ___ свой бизнес.",
        "answer": "расширять",
        "translation": "Şirket işini genişletmeyi planlıyor."
      },
      {
        "wordIndex": 1,
        "text": "Нам следует ___ потребление воды.",
        "answer": "сократить",
        "translation": "Su tüketimimizi azaltmalıyız."
      },
      {
        "wordIndex": 5,
        "text": "Животные должны ___ к изменениям в окружающей среде.",
        "answer": "адаптироваться",
        "translation": "Hayvanlar çevrelerindeki değişikliklere uyum sağlamalıdır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Пожалуйста, ___ свой номер телефона в форме.",
        "answer": "укажите",
        "translation": "Lütfen telefon numaranı forma ekle."
      },
      {
        "wordIndex": 6,
        "text": "Красные линии ___ дороги на этой карте.",
        "answer": "обозначают",
        "translation": "Bu haritada kırmızı çizgiler yolları temsil eder."
      },
      {
        "wordIndex": 8,
        "text": "Зеркала ___ свет.",
        "answer": "отражают",
        "translation": "Aynalar ışığı yansıtır."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Пожалуйста, ___ все варианты, прежде чем принять решение.",
        "answer": "рассмотрите",
        "translation": "Lütfen karar vermeden önce tüm seçenekleri dikkate al."
      },
      {
        "wordIndex": 6,
        "text": "Я могу ___ основную мысль этого текста.",
        "answer": "понять",
        "translation": "Bu metnin ana fikrini anlayabiliyorum."
      },
      {
        "wordIndex": 8,
        "text": "Мы можем ___ значение из контекста.",
        "answer": "вывести",
        "translation": "Bağlamdan anlam çıkarabiliriz."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Врач ___ ваше колено.",
        "answer": "осмотрит",
        "translation": "Doktor dizini inceleyecek."
      },
      {
        "wordIndex": 3,
        "text": "Пожалуйста, ___ свои ответы перед отправкой.",
        "answer": "проверьте",
        "translation": "Lütfen göndermeden önce cevaplarını gözden geçir."
      },
      {
        "wordIndex": 9,
        "text": "Путешествия помогают нам ___ новые культуры.",
        "answer": "открывать",
        "translation": "Seyahat yeni kültürler keşfetmemize yardımcı olur."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Школа ___ новую политику в следующем месяце.",
        "answer": "внедрит",
        "translation": "Okul yeni politikayı gelecek ay uygulamaya koyacak."
      },
      {
        "wordIndex": 6,
        "text": "Картинки могут ___ процесс обучения.",
        "answer": "облегчить",
        "translation": "Resimler öğrenme sürecini kolaylaştırabilir."
      },
      {
        "wordIndex": 8,
        "text": "Хорошие друзья ___ друг друга.",
        "answer": "поддерживают",
        "translation": "İyi arkadaşlar birbirini destekler."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Мы должны ___ достаточно времени для каждой задачи.",
        "answer": "выделить",
        "translation": "Her görev için yeterli zaman tahsis etmeliyiz."
      },
      {
        "wordIndex": 1,
        "text": "Волонтеры будут ___ еду семьям.",
        "answer": "раздавать",
        "translation": "Gönüllüler ailelere yiyecek dağıtacak."
      },
      {
        "wordIndex": 7,
        "text": "Библиотека может ___ полезную информацию.",
        "answer": "предоставить",
        "translation": "Kütüphane yararlı bilgiler sağlayabilir."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Попробуйте взглянуть на ситуацию с другой ___.",
        "answer": "точки зрения",
        "translation": "Durumu farklı bir bakış açısından görmeye çalış."
      },
      {
        "wordIndex": 3,
        "text": "Безопасность – наш главный ___.",
        "answer": "приоритет",
        "translation": "Güvenlik ilk önceliğimizdir."
      },
      {
        "wordIndex": 9,
        "text": "Ученый проверил новую ___.",
        "answer": "гипотезу",
        "translation": "Bilim insanı yeni bir hipotezi sınadı."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Сообщество продемонстрировало большую ___ после катастрофы.",
        "answer": "устойчивость",
        "translation": "Topluluk felaketten sonra büyük dayanıklılık gösterdi."
      },
      {
        "wordIndex": 4,
        "text": "Проект фокусируется на экологической ___.",
        "answer": "устойчивости",
        "translation": "Proje çevresel sürdürülebilirliğe odaklanır."
      },
      {
        "wordIndex": 8,
        "text": "Компания поощряет ___ и творческое мышление.",
        "answer": "инновации",
        "translation": "Şirket yenilikçiliği ve yaratıcı düşünmeyi teşvik eder."
      }
    ]
  ],
  "ar": [
    [
      {
        "wordIndex": 0,
        "text": "___ تنام على الكرسي.",
        "answer": "القطة",
        "translation": "Kedi sandalyede uyuyor."
      },
      {
        "wordIndex": 2,
        "text": "___ تمنحنا الضوء والدفء.",
        "answer": "الشمس",
        "translation": "Güneş bize ışık ve sıcaklık verir."
      },
      {
        "wordIndex": 7,
        "text": "قرأت ___ قبل النوم.",
        "answer": "كتابًا",
        "translation": "Yatmadan önce bir kitap okurum."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "تقوم ___ بإعداد حساء لذيذ.",
        "answer": "والدتي",
        "translation": "Annem lezzetli çorba yapar."
      },
      {
        "wordIndex": 4,
        "text": "يذهب الأطفال إلى ___ كل صباح.",
        "answer": "المدرسة",
        "translation": "Çocuklar her sabah okula gider."
      },
      {
        "wordIndex": 9,
        "text": "يرجى فتح ___ للحصول على بعض الهواء النقي.",
        "answer": "النافذة",
        "translation": "Biraz temiz hava için lütfen pencereyi aç."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "رائحة هذه ___ رائعة.",
        "answer": "الزهرة",
        "translation": "Bu çiçek harika kokuyor."
      },
      {
        "wordIndex": 5,
        "text": "أشرب كوبًا من ___ مع وجبة الإفطار.",
        "answer": "الحليب",
        "translation": "Kahvaltıda bir bardak süt içerim."
      },
      {
        "wordIndex": 8,
        "text": "تضع ___ حمراء في حقيبتها.",
        "answer": "تفاحة",
        "translation": "Çantasına kırmızı bir elma koyar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "توجد شمعة ___ على الكعكة.",
        "answer": "واحدة",
        "translation": "Pastanın üzerinde bir mum var."
      },
      {
        "wordIndex": 2,
        "text": "المثلث له ___ جوانب.",
        "answer": "ثلاثة",
        "translation": "Bir üçgenin üç kenarı vardır."
      },
      {
        "wordIndex": 9,
        "text": "لدي ___ أصابع.",
        "answer": "عشرة",
        "translation": "On parmağım var."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "علامة التوقف ___.",
        "answer": "حمراء",
        "translation": "Dur işareti kırmızıdır."
      },
      {
        "wordIndex": 1,
        "text": "السماء ___ اليوم.",
        "answer": "زرقاء",
        "translation": "Bugün gökyüzü mavidir."
      },
      {
        "wordIndex": 2,
        "text": "الأوراق ___ في الربيع.",
        "answer": "خضراء",
        "translation": "Yapraklar ilkbaharda yeşildir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "أعز ___ يعيش في البيت المجاور.",
        "answer": "صديقي",
        "translation": "En iyi arkadaşım yan evde yaşar."
      },
      {
        "wordIndex": 1,
        "text": "نتناول العشاء معًا ك___.",
        "answer": "عائلة",
        "translation": "Aile olarak birlikte akşam yemeği yeriz."
      },
      {
        "wordIndex": 3,
        "text": "___ لا يستطيع المشي بعد.",
        "answer": "الطفل",
        "translation": "Bebek henüz yürüyemiyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "ارتدِ خوذة لحماية ___.",
        "answer": "رأسك",
        "translation": "Başını korumak için kask tak."
      },
      {
        "wordIndex": 3,
        "text": "دخلت قطعة صغيرة من الغبار إلى ___.",
        "answer": "عيني",
        "translation": "Gözüme küçük bir toz kaçtı."
      },
      {
        "wordIndex": 8,
        "text": "التمرين مفيد ___.",
        "answer": "لقلبك",
        "translation": "Egzersiz kalbin için iyidir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "نتناول وجبة الإفطار في ___.",
        "answer": "الصباح",
        "translation": "Sabah kahvaltı yaparız."
      },
      {
        "wordIndex": 4,
        "text": "سنقوم بزيارة أجدادنا ___.",
        "answer": "غدًا",
        "translation": "Yarın büyükanne ve büyükbabamızı ziyaret edeceğiz."
      },
      {
        "wordIndex": 6,
        "text": "أشعر ___ عندما أرى أصدقائي.",
        "answer": "بالسعادة",
        "translation": "Arkadaşlarımı görünce mutlu hissederim."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "احرص؛ يصبح الحساء ___.",
        "answer": "ساخنًا",
        "translation": "Dikkat et; çorba sıcak."
      },
      {
        "wordIndex": 4,
        "text": "يرجى الحفاظ على غرفتك ___.",
        "answer": "نظيفة",
        "translation": "Lütfen odanı temiz tut."
      },
      {
        "wordIndex": 8,
        "text": "اشتريت هاتفًا ___ بالأمس.",
        "answer": "جديدًا",
        "translation": "Dün yeni bir telefon aldım."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "أحب ___ في الحديقة.",
        "answer": "المشي",
        "translation": "Parkta yürümeyi severim."
      },
      {
        "wordIndex": 5,
        "text": "نحن ___ قصة كل مساء.",
        "answer": "نقرأ",
        "translation": "Her akşam bir hikâye okuruz."
      },
      {
        "wordIndex": 4,
        "text": "يحتاج الأطفال إلى ___ كثيرًا.",
        "answer": "النوم",
        "translation": "Bebeklerin çok uyuması gerekir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "يرتدي ___ أبيضًا للعمل.",
        "answer": "قميصًا",
        "translation": "İşe beyaz bir gömlek giyer."
      },
      {
        "wordIndex": 3,
        "text": "خذ ___؛ الجو بارد في الخارج.",
        "answer": "معطفك",
        "translation": "Paltonu al; dışarısı soğuk."
      },
      {
        "wordIndex": 6,
        "text": "وهي ترتدي ___ لحماية نفسها من الشمس.",
        "answer": "قبعة",
        "translation": "Güneşten korunmak için şapka takar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "نقوم بطهي وجباتنا في ___.",
        "answer": "المطبخ",
        "translation": "Yemeklerimizi mutfakta pişiririz."
      },
      {
        "wordIndex": 4,
        "text": "المطر يتساقط على ___.",
        "answer": "السطح",
        "translation": "Yağmur çatıya düşüyor."
      },
      {
        "wordIndex": 9,
        "text": "نحن نزرع الزهور على ___.",
        "answer": "الشرفة",
        "translation": "Balkonda çiçek yetiştiririz."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "أضع رأسي على ___ الناعمة.",
        "answer": "الوسادة",
        "translation": "Başımı yumuşak yastığa koyarım."
      },
      {
        "wordIndex": 3,
        "text": "تنظر إلى ___ قبل أن تغادر.",
        "answer": "المرآة",
        "translation": "Çıkmadan önce aynaya bakar."
      },
      {
        "wordIndex": 9,
        "text": "ضع الكتاب على ___.",
        "answer": "الرف",
        "translation": "Kitabı rafa koy."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "أتناول الحساء باستخدام ___.",
        "answer": "ملعقة",
        "translation": "Çorbayı kaşıkla içerim."
      },
      {
        "wordIndex": 2,
        "text": "استخدم ___ لتقطيع الخبز.",
        "answer": "سكينًا",
        "translation": "Ekmeği kesmek için bıçak kullan."
      },
      {
        "wordIndex": 3,
        "text": "توجد شطيرة على ___.",
        "answer": "الطبق",
        "translation": "Tabakta bir sandviç var."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "أحب ___ في شطيرتي.",
        "answer": "الجبن",
        "translation": "Sandviçimde peynir severim."
      },
      {
        "wordIndex": 3,
        "text": "وضعت الدجاجة ___.",
        "answer": "بيضة",
        "translation": "Tavuk bir yumurta yumurtladı."
      },
      {
        "wordIndex": 9,
        "text": "الأرنب يأكل ___.",
        "answer": "جزرة",
        "translation": "Tavşan bir havuç yiyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "تتميز ___ الناضجة بقشرة صفراء.",
        "answer": "الموزة",
        "translation": "Olgun bir muzun kabuğu sarıdır."
      },
      {
        "wordIndex": 5,
        "text": "أضف بعض ___ إلى الشاي.",
        "answer": "الليمون",
        "translation": "Çayına biraz limon ekle."
      },
      {
        "wordIndex": 7,
        "text": "نحن نأكل ___ البارد في الصيف.",
        "answer": "البطيخ",
        "translation": "Yazın soğuk karpuz yeriz."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "نحن نتناول ___ قبل الذهاب إلى المدرسة.",
        "answer": "الإفطار",
        "translation": "Okula gitmeden önce kahvaltı yaparız."
      },
      {
        "wordIndex": 5,
        "text": "يحتاج هذا الحساء إلى القليل من ___.",
        "answer": "الملح",
        "translation": "Bu çorbanın biraz tuza ihtiyacı var."
      },
      {
        "wordIndex": 7,
        "text": "ينتج النحل ___.",
        "answer": "العسل",
        "translation": "Arılar bal üretir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "نحن نسبح في البحر خلال ___.",
        "answer": "الصيف",
        "translation": "Yaz boyunca denizde yüzeriz."
      },
      {
        "wordIndex": 3,
        "text": "يكون الجو باردًا عادةً في ___.",
        "answer": "الشتاء",
        "translation": "Kışın hava genellikle soğuktur."
      },
      {
        "wordIndex": 7,
        "text": "___ يتكون من اثني عشر شهرًا.",
        "answer": "العام",
        "translation": "Bir yılda on iki ay vardır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "يبدأ أسبوع العمل يوم ___.",
        "answer": "الاثنين",
        "translation": "Çalışma haftası pazartesi başlar."
      },
      {
        "wordIndex": 6,
        "text": "نحن عادة نرتاح يوم ___.",
        "answer": "الأحد",
        "translation": "Genellikle pazar günü dinleniriz."
      },
      {
        "wordIndex": 8,
        "text": "حدد تاريخ الاجتماع في ___.",
        "answer": "التقويم",
        "translation": "Toplantı tarihini takvimde işaretle."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "أخذنا مظلة بسبب ___.",
        "answer": "المطر",
        "translation": "Yağmur nedeniyle şemsiye aldık."
      },
      {
        "wordIndex": 1,
        "text": "الجبال مغطاة ___ الأبيض.",
        "answer": "بالثلج",
        "translation": "Dağlar beyaz karla kaplı."
      },
      {
        "wordIndex": 2,
        "text": "___ القوية حركت الفروع.",
        "answer": "الرياح",
        "translation": "Güçlü rüzgâr dalları hareket ettirdi."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "أريد ___ لغة جديدة.",
        "answer": "تعلم",
        "translation": "Yeni bir dil öğrenmek istiyorum."
      },
      {
        "wordIndex": 4,
        "text": "نحن بحاجة إلى ___ بعض الخبز.",
        "answer": "شراء",
        "translation": "Biraz ekmek satın almamız gerekiyor."
      },
      {
        "wordIndex": 6,
        "text": "من فضلك ___ الباب.",
        "answer": "فتح",
        "translation": "Lütfen kapıyı aç."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "يمكن للأسماك ___ في الماء.",
        "answer": "السباحة",
        "translation": "Balıklar suda yüzebilir."
      },
      {
        "wordIndex": 5,
        "text": "نحب ___ معًا.",
        "answer": "الغناء",
        "translation": "Birlikte şarkı söylemeyi severiz."
      },
      {
        "wordIndex": 8,
        "text": "أريد ___ العشاء الليلة.",
        "answer": "طهي",
        "translation": "Bu akşam yemek pişirmek istiyorum."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "من فضلك ___ التفاحة إلى نصفين.",
        "answer": "قطع",
        "translation": "Lütfen elmayı ikiye kes."
      },
      {
        "wordIndex": 4,
        "text": "لا ___ القمامة على الأرض.",
        "answer": "ترمي",
        "translation": "Yere çöp atma."
      },
      {
        "wordIndex": 9,
        "text": "لا ___ المقلاة الساخنة.",
        "answer": "تلمس",
        "translation": "Sıcak tavaya dokunma."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "هل يمكنك ___ الطيور في الخارج؟",
        "answer": "سماع",
        "translation": "Dışarıdaki kuşları duyabiliyor musun?"
      },
      {
        "wordIndex": 8,
        "text": "أستطيع ___ اسمك.",
        "answer": "أتذكر",
        "translation": "Adını hatırlayabiliyorum."
      },
      {
        "wordIndex": 6,
        "text": "من فضلك ___ قبل أن تجيب.",
        "answer": "فكر",
        "translation": "Lütfen cevaplamadan önce düşün."
      }
    ],
    [
      {
        "wordIndex": 5,
        "text": "الكلمة الطيبة يمكن أن تجعل الشخص ___.",
        "answer": "يبتسم",
        "translation": "Nazik bir söz birini gülümsetebilir."
      },
      {
        "wordIndex": 7,
        "text": "من الطبيعي ___ عندما تشعر بالحزن.",
        "answer": "البكاء",
        "translation": "Üzgün hissedince ağlamak normaldir."
      },
      {
        "wordIndex": 9,
        "text": "من فضلك ___; الطفل نائم.",
        "answer": "الهمس",
        "translation": "Lütfen fısılda; bebek uyuyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "يمكنك ___ من المعلم المساعدة.",
        "answer": "طلب",
        "translation": "Öğretmenden yardım isteyebilirsin."
      },
      {
        "wordIndex": 2,
        "text": "هل يمكنك ___ القاعدة لي؟",
        "answer": "شرح",
        "translation": "Kuralı bana açıklayabilir misin?"
      },
      {
        "wordIndex": 7,
        "text": "لا ___ بشيء لا يمكنك فعله.",
        "answer": "تعد",
        "translation": "Yapamayacağın bir şey için söz verme."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "سنقوم ___ جيراننا لتناول العشاء.",
        "answer": "بدعوة",
        "translation": "Komşularımızı akşam yemeğine davet edeceğiz."
      },
      {
        "wordIndex": 5,
        "text": "يرجى ___ قبل الساعة الثامنة صباحًا.",
        "answer": "الوصول",
        "translation": "Lütfen saat sekizden önce var."
      },
      {
        "wordIndex": 9,
        "text": "الرجاء ___ هنا للحظة.",
        "answer": "الانتظار",
        "translation": "Lütfen burada bir dakika bekle."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "إنهم يخططون ___ مدرسة جديدة.",
        "answer": "لبناء",
        "translation": "Yeni bir okul inşa etmeyi planlıyorlar."
      },
      {
        "wordIndex": 2,
        "text": "هل يمكنك ___ دراجتي؟",
        "answer": "إصلاح",
        "translation": "Bisikletimi onarabilir misin?"
      },
      {
        "wordIndex": 9,
        "text": "يمكننا ___ بعد استراحة قصيرة.",
        "answer": "المتابعة",
        "translation": "Kısa bir aradan sonra devam edebiliriz."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "لا أستطيع ___ على مفاتيحي.",
        "answer": "العثور",
        "translation": "Anahtarlarımı bulamıyorum."
      },
      {
        "wordIndex": 7,
        "text": "هل يمكنني ___ قلمك؟",
        "answer": "استعارة",
        "translation": "Kalemini ödünç alabilir miyim?"
      },
      {
        "wordIndex": 9,
        "text": "يمكنك ___ بالبطاقة.",
        "answer": "الدفع",
        "translation": "Kartla ödeyebilirsin."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "من فضلك ___ لي رسالة.",
        "answer": "أرسل",
        "translation": "Lütfen bana bir mesaj gönder."
      },
      {
        "wordIndex": 5,
        "text": "تذكر ___ عملك.",
        "answer": "حفظ",
        "translation": "Çalışmanı kaydetmeyi unutma."
      },
      {
        "wordIndex": 9,
        "text": "هل يمكنك ___ هذه الوثيقة؟",
        "answer": "طباعة",
        "translation": "Bu belgeyi yazdırabilir misin?"
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "الأسد حيوان ___.",
        "answer": "قوي",
        "translation": "Aslan güçlü bir hayvandır."
      },
      {
        "wordIndex": 4,
        "text": "تحتاج الشجرة ___ إلى الماء.",
        "answer": "الصغيرة",
        "translation": "Genç ağacın suya ihtiyacı var."
      },
      {
        "wordIndex": 7,
        "text": "هذه الحقيبة ___ جدًا بالنسبة لي.",
        "answer": "ثقيلة",
        "translation": "Bu bavul benim için çok ağır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "الزجاجة ___؛ يرجى ملئه.",
        "answer": "فارغة",
        "translation": "Şişe boş; lütfen doldur."
      },
      {
        "wordIndex": 6,
        "text": "تبدو هذه البطانية ___ للغاية.",
        "answer": "ناعمة",
        "translation": "Bu battaniye çok yumuşak hissettiriyor."
      },
      {
        "wordIndex": 2,
        "text": "النهر ___ للغاية بحيث لا يمكن عبوره هنا.",
        "answer": "واسع",
        "translation": "Nehir buradan geçmek için çok geniş."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "يرجى التزام ___ في المكتبة.",
        "answer": "الهدوء",
        "translation": "Lütfen kütüphanede sessiz ol."
      },
      {
        "wordIndex": 5,
        "text": "حذائي ___ من المطر.",
        "answer": "مبتل",
        "translation": "Ayakkabılarım yağmurdan ıslak."
      },
      {
        "wordIndex": 8,
        "text": "كن حذرًا مع تلك السكين ___.",
        "answer": "الحادة",
        "translation": "O keskin bıçağa dikkat et."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "معلمنا دائمًا ___ معنا.",
        "answer": "لطيف",
        "translation": "Öğretmenimiz bize her zaman naziktir."
      },
      {
        "wordIndex": 4,
        "text": "إنه ___ ويشاركه ما لديه.",
        "answer": "كريم",
        "translation": "O cömerttir ve sahip olduklarını paylaşır."
      },
      {
        "wordIndex": 8,
        "text": "تحدث الطفل ___ بهدوء شديد.",
        "answer": "الخجول",
        "translation": "Utangaç çocuk çok yumuşak bir sesle konuştu."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "وقام رجل الإطفاء ___ بإنقاذ الطفل.",
        "answer": "الشجاع",
        "translation": "Cesur itfaiyeci çocuğu kurtardı."
      },
      {
        "wordIndex": 4,
        "text": "طرح الطالب ___ العديد من الأسئلة.",
        "answer": "الفضولي",
        "translation": "Meraklı öğrenci birçok soru sordu."
      },
      {
        "wordIndex": 5,
        "text": "الشخص ___ يقول الحقيقة.",
        "answer": "الصادق",
        "translation": "Dürüst bir insan doğruyu söyler."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "يساعدك تناول الخضروات على البقاء ___.",
        "answer": "بصحة جيدة",
        "translation": "Sebze yemek sağlıklı kalmana yardımcı olur."
      },
      {
        "wordIndex": 4,
        "text": "أشعر ___ بعد الرحلة الطويلة.",
        "answer": "بالتعب",
        "translation": "Uzun yolculuktan sonra yorgun hissediyorum."
      },
      {
        "wordIndex": 6,
        "text": "بعد الركض، أشعر ___ جدًا.",
        "answer": "بالعطش",
        "translation": "Koştuktan sonra çok susamış olurum."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "كان يحمل الحقيبة على ___.",
        "answer": "كتفه",
        "translation": "Çantayı omzunda taşıdı."
      },
      {
        "wordIndex": 5,
        "text": "كانت ترتدي خاتمًا في ___.",
        "answer": "إصبعها",
        "translation": "Parmağına bir yüzük taktı."
      },
      {
        "wordIndex": 7,
        "text": "لقد آذيت ___ عندما سقطت.",
        "answer": "ركبتي",
        "translation": "Düştüğümde dizimi incittim."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "لقد جاءت ___ في السباق.",
        "answer": "الأولى",
        "translation": "Yarışta birinci geldi."
      },
      {
        "wordIndex": 6,
        "text": "وصلنا ___ للحصول على مقاعد جيدة.",
        "answer": "مبكرًا",
        "translation": "İyi koltuklar bulmak için erken geldik."
      },
      {
        "wordIndex": 9,
        "text": "أنا ___ أنسى أبدًا عيد ميلاد والدتي.",
        "answer": "لا",
        "translation": "Annemin doğum gününü asla unutmam."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "___ أذهب إلى العمل سيرًا على الأقدام.",
        "answer": "أحيانًا",
        "translation": "Bazen işe yürürüm."
      },
      {
        "wordIndex": 6,
        "text": "ستصل الحافلة ___.",
        "answer": "قريبًا",
        "translation": "Otobüs yakında gelecek."
      },
      {
        "wordIndex": 8,
        "text": "يرجى قراءة الجملة ___.",
        "answer": "مرة أخرى",
        "translation": "Lütfen cümleyi tekrar oku."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "انعطف ___ عند الشارع التالي.",
        "answer": "يسارًا",
        "translation": "Bir sonraki sokakta sola dön."
      },
      {
        "wordIndex": 7,
        "text": "يقع البنك ___ المدرسة والمنتزه.",
        "answer": "بين",
        "translation": "Banka okul ile parkın arasındadır."
      },
      {
        "wordIndex": 9,
        "text": "المطار ___ عن وسط المدينة.",
        "answer": "بعيد",
        "translation": "Havalimanı şehir merkezinden uzaktır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "يعيش العديد من الأشخاص في هذه ___ الكبيرة.",
        "answer": "المدينة",
        "translation": "Bu büyük şehirde birçok insan yaşar."
      },
      {
        "wordIndex": 4,
        "text": "يعبر ___ القديم النهر.",
        "answer": "الجسر",
        "translation": "Eski köprü nehrin üzerinden geçer."
      },
      {
        "wordIndex": 8,
        "text": "تعيش العديد من الحيوانات البرية في ___.",
        "answer": "الغابة",
        "translation": "Ormanda birçok vahşi hayvan yaşar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "نستقل ___ إلى المدرسة.",
        "answer": "الحافلة",
        "translation": "Okula otobüsle gideriz."
      },
      {
        "wordIndex": 4,
        "text": "أركب ___ في الحديقة.",
        "answer": "دراجتي",
        "translation": "Parkta bisikletime binerim."
      },
      {
        "wordIndex": 1,
        "text": "يغادر ___ من المنصة الثانية.",
        "answer": "القطار",
        "translation": "Tren ikinci perondan kalkar."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "تحتوي الدراجة على ___ مكسورة.",
        "answer": "عجلة",
        "translation": "Bisikletin kırık bir tekerleği var."
      },
      {
        "wordIndex": 4,
        "text": "توقف ___ عند الإشارة الحمراء.",
        "answer": "السائق",
        "translation": "Sürücü kırmızı ışıkta durdu."
      },
      {
        "wordIndex": 8,
        "text": "لا يمكن للسيارة أن تسير بدون ___.",
        "answer": "وقود",
        "translation": "Araba yakıt olmadan çalışamaz."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "أحتفظ بأموالي في ___.",
        "answer": "البنك",
        "translation": "Paramı bankada tutarım."
      },
      {
        "wordIndex": 4,
        "text": "يمكنك استعارة الكتب من ___.",
        "answer": "المكتبة",
        "translation": "Kütüphaneden ödünç kitap alabilirsin."
      },
      {
        "wordIndex": 9,
        "text": "نشتري الخبز الطازج من ___.",
        "answer": "المخبز",
        "translation": "Fırından taze ekmek alırız."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "صمم ___ جسرًا جديدًا.",
        "answer": "المهندس",
        "translation": "Mühendis yeni bir köprü tasarladı."
      },
      {
        "wordIndex": 4,
        "text": "يقوم ___ بزراعة الخضروات.",
        "answer": "المزارع",
        "translation": "Çiftçi sebze yetiştirir."
      },
      {
        "wordIndex": 8,
        "text": "قم بزيارة ___ إذا كانت أسنانك تؤلمك.",
        "answer": "طبيب الأسنان",
        "translation": "Dişin ağrıyorsa diş hekimine git."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "أنت بحاجة إلى ___ للصعود إلى القطار.",
        "answer": "تذكرة",
        "translation": "Trene binmek için bilete ihtiyacın var."
      },
      {
        "wordIndex": 5,
        "text": "أظهر ___ الخاص بك على الحدود.",
        "answer": "جواز السفر",
        "translation": "Sınırda pasaportunu göster."
      },
      {
        "wordIndex": 7,
        "text": "استخدم ___ للعثور على المتحف.",
        "answer": "الخريطة",
        "translation": "Müzeyi bulmak için haritayı kullan."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "قام ___ بفحص المريض.",
        "answer": "الطبيب",
        "translation": "Doktor hastayı muayene etti."
      },
      {
        "wordIndex": 4,
        "text": "تناول هذا ___ بعد الإفطار.",
        "answer": "الدواء",
        "translation": "Bu ilacı kahvaltıdan sonra al."
      },
      {
        "wordIndex": 7,
        "text": "يعاني الطفل من ___ مرتفعة.",
        "answer": "حمى",
        "translation": "Çocuğun yüksek ateşi var."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "التذاكر ___ هذا الأسبوع.",
        "answer": "رخيصة",
        "translation": "Biletler bu hafta ucuz."
      },
      {
        "wordIndex": 5,
        "text": "ما هو ___ هذه الحقيبة؟",
        "answer": "سعر",
        "translation": "Bu çantanın fiyatı nedir?"
      },
      {
        "wordIndex": 9,
        "text": "يجب أن نبقى في حدود ___.",
        "answer": "ميزانيتنا",
        "translation": "Bütçemizin sınırları içinde kalmalıyız."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "___ المنتظمة مفيدة لصحتك.",
        "answer": "التمارين",
        "translation": "Düzenli egzersiz sağlığın için iyidir."
      },
      {
        "wordIndex": 6,
        "text": "فاز ___ بالمباراة.",
        "answer": "فريقنا",
        "translation": "Takımımız karşılaşmayı kazandı."
      },
      {
        "wordIndex": 7,
        "text": "شرح ___ الإستراتيجية الجديدة.",
        "answer": "المدرب",
        "translation": "Antrenör yeni stratejiyi açıkladı."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "قام الطفل بركل ___ داخل الشبكة.",
        "answer": "الكرة",
        "translation": "Çocuk topu ağlara doğru vurdu."
      },
      {
        "wordIndex": 8,
        "text": "فازت ___ الذهبية في المسابقة.",
        "answer": "بالميدالية",
        "translation": "Yarışmada altın madalya kazandı."
      },
      {
        "wordIndex": 7,
        "text": "ملأ الآلاف من المشجعين ___.",
        "answer": "الملعب",
        "translation": "Binlerce taraftar stadyumu doldurdu."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "أستخدم ___ لكتابة التقارير.",
        "answer": "الكمبيوتر",
        "translation": "Rapor yazmak için bilgisayar kullanırım."
      },
      {
        "wordIndex": 3,
        "text": "اكتب اسمك على ___.",
        "answer": "لوحة المفاتيح",
        "translation": "Adını klavyede yaz."
      },
      {
        "wordIndex": 8,
        "text": "___ هاتفي فارغة تقريبًا.",
        "answer": "بطارية",
        "translation": "Telefonumun pili neredeyse boş."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "اختر ___ قوية لحسابك.",
        "answer": "كلمة مرور",
        "translation": "Hesabın için güçlü bir şifre seç."
      },
      {
        "wordIndex": 5,
        "text": "احفظ ___ قبل إغلاق البرنامج.",
        "answer": "الملف",
        "translation": "Programı kapatmadan önce dosyayı kaydet."
      },
      {
        "wordIndex": 9,
        "text": "يمكنك ___ عن المعلومات عبر الإنترنت.",
        "answer": "البحث",
        "translation": "İnternette bilgi arayabilirsin."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "التركية هي ___ الأولى.",
        "answer": "لغتي",
        "translation": "Türkçe benim ilk dilimdir."
      },
      {
        "wordIndex": 7,
        "text": "أنهي ___ قبل العشاء.",
        "answer": "واجباتي المنزلية",
        "translation": "Ödevimi akşam yemeğinden önce bitiririm."
      },
      {
        "wordIndex": 8,
        "text": "لدينا ___ رياضيات غدًا.",
        "answer": "اختبار",
        "translation": "Yarın matematik sınavımız var."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "ما ___ هذه الكلمة؟",
        "answer": "معنى",
        "translation": "Bu kelimenin anlamı nedir?"
      },
      {
        "wordIndex": 5,
        "text": "هذه ___ سهلة الفهم.",
        "answer": "الترجمة",
        "translation": "Bu çeviriyi anlamak kolaydır."
      },
      {
        "wordIndex": 6,
        "text": "يساعد الاستماع على تحسين ___ لديك.",
        "answer": "النطق",
        "translation": "Dinlemek telaffuzunu geliştirmeye yardımcı olur."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "طرح المعلم ___ مثيرًا للاهتمام.",
        "answer": "سؤالًا",
        "translation": "Öğretmen ilginç bir soru sordu."
      },
      {
        "wordIndex": 5,
        "text": "نحن بحاجة إلى ___ لهذه المشكلة.",
        "answer": "حل",
        "translation": "Bu soruna bir çözüm bulmamız gerekiyor."
      },
      {
        "wordIndex": 7,
        "text": "هذه ___ رائعة.",
        "answer": "فكرة",
        "translation": "Bu harika bir fikir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "في ___، هذه فكرة جيدة.",
        "answer": "رأيي",
        "translation": "Bence bu iyi bir fikir."
      },
      {
        "wordIndex": 4,
        "text": "تبحث الشرطة عن ___.",
        "answer": "الأدلة",
        "translation": "Polis kanıt arıyor."
      },
      {
        "wordIndex": 9,
        "text": "اكتب ___ قصيرًا للقصة.",
        "answer": "ملخصًا",
        "translation": "Hikâyenin kısa bir özetini yaz."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "نحن نعمل على ___ جديد.",
        "answer": "مشروع",
        "translation": "Yeni bir proje üzerinde çalışıyoruz."
      },
      {
        "wordIndex": 6,
        "text": "___ للتقرير هو يوم الجمعة.",
        "answer": "الموعد النهائي",
        "translation": "Raporun son teslim tarihi cumadır."
      },
      {
        "wordIndex": 8,
        "text": "يبدأ ___ في الساعة التاسعة.",
        "answer": "الاجتماع",
        "translation": "Toplantı dokuzda başlar."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "كل ___ لديه مكتب.",
        "answer": "موظف",
        "translation": "Her çalışanın bir masası var."
      },
      {
        "wordIndex": 4,
        "text": "سأل ___ عن السعر.",
        "answer": "العميل",
        "translation": "Müşteri fiyatı sordu."
      },
      {
        "wordIndex": 9,
        "text": "اقرأ ___ قبل التوقيع عليه.",
        "answer": "العقد",
        "translation": "İmzalamadan önce sözleşmeyi oku."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "وهي تتلقى ___ كل شهر.",
        "answer": "راتبها",
        "translation": "Maaşını her ay alır."
      },
      {
        "wordIndex": 6,
        "text": "نحن ندفع ___ على دخلنا.",
        "answer": "ضريبة",
        "translation": "Gelirimiz üzerinden vergi öderiz."
      },
      {
        "wordIndex": 8,
        "text": "لقد حصل على ___ لشراء منزل.",
        "answer": "قرض",
        "translation": "Ev almak için kredi çekti."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "يقع ___ في الطابق الثاني.",
        "answer": "مكتبي",
        "translation": "Ofisim ikinci katta."
      },
      {
        "wordIndex": 1,
        "text": "___ ينتج السيارات.",
        "answer": "المصنع",
        "translation": "Fabrika araba üretir."
      },
      {
        "wordIndex": 7,
        "text": "إنها تريد ___ في الطب.",
        "answer": "وظيفة",
        "translation": "Tıp alanında kariyer istiyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "يتحكم ___ في العديد من وظائف الجسم.",
        "answer": "الدماغ",
        "translation": "Beyin vücudun birçok işlevini kontrol eder."
      },
      {
        "wordIndex": 1,
        "text": "يضخ القلب ___ إلى جميع أنحاء الجسم.",
        "answer": "الدم",
        "translation": "Kalp vücuda kan pompalar."
      },
      {
        "wordIndex": 4,
        "text": "احمي ___ من الشمس.",
        "answer": "بشرتك",
        "translation": "Cildini güneşten koru."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "يمكن أن يكون السعال ___ نزلة البرد.",
        "answer": "أحد أعراض",
        "translation": "Öksürük soğuk algınlığının bir belirtisi olabilir."
      },
      {
        "wordIndex": 5,
        "text": "لدي ___ مع الطبيب غدًا.",
        "answer": "موعد",
        "translation": "Yarın doktorla randevum var."
      },
      {
        "wordIndex": 8,
        "text": "اتصل بسيارة إسعاف في حالة ___.",
        "answer": "الطوارئ",
        "translation": "Acil bir durumda ambulans çağır."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "يمكن للطلاب ___ المال عن طريق العمل بدوام جزئي.",
        "answer": "كسب",
        "translation": "Öğrenciler yarı zamanlı çalışarak para kazanabilir."
      },
      {
        "wordIndex": 3,
        "text": "من الحكمة ___ في التعليم.",
        "answer": "الاستثمار",
        "translation": "Eğitime yatırım yapmak akıllıcadır."
      },
      {
        "wordIndex": 9,
        "text": "احتفظ بـ ___ في حالة احتياجك لاسترداد الأموال.",
        "answer": "الإيصال",
        "translation": "İade gerekirse diye fişi sakla."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "تخطط الشركة ___ المزيد من المهندسين.",
        "answer": "لتوظيف",
        "translation": "Şirket daha fazla mühendis işe almayı planlıyor."
      },
      {
        "wordIndex": 8,
        "text": "نحتاج إلى ___ الحدث بعناية.",
        "answer": "تنظيم",
        "translation": "Etkinliği dikkatle düzenlememiz gerekiyor."
      },
      {
        "wordIndex": 7,
        "text": "هل يمكنك ___ فريق مكون من عشرة أشخاص؟",
        "answer": "إدارة",
        "translation": "On kişilik bir takımı yönetebilir misin?"
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "يجب على المدير ___ على الطلب.",
        "answer": "الموافقة",
        "translation": "Yönetici talebi onaylamalıdır."
      },
      {
        "wordIndex": 6,
        "text": "يمكن أن تساعد الخوذة في ___ الإصابات الخطيرة.",
        "answer": "منع",
        "translation": "Kask ciddi yaralanmaları önlemeye yardımcı olabilir."
      },
      {
        "wordIndex": 9,
        "text": "يجب على جميع الموظفين ___ لقواعد السلامة.",
        "answer": "الامتثال",
        "translation": "Tüm çalışanlar güvenlik kurallarına uymalıdır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "لكل ___ حقوق ومسؤوليات.",
        "answer": "مواطن",
        "translation": "Her vatandaşın hakları ve sorumlulukları vardır."
      },
      {
        "wordIndex": 4,
        "text": "عبرنا ___ ليلاً.",
        "answer": "الحدود",
        "translation": "Sınırı gece geçtik."
      },
      {
        "wordIndex": 7,
        "text": "تحقق الضابط من ___.",
        "answer": "هويتي",
        "translation": "Görevli kimliğimi kontrol etti."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "يساعد ___ الأشخاص المحتاجين.",
        "answer": "مجتمعنا",
        "translation": "Topluluğumuz ihtiyaç sahiplerine yardım eder."
      },
      {
        "wordIndex": 3,
        "text": "تعد مشاركة الوجبة ___ مهمًا هنا.",
        "answer": "تقليدًا",
        "translation": "Bir yemeği paylaşmak burada önemli bir gelenektir."
      },
      {
        "wordIndex": 6,
        "text": "نحن نحتفل ___ في مدينتنا.",
        "answer": "بالتنوع",
        "translation": "Şehrimizin çeşitliliğini kutlarız."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "قضاء الوقت في ___ يساعدني على الاسترخاء.",
        "answer": "الطبيعة",
        "translation": "Doğada zaman geçirmek rahatlamama yardımcı olur."
      },
      {
        "wordIndex": 5,
        "text": "___ يتغير حول العالم.",
        "answer": "المناخ",
        "translation": "İklim dünya genelinde değişiyor."
      },
      {
        "wordIndex": 8,
        "text": "تساعد ___ على تقليل النفايات.",
        "answer": "إعادة التدوير",
        "translation": "Geri dönüşüm atıkları azaltmaya yardımcı olur."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "نحن بحاجة إلى ___ لتدفئة منازلنا.",
        "answer": "الطاقة",
        "translation": "Evlerimizi ısıtmak için enerjiye ihtiyacımız var."
      },
      {
        "wordIndex": 4,
        "text": "يؤدي حرق ___ إلى تلوث الهواء.",
        "answer": "الفحم",
        "translation": "Kömür yakmak hava kirliliğine neden olur."
      },
      {
        "wordIndex": 6,
        "text": "يعد الماء ___ طبيعيًا ثمينًا.",
        "answer": "موردًا",
        "translation": "Su değerli bir doğal kaynaktır."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "الأرض هي ___ الذي نعيش عليه.",
        "answer": "الكوكب",
        "translation": "Dünya üzerinde yaşadığımız gezegendir."
      },
      {
        "wordIndex": 2,
        "text": "ألمع ___ يمكن رؤيته الليلة.",
        "answer": "النجم",
        "translation": "Bu gece en parlak yıldız görünüyor."
      },
      {
        "wordIndex": 6,
        "text": "___ تبقينا على الأرض.",
        "answer": "الجاذبية",
        "translation": "Yerçekimi bizi yerde tutar."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "___ هي وحدة أساسية للمادة.",
        "answer": "الذرة",
        "translation": "Atom maddenin temel bir birimidir."
      },
      {
        "wordIndex": 7,
        "text": "زاد ___ داخل الحاوية.",
        "answer": "الضغط",
        "translation": "Kabın içindeki basınç arttı."
      },
      {
        "wordIndex": 8,
        "text": "تتغير ___ الماء مع تغير درجة الحرارة.",
        "answer": "كثافة",
        "translation": "Suyun yoğunluğu sıcaklıkla değişir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "تحقق من ___ قبل تقديم الطلب.",
        "answer": "الكمية",
        "translation": "Siparişi vermeden önce miktarı kontrol et."
      },
      {
        "wordIndex": 5,
        "text": "___ لاثنين وأربعة هو ثلاثة.",
        "answer": "المتوسط",
        "translation": "İki ve dördün ortalaması üçtür."
      },
      {
        "wordIndex": 7,
        "text": "هل يمكنك رؤية ___ بين هذه الصور؟",
        "answer": "الفرق",
        "translation": "Bu resimler arasındaki farkı görebiliyor musun?"
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "الرجاء ___ التكلفة الإجمالية.",
        "answer": "حساب",
        "translation": "Lütfen toplam maliyeti hesapla."
      },
      {
        "wordIndex": 2,
        "text": "نحتاج إلى ___ الغرفة قبل شراء السجادة.",
        "answer": "قياس",
        "translation": "Halı almadan önce odayı ölçmemiz gerekiyor."
      },
      {
        "wordIndex": 6,
        "text": "إذا ___ ثلاثة في أربعة، تحصل على اثني عشر.",
        "answer": "ضربت",
        "translation": "Üç ile dördü çarparsan on iki elde edersin."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "العلماء ___ سلوك الحيوانات.",
        "answer": "يراقبون",
        "translation": "Bilim insanları hayvanların davranışlarını gözlemler."
      },
      {
        "wordIndex": 3,
        "text": "قم دائمًا ___ من المعلومات قبل مشاركتها.",
        "answer": "بالتحقق",
        "translation": "Bilgiyi paylaşmadan önce her zaman doğrula."
      },
      {
        "wordIndex": 8,
        "text": "من الصعب ___ بالطقس بدقة.",
        "answer": "التنبؤ",
        "translation": "Hava durumunu tam olarak öngörmek zordur."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "هذه ___ تجعل التعلم أسهل.",
        "answer": "الطريقة",
        "translation": "Bu yöntem öğrenmeyi kolaylaştırır."
      },
      {
        "wordIndex": 4,
        "text": "قمنا بدراسة ___ المبنى.",
        "answer": "هيكل",
        "translation": "Binanın yapısını inceledik."
      },
      {
        "wordIndex": 6,
        "text": "كل ___ له وظيفة مهمة.",
        "answer": "مكون",
        "translation": "Her bileşenin önemli bir işlevi vardır."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "النوم له ___ قوي على التركيز.",
        "answer": "تأثير",
        "translation": "Uykunun dikkat üzerinde güçlü bir etkisi vardır."
      },
      {
        "wordIndex": 4,
        "text": "تعتبر التكلفة ___ مهمًا في قرارنا.",
        "answer": "عاملاً",
        "translation": "Maliyet kararımızda önemli bir etkendir."
      },
      {
        "wordIndex": 7,
        "text": "يمكنك فهم الكلمة بشكل أفضل في ___.",
        "answer": "السياق",
        "translation": "Bir kelimeyi bağlam içinde daha iyi anlayabilirsin."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "إحدى ___ المشي هي التمتع بصحة أفضل.",
        "answer": "فوائد",
        "translation": "Yürümenin bir faydası daha iyi sağlıktır."
      },
      {
        "wordIndex": 3,
        "text": "يؤدي ارتداء حزام الأمان إلى تقليل ___ الإصابة.",
        "answer": "خطر",
        "translation": "Emniyet kemeri takmak yaralanma riskini azaltır."
      },
      {
        "wordIndex": 6,
        "text": "يمكن أن يكون نقص المال ___ أمام التعليم.",
        "answer": "عقبة",
        "translation": "Para eksikliği eğitimin önünde bir engel olabilir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "المياه النظيفة ___ للحياة.",
        "answer": "ضرورية",
        "translation": "Temiz su yaşam için gereklidir."
      },
      {
        "wordIndex": 2,
        "text": "التمرين الإضافي ___.",
        "answer": "اختياري",
        "translation": "Ek alıştırma isteğe bağlıdır."
      },
      {
        "wordIndex": 9,
        "text": "تستخدم الآلة ___ طاقة أقل.",
        "answer": "الفعالة",
        "translation": "Verimli bir makine daha az enerji kullanır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "نحن بحاجة إلى معلومات ___ لاتخاذ قرار جيد.",
        "answer": "دقيقة",
        "translation": "İyi bir karar vermek için doğru bilgiye ihtiyacımız var."
      },
      {
        "wordIndex": 2,
        "text": "يعد موقع الويب هذا مصدرًا ___ للمعلومات.",
        "answer": "موثوقًا",
        "translation": "Bu internet sitesi güvenilir bir bilgi kaynağıdır."
      },
      {
        "wordIndex": 9,
        "text": "جدولنا الزمني ___، حتى نتمكن من تغيير الوقت.",
        "answer": "مرن",
        "translation": "Programımız esnek, bu yüzden saati değiştirebiliriz."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "العقل البشري ___ للغاية.",
        "answer": "معقد",
        "translation": "İnsan beyni çok karmaşıktır."
      },
      {
        "wordIndex": 2,
        "text": "الحرية هي مفهوم ___.",
        "answer": "مجرد",
        "translation": "Özgürlük soyut bir kavramdır."
      },
      {
        "wordIndex": 8,
        "text": "تعتبر بصمات أصابع كل شخص ___.",
        "answer": "فريدة",
        "translation": "Her insanın parmak izleri benzersizdir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "القراءة تزيد من ___.",
        "answer": "معرفتك",
        "translation": "Okumak bilgini artırır."
      },
      {
        "wordIndex": 3,
        "text": "يستغرق تعلم اللغة وقتًا و___.",
        "answer": "جهدًا",
        "translation": "Dil öğrenmek zaman ve çaba gerektirir."
      },
      {
        "wordIndex": 6,
        "text": "تمثل هذه الوظيفة ___ عظيمة بالنسبة لي.",
        "answer": "فرصة",
        "translation": "Bu iş benim için harika bir fırsat."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "يستحق الجميع أن يعيشوا في ___.",
        "answer": "الحرية",
        "translation": "Herkes özgürlük içinde yaşamayı hak eder."
      },
      {
        "wordIndex": 6,
        "text": "يتطلب تعليم الأطفال الصغار ___.",
        "answer": "الصبر",
        "translation": "Küçük çocuklara öğretmenlik yapmak sabır gerektirir."
      },
      {
        "wordIndex": 7,
        "text": "يمكنك بناء ___ من خلال الوفاء بوعودك.",
        "answer": "الثقة",
        "translation": "Sözlerini tutarak güven oluşturabilirsin."
      }
    ],
    [
      {
        "wordIndex": 4,
        "text": "يعد الطعام جزءًا مهمًا من ___.",
        "answer": "ثقافتنا",
        "translation": "Yemek, kültürümüzün önemli bir parçasıdır."
      },
      {
        "wordIndex": 5,
        "text": "لكل طفل الحق في ___.",
        "answer": "التعليم",
        "translation": "Her çocuğun eğitim hakkı vardır."
      },
      {
        "wordIndex": 7,
        "text": "___ الحديثة تجعل التواصل أسهل.",
        "answer": "التكنولوجيا",
        "translation": "Modern teknoloji iletişimi kolaylaştırır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "يجب على الجميع احترام ___.",
        "answer": "القانون",
        "translation": "Herkes kanuna saygı göstermelidir."
      },
      {
        "wordIndex": 4,
        "text": "يرجى اتباع ___ الصحيح.",
        "answer": "الإجراء",
        "translation": "Lütfen doğru prosedürü takip et."
      },
      {
        "wordIndex": 8,
        "text": "هناك ___ لخرق القواعد.",
        "answer": "عقوبة",
        "translation": "Kuralları çiğnemenin bir cezası var."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "استمع ___ إلى الشاهد.",
        "answer": "القاضي",
        "translation": "Hâkim tanığı dinledi."
      },
      {
        "wordIndex": 3,
        "text": "وصف ___ ما حدث.",
        "answer": "الشاهد",
        "translation": "Tanık ne olduğunu anlattı."
      },
      {
        "wordIndex": 8,
        "text": "أعلنت هيئة المحلفين ___.",
        "answer": "حكمها",
        "translation": "Jüri hükmünü açıkladı."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "سيتم إجراء ___ التالية في شهر يونيو.",
        "answer": "الانتخابات",
        "translation": "Bir sonraki seçim haziranda yapılacak."
      },
      {
        "wordIndex": 2,
        "text": "أجاب كل ___ على نفس الأسئلة.",
        "answer": "مرشح",
        "translation": "Her aday aynı soruları yanıtladı."
      },
      {
        "wordIndex": 9,
        "text": "يحمي ___ الحقوق الأساسية.",
        "answer": "الدستور",
        "translation": "Anayasa temel hakları korur."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "نحن نشتري الخضروات من مزارع ___.",
        "answer": "محلي",
        "translation": "Yerel bir çiftçiden sebze alırız."
      },
      {
        "wordIndex": 5,
        "text": "إن تعلم لغة ___ يفتح لك أبوابًا جديدة.",
        "answer": "أجنبية",
        "translation": "Yabancı bir dil öğrenmek yeni kapılar açar."
      },
      {
        "wordIndex": 7,
        "text": "هذه معلومات ___؛ من فضلك لا تشاركه.",
        "answer": "خاصة",
        "translation": "Bu özel bir bilgidir; lütfen paylaşma."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "حافظ على أمان معلوماتك ___.",
        "answer": "الشخصية",
        "translation": "Kişisel bilgilerini güvende tut."
      },
      {
        "wordIndex": 7,
        "text": "يجب أن تحصل على مشورة ___ قبل التوقيع.",
        "answer": "قانونية",
        "translation": "İmzalamadan önce hukuki tavsiye almalısın."
      },
      {
        "wordIndex": 8,
        "text": "تتبع الشركة معايير ___ صارمة.",
        "answer": "أخلاقية",
        "translation": "Şirket sıkı etik standartlara uyar."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "هل ___ تغيير التاريخ؟",
        "answer": "ممكن",
        "translation": "Tarihi değiştirmek mümkün mü?"
      },
      {
        "wordIndex": 6,
        "text": "أنا ___ من أن هذه هي الإجابة الصحيحة.",
        "answer": "متأكد",
        "translation": "Bunun doğru cevap olduğundan eminim."
      },
      {
        "wordIndex": 8,
        "text": "تكون الإجابة ___ عندما تقرأ السؤال بعناية.",
        "answer": "واضحة",
        "translation": "Soruyu dikkatle okuyunca cevap açıkça bellidir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "هذا مجرد حل ___.",
        "answer": "مؤقت",
        "translation": "Bu yalnızca geçici bir çözümdür."
      },
      {
        "wordIndex": 3,
        "text": "لاحظنا تحسنًا ___ في صحتها.",
        "answer": "تدريجيًا",
        "translation": "Sağlığında kademeli bir iyileşme fark ettik."
      },
      {
        "wordIndex": 8,
        "text": "تنشر الشركة تقريرًا ___.",
        "answer": "سنويًا",
        "translation": "Şirket yıllık bir rapor yayımlar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "تغيرت الخطة ___ بعد الاجتماع.",
        "answer": "الأولية",
        "translation": "Başlangıçtaki plan toplantıdan sonra değişti."
      },
      {
        "wordIndex": 4,
        "text": "ما هو عنوانك ___؟",
        "answer": "الحالي",
        "translation": "Mevcut adresin nedir?"
      },
      {
        "wordIndex": 7,
        "text": "يجب أن نفكر في الأجيال ___.",
        "answer": "المستقبلية",
        "translation": "Gelecekteki nesilleri düşünmeliyiz."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "يجب علينا ___ الأسعار قبل الشراء.",
        "answer": "مقارنة",
        "translation": "Satın almadan önce fiyatları karşılaştırmalıyız."
      },
      {
        "wordIndex": 7,
        "text": "من المهم ___ على توازن صحي.",
        "answer": "الحفاظ",
        "translation": "Sağlıklı bir denge sürdürmek önemlidir."
      },
      {
        "wordIndex": 9,
        "text": "يمكن للتمرين ___ نطقك.",
        "answer": "تحسين",
        "translation": "Alıştırma yapmak telaffuzunu iyileştirebilir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "وتخطط الشركة ___ أعمالها.",
        "answer": "لتوسيع",
        "translation": "Şirket işini genişletmeyi planlıyor."
      },
      {
        "wordIndex": 1,
        "text": "يجب علينا ___ استهلاكنا للمياه.",
        "answer": "تقليل",
        "translation": "Su tüketimimizi azaltmalıyız."
      },
      {
        "wordIndex": 5,
        "text": "يجب على الحيوانات ___ مع التغيرات في بيئتها.",
        "answer": "التكيف",
        "translation": "Hayvanlar çevrelerindeki değişikliklere uyum sağlamalıdır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "الرجاء ___ رقم هاتفك في النموذج.",
        "answer": "تضمين",
        "translation": "Lütfen telefon numaranı forma ekle."
      },
      {
        "wordIndex": 6,
        "text": "الخطوط الحمراء ___ الطرق على هذه الخريطة.",
        "answer": "تمثل",
        "translation": "Bu haritada kırmızı çizgiler yolları temsil eder."
      },
      {
        "wordIndex": 8,
        "text": "المرايا ___ الضوء.",
        "answer": "تعكس",
        "translation": "Aynalar ışığı yansıtır."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "الرجاء ___ في جميع الخيارات قبل اتخاذ القرار.",
        "answer": "النظر",
        "translation": "Lütfen karar vermeden önce tüm seçenekleri dikkate al."
      },
      {
        "wordIndex": 6,
        "text": "أستطيع ___ الفكرة الرئيسية لهذا النص.",
        "answer": "فهم",
        "translation": "Bu metnin ana fikrini anlayabiliyorum."
      },
      {
        "wordIndex": 8,
        "text": "يمكننا ___ المعنى من السياق.",
        "answer": "استنتاج",
        "translation": "Bağlamdan anlam çıkarabiliriz."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "سيقوم الطبيب ___ ركبتك.",
        "answer": "بفحص",
        "translation": "Doktor dizini inceleyecek."
      },
      {
        "wordIndex": 3,
        "text": "الرجاء ___ إجاباتك قبل الإرسال.",
        "answer": "مراجعة",
        "translation": "Lütfen göndermeden önce cevaplarını gözden geçir."
      },
      {
        "wordIndex": 9,
        "text": "يساعدنا السفر على ___ ثقافات جديدة.",
        "answer": "اكتشاف",
        "translation": "Seyahat yeni kültürler keşfetmemize yardımcı olur."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "ستقوم المدرسة ___ السياسة الجديدة الشهر المقبل.",
        "answer": "بتنفيذ",
        "translation": "Okul yeni politikayı gelecek ay uygulamaya koyacak."
      },
      {
        "wordIndex": 6,
        "text": "يمكن للصور ___ عملية التعلم.",
        "answer": "تسهيل",
        "translation": "Resimler öğrenme sürecini kolaylaştırabilir."
      },
      {
        "wordIndex": 8,
        "text": "الأصدقاء الجيدون ___ بعضهم البعض.",
        "answer": "يدعمون",
        "translation": "İyi arkadaşlar birbirini destekler."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "يجب علينا ___ الوقت الكافي لكل مهمة.",
        "answer": "تخصيص",
        "translation": "Her görev için yeterli zaman tahsis etmeliyiz."
      },
      {
        "wordIndex": 1,
        "text": "سيقوم المتطوعون ___ الطعام على العائلات.",
        "answer": "بتوزيع",
        "translation": "Gönüllüler ailelere yiyecek dağıtacak."
      },
      {
        "wordIndex": 7,
        "text": "يمكن للمكتبة ___ معلومات مفيدة.",
        "answer": "توفير",
        "translation": "Kütüphane yararlı bilgiler sağlayabilir."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "حاول رؤية الموقف من ___ مختلف.",
        "answer": "منظور",
        "translation": "Durumu farklı bir bakış açısından görmeye çalış."
      },
      {
        "wordIndex": 3,
        "text": "السلامة هي ___ الأولى.",
        "answer": "أولويتنا",
        "translation": "Güvenlik ilk önceliğimizdir."
      },
      {
        "wordIndex": 9,
        "text": "اختبر العالم ___ جديدة.",
        "answer": "فرضية",
        "translation": "Bilim insanı yeni bir hipotezi sınadı."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "أظهر المجتمع ___ كبيرة بعد الكارثة.",
        "answer": "قدرة على الصمود",
        "translation": "Topluluk felaketten sonra büyük dayanıklılık gösterdi."
      },
      {
        "wordIndex": 4,
        "text": "يركز المشروع على ___ البيئية.",
        "answer": "الاستدامة",
        "translation": "Proje çevresel sürdürülebilirliğe odaklanır."
      },
      {
        "wordIndex": 8,
        "text": "تشجع الشركة ___ والتفكير الإبداعي.",
        "answer": "الابتكار",
        "translation": "Şirket yenilikçiliği ve yaratıcı düşünmeyi teşvik eder."
      }
    ]
  ],
  "fr": [
    [
      {
        "wordIndex": 0,
        "text": "Le ___ dort sur la chaise.",
        "answer": "chat",
        "translation": "Kedi sandalyede uyuyor."
      },
      {
        "wordIndex": 2,
        "text": "Le ___ nous apporte lumière et chaleur.",
        "answer": "soleil",
        "translation": "Güneş bize ışık ve sıcaklık verir."
      },
      {
        "wordIndex": 7,
        "text": "Je lis un ___ avant de me coucher.",
        "answer": "livre",
        "translation": "Yatmadan önce bir kitap okurum."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Ma ___ prépare une délicieuse soupe.",
        "answer": "mère",
        "translation": "Annem lezzetli çorba yapar."
      },
      {
        "wordIndex": 4,
        "text": "Les enfants vont à ___ tous les matins.",
        "answer": "l'école",
        "translation": "Çocuklar her sabah okula gider."
      },
      {
        "wordIndex": 9,
        "text": "Veuillez ouvrir la ___ pour prendre l'air.",
        "answer": "fenêtre",
        "translation": "Biraz temiz hava için lütfen pencereyi aç."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Cette ___ sent merveilleusement bon.",
        "answer": "fleur",
        "translation": "Bu çiçek harika kokuyor."
      },
      {
        "wordIndex": 5,
        "text": "Je bois un verre de ___ au petit-déjeuner.",
        "answer": "lait",
        "translation": "Kahvaltıda bir bardak süt içerim."
      },
      {
        "wordIndex": 8,
        "text": "Elle met une ___ rouge dans son sac.",
        "answer": "pomme",
        "translation": "Çantasına kırmızı bir elma koyar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Il y a ___ bougie sur le gâteau.",
        "answer": "une",
        "translation": "Pastanın üzerinde bir mum var."
      },
      {
        "wordIndex": 2,
        "text": "Un triangle a ___ côtés.",
        "answer": "trois",
        "translation": "Bir üçgenin üç kenarı vardır."
      },
      {
        "wordIndex": 9,
        "text": "J'ai ___ doigts.",
        "answer": "dix",
        "translation": "On parmağım var."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Le panneau stop est ___.",
        "answer": "rouge",
        "translation": "Dur işareti kırmızıdır."
      },
      {
        "wordIndex": 1,
        "text": "Le ciel est ___ aujourd'hui.",
        "answer": "bleu",
        "translation": "Bugün gökyüzü mavidir."
      },
      {
        "wordIndex": 2,
        "text": "Les feuilles sont ___ au printemps.",
        "answer": "vertes",
        "translation": "Yapraklar ilkbaharda yeşildir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Mon meilleur ___ habite à côté.",
        "answer": "ami",
        "translation": "En iyi arkadaşım yan evde yaşar."
      },
      {
        "wordIndex": 1,
        "text": "Nous dînons ensemble en ___.",
        "answer": "famille",
        "translation": "Aile olarak birlikte akşam yemeği yeriz."
      },
      {
        "wordIndex": 3,
        "text": "Le ___ ne peut pas encore marcher.",
        "answer": "bébé",
        "translation": "Bebek henüz yürüyemiyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Portez un casque pour protéger votre ___.",
        "answer": "tête",
        "translation": "Başını korumak için kask tak."
      },
      {
        "wordIndex": 3,
        "text": "Un petit morceau de poussière est entré dans mon ___.",
        "answer": "œil",
        "translation": "Gözüme küçük bir toz kaçtı."
      },
      {
        "wordIndex": 8,
        "text": "L'exercice est bon pour votre ___.",
        "answer": "cœur",
        "translation": "Egzersiz kalbin için iyidir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Nous prenons le petit déjeuner le ___.",
        "answer": "matin",
        "translation": "Sabah kahvaltı yaparız."
      },
      {
        "wordIndex": 4,
        "text": "Nous rendrons visite à nos grands-parents ___.",
        "answer": "demain",
        "translation": "Yarın büyükanne ve büyükbabamızı ziyaret edeceğiz."
      },
      {
        "wordIndex": 6,
        "text": "Je me sens ___ quand je vois mes amis.",
        "answer": "heureux",
        "translation": "Arkadaşlarımı görünce mutlu hissederim."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Sois prudent; la soupe est ___.",
        "answer": "chaude",
        "translation": "Dikkat et; çorba sıcak."
      },
      {
        "wordIndex": 4,
        "text": "Veuillez garder votre chambre ___.",
        "answer": "propre",
        "translation": "Lütfen odanı temiz tut."
      },
      {
        "wordIndex": 8,
        "text": "J'ai acheté un ___ téléphone hier.",
        "answer": "nouveau",
        "translation": "Dün yeni bir telefon aldım."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "J'aime ___ dans le parc.",
        "answer": "marcher",
        "translation": "Parkta yürümeyi severim."
      },
      {
        "wordIndex": 5,
        "text": "Nous ___ une histoire chaque soir.",
        "answer": "lisons",
        "translation": "Her akşam bir hikâye okuruz."
      },
      {
        "wordIndex": 4,
        "text": "Les bébés ont besoin de ___ beaucoup.",
        "answer": "dormir",
        "translation": "Bebeklerin çok uyuması gerekir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Il porte une ___ blanche pour travailler.",
        "answer": "chemise",
        "translation": "İşe beyaz bir gömlek giyer."
      },
      {
        "wordIndex": 3,
        "text": "Prenez votre ___ ; il fait froid dehors.",
        "answer": "manteau",
        "translation": "Paltonu al; dışarısı soğuk."
      },
      {
        "wordIndex": 6,
        "text": "Elle porte un ___ pour se protéger du soleil.",
        "answer": "chapeau",
        "translation": "Güneşten korunmak için şapka takar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Nous préparons nos repas dans la ___.",
        "answer": "cuisine",
        "translation": "Yemeklerimizi mutfakta pişiririz."
      },
      {
        "wordIndex": 4,
        "text": "La pluie tombe sur le ___.",
        "answer": "toit",
        "translation": "Yağmur çatıya düşüyor."
      },
      {
        "wordIndex": 9,
        "text": "Nous faisons pousser des fleurs sur le ___.",
        "answer": "balcon",
        "translation": "Balkonda çiçek yetiştiririz."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "J'ai posé ma tête sur l'___ moelleux.",
        "answer": "oreiller",
        "translation": "Başımı yumuşak yastığa koyarım."
      },
      {
        "wordIndex": 3,
        "text": "Elle se regarde dans le ___ avant de partir.",
        "answer": "miroir",
        "translation": "Çıkmadan önce aynaya bakar."
      },
      {
        "wordIndex": 9,
        "text": "Mettez le livre sur l'___.",
        "answer": "étagère",
        "translation": "Kitabı rafa koy."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Je mange de la soupe avec une ___.",
        "answer": "cuillère",
        "translation": "Çorbayı kaşıkla içerim."
      },
      {
        "wordIndex": 2,
        "text": "Utilisez un ___ pour couper le pain.",
        "answer": "couteau",
        "translation": "Ekmeği kesmek için bıçak kullan."
      },
      {
        "wordIndex": 3,
        "text": "Il y a un sandwich dans l'___.",
        "answer": "assiette",
        "translation": "Tabakta bir sandviç var."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "J'aime le ___ sur mon sandwich.",
        "answer": "fromage",
        "translation": "Sandviçimde peynir severim."
      },
      {
        "wordIndex": 3,
        "text": "La poule a pondu un ___.",
        "answer": "œuf",
        "translation": "Tavuk bir yumurta yumurtladı."
      },
      {
        "wordIndex": 9,
        "text": "Le lapin mange une ___.",
        "answer": "carotte",
        "translation": "Tavşan bir havuç yiyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Une ___ mûre a la peau jaune.",
        "answer": "banane",
        "translation": "Olgun bir muzun kabuğu sarıdır."
      },
      {
        "wordIndex": 5,
        "text": "Ajoutez un peu de ___ à votre thé.",
        "answer": "citron",
        "translation": "Çayına biraz limon ekle."
      },
      {
        "wordIndex": 7,
        "text": "Nous mangeons de la ___ froide en été.",
        "answer": "pastèque",
        "translation": "Yazın soğuk karpuz yeriz."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Nous prenons le ___ avant d'aller à l'école.",
        "answer": "petit-déjeuner",
        "translation": "Okula gitmeden önce kahvaltı yaparız."
      },
      {
        "wordIndex": 5,
        "text": "Cette soupe a besoin d'un peu de ___.",
        "answer": "sel",
        "translation": "Bu çorbanın biraz tuza ihtiyacı var."
      },
      {
        "wordIndex": 7,
        "text": "Les abeilles produisent du ___.",
        "answer": "miel",
        "translation": "Arılar bal üretir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Nous nageons dans la mer pendant ___.",
        "answer": "l'été",
        "translation": "Yaz boyunca denizde yüzeriz."
      },
      {
        "wordIndex": 3,
        "text": "Il fait généralement froid en ___.",
        "answer": "hiver",
        "translation": "Kışın hava genellikle soğuktur."
      },
      {
        "wordIndex": 7,
        "text": "Une ___ compte douze mois.",
        "answer": "année",
        "translation": "Bir yılda on iki ay vardır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "La semaine de travail commence le ___.",
        "answer": "lundi",
        "translation": "Çalışma haftası pazartesi başlar."
      },
      {
        "wordIndex": 6,
        "text": "Nous nous reposons généralement le ___.",
        "answer": "dimanche",
        "translation": "Genellikle pazar günü dinleniriz."
      },
      {
        "wordIndex": 8,
        "text": "Marquez la date de la réunion sur le ___.",
        "answer": "calendrier",
        "translation": "Toplantı tarihini takvimde işaretle."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Nous avons pris un parapluie à cause de la ___.",
        "answer": "pluie",
        "translation": "Yağmur nedeniyle şemsiye aldık."
      },
      {
        "wordIndex": 1,
        "text": "Les montagnes sont couvertes de ___ blanche.",
        "answer": "neige",
        "translation": "Dağlar beyaz karla kaplı."
      },
      {
        "wordIndex": 2,
        "text": "Le ___ fort a déplacé les branches.",
        "answer": "vent",
        "translation": "Güçlü rüzgâr dalları hareket ettirdi."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Je veux ___ une nouvelle langue.",
        "answer": "apprendre",
        "translation": "Yeni bir dil öğrenmek istiyorum."
      },
      {
        "wordIndex": 4,
        "text": "Nous devons ___ du pain.",
        "answer": "acheter",
        "translation": "Biraz ekmek satın almamız gerekiyor."
      },
      {
        "wordIndex": 6,
        "text": "Veuillez ___ la porte.",
        "answer": "ouvrir",
        "translation": "Lütfen kapıyı aç."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "Les poissons peuvent ___ dans l'eau.",
        "answer": "nager",
        "translation": "Balıklar suda yüzebilir."
      },
      {
        "wordIndex": 5,
        "text": "Nous aimons ___ ensemble.",
        "answer": "chanter",
        "translation": "Birlikte şarkı söylemeyi severiz."
      },
      {
        "wordIndex": 8,
        "text": "Je veux ___ le dîner ce soir.",
        "answer": "préparer",
        "translation": "Bu akşam yemek pişirmek istiyorum."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Veuillez ___ la pomme en deux.",
        "answer": "couper",
        "translation": "Lütfen elmayı ikiye kes."
      },
      {
        "wordIndex": 4,
        "text": "Ne ___ pas de déchets par terre.",
        "answer": "jetez",
        "translation": "Yere çöp atma."
      },
      {
        "wordIndex": 9,
        "text": "Ne ___ la poêle chaude.",
        "answer": "touchez",
        "translation": "Sıcak tavaya dokunma."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Pouvez-vous ___ les oiseaux dehors ?",
        "answer": "entendre",
        "translation": "Dışarıdaki kuşları duyabiliyor musun?"
      },
      {
        "wordIndex": 8,
        "text": "Je peux ___ de votre nom.",
        "answer": "se souvenir",
        "translation": "Adını hatırlayabiliyorum."
      },
      {
        "wordIndex": 6,
        "text": "Veuillez ___ avant de répondre.",
        "answer": "réfléchir",
        "translation": "Lütfen cevaplamadan önce düşün."
      }
    ],
    [
      {
        "wordIndex": 5,
        "text": "Un mot gentil peut faire ___ quelqu'un.",
        "answer": "sourire",
        "translation": "Nazik bir söz birini gülümsetebilir."
      },
      {
        "wordIndex": 7,
        "text": "Il est normal de ___ lorsque vous vous sentez triste.",
        "answer": "pleurer",
        "translation": "Üzgün hissedince ağlamak normaldir."
      },
      {
        "wordIndex": 9,
        "text": "Veuillez ___ ; le bébé dort.",
        "answer": "chuchoter",
        "translation": "Lütfen fısılda; bebek uyuyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Vous pouvez ___ de l'aide à l'enseignant.",
        "answer": "demander",
        "translation": "Öğretmenden yardım isteyebilirsin."
      },
      {
        "wordIndex": 2,
        "text": "Pouvez-vous ___ la règle ?",
        "answer": "expliquer",
        "translation": "Kuralı bana açıklayabilir misin?"
      },
      {
        "wordIndex": 7,
        "text": "Ne ___ quelque chose que vous ne pouvez pas faire.",
        "answer": "promettez",
        "translation": "Yapamayacağın bir şey için söz verme."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Nous ___ nos voisins à dîner.",
        "answer": "inviterons",
        "translation": "Komşularımızı akşam yemeğine davet edeceğiz."
      },
      {
        "wordIndex": 5,
        "text": "Veuillez ___ avant huit heures.",
        "answer": "arriver",
        "translation": "Lütfen saat sekizden önce var."
      },
      {
        "wordIndex": 9,
        "text": "Veuillez ___ ici un instant.",
        "answer": "attendre",
        "translation": "Lütfen burada bir dakika bekle."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Ils prévoient de ___ une nouvelle école.",
        "answer": "construire",
        "translation": "Yeni bir okul inşa etmeyi planlıyorlar."
      },
      {
        "wordIndex": 2,
        "text": "Pouvez-vous ___ mon vélo ?",
        "answer": "réparer",
        "translation": "Bisikletimi onarabilir misin?"
      },
      {
        "wordIndex": 9,
        "text": "Nous pouvons ___ après une courte pause.",
        "answer": "continuer",
        "translation": "Kısa bir aradan sonra devam edebiliriz."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Je ne parviens pas à ___ mes clés.",
        "answer": "trouver",
        "translation": "Anahtarlarımı bulamıyorum."
      },
      {
        "wordIndex": 7,
        "text": "Puis-je ___ votre stylo ?",
        "answer": "emprunter",
        "translation": "Kalemini ödünç alabilir miyim?"
      },
      {
        "wordIndex": 9,
        "text": "Vous pouvez ___ par carte.",
        "answer": "payer",
        "translation": "Kartla ödeyebilirsin."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Veuillez ___ moi un message.",
        "answer": "envoyer",
        "translation": "Lütfen bana bir mesaj gönder."
      },
      {
        "wordIndex": 5,
        "text": "N'oubliez pas de ___ votre travail.",
        "answer": "sauvegarder",
        "translation": "Çalışmanı kaydetmeyi unutma."
      },
      {
        "wordIndex": 9,
        "text": "Pouvez-vous ___ ce document ?",
        "answer": "imprimer",
        "translation": "Bu belgeyi yazdırabilir misin?"
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Un lion est un animal ___.",
        "answer": "fort",
        "translation": "Aslan güçlü bir hayvandır."
      },
      {
        "wordIndex": 4,
        "text": "Le ___ arbre a besoin d'eau.",
        "answer": "jeune",
        "translation": "Genç ağacın suya ihtiyacı var."
      },
      {
        "wordIndex": 7,
        "text": "Cette valise est trop ___ pour moi.",
        "answer": "lourde",
        "translation": "Bu bavul benim için çok ağır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "La bouteille est ___ ; veuillez le remplir.",
        "answer": "vide",
        "translation": "Şişe boş; lütfen doldur."
      },
      {
        "wordIndex": 6,
        "text": "Cette couverture est très ___.",
        "answer": "douce",
        "translation": "Bu battaniye çok yumuşak hissettiriyor."
      },
      {
        "wordIndex": 2,
        "text": "La rivière est trop ___ pour être traversée ici.",
        "answer": "large",
        "translation": "Nehir buradan geçmek için çok geniş."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "S'il vous plaît, soyez ___ dans la bibliothèque.",
        "answer": "tais",
        "translation": "Lütfen kütüphanede sessiz ol."
      },
      {
        "wordIndex": 5,
        "text": "Mes chaussures sont ___ à cause de la pluie.",
        "answer": "mouillées",
        "translation": "Ayakkabılarım yağmurdan ıslak."
      },
      {
        "wordIndex": 8,
        "text": "Soyez prudent avec ce couteau ___.",
        "answer": "tranchant",
        "translation": "O keskin bıçağa dikkat et."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Notre professeur est toujours ___ avec nous.",
        "answer": "gentil",
        "translation": "Öğretmenimiz bize her zaman naziktir."
      },
      {
        "wordIndex": 4,
        "text": "Il est ___ et partage ce qu'il a.",
        "answer": "généreux",
        "translation": "O cömerttir ve sahip olduklarını paylaşır."
      },
      {
        "wordIndex": 8,
        "text": "L'enfant ___ parlait très doucement.",
        "answer": "timide",
        "translation": "Utangaç çocuk çok yumuşak bir sesle konuştu."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Le ___ pompier a sauvé l'enfant.",
        "answer": "courageux",
        "translation": "Cesur itfaiyeci çocuğu kurtardı."
      },
      {
        "wordIndex": 4,
        "text": "L'étudiant ___ a posé de nombreuses questions.",
        "answer": "curieux",
        "translation": "Meraklı öğrenci birçok soru sordu."
      },
      {
        "wordIndex": 5,
        "text": "Une personne ___ dit la vérité.",
        "answer": "honnête",
        "translation": "Dürüst bir insan doğruyu söyler."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Manger des légumes vous aide à rester ___.",
        "answer": "en bonne santé",
        "translation": "Sebze yemek sağlıklı kalmana yardımcı olur."
      },
      {
        "wordIndex": 4,
        "text": "Je me sens ___ après le long voyage.",
        "answer": "fatigué",
        "translation": "Uzun yolculuktan sonra yorgun hissediyorum."
      },
      {
        "wordIndex": 6,
        "text": "Après avoir couru, j'ai très ___.",
        "answer": "soif",
        "translation": "Koştuktan sonra çok susamış olurum."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Il portait le sac sur son ___.",
        "answer": "épaule",
        "translation": "Çantayı omzunda taşıdı."
      },
      {
        "wordIndex": 5,
        "text": "Elle portait une bague à son ___.",
        "answer": "doigt",
        "translation": "Parmağına bir yüzük taktı."
      },
      {
        "wordIndex": 7,
        "text": "Je me suis blessé au ___ en tombant.",
        "answer": "genou",
        "translation": "Düştüğümde dizimi incittim."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Elle est arrivée ___ de la course.",
        "answer": "première",
        "translation": "Yarışta birinci geldi."
      },
      {
        "wordIndex": 6,
        "text": "Nous sommes arrivés ___ pour avoir de bonnes places.",
        "answer": "tôt",
        "translation": "İyi koltuklar bulmak için erken geldik."
      },
      {
        "wordIndex": 9,
        "text": "Je ___ n'oublie l'anniversaire de ma mère.",
        "answer": "jamais",
        "translation": "Annemin doğum gününü asla unutmam."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Je ___ je marche pour aller au travail.",
        "answer": "parfois",
        "translation": "Bazen işe yürürüm."
      },
      {
        "wordIndex": 6,
        "text": "Le bus arrivera ___.",
        "answer": "bientôt",
        "translation": "Otobüs yakında gelecek."
      },
      {
        "wordIndex": 8,
        "text": "Veuillez relire la phrase ___.",
        "answer": "à nouveau",
        "translation": "Lütfen cümleyi tekrar oku."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Tournez ___ dans la rue suivante.",
        "answer": "à gauche",
        "translation": "Bir sonraki sokakta sola dön."
      },
      {
        "wordIndex": 7,
        "text": "La berge est ___ l'école et le parc.",
        "answer": "entre",
        "translation": "Banka okul ile parkın arasındadır."
      },
      {
        "wordIndex": 9,
        "text": "L'aéroport est ___ du centre-ville.",
        "answer": "loin",
        "translation": "Havalimanı şehir merkezinden uzaktır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "De nombreuses personnes vivent dans cette grande ___.",
        "answer": "ville",
        "translation": "Bu büyük şehirde birçok insan yaşar."
      },
      {
        "wordIndex": 4,
        "text": "Le vieux ___ traverse la rivière.",
        "answer": "pont",
        "translation": "Eski köprü nehrin üzerinden geçer."
      },
      {
        "wordIndex": 8,
        "text": "De nombreux animaux sauvages vivent dans la ___.",
        "answer": "forêt",
        "translation": "Ormanda birçok vahşi hayvan yaşar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Nous prenons le ___ pour aller à l'école.",
        "answer": "bus",
        "translation": "Okula otobüsle gideriz."
      },
      {
        "wordIndex": 4,
        "text": "Je fais du ___ dans le parc.",
        "answer": "vélo",
        "translation": "Parkta bisikletime binerim."
      },
      {
        "wordIndex": 1,
        "text": "Le ___ part du quai deux.",
        "answer": "train",
        "translation": "Tren ikinci perondan kalkar."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Le vélo a une ___ cassée.",
        "answer": "roue",
        "translation": "Bisikletin kırık bir tekerleği var."
      },
      {
        "wordIndex": 4,
        "text": "Le ___ s'est arrêté au feu rouge.",
        "answer": "chauffeur",
        "translation": "Sürücü kırmızı ışıkta durdu."
      },
      {
        "wordIndex": 8,
        "text": "La voiture ne peut pas rouler sans ___.",
        "answer": "carburant",
        "translation": "Araba yakıt olmadan çalışamaz."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Je garde mon argent à la ___.",
        "answer": "banque",
        "translation": "Paramı bankada tutarım."
      },
      {
        "wordIndex": 4,
        "text": "Vous pouvez emprunter des livres à la ___.",
        "answer": "bibliothèque",
        "translation": "Kütüphaneden ödünç kitap alabilirsin."
      },
      {
        "wordIndex": 9,
        "text": "Nous achetons du pain frais à la ___.",
        "answer": "boulangerie",
        "translation": "Fırından taze ekmek alırız."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "L'___ a conçu un nouveau pont.",
        "answer": "ingénieur",
        "translation": "Mühendis yeni bir köprü tasarladı."
      },
      {
        "wordIndex": 4,
        "text": "Le ___ cultive des légumes.",
        "answer": "agriculteur",
        "translation": "Çiftçi sebze yetiştirir."
      },
      {
        "wordIndex": 8,
        "text": "Consultez le ___ si votre dent vous fait mal.",
        "answer": "dentiste",
        "translation": "Dişin ağrıyorsa diş hekimine git."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Vous avez besoin d'un ___ pour monter dans le train.",
        "answer": "billet",
        "translation": "Trene binmek için bilete ihtiyacın var."
      },
      {
        "wordIndex": 5,
        "text": "Présentez votre ___ à la frontière.",
        "answer": "passeport",
        "translation": "Sınırda pasaportunu göster."
      },
      {
        "wordIndex": 7,
        "text": "Utilisez la ___ pour trouver le musée.",
        "answer": "carte",
        "translation": "Müzeyi bulmak için haritayı kullan."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Le ___ a examiné le patient.",
        "answer": "médecin",
        "translation": "Doktor hastayı muayene etti."
      },
      {
        "wordIndex": 4,
        "text": "Prenez ce ___ après le petit-déjeuner.",
        "answer": "médicament",
        "translation": "Bu ilacı kahvaltıdan sonra al."
      },
      {
        "wordIndex": 7,
        "text": "L'enfant a une forte ___.",
        "answer": "fièvre",
        "translation": "Çocuğun yüksek ateşi var."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Les billets sont ___ cette semaine.",
        "answer": "bon marché",
        "translation": "Biletler bu hafta ucuz."
      },
      {
        "wordIndex": 5,
        "text": "Quel est le ___ de ce sac ?",
        "answer": "prix",
        "translation": "Bu çantanın fiyatı nedir?"
      },
      {
        "wordIndex": 9,
        "text": "Nous devons respecter notre ___.",
        "answer": "budget",
        "translation": "Bütçemizin sınırları içinde kalmalıyız."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "L'___ régulier est bon pour la santé.",
        "answer": "exercice",
        "translation": "Düzenli egzersiz sağlığın için iyidir."
      },
      {
        "wordIndex": 6,
        "text": "Notre ___ a gagné le match.",
        "answer": "équipe",
        "translation": "Takımımız karşılaşmayı kazandı."
      },
      {
        "wordIndex": 7,
        "text": "L'___ a expliqué la nouvelle stratégie.",
        "answer": "entraîneur",
        "translation": "Antrenör yeni stratejiyi açıkladı."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "L'enfant a lancé le ___ dans le filet.",
        "answer": "ballon",
        "translation": "Çocuk topu ağlara doğru vurdu."
      },
      {
        "wordIndex": 8,
        "text": "Elle a remporté une ___ d'or au concours.",
        "answer": "médaille",
        "translation": "Yarışmada altın madalya kazandı."
      },
      {
        "wordIndex": 7,
        "text": "Des milliers de supporters ont rempli le ___.",
        "answer": "stade",
        "translation": "Binlerce taraftar stadyumu doldurdu."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "J'utilise un ___ pour rédiger des rapports.",
        "answer": "ordinateur",
        "translation": "Rapor yazmak için bilgisayar kullanırım."
      },
      {
        "wordIndex": 3,
        "text": "Tapez votre nom sur le ___.",
        "answer": "clavier",
        "translation": "Adını klavyede yaz."
      },
      {
        "wordIndex": 8,
        "text": "La ___ de mon téléphone est presque vide.",
        "answer": "batterie",
        "translation": "Telefonumun pili neredeyse boş."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Choisissez un ___ fort pour votre compte.",
        "answer": "mot de passe",
        "translation": "Hesabın için güçlü bir şifre seç."
      },
      {
        "wordIndex": 5,
        "text": "Enregistrez le ___ avant de fermer le programme.",
        "answer": "fichier",
        "translation": "Programı kapatmadan önce dosyayı kaydet."
      },
      {
        "wordIndex": 9,
        "text": "Vous pouvez ___ des informations en ligne.",
        "answer": "rechercher",
        "translation": "İnternette bilgi arayabilirsin."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Le turc est ma première ___.",
        "answer": "langue",
        "translation": "Türkçe benim ilk dilimdir."
      },
      {
        "wordIndex": 7,
        "text": "Je termine mes ___ avant le dîner.",
        "answer": "devoirs",
        "translation": "Ödevimi akşam yemeğinden önce bitiririm."
      },
      {
        "wordIndex": 8,
        "text": "Nous avons un ___ de mathématiques demain.",
        "answer": "examen",
        "translation": "Yarın matematik sınavımız var."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "Quelle est la ___ de ce mot ?",
        "answer": "signification",
        "translation": "Bu kelimenin anlamı nedir?"
      },
      {
        "wordIndex": 5,
        "text": "Cette ___ est facile à comprendre.",
        "answer": "traduction",
        "translation": "Bu çeviriyi anlamak kolaydır."
      },
      {
        "wordIndex": 6,
        "text": "L'écoute aide à améliorer votre ___.",
        "answer": "prononciation",
        "translation": "Dinlemek telaffuzunu geliştirmeye yardımcı olur."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "L'enseignant a posé une ___ intéressante.",
        "answer": "question",
        "translation": "Öğretmen ilginç bir soru sordu."
      },
      {
        "wordIndex": 5,
        "text": "Nous avons besoin d'une ___ à ce problème.",
        "answer": "solution",
        "translation": "Bu soruna bir çözüm bulmamız gerekiyor."
      },
      {
        "wordIndex": 7,
        "text": "C’est une excellente ___.",
        "answer": "idée",
        "translation": "Bu harika bir fikir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "À mon ___, c'est une bonne idée.",
        "answer": "opinion",
        "translation": "Bence bu iyi bir fikir."
      },
      {
        "wordIndex": 4,
        "text": "La police recherche des ___.",
        "answer": "preuves",
        "translation": "Polis kanıt arıyor."
      },
      {
        "wordIndex": 9,
        "text": "Rédigez un court ___ de l'histoire.",
        "answer": "résumé",
        "translation": "Hikâyenin kısa bir özetini yaz."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Nous travaillons sur un nouveau ___.",
        "answer": "projet",
        "translation": "Yeni bir proje üzerinde çalışıyoruz."
      },
      {
        "wordIndex": 6,
        "text": "La ___ pour le rapport est vendredi.",
        "answer": "date limite",
        "translation": "Raporun son teslim tarihi cumadır."
      },
      {
        "wordIndex": 8,
        "text": "La ___ commence à neuf heures.",
        "answer": "réunion",
        "translation": "Toplantı dokuzda başlar."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Chaque ___ dispose d'un bureau.",
        "answer": "employé",
        "translation": "Her çalışanın bir masası var."
      },
      {
        "wordIndex": 4,
        "text": "Le ___ a demandé le prix.",
        "answer": "client",
        "translation": "Müşteri fiyatı sordu."
      },
      {
        "wordIndex": 9,
        "text": "Lisez le ___ avant de le signer.",
        "answer": "contrat",
        "translation": "İmzalamadan önce sözleşmeyi oku."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Elle reçoit son ___ chaque mois.",
        "answer": "salaire",
        "translation": "Maaşını her ay alır."
      },
      {
        "wordIndex": 6,
        "text": "Nous payons des ___ sur nos revenus.",
        "answer": "impôts",
        "translation": "Gelirimiz üzerinden vergi öderiz."
      },
      {
        "wordIndex": 8,
        "text": "Il a contracté un ___ pour acheter une maison.",
        "answer": "prêt",
        "translation": "Ev almak için kredi çekti."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Mon ___ est au deuxième étage.",
        "answer": "bureau",
        "translation": "Ofisim ikinci katta."
      },
      {
        "wordIndex": 1,
        "text": "L'___ produit des voitures.",
        "answer": "usine",
        "translation": "Fabrika araba üretir."
      },
      {
        "wordIndex": 7,
        "text": "Elle veut une ___ en médecine.",
        "answer": "carrière",
        "translation": "Tıp alanında kariyer istiyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Le ___ contrôle de nombreuses fonctions du corps.",
        "answer": "cerveau",
        "translation": "Beyin vücudun birçok işlevini kontrol eder."
      },
      {
        "wordIndex": 1,
        "text": "Le cœur pompe le ___ dans tout le corps.",
        "answer": "sang",
        "translation": "Kalp vücuda kan pompalar."
      },
      {
        "wordIndex": 4,
        "text": "Protégez votre ___ du soleil.",
        "answer": "peau",
        "translation": "Cildini güneşten koru."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Une toux peut être un ___ d'un rhume.",
        "answer": "symptôme",
        "translation": "Öksürük soğuk algınlığının bir belirtisi olabilir."
      },
      {
        "wordIndex": 5,
        "text": "J'ai un ___ avec le médecin demain.",
        "answer": "rendez-vous",
        "translation": "Yarın doktorla randevum var."
      },
      {
        "wordIndex": 8,
        "text": "Appelez une ambulance en cas d'___.",
        "answer": "urgence",
        "translation": "Acil bir durumda ambulans çağır."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Les étudiants peuvent ___ de l'argent en travaillant à temps partiel.",
        "answer": "gagner",
        "translation": "Öğrenciler yarı zamanlı çalışarak para kazanabilir."
      },
      {
        "wordIndex": 3,
        "text": "Il est sage d'___ dans l'éducation.",
        "answer": "investir",
        "translation": "Eğitime yatırım yapmak akıllıcadır."
      },
      {
        "wordIndex": 9,
        "text": "Conservez le ___ au cas où vous auriez besoin d'un remboursement.",
        "answer": "reçu",
        "translation": "İade gerekirse diye fişi sakla."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "L'entreprise prévoit d'___ davantage d'ingénieurs.",
        "answer": "embaucher",
        "translation": "Şirket daha fazla mühendis işe almayı planlıyor."
      },
      {
        "wordIndex": 8,
        "text": "Nous devons ___ l'événement avec soin.",
        "answer": "organiser",
        "translation": "Etkinliği dikkatle düzenlememiz gerekiyor."
      },
      {
        "wordIndex": 7,
        "text": "Pouvez-vous ___ une équipe de dix personnes ?",
        "answer": "manager",
        "translation": "On kişilik bir takımı yönetebilir misin?"
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Le gestionnaire doit ___ la demande.",
        "answer": "approuver",
        "translation": "Yönetici talebi onaylamalıdır."
      },
      {
        "wordIndex": 6,
        "text": "Un casque peut aider à ___ des blessures graves.",
        "answer": "prévenir",
        "translation": "Kask ciddi yaralanmaları önlemeye yardımcı olabilir."
      },
      {
        "wordIndex": 9,
        "text": "Tous les salariés doivent ___ aux règles de sécurité.",
        "answer": "se conformer",
        "translation": "Tüm çalışanlar güvenlik kurallarına uymalıdır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Chaque ___ a des droits et des responsabilités.",
        "answer": "citoyen",
        "translation": "Her vatandaşın hakları ve sorumlulukları vardır."
      },
      {
        "wordIndex": 4,
        "text": "Nous avons traversé la ___ la nuit.",
        "answer": "frontière",
        "translation": "Sınırı gece geçtik."
      },
      {
        "wordIndex": 7,
        "text": "L'agent a vérifié mon ___.",
        "answer": "identité",
        "translation": "Görevli kimliğimi kontrol etti."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Notre ___ aide les personnes dans le besoin.",
        "answer": "communauté",
        "translation": "Topluluğumuz ihtiyaç sahiplerine yardım eder."
      },
      {
        "wordIndex": 3,
        "text": "Partager un repas est une ___ importante ici.",
        "answer": "tradition",
        "translation": "Bir yemeği paylaşmak burada önemli bir gelenektir."
      },
      {
        "wordIndex": 6,
        "text": "Nous célébrons la ___ de notre ville.",
        "answer": "diversité",
        "translation": "Şehrimizin çeşitliliğini kutlarız."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Passer du temps dans la ___ m'aide à me détendre.",
        "answer": "nature",
        "translation": "Doğada zaman geçirmek rahatlamama yardımcı olur."
      },
      {
        "wordIndex": 5,
        "text": "Le ___ change partout dans le monde.",
        "answer": "climat",
        "translation": "İklim dünya genelinde değişiyor."
      },
      {
        "wordIndex": 8,
        "text": "Le ___ permet de réduire les déchets.",
        "answer": "Recyclage",
        "translation": "Geri dönüşüm atıkları azaltmaya yardımcı olur."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Nous avons besoin d'___ pour chauffer nos maisons.",
        "answer": "énergie",
        "translation": "Evlerimizi ısıtmak için enerjiye ihtiyacımız var."
      },
      {
        "wordIndex": 4,
        "text": "La combustion du ___ produit de la pollution atmosphérique.",
        "answer": "charbon",
        "translation": "Kömür yakmak hava kirliliğine neden olur."
      },
      {
        "wordIndex": 6,
        "text": "L'eau est une ___ naturelle précieuse.",
        "answer": "ressource",
        "translation": "Su değerli bir doğal kaynaktır."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "La Terre est la ___ sur laquelle nous vivons.",
        "answer": "planète",
        "translation": "Dünya üzerinde yaşadığımız gezegendir."
      },
      {
        "wordIndex": 2,
        "text": "L'___ la plus brillante est visible ce soir.",
        "answer": "étoile",
        "translation": "Bu gece en parlak yıldız görünüyor."
      },
      {
        "wordIndex": 6,
        "text": "___ nous maintient au sol.",
        "answer": "La gravité",
        "translation": "Yerçekimi bizi yerde tutar."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Un ___ est une unité de base de la matière.",
        "answer": "atome",
        "translation": "Atom maddenin temel bir birimidir."
      },
      {
        "wordIndex": 7,
        "text": "La ___ à l'intérieur du conteneur a augmenté.",
        "answer": "pression",
        "translation": "Kabın içindeki basınç arttı."
      },
      {
        "wordIndex": 8,
        "text": "La ___ de l'eau change avec la température.",
        "answer": "densité",
        "translation": "Suyun yoğunluğu sıcaklıkla değişir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Vérifiez la ___ avant de passer la commande.",
        "answer": "quantité",
        "translation": "Siparişi vermeden önce miktarı kontrol et."
      },
      {
        "wordIndex": 5,
        "text": "La ___ de deux et quatre est trois.",
        "answer": "moyenne",
        "translation": "İki ve dördün ortalaması üçtür."
      },
      {
        "wordIndex": 7,
        "text": "Pouvez-vous voir la ___ entre ces images ?",
        "answer": "différence",
        "translation": "Bu resimler arasındaki farkı görebiliyor musun?"
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Veuillez ___ le coût total.",
        "answer": "calculer",
        "translation": "Lütfen toplam maliyeti hesapla."
      },
      {
        "wordIndex": 2,
        "text": "Nous devons ___ la pièce avant d'acheter un tapis.",
        "answer": "mesurer",
        "translation": "Halı almadan önce odayı ölçmemiz gerekiyor."
      },
      {
        "wordIndex": 6,
        "text": "Si vous ___ trois par quatre, vous obtenez douze.",
        "answer": "multipliez",
        "translation": "Üç ile dördü çarparsan on iki elde edersin."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Les scientifiques ___ le comportement des animaux.",
        "answer": "observent",
        "translation": "Bilim insanları hayvanların davranışlarını gözlemler."
      },
      {
        "wordIndex": 3,
        "text": "Toujours ___ les informations avant de les partager.",
        "answer": "vérifiez",
        "translation": "Bilgiyi paylaşmadan önce her zaman doğrula."
      },
      {
        "wordIndex": 8,
        "text": "Il est difficile de ___ la météo avec précision.",
        "answer": "prédire",
        "translation": "Hava durumunu tam olarak öngörmek zordur."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Cette ___ facilite l'apprentissage.",
        "answer": "méthode",
        "translation": "Bu yöntem öğrenmeyi kolaylaştırır."
      },
      {
        "wordIndex": 4,
        "text": "Nous avons étudié la ___ du bâtiment.",
        "answer": "structure",
        "translation": "Binanın yapısını inceledik."
      },
      {
        "wordIndex": 6,
        "text": "Chaque ___ a une fonction importante.",
        "answer": "composant",
        "translation": "Her bileşenin önemli bir işlevi vardır."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Le sommeil a un fort ___ sur la concentration.",
        "answer": "effet",
        "translation": "Uykunun dikkat üzerinde güçlü bir etkisi vardır."
      },
      {
        "wordIndex": 4,
        "text": "Le coût est un ___ important dans notre décision.",
        "answer": "facteur",
        "translation": "Maliyet kararımızda önemli bir etkendir."
      },
      {
        "wordIndex": 7,
        "text": "Vous pouvez mieux comprendre un mot dans le ___.",
        "answer": "contexte",
        "translation": "Bir kelimeyi bağlam içinde daha iyi anlayabilirsin."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "L'un des ___ de la marche est une meilleure santé.",
        "answer": "avantages",
        "translation": "Yürümenin bir faydası daha iyi sağlıktır."
      },
      {
        "wordIndex": 3,
        "text": "Le port d'une ceinture de sécurité réduit le ___ de blessure.",
        "answer": "risque",
        "translation": "Emniyet kemeri takmak yaralanma riskini azaltır."
      },
      {
        "wordIndex": 6,
        "text": "Le manque d'argent peut être un ___ à l'éducation.",
        "answer": "obstacle",
        "translation": "Para eksikliği eğitimin önünde bir engel olabilir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "L'eau propre est ___ à la vie.",
        "answer": "nécessaire",
        "translation": "Temiz su yaşam için gereklidir."
      },
      {
        "wordIndex": 2,
        "text": "L'exercice supplémentaire est ___.",
        "answer": "facultatif",
        "translation": "Ek alıştırma isteğe bağlıdır."
      },
      {
        "wordIndex": 9,
        "text": "Une machine ___ consomme moins d'énergie.",
        "answer": "efficace",
        "translation": "Verimli bir makine daha az enerji kullanır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Nous avons besoin d'informations ___ pour prendre une bonne décision.",
        "answer": "précises",
        "translation": "İyi bir karar vermek için doğru bilgiye ihtiyacımız var."
      },
      {
        "wordIndex": 2,
        "text": "Ce site Web est une source d'informations ___.",
        "answer": "fiable",
        "translation": "Bu internet sitesi güvenilir bir bilgi kaynağıdır."
      },
      {
        "wordIndex": 9,
        "text": "Notre horaire est ___, nous pouvons donc modifier l'heure.",
        "answer": "flexible",
        "translation": "Programımız esnek, bu yüzden saati değiştirebiliriz."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Le cerveau humain est très ___.",
        "answer": "complexe",
        "translation": "İnsan beyni çok karmaşıktır."
      },
      {
        "wordIndex": 2,
        "text": "La liberté est un concept ___.",
        "answer": "abstrait",
        "translation": "Özgürlük soyut bir kavramdır."
      },
      {
        "wordIndex": 8,
        "text": "Les empreintes digitales de chaque personne sont ___.",
        "answer": "uniques",
        "translation": "Her insanın parmak izleri benzersizdir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "La lecture augmente vos ___.",
        "answer": "connaissances",
        "translation": "Okumak bilgini artırır."
      },
      {
        "wordIndex": 3,
        "text": "Apprendre une langue demande du temps et des ___.",
        "answer": "efforts",
        "translation": "Dil öğrenmek zaman ve çaba gerektirir."
      },
      {
        "wordIndex": 6,
        "text": "Ce travail est une excellente ___ pour moi.",
        "answer": "opportunité",
        "translation": "Bu iş benim için harika bir fırsat."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Tout le monde mérite de vivre en ___.",
        "answer": "liberté",
        "translation": "Herkes özgürlük içinde yaşamayı hak eder."
      },
      {
        "wordIndex": 6,
        "text": "Enseigner aux jeunes enfants demande ___.",
        "answer": "de la patience",
        "translation": "Küçük çocuklara öğretmenlik yapmak sabır gerektirir."
      },
      {
        "wordIndex": 7,
        "text": "Vous pouvez bâtir la ___ en tenant vos promesses.",
        "answer": "confiance",
        "translation": "Sözlerini tutarak güven oluşturabilirsin."
      }
    ],
    [
      {
        "wordIndex": 4,
        "text": "La nourriture est une partie importante de notre ___.",
        "answer": "culture",
        "translation": "Yemek, kültürümüzün önemli bir parçasıdır."
      },
      {
        "wordIndex": 5,
        "text": "Chaque enfant a droit à ___.",
        "answer": "l'éducation",
        "translation": "Her çocuğun eğitim hakkı vardır."
      },
      {
        "wordIndex": 7,
        "text": "La ___ moderne facilite la communication.",
        "answer": "technologie",
        "translation": "Modern teknoloji iletişimi kolaylaştırır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Tout le monde doit respecter la ___.",
        "answer": "loi",
        "translation": "Herkes kanuna saygı göstermelidir."
      },
      {
        "wordIndex": 4,
        "text": "Veuillez suivre la ___ correcte.",
        "answer": "procédure",
        "translation": "Lütfen doğru prosedürü takip et."
      },
      {
        "wordIndex": 8,
        "text": "Il y a une ___ en cas de non-respect des règles.",
        "answer": "pénalité",
        "translation": "Kuralları çiğnemenin bir cezası var."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Le ___ a écouté le témoin.",
        "answer": "juge",
        "translation": "Hâkim tanığı dinledi."
      },
      {
        "wordIndex": 3,
        "text": "Le ___ a décrit ce qui s'est passé.",
        "answer": "témoin",
        "translation": "Tanık ne olduğunu anlattı."
      },
      {
        "wordIndex": 8,
        "text": "Le jury a annoncé son ___.",
        "answer": "verdict",
        "translation": "Jüri hükmünü açıkladı."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Les prochaines ___ auront lieu en juin.",
        "answer": "élections",
        "translation": "Bir sonraki seçim haziranda yapılacak."
      },
      {
        "wordIndex": 2,
        "text": "Chaque ___ a répondu aux mêmes questions.",
        "answer": "candidat",
        "translation": "Her aday aynı soruları yanıtladı."
      },
      {
        "wordIndex": 9,
        "text": "La ___ protège les droits fondamentaux.",
        "answer": "constitution",
        "translation": "Anayasa temel hakları korur."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Nous achetons des légumes auprès d'un agriculteur ___.",
        "answer": "local",
        "translation": "Yerel bir çiftçiden sebze alırız."
      },
      {
        "wordIndex": 5,
        "text": "L'apprentissage d'une langue ___ ouvre de nouvelles portes.",
        "answer": "étrangère",
        "translation": "Yabancı bir dil öğrenmek yeni kapılar açar."
      },
      {
        "wordIndex": 7,
        "text": "Il s'agit d'informations ___ ; s'il vous plaît, ne le partagez pas.",
        "answer": "privées",
        "translation": "Bu özel bir bilgidir; lütfen paylaşma."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Protégez vos informations ___.",
        "answer": "personnelles",
        "translation": "Kişisel bilgilerini güvende tut."
      },
      {
        "wordIndex": 7,
        "text": "Vous devriez obtenir des conseils ___ avant de signer.",
        "answer": "juridiques",
        "translation": "İmzalamadan önce hukuki tavsiye almalısın."
      },
      {
        "wordIndex": 8,
        "text": "L'entreprise suit des normes ___ strictes.",
        "answer": "éthiques",
        "translation": "Şirket sıkı etik standartlara uyar."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Est-il ___ de changer la date ?",
        "answer": "possible",
        "translation": "Tarihi değiştirmek mümkün mü?"
      },
      {
        "wordIndex": 6,
        "text": "Je suis ___ que c'est la bonne réponse.",
        "answer": "certain",
        "translation": "Bunun doğru cevap olduğundan eminim."
      },
      {
        "wordIndex": 8,
        "text": "La réponse est ___ lorsque vous lisez attentivement la question.",
        "answer": "évidente",
        "translation": "Soruyu dikkatle okuyunca cevap açıkça bellidir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Il ne s'agit que d'une solution ___.",
        "answer": "temporaire",
        "translation": "Bu yalnızca geçici bir çözümdür."
      },
      {
        "wordIndex": 3,
        "text": "Nous avons remarqué une amélioration ___ de sa santé.",
        "answer": "progressive",
        "translation": "Sağlığında kademeli bir iyileşme fark ettik."
      },
      {
        "wordIndex": 8,
        "text": "L'entreprise publie un rapport ___.",
        "answer": "annuel",
        "translation": "Şirket yıllık bir rapor yayımlar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Le plan ___ a changé après la réunion.",
        "answer": "initial",
        "translation": "Başlangıçtaki plan toplantıdan sonra değişti."
      },
      {
        "wordIndex": 4,
        "text": "Quelle est votre adresse ___ ?",
        "answer": "actuelle",
        "translation": "Mevcut adresin nedir?"
      },
      {
        "wordIndex": 7,
        "text": "Nous devons penser aux générations ___.",
        "answer": "futures",
        "translation": "Gelecekteki nesilleri düşünmeliyiz."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Il faut ___ les prix avant d'acheter.",
        "answer": "comparer",
        "translation": "Satın almadan önce fiyatları karşılaştırmalıyız."
      },
      {
        "wordIndex": 7,
        "text": "Il est important de ___ un équilibre sain.",
        "answer": "maintenir",
        "translation": "Sağlıklı bir denge sürdürmek önemlidir."
      },
      {
        "wordIndex": 9,
        "text": "La pratique peut ___ votre prononciation.",
        "answer": "améliorer",
        "translation": "Alıştırma yapmak telaffuzunu iyileştirebilir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "L'entreprise envisage d'___ ses activités.",
        "answer": "étendre",
        "translation": "Şirket işini genişletmeyi planlıyor."
      },
      {
        "wordIndex": 1,
        "text": "Nous devrions ___ notre consommation d'eau.",
        "answer": "réduire",
        "translation": "Su tüketimimizi azaltmalıyız."
      },
      {
        "wordIndex": 5,
        "text": "Les animaux doivent ___ aux changements de leur environnement.",
        "answer": "s'adapter",
        "translation": "Hayvanlar çevrelerindeki değişikliklere uyum sağlamalıdır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Veuillez ___ votre numéro de téléphone dans le formulaire.",
        "answer": "inclure",
        "translation": "Lütfen telefon numaranı forma ekle."
      },
      {
        "wordIndex": 6,
        "text": "Les lignes rouges ___ les routes sur cette carte.",
        "answer": "représentent",
        "translation": "Bu haritada kırmızı çizgiler yolları temsil eder."
      },
      {
        "wordIndex": 8,
        "text": "Les miroirs ___ la lumière.",
        "answer": "réfléchissent",
        "translation": "Aynalar ışığı yansıtır."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Veuillez ___ toutes les options avant de prendre une décision.",
        "answer": "examiner",
        "translation": "Lütfen karar vermeden önce tüm seçenekleri dikkate al."
      },
      {
        "wordIndex": 6,
        "text": "Je peux ___ l'idée principale de ce texte.",
        "answer": "comprendre",
        "translation": "Bu metnin ana fikrini anlayabiliyorum."
      },
      {
        "wordIndex": 8,
        "text": "Nous pouvons ___ la signification à partir du contexte.",
        "answer": "déduire",
        "translation": "Bağlamdan anlam çıkarabiliriz."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Le médecin ___ votre genou.",
        "answer": "examinera",
        "translation": "Doktor dizini inceleyecek."
      },
      {
        "wordIndex": 3,
        "text": "Veuillez ___ vos réponses avant de les soumettre.",
        "answer": "examiner",
        "translation": "Lütfen göndermeden önce cevaplarını gözden geçir."
      },
      {
        "wordIndex": 9,
        "text": "Les voyages nous aident à ___ de nouvelles cultures.",
        "answer": "découvrir",
        "translation": "Seyahat yeni kültürler keşfetmemize yardımcı olur."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "L'école ___ la nouvelle politique le mois prochain.",
        "answer": "mettra en œuvre",
        "translation": "Okul yeni politikayı gelecek ay uygulamaya koyacak."
      },
      {
        "wordIndex": 6,
        "text": "Les images peuvent ___ le processus d'apprentissage.",
        "answer": "faciliter",
        "translation": "Resimler öğrenme sürecini kolaylaştırabilir."
      },
      {
        "wordIndex": 8,
        "text": "Les bons amis ___ les uns les autres.",
        "answer": "se soutiennent",
        "translation": "İyi arkadaşlar birbirini destekler."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Nous devons ___ suffisamment de temps pour chaque tâche.",
        "answer": "allouer",
        "translation": "Her görev için yeterli zaman tahsis etmeliyiz."
      },
      {
        "wordIndex": 1,
        "text": "Les bénévoles ___ de la nourriture aux familles.",
        "answer": "distribueront",
        "translation": "Gönüllüler ailelere yiyecek dağıtacak."
      },
      {
        "wordIndex": 7,
        "text": "La bibliothèque peut ___ des informations utiles.",
        "answer": "fournir",
        "translation": "Kütüphane yararlı bilgiler sağlayabilir."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Essayez de voir la situation sous un ___ différente.",
        "answer": "perspective",
        "translation": "Durumu farklı bir bakış açısından görmeye çalış."
      },
      {
        "wordIndex": 3,
        "text": "La sécurité est notre première ___.",
        "answer": "priorité",
        "translation": "Güvenlik ilk önceliğimizdir."
      },
      {
        "wordIndex": 9,
        "text": "Le scientifique a testé une nouvelle ___.",
        "answer": "hypothèse",
        "translation": "Bilim insanı yeni bir hipotezi sınadı."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "La communauté a fait preuve d'une grande ___ après la catastrophe.",
        "answer": "résilience",
        "translation": "Topluluk felaketten sonra büyük dayanıklılık gösterdi."
      },
      {
        "wordIndex": 4,
        "text": "Le projet se concentre sur la ___.",
        "answer": "durabilité environnementale",
        "translation": "Proje çevresel sürdürülebilirliğe odaklanır."
      },
      {
        "wordIndex": 8,
        "text": "L'entreprise encourage l'___ et la pensée créative.",
        "answer": "innovation",
        "translation": "Şirket yenilikçiliği ve yaratıcı düşünmeyi teşvik eder."
      }
    ]
  ],
  "de": [
    [
      {
        "wordIndex": 0,
        "text": "Die ___ schläft auf dem Stuhl.",
        "answer": "Katze",
        "translation": "Kedi sandalyede uyuyor."
      },
      {
        "wordIndex": 2,
        "text": "Die ___ spendet uns Licht und Wärme.",
        "answer": "Sonne",
        "translation": "Güneş bize ışık ve sıcaklık verir."
      },
      {
        "wordIndex": 7,
        "text": "Ich lese vor dem Schlafengehen ein ___.",
        "answer": "Buch",
        "translation": "Yatmadan önce bir kitap okurum."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Meine ___ macht köstliche Suppe.",
        "answer": "Mutter",
        "translation": "Annem lezzetli çorba yapar."
      },
      {
        "wordIndex": 4,
        "text": "Die Kinder gehen jeden Morgen zur ___.",
        "answer": "Schule",
        "translation": "Çocuklar her sabah okula gider."
      },
      {
        "wordIndex": 9,
        "text": "Bitte öffnen Sie das ___ für frische Luft.",
        "answer": "Fenster",
        "translation": "Biraz temiz hava için lütfen pencereyi aç."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Diese ___ duftet wunderbar.",
        "answer": "Blume",
        "translation": "Bu çiçek harika kokuyor."
      },
      {
        "wordIndex": 5,
        "text": "Zum Frühstück trinke ich ein Glas ___.",
        "answer": "Milch",
        "translation": "Kahvaltıda bir bardak süt içerim."
      },
      {
        "wordIndex": 8,
        "text": "Sie steckt einen roten ___ in ihre Tasche.",
        "answer": "Apfel",
        "translation": "Çantasına kırmızı bir elma koyar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Auf der Torte befindet sich ___ Kerze.",
        "answer": "eine",
        "translation": "Pastanın üzerinde bir mum var."
      },
      {
        "wordIndex": 2,
        "text": "Ein Dreieck hat ___ Seiten.",
        "answer": "drei",
        "translation": "Bir üçgenin üç kenarı vardır."
      },
      {
        "wordIndex": 9,
        "text": "Ich habe ___ Finger.",
        "answer": "zehn",
        "translation": "On parmağım var."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Das Stoppschild ist ___.",
        "answer": "rot",
        "translation": "Dur işareti kırmızıdır."
      },
      {
        "wordIndex": 1,
        "text": "Der Himmel ist heute ___.",
        "answer": "blau",
        "translation": "Bugün gökyüzü mavidir."
      },
      {
        "wordIndex": 2,
        "text": "Im Frühling sind die Blätter ___.",
        "answer": "grün",
        "translation": "Yapraklar ilkbaharda yeşildir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Mein bester ___ wohnt nebenan.",
        "answer": "Freund",
        "translation": "En iyi arkadaşım yan evde yaşar."
      },
      {
        "wordIndex": 1,
        "text": "Wir essen zusammen als ___ zu Abend.",
        "answer": "Familie",
        "translation": "Aile olarak birlikte akşam yemeği yeriz."
      },
      {
        "wordIndex": 3,
        "text": "Das ___ kann noch nicht laufen.",
        "answer": "Baby",
        "translation": "Bebek henüz yürüyemiyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Tragen Sie einen Helm, um Ihren ___ zu schützen.",
        "answer": "Kopf",
        "translation": "Başını korumak için kask tak."
      },
      {
        "wordIndex": 3,
        "text": "Ein kleines Stück Staub ist in mein ___ gelangt.",
        "answer": "Auge",
        "translation": "Gözüme küçük bir toz kaçtı."
      },
      {
        "wordIndex": 8,
        "text": "Bewegung ist gut für Ihr ___.",
        "answer": "Herz",
        "translation": "Egzersiz kalbin için iyidir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Wir frühstücken ___.",
        "answer": "am Morgen",
        "translation": "Sabah kahvaltı yaparız."
      },
      {
        "wordIndex": 4,
        "text": "Wir werden ___ unsere Großeltern besuchen.",
        "answer": "morgen",
        "translation": "Yarın büyükanne ve büyükbabamızı ziyaret edeceğiz."
      },
      {
        "wordIndex": 6,
        "text": "Ich bin ___, wenn ich meine Freunde sehe.",
        "answer": "glücklich",
        "translation": "Arkadaşlarımı görünce mutlu hissederim."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Seien Sie vorsichtig; Die Suppe ist ___.",
        "answer": "heiß",
        "translation": "Dikkat et; çorba sıcak."
      },
      {
        "wordIndex": 4,
        "text": "Bitte halten Sie Ihr Zimmer ___.",
        "answer": "sauber",
        "translation": "Lütfen odanı temiz tut."
      },
      {
        "wordIndex": 8,
        "text": "Ich habe gestern ein ___ Telefon gekauft.",
        "answer": "neues",
        "translation": "Dün yeni bir telefon aldım."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Ich ___ gerne im Park.",
        "answer": "spaziere",
        "translation": "Parkta yürümeyi severim."
      },
      {
        "wordIndex": 5,
        "text": "Wir ___ jeden Abend eine Geschichte.",
        "answer": "lesen",
        "translation": "Her akşam bir hikâye okuruz."
      },
      {
        "wordIndex": 4,
        "text": "Babys müssen viel ___.",
        "answer": "schlafen",
        "translation": "Bebeklerin çok uyuması gerekir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Zur Arbeit trägt er ein weißes ___.",
        "answer": "Hemd",
        "translation": "İşe beyaz bir gömlek giyer."
      },
      {
        "wordIndex": 3,
        "text": "Nimm deinen ___; es ist kalt draußen.",
        "answer": "Mantel",
        "translation": "Paltonu al; dışarısı soğuk."
      },
      {
        "wordIndex": 6,
        "text": "Sie trägt einen ___, um sich vor der Sonne zu schützen.",
        "answer": "Hut",
        "translation": "Güneşten korunmak için şapka takar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Wir kochen unsere Mahlzeiten in der ___.",
        "answer": "Küche",
        "translation": "Yemeklerimizi mutfakta pişiririz."
      },
      {
        "wordIndex": 4,
        "text": "Der Regen fällt auf das ___.",
        "answer": "Dach",
        "translation": "Yağmur çatıya düşüyor."
      },
      {
        "wordIndex": 9,
        "text": "Wir züchten Blumen auf dem ___.",
        "answer": "Balkon",
        "translation": "Balkonda çiçek yetiştiririz."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Ich lege meinen Kopf auf das weiche ___.",
        "answer": "Kissen",
        "translation": "Başımı yumuşak yastığa koyarım."
      },
      {
        "wordIndex": 3,
        "text": "Sie schaut in den ___, bevor sie geht.",
        "answer": "Spiegel",
        "translation": "Çıkmadan önce aynaya bakar."
      },
      {
        "wordIndex": 9,
        "text": "Stellen Sie das Buch auf das ___.",
        "answer": "Regal",
        "translation": "Kitabı rafa koy."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Ich esse Suppe mit einem ___.",
        "answer": "Löffel",
        "translation": "Çorbayı kaşıkla içerim."
      },
      {
        "wordIndex": 2,
        "text": "Schneiden Sie das Brot mit einem ___.",
        "answer": "Messer",
        "translation": "Ekmeği kesmek için bıçak kullan."
      },
      {
        "wordIndex": 3,
        "text": "Auf dem ___ liegt ein Sandwich.",
        "answer": "Teller",
        "translation": "Tabakta bir sandviç var."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Ich mag ___ auf meinem Sandwich.",
        "answer": "Käse",
        "translation": "Sandviçimde peynir severim."
      },
      {
        "wordIndex": 3,
        "text": "Die Henne hat ein ___ gelegt.",
        "answer": "Ei",
        "translation": "Tavuk bir yumurta yumurtladı."
      },
      {
        "wordIndex": 9,
        "text": "Das Kaninchen frisst eine ___.",
        "answer": "Karotte",
        "translation": "Tavşan bir havuç yiyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Eine reife ___ hat eine gelbe Schale.",
        "answer": "Banane",
        "translation": "Olgun bir muzun kabuğu sarıdır."
      },
      {
        "wordIndex": 5,
        "text": "Fügen Sie Ihrem Tee etwas ___ hinzu.",
        "answer": "Zitrone",
        "translation": "Çayına biraz limon ekle."
      },
      {
        "wordIndex": 7,
        "text": "Im Sommer essen wir kalte ___.",
        "answer": "Wassermelone",
        "translation": "Yazın soğuk karpuz yeriz."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Wir ___, bevor wir zur Schule gehen.",
        "answer": "frühstücken",
        "translation": "Okula gitmeden önce kahvaltı yaparız."
      },
      {
        "wordIndex": 5,
        "text": "Diese Suppe braucht etwas ___.",
        "answer": "Salz",
        "translation": "Bu çorbanın biraz tuza ihtiyacı var."
      },
      {
        "wordIndex": 7,
        "text": "Bienen produzieren ___.",
        "answer": "Honig",
        "translation": "Arılar bal üretir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Im ___ schwimmen wir im Meer.",
        "answer": "Sommer",
        "translation": "Yaz boyunca denizde yüzeriz."
      },
      {
        "wordIndex": 3,
        "text": "Im ___ ist es normalerweise kalt.",
        "answer": "Winter",
        "translation": "Kışın hava genellikle soğuktur."
      },
      {
        "wordIndex": 7,
        "text": "Ein ___ hat zwölf Monate.",
        "answer": "Jahr",
        "translation": "Bir yılda on iki ay vardır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Die Arbeitswoche beginnt am ___.",
        "answer": "Montag",
        "translation": "Çalışma haftası pazartesi başlar."
      },
      {
        "wordIndex": 6,
        "text": "Normalerweise ruhen wir uns am ___ aus.",
        "answer": "Sonntag",
        "translation": "Genellikle pazar günü dinleniriz."
      },
      {
        "wordIndex": 8,
        "text": "Markieren Sie den Besprechungstermin im ___.",
        "answer": "Kalender",
        "translation": "Toplantı tarihini takvimde işaretle."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Wegen des ___ haben wir einen Regenschirm mitgenommen.",
        "answer": "Regens",
        "translation": "Yağmur nedeniyle şemsiye aldık."
      },
      {
        "wordIndex": 1,
        "text": "Die Berge sind mit weißem ___ bedeckt.",
        "answer": "Schnee",
        "translation": "Dağlar beyaz karla kaplı."
      },
      {
        "wordIndex": 2,
        "text": "Der starke ___ bewegte die Äste.",
        "answer": "Wind",
        "translation": "Güçlü rüzgâr dalları hareket ettirdi."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Ich möchte eine neue Sprache ___.",
        "answer": "lernen",
        "translation": "Yeni bir dil öğrenmek istiyorum."
      },
      {
        "wordIndex": 4,
        "text": "Wir müssen etwas Brot ___.",
        "answer": "kaufen",
        "translation": "Biraz ekmek satın almamız gerekiyor."
      },
      {
        "wordIndex": 6,
        "text": "Bitte ___ Sie die Tür.",
        "answer": "öffnen",
        "translation": "Lütfen kapıyı aç."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "Fische können im Wasser ___.",
        "answer": "schwimmen",
        "translation": "Balıklar suda yüzebilir."
      },
      {
        "wordIndex": 5,
        "text": "Wir ___ gerne zusammen.",
        "answer": "singen",
        "translation": "Birlikte şarkı söylemeyi severiz."
      },
      {
        "wordIndex": 8,
        "text": "Ich möchte heute Abend das Abendessen ___.",
        "answer": "kochen",
        "translation": "Bu akşam yemek pişirmek istiyorum."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Bitte ___ den Apfel in zwei Hälften.",
        "answer": "schneiden",
        "translation": "Lütfen elmayı ikiye kes."
      },
      {
        "wordIndex": 4,
        "text": "Bitte ___ Sie keinen Müll auf den Boden.",
        "answer": "werfen",
        "translation": "Yere çöp atma."
      },
      {
        "wordIndex": 9,
        "text": "___ Sie nicht die heiße Pfanne.",
        "answer": "Berühren",
        "translation": "Sıcak tavaya dokunma."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Können Sie die Vögel draußen ___?",
        "answer": "hören",
        "translation": "Dışarıdaki kuşları duyabiliyor musun?"
      },
      {
        "wordIndex": 8,
        "text": "Ich kann mich an deinen Namen ___.",
        "answer": "erinnern",
        "translation": "Adını hatırlayabiliyorum."
      },
      {
        "wordIndex": 6,
        "text": "Bitte ___, bevor Sie antworten.",
        "answer": "denken Sie nach",
        "translation": "Lütfen cevaplamadan önce düşün."
      }
    ],
    [
      {
        "wordIndex": 5,
        "text": "Ein freundliches Wort kann jemanden zum ___ bringen.",
        "answer": "Lächeln",
        "translation": "Nazik bir söz birini gülümsetebilir."
      },
      {
        "wordIndex": 7,
        "text": "Es ist normal zu ___, wenn man traurig ist.",
        "answer": "weinen",
        "translation": "Üzgün hissedince ağlamak normaldir."
      },
      {
        "wordIndex": 9,
        "text": "Bitte ___; das Baby schläft.",
        "answer": "flüstern",
        "translation": "Lütfen fısılda; bebek uyuyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Sie können den Lehrer um Hilfe ___.",
        "answer": "bitten",
        "translation": "Öğretmenden yardım isteyebilirsin."
      },
      {
        "wordIndex": 2,
        "text": "Können Sie mir die Regel ___?",
        "answer": "erklären",
        "translation": "Kuralı bana açıklayabilir misin?"
      },
      {
        "wordIndex": 7,
        "text": "___ Sie nichts, was Sie nicht tun können.",
        "answer": "Versprechen",
        "translation": "Yapamayacağın bir şey için söz verme."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Wir werden unsere Nachbarn zum Abendessen ___.",
        "answer": "einladen",
        "translation": "Komşularımızı akşam yemeğine davet edeceğiz."
      },
      {
        "wordIndex": 5,
        "text": "Bitte ___ Sie vor acht Uhr an.",
        "answer": "kommen",
        "translation": "Lütfen saat sekizden önce var."
      },
      {
        "wordIndex": 9,
        "text": "Bitte ___ Sie hier einen Moment.",
        "answer": "warten",
        "translation": "Lütfen burada bir dakika bekle."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Sie planen, eine neue Schule zu ___.",
        "answer": "bauen",
        "translation": "Yeni bir okul inşa etmeyi planlıyorlar."
      },
      {
        "wordIndex": 2,
        "text": "Kannst du mein Fahrrad ___?",
        "answer": "reparieren",
        "translation": "Bisikletimi onarabilir misin?"
      },
      {
        "wordIndex": 9,
        "text": "Wir können nach einer kurzen Pause ___.",
        "answer": "fortfahren",
        "translation": "Kısa bir aradan sonra devam edebiliriz."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Ich kann meine Schlüssel nicht ___.",
        "answer": "finden",
        "translation": "Anahtarlarımı bulamıyorum."
      },
      {
        "wordIndex": 7,
        "text": "Darf ich deinen Stift ___?",
        "answer": "ausleihen",
        "translation": "Kalemini ödünç alabilir miyim?"
      },
      {
        "wordIndex": 9,
        "text": "Du kannst mit Karte ___.",
        "answer": "bezahlen",
        "translation": "Kartla ödeyebilirsin."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Bitte ___ Sie mir eine Nachricht.",
        "answer": "senden",
        "translation": "Lütfen bana bir mesaj gönder."
      },
      {
        "wordIndex": 5,
        "text": "Denken Sie daran, Ihre Arbeit zu ___.",
        "answer": "speichern",
        "translation": "Çalışmanı kaydetmeyi unutma."
      },
      {
        "wordIndex": 9,
        "text": "Können Sie dieses Dokument ___?",
        "answer": "ausdrucken",
        "translation": "Bu belgeyi yazdırabilir misin?"
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Ein Löwe ist ein ___ Tier.",
        "answer": "starkes",
        "translation": "Aslan güçlü bir hayvandır."
      },
      {
        "wordIndex": 4,
        "text": "Der ___ Baum braucht Wasser.",
        "answer": "junge",
        "translation": "Genç ağacın suya ihtiyacı var."
      },
      {
        "wordIndex": 7,
        "text": "Dieser Koffer ist zu ___ für mich.",
        "answer": "schwer",
        "translation": "Bu bavul benim için çok ağır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Die Flasche ist ___; bitte fülle sie.",
        "answer": "leer",
        "translation": "Şişe boş; lütfen doldur."
      },
      {
        "wordIndex": 6,
        "text": "Diese Decke fühlt sich sehr ___ an.",
        "answer": "weich",
        "translation": "Bu battaniye çok yumuşak hissettiriyor."
      },
      {
        "wordIndex": 2,
        "text": "Der Fluss ist hier zu ___, um ihn zu überqueren.",
        "answer": "breit",
        "translation": "Nehir buradan geçmek için çok geniş."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "Bitte sei ___ in der Bibliothek.",
        "answer": "still",
        "translation": "Lütfen kütüphanede sessiz ol."
      },
      {
        "wordIndex": 5,
        "text": "Meine Schuhe sind vom Regen ___.",
        "answer": "nass",
        "translation": "Ayakkabılarım yağmurdan ıslak."
      },
      {
        "wordIndex": 8,
        "text": "Seien Sie vorsichtig mit dem ___ Messer.",
        "answer": "scharfen",
        "translation": "O keskin bıçağa dikkat et."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Unser Lehrer ist immer ___ zu uns.",
        "answer": "freundlich",
        "translation": "Öğretmenimiz bize her zaman naziktir."
      },
      {
        "wordIndex": 4,
        "text": "Er ist ___ und teilt, was er hat.",
        "answer": "großzügig",
        "translation": "O cömerttir ve sahip olduklarını paylaşır."
      },
      {
        "wordIndex": 8,
        "text": "Das ___ Kind sprach sehr leise.",
        "answer": "schüchterne",
        "translation": "Utangaç çocuk çok yumuşak bir sesle konuştu."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Der ___ Feuerwehrmann rettete das Kind.",
        "answer": "mutige",
        "translation": "Cesur itfaiyeci çocuğu kurtardı."
      },
      {
        "wordIndex": 4,
        "text": "Der ___ Student stellte viele Fragen.",
        "answer": "neugierige",
        "translation": "Meraklı öğrenci birçok soru sordu."
      },
      {
        "wordIndex": 5,
        "text": "Ein ___ Mensch sagt die Wahrheit.",
        "answer": "ehrlicher",
        "translation": "Dürüst bir insan doğruyu söyler."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Gemüse hilft dir, ___ zu bleiben.",
        "answer": "gesund",
        "translation": "Sebze yemek sağlıklı kalmana yardımcı olur."
      },
      {
        "wordIndex": 4,
        "text": "Nach der langen Reise fühle ich mich ___.",
        "answer": "müde",
        "translation": "Uzun yolculuktan sonra yorgun hissediyorum."
      },
      {
        "wordIndex": 6,
        "text": "Nach dem Laufen habe ich großen ___.",
        "answer": "Durst",
        "translation": "Koştuktan sonra çok susamış olurum."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Er trug die Tasche auf seiner ___.",
        "answer": "Schulter",
        "translation": "Çantayı omzunda taşıdı."
      },
      {
        "wordIndex": 5,
        "text": "Sie trug einen Ring an ihrem ___.",
        "answer": "Finger",
        "translation": "Parmağına bir yüzük taktı."
      },
      {
        "wordIndex": 7,
        "text": "Ich habe mir beim Sturz das ___ verletzt.",
        "answer": "Knie",
        "translation": "Düştüğümde dizimi incittim."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Sie wurde ___ im Rennen.",
        "answer": "Erste",
        "translation": "Yarışta birinci geldi."
      },
      {
        "wordIndex": 6,
        "text": "Wir kamen ___ an, um gute Plätze zu bekommen.",
        "answer": "früh",
        "translation": "İyi koltuklar bulmak için erken geldik."
      },
      {
        "wordIndex": 9,
        "text": "Den Geburtstag meiner Mutter vergesse ich ___.",
        "answer": "nie",
        "translation": "Annemin doğum gününü asla unutmam."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Ich ___ gehe zu Fuß zur Arbeit.",
        "answer": "manchmal",
        "translation": "Bazen işe yürürüm."
      },
      {
        "wordIndex": 6,
        "text": "Der Bus wird ___ ankommen.",
        "answer": "bald",
        "translation": "Otobüs yakında gelecek."
      },
      {
        "wordIndex": 8,
        "text": "Bitte lesen Sie den Satz ___.",
        "answer": "noch einmal",
        "translation": "Lütfen cümleyi tekrar oku."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Biegen Sie an der nächsten Straße ___ ab.",
        "answer": "links",
        "translation": "Bir sonraki sokakta sola dön."
      },
      {
        "wordIndex": 7,
        "text": "Die Bank liegt ___ der Schule und dem Park.",
        "answer": "zwischen",
        "translation": "Banka okul ile parkın arasındadır."
      },
      {
        "wordIndex": 9,
        "text": "Der Flughafen liegt ___ vom Stadtzentrum entfernt.",
        "answer": "weit",
        "translation": "Havalimanı şehir merkezinden uzaktır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "In dieser großen ___ leben viele Menschen.",
        "answer": "Stadt",
        "translation": "Bu büyük şehirde birçok insan yaşar."
      },
      {
        "wordIndex": 4,
        "text": "Die alte ___ überquert den Fluss.",
        "answer": "Brücke",
        "translation": "Eski köprü nehrin üzerinden geçer."
      },
      {
        "wordIndex": 8,
        "text": "Im ___ leben viele wilde Tiere.",
        "answer": "Wald",
        "translation": "Ormanda birçok vahşi hayvan yaşar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Wir fahren mit dem ___ zur Schule.",
        "answer": "Bus",
        "translation": "Okula otobüsle gideriz."
      },
      {
        "wordIndex": 4,
        "text": "Ich fahre mit meinem ___ durch den Park.",
        "answer": "Fahrrad",
        "translation": "Parkta bisikletime binerim."
      },
      {
        "wordIndex": 1,
        "text": "Der ___ fährt von Gleis zwei ab.",
        "answer": "Zug",
        "translation": "Tren ikinci perondan kalkar."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Das Fahrrad hat ein kaputtes ___.",
        "answer": "Rad",
        "translation": "Bisikletin kırık bir tekerleği var."
      },
      {
        "wordIndex": 4,
        "text": "Der ___ hielt an der roten Ampel.",
        "answer": "Fahrer",
        "translation": "Sürücü kırmızı ışıkta durdu."
      },
      {
        "wordIndex": 8,
        "text": "Ohne ___ kann das Auto nicht fahren.",
        "answer": "Kraftstoff",
        "translation": "Araba yakıt olmadan çalışamaz."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Ich behalte mein Geld auf der ___.",
        "answer": "Bank",
        "translation": "Paramı bankada tutarım."
      },
      {
        "wordIndex": 4,
        "text": "Sie können Bücher in der ___ ausleihen.",
        "answer": "Bibliothek",
        "translation": "Kütüphaneden ödünç kitap alabilirsin."
      },
      {
        "wordIndex": 9,
        "text": "Frisches Brot kaufen wir beim ___.",
        "answer": "Bäcker",
        "translation": "Fırından taze ekmek alırız."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "Der ___ entwarf eine neue Brücke.",
        "answer": "Ingenieur",
        "translation": "Mühendis yeni bir köprü tasarladı."
      },
      {
        "wordIndex": 4,
        "text": "Der ___ baut Gemüse an.",
        "answer": "Bauer",
        "translation": "Çiftçi sebze yetiştirir."
      },
      {
        "wordIndex": 8,
        "text": "Gehen Sie zum ___, wenn Ihr Zahn schmerzt.",
        "answer": "Zahnarzt",
        "translation": "Dişin ağrıyorsa diş hekimine git."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Um in den Zug einzusteigen, benötigen Sie eine ___.",
        "answer": "Fahrkarte",
        "translation": "Trene binmek için bilete ihtiyacın var."
      },
      {
        "wordIndex": 5,
        "text": "Zeigen Sie Ihren ___ an der Grenze vor.",
        "answer": "Reisepass",
        "translation": "Sınırda pasaportunu göster."
      },
      {
        "wordIndex": 7,
        "text": "Verwenden Sie die ___, um das Museum zu finden.",
        "answer": "Karte",
        "translation": "Müzeyi bulmak için haritayı kullan."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Der ___ untersuchte den Patienten.",
        "answer": "Arzt",
        "translation": "Doktor hastayı muayene etti."
      },
      {
        "wordIndex": 4,
        "text": "Nehmen Sie dieses ___ nach dem Frühstück ein.",
        "answer": "Arzneimittel",
        "translation": "Bu ilacı kahvaltıdan sonra al."
      },
      {
        "wordIndex": 7,
        "text": "Das Kind hat hohes ___.",
        "answer": "Fieber",
        "translation": "Çocuğun yüksek ateşi var."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Die Fahrkarten sind diese Woche ___.",
        "answer": "billig",
        "translation": "Biletler bu hafta ucuz."
      },
      {
        "wordIndex": 5,
        "text": "Wie hoch ist der ___ dieser Tasche?",
        "answer": "Preis",
        "translation": "Bu çantanın fiyatı nedir?"
      },
      {
        "wordIndex": 9,
        "text": "Wir müssen innerhalb unseres ___ bleiben.",
        "answer": "Budgets",
        "translation": "Bütçemizin sınırları içinde kalmalıyız."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Regelmäßige ___ ist gut für Ihre Gesundheit.",
        "answer": "Bewegung",
        "translation": "Düzenli egzersiz sağlığın için iyidir."
      },
      {
        "wordIndex": 6,
        "text": "Unsere ___ hat das Spiel gewonnen.",
        "answer": "Mannschaft",
        "translation": "Takımımız karşılaşmayı kazandı."
      },
      {
        "wordIndex": 7,
        "text": "Der ___ erklärte die neue Strategie.",
        "answer": "Trainer",
        "translation": "Antrenör yeni stratejiyi açıkladı."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Das Kind hat den ___ ins Netz geschossen.",
        "answer": "Ball",
        "translation": "Çocuk topu ağlara doğru vurdu."
      },
      {
        "wordIndex": 8,
        "text": "Sie gewann bei dem Wettbewerb eine goldene ___.",
        "answer": "Medaille",
        "translation": "Yarışmada altın madalya kazandı."
      },
      {
        "wordIndex": 7,
        "text": "Tausende Fans füllten das ___.",
        "answer": "Stadion",
        "translation": "Binlerce taraftar stadyumu doldurdu."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Ich verwende einen ___, um Berichte zu schreiben.",
        "answer": "Computer",
        "translation": "Rapor yazmak için bilgisayar kullanırım."
      },
      {
        "wordIndex": 3,
        "text": "Geben Sie Ihren Namen auf der ___ ein.",
        "answer": "Tastatur",
        "translation": "Adını klavyede yaz."
      },
      {
        "wordIndex": 8,
        "text": "Der ___ meines Telefons ist fast leer.",
        "answer": "Akku",
        "translation": "Telefonumun pili neredeyse boş."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Wählen Sie ein sicheres ___ für Ihr Konto.",
        "answer": "Passwort",
        "translation": "Hesabın için güçlü bir şifre seç."
      },
      {
        "wordIndex": 5,
        "text": "Speichern Sie die ___, bevor Sie das Programm schließen.",
        "answer": "Datei",
        "translation": "Programı kapatmadan önce dosyayı kaydet."
      },
      {
        "wordIndex": 9,
        "text": "Sie können online nach Informationen ___.",
        "answer": "suchen",
        "translation": "İnternette bilgi arayabilirsin."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Türkisch ist meine erste ___.",
        "answer": "Sprache",
        "translation": "Türkçe benim ilk dilimdir."
      },
      {
        "wordIndex": 7,
        "text": "Ich erledige meine ___ vor dem Abendessen.",
        "answer": "Hausaufgaben",
        "translation": "Ödevimi akşam yemeğinden önce bitiririm."
      },
      {
        "wordIndex": 8,
        "text": "Wir haben morgen eine Mathe-___.",
        "answer": "Prüfung",
        "translation": "Yarın matematik sınavımız var."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "Was ist die ___ dieses Wortes?",
        "answer": "Bedeutung",
        "translation": "Bu kelimenin anlamı nedir?"
      },
      {
        "wordIndex": 5,
        "text": "Diese ___ ist leicht zu verstehen.",
        "answer": "Übersetzung",
        "translation": "Bu çeviriyi anlamak kolaydır."
      },
      {
        "wordIndex": 6,
        "text": "Zuhören hilft, deine ___ zu verbessern.",
        "answer": "Aussprache",
        "translation": "Dinlemek telaffuzunu geliştirmeye yardımcı olur."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Der Lehrer stellte eine interessante ___.",
        "answer": "Frage",
        "translation": "Öğretmen ilginç bir soru sordu."
      },
      {
        "wordIndex": 5,
        "text": "Wir brauchen eine ___ für dieses Problem.",
        "answer": "Lösung",
        "translation": "Bu soruna bir çözüm bulmamız gerekiyor."
      },
      {
        "wordIndex": 7,
        "text": "Das ist eine großartige ___.",
        "answer": "Idee",
        "translation": "Bu harika bir fikir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Meiner ___ ist das eine gute Idee.",
        "answer": "Meinung nach",
        "translation": "Bence bu iyi bir fikir."
      },
      {
        "wordIndex": 4,
        "text": "Die Polizei sucht nach ___.",
        "answer": "Beweisen",
        "translation": "Polis kanıt arıyor."
      },
      {
        "wordIndex": 9,
        "text": "Schreiben Sie eine kurze ___ der Geschichte.",
        "answer": "Zusammenfassung",
        "translation": "Hikâyenin kısa bir özetini yaz."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Wir arbeiten an einem neuen ___.",
        "answer": "Projekt",
        "translation": "Yeni bir proje üzerinde çalışıyoruz."
      },
      {
        "wordIndex": 6,
        "text": "Die ___ für den Bericht ist Freitag.",
        "answer": "Frist",
        "translation": "Raporun son teslim tarihi cumadır."
      },
      {
        "wordIndex": 8,
        "text": "Das ___ beginnt um neun.",
        "answer": "Treffen",
        "translation": "Toplantı dokuzda başlar."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Jeder ___ hat einen Schreibtisch.",
        "answer": "Mitarbeiter",
        "translation": "Her çalışanın bir masası var."
      },
      {
        "wordIndex": 4,
        "text": "Der ___ fragte nach dem Preis.",
        "answer": "Kunde",
        "translation": "Müşteri fiyatı sordu."
      },
      {
        "wordIndex": 9,
        "text": "Lesen Sie den ___, bevor Sie ihn unterschreiben.",
        "answer": "Vertrag",
        "translation": "İmzalamadan önce sözleşmeyi oku."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Sie erhält jeden Monat ihr ___.",
        "answer": "Gehalt",
        "translation": "Maaşını her ay alır."
      },
      {
        "wordIndex": 6,
        "text": "Wir zahlen ___ auf unser Einkommen.",
        "answer": "Steuer",
        "translation": "Gelirimiz üzerinden vergi öderiz."
      },
      {
        "wordIndex": 8,
        "text": "Er nahm einen ___ auf, um ein Haus zu kaufen.",
        "answer": "Kredit",
        "translation": "Ev almak için kredi çekti."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Mein ___ befindet sich im zweiten Stock.",
        "answer": "Büro",
        "translation": "Ofisim ikinci katta."
      },
      {
        "wordIndex": 1,
        "text": "Die ___ produziert Autos.",
        "answer": "Fabrik",
        "translation": "Fabrika araba üretir."
      },
      {
        "wordIndex": 7,
        "text": "Sie möchte eine ___ in der Medizin machen.",
        "answer": "Karriere",
        "translation": "Tıp alanında kariyer istiyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Das ___ steuert viele Funktionen des Körpers.",
        "answer": "Gehirn",
        "translation": "Beyin vücudun birçok işlevini kontrol eder."
      },
      {
        "wordIndex": 1,
        "text": "Das Herz pumpt ___ durch den Körper.",
        "answer": "Blut",
        "translation": "Kalp vücuda kan pompalar."
      },
      {
        "wordIndex": 4,
        "text": "Schütze deine ___ vor der Sonne.",
        "answer": "Haut",
        "translation": "Cildini güneşten koru."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Husten kann ein ___ einer Erkältung sein.",
        "answer": "Symptom",
        "translation": "Öksürük soğuk algınlığının bir belirtisi olabilir."
      },
      {
        "wordIndex": 5,
        "text": "Ich habe morgen einen ___ beim Arzt.",
        "answer": "Termin",
        "translation": "Yarın doktorla randevum var."
      },
      {
        "wordIndex": 8,
        "text": "Rufen Sie im ___ einen Krankenwagen.",
        "answer": "Notfall",
        "translation": "Acil bir durumda ambulans çağır."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Studierende können mit Teilzeitarbeit Geld ___.",
        "answer": "verdienen",
        "translation": "Öğrenciler yarı zamanlı çalışarak para kazanabilir."
      },
      {
        "wordIndex": 3,
        "text": "Es ist klug, in Bildung zu ___.",
        "answer": "investieren",
        "translation": "Eğitime yatırım yapmak akıllıcadır."
      },
      {
        "wordIndex": 9,
        "text": "Bewahre den ___ auf, falls du eine Rückerstattung brauchst.",
        "answer": "Kassenbon",
        "translation": "İade gerekirse diye fişi sakla."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Das Unternehmen will weitere Ingenieure ___.",
        "answer": "einstellen",
        "translation": "Şirket daha fazla mühendis işe almayı planlıyor."
      },
      {
        "wordIndex": 8,
        "text": "Wir müssen die Veranstaltung sorgfältig ___.",
        "answer": "organisieren",
        "translation": "Etkinliği dikkatle düzenlememiz gerekiyor."
      },
      {
        "wordIndex": 7,
        "text": "Können Sie ein Team von zehn Personen ___?",
        "answer": "leiten",
        "translation": "On kişilik bir takımı yönetebilir misin?"
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Der Manager muss die Anfrage ___.",
        "answer": "genehmigen",
        "translation": "Yönetici talebi onaylamalıdır."
      },
      {
        "wordIndex": 6,
        "text": "Ein Helm kann helfen, schwere Verletzungen zu ___.",
        "answer": "verhindern",
        "translation": "Kask ciddi yaralanmaları önlemeye yardımcı olabilir."
      },
      {
        "wordIndex": 9,
        "text": "Alle Beschäftigten müssen die Sicherheitsregeln ___.",
        "answer": "befolgen",
        "translation": "Tüm çalışanlar güvenlik kurallarına uymalıdır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Jeder ___ hat Rechte und Pflichten.",
        "answer": "Bürger",
        "translation": "Her vatandaşın hakları ve sorumlulukları vardır."
      },
      {
        "wordIndex": 4,
        "text": "Wir überquerten nachts die ___.",
        "answer": "Grenze",
        "translation": "Sınırı gece geçtik."
      },
      {
        "wordIndex": 7,
        "text": "Der Beamte überprüfte meine ___.",
        "answer": "Identität",
        "translation": "Görevli kimliğimi kontrol etti."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Unsere ___ hilft Menschen in Not.",
        "answer": "Gemeinschaft",
        "translation": "Topluluğumuz ihtiyaç sahiplerine yardım eder."
      },
      {
        "wordIndex": 3,
        "text": "Eine Mahlzeit zu teilen ist hier eine wichtige ___.",
        "answer": "Tradition",
        "translation": "Bir yemeği paylaşmak burada önemli bir gelenektir."
      },
      {
        "wordIndex": 6,
        "text": "Wir feiern die ___ unserer Stadt.",
        "answer": "Vielfalt",
        "translation": "Şehrimizin çeşitliliğini kutlarız."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Zeit in der ___ zu verbringen hilft mir, mich zu entspannen.",
        "answer": "Natur",
        "translation": "Doğada zaman geçirmek rahatlamama yardımcı olur."
      },
      {
        "wordIndex": 5,
        "text": "Das ___ verändert sich weltweit.",
        "answer": "Klima",
        "translation": "İklim dünya genelinde değişiyor."
      },
      {
        "wordIndex": 8,
        "text": "___ hilft, Abfall zu reduzieren.",
        "answer": "Recycling",
        "translation": "Geri dönüşüm atıkları azaltmaya yardımcı olur."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Wir brauchen ___, um unsere Häuser zu heizen.",
        "answer": "Energie",
        "translation": "Evlerimizi ısıtmak için enerjiye ihtiyacımız var."
      },
      {
        "wordIndex": 4,
        "text": "Die Verbrennung von ___ verursacht Luftverschmutzung.",
        "answer": "Kohle",
        "translation": "Kömür yakmak hava kirliliğine neden olur."
      },
      {
        "wordIndex": 6,
        "text": "Wasser ist eine kostbare natürliche ___.",
        "answer": "Ressource",
        "translation": "Su değerli bir doğal kaynaktır."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Die Erde ist der ___, auf dem wir leben.",
        "answer": "Planet",
        "translation": "Dünya üzerinde yaşadığımız gezegendir."
      },
      {
        "wordIndex": 2,
        "text": "Der hellste ___ ist heute Nacht sichtbar.",
        "answer": "Stern",
        "translation": "Bu gece en parlak yıldız görünüyor."
      },
      {
        "wordIndex": 6,
        "text": "___ hält uns am Boden.",
        "answer": "Die Schwerkraft",
        "translation": "Yerçekimi bizi yerde tutar."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Ein ___ ist eine Grundeinheit der Materie.",
        "answer": "Atom",
        "translation": "Atom maddenin temel bir birimidir."
      },
      {
        "wordIndex": 7,
        "text": "Der ___ im Behälter ist gestiegen.",
        "answer": "Druck",
        "translation": "Kabın içindeki basınç arttı."
      },
      {
        "wordIndex": 8,
        "text": "Die ___ von Wasser ändert sich mit der Temperatur.",
        "answer": "Dichte",
        "translation": "Suyun yoğunluğu sıcaklıkla değişir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Überprüfe die ___, bevor du die Bestellung aufgibst.",
        "answer": "Menge",
        "translation": "Siparişi vermeden önce miktarı kontrol et."
      },
      {
        "wordIndex": 5,
        "text": "Der ___ von zwei und vier beträgt drei.",
        "answer": "Durchschnitt",
        "translation": "İki ve dördün ortalaması üçtür."
      },
      {
        "wordIndex": 7,
        "text": "Kannst du den ___ zwischen diesen Bildern sehen?",
        "answer": "Unterschied",
        "translation": "Bu resimler arasındaki farkı görebiliyor musun?"
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Bitte ___ Sie die Gesamtkosten.",
        "answer": "kalkulieren",
        "translation": "Lütfen toplam maliyeti hesapla."
      },
      {
        "wordIndex": 2,
        "text": "Wir müssen den Raum ___, bevor wir einen Teppich kaufen.",
        "answer": "messen",
        "translation": "Halı almadan önce odayı ölçmemiz gerekiyor."
      },
      {
        "wordIndex": 6,
        "text": "Wenn du drei mit vier ___, erhältst du zwölf.",
        "answer": "multiplizierst",
        "translation": "Üç ile dördü çarparsan on iki elde edersin."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Wissenschaftler ___ das Verhalten von Tieren.",
        "answer": "beobachten",
        "translation": "Bilim insanları hayvanların davranışlarını gözlemler."
      },
      {
        "wordIndex": 3,
        "text": "Du solltest Informationen immer ___, bevor du sie teilst.",
        "answer": "überprüfen",
        "translation": "Bilgiyi paylaşmadan önce her zaman doğrula."
      },
      {
        "wordIndex": 8,
        "text": "Es ist schwierig, das Wetter genau ___.",
        "answer": "vorherzusagen",
        "translation": "Hava durumunu tam olarak öngörmek zordur."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Diese ___ erleichtert das Lernen.",
        "answer": "Methode",
        "translation": "Bu yöntem öğrenmeyi kolaylaştırır."
      },
      {
        "wordIndex": 4,
        "text": "Wir haben die ___ des Gebäudes untersucht.",
        "answer": "Struktur",
        "translation": "Binanın yapısını inceledik."
      },
      {
        "wordIndex": 6,
        "text": "Jede ___ hat eine wichtige Funktion.",
        "answer": "Komponente",
        "translation": "Her bileşenin önemli bir işlevi vardır."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Schlaf hat eine starke ___ auf die Konzentration.",
        "answer": "Wirkung",
        "translation": "Uykunun dikkat üzerinde güçlü bir etkisi vardır."
      },
      {
        "wordIndex": 4,
        "text": "Die Kosten sind ein wichtiger ___ bei unserer Entscheidung.",
        "answer": "Faktor",
        "translation": "Maliyet kararımızda önemli bir etkendir."
      },
      {
        "wordIndex": 7,
        "text": "Im ___ kannst du ein Wort besser verstehen.",
        "answer": "Kontext",
        "translation": "Bir kelimeyi bağlam içinde daha iyi anlayabilirsin."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Ein ___ des Gehens ist eine bessere Gesundheit.",
        "answer": "Vorteil",
        "translation": "Yürümenin bir faydası daha iyi sağlıktır."
      },
      {
        "wordIndex": 3,
        "text": "Ein Sicherheitsgurt verringert das ___ einer Verletzung.",
        "answer": "Risiko",
        "translation": "Emniyet kemeri takmak yaralanma riskini azaltır."
      },
      {
        "wordIndex": 6,
        "text": "Geldmangel kann ein ___ für Bildung sein.",
        "answer": "Hindernis",
        "translation": "Para eksikliği eğitimin önünde bir engel olabilir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Sauberes Wasser ist ___.",
        "answer": "lebensnotwendig",
        "translation": "Temiz su yaşam için gereklidir."
      },
      {
        "wordIndex": 2,
        "text": "Die zusätzliche Übung ist ___.",
        "answer": "optional",
        "translation": "Ek alıştırma isteğe bağlıdır."
      },
      {
        "wordIndex": 9,
        "text": "Eine ___ Maschine verbraucht weniger Energie.",
        "answer": "effiziente",
        "translation": "Verimli bir makine daha az enerji kullanır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Wir benötigen ___ Informationen, um eine gute Entscheidung treffen zu können.",
        "answer": "genaue",
        "translation": "İyi bir karar vermek için doğru bilgiye ihtiyacımız var."
      },
      {
        "wordIndex": 2,
        "text": "Diese Website ist eine ___ Informationsquelle.",
        "answer": "zuverlässige",
        "translation": "Bu internet sitesi güvenilir bir bilgi kaynağıdır."
      },
      {
        "wordIndex": 9,
        "text": "Unser Zeitplan ist ___, sodass wir die Zeit ändern können.",
        "answer": "flexibel",
        "translation": "Programımız esnek, bu yüzden saati değiştirebiliriz."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Das menschliche Gehirn ist sehr ___.",
        "answer": "komplex",
        "translation": "İnsan beyni çok karmaşıktır."
      },
      {
        "wordIndex": 2,
        "text": "Freiheit ist ein ___ Konzept.",
        "answer": "abstraktes",
        "translation": "Özgürlük soyut bir kavramdır."
      },
      {
        "wordIndex": 8,
        "text": "Die Fingerabdrücke jeder Person sind ___.",
        "answer": "einzigartig",
        "translation": "Her insanın parmak izleri benzersizdir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Lesen erweitert Ihr ___.",
        "answer": "Wissen",
        "translation": "Okumak bilgini artırır."
      },
      {
        "wordIndex": 3,
        "text": "Das Erlernen einer Sprache erfordert Zeit und ___.",
        "answer": "Mühe",
        "translation": "Dil öğrenmek zaman ve çaba gerektirir."
      },
      {
        "wordIndex": 6,
        "text": "Dieser Job ist eine großartige ___ für mich.",
        "answer": "Chance",
        "translation": "Bu iş benim için harika bir fırsat."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Jeder hat es verdient, in ___ zu leben.",
        "answer": "Freiheit",
        "translation": "Herkes özgürlük içinde yaşamayı hak eder."
      },
      {
        "wordIndex": 6,
        "text": "Das Unterrichten kleiner Kinder erfordert ___.",
        "answer": "Geduld",
        "translation": "Küçük çocuklara öğretmenlik yapmak sabır gerektirir."
      },
      {
        "wordIndex": 7,
        "text": "Sie können ___ aufbauen, indem Sie Ihre Versprechen halten.",
        "answer": "Vertrauen",
        "translation": "Sözlerini tutarak güven oluşturabilirsin."
      }
    ],
    [
      {
        "wordIndex": 4,
        "text": "Essen ist ein wichtiger Teil unserer ___.",
        "answer": "Kultur",
        "translation": "Yemek, kültürümüzün önemli bir parçasıdır."
      },
      {
        "wordIndex": 5,
        "text": "Jedes Kind hat ein Recht auf ___.",
        "answer": "Bildung",
        "translation": "Her çocuğun eğitim hakkı vardır."
      },
      {
        "wordIndex": 7,
        "text": "Moderne ___ erleichtert die Kommunikation.",
        "answer": "Technologie",
        "translation": "Modern teknoloji iletişimi kolaylaştırır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Jeder muss das ___ respektieren.",
        "answer": "Gesetz",
        "translation": "Herkes kanuna saygı göstermelidir."
      },
      {
        "wordIndex": 4,
        "text": "Bitte befolgen Sie die korrekte ___.",
        "answer": "Prozedur",
        "translation": "Lütfen doğru prosedürü takip et."
      },
      {
        "wordIndex": 8,
        "text": "Wer gegen die Regeln verstößt, muss mit einer ___ rechnen.",
        "answer": "Strafe",
        "translation": "Kuralları çiğnemenin bir cezası var."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Der ___ hörte dem Zeugen zu.",
        "answer": "Richter",
        "translation": "Hâkim tanığı dinledi."
      },
      {
        "wordIndex": 3,
        "text": "Der ___ beschrieb den Vorfall.",
        "answer": "Zeuge",
        "translation": "Tanık ne olduğunu anlattı."
      },
      {
        "wordIndex": 8,
        "text": "Die Jury gab ihr ___ bekannt.",
        "answer": "Urteil",
        "translation": "Jüri hükmünü açıkladı."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Die nächste ___ findet im Juni statt.",
        "answer": "Wahl",
        "translation": "Bir sonraki seçim haziranda yapılacak."
      },
      {
        "wordIndex": 2,
        "text": "Jeder ___ beantwortete die gleichen Fragen.",
        "answer": "Kandidat",
        "translation": "Her aday aynı soruları yanıtladı."
      },
      {
        "wordIndex": 9,
        "text": "Die ___ schützt die Grundrechte.",
        "answer": "Verfassung",
        "translation": "Anayasa temel hakları korur."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Wir kaufen Gemüse von einem ___ Bauern.",
        "answer": "lokalen",
        "translation": "Yerel bir çiftçiden sebze alırız."
      },
      {
        "wordIndex": 5,
        "text": "Das Erlernen einer ___ öffnet neue Türen.",
        "answer": "Fremdsprache",
        "translation": "Yabancı bir dil öğrenmek yeni kapılar açar."
      },
      {
        "wordIndex": 7,
        "text": "Dies sind ___ Informationen; Bitte teilen Sie es nicht.",
        "answer": "private",
        "translation": "Bu özel bir bilgidir; lütfen paylaşma."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Bewahren Sie Ihre ___ Daten sicher auf.",
        "answer": "persönlichen",
        "translation": "Kişisel bilgilerini güvende tut."
      },
      {
        "wordIndex": 7,
        "text": "Sie sollten sich vor der Unterzeichnung ___ beraten lassen.",
        "answer": "juristisch",
        "translation": "İmzalamadan önce hukuki tavsiye almalısın."
      },
      {
        "wordIndex": 8,
        "text": "Das Unternehmen folgt strengen ___ Standards.",
        "answer": "ethischen",
        "translation": "Şirket sıkı etik standartlara uyar."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Ist es ___, das Datum zu ändern?",
        "answer": "möglich",
        "translation": "Tarihi değiştirmek mümkün mü?"
      },
      {
        "wordIndex": 6,
        "text": "Ich bin ___, dass dies die richtige Antwort ist.",
        "answer": "sicher",
        "translation": "Bunun doğru cevap olduğundan eminim."
      },
      {
        "wordIndex": 8,
        "text": "Die Antwort ist ___, wenn Sie die Frage sorgfältig lesen.",
        "answer": "offensichtlich",
        "translation": "Soruyu dikkatle okuyunca cevap açıkça bellidir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Dies ist nur eine ___ Lösung.",
        "answer": "vorübergehende",
        "translation": "Bu yalnızca geçici bir çözümdür."
      },
      {
        "wordIndex": 3,
        "text": "Wir bemerkten eine ___ Verbesserung ihres Gesundheitszustands.",
        "answer": "allmähliche",
        "translation": "Sağlığında kademeli bir iyileşme fark ettik."
      },
      {
        "wordIndex": 8,
        "text": "Das Unternehmen veröffentlicht einen ___.",
        "answer": "Geschäftsbericht",
        "translation": "Şirket yıllık bir rapor yayımlar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Der ___ Plan wurde nach dem Treffen geändert.",
        "answer": "ursprüngliche",
        "translation": "Başlangıçtaki plan toplantıdan sonra değişti."
      },
      {
        "wordIndex": 4,
        "text": "Wie lautet Ihre ___ Adresse?",
        "answer": "aktuelle",
        "translation": "Mevcut adresin nedir?"
      },
      {
        "wordIndex": 7,
        "text": "Wir müssen an ___ Generationen denken.",
        "answer": "zukünftige",
        "translation": "Gelecekteki nesilleri düşünmeliyiz."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Wir sollten die Preise vor dem Kauf ___.",
        "answer": "vergleichen",
        "translation": "Satın almadan önce fiyatları karşılaştırmalıyız."
      },
      {
        "wordIndex": 7,
        "text": "Es ist wichtig, ein gesundes Gleichgewicht zu ___.",
        "answer": "aufrechtzuerhalten",
        "translation": "Sağlıklı bir denge sürdürmek önemlidir."
      },
      {
        "wordIndex": 9,
        "text": "Übung kann Ihre Aussprache ___.",
        "answer": "verbessern",
        "translation": "Alıştırma yapmak telaffuzunu iyileştirebilir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Das Unternehmen plant, sein Geschäft zu ___.",
        "answer": "erweitern",
        "translation": "Şirket işini genişletmeyi planlıyor."
      },
      {
        "wordIndex": 1,
        "text": "Wir sollten unseren Wasserverbrauch ___.",
        "answer": "reduzieren",
        "translation": "Su tüketimimizi azaltmalıyız."
      },
      {
        "wordIndex": 5,
        "text": "Tiere müssen sich an Veränderungen ihrer Umwelt ___.",
        "answer": "anpassen",
        "translation": "Hayvanlar çevrelerindeki değişikliklere uyum sağlamalıdır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Bitte ___ deine Telefonnummer in das Formular ein.",
        "answer": "beziehe",
        "translation": "Lütfen telefon numaranı forma ekle."
      },
      {
        "wordIndex": 6,
        "text": "Die roten Linien ___ Straßen auf dieser Karte.",
        "answer": "repräsentieren",
        "translation": "Bu haritada kırmızı çizgiler yolları temsil eder."
      },
      {
        "wordIndex": 8,
        "text": "Spiegel ___ Licht.",
        "answer": "reflektieren",
        "translation": "Aynalar ışığı yansıtır."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Bitte ___ alle Möglichkeiten, bevor du dich entscheidest.",
        "answer": "berücksichtige",
        "translation": "Lütfen karar vermeden önce tüm seçenekleri dikkate al."
      },
      {
        "wordIndex": 6,
        "text": "Ich kann die Hauptidee dieses Textes ___.",
        "answer": "verstehen",
        "translation": "Bu metnin ana fikrini anlayabiliyorum."
      },
      {
        "wordIndex": 8,
        "text": "Wir können die Bedeutung aus dem Kontext ___.",
        "answer": "herleiten",
        "translation": "Bağlamdan anlam çıkarabiliriz."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Der Arzt wird dein Knie ___.",
        "answer": "untersuchen",
        "translation": "Doktor dizini inceleyecek."
      },
      {
        "wordIndex": 3,
        "text": "Bitte ___ deine Antworten vor dem Absenden.",
        "answer": "überprüfe",
        "translation": "Lütfen göndermeden önce cevaplarını gözden geçir."
      },
      {
        "wordIndex": 9,
        "text": "Reisen hilft uns, neue Kulturen zu ___.",
        "answer": "entdecken",
        "translation": "Seyahat yeni kültürler keşfetmemize yardımcı olur."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Die Schule wird die neue Richtlinie nächsten Monat ___.",
        "answer": "umsetzen",
        "translation": "Okul yeni politikayı gelecek ay uygulamaya koyacak."
      },
      {
        "wordIndex": 6,
        "text": "Bilder können den Lernprozess ___.",
        "answer": "erleichtern",
        "translation": "Resimler öğrenme sürecini kolaylaştırabilir."
      },
      {
        "wordIndex": 8,
        "text": "Gute Freunde ___ sich gegenseitig.",
        "answer": "unterstützen",
        "translation": "İyi arkadaşlar birbirini destekler."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Wir müssen jeder Aufgabe genug Zeit ___.",
        "answer": "zuteilen",
        "translation": "Her görev için yeterli zaman tahsis etmeliyiz."
      },
      {
        "wordIndex": 1,
        "text": "Die Freiwilligen werden Essen an Familien ___.",
        "answer": "verteilen",
        "translation": "Gönüllüler ailelere yiyecek dağıtacak."
      },
      {
        "wordIndex": 7,
        "text": "Die Bibliothek kann nützliche Informationen ___.",
        "answer": "bereitstellen",
        "translation": "Kütüphane yararlı bilgiler sağlayabilir."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Versuchen Sie, die Situation aus einer anderen ___ zu betrachten.",
        "answer": "Perspektive",
        "translation": "Durumu farklı bir bakış açısından görmeye çalış."
      },
      {
        "wordIndex": 3,
        "text": "Sicherheit hat für uns oberste ___.",
        "answer": "Priorität",
        "translation": "Güvenlik ilk önceliğimizdir."
      },
      {
        "wordIndex": 9,
        "text": "Der Wissenschaftler testete eine neue ___.",
        "answer": "Hypothese",
        "translation": "Bilim insanı yeni bir hipotezi sınadı."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Die Gemeinde zeigte nach der Katastrophe große ___.",
        "answer": "Resilienz",
        "translation": "Topluluk felaketten sonra büyük dayanıklılık gösterdi."
      },
      {
        "wordIndex": 4,
        "text": "Der Schwerpunkt des Projekts liegt auf ökologischer ___.",
        "answer": "Nachhaltigkeit",
        "translation": "Proje çevresel sürdürülebilirliğe odaklanır."
      },
      {
        "wordIndex": 8,
        "text": "Das Unternehmen fördert ___ und kreatives Denken.",
        "answer": "Innovation",
        "translation": "Şirket yenilikçiliği ve yaratıcı düşünmeyi teşvik eder."
      }
    ]
  ],
  "en": [
    [
      {
        "wordIndex": 0,
        "text": "The ___ is sleeping on the chair.",
        "answer": "cat",
        "translation": "Kedi sandalyede uyuyor."
      },
      {
        "wordIndex": 2,
        "text": "The ___ gives us light and warmth.",
        "answer": "sun",
        "translation": "Güneş bize ışık ve sıcaklık verir."
      },
      {
        "wordIndex": 7,
        "text": "I read a ___ before bed.",
        "answer": "book",
        "translation": "Yatmadan önce bir kitap okurum."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "My ___ makes delicious soup.",
        "answer": "mother",
        "translation": "Annem lezzetli çorba yapar."
      },
      {
        "wordIndex": 4,
        "text": "The children go to ___ every morning.",
        "answer": "school",
        "translation": "Çocuklar her sabah okula gider."
      },
      {
        "wordIndex": 9,
        "text": "Please open the ___ for some fresh air.",
        "answer": "window",
        "translation": "Biraz temiz hava için lütfen pencereyi aç."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "This ___ smells wonderful.",
        "answer": "flower",
        "translation": "Bu çiçek harika kokuyor."
      },
      {
        "wordIndex": 5,
        "text": "I drink a glass of ___ with breakfast.",
        "answer": "milk",
        "translation": "Kahvaltıda bir bardak süt içerim."
      },
      {
        "wordIndex": 8,
        "text": "She puts a red ___ in her bag.",
        "answer": "apple",
        "translation": "Çantasına kırmızı bir elma koyar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "We eat breakfast in the ___.",
        "answer": "morning",
        "translation": "Sabah kahvaltı yaparız."
      },
      {
        "wordIndex": 4,
        "text": "We will visit our grandparents ___.",
        "answer": "tomorrow",
        "translation": "Yarın büyükanne ve büyükbabamızı ziyaret edeceğiz."
      },
      {
        "wordIndex": 6,
        "text": "I feel ___ when I see my friends.",
        "answer": "happy",
        "translation": "Arkadaşlarımı görünce mutlu hissederim."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Be careful; the soup is ___.",
        "answer": "hot",
        "translation": "Dikkat et; çorba sıcak."
      },
      {
        "wordIndex": 4,
        "text": "Please keep your room ___.",
        "answer": "clean",
        "translation": "Lütfen odanı temiz tut."
      },
      {
        "wordIndex": 8,
        "text": "I bought a ___ phone yesterday.",
        "answer": "new",
        "translation": "Dün yeni bir telefon aldım."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "The stop sign is ___.",
        "answer": "red",
        "translation": "Dur işareti kırmızıdır."
      },
      {
        "wordIndex": 1,
        "text": "The sky is ___ today.",
        "answer": "blue",
        "translation": "Bugün gökyüzü mavidir."
      },
      {
        "wordIndex": 2,
        "text": "The leaves are ___ in spring.",
        "answer": "green",
        "translation": "Yapraklar ilkbaharda yeşildir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "There is ___ candle on the cake.",
        "answer": "one",
        "translation": "Pastanın üzerinde bir mum var."
      },
      {
        "wordIndex": 2,
        "text": "A triangle has ___ sides.",
        "answer": "three",
        "translation": "Bir üçgenin üç kenarı vardır."
      },
      {
        "wordIndex": 9,
        "text": "I have ___ fingers.",
        "answer": "ten",
        "translation": "On parmağım var."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Wear a helmet to protect your ___.",
        "answer": "head",
        "translation": "Başını korumak için kask tak."
      },
      {
        "wordIndex": 3,
        "text": "A tiny piece of dust got into my ___.",
        "answer": "eye",
        "translation": "Gözüme küçük bir toz kaçtı."
      },
      {
        "wordIndex": 8,
        "text": "Exercise is good for your ___.",
        "answer": "heart",
        "translation": "Egzersiz kalbin için iyidir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Many people live in this large ___.",
        "answer": "city",
        "translation": "Bu büyük şehirde birçok insan yaşar."
      },
      {
        "wordIndex": 4,
        "text": "The old ___ crosses the river.",
        "answer": "bridge",
        "translation": "Eski köprü nehrin üzerinden geçer."
      },
      {
        "wordIndex": 8,
        "text": "Many wild animals live in the ___.",
        "answer": "forest",
        "translation": "Ormanda birçok vahşi hayvan yaşar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "I like to ___ in the park.",
        "answer": "walk",
        "translation": "Parkta yürümeyi severim."
      },
      {
        "wordIndex": 5,
        "text": "We ___ a story every evening.",
        "answer": "read",
        "translation": "Her akşam bir hikâye okuruz."
      },
      {
        "wordIndex": 4,
        "text": "Babies need to ___ a lot.",
        "answer": "sleep",
        "translation": "Bebeklerin çok uyuması gerekir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "My best ___ lives next door.",
        "answer": "friend",
        "translation": "En iyi arkadaşım yan evde yaşar."
      },
      {
        "wordIndex": 1,
        "text": "We have dinner together as a ___.",
        "answer": "family",
        "translation": "Aile olarak birlikte akşam yemeği yeriz."
      },
      {
        "wordIndex": 3,
        "text": "The ___ cannot walk yet.",
        "answer": "baby",
        "translation": "Bebek henüz yürüyemiyor."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "I want to ___ a new language.",
        "answer": "learn",
        "translation": "Yeni bir dil öğrenmek istiyorum."
      },
      {
        "wordIndex": 4,
        "text": "We need to ___ some bread.",
        "answer": "buy",
        "translation": "Biraz ekmek satın almamız gerekiyor."
      },
      {
        "wordIndex": 6,
        "text": "Please ___ the door.",
        "answer": "open",
        "translation": "Lütfen kapıyı aç."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "A lion is a ___ animal.",
        "answer": "strong",
        "translation": "Aslan güçlü bir hayvandır."
      },
      {
        "wordIndex": 4,
        "text": "The ___ tree needs water.",
        "answer": "young",
        "translation": "Genç ağacın suya ihtiyacı var."
      },
      {
        "wordIndex": 7,
        "text": "This suitcase is too ___ for me.",
        "answer": "heavy",
        "translation": "Bu bavul benim için çok ağır."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "The teacher asked an interesting ___.",
        "answer": "question",
        "translation": "Öğretmen ilginç bir soru sordu."
      },
      {
        "wordIndex": 5,
        "text": "We need a ___ to this problem.",
        "answer": "solution",
        "translation": "Bu soruna bir çözüm bulmamız gerekiyor."
      },
      {
        "wordIndex": 7,
        "text": "That is a great ___.",
        "answer": "idea",
        "translation": "Bu harika bir fikir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "You need a ___ to get on the train.",
        "answer": "ticket",
        "translation": "Trene binmek için bilete ihtiyacın var."
      },
      {
        "wordIndex": 5,
        "text": "Show your ___ at the border.",
        "answer": "passport",
        "translation": "Sınırda pasaportunu göster."
      },
      {
        "wordIndex": 7,
        "text": "Use the ___ to find the museum.",
        "answer": "map",
        "translation": "Müzeyi bulmak için haritayı kullan."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "The ___ examined the patient.",
        "answer": "doctor",
        "translation": "Doktor hastayı muayene etti."
      },
      {
        "wordIndex": 4,
        "text": "Take this ___ after breakfast.",
        "answer": "medicine",
        "translation": "Bu ilacı kahvaltıdan sonra al."
      },
      {
        "wordIndex": 7,
        "text": "The child has a high ___.",
        "answer": "fever",
        "translation": "Çocuğun yüksek ateşi var."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Reading increases your ___.",
        "answer": "knowledge",
        "translation": "Okumak bilgini artırır."
      },
      {
        "wordIndex": 3,
        "text": "Learning a language takes time and ___.",
        "answer": "effort",
        "translation": "Dil öğrenmek zaman ve çaba gerektirir."
      },
      {
        "wordIndex": 6,
        "text": "This job is a great ___ for me.",
        "answer": "opportunity",
        "translation": "Bu iş benim için harika bir fırsat."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Everyone deserves to live in ___.",
        "answer": "freedom",
        "translation": "Herkes özgürlük içinde yaşamayı hak eder."
      },
      {
        "wordIndex": 6,
        "text": "Teaching young children requires ___.",
        "answer": "patience",
        "translation": "Küçük çocuklara öğretmenlik yapmak sabır gerektirir."
      },
      {
        "wordIndex": 7,
        "text": "You can build ___ by keeping your promises.",
        "answer": "trust",
        "translation": "Sözlerini tutarak güven oluşturabilirsin."
      }
    ],
    [
      {
        "wordIndex": 4,
        "text": "Food is an important part of our ___.",
        "answer": "culture",
        "translation": "Yemek, kültürümüzün önemli bir parçasıdır."
      },
      {
        "wordIndex": 5,
        "text": "Every child has a right to ___.",
        "answer": "education",
        "translation": "Her çocuğun eğitim hakkı vardır."
      },
      {
        "wordIndex": 7,
        "text": "Modern ___ makes communication easier.",
        "answer": "technology",
        "translation": "Modern teknoloji iletişimi kolaylaştırır."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "We should ___ the prices before buying.",
        "answer": "compare",
        "translation": "Satın almadan önce fiyatları karşılaştırmalıyız."
      },
      {
        "wordIndex": 7,
        "text": "It is important to ___ a healthy balance.",
        "answer": "maintain",
        "translation": "Sağlıklı bir denge sürdürmek önemlidir."
      },
      {
        "wordIndex": 9,
        "text": "Practice can ___ your pronunciation.",
        "answer": "improve",
        "translation": "Alıştırma yapmak telaffuzunu iyileştirebilir."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Try to see the situation from a different ___.",
        "answer": "perspective",
        "translation": "Durumu farklı bir bakış açısından görmeye çalış."
      },
      {
        "wordIndex": 3,
        "text": "Safety is our first ___.",
        "answer": "priority",
        "translation": "Güvenlik ilk önceliğimizdir."
      },
      {
        "wordIndex": 9,
        "text": "The scientist tested a new ___.",
        "answer": "hypothesis",
        "translation": "Bilim insanı yeni bir hipotezi sınadı."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "The community showed great ___ after the disaster.",
        "answer": "resilience",
        "translation": "Topluluk felaketten sonra büyük dayanıklılık gösterdi."
      },
      {
        "wordIndex": 4,
        "text": "The project focuses on environmental ___.",
        "answer": "sustainability",
        "translation": "Proje çevresel sürdürülebilirliğe odaklanır."
      },
      {
        "wordIndex": 8,
        "text": "The company encourages ___ and creative thinking.",
        "answer": "innovation",
        "translation": "Şirket yenilikçiliği ve yaratıcı düşünmeyi teşvik eder."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "He wears a white ___ to work.",
        "answer": "shirt",
        "translation": "İşe beyaz bir gömlek giyer."
      },
      {
        "wordIndex": 3,
        "text": "Take your ___; it is cold outside.",
        "answer": "coat",
        "translation": "Paltonu al; dışarısı soğuk."
      },
      {
        "wordIndex": 6,
        "text": "She wears a ___ to protect herself from the sun.",
        "answer": "hat",
        "translation": "Güneşten korunmak için şapka takar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "We cook our meals in the ___.",
        "answer": "kitchen",
        "translation": "Yemeklerimizi mutfakta pişiririz."
      },
      {
        "wordIndex": 4,
        "text": "The rain is falling on the ___.",
        "answer": "roof",
        "translation": "Yağmur çatıya düşüyor."
      },
      {
        "wordIndex": 9,
        "text": "We grow flowers on the ___.",
        "answer": "balcony",
        "translation": "Balkonda çiçek yetiştiririz."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "I put my head on the soft ___.",
        "answer": "pillow",
        "translation": "Başımı yumuşak yastığa koyarım."
      },
      {
        "wordIndex": 3,
        "text": "She looks in the ___ before leaving.",
        "answer": "mirror",
        "translation": "Çıkmadan önce aynaya bakar."
      },
      {
        "wordIndex": 9,
        "text": "Put the book on the ___.",
        "answer": "shelf",
        "translation": "Kitabı rafa koy."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "I eat soup with a ___.",
        "answer": "spoon",
        "translation": "Çorbayı kaşıkla içerim."
      },
      {
        "wordIndex": 2,
        "text": "Use a ___ to cut the bread.",
        "answer": "knife",
        "translation": "Ekmeği kesmek için bıçak kullan."
      },
      {
        "wordIndex": 3,
        "text": "There is a sandwich on the ___.",
        "answer": "plate",
        "translation": "Tabakta bir sandviç var."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "I like ___ on my sandwich.",
        "answer": "cheese",
        "translation": "Sandviçimde peynir severim."
      },
      {
        "wordIndex": 3,
        "text": "The hen laid an ___.",
        "answer": "egg",
        "translation": "Tavuk bir yumurta yumurtladı."
      },
      {
        "wordIndex": 9,
        "text": "The rabbit is eating a ___.",
        "answer": "carrot",
        "translation": "Tavşan bir havuç yiyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "A ripe ___ has yellow skin.",
        "answer": "banana",
        "translation": "Olgun bir muzun kabuğu sarıdır."
      },
      {
        "wordIndex": 5,
        "text": "Add some ___ to your tea.",
        "answer": "lemon",
        "translation": "Çayına biraz limon ekle."
      },
      {
        "wordIndex": 7,
        "text": "We eat cold ___ in summer.",
        "answer": "watermelon",
        "translation": "Yazın soğuk karpuz yeriz."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "We eat ___ before going to school.",
        "answer": "breakfast",
        "translation": "Okula gitmeden önce kahvaltı yaparız."
      },
      {
        "wordIndex": 5,
        "text": "This soup needs a little ___.",
        "answer": "salt",
        "translation": "Bu çorbanın biraz tuza ihtiyacı var."
      },
      {
        "wordIndex": 7,
        "text": "Bees produce ___.",
        "answer": "honey",
        "translation": "Arılar bal üretir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "We took an umbrella because of the ___.",
        "answer": "rain",
        "translation": "Yağmur nedeniyle şemsiye aldık."
      },
      {
        "wordIndex": 1,
        "text": "The mountains are covered in white ___.",
        "answer": "snow",
        "translation": "Dağlar beyaz karla kaplı."
      },
      {
        "wordIndex": 2,
        "text": "The strong ___ moved the branches.",
        "answer": "wind",
        "translation": "Güçlü rüzgâr dalları hareket ettirdi."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "We swim in the sea during ___.",
        "answer": "summer",
        "translation": "Yaz boyunca denizde yüzeriz."
      },
      {
        "wordIndex": 3,
        "text": "It is usually cold in ___.",
        "answer": "winter",
        "translation": "Kışın hava genellikle soğuktur."
      },
      {
        "wordIndex": 7,
        "text": "A ___ has twelve months.",
        "answer": "year",
        "translation": "Bir yılda on iki ay vardır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "The working week starts on ___.",
        "answer": "Monday",
        "translation": "Çalışma haftası pazartesi başlar."
      },
      {
        "wordIndex": 6,
        "text": "We usually rest on ___.",
        "answer": "Sunday",
        "translation": "Genellikle pazar günü dinleniriz."
      },
      {
        "wordIndex": 8,
        "text": "Mark the meeting date on the ___.",
        "answer": "calendar",
        "translation": "Toplantı tarihini takvimde işaretle."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "She came ___ in the race.",
        "answer": "first",
        "translation": "Yarışta birinci geldi."
      },
      {
        "wordIndex": 6,
        "text": "We arrived ___ to get good seats.",
        "answer": "early",
        "translation": "İyi koltuklar bulmak için erken geldik."
      },
      {
        "wordIndex": 9,
        "text": "I ___ forget my mother's birthday.",
        "answer": "never",
        "translation": "Annemin doğum gününü asla unutmam."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "I ___ walk to work.",
        "answer": "sometimes",
        "translation": "Bazen işe yürürüm."
      },
      {
        "wordIndex": 6,
        "text": "The bus will arrive ___.",
        "answer": "soon",
        "translation": "Otobüs yakında gelecek."
      },
      {
        "wordIndex": 8,
        "text": "Please read the sentence ___.",
        "answer": "again",
        "translation": "Lütfen cümleyi tekrar oku."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Turn ___ at the next street.",
        "answer": "left",
        "translation": "Bir sonraki sokakta sola dön."
      },
      {
        "wordIndex": 7,
        "text": "The bank is ___ the school and the park.",
        "answer": "between",
        "translation": "Banka okul ile parkın arasındadır."
      },
      {
        "wordIndex": 9,
        "text": "The airport is ___ from the city center.",
        "answer": "far",
        "translation": "Havalimanı şehir merkezinden uzaktır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "We take the ___ to school.",
        "answer": "bus",
        "translation": "Okula otobüsle gideriz."
      },
      {
        "wordIndex": 4,
        "text": "I ride my ___ in the park.",
        "answer": "bicycle",
        "translation": "Parkta bisikletime binerim."
      },
      {
        "wordIndex": 1,
        "text": "The ___ leaves from platform two.",
        "answer": "train",
        "translation": "Tren ikinci perondan kalkar."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "The bicycle has a broken ___.",
        "answer": "wheel",
        "translation": "Bisikletin kırık bir tekerleği var."
      },
      {
        "wordIndex": 4,
        "text": "The ___ stopped at the red light.",
        "answer": "driver",
        "translation": "Sürücü kırmızı ışıkta durdu."
      },
      {
        "wordIndex": 8,
        "text": "The car cannot run without ___.",
        "answer": "fuel",
        "translation": "Araba yakıt olmadan çalışamaz."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "I keep my money in the ___.",
        "answer": "bank",
        "translation": "Paramı bankada tutarım."
      },
      {
        "wordIndex": 4,
        "text": "You can borrow books from the ___.",
        "answer": "library",
        "translation": "Kütüphaneden ödünç kitap alabilirsin."
      },
      {
        "wordIndex": 9,
        "text": "We buy fresh bread from the ___.",
        "answer": "bakery",
        "translation": "Fırından taze ekmek alırız."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "The ___ designed a new bridge.",
        "answer": "engineer",
        "translation": "Mühendis yeni bir köprü tasarladı."
      },
      {
        "wordIndex": 4,
        "text": "The ___ grows vegetables.",
        "answer": "farmer",
        "translation": "Çiftçi sebze yetiştirir."
      },
      {
        "wordIndex": 8,
        "text": "Visit the ___ if your tooth hurts.",
        "answer": "dentist",
        "translation": "Dişin ağrıyorsa diş hekimine git."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "I use a ___ to write reports.",
        "answer": "computer",
        "translation": "Rapor yazmak için bilgisayar kullanırım."
      },
      {
        "wordIndex": 3,
        "text": "Type your name on the ___.",
        "answer": "keyboard",
        "translation": "Adını klavyede yaz."
      },
      {
        "wordIndex": 8,
        "text": "My phone's ___ is almost empty.",
        "answer": "battery",
        "translation": "Telefonumun pili neredeyse boş."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Choose a strong ___ for your account.",
        "answer": "password",
        "translation": "Hesabın için güçlü bir şifre seç."
      },
      {
        "wordIndex": 5,
        "text": "Save the ___ before closing the program.",
        "answer": "file",
        "translation": "Programı kapatmadan önce dosyayı kaydet."
      },
      {
        "wordIndex": 9,
        "text": "You can ___ for information online.",
        "answer": "search",
        "translation": "İnternette bilgi arayabilirsin."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Please ___ me a message.",
        "answer": "send",
        "translation": "Lütfen bana bir mesaj gönder."
      },
      {
        "wordIndex": 5,
        "text": "Remember to ___ your work.",
        "answer": "save",
        "translation": "Çalışmanı kaydetmeyi unutma."
      },
      {
        "wordIndex": 9,
        "text": "Can you ___ this document?",
        "answer": "print",
        "translation": "Bu belgeyi yazdırabilir misin?"
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "Fish can ___ in water.",
        "answer": "swim",
        "translation": "Balıklar suda yüzebilir."
      },
      {
        "wordIndex": 5,
        "text": "We like to ___ together.",
        "answer": "sing",
        "translation": "Birlikte şarkı söylemeyi severiz."
      },
      {
        "wordIndex": 8,
        "text": "I want to ___ dinner tonight.",
        "answer": "cook",
        "translation": "Bu akşam yemek pişirmek istiyorum."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Please ___ the apple in half.",
        "answer": "cut",
        "translation": "Lütfen elmayı ikiye kes."
      },
      {
        "wordIndex": 4,
        "text": "Do not ___ rubbish on the ground.",
        "answer": "throw",
        "translation": "Yere çöp atma."
      },
      {
        "wordIndex": 9,
        "text": "Do not ___ the hot pan.",
        "answer": "touch",
        "translation": "Sıcak tavaya dokunma."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Can you ___ the birds outside?",
        "answer": "hear",
        "translation": "Dışarıdaki kuşları duyabiliyor musun?"
      },
      {
        "wordIndex": 8,
        "text": "I can ___ your name.",
        "answer": "remember",
        "translation": "Adını hatırlayabiliyorum."
      },
      {
        "wordIndex": 6,
        "text": "Please ___ before you answer.",
        "answer": "think",
        "translation": "Lütfen cevaplamadan önce düşün."
      }
    ],
    [
      {
        "wordIndex": 5,
        "text": "A kind word can make someone ___.",
        "answer": "smile",
        "translation": "Nazik bir söz birini gülümsetebilir."
      },
      {
        "wordIndex": 7,
        "text": "It is normal to ___ when you feel sad.",
        "answer": "cry",
        "translation": "Üzgün hissedince ağlamak normaldir."
      },
      {
        "wordIndex": 9,
        "text": "Please ___; the baby is sleeping.",
        "answer": "whisper",
        "translation": "Lütfen fısılda; bebek uyuyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "You can ___ the teacher for help.",
        "answer": "ask",
        "translation": "Öğretmenden yardım isteyebilirsin."
      },
      {
        "wordIndex": 2,
        "text": "Can you ___ the rule to me?",
        "answer": "explain",
        "translation": "Kuralı bana açıklayabilir misin?"
      },
      {
        "wordIndex": 7,
        "text": "Do not ___ something you cannot do.",
        "answer": "promise",
        "translation": "Yapamayacağın bir şey için söz verme."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "We will ___ our neighbors to dinner.",
        "answer": "invite",
        "translation": "Komşularımızı akşam yemeğine davet edeceğiz."
      },
      {
        "wordIndex": 5,
        "text": "Please ___ before eight o'clock.",
        "answer": "arrive",
        "translation": "Lütfen saat sekizden önce var."
      },
      {
        "wordIndex": 9,
        "text": "Please ___ here for a moment.",
        "answer": "wait",
        "translation": "Lütfen burada bir dakika bekle."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "They plan to ___ a new school.",
        "answer": "build",
        "translation": "Yeni bir okul inşa etmeyi planlıyorlar."
      },
      {
        "wordIndex": 2,
        "text": "Can you ___ my bicycle?",
        "answer": "repair",
        "translation": "Bisikletimi onarabilir misin?"
      },
      {
        "wordIndex": 9,
        "text": "We can ___ after a short break.",
        "answer": "continue",
        "translation": "Kısa bir aradan sonra devam edebiliriz."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "I cannot ___ my keys.",
        "answer": "find",
        "translation": "Anahtarlarımı bulamıyorum."
      },
      {
        "wordIndex": 7,
        "text": "May I ___ your pen?",
        "answer": "borrow",
        "translation": "Kalemini ödünç alabilir miyim?"
      },
      {
        "wordIndex": 9,
        "text": "You can ___ by card.",
        "answer": "pay",
        "translation": "Kartla ödeyebilirsin."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Students can ___ money by working part-time.",
        "answer": "earn",
        "translation": "Öğrenciler yarı zamanlı çalışarak para kazanabilir."
      },
      {
        "wordIndex": 3,
        "text": "It is wise to ___ in education.",
        "answer": "invest",
        "translation": "Eğitime yatırım yapmak akıllıcadır."
      },
      {
        "wordIndex": 9,
        "text": "Keep the ___ in case you need a refund.",
        "answer": "receipt",
        "translation": "İade gerekirse diye fişi sakla."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "The tickets are ___ this week.",
        "answer": "cheap",
        "translation": "Biletler bu hafta ucuz."
      },
      {
        "wordIndex": 5,
        "text": "What is the ___ of this bag?",
        "answer": "price",
        "translation": "Bu çantanın fiyatı nedir?"
      },
      {
        "wordIndex": 9,
        "text": "We must stay within our ___.",
        "answer": "budget",
        "translation": "Bütçemizin sınırları içinde kalmalıyız."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "The bottle is ___; please fill it.",
        "answer": "empty",
        "translation": "Şişe boş; lütfen doldur."
      },
      {
        "wordIndex": 6,
        "text": "This blanket feels very ___.",
        "answer": "soft",
        "translation": "Bu battaniye çok yumuşak hissettiriyor."
      },
      {
        "wordIndex": 2,
        "text": "The river is too ___ to cross here.",
        "answer": "wide",
        "translation": "Nehir buradan geçmek için çok geniş."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "Please be ___ in the library.",
        "answer": "quiet",
        "translation": "Lütfen kütüphanede sessiz ol."
      },
      {
        "wordIndex": 5,
        "text": "My shoes are ___ from the rain.",
        "answer": "wet",
        "translation": "Ayakkabılarım yağmurdan ıslak."
      },
      {
        "wordIndex": 8,
        "text": "Be careful with that ___ knife.",
        "answer": "sharp",
        "translation": "O keskin bıçağa dikkat et."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Our teacher is always ___ to us.",
        "answer": "kind",
        "translation": "Öğretmenimiz bize her zaman naziktir."
      },
      {
        "wordIndex": 4,
        "text": "He is ___ and shares what he has.",
        "answer": "generous",
        "translation": "O cömerttir ve sahip olduklarını paylaşır."
      },
      {
        "wordIndex": 8,
        "text": "The ___ child spoke very softly.",
        "answer": "shy",
        "translation": "Utangaç çocuk çok yumuşak bir sesle konuştu."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "The ___ firefighter rescued the child.",
        "answer": "brave",
        "translation": "Cesur itfaiyeci çocuğu kurtardı."
      },
      {
        "wordIndex": 4,
        "text": "The ___ student asked many questions.",
        "answer": "curious",
        "translation": "Meraklı öğrenci birçok soru sordu."
      },
      {
        "wordIndex": 5,
        "text": "An ___ person tells the truth.",
        "answer": "honest",
        "translation": "Dürüst bir insan doğruyu söyler."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Eating vegetables helps you stay ___.",
        "answer": "healthy",
        "translation": "Sebze yemek sağlıklı kalmana yardımcı olur."
      },
      {
        "wordIndex": 4,
        "text": "I feel ___ after the long journey.",
        "answer": "tired",
        "translation": "Uzun yolculuktan sonra yorgun hissediyorum."
      },
      {
        "wordIndex": 6,
        "text": "After running, I am very ___.",
        "answer": "thirsty",
        "translation": "Koştuktan sonra çok susamış olurum."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "He carried the bag on his ___.",
        "answer": "shoulder",
        "translation": "Çantayı omzunda taşıdı."
      },
      {
        "wordIndex": 5,
        "text": "She wore a ring on her ___.",
        "answer": "finger",
        "translation": "Parmağına bir yüzük taktı."
      },
      {
        "wordIndex": 7,
        "text": "I hurt my ___ when I fell.",
        "answer": "knee",
        "translation": "Düştüğümde dizimi incittim."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "The ___ controls many functions of the body.",
        "answer": "brain",
        "translation": "Beyin vücudun birçok işlevini kontrol eder."
      },
      {
        "wordIndex": 1,
        "text": "The heart pumps ___ around the body.",
        "answer": "blood",
        "translation": "Kalp vücuda kan pompalar."
      },
      {
        "wordIndex": 4,
        "text": "Protect your ___ from the sun.",
        "answer": "skin",
        "translation": "Cildini güneşten koru."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "A cough can be a ___ of a cold.",
        "answer": "symptom",
        "translation": "Öksürük soğuk algınlığının bir belirtisi olabilir."
      },
      {
        "wordIndex": 5,
        "text": "I have an ___ with the doctor tomorrow.",
        "answer": "appointment",
        "translation": "Yarın doktorla randevum var."
      },
      {
        "wordIndex": 8,
        "text": "Call an ambulance in an ___.",
        "answer": "emergency",
        "translation": "Acil bir durumda ambulans çağır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Regular ___ is good for your health.",
        "answer": "exercise",
        "translation": "Düzenli egzersiz sağlığın için iyidir."
      },
      {
        "wordIndex": 6,
        "text": "Our ___ won the match.",
        "answer": "team",
        "translation": "Takımımız karşılaşmayı kazandı."
      },
      {
        "wordIndex": 7,
        "text": "The ___ explained the new strategy.",
        "answer": "coach",
        "translation": "Antrenör yeni stratejiyi açıkladı."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "The child kicked the ___ into the net.",
        "answer": "ball",
        "translation": "Çocuk topu ağlara doğru vurdu."
      },
      {
        "wordIndex": 8,
        "text": "She won a gold ___ at the competition.",
        "answer": "medal",
        "translation": "Yarışmada altın madalya kazandı."
      },
      {
        "wordIndex": 7,
        "text": "Thousands of fans filled the ___.",
        "answer": "stadium",
        "translation": "Binlerce taraftar stadyumu doldurdu."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Turkish is my first ___.",
        "answer": "language",
        "translation": "Türkçe benim ilk dilimdir."
      },
      {
        "wordIndex": 7,
        "text": "I finish my ___ before dinner.",
        "answer": "homework",
        "translation": "Ödevimi akşam yemeğinden önce bitiririm."
      },
      {
        "wordIndex": 8,
        "text": "We have a math ___ tomorrow.",
        "answer": "exam",
        "translation": "Yarın matematik sınavımız var."
      }
    ],
    [
      {
        "wordIndex": 3,
        "text": "What is the ___ of this word?",
        "answer": "meaning",
        "translation": "Bu kelimenin anlamı nedir?"
      },
      {
        "wordIndex": 5,
        "text": "This ___ is easy to understand.",
        "answer": "translation",
        "translation": "Bu çeviriyi anlamak kolaydır."
      },
      {
        "wordIndex": 6,
        "text": "Listening helps improve your ___.",
        "answer": "pronunciation",
        "translation": "Dinlemek telaffuzunu geliştirmeye yardımcı olur."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "In my ___, this is a good idea.",
        "answer": "opinion",
        "translation": "Bence bu iyi bir fikir."
      },
      {
        "wordIndex": 4,
        "text": "The police are looking for ___.",
        "answer": "evidence",
        "translation": "Polis kanıt arıyor."
      },
      {
        "wordIndex": 9,
        "text": "Write a short ___ of the story.",
        "answer": "summary",
        "translation": "Hikâyenin kısa bir özetini yaz."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "We are working on a new ___.",
        "answer": "project",
        "translation": "Yeni bir proje üzerinde çalışıyoruz."
      },
      {
        "wordIndex": 6,
        "text": "The ___ for the report is Friday.",
        "answer": "deadline",
        "translation": "Raporun son teslim tarihi cumadır."
      },
      {
        "wordIndex": 8,
        "text": "The ___ starts at nine.",
        "answer": "meeting",
        "translation": "Toplantı dokuzda başlar."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Each ___ has a desk.",
        "answer": "employee",
        "translation": "Her çalışanın bir masası var."
      },
      {
        "wordIndex": 4,
        "text": "The ___ asked about the price.",
        "answer": "customer",
        "translation": "Müşteri fiyatı sordu."
      },
      {
        "wordIndex": 9,
        "text": "Read the ___ before signing it.",
        "answer": "contract",
        "translation": "İmzalamadan önce sözleşmeyi oku."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "She receives her ___ every month.",
        "answer": "salary",
        "translation": "Maaşını her ay alır."
      },
      {
        "wordIndex": 6,
        "text": "We pay ___ on our income.",
        "answer": "tax",
        "translation": "Gelirimiz üzerinden vergi öderiz."
      },
      {
        "wordIndex": 8,
        "text": "He took out a ___ to buy a house.",
        "answer": "loan",
        "translation": "Ev almak için kredi çekti."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "My ___ is on the second floor.",
        "answer": "office",
        "translation": "Ofisim ikinci katta."
      },
      {
        "wordIndex": 1,
        "text": "The ___ produces cars.",
        "answer": "factory",
        "translation": "Fabrika araba üretir."
      },
      {
        "wordIndex": 7,
        "text": "She wants a ___ in medicine.",
        "answer": "career",
        "translation": "Tıp alanında kariyer istiyor."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "The company plans to ___ more engineers.",
        "answer": "hire",
        "translation": "Şirket daha fazla mühendis işe almayı planlıyor."
      },
      {
        "wordIndex": 8,
        "text": "We need to ___ the event carefully.",
        "answer": "organize",
        "translation": "Etkinliği dikkatle düzenlememiz gerekiyor."
      },
      {
        "wordIndex": 7,
        "text": "Can you ___ a team of ten people?",
        "answer": "manage",
        "translation": "On kişilik bir takımı yönetebilir misin?"
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "The manager must ___ the request.",
        "answer": "approve",
        "translation": "Yönetici talebi onaylamalıdır."
      },
      {
        "wordIndex": 6,
        "text": "A helmet can help ___ serious injuries.",
        "answer": "prevent",
        "translation": "Kask ciddi yaralanmaları önlemeye yardımcı olabilir."
      },
      {
        "wordIndex": 9,
        "text": "All employees must ___ with the safety rules.",
        "answer": "comply",
        "translation": "Tüm çalışanlar güvenlik kurallarına uymalıdır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Everyone must respect the ___.",
        "answer": "law",
        "translation": "Herkes kanuna saygı göstermelidir."
      },
      {
        "wordIndex": 4,
        "text": "Please follow the correct ___.",
        "answer": "procedure",
        "translation": "Lütfen doğru prosedürü takip et."
      },
      {
        "wordIndex": 8,
        "text": "There is a ___ for breaking the rules.",
        "answer": "penalty",
        "translation": "Kuralları çiğnemenin bir cezası var."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "The ___ listened to the witness.",
        "answer": "judge",
        "translation": "Hâkim tanığı dinledi."
      },
      {
        "wordIndex": 3,
        "text": "The ___ described what happened.",
        "answer": "witness",
        "translation": "Tanık ne olduğunu anlattı."
      },
      {
        "wordIndex": 8,
        "text": "The jury announced its ___.",
        "answer": "verdict",
        "translation": "Jüri hükmünü açıkladı."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Every ___ has rights and responsibilities.",
        "answer": "citizen",
        "translation": "Her vatandaşın hakları ve sorumlulukları vardır."
      },
      {
        "wordIndex": 4,
        "text": "We crossed the ___ at night.",
        "answer": "border",
        "translation": "Sınırı gece geçtik."
      },
      {
        "wordIndex": 7,
        "text": "The officer checked my ___.",
        "answer": "identity",
        "translation": "Görevli kimliğimi kontrol etti."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "The next ___ will be held in June.",
        "answer": "election",
        "translation": "Bir sonraki seçim haziranda yapılacak."
      },
      {
        "wordIndex": 2,
        "text": "Each ___ answered the same questions.",
        "answer": "candidate",
        "translation": "Her aday aynı soruları yanıtladı."
      },
      {
        "wordIndex": 9,
        "text": "The ___ protects fundamental rights.",
        "answer": "constitution",
        "translation": "Anayasa temel hakları korur."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Our ___ helps people in need.",
        "answer": "community",
        "translation": "Topluluğumuz ihtiyaç sahiplerine yardım eder."
      },
      {
        "wordIndex": 3,
        "text": "Sharing a meal is an important ___ here.",
        "answer": "tradition",
        "translation": "Bir yemeği paylaşmak burada önemli bir gelenektir."
      },
      {
        "wordIndex": 6,
        "text": "We celebrate the ___ of our city.",
        "answer": "diversity",
        "translation": "Şehrimizin çeşitliliğini kutlarız."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Spending time in ___ helps me relax.",
        "answer": "nature",
        "translation": "Doğada zaman geçirmek rahatlamama yardımcı olur."
      },
      {
        "wordIndex": 5,
        "text": "The ___ is changing around the world.",
        "answer": "climate",
        "translation": "İklim dünya genelinde değişiyor."
      },
      {
        "wordIndex": 8,
        "text": "___ helps reduce waste.",
        "answer": "Recycling",
        "translation": "Geri dönüşüm atıkları azaltmaya yardımcı olur."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "We need ___ to heat our homes.",
        "answer": "energy",
        "translation": "Evlerimizi ısıtmak için enerjiye ihtiyacımız var."
      },
      {
        "wordIndex": 4,
        "text": "Burning ___ produces air pollution.",
        "answer": "coal",
        "translation": "Kömür yakmak hava kirliliğine neden olur."
      },
      {
        "wordIndex": 6,
        "text": "Water is a precious natural ___.",
        "answer": "resource",
        "translation": "Su değerli bir doğal kaynaktır."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Earth is the ___ we live on.",
        "answer": "planet",
        "translation": "Dünya üzerinde yaşadığımız gezegendir."
      },
      {
        "wordIndex": 2,
        "text": "The brightest ___ is visible tonight.",
        "answer": "star",
        "translation": "Bu gece en parlak yıldız görünüyor."
      },
      {
        "wordIndex": 6,
        "text": "___ keeps us on the ground.",
        "answer": "Gravity",
        "translation": "Yerçekimi bizi yerde tutar."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "An ___ is a basic unit of matter.",
        "answer": "atom",
        "translation": "Atom maddenin temel bir birimidir."
      },
      {
        "wordIndex": 7,
        "text": "The ___ inside the container increased.",
        "answer": "pressure",
        "translation": "Kabın içindeki basınç arttı."
      },
      {
        "wordIndex": 8,
        "text": "The ___ of water changes with temperature.",
        "answer": "density",
        "translation": "Suyun yoğunluğu sıcaklıkla değişir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Check the ___ before placing the order.",
        "answer": "quantity",
        "translation": "Siparişi vermeden önce miktarı kontrol et."
      },
      {
        "wordIndex": 5,
        "text": "The ___ of two and four is three.",
        "answer": "average",
        "translation": "İki ve dördün ortalaması üçtür."
      },
      {
        "wordIndex": 7,
        "text": "Can you see the ___ between these pictures?",
        "answer": "difference",
        "translation": "Bu resimler arasındaki farkı görebiliyor musun?"
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Please ___ the total cost.",
        "answer": "calculate",
        "translation": "Lütfen toplam maliyeti hesapla."
      },
      {
        "wordIndex": 2,
        "text": "We need to ___ the room before buying a carpet.",
        "answer": "measure",
        "translation": "Halı almadan önce odayı ölçmemiz gerekiyor."
      },
      {
        "wordIndex": 6,
        "text": "If you ___ three by four, you get twelve.",
        "answer": "multiply",
        "translation": "Üç ile dördü çarparsan on iki elde edersin."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Scientists ___ the behavior of animals.",
        "answer": "observe",
        "translation": "Bilim insanları hayvanların davranışlarını gözlemler."
      },
      {
        "wordIndex": 3,
        "text": "Always ___ the information before sharing it.",
        "answer": "verify",
        "translation": "Bilgiyi paylaşmadan önce her zaman doğrula."
      },
      {
        "wordIndex": 8,
        "text": "It is difficult to ___ the weather exactly.",
        "answer": "predict",
        "translation": "Hava durumunu tam olarak öngörmek zordur."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "This ___ makes learning easier.",
        "answer": "method",
        "translation": "Bu yöntem öğrenmeyi kolaylaştırır."
      },
      {
        "wordIndex": 4,
        "text": "We studied the ___ of the building.",
        "answer": "structure",
        "translation": "Binanın yapısını inceledik."
      },
      {
        "wordIndex": 6,
        "text": "Every ___ has an important function.",
        "answer": "component",
        "translation": "Her bileşenin önemli bir işlevi vardır."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Sleep has a strong ___ on concentration.",
        "answer": "effect",
        "translation": "Uykunun dikkat üzerinde güçlü bir etkisi vardır."
      },
      {
        "wordIndex": 4,
        "text": "Cost is an important ___ in our decision.",
        "answer": "factor",
        "translation": "Maliyet kararımızda önemli bir etkendir."
      },
      {
        "wordIndex": 7,
        "text": "You can understand a word better in ___.",
        "answer": "context",
        "translation": "Bir kelimeyi bağlam içinde daha iyi anlayabilirsin."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "One ___ of walking is better health.",
        "answer": "benefit",
        "translation": "Yürümenin bir faydası daha iyi sağlıktır."
      },
      {
        "wordIndex": 3,
        "text": "Wearing a seat belt reduces the ___ of injury.",
        "answer": "risk",
        "translation": "Emniyet kemeri takmak yaralanma riskini azaltır."
      },
      {
        "wordIndex": 6,
        "text": "Lack of money can be an ___ to education.",
        "answer": "obstacle",
        "translation": "Para eksikliği eğitimin önünde bir engel olabilir."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "Clean water is ___ for life.",
        "answer": "necessary",
        "translation": "Temiz su yaşam için gereklidir."
      },
      {
        "wordIndex": 2,
        "text": "The extra exercise is ___.",
        "answer": "optional",
        "translation": "Ek alıştırma isteğe bağlıdır."
      },
      {
        "wordIndex": 9,
        "text": "An ___ machine uses less energy.",
        "answer": "efficient",
        "translation": "Verimli bir makine daha az enerji kullanır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "We need ___ information to make a good decision.",
        "answer": "accurate",
        "translation": "İyi bir karar vermek için doğru bilgiye ihtiyacımız var."
      },
      {
        "wordIndex": 2,
        "text": "This website is a ___ source of information.",
        "answer": "reliable",
        "translation": "Bu internet sitesi güvenilir bir bilgi kaynağıdır."
      },
      {
        "wordIndex": 9,
        "text": "Our schedule is ___, so we can change the time.",
        "answer": "flexible",
        "translation": "Programımız esnek, bu yüzden saati değiştirebiliriz."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "The human brain is very ___.",
        "answer": "complex",
        "translation": "İnsan beyni çok karmaşıktır."
      },
      {
        "wordIndex": 2,
        "text": "Freedom is an ___ concept.",
        "answer": "abstract",
        "translation": "Özgürlük soyut bir kavramdır."
      },
      {
        "wordIndex": 8,
        "text": "Every person's fingerprints are ___.",
        "answer": "unique",
        "translation": "Her insanın parmak izleri benzersizdir."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "We buy vegetables from a ___ farmer.",
        "answer": "local",
        "translation": "Yerel bir çiftçiden sebze alırız."
      },
      {
        "wordIndex": 5,
        "text": "Learning a ___ language opens new doors.",
        "answer": "foreign",
        "translation": "Yabancı bir dil öğrenmek yeni kapılar açar."
      },
      {
        "wordIndex": 7,
        "text": "This is ___ information; please do not share it.",
        "answer": "private",
        "translation": "Bu özel bir bilgidir; lütfen paylaşma."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Keep your ___ information safe.",
        "answer": "personal",
        "translation": "Kişisel bilgilerini güvende tut."
      },
      {
        "wordIndex": 7,
        "text": "You should get ___ advice before signing.",
        "answer": "legal",
        "translation": "İmzalamadan önce hukuki tavsiye almalısın."
      },
      {
        "wordIndex": 8,
        "text": "The company follows strict ___ standards.",
        "answer": "ethical",
        "translation": "Şirket sıkı etik standartlara uyar."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Is it ___ to change the date?",
        "answer": "possible",
        "translation": "Tarihi değiştirmek mümkün mü?"
      },
      {
        "wordIndex": 6,
        "text": "I am ___ that this is the right answer.",
        "answer": "certain",
        "translation": "Bunun doğru cevap olduğundan eminim."
      },
      {
        "wordIndex": 8,
        "text": "The answer is ___ when you read the question carefully.",
        "answer": "obvious",
        "translation": "Soruyu dikkatle okuyunca cevap açıkça bellidir."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "This is only a ___ solution.",
        "answer": "temporary",
        "translation": "Bu yalnızca geçici bir çözümdür."
      },
      {
        "wordIndex": 3,
        "text": "We noticed a ___ improvement in her health.",
        "answer": "gradual",
        "translation": "Sağlığında kademeli bir iyileşme fark ettik."
      },
      {
        "wordIndex": 8,
        "text": "The company publishes an ___ report.",
        "answer": "annual",
        "translation": "Şirket yıllık bir rapor yayımlar."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "The ___ plan changed after the meeting.",
        "answer": "initial",
        "translation": "Başlangıçtaki plan toplantıdan sonra değişti."
      },
      {
        "wordIndex": 4,
        "text": "What is your ___ address?",
        "answer": "current",
        "translation": "Mevcut adresin nedir?"
      },
      {
        "wordIndex": 7,
        "text": "We must think about ___ generations.",
        "answer": "future",
        "translation": "Gelecekteki nesilleri düşünmeliyiz."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "The company plans to ___ its business.",
        "answer": "expand",
        "translation": "Şirket işini genişletmeyi planlıyor."
      },
      {
        "wordIndex": 1,
        "text": "We should ___ our water consumption.",
        "answer": "reduce",
        "translation": "Su tüketimimizi azaltmalıyız."
      },
      {
        "wordIndex": 5,
        "text": "Animals must ___ to changes in their environment.",
        "answer": "adapt",
        "translation": "Hayvanlar çevrelerindeki değişikliklere uyum sağlamalıdır."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "Please ___ your phone number in the form.",
        "answer": "include",
        "translation": "Lütfen telefon numaranı forma ekle."
      },
      {
        "wordIndex": 6,
        "text": "The red lines ___ roads on this map.",
        "answer": "represent",
        "translation": "Bu haritada kırmızı çizgiler yolları temsil eder."
      },
      {
        "wordIndex": 8,
        "text": "Mirrors ___ light.",
        "answer": "reflect",
        "translation": "Aynalar ışığı yansıtır."
      }
    ],
    [
      {
        "wordIndex": 2,
        "text": "Please ___ all the options before deciding.",
        "answer": "consider",
        "translation": "Lütfen karar vermeden önce tüm seçenekleri dikkate al."
      },
      {
        "wordIndex": 6,
        "text": "I can ___ the main idea of this text.",
        "answer": "understand",
        "translation": "Bu metnin ana fikrini anlayabiliyorum."
      },
      {
        "wordIndex": 8,
        "text": "We can ___ the meaning from the context.",
        "answer": "infer",
        "translation": "Bağlamdan anlam çıkarabiliriz."
      }
    ],
    [
      {
        "wordIndex": 1,
        "text": "The doctor will ___ your knee.",
        "answer": "examine",
        "translation": "Doktor dizini inceleyecek."
      },
      {
        "wordIndex": 3,
        "text": "Please ___ your answers before submitting.",
        "answer": "review",
        "translation": "Lütfen göndermeden önce cevaplarını gözden geçir."
      },
      {
        "wordIndex": 9,
        "text": "Travel helps us ___ new cultures.",
        "answer": "discover",
        "translation": "Seyahat yeni kültürler keşfetmemize yardımcı olur."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "The school will ___ the new policy next month.",
        "answer": "implement",
        "translation": "Okul yeni politikayı gelecek ay uygulamaya koyacak."
      },
      {
        "wordIndex": 6,
        "text": "Pictures can ___ the learning process.",
        "answer": "facilitate",
        "translation": "Resimler öğrenme sürecini kolaylaştırabilir."
      },
      {
        "wordIndex": 8,
        "text": "Good friends ___ each other.",
        "answer": "support",
        "translation": "İyi arkadaşlar birbirini destekler."
      }
    ],
    [
      {
        "wordIndex": 0,
        "text": "We must ___ enough time for each task.",
        "answer": "allocate",
        "translation": "Her görev için yeterli zaman tahsis etmeliyiz."
      },
      {
        "wordIndex": 1,
        "text": "The volunteers will ___ food to families.",
        "answer": "distribute",
        "translation": "Gönüllüler ailelere yiyecek dağıtacak."
      },
      {
        "wordIndex": 7,
        "text": "The library can ___ useful information.",
        "answer": "provide",
        "translation": "Kütüphane yararlı bilgiler sağlayabilir."
      }
    ]
  ]
};
