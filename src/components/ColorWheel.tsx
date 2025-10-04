import type React from 'react';
import { memo, useCallback, useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import type { Theme } from '../constants/theme';
import { styles } from '../styles/styles';

interface ColorWheelProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
  theme: Pick<Theme, 'cardBackground' | 'border' | 'text'>;
  onApplyColorPickerColor: () => void;
}

const ColorWheel: React.FC<ColorWheelProps> = memo(
  ({ selectedColor, onColorChange, theme, onApplyColorPickerColor }) => {
    const debounceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
      null,
    );

    const debouncedColorChange = useCallback(
      (color: string) => {
        if (debounceTimeoutRef.current) {
          clearTimeout(debounceTimeoutRef.current);
        }

        debounceTimeoutRef.current = setTimeout(() => {
          onColorChange(color);
        }, 50);
      },
      [onColorChange],
    );

    return (
      <View
        style={[
          styles.colorWheelContainer,
          { backgroundColor: theme.cardBackground },
        ]}
      >
        <View style={styles.colorWheel}>
          <ColorPicker
            color={selectedColor}
            onColorChange={debouncedColorChange}
            thumbSize={20}
            sliderSize={20}
            noSnap={true}
            row={false}
            swatches={false}
            discrete={false}
            gapSize={10}
            sliderHidden={false}
          />
        </View>
        <TouchableOpacity
          style={styles.colorWheelApplyButton}
          onPress={onApplyColorPickerColor}
        >
          <Text style={[styles.colorWheelApplyText, { color: theme.text }]}>
            Apply
          </Text>
        </TouchableOpacity>
      </View>
    );
  },
);

ColorWheel.displayName = 'ColorWheel';

export default ColorWheel;
