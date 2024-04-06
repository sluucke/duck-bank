import crypto from "node:crypto";
import { EncryptProvider } from "../EncryptProvider";

export class CryptoProvider implements EncryptProvider {
  async hash(text: string): Promise<string> {
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = Buffer.from(
      crypto.hkdfSync("sha512", text, salt, "info", 64)
    ).toString("hex");

    return hash;
  }

  async verify(text: string, hashText: string): Promise<boolean> {
    const originalHash = Buffer.from(hashText, "hex");

    const salt = originalHash.slice(0, 16).toString("hex");
    const hash = Buffer.from(
      crypto.hkdfSync("sha512", text, salt, "info", 64)
    ).toString("hex");

    return hash === hashText;
  }
}
