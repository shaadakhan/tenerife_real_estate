export const filterData = [
  {
    items: [
      { name: "Select Property Type", value: "" },
      { name: "Apartment", value: "apartments" },
      { name: "Luxury Villas", value: "luxury villas" },
      { name: "Villas", value: "villas" },
      { name: "House", value: "house" },
      { name: "Land", value: "land" },
    ],
    placeholder: "Property Type",
    queryName: "type",
  },
  {
    items: [
      { name: "Select Price", value: "" },
      { name: "50,000", value: "50000" },
      { name: "100,000", value: "100000" },
      { name: "110,000", value: "110000" },
      { name: "135,000", value: "135000" },
      { name: "160,000", value: "160000" },
      { name: "185,000", value: "185000" },
      { name: "200,000", value: "200000" },
      { name: "300,000", value: "300000" },
      { name: "400,000", value: "400000" },
      { name: "500,000", value: "500000" },
      { name: "600,000", value: "600000" },
      { name: "700,000", value: "700000" },
      { name: "800,000", value: "800000" },
      { name: "900,000", value: "900000" },
      { name: "1,000,000", value: "1000000" },
      { name: "1,200,000", value: "1200000" },
      { name: "1,500,000", value: "1500000" },
      { name: "2,000,000", value: "2000000" },
      { name: "2,500,000", value: "2500000" },
      { name: "3,000,000", value: "3000000" },
      { name: "3,500,000", value: "3500000" },
      { name: "4,000,000", value: "4000000" },
      { name: "5,000,000", value: "5000000" },
      { name: "6,000,000", value: "6000000" },
      { name: "7,000,000", value: "7000000" },
      { name: "8,000,000", value: "8000000" },
      { name: "9,000,000", value: "9000000" },
      { name: "10,000,000", value: "10000000" },
    ],
    placeholder: "Max Price",
    queryName: "maxprice",
  },

  {
    items: [
      { name: "Select Bedrooms", value: "" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
      { name: "5", value: "5" },
      { name: "6", value: "6" },
      { name: "7", value: "7" },
      { name: "8", value: "8" },
      { name: "9", value: "9" },
      { name: "10", value: "10" },
    ],
    placeholder: "Bedrooms",
    queryName: "bedrooms",
  },
  {
    items: [
      { name: "Select Bathrooms", value: "" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
      { name: "5", value: "5" },
      { name: "6", value: "6" },
      { name: "7", value: "7" },
      { name: "8", value: "8" },
      { name: "9", value: "9" },
      { name: "10", value: "10" },
    ],
    placeholder: "Bathrooms",
    queryName: "bathrooms",
  },
  {
    items: [
      { name: "Select Location", value: "" },
      { name: "Tenerife South", value: "Tenerife South" },
      { name: "Costa Adeje", value: "Costa Adeje" },
      { name: "La Caleta", value: "La Caleta" },
      { name: "Las Americas", value: "Las Americas" },
      { name: "Los Cristianos", value: "Los Cristianos" },
      { name: "Los Gigantes", value: "Los Gigantes" },
      { name: "Puerto De La Cruz", value: "Puerto De La Cruz" },
      { name: "Amarilla Golf", value: "Amarilla Golf" },
      { name: "Puerto Santiago", value: "Puerto Santiago" },
      { name: "Tenerife North", value: "Tenerife North" },
    ],
    placeholder: "Location",
    queryName: "location",
  },
];

export const getFilterValues = (filterValues) => {
  const {
    type,
    maxprice,
    location,
    bathrooms,
    bedrooms,
  } = filterValues;

  const values = [
    {
      name: "type",
      value: type,
    },
    {
      name: "maxprice",
      value: maxprice,
    },
    {
      name: "location",
      value: location,
    },
    {
      name: "bathrooms",
      value: bathrooms,
    },
    {
      name: "bedrooms",
      value: bedrooms,
    },
    
  ];

  return values;
};
