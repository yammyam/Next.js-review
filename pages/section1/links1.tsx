import Link from "next/link";

export default function Links() {
  return (
    <main>
      <h1>Links</h1>
      <div style={{ height: "200vh" }} />
      {/* 링크가 보이기 전까진 json파일과 js파일을 들고오지 않아 불필요한 네트워크 요청을 지양한다. */}
      {/* lazy한 방식, 리소스를 나중에 요청하는 */}
      <Link href="/section1/getStaticProps" style={{ color: "red" }}>
        /getStaticProps
      </Link>
    </main>
  );
}
