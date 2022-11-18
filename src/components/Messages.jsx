import styles from "../css/App.module.css";
import { useI18n } from "../i18n/context";
function Messages(props) {
    const i18n = useI18n();
    return (
        <div className={styles.Messages}>
            <p>{i18n.t('messages_count', { count: props.messages.length })}</p>
            {props.messages.map((msg) => (
                <div className="message">
                    <strong>{msg.topic}</strong>
                    <br />
                    {msg.body}
                </div>
            ))}
        </div>
    )
}
export default Messages;