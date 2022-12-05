import Post from "./Post";

function Article(props) {

  const author = props.author;

  return (
    <div>
      <Post link ="Ir a la web del autor" author={author} title="Título 1" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere rem eos architecto laborum! Velit, nam!" buttonText="Click me!" className/>
      <Post author={author} paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere rem eos architecto laborum! Velit, nam!" buttonText="Click me again!" className/>
    </div>
  );
}

export default Article;