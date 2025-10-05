// Project 3. Display the information of the objects in the array in a list and add a search input to filter the objects in the array by what is typed in the input field

const employees = [
  {
    name: 'Chris',
    age: 52,
    sex: 'male',
    occupation: 'Mfg Engineer, Novice CRA Racer',
    email: 'chris@gmail.com',
    image: 'https://randomuser.me/api/portraits/lego/2.jpg',
  },
  {
    name: 'Joe',
    age: 40,
    sex: 'male',
    occupation: 'Software Engineer, Novice CRA Racer',
    email: 'joe@gmail.com',
    image: 'https://randomuser.me/api/portraits/lego/0.jpg',
  },
  {
    name: 'Reed',
    age: 28,
    sex: 'male',
    occupation: 'Network Engineer, Expert CRA Racer',
    email: 'reed@gmail.com',
    image: 'https://randomuser.me/api/portraits/lego/6.jpg',
  },
];

const employeeList = document.getElementById('employeeList');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchState = document.getElementById('searchState');

const createEmployeeItem = ({ name, occupation, age, sex, email, image }) => {
  const listItem = document.createElement('li');
  listItem.className = 'person';

  const header = document.createElement('div');
  header.className = 'person-header';

  const avatar = document.createElement('img');
  avatar.className = 'avatar';
  avatar.src = image;
  avatar.alt = `${name}'s avatar`;

  const summary = document.createElement('div');

  const heading = document.createElement('h3');
  heading.textContent = name;

  const role = document.createElement('p');
  role.className = 'meta';
  role.textContent = occupation;

  summary.appendChild(heading);
  summary.appendChild(role);

  header.appendChild(avatar);
  header.appendChild(summary);

  const details = document.createElement('p');
  details.className = 'meta';
  details.textContent = `Age ${age} · ${sex}`;

  const mail = document.createElement('p');
  mail.className = 'email';
  mail.textContent = email;

  listItem.appendChild(header);
  listItem.appendChild(details);
  listItem.appendChild(mail);

  return listItem;
};

const renderList = (target, items) => {
  if (!target) return;
  target.textContent = '';
  items.forEach((employee) => target.appendChild(createEmployeeItem(employee)));
};

if (employeeList) {
  renderList(employeeList, employees);
}

const handleSearch = (event) => {
  if (!searchResults || !searchState) return;

  const query = event.target.value.trim().toLowerCase();

  if (!query) {
    searchResults.textContent = '';
    searchState.textContent = 'Start typing to filter the roster.';
    return;
  }

  const matches = employees.filter((employee) =>
    Object.values(employee).join(' ').toLowerCase().includes(query)
  );

  searchResults.textContent = '';

  if (matches.length) {
    renderList(searchResults, matches);
    searchState.textContent = `Found ${matches.length} ${
      matches.length === 1 ? 'match' : 'matches'
    }.`;
  } else {
    searchState.textContent = 'No team members match your search.';
  }
};

if (searchInput) {
  searchInput.addEventListener('input', handleSearch);
}
