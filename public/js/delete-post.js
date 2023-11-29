// function to delete post
const confirmed = confirm("Are you sure you want to delete this post?");
if (confirmed) {
  async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
      body: JSON.stringify({
        post_id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // If successful, redirect the browser to the dashboard page
    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      const errorMessage = await response.text();
      alert(`Error: ${errorMessage}`);
    }
  }
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-post-btn")) {
    deleteFormHandler(event);
  }
});
