//-------------------- 右键菜单演示 ------------------------//
chrome.contextMenus.create({
	title: "去平和猴子的网页",
	onclick: function(){
		chrome.notifications.create(null, {
			type: 'basic',
			iconUrl: 'img/icon.png',
			title: '你好',
			message: '欢迎来到平和猴子的博客'
		});
		chrome.tabs.create({url: 'https://phhz.work/#/home/website'});
	}
});
