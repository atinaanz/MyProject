import React, { Component } from 'react';

 class Counter extends Component {
     state = { //anydataincomponentneeds
         value: this.props.counter.value
        // tags: []
     };

    // renderTags() {
    ///     if (this.state.tags.length === 0) return <p>there are no tags!</p>;

    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
     
    //constructor(){
     //    super();
     //   this.handleIncrement = this.handleIncrement.bind(this);
    // }
     
     handleIncrement = () => {
         //console.log(product);
      //  this.state.count++;
        this.setState({value: this.state.value + 1});
         //obj.method();
         //function();
     };

    // doHandleIncrement = () => {
    //    this.handleIncrement({id:1});
    //};

    render() {     
        return (
        <div>          
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            onClick={ () => this.handleIncrement}  
            className="btn btn-secondary btn-sm"
            >
                Increment
            </button>
            <button 
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
            >
            Delete
            </button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

   formatCount() {
       const {value: count} = this.state;
       return count === 0 ? "Zero" : this.state.value;
   }

}
 
export default Counter ;