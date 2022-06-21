let addBtn = document.querySelector(".add-btn");
let mainCont = document.querySelector(".main-cont");
let modalCont = document.querySelector(".modal-cont");
let textareaCont = document.querySelector(".textarea-cont");
let addFlag = false;

addBtn.addEventListener("click" , (e) =>{
    //Display Modal

    //Generate ticket

    //Addflag , true -> Modal Display

    //Addflag , false -> Modal None;
    addFlag = !addFlag;
    if(addFlag){
        modalCont.style.display = "flex";
    }else{
        modalCont.style.display = "none";
    }
})


modalCont.addEventListener("keydown" , (e) =>{
    let key = e.key;
    if(key === "Shift"){
        createTicket();
        modalCont.style.display = "none";
        addFlag = false;
        textareaCont.value = "";

    }
})


function createTicket() {
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML =`
    <div class = "ticket-color"></div>
    <div class="ticket-id"></div>
    <div class="task-area"></div>
    `;
    mainCont.appendChild(ticketCont);
}