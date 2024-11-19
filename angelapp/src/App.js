import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    
   <h1>Welcome to Angel´s website</h1>

    <p>Esta es una pagina web creada para la clase de desarrollo web donde se evidenciaran tablas, listas, una imegen junto con los enlaces al perfil del estudiante actual c:</p>
    
    <p>A continuacion se dejaran los elementos solicitados para el trabajo.</p>

    <h2>Mis perfiles para ustedes</h2>
    <p>Puedes visitar mi perfil de instagram en 
    <a href="https://www.instagram.com/juanangelsb/profilecard/?igsh=MWlzcXc5cThicnM1MA==" target="_blank">JUANANGELSB</a> para que puedas ingresar a mi perfL.</p>
    
    <p>También puedes ver mi perfil como desarrollador web en: <a href="https://github.com/juanangelsb10">GIT ING.ANGEL</a>.</p>

    <h2 id="listas">Lista</h2>
    <h3>ejemplo de lista ordenada:</h3>
    <ol>
        <li>PERFIL INSTAGRAM</li>
        <li>PERFIL GITHUB</li>
        <li>IMAGEN DE MUESTRA</li>
        <li>LISTA ORDENADA</li>
    </ol>

    <h3>Ejemplo de ista desordenada:</h3>
    <ul>
        <li>PERFIL INSTAGRAM</li>
        <li>PERFIL GITHUB</li>
        <li>IMAGEN DE MUESTRA</li>
        <li>LISTA ORDENADA</li>
    </ul>

    <h2>Tabla de Ejemplo</h2>
    <table border="20">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>JUAN</td>
                <td>ANGEL</td>
                <td>25</td>
            </tr>
            <tr>
                <td>JUAN</td>
                <td>ANGEL</td>
                <td>25</td>
            </tr>
        </tbody>
    </table>
    </div>
  );
}

export default App;
