var plist = [
    { tag:'adlm', name:'Adlam', url:'adlm/' },
    { tag:'arab', name:'Arabic', url:'arabic/' },
    { tag:'arab', name:'All&nbsp;Arabic', url:'arabicblock/' },
    { tag:'syrc', name:'Assyrian&nbsp;Neo-Aramaic', url:'aramaic/' },
    { tag:'armn', name:'Armenian', url:'armenian/' },
    { tag:'bali', name:'Balinese', url:'balinese/' },
    { tag:'bass', name:'Bassa Vah', url:'bass/' },
    { tag:'beng', name:'Bengali', url:'bengali/' },
    { tag:'bugi', name:'Buginese', url:'buginese/' },
    { tag:'mymr', name:'Burmese', url:'burmese/' },
    { tag:'cher', name:'Cherokee', url:'cherokee/' },
    { tag:'cyrl', name:'Cyrillic', url:'cyrillic/' },
    { tag:'deva', name:'Devanagari', url:'devanagari/' },
    { tag:'egyp', name:'Egyptian&nbsp;hieroglyphs', url:'egyptian/' },
    { tag:'ethi', name:'Ethiopic', url:'ethiopic/' },
    { tag:'geor', name:'Georgian', url:'georgian/' },
    { tag:'grek', name:'Greek', url:'greek/' },
    { tag:'gujr', name:'Gujarati', url:'gujarati/' },
    { tag:'guru', name:'Gurmukhi', url:'gurmukhi/' },
    { tag:'arab', name:'Hausa (ajami)', url:'arab-ha/' },
    { tag:'latn', name:'Hausa (boko)', url:'latn-ha/' },
    { tag:'hebr', name:'Hebrew', url:'hebrew/' },
    { tag:'deva', name:'Hindi', url:'hindi/' },
    { tag:'latn', name:'IPA', url:'ipa/' },
    { tag:'latn', name:'IPA&nbsp;2', url:'ipa2/' },
    { tag:'latn', name:'IPA&nbsp;3', url:'ipa3/' },
    { tag:'java', name:'Javanese', url:'javanese/' },
    { tag:'deva', name:'Kashmiri&nbsp;(deva)', url:'kashmiri/' },
    { tag:'arab', name:'Kashmiri&nbsp;(arab)', url:'kashmiria/' },
    { tag:'khmr', name:'Khmer', url:'khmer/' },
    { tag:'laoo', name:'Lao', url:'lao/' },
    { tag:'latn', name:'Latin&nbsp;&amp;&nbsp;diacritics', url:'latin/' },
    { tag:'lisu', name:'Lisu (Fraser script)', url:'lisu/' },
    { tag:'maka', name:'Makasar', url:'makasar/' },
    { tag:'mlym', name:'Malayalam', url:'malayalam/' },
    { tag:'mand', name:'Mandaic', url:'mandaic/' },
    { tag:'mong', name:'Mongolian', url:'mongolian/' },
    { tag:'tfng', name:'Neo-tifinagh', url:'neotifinagh/' },
    { tag:'talu', name:'New&nbsp;Tai&nbsp;Lue', url:'newtailue/' },
    { tag:'nkoo', name:"N'Ko", url:'nko/' },
    { tag:'lana', name:'Northern&nbsp;Thai', url:'lana-nod/' },
    { tag:'latn', name:'Old&nbsp;English', url:'oldenglish/' },
    { tag:'latn', name:'Old&nbsp;Norse', url:'oldnorse/' },
    { tag:'latn', name:'Pan-African Latin', url:'latn-afr/' },
    { tag:'arab', name:'Pan-African Ajami', url:'arab-afr/' },
    { tag:'arab', name:'Persian', url:'persian/' },
    { tag:'runr', name:'Runic', url:'runic/' },
    { tag:'cyrl', name:'Russian', url:'russian/' },
    { tag:'mymr', name:'Shan', url:'shan/' },
    { tag:'sinh', name:'Sinhala', url:'sinhala/' },
    { tag:'sund', name:'Sundanese', url:'sundanese/' },
    { tag:'syrc', name:'Syriac', url:'syriac/' },
    { tag:'lana', name:'Tai&nbsp;Khün', url:'taikhuen/' },
    { tag:'tale', name:'Tai&nbsp;Le', url:'taile/' },
    { tag:'lana', name:'Tai&nbsp;Tham', url:'taitham/' },
    { tag:'tavt', name:'Tai&nbsp;Viet', url:'taiviet/' },
    { tag:'taml', name:'Tamil', url:'tamil/' },
    { tag:'thaa', name:'Thaana', url:'thaana/' },
    { tag:'thai', name:'Thai', url:'thai/' },
    { tag:'tibt', name:'Tibetan', url:'tibetan/' },
    { tag:'tfng', name:'Tifinagh ', url:'tifinagh/' },
    { tag:'latn', name:'Tłı̨chǫ&nbsp;(Dogrib)', url:'tlicho/' },
    { tag:'arab', name:'Uighur', url:'uighur/' },
    { tag:'arab', name:'Urdu', url:'urdu/' },
    { tag:'vaii', name:'Vai', url:'vai/' },
    { tag:'latn', name:'Vietnamese', url:'vietnamese/' },
]



var plistByRegion = {
	'Africa':[
			  ['Adlam', 'adlm/'],
			  ['Bassa Vah', 'bass/'],
			  ['Egyptian&nbsp;hieroglyphs', 'egyptian/'],
			  ['Ethiopic', 'ethiopic/'],
			  ['Hausa (boko)', 'latn-ha/'],
			  ['Hausa (ajami)', 'arab-ha/'],
			  ["N’Ko", 'nko/'],
			  ['Neotifinagh', 'neotifinagh/'],
			  ['Pan-African&nbsp;Latin', 'latn-afr/'],
			  ['Pan-African&nbsp;Ajami', 'arab-afr/'],
			  ['Tifinagh', 'tifinagh/'],
			  ['Vai', 'vai/']
			  ],
	'Europe':[
			  ['Armenian','armenian/'],
			  ['Cyrillic', 'cyrillic/'],
			  ['Georgian', 'georgian/'],
			  ['Greek', 'greek/'],
			  ['IPA', 'ipa/'],
			  ['IPA&nbsp;2', 'ipa2/'],
			  ['IPA&nbsp;3', 'ipa3/'],
			  ['Latin&nbsp;&amp;&nbsp;diacritics', 'latin/'],
			  ['Old&nbsp;English', 'oldenglish/'],
			  ['Old&nbsp;Norse', 'oldnorse/'],
			  ['Runic', 'runic/'],
			  ['Russian', 'russian/'],
			  ],
	'West&nbsp;Asia':[
			  ['Arabic','arabic/'],
			  ['All Arabic','arabicblock/'],
			  ['Assyrian&nbsp;Neo-Aramaic', 'aramaic/'],
			  ['Hebrew', 'hebrew/'],
			  ['Mandaic', 'mandaic/'],
			  ['Persian', 'persian/'],
			  ['Syriac', 'syriac/']
			  ],
	'Central&nbsp;Asia':[
			  ['Tibetan', 'tibetan/'],
			  ['Uighur', 'uighur/']
			  ],
	'East&nbsp;Asia':[
			    ['Lisu (Fraser script)', 'lisu/'],
			    ['Mongolian', 'mongolian/']
			    ],
	'South&nbsp;Asia':[
			  ['Bengali', 'bengali/'],
			  ['Devanagari', 'devanagari/'],
			  ['Gujarati', 'gujarati/'],
			  ['Gurmukhi', 'gurmukhi/'],
			  ['Hindi', 'hindi/'],
			  ['Kashmiri&nbsp;(arab)', 'kashmiria/'],
			  ['Kashmiri&nbsp;(deva)', 'kashmiri'],
			  ['Malayalam', 'malayalam'],
			  ['Sinhala', 'sinhala/'],
			  ['Tamil', 'tamil/'],
			  ['Thaana/Dhivehi', 'thaana/'],
			  ['Urdu', 'urdu/']
			  ],
	'SE&nbsp;Asia':[
			   ['Burmese', 'burmese/'],
			   ['Khmer', 'khmer/'],
			   ['Lao', 'lao/'],
			   ['New&nbsp;Tai&nbsp;Lü', 'newtailue/'],
			   ['Northern&nbsp;Thai', 'lana-nod/'],
			   ['Shan', 'shan/'],
			   ['Tai&nbsp;Khün', 'taikhuen/'],
			   ['Tai&nbsp;Le', 'taile/'],
			   ['Tai&nbsp;Tham', 'taitham/'],
			   ['Tai&nbsp;Viet', 'taiviet/'],
			   ['Thai', 'thai/'],
			   ['Vietnamese', 'vietnamese/']
			   ],
	'MSE Asia':[
			   ['Balinese', 'balinese/'],
			   ['Buginese', 'buginese/'],
			   ['Javanese', 'javanese/'],
			   ['Makasar', 'makasar/'],
			   ['Sundanese', 'sundanese/']
			   ],
	'Americas':[
				['Cherokee', 'cherokee/'],
			    ['Tłı̨chǫ&nbsp;(Dogrib)', 'tlicho/']
			    ]
	}
