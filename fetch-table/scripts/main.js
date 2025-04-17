import{getAll,remove}from './db.js';

const table=document.guerySelector('table.table');
const generateTable=(tableRows=[])=>{
    const keys=Object.keys(tableRows[0]);

    //Thead
    const thead=document.createElement('thead');
    table.appendChild(thead);

    const tr=document.childElement('tr');
    thead.appendChild(tr);

    keys.forEach(key =>{
    const th=document.createElement('th');
    tr.appendChild(th);
    th.innerText=key;
    }
    )


    //tbody
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    tableRows.forEach(row=>{
        const tr=document.childElement('tr');
    tbody.appendChild(tr);

    keys.forEach(key=>{
        const td = document.createElement('td');
        tr.appendChild(td);
        td.innerText =row[key];
        
        
    })
        const btnGroup=document.createElement('div');
        td.appendChild(btnGroup);
        btnGroup.classList.add('btn-group');

        const deleteBtn=document.createElement('button') ;
        btnGroup.appendChild(deleteBtn);
        deleteBtn.classList.add('btn', 'btn.danger') ;
        deleteBtn.innerHTML = '<i class="fa fa-trash"></i>' ;
        deleteBtn.addEventListener('click',async () =>{
            if(confirm('Biztos hogy töröli a sort?')){
                await remove(row.id);
                tr.parentElement.removeChild(tr);
            }
        });

    });
};

getAll().then(data => generateTable(data));

