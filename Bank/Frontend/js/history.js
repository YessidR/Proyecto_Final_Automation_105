
let table = document.getElementById("table-info");


function insert_row(type, tr_id, account, date, amount){
    let row = table.insertRow(1);
    let t = row.insertCell(0);
    let tr = row.insertCell(1);
    let ac = row.insertCell(2);
    let da = row.insertCell(3);
    let am = row.insertCell(4);

    t.innerHTML  = type;
    tr.innerHTML = tr_id;
    ac.innerHTML = account;
    da.innerHTML = date;
    am.innerHTML = amount;
    if(type==="+"){
        row.style.backgroundColor = "rgba(30,100,30,0.6)"
    }
    else{
        row.style.backgroundColor = "rgba(255,30,30,0.6)"
    }
    

}

insert_row("+", "132155", "548215-64", "16/06/2020", "545")
insert_row("-", "132155", "548215-64", "16/06/2020", "545")
insert_row("+", "4551", "548215-64", "16/06/2020", "545")
insert_row("+", "132155", "548215-64", "16/06/2020", "545")

insert_row("+", "132155", "548215-64", "16/06/2020", "545")

insert_row("+", "132155", "548215-64", "16/06/2020", "545")


