import "./style.css";

const Form = () => (
    <form className="section__form">
        <input className="section__input" placeholder="Co jest do zrobienia?" />
        <button className="section__addButton">Dodaj zadanie</button>
    </form>
);

export default Form;