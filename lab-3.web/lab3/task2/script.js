/**
 * To-Do List - Vanilla JavaScript
 * DOM manipulation (createElement, appendChild, removeChild),
 * event listeners (click, change), dynamic styling.
 */

(function () {
  'use strict';

  const form = document.getElementById('addForm');
  const input = document.getElementById('newTask');
  const list = document.getElementById('taskList');

  /**
   * Create a new task list item element.
   * @param {string} text - Task text content
   * @param {boolean} done - Whether the task is completed
   * @returns {HTMLLIElement} The list item element
   */
  function createTaskItem(text, done = false) {
    const li = document.createElement('li');
    li.className = 'task-item' + (done ? ' task-item-done' : '');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = done;
    checkbox.setAttribute('aria-label', `Mark ${text} as done`);

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'btn-delete';
    deleteBtn.setAttribute('aria-label', `Delete ${text}`);
    const deleteIcon = document.createElement('span');
    deleteIcon.className = 'delete-icon';
    deleteIcon.setAttribute('aria-hidden', 'true');
    deleteIcon.textContent = '\u{1F5D1}';
    deleteBtn.appendChild(deleteIcon);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
  }

  // Event delegation: handle checkbox change and delete for all items
  list.addEventListener('change', function handleListChange(event) {
    if (event.target.classList.contains('task-checkbox')) {
      const li = event.target.closest('.task-item');
      if (li) {
        li.classList.toggle('task-item-done', event.target.checked);
      }
    }
  });

  list.addEventListener('click', function handleListClick(event) {
    const deleteBtn = event.target.closest('.btn-delete');
    if (deleteBtn) {
      const li = deleteBtn.closest('.task-item');
      if (li && li.parentNode === list) {
        list.removeChild(li);
      }
    }
  });

  /**
   * Add a new task to the list from the input value.
   */
  function addTask() {
    const text = input.value.trim();
    if (text === '') return;

    const item = createTaskItem(text, false);
    list.appendChild(item);
    input.value = '';
    input.focus();
  }

  form.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();
    addTask();
  });
})();
