/**
 * Turkish mobile numbers: accepts "05XX XXX XX XX", "5XXXXXXXXX",
 * "+90 5XX ..." etc. and normalises to "05XXXXXXXXX".
 */
export function normalizeTrMobile(input: string): string | null {
  let digits = input.replace(/\D/g, "")
  if (digits.startsWith("90") && digits.length === 12) digits = "0" + digits.slice(2)
  if (digits.startsWith("5") && digits.length === 10) digits = "0" + digits
  return /^05\d{9}$/.test(digits) ? digits : null
}

/** "05321234567" → "0532 123 45 67" */
export const formatTrMobile = (normalized: string) =>
  normalized.replace(/^(\d{4})(\d{3})(\d{2})(\d{2})$/, "$1 $2 $3 $4")
