import axios from "axios";
import AWS from "aws-sdk";

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

export const authenticateUser = (id, upload_key, workspace_id) => {
  console.log(id, upload_key, workspace_id, "id in entry");

  // !! this url below is different from that in gateway
  axios
    .post(
      "https://cqvfwe05v9.execute-api.ap-northeast-1.amazonaws.com/prod/api/auth/login",
      {
        email: id,
        password: upload_key,
        target: workspace_id,
      }
    )
    .then(function (response) {
      console.log(response, "response");

      statusChangeCallback({
        status: "connected",
        authResponse: {
          userID: id,
          accessToken: response.data.token,
          IdentityId: response.data.identityId,
        },
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

function statusChangeCallback(response) {
  const DeveloperProviderName = "cognito-identity.amazonaws.com";
  console.log("--statusChangeCallback--");
  console.log(response, "response in callback");

  console.log("userId : " + response.authResponse.userID);

  if (response.status === "connected") {
    console.log("Welcome!  Fetching your information.... ");
    // Amazon Cognito 인증 공급자를 초기화합니다

    var managerList = [];
    var AWSRegion = "ap-northeast-1";
    const AWS_REGION = AWSRegion;
    var AWSS3BucketName1 = "imagefile-input-tokyo";
    var AWSS3BucketName2 = "mediafile-input-tokyo";
    var AWSS3BucketName3 = "file-input-tokyo";
    var AWSCognitoPoolId =
      "ap-northeast-1:1c5ec57c-f1ff-428d-aa6e-090b175bed15";

    AWS.config.update({ region: AWS_REGION });
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: AWSCognitoPoolId,
      IdentityId: response.authResponse.IdentityId,
      Logins: {
        [DeveloperProviderName]: response.authResponse.accessToken,
        // 'login.epiclive.cms': response.authResponse.accessToken
      },
    });

    AWS.config.credentials.get(function () {
      console.log("--AWS.config--");
      console.log(AWS.config);
      console.log("--AWS.config.credentials--");
      console.log(AWS.config.credentials);
      var accessKeyId = AWS.config.credentials.accessKeyId;
      console.log("accessKeyId :" + AWS.config.credentials.accessKeyId);
      var secretAccessKey = AWS.config.credentials.secretAccessKey;
      console.log("secretAccessKey :" + AWS.config.credentials.secretAccessKey);
      var sessionToken = AWS.config.credentials.sessionToken;
      console.log("sessionToken :" + AWS.config.credentials.sessionToken);

      // console.log("getCredentialsForIdentity : ", data); // successful response
      console.log("Ready to upload....");

      // fileChooser.disabled = false;

      var bucket1 = new AWS.S3({
        params: { Bucket: AWSS3BucketName1 },
      });
      var bucket2 = new AWS.S3({
        params: { Bucket: AWSS3BucketName2 },
      });
      var bucket3 = new AWS.S3({
        params: { Bucket: AWSS3BucketName3 },
      });

      console.log(bucket1, bucket2, bucket3, "buckets");

      // // Total Item Upload
      // document.getElementById("upload-button").addEventListener(
      //   "click",
      //   function () {
      //     console.log("start uploading");
      //     var file = fileChooser;

      //     if (file.files.length > 0) {
      //       for (var i = 0; i < file.files.length; i++) {
      //         fileChooser.disabled = true;
      //         $("#upload-button_" + i).addClass("submitted");
      //         document.getElementById("results").innerHTML = "";
      //         //Object key will be facebook-USERID#/FILE_NAME

      //         var filetype = document.getElementById(
      //           "filetype_" + file.files[i].name
      //         ).value;
      //         if (filetype == "image") aws_upload(i, file, bucket1);
      //         else if (filetype == "video") aws_upload(i, file, bucket2);
      //         else if (filetype == "file") aws_upload(i, file, bucket3);
      //       }
      //     } else {
      //       document.getElementById("results").innerHTML =
      //         "Nothing to upload.";
      //     }
      //   },
      //   false
      // );

      // function aws_upload(i, file, bucket) {
      // ignore
      //   var filetype = document.getElementById("filetype_" + file.files[i].name)
      //     .value;
      //   //var type = document.getElementById("type_" + file.files[i].name).value;

      //   var type = "file";
      //   if (filetype == "video")
      //     type = document.getElementById("vtype_" + file.files[i].name).value;
      //   else if (filetype == "image")
      //     type = document.getElementById("itype_" + file.files[i].name).value;

      //   var _get = getQueryParams(document.location.search);
      //   var objKey =
      //     filetype +
      //     "/" +
      //     _get.target +
      //     "/" +
      //     _get.id +
      //     "/type/" +
      //     type +
      //     "/" +
      //     file.files[i].name;
      //   //var objKey = filetype + '/' + 'SOFTBANK' + '/' + 'test1234' + '/type/' + type + '/' + file.files[i].name;filetype +
      //     "/" +
      //     _get.target +
      //     "/" +
      //     _get.id +
      //     "/type/" +
      //     type +
      //     "/" +
      //     file.files[i].name;
      // -- ignore

      //   //var objKey = filetype + '/' + 'SOFTBANK' + '/' + 'test1234' + '/type/' + type + '/' + file.files[i].name;
      //   console.log(objKey);

      //   var params = {
      //     Key: objKey,
      //     ContentType: file.files[i].type,
      //     Body: file.files[i],
      //     ACL: "public-read",
      //   };
      //   var options = { partSize: 10 * 1024 * 1024, queueSize: 1 };
      //   var manager = bucket.upload(params, options, function (err, data) {
      //     console.log(err, data);
      //   });

      // progress
      //   managerList.push(manager);
      //   manager.on("httpUploadProgress", function (progress) {
      //     console.log("progress", progress); // { loaded: 4915, total: 192915, part: 1, key: 'foo.jpg' }
      //     var str = progress.key.split("/");
      //     var key = str[5];
      //     var status = (progress.loaded / progress.total) * 100;
      //     document.getElementById("myBar_" + key).style.width = status + "%";
      //     document.getElementById("myPer_" + key).innerHTML =
      //       Math.round(status) + "%";
      //     if (status == 100) {
      //       fileChooser.disabled = false;
      //     }
      //   });
      // }

      // -- jquery
      // // Uploading Checking
      // fileChooser.addEventListener(
      //   "click",
      //   function () {
      //     $(".add").empty();
      //     document.getElementById("file-chooser").value = "";
      //     vtype = [];
      //     itype = [];
      //     ftype = [];
      //   },
      //   false
      // );

      // // Total Item Abort
      // document.getElementById("cancel-button").addEventListener(
      //   "click",
      //   function () {
      //     for (var i = 0; i < managerList.length; i++)
      //       managerList[i].abort();
      //     $(".submitted").each(function () {
      //       $(this).addClass("canceled");
      //     });
      //     fileChooser.disabled = false;
      //     $(".add").empty();
      //     document.getElementById("file-chooser").value = "";
      //     document.getElementById("msg").innerHTML =
      //       "Drag your files here or click in this area.";
      //   },
      //   false
      // );

      // he doesn't know what it is
      // function listObjs() {
      //   var prefix = "";
      //   bucket.listObjects(
      //     {
      //       Prefix: prefix,
      //     },
      //     function (err, data) {
      //       if (err) {
      //         document.getElementById("results").innerHTML =
      //           "ERROR: " + err;
      //       } else {
      //         var objKeys = "";
      //         data.Contents.forEach(function (obj) {
      //           objKeys += obj.Key + "<br>";
      //         });
      //         document.getElementById("results").innerHTML = objKeys;
      //       }
      //     }
      //   );
      // }
    });
  } else if (response.status === "not_authorized") {
    // The person is logged into Facebook, but not your app.
    document.getElementById("status").innerHTML =
      "Please log " + "into this app.";
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    document.getElementById("status").innerHTML =
      "Please log " + "into Facebook.";
  }
}
