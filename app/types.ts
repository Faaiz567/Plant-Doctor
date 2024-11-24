// app/types.ts
export interface PlantInfo {
    commonName: string;
    scientificName: string;
    family: string;
    nativeRegion: string;
    careRequirements: {
      light: string;
      water: string;
      soil: string;
    };
    interesting_facts: string[];
  }