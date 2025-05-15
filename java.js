console.log('Loaded')

function Hangle(text) {
  const CHOSUNG_LIST = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ',
                        'ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
  const JUNGSUNG_LIST = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ',
                         'ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
  const JONGSUNG_LIST = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ',
                         'ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ',
                         'ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];

  const COMPLEX_JUNGSUNG_MAP = {
    'ㅘ': ['ㅗ', 'ㅏ'],
    'ㅙ': ['ㅗ', 'ㅐ'],
    'ㅚ': ['ㅗ', 'ㅣ'],
    'ㅝ': ['ㅜ', 'ㅓ'],
    'ㅞ': ['ㅜ', 'ㅔ'],
    'ㅟ': ['ㅜ', 'ㅣ'],
    'ㅢ': ['ㅡ', 'ㅣ'],
  };

  const AC_BASE = 0xAC00;
  const JUNGSUNG_COUNT = 21;
  const JONGSUNG_COUNT = 28;

  const result = [];

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if (code >= AC_BASE && code <= 0xD7A3) {
      const base = code - AC_BASE;

      const chosungIndex = (base / (JUNGSUNG_COUNT * JONGSUNG_COUNT)) | 0;
      const jungsungIndex = ((base % (JUNGSUNG_COUNT * JONGSUNG_COUNT)) / JONGSUNG_COUNT) | 0;
      const jongsungIndex = base % JONGSUNG_COUNT;

      result.push(CHOSUNG_LIST[chosungIndex].charCodeAt(0));

      const jung = JUNGSUNG_LIST[jungsungIndex];
      if (jung in COMPLEX_JUNGSUNG_MAP) {
        for (const part of COMPLEX_JUNGSUNG_MAP[jung]) {
          result.push(part.charCodeAt(0));
        }
      } else {
        result.push(jung.charCodeAt(0));
      }

      if (jongsungIndex !== 0) {
        result.push(JONGSUNG_LIST[jongsungIndex].charCodeAt(0));
      }
    } else {
      result.push(code);
    }
  }

  return result.map(cp => String.fromCharCode(cp));
}
