'use client'
import styles from "./page.module.css";

import { Otp } from "@andersoww/roque-ui"

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <Otp.Root>
        <Otp.Input />
      </Otp.Root>

    </main>
  );
}
