import {Component} from 'react';

class Task extends Component{
    constructor(props){
        super(props);
        this.state = {count:""};
    }

    

    wordCount = (event) =>{
        var c1=0;
        var inp = event.target.value;
        var text = inp.split(" ");
        var n1;
        for(var chr=0; chr<text.length;chr++){
            n1 = text[chr];
            if(n1 === ' ' || n1.indexOf("") !== -1){
                c1++;
            }
        }
        this.setState({
            count: c1
        })
    }
    render(){
        const myStyle = {
            margin:"20px",
            padding:"15px",
            boxShadow:"2px 2px 2px 2px grey",
            width:"700px",
            align:"center"
        }
        return(
            
            <div style = {myStyle}>
                <h2 style={{fontFamily:"Arial"}}>Responsive Paragraph Word Counter</h2>
                <textarea id="data" rows="15" cols="75" onChange={this.wordCount}></textarea>
                <h3>Word Count: {this.state.count}</h3>
            </div>
            
        )
    }
}

export default Task