import styles from "../css/App.module.css";
import { useI18n } from "../i18n/context";
function Header(props) {
    const i18n = useI18n();
    return (
        <div className={styles.App}>
            <header className={styles.header}>
                <a
                    className={styles.link}
                    href="https://github.com/solidjs/solid"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {i18n.t('title')}
                </a>
            </header>
        </div>
    )
}
export default Header;