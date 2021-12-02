
const form = document.querySelector('#add-friend');
const input = document.querySelector('#first-name');
const friendList = document.querySelector('#friend-list');

friendList.addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
})

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newFriend = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';

    newFriend.innerText =  input.value;
    newFriend.appendChild(removeBtn);
    input.value = '';
    friendList.appendChild(newFriend);
});