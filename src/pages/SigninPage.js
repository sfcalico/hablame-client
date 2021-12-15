import { useContext } from "react";
import { VisitorContext } from "../context/VisitorContext";

const Header = () => {
    const { visitorState } = useContext(VisitorContext);
    const [ visitor ] = visitorState;
}