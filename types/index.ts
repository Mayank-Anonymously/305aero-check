export type VotesType = {
  count: number;
  value: number;
};

export type PunctuationType = {
  countOpinions: number;
  punctuation: number;
  votes: VotesType[];
};

export type ReviewType = {
  name: string;
  avatar: string;
  description: string;
  punctuation: number;
};

export type ProductType = {
  id: string;
  name: string;
  thumb: string;
  price: string;
  count: number;
  color: string;
  size: string;
  images: string[];
  discount?: string;
  currentPrice: number;
  punctuation: PunctuationType;
  reviews: ReviewType[];
};
export type ItemList = {
  description: string;
  category: string;
  subCategory: string;
  productType: string;
  ingramPartNumber: string;
  vendorPartNumber: string;
  upcCode: string;
  vendorName: string;
  endUserRequired: string;
  hasDiscounts: string;
  type: string;
  discontinued: string;
  newProduct: string;
  directShip: string;
  hasWarranty: string;
  replacementSku: string;
  authorizedToPurchase: string;
  links: [
    {
      topic: string;
      href: string;
      type: string;
    },
    {
      topic: string;
      href: string;
      type: string;
    }
  ];
  id: string;
  name: string;
  price: string;
  color: string;
  images: string[];
  discount?: string;
  currentPrice?: number;
  key: any;
};

export type ProductDetailType = {
  images: string[];
  ingramPartNumber: string;
  vendorPartNumber: string;
  customerPartNumber: string;
  productAuthorized: string;
  description: string;
  productDetailDescription: string;
  upc: string;
  productCategory: string;
  productSubCategory: string;
  vendorName: string;
  vendorNumber: string;
  productStatusCode: string;
  productClass: string;
  indicators: object;
  ciscoFields: object;
  technicalSpecifications: string;
  warrantyInformation: string;
  additionalInformation: object;
};

export type ProductTypeList = {
  id: string;
  name: string;
  price: string;
  color: string;
  images: string[];
  discount?: string;
  currentPrice?: number;
  key: any;
};

export type ProductStoreType = {
  id: string;
  name: string;
  thumb: string;
  price: number;
  count: number;
  color: string;
  size: string;
};

export type GtagEventType = {
  action: string;
  category: string;
  label: string;
  value: string;
};
