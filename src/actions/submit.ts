"use server";

import { createGitHubIssue } from "@/lib/github";

interface SubmitResult {
  success: boolean;
  message: string;
  url?: string;
}

export async function submitApprenticeship(
  formData: FormData
): Promise<SubmitResult> {
  const title = formData.get("title") as string;
  const link = formData.get("link") as string;
  const locations = formData.get("locations") as string;
  const description = formData.get("description") as string;

  if (!title || !link) {
    return {
      success: false,
      message: "Name and link are required.",
    };
  }

  try {
    const issue = await createGitHubIssue({
      title,
      link,
      locations: locations || "",
      description: description || "",
    });

    return {
      success: true,
      message: "Apprenticeship submitted successfully! A GitHub issue has been created.",
      url: issue.html_url,
    };
  } catch (error) {
    console.error("Failed to create GitHub issue:", error);
    return {
      success: false,
      message: "Failed to submit. Please try again or create an issue directly on GitHub.",
    };
  }
}
