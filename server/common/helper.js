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

module.exports.filterColumns = function (cols, rows) {
  if (cols) {
    const formatedCols = cols.map((col) => ({
      [col.name]: col.fetch,
    }));

    return deleteUnSelectedColumn(formatedCols, rows);
  }
};

module.exports.checkSort = function (req, query) {
  const sort = req.headers.sort;
  if (sort !== "undefined" && sort !== undefined && sort) {
    const { column, direction, isNullLast } = JSON.parse(sort);
    let direct;
    if (direction === "ascending") {
      direct = "ASC";
    } else if (direction === "descending") {
      direct = "DESC";
    }
    query += `\nORDER BY ${column} ${direct}`;
  }

  return query;
};

module.exports.checkDate = function (req, query) {
  const startDate = req.headers.startDate;
  const endDate = req.headers.endDate;

  return query;
};
