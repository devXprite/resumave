import { Text, View } from '@react-pdf/renderer';

const Section = ({ title, style, children }) => {
    return (
        <View>
            {title && (
                <>
                    <Text
                        style={{
                            textTransform: 'uppercase',
                            color: '#333',
                            fontSize: 13,
                            // fontFamily: "Times-Bold"
                        }}
                    >
                        {title}
                    </Text>

                    <View
                        style={{
                            height: 1,
                            margin: '2px 0px 4px 0px',
                            backgroundColor: '#888',
                        }}
                    ></View>
                </>
            )}

            {children}

            <View
                style={{
                    height: 2,
                    margin: '10px 0px',
                    backgroundColor: '#eee',
                }}
            ></View>
        </View>
    );
};

export default Section;
