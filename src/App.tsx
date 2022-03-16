import styled, { keyframes } from "styled-components";
import Circle from "./Circle";
import { useState } from "react";
function App() {
  // const [value, setValue] = useState("");
  // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = event;
  //   setValue(value);
  // };
  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log("hello", value);
  // };

  const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
  `;

  const H1 = styled.div`
    color: ${(props) => props.theme.textColor};
  `;
  return (
    <Container>
      <H1>protected</H1>
    </Container>
    // // <div>
    //   {/* <Circle bgColor="tomato" borderColor="yellow" text="hihi"></Circle>
    //   <Circle bgColor="teal"></Circle> */}
    //   {/* <form onSubmit={onSubmit}>
    //     <input
    //       value={value}
    //       onChange={onChange}
    //       type="text"
    //       placeholder="username"
    //     />
    //     <button>Log in</button>
    //   </form> */}
    // // </div>
  );
}

export default App;
