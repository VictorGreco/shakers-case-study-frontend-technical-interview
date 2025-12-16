/**
 * Formats an ISO-like timestamp string into "dd/mm/yyyy" format.
 * @param {string} isoString The timestamp string (e.g., "2025-08-12T14:32:50.737431").
 * @returns {string} The formatted date string (e.g., "12/08/2025") or "Invalid Date".
 */
export function formatDateToDDMMYYYY(isoString: string): string {
  // Create a Date object from the ISO string
  const date: Date = new Date(isoString);

  // Check for an invalid date
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  // Extract day, month, and year
  const day: number = date.getDate();
  // getMonth() returns 0-11, so we add 1
  const month: number = date.getMonth() + 1;
  const year: number = date.getFullYear();

  // Pad day and month with a leading zero if they are a single digit
  const formattedDay: string = String(day).padStart(2, '0');
  const formattedMonth: string = String(month).padStart(2, '0');

  // Combine into the desired format
  return `${formattedDay}/${formattedMonth}/${year}`;
}