export function setupToDoList() {
  const input: HTMLInputElement | null =
    document.querySelector('.to-do-list__input');
  const button: HTMLButtonElement | null = document.querySelector(
    '.to-do-list__add-btn',
  );
  const progressListNode: HTMLDivElement | null = document.querySelector(
    '.to-do-list__list--progress',
  );
  const completedListNode: HTMLDivElement | null = document.querySelector(
    '.to-do-list__list--completed',
  );

  const createToDoItem = (text: string, status: string) => {
    const item = document.createElement('div');
    const checkbox = document.createElement('input');
    const closeBtn = document.createElement('button');
    checkbox.type = 'checkbox';

    item.innerText = text;
    item.appendChild(checkbox);
    item.appendChild(closeBtn);

    closeBtn.addEventListener('click', () => {
      if (progressListNode?.contains(item)) {
        progressListNode?.removeChild(item);
        localStorage.removeItem(text);
      } else if (completedListNode?.contains(item)) {
        completedListNode?.removeChild(item);
        localStorage.removeItem(text);
      }
    });

    checkbox.addEventListener('change', function () {
      if (this.checked) {
        completedListNode?.appendChild(item);
        localStorage.setItem(text, 'completed');
      }
    });

    localStorage.setItem(text, status);

    if (status === 'progress') {
      progressListNode?.appendChild(item);
    } else if (status === 'completed') {
      completedListNode?.appendChild(item);
    }
  };

  button?.addEventListener('click', () => {
    const inputValue = input?.value;

    // Если значение пустое или уже существует, выходим
    if (!inputValue || localStorage.getItem(inputValue)) return;

    createToDoItem(inputValue, 'progress');
  });

  const initItems = () => {
    const progressList = [];
    const completedList = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) as string;
      const value = localStorage.getItem(key);

      if (value === 'progress') {
        progressList.push(key);
      } else if (value === 'completed') {
        completedList.push(key);
      }
    }

    progressList.forEach((item) => {
      console.log('progressList item: ', item);
      createToDoItem(item, 'progress');
    });

    completedList.forEach((item) => {
      console.log('completedList item: ', item);
      createToDoItem(item, 'completed');
    });
  };

  initItems();
}
