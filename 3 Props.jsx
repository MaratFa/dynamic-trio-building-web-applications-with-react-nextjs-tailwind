// Component with props
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
export default Greeting;

// Calling the component with prop "name"
<Greeting name="John" />;
