import type { JSX } from "react";
import { TagContainer } from "./styles";

type Props = {
    children: JSX.Element
}

const TagB = ({ children }: Props) => (
    <TagContainer>{children}</TagContainer>
)

export default TagB;