import { BaseRecord } from 'adminjs';

export const jsonExporter = (records: BaseRecord[]): string => {
  const jsonData = JSON.stringify(records.map(r => r.params));
  const bufferData = Buffer.from(jsonData, 'utf-8');
  return bufferData.toString('base64');
};
