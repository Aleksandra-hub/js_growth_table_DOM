'use strict';

const btnRowPlus = document.querySelector('.append-row');
const btnRowMinus = document.querySelector('.remove-row');
const btnColPlus = document.querySelector('.append-column');
const btnColMinus = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const trMain = document.getElementsByTagName('tr');

btnRowPlus.onclick = () => {
  const tr = document.createElement('tr');

  for (let i = 1; i <= trMain[0].cells.length; i++) {
    const td = document.createElement('td');

    tr.appendChild(td);
  }
  table.appendChild(tr);
};

btnRowMinus.onclick = () => {
  const el = document.getElementsByTagName('tr');

  el[0].remove();
};

btnColPlus.onclick = () => {
  for (let i = 0; i < table.rows.length; i++) {
    const td = document.createElement('td');

    trMain[i].appendChild(td);
  }
};

btnColMinus.onclick = () => {
  for (let i = 0; i < table.rows.length; i++) {
    const td = trMain[i].cells;

    td[table.rows.length - 1].remove();
  }
};
//
