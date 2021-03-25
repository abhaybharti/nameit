import React from 'react';
import Header from '../Header/Header';
import ResultContainer from '../ResultContainer/ResultContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name =  require('@rstacruz/startup-name-generator');

class App extends React.Component{

    // Old way to declaring state
    // constructor(){
    //     super();
    //     this.state = {
    //         headerText: 'Name It!',
    //     }
    // }

    // New way to declaring state
    state = {
        headerText: "Name It!",
        headerExpanded: true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {
        name(inputText);
        //1st approach : this.setState({headerExpanded: inputText.length > 0? false:true});
        //2nd approach : this.setState({headerExpanded: !(inputText.length > 0)});
        this.setState({
            headerExpanded: !inputText, 
            suggestedNames:inputText?name(inputText):[]});
    }

    render(){
        
        return(
        <div>
            <Header headerExpanded ={this.state.headerExpanded} headTitle={this.state.headerText}/>
            <SearchBox  onInputChange={this.handleInputChange}/>
            <ResultContainer suggestedNames={this.state.suggestedNames}/>
        </div>
        )
    }
}
export default App;