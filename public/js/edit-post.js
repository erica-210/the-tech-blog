// function to edit post
async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document
      .querySelector('textarea[name="content"]')
      .value.trim();
  
    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
  
    if (title && content) {
      const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          post_id: id,
          title,
          content,
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
  }}
  };
  
  document.querySelector(".edit-post-form").addEventListener("submit", editFormHandler);