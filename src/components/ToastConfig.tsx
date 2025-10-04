import type React from 'react';
import { Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { styles } from '../styles/styles';

const ToastConfig: React.FC = () => {
  return (
    <Toast
      config={{
        success: (props) => (
          <View style={[styles.toastContainer, styles.toastSuccess]}>
            <Text style={styles.toastMessage}>{props.text1}</Text>
          </View>
        ),
        error: (props) => (
          <View style={[styles.toastContainer, styles.toastError]}>
            <Text style={styles.toastMessage}>{props.text1}</Text>
          </View>
        ),
        info: (props) => (
          <View style={[styles.toastContainer, styles.toastInfo]}>
            <Text style={styles.toastMessage}>{props.text1}</Text>
          </View>
        ),
      }}
    />
  );
};

export default ToastConfig;
