import { StyleSheet } from 'react-native';
import { UI_COLORS } from '../constants/colors';

const baseShadow = {
  shadowColor: UI_COLORS.BLACK,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 4,
};

const baseInput = {
  height: 40,
  borderWidth: 1,
  borderRadius: 8,
  paddingHorizontal: 12,
  fontSize: 14,
  textAlign: 'center' as const,
};

const baseButton = {
  height: 40,
  borderRadius: 8,
  justifyContent: 'center' as const,
  alignItems: 'center' as const,
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  controlPanel: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  section: {
    marginBottom: 16,
  },

  previewContainer: {
    ...baseShadow,
    height: 180,
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: UI_COLORS.BORDER_LIGHT,
  },
  previewContent: {
    flex: 1,
    width: '100%',
    height: '100%',
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
  previewResolutionBadge: {
    backgroundColor: UI_COLORS.SHADOW,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: UI_COLORS.BORDER_MEDIUM,
    alignItems: 'center',
  },
  previewResolutionText: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: UI_COLORS.WHITE,
    marginBottom: 2,
    fontWeight: '500',
  },

  detailsContainer: {
    marginTop: 8,
  },
  detailsInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailsInputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
    minWidth: 40,
  },
  detailsHexInput: {
    ...baseInput,
    flex: 1,
    fontFamily: 'monospace',
    marginRight: 8,
  },
  detailsRgbContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
    gap: 4,
  },
  detailsRgbField: {
    ...baseInput,
    flex: 1,
  },
  detailsInputFocused: {
    borderColor: UI_COLORS.FOCUS,
  },
  detailsCopyBtn: {
    ...baseButton,
    width: 40,
    borderWidth: 0,
  },
  detailsCopyIcon: {
    fontSize: 16,
  },

  wheelContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    padding: 10,
  },
  wheelPicker: {
    height: 250,
    width: '100%',
  },
  wheelApplyBtn: {
    ...baseButton,
    borderWidth: 1,
    borderColor: UI_COLORS.BORDER_MEDIUM,
    marginTop: 20,
    marginBottom: 5,
    marginHorizontal: 16,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  wheelApplyText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  presetsContainer: {
    marginTop: 10,
    marginBottom: 16,
  },
  presetsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    width: '100%',
  },
  presetsColorBox: {
    ...baseShadow,
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 2,
  },
  presetsSelected: {
    transform: [{ scale: 1.1 }],
  },

  saveButton: {
    ...baseShadow,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: UI_COLORS.BORDER_LIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: UI_COLORS.WHITE,
  },
  saveStickyContainer: {
    ...baseShadow,
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
  },

  toastContainer: {
    ...baseShadow,
    backgroundColor: UI_COLORS.BACKGROUND_TOAST,
    minHeight: 100,
    margin: 11,
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
  },
  toastMessage: {
    color: UI_COLORS.WHITE,
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
  },
  toastSuccess: {
    borderColor: UI_COLORS.SUCCESS_BORDER,
  },
  toastError: {
    borderColor: UI_COLORS.ERROR_BORDER,
  },
  toastInfo: {
    borderColor: UI_COLORS.INFO_BORDER,
  },

  hiddenOverflow: {
    overflow: 'hidden',
  },
});
