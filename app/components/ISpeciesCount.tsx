export interface SpeciesCount {
  iucn_category_code: string;
  iucn_category_description: string;
  category_link_to_iucn_website: string;
  iucn_header_data: {
    total_count: number;
    total_pages: number;
    date: string;
  };
}
