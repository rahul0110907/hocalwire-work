const data =[
    {
        title: "Cloned Fingerprints Scam: The story Of Addhar Enabled Payment System",
        content: "The AePS was launched in 2014 by the Indian government to empower...",
        author:'-By UmeshKumar Roy | 2 days ago',
        type:'Decode'
    },
    {
        title: "Asia Cup 2023 : Fake Anti-BCCI Quate Falsely Attributed To Sunil... ",
        content: "Boom Found that the quote is fake and sunil Gavaskar has made no such...",
        author:'-By Anmol Alphonso | 2 days ago',
         type:'Sports'
    },
    {
        title: "AI-Generated Image Of Aamir Khan Viral As Lala Amarnath Biopic Look",
        content: "Boom Found that the image has been generated using Artifical...",
        author:'-By Swasti Chatterjee | 8 days ago',
        type:'Fact Check'
    },
    {
        title: "Image of Train Decorated With Flowers for Onam is Fake" ,
        content: "Boom Found that the image has been made using generative-AI and is not...",
        author:'-By Hazel Gandhi | 8 days ago',
        type:'Fact Check'
    },
]


function displayPosts() {
    const blogPostsContainer = document.getElementById("content-div");

    data.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("blog");

        
       
        postElement.innerHTML = `
        <div class='top'>
        <span class='type'>${post.type}</span>
        <div class='icons'>
        <span class="fa fa fa-share icon"></span>   
        <span class="fas fa-ellipsis-v "></span>   
        </div>
        </div>
           <h1>${post.title}</h1>
            <section class='maincontent'>${post.content}</section>
            <p class='author'>${post.author}</p>
      `;

        blogPostsContainer.appendChild(postElement);
    });
}

// Call the function to display blog posts when the page loads
window.onload = displayPosts;