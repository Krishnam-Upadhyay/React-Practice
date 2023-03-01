import {useState} from 'react';
const Content = () => {
    const [name,setName]=useState('Krishnam');
    const [count,setCount]=useState(0);
    
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        setName( names[int]);
    }

    const handleClickEvent =()=>{
        setCount(Number(count)+1);
        console.log(count);
    }
    
    const handleClickEvent2 =(name)=>{
        console.log(count);
    }
    const handleClickEvent3 =(e)=>{
        console.log(e.target.innerText);
    }
    
    

    return (
        <main>
            <p >
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClickEvent}>Click Me</button>
            <button onClick={handleClickEvent2}>Click Me</button>
        </main>
    )
}

export default Content