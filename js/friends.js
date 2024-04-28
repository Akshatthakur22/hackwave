document.addEventListener('DOMContentLoaded', function() {
  const friendInput = document.getElementById('friendInput');
  const addFriendBtn = document.getElementById('addFriendBtn');
  const friendList = document.getElementById('friendList');

  // Load friends from local storage
  let friends = JSON.parse(localStorage.getItem('friends')) || [];

  // Populate initial friends list
  friends.forEach(function(name) {
    addFriendToList(name);
  });

  addFriendBtn.addEventListener('click', function() {
    const friendName = friendInput.value.trim();
    if (friendName !== '') {
      friends.push(friendName);
      localStorage.setItem('friends', JSON.stringify(friends));
      addFriendToList(friendName);
      friendInput.value = '';
    }
  });

  function addFriendToList(name) {
    const li = document.createElement('li');
    li.textContent = name;
    
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = '&#10006;'; // Unicode for cross sign
    removeBtn.classList.add('remove-btn');
    removeBtn.addEventListener('click', function() {
      removeFriendFromList(name);
    });

    li.appendChild(removeBtn);
    friendList.appendChild(li);
  }

  function removeFriendFromList(name) {
    friends = friends.filter(friend => friend !== name);
    localStorage.setItem('friends', JSON.stringify(friends));
    friendList.innerHTML = '';
    friends.forEach(function(name) {
      addFriendToList(name);
    });
  }
});
