import { Component } from "react/cjs/react.development";
import './style.css'

export class Button extends Component {
    render(){ 
        const { text, onClick, disabled } = this.props;
        return (
            <button disabled={disabled} onClick={onClick} className="show-more">
                {text}
            </button>
        )
    }
}