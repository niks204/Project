// ✅ Get Started → Form Open
function popUp() {
  document.getElementById("popupForm").style.display = "block";
}

// ✅ Close Button (×) → Form Close
document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popupForm").style.display = "none";
});

// ✅ Form Submit → Alert
function formSubmit(event) {
  event.preventDefault(); // reload रुक जाएगा
  alert("✅ Form submitted successfully!");
}


function sendMail() {
  // Input values le lo
  let name = document.getElementById("conName").value;
  let email = document.getElementById("conEmail").value;
  let contact = document.getElementById("contact").value;
  let message = document.getElementById("message").value;

  // ✅ Simple Alert
  if (name && email && contact && message) {
    alert("✅ Thank you " + name + "! Your message has been submitted.");
  } else {
    alert("⚠️ Please fill all fields before submitting.");
  }
}
