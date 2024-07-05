import Header from "@/components/common/Header";
import { Fragment, useEffect } from "react";
import styles from "../styles/header.module.scss";
import Link from "next/link";
import { AiOutlineShareAlt } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import MapSection from "@/components/home/MapSection";
import { Store } from "@/types/store";
import { NextPage } from "next";
import useStores from "@/hooks/useStores";

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <Fragment>
      <Header
        rightElements={[
          <button
            onClick={() => {
              alert("복사");
            }}
            className={styles.box}
            style={{ marginRight: 8 }}
            key="button"
          >
            <AiOutlineShareAlt size={20} />
          </button>,
          <Link href="/section2/feedback" className={styles.box} key="link">
            <VscFeedback size={20} />
          </Link>,
        ]}
      />
      <main style={{ width: "100%", height: "100%" }}>
        <MapSection />
      </main>
    </Fragment>
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
