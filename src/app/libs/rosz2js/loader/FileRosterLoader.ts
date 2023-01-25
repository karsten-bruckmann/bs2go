import { BlobReader, BlobWriter, ZipReader } from '@zip.js/zip.js';
import { Buffer } from 'buffer';
import * as parser from 'xml2js';
import { BSRoster } from '../types';

export default class FileRosterLoader {
  public static async load(file: File): Promise<BSRoster> {
    const zipFileReader = new BlobReader(file);
    const zipFileWriter = new BlobWriter();
    const zipReader = new ZipReader(zipFileReader);
    const entries = await zipReader.getEntries();
    const firstEntry = entries.shift();
    if (!firstEntry) {
      throw new Error('No file in zipped roster');
    }
    const result = await this.parseString(
      Buffer.from(await (await firstEntry.getData(zipFileWriter)).arrayBuffer())
    );
    await zipReader.close();
    return result;
  }

  private static parseString(data: Buffer): Promise<BSRoster> {
    return new Promise((resolve, reject) => {
      parser.parseString(data, (err: Error | null, result) => {
        if (err) return reject(err);
        if (!result) return reject(new Error('Failed to parse entry'));
        return resolve(result.roster);
      });
    });
  }
}
