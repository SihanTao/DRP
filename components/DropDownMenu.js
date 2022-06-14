import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState, useEffect } from 'react';
import { Text } from 'galio-framework';
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native';

export const DropDownMenu = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    return (
        <View>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
        <Text>{value}</Text>
        </View>

    );
}