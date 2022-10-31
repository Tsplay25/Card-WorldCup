let isExplorer = false

function changeCard(event){
    const card = event.currentTarget
    const backgroundImage = isExplorer
        ? "url(./assets/ignite.svg)"
        : "url(./assets/explorer.svg)"
    isExplorer = !isExplorer
    card.style.backgroundImage = backgroundImage
}