const form = document.querySelector('.form-input');
const customersTable = document.querySelector('#customersTable');
const clearAllBtn = document.querySelector('#clearAllBtn');
let customers = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#textarea');

  if (validateForm(nameInput, emailInput, messageInput)) {
    const customer = {
      fullName: nameInput.value.trim(),
      email: emailInput.value.trim(),
      message: messageInput.value.trim()
    };
    addCustomerTable(customer);
    customers.push(customer); 
    form.reset();
  }
});

clearAllBtn.addEventListener('click', function() {
  customersTable.innerHTML = '';
  customers = [];
});

function validateForm(name, email, message) {
  return name.value.trim() !== '' && email.value.trim() !== '' && message.value.trim() !== '';
}

function addCustomerTable(customer) {
  const tBody = document.querySelector('#customersTable');

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${customer.fullName}</td>
    <td>${customer.email}</td>
    <td>${customer.message}</td>
    <td>
      <button class="deleteBtn">Delete</button>
      <button class="markAsDoneBtn">Mark as Done</button>
    </td>
  `;

  const deleteBtn = newRow.querySelector('.deleteBtn');
  deleteBtn.addEventListener('click', function() {
    newRow.remove();
  });
  tBody.appendChild(newRow);
}


