import md5 from 'md5';
// import Home from '../../templates/home';

export default async function Index() {
  // const publicKey = process.env.MARVEL_PUBLIC_KEY;
  // const privateKey = process.env.MARVEL_PRIVATE_KEY;
  // const ts = Number(new Date());
  // const hash = md5(ts + privateKey + publicKey);

  // const data = await fetch(
  //   `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=100`
  // );

  // console.log(data);
  console.log("aqui")

  return (
    <div>
        <h1 className='text-red-500'>Hahaha</h1>
      {/* <Home characters={characters} /> */}
    </div>
  );
}

