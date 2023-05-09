var counter = 0;

const ins = () => {
    counter += 1;   
    let type = document.querySelector("#type").value;
    let label = document.querySelector("#label").value;
    let placeholder = document.querySelector("#placeholder").value;
    switch (type){
        case 'text': appendText(label, placeholder, counter)
                        break;
        case 'radio': appendRadio(label, placeholder, counter)
                        break;
        case 'button': appendButton(label, placeholder, counter)
                        break;
    }    
}
const appendText = (label = "No label", placeholder = "No placeholder", counter) => {
    let nwlabel = label.replace(/\s/g, "");

    let dl = document.createElement('div')
    dl.setAttribute('class', 'container-fluid mt-2')
    dl.setAttribute('id', counter)
    let il = document.createElement('p')
    il.setAttribute('class', 'text-right text-secondary')
    il.textContent = counter

    let fl = document.createElement('form')
    fl.setAttribute('id', counter)
    fl.setAttribute('name', 'text')

    let al = document.createElement('label')
    al.setAttribute('for', nwlabel)
    al.setAttribute('class','h2 ms-2')
    al.setAttribute('name', nwlabel)
    al.textContent = label

    let el = document.createElement('input');
    el.textContent = label
    el.setAttribute('class', 'form-control mt-1')
    el.setAttribute('placeholder', placeholder)
    el.setAttribute('name', nwlabel)

    document.querySelector("#form").append(dl)
    document.getElementById(counter).append(il)
    document.getElementById(counter).append(fl)
    document.getElementById(counter).append(al)
    document.getElementById(counter).append(el)
}
const appendRadio = (label = "No label", placeholder = "No placeholder", counter) => {
    let nwlabel = label.replace(/\s/g, "");
    
    let dl = document.createElement('div')
    dl.setAttribute('class', 'container-fluid mt-2')
    dl.setAttribute('id', counter)

    let fl = document.createElement('form')
    fl.setAttribute('id', counter)
    fl.setAttribute('name', 'radio')

    let el = document.createElement('input');
    el.textContent = label
    el.setAttribute('class', 'mt-1')
    el.setAttribute('type', 'radio')
    el.setAttribute('name', nwlabel)

    let al = document.createElement('label')
    al.setAttribute('for', nwlabel)
    al.setAttribute('class','h5 ms-3 float-left')
    el.setAttribute('name', nwlabel)
    al.textContent = label

    document.querySelector("#form").append(dl)
    document.getElementById(counter).append(fl)
    document.getElementById(counter).append(el)
    document.getElementById(counter).append(al)
}
const appendButton = (label = "No label", placeholder = "No placeholder", counter) => {
    let nwlabel = label.replace(/\s/g, "");

    let dl = document.createElement('div')
    dl.setAttribute('class', 'container-fluid mt-2')
    dl.setAttribute('id', counter)

    let fl = document.createElement('form')
    fl.setAttribute('id', counter)
    fl.setAttribute('name', 'button')

    let al = document.createElement('label')
    al.setAttribute('for', nwlabel)
    al.setAttribute('class','h2 ms-2')
    al.setAttribute('name', nwlabel)
    al.textContent = label

    let el = document.createElement('button');
    el.textContent = placeholder
    el.setAttribute('class', 'form-control mt-1')
    el.setAttribute('name', nwlabel)

    document.querySelector("#form").append(dl)
    document.getElementById(counter).append(fl)
    document.getElementById(counter).append(al)
    document.getElementById(counter).append(el)
}
const del = () => {
    let idHolder = document.getElementById("delID").value
    const deleteElement = document.getElementById(idHolder);
    deleteElement.remove()
}