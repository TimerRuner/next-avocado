import styles from "../styles/Intro.module.css"
import Image from "next/image"
import Circle from "./Circle"

const Intro = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
            <Circle backgroundColor="#01c686" right="-50vh" />
            <div className={styles.card}>
                <h1 className={styles.title}>
                    <span className={styles.brand}>AVOCADO</span>DIGITAL PRODUCT
                    AGENCY
                </h1>
                <p className={styles.descr}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                </p>
                <button className={styles.button}>DISCOVER</button>
            </div>
            <div className={styles.card}>
                <Image
                    src="/img/Avocado.png"
                    width="100%"
                    height="100%"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Intro
