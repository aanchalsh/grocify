import { StyleSheet, Text, TextProps } from "react-native";

type Props = TextProps & {
  type?: "title" | "link" | "default";
};

export function ThemedText({ type = "default", style, ...rest }: Props) {
  return (
    <Text
      style={[
        styles.default,
        type === "title" && styles.title,
        type === "link" && styles.link,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    color: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  link: {
    color: "#0a7ea4",
    fontWeight: "600",
  },
});