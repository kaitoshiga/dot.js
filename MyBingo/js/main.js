// 
'use strict';

{
  function createColumn(col) {
    const source = []; //source定数の配列を生成
    for (let i = 0; i < 15; i++) {
      source[i] = i + 1 + 15 * col; //sourceに1-15の整数を代入(col===0)
      // console.log(source); // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    }
    const column = []; //column定数で配列を生成
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
      // column配列にsouce内の15までの整数一つを削除し、削除した値を返値で要素として返す。
      // console.log(column);
    }
    
    return column;
  }

  function createColumns() {
    const columns = [];
    for (let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE';
    return columns;
  }

  function renderBingo(columns) {
    for (let row = 0; row < 5; row++) {
      const tr = document.createElement('tr');
      for (let col = 0; col < 5; col++) {
        const td = document.createElement('td');
        td.textContent = columns[col][row];
        tr.appendChild(td);
        // console.table(tr);
      }
      document.querySelector('tbody').appendChild(tr);
    }
  }

  const columns = createColumns();
  renderBingo(columns);
}