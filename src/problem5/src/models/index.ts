export type Resource = {
  id: string;
  name: string;
  description: string;
};

export type Schema = {
  resources: Resource[];
};
