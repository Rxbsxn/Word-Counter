window.onload = function() {
const reqexp = /\s\s+/g;
const textarea = document.getElementById('textarea');
const div = document.getElementById('lead');


function count() {
    let txt = textarea.value;
    txt = txt.replace(reqexp, ' ');
    let a = txt.split(' ').length
    if(textarea.value === '') {
        div.innerHTML = '';
    }
    else { 
        div.innerHTML = `Words: ${a}`;
    }
}




textarea.addEventListener('keyup', count);
}