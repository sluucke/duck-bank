import { describe, expect, it } from 'vitest';
import { CryptoProvider } from './Crypto';

const cryptoProvider = new CryptoProvider();
describe('Crypto Encrypter', () => {
  it('should encrypt a value', async () => {
    const hashedValue = cryptoProvider.hash('any_value');

    expect(hashedValue).not.toBe('any_value');
  });

  it('should compare values', async () => {
    const hashedValue = await cryptoProvider.hash('any_value');
    const isValid = await cryptoProvider.verify('any_value', hashedValue);

    expect(isValid).toBe(true);
  });
});
