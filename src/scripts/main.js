'use strict';

const btnRowPlus = document.querySelector('.append-row');
const btnRowMinus = document.querySelector('.remove-row');
const btnColPlus = document.querySelector('.append-column');
const btnColMinus = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const trMain = document.getElementsByTagName('tr');

btnRowPlus.onclick = () => {
  const tr = document.createElement('tr');

  // console.log(trMain);

  if (trMain.length > 0) {
    for (let i = 1; i <= trMain[0].cells.length; i++) {
      const td = document.createElement('td');

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
};

btnRowMinus.onclick = () => {
  if (trMain.length > 4) {
    const el = document.getElementsByTagName('tr');

    el[el.length - 1].remove();
  }
};

btnColPlus.onclick = () => {
  for (let i = 0; i < table.rows.length; i++) {
    const td = document.createElement('td');

    trMain[i].appendChild(td);
  }
};

btnColMinus.onclick = () => {
  if (trMain[0].cells.length > 4) {
    for (let i = 0; i < table.rows.length; i++) {
      const td = trMain[i].cells;

      td[td.length - 1].remove();
    }
  }
};
//
