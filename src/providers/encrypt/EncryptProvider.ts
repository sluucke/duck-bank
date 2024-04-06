export interface EncryptProvider {
  hash(text: string): Promise<string>;
  verify(text: string, hashText: string): Promise<boolean>;
}
