
function localInitialise () {
	}



var _h = {
'531': ['54D'],
"544": ['54D'],
"561": ['57A'],
'56F': ['587','576'],
"574": ['57D','574576','574565','57456B','57E576','57456D','57E'],
"574576": ['574',"57E576"],
"574565": ['574'],
"57456B": ['574',"57456D"],
"57456D": ['574',"57456B"],
"57E576": ['574','574576'],
'576': ['587','56F','57D'],
"57A": ['561'],
"57D": ['574','576','587','56F','57E'],
"57E": ['574','57D'],
'57F': ['583'],
'583': ['57F'],
'587': ['56F','576','57D'],
'57C': ['572', '580', '564', '56B', '578'],
'578': ['572', '580', '564', '56B', '57C'],
'572': ['564', '578'],
'580': ['56B', '57C', '578'],
'56B': ['580', '570', '578'],
'564': ['572', '578'],
'570': ['56B', '578'],
'548': ['54C'],
'54C': ['548'],
'535': ['567', '537'],
'565': ['567', '537'],
'567': ['535', '565'],
'537': ['565', '535'],
'536': ['541', '549'],
'549': ['541', '536'],
'541': ['536', '549'],
'53A': ['56E'],
'56A': ['56E'],
'56E': ['53A', '56A'],
'53F': ['54E'],
'54E': ['53F'],
'53E': ['543'],
'543': ['53E'],
'573': ['56E', '571'],
'545': ['551'],
'551': ['545'],
'540': ['577'],
'577': ['540'],
'54F': ['556'],
'556': ['54F'],


end: {}
}




var keyboarddef = [
"᠑|᠒|᠓|᠔|᠕|᠖|᠗|᠘|᠙|᠐",
"᠁,ᠴ|ᠸ,ᠣ|ᠧ,ᠡ|ᠿ,ᠷ|ᠲ|ᠶ|ᠦ|ᠢ|ᠥ|ᠫ",
"ᠠ|ᠰ|ᠳ|ᠹ|ᠭ|ᠾ,ᠬ|ᠵ|ᠻ,ᠺ|ᡀ,ᠯ|《,》",
"ᡁ,ᠽ|ᠱ|ᡂ,ᠼ|ᠤ|ᠪ|ᠩ,ᠨ|ᠮ|᠂|᠃"
]

var keyboardguide = [
"1,2,3,4,5,6,7,8,9,0,-,=",
"q,w,e,r,t,y,u,i,o,p,[,],",
"a,s,d,f,g,h,j,k,l,;,',\\",
"z,x,c,v,b,n,m,,.,/,"
]

var keyboardRowOffset = ['5px','20px','30px','50px']


function toggleShift (node) {
	if (node.className =='unshifted') {
		document.getElementById('lowercase').style.display = 'none'
		document.getElementById('uppercase').style.display = 'block'
		node.className = 'shifted'
		} 
	else {
		document.getElementById('lowercase').style.display = 'block'
		document.getElementById('uppercase').style.display = 'none'
		node.className = 'unshifted'
		}
	}

function toggleShift (node, LC, UC) {
	if (node.className =='unshifted') {
		document.getElementById(LC).style.display = 'none'
		document.getElementById(UC).style.display = 'block'
		node.className = 'shifted'
		} 
	else {
		document.getElementById(LC).style.display = 'block'
		document.getElementById(UC).style.display = 'none'
		node.className = 'unshifted'
		}
	}

function toggleShiftDefault (node) {
	var cells = document.getElementById('defaultpanel').querySelectorAll('span')
	if (node.className =='unshifted') {
		for (var i=0;i<cells.length;i++) cells[i].textContent = cells[i].textContent.toUpperCase()
		node.className = 'shifted'
		} 
	else {
		for (var i=0;i<cells.length;i++) cells[i].textContent = cells[i].textContent.toLowerCase()
		node.className = 'unshifted'
		}
	}

