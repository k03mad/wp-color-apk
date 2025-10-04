import type React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { getContrastColor } from '../utils/color';

interface SaveButtonProps {
  selectedColor: string;
  onPress: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({ selectedColor, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.saveButton, { backgroundColor: selectedColor }]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.saveButtonText,
          {
            color: getContrastColor(selectedColor),
          },
        ]}
      >
        Save as Wallpaper
      </Text>
    </TouchableOpacity>
  );
};

export default SaveButton;
