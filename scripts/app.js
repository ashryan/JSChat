const chatList = document.querySelector('.chat-list')

const newChatForm = document.querySelector('.new-chat')

const newNameForm = document.querySelector('.new-name')

const updateMessage = document.querySelector('.update-mssg')

const rooms = document.querySelector('.chat-rooms')

newChatForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = newChatForm.message.value.trim()
    chatroom.addChat(message).then(()=>  newChatForm.reset())
})

newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    const newName = newNameForm.name.value.trim()
    chatroom.updateName(newName)
    newNameForm.reset()
    updateMessage.innerText = `Your name is now ${newName}`
    setTimeout(()=> {
        updateMessage.innerText = ''
    }, 3000)
    
})

rooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'))
        chatroom.getChats(chat => {
            chatUI.render(chat)
        })
    }
})

const username = localStorage.username ? localStorage.username : 'anon'

const chatUI = new ChatUI(chatList)

const chatroom = new Chatroom('crypto', username)

chatroom.getChats((data) => {
    chatUI.render(data)
})
