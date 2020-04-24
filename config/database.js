module.exports = {
  hrPool: {
    user: "react", //process.env.HR_USER,
    password: "oracle", //process.env.HR_PASSWORD,
    connectString:
      "database-1.c0jmq64nqjp5.ap-northeast-1.rds.amazonaws.com/ORCL", //process.env.HR_CONNECTIONSTRING,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0,
  },
};

// oracle apex
// https://sb.epiclivecloud.com/ords/f?p=4500:1001:5989737323272::NO:::
// react admin salin2017

// module.exports = {
//   hrPool: {
//     user: "dev_livr", //process.env.HR_USER,
//     password: "oracle", //process.env.HR_PASSWORD,
//     connectString:
//       "database-1.c0jmq64nqjp5.ap-northeast-1.rds.amazonaws.com/ORCL", //process.env.HR_CONNECTIONSTRING,
//     poolMin: 10,
//     poolMax: 10,
//     poolIncrement: 0,
//   },
// };
