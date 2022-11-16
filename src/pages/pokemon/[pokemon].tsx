import { useRouter } from "next/router";

function Pokemon() {
  const router = useRouter();
  console.log(router.query.pokemon);

  return (
    <>
      <h1>Teste</h1>
      <h1>Teste</h1>
    </>
  );
}

export default Pokemon;
