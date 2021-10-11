import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";
// const baseURL = "./db.json";

export default function App() {
    const [posts, setPosts] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
        setPosts(response.data);
        console.log(response.data)
        });
    }, []);

    const createPost = () => {
        axios
        .post(baseURL, {
            id: 4,
            title: "Hello World!",
            body: "This is a new post."
        })
        .then((response) => {
            console.log(response)
            setPosts([... posts, response.data]);
        });
    }

    const updatePost = () => {
        axios.put(`${baseURL}/1`,{
            userId: 1,
            title: "Hello World!",
            body: "This is an updated post."
        })
        .then((response) => {
            const addPost = posts[0].title = response.data.title
            setPosts(posts.map(post => post.id === 1 ? {...response.data} : post));
            console.table(posts.map(post => post.id +"||||||"+ post.title +"||||||"+ post.body))
        });
    }

    const deletePost = () => {
        axios.delete(`${baseURL}/1`)
        .then((response) => {
            const newList = posts.filter(post => post.id !== 1)
            setPosts(newList)
            console.log(posts)
        });
    }

    if (!posts) return "No posts!";

    return (
        //   TODO: fix error, all crashed
        <div>
            <button onClick={() => createPost()}>Create Post</button>
            <button onClick={() => updatePost()}>Update Post</button>
            <button onClick={() => deletePost()}>Delete Post</button>
            {posts.map(post => 
                <div key={post.id}>
                    <span>
                        <b>{`${post.id}. `}</b>
                        <b>{`${(post.title).toUpperCase()} `}</b> 
                        {post.body}
                    </span>
                </div>        
            )}
        </div>
    );
}