import { IdentifierProvider } from '../IdentifierProvider';
import { v4 as uuidv4 } from 'uuid';

export class UuidProvider implements IdentifierProvider {
  generate(): string {
    return uuidv4();
  }
}
