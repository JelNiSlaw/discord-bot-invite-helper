chrome.browserAction.onClicked.addListener(({ id, pendingUrl, url }) => {
	url = pendingUrl || url;
	let updated = url.replace(/(?<=permissions=)\d+/i, '0');

	if (updated != url) {
		chrome.tabs.update(id, { url: updated });
	} else {
		alert('Permission value not found in the page URL.');
	}
});