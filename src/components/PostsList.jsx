import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';

const PostsList = () => {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author='John' body='React.js is awesome' />
                <Post author='Doe' body='Check out the full course!' />
            </ul>
        </>
    );
};

export default PostsList;