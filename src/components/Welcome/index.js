const Welcome = props =>{
    const {name,greetings} = props;
    return (
        <h1 className="header-one">
            {greetings},{name}
        </h1>
    )
}

Welcome.defaultProps = {
    name: "radha",
    greetings:"hi"
}

export default Welcome