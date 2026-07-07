import Button from './Button.jsx';
import Card from './Card.jsx';
import ColorPicker from './ColorPicker.jsx';
import Counter from './Counter.jsx';
import Food from './Food.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import List from './List.jsx';
import MyComponent from './MyComponent.jsx';
import MyComponent2 from './MyComponent2.jsx';
import MyComponent3 from './MyComponent3.jsx';
import MyComponent4 from './MyComponent4.jsx';
import MyComponent5 from './MyComponent5.jsx';
import MyComponent6 from './MyComponent6.jsx';
import ProfilePicture from './ProfilePicture.jsx';
import Student from './Student.jsx'
import ToDoList from './ToDoList.jsx';
import UserGreeting from './UserGreeting.jsx';

function App() {

  const fruits = [{id: 1, name: 'Apple', calories: 95}, 
                    {id: 2, name: 'Banana', calories: 105}, 
                    {id: 3, name: 'Cherry', calories: 80}, 
                    {id: 4, name: 'Date', calories: 110}, 
                    {id: 5, name: 'Elderberry', calories: 90}];

  const vegetables = [{id: 6, name: 'Carrot', calories: 25}, 
                      {id: 7, name: 'Broccoli', calories: 55}, 
                      {id: 8, name: 'Spinach', calories: 20}, 
                      {id: 9, name: 'Bell Pepper', calories: 31}, 
                      {id: 10, name: 'Zucchini', calories: 17}];

  return (
    <>
      <Header />
      <UserGreeting isLoggedIn={true} username="Ryan"/>
      <Card />
      <Student name="Spongebob" age={30} isStudent={true} /> 
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student name="Larry" />
      <Button />
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
      <Food />
      <ProfilePicture />
      <MyComponent />
      <Counter />
      <MyComponent2 />
      <ColorPicker />
      <MyComponent3 />
      <MyComponent4 />
      <MyComponent5 />
      <ToDoList />
      <MyComponent6 />
      <Footer />
    </>
  );
}

export default App
