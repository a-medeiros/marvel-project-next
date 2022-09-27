import Image from 'next/image';
import { Container, Name } from './styles';

export default function Item({ name, image }) {
  return (
    <Container>
      <div style={{ position: 'relative', width: '240px', height: '340px' }}>
        <Image alt={name} src={image} layout="fill" objectFit="cover" />
      </div>
      <Name>{name}</Name>
    </Container>
  );
}
