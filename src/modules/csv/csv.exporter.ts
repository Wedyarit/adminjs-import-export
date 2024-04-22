import { BaseRecord } from 'adminjs';
import { parse } from 'json2csv';

export const csvExporter = (records: BaseRecord[]): string => {
  const csvString = parse(records.map(r => r.params));
  const bufferData = Buffer.from(csvString, 'utf-8');
  return bufferData.toString('base64');
};
