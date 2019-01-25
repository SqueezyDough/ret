const btnOlder = document.querySelector('main ul li:first-child >div>div>button:first-child');
const btnNewest = document.querySelector('main ul li:first-child  >div>div>button:last-child');
const btnGroup = document.querySelector('main ul li:first-child >div>div');
const btnReadList = document.querySelector('#story-container button');
const reviewForm = document.querySelector('#contribute form');
const reviewsSection = document.querySelector('#reviews>div');
const reviewsContainer = document.querySelectorAll('section:nth-of-type(2) article');
const allButtons = document.querySelectorAll('button');
const contentCredits = document.getElementById('credits');
const btnsReadList = document.getElementsByClassName('add-to-readlist');

// story - CODE
const storyContainer = document.querySelector('#story-container p');

const fakeHashKey = document.querySelector('#story-container h1>span:nth-child(1)');
const hashKey_1 = document.querySelector('#story-container h1>span:nth-child(2)');
const hashKey_2 = document.querySelector('#story-container h1>span:nth-child(3)');
const hashKey_3 = document.querySelector('#story-container h1>span:nth-child(4)');

var hashKey_1_Owner = false;
var hashKey_2_Owner = false;
var hashKey_3_Owner = false;
var msgDecrypted = false;

var delays = [100, 500, 900, 1300];

// code should only be executed on story page
if(window.location.pathname == ('/story-code.html') || window.location.pathname == ('/ret/story-code.html')){
  // content van het verhaal
  var storyContent = "In kwellende situaties toveren apen pennenvruchten uit invloedrijke tapijthandelaren. De engelen buigen uitermate succesvol en negeren langzaam onze overrijpe politieke overlevingstrategieën. Verveelde en radicaal hompiekurkende ettertjes tegelen slablaadjes tot appelmoes. Tevens, in overleg, nagelen schoolverlaters patatjes. Leipe eekhoorntjes in Napels, met immorele jaknikkers naaien ze ogenblikkelijk, ontegenzeggelijk negerzoenen. Laaiend in grote Tefalpannen. Iedere nestor ziet in jaarringen nevels. Klote. Iemand nestelt de eerste relschoppers wat aardbeienijs. Geleidelijk etend negeren Tellsellkijkers een snelkookpan. Laat andere potloodventers een nagelschaartje halen! En tepelkloven redden Elsbeth geenszins. Elke non tegen elke non haalt elf tegelzetters. Want anders aait iemand Theo. De elf meningen etsen niets sympathieks. En nog kopen Ieren juichend katholieke enkelbandjes?! Negen andere aambeelden aan rariteitenkabinetjes belegeren elf negers. Evenzoveel Denen en Noren. Alles aan nietszeggende hoofden ezelt treinverkeer en inboedelverzekeraars. Nog dagelijks veilt Anton nepbontjassen. Help, eendracht tekent plantsoenendiensten! Leer eigenwijsheid in neofoetale mammoettankers of eet taugé. Ik kook over van energie, ruik elke eeltplek, nopende puist, lachende aambei. Nog kunnen velen eerder roken dan etteren. Raar maar eventueel toch aanbevelenswaardig. Als niemand beschonken en individueel de eekhoorntjes kapot ademt. Nooit te eenvoudig neuzen, daapse ingenieurs! Eerst poepen en bouten. Of uitwaaien. Weliswaar plukt u teelballen, tyfuszakjes en neuspuisten. In kraakheldere bewoordingen ebt Nico overige paaseitjes weg. En goed! Niemand anders aardt raar, Duitsers excluded. Buiten invloederijke brekebeentjes lobby ik ordentelijk tot halverwege Enkhuizen. En kijk omstreeks morgenochtend steevast Telekids, in jeugdigheid lekker onovertroffen. Egels fotosynthetiseren eventjes niet in naaldwouden. Geen enkele noot van anderen negeert Queneau. U etaleert nieuwe enkelbandjes. Ach, u treitert elfjes. Leendert en Nico eten noedels. Vretend laten arendsjongen konijnenbotjes vallen op ordentelijk ratten die aanvankelijk toneelstukjes instuderen. Krijg de Engelse bibbers, indigolul. En blijf in nevelen gehuld, anale hopjesliefhebber. Ongelooflijke uilebal. Druilerige theezakjesuitknijper. Elke eenvoudige neringhouder vouwt rouwkorsten om uw wijf, maar ik jaag stuipen tot aanstaande aarswonden! Nertsen dragende eikelvreters. Zelden echt willen indoctrineren. Lepelend welt Eddy teennagels. En niet olieverfachtige, feeërieke diepvrieskippenpootjes in tapirsaus. Helemaal echwel toppie! Panfluiters openen stationsrestauratie, tevens kiosk. Aan niemand toefluisteren. Of ordentelijk raadgeven. In sociale tijden eten rillende wolven ijlende jongen. Later is korter, weet iedereen. Laat u inenten tegen laadkleppen en genetische grogs. En niemand weet alles. Amper reed ze elders naartoe. Amper aardt regenval tot oefenwatertjes en metawatervallen of elke troepoudste katapulteert iemand. Ja, klote toch?! Zelf eten arendsjongen chocoladetruffels. Hij tekent echter retegoed op muren, wanden, aardewerk, appelbomen, roterende eenpersoonspannetjes. En niemand anders urineert tegen Otto! Weet elke gordijnverkoper. Rijdend is Jean diep tevreden. Zoë etaleert rennend een niet te weerstaan elfde gebodje. Bezemend of vervend, en Nico is sympathiek. Het eetlustvervangende tepeltje betaalt otzet enerverende kopermunten. Nog elf reigers grijpen ergens Nico’s strot tot eekhoorntjesbrood. Veel indigo’s neuken daapse echtbrekers. Nog volgens onder liggende gansjes eert niemand Simon, de eftelingkenner. Computers openen mega-store, peuter uilebalt traag en raar in sloten. Help eenvoudige tuinbroekjes bij oefensessies. Een kraaloogjesverzamelaar eert ronduit wel. Ezels, leipo’s. In kooigevechten grijpt Anton naar ambivalente aalscholvers. Reutelend en enerverend neukt Medvedev Engelse diplomaten en weteringcircuitminnende, eensgezinde radicalen. Krijg eerdaags rabiës! Of ook Kleverman het in jijbakken kan aantonen negeert het eventuele tranentrekkende boekwerkje of eenheidsworst kan nog internationaliseren. Enerzijds tyfus vrienden, indianen, negers, denen, Engelsen, Noren, Hunnen, Indiërs, jodens, zieners, elfjes, godenzonene, trekpaarden, dazen, anderzijds tentharingen. In kogelronde e-mails entert Nico meeldraden aan Italiaanse luipaardvangers. Nog aardige, algehele rariteiten. Het eventuele tegenzetje mag anderzijds graag apentrots zitten immobileren. Ja, nee, maar… Of elcerlyk tot sauerkraut tuurt: u roept en noopt. Dralend iemand emotioneel hoereren. Evenveel buisposten beven eventjes nog na. Of gooit een Engelsman nooit, ever. Xylofonen eroderen metterjaren paradijsachtig. Levend aarden aardappelen religieuzer. Meersterlijke aria’s ademen rare vogels. Ogenschijnlijk lijken gevers en nemers stichtende heilzoekers. Even toch meegeroken aan grote azijn zeikende, in Juinen naaiende ladenlichtende, invloedrijke grootinquisiteur! Tot het eventuele tekentafeltje behoeden ochtenderecties eikels. Kut, God… en waar onzin ontstaat, neigen waarheidszoekers afkeurend achterop rakend het ene terloopse hoorspel of operette reutelend tegen te episteren. Luie indianen geven graag. En nu. Iemand negeert eventjes een babywinkel aan babykleertjes. Yoghurt waait in nevenliggende kelders. Eelt ligt op Perzische hevelvoetjes en trommelt broze omstanders. Slaapverwekkende engeltjes negeren liever ons mensen met eeltbulten. Radeloos punnikt Lorelei eenhoorns in negligé’s. Klootzak, of ondoorgrondelijke penis? Ik koop babyschoentjes aan Bosch Y Schaduw. Chocolade hoentjes om even niets te jonassen. En stiekem vreet Olaf onze radijsjes. Men neme zuigzoenen onder octrooi. Nu!";
  // haal hier alle woorden uit en stip het in een lijst
  var words = storyContent.split(" ");

  // voeg een spatie toe na elk woord
  for (var i = 0; i < words.length - 1; i++) {
    words[i] += " ";
  }

  // zet elk woord in een span en voeg het toe aan de container
  for (var i = 0; i < words.length; i++) {
  // maak de elementen aan waarin we de content stoppen
  var elRemainder = document.createElement('div');
  var elFirstChar = document.createElement('div');
  var elWord = document.createElement('span');

  var currentWord = words[i];
  // scheid eerste char met de rest van het woord
  var wordFirstChar = currentWord.substring(0,1);
  var wordRemainder = currentWord.substring(1, currentWord.length); 
  
  // maak voor elke charachter na de eerste een aparte span en voeg het toe
  for (var x = 0; x < wordRemainder.length; x++) {  
      elRemainderFragment = document.createElement('span');;
      elRemainderFragment.innerHTML = wordRemainder[x]; 
      elRemainderFragment.classList.add('encrypted-char');  

      // stop de spannetjes in de remainder
      elRemainder.append(elRemainderFragment);  
  }

  // stop het woord in de container
  elFirstChar.innerHTML = wordFirstChar;

  // voeg de 2 delen bij elkaar
  elWord.append(elFirstChar);
  elWord.append(elRemainder);

  // voeg het hele woord toe aan de container
  storyContainer.append(elWord);

  // stick btn on top credits section
  window.addEventListener('scroll', function(e){
    // get location of creadits section
    var creditsLocationY = contentCredits.getBoundingClientRect();

    // fix fot precise location
    var calcPreciseLocation = creditsLocationY.top - 680;

    // add/remove class if section is in view
    if (calcPreciseLocation <= 0) {
        btnReadList.classList.add('sticky-button');
      } 
      else {
        btnReadList.classList.remove('sticky-button');
      }
    });

    countReviews();
  }

  // als je klikt op de fakehashkey, is de decryption gefaald
  fakeHashKey.addEventListener('click', function(){
    hashKey_1_Owner = false, hashKey_2_Owner = false, hashKey_3_Owner = false;

    if (!msgDecrypted){
      hashKey_1.classList.remove('decrypt-char');
      hashKey_2.classList.remove('decrypt-char');
      hashKey_3.classList.remove('decrypt-char');
    }

    console.log('decryption failed')
    console.log('hKey_1: ' + hashKey_1_Owner, 'hKey_2: ' + hashKey_2_Owner, 'hKey_3: ' + hashKey_3_Owner)
  });

  // bemachtig de hashkey en probeer om te decrypten
  hashKey_1.addEventListener('click', function(){
    hashKey_1_Owner = true;
    this.classList.add('decrypt-char');
    attemptDescryption();
  });

  // bemachtig de hashkey en probeer om te decrypten
  hashKey_2.addEventListener('click', function(){
    hashKey_2_Owner = true;
    this.classList.add('decrypt-char');
    attemptDescryption();
  });

  // bemachtig de hashkey en probeer om te decrypten
  hashKey_3.addEventListener('click', function(){
    hashKey_3_Owner = true;
    this.classList.add('decrypt-char');
    attemptDescryption();
  });
}

// probeer te decrypten
function attemptDescryption(){
  // als je alle hashkeys bemachtigd hebt, kun je het bericht decrypten
  if(hashKey_1_Owner && hashKey_2_Owner && hashKey_3_Owner){
    msgDecrypted = true;

    // success feedback
    var mgsSuccess = 'racked';  
    fakeHashKey.innerHTML += mgsSuccess; 
    
    // voeg coordinaten toe voor je afspraak met de verwarde man
    const successMsg = document.querySelector('#story-container h2');
    successMsg.innerHTML = '52.3579946, 4.8686484, 29.01.19, 13:00';

    // trigger decruption
    decrypt_code();
    console.log('message decrypted');
  }
  // decryption failed, log key owners
  else{
    console.log('decryption failed')
    console.log('hKey_1: ' + hashKey_1_Owner, 'hKey_2: ' + hashKey_2_Owner, 'hKey_3: ' + hashKey_3_Owner)
  }
}

function decrypt_code(){
  var encrypted_chars = document.getElementsByClassName('encrypted-char');
  // elke character wordt met verschillende delays gedecrypt
  var delaysMilliSec = [400, 800, 1600, 3200];

  for (var i = 0; i < encrypted_chars.length; i++) { 
    delayOptions = delaysMilliSec.length-1;
    delay = Math.floor((Math.random() * delayOptions) +1);

    // voeg css class toe voor decryption met de delay
    addDecryption(encrypted_chars[i], delaysMilliSec[delay]);  
  }
}

function addDecryption(char, delay){
  setTimeout(function(){
    char.classList.add('decrypt-char');
  }, delay);  
}

function countReviews(){
  const reviewsCount = reviewsSection.parentElement.querySelector('h2>span');
  var allReviews = reviewsSection.querySelectorAll('article');
  reviewsCount.textContent = allReviews.length;
}

// show/hide reviews
setInterval(function(){
  // for every article...
  for (var i = 0; i < reviewsContainer.length; i++){
    var nextReview;
    var delaysInSeconds = ['.2s', '.3s', '.4s', '.5s', '.6s','.7s', '.8s', '.9s', '1s'];

    // scope single review p's
    var reviews = reviewsContainer[i].querySelectorAll('div>section article');
    
    // for every review (p) in article...
    for(var x = 0; x < reviews.length; x++){
      review = reviews[x]; 

      // check if article is shown
      if (review.classList.contains('show-review')){

        // hide this one
        review.classList.remove('show-review');

        // check if article has next sibling 
        if (review.nextElementSibling != null){
          // next review is next sibling
          nextReview = review.nextElementSibling;       
        }            
        else{
          // no next sibling, next review is first article
          nextReview = review.parentElement.querySelector('article:first-of-type');
        }   
      }
      // if no review is shown currently due to a mistake in html, show current review
      else {
        nextReview = review;
      }    
    } 

    // display reviews with random delays
    delayOptions = delaysInSeconds.length-1;
    randomNumber = Math.floor((Math.random() * delayOptions) +1);

    nextReview.style.transitionDelay = delaysInSeconds[randomNumber];
    nextReview.classList.add('show-review');
  }  
}, 6000);

// add listener to all buttons in list
for (var i = 0; i < btnsReadList.length; i++){
  btnsReadList[i].addEventListener("click", function(){

    var textNode = document.createElement('span');

    if (this.classList.contains('added-to-readlist')){
      this.classList.remove('added-to-readlist');

      var msg = "Verwijderd uit je leeslijst";   
      textNode.classList.add('show-confirmation');
    }
    else{
      this.classList.add('added-to-readlist');
      var msg = "Toegevoegd aan je leeslijst";    
    }

    textNode.textContent = msg;
    this.appendChild(textNode);

    textNode.classList.add('show-confirmation');
      setTimeout(function(){
        textNode.classList.remove('show-confirmation');
      }, 2500);
  });
}

// code should only be executed on index page
if(window.location.pathname == ('/index.html') || window.location.pathname == ('/ret/index.html') || window.location.pathname == ('/ret/')){
  btnOlder.addEventListener("click", function(){
    document.getElementById('list-stories').scrollIntoView({
      behavior: 'smooth'
    });
   
    this.classList.add('text-active');
    btnNewest.classList.remove('text-active');
    btnGroup.classList.add('push-down');
  });
  
  btnNewest.addEventListener("click", function(){
    document.getElementById('anchor').scrollIntoView({
      behavior: 'smooth'
    });
   
    this.classList.add('text-active');
    btnOlder.classList.remove('text-active');
    btnGroup.classList.remove('push-down');
  });
}

// buttons shouldnt be submitting
for (var i = 0; i < allButtons.length; i++){
  allButtons[i].addEventListener('click', function(event){
    event.preventDefault();
  });
}

// hide form when form is valid and show confirmation
reviewForm.querySelector('input[type=submit]').addEventListener('click', function(event){
  event.preventDefault();

  var rating = reviewForm.querySelector('input:checked');
  var textArea = reviewForm.querySelector('textarea');

  if(textArea.validity && rating != null){
    console.log('form is valid');
  
    var formSection = document.createElement('section');
    formSection.classList.add('form');

    // display confirmation
    reviewForm.parentNode.appendChild(formSection);
    reviewForm.parentElement.removeChild(reviewForm);

    var header = document.createElement('h3');
    var body = document.createElement('p');

    header.textContent = "Bedankt voor je beoordeling";
    body.textContent = "Je beoordeling is geplaatst";

    formSection.appendChild(header);
    formSection.appendChild(body);


    // append review to list
    var ratingValue = rating.getAttribute('value');

    var article = document.createElement('article');
    article.id = "user_review";

    reviewsSection.prepend(article);

    var headerContainer = document.createElement('header');
    var header = document.createElement('h3');
    header.textContent = "Joost F.";

    var small = document.createElement('small');
    var list = document.createElement('ol');

    article.appendChild(headerContainer);
    headerContainer.appendChild(header);

    article.appendChild(small);
    small.appendChild(list);

    for (var i = 0; i < ratingValue; i++){
      var listItem = document.createElement('li');
      list.appendChild(listItem);

      var img = document.createElement('img');
      img.setAttribute('src', 'images/icons/star-filled.svg');
      img.setAttribute('alt', '*');
          
      listItem.append(img);   
    }

    var emptyStars = 5 - ratingValue;

    for (var x = 0; x < emptyStars; x++){
      var listItem = document.createElement('li');
      list.appendChild(listItem);

      var img = document.createElement('img');
      img.setAttribute('src', 'images/icons/star-empty.svg');
      img.setAttribute('alt', '*');
          
      listItem.append(img);    
    }    

    var body = document.createElement('p');
    body.textContent = textArea.value;

    article.append(body);

    countReviews();
  }
});
