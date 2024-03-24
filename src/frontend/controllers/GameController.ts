import autobind from 'autobind-decorator';
import _ from 'lodash';
import { GameItem } from '../models/GameItem';
import { GameItemStatus } from '../models/GameItem';
 export class GameController{
   private items: GameItem[] = [];
       constructor(items: GameItem[], public element: HTMLElement) {
           this.initGame(items);
       }
       initGame(initData: GameItem[]): void{
        for (const item of initData) { 
          this.items.push(item); 
          this.items.push(new GameItem(item.id, item.divId, item.image));
       }
       let id: number = 1; 
       this. items. forEach(it =>{ 
          it.status = GameItemStatus.Close;
           it.divId = 'd' + id; 
           id ++;
       });
     } 
       reinitGAme(): void {
       }
      //  isWinGame() : boolean{
      //  }
       renderHTML(rootElement: HTMLElement, item: GameItem){
     //      <div class="col-2 gameItem m-2 p1 text-center">
     //      <img src="" alt="" class="img-fluid">
     //  </div>
     const divItem : HTMLDivElement = document.createElement('div'); 
     divItem.className = `col-2 gameItem m-2 p1 text-center`; 
     divItem.id = item.divId;
      divItem. addEventListener('click', this.processGameItemClicked);
     const imgItem: HTMLImageElement = document.createElement('img'); 
     imgItem.src = `images/${item.image}`;

     imgItem.className = 'img-fluid visible';
     item.imageElement = imgItem; 
      divItem.appendChild(imgItem);
     rootElement.appendChild(divItem);
       }
       renderResetButton(rootElement: HTMLElement): void{
       }
       renderGameBoard(): void{
        this.shuffle();
        let boarDiv: HTMLElement=this.element.querySelector('#board')as HTMLElement;
        if(boarDiv){
          this.items.forEach(it=>
            this.renderHTML(boarDiv,it))
        }
        this.renderResetButton(this.element)
       }    
      //  isMatched(id: number, imgElement: HTMLImageElement): boolean{
      //  } 
       changeMatchedBackground(imgElement: HTMLElement | null, isMatched: boolean = true) {
       } 
       @autobind
        processGameItemClicked(event: Event) {
       }
            @autobind 
            processResetButtonClicked(event: Event) : void{
            } 
            shuffle(){
              this.items=_.shuffle(this.items);
       }
      }