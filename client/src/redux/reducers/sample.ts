export interface ISampleReducer {
  counter: number;
}

const defaultState: ISampleReducer = {
  counter: 1,
};

const sampleReducer = (
  state: ISampleReducer = defaultState,
  action: any,
): ISampleReducer => {
  return state;
};

export default sampleReducer;
