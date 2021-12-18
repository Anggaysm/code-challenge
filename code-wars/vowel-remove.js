function shortcut(string) {
  return string.replace(/[aiueo]/g, "");
}

console.log(shortcut("hello"));
