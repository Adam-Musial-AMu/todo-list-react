import Header from "../../common/Header";
import Section from "../../common/Section";
import { Container } from "../../common/Container/styled"


function Author() {
    return (
        <Container>
            <Header title="O Autorze" />
            <Section
                title="Adam Musiał"
                content={
                    <>
                        <header>
                            <h1>Witaj! Jestem Frontend Developerem 😉</h1>
                        </header>
                        <section>
                            <h2>O mnie</h2>
                            <p>Jestem profesjonalistą z wieloletnim doświadczeniem w dziedzinie elektroniki. Przez wiele lat pracowałem nad projektowaniem i rozwijaniem różnorodnych urządzeń elektronicznych.</p>
                            <p>Mimo mojego bogatego doświadczenia w elektronice, zdecydowałem się na nowe wyzwanie i postanowiłem zostać Frontend Developerem. Fascynuje mnie świat programowania, tworzenia interaktywnych aplikacji internetowych i pracy nad wizualnym aspektem stron internetowych.</p>
                        </section>
                        <section>
                            <h2>Moje umiejętności</h2>
                            <ul>
                                <li>Programowanie w JavaScript</li>
                                <li>Tworzenie responsywnych stron internetowych</li>
                                <li>Używanie narzędzi i bibliotek Frontend, takich jak React, Redux itp</li>
                                <li>Rozwiązywanie problemów i optymalizacja kodu</li>
                                <li>Zrozumienie zasad projektowania interfejsów użytkownika</li>
                            </ul>
                        </section>
                        <section>
                            <h2>Moja pasja</h2>
                            <p>Moja pasja do Frontend Developmentu jest napędzana chęcią ciągłego rozwoju i tworzenia atrakcyjnych, użytecznych i responsywnych interfejsów użytkownika. Jestem zdeterminowany, aby poznawać nowe technologie i narzędzia, które pomogą mi stać się jeszcze lepszym Frontend Developerem.</p>
                        </section>
                        <footer>
                            <p>Jeśli masz pytania lub chcesz się skontaktować - zapraszam 🙋‍♂️</p>
                        </footer>
                    </>}
            />
        </Container>
    )
}

export default Author;