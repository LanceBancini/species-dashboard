export interface SpeciesCount {
  iucn_category_code: string;
  iucn_category_description: string;
  iucn_header_data: {
    total_count: number;
    total_pages: number;
    date: string;
  };
}
