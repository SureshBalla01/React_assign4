import './css/Footercomponent.css';
function FooterComponent(props){
    return (
        <div className="footer">
            @copy; {props.copyright} <em>{props.company}</em>
         
        </div>
    );
}

export default FooterComponent;