function onEnterPressed(event){

    if(event.key !=="Enter"){

        return;

    }

    addEntry();

}



var entries = [

    {id: "1", name: "Arjun"},

    {id:"2", name: "Nishant"},

    {id:"3", name: "Neeraj"},

];


// This code is worked together by arjun, nisant, neeraj //
function refreshButton(){

    let snippet = "";

    entries.forEach(element => {

        snippet += `

        <tr id="${element.id}">

                <td onClick="removeEntry(${element.id})">❌</td>

                <td>${element.name}</td>

        </tr>`;

    });

    

    setName("");

    getElement("tbody").innerHTML=snippet;

}



var id=0;



function addEntry(){

    let snippet=`

        <tr id="${id}">

                <td onClick="removeEntry(${id})">❌</td>

                <td>${getName()}</td>

        </tr>

    `

    setName("");

    getElement("tbody").innerHTML+=snippet;

}



function getName(){

    return getValue("name");

}



function setName(name){

    document.getElementById("name").value=name;

}



function getValue(id){

    return document.getElementById(id).value;

}



function getElement(id){

    return document.getElementById(id);

}



function removeEntry(id){

    document.getElementById(id).remove();

}