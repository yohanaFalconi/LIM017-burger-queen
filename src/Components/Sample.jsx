const sujeto = {
  nombre:'juanito', 
  url: "https://via.placeholder.com/64",
  texto: 'esto es un comentario'
}

const Saludo = (props) => {
  console.log('esto', props);
  return (
    <h1> Hola {props.persona}</h1>
  )
}

function Comment(props) {
    return (
      <div>
        <h1>Components</h1>
        <Saludo persona='jiji'/>
        <Saludo persona='pepe'/>
      </div>
    );
  }
export default Comment;


