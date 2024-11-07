//Base Functions
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function fetchProfile () {
    try {
        console.log("Fetching profile");
        await delay(1000);
        if (Math.random() < 0.15) {
            throw new Error ("");
        }
        return({userId: 1, name: "Mitchell C"});
    } catch (error) {
        return ("Failed to Fetch");
    }
}
async function fetchPosts () {
    try {
        console.log("Fetching posts");
        await delay(1000);
        if (Math.random() < 0.15) {
            throw new Error ("");
        }
        return([
            {postId: 1, post: "I'm post one and I'm tons of fun!"},
            {postId: 2, post: "I'm post 2 and I'm kinda blue."},
        ]);
    } catch (error) {
        return ("Failed to Fetch");
    }
}
async function fetchComments () {
    try {
        console.log("Fetching comments");
        await delay(1000);
        if (Math.random() < 0.15) {
            throw new Error ("");
        }
        
        return([
            {commentId: 1, comment: "I'm comment one and I'm kinda dumb."},
            {commentId: 2, comment: "I'm comment two, what about you?"},
        ]);
    } catch (error) {
        return ("Failed to Fetch");
    }
}

//Sequential vs Parallel
async function fetchDataSequential() {
    try{
        console.log("Fetching data sequentially");

        const profile = await fetchProfile();
        if (profile === "Failed to Fetch") {
            console.log("Could not fetch profile");
        } else {
            console.log(profile)
        };

        const posts = await fetchPosts();
        if (posts === "Failed to Fetch") {
            console.log("Could not fetch posts");
        } else {
            console.log(posts)
        };

        const comments = await fetchComments();
        if (comments === "Failed to Fetch") {
            console.log("Could not fetch comments");
        } else {
            console.log(comments)
        };
    } catch (error) {
        console.log("Error fetching sequentially");
    }
}

async function fetchDataParellel() {
    try{
        console.log("Fetching data parellel");
    
        const [profile, posts, comments] = await Promise.all([
            fetchProfile(),
            fetchPosts(),
            fetchComments(),
        ]);

        if (profile === "Failed to Fetch") {
            console.log("Could not fetch profile");
        } else {
            console.log(profile)
        };

        if (posts === "Failed to Fetch") {
            console.log("Could not fetch posts");
        } else {
            console.log(posts)
        };

        if (comments === "Failed to Fetch") {
            console.log("Could not fetch comments");
        } else {
            console.log(comments)
        };
    } catch (error) {
        console.log("Error fetching in parellel");
    }
}

//Get User Function
async function fetchUserContent() {
    try {
        console.log("Fecthing user content");
        
        const profile = await fetchProfile();
        if (profile === "Failed to Fetch") {
            console.log("Could not fetch profile");
        } else {
            console.log("Profile fetched");
        };

        const posts = await fetchPosts();
        if (posts === "Failed to Fetch") {
            console.log("Could not fetch posts");
        } else {
            console.log("Posts fetched")
        };

        const comments = await fetchComments();
        if (comments === "Failed to Fetch") {
            console.log("Could not fetch comments");
        } else {
            console.log("Comments fetched")
        };

        const userContent = {
            profile,
            posts,
            comments,
        }

        await delay(2000);
        console.log(userContent);
    } catch (error) {
        console.log("Error fetching user content");
    }
}

fetchUserContent();
