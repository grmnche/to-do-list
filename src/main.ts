import './style.css';
import { setupToDoList } from './script.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class='to-do-list'>
  <h1>Список дел</h1>
  
  <div class="to-do-list__input-outer">
    <input type='text' class="to-do-list__input" />
    <button type='button' class="to-do-list__add-btn">Добавить</button>
  </div>

  <div class="to-do-list-outer">
    <h2>Готовы</h2>
    <hr />
    <ul class="to-do-list__list to-do-list__list--completed"></ul>
  </div>

  <div class="to-do-list-outer">
    <h2>В процессе</h2>
    <hr />
    <ul class="to-do-list__list to-do-list__list--progress"></ul>
  </div>
  </div>
`;

setupToDoList();
