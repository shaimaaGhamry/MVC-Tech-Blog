function displayEditDeleteDiv(post_id){
    document.getElementById("edit_delete_div"+post_id).style.display = 'block';

}

function handleEditPost(post_id){
    document.getElementById("edit_form_div"+post_id).style.display = 'block';    
}

function handleCancelEdit(post_id){
    document.getElementById("edit_form_div"+post_id).style.display = 'none';    
}

async function handleEditAction(post_id){
    const post_title = document.getElementById("edit_form_id"+post_id).children[0].value;
    const post_content = document.getElementById("edit_form_id"+post_id).children[1].value;
    
    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
          post_id: post_id,
          post_title,
          post_content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if(response.ok){
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }

    
}
