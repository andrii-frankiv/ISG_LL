let postId = 0;
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})

function putPost(){
    postId++;
    function putNextpost(postId){
        let text_title = document.getElementById('text_title').value;
        let text = document.getElementById('some_text').value;

    fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        body: JSON.stringify({
        id: postId,
        title: text_title,
        body: text,
        userId: 23,
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
        
    }
    putNextpost(postId);
    return postId;
}

function getLastPost(){
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then((response) => response.json())
  .then((json) => console.log(json))
}

function getAllPost(){
    fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then((response) => response.json())
  .then((json) => console.log(json))
}