function Header(props){//props = properties
    return (
        <header>
            <h1>{props.title}</h1>
            <h2>{props.name}</h2>
        </header>
    )
}

export default Header