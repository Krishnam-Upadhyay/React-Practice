import {FaTrashAlt} from 'react-icons/fa'
const LineItem=({item,handleCheck,hadleDelete})=>{
    return ( <li className='item' >
    <input
    type='checkbox'
    onChange={()=>{handleCheck(item.id)}}
    checked={item.checked}
    
    />
    <label
    style={(item.checked) ? { textDecoration: 'line-through' } : null}
    onDoubleClick={()=>{handleCheck(item.id)}}

    >{item.item}</label>
    <FaTrashAlt
        onClick={()=>hadleDelete(item.id)}
        role ='button'
        tabIndex='0'

/>

</li>)
    
}
export default LineItem;