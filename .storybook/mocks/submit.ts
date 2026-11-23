import { fn } from "storybook/test";

// Stand-in for src/actions/submit.ts in Storybook. Stories set what it resolves to.
export const submitApprenticeship = fn(async (formData: FormData) => {
  void formData;
  return {
    success: true,
    message: "Thanks! We opened an issue for this program.",
    url: "https://github.com/FrancesCoronel/apprenticeships/issues",
  } as { success: boolean; message: string; url?: string };
}).mockName("submitApprenticeship");
