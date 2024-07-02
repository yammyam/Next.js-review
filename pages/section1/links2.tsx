// import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Links() {
  const router = useRouter();
  // 버튼이 보인다고해서 바로 리소스를 가져오지 않고 눌렀을 때 가져옴
  // Link처럼 시작할 때 pre-fetch해오기 위해선 개발자가 useEffect를 사용해서 직접 구현해야함
  //   고로 특별한 상황이 아니라면 Link를 사용하는 것을 권장
  useEffect(() => {
    router.prefetch("/section1/getStaticProps");
  }, [router]);
  return (
    <main>
      <h1>Links</h1>
      <button
        onClick={() => {
          router.push("/section1/getStaticProps");
        }}
      >
        /getStaticProps
      </button>
    </main>
  );
}
