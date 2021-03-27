const chatList = document.querySelector('.chat-list')

const chatUI = new ChatUI(chatList)

const chatroom = new Chatroom('crypto', 'ash')

chatroom.getChats((data) => {
    chatUI.render(data)
})
