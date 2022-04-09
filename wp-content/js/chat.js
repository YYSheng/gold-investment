// 客服组
var waList = [
  'https://wa.me/85268043367',
  'http://wa.me/85255757915',
  'http://wa.me/85256436198',
  'http://wa.me/85256436198'
]
var tgList = [
  'https://t.me/Leong_bin',
  'https://t.me/Ubest_Mellissa',
  'https://t.me/eileen3699'
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
