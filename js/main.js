const membersDom = document.getElementById('members');

let printable = [];


const members = [
    {
        "name": "Wayne Barnett", "position": "Founder & CEO", "profile": "wayne-barnett-founder-ceo.jpg"
    } ,
    {
        "name": "Angela Caroll", "position": "Chief Editor ", "profile": " angela-caroll-chief-editor.jpg"
    } ,
    {
        "name": "Walter Gordon", "position": "Office Manager ", "profile": "walter-gordon-office-manager.jpg"
    } ,
    {
        "name": "Angela Lopez", "position": "Social Media Manager", "profile": "angela-lopez-social-media-manager.jpg"
    } ,
    {
        "name": "Scott Estrada", "position": "Developer", "profile": "scott-estrada-developer.jpg"
    } ,
    {
        "name": "Barbara Ramos", "position": "Graphic Designer", "profile": "barbara-ramos-graphic-designer.jpg"
    }
]

function esport (lenghtArray){
    for(let i = 0; i<lenghtArray; i++){
    let name = members[i].name ;
    let position = members[i].position ;
    let profile = members[i].profile ;
    membersDom.innerHTML += "<div class='m-2 text-center '><h2>" + name + "</h2><p>" + position + "</p><img src='" + profile + "' </div>";
}}






esport(members.length)








