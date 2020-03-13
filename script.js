const requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

function requestJSON(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        let response = request.response;
        processResponse(response);
    }
}

function sendRequest() {
    requestJSON(requestUrl);
}

function processResponse(response) {
    var headers = document.querySelectorAll('.head');
    const res = Object.entries(response);

    for (let i = 0; i < res[5][1].length; i++) {
        var res_members = Object.entries(res[5][1][i]); 
        res[5][1][i] = res_members;
    }

    console.log(res);

    for (let i = 0; i < headers.length; i++) {
        headers[i].innerText = res[i][1];        
    }

    for(let i = 0; i < 3; i++){
        addRow('member-table', res, i);
    }

}

function addRow(tableID, res, i) {
    
    let table = document.getElementById(tableID);
  
    
    let newRow = table.insertRow();
  
    
    for(let j = 0; j < res[5][1][i].length; j++)
    {
        let newCell = newRow.insertCell();
        for (let z = 0; z < res[5][1][i][j].length; z++) 
        {
            newCell.innerText = res[5][1][i][j][1];
        }
    }
  
  }

sendRequest();