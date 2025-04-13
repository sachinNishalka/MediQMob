import * as FileSystem from "expo-file-system";
import * as IntentLauncher from "expo-intent-launcher";
import { Alert, Platform } from "react-native";

export const openImageAndroid = async (url) => {
  console.log("Opening image function");

  try {
    // Create a unique filename
    const filename = `image_${Date.now()}.jpg`;
    const fileUri = `${FileSystem.documentDirectory}${filename}`;

    // Download image to app's document directory
    const download = await FileSystem.downloadAsync(url, fileUri);

    if (Platform.OS === 'android') {
      // For Android, we need to use FileProvider
      const contentUri = await FileSystem.getContentUriAsync(download.uri);
      
      await IntentLauncher.startActivityAsync("android.intent.action.VIEW", {
        data: contentUri,
        flags: 1, // FLAG_GRANT_READ_URI_PERMISSION
        type: "image/*", // This will work for any image type
      });
    } else {
      // For iOS, we can use the file URI directly
      await IntentLauncher.startActivityAsync("android.intent.action.VIEW", {
        data: download.uri,
        type: "image/*",
      });
    }
  } catch (e) {
    console.error("Image Open Error:", e);
    Alert.alert(
      "Error",
      "Could not open the image. Please make sure you have an image viewer installed and try again."
    );
  }
};
