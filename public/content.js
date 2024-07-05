

chrome.storage.local.get(['blockedLists', 'toggeleState'], ({ blockedLists, toggeleState }) => {
    if (toggeleState) {
        const currentURL = window.location.hostname;
        if (blockedLists && blockedLists.includes(currentURL)) {
            document.head.innerHTML = `<style>img {
                width: 100%; height:705px; object-fit:contain;
                   }</style>`
            custom_icon = document.createElement('img')

            custom_icon = document.createElement('img')
            custom_icon.src = chrome.runtime.getURL('block.png')

            document.body.innerHTML = ''
            document.body.appendChild(custom_icon)
        }
    }

});










