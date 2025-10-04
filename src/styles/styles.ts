import { StyleSheet } from 'react-native';
import { UI_COLORS } from '../constants/colors';

const baseShadow = {
  shadowColor: UI_COLORS.BLACK,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 4,
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  previewContainer: {
    height: 180,
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: UI_COLORS.BORDER_LIGHT,
    ...baseShadow,
  },
  wallpaperPreview: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  controlPanel: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  stickyButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingBottom: 34,
    backgroundColor: UI_COLORS.BACKGROUND_DARK,
    borderTopWidth: 1,
    borderTopColor: UI_COLORS.BORDER_LIGHT,
    ...baseShadow,
  },
  section: {
    marginBottom: 16,
  },
  colorInfoContainer: {
    marginTop: 8,
  },
  saveButton: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: UI_COLORS.BORDER_LIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    ...baseShadow,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: UI_COLORS.WHITE,
  },
  presetSection: {
    marginTop: 10,
    marginBottom: 16,
  },
  presetColorsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    width: '100%',
  },
  presetColorBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 2,
    ...baseShadow,
  },
  selectedPresetColor: {
    transform: [{ scale: 1.1 }],
  },
  colorWheel: {
    height: 250,
    width: '100%',
  },
  colorWheelContainer: {
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 10,
  },
  toastContainer: {
    backgroundColor: UI_COLORS.BACKGROUND_TOAST,
    minHeight: 100,
    margin: 11,
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    ...baseShadow,
  },
  toastText: {
    color: UI_COLORS.WHITE,
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
  },
  toastSuccessBorder: {
    borderColor: UI_COLORS.SUCCESS_BORDER,
  },
  toastErrorBorder: {
    borderColor: UI_COLORS.ERROR_BORDER,
  },
  toastInfoBorder: {
    borderColor: UI_COLORS.INFO_BORDER,
  },
  baseInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    textAlign: 'center',
  },
  rgbInput: {
    flex: 1,
  },
  colorInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  colorLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
    minWidth: 40,
  },
  colorInput: {
    flex: 1,
    fontFamily: 'monospace',
    marginRight: 8,
  },
  inputFocused: {
    borderColor: UI_COLORS.FOCUS,
  },
  rgbInputs: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
    gap: 4,
  },
  copyButton: {
    height: 40,
    width: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
  },
  copyButtonIcon: {
    fontSize: 16,
  },
  colorWheelApplyButton: {
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: UI_COLORS.BORDER_MEDIUM,
    marginTop: 20,
    marginBottom: 5,
    marginHorizontal: 16,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  colorWheelApplyText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  previewOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    pointerEvents: 'box-none',
  },
  previewResolutionContainer: {
    backgroundColor: UI_COLORS.SHADOW,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: UI_COLORS.BORDER_MEDIUM,
  },
  previewResolutionInfo: {
    alignItems: 'center',
  },
  previewResolutionText: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: UI_COLORS.WHITE,
    marginBottom: 2,
    fontWeight: '500',
  },
  hiddenOverflow: {
    overflow: 'hidden',
  },
});
