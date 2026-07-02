import Button from './Button.jsx';
import Card from './Card.jsx';
import Food from './Food.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx';

function App() {
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
      <Food />
      <Footer />
    </>
  );
}

export default App
