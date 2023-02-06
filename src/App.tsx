import style from './App.module.scss';
import Card from './components/Card';
import Formulario from './components/Formulario';
import { RecoilRoot } from 'recoil'
import ListaDeEventos from './components/ListaDeEventos';
import Calendario from './components/Calendario';

function App() {
  return (
    <RecoilRoot>
      <div className={style.App}>
        <div className={style.Coluna}>
          <Card>
            <Formulario />
          </Card>
          <hr />
          <Card>
            <ListaDeEventos />
          </Card>
        </div>
        <div className={style.Coluna}>
          <Calendario />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
