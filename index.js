document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let new2 = document.getElementById("text")
    // const para = document.createElement('p')
    new2.textContent = 'This is really cool!'
    // new2.replaceChild(para)
  });