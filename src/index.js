import SmoothDND from "smooth-dnd"

const fromContainerEl = document.querySelector('.from-container'),
    toContainerEl = document.querySelector('.to-container'),
    trashEl = document.querySelector('.trash'),
    fromContainer = SmoothDND(fromContainerEl, {
        behaviour: 'copy',
        groupName: 'document',
        shouldAcceptDrop: () => false,
        dragHandleSelector: '.title'
    }),
    fromContainerHTML = fromContainerEl.innerHTML,
    toContainer = SmoothDND(toContainerEl, {
        groupName: 'document',
        dragHandleSelector: '.title',
        onDrop: () => fromContainerEl.innerHTML = fromContainerHTML
    }),
    trash = SmoothDND(trashEl, {
        behaviour: 'move',
        groupName: 'document',
        dragHandleSelector: '.title',
        onDrop: () => {
            trashEl.innerHTML = ''
            trashEl.classList.remove('selected')
        },
        onDragEnter: () => trashEl.classList.add('selected'),
        onDragLeave: () => trashEl.classList.remove('selected')
    })
