
  async function logout() {
    const response = await fetch("/api/users/logout", {
      method: "post",
      headers: { "Content-Type": "application/json" },
    });
    // If successful, redirect the browser to the main page
    if (response.ok) {
      document.location.replace("/");
    } else {
      const errorMessage = await response.text();
      alert(`Logout failed: ${errorMessage}`);
    }
  }

document.addEventListener("click", (event) => {
  if (event.target.id === "logout") {
    logout();
  }
});
