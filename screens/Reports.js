import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import { openPDFAndroid } from "../services/openPDFAndroid";
import ReportCard from "../components/reports/ReportCard";

const dummyReports = [
  {
    id: 1,
    title: "Blood Test Report",
    date: "2024-03-15",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: 2,
    title: "X-Ray Report",
    date: "2024-03-10",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: 3,
    title: "ECG Report",
    date: "2024-03-05",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: 4,
    title: "MRI Scan Report",
    date: "2024-02-28",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: 5,
    title: "Urine Test Report",
    date: "2024-02-20",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  }
]; 

function Reports() {
  return (
    <View style={styles.container}>
      <FlatList data={dummyReports} renderItem={({ item }) => (
        <ReportCard
          title={item.title}
          date={item.date}
          onPress={() => openPDFAndroid(item.pdfUrl)}
        />
      )} />
    </View>
  );
}

export default Reports;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  
});
