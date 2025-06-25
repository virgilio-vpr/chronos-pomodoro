import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium,
          assumenda. Aperiam repellat porro ad repudiandae? Eum, magni iste.
          Ipsam libero repellendus aperiam veniam excepturi, quisquam assumenda
          et pariatur illum in.
        </p>
      </Container>
    </MainTemplate>
  );
}
