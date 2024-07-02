import type { NextPage } from "next";

interface Props {
  data: number;
}

const Example: NextPage<Props> = ({ data }) => {
  return (
    <main>
      <h1>get Static Props Page</h1>
      <p>data : {data}</p>
    </main>
  );
};

export default Example;

export async function getServerSideProps() {
  const delay = 2;
  const data = await new Promise((resove) =>
    setTimeout(() => {
      resove(Math.random());
    }, delay * 1000)
  );
  return {
    props: { data },
  };
}
