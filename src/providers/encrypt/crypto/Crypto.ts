import crypto from 'node:crypto';
import { EncryptProvider } from '../EncryptProvider';

export class CryptoProvider implements EncryptProvider {
  async hash(text: string): Promise<string> {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
      .pbkdf2Sync(text, salt, 1000, 64, 'sha512')
      .toString('hex');

    return `${salt}:${hash}`;
  }

  async verify(text: string, hashText: string): Promise<boolean> {
    const [salt, hash] = hashText.split(':');
    const hashVerify = crypto
      .pbkdf2Sync(text, salt, 1000, 64, 'sha512')
      .toString('hex');

    return hash === hashVerify;
  }
}
