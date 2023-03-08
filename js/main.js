const membersDom = document.getElementById('members');




const members = [
    {
        "name": "Wayne Barnett", "position": "Founder & CEO", "profile": "wayne-barnett-founder-ceo.jpg"
    } ,
    {
        "name": "Angela Caroll", "position": "Chief Editor ", "profile": "  angela-caroll-chief-editor.jpg"
    } ,
    {
        "name": "Walter Gordon", "position": "Office Manager ", "profile": "walter-gordon-office-manager.jpg"
    } ,
    {
        "name": "Angela Lopez", "position": "Social Media Manager", "profile": "angela-lopez-social-media-manager.jpg"
    } ,
    {
        "name": "Scott Estrada", "position": "Developer", "profile": " scott-estrada-developer.jpg"
    } ,
    {
        "name": "Barbara Ramos", "position": "Graphic Designer", "profile": "barbara-ramos-graphic-designer.jpg"
    }
]
let name;
let position;
let profile;
function esport (lenghtArray){
    for(let i = 0; i<lenghtArray; i++){
     name = members[i].name;
     position = members[i].position;
     profile = members[i].profile;
}}

esport(members.length)











