import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

const PostsList = () => {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState();
  const [enteredAuthor, setEnteredAuthor] = useState();

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

   // let modalContent;

  // if (modalIsVisible) {
  //   modalContent = (
  // <Modal onClose={hideModalHandler}>
  //   <NewPost
  //     onBodyChange={bodyChangeHandler}
  //     onAuthorChange={authorChangeHandler}
  //   />
  // </Modal>
  //   );
  // }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorChange={changeAuthorHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
      </ul>
    </>
  );
};

export default PostsList;
