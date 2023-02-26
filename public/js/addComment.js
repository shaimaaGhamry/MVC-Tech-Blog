
async function addCommentHandler(event){
    // event.preventDefault();
    console.log("INSIDE eVENT hANDLER");

    const comment_text = document.querySelector("#new_comment_textarea").value;
    
    const post_id = document.location.toString()[document.location.toString().length -1];
    
    const response = await fetch(`/api/posts/addComment`, {
        method: 'POST',
        body: JSON.stringify({comment_text, post_id }),
     
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if(response.ok){
        document.location.reload();
      }else{
        alert(response.statusText);
      }

}
document
.querySelector("#add_comment_form")
.addEventListener("submit", addCommentHandler);