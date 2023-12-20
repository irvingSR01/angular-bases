import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DBZService {

  public characters: Character[] = [
    {
      id: uuidv4(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuidv4(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuidv4(),
      name: 'Vegetta',
      power: 7800
    }
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuidv4(), ...character }
    this.characters = [...this.characters,
      newCharacter
    ]
  }

  onDeleteCharacter(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id)
  }
}
