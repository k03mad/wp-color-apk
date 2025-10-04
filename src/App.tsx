import type React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import type ViewShot from 'react-native-view-shot';
import ColorDetails from './components/ColorDetails';
import ColorPreview from './components/ColorPreview';
import ColorWheel from './components/ColorWheel';
import PresetColors from './components/PresetColors';
import SaveButton from './components/SaveButton';
import ToastConfig from './components/ToastConfig';
import { PRESET_BLACK_COLORS, PRESET_COLORS } from './constants/colors';
import { theme } from './constants/theme';
import { styles } from './styles/styles';
import { getColorInfo } from './utils/color';
import { requestStoragePermission } from './utils/permissions';
import { generateWallpaper } from './utils/wallpaper';

const App: React.FC = () => {
  const isDarkMode = true;
  const [selectedColor, setSelectedColor] = useState(PRESET_COLORS[0]);
  const [isFromPreset, setIsFromPreset] = useState(false);
  const [colorPickerSelectedColor, setColorPickerSelectedColor] = useState(
    PRESET_COLORS[0],
  );
  const viewShotRef = useRef<ViewShot>(null);

  const colorInfo = getColorInfo(selectedColor);

  useEffect(() => {
    requestStoragePermission();
  }, []);

  const handleGenerateWallpaper = useCallback(async () => {
    if (viewShotRef.current) {
      await generateWallpaper(
        viewShotRef as React.RefObject<ViewShot>,
        requestStoragePermission,
      );
    }
  }, []);

  const selectPresetColor = useCallback((color: string) => {
    setIsFromPreset(true);
    setSelectedColor(color);
  }, []);

  const handleColorPickerChange = useCallback((color: string) => {
    setColorPickerSelectedColor(color);
  }, []);

  const handleManualColorChange = useCallback((color: string) => {
    setSelectedColor(color);
  }, []);

  const handleApplyColorPickerColor = useCallback(() => {
    setSelectedColor(colorPickerSelectedColor);
    setIsFromPreset(true);
  }, [colorPickerSelectedColor]);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      <SafeAreaView
        style={[styles.container, { backgroundColor: theme.background }]}
      >
        <ColorPreview selectedColor={selectedColor} viewShotRef={viewShotRef} />

        <ScrollView
          style={styles.controlPanel}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <ColorDetails
            colorInfo={colorInfo}
            selectedColor={selectedColor}
            onColorChange={handleManualColorChange}
            isFromPreset={isFromPreset}
          />

          <View style={styles.section}>
            <ColorWheel
              selectedColor={colorPickerSelectedColor}
              onColorChange={handleColorPickerChange}
              theme={theme}
              onApplyColorPickerColor={handleApplyColorPickerColor}
            />
          </View>

          <PresetColors
            colors={PRESET_COLORS}
            selectedColor={selectedColor}
            onSelectColor={selectPresetColor}
          />

          <PresetColors
            colors={PRESET_BLACK_COLORS}
            selectedColor={selectedColor}
            onSelectColor={selectPresetColor}
          />
        </ScrollView>

        <View style={styles.saveStickyContainer}>
          <SaveButton
            selectedColor={selectedColor}
            onPress={handleGenerateWallpaper}
          />
        </View>
      </SafeAreaView>
      <ToastConfig />
    </SafeAreaProvider>
  );
};

export default App;
