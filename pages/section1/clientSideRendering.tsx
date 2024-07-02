import type { NextPage } from "next";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
// next에서 window, document 같은 속성을  useEffect밖에서 사용했을 경우 (ServerError: window is not defined)에러가 발생한다
// ssr로 렌더링하고 싶지않은 컴포넌트가 있을경우 일반적인 import 가 아닌 next/dynamic을 사용함.
const NoSSR = dynamic(() => import("../../components/section1/NoSSR"), {
  ssr: false,
});
const Example: NextPage = () => {
  const [data, setData] = useState(0);
  useEffect(() => {
    const delay = 2;
    new Promise<number>((resove) =>
      setTimeout(() => resove(Math.random()), delay * 1000)
    ).then((result) => setData(result));
  }, []);
  return (
    <main>
      <h1>CRA</h1>
      <p>값 : {data}</p>
      <h1>NoSSR</h1>
      <NoSSR />
    </main>
  );
};

export default Example;
