

import ItemList from './ItemList'
const Content = ({items,handleCheck,hadleDelete}) => {
   
   
    return (
        <main>
             {items.length ? (
                <ItemList
                items={items}
                handleCheck={handleCheck}
                hadleDelete={hadleDelete}

                
                
                
                ></ItemList>
          
             ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
         
        </main>
    )
}

export default Content