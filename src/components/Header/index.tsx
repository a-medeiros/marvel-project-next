import Link from 'next/link';
import { Container, ALink, LinksSection } from './styles';

export default function Header() {
  return (
    <Container>
      <LinksSection>
        <li>
          <Link href="/">
            <ALink>Personagens</ALink>
          </Link>
        </li>
        <li>
          <Link href="/#">
            <ALink>HQs</ALink>
          </Link>
        </li>
      </LinksSection>
    </Container>
  );
}
