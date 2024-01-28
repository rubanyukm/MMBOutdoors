async function fetchLinkPreview(url, imageId) {
    try {
        const response = await fetch(`https://api.linkpreview.net/?key=39cee7f1fd3a909f918f327cde7ef7cd&q=${encodeURIComponent(url)}`);
        const data = await response.json();

        if (data.image) {
            const image = document.getElementById(imageId);
            image.src = data.image;
        }
    } catch (error) {
        console.error('Error fetching link preview:', error);
    }
}

// Fetch link previews for websites
fetchLinkPreview('https://intothebackcountryguides.com/', 'website-preview-1');
// Add more fetchLinkPreview calls for additional websites

// Repeat the same process for Books and YouTube Channels