const button = document.getElementById('apiButton');
const jokeContainer = document.getElementById('jokeContainer');
const statusMessage = document.getElementById('status');

const setLoadingState = (isLoading) => {
  if (!button) return;
  button.disabled = isLoading;
  if (isLoading) {
    button.textContent = 'Fetching gold...';
    statusMessage.textContent = 'Waiting for the punchline…';
  } else {
    button.textContent = 'Get a dad joke';
  }
};

const displayJoke = (joke) => {
  if (!jokeContainer) return;
  jokeContainer.classList.remove('empty');
  jokeContainer.textContent = joke;
  statusMessage.textContent = '';
};

const displayPlaceholder = () => {
  if (!jokeContainer) return;
  jokeContainer.classList.add('empty');
  jokeContainer.textContent = 'Press the button to hear Jerry’s best dad joke.';
};

const displayError = () => {
  if (!jokeContainer) return;
  jokeContainer.classList.remove('empty');
  jokeContainer.textContent =
    'Sorry, the joke machine took a break. Try again!';
  statusMessage.textContent = '';
};

const fetchJoke = async () => {
  setLoadingState(true);
  try {
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    });
    if (response?.data?.joke) {
      displayJoke(response.data.joke);
    } else {
      displayError();
    }
  } catch (error) {
    console.error('Error fetching dad joke:', error);
    displayError();
  } finally {
    setLoadingState(false);
  }
};

if (button) {
  button.addEventListener('click', fetchJoke);
}

if (jokeContainer) {
  displayPlaceholder();
}
