import type React from 'react';
import { Dimensions, Text, View } from 'react-native';
import ViewShot from 'react-native-view-shot';
import { styles } from '../styles/styles';

const screenData = Dimensions.get('screen');
const pixelRatio = screenData.scale;
const screenWidth = screenData.width * pixelRatio;
const screenHeight = screenData.height * pixelRatio;

interface ColorPreviewProps {
  selectedColor: string;
  viewShotRef: React.RefObject<ViewShot | null>;
}

const ColorPreview: React.FC<ColorPreviewProps> = ({
  selectedColor,
  viewShotRef,
}) => {
  return (
    <View style={styles.previewContainer}>
      <ViewShot
        ref={viewShotRef}
        options={{
          format: 'png',
          quality: 1.0,
          width: screenWidth,
          height: screenHeight,
        }}
        style={styles.wallpaperPreview}
      >
        <View
          style={[styles.wallpaperPreview, { backgroundColor: selectedColor }]}
        />
      </ViewShot>
      <View style={styles.previewOverlay}>
        <View style={styles.previewResolutionContainer}>
          <View style={styles.previewResolutionInfo}>
            <Text style={styles.previewResolutionText} selectable={true}>
              Screen: {Math.round(screenData.width)} ×{' '}
              {Math.round(screenData.height)} (scale: {pixelRatio})
            </Text>
            <Text style={styles.previewResolutionText} selectable={true}>
              Physical: {Math.round(screenWidth)} × {Math.round(screenHeight)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ColorPreview;
