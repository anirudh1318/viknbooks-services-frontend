/**
 * @file utils.ts
 * @description General purpose utility functions for the frontend, including
 * Tailwind class merging, cookie management, and local storage access.
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names and resolves Tailwind CSS conflicts.
 * Useful for building reusable React components with dynamic styles.
 *
 * @param {...ClassValue[]} inputs - An array of class values (strings, objects, conditionals, etc.).
 * @returns {string} The merged and conflict-resolved class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Retrieves the value of a cookie by its name.
 *
 * @param {string} name - The name of the cookie to retrieve.
 * @returns {string | null} The cookie's value, or null if not found.
 */
export const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() ?? null;
  return null;
};

/**
 * Checks if the provided VBID (ViknBooks ID) is structurally valid.
 * Currently, a valid VBID is defined simply as a non-empty string.
 *
 * @param {string | null} vbid - The VBID string to validate.
 * @returns {boolean} True if the VBID is valid, false otherwise.
 */
export const isValidVBID = (vbid: string | null): boolean => {
  return typeof vbid === "string" && vbid.trim().length > 0;
};

/**
 * Retrieves the authentication token from the document's cookies.
 *
 * @param {string} [cookieName] - The name of the token cookie. Defaults to the `VITE_COOKIE_NAME` environment variable.
 * @returns {string | null} The token string, or null if not found.
 */
export const getToken = (cookieName = process.env.NEXT_PUBLIC_COOKIE_NAME || "VBID") => {
  const match = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
  return match ? match[2] : null;
};

/**
 * Retrieves the active organization ID securely from local storage.
 *
 * @returns {string | null} The active organization ID, or null if not found or JSON parsing fails.
 */
export const getOrganizationId = (): string | null => {
  const raw = localStorage.getItem("organization");
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as {
      activeOrganization?: {
        id?: string | null;
      };
    };

    return parsed.activeOrganization?.id ?? null;
  } catch {
    // Fail silently on JSON parsing errors, returning null as if missing
    return null;
  }
};

