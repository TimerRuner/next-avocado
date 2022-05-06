import styles from "../styles/Footer.module.css"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardL}>
                <h1 className={styles.title}>AVOCADO CREATIVES</h1>
                <h2 className={styles.linkTitle}>
                    <Link href="/contact" passHref className={styles.link}>
                        <a>
                            <span className={styles.linkText}>
                                WORK WITH US
                            </span>
                            <Image
                                src="/img/link.png"
                                width="40"
                                height="40"
                                alt="footer"
                            />
                        </a>
                    </Link>
                </h2>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    12 ADAM SETREET NY <br /> USA
                </div>
                <div className={styles.cardItem}>
                    CONTACT@LAMA.DEV <br /> 234 235 2234
                </div>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    FOLLOW US <br /> __FB __IN __BE __TW
                </div>
                <div className={styles.cardItem}>
                    @ 2022 LAMA INTERACTIVE, <br /> ALL RIGHTS RESERVED
                </div>
            </div>
        </div>
    )
}

export default Footer
