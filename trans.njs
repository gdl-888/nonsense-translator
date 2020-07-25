function printf(...args) {
	const fmt = args[0];
	
    var retval = '';
    for(var i=0, j=1; i<fmt.length; ) {
        if(fmt[i] == '%') {
            switch(fmt[i+1]) {
				case '%':
					retval += '%';
				break; case 'd':
					const n = args[j++];
					
					if(typeof(n) == 'string') {
						retval += n.charCodeAt(0);
					} else {
						retval += Math.floor(n);
					}
				break; case 's':
					retval += String(args[j++]);
				break; case 'c':
					const c = args[j++];
					
					if(typeof(c) == 'number') {
						retval += String.fromCharCode(c);
					} else {
						retval += c;
					}
				break; case 'g':
					retval += Math.round(args[j++]);
				break; case 'f':
					retval += args[j++];
				break; case 'o':
					retval += args[j++].toString(8);
				break; case 'x':
					retval += args[j++].toString(16);
				break; case 'X':
					retval += args[j++].toString(16).toUpperCase();
			}
			
			i += 2;
		} else {
			retval += fmt[i];
			i++;
		}
	}
	
	process.stdout.write(retval);
	
	return 0;
}

function prt(p) {
	process.stdout.write(p);
}

const dictionary = {
	'가': 'go',
	'다': 'all',
	'마': 'yam',
	'바': 'bar',
	'사': 'buy',
	'아': 'aha',
	'자': 'ruler',
	'차': 'car',
	'카': 'car',
	'타': 'ride',
	'파': 'green onion',
	'하': 'ha',  // 웃음
	'진': 'real',
	'짜': 'salty',
	'고': 'high',
	'양': 'sheep',
	'이': 'tooth',
	'너': 'you',
	'무': 'none',
	'그': 'this',
	'지': 'itself',  // 지가 어쩌구 저쩌구
	'같': 'same',
	'애': 'kid',
	'강': 'river',
	'인': 'human',
	'터': 'place',  // 쉼터 일터 배움터 등등
	'넷': 'net',
	'볼': 'cheek',
	'륨': 'ume',  // volume. 칼륨은 -ium이지만..
	'폴': 'poll',
	'더': 'more',
	'배': 'boat',
	'도': 'too',
	'좌': 'left',
	'우': 'right',
	'발': 'foot',
	'코': 'nose',
	'니': 'your',
	'뒷': 'back',
	'뒤': 'back',
	'앞': 'front',
	'베': 'B',
	'란': 'egg',
	'다': 'all',
	'에': 'at',
	'당': 'sugar',
	'장': 'field',
	'들': 's',
	'어': 'ok',
	'가': 'go',
	'포': 'artillery',
	'플': 'play',
	'러': 'er',
	'나': 'me',
	'무': 'none',
	'아': 'aha',
	'래': 'rae',
	'늘': 'always',
	'지': 'itself',
	'금': 'gold',
	'처': 'wife',
	'럼': 'rum',
	'별': 'star',
	'은': 'silver',
	'내': 'my',
	'가': 'go',
	'슴': 'bosom',
	'에': 'at',
	'미': 'beautiful',  // 美
	'스': 'lovely',
	'터': 'place',
	'굿': 'good',
	'바': 'bar',
	'이': 'tooth',
	'혹': 'lump',
	'시': 'city',
	'봤': 'seen',
	'드': 'de',
	'라': 'la',
	'마': 'yam',
	'사': 'buy',
	'랑': 'with',
	'했': 'did',
	'나': 'me',
	'봐': 'see',
	'그': 'this',
	'언': 'word',
	'젠': 'zen',
	'가': 'go',
	'나': 'me',
	'를': 'to',
	'위': 'up',
	'해': 'sun',
	'꽃': 'flower',
	'다': 'all',
	'발': 'foot',
	'을': 'second',
	'전': 'old',
	'해': 'sun',
	'주': 'week',
	'던': 'done',
	'그': 'this',
	'소': 'cow',
	'녀': 'female',
	'단': 'only',
	'발': 'foot',
	'머': 'more',
	'리': '0.001',
	'이': 'tooth',
	'브': 'eve',
	'의': 'of',
	'경': '10,000,000,000,000,000',
	'고': 'high',
	'아': 'aha',
	'로': 'road',
	'하': 'ha',
	'목': 'neck',
	'로': 'road',
	'주': 'week',
	'점': 'point',
	'일': 'work',
	'과': 'subject',
	'이': 'tooth',
	'분': 'minute',
	'의': 'of',
	'일': 'work',
	'작': 'write',
	'은': 'silver',
	'기': 'period',
	'다': 'all',
	'림': 'bush',
	'사': 'buy',
	'랑': 'with',
	'은': 'silver',
	'향': 'scent',
	'기': 'period',
	'를': 'to',
	'남': 'other',
	'기': 'period',
	'고': 'high',
	'사': 'buy',
	'랑': 'with',
	'을': 'second',
	'쓰': 'bitter',
	'려': 'swing',  // 呂
	'거': 'wagon',  // 車
	'든': 'all',
	'연': 'kite',
	'필': 'require',
	'로': 'road',
	'쓰': 'bitter',
	'세': 'age',
	'요': 'yo'
};

printf("초월 번역기에 오신것을 환영합니다! \n\n");

const readline = require('readline');

function recursive() {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	
	rl.question('>>> ', answer => {
		var ret = '';
		
		for(chr of answer) {
			if(chr === ' ') continue;
			if(chr.match(/(?:[^ㄱ-힣])/)) ret += chr + ' ';
			else {
				ret += dictionary[chr] + ' ';
			}
		}
		
		printf("<<< 번역하면 %s입니다! \n\n", ret);
	
		rl.close();
	
		recursive();
	});
}

recursive();