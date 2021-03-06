import CustomUploadButton from "react-firebase-file-uploader/lib/CustomUploadButton";
import firebase from "../../fire";

export const Step1Image = ({currentAvatarUrl, changeAvatarUrl}) => {
    const user = firebase.auth().currentUser.uid;

    const handleUploadSuccess = (filename) => {
          firebase
          .storage()
          .ref()
          .child(`images/${filename}`)
          .getDownloadURL().then((url) => {
            alert('Uploading avatar finished');
            console.log(url);
            changeAvatarUrl(url);
            console.log(currentAvatarUrl);
          })
      };

      const handleUploadStart = () => alert('Uploading avatar in progress, please wait')

  return (
    <div className="image-input-setting">
      <CustomUploadButton
        filename={user}
        accept="image/*"
        storageRef={firebase.storage().ref("images")}
        onUploadStart={handleUploadStart}
        // onUploadError={this.handleUploadError}
        onUploadSuccess={handleUploadSuccess}
        // onProgress={this.handleProgress}
        style={{
          marginBottom: "20px",
          width: "100%",
          height: "45%",
          borderRadius: "30px",
          border: "none",
          backgroundColor: "#ff7961",
          fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto",
          fontSize: "20px",
          fontWeight: "500",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        Select your avatar
      </CustomUploadButton>
    </div>
  );
};
