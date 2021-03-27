const chatList = document.querySelector('.chat-list')

const newChatForm = document.querySelector('.new-chat')

const newNameForm = document.querySelector('.new-name')

const updateMessage = document.querySelector('.update-mssg')

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


const chatUI = new ChatUI(chatList)

const chatroom = new Chatroom('crypto', 'ash')

chatroom.getChats((data) => {
    chatUI.render(data)
})
