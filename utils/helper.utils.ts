/**
 * Converts a string string that is a date to a displayable string.
 * @param dateString
 */
export const stringDateToDisplayableDate = (dateString: string): string => {
  const options = { year: "numeric", month: "long", day: "numeric" };

  // @ts-ignore - Is valid
  return new Date(dateString).toLocaleDateString(undefined, options);
};
