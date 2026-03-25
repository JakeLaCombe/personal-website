import type { ReactNode } from "react";
import styles from "./Hero.module.css";

interface Props {
  children?: ReactNode;
}

export const Hero = ({ children }: Props) => {
  return <div className={styles.hero}>{children}</div>;
};
