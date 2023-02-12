export interface IPaginated<T> {
  collection: T[];
  hasNextPage: boolean;
  query: {
    limit: number;
    offset: number;
  };
}
