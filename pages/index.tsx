import { useEffect } from "react";
import MapSection from "@/components/home/MapSection";
import { Store } from "@/types/store";
import { NextPage } from "next";
import useStores from "@/hooks/useStores";
import HomeHeader from "@/components/home/Header";
import DetailSection from "@/components/home/DetailSection";

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <>
      <HomeHeader />
      <main
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <MapSection />
        <DetailSection />
      </main>
    </>
  );
};
export default Home;

export async function getStaticProps() {
  // 추후에 next api routes로 불러오기
  const stores = (await import("../public/stores.json")).default;
  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
