// test

const p = new Password();

const options = document.querySelector('#options');
const size = document.querySelector('#size');
const slider = document.querySelector('#slider');
const displayer = document.querySelector('#displayer');

displayer.textContent = p.generate(10);
refresh();


// addEventListener('type', callback(fonction de rapelle, ), boolean: direction de l'événement)
size.addEventListener('input', event => {
    
    console.log(event);
    console.log(event.target === size); // élévement c'est size
    
    slider.value = size.value;
    refresh();
}); 

slider.addEventListener('input', e => { size.value = slider.value; refresh(); });

options.addEventListener('click', e => { 
    console.log(e);
    console.log(e.target);
    const evt = e.target;
    
    if( evt.type && evt.type === 'checkbox'){
        evt.checked ? p.include(evt.value) : p.exclude(evt.value);
        refresh();
    }
})




// pour récupérer l'endroit où utilisateur a cliqué sur la page
const body = document.querySelector('body');
body.addEventListener('click', evt => {
    console.log(evt.clientX, evt.clientY);
});






function refresh() {
    displayer.textContent = p.generate(size.value);
    rangeFormList();
};


//* Créer les éléments répétitif à partir du id option */
function rangeFormList() {
    options.innerHTML='';
    p.data.forEach(obj => {
        options.innerHTML += `
        <li class="list-group-item">
        ${obj.name}
        (${obj.chars})
        <input type="checkbox" value="${obj.range}" ${ obj.range & p.range ? 'checked' : '' }/>
        
        </li>
        `;
    });
    
}



// copie le mot de passe 

displayer.style.cursor = 'pointer';
displayer.style.background = '#F0F0F0';

displayer.addEventListener('click', evt => {
    copyToClipboard(evt.target.textContent);
});

function copyToClipboard(text) {
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert('Mot de passe copié!')
}


// function qui va servir qu'une seule fois




// p.setRange(Password.all);
// p.exclude(Password.num);
// //p.include();

// //console.log(p.generate(20));
// //console.log(p.range, p.range.toString(2));
// console.log(p.getChars());
// console.log(p.generate(10));


// const mdp = document.getElementById('mdp');

// mdp.innerText = p.generate(10);