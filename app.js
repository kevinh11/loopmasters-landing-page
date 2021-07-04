let ham_input = document.getElementById("ham-checkbox")
let close_button = document.getElementById("close-checkbox")

function toggleInput(event) {
    item = event.target
    if (item.id == "ham-checkbox") {
        if (item.checked) {
            document.getElementById("navul").style.top = "0px"
            document.body.style.overflowY = "hidden"

            item.checked = false
        }
        else {
            document.getElementById("navul").style.top = "-1000px"
            document.body.style.overflowY = "visible"

            item.checked = true
    
        }   
    }
    else  {
        if (item.checked) {
            document.getElementById("navul").style.top = "-1000px"
            document.body.style.overflowY = "visible"

            item.checked = false
        }
        else {
            document.getElementById("navul").style.top = "0px"
            document.body.style.overflowY = "hidden"
            item.checked = true

    
        }  

    }

}

ham_input.addEventListener('click',toggleInput)
close_button.addEventListener('click',toggleInput)