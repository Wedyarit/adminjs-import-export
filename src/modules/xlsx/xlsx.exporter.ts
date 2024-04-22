import { BaseRecord } from 'adminjs';
import { parse } from 'json2csv';
import { convertCsvToXlsx } from '@aternus/csv-to-xlsx';
import fs from 'fs';

export const xlsxExporter = (records: BaseRecord[]): string => {
  try {
    const tempDir = 'temp';
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir);
    }

    const csvFilePath = `${tempDir}/export.csv`;
    const xlsxFilePath = `${tempDir}/export.xlsx`;

    const csvContent = parse(records.map(r => r.params));
    fs.writeFileSync(csvFilePath, csvContent);

    convertCsvToXlsx(csvFilePath, xlsxFilePath);

    const xlsxContent = fs.readFileSync(xlsxFilePath);

    fs.unlinkSync(csvFilePath);
    fs.unlinkSync(xlsxFilePath);

    return xlsxContent.toString('base64');
  } catch (error) {
    console.error('Error exporting XLSX:', error);
    throw error;
  }
};
