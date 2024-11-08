export interface NoticeResponse {
    data: Notice[];
    totalRecords: number;  
  }
  
  export interface Notice {
    id: number | null;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    imageCliCode: string;
    stateId: number;
    sourceCliCode: string;
    typeId: number;
    profileId: number;
  }
  