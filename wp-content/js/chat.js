// 客服组
var waList = [
  'https://wa.me/85269223460',//徐佳伟
  'https://wa.me/85256436198',//陈添添
  'https://wa.me/85296427694',//胡白霞
  'https://wa.me/85296401553',//邱
  'https://wa.me/85292757956',//梁
  'https://wa.me/85254973606',//曾宪华
  'https://wa.me/85296433048',//刘海涛
]
var tgList = [
  'https://t.me/Ubest_Mellissa',//徐佳伟
  'hhttps://t.me/Eileen1106',//陈添添
  'https://t.me/Anna_hu',//胡白霞
  'https://t.me/UbestAnna',//邱
  'https://t.me/eileen7956',//梁
  'https://t.me/AnalystAnna',//曾宪华
  'https://t.me/Ashley_377',//刘海涛
]

// 返回0到number-1之间的随机整数
function generateRandom(number) {
  return Math.floor(Math.random() * number);
}

// 点击了WhatsApp
function onClickWA() {
  console.log("点击了WA")
  if (waList.length < 1) return;
  let url = waList[generateRandom(waList.length)]
  open(url)
}

// 点击了Telegram
function onClickTG() {
  console.log("点击了TG")
  if (tgList.length < 1) return;
  let url = tgList[generateRandom(tgList.length)]
  open(url)
}

document.addEventListener('DOMContentLoaded', () => {
  var node = document.createElement('div')
  node.className = 'yys-float'
  node.innerHTML =
    "<img class='yys-img' onclick='onClickWA()' src='wp-content/img/whatsapp.png' ><img class='yys-img' onclick='onClickTG()' src='wp-content/img/telegram.png' >"
  document.getElementsByTagName('body')[0].append(node)
})
