(function() {
	var s = prompt("テキスト");
	var c = [
		["(!|！)(\\?|？)", "interrobang_mark"], ["(!|！)", "exclamation_mark"], ["(\\?|？)", "question_mark"],
		["(\\)|）)", "kka"], ["(\\(|（)", "kkb"], ["\\+", "plus"],
		["、", "ten"], ["。", "maru"], ["…", "tententen"], ["ー", "prolong"], ["(〜|～)", "wave"],

		["い(ぃ|ｨ)", "yi"], ["い(ぇ|ｪ)", "ye"], ["うィ", "wu"], ["う(ぅ|ｩ)", "wu"], ["うぇ", "we"], ["うぉ", "wo"],
		["イ(ィ|ｨ)", "yi2"], ["イ(ェ|ｪ)", "ye2"], ["ウィ", "wi2"], ["ウ(ゥ|ｩ)", "wu2"], ["ウェ", "we2"], ["ウォ", "wo2"],

		["ゔ", "vu"], ["う(゙|゛|ﾞ)", "vu"],
		["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "o"],
		["ぁ", "la"], ["ぃ", "li"], ["ぅ", "lu"], ["ぇ", "le"], ["ぉ", "lo"],
		["か", "ka"], ["き", "ki"], ["く", "ku"], ["け", "ke"], ["こ", "ko"],
		["が", "ga"], ["ぎ", "gi"], ["ぐ", "gu"], ["げ", "ge"], ["ご", "go"],
		["さ", "sa"], ["し", "shi"], ["す", "su"], ["せ", "se"], ["そ", "so"],
		["ざ", "za"], ["じ", "zi"], ["ず", "zu"], ["ぜ", "ze"], ["ぞ", "zo"],
		["た", "ta"], ["ち", "ti"], ["つ", "tsu"], ["て", "te"], ["と", "to"],
		["っ", "ltsu"],
		["だ", "da"], ["ぢ", "di"], ["づ", "du"], ["で", "de"], ["ど", "do"],
		["な", "na"], ["に", "ni"], ["ぬ", "nu"], ["ね", "ne"], ["の", "no"],
		["は", "ha"], ["ひ", "hi"], ["ふ", "fu"], ["へ", "he"], ["ほ", "ho"],
		["ば", "ba"], ["び", "bi"], ["ぶ", "bu"], ["べ", "be"], ["ぼ", "bo"],
		["ぱ", "pa"], ["ぴ", "pi"], ["ぷ", "pu"], ["ぺ", "pe"], ["ぽ", "po"],
		["ま", "ma"], ["み", "mi"], ["む", "mu"], ["め", "me"], ["も", "mo"],
		["や", "ya"], ["𛀆", "yi"], ["ゆ", "yu"], ["𛀁", "ye"], ["よ", "yo"],
		["ゃ", "lya"], ["ゅ", "lyu"], ["ょ", "lyo"],
		["ら", "ra"], ["り", "ri"], ["る", "ru"], ["れ", "re"], ["ろ", "ro"],
		["わ", "wa"], ["ゐ", "wi"], ["𛄟", "wu"], ["ゑ", "we"], ["を", "wo"],
		["ん", "n"],
		["ア(゙|゛|ﾞ)", "a2d"], ["イ(゙|゛|ﾞ)", "i2d"], ["ヴ", "vu2"], ["エ(゙|゛|ﾞ)", "e2d"], ["オ(゙|゛|ﾞ)", "o2d"],
		["ア", "a2"], ["イ", "i2"], ["ウ", "u2"], ["エ", "e2"], ["オ", "o2"],
		["ァ", "xa2"], ["ィ", "xi2"], ["ゥ", "xu2"], ["ェ", "xe2"], ["ォ", "xo2"],
		["カ", "ka2"], ["キ", "ki2"], ["ク", "ku2"], ["ケ", "ke2"], ["コ", "ko2"],
		["ガ", "ga2"], ["ギ", "gi2"], ["グ", "gu2"], ["ゲ", "ge2"], ["ゴ", "go2"],
		["サ", "sa2"], ["シ", "si2"], ["ス", "su2"], ["セ", "se2"], ["ソ", "so2"],
		["ザ", "za2"], ["ジ", "zi2"], ["ズ", "zu2"], ["ゼ", "ze2"], ["ゾ", "zo2"],
		["タ", "ta2"], ["チ", "ti2"], ["ツ", "tu2"], ["テ", "te2"], ["ト", "to2"],
		["ッ", "xtu2"],
		["ダ", "da2"], ["ヂ", "di2"], ["ヅ", "du2"], ["デ", "de2"], ["ド", "do2"],
		["ナ", "na2"], ["ニ", "ni2"], ["ヌ", "nu2"], ["ネ", "ne2"], ["ノ", "no2"],
		["ハ", "ha2"], ["ヒ", "hi2"], ["フ", "hu2"], ["ヘ", "he2"], ["ホ", "ho2"],
		["バ", "ba2"], ["ビ", "bi2"], ["ブ", "bu2"], ["ベ", "be2"], ["ボ", "bo2"],
		["パ", "pa2"], ["ピ", "pi2"], ["プ", "pu2"], ["ペ", "pe2"], ["ポ", "po2"],
		["マ", "ma2"], ["ミ", "mi2"], ["ム", "mu2"], ["メ", "me2"], ["モ", "mo2"],
		["ヤ", "ya2"], ["𛄠", "yi2"], ["ユ", "yu2"], ["𛄡", "ye2"], ["ヨ", "yo2"],
		["ャ", "xya2"], ["ュ", "xyu2"], ["ョ", "xyo2"],
		["ラ", "ra2"], ["リ", "ri2"], ["ル", "ru2"], ["レ", "re2"], ["ロ", "ro2"],
		["ワ", "wa2"], ["ヰ", "wi2"], ["𛄢", "wu2"], ["ヱ", "we2"], ["ヲ", "wo2"],
		["ン", "n2"]
	];
	for (var i = 0; i < c.length; i++) {
		s = s.replace(new RegExp(c[i][0], "gu"), `:_${c[i][1]}:`);
	}
	var a = document.querySelector("textarea[data-cy-post-form-text]");
	a.value += s;
	a.dispatchEvent(new Event("input"));
})();