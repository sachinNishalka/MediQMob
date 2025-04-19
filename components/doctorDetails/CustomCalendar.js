import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { Colors } from "../../constants/Colors";

export default function CustomCalendar({
  onDateSelect,
  enabledDays = ["sunday", "monday", "tuesday"],
}) {
  const [selected, setSelected] = useState("");

  // Convert day names to day numbers (0-6)
  const getDayNumber = (dayName) => {
    const days = {
      sunday: 0,
      monday: 1,
      tuesday: 2,
      wednesday: 3,
      thursday: 4,
      friday: 5,
      saturday: 6,
    };
    return days[dayName.toLowerCase()];
  };

  const isSelectableDay = (dateString) => {
    const dayOfWeek = new Date(dateString).getDay();
    // Check if the day of week is in the enabledDays array
    return enabledDays.some((day) => getDayNumber(day) === dayOfWeek);
  };

  const getMarkedDates = () => {
    const markedDates = {};

    // Mark the selected date
    if (selected) {
      markedDates[selected] = {
        selected: true,
        selectedColor: Colors.primaryColor,
        selectedTextColor: "#FFFFFF",
      };
    }

    return markedDates;
  };

  const handleDayPress = (day) => {
    if (isSelectableDay(day.dateString)) {
      setSelected(day.dateString);
      if (onDateSelect) {
        return onDateSelect(day.dateString);
      }
    }
  };

  // Generate disabled dates for the next 90 days
  const getDisabledDates = () => {
    const disabledDates = {};
    const today = new Date();
    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 90);

    while (today <= endDate) {
      const dateString = today.toISOString().split("T")[0];
      if (!isSelectableDay(dateString)) {
        disabledDates[dateString] = { disabled: true };
      }
      today.setDate(today.getDate() + 1);
    }

    return disabledDates;
  };

  return (
    <Calendar
      onDayPress={handleDayPress}
      markedDates={{
        ...getMarkedDates(),
        ...getDisabledDates(),
      }}
      minDate={new Date().toISOString().split("T")[0]}
      maxDate={
        new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0]
      }
      disableAllTouchEventsForDisabledDays={true}
      theme={{
        calendarBackground: "#FFFFFF",
        textSectionTitleColor: "#000000",
        selectedDayBackgroundColor: Colors.primaryColor,
        selectedDayTextColor: "#FFFFFF",
        todayTextColor: Colors.primaryColor,
        dayTextColor: "#000000",
        textDisabledColor: "#D9D9D9",
        dotColor: Colors.primaryColor,
        selectedDotColor: "#FFFFFF",
        arrowColor: Colors.primaryColor,
        monthTextColor: "#000000",
        indicatorColor: Colors.primaryColor,
      }}
    />
  );
}

const styles = StyleSheet.create({
  dayContainer: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  selectedDay: {
    backgroundColor: Colors.primaryColor,
  },
  disabledDay: {
    opacity: 0.5,
  },
  dayText: {
    fontSize: 16,
    color: "#000000",
  },
  selectedDayText: {
    color: "#FFFFFF",
  },
  disabledDayText: {
    color: "#D9D9D9",
  },
});
