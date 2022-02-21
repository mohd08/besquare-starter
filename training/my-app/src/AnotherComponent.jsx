function AnotherComponent(props) {
  //   console.log(props);
  //   return props.array.map((list, id) => {
  //     return <p key={id}>{list}</p>;
  //   });
  return props.name;
}

// Another way to create a function //
const NewComponent = () => {
  return <h1>New</h1>;
};
export default AnotherComponent;
