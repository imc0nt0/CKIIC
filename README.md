# CKIIC

![GitHub License](https://img.shields.io/github/license/imc0nt0/CKIIC)
[![NPMJS](https://img.shields.io/badge/NPMJS-CKIIC-%23cb0203)](https://www.npmjs.com/package/ckiic)

`CKIIC은 모음, 자음, 받침을 분리하기 쉽게 하기 위해 만들어 졌습니다.`

## BUILD BY
 - <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>

## HOW TO USE

### IMPORT
```javascript
const ckiic = require('ckiic');
```
### ckiic.Hangle() [Separate vowels, consonants, and consonants]
```javascript
ckiic.hangle("혁신") // ['ㅎ', 'ㅕ', 'ㄱ', 'ㅅ', 'ㅣ', 'ㄴ']
```
### EXAMPLE 
``` javascript
ckiic.Hangle(`금 걷는 한 걸음이, 아무리 작아 보여도 멈춰 서 있는 것보단 훨씬 멀리 가게 한다.`); 
  // [
  // 'ㄱ', 'ㅡ', 'ㅁ', ' ',  'ㄱ', 'ㅓ', 'ㄷ', 'ㄴ', 'ㅡ', 'ㄴ',
  // ' ',  'ㅎ', 'ㅏ', 'ㄴ', ' ',  'ㄱ', 'ㅓ', 'ㄹ', 'ㅇ', 'ㅡ',
  // 'ㅁ', 'ㅇ', 'ㅣ', ',',  ' ',  'ㅇ', 'ㅏ', 'ㅁ', 'ㅜ', 'ㄹ',
  // 'ㅣ', ' ',  'ㅈ', 'ㅏ', 'ㄱ', 'ㅇ', 'ㅏ', ' ',  'ㅂ', 'ㅗ',
  // 'ㅇ', 'ㅕ', 'ㄷ', 'ㅗ', ' ',  'ㅁ', 'ㅓ', 'ㅁ', 'ㅊ', 'ㅜ',
  // 'ㅓ', ' ',  'ㅅ', 'ㅓ', ' ',  'ㅇ', 'ㅣ', 'ㅆ', 'ㄴ', 'ㅡ',
  // 'ㄴ', ' ',  'ㄱ', 'ㅓ', 'ㅅ', 'ㅂ', 'ㅗ', 'ㄷ', 'ㅏ', 'ㄴ',
  // ' ',  'ㅎ', 'ㅜ', 'ㅓ', 'ㄹ', 'ㅆ', 'ㅣ', 'ㄴ', ' ',  'ㅁ',
  // 'ㅓ', 'ㄹ', 'ㄹ', 'ㅣ', ' ',  'ㄱ', 'ㅏ', 'ㄱ', 'ㅔ', ' ',
  // 'ㅎ', 'ㅏ', 'ㄴ', 'ㄷ', 'ㅏ', '.'
  // ]
```
