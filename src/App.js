

function Food({name, picture}){
 
  return (<div>
    <h3>Я хочу кушать {name}</h3>
    <img src={picture}></img>
   
    </div>
  )
};

const foodILike = [
  {
    'name': 'борщ',
    'image': 'https://proprikol.ru/wp-content/uploads/2020/04/kartinki-borshh-55.jpg'
  },
  {
    'name': 'квас',
    'image':'https://attuale.ru/wp-content/uploads/2018/11/Kvas-7.jpg' 
  }
];

function App() {
  return (
    <div>
      
      {foodILike.map(dish => <Food name = {dish.name} pictures = {dish.pictures}/>)}
    </div>
    
  );
}

export default App;
