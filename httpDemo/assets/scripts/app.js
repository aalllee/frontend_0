const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchbutton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data = null) {
  /*
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.responseType = "json";

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("something went wrong"));
      }
    };

    xhr.onerror = function () {
      reject(new Error("failed o send request"));
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
  */

  parm = {
    method: method,
  };

  if (method === "POST" || method === "DELETE") {
    console.log("test");
    parm = {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  return fetch(url)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((errData) => {
          throw new Error("something went wrong - server-side");
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function fetchPosts() {
  sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts").then(
    (responseData) => {
      const postlist = responseData;

      for (const post of postlist) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector("h2").textContent = post.title.toUpperCase();
        postEl.querySelector("p").textContent = post.body;
        postEl.querySelector("li").id = post.id;
        listElement.append(postEl);
      }
    }
  );
}

function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

fetchbutton.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;

  createPost(enteredTitle, enteredContent);
});

postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log("Button clicked");
    const postId = event.target.closest("li").id;
    console.log(postId);
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});
