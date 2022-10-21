function FooterComponent(props){
    return (
        <div className="footer">
            <button type="button" className="btn btn-primary">Primary</button>
            @copy; {props.copyright} <em>{props.company}</em>
            <p>{new Date().toDateString()}</p>
        </div>
    );
}

export default FooterComponent;