/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = { '1': { q: 'praxis', a: 'vedertaget bruk' },
  '2': { q: 'cancer ', a: 'samlingsnamn för elakartade tumörer' },
  '3': { q: 'hemoglobin ', a: 'blodfärgämne' },
  '4':
   { q: 'lesion ',
     a: 'skada/sjuklig förändring i vävnad eller organ' },
  '5': { q: 'gangrän ', a: 'celldöd, kallbrand' },
  '6': { q: 'gangrenös ', a: 'kallbrandsliknande' },
  '7': { q: 'artär ', a: 'pulsådern, blodkärl med syresatt blod' },
  '8':
   { q: 'arterioskleros ',
     a: 'samlingsnamn för typer av artärförkalkning' },
  '9': { q: 'uretär ', a: 'urinledare' },
  '10': { q: 'urethra ', a: 'urinrör' },
  '11': { q: 'karaktär ', a: 'kännetecken, egenskaper' },
  '12': { q: 'karakteristisk ', a: 'typiskt, säregen' },
  '13': { q: 'caecum ', a: 'blindtarm' },
  '14': { q: 'appendicit ', a: 'blindtarmsinflammation' },
  '15': { q: 'faeces ', a: 'avföring' },
  '16': { q: 'gynekologi ', a: 'läran om kvinnosjukdomar' },
  '17': { q: 'hema ', a: 'blod (prefix)' },
  '18': { q: 'hematom ', a: 'blåmärke' },
  '19': { q: 'melena ', a: 'svart, blodig avföring' },
  '20': { q: 'pediatrik ', a: 'läran om barnsjukdomar' },
  '21': { q: 'amöba ', a: 'encellig organism' },
  '22': { q: 'ödem ', a: 'vätskesamling' },
  '23': { q: 'celiaki ', a: 'glutenintolerans' },
  '24': { q: 'esofagus ', a: 'matstrupe' },
  '25': { q: 'apné ', a: 'andningsstillestånd' },
  '26': { q: 'diarré ', a: 'tunnflytande avföring' },
  '27': { q: 'cell ', a: '”kroppens byggsten”' },
  '28': { q: 'cysta ', a: 'sjukligt hålrum' },
  '29': { q: 'likvor ', a: 'vätska' },
  '30': { q: 'aspiration ', a: 'inandning av munhåleinnehåll' },
  '31':
   { q: 'falang ',
     a: 'kort rörformat ben, utskott på fingrar och tår' },
  '32': { q: 'varicer ', a: 'åderbråck' },
  '33': { q: 'atrofi ', a: 'förtvining' },
  '34': { q: 'bronk ', a: 'luftrör' },
  '35': { q: 'skolios ', a: 'ryggradskrökning i sidled' },
  '36': { q: 'kranium ', a: 'skalle' },
  '37': { q: 'kolon ', a: 'tjocktarm' },
  '38':
   { q: 'klamydia ',
     a: 'könssjukdom, sexuell överförd infektion ' },
  '39': { q: 'insufficiens ', a: 'otillräcklig funktion' },
  '40': { q: 'muskel ', a: 'kroppsvävnad' },
  '41': { q: 'primär ', a: 'första, grundläggande, ursprunglig' },
  '42': { q: 'ulcerös ', a: 'sårigt' },
  '43': { q: 'algia ', a: 'smärta ' },
  '44': { q: 'cele ', a: 'bråck' },
  '45': { q: 'ectasia ', a: 'utvidgning ' },
  '46': { q: 'genesis ', a: 'en sjukdoms uppkomst och utveckling ' },
  '47':
   { q: 'graphia ',
     a: 'registrering med kurva eller bild, oftast röntgen ' },
  '48': { q: 'iatria ', a: 'läkekonst ' },
  '49': { q: 'logia ', a: 'lära' },
  '50': { q: 'lysis ', a: 'lösning, lösgörande ' },
  '51': { q: 'mania ', a: 'galenskap ' },
  '52': { q: 'osis ', a: 'sjukdom ' },
  '53': { q: 'pathia ', a: 'lidande ' },
  '54': { q: 'penia ', a: 'brist' },
  '55': { q: 'philia ', a: 'kärlek till, dragning till ' },
  '56': { q: 'phobia ', a: 'fruktan ' },
  '57': { q: 'pneoa ', a: 'andning ' },
  '58': { q: 'rhexia ', a: 'bristning ' },
  '59': { q: 'scpoia ', a: 'betraktande ' },
  '60': { q: 'stomia ', a: 'operativ förberedelse eller öppning' },
  '61':
   { q: 'Vad är ICD?',
     a: 'En internationell sjukdomsklassifikation som används för dödsorsaksstatistik och redovisning av diagnoser hos sjukvårdade patienter. Det är främst en statistisk klassifikation.' },
  '62':
   { q: 'Vad betyder förkortningen ICD? ',
     a: 'International List of Causes of Deaths' },
  '63':
   { q: 'Vad är främsta syftet med ICD? ',
     a: 'De ska på ett meningsfullt sätt gruppera sjukdomar och dödsorsaker för översiktliga statistiska sammanställningar och analyser.' },
  '64':
   { q: 'Vilken stor förändring gjordes i Sverige 1987 gällande ICD?',
     a: 'Då genomfördes en stavningsreform i den svenska klassifikationen med moderniserad stavning av de försvenskade latinska benämningarna men med bibehållen klassisk stavning i de rent latinska diagnoserna.' },
  '65':
   { q: 'Vad är DSM? ',
     a: 'Det är ett klassifikationssystem inom psykiatrin som är utarbetat av den nordamerikanska psykiaterorganistationen. Man använder tydliga diagnistiska kriterier och deras klassificering kan ske efter flera dimensioner (axlar)' },
  '66':
   { q: 'Vad betyder förkortningen DSM? ',
     a: 'Diagnostic and Statistical Manual of Mental Disorders' },
  '67':
   { q: 'Vad betyder förkortningen KVÅ? ',
     a: 'Klassifikationer av vårdåtgärder.' },
  '68':
   { q: 'Vad betyder förkortningen ATC?',
     a: 'Anatomical Therapeutic Chemical' },
  '69':
   { q: 'Vad är en ATC-kod? ',
     a: 'Klassifikationssystem för läkemeddel, koder för läkemedel' },
  '70':
   { q: 'Vad betyder förkortningen DRG? ',
     a: 'Diagnosis Related Groups' },
  '71':
   { q: 'Vad är syftet med DRG?',
     a: 'De arbetar för att sammanfattande beskriva sjukhusens verksamhet både från medicinsk synpunkt (diagnoser och operationer) och med avseende på resursförbrukningen.' },
  '72': { q: 'acutus ', a: 'akut' },
  '73': { q: 'albus ', a: 'vit ' },
  '74': { q: 'benignus ', a: 'godartad' },
  '75': { q: 'cavus ', a: 'ihålig' },
  '76': { q: 'malignus ', a: 'elakartad' },
  '77': { q: 'maturus ', a: 'mogen' },
  '78': { q: 'moribundus ', a: 'döende' },
  '79': { q: 'multus ', a: 'mången' },
  '80': { q: 'novus ', a: 'ny' },
  '81': { q: 'profundus ', a: 'djup' },
  '82': { q: 'siccus ', a: 'torr' },
  '83': { q: 'valgus ', a: 'kobent, distalt utåtvinklad' },
  '84': { q: 'varus ', a: 'hjulbent, distalt inåtvinklad' },
  '85': { q: 'gravidus ', a: 'havande' },
  '86': { q: 'morbidus ', a: 'sjuklig' },
  '87': { q: 'pallidus ', a: 'blek' },
  '88': { q: 'cutaneus ', a: 'hud-' },
  '89': { q: 'popliteus ', a: 'knävecks-' },
  '90': { q: 'spontaneus ', a: 'spontan' },
  '91': { q: 'masculinus ', a: 'manlig' },
  '92': { q: 'femininus ', a: 'kvinnlig' },
  '93': { q: 'coronarius ', a: 'krans-' },
  '94': { q: 'hereditarius ', a: 'ärftlig' },
  '95': { q: 'primarius ', a: 'primär' },
  '96': { q: 'secundarius ', a: 'sekundär' },
  '97': { q: 'muculentus ', a: 'slemmig' },
  '98': { q: 'purulentus ', a: 'varig' },
  '99': { q: 'adiposus ', a: 'fettrik, fet' },
  '100': { q: 'infectiosus ', a: 'infektiös' },
  '101': { q: 'mucosus ', a: 'slemmig' },
  '102': { q: 'contagiosus ', a: 'smittsam' },
  '103': { q: 'serosus ', a: 'fylld av serum' },
  '104': { q: 'spongiosus ', a: 'svampig' },
  '105': { q: 'deltoideus ', a: 'deltalik' },
  '106': { q: 'thyreoideus ', a: 'sköldlik' },
  '107': { q: 'chronicus ', a: 'kronisk' },
  '108': { q: 'opticus ', a: 'syn-, otisk' },
  '109': { q: 'somaticus ', a: 'kropps-' },
  '110': { q: 'traumaticus ', a: 'skade-, våld-' },
  '111': { q: 'incisivus ', a: 'inskärande' },
  '112': { q: 'obstructivus ', a: 'tillämpande, hindrande' },
  '113': { q: 'palliativus ', a: 'lindarande' },
  '114': { q: 'sedativus ', a: 'lugnande' },
  '115': { q: 'obturatorius ', a: 'tillämpande' },
  '116': { q: 'respiratorius ', a: 'andnings-' },
  '117': { q: 'comminutis ', a: 'splittrad, förminskad' },
  '118': { q: 'diffusus ', a: 'spridd' },
  '119': { q: 'ignotus ', a: 'okänd' },
  '120': { q: 'incompensatus ', a: 'ej kompenserad' },
  '121': { q: 'indicatus ', a: 'angiven' },
  '122': { q: 'mellitus ', a: 'söt, honungssöt' },
  '123': { q: 'obturatus ', a: 'tilltäppt' },
  '124': { q: 'provocatus ', a: 'framkallad' },
  '125': { q: 'suspectus ', a: 'misstänkt' },
  '126': { q: 'communis ', a: 'gemensam' },
  '127': { q: 'fortis ', a: 'stark' },
  '128': { q: 'gravis ', a: 'tung, allvarlig' },
  '129': { q: 'mollis ', a: 'mjuk' },
  '130': { q: 'infantilis ', a: 'barn-' },
  '131': { q: 'juvenilis ', a: 'ungdom-' },
  '132': { q: 'senilis ', a: 'ålders-' },
  '133': { q: 'difficilis ', a: 'svår' },
  '134': { q: 'fertilis ', a: 'fruktsam' },
  '135': { q: 'fragilis ', a: 'bräcklig, skör' },
  '136': { q: 'labilis ', a: 'fallfärdig, labil' },
  '137': { q: 'vermiformis ', a: 'maskformad' },
  '138': { q: 'simplex ', a: 'enkel' },
  '139': { q: 'duplex ', a: 'dubbel' },
  '140': { q: 'multiplex ', a: 'mångfaldig' },
  '141': { q: 'biceps ', a: 'tvåhövdad' },
  '142': { q: 'triceps ', a: 'trehövdad' },
  '143': { q: 'quadriceps ', a: 'fyrhövdad' },
  '144': { q: 'flexibilis ', a: 'böjbar' },
  '145': { q: 'irritabilis ', a: 'benägen att irriteras, känslig' },
  '146': { q: 'reponibilis ', a: 'möjlig att återföra i rätt läge' },
  '147': { q: 'cancerogenes ', a: 'cancerframkallande' },
  '148': { q: 'rheumatoides ', a: 'reumatismliknande' },
  '149': { q: 'schizoides ', a: 'schizofreniartad' },
  '150': { q: 'abducens ', a: 'utåtförande' },
  '151': { q: 'adducens ', a: 'inåtförande' },
  '152': { q: 'adjuvans ', a: 'hjälpande' },
  '153': { q: 'afferens ', a: 'tillförande' },
  '154': { q: 'agens ', a: 'handlande, verkande' },
  '155': { q: 'agitans ', a: 'skakande' },
  '156': { q: 'alternans ', a: 'växlande' },
  '157': { q: 'anticoagulans ', a: 'verkande mot koagulation' },
  '158': { q: 'fulminalis ', a: 'blixtrande, plötslig' },
  '159': { q: 'intermittens ', a: 'återkommande med mellanrum' },
  '160': { q: 'latens ', a: 'dold' },
  '161': { q: 'migrans ', a: 'vandrande' },
  '162': { q: 'perforans ', a: 'genomborrande' },
  '163': { q: 'persistens ', a: 'ihållande' },
  '164': { q: 'recidivans ', a: 'återkommande, med återfall' },
  '165': { q: 'resistens ', a: 'motståndskraftig' },
  '166': { q: 'aorta ', a: 'stora kroppspulsådern' },
  '167': { q: 'auricula ', a: 'ytterörat' },
  '168': { q: 'axilla ', a: 'armhåla' },
  '169': { q: 'cauda ', a: 'svans' },
  '170': { q: 'clavicula ', a: 'nyckelben' },
  '171': { q: 'cochlea ', a: 'snäcka' },
  '172': { q: 'columna ', a: 'kotpelare' },
  '173': { q: 'concha ', a: 'mussla' },
  '174': { q: 'cornea ', a: 'hornhinna' },
  '175': { q: 'costa ', a: 'revben' },
  '176': { q: 'coxa ', a: 'höft' },
  '177': { q: 'fibula ', a: 'vadben' },
  '178': { q: 'lingua ', a: 'tunga, språk' },
  '179': { q: 'mamma ', a: 'bröst (körtel)' },
  '180': { q: 'mamilla ', a: 'bröstvårta' },
  '181': { q: 'mandibula ', a: 'underkäke' },
  '182': { q: 'maxilla ', a: 'överkäke' },
  '183': { q: 'patella ', a: 'knäskål' },
  '184': { q: 'placenta ', a: 'moderkaka' },
  '185': { q: 'pleura ', a: 'lungsäck' },
  '186': { q: 'prostata ', a: 'prostata, blåshalskörtel' },
  '187': { q: 'scapula ', a: 'skulderblad' },
  '188': { q: 'tibia ', a: 'skenben' },
  '189': { q: 'trachea ', a: 'luftstrupe' },
  '190': { q: 'ulna ', a: 'armbågsben' },
  '191': { q: 'urethra ', a: 'urinrör' },
  '192': { q: 'arteria ', a: 'artär' },
  '193': { q: 'bursa ', a: 'slemsäck' },
  '194': { q: 'capsula ', a: 'kapsel' },
  '195': { q: 'chorda ', a: 'sträng' },
  '196': { q: 'crista ', a: 'kant, list' },
  '197': { q: 'cysta ', a: 'sjukligt hålrum' },
  '198': { q: 'fascia ', a: 'bindvävshinna omkring muskel' },
  '199': { q: 'fossa ', a: 'liten grop' },
  '200': { q: 'glandula ', a: 'körtel' },
  '201': { q: 'membrana ', a: 'hinna' },
  '202': { q: 'papula ', a: 'knottra, papel' },
  '203': { q: 'papilla ', a: 'vårtliknande utskott' },
  '204': { q: 'spina ', a: 'tagg, benutskott, ryggrad' },
  '205': { q: 'tela ', a: 'vävnad' },
  '206': { q: 'valva ', a: 'klaff (apparat)' },
  '207': { q: 'valvula ', a: 'klaff (enskild)' },
  '208': { q: 'vena ', a: 'ven' },
  '209': { q: 'aqua ', a: 'vatten' },
  '210': { q: 'causa ', a: 'orsak' },
  '211': { q: 'femina ', a: 'kvinna' },
  '212': { q: 'vita ', a: 'liv' },
  '213': { q: 'fissura ', a: 'spricka' },
  '214': { q: 'flexura ', a: 'böjning, krökning' },
  '215': { q: 'fractura ', a: 'brott' },
  '216': { q: 'incisura ', a: 'anatomisk inskärning, fåra' },
  '217': { q: 'ruptura ', a: 'bristning' },
  '218': { q: 'sutura ', a: 'söm' },
  '219': { q: 'adhaerentia ', a: 'sammanväxning' },
  '220': { q: 'deficientia ', a: 'brist' },
  '221': { q: 'dementia ', a: 'mental avtrubbning' },
  '222': { q: 'incontinentia ', a: 'oförmåga att hålla sig' },
  '223': { q: 'insufficientia ', a: 'otillräcklig funktion, svikt' },
  '224': { q: 'alopecia ', a: 'håravfall' },
  '225': { q: 'angina ', a: 'halsfluss, kärlkramp' },
  '226': { q: 'hernia ', a: 'bråck' },
  '227': { q: 'injuria ', a: 'skada ' },
  '228': { q: 'nausea ', a: 'illamående' },
  '229': { q: 'pustula ', a: 'liten varblåsa' },
  '230': { q: 'rubella ', a: 'röda hund' },
  '231': { q: 'sequele ', a: 'följd (er), resttillstånd' },
  '232': { q: 'struma ', a: 'sköldkörtelförstoring' },
  '233': { q: 'urticaria ', a: 'nässelfeber' },
  '234': { q: 'anaemia ', a: 'blodbrist' },
  '235': { q: 'atrophia ', a: 'förtvining' },
  '236': { q: 'hemiplegia ', a: 'ensidig förlamning' },
  '237': { q: 'hypertonia ', a: 'högt blodtryck' },
  '238': { q: 'diastole ', a: 'hjärtats utvidgning' },
  '239': { q: 'systole ', a: 'hjärtats sammandragning' },
  '240': { q: 'alveolus ', a: 'litet hålrum, lungblåsa' },
  '241': { q: 'anus ', a: 'ändtarmsöppning' },
  '242': { q: 'carpus ', a: 'handled' },
  '243': { q: 'cubitus ', a: 'armbåge' },
  '244': { q: 'humerus ', a: 'överarmsben' },
  '245': { q: 'nasus ', a: 'näsa' },
  '246': { q: 'oculus ', a: 'öga' },
  '247': { q: 'thalamus ', a: 'kärnsystemet i hjärnan' },
  '248': { q: 'uterus ', a: 'livmoder' },
  '249':
   { q: 'ventriculus ',
     a: 'magsäck; hjärtkammare; hjärtventrikel' },
  '250': { q: 'anulus ', a: '(liten) ring' },
  '251': { q: 'condylus ', a: 'ledhuvud' },
  '252': { q: 'discus ', a: 'skiva' },
  '253': { q: 'fundus ', a: 'botten' },
  '254': { q: 'nervus ', a: 'nerv' },
  '255': { q: 'nodus ', a: 'knut, knöl' },
  '256': { q: 'truncus ', a: 'stam, bål' },
  '257': { q: 'tubus ', a: 'rör' },
  '258': { q: 'bacillus ', a: 'bacill' },
  '259': { q: 'calculus ', a: 'sten' },
  '260': { q: 'embolus ', a: 'blodpropp på vandring' },
  '261': { q: 'fungus ', a: 'svamp' },
  '262': { q: 'icterus ', a: 'gulsot' },
  '263': { q: 'ileus ', a: 'tarmstopp' },
  '264': { q: 'morbus ', a: 'sjukdom' },
  '265': { q: 'tetanus ', a: 'stel (kramp)' },
  '266': { q: 'thrombus ', a: 'fast blodpropp' },
  '267': { q: 'metabolismus ', a: 'ämnesomsättning' },
  '268': { q: 'rheumatismus ', a: 'reumatism' },
  '269': { q: 'annus ', a: 'år' },
  '270': { q: 'focus ', a: 'härd' },
  '271': { q: 'locus ', a: 'plats' },
  '272': { q: 'medicus ', a: 'läkare' },
  '273': { q: 'ascites ', a: 'bukvattusot' },
  '274': { q: 'diabetes ', a: 'ökad urinutsöndring' },
  '275': { q: 'autrium ', a: 'hjärtförmak' },
  '276': { q: 'caecum ', a: 'blindtarm' },
  '277': { q: 'cerebellum ', a: 'lillhjärnan' },
  '278': { q: 'cerebrum ', a: 'storhjärnan' },
  '279': { q: 'cranium ', a: 'skalle' },
  '280': { q: 'duodenum ', a: 'tolvfingertarm' },
  '281': { q: 'ileum ', a: 'nedre tunntarm' },
  '282': { q: 'jugulum ', a: 'halsgrop' },
  '283': { q: 'mediastinum ', a: 'mellanrummet mellan lungorna' },
  '284': { q: 'mesenterium ', a: 'tarmkäx' },
  '285': { q: 'myocardium ', a: 'hjärtmuskel' },
  '286': { q: 'pericardium ', a: 'hjärtsäck' },
  '287': { q: 'rectum ', a: 'ändtarm' },
  '288': { q: 'sacrum ', a: 'korsben' },
  '289': { q: 'scrotum ', a: 'pung' },
  '290': { q: 'sternum ', a: 'bröstben' },
  '291': { q: 'antrum ', a: 'litet hålrum, magsäckens nedersta del' },
  '292': { q: 'cavum ', a: 'hålrum' },
  '293': { q: 'cilium ', a: 'kort hår, flimmerhår' },
  '294': { q: 'hilium ', a: 'anslutningställe för kärl och nerver' },
  '295': { q: 'acidum ', a: 'syra' },
  '296': { q: 'bacterium ', a: 'bakterie' },
  '297': { q: 'concrementum ', a: 'stenbildning' },
  '298': { q: 'coagulum ', a: 'blodlever' },
  '299': { q: 'ferrum ', a: 'järn' },
  '300': { q: 'medicamentum ', a: 'läkemedel' },
  '301': { q: 'medium ', a: 'mitt, medel' },
  '302': { q: 'sputum ', a: 'upphostning' },
  '303': { q: 'suicidum ', a: 'självmord' },
  '304': { q: 'vitium ', a: 'defekt' },
  '305': { q: 'colon ', a: 'tjocktarm' },
  '306': { q: 'encephalon ', a: 'hjärna' },
  '307':
   { q: 'ganglion ',
     a: 'nervknuta, senknuta, ansvällning på ledkapseln' },
  '308': { q: 'olecranon ', a: 'armbågsutskott' },
  '309': { q: 'abductor ', a: 'frånförare' },
  '310': { q: 'adductur ', a: 'tillförare' },
  '311': { q: 'constrictor ', a: 'sammansnörare' },
  '312': { q: 'extensor ', a: '(ut) sträckare' },
  '313': { q: 'flexor ', a: 'böjare' },
  '314': { q: 'pronator ', a: 'inåtvridare' },
  '315': { q: 'supinator ', a: 'utåtvridare' },
  '316': { q: 'flour ', a: 'flytning' },
  '317': { q: 'humor ', a: 'vätska' },
  '318': { q: 'liquor ', a: 'vätska' },
  '319': { q: 'rigor ', a: 'stelhet' },
  '320': { q: 'stridor ', a: 'gnissel' },
  '321': { q: 'tremor ', a: 'darrning' },
  '322': { q: 'tumor ', a: 'svullnad, svulst' },
  '323': { q: 'turgor ', a: 'hudens normala ansvällning, elasticitet' },
  '324': { q: 'catheter ', a: 'kateter' },
  '325': { q: 'sphincter ', a: 'ringmuskel' },
  '326': { q: 'trochanter ', a: 'benutskott på övre lårbenet' },
  '327': { q: 'apex ', a: 'spets' },
  '328': { q: 'cortex ', a: 'bark' },
  '329': { q: 'finis ', a: 'slut' },
  '330': { q: 'penis ', a: 'penis' },
  '331': { q: 'testis ', a: 'testikel' },
  '332': { q: 'claudicatio ', a: 'hälta' },
  '333': { q: 'commotio ', a: '(hjärn) skakning' },
  '334': { q: 'contusio ', a: 'krosskada' },
  '335': { q: 'dislocatio ', a: 'felläge' },
  '336': { q: 'duratio ', a: 'varaktighet' },
  '337': { q: 'dysfynctio ', a: 'dålig funktion' },
  '338': { q: 'flexio ', a: 'böjning' },
  '339': { q: 'laceratio ', a: 'sönderslitning' },
  '340': { q: 'luxatio ', a: 'urledsvridning' },
  '341': { q: 'mictio ', a: 'urinering' },
  '342': { q: 'regio ', a: 'område' },
  '343': { q: 'respiratio ', a: 'andning' },
  '344': { q: 'suspicio ', a: 'misstanke' },
  '345': { q: 'lumbago ', a: 'ryggskott' },
  '346': { q: 'orgio ', a: 'ursprung, utgångspunkt' },
  '347': { q: 'vertigo ', a: 'yrsel, svindel' },
  '348': { q: 'appendix ', a: 'bihang' },
  '349': { q: 'cervix ', a: 'hals' },
  '350': { q: 'varix ', a: 'åderbråck' },
  '351': { q: 'larynx ', a: 'struphuvud' },
  '352': { q: 'pharynx ', a: 'svalg' },
  '353': { q: 'dens ', a: 'tand' },
  '354': { q: 'mens ', a: 'sinne' },
  '355': { q: 'mors ', a: 'död' },
  '356': { q: 'adipositas ', a: 'fetma' },
  '357': { q: 'obesitas ', a: 'fetma' },
  '358': { q: 'otitis ', a: 'öroninflammation' },
  '359': { q: 'sinuitis ', a: 'bihåleinflammation' },
  '360': { q: 'auris ', a: 'öra' },
  '361': { q: 'cutis ', a: 'hud' },
  '362': { q: 'pelvis ', a: 'bäcken' },
  '363': { q: 'anastomosis ', a: 'förbindelse mellan två kanaler' },
  '364': { q: 'cirrhosis ', a: 'skrumpning' },
  '365': { q: 'metastasis ', a: 'dottersvulst' },
  '366': { q: 'paresis ', a: 'förlamning' },
  '367': { q: 'stenosis ', a: 'förträngning' },
  '368': { q: 'corpus ', a: 'kropp' },
  '369': { q: 'pectus ', a: 'bröst' },
  '370': { q: 'tempus ', a: 'tid, tinning' },
  '371': { q: 'genus ', a: 'släkte' },
  '372': { q: 'latus ', a: 'sida' },
  '373': { q: 'ulcus ', a: 'sår av inre orsak' },
  '374': { q: 'abdomen ', a: 'buk' },
  '375': { q: 'foramen ', a: 'hål' },
  '376': { q: 'tentamen ', a: 'försök' },
  '377': { q: 'aneurysma ', a: 'pulsåderbråck' },
  '378': { q: 'carcinoma ', a: 'cancer i epitelvävnad' },
  '379': { q: 'eczema ', a: 'eksem' },
  '380': { q: 'exanthema ', a: 'hudutslag' },
  '381': { q: 'haematoma ', a: 'blodsvulst' },
  '382': { q: 'sarcoma ', a: 'elakartad cancer i bindväv' },
  '383': { q: 'trauma ', a: 'skada genom yttre våld' },
  '384': { q: 'carotis ', a: 'halspulsåder' },
  '385': { q: 'cor ', a: 'hjärta' },
  '386': { q: 'femur ', a: 'lårben' },
  '387': { q: 'glans ', a: 'ollon' },
  '388': { q: 'hepar ', a: 'lever' },
  '389': { q: 'iris ', a: 'regnbågshinna' },
  '390': { q: 'lien ', a: 'mjälte' },
  '391': { q: 'pancreas ', a: 'bukspottkörtel' },
  '392': { q: 'pus ', a: 'var' },
  '393': { q: 'ren ', a: 'njure' },
  '394': { q: 'splen ', a: 'mjälte' },
  '395': { q: 'tendo ', a: 'sena' },
  '396': { q: 'thorax ', a: 'bröstkorg' },
  '397': { q: 'vox ', a: 'röst' },
  '398': { q: 'farmakologi ', a: 'gift, läkemedel' },
  '399': { q: 'medicin ', a: 'läkemedel' },
  '400': { q: 'pharmaceutes ', a: 'giftblandare, apotekare' },
  '401': { q: 'farmaceut ', a: 'apotekare' },
  '402': { q: 'analgetika ', a: 'smärtstillande medel' },
  '403': { q: 'anestetika ', a: 'bedövningsmedel' },
  '404':
   { q: 'antiarytmika ',
     a: 'medel mot rubbningar i hjärtats rytm' },
  '405': { q: 'antibiotika ', a: 'medel mot ”bakteriernas liv”' },
  '406': { q: 'antidepressiva ', a: 'medel mot depression' },
  '407': { q: 'antiepileptika ', a: 'medel mot epilepsi' },
  '408': { q: 'antiflogistika ', a: 'medel mot inflammation' },
  '409': { q: 'antihypertensiva ', a: 'medel mot högt blodtryck' },
  '410': { q: 'antikoagulantia ', a: 'medel mot koagulation' },
  '411': { q: 'antipsykotika ', a: 'medel mot psykos' },
  '412': { q: 'antipyretika ', a: 'febernedsättande medel' },
  '413':
   { q: 'antiseptika ',
     a: 'bakteriedödande medel, medel mot (sår)infektion' },
  '414':
   { q: 'cytostatika ',
     a: 'cellhämmande medel som hindrar celldelning, cellgifter' },
  '415': { q: 'diuretika ', a: 'urindrivande medel' },
  '416': { q: 'hypnotika ', a: 'sömnmedel' },
  '417': { q: 'laxantia ', a: 'avföringsmedel' },
  '418':
   { q: 'narkotika ',
     a: 'bedövande och centralstimulerande medel' },
  '419': { q: 'sedativa ', a: 'lugnande medel' },
  '420': { q: 'adjuvans ', a: 'hjälpande' },
  '421': { q: 'anorexi ', a: 'aptitlöshet' },
  '422': { q: 'clearance ', a: 'rening' },
  '423':
   { q: 'complience ',
     a: 'medgörlighet (patientens följsamhet till läkarens ordination)' },
  '424': { q: 'depressiv ', a: 'nedtryckande, hämmande' },
  '425': { q: 'digitalisering ', a: 'hjärtbehandling' },
  '426': { q: 'funktionell ', a: 'utan påvisad fysiologisk orsak' },
  '427': { q: 'generisk ', a: 'namnet på läkemedlets aktiva substans' },
  '428':
   { q: 'generikum ',
     a: 'en typ av kopia av ett redan inregistrerat varumärke' },
  '429': { q: 'initial ', a: 'begynnelse- ' },
  '430': { q: 'interaktion ', a: 'påverkan emellan' },
  '431': { q: 'intermittent ', a: 'med mellanrum, regelbundet upprepat' },
  '432': { q: 'paradoxal ', a: 'skenbart orimlig, motsägelsefull' },
  '433': { q: 'placebo ', a: 'blindtablett utan verkan' },
  '434': { q: 'premedicinering ', a: ' medicinering före ett ingrepp' },
  '435':
   { q: 'regim ',
     a: 'föreskrifter för den sjukes levnadssätt och medicinering' },
  '436': { q: 'retard ', a: 'läkemedel som har fördröjd frisättning' },
  '437':
   { q: 'spektrum ',
     a: 'det verkningsområde som ett medel verkar mot' },
  '438':
   { q: 'synonym ',
     a: 'läkemedel med olika namn men med samma aktiva substans' },
  '439':
   { q: 'sätta ut',
     a: 'att sätta ut en given medicin betyder att upphöra med den' },
  '440': { q: 'etiologi ', a: 'av orsak' },
  '441': { q: 'patogenes ', a: 'vidare begrepp än etiologi (av orsak)' },
  '442':
   { q: 'endemi ',
     a: 'sjukdom som håller sig begränsad till ett visst område eller viss befolkning' },
  '443':
   { q: 'epidemi ',
     a: 'när en sjukdom eller sjukdomsframkallande beteende plötsligt ökar inom ett visst område' },
  '444':
   { q: 'incidens ',
     a: 'anger antalet eller andelen nya insjukanden under en viss tidsperiod' },
  '445':
   { q: 'prevalens ',
     a: 'anger antalet eller andelen sjuka vid en bestämd tidpunkt' },
  '446': { q: 'mortalitet ', a: 'andelen döda bland hela befolkningen' },
  '447':
   { q: 'letalitet ',
     a: 'ett mått på dödligheten bland dem som har en specifik sjukdom' },
  '448':
   { q: 'exacerbation/skov ',
     a: ' ett tillfälligt uppflammande av en sjukdm som i sig är av mer kronisk natur' },
  '449': { q: 'remission ', a: 'tillfällig förbättring' },
  '450':
   { q: 'progrediera ',
     a: 'om en sjukdom utvecklas och förvärras' },
  '451': { q: 'regrediera ', a: 'gå tillbaks' },
  '452':
   { q: 'kris ',
     a: 'sammanbrott, svår situation, dåligt eller livshotande tillstånd' },
  '453':
   { q: 'kritisk ',
     a: 'det som hör till en kris, ”som genast måste åtgärdas”' },
  '454':
   { q: 'systemisk ',
     a: 'en systemisk sjukdom är spridd i ett helt organsystem' },
  '455': { q: 'lokal ', a: 'på en plats' },
  '456': { q: 'inspektion ', a: 'granskning med ögonen' },
  '457': { q: 'auskultation ', a: 'avlyssna ' },
  '458': { q: 'palpation ', a: 'beröring med händerna' },
  '459':
   { q: 'perkussion ',
     a: 'en knackning med ett finger mot kroppsytan' },
  '460': { q: 'exspektans ', a: 'väntande, avvaktande' },
  '461': { q: 'profylaktisk ', a: 'förebyggande' },
  '462': { q: 'preventiv ', a: 'förekomma' },
  '463': { q: 'palliativ ', a: 'lindrande' },
  '464':
   { q: 'revidera ',
     a: 'ett sår tvättas rent och befrias från främmande material och död vävnad' },
  '465':
   { q: 'exision ',
     a: 'såret skärs ut och de skadade vävnaderna avlägsnas' },
  '466': { q: 'provcera ', a: 'framkalla' },
  '467': { q: 'indicerad ', a: 'motiverad, påkallad' },
  '468':
   { q: 'kontraindicerad ',
     a: 'behandlingen eller läkemedlet får inte ges' },
  '469': { q: 'Kirurgi ', a: 'operation' },
  '470': { q: 'Ortopedi ', a: 'ben, rörelseapparaten' },
  '471':
   { q: 'Anestesi och intensivvård ',
     a: 'narkos, allvarligt sjuka' },
  '472':
   { q: 'Obstetrik och gynekologi ',
     a: 'kirurgiska ingrepp i kvinnliga fortplantningsorgan, förlossning' },
  '473':
   { q: 'Öron- näsa- halssjukdomar ',
     a: 'öroninflammation, halsfluss, hörselnedsättning' },
  '474':
   { q: 'Ögonsjukdomar ',
     a: 'ögoninflammation, gluaktom (grön starr), katarakt (grå starr)' },
  '475':
   { q: 'Urologi ',
     a: 'urinorganen, prostatacancer, kateter, stomier, urinvägarna, njursten' },
  '476':
   { q: 'Plastikkirurgi ',
     a: ' ändrar och återställer felbildade eller förlorade, skadade och mindre vackra kroppsdelar, rekonstruktiv och kosmetisk kirurgi' },
  '477': { q: 'Kärlkirurgi ', a: 'blodkärl' },
  '478':
   { q: 'Handkirurgi ',
     a: 'senor, muskler, handens rörelsesjukdomar' },
  '479': { q: 'Kardiologi ', a: 'kärlen vid hjärtat (hjärtkärl)' },
  '480':
   { q: 'Endokrinologi och diabetologi ',
     a: 'hormoner, diabetes, sköldkörteln' },
  '481': { q: 'Lungsjukdomar ', a: 'kol, astma, lungemfysem' },
  '482': { q: 'Hematologi ', a: 'blodsjukdomar, blodbrist, anemi' },
  '483': { q: 'Allergologi ', a: 'allergier' },
  '484': { q: 'Geriatrik ', a: 'äldres sjukdomar, vård om äldre' },
  '485':
   { q: 'Neonatologi ',
     a: 'för tidigt födda, ”intensivvård för bebisar”' },
  '486': { q: 'Psykiatri ', a: 'psykiska sjukdomar' },
  '487':
   { q: 'Neurologi ',
     a: 'nervsystemet, signaler, domningar, rörelseförmåga, reflexer, misstänkt stroke' },
  '488': { q: 'Allmänmedicin ', a: 'vårdcentral (kan lite om mycket)' },
  '489': { q: 'Onkologi ', a: 'cancer, tumörer' },
  '490':
   { q: 'Infektionsmedicin ',
     a: 'virus, bakterier, smittbegränsa, vaccinationer' },
  '491':
   { q: 'Gynekologisk onkologi ',
     a: 'gynekologisk cancer (kvinnliga organen)' },
  '492':
   { q: 'Arbets- och miljömedicin ',
     a: 'ergonomi och yttre faktorer (förebyggande och ' },
  '493':
   { q: 'Hud- och könssjukdomar ',
     a: 'gonorré, malignt melanom, psoriasis' },
  '494':
   { q: 'Reumatologi ',
     a: 'smärta och sämre rörelseförmåga, reumatiod artrit, artros' },
  '495':
   { q: 'Akutsjukvård ',
     a: 'akuta, oplanerade patienter med sjukdomar eller skador som kräver omedelbar vårdinsat' },
  '496': { q: 'Smärtlindring ', a: '' },
  '497': { q: 'ad ', a: 'till, vid' },
  '498': { q: 'ante ', a: 'framför, före' },
  '499': { q: 'contra ', a: 'emot' },
  '500': { q: 'extra ', a: 'utanför' },
  '501': { q: 'infra ', a: 'nedanför' },
  '502': { q: 'inter ', a: 'emellan' },
  '503': { q: 'intra ', a: 'innanför, under (om tid)' },
  '504': { q: 'juxta ', a: 'invid' },
  '505': { q: 'per ', a: 'genom' },
  '506': { q: 'post ', a: 'efter' },
  '507': { q: 'propter ', a: 'på grund av' },
  '508': { q: 'supra ', a: 'ovanför' },
  '509': { q: 'ad mortem ', a: 'mot döden' },
  '510': { q: 'idem ', a: 'densamme, detsamma' },
  '511': { q: 'in vitro ', a: 'i glaskärl, provrör' },
  '512': { q: 'in vivo ', a: 'i det levande' },
  '513': { q: 'multus ', a: 'mången' },
  '514': { q: 'nullus ', a: 'ingen' } }


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function() {
  var database = __webpack_require__(0);

  var UNSEEN = 0;
  var FAILED = -1;
  var PASSED = 1;

  function Exercise(id, question, answer) {
    this.status = UNSEEN;
    this.id = id;
    this.question = question;
    this.answer = answer;

    this.unsee = function() {
      this.status = UNSEEN;  
    };

    this.pass = function() {
      this.status = PASSED; 
    };

    this.fail = function() {
      this.status = FAILED;    
    };
  }

  function ExerciseList() {
    this.exercises = [];

    this.isEmpty = function() {
      return this.exercises.length === 0;  
    };

    this.getAllByStatus = function(status) {
      return this.exercises.filter(function(exercise) {
        return exercise.status === status;  
      });
    };

    this.count = function(status) {
      if (status) {
        return this.getAllByStatus(status).length;
      }
      else {
        return this.exercises.length;  
      }
    };

    this.addExercise = function(exercise) {
      this.exercises.push(exercise);
      this.exercises.sort(function(i1, i2) {
         return i1.id - i2.id; 
      });
    };

    this.removeExercise = function(exercise) {
      var index = -1;
      this.exercises.find(function(item, i) {
        if (item.id === exercise.id) {
          index = i;
          return true;
        } 
      });

      if (index > -1) {
        this.exercises.splice(index, 1);   
      }
      else {
        throw new Error('Cannot remove exercise: not found');  
      }
    };

    this.getExercise = function(exercise) {
      return this.exercises.find(function(item) {
        return item.id === exercise.id; 
      });  
    };

    this.unseeExercise = function(exercise) {
      this.getExercise(exercise).unsee();
    };

    this.passExercise = function(exercise) {
      this.getExercise(exercise).pass();  
    };

    this.failExercise = function(exercise) {
      this.getExercise(exercise).fail();  
    };

    this.unseeAll = function() {
      this.exercises.forEach(function(exercise) {
        exercise.unsee(); 
      });
    };

    this.getStatus = function() {
      var unseenCount = 0;
      var passedCount = 0;
      var failedCount = 0;

      this.exercises.forEach(function(exercise) {
        switch (exercise.status) {
          case UNSEEN:
            unseenCount++;
            break;
          case PASSED:
            passedCount++;
            break;
          case FAILED:
            failedCount++;
            break;
        }  
      });

      return {
        unseen: unseenCount,
        passed: passedCount,
        failed: failedCount
      };
    };

    this.getRandomExercise = function(status) {
      var candidates = this.getAllByStatus(status);

      if (candidates.length > 0) {
        var randomIndex = Math.floor(Math.random() * candidates.length);  
        return candidates[randomIndex];
      }
      else {
        return false;
      }
    };

    this.forEach = function(fn) {
      return this.exercises.forEach(fn);  
    };
  }

  function StatusBar(exerciseList) {
    this.exerciseList = exerciseList;

    this.getStatus = function() {
      return this.exerciseList.getStatus();
    };
  }

  function StatusBarToggle(statusBars) {
    this.statusBars = statusBars;
    this.current = 0;

    this.toggle = function() {
      this.current = (this.current + 1) % this.statusBars.length;
    };

    this.getStatus = function() {
      return this.statusBars[this.current].getStatus();  
    };
  }

  function Vocable(onFinish) {
    this.exercises = new ExerciseList();
    this.combo = new ExerciseList();
    this.onFinish = onFinish;

    // populate exercises from database
    var keys = Object.keys(database);
    var that = this;

    keys.forEach(function(id) {
      var item = database[id];
      var question = item.q;
      var answer = item.a;

      that.exercises.addExercise(new Exercise(id, question, answer));
    });

    this.getAllExercises = function() {
      return this.exercises;  
    };

    this.getRandomExercise = function() {
      if (this.combo.isEmpty()) {
        this.initCombo();  
      }
      return this.combo.getRandomExercise(UNSEEN) || this.combo.getRandomExercise(FAILED);
    };

    this.initCombo = function() {
      var randomExercise = this.exercises.getRandomExercise(UNSEEN);
      this.combo.addExercise(randomExercise);
    };

    this.reset = function() {
      this.combo = new ExerciseList();
      this.exercises.unseeAll();
    };

    this.getStatus = function() {
      return this.exercises.getStatus();
    };

    this.getComboStatus = function() {
      return this.combo.getStatus();  
    };

    this.passExercise = function(exercise) {
      this.exercises.passExercise(exercise);  
      this.combo.removeExercise(exercise);

      if (this.combo.isEmpty()) {
        var passedCount = this.exercises.count(PASSED); 
        var totalCount = this.exercises.count();
        
        if (passedCount === totalCount) {
          return this.onFinish();  
        }

        var unseenList = new ExerciseList();
        unseenList.exercises = this.exercises.getAllByStatus(UNSEEN);
        var newComboCount = Math.min(passedCount, unseenList.count());

        for (var i = 0; i < newComboCount; ++i) {
          var unseenExercise = unseenList.getRandomExercise(UNSEEN);
          this.combo.addExercise(unseenExercise);  
          unseenList.removeExercise(unseenExercise);
        }

        var that = this;
        var passedExercises = this.exercises.getAllByStatus(PASSED);
        passedExercises.forEach(function(passedExercise) {
          passedExercise.unsee();
          that.combo.addExercise(passedExercise);  
        });
      }
      
      return this.combo.getRandomExercise(UNSEEN) || this.combo.getRandomExercise(FAILED); 
    };

    this.failExercise = function(exercise) {
      this.exercises.failExercise(exercise);
      this.combo.failExercise(exercise);

      return this.combo.getRandomExercise(UNSEEN) || this.combo.getRandomExercise(FAILED);
    };
  }

  function Button(buttonClass, iconClass, onClick) {
    var button = document.createElement('button'); 
    var icon = document.createElement('icon');

    button.setAttribute('type', 'button');
    button.setAttribute('class', buttonClass);
    icon.setAttribute('class', iconClass);
    button.appendChild(icon);
    button.onclick = onClick;

    return button;
  }

  function Page(options, vocable) {
    this.leftButton = options.leftButton;
    this.rightButton = options.rightButton;
    this.statusBars = options.statusBars;
    this.header = options.header;
    this.content = options.content;
    this.vocable = vocable;

    this.onLeftButtonClick = function() {
      console.log(this);  
    };

    this.onRightButtonClick = function() {
      console.log(this);  
    };

    this.onStatusBarClick = function() {
      var barToggle = this.statusBars.bars;

      barToggle.toggle();
      this.updateStatus();
    };

    this.statusBars.wrapper.onclick = this.onStatusBarClick.bind(this);

    this.updateStatus = function() {
      var status = this.statusBars.bars.getStatus();
      var bars = this.statusBars.wrapper.children;
      var successBar = bars[0];
      var failBar = bars[1];
      var unseenBar = bars[2];

      var total = status.unseen + status.passed + status.failed;
      var unseen = status.unseen;
      var passed = status.passed;
      var failed = status.failed;

      unseenBar.innerText = unseen;
      successBar.innerText = passed;
      failBar.innerText = failed;

      var unseenPerc = total ? Math.round(100 * unseen / total) : 0;
      var passedPerc = total ? Math.round(100 * passed / total) : 0;
      var failedPerc = total ? Math.round(100 * failed / total) : 0;
      var rest = unseenPerc + passedPerc + failedPerc - 100;

      if (rest !== 0) {
        if (unseenPerc === 0) {
          failedPerc -= rest;  
        }
        else {
          unseenPerc -= rest;  
        }
      }

      unseenBar.style.width = unseenPerc + '%';
      successBar.style.width = passedPerc + '%';
      failBar.style.width = failedPerc + '%';
    };

    this.showContent = function() {};
  }

  function ExercisesPage(options, vocable, onStart) {
    Page.call(this, options, vocable);
    this.onStart = onStart;

    this.onLeftButtonClick = function() {
      this.vocable.reset();  
      this.showContent();
      this.updateStatus();
    };

    this.onRightButtonClick = function() {
      this.onStart(this.vocable.getRandomExercise());
    };

    this.showContent = function() {
      this.header.innerHTML = '';
      this.content.innerHTML = '';

      // setup buttons
      this.leftButton.innerHTML = '';
      this.leftButton.appendChild(new Button(
        'btn btn-default', 
        'fa fa-repeat',
        this.onLeftButtonClick.bind(this)
      ));
      this.rightButton.innerHTML = '';
      this.rightButton.appendChild(new Button(
        'btn btn-default',
        'fa fa-random',
        this.onRightButtonClick.bind(this)
      ));

      // setup title
      var title = document.createElement('h1');
      title.innerHTML = 'Exercises';
      this.header.appendChild(title);

      // setup exercise bubbles
      var that = this;
      this.vocable.exercises.forEach(function(exercise) {
        var bubble = document.createElement('span');

        if (exercise.status === PASSED) {
          bubble.style.backgroundColor = '#5cb85c';  
        }
        if (exercise.status === FAILED) {
          bubble.style.backgroundColor = '#d9534f';  
        }

        bubble.className = 'table-item badge';
        bubble.innerHTML = exercise.id;
        bubble.onclick = function() {
          if (that.vocable.combo.isEmpty()) {
            that.vocable.combo.addExercise(exercise);  
          }
          that.onStart(exercise);  
        };
        that.content.appendChild(bubble);
      });
    };
  }

  function ExercisePage(options, vocable, onExit) {
    Page.call(this, options, vocable);  
    this.onExit = onExit;

    this.showContent = function(exercise) {
      var that = this;

      this.header.innerHTML = '';
      this.content.innerHTML = '';

      // setup buttons
      this.leftButton.innerHTML = '';
      this.leftButton.appendChild(new Button(
        'btn btn-danger', 
        'fa fa-thumbs-down',
        function() {
          that.showContent(that.vocable.failExercise(exercise));  
          that.updateStatus();
        }
      ));
      this.rightButton.innerHTML = '';
      this.rightButton.appendChild(new Button(
        'btn btn-success',
        'fa fa-thumbs-up',
        function() {
          that.showContent(that.vocable.passExercise(exercise)); 
          that.updateStatus();
        } 
      ));

      // setup title
      var container = document.createElement('p');
      var title = document.createElement('span');
      var exit = document.createElement('i');

      container.className = 'lead';
      exit.className = 'fa fa-chevron-left';
      title.innerHTML = 'Question ' + exercise.id;

      exit.onclick = function() {
        that.onExit(); 
      };

      container.appendChild(exit);
      container.appendChild(title);
      this.header.appendChild(container);

      // setup question and answer
      var question = document.createElement('h3');
      var answer = document.createElement('p');
      var toggleQA = Math.random() >= 0.5;

      if (toggleQA) {
        question.innerHTML = exercise.question;
        answer.innerHTML = exercise.answer;
      }
      else {
        question.innerHTML = exercise.answer;
        answer.innerHTML = exercise.question;
      }

      // make answer blurry at first
      answer.style.color = 'transparent';
      answer.style.textShadow = '0 0 5px rgba(0, 0, 0, 0.5)';

      // remove blur on click
      answer.onclick = function() {
        answer.style.color = 'black';
        answer.style.textShadow = 'none';
      };

      this.content.appendChild(question);
      this.content.appendChild(answer);
    };
  }

  ExercisesPage.prototype = Object.create(Page.prototype);
  ExercisePage.prototype = Object.create(Page.prototype);

  function init() {
    var vocable = new Vocable();
    var options = {
      leftButton: document.getElementById('leftButton'),
      rightButton: document.getElementById('rightButton'),
      statusBars: {
        wrapper: document.getElementById('statusBar'),
        bars: new StatusBarToggle([
          new StatusBar(vocable.exercises),
          new StatusBar(vocable.combo)
        ])
      },
      content: document.getElementById('content'),
      header: document.getElementById('header')
    };
    var exercisesPage = new ExercisesPage(options, vocable, function(exercise) {
      exercisePage.showContent(exercise);   
    });
    var exercisePage = new ExercisePage(options, vocable, function() {
      exercisesPage.showContent();  
    });

    exercisesPage.updateStatus();
    exercisesPage.showContent();
  }

  init();
})();


/***/ })
/******/ ]);