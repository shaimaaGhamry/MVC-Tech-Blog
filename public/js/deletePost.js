async function deletePost(post_id){
    
    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE' ,       
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if(response.ok){
        document.location.replace("/dashboard")
      }else{
        alert(response.statusText);
      }

}


  
