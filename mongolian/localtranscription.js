function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'toJSM') { return toJSM(str) }
	if (direction == 'toTranslit') { return toTranslit(str) }
	if (direction == 'cyrlToMong') { return cyrlToMong(str) }
	}
		



function transliterate (str) {

str = ' '+str

var strArray = [...str]
var exclusions = new Set(['(',')','[',']','.',' '])

for (i=0;i<strArray.length;i++) {
	if (exclusions.has(strArray[i])) continue
	if (! autoTranslitArray[strArray[i]]) continue
	re = new RegExp(strArray[i],'g')
	str = str.replace(re, autoTranslitArray[strArray[i]])
	}


return str.trim()
}




/*
function transliterate (str) {
str += ' '

str = str.replace(/\u180B/g, "¹")
str = str.replace(/\u180C/g, "²")
str = str.replace(/\u180D/g, "³")
str = str.replace(/\u180E/g, "·")
str = str.replace(/\u200C/g, "ˣ")
str = str.replace(/\u200D/g, "˖")
str = str.replace(/\u202F/g, "-")
str = str.replace(/numbers/g, "")
str = str.replace(/"/g, "")
str = str.replace(/᠀/g, "¶")
str = str.replace(/᠁/g, "…")
str = str.replace(/᠂/g, ",")
str = str.replace(/᠃/g, "\u002E")
str = str.replace(/᠄/g, ":")
str = str.replace(/᠅/g, "#")
str = str.replace(/᠊/g, "_")
str = str.replace(/᠐/g, "0")
str = str.replace(/᠑/g, "1")
str = str.replace(/᠒/g, "2")
str = str.replace(/᠓/g, "3")
str = str.replace(/᠔/g, "4")
str = str.replace(/᠕/g, "5")
str = str.replace(/᠖/g, "6")
str = str.replace(/᠗/g, "7")
str = str.replace(/᠘/g, "8")
str = str.replace(/᠙/g, "9")
str = str.replace(/ᠠ/g, "a")
str = str.replace(/ᠡ/g, "e")
str = str.replace(/ᠢ/g, "i")
str = str.replace(/ᠣ/g, "ɔ")
str = str.replace(/ᠤ/g, "ʊ")
str = str.replace(/ᠥ/g, "o")
str = str.replace(/ᠦ/g, "u")
str = str.replace(/ᠧ/g, "ə")
str = str.replace(/ᠨ/g, "n")
str = str.replace(/ᠩ/g, "ŋ")
str = str.replace(/ᠪ/g, "b")
str = str.replace(/ᠫ/g, "p")
str = str.replace(/ᠬ/g, "x")
str = str.replace(/ᠭ/g, "g")
str = str.replace(/ᠮ/g, "m")
str = str.replace(/ᠯ/g, "l")
str = str.replace(/ᠰ/g, "s")
str = str.replace(/ᠱ/g, "ʃ")
str = str.replace(/ᠲ/g, "t")
str = str.replace(/ᠳ/g, "d")
str = str.replace(/ᠴ/g, "č")
str = str.replace(/ᠵ/g, "ʤ")
str = str.replace(/ᠶ/g, "y")
str = str.replace(/ᠷ/g, "r")
str = str.replace(/ᠸ/g, "v")
str = str.replace(/ᠹ/g, "f")
str = str.replace(/ᠺ/g, "k̇")
str = str.replace(/ᠻ/g, "k̇")
str = str.replace(/ᠼ/g, "ʦ")
str = str.replace(/ᠽ/g, "ʣ")
str = str.replace(/ᠾ/g, "h")
str = str.replace(/ᠿ/g, "ʐ")
str = str.replace(/ᡀ/g, "lʰ")
str = str.replace(/ᡁ/g, "ʑ")
str = str.replace(/ᡂ/g, "ɕ")
str = str.replace(/ᡛ/g, "")
str = str.replace(/〈/g, "<")
str = str.replace(/〉/g, ">")
str = str.replace(/《/g, "{")
str = str.replace(/》/g, "}")
str = str.replace(/〔/g, "[")
str = str.replace(/〕/g, "]")

return str.trim()
}
*/


function OLDtransliterate (str) {

str += ' '
// specials that can't be generated automatically
str = str.replace(/\u202F/g, "˖")
str = str.replace(/\u180E/g, "·")
str = str.replace(/\u200C/g, "ᶻʷⁿʲ")
str = str.replace(/\u200D/g, "ᶻʷʲ")
str = str.replace(/\u{180B}/g, "\u{B9}")
str = str.replace(/\u{180C}/g, "\u{B2}")
str = str.replace(/\u{180D}/g, "\u{B3}")


str = str.replace(/᠁/g, "…")
str = str.replace(/᠁/g, "…")
str = str.replace(/᠂/g, ",")
str = str.replace(/᠂/g, ",")
str = str.replace(/᠃/g, ".")
str = str.replace(/᠃/g, ".")
str = str.replace(/᠄/g, ":")
str = str.replace(/᠊/g, "_")
str = str.replace(/᠊/g, "_")
str = str.replace(/ᠠ/g, "a")
str = str.replace(/ᠡ/g, "e")
str = str.replace(/ᠢ/g, "i")
str = str.replace(/ᠣ/g, "ɔ")
str = str.replace(/ᠤ/g, "ʊ")
str = str.replace(/ᠥ/g, "o")
str = str.replace(/ᠥ/g, "o")
str = str.replace(/ᠦ/g, "u")
str = str.replace(/ᠦ/g, "u")
str = str.replace(/ᠧ/g, "ə")
str = str.replace(/ᠧ/g, "ə")
str = str.replace(/ᠨ/g, "n")
str = str.replace(/ᠩ/g, "ŋ")
str = str.replace(/ᠩ/g, "ŋ")
str = str.replace(/ᠪ/g, "b")
str = str.replace(/ᠫ/g, "p")
str = str.replace(/ᠬ/g, "x")
str = str.replace(/ᠭ/g, "g")
str = str.replace(/ᠮ/g, "m")
str = str.replace(/ᠯ/g, "l")
str = str.replace(/ᠰ/g, "s")
str = str.replace(/ᠱ/g, "ʃ")
str = str.replace(/ᠱ/g, "ʃ")
str = str.replace(/ᠲ/g, "t")
str = str.replace(/ᠳ/g, "d")
str = str.replace(/ᠴ/g, "č")
str = str.replace(/ᠵ/g, "ʤ")
str = str.replace(/ᠵ/g, "ʤ")
str = str.replace(/ᠶ/g, "y")
str = str.replace(/ᠷ/g, "r")
str = str.replace(/ᠸ/g, "v")
str = str.replace(/ᠹ/g, "f")
str = str.replace(/ᠺ/g, "k̇")
str = str.replace(/ᠼ/g, "ʦ")
str = str.replace(/ᠼ/g, "ʦ")
str = str.replace(/ᠽ/g, "ʣ")
str = str.replace(/ᠾ/g, "h")
str = str.replace(/ᠿ/g, "ʐ")
str = str.replace(/ᡀ/g, "lʰ")
str = str.replace(/ᡁ/g, "ʑ")
str = str.replace(/ᡂ/g, "ɕ")

return str.trim()
}



function toJSM (str) {
str = str.normalize('NFC')+' '

str = str.replace(/\u180B/g, "¹")
str = str.replace(/\u180C/g, "²")
str = str.replace(/\u180D/g, "³")
str = str.replace(/\u180E/g, "·")
str = str.replace(/\u200C/g, "ˣ")
str = str.replace(/\u200D/g, "˖")
str = str.replace(/\u202F/g, "-")
str = str.replace(/᠀/g, "&")
str = str.replace(/᠁/g, "…")
str = str.replace(/᠂/g, ",")
str = str.replace(/᠃/g, ".")
str = str.replace(/᠄/g, ":")
str = str.replace(/᠅/g, "#")
str = str.replace(/᠊/g, "–")
str = str.replace(/᠐/g, "0")
str = str.replace(/᠑/g, "1")
str = str.replace(/᠒/g, "2")
str = str.replace(/᠓/g, "3")
str = str.replace(/᠔/g, "4")
str = str.replace(/᠕/g, "5")
str = str.replace(/᠖/g, "6")
str = str.replace(/᠗/g, "7")
str = str.replace(/᠘/g, "8")
str = str.replace(/᠙/g, "9")
str = str.replace(/ᠠ/g, "a")
str = str.replace(/ᠡ/g, "e")
str = str.replace(/ᠢ/g, "i")
str = str.replace(/ᠣ/g, "o")
str = str.replace(/ᠤ/g, "u")
str = str.replace(/ᠥ/g, "ö")
str = str.replace(/ᠦ/g, "ü")
str = str.replace(/ᠧ/g, "ë")
str = str.replace(/ᠨ/g, "n")
str = str.replace(/ᠩ/g, "ng")
str = str.replace(/ᠪ/g, "b")
str = str.replace(/ᠫ/g, "p")
str = str.replace(/ᠬ/g, "x")
str = str.replace(/ᠭ/g, "g")
str = str.replace(/ᠮ/g, "m")
str = str.replace(/ᠯ/g, "l")
str = str.replace(/ᠰ/g, "s")
str = str.replace(/ᠱ/g, "š")
str = str.replace(/ᠲ/g, "t")
str = str.replace(/ᠳ/g, "d")
str = str.replace(/ᠴ/g, "č")
str = str.replace(/ᠵ/g, "ǰ")
str = str.replace(/ᠶ/g, "y")
str = str.replace(/ᠷ/g, "r")
str = str.replace(/ᠸ/g, "w")
str = str.replace(/ᠹ/g, "f")
str = str.replace(/ᠺ/g, "k")
str = str.replace(/ᠻ/g, "ḳ")
str = str.replace(/ᠼ/g, "c")
str = str.replace(/ᠽ/g, "z")
str = str.replace(/ᠾ/g, "h")
str = str.replace(/ᠿ/g, "ž")
str = str.replace(/ᡀ/g, "lh")
str = str.replace(/ᡁ/g, "ẑ")
str = str.replace(/ᡂ/g, "ĉ")
str = str.replace(/ᡛ/g, "ń")
str = str.replace(/〈/g, "")
str = str.replace(/〉/g, "")
str = str.replace(/《/g, "")
str = str.replace(/》/g, "")
str = str.replace(/〔/g, "")
str = str.replace(/〕/g, "")

return str.trim()
}



function toTranslit (str) {
	str += '  '

str = str.replace(/ᠠ/g, "a")
str = str.replace(/ᠡ/g, "e")
str = str.replace(/ᠢ/g, "i")
str = str.replace(/ᠣ/g, "o")
str = str.replace(/ᠤ/g, "u")
str = str.replace(/ᠥ/g, "ö")
str = str.replace(/ᠦ/g, "ü")
str = str.replace(/ᠧ/g, "ē")



str = str.replace(/ᠨ/g, "n")
str = str.replace(/ᠩ/g, "ṅ")
str = str.replace(/ᠪ/g, "b")
str = str.replace(/ᠫ/g, "p")
str = str.replace(/ᠬ/g, "q")
str = str.replace(/ᠭ/g, "g")
str = str.replace(/ᠮ/g, "m")
str = str.replace(/ᠯ/g, "l")
str = str.replace(/ᠰ/g, "s")
str = str.replace(/ᠱ/g, "š")
str = str.replace(/ᠲ/g, "t")
str = str.replace(/ᠳ/g, "d")
str = str.replace(/ᠴ/g, "č")
str = str.replace(/ᠵ/g, "j")
str = str.replace(/ᠶ/g, "y")
str = str.replace(/ᠷ/g, "r")
str = str.replace(/ᠸ/g, "v")
str = str.replace(/ᠹ/g, "f")
str = str.replace(/ᠺ/g, "ḳ")
str = str.replace(/ᠼ/g, "c")
str = str.replace(/ᠽ/g, "z")
str = str.replace(/ᠾ/g, "h")
str = str.replace(/ᠿ/g, "ř")
str = str.replace(/ᡀ/g, "lh")
str = str.replace(/ᡁ/g, "zh")
str = str.replace(/ᡂ/g, "chi")

str = str.replace(/᠁/g, "…")
str = str.replace(/᠂/g, ",")
str = str.replace(/᠃/g, ".")
str = str.replace(/᠄/g, ":")

str = str.replace(/\u180B/g, "¹")
str = str.replace(/\u180C/g, "²")
str = str.replace(/\u180D/g, "³")
str = str.replace(/\u180E/g, "-")
str = str.replace(/\u202F/g, "·")

    return str.trim()
	}



function cyrlToMong (str) {
str += ' '

//str = str.replace(/нг/g, "ᠩ")
str = str.replace(/а/g, "ᠠ")
str = str.replace(/б/g, "ᠪ")
str = str.replace(/в/g, "ᠸ")
str = str.replace(/г/g, "ᠭ")
str = str.replace(/д/g, "ᠳ")
str = str.replace(/е/g, "ᠶ")
str = str.replace(/ж/g, "ᠵ")
str = str.replace(/з/g, "ᠵ")
str = str.replace(/и/g, "ᠢ")
str = str.replace(/й/g, "[ᠢ{ᠶ]")
str = str.replace(/й/g, "ᠶ")
str = str.replace(/к/g, "ᠺ")
str = str.replace(/л/g, "ᠯ")
str = str.replace(/м/g, "ᠮ")
str = str.replace(/н/g, "[ᠨ{ᠩ]")
str = str.replace(/о/g, "ᠣ")
str = str.replace(/п/g, "ᠫ")
str = str.replace(/р/g, "ᠷ")
str = str.replace(/с/g, "ᠰ")
str = str.replace(/т/g, "ᠲ")
str = str.replace(/у/g, "ᠤ")
str = str.replace(/ф/g, "ᠹ")
str = str.replace(/х/g, "ᠬ")
str = str.replace(/ц/g, "ᠴ")
str = str.replace(/ч/g, "ᠴ")
str = str.replace(/ш/g, "ᠱ")
str = str.replace(/ы/g, "ᠢ")
str = str.replace(/ь/g, "ᠢ")
str = str.replace(/э/g, "ᠧ")
str = str.replace(/ю/g, "ᠶ")
str = str.replace(/я/g, "ᠶ")
str = str.replace(/ё/g, "ᠶ")
str = str.replace(/є/g, "ᠡ")
str = str.replace(/ү/g, "ᠦ")
str = str.replace(/ө/g, "ᠥ")

	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	//str = str.replace(/¶/g,'')

return str.trim()
}

