// Imports
import "./styles.css";
import avatar from "../src/img/avatar.jpg";
import logo from "../src/img/logo.jpg";
import { Header } from "./components/Header";

export default function App() {
  return (
    <>
      <Header className="header">{{ logo: logo, avatar: avatar }}</Header>
      <main>content goes here…</main>
    </>
  );
}
// {{doppelt geschweifte Klammern verwenden um Objektnotation zu aktivieren}} => key: value PAARE mit , kommata getrennt
// {[eckige klammern in geschweiften verwenden um arrays zu verwenden]}