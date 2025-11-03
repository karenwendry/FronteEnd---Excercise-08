import HelloWorld from "../HelloWorld";

const App = () => {
  let hello = "Hello World";
  return (
    <>
      <div className="text-[25px] bg-blue-500 m-10 p-10 font-serif">
        {hello}
      </div>
      <HelloWorld/>
    </>
  );
};


export default App;