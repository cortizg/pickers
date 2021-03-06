var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Serif Devanagari WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ks' // language to use for examples
	factoryDefaults.uifont = 'Noto Serif Devanagari WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "s\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'kashmiriPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Kashmiri (deva) character app'
	template.sample = "कऻशुर छि सऻन्य् माजि ज़्यव। असि पज़ि पनॖन्यन शुर्यन सॗत्य् ॳथ्य् ज़बऻन्य् मंज़ कथ करॖनय्।"
	template.blocklocation= 'devanagari'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'kashmiri'
	template.scriptcode = 'Deva'



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Kashmiri text to a latin transliteration.", "code":"doTranscription('transliterate')"},
{"title":"Transl<br/>++", "alt":"Convert Kashmiri text to a latin transliteration with vowels and other changes.", "code":"doTranscription('translitPlus')"},
//{"title":"Trans-<br/>scribe", "alt":"Convert hindi text to a latin transcription.", "code":"doTranscription('transcription')"},
//{"title":"Hindi<br/>to ISO", "alt":"Convert hindi text to a ISO 15919 transcription.", "code":"doTranscription('toISO15919')"},
//{"title":"ISO to<br/>Hindi", "alt":"Convert an ISO 15919 transcription to hindi text.", "code":"doTranscription('toDeva')"}
]



var pulldown = [
]



var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Kashmiri from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

//{"title":"ISO to Hindi", "dataVar":"showISOCharMap", "dataLocn":"transcriptionPalette", "dataShortTitle":"I", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(isoCharacterMap);makeKbdEventList(isoCharacterMap);", "desc":"Create XXXX text from characters in the XXXX transcription."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Kashmiri from the keyboard via reverse transliteration."},
]
