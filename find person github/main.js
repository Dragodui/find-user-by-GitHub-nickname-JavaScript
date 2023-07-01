const input = document.querySelector('#input');
const button = document.querySelector('#find_button');
const usersField = document.querySelector('#users_info')

console.log(button);
const apiUrl = 'https://api.github.com/users/'


const getUsers = async(nickname) => {
    const url = `${apiUrl}${nickname}`;
    console.log(url);
    const response = await fetch(url);
    const result = await response.json();
    if (response.ok) {
      console.log(result);
      addUser(result);
    }
    else {
      usersField.innerHTML = `<p class = 'error'>Error: cant find user ${nickname}</p>`;
    }
}

const addUser = (result) => {
  usersField.innerHTML = ' ';
  const nickname = document.createElement('h2');
  const realName = document.createElement('p');
  const userId = document.createElement('p');

  nickname.textContent = `Nickname: ${result.login}`;
  realName.textContent = `Real name: ${result.name}`;
  userId.textContent = `Id: ${result.id}`;

  const user = document.createElement('div');

  user.appendChild(nickname);
  user.appendChild(realName);
  user.appendChild(userId);

  usersField.appendChild(user);
}

button.addEventListener('click', () => {getUsers(input.value)});
