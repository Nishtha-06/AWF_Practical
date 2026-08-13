function Skills(props) {
    return (
        <section>
            <h2>Skills</h2>

            <ul>
                <li>{props.skill1}</li>
                <li>{props.skill2}</li>
                <li>{props.skill3}</li>
            </ul>
        </section>
    );
}

export default Skills;