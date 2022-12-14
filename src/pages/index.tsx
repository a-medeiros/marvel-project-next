import Head from 'next/head';
import axios from 'axios';
import md5 from 'md5';
import { GetStaticProps } from 'next';
import Home from '../templates/home';
import { Character } from '../utils/types';

type Props = {
  characters: Character[];
};

export default function Index({ characters }: Props) {
  return (
    <div>
      <Head>
        <title>Characters</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home characters={characters} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const publicKey = '72ea2d0b3c9ccc1228d9f4da35bb8667';
  const privateKey = '4cb94aecd28a4e71b9c3829f3376d4e99e34c9eb';
  const ts = Number(new Date());
  const hash = md5(ts + privateKey + publicKey);

  const data = await axios.get(
    `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=100`
  );

  return {
    props: {
      characters: data.data.data.results
    },
    revalidate: 60 * 60 * 3
  };
};
