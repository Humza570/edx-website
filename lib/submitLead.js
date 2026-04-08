const API_URL =
  process.env.NEXT_PUBLIC_LEADS_API_URL ||
  "http://edx-lms.test/api/leads/submit";

/**
 * Submit a lead to the EdX LMS API.
 *
 * @param {Object} data
 * @param {string}  data.name
 * @param {string}  data.email
 * @param {string}  data.phone
 * @param {string}  data.country_of_interest
 * @param {string}  data.program_of_interest
 * @param {string}  [data.message]        - optional
 * @param {string}  data._hp              - honeypot field (must be empty)
 *
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function submitLead(data) {
  // ── Honeypot check (client-side guard) ──────────────────────────────────
  if (data._hp && data._hp.trim() !== "") {
    // Silently pretend success so bots don't know they were caught
    return { success: true };
  }

  // ── Strip honeypot before sending ───────────────────────────────────────
  const { _hp, ...payload } = data;

  // Remove message key entirely if blank (optional field)
  if (!payload.message || payload.message.trim() === "") {
    delete payload.message;
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const json = await res.json();

    if (!res.ok) {
      // Laravel validation errors → res.status 422
      if (res.status === 422 && json.errors) {
        const firstError = Object.values(json.errors)[0]?.[0];
        return { success: false, message: firstError || "Validation failed." };
      }

      // Laravel rate limit → res.status 429
      if (res.status === 429) {
        return {
          success: false,
          message: "Too many requests. Please try again later.",
        };
      }

      return {
        success: false,
        message: json.message || "Something went wrong. Please try again.",
      };
    }

    return {
      success: true,
      message: json.message || "Submitted successfully.",
    };
  } catch (err) {
    console.error("[submitLead]", err);
    return {
      success: false,
      message: "Network error. Please check your connection.",
    };
  }
}
