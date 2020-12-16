chrome.browserAction.onClicked.addListener(({ id, pendingUrl, url }) => {
	chrome.tabs.update(id, { url: (pendingUrl || url).replace(/(?<=permissions=)\d+/i, '0') });
});