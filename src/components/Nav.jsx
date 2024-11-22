import Flex from "@react-css/flex";
import { default as React } from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <Flex justifyCenter>
      <div className={styles.linkContainer}>
        <Link className={styles.link} to="/product">
          제품검색
        </Link>
        <Link className={styles.link} to="/">
          홈페이지
        </Link>
        <Link className={styles.link} to="/dashboard">
          대시보드
        </Link>
        [&nbsp;
        <Link className={styles.link} to="/dashboard/settings">
          설정 -
        </Link>
        <Link className={styles.link} to="/dashboard/profile">
          프로필
        </Link>
        ]
      </div>
    </Flex>
  );
}
