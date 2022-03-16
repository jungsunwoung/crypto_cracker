import styled from "styled-components";
import { useState } from "react";
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}
//?를 붙이면 props 가 optional 로 바뀜
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 100px;
`;

//shape of the object
//object가 어떻게 보일지 알려주는게 interface
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}
//text가 없으면 default text로
function Circle({ bgColor, borderColor, text = "default text " }: CircleProps) {
  const [counter, setCounter] = useState<number | string | boolean>(1);

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
