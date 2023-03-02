
import {useState} from 'react';
import Header from './Herader'
import AddItem from './AddItem';
import SearchItems from './SearchItems';
import Content from './Content'
import Footer from './Footer';

function App() {
  

  const [items,setItems]=useState(JSON.parse(localStorage.getItem('shoppinglist')));
const [newItem,setNewItem]=useState("");
const [search,setSearch]=useState('');
let handleCheck =(id)=>{
   const listItems = items.map((item)=> item.id ===id ? {...item,checked:!item.checked} : item ) 
   setItems(listItems);
   localStorage.setItem('shoppinglist',JSON.stringify(listItems));
    
}

let hadleDelete =(id)=>{
    const listItems = items.filter((item)=>item.id !==id);
    setItems(listItems);
   localStorage.setItem('shoppinglist',JSON.stringify(listItems));

};

const addAndSave =(newItem)=>{
  setItems(newItem);
   localStorage.setItem('shoppinglist',JSON.stringify(newItem));

}

const addItem=(item)=>{
  const id = items.length?items[items.length-1].id+1:1;
  const myNewItem={id,checked:false,item:item};
  const listItems = [...items,myNewItem];
  addAndSave(listItems);

}

const handleSubmit=(e)=>{
  e.preventDefault();
  if(!newItem){
    alert('Please Enter a item');
  }
  addItem(newItem);
  setNewItem('');
}
 

  return (
    <div className="App" >
      <Header
      title='Groceries List'
      />

      <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />

      <SearchItems
      search={search}
      setSearch={setSearch}
      />

      <Content
      items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      hadleDelete={hadleDelete}
      />

      <Footer 
      length={items.length}
      />
     
  </div>
  );
}

export default App;
