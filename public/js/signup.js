//Sign up submission
const confirmed = confirm("Are you sure you want to sign up?");
if (confirmed) {
  signupFormHandler(event);
  async function signupFormHandler(event) {
    event.preventDefault();
    // Collect values from the sign up form
    const username = document.querySelector("#username-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
    // Send a POST request to the API endpoint
    if (username && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        console.log("success");
        document.location.replace("/dashboard");
      } else {
        const errorMessage = await response.text();
        alert(`Signup failed: ${errorMessage}`);
      }
    } else {
      alert("Please enter both username and password.");
    }
  }
}

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
