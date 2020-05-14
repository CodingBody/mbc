import React from "react";
import HomePage from "./layout/homepage/HomePage";
import Dashboard from "./layout/dashboard/Dashboard";
import { Route } from "react-router-dom";
import HelpModal from "./component/Modals/help/HelpModal";
import axios from "axios";
import { connect } from "react-redux";
var AWS = require("aws-sdk");

function App({ user }) {
  // if (user) {
  //   const { id, upload_key, workspace_id } = user;

  //   function LoginEpicLiveAccount(id, password, target) {
  //     console.log(id, password, target, "id");

  //     axios
  //       .post(
  //         "https://cqvfwe05v9.execute-api.ap-northeast-1.amazonaws.com/prod/api/auth/login",
  //         {
  //           email: id,
  //           password: password,
  //           target: target,
  //         }
  //       )
  //       .then(function (response) {
  //         console.log(response, "response");

  //         statusChangeCallback({
  //           status: "connected",
  //           authResponse: {
  //             userID: id,
  //             accessToken: response.data.token,
  //             IdentityId: response.data.identityId,
  //           },
  //         });
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  //   LoginEpicLiveAccount(id, upload_key, workspace_id);

  //   function statusChangeCallback(response) {
  //     const DeveloperProviderName = "cognito-identity.amazonaws.com";
  //     console.log("--statusChangeCallback--");
  //     console.log(response, "response in callback");

  //     console.log("userId : " + response.authResponse.userID);

  //     if (response.status === "connected") {
  //       console.log("Welcome!  Fetching your information.... ");
  //       // Amazon Cognito 인증 공급자를 초기화합니다

  //       var managerList = [];
  //       var AWSRegion = "ap-northeast-1";
  //       const AWS_REGION = AWSRegion;
  //       var AWSS3BucketName1 = "imagefile-input-tokyo";
  //       var AWSS3BucketName2 = "mediafile-input-tokyo";
  //       var AWSS3BucketName3 = "file-input-tokyo";
  //       var AWSCognitoPoolId =
  //         "ap-northeast-1:1c5ec57c-f1ff-428d-aa6e-090b175bed15";

  //       AWS.config.update({ region: AWS_REGION });
  //       AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  //         IdentityPoolId: AWSCognitoPoolId,
  //         IdentityId: response.authResponse.IdentityId,
  //         Logins: {
  //           [DeveloperProviderName]: response.authResponse.accessToken,
  //           // 'login.epiclive.cms': response.authResponse.accessToken
  //         },
  //       });

  //       AWS.config.credentials.get(function () {
  //         console.log("--AWS.config--");
  //         console.log(AWS.config);
  //         console.log("--AWS.config.credentials--");
  //         console.log(AWS.config.credentials);
  //         var accessKeyId = AWS.config.credentials.accessKeyId;
  //         console.log("accessKeyId :" + AWS.config.credentials.accessKeyId);
  //         var secretAccessKey = AWS.config.credentials.secretAccessKey;
  //         console.log(
  //           "secretAccessKey :" + AWS.config.credentials.secretAccessKey
  //         );
  //         var sessionToken = AWS.config.credentials.sessionToken;
  //         console.log("sessionToken :" + AWS.config.credentials.sessionToken);

  //         console.log("getCredentialsForIdentity : ", data); // successful response
  //         console.log("Ready to upload....");

  //         // fileChooser.disabled = false;

  //         // var bucket1 = new AWS.S3({
  //         //   params: { Bucket: AWSS3BucketName1 },
  //         // });
  //         // var bucket2 = new AWS.S3({
  //         //   params: { Bucket: AWSS3BucketName2 },
  //         // });
  //         // var bucket3 = new AWS.S3({
  //         //   params: { Bucket: AWSS3BucketName3 },
  //         // });

  //         // // Total Item Upload
  //         // document.getElementById("upload-button").addEventListener(
  //         //   "click",
  //         //   function () {
  //         //     console.log("start uploading");
  //         //     var file = fileChooser;

  //         //     if (file.files.length > 0) {
  //         //       for (var i = 0; i < file.files.length; i++) {
  //         //         fileChooser.disabled = true;
  //         //         $("#upload-button_" + i).addClass("submitted");
  //         //         document.getElementById("results").innerHTML = "";
  //         //         //Object key will be facebook-USERID#/FILE_NAME

  //         //         var filetype = document.getElementById(
  //         //           "filetype_" + file.files[i].name
  //         //         ).value;
  //         //         if (filetype == "image") aws_upload(i, file, bucket1);
  //         //         else if (filetype == "video") aws_upload(i, file, bucket2);
  //         //         else if (filetype == "file") aws_upload(i, file, bucket3);
  //         //       }
  //         //     } else {
  //         //       document.getElementById("results").innerHTML =
  //         //         "Nothing to upload.";
  //         //     }
  //         //   },
  //         //   false
  //         // );

  //         // // Uploading Checking
  //         // fileChooser.addEventListener(
  //         //   "click",
  //         //   function () {
  //         //     $(".add").empty();
  //         //     document.getElementById("file-chooser").value = "";
  //         //     vtype = [];
  //         //     itype = [];
  //         //     ftype = [];
  //         //   },
  //         //   false
  //         // );

  //         // // Total Item Abort
  //         // document.getElementById("cancel-button").addEventListener(
  //         //   "click",
  //         //   function () {
  //         //     for (var i = 0; i < managerList.length; i++)
  //         //       managerList[i].abort();
  //         //     $(".submitted").each(function () {
  //         //       $(this).addClass("canceled");
  //         //     });
  //         //     fileChooser.disabled = false;
  //         //     $(".add").empty();
  //         //     document.getElementById("file-chooser").value = "";
  //         //     document.getElementById("msg").innerHTML =
  //         //       "Drag your files here or click in this area.";
  //         //   },
  //         //   false
  //         // );

  //         // function listObjs() {
  //         //   var prefix = "";
  //         //   bucket.listObjects(
  //         //     {
  //         //       Prefix: prefix,
  //         //     },
  //         //     function (err, data) {
  //         //       if (err) {
  //         //         document.getElementById("results").innerHTML =
  //         //           "ERROR: " + err;
  //         //       } else {
  //         //         var objKeys = "";
  //         //         data.Contents.forEach(function (obj) {
  //         //           objKeys += obj.Key + "<br>";
  //         //         });
  //         //         document.getElementById("results").innerHTML = objKeys;
  //         //       }
  //         //     }
  //         //   );
  //         // }
  //       });
  //     } else if (response.status === "not_authorized") {
  //       // The person is logged into Facebook, but not your app.
  //       document.getElementById("status").innerHTML =
  //         "Please log " + "into this app.";
  //     } else {
  //       // The person is not logged into Facebook, so we're not sure if
  //       // they are logged into this app or not.
  //       document.getElementById("status").innerHTML =
  //         "Please log " + "into Facebook.";
  //     }
  //   }
  // }

  return (
    <div>
      <Route path exact path="/" component={HomePage} />

      <Route
        path="/dashboard/mbc/:category"
        render={() => (
          <React.Fragment>
            <Dashboard />
          </React.Fragment>
        )}
      />
      <HelpModal />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(App);
