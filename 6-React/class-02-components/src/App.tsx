import imageReact from "./assets/react.svg";
import { Button } from "./components/Button";
// named export
export function App() {
  return (
    <>
      <h1> Class-02-Components</h1>
      <p>TSX - TypeScript + HTML</p>

      <img src={imageReact} alt="imagem" />

      <img src="../public/vite.svg" alt="imagem" />

     <div>
      <Button title = "Login" color = "red"/>
      <Button title = "Adiquirir" color = "blue"/>
      <Button title="Sair"/>
     </div>
    </>
  );
}

export default App;
