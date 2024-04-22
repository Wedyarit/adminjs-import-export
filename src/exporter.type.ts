export const Exporters = ['csv', 'json', 'xml', 'xlsx'] as const;

export type ExporterType = (typeof Exporters)[number];
