import { describe, expect, it } from 'vitest';
import { UuidProvider } from './UuidProvider';

describe('Uuid Provider', () => {
  it('should be able to generate an uuid', () => {
    const uuidProvider = new UuidProvider();
    const uuid = uuidProvider.generate();

    expect(uuid).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
    );
  });
});
