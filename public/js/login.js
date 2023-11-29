//login submission
async function loginFormHandler(event) {
  event.preventDefault();
  // Collect values from the login form
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  // Send a POST request to the API endpoint
  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // If successful, redirect the browser to the dashboard page

    async function loginFormHandler(event) {
      event.preventDefault();
      // Collect values from the login form
      const username = document.querySelector("#username-login").value.trim();
      const password = document.querySelector("#password-login").value.trim();

      // Send a POST request to the API endpoint
      if (username && password) {
        const response = await fetch("/api/users/login", {
          method: "POST",
          body: JSON.stringify({
            username,
            password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        // If successful, redirect the browser to the dashboard page
        if (response.ok) {
          document.location.replace("/dashboard");
        } else {
          alert(response.statusText);
        }
      } else {
        alert("Please enter both username and password.");
      }
    }
  }
}

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
