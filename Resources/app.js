/*
 * Single Window Application Template:
 * A basic starting point for your application.  Mostly a blank canvas.
 *
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *
 */

//bootstrap and check dependencies
if (Ti.version < 1.8) {
  alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

// This is a single context application with multiple windows in a stack
(function() {
  var EaseMob = require("com.mamashai.easemob");
  EaseMob.config("mamashai#bbrl", "bbrl_dev");
  
  EaseMob.addEventListener("login_success", function(e){
  	alert("登录成功");
  });
  
  EaseMob.addEventListener("login_fail", function(e){
  	alert("登录失败");
  });
  
  var win = Ti.UI.createWindow({
  	backgroundColor: "white"
  });
  var from = Ti.UI.createTextField({
  	value: "270",
  	hintText: "登录id",
  	left: 50,
  	width: 100,
  	right: 50, 
  	height: 40,
  	color: "#333",
  	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
  	top: 50
  });
  var btn_login = Ti.UI.createButton({
  	top: 50,
  	left: 200,
  	title: "登录"
  });
  btn_login.addEventListener("click", function(e){
  	EaseMob.login(from.value, "mamashai", "刘明星");  //刘明星为昵称
  });
  
  var to = Ti.UI.createTextField({
  	value: "271",
  	hintText: "通讯另一方用户id",
  	left: 50,
  	width: 100,
  	height: 40,
  	color: "#333",
  	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
  	top: 150
  });
  var btn = Ti.UI.createButton({
  	top: 150,
  	left: 200,
  	title: "开始聊天"
  });
  btn.addEventListener("click", function(e){
  	EaseMob.chatWithUser(to.value, "刘明星2", "single");
  });
  
  var btn_main = Ti.UI.createButton({
  	top: 250,
  	left: 200,
  	title: "主界面"
  });
  btn_main.addEventListener("click", function(e){
  	EaseMob.mainScreen();
  });
  
  var to_group = Ti.UI.createTextField({
  	value: "1446279285546",
  	hintText: "群组id",
  	left: 50,
  	width: 100,
  	height: 40,
  	color: "#333",
  	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
  	top: 350
  });
  var btn_group = Ti.UI.createButton({
  	top: 350,
  	left: 200,
  	title: "开始聊天"
  });
  btn_group.addEventListener("click", function(e){
  	EaseMob.chatWithUser(to_group.value, "测试群组", "group");
  });
  
  
  
  win.add(from);
  win.add(btn_login);
  win.add(to);
  win.add(btn);
  win.add(btn_main);
  win.add(to_group);
  win.add(btn_group);
  //win.add(btn_contact);
  win.open();
})();
