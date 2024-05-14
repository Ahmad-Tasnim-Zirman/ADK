//Navigation-Section
function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '10px';
  }
}

//FAQ-Section
// const acc = document.getElementsByClassName("accordion");
// for (let i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }
const accordions = document.getElementsByClassName("accordion");
let currentlyActiveAccordion;

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function() {
    // Check if there's an already open accordion and close it if it's not the one being clicked
    if (currentlyActiveAccordion && currentlyActiveAccordion !== this) {
      currentlyActiveAccordion.classList.remove("active");
      currentlyActiveAccordion.nextElementSibling.style.maxHeight = null;
    }

    // Toggle the current accordion
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    // Update the currently active accordion
    currentlyActiveAccordion = this.classList.contains("active") ? this : null;
  });
}
