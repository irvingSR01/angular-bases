import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./list.component.html`,
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  @Output()
  public onDeleteCharacterByID: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    // todo: emitir el id del personaje
    if (!id) return
    this.onDeleteCharacterByID.emit(id);
  }

  // onDeleleId
}
