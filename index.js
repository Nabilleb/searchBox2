const posts = [
  "Understanding the difference between grid-template and flexbox",
  "A guide to responsive web design",
  "Mastering CSS Grid layout",
  "How to center elements with Flexbox",
  "10 tips for better frontend development",
  "CSS selectors you should know",
  "Learning JavaScript step by step",
  "Building UI components with React",
  "Using Vue.js for small projects",
  "Angular vs React vs Vue comparison"
];
const countH = document.querySelector(".count")
const postH = document.getElementById("result")
function renderPosts(postsArray, keyword = ""){
    let html = ""
    let count = 0
    postsArray.forEach(post => {
        if(post.toLowerCase().includes(keyword.toLowerCase())){
            count++
            const regex = new RegExp(`(${keyword})`,"gi")
            const highlighted = post.replace(regex,`<span class="highlight">$1</span>`);
            html += `<div class="post">${highlighted}</div>`;
        }
    });
countH.textContent = count > 0 ? `${count} posts were found`: "No post were found"
postH.innerHTML = html
}

renderPosts(posts)