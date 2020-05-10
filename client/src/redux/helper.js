export const checkFormType = ({ category, form }) => {
  console.log(category, "category");
  switch (category) {
    case "category":
      const { title, priority, genre_list, usageyn } = form;
      return JSON.stringify({
        title,
        priority,
        genre_list,
        usageyn,
      });
    case "appuser":
      const {
        username,
        account,
        password,
        password_check,
        status,
        sex,
        tag,
      } = form;
      if (password !== password_check) {
        alert("your passwords are not equal");
      }
      return JSON.stringify({
        username,
        account,
        password,
        status,
        sex,
        tag,
      });
    default:
      return;
  }
};
