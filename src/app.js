

class IndecisionApp extends React.Component {
    render() {
        const app = {
            options: ['Correr', 'Saltar', 'Bailar']
        }

        return(
            <div>
                <Header/>
                <Action options={app.options}/>
                <Options options={app.options} />
                <AddOptions/>
            </div>
        ) 
    }
}

class Header extends React.Component {
    render() {
        return(
            <div>
                <h1>Indecision App</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        const option = this.props.options[Math.floor(Math.random() * this.props.options.length)]
        alert(option);
    }


    render() {
        return(
            <div>
                <button onClick={this.handlePick.bind(this)}>What should I do?</button>
                
            </div>
        );
    }
}

class Options extends React.Component {

    handleRemoveAll() {
        alert('remove all')
    }

    render() {
        return(
            <div>
                <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
                {this.props.options.length > 0 && 
                    this.props.options.map((option, index) => (
                        <Option content={option} key={index}/>
                    ))}
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return(
            <p>
                {this.props.content}
            </p>
        )
    }
}

class AddOptions extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option) {
            alert(option);
        }
        e.target.elements.option.value = '';
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Add new option here" name="option"/>
                <button>Add</button>
            </form>
        )
    }
}

var appRoot = document.getElementById('app');

ReactDOM.render(<IndecisionApp/>, appRoot);