// 实现点击切换图片

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '../images/aote.jpg') {
      myImage.setAttribute('src', '../images/yunlong.jpeg');
    } else {
      myImage.setAttribute('src', '../images/aote.jpg');
    }
}

// 实现修改用户名称
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('自动弹出：请输入你的名字.');
    localStorage.setItem('name', myName);
    myHeading.textContent = '你好, ' + myName;
  }

  // 判断用户信息是否存在
if(!localStorage.getItem('name')) {
setUserName();
} else {
var storedName = localStorage.getItem('name');
myHeading.textContent = '你好, ' + storedName;
}

// 点击按钮触发
myButton.onclick = function() {
    setUserName();
  }