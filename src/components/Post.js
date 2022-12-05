function Post(props) {

  const defaultTitle = "Sin título";

  return (
    <>

      {props.title ? (
        <h1>{props.title}</h1>
      ) : (
        <h1>{defaultTitle}</h1>
      )
      }

      <a href="">{props.link}</a>
      <p>{props.paragraph}</p>
      <button className='btn btn-success'>{props.buttonText}</button> 

    </>
  );
}

export default Post;