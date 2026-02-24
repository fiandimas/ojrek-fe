export interface GetLastSyncResponse {
  last_sync: string;
  status: '-' | 'success' | 'running' | 'failed';
}