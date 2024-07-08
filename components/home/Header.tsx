import styles from "../../styles/header.module.scss";
import Link from "next/link";
import { AiOutlineShareAlt } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import Header from "@/components/common/Header";
import useMap from "@/hooks/useMap";
import { useRouter } from "next/router";
import { useCallback } from "react";
import copy from "copy-to-clipboard";

interface Props {
  onClickLogo?: () => void;
  rightElements?: React.ReactElement[];
}

const HomeHeader = () => {
  const { resetMapOptions, getMapOptions } = useMap();

  const router = useRouter();
  const replaceAndCopyUrl = useCallback(() => {
    const mapOptions = getMapOptions();
    const query = `/?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`;
    router.replace(query);
    copy(location.origin + query);
  }, [router, getMapOptions]);
  return (
    <>
      <Header
        onClickLogo={resetMapOptions}
        rightElements={[
          <button
            onClick={replaceAndCopyUrl}
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
    </>
  );
};
export default HomeHeader;
