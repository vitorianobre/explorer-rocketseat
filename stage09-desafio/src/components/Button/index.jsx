import { Container } from "./styles";

export function Button({icon: Icon, title, isDelete, ...rest}) {
    return (
        <Container type="button" className={isDelete ? "button-delete" : "button-save"} {...rest}>
            {Icon && <Icon size={20} />}
            {title}
        </Container>
    );
}