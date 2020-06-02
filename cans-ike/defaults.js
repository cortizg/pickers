var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Canadian Aboriginal WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "35";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ike' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Canadian Aboriginal WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'ike'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Eastern Canadian Inuktitut character app'
	template.sample = "ᐃᓚᖓ 1. ᐃᓅᔪᓕᒫᑦ ᐊᓂᖅᑎᕆᔪᓕᒫᑦ ᐃᓅᓚᐅᕐᒪᑕ ᐃᓱᒪᕐᓱᕐᖢᑎᒃ ᐊᒻᒪᓗ ᐊᔾᔨᐅᖃᑎᒌᒃᖢᑎᒃ ᓂᕐᓱᐊᖑᓂᒃᑯᑦ ᐊᒻᒪᓗ ᐱᔪᓐᓇᐃᑎᑎᒍᑦ. ᐃᓱᖃᖅᑐᖁᑎᖃᕐᑎᑕᐅᕙᓕᕐᐳᑦ ᐱᔾᔪᑎᖃᕐᓂᒃᑯᑦ ᖃᑕᙳᑎᒌᑦᑎᐊᕆᐊᖃᕐᓂᒃᑯᓪᓗ."
	template.blocklocation= '/scripts/cans-ike/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'cans-ike'
	template.scriptcode = 'Cans'



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Inuktitut text to a Latin transliteration.", "code":"doTranscription('transliterate')"},

{"title":"Make<br/>vocab", "alt":"Expand to create a line for a vocab file.", "code":"input=getHighlightedText(document.getElementById('output')).split('|'); add(getVocab(input[0], input[1],input[2], transcribetoIPA(input[0])));document.getElementById('output').focus();"},

{"title":"⇨", "alt":"Convert a vocab sequence to example markup.", "code":"vocab2Example(getHighlightedText(document.getElementById('output')))"},

//{"title":"XXXXXXXXXX<br/>to XXXXXXXXXX", "alt":"XXXXXXXXXX.", "code":"doTranscription('XXXXXXXXXX')", "warning":"Still in development. Separate syllables before use."},
]



var pulldown = [
{"title":"Reverse transcription", "alt":"Convert Latin transliterated text to Inuktitut.", "code":"transcribe(getHighlightedText(document.getElementById('output')), 'revTransliterate')"},
]




var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Tifinagh from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},
]

