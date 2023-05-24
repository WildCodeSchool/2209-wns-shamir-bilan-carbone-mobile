import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';

type DataType = {
  id: string;
  name: string;
};

const data: DataType[] = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Doe' },
  { id: '3', name: 'Bob Smith' },
  { id: '4', name: 'Alice Johnson' },
];

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState<DataType[]>(data);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const newData = data.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(newData);
  };

  return (
    <View>
      <TextInput
        placeholder="Search"
        value={searchQuery}
        onChangeText={(text) => handleSearch(text)}
      />
      {/* <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      /> */}
    </View>
  );
};

export default SearchFilter;
