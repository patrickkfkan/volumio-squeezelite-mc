import { ServerCredentials } from './types/Server';

export type PluginConfigKey = keyof PluginConfigSchema;
export type PluginConfigValue<T extends PluginConfigKey> = PluginConfigSchema[T]['defaultValue'];

export type DSDPlayback = 'pcm' | 'dop' | 'DSD_U8' | 'DSD_U16_LE' | 'DSD_U16_BE' | 'DSD_U32_LE' | 'DSD_U32_BE' | 'auto';

export interface PluginConfigSchemaEntry<T, U = false> {
  defaultValue: T;
  json: U;
}

export interface PluginConfigSchema {
  playerNameType: PluginConfigSchemaEntry<'hostname' | 'custom'>;
  playerName: PluginConfigSchemaEntry<string>;
  dsdPlayback: PluginConfigSchemaEntry<DSDPlayback>;
  serverCredentials: PluginConfigSchemaEntry<ServerCredentials, true>;
}

export const PLUGIN_CONFIG_SCHEMA: PluginConfigSchema = {
  playerNameType: { defaultValue: 'hostname', json: false },
  playerName: { defaultValue: '', json: false },
  dsdPlayback: { defaultValue: 'auto', json: false },
  serverCredentials: { defaultValue: {}, json: true }
};
