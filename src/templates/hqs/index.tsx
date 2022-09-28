import Header from '../../components/Header';
import Item from '../../components/Item';
import { Comic } from '../../utils/types';
import { ItemsContainer, Section } from './styles';

type Props = {
  hqs: Comic[];
};

export default function HQS({ hqs }: Props) {
  return (
    <>
      <Header />
      <Section>
        <ItemsContainer>
          {hqs?.map(hq => (
            <Item
              key={hq.id}
              name={hq.title}
              image={`${hq.thumbnail.path}.${hq.thumbnail.extension}`}
            />
          ))}
        </ItemsContainer>
      </Section>
    </>
  );
}
