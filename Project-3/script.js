// Project 3. Display the information of the objects in the array in a list and add a search input to filter the objects in the array by what is typed in the input field

let employees = [
  {
    name: 'Chris',
    age: 52,
    sex: 'male',
    occupation: 'Mfg Engineer',
    email: 'chris@gmail.com',
    image: 'https://randomuser.me/api/portraits/lego/2.jpg',
  },
  {
    name: 'Joe',
    age: 40,
    sex: 'male',
    occupation: 'Software Engineer, Gay Bar stripper by night',
    email: 'joe@gmail.com',
    image: 'https://randomuser.me/api/portraits/lego/0.jpg',
  },
  {
    name: 'Reed',
    age: 28,
    sex: 'male',
    occupation: 'Network Engineer',
    email: 'reed@gmail.com',
    image: 'https://randomuser.me/api/portraits/lego/6.jpg',
  },
];

const employeeList = document.getElementById('employeeList');

if (employeeList) {
  employees.forEach((employee) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <img src="${employee.image}" alt="${employee.name}" style="width:50px;height:50px;border-radius:50%;margin-right:10px;">
      <span>Name: ${employee.name}  Occupation: ${employee.occupation} -- Age: ${employee.age}  Sex: ${employee.sex}</span>`;
    employeeList.appendChild(listItem);
  });
} else {
  console.error("Element with id 'employeeList' not found.");
}

const searchInput = document.getElementById('searchInput');
const resultDiv = document.getElementById('result');

searchInput.addEventListener('input', () => {
  const searchInputLower = searchInput.value.toLowerCase().trim();

  if (searchInputLower === '') {
    resultDiv.innerHTML = '';
    return;
  }

  const matchingEmployees = employees.filter((employee) => {
    return Object.values(employee).some((value) =>
      value.toString().toLowerCase().includes(searchInputLower)
    );
  });

  resultDiv.innerHTML = '';

  if (matchingEmployees.length > 0) {
    matchingEmployees.forEach((employee) => {
      resultDiv.innerHTML += `<li>Name: ${employee.name} Occupation: ${employee.occupation} Age: ${employee.age}</li>`;
    });
  } else {
    resultDiv.innerHTML = '<p>No results found.</p>';
  }
});
