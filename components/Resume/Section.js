import { Text, View } from '@react-pdf/renderer';

const Section = ({ title, children }) => {
    return (
        <View>
            <Text
                style={{
                    textTransform: 'uppercase',
                    color: '#333',
                    fontSize: 14,
                    // fontFamily: "Times-Bold"
                }}
            >
                {title}
            </Text>

            <View
                style={{
                    height: 2,
                    margin: '4px 0px',
                    backgroundColor: '#777',
                }}
            ></View>

            {children}

            <View
                style={{
                    height: 2,
                    margin: '12px 0px',
                    backgroundColor: '#eee',
                }}
            ></View>
        </View>
    );
};

export default Section;
