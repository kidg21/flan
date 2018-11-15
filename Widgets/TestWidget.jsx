import react from 'React'

export class TestWidget extends react.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onclick={() => { alert("button"); }}>button</button>
        );
    }

}