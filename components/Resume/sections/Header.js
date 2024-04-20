'use client';

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const Header = ({ data }) => {
    console.log(data);
    
    return (
        <View>
            <Text
                style={{
                    fontSize: 32,
                    textAlign: 'center',
                    marginBottom: 10,
                }}
            >
                {data.name}
            </Text>
            <View
                style={{
                    display: 'flex',
                    gap: 3,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 10,
                }}
            >
                <View>
                    <Text> {data.phone}</Text>
                </View>
            </View>
        </View>
    );
};

export default Header;
