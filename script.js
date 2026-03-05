
// change the color of chosen box
function changeColor(element){
    
    const boxes = document.querySelectorAll('.card')
        boxes.forEach(box => {
            box.style.backgroundColor = ''
            box.style.color = ""
        });
    element.style.backgroundColor = "#0E8784"
    element.style.color = "white"
}

// const PreferencesSpan = heading => document.getElementById ("Preferences_span").textContent = heading
// const BeanTypeSpan = heading => document.getElementById ("BeanType_span").textContent = heading
// const QuantitySpan = heading => document.getElementById ("Quantity_span").textContent = heading
// const GrindOptionSpan = heading => document.getElementById ("GrindOption_span").textContent = heading

// display user choice in page and modal
const PreferencesSpan = heading =>{
    const text = document.querySelectorAll ('.Preferences_span')
    text.forEach(txt =>{
        txt.textContent = heading
    }) 
} 
const BeanTypeSpan = heading =>{
    const text = document.querySelectorAll ('.BeanType_span')
    text.forEach(txt =>{
        txt.textContent = heading
    }) 
} 
const QuantitySpan = heading =>{
    const text = document.querySelectorAll ('.Quantity_span')
    text.forEach(txt =>{
        txt.textContent = heading
    }) 
} 
const GrindOptionSpan = heading =>{
    const text = document.querySelectorAll ('.GrindOption_span')
    text.forEach(txt =>{
        txt.textContent = heading
    }) 
} 

// change the style of List Group
function Preferences_List(){
    const boxes = document.querySelectorAll('.list-group-item')
        boxes.forEach(box => {
            box.classList.remove('list-clicked')
        });
    document.getElementById("PreferencesList").classList.add('list-clicked')
}
function BeanType_List(){
    const boxes = document.querySelectorAll('.list-group-item')
        boxes.forEach(box => {
            box.classList.remove('list-clicked')
        });
    document.getElementById("BeanTypeList").classList.add('list-clicked')
}
function Quantity_List(){
    const boxes = document.querySelectorAll('.list-group-item')
        boxes.forEach(box => {
            box.classList.remove('list-clicked')
        });
    document.getElementById("QuantityList").classList.add('list-clicked')
}
function GrindOption_List(){
    const boxes = document.querySelectorAll('.list-group-item')
        boxes.forEach(box => {
            box.classList.remove('list-clicked')
        });
    document.getElementById("GrindOptionList").classList.add('list-clicked')
}
function Deliveries_List(){
    const boxes = document.querySelectorAll('.list-group-item')
        boxes.forEach(box => {
            box.classList.remove('list-clicked')
        });
    document.getElementById("DeliveriesList").classList.add('list-clicked')
}

// control modal closing when press anywhere ouside the modal
const modal = document.getElementById("modal")
const wrapper = document.getElementById("wrapper")
modal.addEventListener('click', (e)=>{
    if(!wrapper.contains(e.target)){
        modal.close()
    }
})

// toggle hamberger icon

function toggleHamburger() {
   
    let hamburger = document.getElementById("Hamburger")
    let links = document.getElementById("links")

    hamburger.classList.toggle("active");
    links.classList.toggle("active");
   
};

