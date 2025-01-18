import { Container } from "./styles";

type Props = {
  link: string;
  title: string;
};

export function Cardmanga({ link, title }: Props) {
  return (
    <Container>
        <img src= {link}/>
        <figureption>{title}</figureption>
    </Container>
  );
}
