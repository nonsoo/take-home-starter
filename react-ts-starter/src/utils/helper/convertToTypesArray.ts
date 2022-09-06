interface responseType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
const convertToTypesArray = (res: responseType[]) => {
  const newLst = res.map((resType) => resType.type.name);

  return newLst;
};

export default convertToTypesArray;
