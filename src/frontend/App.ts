import { GameController } from './controllers/GameController'; 
import { GameItem } from './models/GameItem';
import './style.css';
const rootElement : HTMLElement | null = document. querySelector('#app'); 
var gameApp: GameController | null = null;
if(rootElement){
       gameApp = new GameController([
              new GameItem (1,'','5.jpg'),
              new GameItem (2,'','2.jpg'),
              new GameItem (3,'','3.jpg'),
              new GameItem (4,'','4.jpg'),
              new GameItem (5,'','6.png'),
              new GameItem (6,'','2.jpg'),
              new GameItem (7,'','3.jpg'),
              new GameItem (8,'','4.jpg'),
              new GameItem (9,'','6.png'),
              new GameItem (10,'','3.jpg'),
       ],rootElement);
       gameApp.renderGameBoard();
}