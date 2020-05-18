import axios from "axios";
import AWS from "aws-sdk";

export const insertFileToS3 = (user, files, getProgress) => {
  console.log(getProgress, "outside");
  // !! this url below is different from that in gateway
  const { id, upload_key, workspace_id } = user;
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
      statusChangeCallback({
        files: files,
        getProgress: getProgress,
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
  console.log(response, "response in callback");

  const files = response.files;
  const getProgress = response.getProgress;

  console.log("userId : " + response.authResponse.userID);

  if (response.status === "connected") {
    console.log("Welcome!  Fetching your information.... ");
    // Amazon Cognito 인증 공급자를 초기화합니다

    var managerList = [];
    var AWSRegion = "ap-northeast-1";
    const AWS_REGION = AWSRegion;
    var AWSS3BucketName1 = "imagefile-input-tokyo";

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

      console.log("Ready to upload....");

      var bucket1 = new AWS.S3({
        params: { Bucket: AWSS3BucketName1 },
      });

      console.log(bucket1, "buckets");

      // Total Item Upload

      if (files.length > 0) {
        for (var i = 0; i < files.length; i++) {
          // if (files[i].type == "image") {
          aws_upload(files[i], bucket1, getProgress);
          // }
        }
      } else {
        // !! throw notification that nothing to upload in here
      }

      function aws_upload(file, bucket, getProgress) {
        const { name, type } = file;

        console.log(file, "in");
        console.log("start uploading");
        console.log(getProgress, "getProgress");

        file.selectedPurpose = "thumnbnail";

        var photoKey = name;
        //  Unsupported body payload object
        var params = {
          Key: photoKey,
          ContentType: type,
          Body: file,
          ACL: "public-read",
        };
        var options = { partSize: 10 * 1024 * 1024, queueSize: 1 };
        var manager = bucket.upload(params, options, function (err, data) {
          console.log(err, data);
        });

        manager.on("httpUploadProgress", function (progress) {
          console.log("progress ", progress); // { loaded: 4915, total: 192915, part: 1, key: 'foo.jpg' }
          var str = progress.key.split("/");
          var key = str[5];
          var status = (progress.loaded / progress.total) * 100;
          console.log(status, "status");

          getProgress(status, progress.key);
          if (status == 100) {
            console.log("done !!");
          }
        });
      }
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
