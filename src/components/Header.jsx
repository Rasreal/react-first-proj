
const strings = ["core", "fundamental", "best"];

const getRandomNumber = () => {
  return Math.floor(Math.random() * 3); // Generates a random number from 0 to 2
};
export default function Header() {
     const desc = strings[getRandomNumber()];
   
     return (
       <header>
         <img src="/src/assets/react-core-concepts.png" alt="Stylized atom" />
         <h1>React Essentials</h1>
         <p>
           {desc} React concepts you will need for almost any app you are going to
           1!
         </p>
       </header>
     );
   }