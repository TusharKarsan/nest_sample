import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 1, name: 'Ninja01', weapon: 'Weapon01' },
    { id: 2, name: 'Ninja02', weapon: 'Weapon02' },
  ];

  getNinjas(weapon?: 'Weapon01' | 'Weapon02') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }

    return this.ninjas;
  }
}
