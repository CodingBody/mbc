export const checkHasSort = (payload) => {
  // return undefined if not

  let sort;
  if (payload.sort) {
    sort = JSON.stringify(payload.sort);
  } else {
    sort = undefined;
  }
  return { sort };
};

export const checkHasDate = (payload) => {
  // return undefined if not

  let startDate;
  let endDate;
  if (payload.startDate && payload.endDate) {
    startDate = JSON.stringify(payload.startDate);
    endDate = JSON.stringify(payload.endDate);
  } else {
    startDate = undefined;
    endDate = undefined;
  }

  return { startDate, endDate };
};
