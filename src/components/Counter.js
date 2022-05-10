import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    //re-rendering
    return (
        <div className="Counter">
            <h2>Counter</h2>

            <p>You clicked {count} times</p>

            <button onClick={() => setCount(count - 1)}> - </button>
            <button onClick={() => setCount(count + 1)}> + </button>
        </div>
    );
}


// class Counter extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             count: 0
//         }
//     }

//     render() {
//         return (
//             <div className="Counter">
//                 <h2>Counter</h2>

//                 <p>You clicked {this.state.count} times</p>

//                 <button onClick={() => this.setState({ count: this.state.count - 1 })}> - </button>
//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}> + </button>
//             </div>
//         );
//     }
// }


export default Counter;