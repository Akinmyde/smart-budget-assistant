import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, FONT_WEIGHTS, SPACING } from '../constants/theme';

interface Props {
  children: React.ReactNode;
  style?: any;
  variant: 'heading' | 'subheading' | 'body';
}

export const Heading = ({ children, style, variant, ...props }: Props) => (
  <Text style={[styles[variant], style]} {...props}>
    {children}
  </Text>
);
export const Subheading = ({ children, style, variant, ...props }: Props) => (
  <Text style={[styles[variant], style]} {...props}>
    {children}
  </Text>
);
export const BodyText = ({ children, style, variant, ...props }: Props) => (
  <Text style={[styles[variant], style]} {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  heading: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: FONT_WEIGHTS.bold as any,
    color: COLORS.neutral.text.primary,
    marginBottom: SPACING.md,
    marginTop: SPACING.md,
  },
  subheading: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.medium as any,
    color: COLORS.neutral.text.primary,
    marginBottom: SPACING.md,
    marginTop: SPACING.md,
    },
  body: {
    fontSize: FONT_SIZES.md,
    color: COLORS.neutral.text.primary,
  },
});