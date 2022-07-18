/**
 * Converts a string string that is a date to a displayable string.
 * @param dateString
 */
export const stringDateToDisplayableDate = (dateString: string): string => {
  const options = { year: "numeric", month: "long", day: "numeric" };

  return new Date(dateString).toLocaleDateString(undefined, options);
};
