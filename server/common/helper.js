const deleteUnSelectedColumn = (cols, rows) => {
  let result;
  for (let i = 0; i < cols.length; i++) {
    if (cols[i][Object.keys(cols[i])[0]] === false) {
      // if false, delete property
      for (let z = 0; z < rows.length; z++) {
        delete rows[z][Object.keys(cols[i])[0]];
      }
    }
  }

  result = rows;
  return result;
};

// @@ code_review_5
const filterColumns = (cols, rows) => {
  if (cols) {
    const formatedCols = cols.map((col) => ({
      [col.name]: col.fetch,
    }));
    console.log(formatedCols, "formatedCols");
    // change to obj or using Object keys to use this fn for all routes

    return deleteUnSelectedColumn(formatedCols, rows);
  }
};

module.exports = filterColumns;
