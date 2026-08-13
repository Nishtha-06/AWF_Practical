function Footer(props) {
    return (
        <footer>
            <p>Contact: {props.email}</p>
            <p>&copy; 2026 Student Portfolio</p>
        </footer>
    );
}

export default Footer;

//Exports the Footer component so it can be used inside App.jsx.