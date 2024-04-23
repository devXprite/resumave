import { Text, View } from '@react-pdf/renderer';
import styles from '../Styles';

const Section = ({ title, style, children }) => {
    return (
        <View>
            {title && (
                <>
                    <Text style={styles.section_title}>{title}</Text>
                    <View style={styles.section_title_underline}></View>
                </>
            )}

            {children}

            <View style={styles.section_end}></View>
        </View>
    );
};

export default Section;
