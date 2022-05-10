import { Component } from "react/cjs/react.development";
import './style.css'

export class Button extends Component {
    render(){ 
        const { text, onClick } = this.props;
        return (
            <button onClick={onClick} className="show-more">
                {text}
            </button>
        )
    }
}