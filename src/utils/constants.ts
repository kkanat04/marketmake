export const twitterScope = 'tweet.read tweet.write tweet.moderate.write users.read follows.read follows.write offline.access space.read mute.read mute.write like.read like.write list.read list.write block.read block.write bookmark.read bookmark.write';

export const exportFile = (data: any) => {
	const url = window.URL.createObjectURL(
		new Blob([data]),
	);
	const link = document.createElement('a');
	link.href = url;
	link.setAttribute(
		'download',
		`actions-${Date.now() * 1000}.csv`,
	);
	document.body.appendChild(link);
	link.click();
};
