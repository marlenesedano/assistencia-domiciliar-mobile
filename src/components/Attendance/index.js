import { TouchableWithoutFeedback } from "react-native";

import { FontAwesome5, AntDesign, Feather } from "@expo/vector-icons";
import * as S from "./styles";

const icons = {
  pending: <AntDesign name="exclamationcircleo" size={30} color="orange" />,
  cancel: <AntDesign name="closecircleo" size={30} color="red" />,
  accepted: <Feather name="user-check" size={30} color="green" />,
  checked: <Feather name="check-circle" size={30} color="blue" />,
};

export function Attendance({ personName, scheduleDate, status, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <S.Container>
        <S.WrapperLeft>
          <FontAwesome5 name="user-circle" size={50} color="black" />
        </S.WrapperLeft>
        <S.Content>
          <S.PersonName>{personName}</S.PersonName>
          <S.ScheduleDate>{scheduleDate}</S.ScheduleDate>
        </S.Content>
        <S.WrapperRight>{status && icons[status]}</S.WrapperRight>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
