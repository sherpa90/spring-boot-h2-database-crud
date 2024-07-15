const tableBody = document.querySelector('#table-container tbody');
const addModal = document.getElementById('addModal');
const editModal = document.getElementById('editModal');
const addForm = document.getElementById('addForm');
const editForm = document.getElementById('editForm');

// Fetch tutorial data from a (replace with your data source)
fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(data => {
    data.forEach(tutorial => {
      const row = `<tr>
        <td>${tutorial.id}</td>
        <td>${tutorial.title}</td>
        <td>${tutorial.completed ? 'Published' : 'Draft'}</td>
        <td>${tutorial.completed ? '<i class="bi bi-check"></i>' : '<i class="bi bi-x"></i>'}</td>
        <td>
          <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#editModal" data-id="${tutorial.id}">Edit</button>
          <button class="btn btn-sm btn-danger" data-id="${tutorial.id}">Delete</button>
        </td>
      </tr>`;
      tableBody.innerHTML += row;
    });
  });

// Add tutorial
addForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const newTutorial = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    published: document.getElementById('published').checked
  };

  // (Replace with your API call to create a new tutorial)
  console.log('New tutorial:', newTutorial); // Replace with actual API call

  // Clear form and close modal
  addForm.reset();
  addModal.hide();
});

// Edit tutorial
editForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const id = document.getElementById('editId').value;
  const title = document.getElementById('editTitle').value;
  const description = document.getElementById('editDescription').value;
  const published = document.getElementById('editPublished').checked;

  // (Replace with your API call to update the tutorial)
  console.log('Updated tutorial:', { id, title, description, published }); // Replace with actual API call

  // Update table row
  const row = document.querySelector(`tr[data-id="${id}"]`);
  row.innerHTML = `<tr>
    <td>${id}</td>
    <td>${title}</td>
    <td>${published ? 'Published' : 'Draft'}</td>
    <td>${published ? '<i class="bi bi-check"></i>' : '<i class="bi bi-x"></i>'}</td>
    <td>
      <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#editModal" data-id="${id}">Edit</button>
      <button class="btn btn-sm btn-danger" data-id="${id}">Delete</button>
    </td>
  </tr>`;

  // Clear form and close modal
  editForm.reset();
  editModal.hide();
});

// Delete tutorial
tableBody.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-danger')) {
    const id = event.target.dataset.id;

    // (Replace with your API call to delete the tutorial)
    console.log('Deleting tutorial:', id); // Replace with actual API call

    // Remove row from table
    event.target.parentNode.parentNode.remove();
  }
});

// Pre-populate edit form when modal opens
editModal.addEventListener('show.bs.modal', (event) => {
  const id = event.relatedTarget.dataset.id;
  const row = document.querySelector(`tr[data-id="${id}"]`);

  document.getElementById('editId').value = id;
  document.getElementById('editTitle').value = row.cells[1].textContent;
  document.getElementById('editDescription').value = row.cells[2].textContent;
});
