const tableContainer = document.querySelector(`#tableContainer`)

function createTablePifagora () {
    const table = document.createElement(`table`);

    for (let row = 1; row <= 10; row++) {
        const tr = document.createElement(`tr`)


        for (let col = 1; col <= 10; col++) {
            const td = document.createElement(row === 1 || col === 1 ? 'th' : 'td');
            td.textContent = row * col;
            tr.appendChild(td);
        }
    
        
    table.appendChild(tr);
    }


    tableContainer.appendChild(table);
}

createTablePifagora();

