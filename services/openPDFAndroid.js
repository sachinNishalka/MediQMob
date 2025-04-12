import * as FileSystem from "expo-file-system";
import * as IntentLauncher from "expo-intent-launcher";
import { Alert, Platform } from "react-native";

export const openPDFAndroid = async (url) => {
  console.log("Reached function");

  try {
    // Create a unique filename
    const filename = `sample_${Date.now()}.pdf`;
    const fileUri = `${FileSystem.documentDirectory}${filename}`;

    // Download PDF to app's document directory
    const download = await FileSystem.downloadAsync(url, fileUri);

    if (Platform.OS === 'android') {
      // For Android, we need to use FileProvider
      const contentUri = await FileSystem.getContentUriAsync(download.uri);
      
      await IntentLauncher.startActivityAsync("android.intent.action.VIEW", {
        data: contentUri,
        flags: 1, // FLAG_GRANT_READ_URI_PERMISSION
        type: "application/pdf",
      });
    } else {
      // For iOS, we can use the file URI directly
      await IntentLauncher.startActivityAsync("android.intent.action.VIEW", {
        data: download.uri,
        type: "application/pdf",
      });
    }
  } catch (e) {
    console.error("PDF Open Error:", e);
    Alert.alert(
      "Error",
      "Could not open the PDF. Please make sure you have a PDF viewer installed and try again."
    );
  }
};
