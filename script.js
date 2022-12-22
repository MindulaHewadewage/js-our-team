
const informations =
    {
        workers:[
            {name: 'Wayne Barnett', role:'Founder & CEO', imageUrl:'wayne-barnett-founder-ceo.jpg'},
            {name: 'Angela Caroll', role:'Chief Editor', imageUrl:'angela-caroll-chief-editor.jpg'},
            {name: 'Walter Gordon', role:'Office Manager', imageUrl:'walter-gordon-office-manager.jpg'},
            {name: 'Angela Lopez', role:'Social Media Manager', imageUrl:'angela-lopez-social-media-manager.jpg'},
            {name: 'Scott Estrada', role:'Developer', imageUrl:'scott-estrada-developer.jpg'},
            {name: 'Barbara Ramos', role:'Graphic Designer', imageUrl:'barbara-ramos-graèhic-designer.jpg'},
        ]
    }

    console.table(informations.workers);

const cardStructure = document.getElementById('card-structure');
let content ='';

// funzione di creare la struttura html
    for(let i = 0; i < informations.workers.length; i++){
        const member = informations.workers[i];

        content +=`
        <div class="col-4">
        <div class="card">
            <div class="card-body"><img src="img/${informations.workers.imageUrl}" alt=""></div>
            <h4 class="card-title">${informations.name}</h4>
            <p class="card-text py-3">${informations.role}</p>
        </div>
        </div>
        `;

    }


cardStructure.innerHTML = content;