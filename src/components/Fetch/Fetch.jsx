import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
    const [posts, setPosts] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
        setPosts(response.data);
        console.log(response.data)
        });
    }, []);

    function createPost() {
        axios
        .post(baseURL, {
            title: "Hello World!",
            body: "This is a new post."
        })
        .then((response) => {
            debugger
            setPosts(response.data);
        });
    }



    if (!posts) return "No posts!";

    return (
        //   TODO: fix error, all crashed
        <div>
            {posts.map(post => 
                <div>
                    <span><b>{post.id}</b> <b>{post.title}</b> {post.body}</span>
                </div>        
            )}
            <button onClick={() => createPost()}>Create Post</button>
        </div>
    );
}