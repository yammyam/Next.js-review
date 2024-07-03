import type { NextPage } from "next";
import Image from "next/image";
import example from "/public/example.jpg";
// 이점 : 용량이 작음(webp)
// next image
const Images: NextPage = () => {
  return (
    <main>
      <section style={{ height: "500vh" }}>longlong content</section>
      <hr style={{ margin: "32px 0" }} />
      {/* <h1>img tag</h1>
      <figure>
        <img
          src="/example.jpg"
          alt="example"
          width={500}
          height={100}
          loading="lazy"
        />
        <figcaption>example img</figcaption>
      </figure> */}

      <h1>next/image</h1>
      <figure>
        <Image
          src={example}
          alt="v13image"
          width={500}
          height={100}
          placeholder="blur"
          quality={100}
          // 기본값은 75
        />
      </figure>

      {/* 아래와같이 외부에서 이미지소스를 받아올 경우 너비와 높이를 미리 알 방법이 없기때문에 명시해주지 않으면 오류가 발생함. */}
      {/* <h1>v13 image</h1>
      <figure>
        <Image
          src="https://lecture-1.vercel.app/example.jpg"
          alt="v13 image"
          width={500}
          height={100}
        />
      </figure> */}

      {/* <h1>외부링크를 사용하지만 크기를 알 방법이 없을때 fill속성을 넣을것</h1>
      <figure style={{ position: "relative", width: "500px", height: "100px" }}>
        <Image
          src="https://lecture-1.vercel.app/example.jpg"
          alt="v13 fill"
          fill
          style={{ objectFit: "cover" }}
        />
      </figure> */}
    </main>
  );
};

export default Images;
