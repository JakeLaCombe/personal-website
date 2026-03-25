import type { ReactNode } from "react";
import styles from "./AppContainer.module.css";

interface Props {
  children: ReactNode;
}

export const AppContainer = ({ children }: Props) => {
  return <div className={styles.appContainer}>{children}</div>;
};
