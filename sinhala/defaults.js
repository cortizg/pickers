var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Serif Sinhala WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "35";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'si' // language to use for examples
	factoryDefaults.uifont = 'Noto Serif Sinhala WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'sinhalapicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Sinhala character app'
	template.sample = "1 වන වගන්තිය සියලු මනුෂ්‍යයෝ නිදහස්ව උපත ලබා ඇත. ගරුත්වයෙන් හා අයිතිවාසිකම්වලින් සමාන වෙති."
	template.blocklocation= '/scripts/sinhala/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'sinhala'
	template.scriptcode = 'Sinh'




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Sinhalese text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Javanese text.", "code":"doTranscription('revTransliterate')"},

{"title":"Trans-<br/>scribe", "alt":"Convert Sinhalese text to a Latin transcription.", "code":"doTranscription('transcription')"},

{"title":"Sinhala<br/>to ISO", "alt":"Convert Sinhalese text to an ISO 15919 Latin transcription.", "code":"doTranscription('toISO15919')"},
]




var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Sinhala from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"ISO to Sinhala", "dataVar":"showISOCharMap", "dataLocn":"transcriptionPalette", "dataShortTitle":"I", "type":"palette", "initialCode":"setUpTypeAssist(false, isoCharacterMap, isoCharacterMap)", "desc":"Create Sinhala text from characters in the ISO transcription."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Sinhala from the keyboard via reverse transliteration."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]

