import type React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { theme } from '../constants/theme';
import { styles } from '../styles/styles';

interface PresetColorsProps {
  colors: string[];
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

const PresetColors: React.FC<PresetColorsProps> = ({
  colors,
  selectedColor,
  onSelectColor,
}) => {
  return (
    <View style={styles.presetsContainer}>
      <View style={styles.presetsGrid}>
        {colors.map((color) => (
          <TouchableOpacity
            key={`color-${color}`}
            style={[
              styles.presetsColorBox,
              {
                backgroundColor: color,
                borderColor: theme.border,
              },
              selectedColor === color && styles.presetsSelected,
            ]}
            onPress={() => onSelectColor(color)}
          />
        ))}
      </View>
    </View>
  );
};

export default PresetColors;
