import md5 from 'md5';
import HQS from '../../../templates/hqs';
import { Comic } from '../../../utils/types';

export default async function Index() {
  const publicKey = process.env.MARVEL_PUBLIC_KEY;
  const privateKey = process.env.MARVEL_PRIVATE_KEY;
  const ts = Number(new Date());
  const hash = md5(ts + privateKey + publicKey);

  // const data = await fetch(
  //   `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=100`
  // );

  // console.log(data);

  return (
    <>
    <h1>HQs</h1>
      {/* <HQS hqs={hqs} /> */}
    </>
  );
}
// export const getStaticProps: GetStaticProps = async () => {
//   const publicKey = '72ea2d0b3c9ccc1228d9f4da35bb8667';
//   const privateKey = '4cb94aecd28a4e71b9c3829f3376d4e99e34c9eb';
//   const ts = Number(new Date());
//   const hash = md5(ts + privateKey + publicKey);

//   const data = await axios.get(
//     `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=100`
//   );

//   return {
//     props: {
//       hqs: data.data.data.results
//     },
//     revalidate: 60 * 60 * 3
//   };
// };

