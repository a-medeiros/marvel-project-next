import Header from '../../components/Header';
import Item from '../../components/Item';
import { CharactersContainer, Container, Section } from './styles';
import { Character } from '../../utils/types';

type Props = {
  characters: Character[];
};

export default function Home({ characters }: Props) {
  return (
    <Container>
      <Header />
      <Section>
        <CharactersContainer>
          {characters?.map(character => (
            <Item
              key={character.id}
              name={character.name}
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            />
          ))}
        </CharactersContainer>
      </Section>
    </Container>
  );
}
