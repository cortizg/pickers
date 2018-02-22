function localtranscribe (direction, str) {
	
	if (direction == 'toLatin') { return toLatin(str) }
	if (direction == 'toLatinTranslit') { return toLatinTranslit(str) }
	}
		
		

function toLatin (str) {
	// transcribes mandaic text into an Daniels/Bright transcription, trying to figure out vowels
	
		
	// add initial space so that space-based rules work
	str = ' '+str+' '
	
	// collect a list of punctuation, in order
	var punctuationSet = /!|\(|\)|\-|\.|:|\[|\]|\*|\/|\\|،|؟|«|»|‹|›| /g
	var punctuationList = str.match(punctuationSet)
	str = str.replace(punctuationSet,' ')
	
	// handle consonant duplication
	var re = /(.)([\u0859]?)\u085B/g
	str = str.replace(re,'$1$1$2')  // shadda
	
	str = str.replace(/\u0622/g,'ā') 
	
	// handle vowels
	str = str.replace(/ \u084F\u0845/g,' u') // initial in ushenna 
	str = str.replace(/ \u084F\u0849/g,' i') // initial in aksa 
	// str = str.replace(/\u0849\u0840 /g,'i ') // final aksa+halqa 

    str = str.replace(/\u0840\u085A/g,'a') // halqa + vocalisation mark
	str = str.replace(/\u0849\u085A/g,'e') // aksa + vocalisation mark
	str = str.replace(/\u0845\u085A/g,'o') // ushenna + vocalisation mark
    
    str = str.replace(/\u0840/g,'a') // halqa 
	str = str.replace(/\u0849/g,'[i{e{y]') // aksa 
	str = str.replace(/\u0845/g,'[u{o{w]') // ushenna 
	str = str.replace(/\u084F/g,'e') // in 

	
	// consonants
    str = str.replace(/\u0841/g, "b")
    str = str.replace(/\u0842\u0859/g, "\u03B3")
    str = str.replace(/\u0842/g, "g")
    str = str.replace(/\u0843\u0859/g, "\u03B4")
    str = str.replace(/\u0843/g, "d")
    str = str.replace(/\u0844\u0859/g, "\u1E25")
    str = str.replace(/\u0844/g, "h")
    str = str.replace(/\u0846/g, "z")
    str = str.replace(/\u0847/g, "\u1E96")
    str = str.replace(/\u0848\u0859/g, "\u1E93")
    str = str.replace(/\u0848/g, "\u1E6D")
    str = str.replace(/\u084A\u0859/g, "\u03C7")
    str = str.replace(/\u084A/g, "k")
    str = str.replace(/\u084B/g, "l")
    str = str.replace(/\u084C/g, "m")
    str = str.replace(/\u084D/g, "n")
    str = str.replace(/\u084E/g, "s")
    str = str.replace(/\u084F/g, "\u02BF")
    str = str.replace(/\u0850\u0859/g, "f")
    str = str.replace(/\u0850/g, "p")
    str = str.replace(/\u0851\u0859/g, "\u017E")
    str = str.replace(/\u0851/g, "\u1E63")
    str = str.replace(/\u0852/g, "q")
    str = str.replace(/\u0853/g, "r")
    str = str.replace(/\u0854\u0859/g, "\u010D,\u01F0")
    str = str.replace(/\u0854/g, "\u0161")
    str = str.replace(/\u0855\u0859/g, "\u03B8")
    str = str.replace(/\u0855/g, "t")
    str = str.replace(/\u0856/g, "\u1E0F")
    str = str.replace(/\u0857/g, "k\u1E0F")

    // numbers
	str = str.replace(/۱/g,'1') 
	str = str.replace(/۲/g,'2') 
	str = str.replace(/۳/g,'3') 
	str = str.replace(/۴/g,'4') 
	str = str.replace(/۵/g,'5') 
	str = str.replace(/۶/g,'6')
	str = str.replace(/۷/g,'7')
	str = str.replace(/۸/g,'8')
	str = str.replace(/۹/g,'9')
	str = str.replace(/۰/g,'0')
	
    // punctuation
	str = str.replace(/࡞/g,'&bull;')
    
	str = str.replace(/٪/g,'%')
	str = str.replace(/؟/g,'?')
	str = str.replace(/؛/g,'\u002C')
	str = str.replace(/،/g,',')
	str = str.replace(/؛/g,';')
	str = str.replace(/۔/g,'.')
	str = str.replace(/ـ/g,'')

	

	str = str.replace(/ʹ/g,'')
	// replace punctuation
	var ptr = 0
	var out = ''
	for (var c=0;c<str.length;c++) {
		if (str.charAt(c) == ' ') out += punctuationList[ptr++]
		else out += str.charAt(c)
		}
	str = out
	
	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	//str = str.replace(/¶/g,'')


	return str.trim()
	}
		
		

function toLatinTranslit (str) {
	// transliterates mandaic text into an Daniels/Bright transcription
	
		
	// add initial space so that space-based rules work
	str = ' '+str+' '
	
	// collect a list of punctuation, in order
	var punctuationSet = /!|\(|\)|\-|\.|:|\[|\]|\*|\/|\\|،|؟|«|»|‹|›| /g
	var punctuationList = str.match(punctuationSet)
	str = str.replace(punctuationSet,' ')
	
	// handle consonant duplication
	str = str.replace(/\u085B/,'ᵚ')  // shadda
		
	// handle vowels
    str = str.replace(/\u0840\u085A/g,'a') // halqa + vocalisation mark
	str = str.replace(/\u0849\u085A/g,'e') // aksa + vocalisation mark
	str = str.replace(/\u0845\u085A/g,'o') // ushenna + vocalisation mark
    
    str = str.replace(/\u0840/g,'ā') // halqa 
	str = str.replace(/\u0849/g,'i') // aksa 
	str = str.replace(/\u0845/g,'u') // ushenna 
	str = str.replace(/\u084F/g,'ʿ') // in 

	
	// consonants
    str = str.replace(/\u0841/g, "b")
    str = str.replace(/\u0842\u0859/g, "\u03B3")
    str = str.replace(/\u0842/g, "g")
    str = str.replace(/\u0843\u0859/g, "\u03B4")
    str = str.replace(/\u0843/g, "d")
    str = str.replace(/\u0844\u0859/g, "\u1E25")
    str = str.replace(/\u0844/g, "h")
    str = str.replace(/\u0846/g, "z")
    str = str.replace(/\u0847/g, "\u1E96")
    str = str.replace(/\u0848\u0859/g, "\u1E93")
    str = str.replace(/\u0848/g, "\u1E6D")
    str = str.replace(/\u084A\u0859/g, "\u03C7")
    str = str.replace(/\u084A/g, "k")
    str = str.replace(/\u084B/g, "l")
    str = str.replace(/\u084C/g, "m")
    str = str.replace(/\u084D/g, "n")
    str = str.replace(/\u084E/g, "s")
    str = str.replace(/\u084F/g, "\u02BF")
    str = str.replace(/\u0850\u0859/g, "f")
    str = str.replace(/\u0850/g, "p")
    str = str.replace(/\u0851\u0859/g, "\u017E")
    str = str.replace(/\u0851/g, "\u1E63")
    str = str.replace(/\u0852/g, "q")
    str = str.replace(/\u0853/g, "r")
    str = str.replace(/\u0854\u0859/g, "\u010D,\u01F0")
    str = str.replace(/\u0854/g, "\u0161")
    str = str.replace(/\u0855\u0859/g, "\u03B8")
    str = str.replace(/\u0855/g, "t")
    str = str.replace(/\u0856/g, "\u1E0F")
    str = str.replace(/\u0857/g, "k\u1E0F")

    // numbers
	str = str.replace(/۱/g,'1') 
	str = str.replace(/۲/g,'2') 
	str = str.replace(/۳/g,'3') 
	str = str.replace(/۴/g,'4') 
	str = str.replace(/۵/g,'5') 
	str = str.replace(/۶/g,'6')
	str = str.replace(/۷/g,'7')
	str = str.replace(/۸/g,'8')
	str = str.replace(/۹/g,'9')
	str = str.replace(/۰/g,'0')
	
    // punctuation
	str = str.replace(/࡞/g,'&bull;')
    
	str = str.replace(/٪/g,'%')
	str = str.replace(/؟/g,'?')
	str = str.replace(/؛/g,'\u002C')
	str = str.replace(/،/g,',')
	str = str.replace(/؛/g,';')
	str = str.replace(/۔/g,'.')
	str = str.replace(/ـ/g,'')

	

	str = str.replace(/ʹ/g,'')
	// replace punctuation
	var ptr = 0
	var out = ''
	for (var c=0;c<str.length;c++) {
		if (str.charAt(c) == ' ') out += punctuationList[ptr++]
		else out += str.charAt(c)
		}
	str = out
	
	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	//str = str.replace(/¶/g,'')


	return str.trim()
	}






