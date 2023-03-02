
import LineItem from './LineItem'
const ItemList = ({items,handleCheck,hadleDelete})=>{
    
    return  <ul>
                {items.map((item)=>{
                   return <LineItem
                   key={item.id}
                   item={item}
                   handleCheck={handleCheck}
                   hadleDelete={hadleDelete}

                   />
                })}
            </ul>
   
}
export default ItemList;