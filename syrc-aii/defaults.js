var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'East Syriac Adiabene WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "56";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'aii' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Syriac Eastern WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'aramaicPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Assyrian Neo-Aramaic character picker'
	template.sample = "ܐܸܢ ܦܵܝܫܝܼ ܒܘܼܓ̰ܪܹ̈ܐ، ܟܹܐ ܗܵܘܝܼ ܡܲܦܬܘܼܝܹܐ ܘܓܲܪܘܘܼܣܹܐ ܒܣܸܕܪܵܐ ܕܐܵܢ ܠܸܫܵܢܹ̈ܐ ܣܸܦܪ̈ܵܝܹܐ ܘܪܗܸܛܪ̈ܵܝܹܐ ܕܕܘܼܢܝܹܐ."
	template.sample = "ܟܠܲܝܗܝ ܐ݇ܢܵܫܹ̈ܐ ܦܝܼܫܹܐ ܝܢܵܐ ܒܸܪܝܵܐ ܚܹܐܪܹ̈ܐ ܘܫܵܘܝܸ̈ܐ ܒܐܝܼܩܵܪܵܐ ܘܲܒܙܸܕܩܹ̈ܐ. ܘܦܝܼܫܹܐ ܝܢܵܐ ܝܗܝܼܒܹܐ ܗܵܘܢܵܐ ܘܬܹܐܕܬܵܐ ܘܦܝܼܫܬܵܐ ܝܠܵܗ̇ ܣܒܝܼܪܬܵܐ ܡܸܢܲܝܗܝ ܕܦܵܠܚܝܼ ܚܲܕ ܥܲܡ ܗ̇ܘ ܐ݇ܚܹܪ݇ܢܵܐ ܒܲܚܕܵܐ ܪܘܼܚܵܐ ܕܐܲܚܘܼܬܵܐ."
	template.blocklocation= '/scripts/syriac/block'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = ' syc-aii'
	template.scriptcode = 'Syrc'
	template.cursive = true



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Assyrian text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
//{"title":"Trans-<br/>scribe", "alt":"Convert Assyrian text to a Latin transcription.", "code":"doTranscription('transcription')"},
//{"title":"Transcribe<br/>to IPA", "alt":"Convert Assyrian text to an *approximate* phonetic transcription.", "code":"doTranscription('toIPA')"},
]



var pulldown = [
]



var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Assyrian Neo-Aramaic from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Assyrian Neo-Aramaic from the keyboard via reverse transliteration."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]

