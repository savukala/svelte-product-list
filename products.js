/**
 * Mock API served as Express middleware
 */
module.exports = {
  "products": [
    {
      "id": 0,
      "name": "Kukko Lager",
      "description": "Laitilan Kukko Lager on kansainvälisen luokan vaalea, lager-tyyppinen täysmallasolut. Peruslagereita vahvemmin humaloidun Kukko Lagerin valmistuksessa ei ole käytetty tärkkelystä, vaan oluen viljainen maku tulee Varsinais-Suomen viljavilla pelloilla kasvaneesta ohrasta.",
      "price": 6,
      "volume": "0.45L ",
      "type": "Hanatuote",
      "discount": " ",
      "product_type" : "Olut",
      "quantity": 0,
      "image":"item0.PNG"
    },
    {
      "id": 1,
      "name": "Oiva Siideri",
      "description": "Oiva Organic Apple Dry -siiderin huumaava raikkaus tuottaa nautiskelijalleen miellyttävän elämyksen kerta toisensa jälkeen. Kesän ehdoton suosikki, joka varmistaa auringonpaisteen jatkumisen keskiyöhön saakka. Sopii loistavasti seurustelujuomaksi tai ruokapöytään.",
      "price": 6,
      "volume": "0.4L",
      "type": "Hanatuote",
      "discount": " ",
      "product_type" : "Siideri",
      "quantity": 0,
      "image":"item1.PNG"
    },
    {
      "id": 2,
      "name": "Gin Long Drink",
      "description": "Laitilan Gini Long Drink on London Dry Gin -pohjainen virvoittavan raikas lonkero. London Dry Ginin voimakas, mutta samalla hienostunut katajaisuus yhdistettynä raikkaaseen greippijuomaan lunastaa takuulla odotukset ja peittoaa kilpailijat.",
      "price": 6.5,
      "volume": "0.4L",
      "type": "Hanatuote",
      "discount": " ",
      "product_type" : "Lonkero",
      "quantity": 0,
      "image":"item2.PNG"
    },
    {
      "id": 3,
      "name": "Brändy Long Drink",
      "description": "Laitilan Brändy Long Drink on valmistettu aidoista raaka-aineista. Huolellisen testausrupeaman seurauksena löytyi juomaan sopivan pehmeä brandy. Pehmeä brandy yksinään on kuitenkin niin vahva-arominen tisle, että sen särmää leikkaamaan tarvittiin parasta saatavilla olevaa suomalaista väkiviinaa. Kun tämä ”leikattu brandy” laimennettiin perinteisellä tammitynnyrikypsytetyllä hedelmäjuomalla, saatiin aikaan raikas, harmoninen ja jalo juoma, joka Laitilan Brändy Long Drinkiksi ristittiin.",
      "price": 6.5,
      "volume": "0.4L",
      "product_type" : "Lonkero",
      "discount": " ",
      "type": "Hanatuote",
      "quantity": 0,
      "image":"item3.PNG"
    },
    {
      "id": 4,
      "name": "Sol",
      "description": "Sol on raikkaan maltainen ja sitruksisen kevyt lagerolut, joka tarjoillaan hyvin jäähdytettynä. Sol-olut sopii hyvin myös meksikolaisen ruuan ja esimerkiksi vaalean kalan kumppaniksi. Solin kantava teema on Espiritu libre, ja se sopiikin mainiosti aikuisille, jotka haluavat vaalia pieniä vapauden ja irtioton hetkiä arjen keskellä.",
      "price": 7,
      "volume": "0.33L",
      "discount": "VIP - 5€",
      "product_type" : "Olut",
      "type": "Pullo",
      "quantity": 0,
      "image":"item4.PNG"
    },
    {
      "id": 5,
      "name": "Saimaan Siideri",
      "description": "Unohda tavallinen. Sano kyllä käsityölle, sano kyllä 100 % omenien mehulle. YES YES on Saimaa Brewing Companyn perinteisin menetelmin tehty aito craft-siideri. Tiedätkö miltä aito maistuu? Se on kuin kupliva kesäpäivä. Ei mitään ylimääräistä, vain puhdas maku ja tuorepuristettu omenamehu viimeiste­lemässä taivaallisen nautinnon. Kyllä, kyllä kiitos.",
      "price": 6,
      "volume": "0.33L",
      "discount": " ",
      "product_type" : "Siideri",
      "type": "Tölkki",
      "quantity": 0,
      "image":"item5.JPG"
    },
    {
      "id": 6,
      "name": "Payday Craft Gin",
      "description": "Payday Craft Gin on London dry -tyyppinen, perinteitä kunnioittava gin. Sen makuprofiilissa nousee Pyynikin tiedotteen mukaan esiin katajanmarja, sitrus sekä lakritsisuus. Mausteina on käytetty katajanmarjaa, korianteria, fenkolia, sitruunankuorta, väinönputkea, mustapippuria, inkivääriä, kanelia ja lakritsijuurta.",
      "price": 8,
      "volume": "4CL",
      "discount": "Gin Tonic: 10€",
      "product_type" : "Gin",
      "type": "",
      "quantity": 0,
      "image":"item6.JPG"
    },
    {
      "id": 7,
      "name": "Napue Gin",
      "description": "Ruispohjaisessa Napue ginissä maistuu 12 kuivayrtin lisäksi neljä tuoretislattua paikallista kasvia ja marjaa: mesiangervo, tyrni, karpalo ja koivunlehti. Lopputulos on kesäisen metsäinen ja helposti tunnistettava. Napue & tonic tarjoillaan runsailla jäillä, rosmariinin oksalla ja muutamalla karpalolla koristeltuna.",
      "price": 8,
      "volume": "4CL",
      "discount": "Gin Tonic 10€",
      "product_type" : "Gin",
      "type": "",
      "quantity": 0,
      "image":"item7.JPG"
    },
    {
      "id": 8,
      "name": "Arctic Blue Gin",
      "description": "Suomalaiset mustikat, raikas lähdevesi ja muut pohjoisen luonnon raaka-aineet antavat Arctic Blue -artesaaniginille sen hienostuneen mustikkaisen, katajaisen, mausteisen ja havumetsäisen maun. Arctic Bluen valmistuksessa ei ole käytetty kylmäfiltteröintiä, sillä se heikentäisi luonnollisten raaka-aineiden aromeja ja ominaisuuksia. Tämän ainutlaatuisen valmistustavan ansiosta ginissä säilyy mustikoiden luonnollinen pektiini, joka antaa juomalle utuisen sävyn tonic-veteen tai jäihin yhdistettäessä.",
      "price": 8,
      "volume": "4CL",
      "discount": "Gin Tonic 10€",
      "product_type" : "Gin",
      "type": "",
      "quantity": 0,
      "image":"item8.JPG"
    },
    {
      "id": 9,
      "name": "Hendrick's Gin",
      "description": "Hendricks Gin valmistetaan vanhan perheen reseptin mukaan, joka sisältää perinteisiä yrttejä, kuten katajan, korianterin ja sitruunan. Mutta erikoisin on kurkkujen ja ruusunlehtien vaikutus, mikä luo ylimääräisen ginin. Monikerroksinen Premium Gin vakuuttaa epätavallisen maun. Se yhdistää 11 erilaista yrttiä ja mausteita, jotka antavat sille maun. Virkistävästi erilainen!",
      "price": 8,
      "volume": "4CL",
      "discount": "Gin Tonic 10€",
      "product_type" : "Gin",
      "type": "",
      "quantity": 0,
      "image":"item9.JPG"
    },
    {
      "id": 10,
      "name": "Bombay Sapphire",
      "description": "Bombay Sapphire‘n kymmenen yrttiä tekevät siitä puhtaan, kevyen, tyypillisen yrttisen ja elegantin ginin. Bombay on täydellinen alkoholi pirteiden, kohottavien juomien valmistukseen.",
      "price": 6,
      "volume": "4CL",
      "discount": "Gin Tonic 8€",
      "product_type" : "Gin",
      "type": "",
      "quantity": 0,
      "image":"item10.JPG"
    },
    {
      "id": 11,
      "name": "Finlandia Vodka",
      "description": "Suomalainen vodka. Tislattu huolella ohrasta ja viimeistelty suomalaisella lähdevedellä. Kuiva, neutraali ja puhdas maku.",
      "price": 5,
      "volume": "4 CL",
      "discount": "Mixerin kanssa 7.5€",
      "product_type" : "Vodka",
      "type": "",
      "quantity": 0,
      "image":"item11.JPG"
    },
    {
      "id": 12,
      "name": "Grey Goose Vodka",
      "description": "Grey Goose on hienoa vodkaa Ranskasta. Maku on pehmeä, makea ja ainutlaatuinen. Vodka tuoksuu sitrukselle ja kukille, siinä voi huomata mantelia. Jälkimaku on pitkä ja raikas.",
      "price": 8,
      "volume": "4CL",
      "discount": "",
      "product_type" : "Vodka",
      "type": "",
      "quantity": 0,
      "image":"item12.PNG"
    },
    {
      "id": 13,
      "name": "Koskenkorva Minttu",
      "description": "Koskenkorva Minttu on äärimmäisen tyylikäs ja raikas suomalainen minttulikööri, jonka täyteläisessä maussa tuntuvat tuhdit piparmintun vivahteet ja aavistus karamellia.",
      "price": 6,
      "volume": "4CL",
      "discount": "",
      "product_type" : "Maustetut viinat",
      "type": "",
      "quantity": 0,
      "image":"item13.PNG"
    },
    {
      "id": 14,
      "name": "Koskenkorva Salmiakki",
      "description": "Koskenkorva Salmiakki on alkuperäinen salmiakkilikööri, jossa on fantastisen runsas ja mausteinen maku. Sen lanseeraus 1990-luvulla aiheutti pienen vallankumouksen suomalaisessa juomakulttuurissa.",
      "price": 6,
      "volume": "4CL",
      "discount": "",
      "product_type" : "Maustetut viinat",
      "type": "",
      "quantity": 0,
      "image":"item14.JPG"
    },
    {
      "id": 15,
      "name": "Jägermeister",
      "description": "Jägermeister valmistetaan 56 eri ainesosasta, joista yleisessä tiedossa on noin 25, muun muassa sitruunankuori, pomeranssi, tähtianis, inkivääri, kardemumma, lakritsi ja useat yrtit. Juomassa on 130 grammaa sokeria litraa kohden.",
      "price": 6,
      "volume": "4CL",
      "discount": "",
      "product_type" : "Liköörit & Katkerot",
      "type": "",
      "quantity": 0,
      "image":"item15.JPG"
    },
    {
      "id": 16,
      "name": "Fernet Branca",
      "description": "Fernet-Brancan väri on voimakkaan tummanruskea ja sen tuoksu aromaattinen. Fernet-Brancan valmistamiseen käytetään 27 eri yrttiä ja maustetta, muun muassa mirhaa, raparperia, kamomillaa, kardemummaa, aloeta ja sahramia.",
      "price": 6,
      "volume": "4 CL",
      "discount": "",
      "product_type" : "Liköörit & Katkerot",
      "type": "",
      "quantity": 0,
      "image":"item16.JPG"
    },
    {
      "id": 17,
      "name": "Averna",
      "description": "Averna on perinteinen Italialainen digestiivi jota on valmistettu aina vuodesta 1868 asti. Likööri on nimetty keksijänsä Salvatore Avernan mukaan ja se valmistetaan edelleen alkuperäistä reseptiä noudattaen Sisilian saarella. Averna on valmistettu 100% luonnon raaka-aineista joita ovat mm. erilaiset yrtit, juuret, granaattiomena, ja sitrushedelmien kuoret.",
      "price": 6,
      "volume": "4 CL",
      "discount": "",
      "product_type" : "Liköörit & Katkerot",
      "type": "",
      "quantity": 0,
      "image":"item17.JPG"
    },{
      "id": 18,
      "name": "Disaronno",
      "description": "Amaretto on italialainen karvasmantelilla maustettu makea likööri. Se valmistetaan aprikoosin kivistä, mantelipuun siemenistä tai molemmista. Liköörin nimi juontuu italian kielen sanasta amaro (suom. karvas), joka viittaa manteleiden makuun. Karvaus ei kuitenkaan hallitse liköörin makua, vaan se on voimakkaasti makeutettua.",
      "price": 7,
      "volume": "4 CL",
      "discount": "",
      "product_type" : "Liköörit & Katkerot",
      "type": "",
      "quantity": 0,
      "image":"item18.JPG"
    },


  ]
}
