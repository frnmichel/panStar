export default function useStyles(styles: any) {
  const setClass = (className: string | string[]) => {
    if (!Array.isArray(className))
      return styles[className]
        ? `${styles[className]} ${className}`
        : className;

    return className
      .map((classItem) =>
        styles[classItem] ? `${styles[classItem]} ${classItem}` : classItem
      )
      .join(' ');
  };

  return { setClass };
}
