import { DataModel } from '../../core/database/storage/data-model';
import { Favorites } from '../other/favorites';
import { LodestoneIdEntry } from './lodestone-id-entry';
import { Character } from '@xivapi/angular-client';
import { Consumable } from '../../pages/simulator/model/consumable';
import { DeserializeAs } from '@kaiu/serializer';
import { DefaultConsumables } from '../other/default-consumables';

export class TeamcraftUser extends DataModel {
  defaultLodestoneId: number;
  // FC of the character currently selected
  currentFcId: string;
  lodestoneIds: LodestoneIdEntry[] = [];

  customCharacters: Partial<Character>[] = [];

  favorites: Favorites = { lists: [], workshops: [] };

  contacts: string[] = [];

  admin = false;

  patron = false;

  //TODO Default consumables
}
