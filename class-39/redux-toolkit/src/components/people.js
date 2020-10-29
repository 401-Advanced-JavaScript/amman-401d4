import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { add, remove } from '../store-rtk/people.store.js';

const People = props => {
    console.log("props ---> ",props)
    const [name, setName] = useState(''); 
    /*
    // useEffect(() => {
    //     props.get();
    // }, []);
    */
    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log("in handleSubmit !! ")
        e.preventDefault();
        // add value to store data, using an action : add
        props.add(name);
    }

    console.log("props.people: ",props.people)
    return (
        <section>
            <ul>
                {props.people.map((person, idx) => <li 
                key={idx}
                onClick={()=> props.remove(person.name)}
                >{person.name}</li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} />
            </form>
        </section>
    )
}

// error faced : 
// index.js:1 mapStateToProps() in Connect(People) must return a plain object. Instead received undefined
// fix : make sure to return object from mapStateTpProps
const mapStateToProps = state => ({
    people: state.people
})

const mapDispatchToProps = {add, remove};
// export connection with the store props and actions to be dispatched and People
export default connect(mapStateToProps, mapDispatchToProps)(People);