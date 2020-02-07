import React, { useState, useCallback } from "react";
import { SafeAreaView, TouchableOpacity, FlatList, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";

const DATAanyname = [
  //DATA를 ARRAY로 선언을 합니다.
  {
    idanyname: "태그1",
  },
  {
    idanyname: "태그2",
  },
  {
    idanyname: "태그3",
  },
];

function Itemanyname({ idanyname, selectanyname, Clickanyname }) {
  //ITEM 이라는 함수에 {idanyname, selected, Clickanyname}를 넣어서 실행하면
  return (
    <TouchableOpacity
      onPress={() => Clickanyname(idanyname)}
      style={[styles.itemanyname, { backgroundColor: selectanyname ? "red" : "pink" }]}
    >
      <Text style={styles.title}>{idanyname}</Text>
    </TouchableOpacity>
  );
  //<TouchableOpacity>안에 담겨져 있는 것을 리턴합니다.
  //누르면 Clickanyname(idanyname)가 실행이 되고,
  //style은 style.item 스타일을 따르는데, 선택 되면 색이 바뀝니다.
  //Text 스타일은 styles.title을 따르고 title을 넣어줍니다.
  //</TouchableOpacity>를 닫아줍니다.
}

//할일 :
//selectanyname 가 state로 들어가야해요
// state는 다시 모벡스의 state로 들어가야해요
// setSelected를 스토어의 메소드(@action)알고리즘으로 바꾼다.

export default function TagTest() {
  const [selectanyname, setSelected] = useState([]);
  const Clickanyname = useCallback(
    idanyname => {
      const newSelected = selectanyname;
      newSelected.set(idanyname, !selectanyname.get(idanyname));

      setSelected(newSelected);
    },
    [selectanyname],
  );

  //여기는 class 여도 안바꿔도 됨
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATAanyname}
        // data는 메소드
        renderItem={({ item }) => (
          <Itemanyname
            idanyname={item.idanyname}
            selectanyname={!!selectanyname.get(item.idanyname)}
            Clickanyname={Clickanyname}
          />
        )}
        keyExtractor={item => item.idanyname}
        extraData={selectanyname}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  itemanyname: {
    backgroundColor: "pink",
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 10,
  },
});
