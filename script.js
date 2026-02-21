



function changeColor(element){
    
    const boxes = document.querySelectorAll('.card')
        boxes.forEach(box => {
            box.style.backgroundColor = ''
            box.style.color = ""
        });
    element.style.backgroundColor = "#0E8784"
    element.style.color = "white"
}

const PreferencesSpan = heading => document.getElementById ("Preferences_span").textContent = heading
const BeanTypeSpan = heading => document.getElementById ("BeanType_span").textContent = heading
const QuantitySpan = heading => document.getElementById ("Quantity_span").textContent = heading
const GrindOptionSpan = heading => document.getElementById ("GrindOption_span").textContent = heading

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