import { BaseRecord } from 'adminjs';
import xml from 'xml';

export const xmlExporter = (records: BaseRecord[]): string => {
  const data = records.map(record => ({
    record: Object.entries(record.params).map(([key, value]) => ({
      [key]: value,
    })),
  }));

  const xmlString = xml(
    { records: data },
    {
      indent: '\t',
      declaration: true,
    }
  );

  const bufferData = Buffer.from(xmlString, 'utf-8');
  return bufferData.toString('base64');
};
