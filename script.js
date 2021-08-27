let post = document.querySelectorAll('.post');
let open_post = document.querySelector('.open_post');
let open_img = document.querySelector('.open_img');
let closePost = document.querySelector('.closePost');

for (let i = 0; post.length >= i; i++){
    post[i].addEventListener('click', () => {
        open_post.style.display = 'flex';
        open_img.style.display = 'block';
        open_img.src = post[i].children[0].src;
    })
    closePost.addEventListener('click', () => {
        open_post.style.display = 'none';
    })
    open_post.addEventListener('click', () => {
        open_post.style.display = 'none';
        open_img.style.display = 'none';
    })
}