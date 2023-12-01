// function to add-post
async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="content"]').value;
  
    if (title && content) {
      const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({
          title,
          content,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  // If successful, redirect the browser to the dashboard page
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector("#new-post-form").addEventListener("submit", newFormHandler);